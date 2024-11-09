import React from 'react';
import WidgetBotEmbed from "@widgetbot/react-embed";

import './WidgetBot.css'

const WidgetBot = () => {
    const serverId = import.meta.env.VITE_SERVER_ID;
    const serverChannel = import.meta.env.VITE_CHANNEL_ID;

    return (
        <div className="widgetBot">
            <h2 className="widgetBot__title">Отзывы с нашего Discord</h2>
            <WidgetBotEmbed
                className={'WidgetBotEmbed'}
                server={serverId}
                channel={serverChannel}
            />
        </div>
    );
};

export default WidgetBot;
