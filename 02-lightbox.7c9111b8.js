!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},l={},r={},a=n.parcelRequired7c6;null==a&&((a=function(e){if(e in l)return l[e].exports;if(e in r){var n=r[e];delete r[e];var a={id:e,exports:{}};return l[e]=a,n.call(a.exports,a,a.exports),a.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,n){r[e]=n},n.parcelRequired7c6=a);var o=a("dwxJN"),t=a("5IjG7"),i=document.querySelector("ul.gallery"),c=o.galleryItems.map((function(e){return'<div class="gallery__item">\n      <a class="gallery__item-link" href="'.concat(e.original,'">\n          <img\n              class="gallery__image"\n              src="').concat(e.preview,'"\n              data-source="').concat(e.original,'"\n              alt="').concat(e.description,'"\n          />\n      </a>\n  </div>')}));i.insertAdjacentHTML("beforeend",c.join("")),new(e(t))(".gallery__item-link",{captionsData:"alt",captionDelay:250}),console.log(o.galleryItems)}();
//# sourceMappingURL=02-lightbox.7c9111b8.js.map