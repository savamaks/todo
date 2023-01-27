


function todoList() {
    const input = document.querySelector(".header__form-input");
    const buttonCreate = document.querySelector(".header__form-button");
    const list = document.querySelector(".box__list");
    let links = document.querySelectorAll('.box__list')

    function createLi() {
        if (input.value !== "") {
            let linkList = `<div class="box__list-link">${input.value}<span class="close-button">\u00D7</span></div>`
            list.innerHTML+=linkList
            input.value = ""
        }

        console.log(links)
    }



    buttonCreate.addEventListener("click", createLi);
}

todoList();
