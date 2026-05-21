/* ═══════════════════════════════════════════
   ALBUM DATA
═══════════════════════════════════════════ */
var ALBUMS = [
  {
    name: "Meteora",
    artist: "Linkin Park",
    year: 2003,
    decade: "2000s",
    genre: "Rock",
    cover: "",
    coverLabel: "METEORA",
    yt: "https://music.youtube.com/playlist?list=OLAK5uy_nE-SkwNA6lYF99wd-MHzJVqThnUIJGe3I", sp: "https://open.spotify.com/album/4Gfnly5CzMJQqkUFfoHaP3?si=aM0FyO6ySEOrDAA4BSTREw", tg: "#"
  },
  {
    name: "Graduation",
    artist: "Kanye West",
    year: 2007,
    decade: "2000s",
    genre: "Hip-Hop",
    cover: "",
    coverLabel: "GRADUATION",
    yt: "https://music.youtube.com/playlist?list=OLAK5uy_n4negEHWAKSsnUfvxnK-hbGuYASJ1IBa4", sp: "https://open.spotify.com/album/4SZko61aMnmgvNhfhgTuD3?si=xCDjTnlaSLqpqXNlkiaH5A", tg: "#"
  },
  {
    name: "Random Access Memories",
    artist: "Daft Punk",
    year: 2013,
    decade: "2010s",
    genre: "Electronic",
    cover: "",
    coverLabel: "RAM",
    yt: "https://music.youtube.com/playlist?list=OLAK5uy_kNhM2yaBTOVwrcZJepB1C9P3-n5_Sfy5c", sp: "https://open.spotify.com/album/4m2880jivSbbyEGAKfITCa?si=WRMsCb7eRl2rvxsXX_pOZQ", tg: "#"
  },
  {
    name: "AM",
    artist: "Arctic Monkeys",
    year: 2013,
    decade: "2010s",
    genre: "Rock",
    cover: "",
    coverLabel: "AM",
    yt: "https://music.youtube.com/playlist?list=OLAK5uy_nw2f8Y7rbxFKNaDHwD7LRi0nvPNcT_bB8", sp: "https://open.spotify.com/album/78bpIziExqiI9qztvNFlQu?si=bV3ftI1lRDuSJOA2OGSDjQ", tg: "#"
  },
  {
    name: "Discovery",
    artist: "Daft Punk",
    year: 2001,
    decade: "2000s",
    genre: "Electronic",
    cover: "",
    coverLabel: "DISCOVERY",
    yt: "https://music.youtube.com/playlist?list=OLAK5uy_mz6eafmqdRHSaR4IwG0ll6J6rgv0_ZpGw", sp: "https://open.spotify.com/album/2noRn2Aes5aoNVsU6iWThc?si=5a9a871765f246ca", tg: "#"
  },
  {
    name: "Currents",
    artist: "Tame Impala",
    year: 2015,
    decade: "2010s",
    genre: "Electronic",
    cover: "",
    coverLabel: "CURRENTS",
    yt: "https://music.youtube.com/playlist?list=OLAK5uy_lYdwxvfKoDIiUba2_Dh1Pc-zOLLANCwKY", sp: "https://open.spotify.com/album/79dL7FLiJFOO0EoehUHQBv?si=rotR7ddiQL-rPe0NmR0LMw", tg: "#"
  },
  {
    name: "Lateralus",
    artist: "Tool",
    year: 2001,
    decade: "2000s",
    genre: "Metal",
    cover: "",
    coverLabel: "LATERALUS",
    yt: "https://music.youtube.com/playlist?list=OLAK5uy_lA0kWh6Mkkj3mZhzV0vJ429vsjwmBzF_Y", sp: "https://open.spotify.com/album/5l5m1hnH4punS1GQXgEi3T?si=9Mb9hk2vQs6iCPt_BppbpA", tg: "#"
  },
  {
    name: "Blade Runner OST",
    artist: "Vangelis",
    year: 1982,
    decade: "2000s",
    genre: "Soundtracks",
    cover: "",
    coverLabel: "BLADE RUNNER",
    yt: "https://music.youtube.com/playlist?list=OLAK5uy_neLURwHRNsWnZouMq5K_vGitaXhlKEr4g", sp: "https://open.spotify.com/album/6NkuCdMz5tGmHbOXAWbtCW?si=Zu34q6E3Sguj6T_ZRwnMDA", tg: "#"
  },
  {
    name: "Selected Ambient Works",
    artist: "Aphex Twin",
    year: 1992,
    decade: "2000s",
    genre: "Ambient",
    cover: "",
    coverLabel: "SAW 85-92",
    yt: "https://music.youtube.com/playlist?list=OLAK5uy_npVGHGqWs_-hTzVUivb8lCndQPVB7aIm0", sp: "https://open.spotify.com/album/7aNclGRxTysfh6z0d8671k?si=UAq8Ayz4SwKM0h0lfiAI-w", tg: "#"
  },
  {
    name: "good kid, m.A.A.d city",
    artist: "Kendrick Lamar",
    year: 2012,
    decade: "2010s",
    genre: "Hip-Hop",
    cover: "",
    coverLabel: "GKMC",
    yt: "https://music.youtube.com/playlist?list=OLAK5uy_nSFpJd6fk5g2u7CcljXZCqauq_CHCoP58", sp: "https://open.spotify.com/album/0Oq3mWfexhsjUh0aNNBB5u?si=rm7Ge8U5QvGhPCBDkHRSTA", tg: "#"
  },
  {
    name: "Demon Days",
    artist: "Gorillaz",
    year: 2005,
    decade: "2000s",
    genre: "Pop",
    cover: "",
    coverLabel: "DEMON DAYS",
    yt: "https://music.youtube.com/playlist?list=OLAK5uy_msC_GYWaz8ESAiX9d41hRIs2uhcL8t_aw", sp: "https://open.spotify.com/album/0bUTHlWbkSQysoM3VsWldT?si=J0QKQhtyTYyNUOkXy0qAbw", tg: "#"
  },
  {
    name: "In Rainbows",
    artist: "Radiohead",
    year: 2007,
    decade: "2000s",
    genre: "Underground",
    cover: "",
    coverLabel: "IN RAINBOWS",
    yt: "https://music.youtube.com/playlist?list=OLAK5uy_m59x-hBFsC789l1_qWwFXwH3gjntwy_CA", sp: "https://open.spotify.com/album/5vkqYmiPBYLaalcmjujWxK?si=Zia80b17Ttq6247zF97jgQ", tg: "#"
  },
];

