const input = document.getElementById("texts");
// abuttonn belongs to add button
const Abutton = document.getElementById("buttons");
const list = document.getElementById("list");
Abutton.addEventListener("click", (e) => {
    var inputvalue = input.value;
    e.preventDefault();

    if( input.value == " "){
        alert("please do something");
        return;
    }
    console.log(input.value);
}
)