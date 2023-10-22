// console.log('append js');

// where to add
const placesList = document.getElementById('places-list');
// console.log(placesList);

// what to be added
const li = document.createElement('li');
li.innerText = 'Rangpur';

// add the child
placesList.appendChild(li);

// 1. where to add 
const maincontainer = document.getElementById('main-container');
// what to be added
const section = document.createElement('section');
const h1 = document.createElement('h1');
h1.innerText = 'My food list';
section.appendChild(h1);
const ul = document.createElement('ul');

const li1 = document.createElement('li1');
li1.innerText = 'Borhani';
ul.appendChild(li1);

const li2 = document.createElement('li2');
li2.innerText = 'kabab';
ul.appendChild(li2);

const li3 = document.createElement('li3');
li3.innerText = 'makhaon';
ul.appendChild(li3);
section.appendChild(ul);

maincontainer.appendChild(section);


// set innerHTML
// const sectionDress = document.createElement('section');
// sectionDress.innerText ='
//     <h1> My Dress section </h1>
//         <ul>
//             <li>T-shart</li>
//             <li>Lungi</li>
//             <li>genji</li>
//         </ul>
// '

// mainContainer.appendChild(sectionDress);
