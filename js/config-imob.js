window.FUNNEL_CONFIG = {
  whatsapp: "5548984716938",
  storageKey: "vi-quiz-v7",
  brand: "PERSUA Vídeos",

  portfolio: [
    { title: "Persua VID 001", youtube: "aAmKHR3U56Q" },
    { title: "Persua VID 002", youtube: "m6v2stNcWsU" },
    { title: "Persua VID 003", youtube: "SpuphJ_ysHg" },
  ],

  copy: {
    startTitle: "Vídeos profissionais para o seu imóvel",
    startLead:
      "Gostou do que viu? Aqui tem mais do nosso trabalho. Responda o diagnóstico e receba seu pré-orçamento — leva menos de 1 minuto.",
    portfolioHead: "Veja um pouco do trabalho",
    startCta: "Começar diagnóstico",
    leadTitle: "Onde mandamos seu pré-orçamento?",
    leadSub: "Último passo — usamos só para montar a mensagem e te atender no WhatsApp.",
    nameTitle: "Como posso te chamar?",
    nameSub: "Só para personalizar seu diagnóstico.",
    nameCta: "Montar meu pré-orçamento",
    leadBullets: [
      "Pré-orçamento calculado nas suas respostas",
      "WhatsApp já com tudo preenchido",
      "Só falta confirmar e fechar",
    ],
    leadCta: "Ver meu pré-orçamento",
    processTitle: "Montando seu pré-orçamento, {nome}",
    processTitleFallback: "Montando seu pré-orçamento",
    processDone: "Pré-orçamento pronto",
    processOpen: "Tudo certo, {nome}. Abrindo seu resumo…",
    resultBadge: "Pré-orçamento",
    resultTitle: "{nome}, seu pré-orçamento está pronto",
    resultSub:
      "Com base no diagnóstico, montamos uma faixa estimada. No WhatsApp você finaliza o pedido com a atendente.",
    quotePoints: ["Roteiro e edição inclusos", "Pronto para Reels e anúncios", "Ajuste final no WhatsApp"],
    waCta: "Finalizar pedido no WhatsApp",
    waIntro: "Olá! Acabei de fazer o diagnóstico e quero finalizar meu pedido de vídeos imobiliários.",
    waOutro: "Vi o pré-orçamento e quero finalizar o pedido com vocês.",
    summaryTitle: "Resumo do diagnóstico",
  },

  processSteps: [
    "Lendo seu perfil, {nome}…",
    "Cruzando material e formato…",
    "Definindo volume e prazo…",
    "Calculando pré-orçamento…",
  ],

  processLabels: ["Perfil e objetivo", "Material e formato", "Volume e prazo", "Pré-orçamento"],

  resultFields: [
    { id: "perfil", label: "Perfil" },
    { id: "divulgar", label: "Divulgar" },
    { id: "material", label: "Material" },
    { id: "formato", label: "Formato" },
    { id: "quantidade", label: "Quantidade" },
    { id: "objetivo", label: "Objetivo" },
    { id: "prazo", label: "Prazo" },
  ],

  waFieldLabels: {
    perfil: "Meu perfil",
    divulgar: "Quero divulgar",
    material: "Material disponível",
    formato: "Formato de vídeo",
    quantidade: "Quantidade de vídeos",
    objetivo: "Objetivo principal",
    prazo: "Pretendo começar",
  },

  questions: [
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
  ],

  buildQuote(answers, { asList, money }) {
    const qty = asList(answers.quantidade)[0] || "";
    const formats = asList(answers.formato);
    const material = asList(answers.material);
    const prazo = asList(answers.prazo)[0] || "";
    const p = {
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
        "Pré-orçamento estimado com base nas suas respostas. O valor final é confirmado no WhatsApp conforme duração e detalhes.",
    };
  },

  resultChips(answers, quote, { asList }) {
    return [quote.plan, ...asList(answers.formato).slice(0, 2), ...asList(answers.quantidade).slice(0, 1)].filter(
      Boolean
    );
  },
};
