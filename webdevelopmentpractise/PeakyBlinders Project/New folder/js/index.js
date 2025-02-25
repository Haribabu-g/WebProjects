// document.getElementById("myh1").textContent = `Tommy`;
// document.getElementById(`myp`).textContent = `Peaky Blinders The Great Sigma Show`;


// //Numbers
// let age = 25;
// let price = 10.9;
// let gpa = 9.9;

// console.log(typeof gpa);
// console.log(typeof price);
// console.log(typeof age);

// console.log(`You are ${age} years old`);
// console.log(`The Price is $${10.9}`);
// console.log(`Your GPA is: ${gpa}`);


// //String

// console.log(`My Name Is ${name}`);
// console.log(`My favfood Is ${favfood}`);

// 

//   let username = window.prompt("Whats Your Name brooooo!!");
//   console.log(username);


let username,circumtance;
const PI = 3.14;


document.getElementById("Submit").onclick = function(){
    radius = document.getElementById("texts").value;
    username = Number(radius);
    circumtance = 2 * PI * radius;
    document.getElementById("myh3").textContent= `Circumtance - ${circumtance} cm`;
}






