var Content;
function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.hide();
  classifier=ml5.imageClassifier('Mobilenet',modelloaded)
}
function draw(){
  image(video,0,0,300,300);
  classifier.classify(video,gotResult);
}
function modelloaded(){
  console.log("Model Loaded!")
}
function gotResult(error,results){
if (error){
  console.error(error);
} else{
  setTimeout(function()
    { 
        Content=results[0].label;
        speak();

    }, 10000);
  console.log(results);
  document.getElementById("result_object_name").innerHTML=results[0].label;
  document.getElementById("result_object_accuracy").innerHTML=results[0].confidence.toFixed(3);
  
}}
function speak(Content){
var synth=window.speechSynthesis;
speak_data=toString(Content);
var utterThis= new SpeechSynthesisUtterance(speak_data);
synth.speak(utterThis);
}
