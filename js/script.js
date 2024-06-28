function runTypingEffect(){
    const text = 'Im Reza Norouzi';
    const typingElement = document.getElementById('typing-text'); 
    const delay = 100;

    typeText(text,typingElement,delay);

}
function typeText(text,typingElement,delay){
    for (let i = 0; i < text.length; i++) {
        setTimeout(()=>{
            typingElement.textContent += text.charAt(i);
        },delay*i);
    }
}

document.addEventListener('DOMContentLoaded',runTypingEffect);