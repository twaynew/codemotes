function myFunction( myImage ) {
    var time = new Date().getDate();
    var path = "url(" + myImage + ")";
    console.log(path);
    console.log(time % 2);

    if (time % 2 != 0) {
        document.querySelector('.site-header0').elem.style.backgroundImage = path;
        console.log(document.querySelector('.site-header0').elem.style.backgroundImage);
    }
}
