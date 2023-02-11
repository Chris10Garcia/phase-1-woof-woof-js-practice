const jsonURL = 'http://localhost:3000/pups/'
const filterActive = false

// JSONDATA: id, name, isGoodDog, image


function buildDivBar(array){
    const divDogBar = document.getElementById('dog-bar')


    array.forEach(obj => {
        const span = document.createElement('span')
        
        span.innerText = obj.name
        span.dataset.id = obj.id
        span.dataset.isGoodDog = obj.isGoodDog
        span.addEventListener('click', e => getData(e.target.dataset.id))

        divDogBar.append(span)
    });
}

function buildDogCard(obj){
    const divDogInfo = document.getElementById('dog-info')
    divDogInfo.innerHTML = ""

    const img = document.createElement('img')
    img.setAttribute('src', obj.image)

    const h2 = document.createElement('h2')
    h2.innerText = obj.name

    const button = document.createElement('button')
    button.innerText = obj.isGoodDog ? 'Good Dog!' : 'Bad Dog!'
    button.dataset.id = obj.id
    button.addEventListener('click', e => getData(e.target.dataset.id, 'PATCH'))

    divDogInfo.append(img, h2, button)
}

function patchDogData(obj){
    obj.isGoodDog = !(obj.isGoodDog)

    fetch(jsonURL + obj.id, {
        method: "PATCH",
        headers: {
            "Content-type" : "application/json",
            Accept: "application/json"
        },
        body: JSON.stringify(obj)
    })
        .then(res => res.json())
        .then(data => updateButton(data))
        
}

function updateButton(obj){
    const button = document.querySelector(`button[data-id="${obj.id}"]`)
    button.innerText = obj.isGoodDog ? 'Good Dog!' : 'Bad Dog!'
}


function getData(id='', request){    
    fetch(jsonURL + id)
        .then(res => res.json())
        .then(data => {
            if (id > 0 && request === 'PATCH'){
                patchDogData(data)
            } else if (id > 0) {
                buildDogCard(data)
            } else {
                buildDivBar(data)
            }
        })
}

function handleFilter(e){

    if (filterActive) {
        e.target.innerText = "Filter good dogs: OFF"
        filterActive = false

    } else {
        e.target.innerText = "Filter good dogs: ON"
        filterActive = true
    }

    toggleDivBar()
}



// redo this
function toggleDivBar(){
    const goodDogSpans = [...document.querySelectorAll('span[data-is-good-dog="false"]')]

    if (span.dataset.isGoodDog === "false"){
        span.style.display = "none"

    } else {
        console.log('is this happening?')
        span.style.display = "flex"

    //     }
    // })
}
}

document.addEventListener('DOMContentLoaded', () => {
    getData()

    document.getElementById('good-dog-filter').addEventListener('click', (e) => handleFilter(e))
})
/*
inputs
- Json data (FETCH GET request)
- user clicks

inputs: user clicks
- on dog bar name, which outputs dog info
- goodDog button, which changes isGoodDog Boolean

outputs
- <spans> with dog names to <div> dog bar 
- dog data when name is clicked: <img = url>, <h2 = dog name> , <button = good / bad dog (based on boolean))
- Updated dog isGoodDog info (FETCH POST Request)



HTML Elements
- list of divs with dog names

JSON Data: file with the following structure
- id (auto generated)
- name (string)
- isGoodDog (boolean)
- image (string of a URL)

Probelm:
- website that shows dogs
- top ribbon has dog names
- when clicking name in ribbon, shows info of dog
- on the bottom, a button that changes boolean data field status

optional:
- if user clicks on good Dog filter, then only good dogs show up on dog bar
- button is pressed / toggled
*/

/* tasks to complete

// start function when DOM loaded
    -> call getdata(value  = 0)


// too hard doing one function, better to separate it in half
// get data(#, REQUEST)
    -> if argument is 0
        -> get data and call make div bar function
    -> if argument is any other number + GET
        -> get data and call make animal card
    -> if argument is any other number + PATCH
        -> get data and call update likes
        -> with updated like do patch

// getData
    - on initial start, get all data (single function for this)
        -> startGetData -> create div cards

    - when clicked on dog name
        -> 
            
    -> for PATCH requests,
        get data for specific animal



// click event when user clicks on dog name 
    -> capture div ID
    -> getData(ID)

*/


/* completed task


*/