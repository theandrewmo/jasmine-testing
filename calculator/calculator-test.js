
it('should calculate the monthly rate correctly', function () {
  // ...
  values = {
    amount: 50000,
    years: 10,
    rate: 5
  }
  expect(calculateMonthlyPayment(values)).toEqual('530.33')
});


it("should return a result with 2 decimal places", function() {
  // ..
  values = {
    amount: 150000,
    years: 7,
    rate: 3
  }
  expect(calculateMonthlyPayment(values)).toEqual('1982.00')
});

/// etc

it("should ")
