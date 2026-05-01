// SwaraLanka — Song & Artist Database

const SONGS = [
  {id:1,title:"Danno Budunge",artist:"Traditional",instruments:["piano","guitar"],difficulty:"easy",key:"C Major",genre:"Traditional",views:4820,likes:312},
  {id:2,title:"Sanda Eliya Wage",artist:"Amaradeva",instruments:["piano","guitar","violin"],difficulty:"medium",key:"G Major",genre:"Classical",views:3950,likes:278},
  {id:3,title:"Mal Pokuru Pokuru",artist:"Clarence Wijewardene",instruments:["guitar"],difficulty:"easy",key:"D Major",genre:"Pop",views:3410,likes:241},
  {id:4,title:"Oba Nathuwa",artist:"Rookantha Gunathilaka",instruments:["piano"],difficulty:"medium",key:"A Minor",genre:"Ballad",views:3100,likes:219},
  {id:5,title:"Mihijaya Geethaya",artist:"Victor Rathnayake",instruments:["guitar","piano"],difficulty:"medium",key:"F Major",genre:"Classical",views:2890,likes:198},
  {id:6,title:"Api Kawuruda",artist:"Wayo",instruments:["guitar"],difficulty:"easy",key:"E Minor",genre:"Rock",views:2740,likes:187},
  {id:7,title:"Kawulu Piyan Path",artist:"Kasun Kalhara",instruments:["piano"],difficulty:"hard",key:"B Minor",genre:"Ballad",views:2610,likes:176},
  {id:8,title:"Penena Nopenena",artist:"Athma Liyanage",instruments:["piano","guitar"],difficulty:"medium",key:"G Minor",genre:"Pop",views:2480,likes:165},
  {id:9,title:"Sithin Ma Noseli",artist:"Nanda Malini",instruments:["guitar"],difficulty:"easy",key:"C Major",genre:"Classical",views:2350,likes:154},
  {id:10,title:"Bambara Nade",artist:"Sunil Edirisinghe",instruments:["piano"],difficulty:"medium",key:"D Minor",genre:"Traditional",views:2210,likes:148},
  {id:11,title:"Guwan Thilaka",artist:"Edward Jayakody",instruments:["guitar","violin"],difficulty:"medium",key:"A Major",genre:"Classical",views:2090,likes:139},
  {id:12,title:"Sanda Kinduru",artist:"Sanath Nandasiri",instruments:["piano"],difficulty:"easy",key:"G Major",genre:"Classical",views:1980,likes:131},
  {id:13,title:"Ran Sihinayaki",artist:"Amaradeva",instruments:["piano","violin"],difficulty:"hard",key:"E Minor",genre:"Classical",views:1870,likes:122},
  {id:14,title:"Ma Nivena Daa",artist:"Rookantha Gunathilaka",instruments:["piano","guitar"],difficulty:"medium",key:"F Minor",genre:"Ballad",views:1760,likes:115},
  {id:15,title:"Sudu Araliya",artist:"Clarence Wijewardene",instruments:["guitar"],difficulty:"easy",key:"C Major",genre:"Pop",views:1650,likes:108},
  {id:16,title:"Seethala Gamane",artist:"Victor Rathnayake",instruments:["piano"],difficulty:"medium",key:"G Major",genre:"Classical",views:1540,likes:101},
  {id:17,title:"Kande Gedara",artist:"Kasun Kalhara",instruments:["piano","guitar"],difficulty:"hard",key:"D Major",genre:"Ballad",views:1430,likes:95},
  {id:18,title:"Pem Sewwa",artist:"Athma Liyanage",instruments:["guitar"],difficulty:"easy",key:"A Minor",genre:"Pop",views:1320,likes:88},
  {id:19,title:"Adara Pooja",artist:"Sanath Nandasiri",instruments:["piano"],difficulty:"medium",key:"C Major",genre:"Traditional",views:1210,likes:81},
  {id:20,title:"Nil Yahana",artist:"Edward Jayakody",instruments:["guitar","piano"],difficulty:"easy",key:"G Major",genre:"Classical",views:1100,likes:74},
  {id:21,title:"Heenayaki Mage",artist:"Nanda Malini",instruments:["piano"],difficulty:"hard",key:"F Major",genre:"Classical",views:990,likes:67},
  {id:22,title:"Obata Salakuna",artist:"Sunil Edirisinghe",instruments:["guitar"],difficulty:"easy",key:"D Minor",genre:"Traditional",views:880,likes:60},
  {id:23,title:"Mathaka Wewa",artist:"Wayo",instruments:["guitar","piano"],difficulty:"medium",key:"E Major",genre:"Rock",views:770,likes:53},
  {id:24,title:"Ahasata Kiya",artist:"Amaradeva",instruments:["violin","piano"],difficulty:"hard",key:"B Minor",genre:"Classical",views:660,likes:46},
  {id:25,title:"Wage Wage",artist:"Rookantha Gunathilaka",instruments:["guitar","piano"],difficulty:"easy",key:"C Major",genre:"Pop",views:620,likes:42},
  {id:26,title:"Sithuvili Malhara",artist:"Nanda Malini",instruments:["piano"],difficulty:"medium",key:"D Major",genre:"Classical",views:580,likes:39},
  {id:27,title:"Deveni Inimaga",artist:"Kasun Kalhara",instruments:["piano","guitar"],difficulty:"medium",key:"G Minor",genre:"Ballad",views:540,likes:36},
  {id:28,title:"Numba Nisa",artist:"Clarence Wijewardene",instruments:["guitar"],difficulty:"easy",key:"A Major",genre:"Pop",views:500,likes:33},
  {id:29,title:"Piyum Bihidu",artist:"Sanath Nandasiri",instruments:["piano"],difficulty:"easy",key:"C Major",genre:"Traditional",views:460,likes:30},
  {id:30,title:"Sagara Tharanga",artist:"Victor Rathnayake",instruments:["piano","violin"],difficulty:"hard",key:"F Major",genre:"Classical",views:420,likes:27},
];

