{
  /* function x() {
  console.log("Hello", this);
  function y() {
    console.log("Func Y", this);
    function z() {
      console.log("Func Z", this);
    }
    z();
  }
  y();
}
x(); */
}

{
  /*const person = {
  name: "Akshay",
};

const person1 = {
  name: "Saini",
};

function x() {
  console.log(this);
}

function y(a) {
  console.log(a);
}

x();
x.call(this);
// x.call(person);
// x.call(person1);
y();*/
}

const person = {
  name: "Akshay",
  print: function () {
    console.log(this);
  },
};

person.print();
person.print.call();
person.print.call(this);
person.print.call(person);
