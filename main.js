const fetchDataCapture = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    console.log(response);

    if (response.status === 200) {
      const data = await response.json();
      return data;
    } else if (response.status === 404) {
      console.log("Error, no existe informacion");
    }
  } catch (err) {
    console.log(err);
  }
};

async function getPosts() {
  const post = await fetchDataCapture();
  console.log(post);
  // capturando elementos del dom
  const dataTemplate = document.getElementById("post-data");
  dataTemplate.innerHTML = "";
  post.forEach((e, i) => {
    dataTemplate.innerHTML += `
    <ul>
      <li style="font-weight: bold">${e.title}</li>
      <p>${e.body}</p>
    </ul>`;
  });
}
