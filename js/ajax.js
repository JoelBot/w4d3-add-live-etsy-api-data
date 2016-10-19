// http://swapi.co/api/planets/1/

// oldschool way
// var starwarsPlanets = new XMLHttpRequest() // creating an XML http object
// starwarsPlanets.addEventListener('load', planetListener) // calls when an api is loaded // thing that happens and the thing will hapen after
// starwarsPlanets.open('GET', 'http://swapi.co/api/planets/') // this is what you want to get to
// starwarsPlanets.send() // sends request
//
// var starwarsPlanets = new XMLHttpRequest() // creating an XML http object
// starwarsPlanets.addEventListener('load', planetListener) // calls when an api is loaded // thing that happens and the thing will hapen after
// starwarsPlanets.open('GET', 'http://swapi.co/api/planets/?page=2') // this is what you want to get to
// starwarsPlanets.send() // sends request

// function planetListener() {
//     var planets = JSON.parse(this.responseText) // parses incoming massive text string from API and creates it to JSON onject
//
//     listPlanets(planets.results) // results is an array
// }

// new/futuristic way
fetch('http://swapi.co/api/planets/') // does all the things above like event listener, open, send and returns a promise
// .then(funtion(response) { THIS IS THE LONGHAND VERSION OF THE BELOW SHORTHAND
//     return response.json()
// })
// .then(function(responseJson) {
//     listPlanets(responseJson)
// })
.then(response => response.json()) //sends text result through json parser and send output to next .then
.then(response => listPlanets(response.results)) // then calls listPlanets
fetch('http://swapi.co/api/planets/1/') // does all the things above like event listener, open, send and returns a promise
// .then(funtion(response) { THIS IS THE LONGHAND VERSION OF THE BELOW SHORTHAND
//     return response.json()
// })
// .then(function(responseJson) {
//     listPlanets(responseJson)
// })
.then(response => response.json()) //sends text result through json parser and send output to next .then
.then(response => listPlanet(response)) // then calls listPlanets

function listPlanets (planetsArray){ // takes in an array from planets.results above
    console.log('this comes after the first one')
    planetsArray.forEach(function(planet) {
        var planetTitle = document.createElement('h4')
        planetTitle.innerHTML = planet.name

        // document.body.appendChild(planetTitle)
        document.querySelector('body').appendChild(planetTitle)

    })
}
function listPlanet (planet){ // takes in an array from planets.results above
    console.log(planet)

    var list = document.createElement('ul')
    var planetName = document.createElement('li')
    planetName.innerHTML = planet.name
    var planetGravity = document.createElement('li')
    planetGravity.innerHTML = planet.gravity
    var planetPopulation = document.createElement('li')
    planetPopulation.innerHTML = planet.population

    // document.body.appendChild(planetTitle)
    document.querySelector('body').appendChild(list)
    list.appendChild(planetName)
    list.appendChild(planetGravity)
    list.appendChild(planetPopulation)
}

console.log('this comes first')
