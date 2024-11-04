import { useState, useCallback, useMemo } from 'react';
import TabData from '@/Data/tab.js';

const useTabs = () => {
    const [activeTab, setActiveTab] = useState(0);
    const [currency, setCurrency] = useState('RUB');

    const price = useMemo(() => ({
        RUB: TabData[activeTab].priceRUB,
        EUR: TabData[activeTab].priceEU,
    }), [activeTab]);

    const handleToggleCurrency = useCallback(() => {
        setCurrency((prevCurrency) => (prevCurrency === 'RUB' ? 'EUR' : 'RUB'));
    }, []);

    return {
        activeTab,
        setActiveTab,
        currency,
        price,
        handleToggleCurrency,
    };
};

export default useTabs;
