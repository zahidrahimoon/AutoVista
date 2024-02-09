document.addEventListener('DOMContentLoaded', function() {
  AOS.init();
    var sliderImages = document.querySelectorAll('.slider-img');

    sliderImages.forEach(function(sliderImg) {
        sliderImg.addEventListener('click', function() {
            sliderImages.forEach(function(item) {
                item.classList.remove('active');
            });
            this.classList.add('active');
        });
    });
});

// cursor
document.addEventListener('DOMContentLoaded', function () {
  AOS.init();
    const cursor = document.querySelector('.custom-cursor');
  
    document.addEventListener('mousemove', function (e) {
      const { clientX: x, clientY: y } = e;
      
      // Update cursor position
      cursor.style.left = x + 'px';
      cursor.style.top = y + 'px';
    });
  
    // Add additional interactivity or animation as needed
    document.addEventListener('click', function () {
      cursor.style.backgroundColor = '#fff'; // Change cursor color on click
      setTimeout(() => {
        cursor.style.backgroundColor = '#ff0000'; // Reset cursor color after a short delay
      }, 200);
    });
  });

