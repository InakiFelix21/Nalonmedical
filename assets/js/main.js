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

    let _lastFocused = null;

    function openNav(toggleBtn){
      const panel = document.getElementById('mySidenav');
      const overlay = document.getElementById('sidenavOverlay');
      _lastFocused = document.activeElement;
  
      panel.classList.add('is-open');
      overlay.classList.add('is-open');
      document.body.classList.add('nav-open');
      panel.setAttribute('aria-hidden','false');
  
      // Llevar foco al panel
      panel.focus({preventScroll:true});
  
      // Trap de foco y cierre con ESC
      document.addEventListener('keydown', _onKeydown);
      // Cerrar al clickear un link
      panel.querySelectorAll('a').forEach(a=>{
        a.addEventListener('click', closeNav, {once:true});
      });
  
      // Marca aria-expanded si llega el botón
      if (toggleBtn && toggleBtn.setAttribute){
        toggleBtn.setAttribute('aria-expanded','true');
      }
    }
  
    function closeNav(){
      const panel = document.getElementById('mySidenav');
      const overlay = document.getElementById('sidenavOverlay');
  
      panel.classList.remove('is-open');
      overlay.classList.remove('is-open');
      document.body.classList.remove('nav-open');
      panel.setAttribute('aria-hidden','true');
  
      document.removeEventListener('keydown', _onKeydown);
  
      // Volver el foco al disparador si existe
      if (_lastFocused && typeof _lastFocused.focus === 'function'){
        _lastFocused.focus({preventScroll:true});
      }
    }
  
    function _onKeydown(e){
      const panel = document.getElementById('mySidenav');
      if (!panel.classList.contains('is-open')) return;
  
      // Esc para cerrar
      if (e.key === 'Escape'){
        e.preventDefault();
        closeNav();
        return;
      }
      // Trap de foco dentro del panel
      if (e.key === 'Tab'){
        const focusables = panel.querySelectorAll('a, button, [tabindex]:not([tabindex="-1"])');
        if (!focusables.length) return;
        const first = focusables[0];
        const last  = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first){
          e.preventDefault(); last.focus();
        } else if (!e.shiftKey && document.activeElement === last){
          e.preventDefault(); first.focus();
        }
      }
    }