// Force disable Packery and apply CSS Grid layout
(function() {
  // Completely kill Packery
  window.Packery = null;
  
  // When page loads, clean up any Packery instances
  window.addEventListener('load', function() {
    // Remove all Packery styling
    document.querySelectorAll('.gallery').forEach(function(gallery) {
      gallery.style.position = '';
      gallery.style.width = '';
      gallery.style.height = '';
      
      // Clean gallery items
      Array.from(gallery.children).forEach(function(item) {
        item.style.position = '';
        item.style.left = '';
        item.style.top = '';
        item.style.width = '';
        item.style.height = '';
      });
    });
  }, true);
  
  // Also try to intercept the jQuery plugin registration
  if (window.jQuery) {
    window.jQuery.fn.imagesLoaded = function() { return this; };
  }
})();

