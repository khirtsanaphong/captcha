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

});
