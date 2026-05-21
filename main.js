
var _k = 7;
var _e = [95,90,108,111,119,63,94]; //
function _decode(arr, key) {
  var s = "";
  for (var i = 0; i < arr.length; i++) s += String.fromCharCode(arr[i] ^ key);
  return s;
}

function checkPass() {
  var input = document.getElementById("ap-pw").value;
  var msg   = document.getElementById("ap-msg");
  var link  = document.getElementById("study-link");

  if (input === _decode(_e, _k)) {
    msg.textContent  = "[ ACCESS GRANTED ]";
    msg.className    = "granted";
    link.style.display = "block";
    document.getElementById("ap-pw").style.borderColor = "#44ff44";
  } else {
    msg.textContent  = "ACCESS DENIED";
    msg.className    = "denied";
    link.style.display = "none";
    document.getElementById("ap-pw").style.borderColor = "#ff4444";
    document.getElementById("ap-pw").value = "";
    // brief shake effect
    var pw = document.getElementById("ap-pw");
    pw.style.marginLeft = "4px";
    setTimeout(function(){ pw.style.marginLeft = "0"; }, 120);
  }
}

/* --------------------------------------------------
   PANIC BUTTON
-------------------------------------------------- */
function panicButton() {
  // 1. Alert
  alert("Link copied. Close it now.");

  // 2. Copy a harmless fake link to clipboard
  var fakeLink = "https://www.khanacademy.org/science/biology";
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(fakeLink).catch(function(){});
  } else {
    // fallback for old browsers
    try {
      var ta = document.createElement("textarea");
      ta.value = fakeLink;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
    } catch(e) {}
  }

  // 3. Try to close the tab
  var closed = false;
  try {
    window.close();
    // Check after a tick if it actually closed (most browsers block this)
    setTimeout(function() {
      // 4. If still open, redirect to safe-looking anchor
      try { window.location.hash = "#top"; } catch(e) {}
      // Blank the title temporarily so it looks like a normal site
      document.title = "Biology Study Guide - Khan Academy";
    }, 200);
  } catch(e) {
    document.title = "Biology Study Guide - Khan Academy";
  }
}

/* --------------------------------------------------
   MOBILE PANEL TOGGLE
-------------------------------------------------- */
function togglePanel() {
  var panel = document.getElementById("access-panel");
  var isOpen = panel.classList.contains("open");
  panel.classList.toggle("open");
  document.getElementById("ap-toggle").textContent = isOpen ? "ACCESS" : "CLOSE";
}

/* --------------------------------------------------
   IMAGE LIGHTBOX
-------------------------------------------------- */
function openImg(src, caption) {
  var inner = document.getElementById("img-popup-inner");
  inner.innerHTML = '<img src="' + src + '" style="max-width:80vw; max-height:70vh; display:block;" />';
  document.getElementById("img-popup-caption").textContent = caption;
  document.getElementById("img-overlay").classList.add("open");
}

function closeImgDirect() {
  document.getElementById("img-overlay").classList.remove("open");
}

function closeImg(e) {
  // close if clicking the dark overlay (not the popup itself)
  if (e.target === document.getElementById("img-overlay")) {
    closeImgDirect();
  }
}

// ESC key also closes
document.addEventListener("keydown", function(e) {
  if (e.key === "Escape") closeImgDirect();
});

function panicClose() {

  // Copy fake link
  navigator.clipboard.writeText("https://wsp.kbtu.kz/");

  // Alert
  alert("Link copied. Closing tab...");

  // Try to close tab
  window.open('', '_self');
  window.close();

  // Fallback redirect if browser blocks closing
  setTimeout(() => {
    window.location.href = "about:blank";
  }, 185);
}