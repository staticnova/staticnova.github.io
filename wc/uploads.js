/* ─── FILE DATA ─────────────────────────────── */
var FILES = [
  {
    name:"Discrete_Final_Prep",
    file:"001_discrete_math_final.html",
    ext:"html", type:"html",
    size:"23 KB", date:"21/05/2026",
    by:"@paperstreetghost",
    status:"verified",
    subject:"Math",
    desc:"Full discrete mathematics final exam preparation guide. Covers logic, sets, graph theory.",
    dl:"uploads/001_discrete_math_final.html",
    mirror:"uploads/001_discrete_math_final.html"
  },
  {
    name:"History_of_Kazakhstan_Brief_Outlines",
    file:"002_history_final.html",
    ext:"html", type:"html",
    size:"89 KB", date:"20/05/2026",
    by:"@paperstreetghost",
    status:"verified",
    subject:"History",
    desc:"Brief outlines of Kazakhstan history covering all major periods and exam topics.",
    dl:"uploads/002_history_final.html",
    mirror:"uploads/002_history_final.html"
  },
  {
    name:"English_A2_U5-9_Guide",
    file:"003_english_a2_guide.html",
    ext:"html", type:"html",
    size:"19 KB", date:"19/05/2026",
    by:"@paperstreetghost",
    status:"verified",
    subject:"English",
    desc:"English A2 units 5–9 comprehensive study guide with vocabulary and grammar notes.",
    dl:"uploads/003_english_a2_guide.html",
    mirror:"uploads/003_english_a2_guide.html"
  },
  {
    name:"GEK_Tickets_Kazakhstan_History",
    file:"gek_tickets.pdf",
    ext:"pdf", type:"pdf",
    size:"4.2 MB", date:"18/05/2026",
    by:"@deffx7",
    status:"safe",
    subject:"History",
    desc:"GEK exam tickets — full analysis of Kazakhstan history. Sourced from external drive.",
    dl:"https://drive.google.com/file/d/1eskz4JwxmYA73Yc4gRKIdNrQZQimB9NB/view?usp=sharing",
    mirror:"https://drive.google.com/file/d/1eskz4JwxmYA73Yc4gRKIdNrQZQimB9NB/view?usp=sharing"
  }
];

var FILE_ICONS = {
  pdf:"&#128196;", doc:"&#128196;", zip:"&#128230;",
  html:"&#128187;", txt:"&#128220;"
};

var activeType   = "all";
var activeStatus = "all";
var currentView  = "grid";

/* ─── FILTER ─────────────────────────────────── */
document.querySelectorAll(".fb").forEach(function(b){
  b.addEventListener("click",function(){
    var ft = this.getAttribute("data-ft");
    var fv = this.getAttribute("data-fv");
    document.querySelectorAll('.fb[data-ft="'+ft+'"]').forEach(function(x){x.classList.remove("active");});
    this.classList.add("active");
    if(ft==="type")   activeType   = fv;
    if(ft==="status") activeStatus = fv;
    renderAll();
  });
});

function filtered(){
  return FILES.filter(function(f){
    var tok = activeType==="all"   || f.type===activeType;
    var sok = activeStatus==="all" || f.status===activeStatus;
    return tok && sok;
  });
}

/* ─── RENDER ─────────────────────────────────── */
function renderAll(){
  var list = filtered();
  document.getElementById("fc-num").textContent = list.length;
  document.getElementById("fc-label").textContent = "[ "+list.length+" / "+FILES.length+" ]";
  if(currentView==="grid") renderGrid(list);
  else renderTable(list);
}

function statusClass(s){
  return {verified:"s-verified",updated:"s-updated",safe:"s-safe",new:"s-new",archived:"s-archived"}[s]||"s-safe";
}
function statusLabel(s){ return s.toUpperCase(); }

function renderGrid(list){
  var g = document.getElementById("upload-grid");
  g.innerHTML = list.length===0
    ? '<div id="no-results" style="display:block;text-align:center;padding:30px;font-family:\'Courier New\',monospace;font-size:10px;color:#2a2a18;border:1px dashed #1a1a0e;grid-column:1/-1">[ NO FILES MATCH THIS FILTER ]</div>'
    : "";

  list.forEach(function(f, idx){
    var card = document.createElement("div");
    card.className = "ucard t-"+f.type;
    card.style.cssText = "opacity:0;transform:translateY(6px);transition:opacity .2s ease "+(idx*.04)+"s,transform .2s ease "+(idx*.04)+"s,border-color .2s,box-shadow .2s,transform .2s;";
    card.innerHTML =
      '<div class="ucard-icon">'+
        '<div class="fi-icon">'+(FILE_ICONS[f.type]||"&#128196;")+'</div>'+
        '<div class="fi-ext">'+f.ext+'</div>'+
        '<span class="ucard-status '+statusClass(f.status)+'">'+statusLabel(f.status)+'</span>'+
      '</div>'+
      '<div class="ucard-body">'+
        '<div class="uc-name" title="'+f.name+'">'+f.name+'</div>'+
        '<div class="uc-meta">'+
          '<span class="by">'+f.by+'</span><br>'+
          '<span class="dt">'+f.date+'</span> &nbsp; <span class="sz">'+f.size+'</span>'+
        '</div>'+
        '<div class="uc-btns">'+
          '<a href="'+f.dl+'" class="ub ub-dl" target="_blank">[DL]</a>'+
          '<a href="'+f.mirror+'" class="ub ub-mir" target="_blank">[MIR]</a>'+
          '<button class="ub ub-pre" onclick="openPrev('+idx+')">&#9654; INFO</button>'+
        '</div>'+
      '</div>';

    g.appendChild(card);
    requestAnimationFrame(function(){ requestAnimationFrame(function(){
      card.style.opacity="1"; card.style.transform="translateY(0)";
    });});
  });
}

