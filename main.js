const form = document.getElementById("cont");
form.addEventListener("submit", function(bnb) {
  bnb.preventDefault();
  const name = document.getElementById("name").value;
  const pass = document.getElementById("pass").value;

  localStorage.setItem("Name: ", name);
  localStorage.setItem("Password: ", pass);

  console.log("Name: " + name);
  console.log("Password: " + pass);
})