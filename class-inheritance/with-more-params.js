class V1 {
  constructor(param1, param2, param3) {
    this.param1 = param1;
    this.param2 = param2;
    this.param3 = param3;
  }

  doSomething() {
    return this.callOtherFn();
  }

  callOtherFn() {
    return this.param3;
  }
}

class V2 extends V1 {
  constructor(param1, param2, param3, param4) {
    super(param1, param2, param3);
    this.param4 = param4;
  }

  doSomething() {
    return this.callOtherFn() + this.param4;
  }
}

const v2 = new V2('param1', 'param2', 'param3', 'param4');
v2.doSomething(); // => 'param3param4'
