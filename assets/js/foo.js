function myFunction( myImage ) {
    var time = new Date().getDate();

    if (time % 2 != 0) {
        document.querySelector('.site-header0').elem.style.backgroundImage = "url(" + myImage + ")";
}
