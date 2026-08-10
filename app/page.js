export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#f8eee8",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
      }}
    >
      <div
        style={{
          textAlign: "center",
          background: "white",
          padding: "20px",
          borderRadius: "20px",
          maxWidth: "500px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
        }}
      >
        <img
          src="/save-the-date.png.PNG"
          alt="Christian & Justine"
          style={{
            width: "100%",
            borderRadius: "15px",
          }}
        />

        <h1 style={{ fontSize: "32px", marginTop: "20px" }}>
          Christian & Justine
        </h1>

        <p style={{ fontSize: "18px" }}>
          Ont le plaisir de vous inviter à célébrer leur mariage
        </p>

        <h2>16 Août 2026</h2>

        <button
          style={{
            marginTop: "20px",
            padding: "15px 30px",
            borderRadius: "30px",
            border: "none",
            background: "#d4a373",
            color: "white",
            fontSize: "18px",
          }}
        >
          Confirmer ma présence
        </button>
      </div>
    </main>
  );
}
