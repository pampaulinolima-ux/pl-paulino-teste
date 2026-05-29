export default function App() {
  const whatsapp = "https://wa.me/5511967036453";

  return (
    <div>
      <style>{`
        *{box-sizing:border-box}

        body{
          margin:0;
          font-family:Arial,Helvetica,sans-serif;
          background:#fbf8f2;
          color:#1f2933;
        }

        .container{
          width:100%;
          max-width:1600px;
          padding-left:72px;
          padding-right:72px;
          margin:0 auto;
        }

        header{
          background:#fbf8f2;
          border-bottom:1px solid #e5ddcf;
          position:sticky;
          top:0;
          z-index:10;
        }

        .nav{
          height:78px;
          display:flex;
          justify-content:space-between;
          align-items:center;
        }

        .logo{
          font-weight:900;
          font-size:25px;
          color:#061a33;
        }

        .logo span{
          color:#b8913b;
        }

        nav{
          display:flex;
          gap:26px;
        }

        nav a{
          text-decoration:none;
          color:#1f2933;
          font-weight:800;
        }

        .btn{
          display:inline-block;
          background:#0f4c81;
          color:#fff;
          text-decoration:none;
          padding:14px 24px;
          border-radius:999px;
          font-weight:900;
        }

        .hero{
          padding:105px 0;
          background:linear-gradient(135deg,#f4efe6,#fff);
        }

        .hero-grid{
          display:grid;
          grid-template-columns:1.2fr .8fr;
          gap:80px;
          align-items:center;
        }

        .tag{
          color:#b8913b;
          text-transform:uppercase;
          letter-spacing:2px;
          font-weight:900;
          font-size:13px;
        }

        h1{
          font-size:72px;
          max-width:900px;
          line-height:1.02;
          color:#061a33;
          margin:16px 0 24px;
          letter-spacing:-2px;
        }

        p{
          line-height:1.75;
          color:#5b6573;
          font-size:17px;
        }

        .hero p{
          max-width:850px;
          font-size:19px;
        }

        .card-blue{
          background:#061a33;
          color:white;
          padding:42px;
          border-radius:28px;
        }

        .card-blue h3{
          font-size:30px;
          margin-top:0;
          color:white;
        }

        .card-blue p{
          color:#dce8f3;
        }

        section{
          padding:110px 0;
        }

        .center{
          text-align:center;
          max-width:900px;
          margin:0 auto 50px;
        }

        h2{
          font-size:48px;
          color:#061a33;
          margin:12px 0;
          line-height:1.08;
        }

        .grid{
          display:grid;
          grid-template-columns:repeat(3,1fr);
          gap:24px;
        }

        .card{
          background:white;
          border:1px solid #e5ddcf;
          border-radius:22px;
          padding:32px;
          box-shadow:0 14px 36px rgba(31,41,51,.05);
        }

        .card h3{
          color:#061a33;
          font-size:22px;
          margin-top:0;
        }

        .list{
          display:grid;
          grid-template-columns:repeat(2,1fr);
          gap:14px;
        }

        .item{
          background:white;
          border:1px solid #e5ddcf;
          padding:16px;
          border-radius:14px;
          font-weight:800;
        }

        .item:before{
          content:"✓";
          color:#b8913b;
          margin-right:8px;
        }

        .beige{
          background:#f4efe6;
        }

        .contact{
          display:grid;
          grid-template-columns:.9fr 1.1fr;
          gap:32px;
        }

        input,textarea{
          width:100%;
          padding:15px;
          border:1px solid #e5ddcf;
          margin-bottom:12px;
          border-radius:12px;
          font-size:15px;
        }

        textarea{
          min-height:130px;
        }

        footer{
          background:#061a33;
          color:white;
          padding:34px 0;
        }

        @media(max-width:900px){
          .container{
            padding-left:24px;
            padding-right:24px;
          }

          .hero-grid,
          .grid,
          .list,
          .contact{
            grid-template-columns:1fr;
          }

          nav{
            display:none;
          }

          h1{
            font-size:40px;
          }

          h2{
            font-size:34px;
          }
        }
      `}</style>

      <header>
        <div className="container nav">
          <div className="logo">
            PL <span>PAULINO</span>
          </div>

          <nav>
            <a href="#servicos">Serviços</a>
            <a href="#como">Como funciona</a>
            <a href="#contato">Contato</a>
          </nav>

          <a className="btn" href={whatsapp}>
            WhatsApp
          </a>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="container hero-grid">
            <div>
              <div className="tag">CREA • CFT • Obras • ART • CAT</div>

              <h1>
                Assessoria administrativa para regularizar sua documentação técnica.
              </h1>

              <p>
                Atendimento para empresas e profissionais que precisam de suporte em
                CREA Nacional, CFT, registro de obra, registro profissional, ART,
                CAT, licitações, certidões e cadastro de fornecedores.
              </p>

              <a className="btn" href={whatsapp}>
                Falar com especialista
              </a>
            </div>

            <div className="card-blue">
              <h3>O que a PL Paulino resolve?</h3>
              <p>
                Organizamos e acompanhamos processos documentais para reduzir
                dúvidas, pendências e retrabalho.
              </p>
              <p>
                Atendimento nacional para empresas, profissionais técnicos e
                prestadores de serviço.
              </p>
            </div>
          </div>
        </section>

        <section id="servicos">
          <div className="container">
            <div className="center">
              <div className="tag">Serviços</div>
              <h2>Principais áreas de atuação</h2>
              <p>
                Serviços administrativos para regularização, documentação técnica,
                obras e processos empresariais.
              </p>
            </div>

            <div className="grid">
              {[
                "CREA Nacional e CFT",
                "Registro de obra",
                "Registro profissional",
                "ART e responsável técnico",
                "CAT e acervo técnico",
                "Licitações e fornecedores",
              ].map((s) => (
                <div className="card" key={s}>
                  <h3>{s}</h3>
                  <p>
                    Orientação, organização documental e acompanhamento
                    administrativo conforme a necessidade.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="beige">
          <div className="container">
            <div className="center">
              <div className="tag">Procedimentos</div>
              <h2>Soluções para empresas e profissionais técnicos</h2>
            </div>

            <div className="list">
              {[
                "Registro e regularização de empresas",
                "Registro e regularização de profissionais",
                "Registro de obra",
                "ART de obra ou serviço",
                "ART de cargo e função",
                "CAT — Certidão de Acervo Técnico",
                "Baixa de responsável técnico",
                "Certidões diversas",
                "Cadastro de fornecedores",
                "Documentação para licitação",
              ].map((item) => (
                <div className="item" key={item}>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="como">
          <div className="container">
            <div className="center">
              <div className="tag">Como funciona</div>
              <h2>Atendimento simples e organizado</h2>
            </div>

            <div className="grid">
              {[
                "Análise da demanda",
                "Organização documental",
                "Acompanhamento do processo",
              ].map((e) => (
                <div className="card" key={e}>
                  <h3>{e}</h3>
                  <p>
                    Comunicação objetiva, conferência de informações e suporte
                    até a conclusão.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contato" className="beige">
          <div className="container contact">
            <div>
              <div className="tag">Contato</div>
              <h2>Solicite orientação</h2>
              <p>WhatsApp: (11) 96703-6453</p>
              <p>E-mail: contato@plpaulino.com.br</p>
              <p>Atendimento: todo o território nacional.</p>
            </div>

            <form>
              <input placeholder="Nome" />
              <input placeholder="Empresa ou profissão" />
              <input placeholder="Telefone / WhatsApp" />
              <textarea placeholder="Descreva sua necessidade" />
              <a className="btn" href={whatsapp}>
                Enviar pelo WhatsApp
              </a>
            </form>
          </div>
        </section>
      </main>

      <footer>
        <div className="container">
          PL Paulino — Assessoria Administrativa.
        </div>
      </footer>
    </div>
  );
}