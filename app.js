const SOURCE_TRANSACTIONS = [
  { id: "video-game", name: "Video Game", amount: -70, gender: "Boy", active: true, weight: 1 },
  { id: "labubu", name: "Labubu", amount: -40, gender: "Girl", active: true, weight: 1.6 },
  { id: "trendy-t-shirt", name: "Trendy T-shirt", amount: -25, gender: "Any", active: true, weight: 1.4 },
  { id: "anime-convention-ticket", name: "Anime Convention Ticket", amount: -150, gender: "Boy", active: true, weight: 1 },
  { id: "trendy-nike-sneakers", name: "Trendy Nike Sneakers", amount: -120, gender: "Boy", active: true, weight: 1.3 },
  { id: "stanley-cup", name: "Stanley Cup", amount: -50, gender: "Girl", active: true, weight: 1.4 },
  { id: "airsoft-gun", name: "Airsoft Gun", amount: -30, gender: "Boy", active: false, weight: 1 },
  { id: "skateboard", name: "Skateboard", amount: -100, gender: "Boy", active: true, weight: 1 },
  { id: "new-lego-set", name: "New Lego Set", amount: -80, gender: "Boy", active: false, weight: 0.9 },
  { id: "funko-pop", name: "Funko Pop", amount: -20, gender: "Any", active: true, weight: 1.2 },
  { id: "ps5", name: "PS5", amount: -500, gender: "Boy", active: true, weight: 2 },
  { id: "six-flags-visit", name: "Six Flags Visit", amount: -50, gender: "Any", active: true, weight: 1.1 },
  { id: "trendy-baseball-cap", name: "Trendy Baseball Cap", amount: -25, gender: "Boy", active: true, weight: 1.1 },
  { id: "trendy-haircut", name: "Trendy Haircut", amount: -35, gender: "Any", active: true, weight: 1 },
  { id: "gift-for-girlfriend", name: "Gift for Girlfriend", amount: -35, gender: "Boy", active: true, weight: 1.2 },
  { id: "trendy-graphic-hoodie", name: "Trendy Graphic Hoodie", amount: -45, gender: "Boy", active: true, weight: 1.1 },
  { id: "trendy-backpack", name: "Trendy Backpack", amount: -45, gender: "Boy", active: true, weight: 0.9 },
  { id: "gift-for-friend", name: "Gift For Friend", amount: -25, gender: "Any", active: true, weight: 1 },
  { id: "baseball-game-ticket", name: "Baseball Game Ticket", amount: -30, gender: "Boy", active: false, weight: 0.9 },
  { id: "music-festival-ticket", name: "Music Festival Ticket", amount: -300, gender: "Any", active: true, weight: 1 },
  { id: "arcade-session", name: "Arcade Session", amount: -15, gender: "Boy", active: true, weight: 0.8 },
  { id: "movie-ticket", name: "Movie Ticket", amount: -15, gender: "Boy", active: true, weight: 0.9 },
  { id: "robux", name: "Robux", amount: -25, gender: "Boy", active: false, weight: 1 },
  { id: "music-album", name: "Music Album", amount: -10, gender: "Boy", active: false, weight: 0.05 },
  { id: "pokemon-card-pack", name: "Pokemon Card Pack", amount: -15, gender: "Boy", active: true, weight: 0.7 },
  { id: "mow-the-lawn", name: "Mow The Lawn", amount: 10, gender: "Any", active: true, weight: 1 },
  { id: "art-supplies", name: "Art Supplies", amount: -45, gender: "Any", active: false, weight: 0.9 },
  { id: "trendy-jeans", name: "Trendy Jeans", amount: -50, gender: "Any", active: true, weight: 0.9 },
  { id: "poster-for-room", name: "Poster For Room", amount: -60, gender: "Any", active: false, weight: 0.9 },
  { id: "boba", name: "Boba", amount: -8, gender: "Girl", active: true, weight: 0.4 },
  { id: "clean-the-garage", name: "Clean The Garage", amount: 30, gender: "Any", active: true, weight: 0.2 },
  { id: "deep-clean-the-bathroom", name: "Deep Clean the Bathroom", amount: 70, gender: "Any", active: true, weight: 0.1 }
];

