let speech = new SpeechSynthesisUtterance()

let addVoice = [];
let voiceSelect = document.querySelector("select")

window.speechSynthesis.onvoiceschanged = ()=>{
    addVoice = window.speechSynthesis.getVoices();
    speech.voice = addVoice[0]

    addVoice.forEach((voice,i)=>(voiceSelect.options[i])= new Option(voice.name , i))
}

voiceSelect.addEventListener("change", ()=>{
    speech.voice = addVoice[voiceSelect.value]
})
let play = document.querySelector("button")
play.addEventListener("click", ()=>{
    speech.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech)
})


