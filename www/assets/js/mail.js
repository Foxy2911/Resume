function sendEmail() {
    
    //get credentials
    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let subject = document.getElementById("subject");
    let body = document.getElementById("message")

    body += "Best wishes" + name
    let mailto = $`mailto:${email}?subject=${subject}&body=${body}`

    window.location.href = mailto;
}
