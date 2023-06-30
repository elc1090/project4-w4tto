const scriptURL = 'https://script.google.com/macros/s/AKfycbzTyUxXx7YmXY4yyzFxFCm2ys9_m_LeTcTuQw-vhbDWhcXF9HvWBB_0FGfVBCfDBYk/exec';
const form = document.forms['submit-to-google-sheet'];
const msg = document.getElementById("msg");

form.addEventListener('submit', e => {
    msg.innerHTML = "Enviando..."
    e.preventDefault();
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
            msg.innerHTML = "Mensagem enviada com sucesso!";
            setTimeout(function(){
                msg.innerHTML = "";
            }, 5000)
        form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})