 let input = prompt("what would you like to do ?");
 const todos = ['Collet Chicken Eggs',"Clean The Bedroom","Read Article In Medium"];
 while(input !== 'quit' && input !== 'q'){
    if(input === 'list'){
        console.log("**********");
        for(let i=0; i < todos.length;i++){
            console.log(`${i}: ${todos[i]}`);
        }

        console.log("**********");
    }
    else if(input == "new"){
        const newTodo = prompt("ok , what is the new todo");
        todos.push(newTodo);
        console.log(`${newTodo} added to the List✌️`);
    }else if(input === "delete"){
        const index = parseInt(prompt("ok , Enter The Index Of the Delete"));
        if(!Number.isNaN(index)){
        const deleted = todos.splice(index,1);
        console.log(`ok ,deleted ${deleted[0]}`);
        }
    }
    else{
        console.log('Unknown index');
    }
    input = prompt("what would you like to do ?");
 }
 console.log("Ok Quit The App!");