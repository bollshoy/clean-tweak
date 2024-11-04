import systemSettings from '@/assets/images/systemSettings.png';
import overclocling from '@/assets/images/overclocking.png';
import standart from '@/assets/images/standart.png';
import ultimate from '@/assets/images/ultimate.png';
import systemSettingsIcon from '@/assets/icons/systemSettings.svg';
import overcloclingIcon from '@/assets/icons/overclocking.svg';
import standartIcon from '@/assets/icons/standart.svg';
import ultimateIcon from '@/assets/icons/ultimate.svg';

export const TabData = [
    {
        id: 1,
        title: 'Базовая оптимизация',
        content: [
            `
					1. Переустановка Windows с использованием официального образа\n
					2. Активация Windows и установка программного обеспечения\n
					3. Настройка монитора и гарантия производительности\n
					4. Установка всех необходимых драйверов\n
					5. Глубокая настройка Windows
				`
        ],
        description: `
			Из эффектов - Повышается FPS, понижаются системные задержки.
			Картинка становится плавнее в разы в играх и на рабочем столе, мышь
			ощущается резче, также улучшается регистрация пуль. Работа производится через
			Anydesk. Возможен выезд в пределах МКАД (цена может отличаться).
		`,
        priceRUB: '2000 RUB',
        priceEU: '30 EU',
    },
    {
        id: 2,
        title: 'Ultimate оптимизация',
        content: [
            `
					1. Переустановка & Полноценная Настройка Windows\n
					2. Разгон + Понижение таймингов ОЗУ\n
					3. Настройка Роутера, Интернета\n
					4. Разгон / Андервольтинг CPU\n
					5. Разгон / Андервольтинг GPU\n
					6. Прошивка & Настройка Bios
				`
        ],
        description: `
			Из эффектов - Повышается FPS, понижаются системные задержки.
			Картинка становится плавнее в разы в играх и на рабочем столе, мышь
			ощущается резче, также улучшается регистрация пуль. Работа производится через
			Anydesk. Возможен выезд в пределах МКАД (цена может отличаться).
			Плюсом ко всему вы получаете бесплатные дальнейшие консультации по апгрейду.
		`,
        priceRUB: '8000 RUB',
        priceEU: '100 EU',
    },

    {
        id: 3,
        title: 'Настройка устройств',
        content: [
            `
					1. Оптимизация BufferBloat и детальная проверка звука.\n
					2. Установка правильных драйверов и настройка звука.\n
					3. Настройка DNS серверов для улучшения соединения.\n
					4. Индивидуальный подбор параметров сети и звука.\n
					5. Настройка параметров адаптера и микрофона.
				`
        ],
        description: `
			Мы проведем комплексную настройку вашего интернета 
			и звука, улучшим скорость, стабильность и качество 
			звучания. От базовой оптимизации до продвинутых 
			настроек — все для того, чтобы ваши устройства 
			работали на максимуме возможностей. Доверьтесь 
			нам, и вы ощутите разницу!
		`,
        priceRUB: '2500 RUB',
        priceEU: '35 EU',
    },
    {
        id: 4,
        title: 'Разгон системы',
        content: [
            `
					1. Обеспечение оптимальной производительности\n
					2. Индивидуальная настройка и поддержка 24/7\n
					3. Оптимизация игрового процесса\n
					4. Гарантия стабильности системы\n
					5. Профессиональный подход
				`
        ],
        description: `
			Разгон процессора и видеокарты – это эффективный способ
			улучшить производительность вашего компьютера и повысить
			качество работы и игр. Доверьтесь профессионалам, чтобы извлечь максимум
			из вашего оборудования, и наслаждайтесь его новыми возможностями!
		`,
        priceRUB: '2000-4500 RUB',
        priceEU: '50 EU',
    },

];

export const TabImg = [
    {id: 1, images: standart},
    {id: 2, images: ultimate},
    {id: 3, images: systemSettings},
    {id: 4, images: overclocling},
];

export const TabIcon = [
    {id: 1, images: standartIcon},
    {id: 2, images: ultimateIcon},
    {id: 3, images: systemSettingsIcon},
    {id: 4, images: overcloclingIcon},
]

export default TabData;