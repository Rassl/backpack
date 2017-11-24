/**
 * Created by macbook on 20.11.17.
 */
document.addEventListener('DOMContentLoaded', function(){
    let wrapper = document.getElementById('wrapper');
    let topLayer = wrapper.querySelector('.top');
    let handle = wrapper.querySelector('.handle');
    let skew = 0;
    let delta = 0;

    if(wrapper.className.indexOf('skewed') != -1){
        skew = 1000;
    }

    wrapper.addEventListener('mousemove', function(e){
        delta = (e.clientX - window.innerWidth / 2) * 0.5;

        handle.style.left = e.clientX + delta + 'px';

        topLayer.style.width= e.clientX + skew + delta + 'px';
    });


});

$(document).ready(function(){
    $(window).scroll(function() {

        var wScroll = $(this).scrollTop();

        if(wScroll > $('.periscope').offset().top - $(window).height()){

            $('.periscope').css({'background-position':'center '+ (wScroll - $('.periscope').offset().top) +'px'});

            var opacity = (wScroll - $('.periscope').offset().top + 400) / (wScroll / 5);

            $('.periscope__overlay').css({'opacity': opacity});

        }
    });



        $('.views__button').on('click', function(e) {
        var imageId = $(this).attr('id');

        $(this).addClass('views__button_active')
            .siblings().removeClass('views__button_active');

        // $('.'+ imageId).show('slow')
        //     .siblings().hide('slow');
        $('.'+ imageId).addClass('views__image_display')
            .siblings().removeClass('views__image_display');
    })

    $('.main-navigation__item_basket, .periscope__button').on('click', function(e) {
        e.preventDefault();
        $('.basket-area').toggleClass('basket-area_display');

    })
})