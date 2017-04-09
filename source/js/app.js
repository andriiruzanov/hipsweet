// (function() {
//   'use strict';

// var elems = document.querySelectorAll('li.faq__item');

//  for (var item = 0; item < elems.length; item++) {
//  	elems[item].addEventListener('click', function(event) {
//  event.target.firstElementChild.classList.toggle('faq__desc_active');		
 
//  	});
//  }

// })();

// 
$(document).ready(function() {
	$('.faq__list').on('click', '.faq__item', function() {
		$(this).children().slideToggle();
	});

	$('.team__nav-list').on('click', '.team__nav-item.toni', function(){
	$('.member__list_active').removeClass('member__list_active');
  	$(this).parents().find('.toni').addClass('member__list_active').removeClass('member__item');
  	$(this).parents().find('ul.richard').addClass('member__item');
  	$(this).parents().find('ul.mity').addClass('member__item');
  	

});
	$('.team__nav-list').on('click', '.team__nav-item.richard', function(){

	$('.member__list_active').removeClass('member__list_active');
  	$(this).parents().find('.richard').addClass('member__list_active').removeClass('member__item');
   	$(this).parents().find('ul.toni').addClass('member__item');
   	$(this).parents().find('ul.mity').addClass('member__item');
  	

});
	$('.team__nav-list').on('click', '.team__nav-item.mity', function(){
	$('.member__list_active').removeClass('member__list_active');
  	$(this).parents().find('.mity').addClass('member__list_active').removeClass('member__item');
  	$(this).parents().find('ul.toni').addClass('member__item');
  	$(this).parents().find('ul.richard').addClass('member__item');
});
});



$('.order__phone').inputmask({ mask: "+38(999)999-99-99"});