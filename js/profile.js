

let currentUser = JSON.parse(localStorage.getItem("currnetUser"));

if (currentUser) {

    //display the data in the page by DOM
    document.getElementById("user-name").textContent = currentUser.name;
    document.getElementById("user-email").textContent = currentUser.email;
    
} else {
    // Handle error if he join by the URL 
    alert("please sign in first")
    window.location.href = "login.html";
}

document.getElementById("logout").addEventListener("click", function() {
    localStorage.removeItem("currnetUser");
    window.location.href = "login.html";
});
