const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

button.addEventListener('click', () => {
  if (input.value === '') {
    input.focus();
  }  

  else {
    const li = document.createElement('li');
    const dlt = document.createElement('button');

    li.textContent = input.value; // Value entered in input applied li element
    dlt.textContent = '❌'; // Delete button given text of X
    dlt.ariaLabel = `Delete ${li}`; // Screen reader label
    li.append(dlt); // dlt added to the li
    list.append(li); // li added to the list

    dlt.addEventListener('click', () => {
        list.removeChild(li);
        input.focus();
        input.value = '';
    })
  }


})