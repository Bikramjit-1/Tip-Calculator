const tipcalcy = () => {
    let amount = document.getElementById('bill_amount').value;
    let percentage = document.getElementById('tip_perc').value;
    

    let tip_percentage = amount * (percentage/100);
    
    let total = tip_percentage + Number(amount);

    document.getElementById('total_tip').value = tip_percentage;
    document.getElementById('total_billed').value = total;
}