/* genre accent colors */
var GENRE_COLORS = {
  "Hip-Hop":     "#ffaa44",
  "Rock":        "#ff6655",
  "Electronic":  "#44ddff",
  "Metal":       "#cc44cc",
  "Pop":         "#ffdd55",
  "Ambient":     "#55bbaa",
  "Soundtracks": "#88aaff",
  "Underground": "#99ff88"
};

/* ═══════════════════════════════════════════
   RENDER ALBUMS
═══════════════════════════════════════════ */
var activeGenre  = "all";
var activeDecade = "all";

function renderAlbums() {
  var grid = document.getElementById("album-grid");
  var noR  = document.getElementById("no-results");
  var count = document.getElementById("album-count");

  /* remove old cards but keep no-results div */
  var cards = grid.querySelectorAll(".album-card");
  cards.forEach(function(c){ c.parentNode.removeChild(c); });

  var filtered = ALBUMS.filter(function(a){
    var gOk = activeGenre  === "all" || a.genre  === activeGenre;
    var dOk = activeDecade === "all" || a.decade === activeDecade;
    return gOk && dOk;
  });

  count.textContent = "[ " + filtered.length + " / " + ALBUMS.length + " ]";

  if (filtered.length === 0) {
    noR.style.display = "block";
    return;
  }
  noR.style.display = "none";

  var accentColor = activeGenre !== "all" ? (GENRE_COLORS[activeGenre] || "#44ddff") : "#44ddff";

  filtered.forEach(function(a, idx){
    var card = document.createElement("div");
    card.className = "album-card";
    card.setAttribute("data-genre",  a.genre);
    card.setAttribute("data-decade", a.decade);

    /* cover */
    var coverHTML;
    if (a.cover) {
      coverHTML =
        '<div class="album-cover">' +
          '<img src="' + a.cover + '" alt="' + a.name + '" ' +
               'onclick="openImg(\'' + a.cover + '\', \'' + escQ(a.name + ' — ' + a.artist) + '\')" />' +
          '<div class="album-overlay">' + overlayHTML(a, accentColor) + '</div>' +
        '</div>';
    } else {
      coverHTML =
        '<div class="album-cover">' +
          '<div class="cover-placeholder">' +
            '<div class="cp-icon">&#9835;</div>' +
            '<div class="cp-text">' + a.coverLabel + '</div>' +
            '<div style="font-size:7px;color:#1a2a1a;margin-top:2px">' + a.year + '</div>' +
          '</div>' +
          '<div class="album-overlay">' + overlayHTML(a, accentColor) + '</div>' +
        '</div>';
    }

    card.innerHTML =
      coverHTML +
      '<div class="album-info">' +
        '<div class="ai-name">' + a.name + '</div>' +
        '<div class="ai-artist">' + a.artist + '</div>' +
      '</div>';

    /* fade-in stagger */
    card.style.opacity = "0";
    card.style.transform = "translateY(8px)";
    card.style.transition = "opacity .25s ease " + (idx * 0.04) + "s, transform .25s ease " + (idx * 0.04) + "s, border-color .2s, box-shadow .2s, transform .2s";

    grid.insertBefore(card, noR);

    /* trigger reflow for animation */
    requestAnimationFrame(function(){
      requestAnimationFrame(function(){
        card.style.opacity = "1";
        card.style.transform = "translateY(0)";
      });
    });
  });
}

