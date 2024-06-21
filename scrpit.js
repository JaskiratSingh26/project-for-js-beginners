

let start = document.querySelector(".start");
let stop = document.querySelector(".stop");



let first_content = document.getElementById("first");
let second_content = document.getElementById("second");



start.addEventListener('click',()=>{
    document.addEventListener
        ("keydown",handedown)
        document.addEventListener
        ("keyup",handelup)
        

})
  function handedown(e){
    const keyPressed = event.key;
    first_content.innerHTML = 'You pressed:' + keyPressed
    second_content.innerHTML = "key Pressed"

    console.log(event.key)
  }
  



   function handelup(e){

    const keyPressed = event.key;
    first_content.innerHTML = 'You reasled:' + keyPressed
    second_content.innerHTML = ' key  up'
    
   }



stop.addEventListener('click',()=>{
    document.removeEventListener("keydown",handedown)
    document.removeEventListener("keyup",handelup)

    first_content.innerHTML=""
    second_content.innerHTML=
    "press start to see functionaltiy"
})

// start.addEventListener('click', put);
// function put() {

//     document.addEventListener
//         ("keydown", (event) => {

//             const keyPressed = event.key;
//             first_content.innerHTML = 'You pressed:' + keyPressed
//             second_content.innerHTML = "key Pressed"

//             console.log(event.key)
//         })



//     document.addEventListener("keyup", (event) => {

//         const keyPressed = event.key;
//         first_content.innerHTML = 'You reasled:' + keyPressed
//         second_content.innerHTML = ' key  up'

//     })
// }

// stop.addEventListener('click', up)

// function up() {

//     second_content.innerHTML = "Press start to use this functionality"
//     first_content.innerHTML = "";


// }

