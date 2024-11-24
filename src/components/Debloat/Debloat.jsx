import React from 'react';
import './Debloat.css';
import debloat from "@/data/debloat.js";

const copyAllToClipboard = () => {
    const allCommands = debloat.map(item => item.description).join('\n');

    navigator.clipboard.writeText(allCommands).then(() => {
        alert('Все команды скопированы в буфер обмена!');
    }).catch(err => {
        alert('Ошибка при копировании: ' + err);
    });
};

const Debloat = () => {
    return (
        <section className="debloat">
            <div className="debloat__container">
                <h5 className="debloat__title">♻️Деблоат</h5>
                <p className="debloat__text">
                    Удаление нежелательных предустановленных приложений и служб - это процесс, который некоторые
                    пользователи выполняют для оптимизации работы системы и уменьшения ее общего объема. Однако к этому
                    процессу следует подходить осторожно, так как удаление некоторых компонентов может повлиять на
                    стабильность и функциональность операционной системы. Прежде чем продолжить этот процесс, убедитесь,
                    что вы понимаете возможные риски и что у вас есть резервная копия важных данных.
                </p>
                <p className="debloat__text">
                    Если вы хотите полностью удалите все MS приложение, то следуйте этой инструкции:
                </p>
                <div className="debloat__docs">
                    <ol className="debloat__docs--list">
                        <li className="debloat__docs--item">
                            Нажмите ПКМ по пустому месту робочего стола
                        </li>
                        <li className="debloat__docs--item">
                            Выберите: Создать ➡️ Текстовый документ
                        </li>
                        <li className="debloat__docs--item">
                            Скопируйте команды ниже нажав на кнопку⬇️
                        </li>
                        <li className="debloat__docs--item">
                            Вставьте комманды в текстовый файл(Ctrl+V)
                        </li>
                        <li className="debloat__docs--item">
                            Сохраните файл с расширением <span>.bat</span>
                        </li>
                        <li className="debloat__docs--item">
                            Запустите файл от именни администратора и <br/>
                            и дождитесь окончание выполнение всех команд
                        </li>
                    </ol>
                    <ul className="debloat__list">
                        {debloat.map((item) => (
                            <li style={{display: 'none'}} className="debloat__item" key={item.id}>
                                {item.description}
                            </li>
                        ))}
                    </ul>

                    <button
                        className="debloat__btn"
                        onClick={copyAllToClipboard}>
                        Копировать команды
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Debloat;
