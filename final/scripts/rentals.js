const url = 'https://ashesmsmith.github.io/wdd230/final/data/rentals.json';
const tableData = document.querySelector('tbody');

async function getRentals () {
    const response = await fetch(url);
    const data = await response.json();

    displayRentals(data);
}

function displayRentals(data) {
    data.rentals.forEach((rental) => {

        let newRow = document.createElement('tr');

        let type = document.createElement('td');
        type.setAttribute('class', 'left-align');
        type.innerHTML = rental.type;
        let capacity = document.createElement('td');
        capacity.innerHTML = rental.capacity;
        let resHalf = document.createElement('td');
        resHalf.innerHTML = `$${rental.reservehalf}`;
        let resFull = document.createElement('td');
        resFull.innerHTML = `$${rental.reservefull}`;
        let walkInHalf = document.createElement('td');
        walkInHalf.innerHTML = `$${rental.walkinhalf}`;
        let walkInFull = document.createElement('td');
        walkInFull.innerHTML = `$${rental.walkinfull}`;

        newRow.appendChild(type);
        newRow.appendChild(capacity);
        newRow.appendChild(resHalf);
        newRow.appendChild(resFull);
        newRow.appendChild(walkInHalf);
        newRow.appendChild(walkInFull);

        tableData.appendChild(newRow);
    })
}

getRentals();