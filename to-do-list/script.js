
const list = document.getElementById("u-list");
const inputField = document.getElementById("input");

list.addEventListener("click", (event) => {
  const clickedElement = event.target;
  if (clickedElement.tagName === "LI") {
    clickedElement.classList.toggle("checked");
    saveChanges(); // to save changes in local storage
  } else if (clickedElement.tagName === "SPAN") {
    clickedElement.parentElement.remove();
    saveChanges(); // to save changes in local storage
  }
});

const adding = () => {
    const inputValue = inputField.value;
  
    if (inputValue === '') {
      alert("Please write a task:)");
    } else {
      const listItem = document.createElement("li");
      listItem.innerHTML = inputValue;
      list.appendChild(listItem);
  
      const deleteButton = document.createElement("span");
      deleteButton.innerHTML = "\u292B";
      listItem.appendChild(deleteButton);
    }
  
    inputField.value = '';

    saveChanges(); // to save changes in local storage
  };


const saveChanges = () => {
  localStorage.setItem("data", list.innerHTML);
};

const getToShow = () => {
  list.innerHTML = localStorage.getItem("data");
};

getToShow();
