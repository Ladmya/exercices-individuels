function askName (){
let nom= prompt("Bonjour, quel est ton nom?", "<Entre ton prénom ici>")

document.body.innerHTML += '<h2> Coucou! </h2>'
console.log("Bonjour " + nom + " !")
}

function askBirthYear(){
let birthday= prompt("Quel est ta date de naissance ?", "<Entre ici ta date naissance (mm/jj/aaaa)>")
let today= new Date()
let birth= new Date(birthday)
let age_disp = Math.trunc((today-birth)/(365.25*24*60*60*1000)) ////Display age ====> comment mettre un entier : Math.trunc(coupe la décimale), Math.floor(arrondi vers le bas), Math.ceil(arrondi vers le haut)  <<<<<<< https://usefulangle.com/post/238/javascript-get-integer-from-decimal-float
document.body.innerHTML += '<h3> Vous avez </h3>' + age_disp +" ans"
console.log("Vous avez " + age_disp + " ans")
}
askName()
askBirthYear()

