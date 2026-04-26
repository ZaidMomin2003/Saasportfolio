import './App.css'

const stats = [
  { number: '4+', label: 'SaaS Products Shipped' },
  { number: '∞', label: 'Sleepless Nights' },
  { number: '0', label: 'Fucks Given' },
  { number: '24/7', label: 'Grind Mode', wide: true },
]

const startups = [
  {
    name: 'Cleanmails',
    status: 'active',
    url: 'https://cleanmails.online',
    desc: 'Cold email infrastructure that agencies actually own. Self-hosted SMTP, validation, sender rotation, cadences — one payment, no monthly bleed. Built it because every cold email tool out there punishes you for growing. Fuck that.',
    tech: ['Go', 'React', 'AWS', 'SMTP Engine'],
  },
  {
    name: 'Talxify',
    status: 'active',
    url: 'https://talxify.space',
    desc: 'AI-powered interview prep that hears, speaks, and roasts your answers in real-time. Mock interviews, coding quizzes, resume builder — the whole career toolkit. Built it because interview prep shouldn\'t cost your rent money.',
    tech: ['React', 'Node.js', 'OpenAI', 'AWS'],
  },
  {
    name: 'SaaS Explainer',
    status: 'building',
    url: 'https://saasexplainer.online',
    desc: 'Vibe-edit SaaS explainer videos with just text prompts — no screen recording, no After Effects, no bullshit. Director AI handles motion graphics, transitions, and cinematic renders. $29 flat. Built it because founders shouldn\'t need a video agency to ship a demo.',
    tech: ['React', 'Remotion', 'AI/ML', 'AWS'],
  },
]

const hobbies = [
  { name: 'Coding at 3AM', desc: 'Best ideas hit different when the world shuts the fuck up' },
  { name: 'Gaming', desc: '16+ titles deep — from GTA to God of War. No casual mode exists' },
  { name: 'Writing Shayari', desc: 'Developer by day, poet by night. The bars write themselves at 2AM' },
  { name: 'Lifting Heavy Shit', desc: 'Iron therapy. Cheaper than a therapist, twice as effective' },
  { name: 'Reading', desc: 'SaaS books, psychology, and whatever rabbit hole I fall into at 2AM' },
  { name: 'Traveling', desc: 'New cities, new chaos, new stories to never shut up about' },
]

const songs = [
  { title: 'Judas', artist: 'Lady Gaga', image: 'https://img.youtube.com/vi/wagn8Wrmzuc/hqdefault.jpg' },
  { title: 'Bad Romance', artist: 'Lady Gaga', image: 'https://img.youtube.com/vi/qrO4YZeyl0I/hqdefault.jpg' },
  { title: "Daddy's Home", artist: 'Usher', image: 'https://img.youtube.com/vi/wRiTRFszVKk/hqdefault.jpg' },
  { title: 'Dark Horse', artist: 'Katy Perry', image: 'https://img.youtube.com/vi/0KSOMA3QBU0/hqdefault.jpg' },
  { title: "Harleys in Hawaii", artist: 'Katy Perry', image: 'https://img.youtube.com/vi/sQEgklEwhSo/hqdefault.jpg' },
  { title: 'Make You Mine', artist: 'PUBLIC', image: 'https://img.youtube.com/vi/jJ5x0YABfMI/hqdefault.jpg' },
  { title: 'Playdate', artist: 'Melanie Martinez', fav: true, image: 'https://img.youtube.com/vi/kknKs7cAcO8/hqdefault.jpg' },
  { title: 'High School', artist: 'Nicki Minaj', image: 'https://img.youtube.com/vi/RnbBKb3z2LQ/hqdefault.jpg' },
  { title: 'Neon Blade', artist: 'MoonDeity', image: 'https://img.youtube.com/vi/ZHnKpFiJrL0/hqdefault.jpg' },
  { title: 'Die a King', artist: 'iAmJakeHill', image: 'https://img.youtube.com/vi/osT0dGWe-38/hqdefault.jpg' },
  { title: 'Love Story', artist: 'Taylor Swift', image: 'https://img.youtube.com/vi/8xg3vE8Ie_E/hqdefault.jpg' },
  { title: 'Mask Off', artist: 'Future', fav: true, image: 'https://img.youtube.com/vi/xvZqHgFz51I/hqdefault.jpg' },
  { title: 'One of the Girls', artist: 'The Weeknd', image: 'https://img.youtube.com/vi/1hkSjMa_x8A/hqdefault.jpg' },
  { title: 'Brown Rang', artist: 'Yo Yo Honey Singh', image: 'https://img.youtube.com/vi/iX4qQlm0Sgs/hqdefault.jpg' },
  { title: 'Lose Yourself', artist: 'Eminem', image: 'https://img.youtube.com/vi/_Yhyp-_hX2s/hqdefault.jpg' },
]

