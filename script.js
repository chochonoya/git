const API = "https://api.github.com/users/";

const search = document.getElementById("search");

const img = document.getElementById("img");
const login = document.getElementById("login");
const idUser = document.getElementById("idUser");
const followers = document.getElementById("followers");
const following = document.getElementById("following");
const repositories = document.getElementById("repositories");

async function getUsersByTag(event) {
  event.preventDefault();
  const response = await fetch(API + search.value);
  const users = await response.json();
  console.log("users: ", users);

  img.src = users.avatar_url;
  login.innerHTML = `login: ${users.login}`;
  idUser.innerHTML = `id: ${users.id}`;
  followers.innerHTML = `followers: ${users.followers}`;
  following.innerHTML = `following: ${users.following}`;
  repositories.innerHTML = `repositories: ${users.public_repos}`;
}
function clearInput() {
  search.value = "";
}
