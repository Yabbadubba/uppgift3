
let default_number = 0;

function onpressed() {
    console.log("Pressed");

    const newtext = document.createTextNode(default_number+1+" ");
    default_number = default_number + 1;
    

    const buttondiv = document.getElementById("buttondiv");
    buttondiv.appendChild(newtext);

}