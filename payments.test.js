describe("Payments test (with setup and tear-down)", function () {
beforeEach(function () {
  billAmtInput.value = 100;
  tipAmtInput.value = 15;
  // submitPaymentInfo(); Don't know why, but when enabled would cause failure with second test.
});

it('should take bill/tip amounts and add to allPayments object on submitPaymentInfo()', function () {
  submitPaymentInfo();
  expect(allPayments['payment1'].billAmt).toEqual('100');
  expect(allPayments['payment1'].tipAmt).toEqual('15');
  expect(allPayments['payment1'].tipPercent).toEqual(15);
});

it('should return undefined with empty input on submitPaymentInfo()', function () {
  billAmtInput.value = '';
  tipAmtInput.value = '';
  submitPaymentInfo();

  expect(Object.keys(allPayments).length).toEqual(0);
});

it('should return undefined with negative input on submitPaymentInfo()', function () {
  billAmtInput.value = -10;
  tipAmtInput.value = 5;
  submitPaymentInfo();

  expect(Object.keys(allPayments).length).toEqual(0);
});

it('should return obj with billAmt, tipAmt, and tipPercent values on createCurPayment()', function () {
  let curPaymentTest = createCurPayment();

  expect(curPaymentTest.billAmt).toEqual('100');
  expect(curPaymentTest.tipAmt).toEqual('15');
  expect(curPaymentTest.tipPercent).toEqual(15);

});

it('should create a tr and pass to a td with input values on appendPaymentTable()', function () {
  let curPaymentTest = createCurPayment();
  
  appendPaymentTable(curPaymentTest);

  let domTd = document.querySelectorAll('#paymentTable tbody tr td');

  expect(domTd[0].innerText).toEqual('$100');
  expect(domTd[1].innerText).toEqual('$15');
  expect(domTd[2].innerText).toEqual('15%');
});

// it('should create a tr and pass to appendTd and display a calculated sum on updateSummary()', function() {
//   billAmtInput.value = 200;
//   tipAmtInput.value = 25;
//   submitPaymentInfo();

//   expect(summaryTds[0].innerText).toEqual('$200');
//   expect(summaryTds[1].innerText).toEqual('$25');
//   expect(summaryTds[2].innerText).toEqual('13%');
// });

afterEach(function() {
  billAmtInput.value = '';
  tipAmtInput.value = '';
  allPayments = {};
  paymentID = 0;
  paymentTbody.innerHTML = '';
  summaryTds[0].innerHTML = '';
  summaryTds[1].innerHTML = '';
  summaryTds[2].innerHTML = '';
});
});