var kaverit = [];

function lisaa(){
    var nimi = document.getElementById("text1").value;
    kaverit.push(nimi);
    nayta();
}
function jarjesta(){
    kaverit.sort();
    nayta();
}
function poista() {
    document.getElementById("kaverit");
    kaverit.pop();
    nayta();
}
function nayta(){
    document.getElementById('kaverit').innerHTML = '';

    for (var i=0; i < kaverit.length; i++){
        document.getElementById('kaverit').innerHTML += '<li>' + kaverit[i] + '</li>';
    }
}