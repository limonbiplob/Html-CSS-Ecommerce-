// jquery syntax: $(selector/css selector).action();

$(document).ready(function(){
    
    $('.header-area').sticky({
        topSpacing:0,
        zIndex: 9
    });
    
    $(".p-slider").owlCarousel({
        
        items: 1,
        themeClass: 'slider1'
        
    });
    
     
    $(".p-slider2").owlCarousel({
        
        items: 1,
        themeClass: 'slider2'
        
    });
    var pH = $('.right').height();
    $('.left').height(pH);
    
    var menuItem = $('.pro-img-thumbs ul li');
    var pItem = $('.s-img');
    
    menuItem.click(function(e){
        $(this).addClass('active').siblings().removeClass('active');
        var selector = $(this).children('a').attr('href');
        $(selector).addClass('active').siblings().removeClass('active');
    });
    
    
    $('.menu').meanmenu({
        meanMenuContainer: '.mainmenu-area',
        meanScreenWidth: '990'
    });
    
    
    
});