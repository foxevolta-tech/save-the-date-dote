export default function Home() {
  const petals = Array.from({ length: 25 });

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "linear-gradient(#fff1f5,#f8d7da)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
        position: "relative",
        padding: "20px",
      }}
    >

      {petals.map((_, i) => (
        <span
          key={i}
          style={{
            position: "absolute",
            top: "-20px",
            left: `${Math.random() * 100}%`,
            width: "15px",
            height: "15px",
            background: "#e8a0a8",
            borderRadius: "100% 0 100% 0",
            opacity: 0.8,
            animation: `fall ${5 + Math.random()*5}s linear infinite`,
            animationDelay: `${Math.random()*5}s`,
          }}
        />
      ))}


      <div
        style={{
          width:"100%",
          maxWidth:"500px",
          height:"750px",
          borderRadius:"30px",
          overflow:"hidden",
          position:"relative",
          boxShadow:"0 20px 60px rgba(0,0,0,.3)",
        }}
      >

        <img
          src="/save-the-date.png"
          alt="Christian et Justine"
          style={{
            width:"100%",
            height:"100%",
            objectFit:"cover",
          }}
        />

        <div
          style={{
            position:"absolute",
            inset:0,
            background:
            "linear-gradient(to bottom,rgba(255,255,255,.15),rgba(100,0,20,.45))"
          }}
        />


        <div
          style={{
            position:"absolute",
            top:"50px",
            width:"100%",
            textAlign:"center",
            color:"white",
            padding:"20px",
            animation:"appear 2s ease",
          }}
        >

          <h2
          style={{
            letterSpacing:"6px",
            fontSize:"28px",
            fontFamily:"serif"
          }}>
            SAVE THE DATE
          </h2>


          <h1
          style={{
            fontSize:"45px",
            fontFamily:"cursive",
            marginTop:"50px",
          }}>
            Christian & Justine
          </h1>


          <p style={{
            fontSize:"20px",
            marginTop:"30px"
          }}>
            Ont le plaisir de vous inviter
            <br/>
            à célébrer leur mariage
          </p>


          <h2 style={{
            marginTop:"30px",
            fontSize:"28px"
          }}>
            16 Août 2026
          </h2>


          <button
          style={{
            marginTop:"80px",
            padding:"18px 40px",
            borderRadius:"40px",
            border:"2px solid #fff",
            background:"#b76e79",
            color:"white",
            fontSize:"18px",
            boxShadow:"0 10px 30px rgba(0,0,0,.3)"
          }}>
            ❤️ Confirmer ma présence
          </button>

        </div>

      </div>


      <style>
      {`

      @keyframes fall {
        0% {
          transform:translateY(-20px) rotate(0deg);
        }
        100% {
          transform:translateY(100vh) rotate(360deg);
        }
      }


      @keyframes appear {
        from {
          opacity:0;
          transform:translateY(50px);
        }

        to {
          opacity:1;
          transform:translateY(0);
        }
      }

      `}
      </style>


    </main>
  );
}
