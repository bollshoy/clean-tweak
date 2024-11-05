import React, {useRef} from 'react';

import './Overview.css'

const Overview = () => {
    const buttonRef = useRef(null);

    const handleDownload = () => {
        const fileUrl = import.meta.env.VITE_DOWNLOAD_LINK;
        const link = document.createElement('a');
        link.href = fileUrl;
        link.setAttribute('download', 'RECLEANER.exe');
        document.body.appendChild(link);
        link.click();
        link.remove();
    };

    return (
        <section className="overview">
            <div className="overview__container">
                <div className="overview__content">
                    <h5 className="overview__title">Recleaner</h5>
                    <button className="overview__btn" onClick={handleDownload} ref={buttonRef}>
                        скачать
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Overview;