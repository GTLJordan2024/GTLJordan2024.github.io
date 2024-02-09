
import PhotoSwipeLightbox from '/photoswipe/dist/photoswipe-lightbox.esm.min.js';
const lightbox = new PhotoSwipeLightbox({
  gallery: '#my-gallery',
  children: 'a',
  pswpModule: () => import('/photoswipe/dist/photoswipe.esm.min.js')
});

lightbox.init();