function renderTable(list){
  var tb = document.getElementById("table-body");
  tb.innerHTML = "";
  if(list.length===0){
    tb.innerHTML='<tr><td colspan="7" style="text-align:center;padding:20px;font-family:\'Courier New\',monospace;color:#2a2a18">[ NO FILES MATCH THIS FILTER ]</td></tr>';
    return;
  }
  list.forEach(function(f, idx){
    var tr = document.createElement("tr");
    tr.innerHTML =
      '<td class="fn"><a href="'+f.dl+'" target="_blank">'+f.name+'</a></td>'+
      '<td style="font-family:\'Courier New\',monospace;color:#556644;text-transform:uppercase">'+f.ext+'</td>'+
      '<td style="font-family:\'Courier New\',monospace;color:#3a3a28;white-space:nowrap">'+f.size+'</td>'+
      '<td style="font-family:\'Courier New\',monospace;color:#555566">'+f.by+'</td>'+
      '<td style="font-family:\'Courier New\',monospace;color:#2e2e1e;white-space:nowrap">'+f.date+'</td>'+
      '<td><span class="ucard-status '+statusClass(f.status)+'" style="position:static;display:inline-block">'+statusLabel(f.status)+'</span></td>'+
      '<td style="white-space:nowrap">'+
        '<a href="'+f.dl+'" class="btn-sm" target="_blank">[DL]</a> '+
        '<button class="btn-sm" onclick="openPrev('+idx+')" style="margin-left:2px">[INFO]</button>'+
      '</td>';
    tb.appendChild(tr);
  });
}

/* ─── VIEW TOGGLE ────────────────────────────── */
function setView(v){
  currentView = v;
  document.getElementById("upload-grid").style.display  = v==="grid"  ? "" : "none";
  document.getElementById("upload-table").style.display = v==="table" ? "" : "none";
  document.getElementById("vt-grid").classList.toggle("active",  v==="grid");
  document.getElementById("vt-table").classList.toggle("active", v==="table");
  renderAll();
}

/* ─── PREVIEW POPUP ──────────────────────────── */
function openPrev(idx){
  var f = filtered()[idx] || FILES[idx];
  document.getElementById("prev-title").textContent = f.name;
  document.getElementById("prev-dl").href  = f.dl;
  document.getElementById("prev-mir").href = f.mirror;
  document.getElementById("prev-body").innerHTML =
    row("File",    f.file)+
    row("Type",    f.ext.toUpperCase())+
    row("Size",    f.size)+
    row("Subject", f.subject)+
    row("Uploaded",f.date)+
    row("By",      f.by)+
    rowHL("Status",statusLabel(f.status))+
    '<div style="margin-top:8px;font-family:\'Courier New\',monospace;font-size:9px;color:#3a3a28;line-height:1.7;border-top:1px dotted #1a1a0e;padding-top:6px">'+
    f.desc+'</div>';
  document.getElementById("prev-overlay").classList.add("open");
}
function row(k,v){
  return '<div class="pi-row"><span style="width:70px;flex-shrink:0">'+k+':</span><span>'+v+'</span></div>';
}
function rowHL(k,v){
  return '<div class="pi-row hl"><span style="width:70px;flex-shrink:0">'+k+':</span><span>'+v+'</span></div>';
}
function closePrev(e){
  if(e.target===document.getElementById("prev-overlay")) closePrevDirect();
}
function closePrevDirect(){
  document.getElementById("prev-overlay").classList.remove("open");
}
document.addEventListener("keydown",function(e){ if(e.key==="Escape") closePrevDirect(); });

/* ─── PANIC ──────────────────────────────────── */
function panicClose(){
  alert("Link copied. Close it now.");
  try{ navigator.clipboard.writeText("https://www.khanacademy.org").catch(function(){}); }catch(e){}
  var w = window.open("about:blank","_self"); w.close();
}

/* ─── INIT ───────────────────────────────────── */
renderAll();