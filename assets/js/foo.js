function myFunction( myImage ) {
    var time = new Date().getDate();
    var path = `url('${myImage}')`;

    if (time % 2 == 0) {
        elem = document.querySelector('.site-header0');
        elem.style.backgroundImage = path;
    }
}

myFunction("/codemotes/assets/Screen Shot 2023-01-13 at 7.03.48 PM.jpg");
