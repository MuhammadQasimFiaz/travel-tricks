//fixed header
document.addEventListener('DOMContentLoaded', () => {
    window.onscroll = function () { myFunction() };

    const dropdown = document.querySelector(".dropdown")
    var header = document.getElementById("myHeader");
    var sticky = header.offsetTop;
    
    // Get the button
    let goToTopBtn = document.getElementById("goToTopBtn");

    // When the user clicks on the button, scroll to the top of the document
    goToTopBtn.addEventListener('click', function() {
        window.scrollTo({top: 0, behavior: 'smooth'});  
    });

    function myFunction() {
      if (window.scrollY > sticky) {
          header.classList.add("sticky");
          dropdown.style.top = '15%'
      } else {
          header.classList.remove("sticky");
          dropdown.style.top = '22%'
      }

        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            goToTopBtn.style.display = "block";
        } else {
            goToTopBtn.style.display = "none";
        }
    }
});


// mobile menu
// function openNav() {
//     document.getElementById("mySidenav").style.width = '300px'
//   }
//   function closeNav() {
//     document.getElementById("mySidenav").style.width = '0'
//   }
function openNav() {
    const overlay = document.getElementById("overlay");
    overlay.classList.add("visible");

    setTimeout(() => {
        document.getElementById("mySidenav").style.width = "300px";
    }, 100); 
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";

    setTimeout(() => {
        const overlay = document.getElementById("overlay");
        overlay.classList.remove("visible");
    }, 300); 
}

$('.toggle').click(function(e) {
    $(this).next('.dropdown-menu ').slideToggle(500);
    $(this).parent('li').siblings().children('.dropdown-menu').slideUp(500);
 
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
  
  let isMouseInside = false; 
  
  const updateTransform = () => {
      if (isMouseInside) {
          const rect = servicesSection.getBoundingClientRect();
          const windowHeight = window.innerHeight;
          
          const percentageInView = Math.max(0, Math.min(1, (windowHeight - rect.top) / (windowHeight + rect.height)));
          
          serElements.forEach(ser => {
              const serImg = ser.querySelector('.ser_img');
              const serTxt = ser.querySelector('.ser_txt');

              const translateYImg = percentageInView * -30; 
              const translateYTxt = percentageInView * 20; 
              
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
  };

  const handleMouseLeave = () => {
      isMouseInside = false;
      updateTransform(); 
  };
  
  window.addEventListener('scroll', () => {
      if (isMouseInside) { 
          updateTransform();
      }
  });
  window.addEventListener('resize', updateTransform); 
  servicesSection.addEventListener('mouseenter', handleMouseEnter);
  servicesSection.addEventListener('mouseleave', handleMouseLeave);

  updateTransform(); 
});


function adjustContainerClasses() {
    const containers = document.querySelectorAll('.custom-container');
    if (window.innerWidth < 991.98) {
        containers.forEach(container => {
            container.classList.remove('container');
            container.classList.add('container-fluid');
        });
    } else {
        containers.forEach(container => {
            container.classList.remove('container-fluid');
            container.classList.add('container');
        });
    }
}

adjustContainerClasses();

window.addEventListener('resize', adjustContainerClasses);

