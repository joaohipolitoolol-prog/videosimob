(() => {
  const WHATSAPP = "5548992156250";
  const KEY = "vi-quiz-v7";

  // Pré-orçamento: base R$ 150 + extras por formato/material/volume.
  // DIRECT_DISCOUNT aplica ~15% a menos no total (abordagem direta, fecha mais fácil).
  const PRICING = {
    baseUnit: 150,
    floor: 150,
    directDiscount: 0.85,
    formatAddons: {
      "Vídeo com narração": 42,
      "Apresentação completa do imóvel": 32,
      "Anúncio para gerar contatos": 15,
      "Reels rápido e chamativo": 8,
    },
    extraFormatEach: 12,
    noMaterial: 15,
    filmingHelp: 22,
    avulsoSpread: 28,
    packageMultipliers: {
      "2 a 4": { min: 2.2, max: 3.2 },
      "5 a 8": { min: 3.8, max: 5.4 },
      monthly: { min: 5.8, max: 8.2 },
    },
    urgencyBoost: { min: 1.03, max: 1.05 },
  };

  const portfolio = [
    {
      title: "Persua VID 001",
      youtube: "aAmKHR3U56Q",
    },
    {
      title: "Persua VID 002",
      youtube: "m6v2stNcWsU",
    },
    {
      title: "Persua VID 003",
      youtube: "SpuphJ_ysHg",
    },
  ];

  const questions = [
    {
      id: "perfil",
      title: "Qual é o seu perfil?",
      multi: false,
      options: [
        { value: "Corretor autônomo", icon: "user" },
        { value: "Imobiliária", icon: "building" },
        { value: "Construtora ou incorporadora", icon: "crane" },
        { value: "Proprietário de imóvel", icon: "home" },
        { value: "Outro", icon: "dots" },
      ],
    },
    {
      id: "divulgar",
      title: "O que você quer divulgar?",
      multi: true,
      hint: "Pode marcar mais de uma opção",
      options: [
        { value: "Imóveis para venda", icon: "tag" },
        { value: "Imóveis para locação", icon: "key" },
        { value: "Lançamentos imobiliários", icon: "rocket" },
        { value: "Minha imobiliária ou marca pessoal", icon: "spark" },
        { value: "Um pouco de tudo", icon: "layers", exclusive: true },
      ],
    },
    {
      id: "material",
      title: "Que material você já tem?",
      multi: true,
      hint: "Pode marcar mais de uma opção",
      options: [
        { value: "Fotos", icon: "image" },
        { value: "Vídeos gravados pelo celular", icon: "phone" },
        { value: "Filmagens profissionais", icon: "film" },
        { value: "Ainda não tenho material", icon: "empty", exclusive: true },
        { value: "Preciso de orientação para gravar", icon: "help" },
      ],
    },
    {
      id: "formato",
      title: "Qual formato você procura?",
      multi: true,
      hint: "Pode marcar mais de uma opção",
      options: [
        { value: "Apresentação completa do imóvel", icon: "play" },
        { value: "Reels rápido e chamativo", icon: "bolt" },
        { value: "Vídeo com narração", icon: "mic" },
        { value: "Anúncio para gerar contatos", icon: "megaphone" },
        { value: "Não sei, quero uma recomendação", icon: "compass", exclusive: true },
      ],
    },
    {
      id: "quantidade",
      title: "Quantos vídeos você precisa?",
      multi: false,
      options: [
        { value: "Quero testar com 1 vídeo", icon: "one" },
        { value: "De 2 a 4 vídeos", icon: "few" },
        { value: "De 5 a 8 vídeos", icon: "more" },
        { value: "Mais de 8 vídeos por mês", icon: "pack" },
      ],
    },
    {
      id: "objetivo",
      title: "Qual é o principal objetivo?",
      multi: true,
      hint: "Pode marcar mais de uma opção",
      options: [
        { value: "Apresentar melhor os imóveis", icon: "eye" },
        { value: "Postar com mais frequência", icon: "calendar" },
        { value: "Gerar conversas no WhatsApp", icon: "chat" },
        { value: "Melhorar a imagem da minha marca", icon: "star" },
        { value: "Divulgar um imóvel específico", icon: "pin" },
      ],
    },
    {
      id: "prazo",
      title: "Quando pretende começar?",
      multi: false,
      options: [
        { value: "O quanto antes", icon: "flash" },
        { value: "Nesta semana", icon: "week" },
        { value: "Neste mês", icon: "month" },
        { value: "Ainda estou avaliando", icon: "wait" },
      ],
    },
  ];

  const TOTAL = questions.length + 1;

  const I = {
    user: '<path d="M20 21a8 8 0 0 0-16 0"/><circle cx="12" cy="8" r="4"/>',
    building:
      '<rect x="4" y="3" width="16" height="18" rx="2"/><path d="M9 7h2M13 7h2M9 11h2M13 11h2M9 15h2M13 15h2M10 21v-3h4v3"/>',
    crane: '<path d="M4 21h16M7 21V8l10-4v4M7 12h10M12 8v13"/>',
    home: '<path d="m3 11 9-8 9 8"/><path d="M5 10v10h14V10"/>',
    dots: '<circle cx="6" cy="12" r="1.5"/><circle cx="12" cy="12" r="1.5"/><circle cx="18" cy="12" r="1.5"/>',
    tag: '<path d="M12 3H4v8l9 9 8-8-9-9Z"/><circle cx="7.5" cy="7.5" r="1.2"/>',
    key: '<circle cx="8" cy="15" r="4"/><path d="M10.5 12.5 21 2l-3 1-2 3-3-1"/>',
    rocket:
      '<path d="M5 15c2 0 5-3 7-7 0 0 3 1 5 3-4 2-7 5-7 7"/><path d="M9 15s-1 3-4 4c1-3 4-4 4-4"/><circle cx="14.5" cy="9.5" r="1"/>',
    spark:
      '<path d="M12 3v4M12 17v4M4.5 7.5l2.8 2.8M16.7 16.7l2.8 2.8M3 12h4M17 12h4M4.5 16.5l2.8-2.8M16.7 7.3l2.8-2.8"/>',
    layers: '<path d="m12 3 9 5-9 5-9-5 9-5Z"/><path d="m3 12 9 5 9-5M3 17l9 5 9-5"/>',
    image:
      '<rect x="3" y="5" width="18" height="14" rx="2"/><circle cx="9" cy="10" r="1.5"/><path d="m21 16-5-5-7 7"/>',
    phone: '<rect x="8" y="2" width="8" height="20" rx="2"/><path d="M11 18h2"/>',
    film: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M7 5v14M17 5v14M3 9h4M3 15h4M17 9h4M17 15h4"/>',
    empty: '<rect x="4" y="4" width="16" height="16" rx="2"/><path d="M9 12h6"/>',
    help: '<circle cx="12" cy="12" r="9"/><path d="M9.5 9.5a2.5 2.5 0 1 1 3.7 2.2c-.8.5-1.2 1-1.2 1.8V14"/><circle cx="12" cy="17" r=".8"/>',
    play: '<circle cx="12" cy="12" r="9"/><path d="m10 8 6 4-6 4V8Z"/>',
    bolt: '<path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z"/>',
    mic: '<rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5 11a7 7 0 0 0 14 0M12 18v3"/>',
    megaphone:
      '<path d="m3 11 13-5v12L3 13v-2Z"/><path d="M16 8.5c2 .8 3.5 2.2 3.5 3.5S18 14.7 16 15.5M7 13.5v4a2 2 0 0 0 2.5 1.9"/>',
    compass: '<circle cx="12" cy="12" r="9"/><path d="m15.5 8.5-2 5-5 2 2-5 5-2Z"/>',
    one: '<path d="M12 5v14M10 7l2-2"/><path d="M9 19h6"/>',
    few: '<path d="M7 7h3v10H7zM14 7h3v10h-3z"/>',
    more: '<path d="M5 7h3v10H5zM10.5 7h3v10h-3zM16 7h3v10h-3z"/>',
    pack: '<rect x="3" y="7" width="18" height="12" rx="2"/><path d="M3 11h18M8 7V5h8v2"/>',
    eye: '<path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z"/><circle cx="12" cy="12" r="3"/>',
    calendar: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M8 3v4M16 3v4M3 10h18"/>',
    chat: '<path d="M21 12a8 8 0 0 1-11.5 7.2L4 20l1-4.2A8 8 0 1 1 21 12Z"/>',
    star: '<path d="m12 3 2.7 5.5L21 9.3l-4.5 4.3L17.4 21 12 18.1 6.6 21l1-7.4L3 9.3l6.3-.8L12 3Z"/>',
    pin: '<path d="M12 21s7-5.2 7-11a7 7 0 1 0-14 0c0 5.8 7 11 7 11Z"/><circle cx="12" cy="10" r="2.5"/>',
    flash: '<path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z"/>',
    week: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M8 3v4M16 3v4M3 11h18M8 15h4"/>',
    month: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M8 3v4M16 3v4M3 11h18"/>',
    wait: '<circle cx="12" cy="12" r="9"/><path d="M12 7v6l3.5 2"/>',
    wa: '<path d="M20.5 11.5a8.5 8.5 0 0 1-12.7 7.4L4 20l1.2-3.6A8.5 8.5 0 1 1 20.5 11.5Z"/>',
    search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-3-3"/>',
  };

  const state = {
    step: 0,
    answers: {},
    draft: [], // current question selection(s)
    lead: { nome: "", cidade: "", instagram: "", telefone: "" },
    phase: "start",
    timer: null,
  };

  const el = {
    bar: document.getElementById("progressBar"),
    root: document.getElementById("progressRoot"),
    label: document.getElementById("quizStepLabel"),
    panel: document.getElementById("quizPanel"),
    back: document.getElementById("quizBack"),
    chrome: document.querySelector(".chrome"),
  };

  const esc = (s) =>
    String(s ?? "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");

  const svg = (name) =>
    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">${I[name] || I.dots}</svg>`;

  function load() {
    try {
      const raw = sessionStorage.getItem(KEY);
      if (!raw) return;
      const s = JSON.parse(raw);
      if (!s || typeof s !== "object") return;
      if (s.answers && typeof s.answers === "object") state.answers = s.answers;
      if (s.lead && typeof s.lead === "object") state.lead = { ...state.lead, ...s.lead };
      if (Number.isInteger(s.step) && s.step >= 0 && s.step < questions.length) state.step = s.step;
      if (["start", "questions", "lead", "result"].includes(s.phase)) state.phase = s.phase;
    } catch {
      /* */
    }
  }

  function save() {
    try {
      const phase =
        state.phase === "processing" ? "lead" : state.phase;
      sessionStorage.setItem(
        KEY,
        JSON.stringify({
          answers: state.answers,
          lead: state.lead,
          step: state.step,
          phase,
        })
      );
    } catch {
      /* */
    }
  }

  function progressPct() {
    if (state.phase === "start") return 0;
    if (state.phase === "result" || state.phase === "processing") return 100;
    if (state.phase === "lead") return Math.round((questions.length / TOTAL) * 100);
    return Math.round(((state.step + 1) / TOTAL) * 100);
  }

  function stepText() {
    if (state.phase === "start") return "";
    if (state.phase === "questions") return `${state.step + 1}/${TOTAL}`;
    if (state.phase === "lead") return `${TOTAL}/${TOTAL}`;
    if (state.phase === "processing") return "…";
    return "OK";
  }

  function chrome() {
    const pct = progressPct();
    el.bar.style.width = `${pct}%`;
    if (el.root) el.root.setAttribute("aria-valuenow", String(pct));
    el.label.textContent = stepText();
    el.label.hidden = state.phase === "start";
    el.chrome?.classList.toggle("is-start", state.phase === "start");

    const canBack =
      state.phase === "lead" ||
      state.phase === "result" ||
      state.phase === "questions";

    el.back.hidden = !canBack || state.phase === "start" || state.phase === "processing";
  }

  function clearTimer() {
    if (state.timer) {
      clearTimeout(state.timer);
      state.timer = null;
    }
  }

  function asList(val) {
    if (Array.isArray(val)) return val.filter(Boolean);
    if (val == null || val === "") return [];
    return [String(val)];
  }

  function displayAnswer(id) {
    const list = asList(state.answers[id]);
    return list.length ? list.join(", ") : "—";
  }

  function isAnswered(id) {
    return asList(state.answers[id]).length > 0;
  }

  function currentQuestion() {
    return questions[state.step];
  }

  function loadDraftFromAnswer() {
    const q = currentQuestion();
    if (!q) {
      state.draft = [];
      return;
    }
    state.draft = asList(state.answers[q.id]);
  }

  function toggleOption(value) {
    const q = currentQuestion();
    if (!q) return;
    const opt = q.options.find((o) => o.value === value);
    if (!opt) return;

    if (!q.multi) {
      state.draft = [value];
      paintDraft();
      syncConfirmBtn();
      return;
    }

    // multi
    const exclusiveValues = q.options.filter((o) => o.exclusive).map((o) => o.value);
    const isExclusive = !!opt.exclusive;
    let next = [...state.draft];

    if (isExclusive) {
      next = next.includes(value) ? [] : [value];
    } else {
      next = next.filter((v) => !exclusiveValues.includes(v));
      if (next.includes(value)) next = next.filter((v) => v !== value);
      else next.push(value);
    }

    state.draft = next;
    paintDraft();
    syncConfirmBtn();
  }

  function paintDraft() {
    el.panel.querySelectorAll(".opt").forEach((btn) => {
      const v = btn.getAttribute("data-v");
      const on = state.draft.includes(v);
      btn.classList.toggle("is-on", on);
      btn.setAttribute("aria-pressed", on ? "true" : "false");
    });
  }

  function syncConfirmBtn() {
    const btn = document.getElementById("confirmBtn");
    if (!btn) return;
    btn.disabled = state.draft.length === 0;
  }

  function confirmAnswer() {
    const q = currentQuestion();
    if (!q || state.draft.length === 0) return;

    state.answers[q.id] = q.multi ? [...state.draft] : state.draft[0];
    save();

    if (state.step < questions.length - 1) {
      state.step += 1;
      state._draftStep = null;
      loadDraftFromAnswer();
    } else {
      state.phase = "lead";
      state.draft = [];
      state._draftStep = null;
    }
    save();
    render({ scroll: true });
  }

  function goBack() {
    clearTimer();
    if (state.phase === "processing" || state.phase === "start") return;
    if (state.phase === "result") state.phase = "lead";
    else if (state.phase === "lead") {
      state.phase = "questions";
      state.step = questions.length - 1;
      loadDraftFromAnswer();
    } else if (state.phase === "questions" && state.step > 0) {
      state.step -= 1;
      loadDraftFromAnswer();
    } else if (state.phase === "questions" && state.step === 0) {
      state.phase = "start";
      state.draft = [];
    }
    save();
    render({ scroll: true });
  }

  function buildQuote() {
    const qty = asList(state.answers.quantidade)[0] || "";
    const formats = asList(state.answers.formato);
    const material = asList(state.answers.material);
    const prazo = asList(state.answers.prazo)[0] || "";
    const p = PRICING;

    let unit = p.baseUnit;
    for (const [label, add] of Object.entries(p.formatAddons)) {
      if (formats.includes(label)) unit += add;
    }

    const multiFormats = formats.filter((f) => f !== "Não sei, quero uma recomendação");
    if (multiFormats.length > 1) unit += p.extraFormatEach * (multiFormats.length - 1);

    if (material.includes("Ainda não tenho material")) unit += p.noMaterial;
    if (material.includes("Preciso de orientação para gravar")) unit += p.filmingHelp;

    let min = unit;
    let max = unit + p.avulsoSpread;
    let plan = "1 vídeo avulso";
    let kind = "avulso";

    if (qty.includes("2 a 4")) {
      kind = "pacote";
      plan = "Pacote de 2 a 4 vídeos";
      min = Math.round(unit * p.packageMultipliers["2 a 4"].min);
      max = Math.round(unit * p.packageMultipliers["2 a 4"].max);
    } else if (qty.includes("5 a 8")) {
      kind = "pacote";
      plan = "Pacote de 5 a 8 vídeos";
      min = Math.round(unit * p.packageMultipliers["5 a 8"].min);
      max = Math.round(unit * p.packageMultipliers["5 a 8"].max);
    } else if (qty.includes("Mais de 8") || qty.includes("por mês")) {
      kind = "mensal";
      plan = "Pacote mensal (mais de 8 vídeos)";
      min = Math.round(unit * p.packageMultipliers.monthly.min);
      max = Math.round(unit * p.packageMultipliers.monthly.max);
    } else {
      plan = "1 vídeo para testar";
      min = unit;
      max = unit + p.avulsoSpread;
    }

    if (prazo === "O quanto antes") {
      min = Math.round(min * p.urgencyBoost.min);
      max = Math.round(max * p.urgencyBoost.max);
    }

    min = Math.round(min * p.directDiscount);
    max = Math.round(max * p.directDiscount);

    const round10 = (n) => Math.round(n / 10) * 10;
    min = round10(min);
    max = round10(max);
    if (kind === "avulso") min = Math.max(p.floor, min);
    if (max < min + 20) max = min + 20;

    const range =
      min === max ? money(min) : `${money(min)} – ${money(max)}`;

    return {
      min,
      max,
      unit,
      plan,
      kind,
      range,
      rangeShort: min === max ? money(min) : `a partir de ${money(min)}`,
      disclaimer:
        "Pré-orçamento estimado com base nas suas respostas. O valor final é confirmado no WhatsApp conforme duração e detalhes.",
    };
  }

  function money(n) {
    return n.toLocaleString("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 });
  }

  function portfolioThumb(v) {
    const id = v.youtube;
    const thumb = `https://i.ytimg.com/vi/${id}/oardefault.jpg`;
    const fallback = `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
    return `<button type="button" class="pf-play-btn" data-yt="${esc(id)}" aria-label="Assistir ${esc(v.title)}">
      <img class="pf-thumb" src="${thumb}" alt="" loading="lazy" onerror="this.onerror=null;this.src='${fallback}'" />
      <span class="pf-play-ring" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
      </span>
    </button>`;
  }

  function portfolioMedia(v) {
    if (v.youtube) return portfolioThumb(v);
    return `<div class="pf-media-wrap"><video
      src="${esc(v.src)}"
      poster="${esc(v.poster || "")}"
      muted
      playsinline
      loop
      preload="metadata"
      controls
    ></video></div>`;
  }

  function mountPortfolioPlayers(root) {
    root.querySelectorAll(".pf-play-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const id = btn.dataset.yt;
        if (!id) return;
        const embed = `https://www.youtube-nocookie.com/embed/${encodeURIComponent(id)}?autoplay=1&rel=0&modestbranding=1&playsinline=1&iv_load_policy=3`;
        const wrap = document.createElement("div");
        wrap.className = "pf-media-wrap pf-media-wrap--live";
        wrap.innerHTML = `<iframe
          class="pf-yt"
          src="${embed}"
          title="Vídeo"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>`;
        btn.replaceWith(wrap);
      });
    });
  }

  function startView() {
    el.panel.innerHTML = `
      <div class="panel start-panel">
        <div class="start-layout">
          <div class="start-copy">
            <h1 class="start-title">Vídeos profissionais para o seu imóvel</h1>
            <p class="start-lead">
              Gostou do que viu? Aqui tem mais do nosso trabalho.
              Responda o diagnóstico e receba seu pré-orçamento — leva menos de 1 minuto.
            </p>
          </div>

          <div class="start-media">
            <div class="portfolio">
              <div class="portfolio-head">
                <h2>Veja um pouco do trabalho</h2>
                <span class="pf-hint-mobile">Deslize →</span>
                <span class="pf-hint-desk">Toque para assistir</span>
              </div>
              <div class="pf-scroll">
                ${portfolio
                  .map(
                    (v) => `
                  <article class="pf-card" aria-label="${esc(v.title)}">
                    ${portfolioMedia(v)}
                  </article>`
                  )
                  .join("")}
              </div>
            </div>
          </div>

          <div class="start-actions">
            <button type="button" class="cta start-cta" id="startBtn">
              Começar diagnóstico
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
            </button>
          </div>
        </div>
      </div>
    `;

    mountPortfolioPlayers(el.panel);

    document.getElementById("startBtn").addEventListener("click", () => {
      el.panel.querySelectorAll("video").forEach((v) => {
        try {
          v.pause();
        } catch {
          /* */
        }
      });
      el.panel.querySelectorAll("iframe.pf-yt").forEach((frame) => {
        frame.src = frame.src;
      });
      state.phase = "questions";
      if (!Number.isInteger(state.step) || state.step < 0) state.step = 0;
      loadDraftFromAnswer();
      save();
      render({ scroll: true });
    });
  }

  function maskPhone(v) {
    const d = String(v).replace(/\D/g, "").slice(0, 11);
    if (!d.length) return "";
    if (d.length <= 2) return `(${d}`;
    if (d.length <= 6) return `(${d.slice(0, 2)}) ${d.slice(2)}`;
    if (d.length <= 10) return `(${d.slice(0, 2)}) ${d.slice(2, 6)}-${d.slice(6)}`;
    return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`;
  }

  function showErr(id) {
    document.getElementById(id)?.classList.add("err");
    el.panel.querySelector(`[data-e="${id}"]`)?.classList.add("show");
  }

  function clearErr(id) {
    document.getElementById(id)?.classList.remove("err");
    el.panel.querySelector(`[data-e="${id}"]`)?.classList.remove("show");
  }

  function validateLead() {
    let ok = true;
    if (state.lead.nome.trim().length < 2) {
      showErr("nome");
      ok = false;
    }
    if (state.lead.cidade.trim().length < 2) {
      showErr("cidade");
      ok = false;
    }
    const tel = state.lead.telefone.replace(/\D/g, "");
    if (tel.length < 10 || tel.length > 11) {
      showErr("telefone");
      ok = false;
    }
    return ok;
  }

  function validateSilent() {
    const tel = state.lead.telefone.replace(/\D/g, "");
    return (
      state.lead.nome.trim().length >= 2 &&
      state.lead.cidade.trim().length >= 2 &&
      tel.length >= 10 &&
      tel.length <= 11
    );
  }

  function questionsView() {
    const q = currentQuestion();
    if (!q) {
      state.step = 0;
      loadDraftFromAnswer();
      return questionsView();
    }

    // sincroniza draft com resposta salva ao entrar na pergunta
    // (no toggle só repinta, sem reentrar aqui)
    if (state._draftStep !== state.step) {
      loadDraftFromAnswer();
      state._draftStep = state.step;
    }

    el.panel.innerHTML = `
      <div class="panel q-panel">
        <div class="q-kicker">Pergunta ${state.step + 1} de ${questions.length}</div>
        <h1 class="q-title">${esc(q.title)}</h1>
        ${q.multi ? `<p class="q-hint">${esc(q.hint || "Pode marcar mais de uma opção")}</p>` : ""}
        <div class="options" role="${q.multi ? "group" : "listbox"}" aria-label="${esc(q.title)}">
          ${q.options
            .map((o) => {
              const on = state.draft.includes(o.value);
              return `
            <button type="button" class="opt ${on ? "is-on" : ""}" data-v="${esc(o.value)}" aria-pressed="${on}">
              <span class="opt-ico" aria-hidden="true">${svg(o.icon)}</span>
              <span class="opt-txt">${esc(o.value)}</span>
              <span class="opt-dot" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m5 12 5 5L20 7"/></svg>
              </span>
            </button>`;
            })
            .join("")}
        </div>
        <div class="q-footer">
          <button type="button" class="cta" id="confirmBtn" ${state.draft.length ? "" : "disabled"}>
            Confirmar
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
          </button>
        </div>
      </div>
    `;

    el.panel.querySelectorAll(".opt").forEach((btn) => {
      btn.addEventListener("click", () => toggleOption(btn.getAttribute("data-v")));
    });
    document.getElementById("confirmBtn").addEventListener("click", confirmAnswer);
  }

  function leadView() {
    el.panel.innerHTML = `
      <div class="panel lead-panel">
        <div class="lead-layout">
          <div class="lead-intro">
            <div class="q-kicker">Último passo</div>
            <h1 class="q-title">Onde mandamos seu pré-orçamento?</h1>
            <p class="q-sub">Usamos só para montar a mensagem e te atender no WhatsApp.</p>
            <ul class="start-bullets desktop-only-bullets">
              <li>Pré-orçamento calculado nas suas respostas</li>
              <li>WhatsApp já com tudo preenchido</li>
              <li>Só falta confirmar e fechar</li>
            </ul>
          </div>
          <form class="form lead-form" id="leadForm" novalidate>
            <div class="field">
              <label for="nome">Nome</label>
              <input id="nome" autocomplete="name" enterkeyhint="next" required maxlength="80" value="${esc(state.lead.nome)}" placeholder="Como te chamamos" />
              <div class="err" data-e="nome">Digite seu nome</div>
            </div>
            <div class="field">
              <label for="cidade">Cidade</label>
              <input id="cidade" autocomplete="address-level2" enterkeyhint="next" required maxlength="80" value="${esc(state.lead.cidade)}" placeholder="Ex.: Florianópolis" />
              <div class="err" data-e="cidade">Digite sua cidade</div>
            </div>
            <div class="field field-wide">
              <label for="instagram">Instagram ou site <span>(opcional)</span></label>
              <input id="instagram" enterkeyhint="next" maxlength="120" value="${esc(state.lead.instagram)}" placeholder="@suaempresa" />
            </div>
            <div class="field field-wide">
              <label for="telefone">WhatsApp</label>
              <input id="telefone" inputmode="numeric" autocomplete="tel" enterkeyhint="done" required value="${esc(state.lead.telefone)}" placeholder="(48) 99999-9999" />
              <div class="err" data-e="telefone">Informe um telefone válido com DDD</div>
            </div>
            <div class="field-wide">
              <button type="submit" class="cta">Ver meu pré-orçamento</button>
            </div>
          </form>
        </div>
      </div>
    `;

    const tel = document.getElementById("telefone");
    tel.addEventListener("input", () => {
      tel.value = maskPhone(tel.value);
    });

    ["nome", "cidade", "instagram", "telefone"].forEach((id) => {
      const input = document.getElementById(id);
      input.addEventListener("input", () => {
        state.lead[id] = input.value;
        save();
        clearErr(id);
      });
      input.addEventListener("focus", () => {
        setTimeout(() => input.scrollIntoView({ block: "center", behavior: "smooth" }), 280);
      });
    });

    document.getElementById("leadForm").addEventListener("submit", (e) => {
      e.preventDefault();
      state.lead.nome = document.getElementById("nome").value;
      state.lead.cidade = document.getElementById("cidade").value;
      state.lead.instagram = document.getElementById("instagram").value;
      state.lead.telefone = document.getElementById("telefone").value;
      if (!validateLead()) {
        el.panel.querySelector("input.err")?.focus();
        return;
      }
      save();
      state.phase = "processing";
      render();
      runProcess();
    });
  }

  function runProcess() {
    const steps = [
      { line: "Lendo seu perfil e objetivo…", idx: 0 },
      { line: "Cruzando material e formato…", idx: 1 },
      { line: "Definindo volume e prazo…", idx: 2 },
      { line: "Calculando pré-orçamento…", idx: 3 },
    ];
    let i = 0;
    const delay = 950;

    const paint = () => {
      const line = document.getElementById("procLine");
      if (line) {
        line.style.opacity = "0";
        setTimeout(() => {
          if (line) {
            line.textContent = steps[i]?.line || "";
            line.style.opacity = "1";
          }
        }, 100);
      }
      el.panel.querySelectorAll(".proc-step").forEach((node, n) => {
        node.classList.remove("active", "done");
        if (n < i) node.classList.add("done");
        if (n === i) node.classList.add("active");
      });
    };

    paint();

    const tick = () => {
      i += 1;
      if (i < steps.length) {
        paint();
        state.timer = setTimeout(tick, delay);
      } else {
        // todos done + confirmação visual
        el.panel.querySelectorAll(".proc-step").forEach((node) => {
          node.classList.remove("active");
          node.classList.add("done");
        });
        const visual = el.panel.querySelector(".proc-visual");
        const title = el.panel.querySelector(".proc h2");
        const line = document.getElementById("procLine");
        if (visual) {
          visual.classList.add("is-done");
          const core = visual.querySelector(".proc-core");
          if (core) {
            core.innerHTML =
              '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="m5 12 5 5L20 7"/></svg>';
          }
        }
        if (title) title.textContent = "Pré-orçamento pronto";
        if (line) {
          line.style.opacity = "1";
          line.textContent = "Tudo certo. Abrindo seu resumo…";
        }
        state.timer = setTimeout(() => {
          state.phase = "result";
          state.timer = null;
          save();
          render({ scroll: true });
        }, 1100);
      }
    };

    state.timer = setTimeout(tick, delay);
  }

  function processView() {
    const labels = ["Perfil e objetivo", "Material e formato", "Volume e prazo", "Pré-orçamento"];
    el.panel.innerHTML = `
      <div class="panel">
        <div class="proc">
          <div class="proc-visual" aria-hidden="true">
            <div class="proc-ring"></div>
            <div class="proc-core">${svg("search")}</div>
          </div>
          <h2>Montando seu pré-orçamento</h2>
          <p class="proc-line" id="procLine">Lendo seu perfil e objetivo…</p>
          <div class="proc-steps">
            ${labels
              .map(
                (t) => `
              <div class="proc-step">
                <span class="dot">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m5 12 5 5L20 7"/></svg>
                </span>
                <span>${esc(t)}</span>
              </div>`
              )
              .join("")}
          </div>
        </div>
      </div>
    `;
  }

  const ans = (id) => displayAnswer(id);

  function resultView() {
    const quote = buildQuote();
    const chips = [
      quote.plan,
      ...asList(state.answers.formato).slice(0, 2),
      ...asList(state.answers.quantidade).slice(0, 1),
    ].filter(Boolean);

    const rows = [
      ["Perfil", ans("perfil")],
      ["Divulgar", ans("divulgar")],
      ["Material", ans("material")],
      ["Formato", ans("formato")],
      ["Quantidade", ans("quantidade")],
      ["Objetivo", ans("objetivo")],
      ["Prazo", ans("prazo")],
    ];

    const waUrl = buildWaUrl(quote);

    el.panel.innerHTML = `
      <div class="panel result-panel">
        <div class="result-layout">
          <div class="result-main">
            <div class="result-head">
              <span class="badge">Pré-orçamento</span>
              <h2>Seu pré-orçamento está pronto</h2>
              <p>
                Com base no diagnóstico, montamos uma faixa estimada.
                No WhatsApp você finaliza o pedido com a atendente.
              </p>
            </div>

            <div class="quote-card">
              <div class="quote-label">${esc(quote.plan)}</div>
              <div class="quote-price">${esc(quote.range)}</div>
              <p class="quote-note">${esc(quote.disclaimer)}</p>
              <ul class="quote-points">
                <li>Roteiro e edição inclusos</li>
                <li>Pronto para Reels e anúncios</li>
                <li>Ajuste final no WhatsApp</li>
              </ul>
            </div>

            <div class="needs">
              ${chips.map((c) => `<span class="need-chip">${esc(c)}</span>`).join("")}
            </div>

            <a class="cta wa" id="waBtn" href="${esc(waUrl)}" rel="noopener">
              <span class="ico" aria-hidden="true">${svg("wa")}</span>
              Finalizar pedido no WhatsApp
            </a>
            <p class="fine">Sem nova aba · a conversa abre aqui mesmo</p>
          </div>

          <aside class="result-side">
            <div class="side-card">
              <h3 class="side-title">Resumo do diagnóstico</h3>
              <dl class="summary tight side-summary">
                ${rows
                  .map(
                    ([k, v]) => `
                  <div class="sum-row">
                    <dt>${esc(k)}</dt>
                    <dd>${esc(v)}</dd>
                  </div>`
                  )
                  .join("")}
              </dl>
            </div>
            <details class="details-box mobile-only-details">
              <summary>Ver resumo das respostas</summary>
              <dl class="summary tight">
                ${rows
                  .map(
                    ([k, v]) => `
                  <div class="sum-row">
                    <dt>${esc(k)}</dt>
                    <dd>${esc(v)}</dd>
                  </div>`
                  )
                  .join("")}
              </dl>
            </details>
          </aside>
        </div>
      </div>
    `;

    // só mesma aba — evita window.open + navigation
    const waBtn = document.getElementById("waBtn");
    waBtn.addEventListener("click", (e) => {
      if (state.waLock) {
        e.preventDefault();
        return;
      }
      const missingIdx = questions.findIndex((q) => !isAnswered(q.id));
      if (missingIdx >= 0 || !validateSilent()) {
        e.preventDefault();
        if (missingIdx >= 0) {
          state.phase = "questions";
          state.step = missingIdx;
          state._draftStep = null;
          loadDraftFromAnswer();
        } else state.phase = "lead";
        save();
        render({ scroll: true });
        return;
      }
      state.waLock = true;
      // força mesma aba
      e.preventDefault();
      window.location.assign(waUrl);
    });
  }

  function message(quote) {
    const q = quote || buildQuote();
    const ig = state.lead.instagram.trim() || "Não informado";
    return [
      "Olá! Acabei de fazer o diagnóstico e quero finalizar meu pedido de vídeos imobiliários.",
      "",
      `Meu nome: ${state.lead.nome.trim()}`,
      `Cidade: ${state.lead.cidade.trim()}`,
      `Meu perfil: ${ans("perfil")}`,
      `Quero divulgar: ${ans("divulgar")}`,
      `Material disponível: ${ans("material")}`,
      `Formato de vídeo: ${ans("formato")}`,
      `Quantidade de vídeos: ${ans("quantidade")}`,
      `Objetivo principal: ${ans("objetivo")}`,
      `Pretendo começar: ${ans("prazo")}`,
      `Instagram ou site: ${ig}`,
      "",
      `Pré-orçamento mostrado no site: ${q.range} (${q.plan})`,
      "",
      "Vi o pré-orçamento e quero finalizar o pedido com vocês.",
    ].join("\n");
  }

  function buildWaUrl(quote) {
    return `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message(quote))}`;
  }

  function render(opts = {}) {
    chrome();
    if (state.phase === "start") startView();
    else if (state.phase === "questions") questionsView();
    else if (state.phase === "lead") leadView();
    else if (state.phase === "processing") processView();
    else resultView();

    if (opts.scroll) window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function init() {
    load();
    if (!Number.isInteger(state.step) || state.step < 0 || state.step >= questions.length) {
      state.step = 0;
    }
    if (state.phase === "questions") loadDraftFromAnswer();
    render();
    el.back.addEventListener("click", goBack);
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && !el.back.hidden) {
        e.preventDefault();
        goBack();
      }
    });
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
