import React from 'react';
import update from '@/assets/images/updateWindows.webp'
import download from '@/assets/icons/download.webp';
import updLogo from '@/assets/icons/updateLogo.svg';
import './Windows.css';
import useDownload from "@/hooks/useDownload.jsx";

const Windows = () => {
	const fileUrl = import.meta.env.VITE_DOWNLOAD_WINDOWS;
	const downloadFile = useDownload(fileUrl, "Windows11_24H2");
	
	return (
			<section className="windows">
				<div className="windows__container container">
					<h3 className="windows__title">
						🧹Установите чистую Windows
					</h3>
					<span className="windows__text">
						Установка чистой ОС - это самый главный шаг в нашей настройке.
					</span>
					<p className="windows__text">
						Рекомендуется ставить Windows 11.
					</p>
					<button
							className="windows__download windows__download--link"
							onClick={downloadFile}
					   >
						<img src={download} alt="download icon" className="windows__download--img" loading="lazy"/>
						<span>Windows 11</span>
					</button>
					<div className="content__update">
						<div className="content__title--content">
							<img src={updLogo} alt="update icon" className="content__title--img" loading="lazy"/>
							<span className="content__title">Обновление</span>
						</div>
						<p className="content__text">
							После установки Windows мы рекомендуем установить последние
							Обновления <br/>
							Windows, чтобы избежать проблем с компонентами.
						</p>
						<div className="windows__list">
							<ol className={'content__list'}>
								<li className="content__item">
									Пуск
								</li>
								<li className="content__item">
									Параметры
								</li>
								<li className="content__item">
									Центр обновления Windows
								</li>
								<li className="content__item">
									Скачайте и установите все обновления, а после перезагрузитесь
								</li>
							</ol>
						</div>
						<div className="content__img">
							<img src={update} alt="update" className="content__img" loading="lazy"/>
						</div>
					</div>
				</div>
			</section>
	);
};

export default Windows;