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
function misterFunky() {
    alert('Slutt med det der...');
}
function hoverMouse() {
    document.getElementById('aBox').innerHTML = 'Test!';
}
function noMouse() {
    document.getElementById('aBox').innerHTML = '';
}
function thisTest(clickMe) {
    console.log(clickMe.id);
    clickMe.innerHTML = 'Jammen da så';
}
function kodeF(mottatTrykk) {
    var kodeOrd = document.getElementById('output');

    kodeOrd.innerHTML += mottatTrykk.innerHTML;
}
