import React, { useEffect, useState } from 'react';

const VisitorCounter = () => {
    const [count, setCount] = useState(null);

    useEffect(() => {

        // Visitor counting logic
        const trackVisit = async () => {
            const namespace = 'ddc-portfolio';
            const key = 'visits';

            // Check if this user has already been counted
            const hasVisited = localStorage.getItem('visited_ddc_portfolio');

            try {
                let response;
                if (!hasVisited) {
                    // New visitor: hit the API to increment
                    // counterapi.dev endpoint for incrementing
                    response = await fetch(`https://api.counterapi.dev/v1/${namespace}/${key}/up`);
                    localStorage.setItem('visited_ddc_portfolio', 'true');
                } else {
                    // Returning visitor: just get the current count
                    response = await fetch(`https://api.counterapi.dev/v1/${namespace}/${key}`);
                }

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const data = await response.json();
                // counterapi.dev returns { count: number }
                setCount(data.count);
            } catch (error) {
                console.error('Error fetching visitor count:', error);
            }
        };

        trackVisit();
    }, []);

    if (count === null) return null;

    return (
        <div
            style={{
                position: 'absolute',
                bottom: '5px',
                right: '5px',
                fontSize: '10px',
                color: 'rgba(255, 255, 255, 0.3)',
                fontFamily: 'monospace',
                pointerEvents: 'none',
                userSelect: 'none'
            }}
        >
            Visits: {count}
        </div>
    );
};

export default VisitorCounter;
