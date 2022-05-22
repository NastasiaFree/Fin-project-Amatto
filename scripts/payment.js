butt_total.onclick = function() {
    var budget = +document.getElementById('budget').value;
    var month = +document.getElementById('month').value;
    var deposit = +document.getElementById('deposit').value;
    var totalP = ((budget) - ((budget)*(deposit)))/(month);
    document.getElementById('total').innerHTML = totalP.toFixed(2)+ " $";
};

