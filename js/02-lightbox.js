import { galleryItems } from './gallery-items.js';

const galleryRef = document.querySelector('.gallery');

const getItemMarkup = ({ preview, original, description }) => `
  <a class="gallery__item" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}" />
  </a>
`;
const getImagesMarkup = images => images.map(it => getItemMarkup(it)).join('');

galleryRef.innerHTML = getImagesMarkup(galleryItems);
galleryRef.addEventListener('click', onClickGallery);

new window.SimpleLightbox('.gallery a', {
  captionDelay: 250,
  captionsData: 'alt',
});

function onClickGallery(e) {
  e.preventDefault();
}
