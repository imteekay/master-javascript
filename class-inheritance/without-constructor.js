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
  doSomething() {
    return this.callOtherFn();
  }
}

const v2 = new V2('param1', 'param2', 'param3');
v2.doSomething(); // => 'param3'
