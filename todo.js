const input = document.getElementById("texts");
// abuttonn belongs to add button
const Abutton = document.getElementById("buttons");
const list = document.getElementById("list");
Abutton.addEventListener("click", (e) => {
    var inputvalue = input.value;
    e.preventDefault();

    if( input.value == ""){
        alert("Let's make it happen!");
        return;
    }

const checkbox = document.createElement('input');
checkbox.type = 'checkbox';
checkbox.addEventListener('change', (e) => {
    if (checkbox.checked) {
        label.classList.add('strikethrough');
    } 
    else {
        label.classList.remove('strikethrough');
    }
})

const label = document.createElement('label');
label.textContent = input.value.trim();

list.appendChild(checkbox);
list.appendChild(label);

input.value = "";

}
)