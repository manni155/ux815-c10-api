async function fetchPost() {
  
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/1`)

    if (!response.ok){
      throw new Error("could not fetch resource")
    }

    const data = await response.json();
    console.log(data);

    const postid = data['id'];
    const postTitle = data['title']
    const postBody = data['body']
    const postUser = data['userId']

    document.getElementById('postId').innerText = postid
    document.getElementById('title').innerText = postTitle
    document.getElementById('body').innerText = postBody
    document.getElementById('userId').innerText = postUser
  }
  catch(error) {
    console.error(error);
  }
}
