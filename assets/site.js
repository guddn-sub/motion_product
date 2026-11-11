// 페이지에는 이 파일 하나만 연결한다:  <script src="../assets/site.js"></script>
// 필요한 파일을 순서대로 불러온다:  url_data.js(주소 데이터) -> layout.js(헤더·리모컨) -> media.js(이미지·영상)
(function () {
  "use strict";
  var me = document.currentScript;
  if (!me) return;
  var base = new URL(".", me.src).href;
  var files = ["url_data.js", "layout.js", "media.js"];
  // 시간 값(시드)을 주소 뒤에 붙여서, 새로고침할 때마다 최신 파일을 받는다.
  // (깃허브 페이지는 파일을 최대 10분 캐시하므로, 이게 없으면 푸시해도 예전 파일이 보일 수 있다.)
  // 용량이 큰 이미지·영상에는 붙이지 않는다. 매번 다시 내려받게 되기 때문.
  var seed = Date.now();

  // 서비스 워커 등록: 이후에는 HTML 과 site.js 자체도 열 때마다 최신 여부를 확인한다. (sw.js 참고)
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register(new URL("../sw.js", me.src).href).catch(function () {});
  }

  // 세 파일을 한꺼번에 내려받고(빠름), 실행은 적은 순서대로 한다. (async=false)
  files.forEach(function (name) {
    var s = document.createElement("script");
    s.src = base + name + "?v=" + seed;
    s.async = false;
    document.head.appendChild(s);
  });
})();
