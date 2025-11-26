function sendMessage() {
    let name = document.getElementById("name").value;
    let msg = document.getElementById("message").value;

    if (name === "" || msg === "") {
        alert("Please fill out all fields.");
        return;
    }

    alert("Thank you, " + name + "! Your message has been sent.");
}
