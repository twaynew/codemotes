function myFunction( myImage ) {
    const imageUrl = myImage;
    
    var time = new Date().getDate();
    var path = `url('${myImage}')`;

    if (time % 2 == 0) {
        elem = document.querySelector('.site-header0');
        let preloaderImg = document.createElement("img");
        preloaderImg.src = imageUrl;
        
        preloaderImg.addEventListener('load', (event) => {
            bgElement.style.backgroundImage = `url(${imageUrl})`;
            preloaderImg = null;
        });
    }
}
