var img = document.getElementsByClassName("slideshow_img");
var index = 0;
function fn() {
    for (var i = 0; i < img.length; i++) {
        img[i].style.display = "none"
    }
    if (index < img.length - 1) {
        index++;
    } else {
        index = 0;
    }
    img[index].style.display = "block"
}
setInterval("fn()", 3000)
var btn = document.getElementsByClassName('slideshow_btn')
for (var i = 0; i < btn.length; i++) {
    btn[i].xuhao = i
    btn[i].onclick = function () {
        for (j = 0; j < img.length; j++) {
            img[j].style.display = "none";
        }
        img[this.xuhao].style.display = "block";
    }
}
