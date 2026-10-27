const bttmaisnoticias = document.getElementById("bttmaisnoticias");
const bttmenosnoticias = document.getElementById("bttmenosnoticias");
const not4 = document.getElementById("not4");
const not5 = document.getElementById("not5");
const not6 = document.getElementById("not6");


bttmaisnoticias.addEventListener("click", () =>{ // quando o btoão é clicado aparece as outras notícias
 bttmaisnoticias.hidden = true;
 bttmenosnoticias.hidden = false;
 not4.hidden = false;
 not5.hidden = false;
 not6.hidden = false; 
}) 

bttmenosnoticias.addEventListener("click", () =>{ // quando o btoão é clicado aparece as outras notícias
 bttmaisnoticias.hidden = false;
 bttmenosnoticias.hidden = true;
 not4.hidden = true;
 not5.hidden = true;
 not6.hidden = true; 
}) 