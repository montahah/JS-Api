// const person = {
//   name: "Karim",
//   color: "white",
//   language: "English",
// };
// console.log(person);
// Json Stringify
// JSON Parse
// const personJSON = JSON.stringify(person);
// const parseJSON = JSON.parse(personJSON);
// console.log(personJSON);
// console.log(parseJSON);
// fetch("https://jsonplaceholder.typicode.com/posts/1")
//   .then((response) => response.json())
//   .then((json) => console.log(json));
// JSON PlaceHolder
// fetch("https://jsonplaceholder.typicode.com/posts/1")
//   .then((response) => response.json())
//   .then((json) => console.log(json));
const data = "https://jsonplaceholder.typicode.com/todos/1";
const posts = "https://jsonplaceholder.typicode.com/posts";
const comments = "https://jsonplaceholder.typicode.com/comments";
const albums = "https://jsonplaceholder.typicode.com/albums";
const photos = "https://jsonplaceholder.typicode.com/photos";
const todos = "https://jsonplaceholder.typicode.com/todos";
const users = "https://jsonplaceholder.typicode.com/users";

const loadData = () => {
  fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((res) => res.json())
    .then((data) => console.log(data));
};
const loadPosts = () => {
  fetch(posts)
    .then((res) => res.json())
    .then((post) => console.log(post));
};
const comment = () => {
  fetch(comments)
    .then((res) => res.json())
    .then((comment) => console.log(comment));
};
