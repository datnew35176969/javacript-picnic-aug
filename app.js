const soda = document.getElementById('soda');
const item = document.getElementById('items');
let numofitems = 0;

soda.addEventListener('click', () => {
    soda.classList.toggle('picked');
    if (!soda.classList.contains('picked') && numofitems == 3) return;
    if (soda.classList.contains('picked')) {
        numofitems++;
    } else {
        numofitems--;
    }
    return (item.innerText = numofitems);
});
const cheese = document.getElementById('cheese');
cheese.addEventListener('click', () => {
    if (!cheese.classList.contains('picked') && numofitems == 3) return;
    cheese.classList.toggle('picked');
    if (cheese.classList.contains('picked')) {
        numofitems++;
    } else {
        numofitems--;
    }
    return (item.innerText = numofitems);
});
const grapes = document.getElementById('grapes');

grapes.addEventListener('click', () => {
    if (!grapes.classList.contains('picked') && numofitems == 3) return;
    grapes.classList.toggle('picked');
    if (grapes.classList.contains('picked')) {
        numofitems++;
    } else {
        numofitems--;
    }
    return (item.innerText = numofitems);
});

const bread = document.getElementById('bread');
bread.addEventListener('click', () => {
    if (!bread.classList.contains('picked') && numofitems == 3) return;
    bread.classList.toggle('picked');
    if (bread.classList.contains('picked')) {
        numofitems++;
    } else {
        numofitems--;
    }
    return (item.innerText = numofitems);
});
const watermelon = document.getElementById('watermelon');
watermelon.addEventListener('click', () => {
    if (!watermelon.classList.contains('picked') && numofitems == 3) return;
    watermelon.classList.toggle('picked');
    if (watermelon.classList.contains('picked')) {
        numofitems++;
    } else {
        numofitems--;
    }
    return (item.innerText = numofitems);
});
