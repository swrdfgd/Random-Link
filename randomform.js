
function warnai(katak){
warnawarna = ['Red','Green','Blue','Yellow','Cyan','Magenta','Teal','Purple','DarkBlue','DarkRed','Orange','DarkOrange','Golden','Pink','DarkGreen','Orchid','Emerald']
warnapilihan = warnawarna[Math.floor(Math.random()*warnawarna.length)]

katak = "%7B%5Ccolor%7B"+warnapilihan+"%7D%20"+katak+"%7D";


return katak
}


function acakekspres(){

judulform = ['Velocity','Velocity','Acceleration','Acceleration', 'Equation of Motion','Equation of Motion','Equation of Motion','Equation of Motion','Newton 2nd Law','Newton 2nd Law','Weight','Dry Friction','Dry Friction', 'Centripetal Acceleration','Centripetal Acceleration','Momentum','Impulse','Impulse','Impulse-Momentum','Impulse-Momentum','Work','Work','Work-Energy','Work-Energy','Kinetic Energy','Kinetic Energy','General Potential Energy','General Potential Energy','Gravitational Potential Energy','Efficiency','Power','Power','Power-Velocity','Power-Velocity',
'Angular Velocity',];
var psyformu = ['%5Cbar%7Bv%7D%3D%5Cfrac%7B%5CDelta%20s%7D%7B%5CDelta%20t%7D','%5Cmathbf%7Bv%7D%3D%5Cfrac%7B%5Cmathrm%7Bd%7D%5Cmathbf%7Bs%7D%20%7D%7B%5Cmathrm%7Bd%7D%20t%7D','%5Cmathbf%7Bv%7D%3D%5Cfrac%7B%5Cmathrm%7Bd%7D%5Cmathbf%7Bs%7D%20%7D%7B%5Cmathrm%7Bd%7D%20t%7D','%5Cmathbf%7Ba%7D%3D%5Cfrac%7B%5Cmathrm%7Bd%7D%5Cmathbf%7Bv%7D%7D%7B%5Cmathrm%7Bd%7Dt%7D','v%3Dv_0&plus;at','s%3Ds_0&plus;v_0t&plus;%5Cfrac%7B1%7D%7B2%7Dat%5E2','v%5E2%3Dv_0%5E2&plus;2a%28s-s_0%29','%5Cbar%7Bv%7D%3D%5Cfrac%7B1%7D%7B2%7D%28v&plus;v_0%29','%5Csum%20%5Cmathbf%7BF%7D%3Dm%5Cmathbf%7Ba%7D','%5Csum%20%5Cmathbf%7BF%7D%3D%5Cfrac%7B%5Cmathrm%7Bd%7D%5Cmathbf%7Bp%7D%7D%7B%5Cmathrm%7Bd%7Dt%7D','%5Cmathbf%7BW%7D%3Dm%5Cmathbf%7Bg%7D','f_s%20%5Cleq%20%5Cmu_s%20N','f_k%20%3D%20%5Cmu_k%20N','a_c%20%3D%20%5Cfrac%7Bv%5E2%7D%7Br%7D','%5Cmathbf%7Ba%7D_c%20%3D%20-%5Comega%5E2%5Cmathbf%7Br%7D','%5Cmathbf%7Bp%7D%3Dm%5Cmathbf%7Bv%7D','%5Cmathbf%7BJ%7D%3D%5Cmathbf%7B%5Cbar%7BF%7D%7D%20%5CDelta%20t','%5Cmathbf%7BJ%7D%3D%5Cint%20%5Cmathbf%7BF%7D%20%5Cmathrm%7Bd%7Dt','%5Cmathbf%7B%5Cbar%7BF%7D%7D%5CDelta%20t%3Dm%5CDelta%20%5Cmathbf%7Bv%7D','%5Cint%20%5Cmathbf%7BF%7D%20%5C%3B%20%5Cmathrm%7Bd%7Dt%20%3D%5CDelta%20%5Cmathbf%7Bp%7D','W%3D%5Coverline%7BF%7D%5CDelta%20s%5Ccos%20%5Ctheta','W%3D%5Cint%20%5Cmathbf%7BF%7D%5Ccdot%20%5Cmathrm%7Bd%7D%5Cmathbf%7Bs%7D','%5Coverline%7BF%7D%5CDelta%20s%5Ccos%20%5Ctheta%20%3D%5CDelta%20E','%5Cint%20%5Cmathbf%7BF%7D%5Ccdot%20%5Cmathrm%7Bd%7D%5Cmathbf%7Bs%7D%3D%5CDelta%20E','K%3D%5Cfrac%7B1%7D%7B2%7Dmv%5E2','K%3D%5Cfrac%7Bp%5E2%7D%7B2m%7D','%5CDelta%20U%3D-%5Cint%20%5Cmathbf%7BF%7D%5Ccdot%20%5Cmathrm%7Bd%7D%5Cmathbf%7Bs%7D','%5Cmathbf%7BF%7D%3D-%5Cnabla%20U','%5CDelta%20U_g%3Dmg%5CDelta%20h','%5Ceta%20%3D%5Cfrac%7BW_%7Bout%7D%7D%7BE_%7Bin%7D%7D','%5Coverline%7BP%7D%3D%5Cfrac%7B%5CDelta%20W%7D%7B%5CDelta%20t%7D','P%3D%5Cfrac%7B%5Cmathrm%7Bd%7D%20W%7D%7B%5Cmathrm%7Bd%7D%20t%7D','P%3DFv%5Ccos%20%5Ctheta','P%3D%5Cmathbf%7BF%7D%5Ccdot%20%5Cmathbf%7Bv%7D',
'%5Coverline%7B%5Cboldsymbol%7B%5Comega%20%7D%7D%3D%5Cfrac%7B%5CDelta%20%5Cboldsymbol%7B%5Ctheta%7D%20%7D%7B%5CDelta%20t%7D',

];
pilihanformula = Math.floor(Math.random()*psyformu.length);
hasil = psyformu[pilihanformula];

if ((Math.random()*10) < 5){
hasil=warnai(hasil);
}

document.getElementById("mathex").setAttribute("src","https://latex.codecogs.com/gif.latex?"+hasil); 
document.getElementById("judulformula").innerHTML = judulform[pilihanformula];
}


acakekspres();
