let errors = {};
let data = {};
let regExEmail = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

function onSubmit(e) {
  e.preventDefault();
  //Declare variable
  const fullName = document.getElementById("full-name");
  const email = document.getElementById("email");
  const message = document.getElementById("message");

  checkFullName(fullName.value);
  checkEmail(email.value);
  checkMessage(message.value);
  checkifErrors();
}

//checking full name
function checkFullName(fullName) {
  console.log("inout name", fullName);

  if (!fullName) {
    errors.fullName = "Please input your full name.";
    return;
  }

  if (typeof fullName !== "string") {
    errors.fullName = "Please input valid full name.";
    return;
  }

  data.fullName = fullName;
  return;
}

//checking email
function checkEmail(email) {
  console.log("inout name", email);

  if (!email) {
    errors.email = "Please input your email.";
    return;
  }

  if (!email.match(regExEmail)) {
    errors.email = "Email is invalid. Please input valid email.";
    return;
  }

  data.email = email;
  return;
}

//checking message
function checkMessage(message) {
  console.log("inout name", message.length);

  if (!message) {
    errors.message = "Please input your message.";
    return;
  }

  if (typeof message !== "string") {
    errors.message = "Please input valid message.";
    return;
  }

  data.message = message;
  return;
}

//check if errors or valid
function checkifErrors() {
  if (errors.fullName || errors.email || errors.message) {
    console.log(errors);
    document.getElementById("feedback").innerText = feedback(errors);
    errors = {};
  } else {
    console.log(data);
    document.getElementById("feedback").innerText = feedback(data);
    data = {};
    document.getElementById("contact-form").reset();
  }
}

function feedback(type) {
  let feedback = "";
  if (type.fullName) {
    feedback = feedback + "\n" + type.fullName;
  }
  if (type.email) {
    feedback = feedback + "\n" + type.email;
  }
  if (type.message) {
    feedback = feedback + "\n" + type.message;
  }
  return feedback;
}

const form = document.getElementById("contact-form");
form.addEventListener("submit", onSubmit);
