function ibg(){
	$.each($('.ibg'), function(index, val) {
		if($(this).find('img').length>0){
			$(this).css('background-image','url("'+$(this).find('img').attr('src')+'")');
		}
	});
}
ibg();
function Sibg(){
	$.each($('.Sibg'), function(index, val) {
		if($(this).find('img').length>0){
			$(this).css('background-image','url("'+$(this).find('img').attr('data-lazy')+'")');
		}
	});
}
Sibg();
$(document).ready(function() {
	$('.header__burger').click(function(event) {
		$('.header__burger,.menu-header__menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
});
$(document).ready(function() {
	$('.item-simple').click(function(e){
		e.preventDefault();
		$('.simple__panel').removeClass('simple__panel--active');
		$($(this).attr('href')).addClass('simple__panel--active');
	});
	$('.item-simple:first').click();
});
$(document).ready(function() {
	$('.simple__column').click(function(e){
		e.preventDefault();
		$('.simple__column').removeClass('simple__column--active');
		$(this).addClass('simple__column--active');
	});
	$('.simple__column:first').click();
});