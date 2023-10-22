const sections=document.querySelectorAll('section');
// console.log(sections);
for( const section of sections){
    // console.log(section);
    section.style.border='2px solid steelblue';
    section.style.marginBottom='5px';
    section.style.borderRadius='7px';
    section.style.paddingLeft='5px';
    section.style.backgroundColor='lightgray';
}
// const placesContiner=document.getElementById('places-containers');
// placesContiner.style.backgroundColor='red';
const placesContiner=document.getElementById('places-containers');
placesContiner.classList.add('yellow-bg');
placesContiner.classList.remove('large-text');