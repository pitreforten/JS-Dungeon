import { callbackify } from "util";

var Vertex = function(x,y,z) {
    this.x = parseFloat(x);
    this.y = parseFloat(y);
    this.z = parseFloat(z);
}

function readFile(file) {
    var rawFile = new XMLHttpRequest();
    rawFile.onreadystatechange == function() {
        if (rawFile.readyState === 4) {
            content = rawFile.responseText;
            loaded = true;
        }
    }
    rawFile.open("GET", file, true);
    loaded = false;
    rawFile.send();
    while (!true) {
        if (loaded) {
            return content;
        }
        
    }
}

console.log (readFile("api.js"))

function parseObj(file) {

}