
"use client";

import { useState } from "react";

const projects = [
  {
    number: "01",
    name: "UtopIA",
    nameEn: "UtopIA",
    subtitle: "Aprenda. Explore. Questione.",
    subtitleEn: "Learn. Explore. Question.",
    category: "Jogo educativo",
    categoryEn: "Educational game",
    year: "Projeto acadêmico",
    yearEn: "Academic project",
    color: "bg-[#b9dcf5]",
    description:
      "Um RPG educativo que explora os limites da inteligência artificial e incentiva o pensamento crítico diante de respostas geradas por IA. Une narrativa, exploração e desafios sobre o uso consciente da tecnologia.",
    descriptionEn:
      "An educational RPG that explores the limitations of artificial intelligence and encourages critical thinking about AI-generated answers. It combines storytelling, exploration, and challenges to promote responsible use of technology.",
    contribution:
      "Contribuí com a prototipação da experiência, estudos de Interação Humano-Computador, esboços e documentação. Também utilizei Jira e Trello para organizar atividades e acompanhar o projeto.",
    contributionEn:
      "I contributed to experience prototyping, Human-Computer Interaction studies, sketches, and project documentation. I also used Jira and Trello to organize tasks and track project progress.",
    technologies: ["C", "Haskell", "IHC", "Jira", "Trello"],
    technologiesEn: ["C", "Haskell", "HCI", "Jira", "Trello"],
    github: "",
  },
  {
    number: "02",
    name: "PIBIC IFPE",
    nameEn: "PIBIC IFPE",
    subtitle: "Gênero e Computação",
    subtitleEn: "Gender and Computing",
    category: "Iniciação científica",
    categoryEn: "Undergraduate research",
    year: "2023–2024",
    yearEn: "2023–2024",
    color: "bg-[#f9dce8]",
    description:
      "Pesquisa sobre a participação feminina na computação, com foco na trajetória da docência feminina nos cursos de informática do IFPE entre 2008 e 2023.",
    descriptionEn:
      "Research on women's participation in computing, focusing on the history of women educators in IFPE's computing courses from 2008 to 2023.",
    contribution:
      "Vivenciei etapas da pesquisa acadêmica e utilizei Excel e Power BI para apoiar a organização, a análise e a apresentação das informações.",
    contributionEn:
      "I gained experience in academic research and used Excel and Power BI to support the organization, analysis, and presentation of information.",
    technologies: ["Pesquisa acadêmica", "Excel", "Power BI"],
    technologiesEn: ["Academic research", "Excel", "Power BI"],
    github: "",
  },
  {
    number: "03",
    name: "FarolHUB",
    nameEn: "FarolHUB",
    subtitle: "Centralização de informações",
    subtitleEn: "Centralizing information",
    category: "Desenvolvimento web",
    categoryEn: "Web development",
    year: "2026",
    yearEn: "2026",
    color: "bg-[#ffda45]",
    description:
      "Sistema desenvolvido para centralizar informações e históricos de colaboradores, facilitando consultas e reduzindo a fragmentação de dados.",
    descriptionEn:
      "A system designed to centralize employee information and records, making information easier to find and reducing data fragmentation.",
    contribution:
      "Atuo no desenvolvimento front-end, contribuindo para a construção das interfaces e colaborando com a equipe do Laboratório do Porto Digital.",
    contributionEn:
      "I contribute to front-end development and interface building, collaborating with the Porto Digital Laboratory team.",
    technologies: ["React", "Tailwind CSS"],
    technologiesEn: ["React", "Tailwind CSS"],
    github: "",
  },
  {
    number: "04",
    name: "SegDoc",
    nameEn: "SegDoc",
    subtitle: "Gestão de documentos operacionais",
    subtitleEn: "Operational document management",
    category: "Projeto profissional",
    categoryEn: "Professional project",
    year: "Em evolução",
    yearEn: "Ongoing development",
    color: "bg-[#f3a6c7]",
    description:
      "Aplicação web para digitalizar e organizar processos operacionais, com interfaces responsivas, autenticação, permissões, persistência de dados, integrações e geração de PDFs.",
    descriptionEn:
      "A web application for digitizing and organizing operational processes, featuring responsive interfaces, authentication, permissions, data persistence, integrations, and PDF generation.",
    contribution:
      "Participei do desenvolvimento e continuo realizando melhorias e ajustes, ampliando meus conhecimentos em desenvolvimento web, bancos de dados e integrações entre serviços.",
    contributionEn:
      "I contributed to the development and continue to implement improvements, expanding my knowledge of web development, databases, and service integrations.",
    technologies: [
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "PostgreSQL",
      "Supabase",
      "Microsoft Graph API",
      "SharePoint",
      "Asana API",
      "jsPDF",
    ],
    technologiesEn: [
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "PostgreSQL",
      "Supabase",
      "Microsoft Graph API",
      "SharePoint",
      "Asana API",
      "jsPDF",
    ],
    github: "",
  },
  {
    number: "05",
    name: "Sistema de Denúncias",
    nameEn: "Reporting System",
    subtitle: "Mercado Livre",
    subtitleEn: "Mercado Livre",
    category: "Projeto profissional",
    categoryEn: "Professional project",
    year: "Em desenvolvimento",
    yearEn: "In development",
    color: "bg-[#b9dcf5]",
    description:
      "Projeto web em desenvolvimento com foco em automação e integração de dados, envolvendo interfaces, funcionalidades, gerenciamento de informações e testes.",
    descriptionEn:
      "A web project in development focused on automation and data integration, involving interfaces, features, information management, and testing.",
    contribution:
      "Trabalho na implementação de funcionalidades e integrações, desenvolvendo habilidades em aplicações web, bancos de dados, qualidade de software e testes automatizados.",
    contributionEn:
      "I work on implementing features and integrations while developing my skills in web applications, databases, software quality, and automated testing.",
    technologies: [
      "TypeScript",
      "Next.js",
      "React",
      "PostgreSQL",
      "Supabase",
      "Prisma",
      "SQL",
    ],
    technologiesEn: [
      "TypeScript",
      "Next.js",
      "React",
      "PostgreSQL",
      "Supabase",
      "Prisma",
      "SQL",
    ],
    github: "",
  },
];

