function todoList() {
  const input: HTMLInputElement  = <HTMLInputElement>document.querySelector(".header__form-input");
  const buttonCreate:HTMLElement = <HTMLElement>document.querySelector(".header__form-button");
  const list: HTMLElement   =<HTMLElement> document.querySelector(".box__list");
  let count = 0;

  if (localStorage.length !== 0) {
    for (let i = 0; i < localStorage.length; i++) {

      let key: string  = <string>localStorage.key(i);

      const li: Element | null = document.createElement("li");
      const closeButton: Element | null = document.createElement("button");
      const textClose: Text = document.createTextNode("\u00D7");
      const textLi: Text = document.createTextNode(`${localStorage.getItem(key)}`);
      closeButton.className = "close-button";
      li.className = "box__list-link";

      closeButton.append(textClose);
      li.append(textLi);
      li.append(closeButton);
      if(!list) return
      list.append(li);

      li.addEventListener("click", () => {
        li.classList.toggle("checked");
      });

      closeButton.addEventListener("click", () => {
        li.remove();
        let liText : string = <string>li.textContent;
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
      li.append(closeButton);
      list.append(li);
      input.value = "";

      let textCont:string  = <string>textLi.textContent
      localStorage.setItem(textCont,textCont);

      li.addEventListener("click", () => {
        li.classList.toggle("checked");
      });

      closeButton.addEventListener("click", () => {
        li.remove();
        let liText:string = <string>li.textContent;
        let liTextClear = liText.replace(/\u00D7/gi, "");
        localStorage.removeItem(liTextClear);
      });
    }
  }
  buttonCreate.addEventListener("click", createLi);
}

document.addEventListener("DOMContentLoaded", todoList);
