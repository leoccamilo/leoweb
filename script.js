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
    chipPythonSql: "Python + SQL",
    chipApi: "FastAPI / Flask",
    chipPowerBi: "Power BI",
    chipAiDelivery: "AI-assisted delivery",
    chipPersonalProjects: "Personal Projects",

    detailsSectionTitle: "Technical Details by Focus Area",
    detailsHint:
      "Click a topic above to see focused showcases from that area.",
    detailRanTitle: "RAN Optimization",
    detailRanItem1:
      "Neighbor Viewer for 5G-5G and 4G-5G relation visualization in NSA/SA mobility scenarios.",
    detailRanItem2:
      "Relation review modes (existing, missing, to delete) to support neighbor planning decisions.",
    detailRanItem3:
      "Co-site and LTE-only map highlighting to identify mobility and coverage gaps.",
    detailRanItem4:
      "Map export routines for relation update files used in optimization handoffs.",

    detailPythonSqlTitle: "Python + SQL",
    detailPythonSqlItem1:
      "COPS database modeling updates and SQL tuning for larger KPI retention windows.",
    detailPythonSqlItem2:
      "E2E audit automation comparing NE parameter values across network elements.",
    detailPythonSqlItem3:
      "Batch routines for KPI extraction, pre/post analysis, and scheduled processing.",
    detailPythonSqlItem4:
      "Core/Border and overshooting support scripts for telecom analysis datasets.",

    detailApiTitle: "FastAPI / Flask",
    detailApiItem1:
      "MoB KML FastAPI backend with endpoints for upload, auto-mapping, filters, and exports.",
    detailApiItem2:
      "Neighbor Viewer API routes for relation queries, map layers, and export generation.",
    detailApiItem3:
      "Flask backend for Pescados with product, transaction, and sync APIs.",
    detailApiItem4:
      "CorretorOnline API flow for comparables search and valuation-oriented endpoints.",

    detailPowerBiTitle: "Power BI",
    detailPowerBiItem1:
      "Live Monitoring dashboards for major events such as The Town and Lollapalooza.",
    detailPowerBiItem2:
      "Shift-focused views for anomaly tracking and cluster behavior follow-up.",
    detailPowerBiItem3:
      "Data sources prepared by Python/SQL routines before BI consumption.",
    detailPowerBiItem4:
      "Operational dashboard layout optimized for critical event windows.",

    detailAiTitle: "AI-assisted delivery",
    detailAiItem1:
      "Cursor, Claude Code, and Codex used for code generation, refactoring, and review loops.",
    detailAiItem2:
      "MCP-based workflows to connect tools and reduce context switching.",
    detailAiItem3:
      "Prompt engineering practices documented and shared with telecom engineering teams.",
    detailAiItem4:
      "Strict no-mock validation rule for sensitive valuation workflows.",

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
    focusDomain4: "Tools and applications built for real operations",

    howBuildTitle: "How I Build",
    howBuildP1:
      "My first step is usually the same: find repetitive manual work and turn it into a reliable flow. AI helps me code and review faster, but the solution still needs clear rules and ownership.",
    howBuildP2:
      "If engineers do not use it during an actual shift, it is not finished.",

    trajectoryTitle: "Career Trajectory",
    role1Title: "Automation Lead · Amdocs",
    role1Date: "Dec/2024 - Present",
    role1Desc:
      "Leads automation initiatives across Brazil and works with teams in India and South America, linking technical choices to delivery planning and data platform updates.",
    role2Title: "Telecom Automation Tools Expert · Amdocs",
    role2Date: "Apr/2015 - Dec/2024",
    role2Desc:
      "Built and maintained tools for mobility automation, major-event monitoring, KPI pre/post analysis, SQL database restructuring, and end-to-end core audit routines.",
    role3Title: "Network Optimization Specialist · Oi / TIM / Nextel",
    role3Date: "2004 - 2015",
    role3Desc:
      "Worked on radio performance, parameter audits, and data consistency in production telecom environments.",

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
    certificationsIntro: "Selected certifications from LinkedIn with credential links.",
    cert1Title: "AI for Software Engineering",
    cert1Issuer: "DataCamp",
    cert2Title: "SQL Server Developer Track",
    cert2Issuer: "DataCamp",
    cert12Title: "Containerization and Virtualization with Docker and Kubernetes",
    cert12Issuer: "DataCamp",
    cert13Title: "Understanding Cloud Computing",
    cert13Issuer: "DataCamp",
    cert3Title: "Machine Learning Fundamentals with Python Track",
    cert3Issuer: "DataCamp",
    cert4Title: "Data Science for Everyone Track",
    cert4Issuer: "DataCamp",
    cert5Title: "Introduction to Power BI",
    cert5Issuer: "DataCamp",
    cert6Title: "Data Analyst with Python Track",
    cert6Issuer: "DataCamp",
    cert7Title: "Python Programmer Track",
    cert7Issuer: "DataCamp",
    cert8Title: "Python Programming Track",
    cert8Issuer: "DataCamp",
    cert9Title: "Reporting Services - SQL Reports with your database",
    cert9Issuer: "Udemy",
    cert10Title: "Business Intelligence SQL - ETL Integration Services 2016",
    cert10Issuer: "Udemy",
    cert11Title: "Database Expert: SQL language and Administration",
    cert11Issuer: "Udemy",
    issuerLabel: "Issuer:",
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

    problemLabel: "Problem:",
    solutionLabel: "Solution:",
    impactLabel: "Impact:",
    openRepo: "View repo",
    openMob: "View MoB repo",
    privateCase: "Case details on request",
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
    chipPythonSql: "Python + SQL",
    chipApi: "FastAPI / Flask",
    chipPowerBi: "Power BI",
    chipAiDelivery: "Entrega assistida por IA",
    chipPersonalProjects: "Projetos Pessoais",

    detailsSectionTitle: "Detalhes Técnicos por Área de Atuação",
    detailsHint:
      "Clique em um tópico acima para ver showcases focados daquela área.",
    detailRanTitle: "Otimização RAN",
    detailRanItem1:
      "Neighbor Viewer para visualização de relações 5G-5G e 4G-5G em cenários NSA/SA.",
    detailRanItem2:
      "Modos de revisão (existente, faltante, remover) para apoiar decisão de planejamento de vizinhança.",
    detailRanItem3:
      "Destaque de co-site e LTE-only no mapa para identificar lacunas de cobertura e mobilidade.",
    detailRanItem4:
      "Rotinas de exportação para arquivos de ajuste de relações usados no handoff de otimização.",

    detailPythonSqlTitle: "Python + SQL",
    detailPythonSqlItem1:
      "Evolução de modelagem no COPS e ajuste SQL para ampliar janelas de retenção de KPI.",
    detailPythonSqlItem2:
      "Automação de auditoria E2E comparando parâmetros entre elementos de rede.",
    detailPythonSqlItem3:
      "Rotinas em lote para extração de KPI, análise pré/pós e processamento agendado.",
    detailPythonSqlItem4:
      "Scripts de suporte a Core/Border e overshooting para bases de análise telecom.",

    detailApiTitle: "FastAPI / Flask",
    detailApiItem1:
      "Backend FastAPI do MoB KML com endpoints de upload, auto-mapeamento, filtros e exportação.",
    detailApiItem2:
      "Rotas de API do Neighbor Viewer para consulta de relações, camadas de mapa e geração de exportações.",
    detailApiItem3:
      "Backend Flask do Pescados com APIs de produto, transação e sincronização.",
    detailApiItem4:
      "Fluxo de API do CorretorOnline para busca de comparáveis e endpoints de suporte à avaliação.",

    detailPowerBiTitle: "Power BI",
    detailPowerBiItem1:
      "Dashboards de Live Monitoring para grandes eventos como The Town e Lollapalooza.",
    detailPowerBiItem2:
      "Visões de turno para acompanhamento de anomalias e comportamento de cluster.",
    detailPowerBiItem3:
      "Fontes preparadas por rotinas Python/SQL antes do consumo em BI.",
    detailPowerBiItem4:
      "Layout operacional de dashboard para decisão telecom em janela crítica.",

    detailAiTitle: "Entrega assistida por IA",
    detailAiItem1:
      "Uso de Cursor, Claude Code e Codex para geração de código, refatoração e ciclos de revisão.",
    detailAiItem2:
      "Fluxos com MCP para conectar ferramentas e reduzir troca de contexto.",
    detailAiItem3:
      "Práticas de engenharia de prompt documentadas e compartilhadas com equipes de engenharia de telecom.",
    detailAiItem4:
      "Regra rígida de não usar dados simulados em fluxos sensíveis de avaliação.",

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
    role1Title: "Automation Lead · Amdocs",
    role1Date: "Dez/2024 - Atual",
    role1Desc:
      "Lidera iniciativas de automação no Brasil e atua com times da Índia e da América do Sul, conectando escolha técnica com planejamento de entrega e evolução da plataforma de dados.",
    role2Title: "Telecom Automation Tools Expert · Amdocs",
    role2Date: "Abr/2015 - Dez/2024",
    role2Desc:
      "Construiu e manteve ferramentas para automação de mobilidade, monitoramento de grandes eventos, análise pré/pós KPI, reestruturação de banco SQL e rotinas de auditoria E2E de core.",
    role3Title: "Especialista em Otimização de Rede · Oi / TIM / Nextel",
    role3Date: "2004 - 2015",
    role3Desc:
      "Atuou em performance de rádio, auditoria de parâmetros e consistência de dados em ambiente de telecom de produção.",

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
    certificationsTitle: "Certifications",
    certificationsIntro: "Certificações selecionadas do LinkedIn com link da credencial.",
    cert1Title: "AI for Software Engineering",
    cert1Issuer: "DataCamp",
    cert2Title: "SQL Server Developer Track",
    cert2Issuer: "DataCamp",
    cert12Title: "Containerization and Virtualization with Docker and Kubernetes",
    cert12Issuer: "DataCamp",
    cert13Title: "Understanding Cloud Computing",
    cert13Issuer: "DataCamp",
    cert3Title: "Machine Learning Fundamentals with Python Track",
    cert3Issuer: "DataCamp",
    cert4Title: "Data Science for Everyone Track",
    cert4Issuer: "DataCamp",
    cert5Title: "Introduction to Power BI",
    cert5Issuer: "DataCamp",
    cert6Title: "Data Analyst with Python Track",
    cert6Issuer: "DataCamp",
    cert7Title: "Python Programmer Track",
    cert7Issuer: "DataCamp",
    cert8Title: "Python Programming Track",
    cert8Issuer: "DataCamp",
    cert9Title: "Reporting Services - SQL Reports with your database",
    cert9Issuer: "Udemy",
    cert10Title: "Business Intelligence SQL - ETL Integration Services 2016",
    cert10Issuer: "Udemy",
    cert11Title: "Database Expert: SQL language and Administration",
    cert11Issuer: "Udemy",
    issuerLabel: "Instituição:",
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

    problemLabel: "Problema:",
    solutionLabel: "Solução:",
    impactLabel: "Impacto:",
    openRepo: "Ver repositório",
    openMob: "Ver repositório MoB",
    privateCase: "Detalhes do caso sob solicitação",
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
let activeDetailTopic = null;

