function insertCoin() {
  document.getElementById("status").innerText = "Coin accepted!";
  showProcess();
}

function insertCard() {
  document.getElementById("status").innerText = "Card swiped!";
  showProcess();
}

function showProcess() {
  document.getElementById("process").classList.remove("hidden");
  const steps = ["step1", "step2", "step3", "step4", "step5", "step6"];
  steps.forEach((id, i) => {
    setTimeout(() => {
      document.getElementById(id).style.color = "green";
    }, i * 800);
  });
}

function dispense() {
  document.getElementById("result").classList.remove("hidden");
  document.getElementById("status").innerText = "Water Dispensed!";
}