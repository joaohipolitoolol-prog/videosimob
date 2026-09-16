window.FUNNEL_CONFIG = {
  whatsapp: "5548984716938",
  storageKey: "pd-quiz-v4",
  brand: "PERSUA Digital",
  requireCidade: false,

  portfolio: [
    { title: "Persua Mini VSL 01", youtube: "bTCXXBn_36g" },
    { title: "Persua CT 01", youtube: "OQ9CBnMNUC8" },
    { title: "Persua CT 02", youtube: "R304PIS2NEY" },
    { title: "Persua CT 03", youtube: "2bzvNPOT_Co" },
  ],

  copy: {
    startTitle: "VSL e criativos para escalar no digital",
    startLead:
      "Separei alguns trabalhos nossos pra você ver. Responda o diagnóstico e receba seu pré-orçamento — leva menos de 1 minuto.",
    portfolioHead: "Veja um pouco do trabalho",
    portfolioHintDesk: "Toque para assistir",
    startCta: "Começar diagnóstico",
    leadTitle: "Onde mandamos seu pré-orçamento?",
    leadSub: "Usamos só para montar a mensagem e te atender no WhatsApp.",
    leadBullets: [
      "Funil adaptado ao seu perfil e tipo de entrega",
      "Estimativa com duração, estilo, IA e prazo",
      "Valor final confirmado após ver o roteiro",
    ],
    leadCta: "Ver meu pré-orçamento",
    processTitle: "Montando seu pré-orçamento",
    processDone: "Pré-orçamento pronto",
    processOpen: "Tudo certo. Abrindo seu resumo…",
    resultBadge: "Estimativa inicial",
    resultTitle: "Seu pré-orçamento está pronto",
    resultSub:
      "Faixa calculada com base nas suas respostas. No WhatsApp confirmamos o valor final após analisar roteiro e material bruto.",
    quotePoints: [
      "Duração, estilo e cenas IA já considerados",
      "Acréscimo de prazo incluído quando informado",
      "Ajuste fino no WhatsApp após ver o material",
    ],
    waCta: "Finalizar pedido no WhatsApp",
    waIntro: "Olá! Acabei de fazer o diagnóstico e quero finalizar meu pedido de VSL/criativos.",
    waOutro: "Vi a estimativa no site e quero fechar com vocês.",
    summaryTitle: "Resumo do diagnóstico",
  },

  processSteps: [
    "Identificando seu perfil e trilha…",
    "Cruzando duração, estilo e cenas IA…",
    "Aplicando prazo e volume…",
    "Calculando pré-orçamento…",
  ],

  processLabels: ["Perfil e entrega", "Escopo da VSL", "Volume e prazo", "Pré-orçamento"],

  resultFields: [
    { id: "perfil", label: "Perfil" },
    { id: "produto", label: "Produto/nicho" },
    { id: "entrega", label: "Entrega" },
    { id: "duracao", label: "Duração" },
    { id: "estilo", label: "Estilo de edição" },
    { id: "cenas_ia", label: "Cenas com IA" },
    { id: "copy", label: "Copy/roteiro" },
    { id: "material", label: "Material" },
    { id: "quantidade", label: "Volume" },
    { id: "objetivo", label: "Objetivo" },
    { id: "revisoes", label: "Alterações" },
    { id: "prazo", label: "Prazo de entrega" },
  ],

  waFieldLabels: {
    perfil: "Meu perfil",
    produto: "Produto/nicho",
    entrega: "O que preciso",
    duracao: "Duração estimada",
    estilo: "Estilo de edição",
    cenas_ia: "Cenas com IA",
    copy: "Copy/roteiro",
    material: "Material disponível",
    quantidade: "Volume",
    objetivo: "Objetivo principal",
    revisoes: "Rodadas de alteração",
    prazo: "Preciso receber em",
  },

  getActiveQuestions(answers, { asList }) {
    const resolved = this.questions
      .filter((q) => !q.when || q.when(answers, { asList }))
      .map((q) => this.resolveQuestion(q, answers, { asList }));
    return resolved;
  },

  resolveQuestion(q, answers, { asList }) {
    const perfil = asList(answers.perfil)[0] || "";
    const produto = asList(answers.produto);
    const expert = perfil.includes("Infoprodutor");
    const curso = produto.some((p) => p.includes("Infoproduto"));

    let title = q.title;
    let hint = q.hint;
    let banner = q.banner;

    if (q.id === "produto" && expert) {
      title = "Qual infoproduto ou nicho você atua?";
      hint = "Isso ajuda a calibrar o estilo da VSL";
    }
    if (q.id === "entrega" && expert && curso) {
      title = "O que você precisa para sua VSL agora?";
      banner = "Trilha VSL · Expert — vamos detalhar escopo, duração e produção.";
    } else if (q.id === "entrega" && expert) {
      title = "O que você precisa para escalar sua oferta?";
      banner = "Trilha Expert — o funil se adapta ao que você escolher.";
    }
    if (q.id === "duracao" && expert && curso) {
      hint = "VSL de curso costuma ficar entre 16 e 45 min — escolha a faixa mais próxima.";
    }
    if (q.id === "prazo" && needsVsl(answers, { asList })) {
      hint = "Prazos curtos têm acréscimo — o valor já aparece na estimativa final.";
    }

    let options = q.options;
    if (q.id === "entrega" && expert && curso) {
      const priority = [
        "VSL completa",
        "Edição de VSL existente",
        "Pacote VSL + criativos",
        "Criativos para anúncios",
        "UGC / depoimentos",
        "Não sei, quero recomendação",
      ];
      options = [...q.options].sort((a, b) => priority.indexOf(a.value) - priority.indexOf(b.value));
    }

    return { ...q, title, hint, banner, options };
  },

  getQuizKicker(answers, q, { asList }) {
    const perfil = asList(answers.perfil)[0] || "";
    const expert = perfil.includes("Infoprodutor");
    const vsl = needsVsl(answers, { asList });
    const creatives = onlyCreatives(answers, { asList });

    if (expert && vsl) return `Diagnóstico VSL · Expert · ${q.title.split(" ")[0]}…`;
    if (expert && creatives) return `Diagnóstico · Expert · Criativos`;
    if (vsl) return `Diagnóstico VSL · passo ${this._stepIndex(answers, q) + 1}`;
    if (creatives) return `Diagnóstico · Criativos · passo ${this._stepIndex(answers, q) + 1}`;
    return `Diagnóstico · passo ${this._stepIndex(answers, q) + 1}`;
  },

  _stepIndex(answers, q) {
    const list = this.getActiveQuestions(answers, { asList: (v) => (Array.isArray(v) ? v.filter(Boolean) : v ? [String(v)] : []) });
    return Math.max(0, list.findIndex((item) => item.id === q.id));
  },

  questions: [
    {
      id: "perfil",
      title: "Qual é o seu perfil?",
      multi: false,
      options: [
        { value: "Infoprodutor / expert", icon: "user", note: "Trilha otimizada para VSL de curso" },
        { value: "Produtor de conteúdo / UGC", icon: "film" },
        { value: "Agência de tráfego", icon: "megaphone", note: "Volume e criativos em foco" },
        { value: "E-commerce / marca DTC", icon: "cart" },
        { value: "Nutra / afiliado", icon: "rocket" },
        { value: "Outro", icon: "dots" },
      ],
    },
    {
      id: "produto",
      title: "O que você vende ou promove?",
      multi: true,
      hint: "Pode marcar mais de uma opção",
      options: [
        { value: "Infoproduto ou curso", icon: "play" },
        { value: "Nutra / suplemento", icon: "box" },
        { value: "Produto físico (e-commerce)", icon: "cart" },
        { value: "Serviço local ou consultoria", icon: "chat" },
        { value: "SaaS / aplicativo", icon: "chart" },
        { value: "Um pouco de tudo", icon: "layers", exclusive: true },
      ],
    },
    {
      id: "entrega",
      title: "O que você precisa agora?",
      multi: true,
      hint: "Pode marcar mais de uma opção",
      options: [
        { value: "VSL completa", icon: "video", note: "Produção ou edição premium" },
        { value: "Edição de VSL existente", icon: "edit", note: "Material já gravado" },
        { value: "Criativos para anúncios", icon: "bolt" },
        { value: "Pacote VSL + criativos", icon: "pack" },
        { value: "UGC / depoimentos", icon: "users" },
        { value: "Não sei, quero recomendação", icon: "compass", exclusive: true },
      ],
    },
    {
      id: "duracao",
      title: "Qual a duração final da VSL?",
      multi: false,
      hint: "Tempo aproximado do vídeo entregue — impacta muito o valor",
      when: (a, h) => needsVsl(a, h),
      options: [
        { value: "Até 5 minutos", icon: "bolt", badge: "R$ 550+" },
        { value: "De 6 a 15 minutos", icon: "play", badge: "R$ 800+" },
        { value: "De 16 a 30 minutos", icon: "clock", badge: "R$ 1.300+" },
        { value: "De 31 a 45 minutos", icon: "video", badge: "R$ 1.900+" },
        { value: "De 46 a 60 minutos", icon: "film", badge: "R$ 2.800+" },
        { value: "Ainda não sei", icon: "compass", badge: "estimativa média" },
      ],
    },
    {
      id: "estilo",
      title: "Qual estilo de edição você precisa?",
      multi: false,
      hint: "Quanto mais dinâmica, mais tempo de direção e produção",
      when: (a, h) => needsVsl(a, h),
      options: [
        { value: "Básica — cortes, trilha e textos simples", icon: "clip", badge: "incluído" },
        { value: "Dinâmica — imagens, legendas e efeitos", icon: "spark", badge: "+8%" },
        { value: "Avançada — animações e direção criativa", icon: "target", badge: "+12%" },
      ],
    },
    {
      id: "cenas_ia",
      title: "Precisa de cenas criadas com IA?",
      multi: false,
      hint: "Ilustrações, histórias visuais e cenas geradas — limitadas no pacote",
      when: (a, h) => needsVsl(a, h),
      options: [
        { value: "Não precisa", icon: "empty", badge: "incluído" },
        { value: "Sim, poucas cenas (até 5)", icon: "one", badge: "+R$ 300" },
        { value: "Sim, várias cenas na VSL", icon: "layers", badge: "+R$ 450" },
        { value: "Ainda não sei", icon: "compass", badge: "+R$ 200" },
      ],
    },
    {
      id: "copy",
      title: "Como está a copy/roteiro?",
      multi: false,
      when: (a, h) => needsVsl(a, h),
      options: [
        { value: "Já tenho roteiro pronto", icon: "clip", badge: "incluído" },
        { value: "Tenho copy escrita (preciso adaptar)", icon: "edit", badge: "+R$ 150" },
        { value: "Preciso de roteiro completo", icon: "pen", badge: "+R$ 450" },
        { value: "Preciso de roteiro + revisão estratégica", icon: "target", badge: "+R$ 650" },
      ],
    },
    {
      id: "material",
      title: "Como está o material de gravação?",
      multi: true,
      hint: "Pode marcar mais de uma opção",
      when: (a, h) => needsVsl(a, h),
      options: [
        { value: "Gravações prontas e organizadas", icon: "film", badge: "incluído" },
        { value: "Gravações em vários arquivos / partes", icon: "layers", badge: "+10%" },
        { value: "B-roll, imagens e referências", icon: "image" },
        { value: "Apenas copy ou texto", icon: "pen" },
        { value: "Ainda não tenho material", icon: "empty", badge: "+R$ 100", exclusive: true },
      ],
    },
    {
      id: "quantidade",
      title: "Qual volume você precisa?",
      multi: false,
      options: [
        { value: "1 peça para testar", icon: "one" },
        { value: "De 2 a 4 peças", icon: "few", badge: "pacote" },
        { value: "De 5 a 10 peças", icon: "more", badge: "pacote" },
        { value: "Pacote mensal (10+ peças)", icon: "pack", badge: "recorrente" },
      ],
    },
    {
      id: "objetivo",
      title: "Qual é o principal objetivo?",
      multi: true,
      hint: "Pode marcar mais de uma opção",
      options: [
        { value: "Escalar campanhas de tráfego", icon: "chart" },
        { value: "Aumentar conversão da VSL", icon: "target" },
        { value: "Testar novos criativos", icon: "bolt" },
        { value: "Lançamento de produto", icon: "rocket" },
        { value: "Reposicionar oferta", icon: "spark" },
      ],
    },
    {
      id: "revisoes",
      title: "Quantas rodadas de alteração você prevê?",
      multi: false,
      hint: "Até 2 rodadas já vêm incluídas na estimativa",
      when: (a, h) => needsVsl(a, h),
      options: [
        { value: "Até 2 rodadas (incluídas)", icon: "clip", badge: "incluído" },
        { value: "3 rodadas", icon: "edit", badge: "+10%" },
        { value: "4 ou mais rodadas", icon: "layers", badge: "+15%" },
        { value: "Ainda não sei", icon: "compass", badge: "incluído" },
      ],
    },
    {
      id: "prazo",
      title: "Quando precisa da primeira versão?",
      multi: false,
      hint: "Prazos curtos têm acréscimo — já entra na estimativa",
      options: [
        { value: "Urgente — até 7 dias", icon: "flash", badge: "+25%", note: "Prioridade na fila" },
        { value: "Em até 15 dias", icon: "week", badge: "+8%" },
        { value: "Neste mês", icon: "month", badge: "sem acréscimo" },
        { value: "Sem urgência", icon: "wait", badge: "sem acréscimo" },
      ],
    },
  ],

  buildQuote(answers, { asList, money }) {
    const entrega = asList(answers.entrega);
    const duracao = asList(answers.duracao)[0] || "";
    const estilo = asList(answers.estilo)[0] || "";
    const cenasIa = asList(answers.cenas_ia)[0] || "";
    const copy = asList(answers.copy)[0] || "";
    const qty = asList(answers.quantidade)[0] || "";
    const material = asList(answers.material);
    const prazo = asList(answers.prazo)[0] || "";
    const revisoes = asList(answers.revisoes)[0] || "";

    const durationTiers = {
      "Até 5 minutos": { min: 550, max: 750, editMin: 350, editMax: 500, label: "até 5 min" },
      "De 6 a 15 minutos": { min: 800, max: 1100, editMin: 500, editMax: 700, label: "6–15 min" },
      "De 16 a 30 minutos": { min: 1300, max: 1800, editMin: 800, editMax: 1100, label: "16–30 min" },
      "De 31 a 45 minutos": { min: 1900, max: 2700, editMin: 1200, editMax: 1700, label: "31–45 min" },
      "De 46 a 60 minutos": { min: 2800, max: 3800, editMin: 1700, editMax: 2400, label: "46–60 min" },
      "Ainda não sei": { min: 1300, max: 1800, editMin: 800, editMax: 1100, label: "16–30 min (est.)" },
    };

    const copyAddons = {
      "Já tenho roteiro pronto": 0,
      "Tenho copy escrita (preciso adaptar)": 150,
      "Preciso de roteiro completo": 450,
      "Preciso de roteiro + revisão estratégica": 650,
    };

    const hasPack = entrega.includes("Pacote VSL + criativos");
    const hasVSL = entrega.includes("VSL completa");
    const hasCreatives = entrega.includes("Criativos para anúncios");
    const hasEdit = entrega.includes("Edição de VSL existente");
    const hasUGC = entrega.includes("UGC / depoimentos");
    const unsure = entrega.includes("Não sei, quero recomendação");

    const vslRelated = needsVsl(answers, { asList });
    const tier =
      durationTiers[duracao] ||
      (vslRelated ? durationTiers["De 16 a 30 minutos"] : null);

    let min = 350;
    let max = 520;
    let plan = "Produção de vídeo";
    let kind = "avulso";
    const breakdown = [];

    if (hasPack && tier) {
      min = tier.min + 500;
      max = tier.max + 750;
      plan = `Pacote VSL ${tier.label} + criativos`;
      breakdown.push({ label: "Base pacote VSL + criativos", value: money(min) + " – " + money(max) });
    } else if (hasVSL && tier) {
      const materialReady =
        material.includes("Gravações prontas e organizadas") ||
        material.includes("Gravações em vários arquivos / partes");
      const scriptReady = copy === "Já tenho roteiro pronto";

      if (materialReady && scriptReady) {
        min = tier.editMin;
        max = tier.editMax;
        plan = `VSL · edição premium · ${tier.label}`;
      } else {
        min = tier.min;
        max = tier.max;
        plan = `VSL completa · ${tier.label}`;
      }
      breakdown.push({ label: `Base ${plan}`, value: money(min) + " – " + money(max) });
    } else if (hasEdit && tier) {
      min = tier.editMin;
      max = tier.editMax;
      plan = `Edição de VSL · ${tier.label}`;
      breakdown.push({ label: `Base ${plan}`, value: money(min) + " – " + money(max) });
    } else if (hasCreatives && hasUGC) {
      min = 220;
      max = 320;
      plan = "Criativos + UGC";
    } else if (hasCreatives) {
      min = 180;
      max = 280;
      plan = "Criativos para anúncios";
    } else if (hasUGC) {
      min = 250;
      max = 380;
      plan = "UGC / depoimentos";
    } else if (unsure && tier) {
      min = tier.min;
      max = tier.max;
      plan = `Projeto sob consulta · ${tier.label}`;
    }

    const baseMin = min;
    const baseMax = max;

    if (estilo.includes("Dinâmica")) {
      min = Math.round(min * 1.08);
      max = Math.round(max * 1.08);
      breakdown.push({ label: "Edição dinâmica", value: "+8%" });
    } else if (estilo.includes("Avançada")) {
      min = Math.round(min * 1.12);
      max = Math.round(max * 1.12);
      breakdown.push({ label: "Edição avançada", value: "+12%" });
    }

    if (cenasIa.includes("poucas")) {
      min += 300;
      max += 400;
      breakdown.push({ label: "Cenas com IA (até 5)", value: "+R$ 300 – 400" });
    } else if (cenasIa.includes("várias")) {
      min += 450;
      max += 600;
      breakdown.push({ label: "Várias cenas com IA", value: "+R$ 450 – 600" });
    } else if (cenasIa.includes("Ainda não sei")) {
      min += 200;
      max += 300;
      breakdown.push({ label: "Reserva cenas IA", value: "+R$ 200 – 300" });
    }

    if (copy && vslRelated) {
      const add = copyAddons[copy] || 0;
      if (add) {
        min += add;
        max += add;
        breakdown.push({ label: "Copy/roteiro", value: "+" + money(add) });
      }
    }

    if (material.includes("Gravações em vários arquivos / partes")) {
      min = Math.round(min * 1.1);
      max = Math.round(max * 1.1);
      breakdown.push({ label: "Material em partes", value: "+10%" });
    }
    if (material.includes("Ainda não tenho material")) {
      min += 100;
      max += 150;
      breakdown.push({ label: "Material pendente", value: "+R$ 100 – 150" });
    }

    const deliveryCount = entrega.filter((e) => e !== "Não sei, quero recomendação").length;
    if (deliveryCount > 1 && !hasPack) {
      min += 100 * (deliveryCount - 1);
      max += 140 * (deliveryCount - 1);
    }

    if (revisoes === "3 rodadas") {
      min = Math.round(min * 1.1);
      max = Math.round(max * 1.1);
      breakdown.push({ label: "3 rodadas de alteração", value: "+10%" });
    } else if (revisoes === "4 ou mais rodadas") {
      min = Math.round(min * 1.15);
      max = Math.round(max * 1.15);
      breakdown.push({ label: "4+ rodadas de alteração", value: "+15%" });
    }

    if (prazo === "Urgente — até 7 dias") {
      min = Math.round(min * 1.25);
      max = Math.round(max * 1.3);
      breakdown.push({ label: "Entrega urgente (7 dias)", value: "+25% a +30%" });
    } else if (prazo === "Em até 15 dias") {
      min = Math.round(min * 1.08);
      max = Math.round(max * 1.1);
      breakdown.push({ label: "Prazo 15 dias", value: "+8% a +10%" });
    }

    if (qty.includes("2 a 4")) {
      kind = "pacote";
      plan = `${plan} · 2–4 peças`;
      min = Math.round(min * 2.3);
      max = Math.round(max * 3.2);
    } else if (qty.includes("5 a 10")) {
      kind = "pacote";
      plan = `${plan} · 5–10 peças`;
      min = Math.round(min * 4.2);
      max = Math.round(max * 5.8);
    } else if (qty.includes("10+") || qty.includes("mensal")) {
      kind = "pacote";
      plan = "Pacote mensal recorrente";
      min = Math.round(min * 6.5);
      max = Math.round(max * 8.5);
    } else if (!plan.includes("·")) {
      plan = `${plan} · 1 peça`;
    }

    if (!vslRelated && (hasCreatives || hasUGC)) {
      min = Math.round(min * 0.88);
      max = Math.round(max * 0.88);
    }

    const round10 = (n) => Math.round(n / 10) * 10;
    min = round10(min);
    max = round10(max);
    if (max < min + 80) max = min + 80;

    const range = `${money(min)} – ${money(max)}`;

    return {
      min,
      max,
      plan,
      kind,
      range,
      rangeShort: `a partir de ${money(min)}`,
      breakdown: breakdown.length ? breakdown : undefined,
      disclaimer:
        "Estimativa inicial com base nas suas respostas. Valor final confirmado no WhatsApp após analisar roteiro, material bruto e quantidade de cenas.",
    };
  },

  resultChips(answers, quote, { asList }) {
    const perfil = asList(answers.perfil)[0] || "";
    const expert = perfil.includes("Infoprodutor") ? "Expert" : null;
    return [
      expert,
      quote.plan,
      ...asList(answers.duracao).slice(0, 1),
      ...asList(answers.estilo).slice(0, 1),
      ...asList(answers.prazo).slice(0, 1),
    ].filter(Boolean);
  },
};

function entregaList(answers, { asList }) {
  return asList(answers.entrega);
}

function onlyCreatives(answers, { asList }) {
  const e = entregaList(answers, { asList });
  if (!e.length) return false;
  const creativeTypes = ["Criativos para anúncios", "UGC / depoimentos"];
  return e.every((x) => creativeTypes.includes(x));
}

function needsVsl(answers, { asList }) {
  const e = entregaList(answers, { asList });
  if (!e.length) return false;
  const vslTypes = [
    "VSL completa",
    "Edição de VSL existente",
    "Pacote VSL + criativos",
    "Não sei, quero recomendação",
  ];
  return e.some((x) => vslTypes.includes(x));
}
