(function(){
  const pref = localStorage.getItem('preferredMode');
  if(!pref){
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const def = prefersDark ? 'creative' : 'professional';
    localStorage.setItem('preferredMode', def);
  }
})();

// Logic for creative page portfolio items
if (document.body.classList.contains('creative-page')) {
  const workItems = document.querySelectorAll('.work-item');

  workItems.forEach(item => {
    item.addEventListener('click', (e) => {
      // Don't let the click bubble up to the document listener
      e.stopPropagation();
      // Toggle the overlay for the clicked item
      item.classList.toggle('show-overlay');
    });
  });

  // Add a listener to close all overlays when clicking outside
  document.addEventListener('click', () => {
    workItems.forEach(item => {
      item.classList.remove('show-overlay');
    });
  });
}
