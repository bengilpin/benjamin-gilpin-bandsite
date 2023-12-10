// You must have an array in JavaScript with 3 default comment objects to start. Comments must have a name, a timestamp, and the comment text.
// You must have a function that takes in one comment object as a parameter and displays it on the page using JavaScript DOM manipulation.

// You must use an HTML Form with the following functionality:
// That submits using the addEventListener
// Prevents the page from reloading when submitting a new comment
// Constructs a new comment object
// Pushes a new comment object to an array of comments
// Clears all comments from the page
// Re-renders to the page all comments from the comment array
// Clears the input fields after submitting a new comment

//build default array

const commentsArray = [
  {
    name: "Conor Walton",
    timestamp: "02/17/2021",
    comment:
      "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
  },
  {
    name: "Emilie Beach",
    timestamp: "01/09/2021",
    comment:
      "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
  },
  {
    name: "Miles Acosta",
    timestamp: "12/20/2020",
    comment:
      "I can t stop listening. Every time I hear one of their songs the vocals it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can t get enough.",
  },
];

function getCurrentTimestamp() {
  const now = new Date();
  const month = (now.getMonth() + 1).toString().padStart(2, '0');
  const day = now.getDate().toString().padStart(2, '0');
  const year = now.getFullYear();

  return `${month}/${day}/${year}`;
}

function createComment(commentData) {
  const commentCard = document.createElement("div");
  commentCard.classList.add("commentBox__containers__objects");

  const profilePic = document.createElement("div");
  profilePic.classList.add("commentBox__containers--profile");
  commentCard.appendChild(profilePic);

  const commentCardContent = document.createElement("div");
  commentCardContent.classList.add("commentBox__containers__objects--content");
  commentCard.appendChild(commentCardContent); // Fix typo here

  const commentCardContentHeader = document.createElement("div");
  commentCardContentHeader.classList.add(
    "commentBox__containers__objects--header"
  );
  commentCardContent.appendChild(commentCardContentHeader);

  const name = document.createElement("p");
  name.classList.add("commentBox__containers--text--name");
  name.classList.add("bold16");
  name.innerText = commentData.name; // Accessing properties from commentData
  commentCardContentHeader.appendChild(name);

  const date = document.createElement("p");
  date.classList.add("commentBox__containers__objects--header--date");
  date.innerText = commentData.timestamp;
  commentCardContentHeader.appendChild(date);

  const comment = document.createElement("p");
  comment.classList.add("commentBox__containers--text--comment");
  comment.innerText = commentData.comment;
  commentCardContent.appendChild(comment);

  return commentCard; 
}

function renderComments() {
  const myCommentContainer = document.querySelector(".commentsjswrapper");
  myCommentContainer.innerHTML = '';

  const reversedCommentsArray = commentsArray.slice().reverse();

  for (let i = 0; i < reversedCommentsArray.length; i++) {
    const card = createComment(reversedCommentsArray[i]);
    myCommentContainer.appendChild(card);
  }
}

document.getElementById('commentForm').addEventListener('submit', function (event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const comment = document.getElementById('comment').value;

  if (name && comment) {
    const newComment = {
      name: name,
      timestamp: getCurrentTimestamp(),
      comment: comment
    };

    commentsArray.push(newComment);

    document.getElementById('name').value = '';
    document.getElementById('comment').value = '';

    renderComments(); // Call renderComments after adding a new comment
  }
});



// Initial rendering of existing comments
renderComments();