function overlayHTML(a, accent) {
  return '<div class="ov-name" style="color:' + accent + '">' + a.name + '</div>' +
    '<div class="ov-artist">' + a.artist + '</div>' +
    '<div class="ov-year">' + a.year + '</div>' +
    '<div class="ov-genre" style="color:' + accent + ';border-color:' + accent + '99">' + a.genre + '</div>' +
    '<div class="ov-links">' +
      '<a href="' + a.yt + '" class="ov-link yt" target="_blank" onclick="event.stopPropagation()">YT</a>' +
      '<a href="' + a.sp + '" class="ov-link sp" target="_blank" onclick="event.stopPropagation()">SP</a>' +
      '<a href="' + a.tg + '" class="ov-link tg" target="_blank" onclick="event.stopPropagation()">TG</a>' +
    '</div>';
}

function escQ(s){ return s.replace(/'/g,"\\'"); }

/* ═══════════════════════════════════════════
   FILTER BUTTONS
═══════════════════════════════════════════ */
document.querySelectorAll(".filter-btn").forEach(function(btn){
  btn.addEventListener("click", function(){
    var type = this.getAttribute("data-filter-type");
    var val  = this.getAttribute("data-filter");

    /* deactivate siblings of same type */
    document.querySelectorAll('.filter-btn[data-filter-type="' + type + '"]').forEach(function(b){
      b.classList.remove("active");
    });
    this.classList.add("active");

    if (type === "genre")  activeGenre  = val;
    if (type === "decade") activeDecade = val;

    renderAlbums();
  });
});

/* ═══════════════════════════════════════════
   IMAGE LIGHTBOX
═══════════════════════════════════════════ */
function openImg(src, caption) {
  var inner = document.getElementById("img-popup-inner");
  if (src && !src.startsWith('[')) {
    inner.innerHTML = '<img src="' + src + '" style="max-width:80vw;max-height:70vh;display:block;" />';
  } else {
    inner.textContent = src || "[no image]";
  }
  document.getElementById("img-popup-caption").textContent = caption || "";
  document.getElementById("img-overlay").classList.add("open");
}
function closeImgDirect() {
  document.getElementById("img-overlay").classList.remove("open");
}
function closeImg(e) {
  if (e.target === document.getElementById("img-overlay")) closeImgDirect();
}
document.addEventListener("keydown", function(e){
  if (e.key === "Escape") closeImgDirect();
});

/* ═══════════════════════════════════════════
   PANIC CLOSE
═══════════════════════════════════════════ */
function panicClose() {
  alert("Link copied. Close it now.");
  try {
    navigator.clipboard.writeText("https://www.khanacademy.org").catch(function(){});
  } catch(e) {}
  var w = window.open("about:blank", "_self");
  w.close();
}

/* ═══════════════════════════════════════════
   INIT
═══════════════════════════════════════════ */
renderAlbums();