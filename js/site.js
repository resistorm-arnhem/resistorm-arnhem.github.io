// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
var prevScrollpos = 0;





window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("site_nav_bar").style.top = "0";
    } else {
        document.getElementById("site_nav_bar").style.top = "-70px";
    }
    prevScrollpos = currentScrollPos;
}


var toastLiveExample = document.getElementById('liveToast');
var toast = new bootstrap.Toast(toastLiveExample);