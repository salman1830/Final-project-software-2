const btn = document.querySelector('.main-button');
const table = document.querySelector('#book-list');

function ShowAlert(cname, msg) {
  let header = document.querySelector('.header');
  let div = document.createElement('div');
  div.classList.add('alert', cname);
  div.innerText = msg;
  header.append(div);
  setTimeout(() => {
    document.querySelector('.alert').remove();
  }, 3000);
}

function addBook(e) {
  let bookName = document.querySelector('#book-name');
  let authorName = document.querySelector('#author-name');
  let year = document.querySelector('#year');
  if (
    bookName.value === '' ||
    authorName.value === '' ||
    year.value === ''
  ) {
    ShowAlert('red', "Field Can't be empty");
  } else {
    let html = `
  <td>${bookName.value}</td>
  <td>${authorName.value}</td>
  <td>${year.value}</td>
  <td><button class="close"><i class="fa-solid fa-trash-can"></i></button></td>

  `;
    let tr = document.createElement('tr');
    tr.innerHTML = html;
    table.append(tr);
    ShowAlert('green', 'Book Added');

    bookName.value = '';
    authorName.value = '';
    year.value = '';
  }
}

btn.addEventListener('click', addBook);

function removeBook(e) {
  //   console.log(e.target);
  if (e.target.classList.contains('fa-trash-can')) {
    e.target.parentElement.parentElement.parentElement.remove();
    ShowAlert('red', 'Book Deleted');
  }
}

table.addEventListener('click', removeBook);
