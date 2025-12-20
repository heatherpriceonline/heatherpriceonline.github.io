export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 sm:items-start">
        <h3>Hi, my name is</h3>
        <h1>Heather Scalia.</h1>
        <p>
          A software engineer turned project manager with 12 years of
          professional experience.
        </p>
        <a
          href="https://www.linkedin.com/in/heather-price-40803761/"
          target="_blank"
        >
          LinkedIn
        </a>
        <a href="https://github.com/heatherpriceonline" target="_blank">
          GitHub
        </a>
        <a href="https://www.youtube.com/@codewithheather3510" target="_blank">
          Youtube
        </a>
      </main>
    </div>
  );
}
