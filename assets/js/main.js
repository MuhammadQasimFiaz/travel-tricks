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