const FOCUS_WEIGHTS = {
  "video-games": {
    "video-game": 4,
    ps5: 4,
    "arcade-session": 3,
    robux: 2.6,
    "pokemon-card-pack": 2.2,
    "anime-convention-ticket": 1.8,
    "funko-pop": 1.5
  },
  social: {
    "six-flags-visit": 4,
    "music-festival-ticket": 3.5,
    "movie-ticket": 3,
    "gift-for-friend": 2.8,
    "gift-for-girlfriend": 2.4,
    boba: 2,
    "baseball-game-ticket": 1.8,
    "arcade-session": 1.6
  },
  fashion: {
    "trendy-t-shirt": 3.5,
    "trendy-jeans": 3.2,
    "trendy-haircut": 3,
    "trendy-nike-sneakers": 2.8,
    "trendy-graphic-hoodie": 2.6,
    "trendy-backpack": 2.2,
    "trendy-baseball-cap": 1.8,
    "stanley-cup": 1.5
  },
  collector: {
    labubu: 3.8,
    "funko-pop": 3,
    "pokemon-card-pack": 2.8,
    "new-lego-set": 2.5,
    "art-supplies": 1.7,
    "poster-for-room": 1.5
  },
  worker: {
    "mow-the-lawn": 5,
    "clean-the-garage": 4,
    "deep-clean-the-bathroom": 3,
    boba: 1.2,
    "movie-ticket": 1,
    "trendy-t-shirt": 0.8,
    "funko-pop": 0.6
  },
  "big-spender": {
    ps5: 5,
    "music-festival-ticket": 4,
    "anime-convention-ticket": 3.6,
    "trendy-nike-sneakers": 3.2,
    skateboard: 2.8,
    "six-flags-visit": 2.4,
    "video-game": 2.2,
    "stanley-cup": 2
  }
};

const STARTER_PERSONALITIES = {
  basic: {
    name: "Basic",
    description: "Spreadsheet weights and active items",
    group: "Built In",
    mode: "source"
  },
  neutral: {
    name: "Neutral",
    description: "Same chance for every active item",
    group: "Built In",
    mode: "neutral"
  },
  "video-games": {
    name: "Gamer",
    description: "Loves video games, tech, and gaming culture",
    group: "Priorities",
    mode: "focus",
    focus: "video-games"
  },
  social: {
    name: "Social Butterfly",
    description: "Loves hanging out with friends and experiences",
    group: "Priorities",
    mode: "focus",
    focus: "social"
  },
  fashion: {
    name: "Fashionista",
    description: "Loves trendy clothes, accessories, and style",
    group: "Priorities",
    mode: "focus",
    focus: "fashion"
  },
  collector: {
    name: "Collector",
    description: "Prioritizes collectibles and room upgrades",
    group: "Priorities",
    mode: "focus",
    focus: "collector"
  },
  worker: {
    name: "Hard Worker",
    description: "Focused on earning money through chores",
    group: "Priorities",
    mode: "focus",
    focus: "worker"
  },
  "big-spender": {
    name: "Big Spender",
    description: "Goes for the expensive items",
    group: "Priorities",
    mode: "focus",
    focus: "big-spender"
  }
};

const STORAGE_KEY = "teensville-income-lab-personalities-v2";
const transactionById = new Map(SOURCE_TRANSACTIONS.map((item) => [item.id, item]));
const money = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });

let customPersonalities = loadCustomPersonalities();
let allPersonalities = buildPersonalities();
let currentPresetId = "basic";
let draft = createDraftFromPreset(allPersonalities.get(currentPresetId), null);
let currentStatement = [];
let lastSummary = null;
let hasGenerated = false;

