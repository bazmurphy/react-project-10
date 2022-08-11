let boxesArray = [
    {
        id: 1,
        on: true
    },   
    {
        id: 2,
        on: false
    },   
    {
        id: 3,
        on: true
    },   
    {
        id: 4,
        on: true
    },   
    {
        id: 5,
        on: false
    },   
    {
        id: 6,
        on: false
    },   
]

function toggle(id) {

    let indexToUpdate;

    for (let element of boxesArray) {
        // console.log(element)
        if (element.id === id) {
            indexToUpdate = boxesArray.indexOf(element)
        }
    }

	console.log(indexToUpdate);
}

toggle(1);