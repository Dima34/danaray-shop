const quantityContainer = document.querySelectorAll(".quantity");

if(quantityContainer.length > 0){
    quantityContainer.forEach(quantity=>{
        const quantityUp = quantity.querySelector(".quant-up");
        const quantityDown = quantity.querySelector(".quant-down");
        const quantityInput = quantity.querySelector("input[type = 'number']");
        let min = quantityInput.getAttribute("min");
        let max = quantityInput.getAttribute("max");
        
        if(min == null){
            min = 1
        }

        

        if(quantityUp && quantityDown){
            quantityUp.addEventListener("click", (e)=>{
                e.preventDefault()
                let value = Number(quantityInput.value);
                if(max == ""){
                    quantityInput.value = value + 1;
                }
                if(value <= max){
                    quantityInput.value = value + 1;
                }
            }) 
            
            quantityDown.addEventListener("click", (e)=>{
                e.preventDefault()
                let value = Number(quantityInput.value);
                console.log(`click`);
                if(value > min){
                    quantityInput.value = value - 1;
                }
            }) 
        }
        
    })
}