const commentsDiv = document.getElementById("comments");

function sendComment() {
  const username = document.getElementById("username").value || "名無し";
  const comment = document.getElementById("comment").value;

  if (comment === "") return;

  const div = document.createElement("div");
  div.className = "comment";
  div.textContent = `${username}: ${comment}`;

  commentsDiv.appendChild(div);
  document.getElementById("comment").value = "";
}
