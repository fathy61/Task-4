

let currentUser = JSON.parse(localStorage.getItem("currnetUser"));

if (currentUser) {
    document.getElementById("user-name").textContent = currentUser.name;
    document.getElementById("user-email").textContent = currentUser.email;
    
} else {
    alert("please sign in first")
    window.location.href = "login.html";
}

document.getElementById("logout").addEventListener("click", function() {
    localStorage.removeItem("currnetUser");
    window.location.href = "login.html";
});
