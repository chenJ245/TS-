/**console.log('page');
$(function () {
  alert(123);
});

import $ from 'jquery';

$(function () {
  // alert(123);
  $('body').html('<div>123</div>');
  new $.fn.init();
});
*/
// 4-14  泛型中keyof语法的使用

interface Person {
  name: string;
  age: number;
  gender: string;
}

// 定义类型和值
// type NAME = 'name';
// const abc: NAME = 'name';
// type T = 'name';
// key: name;
// Person['name'];

// type T = 'age';
// key: age;
// Person['age'];

// type T = 'gender';
// key: gender;
// Person['gender'];

class Teacher {
  constructor(private info: Person) {}
  getInfo<T extends keyof Person>(key: T): Person[T] {
    // if (key === 'name' || key === 'age' || key === 'gender') {
    return this.info[key];
    // }
  }
}

const teacher = new Teacher({
  name: 'lee',
  age: 20,
  gender: 'male',
});

const test = teacher.getInfo('name');
console.log(test);
