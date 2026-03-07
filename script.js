const translations = {
  en: {
    pageTitle: "Leonardo Camilo | Telecom, Automation and AI Engineering",
    pageDescription:
      "Telecom engineer turned automation builder delivering practical systems across network operations, data and AI-assisted software.",
    languageLabel: "Language",
    heroTagline: "Telecom Automation and AI Engineering",
    heroCopy:
      "I started in radio network optimization and moved into automation and software delivery. Today I build tools that combine telecom operations, data pipelines, and AI-assisted development for production teams.",
    chipRan: "RAN Optimization",
    chipAutomation: "Automation",
    chipAiDelivery: "AI-assisted delivery",
    chipCertifications: "Certifications",
    chipPersonalProjects: "Personal Projects",

    detailsSectionTitle: "Technical Details by Focus Area",
    detailsHint:
      "Click a topic above to see focused showcases from that area.",
    detailRanTitle: "RAN Optimization",
    detailRanItem1:
      "RF parameter optimization, feature activation, and offender troubleshooting on Ericsson 3G/4G/5G networks, applied directly on live networks.",
    detailRanItem2:
      "Understanding network parameters at depth is what connects both sides of the work — it's easier to build automation that's actually useful when you know the technology.",
    detailRanItem3:
      "MoB is an authorial initiative developed by me outside commercial working hours. It was created to reduce NSA/SA mobility troubleshooting time: tasks that used to take hours for a single offender (such as termpoints and relations creation) are now executed in minutes, with full-network analysis and automation for neighbor and termpoint creation. Neighbor Viewer is part of the MoB ecosystem.",

    detailAutomationTitle: "Automation",
    detailAutomationItem1:
      "Python and SQL workflows for KPI extraction, parameter audits, and large-scale analysis.",
    detailAutomationItem2:
      "BI dashboards for online monitoring of large-scale events (such as Lollapalooza and The Town), fed by prepared automation pipelines.",
    detailAutomationItem3:
      "Backend solutions with FastAPI, Flask and REST APIs, including advanced modeling, querying and integration with SQL Server and PostgreSQL, plus frontend stacks with HTML/CSS/JavaScript, React, Tailwind and Leaflet.js for web engineering tools.",
    detailAutomationItem4:
      "E2E audit automation comparing parameter values across network elements.",
    detailAutomationItem5:
      "Code versioning with GitHub and GitLab, organizing engineering tools and ensuring safe evolution through commits, resets and collaborative workflows.",

    detailAiTitle: "AI-assisted delivery",
    detailAiItem1:
      "Cursor, Claude Code, and Codex used for code generation, refactoring, and engineering review loops.",
    detailAiItem2:
      "Repository structures designed for AI collaboration, with clear README documentation, project context files and rule-based workflows.",
    detailAiItem3:
      "MCP workflows connecting tools like GitHub, Playwright and Power BI, extending what AI agents can access and automate.",
    detailAiItem4:
      "Prompt engineering following the 'four golden rules' approach — and a strict no-mock policy for any workflow where the output actually matters.",

    detailCertTitle: "Certifications",
    detailCertItem1:
      "Certifications from DataCamp, Udemy, and Alura covering Python, SQL, BI, cloud, machine learning, and AI-assisted development.",
    detailCertItem2:
      "Credentials selected to support hands-on delivery across telecom operations, automation, and data workflows.",
    detailCertItem3:
      "Each certificate includes a public credential link for direct verification.",

    detailPersonalTitle: "Personal Projects",
    detailPersonalItem1:
      "Pescados do Alexandre: local web app for inventory, transactions, and profitability follow-up.",
    detailPersonalItem2:
      "CorretorOnline: local app for real-estate comparables search and valuation support workflows.",
    detailPersonalItem3:
      "Both projects were built to solve real day-to-day needs with practical and simple user flows.",

    engineeringFocusTitle: "Engineering Focus",
    focusDomain1: "RAN optimization in live networks",
    focusDomain2: "Automation and data pipelines",
    focusDomain3: "AI-assisted engineering workflows",
    focusDomain4: "Digital products used in real operations",

    howBuildTitle: "How I Build",
    howBuildP1:
      "My first step is usually the same: find repetitive manual work and turn it into a reliable flow. AI helps me code and review faster, but the solution still needs clear rules and ownership.",
    howBuildP2:
      "If engineers do not use it during an actual shift, it is not finished.",

    trajectoryTitle: "Career Trajectory",
    trajectoryP1:
      "My career started in radio network optimization. Most of that work was performance analysis, parameter audits, making sense of what was happening in live networks from raw data. It wasn't flashy work, but it was where I learned how to read patterns in messy, real-world environments — and that skill ended up shaping everything that came after.",
    trajectoryP2:
      "Over time I started noticing how much of the daily workflow was the same set of manual steps repeated over and over. That bothered me more than it should have. So I started writing scripts, then building tools, then putting together more complete automation flows — each one replacing something the team didn't want to keep doing by hand. That pull toward automation eventually led me into broader coordination work, bridging engineering teams and delivery planning across different contexts. The instinct behind all of it hasn't changed: find what's slowing people down and remove it.",

    knowledgeTitle: "Knowledge Sharing",
    knowledgeIntro:
      "Technical sessions prepared for telecom engineering teams, focused on practical adoption.",
    presentation1Title: "Prompt Engineering for Telecom Teams",
    presentation1Desc:
      "A practical session on applying prompt engineering in daily telecom engineering workflows.",
    presentation2Title: "Digital Transformation in Engineering Routines",
    presentation2Desc:
      "A knowledge-sharing presentation on using automation and data to modernize engineering routines.",
    openPresentation: "Open presentation",
    certificationsTitle: "Certifications",
    viewCredential: "View credential",

    casesTitle: "Selected Projects",
    case1Title: "Pescados do Alexandre (Personal Project)",
    case1Problem: "Stock and margin tracking for a small business was fragmented and manual.",
    case1Solution:
      "Built an inventory and transaction app with a Python backend and web/PWA interface.",
    case1Impact:
      "Brought daily operations into one flow and made margin review simpler.",

    case2Title: "CorretorOnline (Personal Project)",
    case2Problem:
      "Property evaluations for sale and rental scenarios were slow and inconsistent.",
    case2Solution:
      "Built an application to organize analysis inputs and generate valuation support outputs.",
    case2Impact:
      "Reduced manual rework and improved consistency in the assessment process.",

    case3Title: "MoB_XML_Parser",
    case3Problem:
      "Raw Ericsson XML dumps were heavy to inspect directly in day-to-day optimization routines.",
    case3Solution:
      "Built a parser workflow to convert XML/ZIP inputs into structured TXT/CSV/XLSX outputs.",
    case3Impact:
      "Reduced manual parsing effort and improved readiness of engineering data for analysis.",

    case4Title: "MoB-ENM-Manager",
    case4Problem:
      "ENM operations needed faster execution of recurring commands and session workflows.",
    case4Solution:
      "Built a manager for SSH/SFTP sessions, quick commands, and script scheduling focused on telecom operations.",
    case4Impact:
      "Improved operational consistency and reduced repetitive command handling during network routines.",

    case5Title: "MoB_KML",
    case5Problem:
      "RF teams needed a faster way to map network inventory and sector direction without manual tooling steps.",
    case5Solution:
      "Built a FastAPI-based tool for map visualization, filtering, and KML export from telecom datasets.",
    case5Impact:
      "Improved speed of map preparation and made engineering visualization workflows more consistent.",

    case6Title: "Neighbor Viewer",
    case6Problem:
      "Neighbor analysis for NSA/SA mobility is hard to validate with raw tables and fragmented files.",
    case6Solution:
      "Built an interactive viewer with map-based relation analysis and export routines for neighbor updates.",
    case6Impact:
      "Made neighbor troubleshooting faster and improved consistency when preparing relation updates.",

    case7Title: "SQL_scripting",
    case7Problem:
      "Routine telecom analysis needed reusable SQL queries for faster investigation of network behavior.",
    case7Solution:
      "Organized a repository of SQL scripts focused on 3G/4G/5G analysis and reporting support.",
    case7Impact:
      "Improved repeatability of day-to-day analysis tasks and reduced ad-hoc query rework.",

    case8Title: "Python_scripting",
    case8Problem:
      "Common operational checks were repeated manually across engineering routines.",
    case8Solution:
      "Created a collection of practical Python scripts to automate recurring technical tasks.",
    case8Impact:
      "Lowered repetitive manual work and made execution patterns more consistent.",

    case9Title: "Python-Projects",
    case9Problem:
      "Early automation experiments were scattered and hard to evolve as a learning base.",
    case9Solution:
      "Consolidated Python practice projects and notebooks into a single repository for iterative improvement.",
    case9Impact:
      "Created a stable sandbox to test approaches later reused in production-oriented tooling.",

    downloadsTitle: "Downloads",
    downloadsIntro:
      "These tools were built from real telecom engineering routines. Download them and see the kind of work behind this portfolio.",
    dl1Desc:
      "Turns telecom inventory files into an interactive sector map with directional petals, band coloring, regional filters, and KML export. Supports LTE and 5G NR from 700MHz to 3700MHz. No Python required — extract and run.",
    dl2Desc:
      "Batch converter for Ericsson XML and ZIP network configuration dumps. Outputs structured TXT, CSV, or XLSX with 21 automatic post-processing stages. Drag and drop support — built for day-to-day optimization routines.",
    downloadBtn: "Download",

    problemLabel: "Problem:",
    solutionLabel: "Solution:",
    impactLabel: "Impact:",
    openRepo: "View repo",
    githubLabel: "GitHub profile:",
    linkedinLabel: "LinkedIn:"
  },

  pt: {
    pageTitle: "Leonardo Camilo | Engenharia em Telecom, Automação e IA",
    pageDescription:
      "Engenheiro de telecom que migrou para automação e entrega de sistemas práticos em operação de rede, dados e software com apoio de IA.",
    languageLabel: "Idioma",
    heroTagline: "Engenharia em Telecom, Automação e IA",
    heroCopy:
      "Comecei na otimização de rede rádio e migrei para automação e entrega de software. Hoje construo ferramentas que juntam operação de telecom, pipeline de dados e desenvolvimento assistido por IA para uso em produção.",
    chipRan: "Otimização RAN",
    chipAutomation: "Automação",
    chipAiDelivery: "Entrega assistida por IA",
    chipCertifications: "Certificações",
    chipPersonalProjects: "Projetos Pessoais",

    detailsSectionTitle: "Detalhes Técnicos por Área de Atuação",
    detailsHint:
      "Clique em um tópico acima para ver showcases focados daquela área.",
    detailRanTitle: "Otimização RAN",
    detailRanItem1:
      "Otimização de parâmetros de RF, ativação de features e troubleshooting de ofensores em redes Ericsson 3G/4G/5G, aplicados diretamente em rede ativa.",
    detailRanItem2:
      "Conhecer os parâmetros da rede a fundo é o que conecta os dois lados do trabalho — fica mais fácil construir automação que resolve o problema certo quando se domina a tecnologia.",
    detailRanItem3:
      "MoB é uma iniciativa autoral desenvolvida por mim fora do horário comercial. Ele nasceu da necessidade de reduzir o tempo de troubleshooting de mobilidade NSA/SA: tarefas que levavam horas para um único ofensor (como criação de termpoints e relations) passaram a ser executadas em minutos, com análise da rede inteira e automação de criação de vizinhas e termpoints. O Neighbor Viewer faz parte do ecossistema do MoB.",

    detailAutomationTitle: "Automação",
    detailAutomationItem1:
      "Fluxos Python e SQL para extração de KPI, auditoria de parâmetros e análises massivas.",
    detailAutomationItem2:
      "Dashboards de BI para monitoramento online de grandes eventos (como Lollapalooza e The Town), alimentados por pipelines de automação.",
    detailAutomationItem3:
      "Soluções de backend com FastAPI, Flask e APIs REST, com modelagem, consultas avançadas e integração com SQL Server e PostgreSQL, além de frontend com HTML/CSS/JavaScript, React, Tailwind e Leaflet.js para desenvolvimento de ferramentas web.",
    detailAutomationItem4:
      "Automação de auditoria E2E comparando parâmetros entre elementos de rede.",
    detailAutomationItem5:
      "Versionamento de código com GitHub e GitLab, organizando ferramentas de engenharia e garantindo evolução segura por meio de commits, resets e fluxos colaborativos.",

    detailAiTitle: "Entrega assistida por IA",
    detailAiItem1:
      "Cursor, Claude Code e Codex aplicados em geração de código, refatoração e ciclos de revisão de engenharia.",
    detailAiItem2:
      "Repositórios estruturados para colaboração com IA, com README claro, arquivos de contexto de projeto e fluxos baseados em regras.",
    detailAiItem3:
      "Fluxos MCP conectando ferramentas como GitHub, Playwright e Power BI, ampliando o que agentes de IA conseguem acessar e automatizar.",
    detailAiItem4:
      "Engenharia de prompt seguindo a abordagem das 'quatro regras de ouro' — e uma política rígida de sem dados simulados em qualquer fluxo onde o resultado realmente importa.",

    detailCertTitle: "Certificações",
    detailCertItem1:
      "Certificações pela DataCamp, Udemy e Alura em Python, SQL, BI, cloud, machine learning e desenvolvimento assistido por IA.",
    detailCertItem2:
      "Credenciais escolhidas para sustentar entregas práticas em operação telecom, automação e rotinas de dados.",
    detailCertItem3:
      "Cada certificado possui link público para verificação direta da credencial.",

    detailPersonalTitle: "Projetos Pessoais",
    detailPersonalItem1:
      "Pescados do Alexandre: app web local para estoque, transações e acompanhamento de lucratividade.",
    detailPersonalItem2:
      "CorretorOnline: app local para busca de comparáveis imobiliários e suporte ao fluxo de avaliação.",
    detailPersonalItem3:
      "Os dois projetos foram criados para resolver necessidades reais do dia a dia com fluxo prático e simples.",

    engineeringFocusTitle: "Foco de Engenharia",
    focusDomain1: "Otimização de RAN em rede ativa",
    focusDomain2: "Automação e pipelines de dados",
    focusDomain3: "Fluxos de engenharia assistidos por IA",
    focusDomain4: "Ferramentas e aplicações construídas para uso em operação real",

    howBuildTitle: "Como Eu Construo",
    howBuildP1:
      "Meu ponto de partida quase sempre é o mesmo: tirar trabalho manual repetitivo e transformar em fluxo confiável. IA acelera código e revisão, mas a solução ainda precisa de regra clara e dono.",
    howBuildP2:
      "Se o time não usa durante um turno real, a entrega ainda não terminou.",

    trajectoryTitle: "Trajetória",
    trajectoryP1:
      "Comecei na otimização de redes de rádio. A maior parte do trabalho era análise de performance, auditoria de parâmetros, tentar entender o que estava acontecendo numa rede ativa a partir dos dados brutos. Não era nada glamouroso, mas foi onde aprendi a enxergar padrões em ambientes reais e complexos — e essa habilidade acabou moldando tudo que veio depois.",
    trajectoryP2:
      "Com o tempo fui percebendo o quanto do fluxo diário era a mesma sequência de etapas manuais repetida sem parar. Isso me incomodava mais do que deveria. Então comecei a escrever scripts, depois ferramentas, depois fluxos de automação mais completos — cada um substituindo algo que o time não queria mais fazer na mão. Esse caminho em direção à automação acabou me levando também a trabalhar com coordenação mais ampla, conectando equipes de engenharia e planejamento de entrega em diferentes contextos. O instinto por trás de tudo não mudou: encontrar o que está travando as pessoas e tirar do caminho.",

    knowledgeTitle: "Knowledge Sharing",
    knowledgeIntro:
      "Apresentações técnicas preparadas para equipes de engenharia de telecom, com foco em aplicação prática.",
    presentation1Title: "Engenharia de Prompt para Times de Telecom",
    presentation1Desc:
      "Sessão prática sobre como aplicar engenharia de prompt na rotina de engenharia em telecom.",
    presentation2Title: "Transformação Digital em Rotinas de Engenharia",
    presentation2Desc:
      "Apresentação de compartilhamento técnico sobre uso de automação e dados para modernizar rotinas de engenharia.",
    openPresentation: "Abrir apresentação",
    certificationsTitle: "Certificações",
    viewCredential: "Ver credencial",

    casesTitle: "Projetos Selecionados",
    case1Title: "Pescados do Alexandre (Projeto Pessoal)",
    case1Problem: "O controle de estoque e margem de um pequeno negócio era fragmentado e manual.",
    case1Solution:
      "Foi desenvolvido um app de estoque e transações com backend em Python e interface web/PWA.",
    case1Impact:
      "A rotina diária ficou centralizada em um fluxo único e a leitura de margem ficou mais simples.",

    case2Title: "CorretorOnline (Projeto Pessoal)",
    case2Problem: "A avaliação de imóveis para venda e locação exigia trabalho manual e pouca padronização.",
    case2Solution:
      "Foi desenvolvido um aplicativo para organizar entradas de análise e gerar apoio à avaliação.",
    case2Impact:
      "Reduziu retrabalho manual e aumentou a consistência do processo de avaliação.",

    case3Title: "MoB_XML_Parser",
    case3Problem:
      "Dumps XML Ericsson brutos eram pesados para inspeção direta na rotina de otimização.",
    case3Solution:
      "Foi construído um fluxo de parser para converter entradas XML/ZIP em saídas estruturadas TXT/CSV/XLSX.",
    case3Impact:
      "Reduziu esforço manual de parsing e melhorou a prontidão dos dados para análise de engenharia.",

    case4Title: "MoB-ENM-Manager",
    case4Problem:
      "A operação ENM precisava executar comandos recorrentes e fluxos de sessão com mais agilidade.",
    case4Solution:
      "Foi desenvolvido um gerenciador de sessões SSH/SFTP, comandos rápidos e agendamento de scripts para operação telecom.",
    case4Impact:
      "Melhorou a consistência operacional e reduziu o manuseio repetitivo de comandos em rotinas de rede.",

    case5Title: "MoB_KML",
    case5Problem:
      "Times de RF precisavam mapear inventário de rede e direção de setores com menos etapas manuais.",
    case5Solution:
      "Foi construído um tool em FastAPI para visualização em mapa, filtros e exportação KML a partir de datasets de telecom.",
    case5Impact:
      "Aumentou a velocidade de preparação de mapas e deixou o fluxo de visualização mais consistente.",

    case6Title: "Neighbor Viewer",
    case6Problem:
      "Análise de vizinhança em mobilidade NSA/SA é difícil de validar só com tabelas cruas e arquivos fragmentados.",
    case6Solution:
      "Foi construído um viewer interativo com análise de relações no mapa e rotinas de exportação para atualização de vizinhas.",
    case6Impact:
      "Acelerou troubleshooting de vizinhança e melhorou a consistência na preparação de ajustes de relações.",

    case7Title: "SQL_scripting",
    case7Problem:
      "Análises rotineiras em telecom precisavam de consultas SQL reutilizáveis para investigar comportamento de rede com mais agilidade.",
    case7Solution:
      "Organização de um repositório de scripts SQL focados em análise 3G/4G/5G e suporte a relatórios.",
    case7Impact:
      "Aumentou a repetibilidade das tarefas de análise do dia a dia e reduziu retrabalho com consultas ad-hoc.",

    case8Title: "Python_scripting",
    case8Problem:
      "Checagens operacionais comuns eram repetidas manualmente em diferentes rotinas de engenharia.",
    case8Solution:
      "Criação de uma coleção de scripts Python práticos para automatizar tarefas técnicas recorrentes.",
    case8Impact:
      "Reduziu trabalho manual repetitivo e trouxe mais consistência aos padrões de execução.",

    case9Title: "Python-Projects",
    case9Problem:
      "Experimentos iniciais de automação estavam dispersos e difíceis de evoluir como base de aprendizado.",
    case9Solution:
      "Consolidação de projetos e notebooks em Python em um único repositório para melhoria iterativa.",
    case9Impact:
      "Criou um sandbox estável para testar abordagens depois reaproveitadas em ferramentas orientadas à produção.",

    downloadsTitle: "Downloads",
    downloadsIntro:
      "Essas ferramentas foram construídas a partir de rotinas reais de engenharia em telecom. Baixe e veja o tipo de trabalho que está por trás desse portfólio.",
    dl1Desc:
      "Transforma arquivos de inventário de telecom em mapa interativo com pétalas direcionais por setor, cores por banda, filtros regionais e exportação KML. Suporte a LTE e 5G NR de 700MHz a 3700MHz. Sem Python — extraia e execute.",
    dl2Desc:
      "Conversor em lote de dumps XML e ZIP de configuração de rede Ericsson. Gera saídas em TXT, CSV ou XLSX com 21 etapas automáticas de pós-processamento. Suporte a drag & drop — criado para rotinas de otimização.",
    downloadBtn: "Download",

    problemLabel: "Problema:",
    solutionLabel: "Solução:",
    impactLabel: "Impacto:",
    openRepo: "Ver repositório",
    githubLabel: "Perfil GitHub:",
    linkedinLabel: "LinkedIn:"
  }
};

