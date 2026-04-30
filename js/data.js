// SwaraLanka — Song Database
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
];

const NOTATION = {
  intro:[
    {notes:["C","C","E","G","E","C","–"],lyric:""},
    {notes:["G","E","C","E","G","C","–"],lyric:""}
  ],
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

function getNoteClass(n){const m={"C":"note-c","D":"note-d","E":"note-e","F":"note-f","G":"note-g","A":"note-a","B":"note-b","–":"note-rest"};return m[n]||"note-rest"}
function diffLabel(d){return d==="easy"?"Easy":d==="medium"?"Medium":"Hard"}
function instrBadge(i){return`<span class="badge badge-${i}">${i.charAt(0).toUpperCase()+i.slice(1)}</span>`}
function diffBadge(d){return`<span class="badge badge-${d}">${diffLabel(d)}</span>`}
