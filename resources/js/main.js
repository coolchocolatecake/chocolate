$(document).ready(function(){
    $('.js--section-features').waypoint(function(direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }   
    },{
        offset: '50px'        
    });    
});

$(".navbar-dark ul li a[href^='#']").on('click',function(e) {
    
    e.preventDefault();
    var hash = this.hash;
    $('html, body').animate({
        scrollTop:$(hash).offset().top
    }, 300, function(){
        window.location.hash = hash;
    });
    
});


$("#cover .hero-text-box a[href^='#']").on('click',function(e) {
    
    e.preventDefault();
    var hash = this.hash;
    $('html, body').animate({
        scrollTop:$(hash).offset().top
    }, 800, function(){
        window.location.hash = hash;
    });
    
});

    
/* Mobile nav */
     $('.js--nav-icon').click(function() {
        var nav = $('.navbar-nav');
        var icon = $('.js--nav-icon i');
        
        nav.slideToggle(200);
        if (icon.hasClass('ion-navicon-round')) {
            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round');
            
        } else {
            icon.addClass('ion-navicon-round');
            icon.removeClass('ion-close-round');
        }
        
    });  

$('.js-wp-1').waypoint(function(direction) {
    
    $('.js-wp-1').addClass('animated fadeInDown');
},{
    offset: '40%'
});

$('.js-wp-2').waypoint(function(direction) {
    
    $('.js-wp-2').addClass('animated fadeInDown');
},{
    offset: '40%'
});

$('.js-wp-3').waypoint(function(direction) {
    
    $('.js-wp-3').addClass('animated bounceInDown');
},{
    offset: '40%'
});

$('.js-wp-4').waypoint(function(direction) {
    
    $('.js-wp-4').addClass('animated shake');
},{
    offset: '40%'
});