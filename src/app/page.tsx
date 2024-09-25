import { Twitch, Youtube } from 'iconic-react';
import Image from 'next/image';
import imageAsset from './public/githubIcon.png';

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1>UNDER CONSTRUCTION</h1>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a href="https://twitch.tv/codewithheather" target="_blank">
          <Twitch />
        </a>
        <a href="https://www.youtube.com/@codewithheather3510" target="_blank">
          <Youtube />
        </a>
        <a href="https://github.com/heatherpriceonline" target="_blank">
          <Image src={imageAsset} alt="github icon" width={24} height={24} />
        </a>
      </footer>
    </div>
  );
}
