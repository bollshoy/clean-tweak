import React from 'react';
import TabData, {TabIcon, TabImg} from '@/Data/tab.js';

import useTabs from '@/hooks/useTabs.jsx';

import './Tab.css'

const Tab = () => {
    const {activeTab, setActiveTab, currency, price, handleToggleCurrency} = useTabs();

    return (
        <section className='tabs' id={'tab'}>
            <span className="tabs__subtitle">optimization pc</span>
            <h2 className="tabs__title">Настройка вашего<br/> <span>ПК</span></h2>
            <p className="tabs__text">
                После создания тысяч компьютеров и довольных клиентов мы знаем, как <br/>
                добиться производительности вашей системы. Не нужно тратить десятки <br/>
                часов на поиск в Интернете устаревших и непроверенных методов. <br/>
                Доверьте работу профессионалам.
            </p>
            <div className="tabs__container">
                <div className="tabs__content-btn">
                    {TabData.map((tab, index) => (
                        <div key={index} className="tabs__btn-content">
                            <button
                                className={`tabs__btn ${activeTab === index ? 'active' : ''}`}
                                onClick={() => setActiveTab(index)}>
                                <img src={TabIcon[index].images} alt="" className="tabs__btn-img"/>
                                {tab.title}
                            </button>
                        </div>
                    ))}
                </div>
                <div className="tabs__content">
                    {TabData[activeTab] && (
                        <div className='tabs__content-item'>
                            <div className="tabs__content-content">
                                <span className="tabs__content-title">{TabData[activeTab].title}</span>
                                {TabData[activeTab].content.map((text, index) => (
                                    <p key={index} className="tabs__content-text"
                                       dangerouslySetInnerHTML={{__html: text.replace(/\n/g, '<br/>')}}/>
                                ))}
                                <div className="tab__price">
                                    <div className="currency-toggle">
                                        <input
                                            type="checkbox"
                                            id="currency-switch"
                                            checked={currency === 'EUR'}
                                            onChange={handleToggleCurrency}
                                        />
                                        <label htmlFor="currency-switch">Toggle Currency</label>
                                    </div>
                                    <p className="price__text">{price[currency]}</p>
                                </div>
                                <p className="tabs__content-text"
                                   dangerouslySetInnerHTML={{__html: TabData[activeTab].description.replace(/\n/g, '<br/>')}}/>
                            </div>
                            <div className="tabs__content-img">
                                <img src={TabImg[activeTab].images} alt="img"/>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Tab;
