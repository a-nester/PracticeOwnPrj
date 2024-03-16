const list = document.createElement("ol");
const buttonAdd = document.createElement("button");
const buttonRemove = document.createElement("button");
const input = document.createElement("input");
buttonAdd.textContent = 'Add';
buttonRemove.textContent = 'Remove';

document.body.append(input, buttonAdd, buttonRemove, list);

buttonAdd.addEventListener("click", hundleClickAdd);
buttonRemove.addEventListener("click", hundleClickRemove);

function handleClickAdd(event) {
  const inputValue = input.value.trim();
  if (!inputValue) {
    iziToast.warning({
    title: 'Caution',
    message: 'You forgot important data',
    position: "topRight",
    });
      return;
  }
    const item = document.createElement('li');
    item.textContent = inputValue;
    list.append(item)
    if (list.children.length % 2 === 0) {
        item.style.backgroundColor = 'yellow';
    } else {
        item.style.backgroundColor = 'blue';

    }
    input.value = "";
}

function hundleClickRemove(event) {
    if (list.lastElementChild) {
        list.lastElementChild.remove();
    }
}