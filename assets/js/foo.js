---
---
// {{ site.baseurl }}
// {{ page.path }}
// {{ site.bannerphoto }}
function myFunction( myImage ) {    
    var time = new Date().getDate();

    if (time % 2 == 0) {
        let preloaderImg = document.createElement("img");
        preloaderImg.src = myImage;
        
        preloaderImg.addEventListener('load', (event) => {
            elem = document.querySelector('.site-header0');
            elem.style.backgroundImage = `url('${myImage}')`;
            preloaderImg = null;
        });
    }
}

const imageUrl = "{{ site.baseurl }}/assets/{{ site.bannerphoto }}"; // Screen Shot 2023-01-13 at 7.03.48 PM.jpg";
myFunction( imageUrl );
