function handleDeposit() {
    var depositAmount = parseFloat(document.getElementById("depositInput").value);

    if (depositAmount <= 0 || isNaN(depositAmount)) {
        alert("Please enter a valid amount.");
        document.getElementById("depositInput").value = "";
    } else {
        var totalDeposit = parseFloat(document.getElementById("depositAmount").innerText) + depositAmount;
        innertextseetting("depositAmount", totalDeposit);
        innertextseetting("totalBalance", totalDeposit);
        document.getElementById("depositInput").value = "";
    }
}

function handleWithdraw() {
    var withdrawAmount = parseFloat(document.getElementById("withdrawInput").value);
    var totalBalance = parseFloat(document.getElementById("totalBalance").innerText);

    if (withdrawAmount <= 0 || isNaN(withdrawAmount)) {
        alert("Please enter a valid amount.");
        document.getElementById("withdrawInput").value = "";
    } else if (totalBalance < withdrawAmount) {
        alert("Insufficient amount.");
        document.getElementById("withdrawInput").value = "";
    } else {
        alert("Are you sure you want to withdraw?");
        innertextseetting("withdrawAmount", withdrawAmount);
        var updatedBalance = totalBalance - withdrawAmount;
        innertextseetting("totalBalance", updatedBalance);
        document.getElementById("withdrawInput").value = "";
    }
}

function innertextseetting(id, value) {
    document.getElementById(id).innerText = value;
}
