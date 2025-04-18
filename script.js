( () => {
    let a = 0
      , b = setInterval( () => {
        if (window.location.pathname.includes("/checkout")) {
            console.log(`🥷 Done! ${a} attempts.`),
            clearInterval(b);
            return
        }
        a++,
        console.log(`🥷 Attempt #${a}`);
        const c = [...document.querySelectorAll(".fadeInImg .rowGroup")];
        let d = null
          , e = null;
        for (let f = 0; f < c.length - 1; f++) {
            const g = c[f].querySelector("rect.seat");
            if (!g)
                continue;
            for (let h = 1; h <= 3; h++) {
                const i = c[f + h]?.querySelector("rect.seat");
                if (i) {
                    d = g,
                    e = i;
                    break
                }
            }
            if (d && e)
                break
        }
        if (d && e) {
            [d, e].forEach(f => f.dispatchEvent(new MouseEvent("click",{
                bubbles: !0,
                cancelable: !0,
                view: window
            }))),
            setTimeout( () => {
                const f = [...document.querySelectorAll("button")].find(g => g.textContent.trim().toLowerCase() === "proceed");
                f && (f.click(),
                setTimeout( () => {
                    window.location.pathname.includes("/checkout") && (console.log(`🎯 Success! ${a} attempts.`),
                    clearInterval(b))
                }
                , 500))
            }
            , 50)
        }
    }
    , 800)
}
)();
