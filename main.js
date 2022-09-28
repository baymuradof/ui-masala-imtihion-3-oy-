let name = document.querySelector("#name");
let price = document.querySelector("#price");
let picture = document.querySelector("#picture");
let cook = document.querySelector("#cook");
let restaurant = document.querySelector("#restaurant");
let cards = document.querySelector(".cards");
let card = document.querySelector(".card");
let submit = document.querySelector("#btn");
let epsont = document.querySelector(".epsont");
let deleteBtn = document.querySelector("#delete");


let del = document.querySelector("#del")

console.log(cards);

function green(){
    card.style.background = "green";
}

let add = () => {
    
    let date = new Date();
    let time = date.getDay() + "/" + date.getMonth() + "/" + date.getFullYear();

    let createCard = document.createElement("div"); 
    createCard.setAttribute("class","card");
    
    let createImg = document.createElement("div"); 
    createImg.setAttribute("class", "img");
    
    let img = document.createElement("img");
    img.src = picture.value;
    
    cards.append(createCard);
    createCard.append(createImg);
    createImg.append(img);


    let listName = document.createElement("div");
    listName.setAttribute("class", "name-list");

    let ul = document.createElement("ul");


    // First List
    let li1 = document.createElement("li");
    let b1 = document.createElement("b");
    let p1 = document.createElement("p");

    createCard.append(listName);
    listName.append(ul);
    ul.append(li1);
    li1.append(b1);
    li1.append(p1);

    b1.textContent = "Taom nomi:"
    p1.innerHTML = name.value;




    // Second list

    let li2 = document.createElement("li");
    let b2 = document.createElement("b");
    let p2 = document.createElement("p");

    createCard.append(listName);
    listName.append(ul);
    ul.append(li2);
    li2.append(b2);
    li2.append(p2);

    b2.textContent = "Taom narxi:"
    p2.innerHTML = price.value;




    // Third list

    let li3 = document.createElement("li");
    let b3 = document.createElement("b");
    let p3 = document.createElement("p");

    createCard.append(listName);
    listName.append(ul);
    ul.append(li3);
    li3.append(b3);
    li3.append(p3);

    b3.textContent = "Oshpaz ismi:"
    p3.innerHTML = cook.value;

    

    // Fourth list

    let li4 = document.createElement("li");
    let b4 = document.createElement("b");
    let p4 = document.createElement("p");

    createCard.append(listName);
    listName.append(ul);
    ul.append(li4);
    li4.append(b4);
    li4.append(p4);

    b4.textContent = "Taom restorani:"
    p4.innerHTML = restaurant.value;



    // Buttons


    let buttons = document.createElement("div");
    buttons.setAttribute("class", "buttons");

    let btn1 = document.createElement("button");
    btn1.setAttribute("class", "delete");
    btn1.textContent = "Taomni ochirish"

    createCard.append(buttons);
    buttons.append(btn1);


    // Btn2

    let btn2 = document.createElement("button");
    btn2.setAttribute("class", "date");
    btn2.textContent = time

    createCard.append(buttons);
    buttons.append(btn2);
    

    // Btn 3

    let btn3 = document.createElement("button");
    btn3.setAttribute("class", "epsont");
    btn3.textContent = "Taom tugadi"

    createCard.append(buttons);
    buttons.append(btn3);

    
    function deleteCard(a){
        buttons.parentElement.remove();
    }

    btn1.addEventListener("click", () => deleteCard())


    function green(){

        createCard.style.background = "green";
    
    }

    btn3.addEventListener("click", () => green())

}




epsont.addEventListener("click", () => green())


submit.addEventListener("click", () => add())