const ARTISTS = [
  {id:'a1',name:'Amaradeva',born:1927,songs:3,genre:'Classical',bio:"National treasure of Sri Lanka. The greatest Sinhala classical musician and composer of the modern era.",icon:'🎼',color:'#C9A84C'},
  {id:'a2',name:'Clarence Wijewardene',born:1943,songs:3,genre:'Pop / Baila',bio:"The father of Sinhala pop music. Brought modern sounds to Sri Lankan music in the 70s and 80s.",icon:'🎸',color:'#9B94FF'},
  {id:'a3',name:'Rookantha Gunathilaka',born:1960,songs:3,genre:'Ballad',bio:"One of Sri Lanka's most beloved vocalists known for emotional ballads and romantic songs.",icon:'🎤',color:'#f87171'},
  {id:'a4',name:'Victor Rathnayake',born:1938,songs:3,genre:'Classical',bio:"Legendary classical singer who popularised Sinhala light music across generations.",icon:'🎻',color:'#38bdf8'},
  {id:'a5',name:'Nanda Malini',born:1945,songs:3,genre:'Classical / Folk',bio:"Iconic voice of Sri Lanka. Known for profound and poetic Sinhala songs with deep meaning.",icon:'🌸',color:'#e879f9'},
  {id:'a6',name:'Sanath Nandasiri',born:1940,songs:3,genre:'Traditional',bio:"Master of traditional Sinhala music with a career spanning six decades.",icon:'🪘',color:'#4ade80'},
  {id:'a7',name:'Kasun Kalhara',born:1979,songs:3,genre:'Ballad',bio:"Modern Sri Lankan composer and singer known for cinematic ballads and film soundtracks.",icon:'🎹',color:'#fbbf24'},
  {id:'a8',name:'Edward Jayakody',born:1948,songs:2,genre:'Classical',bio:"Distinguished musician celebrated for his contributions to classical Sinhala music.",icon:'🎺',color:'#fb923c'},
  {id:'a9',name:'Sunil Edirisinghe',born:1947,songs:2,genre:'Traditional',bio:"Beloved for his warm voice and traditional Sinhala folk songs loved by all generations.",icon:'🪗',color:'#34d399'},
  {id:'a10',name:'Wayo',born:1988,songs:2,genre:'Rock / Pop',bio:"Sri Lanka's pioneering rock band that defined modern Sinhala rock music.",icon:'🎸',color:'#818cf8'},
  {id:'a11',name:'Athma Liyanage',born:1985,songs:2,genre:'Pop',bio:"Contemporary Sinhala pop star known for heartfelt melodies and modern production.",icon:'🎤',color:'#f472b6'},
];

const GENRES = [
  {id:'Classical',label:'Classical',icon:'🎼',color:'#C9A84C',desc:"Traditional Sinhala classical compositions rooted in Carnatic and Western influences.",count:10},
  {id:'Traditional',label:'Traditional',icon:'🪘',color:'#4ade80',desc:"Ancient folk songs and traditional melodies passed down through generations.",count:5},
  {id:'Ballad',label:'Ballad',icon:'💛',color:'#fbbf24',desc:"Emotional slow songs about love, longing and life — Sri Lanka's favourite genre.",count:5},
  {id:'Pop',label:'Pop',icon:'🎤',color:'#e879f9',desc:"Modern Sinhala pop songs from the 70s to today — catchy, fun and widely loved.",count:6},
  {id:'Rock',label:'Rock',icon:'🎸',color:'#818cf8',desc:"Sinhala rock music — from classic bands to modern alternative.",count:2},
];

const NOTATION = {
  intro:[{notes:["C","C","E","G","E","C","–"],lyric:""},{notes:["G","E","C","E","G","C","–"],lyric:""}],
  verse:[
    {notes:["G","A","G","E","D","C","–"],lyric:"Dan  -  no    Bu  -  dun  -  ge"},
    {notes:["F","E","F","G","A","–","–"],lyric:"Si  -  tha  -  la   ge"},
    {notes:["A","G","A","C","B","A","–"],lyric:"Ma  -  ma   La  -  ka  -  ne"},
    {notes:["G","E","D","C","–","–","–"],lyric:"Bo   -   da"}
  ],
  chorus:[
    {notes:["E","G","A","G","E","C","–"],lyric:"Ga  -  ya   na   pu  -  da"},
    {notes:["G","F","E","D","C","–","–"],lyric:"Mi  -  hi   ya   na"}
  ]
};

function getNoteClass(n){const m={"C":"note-c","D":"note-d","E":"note-e","F":"note-f","G":"note-g","A":"note-a","B":"note-b","–":"note-rest"};return m[n]||"note-rest";}
function diffLabel(d){return d==="easy"?"Easy":d==="medium"?"Medium":"Hard";}
function instrBadge(i){const icos={piano:'🎹',guitar:'🎸',violin:'🎻',flute:'🪗'};return`<span class="badge badge-${i}">${icos[i]||'🎵'} ${i.charAt(0).toUpperCase()+i.slice(1)}</span>`;}
function diffBadge(d){return`<span class="badge badge-${d}">${diffLabel(d)}</span>`;}
