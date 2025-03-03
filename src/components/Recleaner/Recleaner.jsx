import React, { useCallback, useRef, useState } from "react";
import recleaner from "@/data/recleaner.js";
import useDownload from "@/hooks/useDownload.jsx";
import video from "@/assets/video/recleanerVideo.mp4";
import open from "@/assets/icons/open.png";
import download from "@/assets/icons/download.png";
import { motion, AnimatePresence } from "framer-motion";
import "./Recleaner.css";

const Recleaner = () => {
	const buttonRef = useRef(null);
	const fileUrl = import.meta.env.VITE_DOWNLOAD_LINK;
	const downloadFile = useDownload(fileUrl, "Recleaner");
	const [openModal, setOpenModal] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	
	const animationDownload = () => {
		setIsLoading(true);
		downloadFile();
		setTimeout(() => {
			setIsLoading(false);
		}, 3000);
	};
	
	const toggleModal = useCallback(() => {
		setOpenModal((prev) => !prev);
	}, []);
	
	const closeModalOnBackdropClick = (e) => {
		if (e.target.classList.contains("recleaner__modal")) {
			toggleModal();
		}
	};
	
	return (
			<>
				<section className="recleaner">
					<div className="recleaner__container container">
						<video className="recleaner__video" autoPlay loop muted playsInline>
							<source src={video} type="video/mp4" />
						</video>
						<div className="recleaner__content">
							<div className="recleaner__content-content">
              <span className="recleaner__author">
                Авторы: <span>Jozeph</span>, <span>Clean_OK</span>, <span>Arov</span>
              </span>
								<h6 className="recleaner__title">
									Проект RECLEANER <br /> — <span>OPEN BETA!</span>
								</h6>
								<p className="recleaner__content--text">
									Попробуйте нашу утилиту для настройки системы. <br />
									С обширным функционалом, при этом не ломая систему. <br />
									Программа абсолютно бесплатная, скачать может любой <br />
									желающий.
								</p>
								<div className="recleaner__btn-content">
									<button
											className={`recleaner__content--btn ${isLoading ? "loading" : ""}`}
											onClick={animationDownload}
											ref={buttonRef}
											disabled={isLoading}
									>
                  <span className="recleaner__btn--item">
                    {isLoading ? "Загрузка..." : "Скачать"}
                  </span>
										<img src={download} alt="Download icon" className="recleaner__btn--icon" />
										<div className="progress"></div>
									</button>
									
									<button className="recleaner__open" onClick={toggleModal}>
										<span className="recleaner__open--item">FAQ</span>
										<img src={open} alt="" className="recleaner__open--icon" />
									</button>
								</div>
							</div>
							<div className="recleaner__social">
								{recleaner.map((item) => (
										<div className="recleaner__item" key={item.id}>
											<a href={item.href} target="_blank" rel="noopener noreferrer" className="recleaner__item--link">
												<img src={item.src} alt="" className="recleaner__item--img" />
											</a>
										</div>
								))}
							</div>
						</div>
					</div>
				</section>
				
				{/* Модальное окно */}
				<AnimatePresence>
					{openModal && (
							<motion.div
									className="recleaner__modal"
									onClick={closeModalOnBackdropClick}
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									exit={{ opacity: 0 }}
							>
								<motion.div
										className="recleaner__modal-content"
										initial={{ rotateY: -90, opacity: 0, transformOrigin: "left center", perspective: 1000 }}
										animate={{ rotateY: 0, opacity: 1 }}
										exit={{ rotateY: -90, opacity: 0 }}
										transition={{ duration: 0.3, ease: "easeInOut" }}
								>
									<button className="recleaner__modal-close" onClick={toggleModal}>✖</button>
									<span className="recleaner__modal-title">
      О проекте <span>Recleaner</span> и пользовательское соглашение
    </span>
									<p className="recleaner__modal-text">
										Данная версия является <span>БЕТОЙ</span>, возможны небольшие баги/ошибки.
									</p>
									<p className="recleaner__modal-text">
										Программа не работает на Windows <span>7/8/8.1</span>, поддержка только актуальных версий систем,
										Windows <span>10</span> и Windows <span>11</span>. Отчеты об ошибках на старых системах также не учитываются.
									</p>
									<p className="recleaner__modal-text">
										Перед тем как что-либо сделать, пожалуйста, читайте описания в программе.
									</p>
									<p className="recleaner__modal-text">
										Программа на данный момент является <span>абсолютно бесплатной</span>, скачать может <span>любой желающий</span>.
										Если кто-то предлагает её купить, сообщите нам подробности.
									</p>
									<p className="recleaner__modal-text">
										Перед использованием и на время использования программы временно отключите Windows Defender,
										иначе он не даст ничего сделать.
									</p>
									<p className="recleaner__modal-text">
										Мы разработчики <span>не несём ответственности</span> за ваши действия. Перед тем как что-либо сделать,
										пожалуйста, <span>ЧИТАЙТЕ ТЕКСТ</span> и <span>включайте МОЗГ</span>. Мы лишь предоставляем готовый функционал,
										применять что-либо или нет — выбор всегда <span>только за вами</span>.
									</p>
									<p className="recleaner__modal-text">
										Мы тестируем данную программу на дефолт <span>Windows 10 22h2</span> и
										<span> Windows 11 23h2/24h2</span> и добиваемся того, чтобы на дефолтной системе она работала стабильно.
										Но у всех разные системы, и не факт, что <span>у вас программа будет работать стабильно</span>. Учтите это.
									</p>
									<div className="recleaner__social">
										{recleaner.map((item) => (
												<div className="recleaner__item" key={item.id}>
													<a href={item.href} target="_blank" rel="noopener noreferrer" className="recleaner__item--link">
														<img src={item.src} alt="" className="recleaner__item--img" />
													</a>
												</div>
										))}
									</div>
								</motion.div>
							</motion.div>
					)}
				</AnimatePresence>
			</>
	);
};

export default Recleaner;