const els = {
  personalitySelect: document.querySelector("#personalitySelect"),
  personalityGrid: document.querySelector("#personalityGrid"),
  currentPersonalityLabel: document.querySelector("#currentPersonalityLabel"),
  draftStatus: document.querySelector("#draftStatus"),
  startingBalanceInput: document.querySelector("#startingBalanceInput"),
  transactionCountInput: document.querySelector("#transactionCountInput"),
  weeklyAllowanceInput: document.querySelector("#weeklyAllowanceInput"),
  genderSegment: document.querySelector("#genderSegment"),
  savePersonalityButton: document.querySelector("#savePersonalityButton"),
  updatePersonalityButton: document.querySelector("#updatePersonalityButton"),
  resetPresetButton: document.querySelector("#resetPresetButton"),
  activeItemsButton: document.querySelector("#activeItemsButton"),
  clearItemsButton: document.querySelector("#clearItemsButton"),
  itemSettingsToggle: document.querySelector("#itemSettingsToggle"),
  itemSettingsContent: document.querySelector("#itemSettingsContent"),
  generateButton: document.querySelector("#generateButton"),
  copyCsvButton: document.querySelector("#copyCsvButton"),
  downloadCsvButton: document.querySelector("#downloadCsvButton"),
  searchInput: document.querySelector("#searchInput"),
  typeFilter: document.querySelector("#typeFilter"),
  draftMetrics: document.querySelector("#draftMetrics"),
  summaryGrid: document.querySelector("#summaryGrid"),
  statementBody: document.querySelector("#statementBody"),
  itemsBody: document.querySelector("#itemsBody"),
  balanceChart: document.querySelector("#balanceChart"),
  debtStatus: document.querySelector("#debtStatus"),
  welcomeState: document.querySelector("#welcomeState"),
  statementToolbar: document.querySelector("#statementToolbar"),
  statementContent: document.querySelector("#statementContent")
};

init();

function init() {
  renderPersonalityControls();
  bindEvents();
  renderDraft();
  renderGeneratedVisibility();
}

function bindEvents() {
  els.personalitySelect.addEventListener("change", () => {
    loadPreset(els.personalitySelect.value);
  });

  els.personalityGrid.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-preset-id]");
    if (!button) return;
    loadPreset(button.dataset.presetId);
  });

  els.resetPresetButton.addEventListener("click", () => {
    loadPreset(currentPresetId);
  });

  els.genderSegment.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-gender]");
    if (!button) return;
    draft.gender = button.dataset.gender;
    markDirty();
    renderDraft();
  });

  els.startingBalanceInput.addEventListener("input", () => {
    draft.startingBalance = clampNumber(els.startingBalanceInput.value, 0, 100000, 0);
    markDirty();
    renderDraftMetrics();
  });

  els.transactionCountInput.addEventListener("input", () => {
    draft.steps = Math.round(clampNumber(els.transactionCountInput.value, 1, 200, 1));
    markDirty();
    renderDraftMetrics();
  });

  els.weeklyAllowanceInput.addEventListener("input", () => {
    draft.weeklyAllowance = clampNumber(els.weeklyAllowanceInput.value, 0, 100000, 0);
    markDirty();
    renderDraftMetrics();
  });

  els.generateButton.addEventListener("click", generateAndRender);
  els.itemSettingsToggle.addEventListener("click", toggleItemSettings);
  els.savePersonalityButton.addEventListener("click", saveDraftAsPersonality);
  els.updatePersonalityButton.addEventListener("click", updateCurrentCustomPersonality);
  els.activeItemsButton.addEventListener("click", () => {
    SOURCE_TRANSACTIONS.forEach((item) => {
      draft.items[item.id].included = item.active;
      draft.items[item.id].weight = item.weight;
    });
    markDirty();
    renderDraft();
  });
  els.clearItemsButton.addEventListener("click", () => {
    SOURCE_TRANSACTIONS.forEach((item) => {
      draft.items[item.id].included = false;
    });
    markDirty();
    renderDraft();
  });

  els.searchInput.addEventListener("input", renderItems);
  els.typeFilter.addEventListener("change", renderItems);

  els.itemsBody.addEventListener("change", (event) => {
    const target = event.target;
    const id = target.dataset.id;
    if (!id || !draft.items[id]) return;
    if (target.classList.contains("include-input")) {
      draft.items[id].included = target.checked;
      markDirty();
      renderDraftMetrics();
      renderItems();
    }
  });

  els.itemsBody.addEventListener("input", (event) => {
    const target = event.target;
    const id = target.dataset.id;
    if (!id || !draft.items[id]) return;
    if (target.classList.contains("weight-input")) {
      draft.items[id].weight = clampNumber(target.value, 0, 1000, 0);
      markDirty();
      renderDraftMetrics();
    }
  });

  els.copyCsvButton.addEventListener("click", copyCsv);
  els.downloadCsvButton.addEventListener("click", downloadCsv);

  window.addEventListener("resize", () => drawBalanceChart(currentStatement));
}

