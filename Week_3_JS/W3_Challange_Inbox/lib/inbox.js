const unreadNum = document.querySelectorAll('.unread')
const readNum = document.querySelectorAll('.read')

// TODO: return true with a probability of 20%.
const hasNewMessage = () => {
//   if (probability) = 0.2; return true } else {return false}
    return Math.random() < 0.2; {

    }

}

// TODO: return a random message as an object with two keys, subject and sender

const unReadMessages = async () => {
// await only works with async function
let result = await fetch("https:raw.githubusercontent.com/johncalvinroberts/03-Wagon-Race/master/stories.json");
result = await result.json();
console.log(result);
}

  //make random message "return" method
//here is created "objects" named id, sender, subject
const newMessage =  (message) => {
const sender = ['Ramsey', 'Quentyn', 'Targaryen', 'Horton']
const subject = ["Hodor? Hodor.", "All dwarfs are bastard.", "Fear cuts deeper than words.", "Fear cuts deeper than swords."]
  return {
    sender: senders[Math.floor(Math.random() * senders.length)],
    subject: subjects[Math.floor(Math.random() * subjects.length)]
  };
  console.log("random message")
}

// TODO: append the given message to the DOM (as a new row of `#inbox`)
//5. append new line for this message on HTMl


const appendMessageToDom = (message) => {
  let inbox = document.getElementById("inbox");
  const newElement = newMessage ();
  //1. Create function to add new div inside the #inbox
  const list = document.querySelector('#inbox > div.row.message.unread')
//2. take object with "subject" and "sender" keys as a parameter.
//3. inspect read and unread message line from HTML
    list.insertAdjacentHTML("beforebegin",
      `<div class="row message unread">
      <div class="col-3">${message["sender"]}</div>
      <div class="col-9">${message["subject"]}</div>`)
  };
console.log("list begining")

const refresh = () => {
  // TODO: Implement the global refresh logic. If there is a new message,
  //       append it to the DOM. Update the unread counter in title as well.
  console.log("refresh begining")

    if (hasNewMessage()) {
      appendMessageToDom(newMessage())
      let count = document.getElementById("count");
      let unreadNum = document.querySelectorAll('.unread').length;
    count.innerText = `(${unreadNum})`;
    document.title = `Inbox (${unreadNum})`;
  }
}











// Do not remove these lines:
document.addEventListener("DOMContentLoaded", () => {
  console.log("begining")
  setInterval(refresh, 1000);

  // Every 1 second, the `refresh` function is called.;

});
