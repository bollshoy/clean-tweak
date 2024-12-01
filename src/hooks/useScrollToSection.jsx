import { useRef } from 'react';

const useScrollToSection = () => {
    const refs = {
        tabs: useRef(null),
        recleaner: useRef(null),
        form: useRef(null),
    };

    const scrollToSection = (section) => {
        const targetRef = refs[section];

        if (targetRef?.current) {
            const offset = 70;
            const targetPosition = Math.max(0, targetRef.current.offsetTop - offset);

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth',
            });
        }
    };

    return { refs, scrollToSection };
};

export default useScrollToSection;
