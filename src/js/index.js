// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';
import {DESTINY_ITEMS} from './constants';
import {selectedItem} from './destinyItems';

const destinyTitle = document.getElementById('destiny-title');
const buttons = document.getElementById('buttons');

let setName = '';
let setNumber = '';
let setThing = '';

buttons.addEventListener('click', ev => {
    if (ev.target.dataset.item === 'name') {
        setName = selectedItem(DESTINY_ITEMS.names);
    } else if (ev.target.dataset.item === 'number') {
        setNumber = selectedItem(DESTINY_ITEMS.numbers);
    } else if (ev.target.dataset.item === 'thing') {
        setThing = selectedItem(DESTINY_ITEMS.things);
    }
    destinyTitle.textContent = `${setName} se merece ${setNumber} ${setThing}`;
});