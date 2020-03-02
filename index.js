
$(document).ready(function() {
  $('#formButton').click(function() {
    $('#tipcalc').toggle();
  });
});

function calculateTip() {
  //getElementById() method returns the element value with specified ID

  let billAmt = document.getElementById('billAmt').value;
  let servicequality = document.getElementById('servicequality').value;
  let tipTotal = document.getElementById('tipTotal').value;
  let billTotal = document.getElementById('billTotal').value;
  let peopleshare = document.getElementById('peopleshare').value;
  let each = document.getElementById('each').value;

  let total = billAmt * (servicequality / 100);
  let Total = Math.floor(parseFloat(billAmt) + parseFloat(total));
  let individual = Total / peopleshare;

  //Display Total
  document.getElementById('tipTotal').innerHTML = '₦' + total;
  document.getElementById('billTotal').innerHTML = '₦' + Total;
  document.getElementById('each').innerHTML =
    '₦' + individual  +  '      per person';
}

//Click to call function
document.getElementById('calculate').onclick = function() {
  calculateTip();
};
