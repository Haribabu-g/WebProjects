const generate = document.getElementsByClassName("mybutton");
const label = document.getElementsByClassName("label");
const min = document.getElementsByClassName("min");
const max = document.getElementsByClassName("max");

generate.onclick = function(){
    min.value = MINN;
    max.value = MAXX;
    randomnum = Math.floor(Math.random() *(max - min)) + max;
    
    label.textContent = randomnum;
}


// const generate = document.querySelector(".mybutton");
// const label = document.querySelector(".label");
// const min = document.querySelector(".min");
// const max = document.querySelector(".max");

// generate.onclick = function(){
//     const MINN = parseInt(min.value);
//     const MAXX = parseInt(max.value);
//     const randomnum = Math.floor(Math.random() * (MAXX - MINN + 1)) + MINN;
    
//     label.textContent = randomnum;
// }
