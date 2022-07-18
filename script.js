(function () {
    // setup the arrays for the rewind
    var arrItm = [];
    var arrCol = [];
    // variable for idle time
    var time;
    // variable for the rewind stop
    var back;

    // add an event-listener onclick
    document.addEventListener("click", function (event) {
        // setup the variables for the composed objects
        // the composed lashes object:
        var lashOne = document.getElementById("lashes");
        var lashTwo = document.querySelector("path");
        // the composed reflection object:
        var reflexOne = document.getElementById("reflexOne");
        var reflexTwo = document.getElementById("reflexTwo");
        // generate the random rgb color:
        var r = (Math.random() * 256) | 0;
        var g = (Math.random() * 256) | 0;
        var b = (Math.random() * 256) | 0;
        // access all objects via the "matches" method (easy!)
        if (!event.target.matches(".lense")) return;
        // access the lashes
        if (event.target.id === "lashes" || event.target.id === "lash") {
            // push the recent color and object id into the array
            arrItm.push(lashOne.id);
            arrCol.push(lashOne.style.backgroundColor);
            // change the actual color
            lashOne.style.backgroundColor =
                "rgb" + "(" + r + ", " + g + ", " + b + ")";
            lashTwo.style.fill = "rgb" + "(" + r + ", " + g + ", " + b + ")";
            // access the reflection
        } else if (
            event.target.id === "reflexOne" ||
            event.target.id === "reflexTwo"
        ) {
            // push the recent color and object id into the array
            arrItm.push(reflexOne.id);
            arrCol.push(reflexOne.style.backgroundColor);
            // change the actual color
            reflexOne.style.backgroundColor =
                "rgb" + "(" + r + ", " + g + ", " + b + ")";
            reflexTwo.style.backgroundColor =
                "rgb" + "(" + r + ", " + g + ", " + b + ")";
            // access all other objects
        } else {
            // push the recent color and object id into the array
            arrItm.push(event.target.id);
            arrCol.push(event.target.style.backgroundColor);
            // change the actual color
            event.target.style.backgroundColor =
                "rgb" + "(" + r + ", " + g + ", " + b + ")";
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
})();