const animes = [
  {
    name: 'Attack on Titan',
    genre: 'Action / Dark Fantasy',
    take: 'Eren chose freedom over everything. The man did nothing wrong. Fight me.',
    image: 'https://cdn.myanimelist.net/images/anime/10/47347.jpg',
  },
  {
    name: 'Naruto',
    genre: 'Action / Adventure',
    take: 'Pain arc is the greatest arc in anime history. No debate, no discussion.',
    image: 'https://cdn.myanimelist.net/images/anime/1141/142503.jpg',
  },
  {
    name: 'Boruto',
    genre: 'Action / Adventure',
    take: 'Hate all you want — the Momoshiki fights go absolutely insane.',
    image: 'https://cdn.myanimelist.net/images/anime/1091/99847.jpg',
  },
  {
    name: 'Solo Leveling',
    genre: 'Action / Fantasy',
    take: 'Sung Jin-Woo is the definition of a glow-up. From E-rank to god-tier.',
    image: 'https://cdn.myanimelist.net/images/anime/1801/142390.jpg',
  },
  {
    name: 'Death Note',
    genre: 'Psychological Thriller',
    take: 'Light was the real protagonist. L was overrated. I said what I said.',
    image: 'https://cdn.myanimelist.net/images/anime/1079/138100.jpg',
  },
  {
    name: 'One Punch Man',
    genre: 'Action / Comedy',
    take: 'Saitama ended every power scaling debate with one punch. Legend.',
    image: 'https://cdn.myanimelist.net/images/anime/12/76049.jpg',
  },
  {
    name: 'Demon Slayer',
    genre: 'Action / Supernatural',
    take: 'Ufotable carried this anime on its back. The animation is ungodly.',
    image: 'https://cdn.myanimelist.net/images/anime/1286/99889.jpg',
  },
  {
    name: 'Jujutsu Kaisen',
    genre: 'Supernatural / Action',
    take: 'Gojo is that guy. The animation goes fucking hard every single episode.',
    image: 'https://cdn.myanimelist.net/images/anime/1171/109222.jpg',
  },
  {
    name: 'Uzumaki',
    genre: 'Horror / Supernatural',
    take: 'Junji Ito\'s spiral nightmare animated. Pure psychological horror art.',
    image: 'https://cdn.myanimelist.net/images/anime/1207/146272.jpg',
  },
  {
    name: 'Tokyo Revengers',
    genre: 'Action / Drama',
    take: 'Mikey is the most tragic character in modern anime. Protect that man.',
    image: 'https://cdn.myanimelist.net/images/anime/1839/122012.jpg',
  },
  {
    name: 'Record of Ragnarok',
    genre: 'Action / Fantasy',
    take: 'Gods vs Humans. The concept alone is peak. Adam vs Zeus was legendary.',
    image: 'https://cdn.myanimelist.net/images/anime/1456/115123.jpg',
  },
  {
    name: 'Grand Blue Dreaming',
    genre: 'Comedy / Slice of Life',
    take: 'Funniest anime ever made. If you didn\'t cry laughing, you watched it wrong.',
    image: 'https://cdn.myanimelist.net/images/anime/1302/94882.jpg',
  },
  {
    name: 'Sakamoto Days',
    genre: 'Action / Comedy',
    take: 'Retired assassin turned convenience store owner. The fights are insane.',
    image: 'https://cdn.myanimelist.net/images/anime/1026/146459.jpg',
  },
  {
    name: 'Black Clover',
    genre: 'Action / Fantasy',
    take: 'Asta screaming his way to the top. Underrated as hell, peak shonen energy.',
    image: 'https://cdn.myanimelist.net/images/anime/2/88336.jpg',
  },
  {
    name: 'Chainsaw Man',
    genre: 'Action / Dark Fantasy',
    take: 'Denji just wanted a normal life. MAPPA gave us cinema instead.',
    image: 'https://cdn.myanimelist.net/images/anime/1806/126216.jpg',
  },
]

