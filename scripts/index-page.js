import BandSiteApi from "./band-site-apis.js";

const api_key = "3d55f80c-bb2b-4ddf-b49f-e9d0c361702f";

const comments = new BandSiteApi(api_key);


document.addEventListener("DOMContentLoaded", async function () {
  // Your existing code here

  function getCurrentTimestamp() {
    const now = new Date();
    const month = (now.getMonth() + 1).toString().padStart(2, "0");
    const day = now.getDate().toString().padStart(2, "0");
    const year = now.getFullYear();
    console.log("timestamp working");
    return `${month}/${day}/${year}`;
  }

  function createComment(commentData) {
    const commentCard = document.createElement("div");
    commentCard.classList.add("comment-box__containers__objects");

    const profilePic = document.createElement("div");
    profilePic.classList.add("comment-box__containers--profile");
    commentCard.appendChild(profilePic);

    const commentCardContent = document.createElement("div");
    commentCardContent.classList.add(
      "comment-box__containers__objects--content"
    );
    commentCard.appendChild(commentCardContent);

    const commentCardContentHeader = document.createElement("div");
    commentCardContentHeader.classList.add(
      "comment-box__containers__objects--header"
    );
    commentCardContent.appendChild(commentCardContentHeader);

    const name = document.createElement("p");
    name.classList.add("comment-box__containers--text--name");
    name.classList.add("bold16");
    name.innerText = commentData.name;
    commentCardContentHeader.appendChild(name);

    const date = document.createElement("p");
    date.classList.add("comment-box__containers__objects--header--date");
    date.innerText = getCurrentTimestamp()
    commentCardContentHeader.appendChild(date);

    const newComment = document.createElement("p");
    newComment.classList.add("comment-box__containers--text--comment");
    newComment.innerText = commentData.comment;
    commentCardContent.appendChild(newComment);
    console.log("create comment function working");
    return commentCard;
  }

  async function renderComments() {
    const myCommentContainer = document.querySelector(".js-wrapper-index");
    myCommentContainer.innerHTML = "";

    try {
      const newComments = await comments.getComments();
      const reversedComments = newComments.reverse();
      console.log(newComments.data);
      for (let i = 0; i < newComments.length; i++) {
        const card = createComment(newComments[i]);
        
        myCommentContainer.appendChild(card);
      }
      console.log("comments render function working");
    } catch (error) {
      console.error("comment render not working");
    }
  }
  document
    .getElementById("comment-form")
    .addEventListener("submit", async function (event) {
      event.preventDefault();

      const name = document.getElementById("name").value;
      const post = document.getElementById("comment").value;

      if (name && post) {
        const newComment = {
          name: name,
          // timestamp: getCurrentTimestamp(),
          comment: post
        };

        await comments.postComment(newComment);

        document.getElementById("name").value = "";
        document.getElementById("comment").value = "";

        renderComments();
      }
    });

  renderComments();
});
