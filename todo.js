document.getElementById("check").checked = true;
var radios = document.getElementsByName("check");
for (var i = 0; i < radios.length; i++) {
    radios[i].checked = false;
}
