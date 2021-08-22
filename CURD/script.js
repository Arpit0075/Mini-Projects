// fetch users data from mockApi
const fetchData = async () => {
  try {
    const data = await fetch(
      "https://611f264e9771bf001785c73e.mockapi.io/users"
    );
    const users = await data.json();
    // console.log(users);
    container.innerHTML = "";
    users.forEach((user) => {
      buildData(user);
    });
  } catch (err) {
    console.log(err);
  }
};
fetchData();

function buildData(val) {
  container.innerHTML += `<div class="body">
   <div class="img-container"> 
   <img  class="avatar" src="${val.avatar}"></div> 
   <div class=details-container> 
   <h3 oninput="newUserName(event)" contentEditable="true">${val.name}</h3> 
   <p>${val.createdAt} </p> <input oninput="newUserAvatar(event)" type="text" placeholder="Enter-New-user-avatar-link" />
  <button onclick="deleteUser(${val.id})" class="btn">Delete</button>
  <button onclick="editUser(${val.id})" class="btn">Edit-user</button> </div>
   </div>`;
}

//delete data using id
async function deleteUser(id) {
  const data = await fetch(
    `https://611f264e9771bf001785c73e.mockapi.io/users/${id}`,
    { method: "DELETE" }
  );
  //const user = await data.json();
  //console.log(`deleted user:${user}`);
  fetchData();
}

async function addUser() {
  let userName = userNameField.value;
  let userAvatar = userImageField.value;
  //console.log(userName);
  //console.log(userAvatar);
  //console.log("clicked");

  const data = await fetch(
    "https://611f264e9771bf001785c73e.mockapi.io/users",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: userName,
        avatar: userAvatar,
        createdAt: new Date(),
      }),
    }
  );

  // const content = await data.json();
  // console.log(content);
  userNameField.value = "";
  userImageField.value = "";
  fetchData();
}

//edit user- put request
// end point  /users/:id

let newName, newAvatar;

function newUserName(event) {
  newName = event.target.innerText;
  //console.log(newName);
}
function newUserAvatar(event) {
  newAvatar = event.target.value;
  //console.log(newAvatar);
}

async function editUser(id) {
  //console.log("clicked");
  const data = await fetch(
    `https://611f264e9771bf001785c73e.mockapi.io/users/${id}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: newName,
        avatar: newAvatar,
      }),
    }
  );

  //   const content = await data.json();
  //   console.log(content);

  fetchData();
}
