function todoList() {
    const input = document.querySelector(".header__form-input");
    const buttonCreate = document.querySelector(".header__form-button");
    const list = document.querySelector(".box__list");
    let count = 0;
  
    if (localStorage.length !== 0) {
  
      for (let i = 0; i < localStorage.length; i++) {
          
        let key = localStorage.key(i);
  
        const li = document.createElement("li");
        const closeButton = document.createElement("button");
        const textClose = document.createTextNode("\u00D7");
        const textLi = document.createTextNode(`${localStorage.getItem(key)}`);
        closeButton.className = "close-button";
        li.className = "box__list-link";
  
        closeButton.append(textClose);
        li.append(textLi);
        li.append(closeButton);
        list.append(li);
  
        li.addEventListener("click", () => {
          li.classList.toggle("checked");
        });
  
        closeButton.addEventListener("click", () => {
          li.remove();
          let liText = li.textContent;
          let liTextClear = liText.replace(/\u00D7/gi, "");
          localStorage.removeItem(liTextClear);
             
        });
      }
    }
  
    function createLi() {
      if (input.value !== "") {
        const li = document.createElement("li");
        const closeButton = document.createElement("button");
        const textClose = document.createTextNode("\u00D7");
        const textLi = document.createTextNode(input.value);
        closeButton.className = "close-button";
        li.className = "box__list-link";
  
        closeButton.append(textClose);
        li.append(textLi);
        li.append(closeButton)
        list.append(li);
        input.value = "";
  
        localStorage.setItem(textLi.textContent, textLi.textContent);
  
        li.addEventListener("click", () => {
          li.classList.toggle("checked");
        });
  
        closeButton.addEventListener("click", () => {
          li.remove();F
          let liText = li.textContent;
          let liTextClear = liText.replace(/\u00D7/gi, "");
          localStorage.removeItem(liTextClear);
        });
      }
    }
    buttonCreate.addEventListener("click", createLi);
  }
  
  document.addEventListener("DOMContentLoaded", todoList);
  
  // function createLi() {
  //     if (input.value !== "") {
  //       let linkList = `<div class="box__list-link">${input.value}<span class="close-button">\u00D7</span></div>`;
  //       list.innerHTML += linkList;
  //       input.value = "";
  //     }
  //     let closeButtons = document.querySelectorAll(".close-button");
  
  //     closeButtons.forEach((button) => {
  //       button.addEventListener("click", ()=>{
  //         deletElement(button)
  //         strikeOutElement(document.querySelector(".box__list-link"))
  //       });
  //     });
  //   }
  
  //   function deletElement(button) {
  //     let parentEl = button.parentElement
  //     parentEl.style.display = 'none'
  //   }
  
  //   function strikeOutElement(button) {
  
  //     button.addEventListener('click',()=>{
  //         button.classList.toggle("checked")
  //     })
  
  //   }
  
  //   buttonCreate.addEventListener("click", createLi);
  