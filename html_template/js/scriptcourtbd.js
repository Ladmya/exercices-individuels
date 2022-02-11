function askName (){  // la "function" déclare la function / calcule et retourne un résultat
let nom= prompt("Bonjour, quel est ton nom?", "<Entre ton prénom ici>") /* "=" va affecter la valeur de retour de prompt - Concaténation des valeurs*/

document.body.innerHTML += '<h2> Coucou! </h2>' /* "document" ou "DOM (Document Object Model)" est une variable superglobale :  var proposée par le navigateur // ".object" consulter une bibliothèque JS pour trouver une fonction / ".innerhtml" location des éléments à utiliser // "+=" ajoute la balise texte H2, il s'agit d'une concaténation*/
console.log("Bonjour " + nom + " !")
}

function askBirthYear(){
let birthday= prompt("Quel est ta date de naissance ?", "<Entre ici ta date naissance (mm/jj/aaaa)>")
let today= new Date()  // On crée un nouvelle objet "new Date"
let birth= new Date(birthday)
let age_disp = Math.trunc((today-birth)/(365.25*24*60*60*1000)) /* (today-birth) est calculé en milliseconde, d'où la var suivante obligatoire pour convertir en année////Display age ====> comment mettre un entier : Math.trunc(coupe la décimale), Math.floor(arrondi vers le bas), Math.ceil(arrondi vers le haut), Math.round(arrrondi à la valeur la plus proche)  <<<<<<< https://usefulangle.com/post/238/javascript-get-integer-from-decimal-float */

document.body.innerHTML += '<h3> Vous avez </h3>' + age_disp +" ans"
console.log("Vous avez " + age_disp + " ans")
}
askName() // obligatoire de les rappeler en fin pour activer les functions
askBirthYear() // obligatoire de les rappeler en fin pour activer les functions

/* 365.25*24*60*60*1000 (1 AN/ 1 JOUR/ 1 HEURE/ 1 MINUTE/ 1 SECONDE (milliseconde) ou 365.25/24/60/60/1000 / on compte les secondes pour calculer le temps car on fixe un point dans le temps qui n'est pas influencable */ 
// Cf "timestamp" JS negatif positif