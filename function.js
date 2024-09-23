document.getElementById('ButtonCard1').addEventListener('click', function (event) {
    event.preventDefault();
    const addM = getInputFieldValueById('card1');
    console.log(addM);
    const b = addMoney('Bcard1', addM, event);
    document.getElementById('card1').value = "";
    if (b === true) {
        document.getElementById('my_modal_5').showModal();
        history(addM, 'Noakhali,Bangladesh')
    }

})

// card2 


document.getElementById('ButtonCard2').addEventListener('click', function (event) {
    event.preventDefault();
    const addM = getInputFieldValueById('card2');
    console.log(addM);
    const b = addMoney('Bcard2', addM, event);
    document.getElementById('card2').value = "";
    if (b === true) {
        document.getElementById('my_modal_5').showModal();
        history(addM, 'Feni,Bangladesh')
    }

})

document.getElementById('hist').addEventListener('click', function (event) {
    document.getElementById('Donate_cards').classList.add('hidden');
    document.getElementById("history").classList.remove('hidden');
    document.getElementById('hist').classList.add('bg-cyan-400', 'text-slate-950');
    document.getElementById('donation').classList.remove('bg-cyan-400', 'text-slate-950');
});

document.getElementById('donation').addEventListener('click', function () {
    document.getElementById('history').classList.add('hidden');
    document.getElementById("Donate_cards").classList.remove('hidden');
    document.getElementById('donation').classList.add('bg-cyan-400', 'text-slate-950');
    document.getElementById('hist').classList.remove('bg-cyan-400', 'text-slate-950');
});