function buildPersonalities() {
  const builtInEntries = Object.entries(STARTER_PERSONALITIES).map(
    ([id, raw]) => normalizePreset({ id, custom: false, ...raw })
  );
  const customEntries = customPersonalities.map((preset) => normalizePreset({ ...preset, custom: true }));
  return new Map([...builtInEntries, ...customEntries].map((preset) => [preset.id, preset]));
}

function normalizePreset(raw) {
  const weights = {};
  let includeIds = [];

  if (raw.weights) {
    Object.entries(raw.weights).forEach(([id, value]) => {
      if (!transactionById.has(id)) return;
      weights[id] = Number(value) || 0;
    });
    includeIds = Array.isArray(raw.includeIds) ? raw.includeIds.filter((id) => transactionById.has(id)) : [];
  } else if (raw.mode === "neutral") {
    includeIds = activeTransactionIds();
    includeIds.forEach((id) => {
      weights[id] = 1;
    });
  } else if (raw.mode === "focus") {
    includeIds = activeTransactionIds();
    const focusWeights = FOCUS_WEIGHTS[raw.focus] || {};
    includeIds.forEach((id) => {
      const baseWeight = transactionById.get(id).weight || 1;
      weights[id] = focusWeights[id] ?? Math.max(0.35, Math.round(baseWeight * 0.7 * 10) / 10);
    });
  } else {
    includeIds = activeTransactionIds();
    includeIds.forEach((id) => {
      weights[id] = transactionById.get(id).weight;
    });
  }

  SOURCE_TRANSACTIONS.forEach((item) => {
    if (weights[item.id] == null) {
      weights[item.id] = item.weight;
    }
  });

  return {
    id: raw.id,
    name: raw.name,
    description: raw.description || "Custom item mix and weights",
    group: raw.group || (raw.custom ? "Custom" : "Built In"),
    includeIds: [...new Set(includeIds)],
    weights,
    custom: Boolean(raw.custom)
  };
}

function activeTransactionIds() {
  return SOURCE_TRANSACTIONS.filter((item) => item.active).map((item) => item.id);
}

function createDraftFromPreset(preset, previousDraft) {
  const included = new Set(preset.includeIds);
  const items = {};
  SOURCE_TRANSACTIONS.forEach((item) => {
    items[item.id] = {
      included: included.has(item.id),
      weight: preset.weights[item.id] ?? item.weight
    };
  });

  return {
    name: preset.name,
    description: preset.description,
    gender: previousDraft?.gender || "Boy",
    startingBalance: previousDraft?.startingBalance ?? 0,
    steps: previousDraft?.steps ?? 50,
    weeklyAllowance: previousDraft?.weeklyAllowance ?? 0,
    items,
    dirty: false
  };
}

function loadPreset(presetId) {
  const preset = allPersonalities.get(presetId) || allPersonalities.get("basic");
  currentPresetId = preset.id;
  draft = createDraftFromPreset(preset, draft);
  renderPersonalityControls();
  renderDraft();
}

