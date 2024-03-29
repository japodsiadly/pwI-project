var leScroll = function (e) {
    "use strict";
    var t = 0, o = document.querySelectorAll("section").length - 1, n = document.getElementById("mask").offsetHeight,
        i = navigator.userAgent.match(/(iPad|iPhone|iPod)/g) ? !0 : !1;
    return e.scrolling = !1, e.move = function () {
        document.getElementById("container").style.top = i ? "-" + t * n + "px" : "-" + t * window.innerHeight + "px"
    },
        e.moveUp = function () {
            0 !== t && (t--, e.move(), animationAdding(t))
        },
        e.moveDown = function () {
            t < o && (t++, e.move(), animationAdding(t))
        },
        e.moveTo = function (o) {
            t = o;
            animationAdding(t);
            e.move();
        },
        e.addEvent = function (t, o) {
            document.querySelector(t).addEventListener("click", function () {
                e.moveTo(o), animationAdding(t)
            })
        },
        e.setScrollTimeout = function (t) {
            setTimeout(function () {
                e.scrolling = !1
            }, t)
        }, e
}(leScroll || {});
!function (e, t, o) {
    "use strict";
    for (var n = t.getElementsByTagName("li"), i = {up: 38, down: 40}, l = function (t) {
            var o = 0, n = t || e.event;
            n.wheelDelta ? o = (e.opera ? -1 : 1) * n.wheelDelta / 120 : n.detail && (o = -n.detail / 3), o && c(o)
        },
             c = function (e) {
                 o.scrolling || (e > 0 ? (o.scrolling = !0, o.moveUp(), o.setScrollTimeout(800)) : 0 >= e &&
                     (o.scrolling = !0, o.moveDown(), o.setScrollTimeout(800)))
             },
             r = function () {
                 o.moveTo(event.target.getAttribute("data-section"))
             }, u = 0; u < n.length; u++) n[u].getAttribute("data-section") && n[u].addEventListener("click", r);
    e.addEventListener("keydown", function (e) {
        e.keyCode === i.up ? o.moveUp() : e.keyCode === i.down && o.moveDown()
    }),
        e.addEventListener("resize", function () {
            o.move()
        }),
        e.addEventListener("DOMMouseScroll", l, !1), e.onmousewheel = t.onmousewheel = l
}(window, document, leScroll);

function animationAdding(sectionNumber) {
    if (parseInt(sectionNumber) === 1) {
        if (!document.querySelector("#section1_slideDown").classList.contains("slideDown")) {
            document.querySelector("#section1_slideDown").classList.add("slideDown");
            document.querySelector("#section1_slideRight_0").classList.add("slideRight_section_1_0");
            document.querySelector("#section1_slideRight_1").classList.add("slideRight_section_1_1");
            document.querySelector("#section1_slideLeft_0").classList.add("slideLeft_section_1_0");
            document.querySelector("#section1_slideLeft_1").classList.add("slideLeft_section_1_1");
        } else {
            return;
        }
    } else if (parseInt(sectionNumber) === 2) {
        if (!document.querySelector("#section2_slideDown_0").classList.contains("slideDown_section_2_0")) {
            document.querySelector("#section2_slideDown_0").classList.add("slideDown_section_2_0");
            setTimeout(function () {
                move("springBar", 80);
            }, 600);
            document.querySelector("#section2_slideDown_1").classList.add("slideDown_section_2_1");
            setTimeout(function () {
                move("javaScriptBar", 56);
            }, 1200);
            document.querySelector("#section2_slideDown_2").classList.add("slideDown_section_2_2");
            setTimeout(function () {
                move("cSharpBar", 32);
            }, 1800);
        } else { //TODO: dodać wjeżdzanie hedera do slajdu 3
            return;
        }
    }
}

function move(name, percentage) {
    const elem = document.getElementById(name);
    let width = 0;
    let id = setInterval(frame, 40);

    function frame() {
        if (width >= percentage) {
            clearInterval(id);
        } else {
            width++;
            elem.style.width = width + '%';
            elem.innerHTML = width * 1 + '%';
        }
    }
}