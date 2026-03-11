import React, { useLayoutEffect, useRef, useCallback, useEffect } from 'react';
import Lenis from 'lenis';

export const ScrollStackItem = ({ children, itemClassName = '' }) => (
  <div
    className={`scroll-stack-card relative w-full my-8 origin-top will-change-transform ${itemClassName}`.trim()}
    style={{
      backfaceVisibility: 'hidden',
      transformStyle: 'preserve-3d',
      willChange: 'transform, opacity'
    }}
  >
    {children}
  </div>
);

const ScrollStack = ({
  children,
  className = '',
  itemDistance = 100,
  itemScale = 0.05,
  itemStackDistance = 20,
  stackPosition = '15%',
  scaleEndPosition = '5%',
  baseScale = 0.9,
  rotationAmount = 0,
  blurAmount = 0,
  useWindowScroll = false,
  onStackComplete
}) => {
  const scrollerRef = useRef(null);
  const stackCompletedRef = useRef(false);
  const animationFrameRef = useRef(null);
  const lenisRef = useRef(null);
  const cardsRef = useRef([]);
  const lastTransformsRef = useRef(new Map());
  const isUpdatingRef = useRef(false);
  
  // Performance caching
  const layoutCacheRef = useRef({
    cards: [],
    endElementTop: 0,
    containerHeight: 0,
    stackPositionPx: 0,
    scaleEndPositionPx: 0
  });

  const getElementOffset = useCallback(
    (element) => {
      if (useWindowScroll) {
        const rect = element.getBoundingClientRect();
        return rect.top + window.scrollY;
      } else {
        return element.offsetTop;
      }
    },
    [useWindowScroll]
  );

  const measureLayout = useCallback(() => {
    const containerHeight = useWindowScroll ? window.innerHeight : (scrollerRef.current?.clientHeight || 0);
    const stackPosPx = (parseFloat(stackPosition) / 100) * containerHeight;
    const scaleEndPosPx = (parseFloat(scaleEndPosition) / 100) * containerHeight;

    const cards = Array.from(
      useWindowScroll
        ? document.querySelectorAll('.scroll-stack-card')
        : (scrollerRef.current?.querySelectorAll('.scroll-stack-card') ?? [])
    );
    
    const endElement = useWindowScroll
      ? document.querySelector('.scroll-stack-end')
      : scrollerRef.current?.querySelector('.scroll-stack-end');

    layoutCacheRef.current = {
      containerHeight,
      stackPositionPx: stackPosPx,
      scaleEndPositionPx: scaleEndPosPx,
      endElementTop: endElement ? getElementOffset(endElement) : 0,
      cards: cards.map(card => ({
        element: card,
        top: getElementOffset(card)
      }))
    };
    
    cardsRef.current = cards;
  }, [stackPosition, scaleEndPosition, useWindowScroll, getElementOffset]);

  const calculateProgress = useCallback((scrollTop, start, end) => {
    if (scrollTop < start) return 0;
    if (scrollTop > end) return 1;
    return (scrollTop - start) / (end - start);
  }, []);

  const updateCardTransforms = useCallback(() => {
    if (isUpdatingRef.current) return;
    const { cards, endElementTop, containerHeight, stackPositionPx, scaleEndPositionPx } = layoutCacheRef.current;
    if (!cards.length) return;

    isUpdatingRef.current = true;

    const scrollTop = useWindowScroll ? window.scrollY : (scrollerRef.current?.scrollTop || 0);

    cards.forEach((cardData, i) => {
      const { element: card, top: cardTop } = cardData;
      if (!card) return;

      const triggerStart = cardTop - stackPositionPx - itemStackDistance * i;
      const triggerEnd = cardTop - scaleEndPositionPx;
      const pinStart = cardTop - stackPositionPx - itemStackDistance * i;
      const pinEnd = endElementTop - containerHeight / 2;

      const scaleProgress = calculateProgress(scrollTop, triggerStart, triggerEnd);
      const targetScale = Math.min(baseScale + i * itemScale, 1);
      const scale = 1 - scaleProgress * (1 - targetScale);
      const rotation = rotationAmount ? i * rotationAmount * scaleProgress : 0;

      let blur = 0;
      if (blurAmount) {
        let topCardIndex = 0;
        for (let j = 0; j < cards.length; j++) {
            const jCardTop = cards[j].top;
            const jTriggerStart = jCardTop - stackPositionPx - itemStackDistance * j;
            if (scrollTop >= jTriggerStart) {
                topCardIndex = j;
            } else {
                break; // Optimization: Cards are ordered
            }
        }

        if (i < topCardIndex) {
          const depthInStack = topCardIndex - i;
          blur = Math.max(0, depthInStack * blurAmount);
        }
      }

      let translateY = 0;
      const isPinned = scrollTop >= pinStart && scrollTop <= pinEnd;

      if (isPinned) {
        translateY = scrollTop - cardTop + stackPositionPx + itemStackDistance * i;
      } else if (scrollTop > pinEnd) {
        translateY = pinEnd - cardTop + stackPositionPx + itemStackDistance * i;
      }

      // Optimization: Only update DOM if values changed significantly
      const lastTransform = lastTransformsRef.current.get(i);
      const roundedY = Math.round(translateY * 10) / 10;
      const roundedScale = Math.round(scale * 1000) / 1000;
      
      if (!lastTransform || 
          Math.abs(lastTransform.y - roundedY) > 0.1 || 
          Math.abs(lastTransform.s - roundedScale) > 0.001 ||
          lastTransform.b !== blur) {
        
        card.style.transform = `translate3d(0, ${roundedY}px, 0) scale(${roundedScale}) rotate(${rotation}deg)`;
        if (blurAmount) card.style.filter = blur > 0 ? `blur(${blur}px)` : '';
        
        lastTransformsRef.current.set(i, { y: roundedY, s: roundedScale, b: blur });
      }

      if (i === cards.length - 1) {
        const isInView = scrollTop >= pinStart && scrollTop <= pinEnd;
        if (isInView && !stackCompletedRef.current) {
          stackCompletedRef.current = true;
          onStackComplete?.();
        } else if (!isInView && stackCompletedRef.current) {
          stackCompletedRef.current = false;
        }
      }
    });

    isUpdatingRef.current = false;
  }, [
    itemScale,
    itemStackDistance,
    baseScale,
    rotationAmount,
    blurAmount,
    useWindowScroll,
    onStackComplete,
    calculateProgress
  ]);

  const handleScroll = useCallback(() => {
    updateCardTransforms();
  }, [updateCardTransforms]);

  const setupLenis = useCallback(() => {
    const config = {
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.5,
      infinite: false,
      wheelMultiplier: 1,
      lerp: 0.1,
      syncTouch: true,
      syncTouchLerp: 0.075
    };

    if (!useWindowScroll) {
      config.wrapper = scrollerRef.current;
      config.content = scrollerRef.current.querySelector('.scroll-stack-inner');
      config.gestureOrientation = 'vertical';
    }

    const lenis = new Lenis(config);
    lenis.on('scroll', handleScroll);

    const raf = (time) => {
      lenis.raf(time);
      animationFrameRef.current = requestAnimationFrame(raf);
    };
    animationFrameRef.current = requestAnimationFrame(raf);

    lenisRef.current = lenis;
    return lenis;
  }, [handleScroll, useWindowScroll]);

  useLayoutEffect(() => {
    if (!useWindowScroll && !scrollerRef.current) return;

    // Initial measurement
    const timeoutId = setTimeout(() => {
        measureLayout();
        updateCardTransforms();
    }, 100);

    const handleResize = () => {
        measureLayout();
        updateCardTransforms();
    };

    window.addEventListener('resize', handleResize);
    setupLenis();

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('resize', handleResize);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      if (lenisRef.current) {
        lenisRef.current.destroy();
      }
      stackCompletedRef.current = false;
      cardsRef.current = [];
      lastTransformsRef.current.clear();
      isUpdatingRef.current = false;
    };
  }, [
    itemDistance,
    itemScale,
    itemStackDistance,
    stackPosition,
    scaleEndPosition,
    baseScale,
    blurAmount,
    rotationAmount,
    useWindowScroll,
    onStackComplete,
    setupLenis,
    measureLayout,
    updateCardTransforms
  ]);

  // Handle dynamic children changes
  useEffect(() => {
      measureLayout();
  }, [children, measureLayout]);

  return (
    <div
      className={`scroll-stack-container relative w-full ${useWindowScroll ? '' : 'h-full overflow-y-auto'} overflow-x-hidden ${className}`.trim()}
      ref={scrollerRef}
      style={{
        overscrollBehavior: 'contain',
        WebkitOverflowScrolling: 'touch',
        scrollBehavior: 'smooth',
        transform: 'translateZ(0)',
        willChange: 'scroll-position',
        scrollbarWidth: 'none',
        msOverflowStyle: 'none'
      }}
    >
      <style>{`
        .scroll-stack-container::-webkit-scrollbar {
          display: none;
        }
      `}</style>
      <div className={`scroll-stack-inner ${useWindowScroll ? '' : 'pt-4 px-4 pb-[20vh] min-h-screen'}`}>
        {children}
        <div className="scroll-stack-end w-full h-px" />
      </div>
    </div>
  );
};

export default ScrollStack;
