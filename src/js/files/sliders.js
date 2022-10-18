/*
Документация по работе в шаблоне: 
Документация слайдера: https://swiperjs.com/
Сниппет(HTML): swiper
*/

// Подключаем слайдер Swiper из node_modules
// При необходимости подключаем дополнительные модули слайдера, указывая их в {} через запятую
// Пример: { Navigation, Autoplay }
import Swiper, { Pagination } from "swiper";
/*
Основниые модули слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Подробнее смотри https://swiperjs.com/
*/

// Стили Swiper
// Базовые стили
import "../../scss/base/swiper.scss";
// Полный набор стилей из scss/libs/swiper.scss
// import "../../scss/libs/swiper.scss";
// Полный набор стилей из node_modules
// import 'swiper/css';

// Инициализация слайдеров
function initSliders() {
    // Перечень слайдеров
    // Проверяем, есть ли слайдер на стронице
    if (document.querySelector(".slider__swiper")) {
        // Указываем скласс нужного слайдера
        // Создаем слайдер
        new Swiper(".slider__swiper", {
            // Указываем скласс нужного слайдера
            // Подключаем модули слайдера
            // для конкретного случая
            modules: [Pagination],
            observer: true,
            observeParents: true,
            slidesPerView: 1,
            spaceBetween: 0,
            autoHeight: false,
            speed: 800,
            grabCursor: true,
            // Пагинация
            pagination: {
                el: ".swiper-pagination",

                // Буллеты
                type: "bullets",
                clickable: true,
            },
        });
    }

    let slider_about = new Swiper(".slider__body", {
        // Эффекты переключения слайдов.
        // Листание
        effect: "slide",

        // Arrows
        navigation: {
            nextEl: ".more__item_next",
            prevEl: ".more__item_prev",
        },

        observer: true,
        observeParents: true,
        // Количество слайдов для показа
        slidesPerView: 1,
        // Отступ между слайдами
        spaceBetween: 0,
        // Автовысота
        autoHeight: false,
        // Отключение функционала
        // если слайдов меньше чем нужно
        watchOverflow: true,
        adaptiveHeight: true,

        pagination: {
            el: ".swiper-pagination",

            // Буллеты
            type: "bullets",
            clickable: true,
        },

        // Включение/отключение
        // перетаскивания на ПК
        simulateTouch: true,
        // Чувствительность свайпа
        touchRatio: 1,

        // Угол срабатывания свайпа/перетаскивания
        touchAngle: 45,
        // Курсор перетаскивания
        grabCursor: true,
        // Переключение при клике на слайд
        slideToClickedSlide: false,

        // Навигация по хешу
        hashNavigation: {
            // Отслеживать состояние
            watchState: true,
        },

        // Управление клавиатурой
        keyboard: {
            // Включить\выключить
            enabled: true,
            // Включить\выключить
            // только когда слайдер
            // в пределах вьюпорта
            onlyInViewport: true,
            // Включить\выключить
            // управление клавишами
            // pageUp, pageDown
            pageUpDown: true,
        },
        // Количество пролистываемых слайдов
        slidesPerGroup: 1,

        // Активный слайд по центру
        centeredSlides: false,

        // Стартовый слайд.
        initialSlide: 0,

        // Мультирядность
        slidesPerColumn: 1,

        // Бесконечный слайдер
        loop: false,

        // Кол-во дублирующих слайдов
        loopedSlides: 0,

        // Свободный режим
        freeMode: false,

        speed: 800,

        // Вертикальный слайдер
        direction: "horizontal", //'vertical'

        // Отключить предзагрузка картинок
        preloadImages: false,
        // Lazy Loading
        // (подгрузка картинок)

        lazy: {
            // Подгружать на старте
            // переключения слайда
            loadOnTransitionStart: false,

            // Подгрузить предыдущую
            // и следующую картинки
            loadPrevNext: false,
        },

        // Слежка за видимыми слайдами
        watchSlidesProgress: false,

        // Добавление класса видимым слайдам
        watchSlidesVisibility: false,
        on: {
            lazyImageReady: function () {
                ibg();
            },
        },
    });
}

window.addEventListener("load", function (e) {
    initSliders();
});
