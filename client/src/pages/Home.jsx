
import './Home.css';

function Home() {
  return (
    <div className="home">
      <h1>Dog Quest</h1>
      <section>
        <h2>About the Game</h2>
        <p>
          This Game is supposed to be an idle / Incremental game about a dog digging bones. It's supposed to start small and work up to bigger things but with less of a focus on clicking.
        </p>
      </section>
      <section>
        <h2>How to Play</h2>
        <p>
          Simply Signup or login, Select Game select a hole to dig in and the let it go
        </p>
      </section>
      <section>
        <h2>Why This Game</h2>
        <p>
          This Game is inspired by severa other incremental games and I hope to add my own twist on both theme and later gameplay to the mix
        </p>
      </section>
    </div>
  );
}

export default Home;