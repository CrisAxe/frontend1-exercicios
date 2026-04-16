const netText = document.getElementById("net");
const memText = document.getElementById("mem");

const btnNet = document.getElementById("btnNet");
const btnMem = document.getElementById("btnMem");

function showNetworkInfo() {
  if ("connection" in navigator) {
    netText.textContent = `Ligação: ${navigator.connection.effectiveType}`;
  } else {
    netText.textContent = "Network Information API não suportada.";
  }
}

function showMemoryInfo() {
  if ("deviceMemory" in navigator) {
    memText.textContent = `Memória disponível: ${navigator.deviceMemory} GB`;
  } else {
    memText.textContent = "Device Memory API não suportada.";
  }
}

btnNet.addEventListener("click", showNetworkInfo);
btnMem.addEventListener("click", showMemoryInfo);
