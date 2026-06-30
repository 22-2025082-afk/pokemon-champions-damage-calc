// ====================================
// Pokémon Champions Damage Calculator
// Ver.0.1.0
// ====================================

const calculateButton = document.getElementById("calculateButton");

const damageValue = document.getElementById("damageValue");
const damagePercent = document.getElementById("damagePercent");
const koCount = document.getElementById("koCount");
const hpFill = document.querySelector(".hp-fill");

calculateButton.addEventListener("click", () => {

    // 仮の表示
    damageValue.textContent = "72 ～ 85";

    damagePercent.textContent = "34.7% ～ 41.0%";

    koCount.textContent = "確定3発";

    hpFill.style.width = "65%";

});
