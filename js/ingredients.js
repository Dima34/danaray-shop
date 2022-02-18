const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', "q", "r", "s", "t","u", "v", "w", "x", "y", "z"];
const containerWrapper = document.querySelector(".inredients-container .wrapper") 
const itemList = document.querySelectorAll(".ingredient-item")

// Creating that strucrure for each symbol
// <div class="ingredients-block" id="a">
//     <h2 class="heading text-big">А</h2>
//     <div class="ingredients-block_container"> 
//     </div>
// </div>
alphabet.forEach(el=>{
    var block = document.createElement("div")
    block.classList.add("ingredients-block");
    block.setAttribute("id", el)

    var title = document.createElement("h2");
    title.classList.add("heading")
    title.classList.add("text-big")
    title.innerText = el.toUpperCase()

    var container = document.createElement("div");
    container.classList.add("ingredients-block_container")

    block.appendChild(title)
    block.appendChild(container)

    containerWrapper.appendChild(block)
})

itemList.forEach(el=>{
    const titleFirstLetter = el.children[0].textContent[0].toLocaleLowerCase()
    const containerByFirstLetter = document.getElementById(titleFirstLetter)
    
    if(containerByFirstLetter){
        if(!containerByFirstLetter.classList.contains("containerByFirstLetter")){
            containerByFirstLetter.classList.add("filled")
        }

        containerByFirstLetter.querySelector(".ingredients-block_container").appendChild(el)
    }
    
})