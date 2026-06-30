
//
// Pokémon Champions Damage Calculator
// Ver.0.1.0（検索機能統合版）
//

// =========================
// 要素取得
// =========================

const calculateButton = document.getElementById("calculateButton");

const damageValue = document.getElementById("damageValue");
const damagePercent = document.getElementById("damagePercent");
const koCount = document.getElementById("koCount");
const hpFill = document.querySelector(".hp-fill");

// =========================
// ポケモンデータ（仮）
// =========================

const pokemons = [
  "ピカチュウ",
  "リザードン",
  "フシギダネ",
  "ゼニガメ",
  "ゲンガー",
  "カビゴン",
  "ルカリオ",
  "ガブリアス",
  "サーナイト",
  "ミミッキュ"
];

// =========================
// 検索機能（共通関数）
// =========================

function setupSearch(inputId, boxId) {
  const input = document.getElementById(inputId);
  const box = document.getElementById(boxId);

  if (!input || !box) return;

  input.addEventListener("input", () => {
    const value = input.value.trim();
    box.innerHTML = "";

    if (value === "") return;

    const results = pokemons.filter(p => p.includes(value));

    results.forEach(p => {
      const div = document.createElement("div");
      div.textContent = p;
      div.style.cursor = "pointer";
      div.style.padding = "4px";
      div.style.borderBottom = "1px solid #eee";

      div.addEventListener("click", () => {
        input.value = p;
        box.innerHTML = "";
      });

      box.appendChild(div);
    });
  });
}

// 攻撃側検索
setupSearch("attackerPokemon", "attackerSearchBox");

// 防御側検索
setupSearch("defenderPokemon", "defenderSearchBox");

// =========================
// ダメージ計算（仮表示）
// =========================

calculateButton.addEventListener("click", () => {

    // 仮データ（ここを本計算に差し替え）
    damageValue.textContent = "72 ～ 85";

    damagePercent.textContent = "34.7% ～ 41.0%";

    koCount.textContent = "確定3発";

    hpFill.style.width = "65%";

});
