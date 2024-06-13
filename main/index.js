document.addEventListener("DOMContentLoaded", function() {
    var albumBox = document.getElementById("albumBox");
    var resultContainer = document.getElementById("resultContainer");
    var resultFrame = document.getElementById("resultFrame");
    var overlay = document.getElementById("overlay");

    // 이미지를 클릭했을 때
    albumBox.addEventListener("click", function(event) {
        if (event.target.tagName === "IMG") {
            var imageUrl = event.target.src;
            resultFrame.src = "../play/play.html"; // result.html로 변경
            resultContainer.classList.add("show"); // 결과 컨테이너를 보이도록 함
            overlay.style.display = "block"; // 오버레이를 보이도록 함
        }
    });

    // 오버레이를 클릭했을 때
    overlay.addEventListener("click", function() {
        resultContainer.classList.remove("show"); // 결과 컨테이너를 숨김
        overlay.style.display = "none"; // 오버레이를 숨김
        resultFrame.src = ""; // iframe 초기화
    });
});
