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
    $('.views__button').on('click', function(e) {
        var imageId = $(this).attr('id');

        $(this).addClass('views__button_active')
            .siblings().removeClass('views__button_active');

        console.log(imageId);
        $('.'+ imageId).show('slow')
            .siblings().hide('slow');
        debugger;
    })
})