const games = [
  { name: 'GTA V', image: 'https://steamcdn-a.akamaihd.net/steam/apps/271590/library_600x900_2x.jpg' },
  { name: 'GTA IV', image: 'https://steamcdn-a.akamaihd.net/steam/apps/12210/library_600x900_2x.jpg' },
  { name: 'GTA San Andreas', image: 'https://steamcdn-a.akamaihd.net/steam/apps/12120/library_600x900_2x.jpg' },
  { name: 'GTA Vice City', image: 'https://steamcdn-a.akamaihd.net/steam/apps/12110/library_600x900_2x.jpg' },
  { name: 'GTA III', image: 'https://steamcdn-a.akamaihd.net/steam/apps/12100/library_600x900_2x.jpg' },
  { name: 'NFS Most Wanted', image: 'https://steamcdn-a.akamaihd.net/steam/apps/1262540/library_600x900_2x.jpg' },
  { name: 'NFS Payback', image: 'https://steamcdn-a.akamaihd.net/steam/apps/1262560/library_600x900_2x.jpg' },
  { name: 'Just Cause 2', image: 'https://steamcdn-a.akamaihd.net/steam/apps/8190/library_600x900_2x.jpg' },
  { name: 'Just Cause 3', image: 'https://steamcdn-a.akamaihd.net/steam/apps/225540/library_600x900_2x.jpg' },
  { name: 'Far Cry 3', image: 'https://steamcdn-a.akamaihd.net/steam/apps/220240/library_600x900_2x.jpg' },
  { name: 'Far Cry 4', image: 'https://steamcdn-a.akamaihd.net/steam/apps/298110/library_600x900_2x.jpg' },
  { name: 'God of War', image: 'https://steamcdn-a.akamaihd.net/steam/apps/1593500/library_600x900_2x.jpg' },
]

const marqueeItems = [
  'FOUNDER', 'BUILDER', 'DEVELOPER', 'NIGHT OWL', 'ANIME NERD',
  'SAAS JUNKIE', 'CAFFEINE ADDICT', 'GAMER', 'SHAYAR', 'ZERO FUCKS GIVEN',
]

const SOCIALS = {
  linkedin: 'https://www.linkedin.com/in/arshad-momin-a3139b21b/',
  instagram: 'https://www.instagram.com/fallen_zaid/',
  x: 'https://x.com/zaidbuilds',
}

