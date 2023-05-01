let divContainer = document.createElement("div"),
  textArea = document.createElement("textarea"),
  bodyKeys = document.createElement("div"),
  rowKeys = document.createElement("div"),
  keyboard = [];

divContainer.className = "centralizer";
textArea.className = "body--textarea textarea";

document.body.append(divContainer);
divContainer.append(textArea);
bodyKeys.className = "body--keyboard keyboard";
bodyKeys.id = "keyboard";
divContainer.append(bodyKeys);

rowKeys.className = "keyboard--row row";

async function getData() {
  const quotes = "keyboard-en.json";
  const res = await fetch(quotes);
  const data = await res.json();
  return data;
}
getData().then((res) => {
  keyboard = res;
  getListContent();
  rowKeys.append(...getListContent());
  bodyKeys.append(rowKeys);
});

function getListContent() {
  let result = [];

  keyboard.forEach((item) => {
    let li = document.createElement("div");
    li.className = "keyboard--key key";
    li.innerHTML = `
    <div class="keyboard--key key ${item.code}">
        <span class="rus hidden">
            <span class="caseDown hidden">${item.k}</span>
            <span class="caseUp hidden">${item.k}</span>
            <span class="caps hidden">${item.k}</span>
            <span class="shiftCaps hidden">${item.k}</span>
        </span>
        <span class="eng">
            <span class="caseDown">${item.k}</span>
            <span class="caseUp hidden">${item.k}</span>
            <span class="caps hidden">${item.k}</span>
            <span class="shiftCaps hidden">${item.k}</span>
        </span>
    </div>
    `;
    result.push(li);
  });

  return result;
}
