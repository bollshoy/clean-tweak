import React from 'react';
import WidgetBotEmbed from "@widgetbot/react-embed";

import './WidgetBot.css'

const WidgetBot = () => {

    return (
        <div className="widgetBot">
            <h2 className="widgetBot__title">Отзывы с нашего Discord</h2>
            <WidgetBotEmbed
                className={'WidgetBotEmbed'}
                server='421999118307688448'
                channel='1264913785227841659'
            />
        </div>
    );
};

export default WidgetBot;
