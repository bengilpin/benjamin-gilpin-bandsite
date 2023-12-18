import BandSiteApi from "./band-site-apis.js";

const api_key = "3d55f80c-bb2b-4ddf-b49f-e9d0c361702f";

const comments = new BandSiteApi(api_key);

document.addEventListener("DOMContentLoaded", async function () {
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
    const currentDate = new Date(commentData.timestamp);
    date.innerText = currentDate.toLocaleString();
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
      for (let i = 0; i < reversedComments.length; i++) {
        const card = createComment(reversedComments[i]);

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
          comment: post,
        };

        await comments.postComment(newComment);

        document.getElementById("name").value = "";
        document.getElementById("comment").value = "";

        renderComments();
      }
    });

  renderComments();
});
