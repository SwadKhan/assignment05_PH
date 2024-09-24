function getInputFieldValueById(id) {
    const inputValue = document.getElementById(id).value;
    return inputValue;
}
function addMoney(id, money, event) {
    const balance = parseFloat(document.getElementById(id).innerText);
    console.log(balance);
    current_balance = parseFloat(document.getElementById('Pbalance').innerText);
    console.log(current_balance)
    if (parseFloat(money) > 0 && !isNaN(money) && current_balance > parseFloat(money)) {
        document.getElementById('Pbalance').innerText = current_balance - parseFloat(money);
        const newBalance = balance + parseFloat(money);
        document.getElementById(id).innerText = newBalance;
        return true;
    }
    else {
        alert("Invalid Donation Amount");
        return false;
    }

}

let isFirstDonation = true;
function history(money, location) {
    const date = new Date();
    const fDate = date.toString();
    if (isFirstDonation) {
        document.getElementById('Td').classList.add('hidden');
        isFirstDonation = false;
    }

    const newDiv = document.createElement('div');
    newDiv.className = 'border border-gray-400 rounded-lg lg:ml-[150px] lg:mr-[150px] mx-auto mr-4 ml-4 mt-6 p-16 gap-6';
    newDiv.innerHTML = `<p>${money} Taka is donated for ${location} </p>
        <p> Date: ${fDate}</p>`
    document.getElementById("history").appendChild(newDiv);
}
