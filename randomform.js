
function warnai(katak){
warnawarna = ['Red','Green','Blue','Yellow','Cyan','Magenta','Teal','Purple','DarkBlue','DarkRed','Orange','DarkOrange','Golden','Pink','DarkGreen','Orchid','Emerald']
warnapilihan = warnawarna[Math.floor(Math.random()*warnawarna.length)]

katak = "%7B%5Ccolor%7B"+warnapilihan+"%7D%20"+katak+"%7D";


return katak
}


function acakekspres(){

judulform = ['Velocity','Velocity','Acceleration','Acceleration', 'Equation of Motion','Equation of Motion','Equation of Motion','Equation of Motion','Newton 2nd Law','Newton 2nd Law',
'Weight','Dry Friction','Dry Friction', 'Centripetal Acceleration','Centripetal Acceleration','Momentum','Impulse','Impulse']
var psyformu = ['%5Cbar%7Bv%7D%3D%5Cfrac%7B%5CDelta%20s%7D%7B%5CDelta%20t%7D',
'%5Cmathbf%7Bv%7D%3D%5Cfrac%7B%5Cmathrm%7Bd%7D%5Cmathbf%7Bs%7D%20%7D%7B%5Cmathrm%7Bd%7D%20t%7D',
'%5Cmathbf%7Bv%7D%3D%5Cfrac%7B%5Cmathrm%7Bd%7D%5Cmathbf%7Bs%7D%20%7D%7B%5Cmathrm%7Bd%7D%20t%7D',
'%5Cmathbf%7Ba%7D%3D%5Cfrac%7B%5Cmathrm%7Bd%7D%5Cmathbf%7Bv%7D%7D%7B%5Cmathrm%7Bd%7Dt%7D',
'v%3Dv_0&plus;at',
's%3Ds_0&plus;v_0t&plus;%5Cfrac%7B1%7D%7B2%7Dat%5E2',
'v%5E2%3Dv_0%5E2&plus;2a%28s-s_0%29',
'%5Cbar%7Bv%7D%3D%5Cfrac%7B1%7D%7B2%7D%28v&plus;v_0%29',
'%5Csum%20%5Cmathbf%7BF%7D%3Dm%5Cmathbf%7Ba%7D',
'%5Csum%20%5Cmathbf%7BF%7D%3D%5Cfrac%7B%5Cmathrm%7Bd%7D%5Cmathbf%7Bp%7D%7D%7B%5Cmathrm%7Bd%7Dt%7D',
'%5Cmathbf%7BW%7D%3Dm%5Cmathbf%7Bg%7D',
'f_s%20%5Cleq%20%5Cmu_s%20N',
'f_k%20%3D%20%5Cmu_k%20N',
'a_c%20%3D%20%5Cfrac%7Bv%5E2%7D%7Br%7D',
'%5Cmathbf%7Ba%7D_c%20%3D%20-%5Comega%5E2%5Cmathbf%7Br%7D',
'%5Cmathbf%7Bp%7D%3Dm%5Cmathbf%7Bv%7D',
'%5Cmathbf%7BJ%7D%3D%5Cmathbf%7B%5Cbar%7BF%7D%7D%20%5CDelta%20t',
'%5Cmathbf%7BJ%7D%3D%5Cint%20%5Cmathbf%7BF%7D%20%5Cmathrm%7Bd%7Dt'
]
pilihanformula = Math.floor(Math.random()*psyformu.length);
hasil = psyformu[pilihanformula];

if ((Math.random()*10) < 5){
hasil=warnai(hasil);
}

document.getElementById("mathex").setAttribute("src","https://latex.codecogs.com/gif.latex?"+hasil); 
document.getElementById("judulformula").innerHTML = judulform[pilihanformula];
}


acakekspres();