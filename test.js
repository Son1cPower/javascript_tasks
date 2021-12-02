describe("pow", function() {

  describe("возводит x в степень 4", function() {
  function makeTest(x) {
    let expected = x * x * x * x;
    it(`${x} в степени 4 будет ${expected}`, function() {
      assert.equal(pow(x, 4), expected);
    });
  }

  for (let x = 0; x <= 7; x++) {
    makeTest(x);
  }
})

describe("некорректные значения n", function() {

  // ...

  it("для отрицательных n возвращает NaN", function() {
    assert.isNaN(pow(2, -1));
  });

  it("для дробных n возвращает NaN", function() {
    assert.isNaN(pow(2, 1.5));
  });

});


});