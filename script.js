(function () {
    // ____________________________________________________________________
    // INITIALISE DOM -----------------------------------------------------

    const box = document.getElementById("box");
    const path = document.querySelector("path");
    const lOne = document.getElementById("linkOne");
    const lTwo = document.getElementById("linkTwo");

    const steps = [];

    // COLOR SETUP --------------------------------------------------------

    // CONTROLS ⚙️
    const FACTOR = 255;

    // RGB
    function bgClr() {
        const clr = Array(3)
            .fill()
            .map((i) => (i = (Math.random() * FACTOR) | 0));
        return `rgb(${clr[0]}, ${clr[1]}, ${clr[2]})`;
    }

    // COLOR BY ARRAY
    function colorByArray(idx) {
        let id = steps[idx].item;
        let clr = steps[idx].color;
        let elm = document.getElementById(id);
        if (elm.id === box.id) {
            handleSVG(clr);
            tic();
        } else if (elm.id === lOne.id) {
            handleClones(clr);
            tic();
        } else {
            elm.style.backgroundColor = clr;
            tic();
        }
    }

    // HANDLE CLONES
    function handleClones(clr) {
        lOne.style.backgroundColor = clr;
        lTwo.style.backgroundColor = clr;
    }

    // HANDLE SVG
    function handleSVG(clr) {
        box.style.backgroundColor = clr;
        path.style.fill = clr;
    }

    // REWIND CLOCK SETUP -------------------------------------------------

    let switchClock = false;
    let idleTime = 0;
    let interval = 0;

    // CONTROLS ⚙️
    const TIC = 50;
    const IDLE = 5000;

    // TIMER
    function resetTimer() {
        if (!switchClock) return;
        clearTimeout(idleTime);
        clearTimeout(interval);
        idleTime = setTimeout(rewind, IDLE);
    }

    // TIC
    function tic() {
        if (!switchClock) return;
        steps.pop();
        interval = setTimeout(rewind, TIC);
    }

    // CLOCK
    function rewind() {
        const idxRewind = steps.length - 1;
        if (steps.length === 0) return;
        colorByArray(idxRewind);
    }

    // SCROLL-STEPS SETUP -------------------------------------------------

    let x;

    // HANDLE MOUSEDOWN
    document.onmousedown = (evt) => {
        x = evt.clientX;
        switchClock = false;
        document.addEventListener("mousemove", scroll, true);
    };

    // HANDLE MOUSEUP
    document.onmouseup = () => {
        switchClock = true;
        document.removeEventListener("mousemove", scroll, true);
    };

    // SCROLL CONTROLS
    function scroll(evt) {
        evt.preventDefault();
        const l = steps.length;
        const idxScroll = l - ((evt.clientX - x) / 10).toFixed(0);
        if (idxScroll < 0 || idxScroll >= l - 1) return;
        colorByArray(idxScroll);
    }

    // CLICK EVENT LISTENER SETUP -----------------------------------------

    document.addEventListener("click", (evt) => {
        let clr = bgClr();
        resetTimer();
        // handle clickable elements
        if (!evt.target.matches(".lense")) return;
        if (evt.target.id === "box" || evt.target.id === "path") {
            // svg
            steps.push({
                item: box.id,
                color: box.style.backgroundColor,
            });
            handleSVG(clr);
        } else if (evt.target.id === "linkOne" || evt.target.id === "linkTwo") {
            // clones
            steps.push({
                item: lOne.id,
                color: lOne.style.backgroundColor,
            });
            handleClones(clr);
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