function renderPersonalityControls() {
  const grouped = [...allPersonalities.values()].reduce((groups, preset) => {
    if (!groups[preset.group]) groups[preset.group] = [];
    groups[preset.group].push(preset);
    return groups;
  }, {});

  els.personalitySelect.innerHTML = "";
  Object.entries(grouped).forEach(([groupName, presets]) => {
    const group = document.createElement("optgroup");
    group.label = groupName;
    presets.forEach((preset) => {
      const option = document.createElement("option");
      option.value = preset.id;
      option.textContent = preset.name;
      group.append(option);
    });
    els.personalitySelect.append(group);
  });
  els.personalitySelect.value = currentPresetId;

  els.personalityGrid.innerHTML = "";
  [...allPersonalities.values()].forEach((preset) => {
    const button = document.createElement("button");
    button.type = "button";
    button.dataset.presetId = preset.id;
    button.innerHTML = `<strong>${escapeHtml(preset.name)}</strong><span>${escapeHtml(preset.description)}</span>`;
    button.classList.toggle("active", preset.id === currentPresetId);
    els.personalityGrid.append(button);
  });
}

function renderDraft() {
  els.personalitySelect.value = currentPresetId;
  els.startingBalanceInput.value = draft.startingBalance;
  els.transactionCountInput.value = draft.steps;
  els.weeklyAllowanceInput.value = draft.weeklyAllowance;
  renderGenderButtons();
  renderDraftStatus();
  renderDraftMetrics();
  renderItems();
  renderGeneratedVisibility();
}

function renderGenderButtons() {
  els.genderSegment.querySelectorAll("button").forEach((button) => {
    button.classList.toggle("active", button.dataset.gender === draft.gender);
  });
}

function renderDraftStatus() {
  els.draftStatus.textContent = draft.dirty ? "Edited" : "Clean";
  els.draftStatus.classList.toggle("dirty", draft.dirty);
  els.updatePersonalityButton.disabled = !(allPersonalities.get(currentPresetId)?.custom);
  els.currentPersonalityLabel.textContent = draft.name;
}

function renderDraftMetrics() {
  const included = SOURCE_TRANSACTIONS.filter((item) => draft.items[item.id].included);
  const eligible = included.filter((item) => genderFits(draft.gender, item.gender));
  const weightTotal = eligible.reduce((sum, item) => sum + normalizedWeight(item.id), 0);
  const incomeItems = eligible.filter((item) => item.amount > 0).length;
  const expenseItems = eligible.filter((item) => item.amount < 0).length;
  const allowanceItems = draft.weeklyAllowance > 0 ? 1 : 0;

  els.draftMetrics.innerHTML = [
    metricMarkup("Included", included.length.toString()),
    metricMarkup("Available", (eligible.length + allowanceItems).toString()),
    metricMarkup("Income Items", (incomeItems + allowanceItems).toString()),
    metricMarkup("Weight Total", formatNumber(weightTotal)),
    metricMarkup("Expense Items", expenseItems.toString()),
    metricMarkup("Starting", money.format(draft.startingBalance))
  ].join("");
}

function renderItems() {
  const query = els.searchInput.value.trim().toLowerCase();
  const filter = els.typeFilter.value;
  const rows = SOURCE_TRANSACTIONS.filter((item) => {
    const setting = draft.items[item.id];
    const available = setting.included && genderFits(draft.gender, item.gender) && normalizedWeight(item.id) > 0;
    if (query && !item.name.toLowerCase().includes(query)) return false;
    if (filter === "income" && item.amount <= 0) return false;
    if (filter === "expense" && item.amount >= 0) return false;
    if (filter === "available" && !available) return false;
    if (filter === "inactive" && item.active) return false;
    return true;
  });

  if (!rows.length) {
    els.itemsBody.innerHTML = `<tr><td class="empty-state" colspan="6">No matching items</td></tr>`;
    return;
  }

  els.itemsBody.innerHTML = rows.map((item) => itemRowMarkup(item)).join("");
}

