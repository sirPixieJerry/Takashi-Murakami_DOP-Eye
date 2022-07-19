(function () {
    // ____________________________________________________________________
    // INITIALISE DOM -----------------------------------------------------

    const box = document.getElementById("box");
    const path = document.querySelector("path");
    const lOne = document.getElementById("linkOne");
    const lTwo = document.getElementById("linkTwo");

    // REWIND SETUP --------------------------------------------------------

    const TIC = 50;
    const IDLE = 5000;
    const steps = [];
    let idle = 0;
    let interval = 0;

    // TIMER CONTROLS ⚙️
    function resetTimer() {
        clearTimeout(idle);
        clearTimeout(interval);
        idle = setTimeout(rewind, IDLE);
    }

    // TIC CONTROLS ⚙️
    function tic() {
        steps.pop();
        interval = setTimeout(rewind, TIC);
    }

    // COLOR SETUP --------------------------------------------------------

    const FACTOR = 255;

    // RGB CONTROLS ⚙️
    function bgClr() {
        const clr = Array(3)
            .fill()
            .map((i) => (i = (Math.random() * FACTOR) | 0));
        return `rgb(${clr[0]}, ${clr[1]}, ${clr[2]})`;
    }

    // SCROLL-STEPS SETUP -------------------------------------------------

    let x;

    document.onmousedown = (evt) => {
        x = evt.clientX;
        document.addEventListener("mousemove", clientX, true);
    };

    document.onmouseup = () => {
        document.removeEventListener("mousemove", clientX, true);
    };

    function clientX(evt) {
        const l = steps.length;
        const c = ((evt.clientX - x) / 10).toFixed(0);
        if (l - c < 0 || l - c > l - 1) return;
        let id = steps[l - c].item;
        let clr = steps[l - c].color;
        let elm = document.getElementById(id);
        if (elm.id === box.id) {
            box.style.backgroundColor = clr;
            path.style.fill = clr;
        } else if (elm.id === lOne.id) {
            lOne.style.backgroundColor = clr;
            lTwo.style.backgroundColor = clr;
        } else {
            elm.style.backgroundColor = clr;
        }
        console.log("mouseX: ", steps[l - c], l - c);
    }

    // ____________________________________________________________________
    // REWIND CLOCK -------------------------------------------------------

    function rewind() {
        if (!(steps.length === 0)) {
            let id = steps[steps.length - 1].item;
            let clr = steps[steps.length - 1].color;
            let elm = document.getElementById(id);
            if (elm.id === box.id) {
                box.style.backgroundColor = clr;
                path.style.fill = clr;
                tic();
            } else if (elm.id === lOne.id) {
                lOne.style.backgroundColor = clr;
                lTwo.style.backgroundColor = clr;
                tic();
            } else {
                elm.style.backgroundColor = clr;
                tic();
            }
        }
    }

    // ____________________________________________________________________
    // EVENT LISTENER SETUP -----------------------------------------------

    document.addEventListener("click", (evt) => {
        let clr = bgClr();
        // resetTimer();
        // handle clickable elements
        if (!evt.target.matches(".lense")) return;
        if (evt.target.id === "box" || evt.target.id === "path") {
            // svg
            steps.push({
                item: box.id,
                color: box.style.backgroundColor,
            });
            box.style.backgroundColor = clr;
            path.style.fill = clr;
        } else if (evt.target.id === "linkOne" || evt.target.id === "linkTwo") {
            // linked
            steps.push({
                item: lOne.id,
                color: lOne.style.backgroundColor,
            });
            lOne.style.backgroundColor = clr;
            lTwo.style.backgroundColor = clr;
        } else {
            // everything else
            steps.push({
                item: evt.target.id,
                color: evt.target.style.backgroundColor,
            });
            evt.target.style.backgroundColor = clr;
        }
    });
})();

/*        ,,_
       zd$$??=
     z$$P? F:`c,                _
    d$$, `c'cc$$i           ,cd$?R
   $$$$ cud$,?$$$i       ,=P"2?z "
    $" " ?$$$,?$$$.    ,-''`>, bzP
     'cLdb,?$$,?$$$   ,h' "I$'J$P
  ... `?$$$,"$$,`$$h  $$PxrF'd$"
d$PP""?-,"?$$,?$h`$$,,$$'$F44"
?,,_`=4c,?=,"?hu?$`?L4$'? '
   `""?==""=-"" `""-`'_,,,,
           .ccu?m?e?JC,-,"=?
                     """=='?"
© ❥₷ίℜ✿ℙ℩ⓧίℇ❀ⅉεℛƦɏ */
