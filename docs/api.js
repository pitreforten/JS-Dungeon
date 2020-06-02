var Vertex = function(x,y,z) {
    this.x = parseFloat(x);
    this.y = parseFloat(y);
    this.z = parseFloat(z);
}

function readFile(file) {
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, true);
    rawFile.send();
    return rawFile.responseText;
}

console.log (readFile("api.js"))

function parseObj(file) {

}