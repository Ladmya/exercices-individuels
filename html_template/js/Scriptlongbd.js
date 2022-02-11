let nom = prompt ("Quel est ton nom ?") //creer une variable pour une boite de dialogue
let bnom = "Bonjour "+ nom  + " !") //nouvelle variable pour afficher du string concaténé à la réponse utilisateur
alert(bnom)
document.body.innerHTML += '<h2> Coucou! </h2>'


let birth = prompt("Quel est ton année de naissance ?")
alert(birth)
let birthyear = new Date(birth)  // Année de naissance 
let thisyear = new Date()  // Année en cours
let birthmonthh = prompt("Quel mois ?")  ////
alert(birthmonthh)            ////
let birthmonth = new Date(birthmonthh)   //// Mois de naissance
let thismonth = new Date()  // Mois en cours
let agemonth = thismonth - birthmonth
let age = thisyear - birthyear
let age_disp = Math.trunc(age/(365.25*24*60*60*1000)) //- (agemonth/(365.25*24*60*60*1000)) -Display age ====> comment mettre un entier : Math.trunc(coupe la décimale), Math.floor(arrondi vers le bas), Math.ceil(arrondi vers le haut)  <<<<<<< https://usefulangle.com/post/238/javascript-get-integer-from-decimal-float
alert(age_disp)
document.body.innerHTML += '<h3> Vous avez </h3>' + age_disp +" ans"



