const pinButton = document.getElementById('randomG').addEventListener("click",()=>{
    let randomNumber = Math.random();
        randomNumber = randomNumber*9999;
        randomNumber = Math.round(randomNumber);
    

const randomNumberViewer = document.getElementById("randomNumberViewer")
        randomNumberViewer.value = randomNumber;


const submitButton = document.getElementById('submitButton').addEventListener('click', ()=>{
    const inputedNumber = document.getElementById('inputedNumber').value;
    
    if(randomNumberViewer.value == inputedNumber){
        document.getElementById('notify2').style.display='block';
        document.getElementById('notify1').style.display='none';
    }
    else{
        document.getElementById('notify1').style.display='block';
        document.getElementById('notify2').style.display='none';
    }

})
});