document.addEventListener("DOMContentLoaded", function () {
    fetch('/index/navbar.html') // ตรวจสอบว่า path ถูกต้อง
        .then(response => response.text())
        .then(data => {
            document.getElementById("navbar-placeholder").innerHTML = data;
        })
        .catch(error => console.error("Error loading navbar:", error));
});
