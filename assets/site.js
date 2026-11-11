// 페이지에는 이 파일 하나만 연결한다:  <script src="../assets/site.js"></script>
// 필요한 파일을 순서대로 불러온다:  url_data.js(주소 데이터) -> layout.js(헤더·리모컨) -> media.js(이미지·영상)
(function () {
  "use strict";
  var me = document.currentScript;
  if (!me) return;
  var base = me.src.replace(/[^\/]*$/, "");
  var files = ["url_data.js", "layout.js", "media.js"];

  (function load(i) {
    if (i >= files.length) return;
    var s = document.createElement("script");
    s.src = base + files[i];
    s.onload = s.onerror = function () { load(i + 1); };
    document.head.appendChild(s);
  })(0);
})();
