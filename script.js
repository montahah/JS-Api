const loadPost = () => {
  const url = "https://jsonplaceholder.typicode.com/posts";
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      displayPost(data);
    });
};

const displayPost = (posts) => {
  const titleContainer = document.getElementById("title-container");
  titleContainer.innerHTML = "";

  posts.forEach((posts) => {
    // Create HTML Element
    const li = document.createElement("li");
    li.innerText = posts.body;
    titleContainer.appendChild(li);
  });
};