function itemRowMarkup(item) {
  const setting = draft.items[item.id];
  const availableByGender = genderFits(draft.gender, item.gender);
  const sourceClass = item.active ? "" : "off";
  const genderClass = item.gender.toLowerCase();
  const amountClass = item.amount >= 0 ? "positive" : "negative";

  return `
    <tr class="${availableByGender ? "" : "unavailable"}">
      <td><input class="include-input" data-id="${item.id}" type="checkbox" ${setting.included ? "checked" : ""}></td>
      <td>${escapeHtml(item.name)}</td>
      <td><span class="gender-pill ${genderClass}">${item.gender}</span></td>
      <td class="money ${amountClass}">${money.format(item.amount)}</td>
      <td><input class="weight-input" data-id="${item.id}" type="number" min="0" max="1000" step="0.1" value="${formatInputNumber(setting.weight)}"></td>
      <td><span class="source-pill ${sourceClass}">${item.active ? "Active" : "Off"}</span></td>
    </tr>
  `;
}

function generateAndRender() {
  const result = generateStatement();
  currentStatement = result.rows;
  lastSummary = result.summary;
  hasGenerated = true;
  renderSummary(result.summary);
  renderStatement(result.rows);
  renderGeneratedVisibility();
  drawBalanceChart(result.rows);
}

function generateStatement() {
  let balance = roundMoney(clampNumber(draft.startingBalance, 0, 100000, 0));
  const startingBalance = balance;
  const rows = [];
  let earned = 0;
  let spent = 0;
  let debtBreaches = 0;
  let stopReason = "";
  const steps = Math.round(clampNumber(draft.steps, 1, 200, 1));

  for (let index = 0; index < steps; index += 1) {
    const eligible = getGenerationItems().filter((item) => {
      if (item.id === "weekly-allowance") return item.amount > 0;
      const setting = draft.items[item.id];
      if (!setting.included || !genderFits(draft.gender, item.gender)) return false;
      if (normalizedWeight(item.id) <= 0) return false;
      return item.amount >= 0 || roundMoney(balance + item.amount) >= 0;
    });

    if (!eligible.length) {
      stopReason = "No eligible items";
      break;
    }

    const picked = pickWeighted(eligible);
    const nextBalance = roundMoney(balance + picked.amount);
    if (nextBalance < 0) {
      debtBreaches += 1;
      continue;
    }

    if (picked.amount > 0) earned += picked.amount;
    if (picked.amount < 0) spent += Math.abs(picked.amount);

    rows.push({
      number: rows.length + 1,
      id: picked.id,
      name: picked.name,
      kind: picked.amount >= 0 ? "Income" : "Expense",
      amount: picked.amount,
      balance: nextBalance
    });
    balance = nextBalance;
  }

  const summary = {
    startingBalance,
    endingBalance: balance,
    earned: roundMoney(earned),
    spent: roundMoney(spent),
    count: rows.length,
    requested: steps,
    debtBreaches,
    stopReason
  };

  return { rows, summary };
}

function getGenerationItems() {
  const items = [...SOURCE_TRANSACTIONS];
  if (draft.weeklyAllowance > 0) {
    items.push({
      id: "weekly-allowance",
      name: "Weekly Allowance",
      amount: roundMoney(draft.weeklyAllowance),
      gender: "Any",
      active: true,
      weight: 1.25
    });
  }
  return items;
}

function renderSummary(summary) {
  const countLabel = summary.count === summary.requested ? summary.count.toString() : `${summary.count}/${summary.requested}`;
  els.summaryGrid.innerHTML = [
    summaryCardMarkup("Personality", escapeHtml(draft.name), "text"),
    summaryCardMarkup("Gender", draft.gender, "text"),
    summaryCardMarkup("Starting", money.format(summary.startingBalance), ""),
    summaryCardMarkup("Earned", money.format(summary.earned), "earned"),
    summaryCardMarkup("Spent", money.format(summary.spent), "spent"),
    summaryCardMarkup("Ending", money.format(summary.endingBalance), "")
  ].join("");

  els.debtStatus.textContent = summary.debtBreaches ? "Debt blocked" : "No debt";
  els.debtStatus.classList.toggle("good", !summary.debtBreaches);
  els.debtStatus.title = summary.stopReason ? `${countLabel} transactions. ${summary.stopReason}.` : `${countLabel} transactions.`;
}

