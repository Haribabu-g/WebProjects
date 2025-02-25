const ageinput = document.getElementById("ageinput");
const submit = document.getElementById("submit");
const result = document.getElementById("result");


submit.onclick = function(){
    age = Number(ageinput.value);

    if(age >= 100){
        result.textContent = `💀 You are Too OLD to Enter This Site`;
    }
    else if(age == 0){
        result.textContent = `Hey You Just Born Baby!, DRink Milk And Sleep 😴`;
    }
    else if(age >= 18){
        result.textContent = `You are old enough To enter This Site ✅`;
    }
  else if(age < 0){
    result.textContent = "Hey Man!, Age Can`t be Below 0️⃣";

  }
  else{
    result.textContent = ` 🔞 You Must Be 18+ to Enter This Site`;
  }
}