function App() {

  return (
    <>
      <div className="noise" />

      {/* HEADER */}
      <header className="top-header">
        <a href="#" className="logo">ZAID<span className="logo-dot">.</span></a>
      </header>

      {/* HERO */}
      <section className="hero" id="home">
        <div className="hero-bg-text">ZAID</div>
        <div className="hero-orb" />
        <div className="hero-orb-2" />
        <div className="hero-content">
          <div className="hero-label">SaaS Portfolio 2026</div>
          <h1>
            <span className="line-1">I BUILD</span>
            <span className="line-2">SAAS.</span>
          </h1>
          <div className="hero-bottom">
            <p className="hero-desc">
              Founder. Developer. The guy who ships at 4AM and doesn't apologize for it.
              Building things that <span className="accent">actually fucking matter</span>.
            </p>
            <div className="hero-scroll">
              <span>Scroll</span>
              <div className="scroll-line" />
            </div>
          </div>
        </div>
        <div className="hero-image">
          <div className="hero-image-glow" />
          <div className="hero-image-frame">
            <img src="/zaid.jpg" alt="Zaid" />
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="marquee-wrap">
        <div className="marquee">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i}>{item}<span className="dot">/</span></span>
          ))}
        </div>
      </div>

      {/* ABOUT */}
      <section className="section" id="about">
        <div className="section-tag">About</div>
        <h2 className="section-title">
          <span className="outline">WHO THE HELL </span>
          <span className="fill">AM I?</span>
        </h2>
        <p className="section-subtitle">
          Not your average LinkedIn bio. Here's the real shit.
        </p>
        <div className="about-layout">
          <div className="about-left">
            <div className="big-quote">"</div>
            <p className="about-para">
              I'm <span className="accent">Zaid (Arshad)</span> — B.Tech in Computer Science & Engineering,
              SaaS founder, and someone who'd rather ship a product at 4AM than sit through
              another pointless meeting. I don't do corporate bullshit. I build things that{' '}
              <span className="accent">actually matter</span>.
            </p>
            <p className="about-para">
              Started coding because I was too broke to hire developers. Stayed because
              there's nothing more fucking satisfying than watching your code come to life.
              Now I build SaaS products, break things, and occasionally sleep.
            </p>
            <p className="about-para">
              My philosophy? <span className="accent">Move fast, break shit, learn faster.</span> If
              you're not failing, you're not trying hard enough. Simple as that.
            </p>
          </div>
          <div className="about-right">
            {stats.map((s) => (
              <div className={`about-stat${s.wide ? ' wide' : ''}`} key={s.label}>
                <div className="stat-num">{s.number}</div>
                <div className="stat-text">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* HOBBY PILLS */}
        <div className="hobby-pills-wrap">
          <div className="hobby-pills-label">Things I do when I'm not shipping</div>
          <div className="hobby-pills">
            {hobbies.map((h) => (
              <span className="hobby-pill" key={h.name}>{h.name}</span>
            ))}
          </div>
        </div>
      </section>

      {/* SHAYARI */}
      <section className="shayari-section">
        <div className="shayari-retro">
          <div className="shayari-border-top" />
          <div className="shayari-tag">✦ Shayar Mode Activated ✦</div>
          <div className="shayari-lines">
            <p>Nazar milte hi usse, mera <span className="accent">Logic</span> mar jaata hai,</p>
            <p>Uski Thighs dekh kar, poora <span className="accent">System</span> thar-tharata hai.</p>
            <div className="shayari-break">· · ·</div>
            <p>Kehti hai "Bas kar pagle", par main <span className="accent">Lust</span> mein hota hoon,</p>
            <p>Jab woh Zip kholti hai, toh <span className="accent">Production</span> hi phat jaata hai.</p>
          </div>
          <div className="shayari-author">— Zaid's retard ass</div>
          <div className="shayari-border-bottom" />
        </div>
      </section>

      {/* SAAS PRODUCTS */}
      <section className="section" id="startups">
        <div className="section-tag">Ventures</div>
        <h2 className="section-title">
          <span className="outline">THE SHIT </span>
          <span className="fill">I'VE BUILT</span>
        </h2>
        <p className="section-subtitle">
          Every SaaS taught me something. Mostly that sleep is overrated.
        </p>
        <div className="startups-grid">
          {startups.map((s, i) => (
            <a
              className={`startup-card ${i === 0 ? 'featured' : ''}`}
              key={s.name}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="startup-card-bg-num">{String(i + 1).padStart(2, '0')}</div>
              <div className="startup-card-header">
                <span className={`startup-status-tag ${s.status}`}>{s.status}</span>
                <span className="startup-card-arrow">↗</span>
              </div>
              <div className="startup-card-body">
                <h3 className="startup-card-name">{s.name}</h3>
                <p className="startup-card-desc">{s.desc}</p>
              </div>
              <div className="startup-tech-stack">
                {s.tech.map((t) => <span key={t}>{t}</span>)}
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* ANIME */}
      <section className="section anime-section" id="anime">
        <div className="section-tag">Weeb Corner</div>
        <h2 className="section-title">
          <span className="outline">YES I WATCH </span>
          <span className="fill">ANIME</span>
        </h2>
        <p className="section-subtitle">
          Deal with it. {animes.length} titles deep. Here are my non-negotiable hot takes.
        </p>
      </section>

      <div className="anime-scroll-wrap">
        <div className="anime-scroll-track">
          {[...animes, ...animes].map((a, i) => (
            <div className="anime-card" key={`${a.name}-${i}`}>
              <div className="anime-card-img">
                <img src={a.image} alt={a.name} loading="lazy" />
                <div className="anime-card-overlay" />
              </div>
              <div className="anime-card-info">
                <span className="anime-card-genre">{a.genre}</span>
                <h3>{a.name}</h3>
                <p>{a.take}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* GAMING */}
      <section className="section anime-section" id="gaming">
        <div className="section-tag">Player One</div>
        <h2 className="section-title">
          <span className="outline">I GAME </span>
          <span className="fill">A LOT</span>
        </h2>
        <p className="section-subtitle">
          {games.length}+ titles. From stealing cars in GTA to killing gods in God of War. No casual mode.
        </p>
      </section>

      <div className="anime-scroll-wrap game-scroll-wrap">
        <div className="anime-scroll-track game-scroll-track">
          {[...games, ...games].map((g, i) => (
            <div className="game-card" key={`${g.name}-${i}`}>
              <div className="game-card-img">
                <img src={g.image} alt={g.name} loading="lazy" />
                <div className="game-card-overlay" />
              </div>
              <div className="game-card-info">
                <h3>{g.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* SONGS */}
      <section className="section" id="songs">
        <div className="section-tag">Playlist</div>
        <h2 className="section-title">
          <span className="outline">SONGS ON </span>
          <span className="fill">REPEAT</span>
        </h2>
        <p className="section-subtitle">
          The soundtrack to my 3AM coding sessions. Plus all Honey Singh & Eminem. Judge all you want.
        </p>
        <a
          href="https://music.youtube.com/playlist?list=PL49c5AB-5urcXn97D7N9dj_PF8zNcN5bT"
          target="_blank"
          rel="noopener noreferrer"
          className="playlist-btn"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M12 0C5.376 0 0 5.376 0 12s5.376 12 12 12 12-5.376 12-12S18.624 0 12 0zm-1.2 16.8V7.2l6 4.8-6 4.8z"/></svg>
          Open Full Playlist on YT Music
        </a>
        <div className="songs-grid">
          {songs.map((s) => (
            <div className={`song-tile ${s.fav ? 'fav' : ''}`} key={s.title}>
              <div className="song-tile-img">
                <img src={s.image} alt={s.title} loading="lazy" />
                {s.fav && <div className="song-tile-fav">★</div>}
              </div>
              <div className="song-tile-info">
                <h4>{s.title}</h4>
                <span>{s.artist}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section" id="cta">
        <div className="cta-eyebrow">Let's Talk</div>
        <h2 className="cta-heading">
          <span className="outline">WANNA BUILD</span>
          <span className="fill">CRAZY SHIT?</span>
        </h2>
        <p className="cta-text">
          I'm always down to talk SaaS, tech, or whatever the hell you got in mind.
          Worst case, we grab coffee. Best case, we build something legendary.
        </p>
        <div className="cta-actions">
          <a href={SOCIALS.linkedin} target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
          </a>
          <a href={SOCIALS.x} target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="X">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
          </a>
          <a href={SOCIALS.instagram} target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Instagram">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
          </a>
        </div>
        <div className="cta-github-note">
          <p>
            Oh and I've got <span className="accent">55+ repos</span> on GitHub — ML models, full-stack apps, the whole damn buffet.
            Would love to flex the link but every project is public with live auth keys on Vercel & AWS.
            I'm too deep in shipping mode to go back and lock that shit down. You'll just have to take my word for it.
            Or hire me and find out.
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-left">
          &copy; 2026 <span className="accent">ZAID</span> — Built with rage, caffeine & zero sleep.
        </div>
        <div className="footer-right">
          <a href={SOCIALS.x} target="_blank" rel="noopener noreferrer" className="social-icon sm" aria-label="X">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
          </a>
          <a href={SOCIALS.instagram} target="_blank" rel="noopener noreferrer" className="social-icon sm" aria-label="Instagram">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
          </a>
          <a href={SOCIALS.linkedin} target="_blank" rel="noopener noreferrer" className="social-icon sm" aria-label="LinkedIn">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
          </a>
        </div>
      </footer>
    </>
  )
}

export default App
