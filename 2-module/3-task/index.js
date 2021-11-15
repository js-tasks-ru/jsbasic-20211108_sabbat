let calculator = {
    read() {
      this.a = arguments[0];
      this.b = arguments[1];
    },

    sum() {
      return this.a + this.b;
    },

    mul() {
      return this.a * this.b;
    }
};

calculator.read(3, 5);
alert( calculator.sum() );
alert( calculator.mul() );

// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
