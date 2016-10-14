let Oper = ['+', '-', '*', '/'];
let num = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
let mes = ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];


function Operator(Ope)
{
  this.toString = function(){
    return Oper[Ope-1];
  }
}



function LeftOperand(patt , lef)
{
  this.toString = function(){
    if(patt === 1){
      return num[lef];
    }
    else if (patt === 2) {
      return mes[lef];
    }
  }
}



function RightOperand(patt , righ)
{
  this.toString = function(){
    if(patt === 1){
      return mes[righ];
    }
    else if (patt === 2) {
      return num[righ];
    }
  }
}


function Captcha(pattern , operator , leftoperand , rightoperand)
  {
  this.generate = function(){
    return new LeftOperand(pattern , leftoperand) + ' ' + new Operator(operator) + ' ' + new RightOperand(pattern , rightoperand);
  }
}
describe('Pattern 1', function () {
  let a = 1;
  it('should return "0+Zero" when input is 1,1,0,0', function () {
    var cap = new Captcha(a,1,0,0);
    expect(cap.generate()).toEqual('0 + Zero');
  });
  it('should return "1-One" when input is 1,2,1,1', function () {
    var cap = new Captcha(a,2,1,1);
    expect(cap.generate()).toEqual('1 - One');
  });
  it('should return "2 + Two" when input is 1,1,2,2', function () {
    var cap = new Captcha(a,1,2,2);
    expect(cap.generate()).toEqual('2 + Two');
  });
  it('should return "3 + Three" when input is 1,1,3,3', function () {
    var cap = new Captcha(a,1,3,3);
    expect(cap.generate()).toEqual('3 + Three');
  });
  it('should return "4 * Four" when input is 1,3,4,4', function () {
    var cap = new Captcha(a,3,4,4);
    expect(cap.generate()).toEqual('4 * Four');
  });
  it('should return "5 - Five" when input is 1,2,5,5', function () {
    var cap = new Captcha(a,2,5,5);
    expect(cap.generate()).toEqual('5 - Five');
  });
  it('should return "6 - Six" when input is 1,2,6,6', function () {
    var cap = new Captcha(a,2,6,6);
    expect(cap.generate()).toEqual('6 - Six');
  });
  it('should return "7 / Seven" when input is 1,4,7,7', function () {
    var cap = new Captcha(a,4,7,7);
    expect(cap.generate()).toEqual('7 / Seven');
  });
  it('should return "8 + Eight" when input is 1,1,8,8', function () {
    var cap = new Captcha(a,1,8,8);
    expect(cap.generate()).toEqual('8 + Eight');
  });
  it('should return "9 - Nine" when input is 1,2,9,9', function () {
    var cap = new Captcha(a,2,9,9);
    expect(cap.generate()).toEqual('9 - Nine');
  });


  describe('Pattern 2', function () {
  let a = 2;
  it('should return "One + 2" when input is 1,1,1,2', function () {
    var cap = new Captcha(a,1,1,2);
    expect(cap.generate()).toEqual('One + 2');
  });
  it('should return "Three - 4" when input is 1,2,3,4', function () {
    var cap = new Captcha(a,2,3,4);
    expect(cap.generate()).toEqual('Three - 4');
  });
  it('should return "Zero * 1" when input is 1,3,0,1', function () {
    var cap = new Captcha(a,3,0,1);
    expect(cap.generate()).toEqual('Zero * 1');
  });
  it('should return "Two / 3" when input is 1,4,2,3', function () {
    var cap = new Captcha(a,4,2,3);
    expect(cap.generate()).toEqual('Two / 3');
  });
  it('should return "Four + 5" when input is 1,1,4,5', function () {
    var cap = new Captcha(a,1,4,5);
    expect(cap.generate()).toEqual('Four + 5');
  });
  it('should return "Five - 6" when input is 1,2,5,6', function () {
    var cap = new Captcha(a,2,5,6);
    expect(cap.generate()).toEqual('Five - 6');
  });
  it('should return "Six * 7" when input is 1,3,6,7', function () {
    var cap = new Captcha(a,3,6,7);
    expect(cap.generate()).toEqual('Six * 7');
  });
  it('should return "Seven / 8" when input is 1,4,7,8', function () {
    var cap = new Captcha(a,4,7,8);
    expect(cap.generate()).toEqual('Seven / 8');
  });
  it('should return "Eight + 9" when input is 1,1,8,9', function () {
    var cap = new Captcha(a,1,8,9);
    expect(cap.generate()).toEqual('Eight + 9');
  });
  it('should return "Nine - 0" when input is 1,2,9,0', function () {
    var cap = new Captcha(a,2,9,0);
    expect(cap.generate()).toEqual('Nine - 0');
  });
});

});