const experiences = [
  {
    number: "01",
    title: "Monitoria de Projetos",
    titleEn: "Project Mentoring",
    organization: "CESAR School",
    organizationEn: "CESAR School",
    period: "2026.2 — atual",
    periodEn: "2026.2 — present",
    description:
      "Acompanho uma squad, apoiando a organização das entregas, a definição dos próximos passos e o desenvolvimento colaborativo do projeto.",
    descriptionEn:
      "I mentor a project squad, supporting deliverable organization, next-step planning, and collaborative project development.",
    tags: ["Comunicação", "Organização", "Gestão de projetos"],
    tagsEn: ["Communication", "Organization", "Project management"],
  },
  {
    number: "02",
    title: "Monitora do Laboratório",
    titleEn: "Laboratory Monitor",
    organization: "Porto Digital",
    organizationEn: "Porto Digital",
    period: "2026.2 — atual",
    periodEn: "2026.2 — present",
    description:
      "Apoio estudantes e atividades do laboratório, colaboro com a organização de eventos e participo do desenvolvimento do FarolHUB.",
    descriptionEn:
      "I support students and laboratory activities, help organize events, and contribute to the development of FarolHUB.",
    tags: ["Colaboração", "Autonomia", "Desenvolvimento"],
    tagsEn: ["Collaboration", "Autonomy", "Development"],
  },
  {
    number: "03",
    title: "Voluntária",
    titleEn: "Volunteer",
    organization: "CESAR Beat",
    organizationEn: "CESAR Beat",
    period: "Junho de 2026",
    periodEn: "June 2026",
    description:
      "Colaborei com a organização e a logística de um evento ligado à tecnologia e à inovação.",
    descriptionEn:
      "I contributed to the organization and logistics of an event focused on technology and innovation.",
    tags: ["Trabalho em equipe", "Organização"],
    tagsEn: ["Teamwork", "Organization"],
  },
  {
    number: "04",
    title: "Kick Off Alumiar",
    titleEn: "Kick Off Alumiar",
    organization: "Top 10 · Demo Day",
    organizationEn: "Top 10 · Demo Day",
    period: "Junho de 2026",
    periodEn: "June 2026",
    description:
      "Minha equipe ficou entre as dez selecionadas entre aproximadamente cinquenta squads e apresentou sua solução no Demo Day.",
    descriptionEn:
      "My team ranked among the top ten out of approximately fifty squads and presented our solution at Demo Day.",
    tags: ["Comunicação", "Ideação", "Apresentação"],
    tagsEn: ["Communication", "Ideation", "Presentations"],
  },
  {
    number: "05",
    title: "Estagiária de Desenvolvimento",
    titleEn: "Software Development Intern",
    organization: "Experiência profissional",
    organizationEn: "Professional experience",
    period: "2026.2 — atual",
    periodEn: "2026.2 — present",
    description:
      "Atuação com desenvolvimento e manutenção de sistemas, automação de processos, manipulação de dados, testes de funcionalidades e integrações e documentação técnica.",
    descriptionEn:
      "Work involving system development and maintenance, process automation, data handling, functionality and integration testing, and technical documentation.",
    tags: ["Desenvolvimento", "Automação", "Dados", "Testes"],
    tagsEn: ["Development", "Automation", "Data", "Testing"],
  },
];

const gmailComposeUrl =
  "https://mail.google.com/mail/?view=cm&fs=1&to=brendafppaiva%40gmail.com";

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-12 grid gap-5 md:grid-cols-[1fr_0.7fr] md:items-end">
      <div>
        <p className="eyebrow mb-5">{eyebrow}</p>
        <h2 className="section-title">{title}</h2>
      </div>

      {description && (
        <p className="max-w-md text-sm leading-7 text-muted md:justify-self-end">
          {description}
        </p>
      )}
    </div>
  );
}

