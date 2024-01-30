class User {
  static adminName = "sy";
  static getAdminUser() {
    return new User(User.adminName, 28);
  }

  name;
  age;

  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  isAdult() {
    return this.age >= 20;
  }
}

console.log(User.adminName); // 'sy'
const admin = User.getAdminUser();
console.log(admin.age); // 28
console.log(admin.isAdult()); // true
const danji = new User("danji", 6); // 에러 발생
console.log(danji);
