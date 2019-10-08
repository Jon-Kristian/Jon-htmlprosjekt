// JavaScript source code
function clickHere() {
    document.getElementById('svarTest').innerHTML = 'Riktig!';
    document.getElementById('svarTest').style.color = 'green';
}
function noHere() {
    document.getElementById('svarTest').innerHTML = 'Ikke ennå...';
    document.getElementById('svarTest').style.color = 'red';
}
function notThis() {
    document.getElementById('svarTest').innerHTML = 'Nei ikke denne!';
    document.getElementById('svarTest').style.color = 'red';
}
function idGaf() {
    document.getElementById('listdiv').innerHTML;
}