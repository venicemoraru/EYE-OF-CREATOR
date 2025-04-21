const thumbnails = [
  { src: 'img1.jpg', caption: 'N.B.D. styling & modelling EDDIE' },
  { src: 'img2.jpg', caption: 'Creative Direction – LEE X' },
  // add more...
];

const photoGrid = document.querySelector('.thumb-grid.photo');

thumbnails.forEach(item => {
  const img = document.createElement('img');
  img.src = item.src;
  img.alt = '';
  img.addEventListener('mouseover', () => {
    document.getElementById('preview-img').src = item.src;
    document.getElementById('preview-caption').innerText = item.caption;
  });
  photoGrid.appendChild(img);
});
