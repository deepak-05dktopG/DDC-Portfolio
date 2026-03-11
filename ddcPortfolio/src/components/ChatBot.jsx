import { useEffect } from 'react';
import '@n8n/chat/style.css';
import { createChat } from '@n8n/chat';

export const App = () => {
    useEffect(() => {
        createChat({
            webhookUrl: 'YOUR_PRODUCTION_WEBHOOK_URL'
        });
    }, []);

    return (<div></div>);
};