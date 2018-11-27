'use strict'

const showAllUsers = document.querySelector('.js-btn-showAllUsers');
const tBody = document.querySelector("table > tbody");
const hideBtn = document.querySelector('.js-btn-hideAllUsers');
const tableList = document.querySelector('.table-allUsers');
showAllUsers.addEventListener('click', handleClick);

function getAllUsers() {
     return fetch('https://test-users-api.herokuapp.com/users/')
    .then(response => {
        if (response.ok) {
            return response.json()
        }
    })
    .catch(err => console.log(err));
}
function updateView(array) {
    const htmlString = array.data.reduce(
            (acc, item) => acc + createTableRow(item),
            ""
          );
          tBody.innerHTML = htmlString;
}

function createTableRow({id, name, age}) {
      return `
    <tr scope="row">
      <td>${id}</td>
      <td>${name}</td>
      <td>${age}</td>
    </tr>`};

function handleClick() {
    event.preventDefault();
    getAllUsers()
    .then(updateView);
    hideBtn.style.display = "inline-block";
};

hideBtn.addEventListener('click', hideList);
function hideList(event) {
event.preventDefault();
hideBtn.style.display = "none";
tableList.style.display = "none";


};

const inputId = document.querySelector('.inputId');
const showUserById = document.querySelector('.js-btn-showUserById');
showUserById.addEventListener('click', handleClickId);
function getById () {
    const inputValue = inputId.value;
    if (inputValue === "") {return};
    return fetch(`https://test-users-api.herokuapp.com/users/${inputValue}`)
    .then(response => {
        if (response.ok) {
            return response.json()
        }
    })
    .catch(err => console.log(err));
};

function handleClickId() {
    event.preventDefault();
    tBody.innerHTML = "";
    getById().then(data => {
        tBody.innerHTML = `
        <tr scope="row">
          <td>${data.data.id}</td>
          <td>${data.data.name}</td>
          <td>${data.data.age}</td>
        </tr>`; 
    });
   
};

const newUser = document.querySelector('.js-btn-createNewUser');
newUser.addEventListener('click', createUser);
function createUser(event) {
    event.preventDefault();
    const formNewUser = document.querySelector('.js-form-three');
    const age = document.querySelector('.inputNewUserAge').value;
    const name = document.querySelector('.inputNewUserName').value;
    formNewUser.reset();
    const newUser = {
        name: `${name}`,
        age: `${age}`,
    };
    
fetch('https://test-users-api.herokuapp.com/users', {
  method: 'POST',
  body: JSON.stringify(newUser),
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  }
})
.then(response => {if (response.ok) { return response.json()}})
.then(data => {
    alert(`New User Created - Name: ${data.data.name}`);
    console.log(data.data);
    console.log(data)})
.catch(err => console.log(err));
}

const removeUserInput = document.querySelector('.inputIdRemove');
const btnRemoveUser = document.querySelector('.js-btn-removeUserById');
const removeForm = document.querySelector('.js-form-removeById');
btnRemoveUser.addEventListener('click', removeById);
function removeById(event) {
    event.preventDefault();
    const removeUserInputValue = removeUserInput.value;
    if (removeUserInputValue === "") {return};
    removeForm.reset();
    fetch(`https://test-users-api.herokuapp.com/users/${removeUserInputValue}`, {
    method: 'DELETE'})
.then(response => {if (response.ok) { return response.json()}})
.then(() => alert(`user with ID${removeUserInputValue} DELETED`))
.catch(err => console.log(err));
};

const updateForm = document.querySelector('.js-form-update');
const btnUpdate = document.querySelector('.js-btn-updateUser');

btnUpdate.addEventListener('click', updateUserInfo);
function updateUserInfo(event) {
    event.preventDefault();
    const inputUserId = document.querySelector('.inputUserId').value;
    const newUserName = document.querySelector('.inputUpdateUserName').value;
    const newUserAge = document.querySelector('.inputUpdateUserAge').value;
    const updateUserUpdate = {
        name: `${newUserName}`,
        age: `${newUserAge}`,
    };
    
    fetch(`https://test-users-api.herokuapp.com/users/${inputUserId}`, {
    method: 'PUT',
    body: JSON.stringify(updateUserUpdate),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.log('ERROR' + error));
    updateForm.reset();
};
