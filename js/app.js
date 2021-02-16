var isOpen = false;

    if(window.innerWidth < 720){
        
        document.getElementById('links').style.display = 'none';
        document.getElementById('closeBtn').style.display = 'none';
        document.getElementById('openBtn').style.display = 'block';
        isOpen = true;
    }
function toggleMenu() {
    if (isOpen === false) {
        isOpen = true;
        document.getElementById('links').style.display = 'block';
        document.getElementById('closeBtn').style.display = 'block';
        document.getElementById('openBtn').style.display = 'none';
    }
    else {
        isOpen = false;
        document.getElementById('links').style.display = 'none';
        document.getElementById('closeBtn').style.display = 'none';
        document.getElementById('openBtn').style.display = 'block';
    }
    
}
var mySwiper = new Swiper('.swiper-container', {
    loop: true,
    speed : 550,
    pagination: {
      el: '.swiper-pagination',
    },
    navigation: {
      nextEl: '#swiper-button-next',
      prevEl: '#swiper-button-prev',
    }
  });