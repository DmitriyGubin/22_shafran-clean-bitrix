$('.reviews_slider').slick({
	dots: false,
	infinite: true,
	slidesToScroll: 1,
	slidesToShow: 3,
	responsive: [
		{
			breakpoint: 1000,
			settings: {
				slidesToShow: 2
			}
		},
		{
			breakpoint: 750,
			settings: {
				slidesToShow: 1
			}
		}
		],
	prevArrow: '<div class="prev-photo"><svg width="11" height="18" viewBox="0 0 11 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 0.999999L2 9L10 17" stroke="#999" stroke-width="1.6" stroke-linecap="round"></path></svg></div>',
	nextArrow: '<div class="next-photo"><svg width="11" height="18" viewBox="0 0 11 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 17L9 9L1 0.999999" stroke="#999" stroke-width="1.6" stroke-linecap="round"></path></svg></div>'
});

function Scroll_to_element(selector)
{
	var smoothLink = document.querySelector(selector);

	smoothLink.addEventListener('click', function (e) 
	    {
	        e.preventDefault();
	        var id = smoothLink.getAttribute('href');

	        document.querySelector(id).scrollIntoView({
	            behavior: 'smooth',
	            block: 'start'
	        });
	    });
}

Scroll_to_element('#calc_scroll_butt');

$('.sel_box.inp_box').on('click', function () {
	$(this).find('.vars_box').toggleClass('hide');
});

var $type_room = $('#type_room_select');
$('.calc .var_item').on('click', function () {
	$type_room.html($(this).html());
});

/**********Меню***********/
if(screen.width > 1000)
{
	$('.more_items').on('mouseover', function () {
	$(this).find('.var_box').addClass('show_flex');
	});

	$('.more_items').on('mouseout', function () {
		$(this).find('.var_box').removeClass('show_flex');
	});
}
else
{
	$('.more_items').on('click', function () {
		$(this).find('.var_box').slideToggle(600);
		$(this).find('.arrow').toggleClass('active');
	});
}

var $menu_box = $('header .head_menu_box');
var $body = $('body');
$('header .burger').on('click', function () {
	$menu_box.toggleClass('active');
	$body.toggleClass('overflow');
});


/**********Меню***********/


$('.quest_box .quest_item').on('click', function () {
	$(this).toggleClass('active');
	$(this).find('.answer').slideToggle(500)
});











