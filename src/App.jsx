export default function App() {
  const telefone = "5511967036453";

  const mensagem = encodeURIComponent(
    "Olá, vim pelo site da PL Paulino e gostaria de solicitar atendimento."
  );

  const whatsapp = `https://wa.me/${telefone}?text=${mensagem}`;

  const servicos = [
    {
      titulo: "CREA, CFT e CONFEA",
      texto:
        "Regularização de empresas e profissionais junto aos conselhos federais e estaduais, incluindo cadastros, vistos, certidões e processos administrativos.",
    },
    {
      titulo: "ART e CAT",
      texto:
        "Emissão, recuperação e baixa de ART, Certidão de Acervo Técnico, processo de cargo e função e baixa de responsável técnico.",
    },
    {
      titulo: "Licitações",
      texto:
        "Organização documental para participação em licitações, cadastro de fornecedores, certidões e suporte administrativo para habilitação.",
    },
    {
      titulo: "Gestão de Projetos",
      texto:
        "Gerenciamento de projetos, cronogramas, custos, riscos, qualidade, planejamento estratégico e controle financeiro.",
    },
  ];

  const listaServicos = [
    "Registro e regularização de empresas",
    "Registro e regularização de profissionais",
    "Visto para execução de obra",
    "Visto para licitação",
    "Anotação de Responsabilidade Técnica — ART",
    "Recuperação e baixa de ART",
    "CAT — Certidão de Acervo Técnico",
    "Processo de cargo e função",
    "Baixa de responsável técnico",
    "Certidões diversas",
    "Cadastro de fornecedores",
    "Documentação para licitações",
    "Gerenciamento de cronograma",
    "Controle financeiro de projetos",
    "Planejamento estratégico de projetos",
  ];

  const etapas = [
    {
      numero: "01",
      titulo: "Análise da demanda",
      texto:
        "Entendemos a necessidade da empresa, o tipo de processo, os prazos e os documentos envolvidos.",
    },
    {
      numero: "02",
      titulo: "Organização documental",
      texto:
        "Conferimos documentos, identificamos pendências e estruturamos o processo para execução.",
    },
    {
      numero: "03",
      titulo: "Execução do processo",
      texto:
        "Acompanhamos solicitações, cadastros, regularizações e processos junto aos órgãos responsáveis.",
    },
    {
      numero: "04",
      titulo: "Acompanhamento",
      texto:
        "Mantemos suporte até a conclusão, com orientação e comunicação clara durante o andamento.",
    },
  ];

  return (
    <div className="site">
      <style>{`
        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          font-family: Arial, Helvetica, sans-serif;
          background: #07111f;
          color: #ffffff;
        }

        .site {
          min-height: 100vh;
          background:
            radial-gradient(circle at top right, rgba(56, 189, 248, 0.18), transparent 35%),
            linear-gradient(180deg, #07111f 0%, #0f172a 50%, #07111f 100%);
        }

        .container {
          width: min(1180px, 92%);
          margin: 0 auto;
        }

        .header {
          background: rgba(2, 6, 23, 0.95);
          border-bottom: 1px solid rgba(255,255,255,0.08);
          position: sticky;
          top: 0;
          z-index: 20;
        }

        .nav {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 18px 0;
        }

        .logo {
          font-size: 24px;
          font-weight: 900;
          letter-spacing: 1px;
        }

        .logo span {
          color: #38bdf8;
        }

        .menu {
          display: flex;
          gap: 24px;
        }

        .menu a {
          color: #cbd5e1;
          text-decoration: none;
          font-size: 15px;
        }

        .menu a:hover {
          color: #38bdf8;
        }

        .btn {
          display: inline-block;
          background: #0284c7;
          color: white;
          padding: 14px 22px;
          border-radius: 12px;
          text-decoration: none;
          font-weight: 700;
          border: none;
          cursor: pointer;
        }

        .btn:hover {
          background: #0369a1;
        }

        .btn-outline {
          background: transparent;
          border: 1px solid rgba(255,255,255,0.25);
        }

        .btn-outline:hover {
          border-color: #38bdf8;
          background: rgba(56,189,248,0.08);
        }

        .hero {
          padding: 90px 0 70px;
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 50px;
          align-items: center;
        }

        .tag {
          color: #38bdf8;
          text-transform: uppercase;
          letter-spacing: 3px;
          font-size: 13px;
          font-weight: 700;
          margin-bottom: 18px;
        }

        h1 {
          font-size: clamp(38px, 6vw, 66px);
          line-height: 1.04;
          margin: 0 0 24px;
        }

        .hero p {
          color: #cbd5e1;
          font-size: 19px;
          line-height: 1.7;
          margin-bottom: 32px;
        }

        .actions {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
        }

        .hero-card {
          background: rgba(15, 23, 42, 0.86);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 28px;
          padding: 34px;
          box-shadow: 0 25px 70px rgba(0,0,0,0.35);
        }

        .hero-card h3 {
          margin-top: 0;
          font-size: 25px;
        }

        .check {
          padding: 14px 0;
          border-bottom: 1px solid rgba(255,255,255,0.08);
          color: #e2e8f0;
        }

        .check:last-child {
          border-bottom: none;
        }

        .check::before {
          content: "✓";
          color: #38bdf8;
          font-weight: bold;
          margin-right: 10px;
        }

        section {
          padding: 78px 0;
        }

        .section-title {
          max-width: 780px;
          margin-bottom: 42px;
        }

        .section-title.center {
          text-align: center;
          margin-left: auto;
          margin-right: auto;
        }

        .section-title h2 {
          font-size: clamp(30px, 4vw, 46px);
          margin: 0 0 18px;
        }

        .section-title p {
          color: #cbd5e1;
          font-size: 17px;
          line-height: 1.7;
        }

        .about {
          background: rgba(2, 6, 23, 0.58);
        }

        .about-grid {
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          gap: 44px;
          align-items: center;
        }

        .about-box {
          background: linear-gradient(135deg, #0369a1, #0f172a);
          border-radius: 30px;
          padding: 36px;
          min-height: 330px;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
        }

        .about-box h2 {
          font-size: 40px;
          margin: 0 0 14px;
        }

        .about-text p {
          color: #dbeafe;
          line-height: 1.85;
          font-size: 17px;
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 22px;
        }

        .card {
          background: rgba(15, 23, 42, 0.76);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 24px;
          padding: 28px;
        }

        .card h3 {
          color: #38bdf8;
          font-size: 21px;
          margin-top: 0;
        }

        .card p {
          color: #cbd5e1;
          line-height: 1.65;
        }

        .service-list {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 14px;
        }

        .service-item {
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 14px;
          padding: 16px;
          color: #e2e8f0;
        }

        .service-item::before {
          content: "•";
          color: #38bdf8;
          font-weight: 900;
          margin-right: 10px;
        }

        .steps {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 22px;
        }

        .step {
          background: #020617;
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 24px;
          padding: 28px;
        }

        .number {
          color: #38bdf8;
          font-size: 30px;
          font-weight: 900;
        }

        .step p {
          color: #cbd5e1;
          line-height: 1.65;
        }

        .cta {
          background: linear-gradient(135deg, #0284c7, #0f172a);
          border-radius: 34px;
          padding: 48px;
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 30px;
          align-items: center;
        }

        .cta h2 {
          font-size: clamp(30px, 4vw, 44px);
          margin: 0 0 16px;
        }

        .cta p {
          color: #e0f2fe;
          line-height: 1.7;
          font-size: 17px;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 28px;
        }

        .contact-box {
          background: rgba(15, 23, 42, 0.76);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 24px;
          padding: 30px;
        }

        .contact-box p {
          color: #cbd5e1;
          line-height: 1.7;
        }

        .info {
          background: rgba(255,255,255,0.05);
          padding: 16px;
          border-radius: 14px;
          margin-top: 12px;
        }

        form {
          display: grid;
          gap: 14px;
        }

        input,
        textarea {
          width: 100%;
          padding: 15px;
          border-radius: 12px;
          border: 1px solid rgba(255,255,255,0.14);
          background: #020617;
          color: white;
          font-size: 15px;
        }

        textarea {
          min-height: 130px;
          resize: vertical;
        }

        .note {
          color: #94a3b8;
          font-size: 13px;
          line-height: 1.5;
        }

        footer {
          border-top: 1px solid rgba(255,255,255,0.08);
          padding: 28px 0;
          color: #94a3b8;
          text-align: center;
        }

        @media (max-width: 980px) {
          .hero,
          .about-grid,
          .cta,
          .contact-grid {
            grid-template-columns: 1fr;
          }

          .grid,
          .steps {
            grid-template-columns: repeat(2, 1fr);
          }

          .service-list {
            grid-template-columns: repeat(2, 1fr);
          }

          .menu {
            display: none;
          }
        }

        @media (max-width: 640px) {
          .grid,
          .steps,
          .service-list {
            grid-template-columns: 1fr;
          }

          .hero {
            padding-top: 60px;
          }

          .cta {
            padding: 30px;
          }
        }
      `}</style>

      <header className="header">
        <div className="container nav">
          <div className="logo">
            PL <span>PAULINO</span>
          </div>

          <nav className="menu">
            <a href="#inicio">Início</a>
            <a href="#sobre">Quem somos</a>
            <a href="#servicos">Serviços</a>
            <a href="#processo">Como funciona</a>
            <a href="#contato">Contato</a>
          </nav>

          <a className="btn" href={whatsapp} target="_blank" rel="noreferrer">
            WhatsApp
          </a>
        </div>
      </header>

      <main>
        <section id="inicio" className="container hero">
          <div>
            <div className="tag">Consultoria administrativa e documental</div>

            <h1>
              Soluções em documentação técnica, CREA, CFT, licitações e gestão
              de projetos.
            </h1>

            <p>
              A PL Paulino apoia empresas na regularização documental, cadastro
              de fornecedores, participação em licitações, processos junto aos
              conselhos profissionais e controle estratégico de projetos.
            </p>

            <div className="actions">
              <a className="btn" href={whatsapp} target="_blank" rel="noreferrer">
                Falar com especialista
              </a>

              <a className="btn btn-outline" href="#servicos">
                Ver serviços
              </a>
            </div>
          </div>

          <div className="hero-card">
            <h3>Atendimento para empresas que precisam de segurança documental</h3>
            <div className="check">CREA, CFT e CONFEA</div>
            <div className="check">ART, CAT e responsável técnico</div>
            <div className="check">Licitações e cadastro de fornecedores</div>
            <div className="check">Certidões e regularização</div>
            <div className="check">Planejamento e controle financeiro</div>
          </div>
        </section>

        <section id="sobre" className="about">
          <div className="container about-grid">
            <div className="about-box">
              <div className="tag">PL Paulino</div>
              <h2>Consultoria técnica com atuação nacional.</h2>
              <p>
                Organização, confidencialidade e suporte especializado para
                empresas e profissionais.
              </p>
            </div>

            <div className="about-text">
              <div className="section-title">
                <h2>Quem somos</h2>
                <p>
                  Somos uma empresa especializada em documentação junto aos
                  conselhos federais e estaduais, documentação para licitações,
                  cadastro de fornecedores, certidões diversas, gerenciamento de
                  projetos e planejamento financeiro.
                </p>
              </div>

              <p>
                Atuamos com confidencialidade e foco em soluções administrativas
                para empresas que precisam de regularidade, segurança e suporte
                em processos técnicos e documentais.
              </p>
            </div>
          </div>
        </section>

        <section id="servicos" className="container">
          <div className="section-title center">
            <div className="tag">Serviços</div>
            <h2>Soluções para documentação, licitações e projetos.</h2>
            <p>
              Serviços estruturados para empresas que precisam regularizar,
              organizar e acompanhar demandas administrativas e técnicas.
            </p>
          </div>

          <div className="grid">
            {servicos.map((servico) => (
              <div className="card" key={servico.titulo}>
                <h3>{servico.titulo}</h3>
                <p>{servico.texto}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="container">
          <div className="section-title">
            <div className="tag">Atuação detalhada</div>
            <h2>Serviços profissionais e empresariais</h2>
            <p>
              A PL Paulino atua em demandas específicas de regularização,
              documentação, cadastros e suporte para empresas.
            </p>
          </div>

          <div className="service-list">
            {listaServicos.map((item) => (
              <div className="service-item" key={item}>
                {item}
              </div>
            ))}
          </div>
        </section>

        <section id="processo" className="container">
          <div className="section-title center">
            <div className="tag">Como funciona</div>
            <h2>Processo claro do início ao fim</h2>
            <p>
              Estruturamos cada demanda com análise, organização, execução e
              acompanhamento.
            </p>
          </div>

          <div className="steps">
            {etapas.map((etapa) => (
              <div className="step" key={etapa.numero}>
                <div className="number">{etapa.numero}</div>
                <h3>{etapa.titulo}</h3>
                <p>{etapa.texto}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="container">
          <div className="cta">
            <div>
              <h2>Precisa regularizar sua empresa ou preparar documentação?</h2>
              <p>
                Fale com a PL Paulino para uma análise inicial da sua demanda e
                receba orientação sobre o melhor caminho.
              </p>
            </div>

            <div>
              <a className="btn" href={whatsapp} target="_blank" rel="noreferrer">
                Solicitar atendimento
              </a>
            </div>
          </div>
        </section>

        <section id="contato" className="container">
          <div className="section-title center">
            <div className="tag">Contato</div>
            <h2>Fale com a PL Paulino</h2>
            <p>
              Atendimento nacional para empresas que precisam de suporte
              documental, administrativo e técnico.
            </p>
          </div>

          <div className="contact-grid">
            <div className="contact-box">
              <h3>Informações</h3>
              <p>
                Entre em contato para explicar sua necessidade. Nossa equipe
                retornará com orientação para o processo.
              </p>

              <div className="info">
                <strong>WhatsApp:</strong> (11) 96703-6453
              </div>

              <div className="info">
                <strong>E-mail:</strong> contato@plpaulino.com.br
              </div>

              <div className="info">
                <strong>Atendimento:</strong> Todo o território nacional
              </div>

              <div className="info">
                <strong>Site:</strong> www.plpaulino.com.br
              </div>
            </div>

            <div className="contact-box">
              <h3>Solicite uma análise</h3>

              <form>
                <input type="text" placeholder="Nome" />
                <input type="email" placeholder="E-mail" />
                <input type="text" placeholder="Empresa" />
                <input type="text" placeholder="Telefone / WhatsApp" />
                <textarea placeholder="Descreva sua necessidade" />

                <a className="btn" href={whatsapp} target="_blank" rel="noreferrer">
                  Enviar pelo WhatsApp
                </a>
              </form>

              <p className="note">
                Em uma próxima etapa, este formulário poderá ser integrado com
                n8n, e-mail, CRM ou banco de dados.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="container">
          © 2026 PL Paulino — Consultoria Administrativa e Documental.
        </div>
      </footer>
    </div>
  );
}