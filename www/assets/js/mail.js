function sendEmail() {
    
    //get credentials
    let name = document.getElementById("name").value;
    //let email = document.getElementById("email").value;
    let email = "anestis.christa@gmail.com"
    let subject = document.getElementById("subject").value;
    let body = document.getElementById("message").value;

    let newline = "%0D%0A"

    body += newline + newline +"Best wishes," + newline + name
    let mailto = `mailto:${email}?subject=${subject}&body=${body}`

    window.open(mailto, '_self');
}
