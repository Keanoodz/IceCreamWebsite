// Haal de elementen op
const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");
const welcomePage = document.getElementById("welcomePage");

const registerLink = document.getElementById("registerLink");
const loginLink = document.getElementById("loginLink");

const loginUsername = document.getElementById("loginUsername");
const loginPassword = document.getElementById("loginPassword");

const registerUsername = document.getElementById("registerUsername");
const registerPassword = document.getElementById("registerPassword");

// Maak een eenvoudige database met 'localStorage' (alleen voor client-side)
let users = JSON.parse(localStorage.getItem("users")) || [];

// Wissel tussen login en register forms
registerLink.addEventListener("click", () => {
  loginForm.style.display = "none";
  registerForm.style.display = "block";
});

loginLink.addEventListener("click", () => {
  registerForm.style.display = "none";
  loginForm.style.display = "block";
});

// Functie om een account te registreren
document.getElementById("register").addEventListener("submit", function(e) {
  e.preventDefault();

  const username = registerUsername.value;
  const password = registerPassword.value;

  // Check of de gebruiker al bestaat
  const userExists = users.some(user => user.username === username);
  if (userExists) {
    alert("Username already exists.");
    return;
  }

  // Voeg de gebruiker toe
  users.push({ username, password });
  localStorage.setItem("users", JSON.stringify(users));

  // Toon welkomstpagina na registratie
  alert("Registration successful!");
  registerForm.style.display = "none";
  welcomePage.style.display = "block";
});

// Functie om in te loggen
document.getElementById("login").addEventListener("submit", function(e) {
  e.preventDefault();

  const username = loginUsername.value;
  const password = loginPassword.value;

  // Zoek de gebruiker in de "database"
  const user = users.find(user => user.username === username && user.password === password);
  
  if (user) {
    // Toon welkomstpagina na succesvolle login
    loginForm.style.display = "none";
    welcomePage.style.display = "block";
  } else {
    alert("Invalid credentials, please try again.");
  }
});

// Functies voor de nieuwe knoppen
document.getElementById("viewIceCreamShopsBtn").addEventListener("click", function() {
  document.getElementById("iceCreamShops").style.display = "block";
  document.getElementById("specialOffers").style.display = "none";
  document.getElementById("contactUs").style.display = "none";
  document.getElementById("aboutUs").style.display = "none";
});

document.getElementById("specialOffersBtn").addEventListener("click", function() {
  document.getElementById("specialOffers").style.display = "block";
  document.getElementById("iceCreamShops").style.display = "none";
  document.getElementById("contactUs").style.display = "none";
  document.getElementById("aboutUs").style.display = "none";
});

document.getElementById("contactUsBtn").addEventListener("click", function() {
  document.getElementById("contactUs").style.display = "block";
  document.getElementById("iceCreamShops").style.display = "none";
  document.getElementById("specialOffers").style.display = "none";
  document.getElementById("aboutUs").style.display = "none";
});

document.getElementById("aboutUsBtn").addEventListener("click", function() {
  document.getElementById("aboutUs").style.display = "block";
  document.getElementById("iceCreamShops").style.display = "none";
  document.getElementById("specialOffers").style.display = "none";
  document.getElementById("contactUs").style.display = "none";
});
