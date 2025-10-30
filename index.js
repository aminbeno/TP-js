/*var x = 5
let y = 10
const z = 15

x="med"
y= "hello"
console.log(x)
console.log(y)
console.log(z)
*/
/*
function testScope() {
  if (true) {
    var a = "var visible partout";
    var b = "let visible ici seulement";
  }
  console.log(a);
  console.log(b); // Pourquoi erreur ?
}
testScope();
*/
/*
function sayHello(name) {
  return `Bonjour ${name}`;
}

const sayHelloArrow = (name) => `Bonjour ${name}`;
*/
/*
const person = {
  name: "Sara",
  sayHello: function () {
    console.log("Bonjour " + this.name);
  },
  sayHelloArrow: () => {
    console.log("Bonjour " + this.name);
  },
};

person.sayHello();
person.sayHelloArrow();
*/
/*
import message, { PI, carre } from "./mathUtils.js";

message(); // 📘 Module mathUtils chargé !
console.log("PI =", PI);
console.log("Carré de 5 =", carre(5));
*/
/*
const fruits = ["pomme", "banane", "orange"];
fruits.push("kiwi");
fruits.pop();
console.log(fruits);
*/
/*
const nums = [1, 2, 3, 4, 5];

// Multiplie chaque nombre par 2
console.log(nums.map(n => n * 2));

// Garde seulement les nombres pairs
console.log(nums.filter(n => n % 2 === 0));

// Calcule la somme totale
console.log(nums.reduce((sum, n) => sum + n, 0));
console.log(nums.find(n => n > 3));
console.log(nums.some(n => n < 0));
console.log(nums.every(n => n > 0));
*/
/*
const user = { id: 1, name: "Ali", city: "Rabat" };

// Déstructuration
const { name, city } = user;
console.log(`${name} habite à ${city}`);

// Renommage
const { name: fullName, ...rest } = user;
console.log(fullName);
console.log(rest);
*/
/*
const p = new Promise((resolve) => {
  setTimeout(() => resolve("Opération terminée !"), 2000);
});

p.then(result => console.log("my name mohamed"));
*/
/*
async function getUsers() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    console.log(data);
  } catch (e) {
    console.error("Erreur :", e.message);
  }
}

getUsers();
const name = "Nadia";
const hour = new Date().getHours();
console.log(`Bonjour ${name}, il est ${hour}h`);

function sum(...numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}
console.log(sum(1, 2, 3, 4));
*/
const settings = { theme: null };
console.log(settings.theme ?? "light"); // light

const user2 = { profile: { email: "x@y.com" } };
console.log(user2.profile?.email); // x@y.com
console.log(user2.address?.city);  // undefined



