let form = document.getElementById("login")
let getUserEmail = document.getElementById("email-login")
let getUserPassword = document.getElementById("password-login")

form.addEventListener("submit", function(e) {
    e.preventDefault()

    let users = JSON.parse(localStorage.getItem("users")) 

    let userEmail = users.find
    (user => user.email === getUserEmail.value 
    && user.password === getUserPassword.value);

    if(userEmail){
        localStorage.setItem("currnetUser", JSON.stringify(
            {
            name: userEmail.name,
            email: userEmail.email
            }
        ))
        Toastify({
        text: "Login successful",
        duration: 3000,
        gravity: "top",
        position: "center",
        backgroundColor: "#2ecc71",
        stopOnFocus: true,
        style: {
            borderRadius: "10px"
        }
        }).showToast();
        window.location.href = "profile.html";
    }else {
        Toastify({
        text: "Invalid credentials",
        duration: 3000,
        gravity: "top", 
        position: "center",
        backgroundColor: "#e74c3c",
        stopOnFocus: true,
        style: {
            borderRadius: "10px"
        }
        }).showToast();
    }
})
