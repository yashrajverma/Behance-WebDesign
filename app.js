var count = 0;
var img1 = "https://wallpaperaccess.com/full/1166677.jpg";
var img2 = "https://wallpapers-fenix.eu/full/160904/063125204.jpg";
var header = document.getElementsByClassName('.header')
function changeBack() {
  header.style.backgroundImage="url('"+img1+"')";
}
function changeFront() {
    header.style.backgroundImage="url('"+img2+"')";
  }
