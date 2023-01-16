function myFunction( myImage ) {
    var time = new Date().getDate();
    var path = "url(" + myImage + ")";

    if (time % 2 != 0) {
        document.querySelector('.site-header0').elem.style.backgroundImage = path;
    }
}
