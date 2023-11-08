const chatBtn = document.querySelector('.chatgpt__button');
chatBtn.addEventListener('click', sendChatMessage);

async function sendChatMessage(){
    const message = document.querySelector('.chatgpt__text').value;
    const response = await fetch('/api/chatgpt', {
        method: 'POST',
        body: JSON.stringify({message}),
        headers: {
            "Content-type": "application/json",
            "Accept": "application/json"
        }
    });
    if (response.ok) {
        const data = await response.json();
        document.querySelector('.chatgpt__response').innerHTML = data.message;
    }
}