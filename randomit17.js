temarandomit = 'lingo'; addinformt = 'https://wikitravel.org/en/Tok_Pisin_phrasebook';

randomit1 = ['Gude.',
'Hi.',
'Hai.',
'Yu stap gut?',
'Mi stap gut.',
'Wannem nem bilong yu?',
'Nem bilong mi emi Knokon',
'Nem bilong mi emi Domit',
'Gutpela long bungim yu.',
'Plis.',
'Tenkyu.',
'Nogat samting.',
'Offim',
'Onim',
'Yes.',
'Nogat.',
'Skius.',
'Mi sori.',
'Mi sori tumas.',
'Gutbai.',
'Lukim yu bihain.',
'Mi no save long Tok Pisin.',
'Mi no save gut long Tok Pisin.',
'Yu save long tok Inglis, a?',
'Husat i save long tok Inglis?',
'Help!',
'Mi no harim tok bilong yu.',
'Maski long planti toktok!',
'Smolhaus i stap we?',
'Larim mi.',
'Noken holim mi!',
'Mi bai singautim polis.',
'Polis!',
'Holim! Raskol!',
'Mi nidim halivim bilong yu.',
'Dispela em wanpela imegensi.',
'Mi no inap painim rot bilong mi.',
'Mi lusim bek/bilum bilong mi.',
'Mi lusim hanpaus bilong mi.',
];


var waktu = new Date();
var jam = waktu.getHours();
var tanggal = waktu.getDate();
var bulan = waktu.getMonth();
var hari = waktu.getDay();
var tahun = waktu.getFullYear();



if ((jam > 2) && (jam <13)){
randomit1 = randomit.concat(['Moning','Moning tru','Moning nau']);
}

if ((jam > 17) || (jam <7)){
randomit1 = randomit.concat(['Gut nait.']);
}