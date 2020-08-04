var index = 1;
changImage = function() {
    var imgs = ["/image/imgchange/1.png", "/image/imgchange/12.jpg", "/image/imgchange/17.jpg", "/image/imgchange/14.jpg", "/image/imgchange/12.webp", "/image/imgchange/4.png"];
    document.getElementById('imgmain').src = imgs[index];
    index++;
    if (index == 6) {
        index = 0;
    }

}
setInterval(changImage, 3000)