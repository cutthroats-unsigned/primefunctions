/* eslint-env mocha, chai */
/*  global primeGen, chai */

const primeArray = [2, 3, 5, 7];
describe('primeGen()', function () {
  it('primeGen(10)=[2, 3, 5, 7]', function () {
    // eslint-disable-next-line no-undef
    chai.expect(primeGen(10)).to.eql(primeArray);
  });
  it('primeGen(20)=[ 2, 3, 5, 7, 11, 13, 17, 19 ]', function () {
    // eslint-disable-next-line no-undef
    chai.expect(primeGen(20)).to.eql([2, 3, 5, 7, 11, 13, 17, 19]);
  });
});
