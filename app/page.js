export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        width: "100%",
        background:
          "linear-gradient(180deg, #f8d7dc 0%, #b76e79 100%)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
        position: "relative",
      }}
    >

      <style>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fall {
          from {
            transform: translateY(-50px) rotate(0deg);
            opacity: 0;
          }
          to {
            transform: translateY(900px) rotate(360deg);
            opacity: 1;
          }
        }

        .petal {
          position: absolute;
          color: #d88b9a;
          font-size: 25px;
          animation: fall 8s linear infinite;
        }
      `}</style>


      {/* pétales animés */}
      <div className="petal" style={{left:"10%", animationDelay:"0s"}}>🌸</div>
      <div className="petal" style={{left:"35%", animationDelay:"2s"}}>🌸</div>
      <div className="petal" style={{left:"70%", animationDelay:"4s"}}>🌸</div>
      <div className="petal" style={{left:"90%", animationDelay:"1s"}}>🌸</div>


      <div
        style={{
          width: "90%",
          maxWidth: "450px",
          background:
            "linear-gradient(180deg,#e9bfc7,#9b4b59)",
          borderRadius: "25px",
          padding: "25px",
          textAlign: "center",
          color: "white",
          boxShadow:
            "0 20px 60px rgba(0,0,0,0.35)",
        }}
      >

        <img
          src="/save-the-date.png"
          alt="Christian et Justine"
          style={{
            width: "100%",
            borderRadius: "20px",
            marginBottom: "25px",
          }}
        />


        <h2
          style={{
            letterSpacing:"5px",
            opacity:0,
            animation:"fadeUp 1s forwards",
            animationDelay:"0.3s"
          }}
        >
          SAVE THE DATE
        </h2>


        <h1
          style={{
            fontSize:"38px",
            fontFamily:"cursive",
            opacity:0,
            animation:"fadeUp 1s forwards",
            animationDelay:"0.7s"
          }}
        >
          Christian & Justine
        </h1>


        <p
          style={{
            fontSize:"18px",
            opacity:0,
            animation:"fadeUp 1s forwards",
            animationDelay:"1s"
          }}
        >
          Ont le plaisir de vous inviter
          <br/>
          à célébrer leur mariage
        </p>


        <h2
          style={{
            opacity:0,
            animation:"fadeUp 1s forwards",
            animationDelay:"1.3s"
          }}
        >
          Dimanche 16 Août 2026
        </h2>


        <button
          style={{
            marginTop:"30px",
            padding:"16px 35px",
            borderRadius:"40px",
            border:"none",
            background:"#7d1f2b",
            color:"white",
            fontSize:"17px",
            boxShadow:"0 10px 25px rgba(0,0,0,0.3)",
            opacity:0,
            animation:"fadeUp 1s forwards",
            animationDelay:"1.6s"
          }}
        >
          ❤️ Confirmer ma présence
        </button>


      </div>

    </main>
  );
}
