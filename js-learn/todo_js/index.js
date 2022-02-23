
const onClickAdd = () => {
  // get value in textbox and initialize it
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  // create tag
  const ul = document.createElement("ul");
  ul.className = "list-row";
  const li = document.createElement("li");
  li.innerText = inputText;
  const completeButton = document.createElement("button");
  completeButton.innerText = "complete";

  // push completeButton
  completeButton.addEventListener(
    "click", () => {
      deleteFromIncompleteList(completeButton.parentNode);

      // create tag
      const addTarget = completeButton.parentNode;
      const text = addTarget.firstElementChild.innerText;

      // empty in ul
      addTarget.textContent = null;
      const li = document.createElement("li");
      li.innerText = text;
      const backButton = document.createElement("button");
      backButton.innerText = "back";
      ul.appendChild(li);
      ul.appendChild(backButton);
      document.getElementById("complete-list").appendChild(ul);

      backButton.addEventListener(
        "click", () => {
          const deleteTarget = backButton.parentNode;
          document.getElementById("complete-list").removeChild(deleteTarget);
          addTarget.textContent = null;
          ul.appendChild(li);
          ul.appendChild(completeButton);
          ul.appendChild(deleteButton);
          document.getElementById("incomplete-list").appendChild(ul);
        }
      )
    }
  )

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "delete"
  deleteButton.addEventListener(
    "click", () => {
      deleteFromIncompleteList(deleteButton.parentNode);
    }
  )

  // add element
  ul.appendChild(li);
  ul.appendChild(completeButton);
  ul.appendChild(deleteButton);
  document.getElementById("incomplete-list").appendChild(ul);
}

// function:delete element in incomplete-list
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
}



document.getElementById("add-button").addEventListener(
  "click", () => onClickAdd()
);
