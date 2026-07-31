export const companyPage = {
    title: "COMPANY | MIRASISONE",
    links: [
          '<link rel="preconnect" href="https://fonts.googleapis.com">',
          '<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>',
          '<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Noto+Sans+JP:wght@300;400;500;700&family=Noto+Serif+JP:wght@400;500;700;900&family=Oswald:wght@600;700&display=swap" rel="stylesheet">',
        ],
    style: `
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
            html { scroll-behavior: smooth; }
                body {
                      font-family: "Noto Sans JP", sans-serif;
                            color: #17182c;
                                  background: linear-gradient(160deg, #f7fbff 0%, #eef4ff 55%, #f8fbff 100%);
                                        -webkit-font-smoothing: antialiased;
                                              overflow-x: hidden;
                                                  }
                                                      a { color: inherit; text-decoration: none; }
                                                          img { display: block; max-width: 100%; }
                                                              button { border: 0; background: none; font: inherit; cursor: pointer; }
                                                                  :root {
                                                                        --dark: #17182c;
                                                                              --ink: #253058;
                                                                                    --muted: #687592;
                                                                                          --purple: #7B6CF6;
                                                                                                --teal: #4ECDC4;
                                                                                                      --line: rgba(78,205,196,0.2);
                                                                                                            --white: rgba(255,255,255,0.88);
                                                                                                                  --gradient: linear-gradient(135deg, #4ECDC4 0%, #7B6CF6 100%);
                                                                                                                        --easing: cubic-bezier(0.19, 1, 0.22, 1);
                                                                                                                            }
                                                                                                                                .font-en { font-family: "Inter", sans-serif; }
                                                                                                                                    .font-serif { font-family: "Noto Serif JP", serif; }
                                                                                                                                        .container { width: min(1180px, calc(100% - 40px)); margin: 0 auto; }
                                                                                                                                            .geo-bg {
                                                                                                                                                  position: fixed;
                                                                                                                                                        inset: 0;
                                                                                                                                                              z-index: -1;
                                                                                                                                                                    pointer-events: none;
                                                                                                                                                                          opacity: 0.86;
                                                                                                                                                                                background-image:
                                                                                                                                                                                        linear-gradient(rgba(78,205,196,0.11) 1px, transparent 1px),
                                                                                                                                                                                                linear-gradient(90deg, rgba(123,108,246,0.09) 1px, transparent 1px);
                                                                                                                                                                                                      background-size: 76px 76px;
                                                                                                                                                                                                            mask-image: linear-gradient(to bottom, #000 0%, rgba(0,0,0,0.78) 58%, transparent 100%);
                                                                                                                                                                                                                }
                                                                                                                                                                                                                #main-nav {
                                                                                                                                                                                                                position: fixed; top: 0; left: 0; right: 0; z-index: 100;
                                                                                                                                                                                                                background: rgba(255,255,255,0.88);
                                                                                                                                                                                                                backdrop-filter: blur(20px);
                                                                                                                                                                                                                -webkit-backdrop-filter: blur(20px);
                                                                                                                                                                                                                border-bottom: 1px solid rgba(78,205,196,0.18);
                                                                                                                                                                                                                transition: background 0.3s ease, border-color 0.3s ease;
                                                                                                                                                                                                                }
                                                                                                                                                                                                                @media (min-width: 1024px) {
                                                                                                                                                                                                                #main-nav { background: rgba(255,255,255,0.92); border-bottom: 1px solid rgba(78,205,196,0.18); backdrop-filter: blur(20px); }
                                                                                                                                                                                                                }
                                                                                                                                                                                                                .nav-inner { display: flex; align-items: center; justify-content: space-between; height: 64px; }
                                                                                                                                                                                                                .nav-logo { display: flex; align-items: center; gap: 10px; }
                                                                                                                                                                                                                .nav-logo-img { display: block; width: auto; height: 38px; object-fit: contain; }
                                                                                                                                                                                                                .nav-logo-copy, .nav-logo .nav-logo-copy {
                                                                                                                                                                                                                display: block; font-family: "Inter", "Noto Sans JP", sans-serif; font-size: 11px; line-height: 1.45;
                                                                                                                                                                                                                font-weight: 500; letter-spacing: 0.04em; color: #243262; white-space: nowrap;
                                                                                                                                                                                                                }
                                                                                                                                                                                                                @media (max-width: 560px) {
                                                                                                                                                                                                                .nav-logo-img { height: 32px; }
                                                                                                                                                                                                                .nav-logo .nav-logo-copy { font-size: 9px; line-height: 1.35; letter-spacing: 0.02em; }
                                                                                                                                                                                                                }
                                                                                                                                                                                                                .nav-links { display: none; align-items: center; gap: 32px; font-family: "Inter", sans-serif; font-size: 13px; font-weight: 500; color: #555; }
                                                                                                                                                                                                                .nav-links a:hover { color: var(--dark); }
                                                                                                                                                                                                                .nav-cta {
                                                                                                                                                                                                                color: #fff; background: var(--purple); border: 1px solid var(--purple); border-radius: 999px; padding: 8px 20px;
                                                                                                                                                                                                                transition: background 0.2s, color 0.2s, border-color 0.2s, box-shadow 0.2s;
                                                                                                                                                                                                                }
                                                                                                                                                                                                                .nav-cta:hover { background: #6457e0; border-color: #6457e0; box-shadow: 0 4px 16px rgba(123,108,246,0.3); }
                                                                                                                                                                                                                @media (min-width: 1024px) { .nav-links { display: flex; } }
                                                                                                                                                                                                                .nav-hamburger { display: flex; flex-direction: column; gap: 5px; padding: 10px; cursor: pointer; width: 44px; height: 44px; align-items: center; justify-content: center; }
                                                                                                                                                                                                                .nav-hamburger span { display: block; width: 24px; height: 2px; background: var(--dark); border-radius: 2px; transition: transform 0.3s ease, opacity 0.3s ease; }
                                                                                                                                                                                                                .nav-hamburger.is-open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
                                                                                                                                                                                                                .nav-hamburger.is-open span:nth-child(2) { opacity: 0; }
                                                                                                                                                                                                                .nav-hamburger.is-open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }
                                                                                                                                                                                                                @media (min-width: 1024px) { .nav-hamburger { display: none; } }
                                                                                                                                                                                                                .nav-drawer { display: none; flex-direction: column; gap: 0; border-top: 1px solid rgba(78,205,196,0.15); padding: 8px 0 16px; background: rgba(255,255,255,0.96); }
                                                                                                                                                                                                                .nav-drawer.is-open { display: flex; }
                                                                                                                                                                                                                .nav-drawer a { padding: 12px 24px; font-family: "Inter", sans-serif; font-size: 14px; color: #555; transition: color 0.2s, background 0.2s; }
                                                                                                                                                                                                                .nav-drawer a:hover { color: var(--dark); background: rgba(78,205,196,0.06); }
                                                                                                                                                                                                                .nav-drawer .nav-drawer-cta { margin: 8px 24px 0; padding: 14px 20px; background: linear-gradient(135deg, #7B6CF6, #4ECDC4); color: #fff; border-radius: 6px; font-weight: 700; text-align: center; font-size: 15px; letter-spacing: 0.04em; }
                                                                                                                                                                                                                .page-hero { padding: calc(64px + clamp(48px, 6vw, 82px)) 0 clamp(40px, 5vw, 64px); position: relative; }
                                                                                                                                                                                                                .page-hero-inner { max-width: 760px; }
                                                                                                                                                                                                                .page-kicker { color: var(--purple); font-size: 11px; font-weight: 800; letter-spacing: 0.18em; text-transform: uppercase; margin-bottom: 18px; position: relative; width: fit-content; }
                                                                                                                                                                                                                .page-kicker::after { content: ""; display: block; width: 34px; height: 2px; margin-top: 14px; background: linear-gradient(90deg, #7B6CF6, #4ECDC4); }
                                                                                                                                                                                                                .page-title { font-size: clamp(34px, 5vw, 58px); line-height: 1.3; letter-spacing: 0.04em; color: var(--dark); font-weight: 900; }
                                                                                                                                                                                                                .page-title span { display: block; background: var(--gradient); -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent; margin-top: 0.15em; }
                                                                                                                                                                                                                .page-lead { margin-top: 24px; max-width: 680px; color: var(--muted); font-size: 15px; line-height: 1.85; letter-spacing: 0.025em; word-break: keep-all; overflow-wrap: normal; }
                                                                                                                                                                                                                section { padding: clamp(56px, 7vw, 96px) 0; }
                                                                                                                                                                                                                section + section { border-top: 1px solid rgba(78,205,196,0.14); }
                                                                                                                                                                                                                .kicker { color: var(--purple); font-size: 11px; font-weight: 800; letter-spacing: 0.18em; text-transform: uppercase; margin-bottom: 14px; }
                                                                                                                                                                                                                .section-title { font-size: clamp(26px, 3.6vw, 40px); line-height: 1.3; font-weight: 900; color: var(--dark); margin-bottom: 22px; letter-spacing: 0.02em; }
                                                                                                                                                                                                                .section-copy { color: var(--muted); font-size: 14px; line-height: 1.8; letter-spacing: 0.025em; word-break: keep-all; overflow-wrap: normal; max-width: 760px; }
                                                                                                                                                                                                                .btn { display: inline-flex; align-items: center; justify-content: center; gap: 8px; min-height: 48px; padding: 0 26px; border-radius: 4px; font-size: 13px; font-weight: 700; letter-spacing: 0.06em; transition: transform 0.25s var(--easing), box-shadow 0.25s var(--easing); }
                                                                                                                                                                                                                .btn-primary { color: #fff; background: var(--gradient); box-shadow: 0 18px 44px rgba(123,108,246,0.24); }
                                                                                                                                                                                                                .btn:hover { transform: translateY(-2px); }
                                                                                                                                                                                                                .footer { color: #121826; background: transparent; padding: 0; font-size: 12px; letter-spacing: 0.04em; }
                                                                                                                                                                                                                .footer-bottom-wrap.footer-simple-final {
                                                                                                                                                                                                                display: block; position: relative; min-height: clamp(260px, 22vw, 360px); padding: 0; margin: 0; overflow: visible;
                                                                                                                                                                                                                border-top: 10px solid transparent;
                                                                                                                                                                                                                border-image: linear-gradient(90deg, rgba(190,162,255,0.88), rgba(142,202,255,0.88), rgba(95,225,231,0.92)) 1;
                                                                                                                                                                                                                background: linear-gradient(100deg, rgba(250,253,255,0.98) 0%, rgba(238,249,255,0.96) 56%, rgba(225,250,252,0.96) 100%);
                                                                                                                                                                                                                box-shadow: none;
                                                                                                                                                                                                                }
                                                                                                                                                                                                                .footer-bottom-wrap.footer-simple-final::before {
                                                                                                                                                                                                                content: ""; position: absolute; inset: 0;
                                                                                                                                                                                                                background: linear-gradient(110deg, transparent 0 64%, rgba(255,255,255,0.38) 64.2% 64.7%, transparent 65% 100%), radial-gradient(circle at 78% 28%, rgba(110,224,232,0.22), transparent 30%);
                                                                                                                                                                                                                pointer-events: none;
                                                                                                                                                                                                                }
                                                                                                                                                                                                                .footer-simple-inner {
                                                                                                                                                                                                                width: min(1740px, calc(100% - 96px)); max-width: none; min-height: clamp(250px, 21vw, 350px); margin: 0 auto;
                                                                                                                                                                                                                padding: clamp(44px, 4.8vw, 78px) 0 clamp(56px, 5vw, 86px);
                                                                                                                                                                                                                display: grid; grid-template-columns: minmax(420px, 0.9fr) minmax(520px, 1.1fr); grid-template-rows: auto 1fr auto; gap: 20px 48px; position: relative; z-index: 1;
                                                                                                                                                                                                                }
                                                                                                                                                                                                                .footer-simple-logo {
                                                                                                                                                                                                                grid-column: 1; grid-row: 2 / 4; align-self: end; justify-self: start; display: block; text-decoration: none;
                                                                                                                                                                                                                font-family: "Oswald", "Inter", sans-serif; font-size: clamp(70px, 8vw, 150px); font-weight: 700; line-height: 0.95; letter-spacing: 0.055em; color: transparent;
                                                                                                                                                                                                                background: linear-gradient(90deg, #746ee2 0%, #42b8d6 58%, #121826 100%);
                                                                                                                                                                                                                -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent; opacity: 0.92; padding-bottom: 0.06em;
                                                                                                                                                                                                                }
                                                                                                                                                                                                                .footer-simple-nav { grid-column: 2; grid-row: 1; justify-self: end; align-self: start; display: flex; flex-wrap: wrap; justify-content: flex-end; gap: clamp(22px, 2.6vw, 48px); }
                                                                                                                                                                                                                .footer-simple-nav a { display: inline-block; color: #121826; font-family: "Oswald", "Inter", sans-serif; font-size: clamp(15px, 1.1vw, 21px); font-weight: 700; letter-spacing: 0.12em; line-height: 1; opacity: 0.9; transition: color 0.24s ease, opacity 0.24s ease, transform 0.24s ease; }
                                                                                                                                                                                                                .footer-simple-nav a:hover { color: #35aeca; opacity: 1; transform: translateY(-2px); }
                                                                                                                                                                                                                .footer-simple-copy { grid-column: 2; grid-row: 3; justify-self: end; align-self: end; margin: clamp(18px, 2vw, 28px) 0 0; color: #121826; font-family: "Oswald", "Inter", sans-serif; font-size: clamp(11px, 0.82vw, 14px); font-weight: 600; letter-spacing: 0.16em; opacity: 0.82; }
                                                                                                                                                                                                                .message-block { background: rgba(255,255,255,0.7); border: 1px solid rgba(78,205,196,0.18); border-radius: 8px; padding: clamp(28px, 4vw, 44px); box-shadow: 0 20px 55px rgba(23,24,44,0.06); }
                                                                                                                                                                                                                .message-block h3 { font-family: "Noto Serif JP", serif; font-size: clamp(19px, 2.2vw, 26px); color: var(--dark); font-weight: 900; line-height: 1.6; margin-bottom: 20px; }
                                                                                                                                                                                                                .message-block p { color: var(--muted); font-size: 14px; line-height: 1.9; margin-top: 14px; letter-spacing: 0.02em; }
                                                                                                                                                                                                                .info-table { border-top: 1px solid rgba(78,205,196,0.22); }
                                                                                                                                                                                                                .info-row { display: grid; grid-template-columns: 200px 1fr; gap: 16px; padding: 20px 0; border-bottom: 1px solid rgba(78,205,196,0.16); }
                                                                                                                                                                                                                .info-row dt { font-weight: 700; color: var(--dark); font-size: 13px; letter-spacing: 0.04em; }
                                                                                                                                                                                                                .info-row dd { color: var(--muted); font-size: 14px; line-height: 1.85; }
                                                                                                                                                                                                                .mv-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 20px; }
                                                                                                                                                                                                                .mv-card { background: rgba(255,255,255,0.78); border: 1px solid rgba(78,205,196,0.2); border-radius: 8px; padding: clamp(26px, 3vw, 38px); }
                                                                                                                                                                                                                .mv-card .mv-label { color: var(--teal); font-weight: 800; font-size: 12px; letter-spacing: 0.16em; margin-bottom: 14px; }
                                                                                                                                                                                                                .mv-card p { color: var(--dark); font-size: clamp(16px, 1.8vw, 20px); font-weight: 700; line-height: 1.65; }
                                                                                                                                                                                                                .value-lead { color: var(--muted); font-size: 14px; line-height: 1.9; max-width: 760px; margin-bottom: 34px; }
                                                                                                                                                                                                                .value-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 18px; }
                                                                                                                                                                                                                .value-card { background: rgba(255,255,255,0.78); border: 1px solid rgba(78,205,196,0.18); border-radius: 8px; padding: 26px; box-shadow: 0 16px 40px rgba(23,24,44,0.05); }
                                                                                                                                                                                                                .value-card .value-no { font-family: "Inter", sans-serif; color: var(--purple); font-weight: 800; font-size: 12px; letter-spacing: 0.1em; margin-bottom: 12px; }
                                                                                                                                                                                                                .value-card p { color: var(--ink); font-size: 13.5px; line-height: 1.8; }
                                                                                                                                                                                                                @media (max-width: 980px) { .nav-links { display: none; } }
                                                                                                                                                                                                                @media (max-width: 780px) { .mv-grid { grid-template-columns: 1fr; } }
                                                                                                                                                                                                                @media (max-width: 680px) {
                                                                                                                                                                                                                .info-row { grid-template-columns: 1fr; gap: 6px; }
                                                                                                                                                                                                                .footer-simple-inner { width: min(100% - 44px, 760px); grid-template-columns: 1fr; grid-template-rows: auto auto auto; min-height: auto; gap: 38px; }
                                                                                                                                                                                                                .footer-simple-logo, .footer-simple-nav, .footer-simple-copy { grid-column: 1; justify-self: start; }
                                                                                                                                                                                                                .footer-simple-logo { grid-row: 2; font-size: clamp(58px, 16vw, 104px); }
                                                                                                                                                                                                                .footer-simple-nav { grid-row: 1; justify-content: flex-start; gap: 18px 28px; }
                                                                                                                                                                                                                .footer-simple-copy { grid-row: 3; }
                                                                                                                                                                                                                .container { width: min(100% - 28px, 1180px); }
                                                                                                                                                                                                                }
                                                                                                                                                                                                                `,

  body: `
  <div class="geo-bg" aria-hidden="true"></div>
  <nav id="main-nav">
  <div class="container">
  <div class="nav-inner">
  <a href="/" class="nav-logo">
  <img class="nav-logo-img" src="mirasisone_rogo_ol.png" alt="MIRASISONE">
  <span class="nav-logo-copy">MIRASISONE｜プロジェクションマッピング・<br>3DCG動画制作｜AR・VR制作｜東京</span>
  </a>
  <div class="nav-links">
  <a href="/works">Experience Designed</a>
  <a href="/works">WORKS</a>
  <a href="/blog">BLOG</a>
  <a href="/company">COMPANY</a>
  <a href="/recruit">RECRUIT</a>
  <a href="/contact" class="nav-cta">お問い合わせ</a>
  </div>
  <button class="nav-hamburger" id="hamburger" aria-label="メニューを開く" aria-expanded="false" aria-controls="nav-drawer">
  <span></span><span></span><span></span>
  </button>
  </div>
  <div class="nav-drawer" id="nav-drawer">
  <a href="/works">Experience Designed</a>
  <a href="/works">WORKS</a>
  <a href="/blog">BLOG</a>
  <a href="/company">COMPANY</a>
  <a href="/recruit">RECRUIT</a>
  <a href="/contact" class="nav-drawer-cta">お問い合わせ</a>
  </div>
  </div>
  </nav>

  <main>
  <section class="page-hero">
  <div class="container page-hero-inner">
  <p class="page-kicker font-en">About Us</p>
  <h1 class="page-title font-serif">私たちについて<span>MIRASISONEの想い</span></h1>
  <p class="page-lead">プロジェクションマッピング・3DCG映像制作を通じて、<br>驚きとワクワクを届ける集団でありたい。</p>
  </div>
  </section>

  <section id="message">
  <div class="container">
  <p class="kicker font-en">Top Message</p>
  <h2 class="section-title">代表挨拶</h2>
  <div class="message-block">
  <h3>どこよりも失敗を恐れずに、<br>ワクワクを追求する集団であり続ける。</h3>
  <p>MIRASISONEは、私が26歳の時に設立をいたしました。現在では3DCGを通して幅広くお客様にワクワクを届ける事ができおります。</p>
  <p>利益にこだわらず、お客様と社員のモノと心の両面で、少しでも人生の手助けをできるような集団であり続ける事を目指しております。</p>
  </div>
  </div>
  </section>

  <section id="company-info">
  <div class="container">
  <p class="kicker font-en">Company Info</p>
  <h2 class="section-title">会社概要</h2>
  <dl class="info-table">
  <div class="info-row"><dt>会社名</dt><dd>株式会社MIRASISONE</dd></div>
  <div class="info-row"><dt>設立</dt><dd>2024年3月14日</dd></div>
  <div class="info-row"><dt>資本金</dt><dd>100万円</dd></div>
  <div class="info-row"><dt>代表取締役</dt><dd>伊藤 宗也</dd></div>
  <div class="info-row"><dt>顧問税理士</dt><dd>FinTax</dd></div>
  <div class="info-row"><dt>主要取引銀行</dt><dd>GMOあおぞら銀行、日本政策金融公庫</dd></div>
  <div class="info-row"><dt>所在地</dt><dd>本社 〒112-0006 東京都文京区小日向３丁目１番８号ヴィラホワイト２F<br>渋谷オフィス 〒150-0041 東京都渋谷区神南一丁目23番14号 リージャス渋谷公園通りセンター207号室</dd></div>
  <div class="info-row"><dt>商標</dt><dd>Magic the Light</dd></div>
  <div class="info-row"><dt>連絡先</dt><dd>Phone : 050-7108-0017<br>Mail : japan-team@mirasisone.com</dd></div>
  <div class="info-row"><dt>事業内容</dt><dd>裸眼3D映像制作<br>プロジェクションマッピング<br>AR（拡張現実）・VR（仮想現実）コンテンツ制作<br>メタバース（仮想空間）制作<br>LEDヴィジョン、プロジェクターの販売・リース<br>その他ハード機器の販売、施工、保守メンテナンス、及び機材リース<br>上記に関連する全ての事業</dd></div>
  </dl>
  </div>
  </section>

  <section id="mission-vision">
  <div class="container">
  <div class="mv-grid">
  <div class="mv-card">
  <p class="mv-label font-en">MISSION</p>
  <p>誰もが見たくなる、世界に一つだけのハッとするオアシスを創造する。</p>
  </div>
  <div class="mv-card">
  <p class="mv-label font-en">VISION</p>
  <p>バーチャル業界を牽引し、唯一無二のコンテンツを提供する。</p>
  </div>
  </div>
  </div>
  </section>

  <section id="values">
  <div class="container">
  <p class="kicker font-en">Values</p>
  <h2 class="section-title">VALUES</h2>
  <p class="value-lead">驚きや感動、ワクワクを生み出すのが困難な場所にもMIRASISONEのサービスを導入することで、人々が集まり、ハッとする、感動の体験を提供する。</p>
  <div class="value-grid">
  <div class="value-card"><p class="value-no font-en">VALUE 01</p><p>お客様にワクワクする未来を届けることを何よりも最優先にする。</p></div>
  <div class="value-card"><p class="value-no font-en">VALUE 02</p><p>一見実現困難な内容であっても決して諦めず、お客様とメンバーとの間で可能性を模索し、納得のいくサービスを実現する。</p></div>
  <div class="value-card"><p class="value-no font-en">VALUE 03</p><p>誰よりもMIRASISONEメンバーがワクワクし、モノと心の両面で幸福を追求する。</p></div>
  <div class="value-card"><p class="value-no font-en">VALUE 04</p><p>失敗を恐れず、新しいこと・技術に挑戦し続ける。</p></div>
  <div class="value-card"><p class="value-no font-en">VALUE 05</p><p>まだ見たことのない驚き、感動、ワクワクを常に求めて日々成長していく。</p></div>
  </div>
  </div>
  </section>
  </main>

  <footer id="footer" class="footer">
  <div class="footer-bottom-wrap footer-simple-final">
  <div class="container footer-simple-inner">
  <a class="footer-simple-logo font-en" href="/" aria-label="MIRASISONE top">MIRASISONE</a>
  <nav class="footer-simple-nav font-en" aria-label="Footer navigation">
  <a href="/works">WORKS</a>
  <a href="/blog">BLOG</a>
  <a href="/company">COMPANY</a>
  <a href="/recruit">RECRUIT</a>
  <a href="/contact">CONTACT</a>
  </nav>
  <p class="footer-simple-copy font-en">Copyright 2026 MIRASISONE.</p>
  </div>
  </div>
  </footer>
  `,
  scripts: [
    `
    const hamburger = document.getElementById("hamburger");
    const drawer = document.getElementById("nav-drawer");
    if (hamburger && drawer) {
    hamburger.addEventListener("click", () => {
    const open = !drawer.classList.contains("is-open");
    drawer.classList.toggle("is-open", open);
    hamburger.classList.toggle("is-open", open);
    hamburger.setAttribute("aria-expanded", String(open));
    });
    drawer.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
    drawer.classList.remove("is-open");
    hamburger.classList.remove("is-open");
    hamburger.setAttribute("aria-expanded", "false");
    });
    });
    }
    `,
    ],
} as const;
