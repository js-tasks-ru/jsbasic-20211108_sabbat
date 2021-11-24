function makeFriendsList(friends) {
  let fullName = friends.map(person => person.firstName + ' ' + person.lastName);
  let spisok = document.createElement("ul");
  spisok.replaceChildren(...fullName.map(item => {elem = document.createElement("li"); elem.innerHTML = item; return elem}));
  return spisok;

}



