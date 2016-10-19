// var result = document.createElement('div')
// result.classList = 'col-sm-3'
// var resultImage = document.createElement('img')
// // result.innerHTML = '13'
// resultImage.src = "http://unsplash.it/300/250?image=42"
// result.appendChild(resultImage)
// console.dir(resultImage)
//
// document.getElementById('searchResultsSection').appendChild(result)
fetch('http://thinksaydo.com/tiyproxy.php?url=' + encodeURIComponent('https://openapi.etsy.com/v2/listings/active?api_key=h9oq2yf3twf4ziejn10b717i&keywords=' + encodeURIComponent('board games') + '&includes=Images,Shop'))
.then(response => response.json())
.then(response => createResultCards(response.results))


// response.forEach(function(item, i){
//   item.title += i
//   item.image += i
//   item.seller += i
//   createResultCard(item)
//   console.log(item)
// })


// Declare your builder function
function createResultCards(items) {
  items.forEach(function(item, i) {
    console.log(item)
    var col = document.createElement('div')
    col.classList.add('col-sm-3')

    var card = document.createElement('div')
    card.classList.add('card', 'well') // removed col-sm-3
    // card.setAttribute('id', 'cardID')

    var cardImageRow = document.createElement('div')
    cardImageRow.classList.add('row')
    // cardImageRow.setAttribute('class', 'row')
    // cardImageRow.innerHTML = "<img src='" + item.image + "' />"
    // console.log(cardImageRow)
    var cardImage = document.createElement('img')
    cardImage.classList.add('col-sm-12')
    cardImage.src = item.Images[0].url_fullxfull

    var cardTitleRow = document.createElement('div')
    cardTitleRow.classList.add('row')
    // cardTitleRow.setAttribute('class','row')

    var cardTitle = document.createElement('span')
    cardTitle.classList.add('col-sm-12')
    cardTitle.innerText = item.title

    var cardCreatorAndPriceRow = document.createElement('div')
    cardCreatorAndPriceRow.setAttribute('class','row')

    var sellerCol = document.createElement('div')
    sellerCol.setAttribute('class','col-xs-6')

    var cardSeller = document.createElement('span')
    cardSeller.innerHTML = item.user_id
    cardSeller.classList.add('text-muted')

    var priceCol = document.createElement('div')
    priceCol.setAttribute('class','col-xs-6 text-right')

    var cardPrice = document.createElement('span')
    cardPrice.innerHTML = accounting.formatMoney(item.price)
    cardPrice.classList.add('text-success')

    document.querySelector('#searchResultsSection').appendChild(col)

    col.appendChild(card) // This is new

    card.appendChild(cardImageRow)
    cardImageRow.appendChild(cardImage)

    card.appendChild(cardTitleRow)
    cardTitleRow.appendChild(cardTitle)

    card.appendChild(cardCreatorAndPriceRow)
    cardCreatorAndPriceRow.appendChild(sellerCol)
    sellerCol.appendChild(cardSeller)
    cardCreatorAndPriceRow.appendChild(priceCol)
    priceCol.appendChild(cardPrice)

    // console.dir(cardImage)

    // your code here to build up the card
    // keep in mind you'll be nesting tags
    // var imageDiv = document.createElement('div')
    // item.innerHTML = 'test'

  })
}

// Search Functionality
document.querySelector('#searchButton').addEventListener('click', search)
document.querySelector('#searchText').addEventListener('keypress', searchEnter)

function search() {
  // alert('You searched')
  document.querySelector('#searchResultsSection').innerHTML = '' // clears the prior results
  var searchTerm = document.querySelector('#searchText').value
  fetch('http://thinksaydo.com/tiyproxy.php?url=' + encodeURIComponent('https://openapi.etsy.com/v2/listings/active?api_key=h9oq2yf3twf4ziejn10b717i&keywords=' + encodeURIComponent(searchTerm) + '&includes=Images,Shop'))
  .then(response => response.json())
  .then(response => createResultCards(response.results))
  // console.log(searchTerm)
  // alert(searchTerm)
  // var searchResult = {
  //     term: searchTerm,
  //     image: 'http://unsplash.it/400?random'
  // }
  // createSearchResult(searchResult)
  // document.querySelector('#search').value = ''
}

function searchEnter(event) {
  // console.log(event.key === 'Enter')
  if (event.key === 'Enter') {
    search()
  }
  // alert(searchTerm)
}

// Call your builder function, one at a time to make 12 search result cards, each with different data (image can be the same at this point if you want)
// Don't forget you can use a for() loop, or make an array of objects even and use a items.forEach() loop.
// for (var i = 0; i < 12; i++) {
// var items = [
//   {
//     image: 'http://unsplash.it/200?image=',
//     title: 'Vintage Board Game Art Wall Home Decor blargle blargle blargle blargle',
//     seller: 'franz66',
//     price: 15.00
//   },
//   {
//     image: 'http://unsplash.it/200?image=',
//     title: 'Vintage Board Game Art Wall Home Decor blargle blargle blargle blargle',
//     seller: 'franz66',
//     price: 15.00
//   },
//   {
//     image: 'http://unsplash.it/200?image=',
//     title: 'Vintage Board Game Art Wall Home Decor blargle blargle blargle blargle',
//     seller: 'franz66',
//     price: 15.00
//   },
//   {
//     image: 'http://unsplash.it/200?image=',
//     title: 'Vintage Board Game Art Wall Home Decor blargle blargle blargle blargle',
//     seller: 'franz66',
//     price: 15.00
//   },
//   {
//     image: 'http://unsplash.it/200?image=',
//     title: 'Vintage Board Game Art Wall Home Decor blargle blargle blargle blargle',
//     seller: 'franz66',
//     price: 15.00
//   },
//   {
//     image: 'http://unsplash.it/200?image=',
//     title: 'Vintage Board Game Art Wall Home Decor blargle blargle blargle blargle',
//     seller: 'franz66',
//     price: 15.00
//   },
//   {
//     image: 'http://unsplash.it/200?image=',
//     title: 'Vintage Board Game Art Wall Home Decor blargle blargle blargle blargle',
//     seller: 'franz66',
//     price: 15.00
//   },
//   {
//     image: 'http://unsplash.it/200?image=',
//     title: 'Vintage Board Game Art Wall Home Decor blargle blargle blargle blargle',
//     seller: 'franz66',
//     price: 15.00
//   },
//   {
//     image: 'http://unsplash.it/200?image=',
//     title: 'Vintage Board Game Art Wall Home Decor blargle blargle blargle blargle',
//     seller: 'franz66',
//     price: 15.00
//   },
//   {
//     image: 'http://unsplash.it/200?image=',
//     title: 'Vintage Board Game Art Wall Home Decor blargle blargle blargle blargle',
//     seller: 'franz66',
//     price: 15.00
//   },
//   {
//     image: 'http://unsplash.it/200?image=',
//     title: 'Vintage Board Game Art Wall Home Decor blargle blargle blargle blargle',
//     seller: 'franz66',
//     price: 15.00
//   },
//   {
//     image: 'http://unsplash.it/200?image=',
//     title: 'Vintage Board Game Art Wall Home Decor blargle blargle blargle blargle',
//     seller: 'franz66',
//     price: 15.00
//   },
// ]
// add function makeCards(cardItems)  this will let me run the search and populate based on the value in the search box
// add document.querySelector('resultssetcionid').innerHTML = ''
