const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

let chaptersArray = getChaptersList() || []; //returns array from getChaptersList or an empty array

chaptersArray.forEach(chapter => { //process each item (chapter) in the array
  displayList(chapter);
});

button.addEventListener('click', () => { //listen 'click' on 'Add Chapter' button
  if (input.vaule != '') { //input value is not empty
    displayList(input.value); //call displayList function
    chaptersArray.push(input.value); //add chapter to array
    setChapterList(); //updates localStorage with new array
    input.value = '';
    input.focus();
  }

  else { //input was empty, display alert
    input.focus();
    alert('Please enter a chapter and verse.');
  }
})

function displayList(item) { //item is the current input.value from eventListener
  let li = document.createElement('li'); //create list item
  let dltbtn = document.createElement('button'); //create delete button next to li

  li.textContent = item; //li value = input value
  dltbtn.textContent = '❌'; //dlt button text
  dltbtn.classList.add('delete'); //adds class to dlt button for styling
  li.append(dltbtn); //add dlt button to li
  list.append(li); //add li to list 

  dltbtn.addEventListener('click', () => { //listen for 'click' on dltbtn
    list.removeChild(li); //removes li from list
    input.focus();
  })
}

function setChapterList() { //SET localStorage item 
  localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray)); //localStorage item names 'myFavBOMList'
}

function getChaptersList() { //GET localStorage item
  return JSON.parse(localStorage.getItem('myFavBOMList'));
}

function deleteChapter(chapter) {
  chapter = chapter.slice(0, chapter.length - 1); //removes the last character '❌'
  chaptersArray = chaptersArray.filter((item) => item !== chapter); //array returns everything except the chapter being removed
  setChapterList(); //update localStorage
}