function updateProjectFilter(topic) {
  const currentTopic = topic || null;

  projectCards.forEach((card) => {
    const topics = (card.dataset.projectTopics || "")
      .split(",")
      .map((item) => item.trim())
      .filter(Boolean);

    card.hidden = currentTopic ? !topics.includes(currentTopic) : false;
  });
}

function updateSectionVisibility(topic) {
  const hideAllSecondarySections =
    topic === "personal-projects" ||
    topic === "powerbi" ||
    topic === "python-sql" ||
    topic === "api";

  const hideCoreNarrativeOnly = topic === "ai-delivery";

  sectionsHiddenInPersonalMode.forEach((section) => {
    const isKnowledgeSection = section.id === "knowledge-sharing-section";

    if (hideAllSecondarySections) {
      section.hidden = true;
      return;
    }

    if (hideCoreNarrativeOnly) {
      section.hidden = !isKnowledgeSection;
      return;
    }

    section.hidden = false;
  });
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

chipButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setActiveDetail(button.dataset.detailTopic);
  });
});

const browserLanguage = navigator.language && navigator.language.toLowerCase().startsWith("pt") ? "pt" : "en";
const savedLanguage = localStorage.getItem("preferred-language");
applyLanguage(savedLanguage || browserLanguage);

document.getElementById("language-switch")?.addEventListener("change", (event) => {
  applyLanguage(event.target.value);
});

function initAnalytics() {
  const cfg = window.PORTFOLIO_ANALYTICS || {};
  const goatcounterUrl = (cfg.goatcounterUrl || "").trim();
  const cloudflareToken = (cfg.cloudflareToken || "").trim();

  if (goatcounterUrl) {
    const goatScript = document.createElement("script");
    goatScript.async = true;
    goatScript.src = "//gc.zgo.at/count.js";
    goatScript.setAttribute("data-goatcounter", goatcounterUrl);
    document.head.appendChild(goatScript);
  }

  if (cloudflareToken) {
    const cfScript = document.createElement("script");
    cfScript.defer = true;
    cfScript.src = "https://static.cloudflareinsights.com/beacon.min.js";
    cfScript.setAttribute("data-cf-beacon", JSON.stringify({ token: cloudflareToken }));
    document.head.appendChild(cfScript);
  }
}

initAnalytics();
