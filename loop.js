console.log("===========1uzd=========");
// Sugeneruokite 300 atsitiktinių skaičių nuo 0 iki 300, atspausdinkite juos atskirtus tarpais ir suskaičiuokite kiek tarp jų yra didesnių už 150.  Skaičiai didesni nei 275 turi būti atspausdinti skliausteliuose” [ ] “.

let row = "";
let count = 0;

for (let i = 0; i < 300; i++) {
    let a = Math.round(Math.random() * 300);
    if(a > 150){
        count++;
    }

    if(a > 275){
        row += "[" + a + "] ";
    }else {
        row += a + " ";
    }
    
}
console.log(row);
console.log("Daugiau už 150 skaičių yra " + count);

console.log("===========2uzd=========");
// Vienoje eilutėje atspausdinkite visus skaičius nuo 1 iki 3000, kurie dalijasi iš 77 be liekanos. Skaičius atskirkite kableliais. Po paskutinio skaičiaus kablelio neturi būti.

row = "";

for (let i = 0; i < 3000; i+=77) {
        row += i + ", ";   
}

console.log(row);
console.log(row.trim().split(" ").length);
console.log(row.slice(0,-2));

console.log("===========3uzd=========");
// Nupieškite kvadratą iš “*”, kurio kraštines sudaro 10 “*”.


for (let i = 0; i < 10; i++) {
    row = "";
    for (let a = 0; a < 10; a++) {
        row += "*";
        
    }
    console.log(row);
}

console.log("===========5auzd=========");
// Metam monetą. Monetos kritimo rezultatą imituojam Math.random() funkcija, kur 0 yra herbas, o 1 - skaičius. Monetos metimo rezultatus išvedame į ekraną atskiroje eilutėje: “S” jeigu iškrito skaičius ir “H” jeigu herbas. Suprogramuokite tris skirtingus scenarijus kai monetos metimą stabdome:
// Iškritus herbui;
// Tris kartus iškritus herbui;
// Tris kartus iš eilės iškritus herbui;


while (true) {
    let chance = Math.round(Math.random());
    if(chance == 0){
        console.log("H");
        break;
    }else{
        console.log("S");
    }
}

console.log("===========5buzd=========");

count = 0;
while (true) {
    let chance = Math.round(Math.random());
    if(chance == 0){
        console.log("H");
        count++;
    }else{
        console.log("S");
    }

    if(count == 3){
        break;
    }
}

console.log("===========5cuzd=========");

count = 0;
while (true) {
    let chance = Math.round(Math.random());
    if(chance == 0){
        console.log("H");
        count++;
    }else{
        console.log("S");
        count = 0;
    }

    if(count == 3){
        break;
    }
}

console.log("===========7uzd=========");
// Kazys ir Petras žaidžia šaškėm. Petras surenka taškų kiekį nuo 10 iki 20, Kazys surenka taškų kiekį nuo 5 iki 25. Vienoje eilutėje išvesti žaidėjų vardus su taškų kiekiu ir “Partiją laimėjo: ​laimėtojo vardas​”. Taškų kiekį generuokite funkcija ​Math.random()​. Žaidimą laimi tas, kas greičiau surenka 222 taškus. Partijas kartoti tol, kol kažkuris žaidėjas pirmas surenka 222 arba daugiau taškų.

let PetrasCount = 0;
let KazysCount = 0;

while (true) {
    
    let Petras = 10 + Math.round(Math.random() * (10));
    let Kazys = 5 + Math.round(Math.random() * (20));
    PetrasCount += Petras;
    KazysCount += Kazys;
    console.log("Petras " + Petras + " , Kazys " + Kazys);

    if(PetrasCount >= 222 || KazysCount >=222){
        break;
    }
}

if(PetrasCount < KazysCount){
    console.log("Žaidimą laimėjo: Kazys, surinko " + KazysCount + " tašką(ų)");
}else{
    console.log("Žaidimą laimėjo: Petras, surinko " + PetrasCount + " tašką(ų)");
}

console.log("===========8auzd=========");
// Sumodeliuokite vinies kalimą. Įkalimo gylį sumodeliuokite pasinaudodami Math.random() funkcija. Vinies ilgis 8.5cm (pilnai sulenda į lentą).
// “Įkalkite” 5 vinis mažais smūgiais. Vienas smūgis vinį įkala 5-20 mm. 


for (let i = 0; i < 5; i++) {

    let nailDepth = 0;
    let taukstCount = 0;
while (nailDepth < 85) {
    let taukst = 5 + Math.round(Math.random() * 15);
    nailDepth += taukst;
    taukstCount++;
}

console.log((i + 1) + " - asis vinis buvo įkaltas " + taukstCount + " smūgiais. Gylis - " +  nailDepth);
}

console.log("===========8buzd=========");
// “Įkalkite” 5 vinis dideliais smūgiais. Vienas smūgis vinį įkala 20-30 mm, bet yra 50% tikimybė (pasinaudokite Math.random() funkcija tikimybei sumodeliuoti), kad smūgis nepataikys į vinį. Suskaičiuokite kiek reikia smūgių.

for (let i = 0; i < 5; i++) {

    let nailDepth = 0;
    let taukstCount = 0;
while (nailDepth < 85) {
    if(Math.round(Math.random())){
    let taukst = 20 + Math.round(Math.random() * (10));
    nailDepth += taukst;
    }
    taukstCount++;
}

console.log((i + 1) + " - asis vinis buvo įkaltas " + taukstCount + " smūgiais. Gylis - " +  nailDepth);
}
