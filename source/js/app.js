
//   'use strict';

// var elems = document.querySelectorAll('li.faq__item');

//  for (var item = 0; item < elems.length; item++) {
//  	elems[item].addEventListener('click', function(event) {
//  event.target.firstElementChild.classList.toggle('faq__desc_active');		
 
//  	});
//  }

// })();

// 
// $(document).ready(function() {
// 	$('.faq__list').on('click', '.faq__item', function() {
// 		$(this).children().slideToggle();
// 	});

// 	$('.team__nav-list').on('click', '.team__nav-item.toni', function(){
// 	$('.member__list_active').removeClass('member__list_active');
//   	$(this).parents().find('.toni').addClass('member__list_active').removeClass('member__item');
//   	$(this).parents().find('ul.richard').addClass('member__item');
//   	$(this).parents().find('ul.mity').addClass('member__item');
  	

// });
// 	$('.team__nav-list').on('click', '.team__nav-item.richard', function(){

// 	$('.member__list_active').removeClass('member__list_active');
//   	$(this).parents().find('.richard').addClass('member__list_active').removeClass('member__item');
//    	$(this).parents().find('ul.toni').addClass('member__item');
//    	$(this).parents().find('ul.mity').addClass('member__item');
  	

// });
// 	$('.team__nav-list').on('click', '.team__nav-item.mity', function(){
// 	$('.member__list_active').removeClass('member__list_active');
//   	$(this).parents().find('.mity').addClass('member__list_active').removeClass('member__item');
//   	$(this).parents().find('ul.toni').addClass('member__item');
//   	$(this).parents().find('ul.richard').addClass('member__item');
// });

// << аккордион  >>

// 	$('.team__nav-item').on('click', function(e){

// 		//сохраняем в переменные, то что повторяется в коде
// 		var 
// 			$this = $(this), //указываем this чтобы срабатывало именно в том месте где кликнули, а не везде 
// 		 	tabsContent = $('.member__item'),
// 		 	ndx = $this.index();
// 		$(this)
// 			.addClass('active')
// 			.siblings()
// 			.removeClass('active');
// //находим по индексу, добавляем класс и удаляем у братьев
// 		tabsContent.eq(ndx)
// 			.addClass('active')
// 			.siblings()
// 			.removeClass('active')

// 	})

//делаем табы независимы от других табов которые могут быть на странице

// кликаем на team__nav-link затем находим элемент с классом team__nav-item и добавляем к нему класс active. Находим братьев(siblings())
//и удаляем класс active Затем находим элемент-предок с классом tabs потом находим
// элемент с классом member_item и возвращаем элементы под индексами 0 1 2 - соответствующее кол-ву єлементов member__item. 
// добавляем им класс active находим его братьев и удаляем active.

$(document).ready(function() {

(function() {  // самовызывающаяся функция для ограничания области видимости переменных

	var flag = true;

	$('.acco__trigger').on('click', function(e){
			e.preventDefault();

			var
				$this = $(this), //указываем this чтобы срабатывало именно в том месте где кликнули, а не везде 
				container = $this.closest('.acco'),
				item = $this.closest('.acco__item'),
				currentContent = item.find('.acco__content'),
				duration = 500;

			if (flag) {
				flag = false;
				if (!item.hasClass('active')) {

					item
						.addClass('active')
						.siblings()
						.removeClass('active')
						.find('.acco__content')
						.slideUp(duration);

					currentContent.slideDown(duration, function () {
						flag = true
					});
				} else {

					item.removeClass('active');
					currentContent.slideUp(function() {
						flag = true
					});
				}
			}
		});
	})();

(function() {  // самовызывающаяся функция для ограничания области видимости переменных

$(document).ready(function() {
	$('.team__nav-link').on('click', function(e){
			e.preventDefault();

			var
				$this = $(this), //указываем this чтобы срабатывало именно в том месте где кликнули, а не везде 
				item = $this.closest('.team__nav-item'),
				container = $this.closest('.tabs'),
				content = container.find('.member__item'),

				ndx = item.index(),
				reqItem = content.eq(ndx),
				activeItem = content.filter('.active');

			item.addClass('active')
				.siblings()
				.removeClass('active');

			content.eq(ndx)
				.addClass('active')
				.siblings()
				.removeClass('active')

// анимация. с flex не работает
		// 	activeItem.fadeOut(500, function () {    f  
		// 	reqItem.fadeIn(500, function () {
		// 		$(this).addClass('active')
		// 			.siblings()
		// 			.removeClass('active');
		// 	});
		// });
	});
	});
}());

	$('.slider3').bxSlider({
		slideWidth: 1100,
	    minSlides: 1,
	    maxSlides: 1,
	    slideMargin: 20,
	    // auto: true,
  		pause: 3000,
  		controls: true


  	});
	
(function() {  // самовызывающаяся функция для ограничания области видимости переменных
	
	$('.order__phone').inputmask({ mask: "+38(999)999-99-99"});

}());
});








  
