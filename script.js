//your JS code here. If required.
document.getElementById("loginForm").addEventListener("submit", function(event) {
      event.preventDefault();
      
      var username = document.getElementById("username").value;
      var password = document.getElementById("password").value;
      var rememberMe = document.getElementById("checkbox").checked;

      if (rememberMe) {
        localStorage.setItem("username", username);
        localStorage.setItem("password", password);
      } else {
        localStorage.removeItem("username");
        localStorage.removeItem("password");
      }

      alert("Logged in as " + username);

      if (localStorage.getItem("username") !== null && localStorage.getItem("password") !== null) {
        var existingButton = document.createElement("button");
        existingButton.setAttribute("id", "existing");
        existingButton.textContent = "Login as existing user";
        existingButton.addEventListener("click", function() {
          alert("Logged in as " + localStorage.getItem("username"));
        });
        document.body.appendChild(existingButton);
      }
    });