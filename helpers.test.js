describe("Helpers test (with setup and tear-down)", function() {
  beforeEach(function () {
    billAmtInput.value = 100;
    tipAmtInput.value = 15;
    submitPaymentInfo();
  });

  it('should sum up total bill amount of all paymnents', function () {
    expect(sumPaymentTotal('billAmt')).toEqual(100);
  });

  it('should sum up total tip amount of all payments', function () {
    expect(sumPaymentTotal('tipAmt')).toEqual(15);
  });

  it('should sum up total tip percent amount', function () {
    expect(sumPaymentTotal('tipPercent')).toEqual(15);
  });

  it('should convert the bill and tip amount into a tip percent', function () {
    let tipPercent = 0;
    tipPercent = calculateTipPercent(100, 30);
    expect(tipPercent).toEqual(30);
  });

  it('should append a newly created td element from value into an existing tr element', function () {
    let newTr = document.createElement('tr');

    appendTd(newTr, 'bill data goes here');
    expect(newTr.firstChild.innerHTML).toEqual('bill data goes here');
  });

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