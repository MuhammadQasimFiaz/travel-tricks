//fixed header
document.addEventListener('DOMContentLoaded', () => {
    window.onscroll = function () { myFunction() };

const dropdown = document.querySelector(".dropdown")
var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function myFunction() {
  if (window.scrollY > sticky) {
      header.classList.add("sticky");
      dropdown.style.top = '15%'
  } else {
      header.classList.remove("sticky");
      dropdown.style.top = '22%'
  }
}
});

//current page color

const currentPage = window.location.pathname;
const menuLinks = document.querySelectorAll('#menu li a');
console.log(currentPage)
menuLinks.forEach(link => {
    if (link.getAttribute('href').includes(currentPage)) {
      link.classList.add('active');
    }
  });





document.addEventListener('DOMContentLoaded', () => {
  const destinationImages = document.querySelector('.destination_images');
  const destImgs = document.querySelectorAll('.dest_img');

  destinationImages.addEventListener('mousemove', (event) => {
      const rect = destinationImages.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = (y - centerY) / 130; 
      const rotateY = (centerX - x) / 130; 

      destImgs.forEach(destImg => {
          destImg.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      });
  });

  destinationImages.addEventListener('mouseleave', () => {
      destImgs.forEach(destImg => {
          destImg.style.transform = 'rotateX(0) rotateY(0)';
      });
  });
});

// 

document.addEventListener('DOMContentLoaded', () => {
  const servicesSection = document.querySelector('.services');
  const serElements = document.querySelectorAll('.services .ser');
  
  let isMouseInside = false; // Flag to track if mouse is inside the section
  
  const updateTransform = () => {
      if (isMouseInside) {
          const rect = servicesSection.getBoundingClientRect();
          const windowHeight = window.innerHeight;
          
          // Calculate the percentage of the section's visibility
          const percentageInView = Math.max(0, Math.min(1, (windowHeight - rect.top) / (windowHeight + rect.height)));
          
          serElements.forEach(ser => {
              const serImg = ser.querySelector('.ser_img');
              const serTxt = ser.querySelector('.ser_txt');

              // Calculate the transform values based on scroll
              const translateYImg = percentageInView * -30; // Interpolate between 0px and -30px
              const translateYTxt = percentageInView * 20;  // Interpolate between 0px and 20px
              
              serImg.style.transform = `translate3d(0px, ${translateYImg}px, 0px)`;
              serTxt.style.transform = `translate3d(0px, ${translateYTxt}px, 0px)`;
          });
      } else {
          serElements.forEach(ser => {
              const serImg = ser.querySelector('.ser_img');
              const serTxt = ser.querySelector('.ser_txt');

              serImg.style.transform = `translate3d(0px, 0px, 0px)`;
              serTxt.style.transform = `translate3d(0px, 0px, 0px)`;
          });
      }
  };

  const handleMouseEnter = () => {
      isMouseInside = true;
      // Removed the call to updateTransform() here to prevent transformation on mouse enter
  };

  const handleMouseLeave = () => {
      isMouseInside = false;
      updateTransform(); // Ensure transform is reset when mouse leaves
  };
  
  // Add event listeners
  window.addEventListener('scroll', () => {
      if (isMouseInside) { // Only update transform when the mouse is inside and the user scrolls
          updateTransform();
      }
  });
  window.addEventListener('resize', updateTransform); // Optional: to handle window resizing
  servicesSection.addEventListener('mouseenter', handleMouseEnter);
  servicesSection.addEventListener('mouseleave', handleMouseLeave);

  updateTransform(); // Initial call
});


