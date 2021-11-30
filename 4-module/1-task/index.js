function makeFriendsList(friends) {
  let spisok = document.createElement("ul");

  for (let friend of friends) {
    spisok.insertAdjacentHTML("beforeend", `
                                             <li>
                                             ${friend.firstName + ' ' + friend.lastName}
                                              </li>`);
                                          
  }
 
return spisok;
}


