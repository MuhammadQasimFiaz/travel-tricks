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