function applyLanguage(lang) {
  const currentLanguage = translations[lang] ? lang : "en";

  document.documentElement.lang = currentLanguage;
  document.title = translations[currentLanguage].pageTitle;

  const description = document.querySelector('meta[name="description"]');
  if (description) {
    description.setAttribute("content", translations[currentLanguage].pageDescription);
  }

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.getAttribute("data-i18n");
    if (translations[currentLanguage][key]) {
      element.textContent = translations[currentLanguage][key];
    }
  });

  const select = document.getElementById("language-switch");
  if (select) {
    select.value = currentLanguage;
  }

  localStorage.setItem("preferred-language", currentLanguage);
}

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));

const chipButtons = Array.from(document.querySelectorAll(".chip-button"));
const detailPanels = Array.from(document.querySelectorAll(".detail-panel"));
const projectCards = Array.from(document.querySelectorAll(".project-card[data-project-topics]"));
const sectionsHiddenInPersonalMode = [
  document.getElementById("engineering-focus-section"),
  document.getElementById("how-build-section"),
  document.getElementById("trajectory-section"),
  document.getElementById("knowledge-sharing-section")
].filter(Boolean);
const certificationsSection = document.getElementById("certifications-section");
const selectedProjectsSection = document.getElementById("selected-projects-section");
const downloadsSection = document.getElementById("downloads-section");
let activeDetailTopic = null;

