export default function App() {
  return (
    <div
      style={{
        backgroundColor: "#0f172a",
        color: "white",
        minHeight: "100vh",
        padding: "40px",
        fontFamily: "Arial",
      }}
    >
      <h1 style={{ fontSize: "48px", marginBottom: "20px" }}>
        PL PAULINO
      </h1>

      <h2 style={{ color: "#38bdf8" }}>
        Consultoria e Soluções Inteligentes
      </h2>

      <p style={{ maxWidth: "700px", marginTop: "100px", lineHeight: "28px" }}>
                Empresa especializada em gestão documental, regularização,
            acompanhamento técnico, automação de processos e soluções digitais.
      </p>

      <button
        style={{
          marginTop: "30px",
          padding: "15px 25px",
          backgroundColor: "#38bdf8",
          border: "none",
          borderRadius: "8px",
          fontSize: "18px",
          cursor: "pointer",
        }}
      >
        Entrar em contato
      </button>

      <div style={{ marginTop: "60px" }}>
        <h3>Nossos Serviços</h3>

        <ul style={{ lineHeight: "35px" }}>
          <li>Gestão Documental</li>
          <li>Automação com IA</li>
          <li>Consultoria Técnica</li>
          <li>Regularização</li>
          <li>Controle Operacional</li>
        </ul>
      </div>
    </div>
  )
}