export default function Home() {
  const [language, setLanguage] = useState<"pt" | "en">("pt");
  const [expandedProjects, setExpandedProjects] = useState<string[]>([]);

  const isEnglish = language === "en";

  function toggleProject(number: string) {
    setExpandedProjects((current) =>
      current.includes(number)
        ? current.filter((item) => item !== number)
        : [...current, number],
    );
  }

  const copy = isEnglish
    ? {
        nav: ["About", "Education", "Projects", "Experience", "Contact"],
        role: "Systems Analysis and Development student at CESAR School.",
        intro:
          "I am building my path in technology through projects, academic research, and collaborative experiences. I enjoy learning by doing and exploring how technology, creativity, and people connect.",
        journey: "My journey",
        aboutEyebrow: "A little about me",
        aboutTitle: "Technology, from different perspectives.",
        aboutText:
          "My journey in technology began with a technical education in Systems Development at IFPE and continues at CESAR School, where I explore different ways to learn and build. Through software development, academic research, mentoring, and collaborative projects, I have discovered that my interests go beyond writing code: I enjoy understanding the context behind a problem, organizing ideas, connecting people, and turning possibilities into solutions. This intersection of technology, communication, and learning is where I want to keep growing.",
        educationEyebrow: "Where it started",
        educationTitle: "Education",
        projectsEyebrow: "Things I have been building",
        projectsTitle: "Projects",
        projectsDescription:
          "Academic and professional projects that reflect different stages of my education, practical experiences, and interests.",
        experienceEyebrow: "Beyond the code",
        experienceTitle: "Experiences & participation",
        experienceDescription:
          "Experiences that broaden my education through collaboration, knowledge sharing, and participation in technology and innovation initiatives.",
        interestsEyebrow: "Looking ahead",
        interestsTitle: "What moves me.",
        contactEyebrow: "Say hello",
        openDetails: "Explore project",
        closeDetails: "Close details",
        contribution: "My contribution",
        technologies: "Tools & technologies",
        footer: "Designed and developed with curiosity.",
        scroll: "Scroll to explore",
        profilePhoto: "Your profile photo",
        build: "Build",
        research: "Research",
        collaborate: "Collaborate",
        learn: "Learn",
        whatInterests: "What interests me",
        whatToBuild: "What I want to build",
        interestTitle: "Where technology meets people.",
        interestText:
          "I am interested in paths that connect software development, research, education, communication, and project management. I enjoy understanding problems, exploring possibilities, and building meaningful solutions with others.",
        futureTitle: "Learning that keeps moving.",
        futureText:
          "I want to deepen my technical knowledge, take on more challenging projects, explore different areas of technology, continue academic research, and eventually teach and share knowledge.",
        contactTitle: "Have a good idea?",
        contactSecondLine: "Let's talk.",
        email: "Send me an email",
        phone: "Phone",
        backToTop: "Back to top",
        photoLabel: "Photo",
      }
    : {
        nav: ["Sobre", "Formação", "Projetos", "Experiências", "Contato"],
        role: "Estudante de Análise e Desenvolvimento de Sistemas na CESAR School.",
        intro:
          "Tenho construído minha trajetória em tecnologia por meio de projetos, pesquisa acadêmica e experiências colaborativas. Gosto de aprender na prática, explorar diferentes áreas e participar de iniciativas que conectam tecnologia, criatividade e pessoas.",
        journey: "Minha trajetória",
        aboutEyebrow: "Um pouco sobre mim",
        aboutTitle: "Tecnologia por diferentes perspectivas.",
        aboutText:
          "Minha trajetória na tecnologia começou com a formação técnica em Desenvolvimento de Sistemas no IFPE e continua na CESAR School, onde tenho explorado diferentes formas de aprender e construir. Entre desenvolvimento de software, pesquisa acadêmica, monitoria e projetos colaborativos, fui descobrindo que meu interesse vai além de escrever código: gosto de entender o contexto de um problema, organizar ideias, conectar pessoas e transformar possibilidades em soluções. É nessa interseção entre tecnologia, comunicação e aprendizado que quero continuar crescendo.",
        educationEyebrow: "Onde tudo começou",
        educationTitle: "Formação",
        projectsEyebrow: "Coisas que venho construindo",
        projectsTitle: "Projetos",
        projectsDescription:
          "Projetos acadêmicos e profissionais que representam diferentes etapas da minha formação, experiências práticas e áreas de interesse.",
        experienceEyebrow: "Além do código",
        experienceTitle: "Experiências e participação",
        experienceDescription:
          "Experiências que ampliam minha formação por meio da colaboração, do compartilhamento de conhecimento e da participação em iniciativas de tecnologia e inovação.",
        interestsEyebrow: "O que vem pela frente",
        interestsTitle: "O que me move.",
        contactEyebrow: "Vamos conversar",
        openDetails: "Explorar projeto",
        closeDetails: "Fechar detalhes",
        contribution: "Minha contribuição",
        technologies: "Ferramentas e tecnologias",
        footer: "Feito com curiosidade.",
        scroll: "Role para explorar",
        profilePhoto: "Sua foto de perfil",
        build: "Construir",
        research: "Pesquisar",
        collaborate: "Colaborar",
        learn: "Aprender",
        whatInterests: "O que me interessa",
        whatToBuild: "O que quero construir",
        interestTitle: "Onde a tecnologia encontra as pessoas.",
        interestText:
          "Tenho interesse em caminhos que conectam desenvolvimento de software, pesquisa, educação, comunicação e gestão de projetos. Gosto de entender problemas, explorar possibilidades e construir soluções relevantes em colaboração.",
        futureTitle: "Uma trajetória que continua crescendo.",
        futureText:
          "Quero aprofundar meus conhecimentos técnicos, participar de projetos mais desafiadores, explorar diferentes áreas da tecnologia, continuar pesquisando e, futuramente, ensinar e compartilhar conhecimento.",
        contactTitle: "Tem uma boa ideia?",
        contactSecondLine: "Vamos conversar.",
        email: "Me envie um e-mail",
        phone: "Telefone",
        backToTop: "Voltar ao topo",
        photoLabel: "Foto",
      };

  const navTargets = [
    "#sobre",
    "#formacao",
    "#projetos",
    "#experiencias",
    "#contato",
  ];

  return (
    <main>
      {/* CABEÇALHO */}
      <header className="sticky top-0 z-50 bg-[#faf9f6]/90 backdrop-blur-xl">
        <div className="page-shell flex min-h-[76px] items-center justify-between gap-5">
          <a
            href="#inicio"
            className="shrink-0 text-lg font-bold tracking-[-0.08em]"
            aria-label="Brenda Paiva — início"
          >
            BP<span className="text-[#d45a8c]">.</span>
          </a>

          <nav
            className="hidden items-center gap-7 md:flex"
            aria-label={isEnglish ? "Main navigation" : "Navegação principal"}
          >
            {copy.nav.map((label, index) => (
              <a
                key={label}
                href={navTargets[index]}
                className="text-xs font-medium text-muted transition-colors duration-200 hover:text-[#d45a8c]"
              >
                {label}
              </a>
            ))}
          </nav>

          <button
            type="button"
            onClick={() => setLanguage(isEnglish ? "pt" : "en")}
            className="rounded-full bg-[#fffefa] px-4 py-2 text-[11px] font-bold transition-colors duration-200 hover:bg-[#ffda45]"
            aria-label={
              isEnglish ? "Switch to Portuguese" : "Switch to English"
            }
          >
            {isEnglish ? "EN / PT" : "PT / EN"}
          </button>
        </div>

        <nav
          className="page-shell flex gap-6 overflow-x-auto pb-3 md:hidden"
          aria-label={isEnglish ? "Mobile navigation" : "Navegação móvel"}
        >
          {copy.nav.map((label, index) => (
            <a
              key={label}
              href={navTargets[index]}
              className="shrink-0 text-xs font-medium text-muted transition-colors hover:text-[#d45a8c]"
            >
              {label}
            </a>
          ))}
        </nav>
      </header>

      {/* HERO */}
      
    {/* HERO */}
        {/* HERO */}
        {/* HERO */}
    <section
      id="inicio"
      className="page-shell overflow-hidden pb-20 pt-14 md:pb-28 md:pt-20"
    >
      <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
        {/* APRESENTAÇÃO */}
        <div className="relative z-10">
          <div className="mb-8 flex items-center gap-3">
            <span className="h-[2px] w-8 bg-[#d45a8c]" />
            <p className="eyebrow">
              {isEnglish ? "Portfolio" : "Portfólio"}
            </p>
          </div>

          <h1 className="text-[clamp(4.3rem,9.2vw,8.4rem)] font-semibold leading-[0.8] tracking-[-0.095em]">
            Brenda
            <br />
            <span className="relative inline-block pb-2">
              Paiva
              <span className="absolute -right-5 top-0 -z-10 h-5 w-5 rounded-full bg-[#ffda45] md:-right-7 md:top-1 md:h-8 md:w-8" />
            </span>
            <span className="text-[#d45a8c]">.</span>
          </h1>

          <p className="mt-9 max-w-md text-lg leading-8 md:text-xl">
            {copy.role}
          </p>

          <p className="mt-4 max-w-md text-sm leading-7 text-muted md:text-base">
            {copy.intro}
          </p>

          {/* ÁREAS DE INTERESSE */}
          <div className="mt-7 flex max-w-lg flex-wrap gap-2">
            {[
              isEnglish
                ? "Software development"
                : "Desenvolvimento de software",
              isEnglish ? "Research" : "Pesquisa",
              isEnglish ? "Project management" : "Gestão de projetos",
              isEnglish ? "Education" : "Educação",
            ].map((tag) => (
              <span
                key={tag}
                className="pill transition-colors duration-200 hover:border-[#d45a8c]/50 hover:bg-[#f3a6c7]/15"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* FOTO EM DESTAQUE */}
        <div className="relative mx-auto w-full max-w-[480px] lg:ml-auto lg:mr-2">
          {/* Forma gráfica de fundo */}
          <div
            aria-hidden="true"
            className="absolute -right-3 top-7 h-[75%] w-[78%] translate-x-1 translate-y-1 bg-[#b9dcf5] md:-right-5 md:top-9"
          />

          {/* Contorno decorativo */}
          <div
            aria-hidden="true"
            className="absolute -bottom-3 -left-3 h-[72%] w-[72%] border border-[#d45a8c]/60 md:-bottom-4 md:-left-4"
          />

          {/* Identificação da imagem */}
          <div className="absolute -left-2 top-7 z-20 flex -translate-x-1/2 items-center gap-2 bg-[#faf9f6] px-3 py-2 shadow-sm md:-left-4">
            <span className="h-2 w-2 rounded-full bg-[#d45a8c]" />
            <span className="text-[9px] font-bold uppercase tracking-[0.14em]">
              {isEnglish ? "A little about me" : "Um pouco sobre mim"}
            </span>
          </div>

          {/* Moldura principal */}
          <div className="relative z-10 p-2">
            <div
              className="image-placeholder aspect-[4/5] w-full overflow-hidden border border-[#20232b]/10"
              role="img"
              aria-label={copy.profilePhoto}
            >
              <span>{copy.profilePhoto}</span>
            </div>
          </div>

          {/* Selo amarelo */}
          <div className="absolute -right-1 top-0 z-20 flex h-[100px] w-[100px] rotate-[8deg] items-center justify-center rounded-full bg-[#ffda45] p-3 text-center text-[10px] font-bold uppercase leading-4 md:-right-2 md:-top-1 md:h-[108px] md:w-[108px]">
            {isEnglish ? (
              <>
                Curious
                <br />
                by nature
                <br />
                ✳
              </>
            ) : (
              <>
                Curiosa
                <br />
                por natureza
                <br />
                ✳
              </>
            )}
          </div>

          {/* Frase sobre a fotografia */}
          <div className="absolute -bottom-5 -left-1 z-20 max-w-[245px] -rotate-2 bg-[#f3a6c7] px-4 py-3 shadow-sm md:-left-5 md:bottom-5">
            <p className="text-xs font-bold leading-5 md:text-sm">
              {isEnglish
                ? "Technology is built by people."
                : "Tecnologia feita por pessoas."}
            </p>
          </div>

          {/* Detalhe gráfico */}
          <div
            aria-hidden="true"
            className="absolute -bottom-7 right-5 z-20 grid grid-cols-3 gap-1.5"
          >
            {Array.from({ length: 9 }).map((_, index) => (
              <span
                key={index}
                className={`h-1.5 w-1.5 rounded-full ${
                  index === 4 || index === 8
                    ? "bg-[#d45a8c]"
                    : "bg-[#20232b]/20"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* RODAPÉ DA HERO */}
      <div className="mt-24 flex items-center justify-between pt-5 text-[10px] font-bold uppercase tracking-[0.12em] text-muted md:mt-28">
        <span>
          {isEnglish ? "Recife, Brazil" : "Recife, PE · Brasil"}
        </span>

        <a
          href="#sobre"
          className="group flex items-center gap-2 transition-colors hover:text-[#d45a8c]"
        >
          {copy.scroll}
          <span className="inline-block transition-transform duration-200 group-hover:translate-y-1">
            ↓
          </span>
        </a>
      </div>
    </section>

      {/* SOBRE */}
      <section id="sobre" className="section relative overflow-hidden">
        <div className="page-shell">
          <div className="mb-10 flex items-center justify-between gap-4">
            <p className="eyebrow">{copy.aboutEyebrow}</p>

            <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-muted">
              {isEnglish ? "01 / ABOUT ME" : "01 / SOBRE MIM"}
            </span>
          </div>

          <div className="grid items-start gap-12 md:grid-cols-[1.15fr_0.85fr] md:gap-16">
            <div>
              <h2 className="max-w-3xl text-4xl font-semibold leading-[1.08] tracking-[-0.06em] md:text-6xl lg:text-7xl">
                {copy.aboutTitle}
                <span className="text-[#d45a8c]">.</span>
              </h2>

              <div className="mt-8 flex items-start gap-4">
                <div className="mt-1 h-12 w-1 shrink-0 rounded-full bg-[#f0ca55]" />

                <p className="max-w-xl text-base leading-8 text-muted md:text-lg">
                  {copy.aboutText}
                </p>
              </div>
            </div>

            {/* Computador ilustrado */}
            <div className="relative mx-auto w-full max-w-md pt-8 md:pt-12">
              <div
                aria-hidden="true"
                className="absolute right-5 top-5 h-28 w-28 rounded-full bg-[#f9dce8] md:right-8 md:top-8 md:h-36 md:w-36"
              />

              <div
                aria-hidden="true"
                className="absolute bottom-12 left-0 h-20 w-20 rotate-[-12deg] bg-[#f0ca55]"
              />

              <div className="relative z-10 ml-5 border-2 border-[#20232b] bg-[#faf9f6] shadow-[7px_7px_0px_#20232b] transition-transform duration-300 hover:-translate-y-1 hover:rotate-1 sm:ml-8">
                <div className="flex items-center justify-between bg-[#b9dcf5] px-4 py-3">
                  <div className="flex gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full border border-[#20232b] bg-[#f9dce8]" />
                    <span className="h-2.5 w-2.5 rounded-full border border-[#20232b] bg-[#f0ca55]" />
                    <span className="h-2.5 w-2.5 rounded-full border border-[#20232b] bg-[#79b99b]" />
                  </div>

                  <span className="text-[10px] font-bold tracking-wide">
                    brenda.exe
                  </span>

                  <span className="text-xs font-bold">↗</span>
                </div>

                <div className="p-5 sm:p-7">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-muted">
                      {isEnglish ? "Currently loading..." : "Carregando..."}
                    </span>

                    <span className="text-lg text-[#d45a8c]">✳</span>
                  </div>

                  <div className="my-7 py-4">
                    <p className="text-3xl font-semibold leading-none tracking-[-0.06em] sm:text-4xl">
                      {isEnglish ? "Ideas into" : "Ideias em"}
                    </p>

                    <p className="mt-2 text-3xl font-semibold leading-none tracking-[-0.06em] text-[#d45a8c] sm:text-4xl">
                      {isEnglish ? "experiences." : "experiências."}
                    </p>
                  </div>

                  <div className="flex items-end justify-between gap-4">
                    <p className="max-w-[190px] text-xs leading-5 text-muted">
                      {isEnglish
                        ? "A little creativity, a lot of curiosity, and technology with purpose."
                        : "Um pouco de criatividade, muita curiosidade e tecnologia com propósito."}
                    </p>

                    <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-[#f9dce8] text-2xl">
                      :)
                    </div>
                  </div>
                </div>

                <div className="flex h-3 items-center justify-center bg-[#e8e5df]">
                  <div className="h-1 w-12 rounded-full bg-[#20232b]/25" />
                </div>
              </div>

              <div className="absolute -right-1 top-0 z-20 rotate-6 bg-[#f0ca55] px-4 py-3 shadow-[3px_3px_0px_#20232b] sm:-right-2">
                <p className="text-[10px] font-black uppercase tracking-wider">
                  {isEnglish ? "Made of ideas" : "Feita de ideias"}
                </p>

                <p className="mt-1 text-xs">✳ + ♡ + code</p>
              </div>

              <p className="relative z-10 mt-7 text-right text-[10px] font-bold uppercase tracking-[0.16em] text-muted">
                {isEnglish
                  ? "A work in progress — always."
                  : "Em constante construção."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FORMAÇÃO */}
      <section id="formacao" className="section">
        <div className="page-shell">
          <SectionHeading
            eyebrow={copy.educationEyebrow}
            title={copy.educationTitle}
          />

          <div className="grid gap-5 md:grid-cols-2">
            <article className="group bg-[#fffefa] p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[8px_8px_0px_#20232b12] md:p-9">
              <div className="flex items-start justify-between gap-4">
                <span className="pill">2026.1 — 2028.2</span>
                <span className="text-2xl transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                  ↗
                </span>
              </div>

              <h3 className="mt-10 text-2xl font-semibold tracking-tight">
                CESAR School
              </h3>

              <p className="mt-2 text-sm font-medium">
                {isEnglish
                  ? "Systems Analysis and Development"
                  : "Análise e Desenvolvimento de Sistemas"}
              </p>

              <p className="mt-5 text-sm leading-7 text-muted">
                {isEnglish
                  ? "Education focused on software development, problem-solving, and technology solutions. Practical projects and collaboration help me expand my technical knowledge and understand how products and systems are built."
                  : "Formação voltada ao desenvolvimento de software, à resolução de problemas e à criação de soluções tecnológicas. Projetos práticos e colaboração ampliam meu conhecimento técnico e minha compreensão sobre o desenvolvimento de produtos e sistemas."}
              </p>
            </article>

            <article className="group bg-[#b9dcf5] p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[8px_8px_0px_#20232b12] md:p-9">
              <div className="flex items-start justify-between gap-4">
                <span className="pill">2023 — 2025</span>
                <span className="text-2xl transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                  ↗
                </span>
              </div>

              <h3 className="mt-10 text-2xl font-semibold tracking-tight">
                IFPE
              </h3>

              <p className="mt-2 text-sm font-medium">
                {isEnglish
                  ? "Integrated Technical High School in Systems Development"
                  : "Técnico Integrado em Desenvolvimento de Sistemas"}
              </p>

              <p className="mt-5 text-sm leading-7">
                {isEnglish
                  ? "Instituto Federal de Pernambuco — Jaboatão dos Guararapes Campus. Technical and secondary education with experience in systems development, academic projects, and scientific research."
                  : "Instituto Federal de Pernambuco — Campus Jaboatão dos Guararapes. Formação técnica integrada ao ensino médio, com experiências em desenvolvimento de sistemas, projetos acadêmicos e pesquisa científica."}
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* PROJETOS */}
      <section id="projetos" className="section">
        <div className="page-shell">
          <SectionHeading
            eyebrow={copy.projectsEyebrow}
            title={copy.projectsTitle}
            description={copy.projectsDescription}
          />

          <div className="grid items-start gap-5 md:grid-cols-2">
            {projects.map((project) => {
              const isExpanded = expandedProjects.includes(project.number);

              return (
                <article
                  key={project.number}
                  className="group overflow-hidden rounded-sm bg-[#fffefa] transition-all duration-300 hover:-translate-y-1 hover:shadow-[8px_8px_0px_#20232b12]"
                >
                  <div
                    className={`relative flex min-h-[340px] flex-col justify-between overflow-hidden p-6 transition-colors duration-300 md:min-h-[390px] md:p-8 ${project.color}`}
                  >
                    <div className="pointer-events-none absolute -right-8 -top-12 select-none text-[150px] font-black leading-none tracking-[-0.12em] text-[#20232b]/[0.07] transition-transform duration-500 group-hover:scale-110 md:text-[190px]">
                      {project.number}
                    </div>

                    <div className="relative z-10 flex items-start justify-between gap-3">
                      <span className="text-xs font-bold">
                        {project.number} / 05
                      </span>

                      <span className="max-w-[65%] px-3 py-2 text-right text-[10px] font-bold uppercase tracking-wide">
                        {isEnglish ? project.categoryEn : project.category}
                      </span>
                    </div>

                    <div className="relative z-10 py-8">
                      <p className="mb-3 text-xs font-medium">
                        {isEnglish ? project.yearEn : project.year}
                      </p>

                      <h3 className="max-w-full break-words text-4xl font-bold leading-[0.95] tracking-[-0.07em] sm:text-5xl md:text-6xl">
                        {isEnglish ? project.nameEn : project.name}
                        <span className="text-[#d45a8c]">.</span>
                      </h3>

                      <p className="mt-4 max-w-sm text-sm leading-6">
                        {isEnglish ? project.subtitleEn : project.subtitle}
                      </p>

                      <p className="mt-4 max-w-md text-sm leading-6 text-[#20232b]/80">
                        {isEnglish
                          ? project.descriptionEn
                          : project.description}
                      </p>
                    </div>

                    <div className="relative z-10 flex flex-wrap gap-2">
                      {(isEnglish
                        ? project.technologiesEn
                        : project.technologies
                      )
                        .slice(0, 3)
                        .map((technology) => (
                          <span
                            className="bg-[#faf9f6]/60 px-3 py-2 text-[10px] font-bold backdrop-blur-sm"
                            key={technology}
                          >
                            {technology}
                          </span>
                        ))}

                      {project.technologies.length > 3 && (
                        <span className="bg-[#faf9f6]/60 px-3 py-2 text-[10px] font-bold backdrop-blur-sm">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>
                  </div>

                  <button
                    type="button"
                    aria-expanded={isExpanded}
                    aria-controls={`project-details-${project.number}`}
                    onClick={() => toggleProject(project.number)}
                    className="group/button flex w-full items-center justify-between px-6 py-5 text-left text-xs font-bold transition-colors duration-300 hover:bg-[#20232b] hover:text-[#faf9f6] md:px-8"
                  >
                    <span>
                      {isExpanded ? copy.closeDetails : copy.openDetails}
                    </span>

                    <span className="flex h-8 w-8 items-center justify-center rounded-full border border-current text-xl transition-transform duration-300 group-hover/button:rotate-90">
                      {isExpanded ? "−" : "+"}
                    </span>
                  </button>

                  {isExpanded && (
                    <div
                      id={`project-details-${project.number}`}
                      className="bg-[#faf9f6] p-6 md:p-8"
                    >
                      <div className="grid gap-7">
                        <div>
                          <h4 className="text-xs font-bold uppercase tracking-wider">
                            {isEnglish ? "About the project" : "Sobre o projeto"}
                          </h4>
                          <p className="mt-3 text-sm leading-7 text-muted">
                            {isEnglish
                              ? project.descriptionEn
                              : project.description}
                          </p>
                        </div>

                        <div>
                          <h4 className="text-xs font-bold uppercase tracking-wider">
                            {copy.contribution}
                          </h4>
                          <p className="mt-3 text-sm leading-7 text-muted">
                            {isEnglish
                              ? project.contributionEn
                              : project.contribution}
                          </p>
                        </div>

                        <div>
                          <h4 className="text-xs font-bold uppercase tracking-wider">
                            {copy.technologies}
                          </h4>

                          <div className="mt-3 flex flex-wrap gap-2">
                            {(isEnglish
                              ? project.technologiesEn
                              : project.technologies
                            ).map((technology) => (
                              <span className="pill" key={technology}>
                                {technology}
                              </span>
                            ))}
                          </div>
                        </div>

                        {project.github && (
                          <a
                            className="arrow-link"
                            href={project.github}
                            target="_blank"
                            rel="noreferrer"
                          >
                            GitHub <span>↗</span>
                          </a>
                        )}
                      </div>
                    </div>
                  )}
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* EXPERIÊNCIAS */}
      <section
        id="experiencias"
        className="section overflow-hidden bg-[#b9dcf5]"
      >
        <div className="page-shell">
          <SectionHeading
            eyebrow={copy.experienceEyebrow}
            title={copy.experienceTitle}
            description={copy.experienceDescription}
          />

          <div className="space-y-3">
            {experiences.map((experience) => (
              <article
                key={experience.number}
                className="group rounded-sm px-4 py-7 transition-colors duration-300 hover:bg-[#faf9f6]/35 md:px-6 md:py-9"
              >
                <div className="grid gap-5 md:grid-cols-[52px_minmax(0,0.85fr)_minmax(0,1.15fr)] md:gap-8">
                  <div className="flex items-center justify-between md:block">
                    <span className="text-sm font-bold tracking-tight text-[#20232b]/45 transition-colors duration-300 group-hover:text-[#d45a8c]">
                      / {experience.number}
                    </span>

                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#20232b]/60 md:hidden">
                      {isEnglish ? experience.periodEn : experience.period}
                    </span>
                  </div>

                  <div className="flex flex-col items-start">
                    <p className="mb-3 hidden text-[10px] font-bold uppercase tracking-[0.14em] text-[#20232b]/55 md:block">
                      {isEnglish ? experience.periodEn : experience.period}
                    </p>

                    <h3 className="max-w-sm text-xl font-semibold leading-tight tracking-[-0.045em] transition-transform duration-300 group-hover:translate-x-1 md:text-2xl">
                      {isEnglish ? experience.titleEn : experience.title}
                      <span className="text-[#d45a8c]">.</span>
                    </h3>

                    <p className="mt-2 text-sm text-[#20232b]/65">
                      {isEnglish
                        ? experience.organizationEn
                        : experience.organization}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {(isEnglish ? experience.tagsEn : experience.tags).map(
                        (tag) => (
                          <span
                            key={tag}
                            className="bg-[#faf9f6]/55 px-3 py-2 text-[10px] font-medium transition-colors duration-300 group-hover:bg-[#fffefa]"
                          >
                            {tag}
                          </span>
                        ),
                      )}
                    </div>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-[minmax(120px,0.72fr)_minmax(0,1.28fr)] sm:items-start md:gap-6">
                    <div className="relative aspect-[4/3] overflow-hidden bg-[#faf9f6]/55">
                      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-4 text-center text-[#20232b]/45 transition-colors duration-300 group-hover:bg-[#faf9f6]/80">
                        <svg
                          viewBox="0 0 24 24"
                          width="28"
                          height="28"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.3"
                          aria-hidden="true"
                        >
                          <rect
                            x="3"
                            y="3"
                            width="18"
                            height="18"
                            rx="2"
                          />
                          <circle cx="8.5" cy="8.5" r="1.5" />
                          <path d="m21 15-5-5L5 21" />
                        </svg>

                        <span className="text-[10px] font-medium uppercase tracking-wider">
                          {isEnglish ? "Add photo" : "Adicionar foto"}
                        </span>
                      </div>
                    </div>

                    <div>
                      <p className="text-sm leading-7 text-[#20232b]/80">
                        {isEnglish
                          ? experience.descriptionEn
                          : experience.description}
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* INTERESSES */}
      <section id="interesses" className="section">
        <div className="page-shell">
          <SectionHeading
            eyebrow={copy.interestsEyebrow}
            title={copy.interestsTitle}
          />

          <div className="grid gap-4 md:grid-cols-2">
            <article className="group bg-[#ffda45] p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[8px_8px_0px_#20232b12] md:p-10">
              <p className="text-xs font-bold uppercase tracking-wider">
                01 / {copy.whatInterests}
              </p>

              <h3 className="mt-10 max-w-sm text-3xl font-semibold leading-tight tracking-[-0.06em]">
                {copy.interestTitle}
              </h3>

              <p className="mt-5 max-w-md text-sm leading-7">
                {copy.interestText}
              </p>
            </article>

            <article className="group bg-[#f9dce8] p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[8px_8px_0px_#20232b12] md:p-10">
              <p className="text-xs font-bold uppercase tracking-wider">
                02 / {copy.whatToBuild}
              </p>

              <h3 className="mt-10 max-w-sm text-3xl font-semibold leading-tight tracking-[-0.06em]">
                {copy.futureTitle}
              </h3>

              <p className="mt-5 max-w-md text-sm leading-7">
                {copy.futureText}
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* CONTATO */}
      <section id="contato" className="section">
        <div className="page-shell">
          <p className="eyebrow mb-7">{copy.contactEyebrow}</p>

          <div className="grid gap-10 md:grid-cols-[1fr_0.65fr] md:items-end">
            <div>
              <h2 className="max-w-3xl text-5xl font-semibold leading-[0.95] tracking-[-0.08em] md:text-8xl">
                {copy.contactTitle}
                <span className="text-[#d45a8c]">
                  {" "}
                  {copy.contactSecondLine}
                </span>
              </h2>

              <a
                className="mt-8 inline-flex items-center gap-3 bg-[#ffda45] px-5 py-4 text-xs font-bold text-[#20232b] transition-all duration-300 hover:-translate-y-1 hover:bg-[#f3a6c7]"
                href={gmailComposeUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                {copy.email}
                <span>↗</span>
              </a>
            </div>

            <div className="space-y-7 md:pl-8">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-wider text-muted">
                  Email
                </p>

                <a
                  className="mt-2 inline-block text-sm transition-colors hover:text-[#d45a8c] hover:underline"
                  href="mailto:brendafppaiva@gmail.com"
                >
                  brendafppaiva@gmail.com
                </a>
              </div>

              <div>
                <p className="text-[10px] font-bold uppercase tracking-wider text-muted">
                  LinkedIn
                </p>

                <a
                  className="mt-2 inline-block break-all text-sm transition-colors hover:text-[#d45a8c] hover:underline"
                  href="https://www.linkedin.com/in/brenda-paiva-075275366/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  linkedin.com/in/brenda-paiva-075275366 ↗
                </a>
              </div>

              <div>
                <p className="text-[10px] font-bold uppercase tracking-wider text-muted">
                  {copy.phone}
                </p>

                <a
                  className="mt-2 inline-block text-sm transition-colors hover:text-[#d45a8c] hover:underline"
                  href="tel:+5581996781304"
                >
                  +55 (81) 99678-1304
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RODAPÉ */}
      <footer className="mt-8 bg-[#20232b] text-[#faf9f6]">
        <div className="page-shell flex items-center justify-between gap-4 py-5">
          <a
            href="#inicio"
            className="text-xl font-bold tracking-[-0.08em] transition-colors hover:text-[#f3a6c7]"
            aria-label="Brenda Paiva — início"
          >
            BP<span className="text-[#f3a6c7]">.</span>
          </a>

          <p className="text-[10px] text-[#faf9f6]/55">
            © 2026 Brenda Paiva
          </p>

        
        </div>
      </footer>
    </main>
  );
}
