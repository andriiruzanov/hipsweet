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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gKGZ1bmN0aW9uKCkge1xuLy8gICAndXNlIHN0cmljdCc7XG5cbi8vIHZhciBlbGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2xpLmZhcV9faXRlbScpO1xuXG4vLyAgZm9yICh2YXIgaXRlbSA9IDA7IGl0ZW0gPCBlbGVtcy5sZW5ndGg7IGl0ZW0rKykge1xuLy8gIFx0ZWxlbXNbaXRlbV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xuLy8gIGV2ZW50LnRhcmdldC5maXJzdEVsZW1lbnRDaGlsZC5jbGFzc0xpc3QudG9nZ2xlKCdmYXFfX2Rlc2NfYWN0aXZlJyk7XHRcdFxuIFxuLy8gIFx0fSk7XG4vLyAgfVxuXG4vLyB9KSgpO1xuXG4vLyBcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xuXHQkKCcuZmFxX19saXN0Jykub24oJ2NsaWNrJywgJy5mYXFfX2l0ZW0nLCBmdW5jdGlvbigpIHtcblx0XHQkKHRoaXMpLmNoaWxkcmVuKCkuc2xpZGVUb2dnbGUoKTtcblx0fSk7XG5cblx0JCgnLnRlYW1fX25hdi1saXN0Jykub24oJ2NsaWNrJywgJy50ZWFtX19uYXYtaXRlbS50b25pJywgZnVuY3Rpb24oKXtcblx0JCgnLm1lbWJlcl9fbGlzdF9hY3RpdmUnKS5yZW1vdmVDbGFzcygnbWVtYmVyX19saXN0X2FjdGl2ZScpO1xuICBcdCQodGhpcykucGFyZW50cygpLmZpbmQoJy50b25pJykuYWRkQ2xhc3MoJ21lbWJlcl9fbGlzdF9hY3RpdmUnKS5yZW1vdmVDbGFzcygnbWVtYmVyX19pdGVtJyk7XG4gIFx0JCh0aGlzKS5wYXJlbnRzKCkuZmluZCgndWwucmljaGFyZCcpLmFkZENsYXNzKCdtZW1iZXJfX2l0ZW0nKTtcbiAgXHQkKHRoaXMpLnBhcmVudHMoKS5maW5kKCd1bC5taXR5JykuYWRkQ2xhc3MoJ21lbWJlcl9faXRlbScpO1xuICBcdFxuXG59KTtcblx0JCgnLnRlYW1fX25hdi1saXN0Jykub24oJ2NsaWNrJywgJy50ZWFtX19uYXYtaXRlbS5yaWNoYXJkJywgZnVuY3Rpb24oKXtcblxuXHQkKCcubWVtYmVyX19saXN0X2FjdGl2ZScpLnJlbW92ZUNsYXNzKCdtZW1iZXJfX2xpc3RfYWN0aXZlJyk7XG4gIFx0JCh0aGlzKS5wYXJlbnRzKCkuZmluZCgnLnJpY2hhcmQnKS5hZGRDbGFzcygnbWVtYmVyX19saXN0X2FjdGl2ZScpLnJlbW92ZUNsYXNzKCdtZW1iZXJfX2l0ZW0nKTtcbiAgIFx0JCh0aGlzKS5wYXJlbnRzKCkuZmluZCgndWwudG9uaScpLmFkZENsYXNzKCdtZW1iZXJfX2l0ZW0nKTtcbiAgIFx0JCh0aGlzKS5wYXJlbnRzKCkuZmluZCgndWwubWl0eScpLmFkZENsYXNzKCdtZW1iZXJfX2l0ZW0nKTtcbiAgXHRcblxufSk7XG5cdCQoJy50ZWFtX19uYXYtbGlzdCcpLm9uKCdjbGljaycsICcudGVhbV9fbmF2LWl0ZW0ubWl0eScsIGZ1bmN0aW9uKCl7XG5cdCQoJy5tZW1iZXJfX2xpc3RfYWN0aXZlJykucmVtb3ZlQ2xhc3MoJ21lbWJlcl9fbGlzdF9hY3RpdmUnKTtcbiAgXHQkKHRoaXMpLnBhcmVudHMoKS5maW5kKCcubWl0eScpLmFkZENsYXNzKCdtZW1iZXJfX2xpc3RfYWN0aXZlJykucmVtb3ZlQ2xhc3MoJ21lbWJlcl9faXRlbScpO1xuICBcdCQodGhpcykucGFyZW50cygpLmZpbmQoJ3VsLnRvbmknKS5hZGRDbGFzcygnbWVtYmVyX19pdGVtJyk7XG4gIFx0JCh0aGlzKS5wYXJlbnRzKCkuZmluZCgndWwucmljaGFyZCcpLmFkZENsYXNzKCdtZW1iZXJfX2l0ZW0nKTtcbn0pO1xufSk7XG5cblxuXG4kKCcub3JkZXJfX3Bob25lJykuaW5wdXRtYXNrKHsgbWFzazogXCIrMzgoOTk5KTk5OS05OS05OVwifSk7Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