function updateProjectFilter(topic) {
  const currentTopic = topic || null;

  projectCards.forEach((card) => {
    const topics = (card.dataset.projectTopics || "")
      .split(",")
      .map((item) => item.trim())
      .filter(Boolean);

    if (!currentTopic) {
      card.hidden = false;
      return;
    }

    if (currentTopic === "automation") {
      const isAutomationCard = topics.includes("automation") || topics.includes("ran");
      const isPersonalCard = topics.includes("personal-projects");
      card.hidden = !isAutomationCard || isPersonalCard;
      return;
    }

    card.hidden = !topics.includes(currentTopic);
  });
}

function updateSectionVisibility(topic) {
  const compactMode =
    topic === "personal-projects" ||
    topic === "automation" ||
    topic === "ai-delivery" ||
    topic === "certifications";
  sectionsHiddenInPersonalMode.forEach((section) => {
    section.hidden = compactMode;
  });

  if (certificationsSection) {
    certificationsSection.hidden = Boolean(topic && topic !== "certifications");
  }

  if (selectedProjectsSection) {
    selectedProjectsSection.hidden = topic === "certifications" || topic === "ran" || topic === "ai-delivery";
  }

  if (downloadsSection) {
    downloadsSection.hidden = topic !== "personal-projects";
  }
}

