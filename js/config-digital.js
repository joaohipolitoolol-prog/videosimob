window.FUNNEL_CONFIG = {
  whatsapp: "5548984716938",
  storageKey: "pd-quiz-v1",
  brand: "PERSUA Digital",

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
      "Pré-orçamento calculado nas suas respostas",
      "WhatsApp já com tudo preenchido",
      "Só falta confirmar e fechar",
    ],
    leadCta: "Ver meu pré-orçamento",
    processTitle: "Montando seu pré-orçamento",
    processDone: "Pré-orçamento pronto",
    processOpen: "Tudo certo. Abrindo seu resumo…",
    resultBadge: "Pré-orçamento",
    resultTitle: "Seu pré-orçamento está pronto",
    resultSub:
      "Com base no diagnóstico, montamos uma faixa estimada. No WhatsApp você finaliza o pedido com a equipe.",
    quotePoints: [
      "Edição pensada para tráfego pago",
      "Variações e hooks quando aplicável",
      "Ajuste final no WhatsApp",
    ],
    waCta: "Finalizar pedido no WhatsApp",
    waIntro: "Olá! Acabei de fazer o diagnóstico e quero finalizar meu pedido de VSL/criativos.",
    waOutro: "Vi o pré-orçamento e quero fechar com vocês.",
    summaryTitle: "Resumo do diagnóstico",
  },

  processSteps: [
    "Analisando seu nicho e oferta…",
    "Cruzando entrega, copy e material…",
    "Definindo volume e prazo…",
    "Calculando pré-orçamento…",
  ],

  processLabels: ["Perfil e produto", "Entrega e copy", "Volume e prazo", "Pré-orçamento"],

  resultFields: [
    { id: "perfil", label: "Perfil" },
    { id: "produto", label: "Produto/nicho" },
    { id: "entrega", label: "Entrega" },
    { id: "copy", label: "Copy/roteiro" },
    { id: "material", label: "Material" },
    { id: "quantidade", label: "Volume" },
    { id: "objetivo", label: "Objetivo" },
    { id: "prazo", label: "Prazo" },
  ],

  waFieldLabels: {
    perfil: "Meu perfil",
    produto: "Produto/nicho",
    entrega: "O que preciso",
    copy: "Copy/roteiro",
    material: "Material disponível",
    quantidade: "Volume",
    objetivo: "Objetivo principal",
    prazo: "Pretendo começar",
  },

  questions: [
    {
      id: "perfil",
      title: "Qual é o seu perfil?",
      multi: false,
      options: [
        { value: "Infoprodutor / expert", icon: "user" },
        { value: "Produtor de conteúdo / UGC", icon: "film" },
        { value: "Agência de tráfego", icon: "megaphone" },
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
        { value: "VSL completa", icon: "video" },
        { value: "Criativos para anúncios", icon: "bolt" },
        { value: "Edição de VSL existente", icon: "edit" },
        { value: "UGC / depoimentos", icon: "users" },
        { value: "Pacote VSL + criativos", icon: "pack" },
        { value: "Não sei, quero recomendação", icon: "compass", exclusive: true },
      ],
    },
    {
      id: "copy",
      title: "Como está a copy/roteiro?",
      multi: false,
      options: [
        { value: "Já tenho roteiro pronto", icon: "clip" },
        { value: "Tenho copy escrita (preciso adaptar)", icon: "edit" },
        { value: "Preciso de roteiro completo", icon: "pen" },
        { value: "Preciso de roteiro + revisão estratégica", icon: "target" },
      ],
    },
    {
      id: "material",
      title: "Que material você já tem?",
      multi: true,
      hint: "Pode marcar mais de uma opção",
      options: [
        { value: "Gravações do expert / apresentador", icon: "film" },
        { value: "B-roll, imagens e referências", icon: "image" },
        { value: "Apenas copy ou texto", icon: "pen" },
        { value: "Nada ainda (preciso orientação)", icon: "empty", exclusive: true },
        { value: "Referências de concorrentes", icon: "eye" },
      ],
    },
    {
      id: "quantidade",
      title: "Qual volume você precisa?",
      multi: false,
      options: [
        { value: "1 peça para testar", icon: "one" },
        { value: "De 2 a 4 peças", icon: "few" },
        { value: "De 5 a 10 peças", icon: "more" },
        { value: "Pacote mensal (10+ peças)", icon: "pack" },
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
  ],

  buildQuote(answers, { asList, money }) {
    const entrega = asList(answers.entrega);
    const copy = asList(answers.copy)[0] || "";
    const qty = asList(answers.quantidade)[0] || "";
    const material = asList(answers.material);
    const prazo = asList(answers.prazo)[0] || "";

    const copyAddons = {
      "Já tenho roteiro pronto": 0,
      "Tenho copy escrita (preciso adaptar)": 180,
      "Preciso de roteiro completo": 480,
      "Preciso de roteiro + revisão estratégica": 680,
    };

    const hasPack = entrega.includes("Pacote VSL + criativos");
    const hasVSL = entrega.includes("VSL completa");
    const hasCreatives = entrega.includes("Criativos para anúncios");
    const hasEdit = entrega.includes("Edição de VSL existente");
    const hasUGC = entrega.includes("UGC / depoimentos");
    const unsure = entrega.includes("Não sei, quero recomendação");

    let unit = 350;
    let plan = "Produção de vídeo";
    let kind = "avulso";
    let spread = 180;

    if (hasPack) {
      unit = 1400;
      plan = "Pacote VSL + criativos";
      spread = 350;
    } else if (hasVSL) {
      unit = 900;
      plan = "VSL completa";
      spread = 250;
    } else if (hasEdit) {
      unit = 450;
      plan = "Edição de VSL";
      spread = 150;
    } else if (hasCreatives && hasUGC) {
      unit = 240;
      plan = "Criativos + UGC";
      spread = 80;
    } else if (hasCreatives) {
      unit = 200;
      plan = "Criativos para anúncios";
      spread = 70;
    } else if (hasUGC) {
      unit = 280;
      plan = "UGC / depoimentos";
      spread = 90;
    } else if (unsure) {
      unit = 650;
      plan = "Projeto sob consulta";
      spread = 200;
    }

    const vslRelated = hasVSL || hasPack || hasEdit || unsure;
    if (copy && vslRelated) unit += copyAddons[copy] || 0;

    const deliveryCount = entrega.filter((e) => e !== "Não sei, quero recomendação").length;
    if (deliveryCount > 1 && !hasPack) unit += 120 * (deliveryCount - 1);

    if (material.includes("Nada ainda (preciso orientação)")) unit += 80;

    let min = unit;
    let max = unit + spread;

    if (qty.includes("2 a 4")) {
      kind = "pacote";
      plan = `${plan} · 2–4 peças`;
      min = Math.round(unit * 2.4);
      max = Math.round(unit * 3.5);
    } else if (qty.includes("5 a 10")) {
      kind = "pacote";
      plan = `${plan} · 5–10 peças`;
      min = Math.round(unit * 4.5);
      max = Math.round(unit * 6.5);
    } else if (qty.includes("10+") || qty.includes("mensal")) {
      kind = "mensal";
      plan = "Pacote mensal recorrente";
      min = Math.round(unit * 7);
      max = Math.round(unit * 10);
    } else if (!plan.includes("·")) {
      plan = `${plan} · 1 peça teste`;
      min = unit;
      max = unit + spread;
    }

    if (prazo === "O quanto antes") {
      min = Math.round(min * 1.04);
      max = Math.round(max * 1.06);
    }

    min = Math.round(min * 0.85);
    max = Math.round(max * 0.85);

    const round10 = (n) => Math.round(n / 10) * 10;
    min = round10(min);
    max = round10(max);

    const floor = hasVSL || hasPack ? 750 : hasCreatives || hasUGC ? 170 : 300;
    if (kind === "avulso") min = Math.max(floor, min);
    if (max < min + 30) max = min + 30;

    const range = min === max ? money(min) : `${money(min)} – ${money(max)}`;

    return {
      min,
      max,
      unit,
      plan,
      kind,
      range,
      rangeShort: min === max ? money(min) : `a partir de ${money(min)}`,
      disclaimer:
        "Pré-orçamento estimado com base nas suas respostas. Valor final confirmado no WhatsApp conforme duração, variações e escopo de copy.",
    };
  },

  resultChips(answers, quote, { asList }) {
    return [
      quote.plan,
      ...asList(answers.entrega).slice(0, 2),
      ...asList(answers.quantidade).slice(0, 1),
    ].filter(Boolean);
  },
};
