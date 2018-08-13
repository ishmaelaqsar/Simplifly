const summaryButton = document.getElementById('summarise');
summaryButton.onclick = () => {
  // alert('clicked');
  // document.getElementById("popup").innerHTML = "";
  document.getElementById('main').innerHTML = '<object type="text/html" data="../html/summary.html" ></object>';
  document.body.offsetWidth
  // document.getElementsByTagName('object')[0].style.width = '400px';
};

// Get the window dimensions
const $window = $(window);
const wWidth  = $window.width();
const wHeight = $window.height();