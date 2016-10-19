var container = document.createElement('div') // assigned creation of div to container
container.classList.add('container')
// console.dir(container)

var row = document.createElement('div')
row.classList.add('row')
container.appendChild(row) // appending row inside container class

// master template section
var col = document.createElement('div') // setting up the master template
col.classList.add('col-sm-4')
col.setAttribute('title', 'A fancy column') // adds title to every clone in
var col2 = col.cloneNode(true) // clones col for repliation, like a master template
var col3 = col.cloneNode(true)

// sub template section, can work with individual things
// col.setAttribute('title', 'A fancy column')
col.innerHTML = 'Column A'
col2.innerHTML = 'Column B'
col3.innerHTML = 'Column C'

row.appendChild(col)
row.appendChild(col2)
row.appendChild(col3)

// <input type="text" id="search" placeholder="Search..."> // example of what we are creating
/*
<div class="input-group">
     <input type="text" class="form-control" placeholder="Search for...">
     <span class="input-group-btn">
       <button class="btn btn-default" type="button">Go!</button>
     </span>
   </div><!-- /input-group -->
   */

var searchDiv = document.createElement('div')
searchDiv.classList.add('input-group')

var span = document.createElement('span')
span.classList.add('input-group-btn')

var button = document.createElement('button')
button.type = 'button'
button.className = 'btn btn-default'
button.innerHTML = 'GO!!'

var searchInput = document.createElement('input')
searchInput.type = 'text'
searchInput.id = 'search'
searchInput.placeholder = 'Search...'
searchInput.className = 'form-control' // className is same as setAttribute('class','form-control')

searchDiv.appendChild(searchInput)
span.appendChild(button)
searchDiv.appendChild(span)

container.insertBefore(searchDiv, row) // insert x before argument y
container.insertBefore(document.createElement('br'), searchDiv) // adds a little br space at the top
container.insertBefore(document.createElement('br'), searchDiv.nextSibling) // finds next sibling (row) and adds br before which spaces the search and the first row
// container.insertBefore(document.createElement('br'), row) // can use row here
button.addEventListener('click', search)
searchInput.addEventListener('keypress', searchEnter)

function search() {
    // alert('You searched')
    var searchTerm = document.querySelector('#search').value // gets the value of text in the searchinput field when GO is pressed
    // alert(searchTerm)
    var searchResult = {
        term: searchTerm,
        image: 'http://unsplash.it/400?random'
    }
    createSearchResult(searchResult)
    document.querySelector('#search').value = ''
}
function createSearchResult(result) {
    var card = document.createElement('div')
    card.className = 'well'
    card.innerHTML = result.term // this is an object
    document.querySelector('#searchResults .col-sm-4:first-child').appendChild(card)
}

function searchEnter(event) {
    // console.log(event.key === 'Enter')
    if (event.key === 'Enter') {
        search()
    }
    // alert(searchTerm)
}
// col.innerHTML = 'Column A'
// row.appendChild(col)
//
// var col = document.createElement('div')
// col.classList.add('col-sm-4')
// col.innerHTML = 'Column B'
// row.appendChild(col)
//
// var col = document.createElement('div')
// col.classList.add('col-sm-4')
// col.innerHTML = 'Column C'
// row.appendChild(col)

document.getElementById('searchResults').appendChild(container) // appendChild add to end of id 'searchResults'
