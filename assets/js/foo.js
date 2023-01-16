function myFunction( myImage ) {
    const imageUrl = "/codemotes/assets/Screen Shot 2023-01-13 at 7.03.48 PM.jpg";
    
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
