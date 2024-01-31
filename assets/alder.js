const fødselsdato = new Date("1985-01-14T05:30+01:00");

const fødselsår = fødselsdato.getFullYear();
const fødselsmåned = fødselsdato.getMonth();
const fødselsdag = fødselsdato.getDate();

const nå = new Date();
const år = nå.getFullYear();
const måned = nå.getMonth();
const dag = nå.getDate();

let alderÅr = år - fødselsår;
let alderDager;
const bursdag = new Date(år, fødselsmåned, fødselsdag);

if (bursdag > nå) {
  alderDager = Math.floor(
    (nå - new Date(år - 1, fødselsmåned, fødselsdag)) / (1000 * 60 * 60 * 24),
  );
  alderÅr--;
} else {
  alderDager = Math.floor((nå - new Date(år, fødselsmåned, fødselsdag)) / (1000 * 60 * 60 * 24));
}

const dager = (alderDager) => (alderDager > 1 ? alderDager + " dager" : a);

const alder = document.getElementById("alder");

alder.innerHTML = `${alderÅr} år og ${alderDager} dager`;
