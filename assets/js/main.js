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