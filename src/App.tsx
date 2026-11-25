
import "./App.css";

function App() {
  return (
    <main className="landing">
      <video
        className="background-video"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      >
        <source src="/videos/kandimilk.mp4" type="video/mp4" />
      </video>

      <div className="video-overlay" />

      {/* Centered Maricon logo */}
      <img
        className="maricon-logo"
        src="/images/kandi.png"
        alt="Maricon"
      />

      {/* Instagram */}
      <a
        className="instagram"
        href="https://www.instagram.com/kandimilk/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visit Kandi Milk on Instagram"
      >
        <span>@KANDIMILK</span>
      </a>
    </main>
  );
}

export default App;
