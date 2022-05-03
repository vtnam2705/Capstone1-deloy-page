window.onscroll = function () {
    if(window.scrollY > 80){
        document.getElementById('header').classList.add('header-scroll');
    } else {
        document.getElementById('header').classList.remove('header-scroll');
    }
};


// Dark / light mode
document.getElementById("switchButton").onclick = function() {
    // Display light dark icon
    document.getElementById("sun").classList.toggle("light");
    document.getElementById("moon").classList.toggle("light");

    document.getElementById("arrow-left").classList.toggle("light");
    document.getElementById("arrow-right").classList.toggle("light");



    document.getElementById("header").classList.toggle("light");
    document.getElementById("about").classList.toggle("light");
    document.getElementById("feature").classList.toggle("light");
    document.getElementById("service").classList.toggle("light");
    document.getElementById("gallery").classList.toggle("light");
    document.getElementById("success").classList.toggle("light");
    document.getElementById("client").classList.toggle("light");
    document.getElementById("card").classList.toggle("light");
    document.getElementById("path").classList.toggle("light");
}

