$('#mostrar-nav').on('click', function(){
	$('nav').toggleClass('mostrar');  /*propio de jquery toggle class hace que se asigne o se quite la clase*/
});

$('.menu li:has(ul)').click(function(e){
	if ($(this).hasClass('activado')){
		$(this).removeClass('activado');
		$(this).children('ul').slideUp();
	} else {
		$('.menu li ul').slideUp();
		$('.menu li').removeClass('activado');
		$(this).addClass('activado');
		$(this).children('ul').slideDown();
	}
});

$('.menu li ul li a').click(function(){
	window.location.href = $(this).attr("href");
});

/*---*/
$('li').mouseover(function(e)
{
    e.stopPropagation();
    $(this).addClass('hover');
});

$('li').mouseout(function()
{
    $(this).removeClass('hover');
});

/*----*/
$('li').mouseover(function()
  {
          if ($('li ul li:hover').length) 
          {
              $('li ul li:hover').css('background','red'); 
          }
          else
          {
               $('li:hover').css('background','red'); 
          }
  });
$('li').mouseout(function()
  {
          $(this).css('background', 'transparent');
  });