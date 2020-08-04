var index = 1;
changImage = function() {
    var imgs = [, "/image/imgchange/1.png", "/image/imgchange/4.png", "/image/imgchange/2.jpg", "/image/imgchange/6.jpg", "/image/imgchange/7.jpg"];
    document.getElementById('imgmain').src = imgs[index];
    index++;
    if (index == 5) {
        index = 0;
    }

}