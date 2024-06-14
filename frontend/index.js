import {
  navDiv,
  createDiv,
  loginDiv,
  logOutDiv,
  registerDiv,
  createPage,
  registerPage,
  loginPage,
  notesPage,
} from "./component.js";

$(document).ready(function () {
  var currentPath = window.location.pathname;
  console.log("Current Path:", currentPath);

  $("#root").append(navDiv);
  if (currentPath == "/") {
    if (localStorage.getItem("token") == "")
      window.location.href = "/pages/login.html";
    $("#navIn").append(createDiv).append(logOutDiv);
    $("#root").append(notesPage);
    getNotes().then((data) => {
      notesArray = data;
      console.log(notesArray);
      renderNotes();
    });
  }
  if (currentPath == "/pages/create") {
    $("#navIn").append(logOutDiv);
    $("#root").append(createPage);
  }
  if (currentPath == "/pages/register") {
    $("#navIn").append(loginDiv);
    $("#root").append(registerPage);
  }
  if (currentPath == "/pages/login") {
    $("#navIn").append(registerDiv);
    $("#root").append(loginPage);
  }
  $("#registerForm").submit(handleRegisterSubmit);
  $("#loginForm").submit(handleLoginSubmit);
  $("#logOutDiv").click(handleLogout);
  $("#createNote").submit(handleCreateSubmit);
});

const handleRegisterSubmit = (event) => {
  event.preventDefault();
  const name = $("#register_name").val();
  const email = $("#register_email").val();
  const password = $("#register_password").val();

  const formData = { name, email, password };

  const result = $.ajax({
    type: "POST",
    url: "http://localhost:3001/register",
    data: formData,
  }).done((data) => {
    console.log("data", data.token);
    localStorage.setItem("token", data.token);
    window.location.href = "/index.html";
  });
};

const handleLoginSubmit = (event) => {
  event.preventDefault();
  const email = $("#login_email").val();
  const password = $("#login_password").val();

  const formData = { email, password };

  const result = $.ajax({
    type: "POST",
    url: "http://localhost:3001/login",
    data: formData,
  }).done((data) => {
    console.log("data", data.token);
    localStorage.setItem("token", data.token);
    window.location.href = "/index.html";
  });
};

const handleLogout = () => {
  localStorage.setItem("token", "");
  window.location.href = "/pages/login.html";
};

const handleCreateSubmit = (event) => {
  event.preventDefault();
  const title = $("#createTitle").val();
  const content = $("#createContent").val();
  const formData = { title, content };

  const token = localStorage.getItem("token");

  const result = $.ajax({
    type: "POST",
    url: "http://localhost:3001/add-note",
    data: formData,
    headers: { token: token },
  }).done((data) => {
    console.log("data", data);
    window.location.href = "/index.html";
  });
};

export let notesArray = [];
const getNotes = () => {
  return new Promise((resolve, reject) => {
    const token = localStorage.getItem("token");
    $.ajax({
      type: "GET",
      url: "http://localhost:3001/notes",
      headers: { token: token },
      success: function (data) {
        resolve(data);
      },
      error: function (xhr, status, error) {
        reject(error);
      },
    });
  });
};

const renderNotes = () => {
  const noteDiv = notesArray
    .map(
      (note) => `
    <div id="note" class="bg-neutral-100 border border-2 rounded-lg hover:bg-neutral-50 p-2">
        <h1 class="text-2xl">${note.title}</h1>
        <p>${note.content}</p>
      </div>
  `
    )
    .join(" ");

  $("#notes").append(noteDiv);
};
