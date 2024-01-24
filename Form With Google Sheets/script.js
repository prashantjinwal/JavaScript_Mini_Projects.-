const scriptURL = 'https://script.google.com/macros/s/AKfycbzJjJ0LoaRRdgdoXfl9kbmTYaHipGpjnqjByJISUTcc8ijI2zMPC4RA-J2SsOn88DqV/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")
form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerHTML = "Thank You For Subscribing !"
        setTimeout(()=>{
            msg.innerHTML = " ";
        },4000)
        form.reset();
        
    })
    .catch(error => console.error('Error!', error.message))
})