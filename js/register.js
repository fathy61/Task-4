let form = document.getElementById("register")
let getName = document.getElementById("name")
let getEmail = document.getElementById("email")
let getPassword = document.getElementById("password")

form.addEventListener("submit", function(e){
    e.preventDefault()

    // check the object in localstorge
    let users = JSON.parse(localStorage.getItem("users")) || [];

    // check if the email already exist
    let existingUser = users.find(user => user.email === getEmail.value);  // return true
    if(existingUser) {
        Toastify({
        text: "Emil Already Exist",
        duration: 3000,
        gravity: "top", 
        position: "center",
        backgroundColor: "#e74c3c",
        stopOnFocus: true,
        style: {
            borderRadius: "10px"
        }
        }).showToast();
    }else {
        users.push({name: getName.value, email: getEmail.value, password: getPassword.value});
        localStorage.setItem("users", JSON.stringify(users));
        window.location.href = "login.html";
    }
})
