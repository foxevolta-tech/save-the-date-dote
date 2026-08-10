export default function Home() {
  return (
    <main style={{
      minHeight: "100vh",
      background: "linear-gradient(#fff5f7, #f8e1e8)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "30px"
    }}>
      <div style={{
        textAlign: "center",
        background: "white",
        padding: "50px",
        borderRadius: "25px",
        boxShadow: "0 10px 30px rgba(0,0,0,0.1)"
      }}>
        <h1 style={{fontSize:"45px"}}>
          Christian & Justine
        </h1>

        <p style={{fontSize:"22px"}}>
          Ont le plaisir de vous inviter à célébrer leur mariage
        </p>

        <h2>
          16 Août 2026
        </h2>

        <button style={{
          marginTop:"25px",
          padding:"15px 30px",
          borderRadius:"30px",
          border:"none",
          background:"#d4a373",
          color:"white",
          fontSize:"18px"
        }}>
          Confirmer ma présence
        </button>
      </div>
    </main>
  );
}