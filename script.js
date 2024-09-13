// Ensure the Web Speech API is supported
if ('speechSynthesis' in window) {
    const speakButton = document.getElementById('speak');
    const stopButton = document.getElementById('stop');
    const textInput = document.getElementById('text');
    const speedInput = document.getElementById('speed');
    let utterance;

    speakButton.addEventListener('click', () => {
        const text = textInput.value.trim();
        if (text !== '') {
            // Create a new instance of SpeechSynthesisUtterance
            utterance = new SpeechSynthesisUtterance(text);

            // Set the speech speed
            utterance.rate = speedInput.value;

            // Speak the text
            window.speechSynthesis.speak(utterance);
        } else {
            alert('Please enter some text to speak.');
        }
    });

    stopButton.addEventListener('click', () => {
        if (window.speechSynthesis.speaking) {
            // Cancel the speech
            window.speechSynthesis.cancel();
        } else {
            alert('Not speaking right now.');
        }
    });
} else {
    alert('Sorry, your browser does not support the Web Speech API.');
}