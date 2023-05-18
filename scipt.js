function lire(){   // declarer fonction lire 
    // recupere le texte de l'element textarea
    var texte = document.getElementById('texte').value;

 
// cree un objet de synthese vocale
var syntheseVocale = window.speechSynthesis;
var message = new SpeechSynthesisUtterance(texte);

// selectionner la voix
message.voiceURI = 'native';
message.lang = 'fr-FR'

//lire le message
syntheseVocale.speak(message);
}