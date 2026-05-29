import LeadForm from './components/LeadForm';

export default function Home() {
  return (
    <main>
      {/* ===== HERO ===== */}
      <section className="hero">
        <div className="glow"></div>

        <div className="topbar">
          <div className="logo-text">
            <strong>ART MEDIA GROUP</strong>
            <span>REKLAMA AGENTLIGI</span>
          </div>
          <a href="tel:+998883295999" className="call-btn">
            <span className="call-dot"></span>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M3 5a2 2 0 0 1 2-2h3.3a1 1 0 0 1 .95.68l1.5 4.5a1 1 0 0 1-.5 1.2L8.5 10.7a12 12 0 0 0 4.8 4.8l1.3-2.2a1 1 0 0 1 1.2-.5l4.5 1.5a1 1 0 0 1 .68.95V19a2 2 0 0 1-2 2A16 16 0 0 1 3 5Z" />
            </svg>
            Bog&apos;lanish
          </a>
        </div>

        <div className="hero-content">
          <div className="trust-pill">🎯 7 YILLIK TAJRIBA · JIZZAX</div>
          <h1>
            Reklamada <em>ko&apos;zga tashlaning</em>
          </h1>
          <div className="stats">
            <div className="stat">
              <strong>
                1000<em>+</em>
              </strong>
              <span>MIJOZ</span>
            </div>
            <div className="stat">
              <strong>
                7<em>+</em>
              </strong>
              <span>YIL FAOLIYAT</span>
            </div>
            <div className="stat">
              <strong>
                91<em>%</em>
              </strong>
              <span>MAMNUN MIJOZ</span>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section className="services">
        <div className="sec-title">Xizmat turlarimiz</div>
        <div className="svc-grid">
          <div className="svc-card">
            <div className="svc-ic">
              <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="12" rx="1" />
                <path d="M12 16v4M8 20h8" />
              </svg>
            </div>
            <h3>Bilbord</h3>
            <p>Katta o&apos;lchamli ko&apos;cha reklama bannerlari</p>
          </div>
          <div className="svc-card">
            <div className="svc-ic">
              <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 7V5h16v2M9 20h6M12 5v15" />
              </svg>
            </div>
            <h3>Bo&apos;rtma harflar</h3>
            <p>Hajmli, yorug&apos;likli firma harflari va logo</p>
          </div>
          <div className="svc-card">
            <div className="svc-ic">
              <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="M3 9h18" />
              </svg>
            </div>
            <h3>Banner</h3>
            <p>Reklama bannerlari</p>
          </div>
          <div className="svc-card">
            <div className="svc-ic">
              <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 3v18M5 8l7-5 7 5M6 21h12" />
              </svg>
            </div>
            <h3>Stend</h3>
            <p>Ko&apos;rgazma va savdo stendlari, konstruksiyalar</p>
          </div>
          <div className="svc-card wide">
            <div className="svc-ic">
              <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M8 21h8M12 17v4M7 4h10v4a5 5 0 0 1-10 0V4ZM17 5h2a2 2 0 0 1 0 4h-2M7 5H5a2 2 0 0 0 0 4h2" />
              </svg>
            </div>
            <h3>Statuetka</h3>
            <p>Mukofot va sovrin statuetkalari</p>
          </div>
        </div>
      </section>

      {/* ===== FORM ===== */}
      <LeadForm />

      {/* ===== FOOTER ===== */}
      <footer>
        <strong>ART MEDIA GROUP</strong>
        <p>
          Jizzax shahar · <a href="tel:+998883295999">+998 88 329 59 99</a>
        </p>
      </footer>
    </main>
  );
}