function renderStatement(rows) {
  if (!rows.length) {
    els.statementBody.innerHTML = `<tr><td class="empty-state" colspan="5">No transactions generated</td></tr>`;
    return;
  }

  els.statementBody.innerHTML = rows.map((row) => {
    const amountClass = row.amount >= 0 ? "positive" : "negative";
    const kindClass = row.kind.toLowerCase();
    return `
      <tr>
        <td>${row.number}</td>
        <td>${escapeHtml(row.name)}</td>
        <td><span class="kind ${kindClass}">${row.kind}</span></td>
        <td class="money ${amountClass}">${money.format(row.amount)}</td>
        <td class="money">${money.format(row.balance)}</td>
      </tr>
    `;
  }).join("");
}

function renderGeneratedVisibility() {
  els.welcomeState.hidden = hasGenerated;
  els.statementToolbar.hidden = !hasGenerated;
  els.statementContent.hidden = !hasGenerated;
}

function toggleItemSettings() {
  const isOpen = !els.itemSettingsContent.hidden;
  els.itemSettingsContent.hidden = isOpen;
  els.itemSettingsToggle.setAttribute("aria-expanded", String(!isOpen));
  els.itemSettingsToggle.textContent = isOpen ? "▶ Show Item Settings" : "▼ Hide Item Settings";
}

