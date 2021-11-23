function showSalary(users, age) {
  let name = users.filter(item => item.age <= age);
  name = name.map(item => item.name + ', ' + item.balance);
  return name.join('\n');
}

