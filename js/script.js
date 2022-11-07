new Swiper('.products-swiper',{
    navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	},

    	// Включение/отключение
	// перетаскивания на ПК
	simulateTouch: true,
	// Чувствительность свайпа
	touchRatio: 1,
	// Угол срабатывания свайпа/перетаскивания
	touchAngle: 30,
	// Курсор перетаскивания
	grabCursor: true,

    // Переключение при клике на слайд
	slideToClickedSlide: false,

    // Количество слайдов для показа
	slidesPerView: 7,

    // Количество пролистываемых слайдов
	slidesPerGroup: 1,

    // Отступ между слайдами
	spaceBetween: 20,

    // Бесконечный слайдер
	loop: true,

    // Скорость
	speed: 400,

    // Брейк поинты (адаптив)
	// Ширина экрана
	breakpoints: {
        0: {
			slidesPerView: 1,
		},
        320: {
			slidesPerView: 1,
		},
		420: {
			slidesPerView: 2,
		},
        580: {
			slidesPerView: 3,
		},
		780: {
			slidesPerView: 5,
		},
		1080: {
			slidesPerView: 7,
		}
	},
});