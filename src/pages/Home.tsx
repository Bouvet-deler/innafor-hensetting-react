import togVedStasjon from "/tog_ved_stasjon.jpg";

export default function Home() {
  return (
    <>

      <nav className="p-4 w-full mb-4 bg-blue hover:bg-green transition-all">

      </nav>

      <h1>Hensetting</h1>
      <h1>Bilde av Sandnes stasjon</h1>
      <img
        src={togVedStasjon}
        className="tog-ved-stasjon"
        alt="Tog ved Sandnes stasjon"
      />
    </>
  );
}
