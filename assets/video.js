// 모든 페이지가 공유하는 영상 삽입 함수.
// 노션이 만든 "드라이브 링크" 줄을 찾아서, 같은 단계의 mp4 재생창으로 바꿔 준다.
//   source/04-net.html 의 "14-2)" 단계  ->  ../videos/net/14_02.mp4
// mp4를 못 불러오면 원래 드라이브 링크를 그대로 보여 준다.
(function () {
  "use strict";

  // 페이지 파일 이름(04-net.html) -> 폴더 이름(net)
  function slugOfPage() {
    var m = location.pathname.match(/\/\d+-([\w-]+)\.html$/);
    return m ? m[1] : null;
  }

  // 제목("14-2) 렉 걸리는 현상 수정") -> 영상 번호("14_02")
  function idOfTitle(text) {
    var m = text.trim().match(/^(\d+)(?:[_-](\d+))?\)/);
    if (!m) return null;
    var a = ("0" + m[1]).slice(-2);
    return m[2] ? a + "_" + ("0" + m[2]).slice(-2) : a;
  }

  // 핵심 함수: 노션의 링크 줄(figure) 하나를 영상 재생창으로 바꾼다.
  function embedVideo(figure, mp4Url, driveUrl) {
    var box = document.createElement("figure");
    box.className = "embedded-video";

    var video = document.createElement("video");
    video.controls = true;
    video.preload = "metadata";
    video.setAttribute("playsinline", "");
    video.src = mp4Url;
    video.style.cssText =
      "width:100%;max-width:720px;aspect-ratio:16/9;background:#000;border-radius:8px;display:block";

    var cap = document.createElement("p");
    cap.style.cssText = "font-size:13px;margin:6px 0 0";
    var link = document.createElement("a");
    link.href = driveUrl;
    link.target = "_blank";
    link.rel = "noopener";
    link.textContent = "재생이 안 되면 드라이브에서 보기";
    cap.appendChild(link);

    box.appendChild(video);
    box.appendChild(cap);

    // 실패하면 원래 링크 줄로 되돌린다.
    video.addEventListener("error", function () {
      box.remove();
      figure.style.display = "";
    });

    figure.style.display = "none";
    figure.parentNode.insertBefore(box, figure);
  }

  function run() {
    var slug = slugOfPage();
    if (!slug) return;
    var currentId = null;
    var nodes = document.querySelectorAll(".page-body > h2, .page-body > figure");
    Array.prototype.forEach.call(nodes, function (el) {
      if (el.tagName === "H2") {
        currentId = idOfTitle(el.textContent);
        return;
      }
      var a = el.querySelector('.source a[href*="drive.google.com/file/d/"]');
      if (!a || !currentId) return;
      embedVideo(el, "../videos/" + slug + "/" + currentId + ".mp4", a.href);
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", run);
  } else {
    run();
  }
})();
