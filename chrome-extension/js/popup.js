const summaryButton = document.getElementById('summarise');
summaryButton.onclick = () => {
  // alert('clicked');
  // document.getElementsByTagName('html')[0].innerHTML = '<object type="text/html" data="../html/summary.html" ></object>';
  window.open('../html/summary.html', '_self');
};