function drawBalanceChart(rows) {
  const canvas = els.balanceChart;
  const rect = canvas.getBoundingClientRect();
  const ratio = window.devicePixelRatio || 1;
  const width = Math.max(320, Math.floor(rect.width || canvas.parentElement.clientWidth));
  const height = 180;
  canvas.width = width * ratio;
  canvas.height = height * ratio;
  const ctx = canvas.getContext("2d");
  ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
  ctx.clearRect(0, 0, width, height);

  const points = [{ balance: lastSummary?.startingBalance ?? draft.startingBalance }, ...rows];
  const maxBalance = Math.max(10, ...points.map((point) => point.balance));
  const padding = { top: 18, right: 16, bottom: 28, left: 46 };
  const chartWidth = width - padding.left - padding.right;
  const chartHeight = height - padding.top - padding.bottom;

  ctx.strokeStyle = "#dce2e7";
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(padding.left, padding.top);
  ctx.lineTo(padding.left, padding.top + chartHeight);
  ctx.lineTo(padding.left + chartWidth, padding.top + chartHeight);
  ctx.stroke();

  ctx.fillStyle = "#66727f";
  ctx.font = "12px system-ui, sans-serif";
  ctx.fillText(money.format(maxBalance), 6, padding.top + 4);
  ctx.fillText("$0", 22, padding.top + chartHeight + 4);

  if (points.length < 2) {
    ctx.fillStyle = "#66727f";
    ctx.fillText("No balance path", padding.left + 12, padding.top + 32);
    return;
  }

  const xFor = (index) => padding.left + (chartWidth * index) / Math.max(points.length - 1, 1);
  const yFor = (balance) => padding.top + chartHeight - (chartHeight * balance) / maxBalance;

  ctx.strokeStyle = "#087f8c";
  ctx.lineWidth = 3;
  ctx.beginPath();
  points.forEach((point, index) => {
    const x = xFor(index);
    const y = yFor(point.balance);
    if (index === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  });
  ctx.stroke();

  points.forEach((point, index) => {
    const x = xFor(index);
    const y = yFor(point.balance);
    ctx.fillStyle = index === points.length - 1 ? "#31764b" : "#ffffff";
    ctx.strokeStyle = "#087f8c";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(x, y, index === points.length - 1 ? 4 : 2.5, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
  });
}

function pickWeighted(items) {
  const total = items.reduce((sum, item) => sum + normalizedWeight(item.id), 0);
  let cursor = Math.random() * total;
  for (const item of items) {
    cursor -= normalizedWeight(item.id);
    if (cursor <= 0) return item;
  }
  return items[items.length - 1];
}

function normalizedWeight(id) {
  if (id === "weekly-allowance") return 1.25;
  return Math.max(0, Number(draft.items[id]?.weight) || 0);
}

function genderFits(selectedGender, itemGender) {
  if (selectedGender === "Any") return true;
  return itemGender === "Any" || itemGender === selectedGender;
}

function markDirty() {
  draft.dirty = true;
  renderDraftStatus();
}

function saveDraftAsPersonality() {
  const name = window.prompt("Personality name", `${draft.name} Copy`);
  if (!name) return;
  const preset = captureDraft(name, slugify(name));
  const uniquePreset = { ...preset, id: uniqueId(preset.id) };
  customPersonalities.push(uniquePreset);
  persistCustomPersonalities();
  allPersonalities = buildPersonalities();
  loadPreset(uniquePreset.id);
}

function updateCurrentCustomPersonality() {
  const active = allPersonalities.get(currentPresetId);
  if (!active?.custom) return;
  const index = customPersonalities.findIndex((preset) => preset.id === currentPresetId);
  if (index === -1) return;
  customPersonalities[index] = captureDraft(active.name, active.id);
  persistCustomPersonalities();
  allPersonalities = buildPersonalities();
  loadPreset(currentPresetId);
}

function captureDraft(name, id) {
  const includeIds = SOURCE_TRANSACTIONS.filter((item) => draft.items[item.id].included).map((item) => item.id);
  const weights = {};
  SOURCE_TRANSACTIONS.forEach((item) => {
    weights[item.id] = normalizedWeight(item.id);
  });

  return {
    id,
    name,
    group: "Custom",
    description: "Custom item mix and weights",
    includeIds,
    weights,
    custom: true
  };
}

function loadCustomPersonalities() {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function persistCustomPersonalities() {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(customPersonalities));
}

function uniqueId(baseId) {
  let id = baseId || "custom-personality";
  let suffix = 2;
  while (allPersonalities.has(id) || customPersonalities.some((preset) => preset.id === id)) {
    id = `${baseId}-${suffix}`;
    suffix += 1;
  }
  return id;
}

function copyCsv() {
  const csv = statementToCsv();
  if (!csv) return;
  navigator.clipboard?.writeText(csv).catch(() => fallbackCopy(csv));
}

function fallbackCopy(text) {
  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.style.position = "fixed";
  textarea.style.left = "-9999px";
  document.body.append(textarea);
  textarea.select();
  document.execCommand("copy");
  textarea.remove();
}

function downloadCsv() {
  const csv = statementToCsv();
  if (!csv) return;
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `${slugify(draft.name)}-income-statement.csv`;
  document.body.append(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function statementToCsv() {
  if (!currentStatement.length) return "";
  const rows = [["Number", "Transaction", "Type", "Balance Update", "New Balance"]];
  currentStatement.forEach((row) => {
    rows.push([row.number, row.name, row.kind, row.amount, row.balance]);
  });
  return rows.map((row) => row.map(csvCell).join(",")).join("\n");
}

function csvCell(value) {
  const text = String(value ?? "");
  if (/[",\n]/.test(text)) return `"${text.replaceAll('"', '""')}"`;
  return text;
}

function summaryCardMarkup(label, value, className) {
  return `<div class="summary-card ${className}"><span>${label}</span><strong>${value}</strong></div>`;
}

function metricMarkup(label, value) {
  return `<div class="metric"><span>${label}</span><strong>${value}</strong></div>`;
}

function clampNumber(value, min, max, fallback) {
  const number = Number(value);
  if (!Number.isFinite(number)) return fallback;
  return Math.min(max, Math.max(min, number));
}

function roundMoney(value) {
  return Math.round((Number(value) + Number.EPSILON) * 100) / 100;
}

function formatNumber(value) {
  return new Intl.NumberFormat("en-US", { maximumFractionDigits: 1 }).format(value);
}

function formatInputNumber(value) {
  const number = Number(value);
  if (!Number.isFinite(number)) return "0";
  return Number.isInteger(number) ? String(number) : String(Math.round(number * 10) / 10);
}

function slugify(value) {
  return String(value)
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "") || "personality";
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
