function indexgen(){
angkastop = 1;
q1 = 0;
while (angkastop > 0){
q1 = q1+1;
angkastop = Math.floor(Math.random()*(q1+2));
}
q1 = Math.floor(Math.random()*(10^q1))
q1 = q1*(1-2*Math.floor(Math.random()*2));

angkastop = 1;
q2 = 0;
while (angkastop > 0){
q2 = q2+1;
angkastop = Math.floor(Math.random()*(q2+2));
}
q2 = Math.floor(Math.random()*(10^q2))
q2 = q2*(1-2*Math.floor(Math.random()*2));

indexi = [q1,q2];

if (q1 > q2){
indexi = [q2,q1];
}

return indexi
}

var banyakragam = 22;
function ragamobjek(){
ragame = 11;
bukanbilangan = [11, 13, 14, 15, 16, 17, 18, 19, 20];
while (bukanbilangan.includes(ragame)){
ragame = Math.floor(Math.random()*banyakragam);
}

return ragame
}

function warnai(katak){
warnawarna = ['Red','Green','Blue','Yellow','Cyan','Magenta','Teal','Purple','DarkBlue','DarkRed','Orange','DarkOrange','Golden','Pink','DarkGreen','Orchid','Emerald']
warnapilihan = warnawarna[Math.floor(Math.random()*warnawarna.length)]

katak = "%7B%5Ccolor%7B"+warnapilihan+"%7D%20"+katak+"%7D";


return katak
}

function tambahvar(himpvar){
variabelfavor = ['x','y','z','r','%20%5Ctheta','%20%5Cvarphi'];
variabelsuka = ['a','b','c','d','f','g','h','j','k','l','m','n','p','q','r','s','t','u','v','w','y','x','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','P','Q','R','S','T','U','V','W','X','Y','Z']
if ((Math.random()*10) < 5){
variabelsuka = variabelsuka.concat('%5Calpha','%5Cbeta','%20%5Cgamma','%20%5Cdelta','%20%5Cvarepsilon','%20%5Ceta','%20%5Ctheta','%20%5Clambda','%20%5Cmu','%20%5Cxi','%20%5Crho','%20%5Csigma','%20%5Cphi','%20%5Cvarphi','%20%5Cpsi','%20%5Comega');
if ((Math.random()*10) < 5){
variabelsuka = variabelsuka.concat('%5Cepsilon','%20%5Czeta','%20%5Cvartheta','%20%5Ciota','%20%5Ckappa','%20%5Cnu','%20%5Cvarpi','%20%5Cvarrho','%20%5Cvarsigma','%20%5Ctau','%20%5Cupsilon','%20%5Cchi');
}
}

variabelbaru = variabelsuka[Math.floor(Math.random()*variabelsuka.length)];
if ((Math.random()*10) < 5){
variabelbaru = variabelfavor[Math.floor(Math.random()*variabelfavor.length)];
}

himpvar.push(variabelbaru);
return himpvar;
}

function negtes(katak){
if (katak[0] == '-'){
katak = "%5Cleft%20%28" + katak + "%5Cright%20%29";
}
return katak;
}

