
define(['jquery','com/carousel','com/waterfall_ajax'],function($,carousel,waterfall){
	carousel.init($('.carousel'));
	new waterfall($('.pic-ct'));
})