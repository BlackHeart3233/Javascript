let vnos = document.getElementById('vnos');
let izracun =""

function vnesi(UporabnikovVnos){
    izracun += UporabnikovVnos
    document.getElementById('vnos').textContent += UporabnikovVnos
}

function result(){
    document.getElementById('vnos').textContent = eval(izracun)
    izracun = String(eval(izracun))
}
function clean(){
    document.getElementById('vnos').textContent =""
    izracun =""
}