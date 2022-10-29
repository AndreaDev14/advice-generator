
const diceBtn =  document.querySelector('#dice');

//EventListener for dice
diceBtn.addEventListener('click', () => {
   getAdvice();
});
   

//Call API
async function getAdvice() {
   
        const url = 'https://api.adviceslip.com/advice';
    
    
        try {
            const res = await fetch(url);
            const result = await res.json();

            showHTML(result.slip);
           
          
        } catch (error) {
            console.log(error);
        }
}

//HTML 
function showHTML(result) {
    const {id, advice} = result;

    const adviceNumber = document.querySelector('#adviceNumber');
    adviceNumber.textContent = `Advice #${id}`;

    const quote = document.querySelector('#quote');
    quote.textContent = ` "${advice}"`;
  
  
}