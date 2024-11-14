console.clear();

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);

// Exercise:
// Use document.createElement() and append another social media post to the body.

const body = document.querySelector("body");

// created an article parent
const newPost = document.createElement("article");
newPost.classList.add("post");

// // post
const postContent = document.createElement("p");
postContent.textContent = "This is a new social media post";
postContent.classList.add("post__content");

// // footer
const postFooter = document.createElement("footer");
postContent.classList.add("post__footer");

// // // span & button
const postUsername = document.createElement("span");
postContent.textContent = "@username";
postContent.classList.add("post__username");

const postButton = document.createElement("button");
postContent.classList.add("post__button");

footer.appendChild(span);
footer.appendChild(button);
post.appendChild(footer);
newPost.appendChild(post);
body.appendChild(newPost);
