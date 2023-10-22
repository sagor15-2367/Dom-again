console.log('Nahid hasan');


const main=document.getElementById('main-container');
const section=document.createElement('section');
section.innerText=('
    <h1>My dynamic section </h1>
    <p>Extra text added inside paragraph</p>
    <ul>
        <li>first item</li>
        <li>first item</li>
        <li>first item</li>
        <li>first item</li>
    </ul>
    ')

    main.appendChild(section);