document.getElementById("loginForm")?.addEventListener("submit", async (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const response = await fetch("/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
    });

    const data = await response.json();
    alert(data.message);
    if (data.success) window.location.href = "/dashboard.html";
});

document.getElementById("registerForm")?.addEventListener("submit", async (e) => {
    e.preventDefault();
    const email = document.getElementById("regEmail").value;
    const password = document.getElementById("regPassword").value;

    const response = await fetch("/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
    });

    const data = await response.json();
    alert(data.message);
    if (data.success) window.location.href = "index.html";
});

document.addEventListener("DOMContentLoaded", function () {
    var navbarToggler = document.querySelector(".navbar-toggler");
    navbarToggler.addEventListener("click", function () {
        var navbarMenu = document.getElementById("navbarNav");
        if (navbarMenu.classList.contains("show")) {
            navbarMenu.classList.remove("show");
        } else {
            navbarMenu.classList.add("show");
        }
    });
});