function acakmath(hasilakhir, koleksivariabel=['x'],mode = Math.floor(Math.random()*34)){

koleksikonstan = ['e','%5Cpi','i'];
koleksitrigon = ['%5Csin%20', '%5Ccos%20', '%5Ctan%20', '%5Ccsc%20', '%5Csec%20', '%5Ccot%20', '%5Carcsin%20', '%5Carcos%20', '%5Carctan%20', '%5Ctextrm%7Barccsc%7D', '%5Ctextrm%7Barcsec%7D', '%5Ctextrm%7Barccot%7D'];
if (Math.floor(Math.random()*2) == 1){koleksitrigon = ['%5Csin%20', '%5Ccos%20', '%5Ctan%20', '%5Ccsc%20', '%5Csec%20', '%5Ccot%20', 'sin%5E%7B-1%7D', 'cos%5E%7B-1%7D', 'tan%5E%7B-1%7D', 'csc%5E%7B-1%7D', 'sec%5E%7B-1%7D', 'cot%5E%7B-1%7D'];}
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
hasilakhir = hasilakhir + q;


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

if (mode == 1.5){
angkastop = 1;
q = 0;
while (angkastop > 0){
q = q+1;
angkastop = Math.floor(Math.random()*(q+2));
}
q = Math.floor(Math.random()*(10^q))
q = q*(1-2*Math.floor(Math.random()*2));
hasilakhir = '' +  q;
}


if (mode == 1.6){
angkastop = 1;
q = 0;
while (angkastop > 0){
q = q+1;
angkastop = Math.floor(Math.random()*(q+2));
}
q = Math.floor(Math.random()*(10^q))
hasilakhir = '' + q;
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
p = "%5Ccdot%20";
if (Math.floor(Math.random()*2) == 1){
p = "%5Ctimes%20";
}

hasilakhir = acakmath('',koleksivariabel) + p + negtes(acakmath('',koleksivariabel));
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
if (Math.random()*10 > 8){hasilakhir = "%5Cmeasuredangle%20"+hasilakhir;}

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
if (Math.random()*10 > 8){hasilakhir = "%5Cmeasuredangle%20"+hasilakhir;}
}

if (mode == 25){
koleksivariabel = tambahvar(koleksivariabel);
hasilakhir = acakmath('',koleksivariabel);
}

if (mode == 26){
caralimit = Math.floor(Math.random()*3);
t = acakmath('',koleksivariabel)
if (Math.random()*10 < 1){
t = "%5Cinfty"
if (Math.random()*10 < 5){
t = "-%5Cinfty"
}
}

if (caralimit == 0){
hasilakhir = "%5Clim_%7B"+acakmath('',koleksivariabel,24.5)+"%5Crightarrow%20"+t+"%7D"+ acakmath('',koleksivariabel);
}
if (caralimit == 1){
hasilakhir = acakmath('',koleksivariabel) + "%5Clim_%7B"+acakmath('',koleksivariabel,24.5)+"%5Crightarrow%20"+t+"%7D"+acakmath('',koleksivariabel);
}
if (caralimit == 2){
hasilakhir =  "%5Cleft%20%28" + "%5Clim_%7B"+acakmath('',koleksivariabel,24.5)+"%5Crightarrow%20"+t+"%7D"+acakmath('',koleksivariabel)+ "%5Cright%20%29" + negtes(acakmath('',koleksivariabel));
}
}

if (mode == 27){
koleksivariabel = tambahvar(koleksivariabel);

v1 = acakmath('',koleksivariabel,24.5);
v2 = acakmath('',koleksivariabel,24.5);
hasilakhir = "%5Cfrac%7B%5Cmathrm%7Bd%7D%20"+v1+"%7D%7B%5Cmathrm%7Bd%7D%20"+v2+"%7D";

if ((Math.random()*10) > 8){
v1 = acakmath('',koleksivariabel,24.5);
hasilakhir = "%5Cfrac%7B%5Cmathrm%7Bd%7D%20"+v1+"%7D%7B%5Cmathrm%7Bd%7D%20"+v2+"%7D";
}
if ((Math.random()*10) < 5){
v1 = "%5Cleft%20%28" + acakmath('',koleksivariabel)+"%5Cright%20%29";
hasilakhir = "%5Cfrac%7B%5Cmathrm%7Bd%7D%20%7D%7B%5Cmathrm%7Bd%7D%20"+v2+"%7D"+v1;
}
}

if (mode == 28){
caralimit = Math.floor(Math.random()*3);
if (caralimit == 0){
hasilakhir = "%5Cint%20" +"%5Cleft%20%28" + acakmath('',koleksivariabel) + "%5Cright%20%29%5Cmathrm%7Bd%7D"+acakmath('',koleksivariabel,24.5);
}
if (caralimit == 1){
hasilakhir = acakmath('',koleksivariabel) + "%5Cint%20" +"%5Cleft%20%28" + acakmath('',koleksivariabel) + "%5Cright%20%29%5Cmathrm%7Bd%7D"+acakmath('',koleksivariabel,24.5);
}
if (caralimit == 2){
hasilakhir =  "%5Cleft%20%28" + "%5Cint%20" +"%5Cleft%20%28" + acakmath('',koleksivariabel) + "%5Cright%20%29%5Cmathrm%7Bd%7D"+acakmath('',koleksivariabel,24.5) + "%5Cright%20%29" + negtes(acakmath('',koleksivariabel));
}
}

if (mode == 29){
hasilakhir = warnai(acakmath('',koleksivariabel));
}

if (mode == 30){
caralimit = Math.floor(Math.random()*3);
t1 = acakmath('',koleksivariabel); if (Math.random()*10 < 1){t1 = "-%5Cinfty"}
t2 = acakmath('',koleksivariabel); if (Math.random()*10 < 1){t2 = "%5Cinfty"}
if (caralimit == 0){
hasilakhir = "%5Cint_%7B"+t1+"%7D%5E%7B"+t2+"%7D" +"%5Cleft%20%28" + acakmath('',koleksivariabel) + "%5Cright%20%29%5Cmathrm%7Bd%7D"+acakmath('',koleksivariabel,24.5);
}
if (caralimit == 1){
hasilakhir = acakmath('',koleksivariabel) + "%5Cint_%7B"+t1+"%7D%5E%7B"+t2+"%7D" +"%5Cleft%20%28" + acakmath('',koleksivariabel) + "%5Cright%20%29%5Cmathrm%7Bd%7D"+acakmath('',koleksivariabel,24.5);
}
if (caralimit == 2){
hasilakhir =  "%5Cleft%20%28" + "%5Cint_%7B"+t1+"%7D%5E%7B"+t2+"%7D" +"%5Cleft%20%28" + acakmath('',koleksivariabel) + "%5Cright%20%29%5Cmathrm%7Bd%7D"+acakmath('',koleksivariabel,24.5) + "%5Cright%20%29" + negtes(acakmath('',koleksivariabel));
}
}

if (mode == 31){
hasilakhir = "-" + negtes(acakmath('',koleksivariabel));
}

if (mode == 32){
koleksivariabel = tambahvar(koleksivariabel);

v1 = acakmath('',koleksivariabel,24.5);
v2 = acakmath('',koleksivariabel,24.5);
hasilakhir = "%5Cfrac%7B%5Cpartial%20"+v1+"%7D%7B%5Cpartial%20"+v2+"%7D";

if ((Math.random()*10) > 8){
v1 = acakmath('',koleksivariabel,24.5);
hasilakhir = "%5Cfrac%7B%5Cpartial%20"+v1+"%7D%7B%5Cpartial%20"+v2+"%7D";
}
if ((Math.random()*10) < 5){
v1 = "%5Cleft%20%28" + acakmath('',koleksivariabel)+"%5Cright%20%29";
hasilakhir = "%5Cfrac%7B%5Cpartial%20%7D%7B%5Cpartial%20"+v2+"%7D"+v1;
}
}

if (mode == 33){
indeks = indexgen();

caralimit = Math.floor(Math.random()*3);
if (caralimit == 0){
hasilakhir = "%5Csum_%7B"+acakmath('',koleksivariabel,24.5)+"%3D"+indeks[0]+"%7D%5E%7B"+indeks[1]+"%7D"+acakmath('',koleksivariabel);
}
if (caralimit == 1){
hasilakhir = acakmath('',koleksivariabel) + "%5Csum_%7B"+acakmath('',koleksivariabel,24.5)+"%3D"+indeks[0]+"%7D%5E%7B"+indeks[1]+"%7D"+acakmath('',koleksivariabel);
}
if (caralimit == 2){
hasilakhir =  "%5Cleft%20%28" + "%5Csum_%7B"+acakmath('',koleksivariabel,24.5)+"%3D"+indeks[0]+"%7D%5E%7B"+indeks[1]+"%7D"+acakmath('',koleksivariabel) + "%5Cright%20%29" + negtes(acakmath('',koleksivariabel));
}
}


return hasilakhir
}

