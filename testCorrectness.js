/* eslint-env mocha, chai */
/*  global primeGen, cumulativeSum, maxPrimeSum, chai */
describe('Test for Correctness', function () {
  const primeArray = [2, 3, 5, 7];
  describe('primeGen()', function () {
    it('primeGen(10) = [2, 3, 5, 7]', function () {
    // eslint-disable-next-line no-undef
      chai.expect(primeGen(10)).to.eql(primeArray);
    });
    it('primeGen(20) = [ 2, 3, 5, 7, 11, 13, 17, 19 ]', function () {
    // eslint-disable-next-line no-undef
      chai.expect(primeGen(20)).to.eql([2, 3, 5, 7, 11, 13, 17, 19]);
    });
  });
  describe('cumulativeSum()', function () {
    it('cumulativeSum([1, 2, 3, 4]) = [1, 3, 6, 10]', function () {
      chai.expect(cumulativeSum([1, 2, 3, 4])).to.eql([1, 3, 6, 10]);
    });
    it('cumulativeSum([10, 11, 12, 13, 14]) = [10, 21, 33, 46, 60]', function () {
      chai.expect(cumulativeSum([10, 11, 12, 13, 14])).to.eql([10, 21, 33, 46, 60]);
    });
  });
  describe('maxPrimeSum()', function () {
    it('maxPrimeSum(100) = [ 41, 6 ]', function () {
      chai.expect(maxPrimeSum(100)).to.eql([41, 6]);
    });
    it('maxPrimeSum(1000) = [ 953, 21 ]', function () {
      chai.expect(maxPrimeSum(1000)).to.eql([953, 21]);
    });
  });
});
