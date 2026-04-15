// Sign in & Sign up
const wrapper = document.querySelector(".wrapper");
const signinLink = document.querySelector(".signin-link");
const signupLink = document.querySelector(".signup-link");

signupLink.addEventListener("click", () => {
  wrapper.classList.add("active");
});

signinLink.addEventListener("click", () => {
  wrapper.classList.remove("active");
});



let passicon = document.getElementById("passicon")
let password = document.getElementById("password")

passicon.onclick = function() {
  if(password.type =="password") {
    password.type = "text";
  }
  else {
    password.type="password";
  }
}


/*
var a;
function pass()
{
  if(a==1)
    {
      document.getElementById("input-box").type="input-box";
      document.getElementById("pass-icon").src="pass-hide.png";
      a=0;
    }
    else {
      document.getElementById("input-box").type="text";
      document.getElementById("pass-icon").src="pass-icon.show.png";
      a=1;
    }
}
*/