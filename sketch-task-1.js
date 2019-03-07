/*
Tasks:
    1) display the data leveraging classes and arrays
    2) build in some user interaction

Idea:
*/

let table;
let hearts;

function setup(){
    // load in data
    table = loadTable("data/Interracial_Marriages_Growth_Chart.csv","header"); 

    createCanvas(windowWidth,windowHeight);

    loadData();
}

function draw(){

}

function loadData() {

    hearts = [];

    for(let i = 0; i < table.getRowCount(); i++){
        
    }

}