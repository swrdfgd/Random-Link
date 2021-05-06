function modInverse(a, m) {
  // validate inputs
  [a, m] = [Number(a), Number(m)]
  if (Number.isNaN(a) || Number.isNaN(m)) {
    return NaN // invalid input
  }
  a = (a % m + m) % m
  if (!a || m < 2) {
    return NaN // invalid input
  }
  // find the gcd
  const s = []
  let b = m
  while(b) {
    [a, b] = [b, a % b]
    s.push({a, b})
  }
  if (a !== 1) {
    return NaN // inverse does not exists
  }
  // find the inverse
  let x = 1
  let y = 0
  for(let i = s.length - 2; i >= 0; --i) {
    [x, y] = [y,  x - y * Math.floor(s[i].a / s[i].b)]
  }
  return (y % m + m) % m
}

function psudo(array, urutan){
  var metode = Math.ceil(Math.random()*10);
  var bilangan = array[urutan];
  var bilangan2 = array[(urutan + 1)%array.length];
  var bilangan3 = array[(urutan + 2)%array.length];
  var bilangan4 = array[(urutan + 3)%array.length];
  var bilangan5 = array[(urutan + 4)%array.length];
  var bilangan6 = array[(urutan + 5)%array.length];
  var bilangan7 = array[(urutan + 6)%array.length];
  var bilangan8 = array[(urutan + 7)%array.length];
  var bilangan9 = array[(urutan + 8)%array.length];
  
  if (metode == 1){
    bilangan = bilangan*bilangan;
    if (Math.random() < 0.5){
    bilangan = Math.floor((bilangan%(10**15))/(10**6));}else{bilangan = Math.floor((bilangan%(10**14))/(10**5));}
  }
  
  if (metode == 2){
    bilangan = (bilangan*bilangan2)%bilangan3
  }

  if (metode == 3){
    bilangan = (bilangan*bilangan2+bilangan3)%bilangan4
  }
  
  if (metode == 4){
    bilangan = (bilangan+bilangan2)%bilangan3
  }  
  
  if (metode == 5){
    bilangan = abs((bilangan-bilangan2)%bilangan3)
  }  
  
  if (metode == 6){
    bilangan = (bilangan^bilangan2)%bilangan3
  }  
  
  if (metode == 7){
    var counter = 1;
    bilangan = (bilangan+array[(urutan + counter*2)%array.length]*array[(urutan + counter*2-1)%array.length])%10**9;
    counter = counter + 1;
    while (Math.random() < 0.5){
      bilangan = (bilangan+array[(urutan + counter*2)%array.length]*array[(urutan + counter*2-1)%array.length])%10**9;
      counter = counter + 1;
    }
  }  
  
  if (metode == 8){
    var s1 = (bilangan*bilangan2)%bilangan3;
    var s2 = (bilangan4*bilangan5)%bilangan6;
    var s3 = (bilangan7*bilangan8)%bilangan9;
    var r = (s1/bilangan3 + s2/bilangan6 + s3/bilangan9)%1;
    bilangan = Math.ceil(r*(10**9))+1;
  }  
  
  if (metode == 9){
    bilangan = bilangan^(bilangan2|bilangan3)%10**9;
  }  
  
  if (metode == 10){
    if (isNaN(modInverse(bilangan, bilangan4))==false){
      bilangan = (bilangan2*modInverse(bilangan, bilangan4) + bilangan3)%bilangan4;
    }
  }  
  
  bilangan = bilangan + 1;
  return bilangan
}