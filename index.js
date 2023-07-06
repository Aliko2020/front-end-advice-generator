document.getElementById("get-advice").addEventListener('click',()=>{
    fetch("https://api.adviceslip.com/advice")
    .then(res => res.json())
    .then(data => {
        document.getElementById("advice").textContent = data.slip.advice
        document.getElementById("advice-number").innerHTML = `<span>#${data.slip.id}</span>`
        
    })
    
})