/* ═══════════════════════════════════════════════════════════════
   SEGNALE MES/ES — aggiornato da Claude su richiesta.
   Chiedi in chat: "dammi il segnale" → Claude analizza i dati
   reali e riscrive questo file → premi F5 sulla pagina.
   Il segnale più recente va SEMPRE in cima alla lista.
   ═══════════════════════════════════════════════════════════════ */
window.SIGNALS = [
  {
    quando: "Sabato 4 luglio 2026 — 21:45 (ora italiana)",
    azione: "WAIT",
    fiducia: "ALTA",
    prezzo: "7557.00",
    contratto: "ESU26 — scadenza settembre",
    sessione: "CHIUSO — weekend + festa del 4 luglio. Riapre domenica a mezzanotte (ora italiana).",
    piano: null,
    livelli: [
      ["Massimo di venerdì (mezza seduta)", "7565.25"],
      ["Minimo di venerdì", "7546.00"],
      ["Chiusura di venerdì (ultimo prezzo)", "7557.00"],
      ["Chiusura di giovedì 2 luglio", "7528.25"],
      ["Numeri tondi da tenere d'occhio", "7550 / 7600"],
      ["VWAP", "si azzera lunedì alle 15:30 (ora it.)"]
    ],
    scorecard: [
      { nome: "MACD (momentum)", esito: "NEUTRAL", nota: "Mercato chiuso: nessun dato live. Il momentum di venerdì era su volumi festivi, non conta." },
      { nome: "RSI + VWAP", esito: "NEUTRAL", nota: "Il VWAP non esiste finché non riapre la sessione ufficiale di lunedì." },
      { nome: "CVD (flusso di soldi)", esito: "NEUTRAL", nota: "Giovedì: Dow ai massimi storici ma semiconduttori venduti forte — rotazione da sorvegliare." },
      { nome: "Storico (pattern)", esito: "NEUTRAL", nota: "Il lunedì dopo una festività apre piatto: i breakout della prima mezz'ora falliscono più del solito." },
      { nome: "News / Macro", esito: "BULLISH", nota: "Lavoro USA debole (57k posti vs 110k attesi) → meno probabile un rialzo dei tassi Fed a settembre." }
    ],
    ragionamento: "Non c'è nessun trade perché non c'è mercato: il 4 luglio cade di sabato, il CME ha chiuso venerdì a mezzogiorno (ora di New York) e riapre domenica sera. Quadro generale: trend in salita vicino ai massimi, spinto dal calo delle paure sui tassi, ma con una crepa nei semiconduttori (Nasdaq -1,6% giovedì mentre il Dow faceva il record). Quella divergenza è la cosa più probabile che si risolva in modo violento la prossima settimana.",
    daFare: [
      "Domenica notte (dopo mezzanotte it.): NON tradare — liquidità pessima. Guarda solo se il prezzo tiene 7546.00.",
      "Lunedì 15:30 (ora it.): lascia stampare i primi 15–30 minuti (opening range) prima di fare qualsiasi cosa.",
      "Sopra 7565.25 con volume vero → bias LONG verso 7600.",
      "Sotto 7546.00 → possibile discesa verso 7528.25 (chiusura di giovedì).",
      "Mercoledì probabile uscita dei verbali Fed (FOMC minutes): mai in posizione durante l'annuncio."
    ],
    news: {
      titolo: "Rapporto sul lavoro di giugno debole: +57.000 posti contro i ~110.000 attesi, disoccupazione al 4,2%. Le probabilità di un rialzo Fed a settembre sono scese dal 63% al 51%. Dow ai massimi storici.",
      sentiment: "BULLISH"
    },
    fonti: [
      ["Barchart — quotazione ESU26", "https://www.barchart.com/futures/quotes/ESU26"],
      ["Investing.com — futures S&P 500", "https://www.investing.com/indices/us-spx-500-futures"],
      ["CME Group — orari e festività", "https://www.cmegroup.com/trading-hours.html"],
      ["CNBC — rendimenti giù dopo i dati sul lavoro", "https://www.cnbc.com/2026/07/02/us-treasury-yields-rise-as-investors-await-june-jobs-report.html"],
      ["TheStreet — Dow record il 2 luglio", "https://www.thestreet.com/stock-market-today/stock-market-today-dow-jones-sp-500-nasdaq-updates-july-2-2026"]
    ]
  }
];
