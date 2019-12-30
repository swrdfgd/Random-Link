function negtes(katak){
if (katak[0] == '-'){
katak = "%5Cleft%20%28" + katak + "%5Cright%20%29";
}
return katak;
}

function acakmath(hasilakhir, koleksivariabel=['x'],
mode = Math.floor(Math.random()*25)){

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
hasilakhir = acakmath('') + "&plus;" + negtes(acakmath(''));
}

if (mode == 10){
hasilakhir = acakmath('') + "-" + negtes(acakmath(''));
}

if (mode == 11){
carakali = Math.floor(Math.random()*4);
if (carakali == 0){
hasilakhir = acakmath('') + "%5Ctimes%20" + negtes(acakmath(''));
}
if (carakali == 1){
hasilakhir = acakmath('') + "%5Cleft%20%28" + acakmath('') + "%5Cright%20%29";
}
if (carakali == 2){
hasilakhir =  "%5Cleft%20%28" + acakmath('') + "%5Cright%20%29" + negtes(acakmath(''));
}
if (carakali == 3){
hasilakhir =  "%5Cleft%20%28" + acakmath('') + "%5Cright%20%29%5Cleft%20%28" + acakmath('') + "%5Cright%20%29";
}
}

if (mode == 12){
if (Math.floor(Math.random()*2) == 0){
hasilakhir = acakmath('') + "%5Cdiv%20" + negtes(acakmath(''));
}
else{
hasilakhir = "%5Cfrac%7B"+acakmath('')+"%7D%7B"+acakmath('')+"%7D";
}
}

if (mode == 13){
hasilakhir = acakmath('') + "%5E%7B" + acakmath('') + "%7D";
}

if (mode == 14){
hasilakhir = "%5Cleft%20%28" + acakmath('') + "%5Cright%20%29";
}

if (mode == 15){
hasilakhir = "%5Cleft%20%28" + acakmath('') + "%5Cright%20%29";
}

if (mode == 16){
hasilakhir = "%5Csqrt%7B" + acakmath('') + "%7D";
}

if (mode == 17){
hasilakhir = "%5Csqrt%5B"+acakmath('') + "%5D%7B" + acakmath('') +"%7D";
}

if (mode == 19){
hasilakhir = koleksikonstan[Math.floor(Math.random()*koleksikonstan.length)];
carakonstan = Math.floor(Math.random()*3);
if (carakonstan == 1){
hasilakhir = acakmath('') + hasilakhir;
}
if (carakonstan == 2){
hasilakhir = hasilakhir + negtes(acakmath('')) ;
}
}

if (mode == 20){
logbase = acakmath('');
if (Math.floor(Math.random()*2) == 1){logbase = 'e';}
if (logbase == '10'){
hasilakhir = "log%5C%3A%20"+negtes(acakmath(''));
}else if (logbase == 'e'){
hasilakhir = "ln%5C%3A%20"+negtes(acakmath(''));
}
else{
hasilakhir = "log_%7B"+logbase+"%7D"+negtes(acakmath(''));
}
}

if (mode == 21){
hasilakhir = koleksitrigon[Math.floor(Math.random()*koleksitrigon.length)]+"%5C%3A%20"+negtes(acakmath(''));
}

if (mode == 22){
hasilakhir = koleksitrigonh[Math.floor(Math.random()*koleksitrigonh.length)]+"%5C%3A%20"+negtes(acakmath(''));
}

if (mode == 23){
hasilakhir = "%5Cleft%20%7C%20" + acakmath('') + "%20%5Cright%20%7C";
}

if (mode == 24){
hasilakhir = koleksivariabel[Math.floor(Math.random()*koleksivariabel.length)];
carakonstan = Math.floor(Math.random()*3);
if (carakonstan == 1){
hasilakhir = acakmath('') + hasilakhir;
}
if (carakonstan == 2){
hasilakhir = hasilakhir + negtes(acakmath('')) ;
}
}


document.getElementById("mathex").setAttribute("src","https://latex.codecogs.com/gif.latex?"+hasilakhir);

return hasilakhir
}

acakmath('');