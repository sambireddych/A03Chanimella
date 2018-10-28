QUnit.test("Here's a test that should always pass", function (assert) {
    assert.ok(1 <= "3", "1<3 - the first agrument is 'truthy', so we pass!");
});


QUnit.test('factorial()', function (assert) {

    assert.equal(factorial(0), "You have selected Factorial function. The result for given number 0 is: 1", 'Tested with 0 and gives 1 ');
    assert.equal(factorial(4), "You have selected Factorial function. The result for given number 4 is: 24", 'Tested with NUmber');
    
}
);

QUnit.test('fibonacci()', function (assert) {
    assert.equal(fibonacci(9), 55, 'tested with positive number');
    assert.throws(function () { (fibonacci(-1)); }, /you must choose between >=0/,'The given number is not a positive number');
});

