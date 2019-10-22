let promise = fetch('https://jsonplaceholder.typicode.com/todos', {
    method: 'GET'
}).then( (res) => res.json() )
.then( (res) => {
  let newArray = JSON.parse(JSON.stringify(res));
  makeTable(1, newArray);

  let buttons = document.querySelector('.buttons');
  let number = newArray.length / 20;

  for (let i = 1; i <= number; i++) {
    let btn = document.createElement('div');
    btn.classList.add('btns');
    btn.innerText = i;
    btn.addEventListener('click', () => makeTable(i, newArray));
    buttons.append(btn);
  }
  

})
.catch((err) => console.log(err));



function makeTable(pageNum, newArray) {
  let main = document.querySelector('.main-table');
  main.innerHTML = null;
  let table = document.createElement('table');
  table.setAttribute('cellspacing', '0');
  let pages = pageNum * 20;

  for (let i = (pageNum - 1) * 20; i < pages; i++) {
    let tr = document.createElement('tr');
    let obj = newArray[i];
    for (const key in obj) {
      let td = document.createElement('td');
      td.innerText = obj[key];
      tr.append(td);
    }
    table.append(tr);
  }
  main.append(table);
}