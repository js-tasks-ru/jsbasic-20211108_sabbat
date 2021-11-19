function showSalary(users, age) {
  let name = [];
  for(let i = 0; i < users.length; i++) {
      if(users[i].age <= age){
        name.push(`${users[i].name}, ${users[i].balance}`);
        name.push(`\n`)
      }
  }
  console.log(name);
  name.pop();
  return name.join('');
}

