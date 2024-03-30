const url = 'https://ashesmsmith.github.io/wdd230/final-copy/data/rentals.json';
const rentalsMain = document.querySelector('#rentals');

async function getRentals () {
    const response = await fetch(url);
    const data = await response.json();

    displayRentals(data);
}

function displayRentals(data) {
    data.rentals.forEach((rental) => {

        let newSection = document.createElement('section');

        let img = document.createElement('img');
            img.setAttribute('src', `${rental.img}`);
            img.setAttribute('alt', `${rental.type}`);
            img.setAttribute('width', '640');
            img.setAttribute('height', '640');
            img.setAttribute('loading', 'lazy')
        let type = document.createElement('h3');
            type.innerHTML = rental.type;
        let capacity = document.createElement('p');
            capacity.innerHTML = `Max Capacity: ${rental.capacity}`;

        newSection.appendChild(img);
        newSection.appendChild(type);
        newSection.appendChild(capacity);

        let newTable = document.createElement('table')
        let newCaption = document.createElement('caption');
            newCaption.innerHTML = `${rental.type} Pricing`;

        newTable.appendChild(newCaption);

        let headerRow = document.createElement('tr');
        let empty = document.createElement('td');
        let reservation = document.createElement('td');
            reservation.setAttribute('class', 'orange');
            reservation.innerHTML = 'Reservation';
        let walkIn = document.createElement('td');
            walkIn.setAttribute('class', 'blue');
            walkIn.innerHTML = 'Walk-In';

        headerRow.appendChild(empty);
        headerRow.appendChild(reservation);
        headerRow.appendChild(walkIn);


        let halfRow = document.createElement('tr');  
        let half = document.createElement('td'); 
            half.innerHTML = 'Half-Day (3 hrs)';     
        let resHalf = document.createElement('td');
            resHalf.innerHTML = `$${rental.reservehalf}`;
        let walkInHalf = document.createElement('td');
            walkInHalf.innerHTML = `$${rental.walkinhalf}`;

        halfRow.appendChild(half);
        halfRow.appendChild(resHalf);
        halfRow.appendChild(walkInHalf);

        let fullRow = document.createElement('tr');  
        let full = document.createElement('td');
            full.innerHTML = 'Full Day';
        let resFull = document.createElement('td');
            resFull.innerHTML = `$${rental.reservefull}`;
        let walkInFull = document.createElement('td');
            walkInFull.innerHTML = `$${rental.walkinfull}`;

        fullRow.appendChild(full);
        fullRow.appendChild(resFull);
        fullRow.appendChild(walkInFull);

        newTable.appendChild(headerRow);
        newTable.appendChild(halfRow);
        newTable.appendChild(fullRow);

        newSection.appendChild(newTable);

        rentalsMain.appendChild(newSection);
    })
}

getRentals();