// tady je místo pro náš program

/**
 * Sečte dvě čísla na vstupu a vrátí výsledek
 *
 * @param {int} a
 * @param {int} b
 */
function secti(a, b) {
  let c = a + b;
  return c;
}

/**
 * Upozorní uživatele při spuštění.
 */

 function upozorni() {
  alert("Gratulace, právě jsi spustila tuto funkci!");
}

/**
 * Změní barvu čtverečku
 */
function barva() {
  let ctverec
  ctverec = document.querySelector('.ctverecek')
  ctverec.style.backgroundColor = 'green'
}

function zobraz() {
let vypocet
vypocet = document.querySelector("#vysledek").innerHTML = secti(4, 5);
return vypocet
}
