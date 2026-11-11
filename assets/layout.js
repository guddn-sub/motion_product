// 모든 페이지가 공유하는 공통 레이아웃:
//   - 맨 위 헤더: [← 뒤로] [🏠 홈]  +  경로(홈 › 사이트 제목 › 현재 페이지)
//   - 오른쪽 아래 리모컨: ▲ 맨 위 / ▼ 맨 아래
// 사이트 제목과 홈 주소는 아래 "설정" 두 줄만 바꾸면 전체에 적용된다.
(function () {
  "use strict";

  // ───────── 설정 ─────────
  var SITE_TITLE = "모션 작업실 - sonnet";   // 사이트 제목 (경로, 목차 제목에 쓰임)
  var HOME_URL = null;                       // "홈" 링크. null 이면 index.html, 다른 주소를 쓰려면 문자열로 지정
  var HOME_LABEL = "홈";
  // ─────────────────────────

  var script = document.currentScript;
  if (!script) return;
  var root = new URL("../", script.src);                 // assets/ 의 한 단계 위 = 사이트 루트
  var indexUrl = new URL("index.html", root).href;
  var homeUrl = HOME_URL ? new URL(HOME_URL, root).href : indexUrl;
  var path = location.pathname;
  var isIndex = path === root.pathname || path === root.pathname + "index.html";

  // 목차 페이지의 제목도 변수를 따른다.
  if (isIndex) {
    document.title = SITE_TITLE;
    var h1 = document.querySelector("h1.page-title");
    if (h1) h1.textContent = SITE_TITLE;
  }

  var pageTitleEl = document.querySelector("h1.page-title");
  var pageTitle = pageTitleEl ? pageTitleEl.textContent.trim() : document.title;

  // ───────── 스타일 (이 파일 하나에 포함) ─────────
  var css =
    ".ml-bar{position:sticky;top:0;z-index:50;display:flex;align-items:center;gap:10px;padding:8px 14px;" +
    "background:rgba(255,255,255,.96);border-bottom:1px solid #e5e1dc;" +
    "font:14px/1.4 -apple-system,'Segoe UI','Malgun Gothic',sans-serif}" +
    ".ml-btn{display:inline-flex;align-items:center;gap:4px;padding:6px 12px;border:1px solid #d9d5ce;border-radius:8px;" +
    "background:#fff;color:#222;font:inherit;text-decoration:none;cursor:pointer;white-space:nowrap}" +
    ".ml-btn:hover{border-color:#e8742a;color:#c45a14}" +
    ".ml-crumbs{display:flex;flex-wrap:wrap;align-items:center;gap:2px 8px;min-width:0;color:#555}" +
    ".ml-crumbs a{color:#555;text-decoration:none}" +
    ".ml-crumbs a:hover{color:#c45a14;text-decoration:underline}" +
    ".ml-crumbs .cur{color:#111;font-weight:600}" +
    ".ml-sep{color:#b5b0a6}" +
    ".ml-remote{position:fixed;right:16px;bottom:20px;z-index:50;display:flex;flex-direction:column;gap:8px}" +
    ".ml-remote button{width:42px;height:42px;border-radius:50%;border:1px solid #d9d5ce;background:#fff;color:#222;" +
    "box-shadow:0 2px 8px rgba(0,0,0,.15);font-size:16px;line-height:1;cursor:pointer}" +
    ".ml-remote button:hover{border-color:#e8742a;color:#c45a14}" +
    "@media (max-width:560px){.ml-bar{padding:6px 10px;gap:6px}.ml-btn{padding:5px 9px}}";
  var style = document.createElement("style");
  style.textContent = css;
  document.head.appendChild(style);

  function el(tag, cls, text) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text != null) e.textContent = text;
    return e;
  }
  function crumbLink(label, href) {
    var a = el("a", null, label);
    a.href = href;
    return a;
  }

  // ───────── 헤더 ─────────
  var bar = el("div", "ml-bar");

  var back = el("button", "ml-btn", "← 뒤로");
  back.type = "button";
  back.addEventListener("click", function () {
    if (history.length > 1) history.back();
    else location.href = indexUrl;
  });

  var home = el("a", "ml-btn", "🏠 " + HOME_LABEL);
  home.href = homeUrl;

  var crumbs = el("nav", "ml-crumbs");
  crumbs.setAttribute("aria-label", "경로");
  crumbs.appendChild(crumbLink(HOME_LABEL, homeUrl));
  crumbs.appendChild(el("span", "ml-sep", "›"));
  if (isIndex) {
    crumbs.appendChild(el("span", "cur", SITE_TITLE));
  } else {
    crumbs.appendChild(crumbLink(SITE_TITLE, indexUrl));
    crumbs.appendChild(el("span", "ml-sep", "›"));
    crumbs.appendChild(el("span", "cur", pageTitle));
  }

  bar.appendChild(back);
  bar.appendChild(home);
  bar.appendChild(crumbs);
  document.body.insertBefore(bar, document.body.firstChild);

  // ───────── 리모컨 (맨 위 / 맨 아래) ─────────
  var remote = el("div", "ml-remote");
  var up = el("button", null, "▲");
  up.type = "button";
  up.title = "맨 위로";
  up.setAttribute("aria-label", "맨 위로");
  up.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  var down = el("button", null, "▼");
  down.type = "button";
  down.title = "맨 아래로";
  down.setAttribute("aria-label", "맨 아래로");
  down.addEventListener("click", function () {
    // 노션 페이지는 DOCTYPE 이 없어 호환 모드로 열리므로 body 와 html 중 큰 높이를 쓴다.
    var full = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
    window.scrollTo({ top: full, behavior: "smooth" });
  });
  remote.appendChild(up);
  remote.appendChild(down);
  document.body.appendChild(remote);
})();
