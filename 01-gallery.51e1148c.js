!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},l={},r={},a=n.parcelRequired7c6;null==a&&((a=function(e){if(e in l)return l[e].exports;if(e in r){var n=r[e];delete r[e];var a={id:e,exports:{}};return l[e]=a,n.call(a.exports,a,a.exports),a.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){r[e]=n},n.parcelRequired7c6=a);var i=a("5IjG7"),t=a("dwxJN"),o=document.querySelector("ul.gallery"),c=t.galleryItems.map((function(e){return'<div class="gallery__item">\n      <a class="gallery__item-link" href="'.concat(e.original,'">\n          <img\n              class="gallery__image"\n              src="').concat(e.preview,'"\n              data-source="').concat(e.original,'"\n              alt="').concat(e.description,'"\n          />\n      </a>\n  </div>')}));o.insertAdjacentHTML("beforeend",c.join("")),lightbox=new(e(i))(".gallery__item-link",{captionsData:"alt",captionDelay:250})}();
//# sourceMappingURL=01-gallery.51e1148c.js.map
