const inputElement = document.querySelector("input");
const buttonElement = document.querySelector("form button");
const ulElement = document.querySelector("ul");

buttonElement.onclick = ev => {
  ev.preventDefault();
  
  if (inputElement.value) {
      
    value = inputElement.value
    const textElement = document.createElement("span");
   

    const btnElement = document.createElement("button");
    btnElement.innerHTML = "Remover";

    const liElement = document.createElement("li");
    liElement.appendChild(textElement);
    liElement.appendChild(btnElement);
    

    btnElement.onclick = () => {
      ulElement.removeChild(liElement)  
    }

    ulElement.appendChild(liElement);
    //função numeros primos
    function numeroPrimo(value){
            let primo = true
            for(let i =2; i < value; i++){
                if(value % i === 0){
                    primo = false;
                    break
                }
            }
            if(primo == true && value > 1){ 
                textElement.innerHTML = inputElement.value + " É um primo uhuuul!" ;
            }
            else{
                textElement.innerHTML = inputElement.value + " Não é primo! que triste :("
            }
        }
    }
    numeroPrimo(value)
};
