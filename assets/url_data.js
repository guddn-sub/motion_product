// 이미지·영상 주소 데이터 — 주소가 바뀌거나 파일을 바꾸면 이 파일만 고치면 됩니다.
// 페이지(HTML)에는 주소가 없고, 빈 자리 표시만 있습니다:
//     <figure class="image" data-img="net/12"></figure>   <- images["net/12"]
//     <figure data-video="net/12"></figure>               <- videos["net/12"]
//
//  [images]  키: "폴더/파일이름"   src: 사이트 기준 경로 또는 https:// 주소   width: 표시 너비(px, 생략 가능)
//  [videos]  키: "페이지폴더/단계번호"  예) "net/14_02" = 그물 페이지의 14-2 단계
//            src  : 직접 재생할 mp4 (경로 또는 https:// 주소). 비워 두면("") drive 주소로 재생창을 만듭니다.
//            drive: 드라이브 주소 ("재생이 안 되면 드라이브에서 보기" 링크)
window.URL_DATA = {

  images: {
    // ── 환경 설정 ──
    "setup/setup-1": { src: "images/setup/setup-1.png", width: 463 },
    "setup/setup-2-1": { src: "images/setup/setup-2-1.png", width: 704 },
    "setup/setup-2-2": { src: "images/setup/setup-2-2.png", width: 364 },
    // ── 손글씨 ──
    "brush/01": { src: "images/brush/01.png", width: 363 },
    "brush/02": { src: "images/brush/02.png", width: 383 },
    "brush/03": { src: "images/brush/03.png", width: 386 },
    "brush/04": { src: "images/brush/04.png", width: 401 },
    "brush/04_02": { src: "images/brush/04_02.png", width: 361 },
    // ── 젤리 ──
    "jelly/05": { src: "images/jelly/05.png", width: 375 },
    "jelly/06": { src: "images/jelly/06.png", width: 397 },
    "jelly/07": { src: "images/jelly/07.png", width: 395 },
    "jelly/08": { src: "images/jelly/08.png", width: 379 },
    "jelly/08_02": { src: "images/jelly/08_02.png", width: 389 },
    // ── 동전 ──
    "coin/09": { src: "images/coin/09.png", width: 378 },
    "coin/10": { src: "images/coin/10.png", width: 386 },
    "coin/11": { src: "images/coin/11.png", width: 366 },
    "coin/11_02": { src: "images/coin/11_02.png", width: 394 },
    // ── 그물 ──
    "net/12": { src: "images/net/12.png", width: 390 },
    "net/13": { src: "images/net/13.png", width: 365 },
    "net/14": { src: "images/net/14.png", width: 379 },
    "net/14_02": { src: "images/net/14_02.png", width: 385 },
    // ── 불릿타임 ──
    "bullet-time/15": { src: "images/bullet-time/15.png", width: 393 },
    "bullet-time/16": { src: "images/bullet-time/16.png", width: 362 },
    "bullet-time/17": { src: "images/bullet-time/17.png", width: 383 },
    "bullet-time/18": { src: "images/bullet-time/18.png", width: 385 },
    "bullet-time/18_02": { src: "images/bullet-time/18_02.png", width: 400 },
    // ── 마무리 ──
    "finish/19": { src: "images/finish/19.png", width: 383 },
    "finish/20": { src: "images/finish/20.png", width: 393 },
    "finish/21": { src: "images/finish/21.png", width: 406 },
    "finish/bonus-1": { src: "images/finish/bonus-1.png", width: 704 },
    "finish/bonus-2": { src: "images/finish/bonus-2.png", width: 704 },
  },

  videos: {
    // ── 손글씨 ──
    "brush/01": { src: "videos/brush/01.mp4", drive: "https://drive.google.com/file/d/1fBm1PTGVc8wltoSmJOtS1FYHhWs6mRUY/preview" },
    "brush/02": { src: "videos/brush/02.mp4", drive: "https://drive.google.com/file/d/1S0aQ5vzfsG7RAwqcDjKJrKpPg75C8dzE/view?usp=drive_link" },
    "brush/03": { src: "videos/brush/03.mp4", drive: "https://drive.google.com/file/d/1ZMkOkmG6yZ5vtkbpUvpagikScxhALkh7/view?usp=drive_link" },
    "brush/04": { src: "videos/brush/04.mp4", drive: "https://drive.google.com/file/d/1V2cId0zhkZrCwpbb6K9_NB2uDJ8rDG_H/view?usp=drive_link" },
    "brush/04_02": { src: "videos/brush/04_02.mp4", drive: "https://drive.google.com/file/d/1tuSYXb7V-hiFGH8HD8391bfsJ83LP5Yf/view?usp=drive_link" },
    // ── 젤리 ──
    "jelly/05": { src: "videos/jelly/05.mp4", drive: "https://drive.google.com/file/d/1wMAAUrda4RHCVbtPBOZqBW-dAhJ-OXPI/view?usp=drive_link" },
    "jelly/06": { src: "videos/jelly/06.mp4", drive: "https://drive.google.com/file/d/1u2CrL6CwtOEw0s056Q81cokoxYclFT-9/view?usp=drive_link" },
    "jelly/07": { src: "videos/jelly/07.mp4", drive: "https://drive.google.com/file/d/1chPsdKFAnaaQLmujXNqvxhiAqo_6hTlL/view?usp=drive_link" },
    "jelly/08": { src: "videos/jelly/08.mp4", drive: "https://drive.google.com/file/d/1wDFl1hislM-TlP5H72Uwzbi4bbMVOfJ8/view?usp=drive_link" },
    "jelly/08_02": { src: "videos/jelly/08_02.mp4", drive: "https://drive.google.com/file/d/1zbMphIeg68c-xR6yrYwbz2Yk4nALi66N/view?usp=drive_link" },
    // ── 동전 ──
    "coin/09": { src: "videos/coin/09.mp4", drive: "https://drive.google.com/file/d/1kTz9VdhutDP6md6rTo8-xTlp8ubWlfX6/view?usp=drive_link" },
    "coin/10": { src: "videos/coin/10.mp4", drive: "https://drive.google.com/file/d/1n1BF-qUV1UjtvJaHhuyHj7m2mXiW6z2r/view?usp=drive_link" },
    "coin/11": { src: "videos/coin/11.mp4", drive: "https://drive.google.com/file/d/1ylT2a_AZbDobxd3UEtEyV7gk6rJA5qMS/view?usp=drive_link" },
    "coin/11_02": { src: "videos/coin/11_02.mp4", drive: "https://drive.google.com/file/d/1jw0eWUXn_XlpEqAvNUFP9Z7COUpbC4CB/view?usp=drive_link" },
    // ── 그물 ──
    "net/12": { src: "videos/net/12.mp4", drive: "https://drive.google.com/file/d/1BTjJuWEzt_I2ErhszIwympvIUCCcRym2/view?usp=drive_link" },
    "net/13": { src: "videos/net/13.mp4", drive: "https://drive.google.com/file/d/1fPGyl-zzV-VADm7SmsiofGSWdaeGe1k-/view?usp=drive_link" },
    "net/14": { src: "videos/net/14.mp4", drive: "https://drive.google.com/file/d/1ZLZABCHqmT5pEz0_AELGs8jY2rkaeE2y/view?usp=drive_link" },
    "net/14_02": { src: "videos/net/14_02.mp4", drive: "https://drive.google.com/file/d/1yEjlTPQVknJ4he1dEUS3dNUzivuHatg5/view?usp=drive_link" },
    // ── 불릿타임 ──
    "bullet-time/15": { src: "videos/bullet-time/15.mp4", drive: "https://drive.google.com/file/d/1HrnUTlW-HcrXEdk_dDuggU8b2wiPDKki/view?usp=drive_link" },
    "bullet-time/16": { src: "videos/bullet-time/16.mp4", drive: "https://drive.google.com/file/d/1hBcC1ndUJ_P2n2LEi9ilPPpg9jyyt2iP/view?usp=drive_link" },
    "bullet-time/17": { src: "videos/bullet-time/17.mp4", drive: "https://drive.google.com/file/d/1KPHeuCubTjbyN0Da-6fTmlrI-suHOaK3/view?usp=drive_link" },
    "bullet-time/18": { src: "videos/bullet-time/18.mp4", drive: "https://drive.google.com/file/d/1I03Q0o2oy2KaMzFR2AlHqgw0rdtIv9ZL/view?usp=drive_link" },
    "bullet-time/18_02": { src: "videos/bullet-time/18_02.mp4", drive: "https://drive.google.com/file/d/1sztd-K0_VKk0yGaNojg5PRyLuqEchIkN/view?usp=drive_link" },
    // ── 마무리 ──
    "finish/19": { src: "videos/finish/19.mp4", drive: "https://drive.google.com/file/d/1f9EOv_BSPUebvv_nt_NFJMBxo8DW3La3/view?usp=drive_link" },
    "finish/20": { src: "videos/finish/20.mp4", drive: "https://drive.google.com/file/d/1DEAXuI6_N1qG1DyjIr2yKhGvqqx96kF3/view?usp=drive_link" },
    "finish/21": { src: "videos/finish/21.mp4", drive: "https://drive.google.com/file/d/1NqY9xstZ_EWqkmgMOYumgfueYs6F7CdJ/view?usp=drive_link" },
  }
};
