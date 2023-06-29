speechRecognition = window.webkitSpeechRecognition;
recognition = new speechRecognition;

function start() {
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
};

recognition.onresult = function(event) {
    console.log(event);

    content = event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML = content;
    console.log(content.search("selfie"));
    
    if (content.search("selfie") != -1) {
        speak();
    };
};

function speak() {
    synth = window.speechSynthesis;
    speak_data = "taking your selfies in 5 seconds";
    utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    Webcam.attach(camera);
    setTimeout(function(){
        snapShot();
        save();
    }, 5000);
};

Webcam.set({
    width:360,
    height:250,
    image_format:"png",
    png_quality:90  
});

camera = document.getElementById("camera");

function snapShot() {
    for ( i = 1; i < 3; i++) {   
    Webcam.snap(function(data_uri) {
        document.getElementById("DIV" + i).innerHTML = "<img id='selfie_img" + i + "' src=" + data_uri + ">";
    })
    }
};

 function save() {
     link = document.getElementById("link");
     image = document.getElementById("selfie_img").src;
     link.href = image;
     link.click();
 };

