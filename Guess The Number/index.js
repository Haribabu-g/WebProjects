const min = 1;
const max = 10;
const answer = Math.floor(Math.random() * (max - min) + 1 );

let attempts = 0;
let guess;
let running = true;

while(running){
     
    guess = window.prompt(`Guess a Number Between ${min} - ${max}`);
    guess = Number(guess);

    if(isNaN(guess)){
        window.alert("Please Enter A Valid Number");
    }
    else if( guess < min || guess > max){
        window.alert("Please Enter A Valid Number");
    }
    else{
        attempts++;
        if(guess < answer){
            window.alert("Too Low! Try Again!");
        }
        else if(guess > answer){
            window.alert("Too High! Try Again!")
        }
        else{
            window.alert(`Correct! The Answer was ${answer}. It  took You ${attempts} Attempts to Guess It`);
            running = false;
        }
    }


}
