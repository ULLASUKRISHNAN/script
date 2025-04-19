(() => {
  let 忍 = 0,
    影 = setInterval(() => {
      if (location.pathname.includes('/checkout')) {
        console.log(`🥷 Done! ${忍} attempts.`), clearInterval(影);
        return;
      }
      console.log(`🥷 Attempt #${++忍}`);
      const 手裏剣 = [...document.querySelectorAll('.fadeInImg .rowGroup')];
      let 刀 = null,
        鎖 = null;
      for (let 霧 = 0; 霧 < 手裏剣.length - 1; 霧++) {
        const 風 = 手裏剣[霧].querySelector('rect.seat');
        if (!風) continue;
        for (let 火 = 1; 火 <= 3; 火++) {
          const 影分身 = 手裏剣[霧 + 火]?.querySelector('rect.seat');
          if (影分身) {
            刀 = 風;
            鎖 = 影分身;
            break;
          }
        }
        if (刀 && 鎖) break;
      }
      if (刀 && 鎖) {
        [刀, 鎖].forEach(煙玉 =>
          煙玉.dispatchEvent(
            new MouseEvent('click', {
              bubbles: !0,
              cancelable: !0,
              view: window,
            })
          )
        );
        setTimeout(() => {
          const 忍犬 = [...document.querySelectorAll('button')].find(影子 =>
            影子.textContent.trim().toLowerCase().includes('proceed')
          );
          忍犬 &&
            (忍犬.click(),
            setTimeout(() => {
              location.pathname.includes('/checkout') &&
                (console.log(`🎯 Success! ${忍} attempts.`),
                clearInterval(影));
            }, 500));
        }, 50);
      }
    }, 800);
})();