function setActiveDetail(topic) {
  activeDetailTopic = activeDetailTopic === topic ? null : topic;

  chipButtons.forEach((button) => {
    const isActive = button.dataset.detailTopic === activeDetailTopic;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-expanded", String(isActive));
  });

  detailPanels.forEach((panel) => {
    const isActive = panel.dataset.detailTopic === activeDetailTopic;
    panel.classList.toggle("is-active", isActive);
    panel.hidden = !isActive;
  });

  updateProjectFilter(activeDetailTopic);
  updateSectionVisibility(activeDetailTopic);
}

function injectCertificationLogos() {
  const logoByTitle = {
    datacamp: "https://cdn.simpleicons.org/datacamp/03EF62",
    udemy: "https://cdn.simpleicons.org/udemy/A435F0",
    alura: "https://www.alura.com.br/assets/img/home/alura-logo.svg"
  };
  const sizeByTitle = {
    alura: 21
  };

  document.querySelectorAll(".cert-group-title").forEach((title) => {
    if (title.querySelector(".cert-logo")) {
      return;
    }

    const normalized = title.textContent.trim().toLowerCase();
    const logo = logoByTitle[normalized];
    if (!logo) {
      return;
    }

    title.style.display = "flex";
    title.style.alignItems = "center";
    title.style.gap = "0.45rem";

    const img = document.createElement("img");
    img.className = "cert-logo";
    img.src = logo;
    img.alt = `${title.textContent.trim()} logo`;
    const iconSize = sizeByTitle[normalized] || 16;
    img.width = iconSize;
    img.height = iconSize;
    img.loading = "eager";
    img.decoding = "async";

    title.prepend(img);
  });
}

chipButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setActiveDetail(button.dataset.detailTopic);
  });
});

injectCertificationLogos();
const browserLanguage = navigator.language && navigator.language.toLowerCase().startsWith("pt") ? "pt" : "en";
const savedLanguage = localStorage.getItem("preferred-language");
applyLanguage(savedLanguage || browserLanguage);

document.getElementById("language-switch")?.addEventListener("change", (event) => {
  applyLanguage(event.target.value);
});
