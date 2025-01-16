const submitButton = document.getElementById("submit")
submitButton.onclick = function() {confirmPass()}

function confirmPass() {
    let newPass = document.getElementById("newPass").value
    let confPass = document.getElementById("confPass").value

    if (newPass !== null && confPass !== null && newPass !== "" && confPass !== "") {
        if (newPass === confPass) {
            document.getElementById("result").innerHTML = "Password successfully changed!"
            document.getElementById("result").style.color = "green"
        } else {
            document.getElementById("result").innerHTML = "Passwords do not match. Please try again."
            document.getElementById("result").style.color = "red"
        }
    }

}