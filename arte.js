// Crónicas Negras · ilustraciones y maquetación de carta, compartidas por la app y la versión imprimible
(function () {
  const B = "var(--bone)", R = "var(--blood)", K = "var(--card)";

  const ART = {
    mimo: `
      <line x1="58" y1="10" x2="58" y2="132" stroke="${B}" stroke-width="1.5" stroke-dasharray="3 6" opacity=".5"/>
      <line x1="142" y1="10" x2="142" y2="132" stroke="${B}" stroke-width="1.5" stroke-dasharray="3 6" opacity=".5"/>
      <rect x="36" y="46" width="18" height="26" rx="7" fill="${B}"/>
      <path d="M41 46v-8M45 46v-10M49 46v-9" stroke="${B}" stroke-width="4" stroke-linecap="round"/>
      <rect x="146" y="58" width="18" height="26" rx="7" fill="${B}"/>
      <path d="M151 58v-9M155 58v-11M159 58v-8" stroke="${B}" stroke-width="4" stroke-linecap="round"/>
      <path d="M54 66 Q70 96 84 104M146 78 Q132 96 116 104" stroke="${B}" stroke-width="5" fill="none" stroke-linecap="round"/>
      <path d="M78 104h44v36H78z" fill="${B}"/>
      <path d="M78 112h44M78 121h44M78 130h44" stroke="${K}" stroke-width="4"/>
      <ellipse cx="100" cy="66" rx="23" ry="29" fill="${B}"/>
      <path d="M74 44 Q100 22 128 42 Q112 38 76 46Z" fill="${K}" stroke="${B}" stroke-width="2"/>
      <path d="M87 58l8 8M95 58l-8 8M105 58l8 8M113 58l-8 8" stroke="${K}" stroke-width="2.6" stroke-linecap="round"/>
      <ellipse cx="100" cy="82" rx="7" ry="5" fill="${R}"/>
      <circle cx="112" cy="80" r="3" fill="none" stroke="${R}" stroke-width="1.5"/>`,
    pecera: `
      <circle cx="30" cy="26" r="11" fill="${B}"/>
      <path d="M30 6v5M30 41v5M10 26h5M45 26h5M16 12l4 4M40 36l4 4M16 40l4-4M40 16l4-4" stroke="${B}" stroke-width="2" stroke-linecap="round"/>
      <path d="M42 34 L96 60 L176 116M40 38 L90 92 L176 116M44 30 L112 50 L176 116" stroke="${B}" stroke-width="1" opacity=".45"/>
      <circle cx="106" cy="76" r="36" fill="none" stroke="${B}" stroke-width="3"/>
      <path d="M76 58 Q106 64 136 58" stroke="${B}" stroke-width="1.5" fill="none" opacity=".6"/>
      <path d="M94 80 q14 -12 26 0 q-12 12 -26 0z M94 80 l-10 -7 v14z" fill="${R}"/>
      <circle cx="116" cy="78" r="1.6" fill="${K}"/>
      <circle cx="124" cy="66" r="2.5" fill="none" stroke="${B}" stroke-width="1.2"/>
      <circle cx="128" cy="58" r="1.6" fill="none" stroke="${B}" stroke-width="1.2"/>
      <path d="M0 114h200" stroke="${B}" stroke-width="3"/>
      <path d="M176 116 c-9 -8 -4 -18 0 -26 c2 8 10 10 8 20 c-1 6 -5 8 -8 6z" fill="${R}"/>
      <path d="M160 116 v24 M190 116 v24" stroke="${B}" stroke-width="1.5" opacity=".5"/>`,
    momia: `
      <rect x="62" y="6" width="76" height="134" rx="36" fill="none" stroke="${B}" stroke-width="1.5" opacity=".35"/>
      <circle cx="100" cy="32" r="15" fill="${B}"/>
      <path d="M88 28h9M103 28h9" stroke="${K}" stroke-width="3" stroke-linecap="round"/>
      <path d="M86 22 L114 38M86 38 L112 24" stroke="${K}" stroke-width="1.2" opacity=".5"/>
      <rect x="80" y="48" width="40" height="92" rx="14" fill="${B}"/>
      <path d="M80 60 L120 70M80 78 L120 86M80 96 L120 104M80 114 L120 122M80 130 L120 138M80 70 L120 58" stroke="${K}" stroke-width="1.4" opacity=".55"/>
      <rect x="70" y="72" width="60" height="13" rx="6" fill="${B}" stroke="${K}" stroke-width="2"/>
      <rect x="118" y="68" width="11" height="21" rx="2" fill="${R}"/>
      <rect x="120.5" y="72" width="6" height="13" rx="1" fill="${K}"/>
      <path d="M136 70 q5 8 0 16M143 65 q8 13 0 26M150 60 q11 18 0 36" stroke="${B}" stroke-width="2" fill="none" stroke-linecap="round"/>`,
    loro: `
      <path d="M12 118h120" stroke="${B}" stroke-width="5" stroke-linecap="round"/>
      <path d="M30 118v22" stroke="${B}" stroke-width="3"/>
      <path d="M58 116 L46 140 L54 140 L66 116z" fill="${B}"/>
      <ellipse cx="72" cy="90" rx="20" ry="28" fill="${B}" transform="rotate(-14 72 90)"/>
      <circle cx="82" cy="56" r="15" fill="${B}"/>
      <path d="M95 50 q14 2 10 16 q-4 -6 -12 -4z" fill="${R}"/>
      <circle cx="86" cy="52" r="3.4" fill="${K}"/>
      <circle cx="87" cy="51" r="1" fill="${B}"/>
      <path d="M66 82 q-8 20 6 34" stroke="${K}" stroke-width="2" fill="none"/>
      <path d="M70 116 l-4 4M78 116 l4 4" stroke="${B}" stroke-width="3" stroke-linecap="round"/>
      <path d="M112 14 h78 a6 6 0 0 1 6 6 v30 a6 6 0 0 1 -6 6 h-58 l-14 12 l2 -12 h-8 a6 6 0 0 1 -6 -6 v-30 a6 6 0 0 1 6 -6z" fill="none" stroke="${B}" stroke-width="2"/>
      <text x="151" y="32" text-anchor="middle" font-size="13" fill="${R}">¡MANOLO,</text>
      <text x="151" y="47" text-anchor="middle" font-size="10" fill="${B}">suelta el…!</text>`,
    sudoku: (() => {
      const rows = [["", 3, "", 8, "", 5, "", 2, ""], [5, "", 9, "", 2, "", 7, "", 4], [6, 1, 7, 4, 4, 2, 9, 3, 8]];
      const c = 20, x0 = 10, y0 = 34;
      let s = `<rect x="${x0}" y="${y0}" width="${c * 9}" height="${c * 3}" fill="none" stroke="${B}" stroke-width="2.5"/>`;
      for (let i = 1; i < 9; i++) s += `<line x1="${x0 + i * c}" y1="${y0}" x2="${x0 + i * c}" y2="${y0 + c * 3}" stroke="${B}" stroke-width="${i % 3 ? 0.8 : 2.5}"/>`;
      for (let j = 1; j < 3; j++) s += `<line x1="${x0}" y1="${y0 + j * c}" x2="${x0 + c * 9}" y2="${y0 + j * c}" stroke="${B}" stroke-width=".8"/>`;
      rows.forEach((r, j) => r.forEach((n, i) => {
        if (n === "") return;
        const red = j === 2, cx = x0 + i * c + c / 2;
        s += `<text x="${cx}" y="${y0 + j * c + 15}" text-anchor="middle" font-size="${red ? 15 : 13}" fill="${red ? R : B}"${red ? ` transform="rotate(${(i % 3 - 1) * 4} ${cx} ${y0 + j * c + 10})"` : ""}>${n}</text>`;
      }));
      s += `<path d="M10 20h180M10 110h180" stroke="${B}" stroke-width="1" opacity=".3"/>`;
      s += `<path d="M168 104 q6 10 0 16 q-6 -6 0 -16z" fill="${R}"/><circle cx="150" cy="126" r="3" fill="${R}"/><circle cx="160" cy="132" r="1.8" fill="${R}"/>`;
      s += `<path d="M22 124 l40 -6 l4 4 l-40 6z" fill="${B}"/><path d="M62 118 l12 -2 l-8 6z" fill="${B}" opacity=".6"/>`;
      return s;
    })(),
    pato: `
      <path d="M150 20 a14 14 0 1 0 12 22 a11 11 0 1 1 -12 -22z" fill="${B}" opacity=".85"/>
      <rect x="40" y="10" width="92" height="104" fill="none" stroke="${B}" stroke-width="3"/>
      <path d="M86 10v104M40 62h92" stroke="${B}" stroke-width="2"/>
      <path d="M30 114h112" stroke="${B}" stroke-width="5" stroke-linecap="round"/>
      <g transform="rotate(180 86 97)">
        <ellipse cx="84" cy="98" rx="17" ry="11" fill="${B}"/>
        <circle cx="96" cy="84" r="9" fill="${B}"/>
        <path d="M104 83 l9 2 l-9 3z" fill="${R}"/>
        <circle cx="98" cy="82" r="1.6" fill="${K}"/>
        <path d="M68 94 l-6 -8 l8 3z" fill="${B}"/>
      </g>
      <path d="M150 140 L176 118 L200 140" stroke="${B}" stroke-width="2" fill="none"/>
      <path d="M160 132 l6 -5M170 128 l6 5M184 126 l6 5" stroke="${B}" stroke-width="1.5" opacity=".6"/>`,
  };

  const LEVELS = ["Fácil", "Media", "Difícil", "Diabólica"];
  // Orden de los mazos y de dónde salen sus cartas
  const DECKS = {
    humor: { name: "Humor negro", short: "HN", src: ["MAZO_HUMOR", "MAZO_HUMOR_2", "MAZO_HUMOR_3"] },
    macabro: { name: "Macabro", short: "MC", src: ["MAZO_MACABRO", "MAZO_MACABRO_2", "MAZO_MACABRO_3"] },
    pueblo: { name: "Pueblo español", short: "PU", src: ["MAZO_PUEBLO"] },
    historia: { name: "Historia", short: "HI", src: ["MAZO_HISTORIA"] },
    escuela: { name: "Escuela y universidad", short: "EU", src: ["MAZO_ESCUELA"] },
    encantadas: { name: "Casas encantadas", short: "CE", src: ["MAZO_ENCANTADAS"] },
    imposibles: { name: "Crímenes imposibles", short: "CI", src: ["MAZO_IMPOSIBLES"] },
    fiestas: { name: "Festividades", short: "FE", src: ["MAZO_FIESTAS_1", "MAZO_FIESTAS_2"] },
    stardew: { name: "Stardew Valley (fan)", short: "SV", src: ["MAZO_STARDEW_1", "MAZO_STARDEW_2"] },
    zelda: { name: "Zelda (fan)", short: "ZE", src: ["MAZO_ZELDA_1", "MAZO_ZELDA_2"] },
    gta: { name: "GTA (fan)", short: "GT", src: ["MAZO_GTA_1", "MAZO_GTA_2"] },
    ninos: { name: "Niños · sin muertes", short: "NI", src: ["MAZO_NINOS_1", "MAZO_NINOS_2"], kids: true },
  };

  const SKULL = `<svg viewBox="0 0 30 34" aria-hidden="true"><path d="M15 1C7 1 1 7 1 15c0 5 2.5 8.5 6 10.5V31c0 1.2.8 2 2 2h12c1.2 0 2-.8 2-2v-5.5c3.5-2 6-5.5 6-10.5C29 7 23 1 15 1Zm-5.5 19a3.8 3.8 0 1 1 0-7.6 3.8 3.8 0 0 1 0 7.6Zm11 0a3.8 3.8 0 1 1 0-7.6 3.8 3.8 0 0 1 0 7.6ZM15 21.5l2 3.5h-4l2-3.5Z"/></svg>`;

  const pad = n => String(n).padStart(n >= 100 ? 3 : 2, "0");
  const esc = s => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

  const LUPA = `<svg viewBox="0 0 30 34" aria-hidden="true"><path d="M12.5 3a9.5 9.5 0 0 1 7.7 15.1l7.2 7.2a2 2 0 0 1-2.8 2.8l-7.2-7.2A9.5 9.5 0 1 1 12.5 3Zm0 4a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11Z"/></svg>`;

  function skulls(n, deck) {
    const kids = DECKS[deck].kids;
    const name = kids && n === 4 ? "Muy difícil" : LEVELS[n - 1];
    let s = `<span class="level">${name}</span><span class="sk">`;
    for (let i = 1; i <= 4; i++) s += `<i class="${i <= n ? "on" : "off"}">${kids ? LUPA : SKULL}</i>`;
    return s + "</span>";
  }

  function art(c) {
    if (c.art) return `<svg class="art" viewBox="0 0 200 140" aria-hidden="true">${ART[c.art]}</svg>`;
    return `<div class="art icon-art" aria-hidden="true">
      <span class="ring"></span>
      <span class="ms main">${c.i}</span>
      <span class="tag"><span class="ms">${c.a}</span></span>
    </div>`;
  }

  const en = c => (window.EN || {})[c.t];
  const tag = `<span class="lang">EN</span>`;

  // Cara negra (enigma), en español y, si existe, en inglés
  function front(c) {
    const e = en(c);
    return `<div class="face front deck-${c.deck}"><div class="frame${e ? " bi" : ""}">
      <div class="meta"><span class="num">${DECKS[c.deck].short} · Nº ${pad(c.n)}</span><span class="skulls">${skulls(c.l, c.deck)}</span></div>
      ${art(c)}
      <h2 class="title">${esc(c.t)}</h2>
      ${e ? `<div class="title-en">${esc(e.t)}</div>` : ""}
      <p class="riddle">${esc(c.q)}</p>
      ${e ? `<p class="riddle en">${tag}${esc(e.q)}</p>` : ""}
      <div class="foot"><span class="brand">Crónicas Negras</span><span class="deckname">${DECKS[c.deck].name}</span></div>
    </div></div>`;
  }

  // Cara blanca (solución, solo narrador)
  function back(c) {
    const e = en(c);
    return `<div class="face back deck-${c.deck}"><div class="frame${e ? " bi" : ""}">
      <div class="label">Solo el narrador${e ? " · Narrator only" : ""} · ${DECKS[c.deck].short} ${pad(c.n)}</div>
      <h2 class="title">${esc(c.t)}</h2>
      ${e ? `<div class="title-en">${esc(e.t)}</div>` : ""}
      <p class="solution">${esc(c.s)}</p>
      ${e ? `<p class="solution en">${tag}${esc(e.s)}</p>` : ""}
      <div class="keys">
        <div class="label">Si se atascan${e ? " · If they get stuck" : ""}</div>
        <ul>${c.k.map(([yn, q], i) => `<li><span class="yn ${yn}">${yn === "si" ? (e ? "SÍ·YES" : "SÍ") : "NO"}</span><span>${esc(q)}${e && e.k[i] ? `<span class="k-en">${esc(e.k[i])}</span>` : ""}</span></li>`).join("")}</ul>
      </div>
    </div></div>`;
  }

  function allCards() {
    return Object.entries(DECKS).flatMap(([deck, d]) =>
      d.src.flatMap(v => window[v] || []).map((c, i) => ({ ...c, deck, n: i + 1 })));
  }

  // Carga Material Symbols solo con los iconos que usan las cartas (la API exige orden alfabético)
  function loadIcons(cards) {
    const names = [...new Set(cards.flatMap(c => (c.art ? [] : [c.i, c.a])))].sort();
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,1,0&icon_names=" + names.join(",") + "&display=block";
    document.head.appendChild(link);
  }

  // Reduce el texto de una cara hasta que quepa en la carta (mismo resultado en pantalla y en papel)
  function fit(root) {
    root.querySelectorAll(".cn-card .frame").forEach(fr => {
      let k = 1;
      fr.style.setProperty("--k", k);
      while (fr.scrollHeight > fr.clientHeight + 1 && k > 0.5) {
        k -= 0.025;
        fr.style.setProperty("--k", k.toFixed(3));
      }
    });
  }

  window.CN = { ART, LEVELS, DECKS, front, back, allCards, loadIcons, fit, pad };
})();
