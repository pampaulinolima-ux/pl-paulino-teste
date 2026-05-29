export default function App() {
  const telefone = "5511967036453";

  const mensagem = encodeURIComponent(
    "Olá, vim pelo site da PL Paulino e gostaria de solicitar atendimento."
  );

  const whatsapp = `https://wa.me/${telefone}?text=${mensagem}`;

  const solucoes = [
    {
      titulo: "Regularização CREA, CFT e CONFEA",
      texto:
        "Assessoria para registro, regularização, vistos, certidões e processos administrativos junto aos conselhos profissionais.",
    },
    {
      titulo: "Registro de Obra e ART",
      texto:
        "Suporte para registro de obra, emissão, recuperação e baixa de ART, além de orientação documental para responsáveis técnicos.",
    },
    {
      titulo: "CAT e Acervo Técnico",
      texto:
        "Apoio em Certidão de Acervo Técnico, organização de documentos, comprovação técnica e processos relacionados.",
    },
    {
      titulo: "Licitações e Cadastro de Fornecedores",
      texto:
        "Organização documental, certidões, cadastros em órgãos públicos e privados e suporte para habilitação.",
    },
    {
      titulo: "Registro Profissional",
      texto:
        "Assessoria para profissionais que precisam de registro, regularização, vistos e documentação junto ao CREA ou CFT.",
    },
    {
      titulo: "Projetos e Controle Financeiro",
      texto:
        "Planejamento, cronograma, custos, riscos, qualidade e controle financeiro de projetos.",
    },
  ];

  const servicos = [
    "Registro e regularização de empresas",
    "Registro e regularização de profissionais",
    "Registro de obra",
    "Visto para execução de obra",
    "Visto para licitação",
    "ART de obra ou serviço",
    "ART de cargo e função",
    "Recuperação de ART",
    "Baixa de ART",
    "CAT — Certidão de Acervo Técnico",
    "Baixa de responsável técnico",
    "Certidões diversas",
    "Cadastro de fornecedores",
    "Documentação para licitações",
    "Planejamento e controle financeiro de projetos",
  ];

  const etapas = [
    {
      numero: "01",
      titulo: "Análise da demanda",
      texto:
        "Identificamos a necessidade da empresa ou profissional, o órgão envolvido, o prazo e os documentos necessários.",
    },
    {
      numero: "02",
      titulo: "Organização documental",
      texto:
        "Conferimos documentos, apontamos pendências e estruturamos o processo para reduzir riscos e retrabalho.",
    },
    {
      numero: "03",
      titulo: "Execução do procedimento",
      texto:
        "Realizamos o acompanhamento administrativo do processo, cadastros, solicitações e regularizações.",
    },
    {
      numero: "04",
      titulo: "Acompanhamento até conclusão",
      texto:
        "Mantemos suporte e orientação até a finalização da demanda, com comunicação objetiva.",
    },
  ];

  return (
    <div className="site">
      <style>{`
        :root {
          --azul-escuro: #061a33;
          --azul: #0f4c81;
          --azul-medio: #1d6fa5;
          --dourado: #b8913b;
          --dourado-claro: #d8bd73;
          --bege: #f4efe6;
          --bege-claro: #fbf8f2;
          --texto: #1f2933;
          --texto-suave: #5b6573;
          --linha: #e5ddcf;
          --branco: #ffffff;
        }

        * {
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
          font-family: Arial, Helvetica, sans-serif;
          color: var(--texto);
          background: var(--bege-claro);
        }

        .container {
          width: min(1180px, 92%);
          margin: 0 auto;
        }

        .topbar {
          background: var(--azul-escuro);
          color: #e9f2fb;
          font-size: 13px;
          border-bottom: 1px solid rgba(255,255,255,0.08);
        }

        .topbar-inner {
          display: flex;
          justify-content: space-between;
          gap: 16px;
          padding: 10px 0;
          flex-wrap: wrap;
        }

        .topbar strong {
          color: var(--dourado-claro);
        }

        header {
          position: sticky;
          top: 0;
          z-index: 20;
          background: rgba(251, 248, 242, 0.96);
          border-bottom: 1px solid var(--linha);
          backdrop-filter: blur(12px);
        }

        .nav {
          height: 78px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
        }

        .brand {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .brand-mark {
          width: 48px;
          height: 48px;
          border-radius: 14px;
          background: var(--azul-escuro);
          color: var(--dourado-claro);
          display: grid;
          place-items: center;
          font-weight: 900;
          font-size: 18px;
          box-shadow: 0 12px 28px rgba(6, 26, 51, 0.2);
        }

        .brand-title strong {
          display: block;
          color: var(--azul-escuro);
          font-size: 23px;
          letter-spacing: 0.3px;
        }

        .brand-title span {
          display: block;
          margin-top: 4px;
          color: var(--texto-suave);
          font-size: 11px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 1.3px;
        }

        nav {
          display: flex;
          gap: 26px;
          align-items: center;
        }

        nav a {
          color: var(--texto);
          text-decoration: none;
          font-size: 14px;
          font-weight: 800;
        }

        nav a:hover {
          color: var(--azul);
        }

        .btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          padding: 14px 22px;
          border-radius: 999px;
          font-size: 14px;
          font-weight: 900;
          border: 1px solid transparent;
          transition: 0.2s ease;
          cursor: pointer;
        }

        .btn-primary {
          background: var(--azul);
          color: white;
          box-shadow: 0 14px 28px rgba(15, 76, 129, 0.22);
        }

        .btn-primary:hover {
          background: var(--azul-escuro);
          transform: translateY(-1px);
        }

        .btn-secondary {
          background: transparent;
          color: var(--azul-escuro);
          border-color: var(--linha);
        }

        .btn-secondary:hover {
          border-color: var(--dourado);
          color: var(--azul);
        }

        .hero {
          background:
            linear-gradient(120deg, rgba(6,26,51,0.96), rgba(15,76,129,0.9)),
            linear-gradient(180deg, var(--azul-escuro), var(--azul));
          color: white;
          position: relative;
          overflow: hidden;
        }

        .hero::after {
          content: "";
          position: absolute;
          right: -170px;
          top: -120px;
          width: 520px;
          height: 520px;
          border-radius: 50%;
          border: 1px solid rgba(216, 189, 115, 0.25);
          background: rgba(216, 189, 115, 0.06);
        }

        .hero-grid {
          position: relative;
          z-index: 1;
          min-height: 700px;
          display: grid;
          grid-template-columns: 1.08fr 0.92fr;
          gap: 64px;
          align-items: center;
          padding: 90px 0;
        }

        .eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          color: var(--dourado-claro);
          text-transform: uppercase;
          letter-spacing: 2.6px;
          font-size: 12px;
          font-weight: 900;
          margin-bottom: 24px;
        }

        .eyebrow::before {
          content: "";
          width: 34px;
          height: 1px;
          background: var(--dourado-claro);
        }

        h1 {
          margin: 0 0 26px;
          font-size: clamp(40px, 5.7vw, 72px);
          line-height: 1;
          letter-spacing: -2px;
          max-width: 850px;
        }

        .hero p {
          color: #e5edf5;
          max-width: 760px;
          font-size: 19px;
          line-height: 1.78;
          margin: 0 0 34px;
        }

        .hero-actions {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
          margin-bottom: 38px;
        }

        .hero-actions .btn-secondary {
          color: white;
          border-color: rgba(255,255,255,0.25);
        }

        .hero-actions .btn-secondary:hover {
          border-color: var(--dourado-claro);
          color: var(--dourado-claro);
        }

        .price-note {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          background: rgba(255,255,255,0.1);
          border: 1px solid rgba(216,189,115,0.35);
          padding: 14px 18px;
          border-radius: 999px;
          color: #f8eed0;
          font-weight: 800;
        }

        .hero-card {
          background: var(--bege-claro);
          color: var(--texto);
          border-radius: 32px;
          padding: 34px;
          box-shadow: 0 32px 80px rgba(0,0,0,0.28);
          border: 1px solid rgba(216, 189, 115, 0.3);
        }

        .hero-card small {
          display: block;
          color: var(--dourado);
          text-transform: uppercase;
          letter-spacing: 1.6px;
          font-size: 12px;
          font-weight: 900;
          margin-bottom: 12px;
        }

        .hero-card h3 {
          color: var(--azul-escuro);
          font-size: 28px;
          line-height: 1.18;
          margin: 0 0 22px;
        }

        .hero-item {
          padding: 17px 0;
          border-top: 1px solid var(--linha);
        }

        .hero-item strong {
          display: block;
          color: var(--azul-escuro);
          margin-bottom: 5px;
        }

        .hero-item span {
          color: var(--texto-suave);
          line-height: 1.5;
          font-size: 14px;
        }

        .strip {
          background: var(--branco);
          border-bottom: 1px solid var(--linha);
        }

        .strip-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
        }

        .strip-item {
          padding: 30px 24px;
          border-right: 1px solid var(--linha);
        }

        .strip-item:last-child {
          border-right: none;
        }

        .strip-item small {
          color: var(--dourado);
          text-transform: uppercase;
          letter-spacing: 1.4px;
          font-size: 11px;
          font-weight: 900;
        }

        .strip-item strong {
          display: block;
          color: var(--azul-escuro);
          font-size: 20px;
          margin: 9px 0;
        }

        .strip-item span {
          color: var(--texto-suave);
          line-height: 1.5;
          font-size: 14px;
        }

        section {
          padding: 88px 0;
        }

        .section-head {
          max-width: 830px;
          margin-bottom: 48px;
        }

        .section-head.center {
          text-align: center;
          margin-left: auto;
          margin-right: auto;
        }

        .kicker {
          color: var(--dourado);
          text-transform: uppercase;
          letter-spacing: 2.4px;
          font-size: 12px;
          font-weight: 900;
          margin-bottom: 14px;
        }

        h2 {
          color: var(--azul-escuro);
          margin: 0 0 18px;
          font-size: clamp(32px, 4vw, 52px);
          line-height: 1.06;
          letter-spacing: -1.1px;
        }

        .section-head p {
          color: var(--texto-suave);
          font-size: 18px;
          line-height: 1.76;
          margin: 0;
        }

        .about {
          background: var(--bege-claro);
        }

        .about-grid {
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          gap: 58px;
          align-items: center;
        }

        .about-card {
          background: var(--azul-escuro);
          color: white;
          border-radius: 34px;
          padding: 40px;
          min-height: 430px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          box-shadow: 0 26px 70px rgba(6,26,51,0.18);
        }

        .about-card h3 {
          color: white;
          margin: 0;
          font-size: 36px;
          line-height: 1.12;
          letter-spacing: -0.8px;
        }

        .about-card p {
          color: #dce8f3;
          line-height: 1.76;
          font-size: 17px;
        }

        .about-copy p {
          color: var(--texto-suave);
          font-size: 17px;
          line-height: 1.86;
        }

        .solutions {
          background: white;
        }

        .solutions-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 22px;
        }

        .solution-card {
          background: white;
          border: 1px solid var(--linha);
          border-radius: 26px;
          padding: 30px;
          min-height: 270px;
          box-shadow: 0 16px 42px rgba(31,41,51,0.05);
          transition: 0.22s ease;
        }

        .solution-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 26px 60px rgba(31,41,51,0.1);
        }

        .solution-card small {
          display: block;
          color: var(--dourado);
          font-weight: 900;
          letter-spacing: 1.4px;
          margin-bottom: 22px;
        }

        .solution-card h3 {
          color: var(--azul-escuro);
          font-size: 22px;
          line-height: 1.22;
          margin: 0 0 14px;
        }

        .solution-card p {
          color: var(--texto-suave);
          line-height: 1.68;
          margin: 0;
        }

        .services-detail {
          background: var(--bege);
        }

        .detail-layout {
          display: grid;
          grid-template-columns: 0.88fr 1.12fr;
          gap: 52px;
          align-items: start;
        }

        .detail-aside {
          background: var(--azul-escuro);
          color: white;
          border-radius: 30px;
          padding: 36px;
          position: sticky;
          top: 112px;
        }

        .detail-aside h3 {
          margin: 0 0 16px;
          font-size: 30px;
          line-height: 1.16;
        }

        .detail-aside p {
          color: #dce8f3;
          line-height: 1.72;
          margin-bottom: 22px;
        }

        .detail-list {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 12px;
        }

        .detail-item {
          background: white;
          border: 1px solid var(--linha);
          border-radius: 14px;
          padding: 16px;
          color: var(--texto);
          font-weight: 800;
          line-height: 1.4;
        }

        .detail-item::before {
          content: "✓";
          color: var(--dourado);
          margin-right: 9px;
          font-weight: 900;
        }

        .process {
          background: white;
        }

        .process-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 22px;
        }

        .process-card {
          background: var(--bege-claro);
          border: 1px solid var(--linha);
          border-radius: 26px;
          padding: 28px;
        }

        .process-card strong {
          color: var(--dourado);
          display: block;
          font-size: 34px;
          margin-bottom: 20px;
        }

        .process-card h3 {
          color: var(--azul-escuro);
          margin: 0 0 12px;
          font-size: 21px;
        }

        .process-card p {
          color: var(--texto-suave);
          line-height: 1.65;
          margin: 0;
        }

        .price-section {
          background: var(--bege-claro);
        }

        .price-box {
          background: white;
          border: 1px solid var(--linha);
          border-radius: 30px;
          padding: 42px;
          display: grid;
          grid-template-columns: 1fr 0.9fr;
          gap: 36px;
          align-items: center;
          box-shadow: 0 20px 50px rgba(31,41,51,0.06);
        }

        .price-value {
          background: var(--azul-escuro);
          color: white;
          border-radius: 24px;
          padding: 30px;
        }

        .price-value small {
          color: var(--dourado-claro);
          text-transform: uppercase;
          letter-spacing: 1.5px;
          font-weight: 900;
        }

        .price-value strong {
          display: block;
          font-size: 42px;
          margin: 10px 0;
        }

        .price-value span {
          color: #dce8f3;
          line-height: 1.6;
        }

        .cta {
          background:
            linear-gradient(120deg, rgba(6,26,51,0.96), rgba(15,76,129,0.92));
          color: white;
          border-radius: 34px;
          padding: 50px;
          display: grid;
          grid-template-columns: 1.08fr 0.92fr;
          gap: 34px;
          align-items: center;
          box-shadow: 0 28px 75px rgba(6,26,51,0.2);
        }

        .cta h2 {
          color: white;
        }

        .cta p {
          color: #dce8f3;
          font-size: 17px;
          line-height: 1.74;
        }

        .cta-actions {
          display: flex;
          justify-content: flex-end;
          gap: 14px;
          flex-wrap: wrap;
        }

        .cta .btn-secondary {
          color: white;
          border-color: rgba(255,255,255,0.25);
        }

        .contact {
          background: white;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 0.92fr 1.08fr;
          gap: 28px;
        }

        .contact-card {
          background: white;
          border: 1px solid var(--linha);
          border-radius: 28px;
          padding: 32px;
          box-shadow: 0 16px 42px rgba(31,41,51,0.05);
        }

        .contact-card.dark {
          background: var(--azul-escuro);
          color: white;
        }

        .contact-card h3 {
          color: var(--azul-escuro);
          margin: 0 0 14px;
          font-size: 25px;
        }

        .contact-card.dark h3 {
          color: white;
        }

        .contact-card p {
          color: var(--texto-suave);
          line-height: 1.7;
        }

        .contact-card.dark p {
          color: #dce8f3;
        }

        .info {
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.14);
          color: #eef6ff;
          border-radius: 14px;
          padding: 15px;
          margin-top: 12px;
        }

        form {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
        }

        input,
        textarea {
          width: 100%;
          border: 1px solid var(--linha);
          background: var(--bege-claro);
          padding: 15px;
          border-radius: 12px;
          font-size: 15px;
          outline: none;
          color: var(--texto);
        }

        textarea {
          grid-column: 1 / -1;
          min-height: 140px;
          resize: vertical;
        }

        input:focus,
        textarea:focus {
          border-color: var(--azul);
          box-shadow: 0 0 0 4px rgba(15,76,129,0.1);
        }

        .form-footer {
          grid-column: 1 / -1;
          display: flex;
          gap: 14px;
          align-items: center;
          flex-wrap: wrap;
        }

        .note {
          color: var(--texto-suave);
          font-size: 13px;
          line-height: 1.5;
          max-width: 420px;
          margin: 0;
        }

        footer {
          background: var(--azul-escuro);
          color: #dce8f3;
          padding: 40px 0;
        }

        .footer-grid {
          display: flex;
          justify-content: space-between;
          gap: 22px;
          flex-wrap: wrap;
        }

        footer strong {
          color: white;
        }

        footer p {
          margin: 8px 0 0;
          color: #b8cbe0;
          line-height: 1.6;
        }

        @media (max-width: 1040px) {
          .hero-grid,
          .about-grid,
          .detail-layout,
          .price-box,
          .cta,
          .contact-grid {
            grid-template-columns: 1fr;
          }

          .solutions-grid,
          .process-grid,
          .strip-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .detail-aside {
            position: static;
          }

          nav {
            display: none;
          }

          .cta-actions {
            justify-content: flex-start;
          }
        }

        @media (max-width: 680px) {
          .hero-grid {
            min-height: auto;
            padding: 70px 0;
          }

          .solutions-grid,
          .process-grid,
          .strip-grid,
          .detail-list,
          form {
            grid-template-columns: 1fr;
          }

          .hero-card,
          .about-card,
          .detail-aside,
          .price-box,
          .price-value,
          .cta,
          .contact-card {
            padding: 26px;
            border-radius: 24px;
          }

          h1 {
            font-size: 40px;
          }

          h2 {
            font-size: 32px;
          }
        }
      `}</style>

      <div className="topbar">
        <div className="container topbar-inner">
          <div>
            <strong>PL Paulino</strong> — Assessoria administrativa em CREA, CFT, obras, registros e licitações
          </div>
          <div>contato@plpaulino.com.br • (11) 96703-6453</div>
        </div>
      </div>

      <header>
        <div className="container nav">
          <div className="brand">
            <div className="brand-mark">PL</div>
            <div className="brand-title">
              <strong>PL Paulino</strong>
              <span>Assessoria Administrativa</span>
            </div>
          </div>

          <nav>
            <a href="#inicio">Início</a>
            <a href="#sobre">Quem somos</a>
            <a href="#servicos">Serviços</a>
            <a href="#precos">Valores</a>
            <a href="#contato">Contato</a>
          </nav>

          <a className="btn btn-primary" href={whatsapp} target="_blank" rel="noreferrer">
            Solicitar atendimento
          </a>
        </div>
      </header>

      <main>
        <section id="inicio" className="hero">
          <div className="container hero-grid">
            <div>
              <div className="eyebrow">Assessoria administrativa especializada</div>

              <h1>
                Regularização em CREA, CFT, obras e documentação técnica com segurança.
              </h1>

              <p>
                A PL Paulino apoia empresas, profissionais e prestadores de serviços técnicos
                em processos administrativos junto ao CREA, CFT e CONFEA, incluindo registro
                de empresa, registro profissional, registro de obra, ART, CAT, certidões,
                licitações e cadastro de fornecedores.
              </p>

              <div className="hero-actions">
                <a className="btn btn-primary" href={whatsapp} target="_blank" rel="noreferrer">
                  Falar com especialista
                </a>
                <a className="btn btn-secondary" href="#servicos">
                  Ver serviços
                </a>
              </div>

              <div className="price-note">
                Procedimentos a partir de R$ 150,00
              </div>
            </div>

            <div className="hero-card">
              <small>Atendimento para empresas e profissionais</small>
              <h3>Suporte documental para quem precisa regularizar, comprovar e participar de processos.</h3>

              <div className="hero-item">
                <strong>CREA Nacional e CFT</strong>
                <span>Registro, regularização, vistos, certidões e acompanhamento administrativo.</span>
              </div>

              <div className="hero-item">
                <strong>Registro de obra e ART</strong>
                <span>Orientação e suporte para documentação técnica de obras e serviços.</span>
              </div>

              <div className="hero-item">
                <strong>CAT e acervo técnico</strong>
                <span>Apoio documental para comprovação de experiência e acervo técnico.</span>
              </div>

              <div className="hero-item">
                <strong>Licitações e cadastros</strong>
                <span>Organização documental para empresas fornecedoras e prestadoras de serviço.</span>
              </div>
            </div>
          </div>
        </section>

        <div className="strip">
          <div className="container strip-grid">
            <div className="strip-item">
              <small>Foco</small>
              <strong>Empresas técnicas</strong>
              <span>Engenharia, construção, manutenção, facilities, projetos e serviços técnicos.</span>
            </div>

            <div className="strip-item">
              <small>Segurança</small>
              <strong>Confidencialidade</strong>
              <span>Tratamento responsável das informações e documentos dos clientes.</span>
            </div>

            <div className="strip-item">
              <small>Atendimento</small>
              <strong>Nacional</strong>
              <span>Suporte para demandas em diferentes estados e conselhos.</span>
            </div>

            <div className="strip-item">
              <small>Valor inicial</small>
              <strong>A partir de R$ 150,00</strong>
              <span>Valores variam conforme procedimento, órgão, prazo e complexidade.</span>
            </div>
          </div>
        </div>

        <section id="sobre" className="about">
          <div className="container about-grid">
            <div className="about-card">
              <h3>Assessoria para empresas que precisam de regularidade documental.</h3>
              <p>
                Atuamos com organização, clareza e acompanhamento em processos administrativos
                que exigem atenção técnica, documentação correta e comunicação objetiva.
              </p>
            </div>

            <div className="about-copy">
              <div className="section-head">
                <div className="kicker">Quem somos</div>
                <h2>Consultoria administrativa para CREA, CFT, obras, registros e licitações.</h2>
                <p>
                  Somos uma empresa especializada em documentação junto aos conselhos federais
                  e estaduais, documentação para licitação, cadastro de fornecedores,
                  certidões diversas, gerenciamento de projetos, qualidade e planejamento
                  financeiro de projetos.
                </p>
              </div>

              <p>
                Nosso trabalho é apoiar empresas e profissionais na condução de procedimentos
                documentais, reduzindo dúvidas, pendências e retrabalho. Atuamos com
                confidencialidade e atendimento em todo o território nacional.
              </p>
            </div>
          </div>
        </section>

        <section id="servicos" className="solutions">
          <div className="container">
            <div className="section-head center">
              <div className="kicker">Serviços</div>
              <h2>Soluções administrativas para empresas e profissionais técnicos.</h2>
              <p>
                Organizamos e acompanhamos demandas documentais para quem precisa regularizar,
                registrar, comprovar ou preparar documentação para processos públicos e privados.
              </p>
            </div>

            <div className="solutions-grid">
              {solucoes.map((item, index) => (
                <div className="solution-card" key={item.titulo}>
                  <small>0{index + 1}</small>
                  <h3>{item.titulo}</h3>
                  <p>{item.texto}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="services-detail">
          <div className="container detail-layout">
            <div className="detail-aside">
              <div className="kicker">Atuação detalhada</div>
              <h3>Procedimentos administrativos e documentais.</h3>
              <p>
                Apoiamos empresas e profissionais em diferentes etapas, desde o registro
                até a organização documental para licitações, obras e comprovação técnica.
              </p>
              <a className="btn btn-primary" href={whatsapp} target="_blank" rel="noreferrer">
                Solicitar análise
              </a>
            </div>

            <div className="detail-list">
              {servicos.map((item) => (
                <div className="detail-item" key={item}>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="process">
          <div className="container">
            <div className="section-head center">
              <div className="kicker">Como funciona</div>
              <h2>Processo simples, organizado e acompanhado.</h2>
              <p>
                O atendimento é estruturado para facilitar a leitura da demanda,
                organizar documentos e conduzir o procedimento com previsibilidade.
              </p>
            </div>

            <div className="process-grid">
              {etapas.map((etapa) => (
                <div className="process-card" key={etapa.numero}>
                  <strong>{etapa.numero}</strong>
                  <h3>{etapa.titulo}</h3>
                  <p>{etapa.texto}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="precos" className="price-section">
          <div className="container">
            <div className="price-box">
              <div>
                <div className="kicker">Valores</div>
                <h2>Procedimentos a partir de R$ 150,00.</h2>
                <p>
                  O valor final depende do tipo de procedimento, conselho ou órgão envolvido,
                  prazo, documentação disponível e complexidade da demanda.
                </p>
              </div>

              <div className="price-value">
                <small>Valor inicial</small>
                <strong>R$ 150,00</strong>
                <span>
                  Solicite uma análise para identificar o procedimento correto e o valor
                  aplicável à sua necessidade.
                </span>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <div className="cta">
              <div>
                <h2>Precisa regularizar documentação, obra, registro ou processo no CREA/CFT?</h2>
                <p>
                  Fale com a PL Paulino e receba orientação inicial sobre o melhor caminho
                  administrativo para sua empresa ou atuação profissional.
                </p>
              </div>

              <div className="cta-actions">
                <a className="btn btn-primary" href={whatsapp} target="_blank" rel="noreferrer">
                  Falar pelo WhatsApp
                </a>
                <a className="btn btn-secondary" href="#contato">
                  Ver contato
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="contato" className="contact">
          <div className="container">
            <div className="section-head center">
              <div className="kicker">Contato</div>
              <h2>Atendimento para empresas e profissionais técnicos.</h2>
              <p>
                Envie sua necessidade para análise inicial e orientação sobre documentação,
                prazos, registros, regularização, obras, cadastros e próximos passos.
              </p>
            </div>

            <div className="contact-grid">
              <div className="contact-card dark">
                <h3>Dados de contato</h3>
                <p>
                  Atendimento nacional para demandas administrativas, documentais e técnicas.
                </p>

                <div className="info">
                  <strong>WhatsApp:</strong> (11) 96703-6453
                </div>

                <div className="info">
                  <strong>E-mail:</strong> contato@plpaulino.com.br
                </div>

                <div className="info">
                  <strong>Site:</strong> www.plpaulino.com.br
                </div>

                <div className="info">
                  <strong>Atendimento:</strong> Todo o território nacional
                </div>
              </div>

              <div className="contact-card">
                <h3>Solicite uma análise</h3>
                <p>
                  Informe sua necessidade para que possamos orientar sobre o procedimento
                  mais adequado.
                </p>

                <form>
                  <input type="text" placeholder="Nome" />
                  <input type="text" placeholder="Empresa ou profissão" />
                  <input type="email" placeholder="E-mail" />
                  <input type="text" placeholder="Telefone / WhatsApp" />
                  <textarea placeholder="Descreva sua necessidade: CREA, CFT, obra, ART, CAT, licitação, registro ou outro procedimento." />

                  <div className="form-footer">
                    <a className="btn btn-primary" href={whatsapp} target="_blank" rel="noreferrer">
                      Enviar pelo WhatsApp
                    </a>

                    <p className="note">
                      Em etapa futura, este formulário poderá ser integrado ao n8n,
                      e-mail, CRM ou banco de dados.
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="container footer-grid">
          <div>
            <strong>PL Paulino — Assessoria Administrativa</strong>
            <p>
              Consultoria em CREA, CFT, registro de obra, documentação técnica,
              licitações, cadastros, projetos e controle financeiro.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}