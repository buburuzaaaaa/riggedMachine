for(let i = 0; i <1; i++){
    let box1 = document.createElement('button')
    let box2 = document.createElement('button')
    box1.addEventListener("click", testing)
    box2.addEventListener("click", testing2)
    box1.textContent = "VOTE NIXON"
    box2.textContent = "VOTE MCGOVERN"
    box1.style = "background-color: red; font-size: 50px; border-radius: 10px; box-shadow:  0 3px black"
    box2.style = "background-color: blue; font-size: 50px; border-radius: 10px; box-shadow:  0 3px black"
    box1.id = "nix"+i
    box2.id = "mcg"+i
    main.appendChild(box1)
    main2.appendChild(box2)
}
function testing(){
alert("Success!")   
}
 function testing2(){
let rig = prompt(" are you sure you want to vote for Mcgovern?")
    if(rig == "yes"){
        alert(' could not register vote')
    }else{
        for(let i = 0; i < 1; i++){
let error= document.createElement('button')
error.textContent = "ERROR"
error.style = "color: red; font-size: 50px;"
error.id= "eror"+i
main.appendChild(error)
        }





   //alert('voted for Nixon')
    }
}