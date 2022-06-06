import {createStore} from 'redux';
const app = document.getElementById('app');
const inc = document.getElementById('inc');
const dec = document.getElementById('dec');
const reset = document.getElementById('reset');

const counter = (state = 1, action={}) => {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1
        case 'DECREMENT':
            return state - 1
        case 'RESET':
            return 1;
        default:
            return state;
    }
}
const store = createStore(counter);
store.subscribe(() => app.innerText = store.getState());

window.onload = function () {
    store.dispatch({type: 'INIT'})
}

inc.addEventListener('click', () => {
    if(store.getState() < 10) {
        dec.removeAttribute('disabled');
        store.dispatch({type: 'INCREMENT'})
    }else{
        inc.setAttribute('disabled', 'disabled');
        alert('You have reached the limit of 10');
    }
})
dec.addEventListener('click', () => {
    if(store.getState() == 1) {
        dec.setAttribute('disabled', 'disabled');
        alert('You have reached the limit of 1');
    }else{
        inc.removeAttribute('disabled');
        store.dispatch({type: 'DECREMENT'})
    }
})
reset.addEventListener('click', () => {
    inc.removeAttribute('disabled');
    dec.removeAttribute('disabled');
    store.dispatch({type: 'RESET'})
})