
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

// get data(#, REQUEST)
    -> if argument is 0
        -> get data and call make div bar function
    -> if argument is any other number + GET
        -> get data and call make animal card
    -> if argument is any other number + PATCH
        -> get data and call update likes
        -> with updated like do patch

// click event when user clicks on dog name 
    -> capture div ID
    -> getData(ID)

*/


/* completed task


*/