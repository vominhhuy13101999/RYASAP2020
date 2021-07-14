window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("nav-big-screen").style.backgroundColor = "hsl(0, 0%, 85%)";
    }
    else{
    document.getElementById("nav-big-screen").style.backgroundColor = "hsla(0, 0%, 85%, 0.4)";
    }
}
