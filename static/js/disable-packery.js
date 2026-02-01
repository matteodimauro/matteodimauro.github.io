// Override Packery masonry layout with CSS Grid
(function disablePackery() {
  // Prevent Packery from running
  if (typeof Packery !== 'undefined') {
    // Disable Packery by preventing its initialization
    window.Packery = null;
  }
  
  // Also wait for window load and prevent any Packery execution
  window.addEventListener('load', function() {
    // Clear any existing Packery instances
    document.querySelectorAll('.gallery').forEach(function(gallery) {
      // Remove any inline styles added by Packery
      if (gallery.style.position) {
        gallery.style.position = null;
      }
      gallery.querySelectorAll('.gallery-item, [class*="gallery"] img').forEach(function(item) {
        item.style.position = null;
        item.style.left = null;
        item.style.top = null;
        item.style.width = null;
        item.style.height = null;
      });
    });
  }, true);
})();
