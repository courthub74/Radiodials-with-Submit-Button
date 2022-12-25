// radio dial js

// get the radio dials through the DOM
let radio = document.getElementById("radios");
// test print
console.log(radio);
// loop through the radio dials through the parent div
    // radios
    // give it an onclick
radio.addEventListener('click', (e) =>{
    if(e.target && e.target.id == "one"){
        // alert("Button 1");
        // call a function to submit button 
            // that takes this value and makes an alert with it
        // get the value of one
        let one = document.getElementById("one").value;
        console.log(one);
    }
});

// function for 1
function button1(){
    alert("Button1");
}

// buttons dial js

// get the button radios through the DOM
let buttons = document.getElementById("radiobuttons").value;