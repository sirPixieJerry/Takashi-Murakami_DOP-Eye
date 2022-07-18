(function () {
    const lashOne = document.getElementById("lashes");
    const lashTwo = document.querySelector("path");
    const reflexOne = document.getElementById("reflexOne");
    const reflexTwo = document.getElementById("reflexTwo");

    var arrItm = [];
    var arrCol = [];

    var time;
    var back;

    const colorSpace = "rgb";

    document.addEventListener("click", function (event) {
        if (!event.target.matches(".lense")) return;

        if (event.target.id === "lashes" || event.target.id === "lash") {
            let clr2 = bgClr();

            arrItm.push(lashOne.id);
            arrCol.push(lashOne.style.backgroundColor);

            lashOne.style.backgroundColor = clr2;
            lashTwo.style.fill = clr2;
        }
        if (
            event.target.id === "reflexOne" ||
            event.target.id === "reflexTwo"
        ) {
            let clr = bgClr();

            arrItm.push(reflexOne.id);
            arrCol.push(reflexOne.style.backgroundColor);

            reflexOne.style.backgroundColor = clr;
            reflexTwo.style.backgroundColor = clr;
        } else {
            // push the recent color and object id into the array
            arrItm.push(event.target.id);
            arrCol.push(event.target.style.backgroundColor);
            // change the actual color
            event.target.style.backgroundColor = bgClr();
        }
        // resets the idle time of the rewind
        document.onmousedown = resetTimer;
        // the actual resetter of the idle time and rewind starter
        function resetTimer() {
            clearTimeout(time);
            clearTimeout(back);
            time = setTimeout(bckWrds, 5000);
        }
        // introducing the rewind
        function bckWrds() {
            // stops the rewind if arrays are empty
            if (arrItm.length >= 1) {
                // calls objects by the id stored in the arrays
                var elm = document.getElementById(arrItm[arrItm.length - 1]);
                // rewind for the lashes
                if (elm.id === lashOne.id) {
                    lashOne.style.backgroundColor = arrCol[arrCol.length - 1];
                    lashTwo.style.fill = arrCol[arrCol.length - 1];
                    // remove indexes in the arrays
                    arrItm.pop();
                    arrCol.pop();
                    // calls function again
                    back = setTimeout(bckWrds, 50);
                    // rewind for the reflections
                } else if (elm.id === reflexOne.id) {
                    reflexOne.style.backgroundColor = arrCol[arrCol.length - 1];
                    reflexTwo.style.backgroundColor = arrCol[arrCol.length - 1];
                    // remove indexes in the arrays
                    arrItm.pop();
                    arrCol.pop();
                    // calls function again
                    back = setTimeout(bckWrds, 50);
                    // rewind for the lenses
                } else {
                    elm.style.backgroundColor = arrCol[arrCol.length - 1];
                    // remove indexes in the arrays
                    arrItm.pop();
                    arrCol.pop();
                    // calls function again
                    back = setTimeout(bckWrds, 50);
                }
            }
        }
    });

    function bgClr() {
        const clr = Array(3)
            .fill()
            .map((i) => (i = (Math.random() * 255) | 0));

        return `${colorSpace}(${clr[0]}, ${clr[1]}, ${clr[2]})`;
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
