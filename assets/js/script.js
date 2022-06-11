//ESTO ES LO DEL BURGUER
$('header').append('<div class="btn1 burguer"><span></span><span></span><span></span></div>');

$('.burguer').on('click',function(){
    
		$('.burguer').toggleClass('burguer-click');
		$('.menu').toggleClass('menu-click');
});

