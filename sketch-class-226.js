/*
Look at "Visualizing Data" on class website for more info
*/

let bubbles; // array of bubble objects
let table; // table object

function preload(){
    table = loadTable("data/data.csv","header"); // says that the csv has a header
}

function setup(){
    createCanvas(windowWidth,windowHeight);
    loadData(); // function that is written below
}

function draw(){
    background(255);
    // display all the bubbles
    for(var i = 0; i < bubbles.length; i++){
        // display
        // rollover, which checks if mouse is over the bubble
    }
}

function loadData(){
    // Load CSV file into a Table object
    // "header" option indicates the file has a header row

    // the sizee of the array of Bubble objects is determined by the total number of rows in the CSV
    bubbles = [];

    // you can access iterate over all the rows in a table
    for(var i = 0; i < table.getRowCount(); i++){
        var row = table.getRow(i);
        // can access the fields via their column name (or index)
        x = row.get("x");
        y = row.get("y");
        diameter = row.get("diameter");
        count = row.get("count");
        emotion = row.get("emotion");
        // Make a bubble object out of the data read
        bubbles[i] = new bubbles(x,y,diameter,count,emotion);
    }
}

class Bubble{
    constructor(x,y,diam,c,e){
        this.x = Number(x);
        this.y = Number(y);
        // ... 

        // map function says take lowest value and highest value, and map it to a new range
        this.x_map = map(this.x,72,427,100,700); 
            // next class: ways to get min and max without manually putting it in this function
    }
}