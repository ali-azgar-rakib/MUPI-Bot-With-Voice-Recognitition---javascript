const startTalk = document.querySelector('.talk');
const content = document.querySelector('.content')

const greetings = ['I am good.I am not in depression like you small tut tut tut', 'I am fine Dickhead', 'I am fine and I am in fucking good mode']

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();

recognition.onstart = () => {
    console.log('hello');
}

recognition.onresult = function (event) {
    const message = event.results[event.resultIndex][0].transcript;
    readLoud(message);

}





startTalk.addEventListener('click', () => {
    recognition.start();
})


function readLoud(message) {

    navigator.mediaDevices.getUserMedia({ audio: true })
        .then(function (stream) {
            console.log('You let me use your mic!')
        })
        .catch(function (err) {
            console.log('No mic for you!')
        });

    const speech = new SpeechSynthesisUtterance();

    speech.text = "I don't get it.Say it again";
    if (message.includes('how are you')) {
        const finalText = greetings[Math.floor(Math.random() * greetings.length)];
        speech.text = finalText;
    } else if (message.includes('what is your name') || message.includes('name')) {
        speech.text = 'Mupi Bot'
    } else if (message.includes('best') || message.includes('what') || message.includes('favourite')) {
        speech.text = 'Munshiganj Polytechnic Institute'
    } else {
        speech.text = 'I am in development mode . Try again in future'
    }

    speech.pitch = 1;
    speech.rate = .8;
    speech.volume = 1;


    window.speechSynthesis.speak(speech);
}
