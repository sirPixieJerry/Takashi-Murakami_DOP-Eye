(function () {
    // access elements with DOM
    const box = document.getElementById("box");
    const path = document.querySelector("path");
    const lOne = document.getElementById("linkOne");
    const lTwo = document.getElementById("linkTwo");

    // setup clock
    const steps = [];
    let time;
    let back;

    // generate rgb sring
    function bgClr() {
        const clr = Array(3)
            .fill()
            .map((i) => (i = (Math.random() * 255) | 0));
        return `rgb(${clr[0]}, ${clr[1]}, ${clr[2]})`;
    }

    function resetTimer() {
        clearTimeout(time);
        clearTimeout(back);
        time = setTimeout(bckWrds, 5000);
    }

    // event-listener setup
    document.addEventListener("click", function (evt) {
        // store current rgb string
        const clr = bgClr();
        // handle clickable elements
        if (!evt.target.matches(".lense")) return;
        resetTimer();
        console.log(time);
        if (evt.target.id === "box" || evt.target.id === "path") {
            steps.push({
                item: box.id,
                color: box.style.backgroundColor,
            });
            box.style.backgroundColor = clr;
            path.style.fill = clr;
        } else if (evt.target.id === "linkOne" || evt.target.id === "linkTwo") {
            steps.push({
                item: lOne.id,
                color: lOne.style.backgroundColor,
            });
            lOne.style.backgroundColor = clr;
            lTwo.style.backgroundColor = clr;
        } else {
            steps.push({
                item: evt.target.id,
                color: evt.target.style.backgroundColor,
            });
            evt.target.style.backgroundColor = bgClr();
        }

        // resets the idle time of the rewind
        // document.onmousedown = resetTimer;
        // // the actual resetter of the idle time and rewind starter

        // introducing the rewind
        // function bckWrds() {
        //     // stops the rewind if arrays are empty
        //     if (arrItm.length >= 1) {
        //         // calls objects by the id stored in the arrays
        //         var elm = document.getElementById(arrItm[arrItm.length - 1]);
        //         // rewind for the lashes
        //         if (elm.id === lashOne.id) {
        //             lashOne.style.backgroundColor = arrCol[arrCol.length - 1];
        //             lashTwo.style.fill = arrCol[arrCol.length - 1];
        //             // remove indexes in the arrays
        //             arrItm.pop();
        //             arrCol.pop();
        //             // calls function again
        //             back = setTimeout(bckWrds, 50);
        //             // rewind for the reflections
        //         } else if (elm.id === reflexOne.id) {
        //             reflexOne.style.backgroundColor = arrCol[arrCol.length - 1];
        //             reflexTwo.style.backgroundColor = arrCol[arrCol.length - 1];
        //             // remove indexes in the arrays
        //             arrItm.pop();
        //             arrCol.pop();
        //             // calls function again
        //             back = setTimeout(bckWrds, 50);
        //             // rewind for the lenses
        //         } else {
        //             elm.style.backgroundColor = arrCol[arrCol.length - 1];
        //             // remove indexes in the arrays
        //             arrItm.pop();
        //             arrCol.pop();
        //             // calls function again
        //             back = setTimeout(bckWrds, 50);
        //         }
        //     }
        // }
    });

    function bckWrds() {
        console.log("bckWrds");
    }
})();

// hsl farbraum
// variable festlegen die den setTimeout chanceled
// arr muss erst zum schluss gelöscht werden
// zusätzliche veariable um durch den arr zu zählen
// x und y position bestimmen den punkt in dem man in dem arr vor und zurück spult

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
