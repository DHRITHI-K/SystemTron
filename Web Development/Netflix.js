document.getElementById("sign-in-form").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form submission
    document.getElementById("sign-in-page").style.display = "none";
    document.getElementById("home-page").style.display = "block";
});
