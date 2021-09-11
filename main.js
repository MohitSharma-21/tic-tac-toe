let ai = 0;
        let c = 0;
        let ch = 0;
        let tc = 0;
        let f = "X";
        let s = "O";

        document.getElementById('one').addEventListener("click", player1);
        document.getElementById("two").addEventListener("click", player2);

        document.getElementById('xc').addEventListener("click", choose_X);
        document.getElementById("oc").addEventListener("click", choose_O);

        function player1() {
            ai = 1;
            document.getElementById('no_of_player').style.display = "none";
            document.getElementById('front').style.display = "block";
        }
        function player2() {
            document.getElementById('no_of_player').style.display = "none";
            document.getElementById('front').style.display = "block";
        }


        function yes() {
            document.getElementById('player1game').style.display = "none";
            document.getElementById('front').style.display = "block";
        }

        function choose_X() {
            ch = ch + 1;
            if (ch == 1) {
                f = "X";
                s = "O";
                tc = 0;
                document.getElementById('front').style.display = "none";
                document.getElementById('main').style.display = "block";
                document.getElementById('px').style.display = "block";
                document.getElementById('px').style.backgroundColor = "snow";
            }
        }
        function choose_O() {
            ch = ch + 1;
            if (ch == 1) {
                f = "O";
                s = "X";
                tc = 1;
                document.getElementById('front').style.display = "none";
                document.getElementById('main').style.display = "block";
                document.getElementById('po').style.display = "block";
                document.getElementById('po').style.backgroundColor = "snow";
            }
        }

        function chance(id) {

            // above box
            if(ai==1)
            tc=tc+1;

            if (tc % 2 == 0) {
                tc = tc + 1;
                document.getElementById('px').style.display = "none";
                document.getElementById('po').style.display = "block";
                document.getElementById('po').style.backgroundColor = "snow";
            }
            else if (tc % 2 != 0) {
                tc = tc + 1;
                document.getElementById('po').style.display = "none";
                document.getElementById('px').style.display = "block";
                document.getElementById('px').style.backgroundColor = "snow";
            }


            // for x/o
            if (c % 2 == 0) {
                document.getElementById(id).innerHTML = f;
                document.getElementById(id).style.color = "black";
            }
            else {
                document.getElementById(id).innerHTML = s;
                document.getElementById(id).style.color = "black";

            }
            c = c + 1;


            document.getElementById(id).removeAttribute('onclick');
            check(id);

            if (ai == 1) 
            {
                aiTurn(id);
                check(id);
            }
        }

        function aiTurn(id) {
            
            let box = document.getElementsByClassName('ele');
            for (i = 0; i < box.length; i++) {
                if (!box[i].innerHTML) 
                {
                    box[i].innerHTML = s
                    c = c + 1;
                    document.getElementById(i).removeAttribute('onclick');
                    return 0;
                }
            }
        }

        function check(id) {

            let y = document.getElementsByTagName('span');
            let x0 = y[0].innerHTML;
            let x1 = y[1].innerHTML;
            let x2 = y[2].innerHTML;
            let x3 = y[3].innerHTML;
            let x4 = y[4].innerHTML;
            let x5 = y[5].innerHTML;
            let x6 = y[6].innerHTML;
            let x7 = y[7].innerHTML;
            let x8 = y[8].innerHTML;

            if ((x0 == "X" && x1 == "X" && x2 == "X") || (x3 == "X" && x4 == "X" && x5 == "X") || (x6 == "X" && x7 == "X" && x8 == "X") || (x0 == "X" && x4 == "X" && x8 == "X") || (x2 == "X" && x4 == "X" && x6 == "X") || (x0 == "X" && x3 == "X" && x6 == "X") || (x1 == "X" && x4 == "X" && x7 == "X") || (x5 == "X" && x8 == "X" && x2 == "X")) {
                document.getElementById('px').style.display = "none";
                document.getElementById('po').style.display = "none";
                document.getElementById('main').style.display = "none";
                document.getElementById('last').style.display = "block";
                document.getElementById('last').style.fontFamily = "'Righteous', cursive";
                document.getElementById('restart').style.fontFamily = "'Righteous', cursive";
                let t = document.getElementById('txt');
                t.innerHTML = "X won"
            }
            else if ((x0 == "O" && x1 == "O" && x2 == "O") || (x3 == "O" && x4 == "O" && x5 == "O") || (x6 == "O" && x7 == "O" && x8 == "O") || (x0 == "O" && x4 == "O" && x8 == "O") || (x2 == "O" && x4 == "O" && x6 == "O") || (x0 == "O" && x3 == "O" && x6 == "O") || (x1 == "O" && x4 == "O" && x7 == "O") || (x5 == "O" && x8 == "O" && x2 == "O")) {
                document.getElementById('px').style.display = "none";
                document.getElementById('po').style.display = "none";
                document.getElementById('main').style.display = "none";
                document.getElementById('last').style.display = "block";
                document.getElementById('last').style.fontFamily = "'Righteous', cursive";
                document.getElementById('restart').style.fontFamily = "'Righteous', cursive";
                let t = document.getElementById('txt');
                t.innerHTML = "O won"
            }
            else if (c == 9) {
                document.getElementById('px').style.display = "none";
                document.getElementById('po').style.display = "none";
                document.getElementById('main').style.display = "none";
                document.getElementById('last').style.display = "block";
                document.getElementById('last').style.fontFamily = "'Righteous', cursive";
                document.getElementById('restart').style.fontFamily = "'Righteous', cursive";
                let t = document.getElementById('txt');
                t.innerHTML = "Draw"
            }
        }
