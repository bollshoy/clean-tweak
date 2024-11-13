import React, {useState, useEffect, useRef} from 'react';

const Typewriter = ({text, speed = 50, onTextUpdate}) => {
    const [displayText, setDisplayText] = useState('');
    const i = useRef(0);

    useEffect(() => {
        setDisplayText('');
        i.current = 0;

        const typingInterval = setInterval(() => {
            if (i.current < text.length) {
                setDisplayText(prevText => prevText + text.charAt(i.current));
                i.current++;
            } else {
                clearInterval(typingInterval);
            }
        }, speed);

        return () => {
            clearInterval(typingInterval);
        };
    }, [text, speed]);

    useEffect(() => {
        onTextUpdate(displayText);
    }, [displayText, onTextUpdate]);

    return (
        <div>

        </div>
    );
};

export default Typewriter;
