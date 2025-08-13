(function ($) {
    "use strict";

    $(document).ready(function ($) {
        // Testimonial sliders
        $(".testimonial-sliders").owlCarousel({
            items: 1,
            loop: true,
            autoplay: true,
            responsive: {
                0: { items: 1, nav: false },
                600: { items: 1, nav: false },
                1000: { items: 1, nav: false, loop: true }
            }
        });

        // Homepage slider
        $(".homepage-slider").owlCarousel({
            items: 1,
            loop: true,
            autoplay: true,
            nav: true,
            dots: false,
            navText: ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>'],
            responsive: {
                0: { items: 1, nav: false, loop: true },
                600: { items: 1, nav: true, loop: true },
                1000: { items: 1, nav: true, loop: true }
            }
        });

        // Logo carousel
        $(".logo-carousel-inner").owlCarousel({
            items: 4,
            loop: true,
            autoplay: true,
            margin: 30,
            responsive: {
                0: { items: 1, nav: false },
                600: { items: 3, nav: false },
                1000: { items: 4, nav: false, loop: true }
            }
        });


        // Mean menu
        $('.main-menu').meanmenu({ meanMenuContainer: '.mobile-menu', meanScreenWidth: "992" });

        // Mean menu
        $('.main-menu-contact').meanmenu({ meanMenuContainer: '.mobile-menu-contact', meanScreenWidth: "992" });

    });

}(jQuery));

document.addEventListener('DOMContentLoaded', function () {
    var widgetTitles = document.querySelectorAll('.footer-box .widget-title');
    
    widgetTitles.forEach(function (title) {
        title.addEventListener('click', function () {
            var parentBox = this.parentElement;
            parentBox.classList.toggle('active');
        });
    });
});

    document.addEventListener('DOMContentLoaded', function() {
        if (window.innerWidth <= 768) { // Ajusta el valor según tus necesidades
            document.querySelectorAll('footer-box .widget-title').forEach(title => {
                title.addEventListener('click', function() {
                    const parentBox = this.parentElement;
                    parentBox.classList.toggle('active');
                });
            });
        }
    });

    document.addEventListener('DOMContentLoaded', function() {
        if (window.innerWidth <= 768) { // Ajusta el valor según tus necesidades
            document.querySelectorAll('.widget-title-contacto').forEach(title => {
                title.addEventListener('click', function() {
                    const parentBox = this.parentElement;
                    parentBox.classList.toggle('active-contacto');
                });
            });
        }
    });

    document.addEventListener('DOMContentLoaded', function() {
        if (window.innerWidth <= 768) { // Ajusta el valor según tus necesidades
            document.querySelectorAll('.widget-title-ayuda').forEach(title => {
                title.addEventListener('click', function() {
                    const parentBox = this.parentElement;
                    parentBox.classList.toggle('active-ayuda');
                });
            });
        }
    });

    document.addEventListener('DOMContentLoaded', function() {
        if (window.innerWidth <= 768) { // Ajusta el valor según tus necesidades
            document.querySelectorAll('.widget-title-suscribite').forEach(title => {
                title.addEventListener('click', function() {
                    const parentBox = this.parentElement;
                    parentBox.classList.toggle('active-suscribite');
                });
            });
        }
    });

    function openNav() {
        document.getElementById("mySidenav").style.width = "250px";
    }
    
    function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
    }