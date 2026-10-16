const pass = document.getElementById("pass");
const eye = document.getElementById("eye");
 
// show / hide password
eye.addEventListener("click", function () {
  if (pass.type === "password") {
    pass.type = "text";
    eye.innerText = "Hide";
  } else {
    pass.type = "password";
    eye.innerText = "Show";
  }
});