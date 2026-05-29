export default function App() {
  const whatsapp = "https://wa.me/5511967036453";

  const services = [
    "Regularização CREA Nacional e CFT",
    "Registro de empresa e profissional",
    "Registro de obra e ART",
    "CAT e acervo técnico",
    "Licitações e cadastro de fornecedores",
    "Certidões e documentação técnica",
  ];

  return (
    <div>
      <style>{`
        *{box-sizing:border-box} body{margin:0;font-family:Arial,Helvetica,sans-serif;background:#f7f3ea;color:#172033}
        .container{width:min(1480px,96%);margin:auto}
        header{background:#fff;border-bottom:1px solid #e2d8c7;position:sticky;top:0;z-index:10}
        .nav{height:82px;display:flex;justify-content:space-between;align-items:center}
        .logo{font-size:26px;font-weight:900;color:#082544}.logo span{color:#b9974f}
        nav{display:flex;gap:32px} nav a{text-decoration:none;color:#172033;font-weight:700}
        .btn{background:#082544;color:#fff;padding:14px 24px;border-radius:4px;text-decoration:none;font-weight:800}
        .hero{background:#082544;color:white;padding:110px 0}
        .hero-grid{display:grid;grid-template-columns:1.15fr .85fr;gap:70px;align-items:center}
        h1{font-size:68px;line-height:1;margin:0 0 28px;letter-spacing:-2px}
        .lead{font-size:20px;line-height:1.8;color:#dbe7f2;max-width:850px}
        .panel{background:#f7f3ea;color:#172033;padding:42px;border-radius:2px;border-top:6px solid #b9974f}
        .panel h3{font-size:30px;color:#082544;margin-top:0}
        .panel p{line-height:1.7;color:#53606f}
        section{padding:90px 0}
        .title{max-width:850px;margin-bottom:45px}
        .kicker{color:#b9974f;text-transform:uppercase;letter-spacing:2px;font-weight:900;font-size:13px}
        h2{font-size:48px;color:#082544;margin:12px 0;line-height:1.08}
        .text{font-size:18px;line-height:1.8;color:#53606f}
        .grid{display:grid;grid-template-columns:repeat(3,1fr);gap:22px}
        .card{background:#fff;border:1px solid #e2d8c7;padding:32px;min-height:190px}
        .card h3{color:#082544;font-size:22px;margin-top:0}
        .card p{color:#53606f;line-height:1.7}
        .dark{background:#082544;color:#fff}
        .dark h2,.dark h3{color:#fff}.dark .text{color:#dbe7f2}
        .process{display:grid;grid-template-columns:repeat(4,1fr);gap:20px}
        .step{background:#fff;padding:30px;border:1px solid #e2d8c7}
        .step strong{color:#b9974f;font-size:32px}
        .contact{display:grid;grid-template-columns:.9fr 1.1fr;gap:28px}
        input,textarea{width:100%;padding:15px;margin-bottom:12px;border:1px solid #d8cab5;background:#fff;font-size:15px}
        textarea{min-height:130px}
        footer{background:#061a33;color:#dbe7f2;padding:36px 0}
        @media(max-width:900px){.hero-grid,.grid,.process,.contact{grid-template-columns:1fr}nav{display:none}h1{font-size:42px}}
      `}</style>

      <header>
        <div className="container nav">
          <div className="logo">PL <span>PAULINO</span></div>
          <nav>
            <a href="#sobre">Quem somos</a>
            <a href="#servicos">Serviços</a>
            <a href="#processo">Processo</a>
            <a href="#contato">Contato</a>
          </nav>
          <a className="btn" href={whatsapp}>Fale conosco</a>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="container hero-grid">
            <div>
              <div className="kicker">Assessoria administrativa especializada</div>
              <h1>Regularização empresarial, CREA, CFT e documentação técnica.</h1>
              <p className="lead">
                A PL Paulino apoia empresas, profissionais e prestadores de serviços técnicos
                em registros, obras, ART, CAT, certidões, licitações e cadastros, com atuação
                nacional e acompanhamento organizado.
              </p>
              <a className="btn" href={whatsapp}>Solicitar atendimento</a>
            </div>
            <div className="panel">
              <h3>Para quem é indicado?</h3>
              <p>Empresas de engenharia, construção, manutenção, serviços técnicos, fornecedores, profissionais e organizações que precisam regularizar documentação junto ao CREA, CFT e órgãos relacionados.</p>
            </div>
          </div>
        </section>

        <section id="sobre">
          <div className="container">
            <div className="title">
              <div className="kicker">Quem somos</div>
              <h2>Assessoria administrativa para processos técnicos e regulatórios.</h2>
              <p className="text">
                Atuamos na organização, condução e acompanhamento de processos documentais
                para empresas e profissionais que precisam de regularidade, clareza e segurança.
              </p>
            </div>
          </div>
        </section>

        <section id="servicos" className="dark">
          <div className="container">
            <div className="title">
              <div className="kicker">Serviços</div>
              <h2>Soluções para empresas e profissionais técnicos.</h2>
              <p className="text">Atendimento voltado para regularização, registros, obras, licitações e documentação técnica.</p>
            </div>
            <div className="grid">
              {services.map((s) => (
                <div className="card" key={s}>
                  <h3>{s}</h3>
                  <p>Assessoria administrativa, análise documental e acompanhamento conforme a necessidade do cliente.</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="processo">
          <div className="container">
            <div className="title">
              <div className="kicker">Processo</div>
              <h2>Como funciona o atendimento.</h2>
            </div>
            <div className="process">
              {["Análise", "Organização", "Execução", "Acompanhamento"].map((e, i) => (
                <div className="step" key={e}>
                  <strong>0{i + 1}</strong>
                  <h3>{e}</h3>
                  <p className="text">Etapa conduzida com clareza, comunicação objetiva e foco na conclusão do procedimento.</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contato">
          <div className="container contact">
            <div>
              <div className="kicker">Contato</div>
              <h2>Solicite uma análise.</h2>
              <p className="text">WhatsApp: (11) 96703-6453<br/>E-mail: contato@plpaulino.com.br<br/>Atendimento nacional.</p>
            </div>
            <form>
              <input placeholder="Nome" />
              <input placeholder="Empresa ou profissão" />
              <input placeholder="E-mail" />
              <input placeholder="Telefone / WhatsApp" />
              <textarea placeholder="Descreva sua necessidade" />
              <a className="btn" href={whatsapp}>Enviar pelo WhatsApp</a>
            </form>
          </div>
        </section>
      </main>

      <footer>
        <div className="container">PL Paulino — Assessoria Administrativa em CREA, CFT, obras, registros e documentação técnica.</div>
      </footer>
    </div>
  );
}