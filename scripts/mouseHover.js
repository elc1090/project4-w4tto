const container1 = document.getElementById('image-container1');
const image1 = document.getElementById('art-image1');
const container2 = document.getElementById('image-container2');
const image2 = document.getElementById('art-image2');
const container3 = document.getElementById('image-container3');
const image3 = document.getElementById('art-image3');
let isHovered = false;

container1.addEventListener('mouseenter', () => {
  isHovered = true;
  image1.src = 'src/images/art-1b.png';
});

container1.addEventListener('mouseleave', () => {
  isHovered = false;
  image1.src = 'src/images/art-1.png';
});

image1.addEventListener('load', () => {
  if (isHovered) {
    image1.src = 'src/images/art-1b.png';
  }
});

container2.addEventListener('mouseenter', () => {
  isHovered = true;
  image2.src = 'src/images/art-2b.png';
});

container2.addEventListener('mouseleave', () => {
  isHovered = false;
  image2.src = 'src/images/art-2.png';
});

image2.addEventListener('load', () => {
  if (isHovered) {
    image2.src = 'src/images/art-2b.png';
  }
});

container3.addEventListener('mouseenter', () => {
  isHovered = true;
  image3.src = 'src/images/art-3b.png';
});

container3.addEventListener('mouseleave', () => {
  isHovered = false;
  image3.src = 'src/images/art-3.png';
});

image3.addEventListener('load', () => {
  if (isHovered) {
    image3.src = 'src/images/art-3b.png';
  }
});
