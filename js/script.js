
var percorrenza = parseInt(prompt("Quanti chilometri è lungo il tragitto che vuoi percorrere?"));
var eta = parseInt (prompt("Quanti anni hai?"));
var prezzoAlKilometro = 0.21;
var prezzoBigliettoSenzaSconto = prezzoAlKilometro * percorrenza;
var scritto = "Il prezzo del biglietto è "
var euro = " Euro"
console.log(prezzoBigliettoSenzaSconto);

if (eta <= 17) {
 document.getElementById('costo').innerHTML = scritto + ((prezzoBigliettoSenzaSconto / 100) * 80).toFixed(2) + euro;
} else if (eta >= 66) {
 document.getElementById('costo').innerHTML = scritto + ((prezzoBigliettoSenzaSconto / 100) * 60).toFixed(2) + euro;
} else {
 document.getElementById('costo').innerHTML = scritto + (prezzoBigliettoSenzaSconto).toFixed(2) + euro;
}