function acakekspres(ragam = Math.floor(Math.random()*banyakragam)){

if (ragam == 0){
hasil = acakmath('');
}

if (ragam == 1){
hasil = acakmath('',['x'],1.5);
}

if (ragam == 2){
hasil1 = acakmath('',['x'],1.5);
hasil2 = acakmath('',['x'],1.5);
hasil = "%5Cfrac%7B"+hasil1+"%7D%7B"+hasil2+"%7D"
}

if (ragam == 3){
hasil = acakmath('',['x'],18);
}

if (ragam == 4){
hasil = acakmath('',['x','y']);
}

if (ragam == 5){
hasil = acakmath('',['r','%20%5Ctheta']);
}

if (ragam == 6){
hasil = acakmath('',['x','y','z']);
}

if (ragam == 7){
hasil = acakmath('',['r','%20%5Ctheta','z']);
}

if (ragam == 8){
hasil = acakmath('',['r','%20%5Ctheta','%20%5Cvarphi']);
}

if (ragam == 9){
variabel = [];
for (k = -1; k < Math.random()*10; k++){variabel = tambahvar(variabel);}
hasil = acakmath('',variabel);
}

if (ragam == 10){
hasil = acakmath('',['x'],1.5);
t = '';
while (Math.random()*(hasil.length+1)<Math.random()*(hasil.length+1)){
t = t + acakmath('',['x'],1.6);
}
if (t.length==0){}else{hasil=hasil+'.'+t;}
r = '';
while (Math.random()*(hasil.length+1)<Math.random()*(hasil.length+1)){
r = r + acakmath('',['x'],1.6);
}

if((r.length)==0){
} else if ((t.length)==0){
hasil=hasil+'.%5Coverline%7B'+r+'%7D';
} else{
hasil=hasil+'%5Coverline%7B'+r+'%7D';
}

}

if (ragam == 11){
variabel = [];
for (k = -1; k < Math.random()*10; k++){variabel = tambahvar(variabel);}
hasil = acakmath('',variabel,24.5)+"%5CRightarrow%20"+acakmath('',variabel,24.5);;
}

if (ragam == 12){
hasil = acakmath('',['x'],1.5);
t = ''
while (Math.random()*(hasil.length+1)<Math.random()*(hasil.length+1)){
t = t + acakmath('',['x'],1.6);
}
if (t==''){}else{hasil=hasil+'.'+t+'...';}
}

if (ragam == 13){
hasil = "%5Cbegin%7Bpmatrix%7D%20" + acakekspres(ragamobjek());
p = 1;
while (Math.floor(Math.random()*hasil.length)<Math.floor(Math.random()*hasil.length)){
hasil = hasil + "%20%26%20" +  acakekspres(ragamobjek());
p++;
}
while (Math.floor(Math.random()*hasil.length)<Math.floor(Math.random()*hasil.length)){
hasil = hasil + "%20%5C%5C%20" + acakekspres(ragamobjek());
for (k = 1; k < p; k++){
hasil = hasil + "%20%26%20" +  acakekspres(ragamobjek());
}
}
hasil = hasil + "%20%5Cend%7Bpmatrix%7D"
}

if (ragam == 14){
hasil = acakekspres(ragamobjek())+"%3D"+acakekspres(ragamobjek());
}

if (ragam == 15){
hasil = "%5Cleft%20%5C%7B%20" + acakekspres(ragamobjek());
while (Math.floor(Math.random()*hasil.length)<Math.floor(Math.random()*hasil.length)){
hasil = hasil + "%2C" +  acakekspres(ragamobjek());
}
hasil = hasil + "%20%5Cright%20%5C%7D"
}

if (ragam == 16){
var banyakmatriks = 2;
while (Math.random()<0.5){
banyakmatriks = banyakmatriks + 1;
}
hasil = "%5Cbegin%7Bpmatrix%7D%20" + acakekspres(ragamobjek());
p = 1;
p2 = 1;
while (Math.floor(Math.random()*hasil.length)<Math.floor(Math.random()*hasil.length)){
hasil = hasil + "%20%26%20" +  acakekspres(ragamobjek());
p++;
}
while (Math.floor(Math.random()*hasil.length)<Math.floor(Math.random()*hasil.length)){
p2++;
hasil = hasil + "%20%5C%5C%20" + acakekspres(ragamobjek());
for (k = 1; k < p; k++){
hasil = hasil + "%20%26%20" +  acakekspres(ragamobjek());
}
}
hasil = hasil + "%20%5Cend%7Bpmatrix%7D"
for (k2 = 1; k2 < banyakmatriks; k2++){
hasil = hasil + "+";
hasil = hasil + "%5Cbegin%7Bpmatrix%7D%20" + acakekspres(ragamobjek());
for (k = 1; k < p; k++){
hasil = hasil + "%20%26%20" +  acakekspres(ragamobjek());
}
for (k3 = 1; k3 < p2; k3++){
hasil = hasil + "%20%5C%5C%20" + acakekspres(ragamobjek());
for (k = 1; k < p; k++){
hasil = hasil + "%20%26%20" +  acakekspres(ragamobjek());
}
}
hasil = hasil + "%20%5Cend%7Bpmatrix%7D";
}
}

if (ragam == 17){
hasil = "%5Csup%20" + acakekspres(15);
}

if (ragam == 18){
var psyformu = ['C%3D%5Cfrac%7B2%5Cpi%20%5Ckappa%20%5Cvarepsilon%20_%7B0%7D%5Cell%7D%7B%5Cln%20%28r_%7B2%7D/r_%7B1%7D%29%7D',
'%5Coint%20%5Cmathbf%7BE%7D%5Ccdot%20%5Cmathrm%7Bd%7D%20%5Cmathbf%7Bs%7D%3D%5Cfrac%7B%5Cpartial%20%5CPhi%20_%7BB%7D%7D%7B%5Cpartial%20t%7D',
'%5Cnabla%20%5Ctimes%20%5Cmathbf%7BE%7D%3D-%5Cfrac%7B%5Cpartial%20%5Cmathbf%7BB%7D%7D%7B%5Cpartial%20t%7D'
]
hasil = psyformu[Math.floor(Math.random()*psyformu.length)];
}

if (ragam == 19){
var iterham = 1;
var ukurmatr = 1;
while (Math.random()<0.5){
iterham = iterham + 1;
ukurmatr = ukurmatr*2 
}
hadam = math.ones(1,1)
for (k = 1; k < iterham; k++){
hadam = math.concat(math.concat(hadam,hadam,1),math.concat(hadam,math.multiply(hadam,-1),1),0);
}
hasil = "%5Cbegin%7Bpmatrix%7D%20";
for (k1 = 0; k1 < ukurmatr; k1++){
if (k1 > 0){hasil = hasil + "%20%5C%5C%20";}
for (k2 = 0; k2 < ukurmatr; k2++){
if (k2 > 0){hasil = hasil + "%20%26%20";}
hasil = hasil + math.subset(hadam, math.index(k1,k2))
}
}
hasil = hasil + "%20%5Cend%7Bpmatrix%7D";
iterham = iterham - 1;
if (iterham > 0){
if (iterham == 2){
hasil = "%5Cfrac%7B1%7D%7B2%7D" + hasil;
}
else
{hasil = "%5Cfrac%7B1%7D%7B2%5E%7B%5Cfrac%7B"+iterham+"%7D%7B2%7D%7D%7D" + hasil;}
}
}

if (ragam == 20){
var chelem = ['H','He','Li','Be','B','C','N','O','F','Ne','Na','Mg','Al','Si','P','S','Cl','Ar','K','Ca','Sc','Ti','V','Cr','Mn','Fe','Co','Ni','Cu','Zn','Ga','Ge','As','Se','Br','Kr','Rb','Sr','Y','Zr','Nb','Mo','Tc','Ru','Rh','Pd','Ag','Cd','In','Sn','Sb','Te','I','Xe','Cs','Ba','La','Ce','Pr','Nd','Pm','Sm','Eu','Gd','Tb','Dy','Ho','Er','Tm','Yb','Lu','Hf','Ta','W','Re','Os','Ir','Pt','Au','Hg','Tl','Pb','Bi','Po','At','Rn','Fr','Ra','Ac','Th','Pa','U','Np','Pu','Am','Cm','Bk','Cf','Es','Fm','Md','No','Lr','Rf','Db','Sg','Bh','Hs','Mt'];
hasil = chelem[Math.floor(Math.random()*chelem.length)];
}

if (ragam == 21){
hasil = acakekspres();
if (isNaN(Number(hasil))==false){
kebiner = Number(hasil);
kebiner = kebiner.toString(2);
hasil = '' + kebiner;
}
}

if ((Math.random()*10) < 5){
hasil=warnai(hasil);
}

document.getElementById("mathex").setAttribute("src","https://latex.codecogs.com/gif.latex?"+hasil); 
return hasil
}


acakekspres();
