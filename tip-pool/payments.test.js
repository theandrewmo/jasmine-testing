describe("Payments test (with setup and tear-down)", function() {
    beforeEach(function () {
      // initialization logic

    });
  
    it('should Add a curPayment object to allPayments, update html and reset input values on submitPaymentInfo() ', function () {
      
      expect(allPayments).toEqual({});
      submitPaymentInfo() 
      
    });
  
    it('return undefined with negative or empty inputs on createCurPayment(),  if positive vals then an object', function() {
        expect(createCurPayment()).toEqual(undefined);
        let billAmtInput = document.getElementById('billAmt');
        let tipAmtInput = document.getElementById('tipAmt');
        billAmtInput.value = 200;
        tipAmtInput.value = 40;
        expect(createCurPayment()).toBeInstanceOf(Object)
    })

    it('should Create table row element and pass to appendTd with input value', function() {
      let tr = document.getElementById('paymentTable')
      expect(tr.children[1].children.length).toEqual(0);
      curPayment = {
        billAmt: 100,
        tipAmt: 20,
        tipPercent: 20
      }
      appendPaymentTable(curPayment)
      expect(tr.children[1].children.length).toEqual(1)
      tr.children[1].innerHTML = ''
    })

    it('Create table row element and pass to appendTd with calculated sum of all payment', function() {
      let st = document.getElementById('summaryTable')
      expect(st.children[1].children[0].children[0].innerHTML).toEqual('')
      updateSummary()
      expect(st.children[1].children[0].children[0].innerHTML).not.toEqual('')
      st.children[1].children[0].children[0].innerHTML = ''
      st.children[1].children[0].children[1].innerHTML = ''
      st.children[1].children[0].children[2].innerHTML = ''
    })
  
    afterEach(function() {
      // teardown logic
      billAmtInput.value = null
      tipAmtInput.value = null
      
    });
  });