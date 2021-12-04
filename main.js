

function setup() {
    canvas = createCanvas(280, 280);
    canvas.center();
    backround("white");
    canvas.mouseReleased(classifyCanvas);
    synth = window.speechSynthesis;
}

function preload() {


    classifier = m15.imageClassifier('Doodlenet');
}



function clearCanvas() {

    backround("white");
}