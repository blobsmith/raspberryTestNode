$(document).ready(function() {
    setInterval(
        function updateCam() {
            d = new Date();
            $("#imageCamera").attr("src", "/images/camera/image.jpg?"+d.getTime());
        }, 400);
});

