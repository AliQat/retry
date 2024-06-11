// ADD NEW ITEM TO END OF LIST
let list = document.querySelector('ul');
let newItemEnd = document.createElement('li');
newItemEnd.textContent = 'cream';
list.appendChild(newItemEnd);

// ADD NEW ITEM START OF LIST
let newItemStart = document.createElement('li');
newItemStart.textContent = 'kale';
list.insertBefore(newItemStart, list.firstChild);

// ADD A CLASS OF COOL TO ALL LIST ITEMS
let listItems = document.querySelectorAll('ul li');
listItems.forEach(function(item) {
    item.classList.add('cool');
});

// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING
let itemCount = listItems.length;
document.querySelector('h2').innerHTML += ` <span>${itemCount}</span>`;