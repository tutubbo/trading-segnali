/* ═══════════════════════════════════════════════════════════════
   SEGNALE MES/ES — aggiornato da Claude su richiesta.
   Chiedi in chat: "dammi il segnale" → Claude analizza i dati
   reali e riscrive questo file → premi F5 sulla pagina.
   Il segnale più recente va SEMPRE in cima alla lista.
   ═══════════════════════════════════════════════════════════════ */
window.SIGNALS = [
  {
    quando: "Martedì 7 luglio 2026 (ora italiana)",
    azione: "WAIT",
    fiducia: "BASSA",
    prezzo: "7537.43 (ultima chiusura SPX)",
    contratto: "SPX / US500 · oro XAU/USD",
    sessione: "Sessione USA in corso/pre-market europeo. Dow sopra 53.000 per la prima volta, S&P 500 vicino ai massimi storici dopo il rally di lunedì trainato dalle mega-cap tech (AI).",
    piano: null,
    livelli: [
      ["Massimo di lunedì 6/7", "7547.00"],
      ["Chiusura di lunedì 6/7", "7537.43"],
      ["Supporto psicologico", "7500.00"],
      ["Dow Jones", "sopra 53.000 (record)"],
      ["Oro spot (XAU/USD) attuale", "4152.00"],
      ["Oro — range di lunedì", "4128.55 - 4202.49"],
      ["Rendimento Treasury 10 anni", "~4.47% (in calo)"]
    ],
    scorecard: [
      { nome: "MACD (momentum)", esito: "NEUTRAL", nota: "Calcolato in tempo reale dalla dashboard ogni 60 secondi: non verificabile da ricerca web, nessun dato indipendente disponibile." },
      { nome: "RSI + media di sessione", esito: "NEUTRAL", nota: "Idem: valore live gestito dal motore della dashboard, non riproducibile qui." },
      { nome: "CVD / flusso di denaro", esito: "NEUTRAL", nota: "Idem: richiede dati tick-by-tick che solo il motore live della pagina possiede." },
      { nome: "Pattern storico / regime", esito: "NEUTRAL", nota: "Trend rialzista forte e nuovi massimi, ma si arriva alla vigilia di un evento macro chiave (minute Fed) e dell'apertura della stagione delle trimestrali: storicamente il giorno prima di questi eventi il mercato tende a muoversi poco e in modo erratico." },
      { nome: "News / Macro", esito: "NEUTRAL", nota: "Segnali contrastanti: dati sul lavoro di giugno deboli (+57.000) spingono verso un taglio Fed a settembre, ma il neo-presidente Warsh ha detto che l'inflazione resta 'troppo alta' e i dazi commerciali restano un rischio inflattivo." }
    ],
    ragionamento: "Il mercato USA resta in un trend rialzista forte, con il Dow sopra i 53.000 per la prima volta grazie al ritorno dell'entusiasmo sull'intelligenza artificiale tra le mega-cap tech. Ma il quadro macro è contraddittorio: il report sul lavoro di giugno debole ha riacceso le scommesse su un taglio dei tassi a settembre, mentre il presidente Fed Warsh parla ancora di inflazione troppo alta — un mix che rende rischioso aprire posizioni proprio alla vigilia delle minute Fed di mercoledì. Sull'oro: il metallo ha arretrato verso 4150 dollari per un dollaro più forte, ma il supporto resta solido grazie ai forti acquisti delle banche centrali e alle attese di tassi reali più bassi.",
    daFare: [
      "Mercoledì 8 luglio, ore 20:00 circa (ora italiana): escono le minute della Fed, il primo meeting guidato dal presidente Warsh — non aprire posizioni nelle ore immediatamente prima e dopo.",
      "Martedì 14 luglio: CPI di giugno, il prossimo grande dato macro da segnare in calendario.",
      "Seguire i discorsi dei membri Fed nei prossimi giorni per capire se prevale l'ala favorevole al taglio o quella per il rialzo dopo il jobs report debole.",
      "Sull'oro: monitorare il Dollar Index (DXY) e il rendimento reale a 10 anni — un dollaro più debole dopo le minute potrebbe far ripartire l'oro verso l'area 4200.",
      "Attenzione all'apertura della stagione delle trimestrali Q2 nei prossimi giorni: possibile volatilità aggiuntiva su tech e megacap."
    ],
    news: {
      titolo: "Nonfarm payrolls di giugno deludono (+57.000 posti); il presidente Fed Warsh dice che l'inflazione resta 'troppo alta' mentre alcuni membri vedono ancora un rialzo: mercati indecisi in vista delle minute Fed di mercoledì.",
      sentiment: "NEUTRAL"
    },
    fonti: [
      ["Yahoo Finance — mercati oggi", "https://finance.yahoo.com/markets/stocks/live/stock-market-today-monday-july-7-225645420.html"],
      ["TheStreet — Dow sopra 53.000", "https://www.thestreet.com/stock-market-today/stock-market-today-dow-jones-sp-500-nasdaq-updates-july-6-2026"],
      ["CNBC — Kevin Warsh al forum BCE", "https://www.cnbc.com/2026/07/01/kevin-warsh-ecb-forum-live-updates.html"],
      ["HeyGoTrade — outlook settimanale minute Fed e trimestrali", "https://www.heygotrade.com/en/news/weekly-economic-outlook-2026-07-06/"],
      ["Investing.com — XAU/USD", "https://www.investing.com/currencies/xau-usd"],
      ["RoboForex — analisi oro 6 luglio", "https://roboforex.com/beginners/analytics/forex-forecast/commodities/xau-usd-gold-forecast-2026-07-06/"],
      ["BLS — calendario CPI/NFP 2026", "https://www.bls.gov/schedule/2026/home.htm"]
    ]
  },
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
