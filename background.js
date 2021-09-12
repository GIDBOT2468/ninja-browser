chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create('index.html', {
  'frame': { 'color': "#1c1c1c" }
  });
});
