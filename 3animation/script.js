function zero_first_format(value)
    {
        if (value < 10)
        {
            value='0'+value;
        }
        return value;
    }

    function date_time()
    {
        var current_datetime = new Date();
        var hours = zero_first_format(current_datetime.getHours());
        var minutes = zero_first_format(current_datetime.getMinutes());
        var seconds = zero_first_format(current_datetime.getSeconds());

        return hours + ":" + minutes;
    }

    setInterval (function () {
        document.getElementById('current_date_time_block').innerHTML = date_time();
    }, 1000);


// const swiper = new Swiper('.sample-slider', {
//     loop: true,
//     slidesPerView: 3,
//     centeredSlides: true,
//     effect: "coverflow",
//     pagination: {
//         el: '.swiper-pagination',
//     },
//     navigation: {
//         nextEl: ".swiper-button-next",
//         prevEl: ".swiper-button-prev",
//     },
// })

