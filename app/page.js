export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#120b0b",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "500px",
          height: "750px",
          borderRadius: "25px",
          overflow: "hidden",
          position: "relative",
          boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
          animation: "zoom 8s infinite alternate",
        }}
      >
        <img
          src="/save-the-date.png.PNG"
          alt="Christian et Justine"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />

        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.45), rgba(0,0,0,0.7))",
          }}
        />

        <div
          style={{
            position: "absolute",
            top: "50px",
            width: "100%",
            textAlign: "center",
            color: "white",
            animation: "fade 3s ease",
          }}
        >
          <h2
            style={{
              fontSize: "30px",
              letterSpacing: "5px",
              fontFamily: "serif",
            }}
          >
            SAVE THE DATE
          </h2>

          <h1
            style={{
              fontSize: "45px",
              fontFamily: "cursive",
              marginTop: "40px",
            }}
          >
            Christian & Justine
          </h1>

          <p style={{ fontSize: "20px", marginTop: "30px" }}>
            Ont le plaisir de vous inviter
            <br />
            à célébrer leur mariage
          </p>

          <h2 style={{ marginTop: "30px" }}>
            16 Août 2026
          </h2>

          <button
            style={{
              marginTop: "80px",
              padding: "16px 35px",
              borderRadius: "40px",
              border: "none",
              background: "#d4a373",
              color: "white",
              fontSize: "18px",
            }}
          >
            Confirmer ma présence
          </button>
        </div>
      </div>

      <style>
        {`
        @keyframes zoom {
          from { transform: scale(1); }
          to { transform: scale(1.05); }
        }

        @keyframes fade {
          from { opacity:0; transform:translateY(40px); }
          to { opacity:1; transform:translateY(0); }
        }
        `}
      </style>
    </main>
  );
}
