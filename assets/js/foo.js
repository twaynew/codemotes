---
---
// {{ site.baseurl }}
// {{ page.path }}
// {{ site.bannerphoto }}
function myFunction( myImage ) {    
    let preloaderImg = document.createElement("img");
    preloaderImg.src = myImage;
        
    preloaderImg.addEventListener('load', (event) => {
        elem = document.querySelector('.site-header0');
        elem.style.backgroundImage = `url('${myImage}')`;
        preloaderImg = null;
    });
}

const imageUrl0 = "{{ site.baseurl }}/assets/icy5lakesgaylord.jpg"; // Screen Shot 2023-01-13 at 7.03.48 PM.jpg";
const imageUrl1 = "{{ site.baseurl }}/assets/fallorange.jpg";
const imageUrl2 = "{{ site.baseurl }}/assets/{{ site.bannerphoto }}";

var time = new Date().getDate();

if (time % 2 == 0) {
    myFunction( imageUrl1 );
} else {
    myFunction( imageUrl0 );
}
