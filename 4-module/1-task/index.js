function makeFriendsList(friends) {
  
  let fullName = friends.map(person => person.firstName + ' ' + person.lastName);
  let spisok = document.createElement("ul");
  console.log(fullName);

  for (let i = 0; i < friends.length; i++)
  spisok.insertAdjacentHTML("beforeend", `
                                           <li>
                                           ${fullName[i]}
                                            </li>`);
  console.log(spisok);
 
return spisok;
}