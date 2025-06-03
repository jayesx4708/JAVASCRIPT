changebg=()=> {
      const color = document.getElementById("colorinp").value;
      document.body.style.backgroundColor = color;
    }

function validateForm() {
      const name = document.getElementById("name").value.;
      const email = document.getElementById("email").value.;
      const errorMsg = document.getElementById("errorMessage");


    if (name === "") {
        errorMsg.textContent = "Name cannot be empty.";
        return false;
      }

      if (!email.includes("@")) {
        errorMsg.textContent = "Email must contain '@'.";
        return false;
      }

      errorMsg.textContent = "";
      alert("Form submitted successfully!");
      return true;
    }