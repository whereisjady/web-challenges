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

// // postContent
const postContent = document.createElement("p");
postContent.textContent = "This is a new social media post";
postContent.classList.add("post__content");

// // footer
const postFooter = document.createElement("footer");
postFooter.classList.add("post__footer");

// // // username & like button
const postUsername = document.createElement("span");
postUsername.textContent = "@username";
postUsername.classList.add("post__username");

const postButton = document.createElement("button");
postButton.textContent = "♥ Like";
postButton.classList.add("post__button");
postButton.addEventListener("click", handleLikeButtonClick);

//// appending
postFooter.appendChild(postUsername);
postFooter.appendChild(postButton);

newPost.appendChild(postContent);
newPost.appendChild(postFooter);

body.appendChild(newPost);
