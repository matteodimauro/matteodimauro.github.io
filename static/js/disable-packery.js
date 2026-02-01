// Force disable Packery and apply CSS Grid layout
(function() {
  // Completely kill Packery
  window.Packery = null;
  
  // When page loads, clean up any Packery instances and disable medium-zoom for gallery images
  window.addEventListener('load', function() {
    // Remove all Packery styling
    document.querySelectorAll('.gallery').forEach(function(gallery) {
      gallery.style.position = '';
      gallery.style.width = '';
      gallery.style.height = '';
      
      // Clean gallery items and disable medium-zoom
      Array.from(gallery.children).forEach(function(item) {
        item.style.position = '';
        item.style.left = '';
        item.style.top = '';
        item.style.width = '';
        item.style.height = '';
      });
      
      // Disable medium-zoom for gallery images
      gallery.querySelectorAll('img').forEach(function(img) {
        img.classList.add('nozoom');
        img.removeAttribute('data-medium-zoom-image');
      });
    });
  }, true);
  
  // Also try to intercept the jQuery plugin registration
  if (window.jQuery) {
    window.jQuery.fn.imagesLoaded = function() { return this; };
  }
})();

