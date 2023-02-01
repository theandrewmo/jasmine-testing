describe("Helpers test (with setup and tear-down)", function() {
    beforeEach(function () {
      // initialization logic
      serverNameInput.value = 'Alice';
      allPayments = {
        payment1: {billAmt: '200', tipAmt: '20', tipPercent: 10},
        payment2: {billAmt: '300', tipAmt: '50', tipPercent: 10}
    }
    });
  
    it('should accept "tipAmt", "billAmt", "tipPercent" and sums total from allPayments objects', function () {
        expect(sumPaymentTotal('billAmt')).toEqual(500);
        expect(sumPaymentTotal('tipAmt')).toEqual(70);
    });
  
    it('should convert the bill and tip amount into a tip percent', function() {
        expect(calculateTipPercent(allPayments.payment1.billAmt, allPayments.payment1.tipAmt)).toEqual(10)
        
    })

    it('should expect a table row element, then append a newly created td element from the value', function() {
        let tr = document.createElement('tr');
        appendTd(tr, serverNameInput.value)
        expect(tr.children.length).toEqual(1)
        
        tr = document.createElement('tr');
        appendTd(tr, 200)
        expect(tr.firstChild.innerHTML).toEqual('200')
    })
  
    afterEach(function() {
      // teardown logic
      allPayments = {}
      serverNameInput.value = ''
        
    });
  });