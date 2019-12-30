
function negtes(katak){
if (katak[0] == '-'){
katak = "%5Cleft%20%28" + katak + "%5Cright%20%29";
}
return katak;
}

function acakmath(hasilakhir, koleksivariabel=['x'],
mode = Math.floor(Math.random()*27)){

koleksikonstan = ['e','%5Cpi','i'];
koleksitrigon = ['sin', 'cos', 'tan', 'csc', 'sec', 'cot', 'arcsin', 'arccos', 'arctan', 'arccsc', 'arcsec', 'arccot'];
if (Math.floor(Math.random()*2) == 1){koleksitrigon = ['sin', 'cos', 'tan', 'csc', 'sec', 'cot', 'sin%5E%7B-1%7D', 'cos%5E%7B-1%7D', 'tan%5E%7B-1%7D', 'csc%5E%7B-1%7D', 'sec%5E%7B-1%7D', 'cot%5E%7B-1%7D'];}
koleksitrigonh = ['sinh', 'cosh', 'tanh', 'csch', 'sech', 'coth', 'arcsinh', 'arccosh', 'arctanh', 'arccsch', 'arcsech', 'arccoth'];
if (Math.floor(Math.random()*2) == 1){koleksitrigonh = ['sinh', 'cosh', 'tanh', 'csch', 'sech', 'coth', 'sinh%5E%7B-1%7D', 'cosh%5E%7B-1%7D', 'tanh%5E%7B-1%7D', 'csch%5E%7B-1%7D', 'sech%5E%7B-1%7D', 'coth%5E%7B-1%7D'];}


if (mode < 9 || mode == 18){
angkastop = 1;
q = 0;
while (angkastop > 0){
q = q+1;
angkastop = Math.floor(Math.random()*(q+2));
}
q = Math.floor(Math.random()*(10^q))
if (mode < 9){
q = q + Math.random()*Math.floor(Math.random()*2);
q = q.toFixed(Math.floor(Math.random()*15));
}
q = q*(1-2*Math.floor(Math.random()*2));
hasilakhir = hasilakhir + q


if (mode == 18){
q = 0;
while (angkastop > 0){
q = q+1;
angkastop = Math.floor(Math.random()*(q+2));
}
q = Math.floor(Math.random()*(10^q))
hasilakhir = hasilakhir + "%5Cfrac%7B"+q+"%7D%7B"
q = 0;
while (angkastop > 0){
q = q+1;
angkastop = Math.floor(Math.random()*(q+2));
}
q = Math.floor(Math.random()*(10^q))
hasilakhir = hasilakhir + q + "%7D";
}
}

if (mode == 9){
hasilakhir = acakmath('',koleksivariabel) + "&plus;" + negtes(acakmath('',koleksivariabel));
}

if (mode == 10){
hasilakhir = acakmath('',koleksivariabel) + "-" + negtes(acakmath('',koleksivariabel));
}

if (mode == 11){
carakali = Math.floor(Math.random()*4);
if (carakali == 0){
hasilakhir = acakmath('',koleksivariabel) + "%5Ctimes%20" + negtes(acakmath('',koleksivariabel));
}
if (carakali == 1){
hasilakhir = acakmath('',koleksivariabel) + "%5Cleft%20%28" + acakmath('',koleksivariabel) + "%5Cright%20%29";
}
if (carakali == 2){
hasilakhir =  "%5Cleft%20%28" + acakmath('',koleksivariabel) + "%5Cright%20%29" + negtes(acakmath('',koleksivariabel));
}
if (carakali == 3){
hasilakhir =  "%5Cleft%20%28" + acakmath('',koleksivariabel) + "%5Cright%20%29%5Cleft%20%28" + acakmath('',koleksivariabel) + "%5Cright%20%29";
}
}

if (mode == 12){
if (Math.floor(Math.random()*2) == 0){
hasilakhir = acakmath('',koleksivariabel) + "%5Cdiv%20" + negtes(acakmath('',koleksivariabel));
}
else{
hasilakhir = "%5Cfrac%7B"+acakmath('',koleksivariabel)+"%7D%7B"+acakmath('',koleksivariabel)+"%7D";
}
}

if (mode == 13){
hasilakhir = acakmath('',koleksivariabel) + "%5E%7B" + acakmath('',koleksivariabel) + "%7D";
}

if (mode == 14){
hasilakhir = "%5Cleft%20%28" + acakmath('',koleksivariabel) + "%5Cright%20%29";
}

if (mode == 15){
hasilakhir = "%5Cleft%20%28" + acakmath('',koleksivariabel) + "%5Cright%20%29";
}

if (mode == 16){
hasilakhir = "%5Csqrt%7B" + acakmath('',koleksivariabel) + "%7D";
}

if (mode == 17){
hasilakhir = "%5Csqrt%5B"+acakmath('',koleksivariabel) + "%5D%7B" + acakmath('',koleksivariabel) +"%7D";
}

if (mode == 19){
hasilakhir = koleksikonstan[Math.floor(Math.random()*koleksikonstan.length)];
carakonstan = Math.floor(Math.random()*3);
if (carakonstan == 1){
hasilakhir = acakmath('',koleksivariabel) + hasilakhir;
}
if (carakonstan == 2){
hasilakhir = hasilakhir + negtes(acakmath('',koleksivariabel)) ;
}
}

if (mode == 20){
logbase = acakmath('',koleksivariabel);
if (Math.floor(Math.random()*2) == 1){logbase = 'e';}
if (logbase == '10'){
hasilakhir = "log%5C%3A%20"+negtes(acakmath('',koleksivariabel));
}else if (logbase == 'e'){
hasilakhir = "ln%5C%3A%20"+negtes(acakmath('',koleksivariabel));
}
else{
hasilakhir = "log_%7B"+logbase+"%7D"+negtes(acakmath('',koleksivariabel));
}
}

if (mode == 21){
hasilakhir = koleksitrigon[Math.floor(Math.random()*koleksitrigon.length)]+"%5C%3A%20"+negtes(acakmath('',koleksivariabel));
}

if (mode == 22){
hasilakhir = koleksitrigonh[Math.floor(Math.random()*koleksitrigonh.length)]+"%5C%3A%20"+negtes(acakmath('',koleksivariabel));
}

if (mode == 23){
hasilakhir = "%5Cleft%20%7C%20" + acakmath('',koleksivariabel) + "%20%5Cright%20%7C";
}

if (mode == 24){
hasilakhir = koleksivariabel[Math.floor(Math.random()*koleksivariabel.length)];
carakonstan = Math.floor(Math.random()*3);
if (carakonstan == 1){
hasilakhir = acakmath('',koleksivariabel) + hasilakhir;
}
if (carakonstan == 2){
hasilakhir = hasilakhir + negtes(acakmath('',koleksivariabel)) ;
}
}

if (mode == 24.5){
hasilakhir = koleksivariabel[Math.floor(Math.random()*koleksivariabel.length)];
}

if (mode == 25){
variabelsuka = ['a','b','c','d','f','g','h','j','k','l','m','n','p','q','r','s','t','u','v','w','y','x','z']
variabelbaru = String.fromCharCode(Math.floor(Math.random()*69630));
if ((Math.random()*10) < 9){
variabelbaru = variabelsuka[Math.floor(Math.random()*variabelsuka.length)];
}
if ((Math.random()*10) < 5){
variabelbaru = 'y';
}
koleksivariabel.push(variabelbaru);
hasilakhir = acakmath('',koleksivariabel);
}

if (mode == 26){
caralimit = Math.floor(Math.random()*3);
if (caralimit == 0){
hasilakhir = "%5Clim_%7B"+acakmath('',koleksivariabel,24.5)+"%5Crightarrow%20"+acakmath('',koleksivariabel)+"%7D"+acakmath('',koleksivariabel);
}
if (caralimit == 1){
hasilakhir = acakmath('',koleksivariabel) + "%5Clim_%7B"+acakmath('',koleksivariabel,24.5)+"%5Crightarrow%20"+acakmath('',koleksivariabel)+"%7D"+acakmath('',koleksivariabel);
}
if (caralimit == 2){
hasilakhir =  "%5Cleft%20%28" + "%5Clim_%7B"+acakmath('',koleksivariabel,24.5)+"%5Crightarrow%20"+acakmath('',koleksivariabel)+"%7D"+acakmath('',koleksivariabel)+ "%5Cright%20%29" + negtes(acakmath('',koleksivariabel));
}
}


document.getElementById("mathex").setAttribute("src","https://latex.codecogs.com/gif.latex?"+hasilakhir);

return hasilakhir
}

acakmath('');