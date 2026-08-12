(() => {
  const CONFIG = window.FUNNEL_CONFIG;
  if (!CONFIG) return;

  const { whatsapp: WHATSAPP, storageKey: KEY, questions, portfolio, copy: COPY } = CONFIG;

  const STEP_DELAY = 1200;
  const FINAL_DELAY = 1700;

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
    cart: '<circle cx="9" cy="20" r="1.5"/><circle cx="17" cy="20" r="1.5"/><path d="M2 2h2l2.5 12h11l2-8H6"/>',
    chart: '<path d="M4 19V5M4 19h16M8 17V9M12 17V6M16 17v-4"/>',
    pen: '<path d="M12 20h9M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z"/>',
    target: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.5"/>',
    users: '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>',
    clip: '<path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1"/>',
    edit: '<path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.1 2.1 0 1 1 3 3L12 15l-4 1 1-4Z"/>',
    video: '<rect x="2" y="6" width="20" height="12" rx="2"/><path d="m10 9 6 3-6 3V9Z"/>',
    box: '<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5M12 22V12"/>',
  };

  const requireCidade = CONFIG.requireCidade !== false;

  const helpers = { asList, money };

  const state = {
    step: 0,
    answers: {},
    draft: [],
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
      if (s.phase === "name") state.phase = "lead";
      else if (["start", "questions", "lead", "result"].includes(s.phase)) state.phase = s.phase;
    } catch {
      /* */
    }
  }

  function save() {
    try {
      const phase = state.phase === "processing" ? "lead" : state.phase;
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
    if (state.phase === "result" || state.phase === "processing" || state.phase === "lead") return 100;
    return Math.round(((state.step + 1) / questions.length) * 100);
  }

  function stepText() {
    if (state.phase === "start") return "";
    if (state.phase === "questions") return `${state.step + 1}/${questions.length}`;
    if (state.phase === "lead") return `${questions.length + 1}/${questions.length + 1}`;
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
      state.phase === "lead" || state.phase === "result" || state.phase === "questions";

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
    return CONFIG.buildQuote(state.answers, helpers);
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

  function portfolioCard(v) {
    return `<div class="pf-card-static">
      <span class="pf-card-ico" aria-hidden="true">${svg(v.icon || "play")}</span>
      <h3 class="pf-card-title">${esc(v.title)}</h3>
      <p class="pf-card-desc">${esc(v.desc || "")}</p>
    </div>`;
  }

  function portfolioMedia(v) {
    if (v.type === "card") return portfolioCard(v);
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
            <h1 class="start-title">${esc(COPY.startTitle)}</h1>
            <p class="start-lead">${esc(COPY.startLead)}</p>
          </div>

          <div class="start-media">
            <div class="portfolio">
              <div class="portfolio-head">
                <h2>${esc(COPY.portfolioHead)}</h2>
                <span class="pf-hint-mobile">Deslize →</span>
                <span class="pf-hint-desk">${esc(COPY.portfolioHintDesk || "Toque para assistir")}</span>
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
              ${esc(COPY.startCta)}
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
    if (requireCidade && state.lead.cidade.trim().length < 2) {
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

  function firstName() {
    return state.lead.nome.trim().split(/\s+/)[0] || "";
  }

  function resultTitle() {
    const name = firstName();
    return name ? `${name}, ${COPY.resultTitle.charAt(0).toLowerCase()}${COPY.resultTitle.slice(1)}` : COPY.resultTitle;
  }

  function validateSilent() {
    const tel = state.lead.telefone.replace(/\D/g, "");
    return (
      state.lead.nome.trim().length >= 2 &&
      (!requireCidade || state.lead.cidade.trim().length >= 2) &&
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
            <h1 class="q-title">${esc(COPY.leadTitle)}</h1>
            <p class="q-sub">${esc(COPY.leadSub)}</p>
            <ul class="start-bullets desktop-only-bullets">
              ${COPY.leadBullets.map((b) => `<li>${esc(b)}</li>`).join("")}
            </ul>
          </div>
          <form class="form lead-form" id="leadForm" novalidate>
            <div class="field">
              <label for="nome">Nome</label>
              <input id="nome" autocomplete="name" enterkeyhint="next" required maxlength="80" value="${esc(state.lead.nome)}" placeholder="Como te chamamos" />
              <div class="err" data-e="nome">Digite seu nome</div>
            </div>
            ${
              requireCidade
                ? `<div class="field">
              <label for="cidade">Cidade</label>
              <input id="cidade" autocomplete="address-level2" enterkeyhint="next" required maxlength="80" value="${esc(state.lead.cidade)}" placeholder="Ex.: Florianópolis" />
              <div class="err" data-e="cidade">Digite sua cidade</div>
            </div>`
                : ""
            }
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
              <button type="submit" class="cta">${esc(COPY.leadCta)}</button>
            </div>
          </form>
        </div>
      </div>
    `;

    const tel = document.getElementById("telefone");
    tel.addEventListener("input", () => {
      tel.value = maskPhone(tel.value);
    });

    const leadFields = ["nome", "instagram", "telefone"];
    if (requireCidade) leadFields.splice(1, 0, "cidade");
    leadFields.forEach((id) => {
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
      if (requireCidade) state.lead.cidade = document.getElementById("cidade").value;
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
    const steps = CONFIG.processSteps.map((line, idx) => ({ line, idx }));
    let i = 0;
    const delay = STEP_DELAY;

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
        if (title) title.textContent = COPY.processDone;
        if (line) {
          line.style.opacity = "1";
          line.textContent = COPY.processOpen;
        }
        state.timer = setTimeout(() => {
          state.phase = "result";
          state.timer = null;
          save();
          render({ scroll: true });
        }, FINAL_DELAY);
      }
    };

    state.timer = setTimeout(tick, delay);
  }

  function processView() {
    el.panel.innerHTML = `
      <div class="panel">
        <div class="proc">
          <div class="proc-visual" aria-hidden="true">
            <div class="proc-ring"></div>
            <div class="proc-core">${svg("search")}</div>
          </div>
          <h2>${esc(COPY.processTitle)}</h2>
          <p class="proc-line" id="procLine">${esc(CONFIG.processSteps[0])}</p>
          <div class="proc-steps">
            ${CONFIG.processLabels
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
    const chips = CONFIG.resultChips
      ? CONFIG.resultChips(state.answers, quote, helpers)
      : [quote.plan];

    const rows = CONFIG.resultFields.map(({ id, label }) => [label, ans(id)]);
    const waUrl = buildWaUrl(quote);

    el.panel.innerHTML = `
      <div class="panel result-panel">
        <div class="result-layout">
          <div class="result-main">
            <div class="result-head">
              <span class="badge">${esc(COPY.resultBadge)}</span>
              <h2>${esc(resultTitle())}</h2>
              <p>${esc(COPY.resultSub)}</p>
            </div>

            <div class="quote-card">
              <div class="quote-label">${esc(quote.plan)}</div>
              <div class="quote-price">${esc(quote.range)}</div>
              <p class="quote-note">${esc(quote.disclaimer)}</p>
              <ul class="quote-points">
                ${COPY.quotePoints.map((p) => `<li>${esc(p)}</li>`).join("")}
              </ul>
            </div>

            <div class="needs">
              ${chips.map((c) => `<span class="need-chip">${esc(c)}</span>`).join("")}
            </div>

            <a class="cta wa" id="waBtn" href="${esc(waUrl)}" rel="noopener">
              <span class="ico" aria-hidden="true">${svg("wa")}</span>
              ${esc(COPY.waCta)}
            </a>
            <p class="fine">Sem nova aba · a conversa abre aqui mesmo</p>
          </div>

          <aside class="result-side">
            <div class="side-card">
              <h3 class="side-title">${esc(COPY.summaryTitle)}</h3>
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
      e.preventDefault();
      window.location.assign(waUrl);
    });
  }

  function message(quote) {
    const q = quote || buildQuote();
    const ig = state.lead.instagram.trim() || "Não informado";
    const lines = [
      COPY.waIntro,
      "",
      `Meu nome: ${state.lead.nome.trim()}`,
    ];
    if (requireCidade || state.lead.cidade.trim()) {
      lines.push(`Cidade: ${state.lead.cidade.trim() || "Não informado"}`);
    }
    lines.push("");

    for (const [id, label] of Object.entries(CONFIG.waFieldLabels)) {
      lines.push(`${label}: ${ans(id)}`);
    }

    lines.push(`Instagram ou site: ${ig}`, "", `Pré-orçamento mostrado no site: ${q.range} (${q.plan})`, "", COPY.waOutro);

    return lines.join("\n");
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
