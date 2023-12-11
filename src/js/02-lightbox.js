import { galleryItems } from './gallery-items.js';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
const galleryContainer = document.querySelector('ul.gallery');
let lightbox;

const images = galleryItems.map(item => {
  return `<div class="gallery__item">
      <a class="gallery__item-link" href="${item.original}">
          <img
              class="gallery__image"
              src="${item.preview}"
              data-source="${item.original}"
              alt="${item.description}"
          />
      </a>
  </div>`;
});

galleryContainer.insertAdjacentHTML('beforeend', images.join(''));

lightbox = new SimpleLightbox('.gallery__item-link', {
  captionsData: 'alt',
  captionDelay: 250,
});
console.log(galleryItems);
