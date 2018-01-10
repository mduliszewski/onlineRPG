var cat = "white";

console.log(cat);

function changeColor(aCat){
    aCat = "black";
    cat = "black"
}

changeColor(cat);

console.log(cat);