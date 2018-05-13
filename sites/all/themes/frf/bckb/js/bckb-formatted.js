/*
 * Originally:
 *   Ken Burns Sliders Full Collection  v1.0
 *   Copyright 2012, LambertGroup
 * Modified for purpose by Alex Stanhope
 */ (function (c) {

    function J(a, b) {
        c(a.currentImg.attr("data-text-id")).css("display", "block");
        var d = c(a.currentImg.attr("data-text-id")).children(),
            g = 0;
        currentText_arr = [];
        d.each(function () {
            currentText_arr[g] = c(this);
            var f = currentText_arr[g].attr("data-initial-left"),
                d = currentText_arr[g].attr("data-initial-top");
            b.responsive && (f = parseInt(f / (b.origWidth / b.width), 10), d = parseInt(d / (b.origWidth / b.width), 10));
            currentText_arr[g].css({
                left: f + "px",
                top: d + "px",
                opacity: parseInt(currentText_arr[g].attr("data-fade-start"), 10) / 100
            });
            var m = currentText_arr[g];
            setTimeout(function () {
                animateTextCallback(m, a, b)
            }, 1E3 * currentText_arr[g].attr("data-delay"));
            g++
        })
    }

    function animateTextCallback(a, b, d) {
        d.responsive && (newCss = "", - 1 != a.css("font-size").lastIndexOf("px") ? (fontSize = a.css("font-size").substr(0, a.css("font-size").lastIndexOf("px")), newCss += "font-size:" + fontSize / (d.origWidth / d.width) + "px;") : -1 != a.css("font-size").lastIndexOf("em") && (fontSize = a.css("font-size").substr(0, a.css("font-size").lastIndexOf("em")), newCss += "font-size:" + fontSize / (d.origWidth / d.width) + "em;"), - 1 != a.css("line-height").lastIndexOf("px") ? (lineHeight = a.css("line-height").substr(0, a.css("line-height").lastIndexOf("px")), newCss += "line-height:" + lineHeight / (d.origWidth / d.width) + "px;") : -1 != a.css("line-height").lastIndexOf("em") && (lineHeight = a.css("line-height").substr(0, a.css("line-height").lastIndexOf("em")), newCss += "line-height:" + lineHeight / (d.origWidth / d.width) + "em;"), a.wrapInner('<div class="newFS" style="' + newCss + '" />'));
        var g = a.attr("data-final-left"),
            f = a.attr("data-final-top");
        d.responsive && (g = parseInt(g / (d.origWidth / d.width), 10), f = parseInt(f / (d.origWidth / d.width), 10));
        d = 1;
        !0 == b.isVideoPlaying && (d = 0);
        a.animate({
            opacity: d,
            left: g + "px",
            top: f + "px"
        }, 1E3 * a.attr("data-duration"), function () {
            b.isVideoPlaying == true && c(b.currentImg.attr("data-text-id")).children().css("opacity", 0)
        })
    }
    
    function K(a, b, d, g, f) {
        -1 == a && (a = 0);
        var j = c(f[a]),
            f = b.horizontalPosition;
        void 0 != j.attr("data-horizontalPosition") && "" != j.attr("data-horizontalPosition") && (f = j.attr("data-horizontalPosition"));
        var m = b.verticalPosition;
        void 0 != j.attr("data-verticalPosition") && "" != j.attr("data-verticalPosition") && (m = j.attr("data-verticalPosition"));
        var h = b.initialZoom;
        void 0 != j.attr("data-initialZoom") && "" != j.attr("data-initialZoom") && (h = Number(j.attr("data-initialZoom")));
        var l = b.finalZoom;
        void 0 != j.attr("data-finalZoom") && "" != j.attr("data-finalZoom") && (l = Number(j.attr("data-finalZoom")));
        g = g[a].split(";");
        b.responsive && (g[0] /= b.origWidth / b.width, g[1] /= b.origWidth / b.width);
        b.width100Proc && b.height100Proc && g[1] * Math.min(l, h) < b.height && (newH = b.height / Math.min(l, h), newW = newH * (g[0] / g[1]), g[0] = newW, g[1] = newH);
        a = c("#contentHolderUnit_" + a, d).find("img:first");
        parseInt(l * g[0], 10);
        parseInt(l * g[1], 10);
        a.css({
            width: parseInt(h * g[0], 10) + "px",
            height: parseInt(h * g[1], 10) + "px"
        });
        d = 0;
        switch (f) {
        case "left":
            d = 0;
            break;
        case "center":
            d = (b.width - parseInt(h * g[0], 10)) / 2;
            break;
        case "right":
            d = b.width - parseInt(h * g[0], 10);
            break;
        default:
            d = 0
        }
        l = 0;
        switch (m) {
        case "top":
            l = -2;
            break;
        case "center":
            l = (b.height - parseInt(h * g[1], 10)) / 2;
            break;
        case "bottom":
            l = b.height - parseInt(h * g[1], 10) + 2;
            break;
        default:
            l = 0
        }
        a.css({
            left: parseInt(d, 10) + "px",
            top: parseInt(l, 10) + "px",
            opacity: b.initialOpacity
        });
        c.browser.msie || a.css({
            "-webkit-transform-origin": f + " " + m,
            "-moz-transform-origin": f + " " + m,
            "-o-transform-origin": f + " " + m,
            "transform-origin": f + " " + m
        })
    }
    
    function I(a) {
        c.browser.msie ? (clearInterval(a.msiInterval), a.current_imgInside.css("filter", 'progid:DXImageTransform.Microsoft.Matrix(FilterType="bilinear",M11=1, M12=0, M21=0, M22=1, Dx=0, Dy=0)')) : a.current_imgInside.css({
            "-webkit-transition-duration": "0s",
            "-moz-transition-duration": "0s",
            "-o-transition-duration": "0s",
            "transition-duration": "0s",
            "-webkit-transform": "scale(1)",
            "-moz-transform": "scale(1)",
            "-o-transform": "scale(1)",
            transform: "scale(1)"
        })
    }
    
    function L(a, b, d, g, f) {
        var f = c(f[a.current_img_no]),
            j = b.horizontalPosition;
        void 0 != f.attr("data-horizontalPosition") && "" != f.attr("data-horizontalPosition") && (j = f.attr("data-horizontalPosition"));
        var m = b.verticalPosition;
        void 0 != f.attr("data-verticalPosition") && "" != f.attr("data-verticalPosition") && (m = f.attr("data-verticalPosition"));
        var h = b.duration;
        void 0 != f.attr("data-duration") && "" != f.attr("data-duration") && (h = Number(f.attr("data-duration")));
        var l = b.initialZoom;
        void 0 != f.attr("data-initialZoom") && "" != f.attr("data-initialZoom") && (l = Number(f.attr("data-initialZoom")));
        var n = b.finalZoom;
        void 0 != f.attr("data-finalZoom") && "" != f.attr("data-finalZoom") && (n = Number(f.attr("data-finalZoom")));
        a.current_imgInside = c("#contentHolderUnit_" + a.current_img_no, d).find("img:first");
        var k = g[a.current_img_no].split(";");
        b.responsive && (k[0] /= b.origWidth / b.width, k[1] /= b.origWidth / b.width);
        c.browser.msie ? (b.width100Proc && (h += b.durationIEfix), curZoom = 1, cur_marginTop = cur_marginLeft = zoomStep = 0, a.msiInitialTime = (new Date).getTime(), a.msiInterval = setInterval(function () {
            nowx = (new Date).getTime();
            if (nowx - a.msiInitialTime > h * 1E3) clearInterval(a.msiInterval);
            else {
                zoomStep = (nowx - a.msiInitialTime) * Math.abs(l - n) / (h * 1E3);
                curZoom = l <= n ? 1 + zoomStep : 1 - zoomStep;
                j == "center" ? cur_marginLeft = (1 - curZoom) * l * k[0] / 2 : j == "right" && (cur_marginLeft = (1 - curZoom) * l * k[0]);
                m == "center" ? cur_marginTop = (1 - curZoom) * l * k[1] / 2 : m == "bottom" && (cur_marginTop = (1 - curZoom) * l * k[1]);
                a.current_imgInside.css({
                    filter: 'progid:DXImageTransform.Microsoft.Matrix(FilterType="bilinear",M11=' + curZoom + ", M12=0, M21=0, M22=" + curZoom + ", Dx=" + cur_marginLeft + ",Dy=" + cur_marginTop + ")"
                })
            }
        }, 25)) : (zoomVal = n / l, a.current_imgInside.css({
            "-webkit-transition-duration": h + "s",
            "-moz-transition-duration": h + "s",
            "-o-transition-duration": h + "s",
            "transition-duration": h + "s",
            "-webkit-transition-timing-function": "ease",
            "-moz-transition-timing-function": "ease",
            "-o-transition-timing-function": "ease",
            "transition-timing-function": "ease",
            "-webkit-transform": "scale(" + zoomVal + ") rotate(0.1deg)",
            "-moz-transform": "scale(" + zoomVal + ") rotate(0.1deg)",
            "-o-transform": "scale(" + zoomVal + ")",
            transform: "scale(" + zoomVal + ")",
            perspective: "0",
            "-webkit-perspective": "0"
        }))
    }
    
    function Q(a, b) {
        nowx = (new Date).getTime();
        !a.mouseOverBanner && b.showCircleTimer && (a.ctx.clearRect(0, 0, a.canvas.width, a.canvas.height), a.ctx.beginPath(), a.ctx.globalAlpha = b.behindCircleAlpha / 100, a.ctx.arc(b.circleRadius + 2 * b.circleLineWidth, b.circleRadius + 2 * b.circleLineWidth, b.circleRadius, 0, 2 * Math.PI, !1), a.ctx.lineWidth = b.circleLineWidth + 2, a.ctx.strokeStyle = b.behindCircleColor, a.ctx.stroke(), a.ctx.beginPath(), a.ctx.globalAlpha = b.circleAlpha / 100, a.ctx.arc(b.circleRadius + 2 * b.circleLineWidth, b.circleRadius + 2 * b.circleLineWidth, b.circleRadius, 0, 2 * ((a.timeElapsed + nowx - a.arcInitialTime) / 1E3) / b.autoPlay * Math.PI, !1), a.ctx.lineWidth = b.circleLineWidth, a.ctx.strokeStyle = b.circleColor, a.ctx.stroke())
    }
    
    function D(a, b, d, g, f, j, m, h, l, n, k, x, t, B, r, o, q) {
        var u = !0;
        if (!d.loop && b.current_img_no + a >= g || !d.loop && 0 > b.current_img_no + a) u = !1;
        u && !b.slideIsRunning && (b.slideIsRunning = !0, c(".newFS", n).contents().unwrap(), b.arcInitialTime = (new Date).getTime(), b.timeElapsed = 0, d.showCircleTimer && (clearInterval(b.intervalID), b.ctx.clearRect(0, 0, b.canvas.width, b.canvas.height), b.ctx.beginPath(), b.ctx.globalAlpha = d.behindCircleAlpha / 100, b.ctx.arc(d.circleRadius + 2 * d.circleLineWidth, d.circleRadius + 2 * d.circleLineWidth, d.circleRadius, 0, 2 * Math.PI, !1), b.ctx.lineWidth = d.circleLineWidth + 2, b.ctx.strokeStyle = d.behindCircleColor, b.ctx.stroke(), b.ctx.beginPath(), b.ctx.globalAlpha = d.circleAlpha / 100, b.ctx.arc(d.circleRadius + 2 * d.circleLineWidth, d.circleRadius + 2 * d.circleLineWidth, d.circleRadius, 0, 0, !1), b.ctx.lineWidth = d.circleLineWidth, b.ctx.strokeStyle = d.circleColor, b.ctx.stroke(), b.intervalID = setInterval(function () {
            Q(b, d)
        }, 125)), b.bottomNavClicked || (b.previous_current_img_no = b.current_img_no), b.bottomNavClicked = !1, c(b.currentImg.attr("data-text-id")).css("display", "none"), "opportune" == d.skin && c(f[b.current_img_no]).removeClass("bottomNavButtonON"), "opportune" != d.skin && c(t[b.current_img_no]).removeClass("thumbsHolder_ThumbON"), k.css("display", "none"), b.current_img_no = b.current_img_no + a >= g ? 0 : 0 > b.current_img_no + a ? g - 1 : b.current_img_no + a, "opportune" == d.skin && c(f[b.current_img_no]).addClass("bottomNavButtonON"), "opportune" != d.skin && (c(t[b.current_img_no]).addClass("thumbsHolder_ThumbON"), currentCarouselLeft = B.css("left").substr(0, B.css("left").lastIndexOf("px")), 0 === b.current_img_no || b.current_img_no === g - 1 ? F(0, B, r, o, d, g, q, b) : F(1001, B, r, o, d, g, q, b)), l.animate({
            left: -1 * b.current_img_no * d.width + "px"
        }, 800, "easeOutQuad", function () {
            b.slideIsRunning = false;
            I(b);
            b.currentImg = c(j[b.current_img_no]);
            L(b, d, n, x, j);
            b.currentImg.attr("data-video") == "true" && k.css("display", "block");
            c(j[b.previous_current_img_no]).attr("data-video") == "true" && c("#contentHolderUnit_" + b.previous_current_img_no, n).html(c(j[b.previous_current_img_no]).html());
            K(b.previous_current_img_no, d, n, x, j);
            J(b, d, m, h);
            if (d.autoPlay > 0 && g > 1 && !b.mouseOverBanner) {
                clearTimeout(b.timeoutID);
                b.timeoutID = setTimeout(function () {
                    D(1, b, d, g, f, j, m, h, l, n, k, x, t, B, r, o, q)
                }, d.autoPlay * 1E3)
            }
        }))
    }
    
    // carousel scrolling
    function F(direction, b, c, g, f, j, m, h) {
    	// START HERE
    	// try and make the pages turn instantly
        currentCarouselLeft = b.css("left").substr(0, b.css("left").lastIndexOf("px"));
        if (1 === direction || -1 === direction) {
          h.isCarouselScrolling = !0;
          b.css("opacity", "0.5");
          b.animate({
            opacity: 1,
            left: "+=" + direction * h.carouselStep
          }, 500, "easeOutCubic", function () {
            E(h, b, c, g, f, j, m);
            h.isCarouselScrolling = !1
          });
        }
        else {
    	  currentCarouselLeft != -1 * Math.floor(h.current_img_no / f.numberOfThumbsPerScreen) * h.carouselStep;
    	  h.isCarouselScrolling = !0;
    	  b.css("opacity", "0.5");
    	  b.animate({
            opacity: 1,
            left: -1 * Math.floor(h.current_img_no / f.numberOfThumbsPerScreen) * h.carouselStep
          }, 500, "easeOutCubic", function () {
            E(h, b, c, g, f, j, m);
            h.isCarouselScrolling = !1
          });
        }
    }
    
    function E(a, b, c, g, f, j, m) {
        currentCarouselLeft = b.css("left").substr(0, b.css("left").lastIndexOf("px"));
        0 > currentCarouselLeft ? c.hasClass("carouselLeftNavDisabled") && c.removeClass("carouselLeftNavDisabled") : c.addClass("carouselLeftNavDisabled");
        Math.abs(currentCarouselLeft - a.carouselStep) < (m.width() + a.thumbMarginLeft) * j ? g.hasClass("carouselRightNavDisabled") && g.removeClass("carouselRightNavDisabled") : g.addClass("carouselRightNavDisabled")
    }
    
    function R(a, b, d, g, f, j, m, h, l, n, k) {
        "opportune" != b.skin && (k.css({
            top: b.height + "px",
            "margin-top": parseInt(b.thumbsWrapperMarginTop / (b.origWidth / b.width), 10) + "px",
            height: parseInt(b.origthumbsHolderWrapperH / (b.origWidth / b.width), 10) + "px"
        }), bgTopCorrection = 0, m.css("background-position", "0px " + ((k.height() - b.origthumbsHolderWrapperH) / 2 + bgTopCorrection) + "px"), h.css("background-position", "0px " + ((k.height() - b.origthumbsHolderWrapperH) / 2 + bgTopCorrection) + "px"), n.css("width", b.width - m.width() - h.width()), b.origWidthThumbsHolderVisibleWrapper = b.origWidth - m.width() - h.width(), f.css({
            width: parseInt(b.origThumbW / (b.origWidthThumbsHolderVisibleWrapper / n.width()), 10) + "px",
            height: parseInt(b.origThumbH / (b.origWidthThumbsHolderVisibleWrapper / n.width()), 10) + "px"
        }), b.numberOfThumbsPerScreen >= d && n.css("left", parseInt((k.width() - (l.width() + a.thumbMarginLeft) * d) / 2, 10) + "px"), c(".thumbsHolder_ThumbOFF", g).find("img:first").css({
            width: f.width() + "px",
            height: f.height() + "px",
            "margin-top": parseInt((k.height() - f.height()) / 2, 10) + "px"
        }), a.thumbMarginLeft = Math.floor((k.width() - m.width() - h.width() - l.width() * b.numberOfThumbsPerScreen) / (b.numberOfThumbsPerScreen - 1)), thumb_i = -1, j.children().each(function () {
            thumb_i++;
            theThumb = c(this);
            theThumb.css("background-position", "center " + b.thumbsOnMarginTop / (b.origWidth / b.width) + "px");
            0 >= thumb_i ? theThumb.css("margin-left", Math.floor((k.width() - m.width() - h.width() - (a.thumbMarginLeft + theThumb.width()) * (b.numberOfThumbsPerScreen - 1) - theThumb.width()) / 2) + "px") : theThumb.css("margin-left", a.thumbMarginLeft + "px")
        }), a.carouselStep = (l.width() + a.thumbMarginLeft) * b.numberOfThumbsPerScreen)
    }
    
    // jQueryUI wrapper
    c.fn.bannerscollection_kenburns = function (a) {
        a = c.extend({}, c.fn.bannerscollection_kenburns.defaults, a);
        return this.each(function () {
            var b = c(this);
            responsiveWidth = b.parent().width();
            responsiveHeight = b.parent().height();
            a.responsiveRelativeToBrowser && (responsiveWidth = c(window).width(), responsiveHeight = c(window).height());
            a.origWidth = a.width;
            a.width100Proc && (a.width = responsiveWidth);
            a.origHeight = a.height;
            a.height100Proc && (a.height = responsiveHeight);
            if (a.responsive && (a.origWidth != responsiveWidth || a.width100Proc)) a.width = a.origWidth > responsiveWidth || a.width100Proc ? responsiveWidth : a.origWidth, a.height100Proc || (a.height = a.width / (a.origWidth / a.origHeight));
            var d = c("<div></div>").addClass("bannerscollection_kenburns").addClass(a.skin),
                g = c('<div class="bannerControls"> <div class="leftNav"></div> <div class="rightNav"></div> </div> <div class="contentHolderVisibleWrapper"><div class="contentHolder"></div></div> <div class="playOver"></div> <div class="thumbsHolderWrapper"><div class="thumbsHolderVisibleWrapper"><div class="thumbsHolder"></div></div></div> <canvas class="mycanvas"></canvas>');
            b.wrap(d);
            b.after(g);
            var f = b.parent(".bannerscollection_kenburns"),
                j = c(".bannerControls", f),
                m = c(".contentHolderVisibleWrapper", f),
                h = c(".contentHolder", f),
                d = c('<div class="bottomNav"></div>');
            b.after(d);
            a.showAllControllers || j.css("display", "none");
            var l = c(".leftNav", f),
                n = c(".rightNav", f);
            l.css("display", "none");
            n.css("display", "none");
            a.showNavArrows && a.showOnInitNavArrows && (l.css("display", "block"), n.css("display", "block"));
            var k = c(".bottomNav", f),
                x;
            "opportune" == a.skin && (k.css({
                display: "block",
                top: a.height + "px"
            }), a.width100Proc && a.height100Proc ? k.css("margin-top", a.thumbsWrapperMarginTop + "px") : k.css("margin-top", a.thumbsWrapperMarginTop / (a.origWidth / a.width) + "px"));
            a.showBottomNav || k.css("display", "none");
            a.showOnInitBottomNav || k.css("left", "-5000px");
            var t = c(".thumbsHolderWrapper", f),
                B = c(".thumbsHolderVisibleWrapper", f),
                r = c(".thumbsHolder", f),
                o, q;
            o = c('<div class="carouselLeftNav"></div>');
            q = c('<div class="carouselRightNav"></div>');
            t.append(o);
            t.append(q);
            q.css("right", "0");
            r.css("width", o.width() + "px");
            (!a.showBottomNav || !a.showOnInitBottomNav) && t.css({
                opacity: 0,
                display: "none"
            });
            "opportune" != a.skin && t.css("margin-top", parseInt(a.thumbsWrapperMarginTop / (a.origWidth / a.width), 10) + "px");
            a.enableTouchScreen && (h.css("cursor", "url(" + a.absUrl + "skins/hand.cur),url(" + a.absUrl + "skins/hand.cur),move"), f.css("cursor", "url(skins/hand.cur),url(skins/hand.cur),move"), h.css("left", "0"), h.draggable({
                axis: "x",
                distance: 10,
                start: function () {
                    origLeft = parseInt(c(this).css("left"), 10);
                    u.css("display", "none")
                },
                stop: function () {
                    if (!e.slideIsRunning) {
                        finalLeft = parseInt(c(this).css("left"), 10);
                        direction = 1;
                        origLeft < finalLeft && (direction = -1);
                        D(direction, e, a, p, y, v, b, j, h, f, u, A, w, r, o, q, s)
                    }
                }
            }));
            var u = c(".playOver", f);
            u.css({
                left: parseInt((a.width - u.width()) / 2, 10) + "px",
                top: parseInt((a.height - u.height()) / 2, 10) + "px"
            });
            var e = {
                current_img_no: 0,
                currentImg: 0,
                previous_current_img_no: 0,
                slideIsRunning: !1,
                mouseOverBanner: !1,
                isVideoPlaying: !1,
                bottomNavClicked: !1,
                current_imgInside: "",
                windowWidth: 0,
                carouselStep: 0,
                thumbMarginLeft: 0,
                timeoutID: "",
                intervalID: "",
                arcInitialTime: (new Date).getTime(),
                timeElapsed: 0,
                canvas: "",
                ctx: "",
                bannerRatio: a.origWidth / a.origHeight,
                msiInterval: "",
                msiInitialTime: (new Date).getTime()
            };
            a.showCircleTimer && (e.canvas = c(".mycanvas", f)[0], e.canvas.width = 2 * a.circleRadius + 4 * a.circleLineWidth, e.canvas.height = 2 * a.circleRadius + 4 * a.circleLineWidth, c.browser.msie && 9 > parseInt(c.browser.version, 10) && (e.canvas = G_vmlCanvasManager.initElement(e.canvas), !a.showCircleTimerIE8IE7 && a.showCircleTimer && (a.showCircleTimer = !1)), e.ctx = e.canvas.getContext("2d"));
            var A = [],
                M = 0;
            f.width(a.width);
            f.height(a.height);
            m.width(a.width);
            m.height(a.height);
            h.width(a.width);
            h.height(a.height);
            j.css("margin-top", parseInt((a.height - l.height()) / 2, 10) + "px");
            var p = 0,
                v = b.find("ul:first").children(),
                H, N = 0,
                z, G = 0,
                E = 0,
                C, s, O = 0;
            v.each(function () {
                e.currentImg = c(this);
                if (!e.currentImg.is("li")) e.currentImg = e.currentImg.find("li:first");
                if (e.currentImg.is("li")) {
                    p++;
                    H = c('<div class="contentHolderUnit" rel="' + (p - 1) + '" id="contentHolderUnit_' + (p - 1) + '">' + e.currentImg.html() + "</div>");
                    H.width(a.width);
                    H.height(a.height);
                    h.append(H);
                    N = N + a.width;
                    e.current_img_no = p - 1;
                    C = c("#contentHolderUnit_" + e.current_img_no, f).find("img:first");
                    A[p - 1] = C.width() + ";" + C.height();
                    K(p - 1, a, f, A, v);
                    if (a.skin == "opportune") {
                        z = c('<div class="bottomNavButtonOFF" rel="' + (p - 1) + '"></div>');
                        k.append(z);
                        G = G + (parseInt(z.css("padding-left").substring(0, z.css("padding-left").length - 2), 10) + z.width());
                        E = parseInt((k.height() - parseInt(z.css("height").substring(0, z.css("height").length - 2))) / 2, 10);
                        z.css("margin-top", E + "px")
                    }
                    if (a.skin != "opportune") {
                        image_name = c(v[p - 1]).attr("data-bottom-thumb");
                        s = c('<div class="thumbsHolder_ThumbOFF" rel="' + (p - 1) + '"><img src="' + image_name + '"></div>');
                        r.append(s);
                        if (a.origThumbW == 0) {
                            if (a.numberOfThumbsPerScreen == 0) a.numberOfThumbsPerScreen = Math.floor((a.origWidth - o.width() - q.width()) / s.width());
                            a.origThumbW = s.width();
                            a.origThumbH = s.height();
                            a.origthumbsHolderWrapperH = t.height();
                            e.thumbMarginLeft = Math.floor((a.origWidth - o.width() - q.width() - s.width() * a.numberOfThumbsPerScreen) / (a.numberOfThumbsPerScreen - 1))
                        }
                        r.css("width", r.width() + e.thumbMarginLeft + s.width() + "px");
                        O = parseInt((t.height() - parseInt(s.css("height").substring(0, s.css("height").length - 2))) / 2, 10)
                    }
                    h.append(c(e.currentImg.attr("data-text-id")));
                    c(e.currentImg.attr("data-text-id")).css({
                        width: b.width() + "px",
                        left: parseInt((p - 1) * a.width, 10),
                        top: j.css("top")
                    })
                }
            });
            h.width(N);
            k.width(G);
            a.showOnInitBottomNav && k.css("left", parseInt((f.width() - G) / 2, 10) + "px");
            "opportune" != a.skin && (B.css({
                width: a.origWidth - o.width() - q.width(),
                left: o.width() + "px"
            }), e.carouselStep = (s.width() + e.thumbMarginLeft) * a.numberOfThumbsPerScreen, o.addClass("carouselLeftNavDisabled"), a.numberOfThumbsPerScreen >= p && (q.addClass("carouselRightNavDisabled"), o.css("display", "none"), q.css("display", "none"), B.css("left", parseInt((t.width() - (s.width() + e.thumbMarginLeft) * p) / 2, 10) + "px")), t.css("top", a.height + "px"), c(".thumbsHolder_ThumbOFF", f).find("img:first").css("margin-top", O + "px"), a.origthumbsHolder_MarginTop = O);
            var w = c(".thumbsHolder_ThumbOFF", f);
            R(e, a, p, f, w, r, o, q, s, B, t);
            c("iframe", f).each(function () {
                var a = c(this).attr("src");
                c(this).attr("src", a + "?wmode=transparent")
            });
            e.current_img_no = 0;
            e.currentImg = c(v[0]);
            d = f.find("img:first");
            d[0].complete ? (c(".myloader", f).css("display", "none"), L(e, a, f, A, v), J(e, a, b, j)) : d.load(function () {
                c(".myloader", f).css("display", "none");
                L(e, a, f, A, v);
                J(e, a, b, j)
            });
            f.mouseenter(function () {
                if (a.pauseOnMouseOver) {
                    e.mouseOverBanner = true;
                    clearTimeout(e.timeoutID);
                    nowx = (new Date).getTime();
                    e.timeElapsed = e.timeElapsed + (nowx - e.arcInitialTime)
                }
                if (a.autoHideNavArrows && a.showNavArrows) {
                    l.css("display", "block");
                    n.css("display", "block")
                }
                a.autoHideBottomNav && a.showBottomNav && (a.skin == "opportune" ? k.css({
                    display: "block",
                    left: parseInt((f.width() - G) / 2, 10) + "px"
                }) : a.thumbsWrapperMarginTop < 0 && e.isVideoPlaying || a.showBottomNav && t.stop().animate({
                    opacity: 1
                }, 500, "swing", function () {}))
            });
            f.mouseleave(function () {
                if (a.pauseOnMouseOver) {
                    e.mouseOverBanner = false;
                    nowx = (new Date).getTime()
                }
                if (a.autoHideNavArrows && a.showNavArrows && !e.isVideoPlaying) {
                    l.css("display", "none");
                    n.css("display", "none")
                }
                a.autoHideBottomNav && a.showBottomNav && (a.skin == "opportune" ? k.css("display", "none") : t.stop().animate({
                    opacity: 0
                }, 300, "swing", function () {}));
                if (a.autoPlay > 0 && p > 1 && !e.isVideoPlaying && a.pauseOnMouseOver) {
                    clearTimeout(e.timeoutID);
                    e.arcInitialTime = (new Date).getTime();
                    var c = parseInt(a.autoPlay * 1E3 - (e.timeElapsed + nowx - e.arcInitialTime), 10);
                    e.timeoutID = setTimeout(function () {
                        D(1, e, a, p, y, v, b, j, h, f, u, A, w, r, o, q, s)
                    }, c)
                }
            });
            d = c(".contentHolderUnit", h); - 1 != navigator.userAgent.indexOf("Safari") && -1 == navigator.userAgent.indexOf("Chrome") && -1 == navigator.userAgent.indexOf("Android") ? d.css("z-index", "1") : -1 != navigator.userAgent.indexOf("Chrome") && -1 == navigator.userAgent.indexOf("Android") && d.css("z-index", "1");
            d.click(function () {
                var b = c(this).attr("rel");
                if (c(v[e.current_img_no]).attr("data-video") == "true") if (b != e.current_img_no) e.isVideoPlaying = false;
                else {
                    clearTimeout(e.timeoutID);
                    I(e);
                    C = c(this).find("img:first");
                    C.css("display", "none");
                    u.css("display", "none");
                    c(e.currentImg.attr("data-text-id")).children().css("opacity", 0);
                    e.isVideoPlaying = true;
                    if (a.thumbsWrapperMarginTop < 0) {
                        t.css("display", "none");
                        a.skin == "opportune" && k.css("display", "none")
                    }
                    if (a.showCircleTimer) {
                        clearInterval(e.intervalID);
                        e.ctx.clearRect(0, 0, e.canvas.width, e.canvas.height);
                        e.ctx.beginPath();
                        e.ctx.globalAlpha = 0;
                        e.ctx.arc(a.circleRadius + 2 * a.circleLineWidth, a.circleRadius + 2 * a.circleLineWidth, a.circleRadius, 0, 0, false);
                        e.ctx.lineWidth = a.circleLineWidth + 2;
                        e.ctx.strokeStyle = a.behindCircleColor;
                        e.ctx.stroke();
                        e.ctx.beginPath();
                        e.ctx.globalAlpha = 0;
                        e.ctx.arc(a.circleRadius + 2 * a.circleLineWidth, a.circleRadius + 2 * a.circleLineWidth, a.circleRadius, 0, 0, false);
                        e.ctx.lineWidth = a.circleLineWidth;
                        e.ctx.strokeStyle = a.circleColor;
                        e.ctx.stroke()
                    }
                }
                var f = c(v[e.current_img_no]);
                if (f.attr("data-link") != void 0 && b == e.current_img_no && f.attr("data-link") != "") {
                    b = a.target;
                    f.attr("data-target") != void 0 && f.attr("data-target") != "" && (b = f.attr("data-target"));
                    b == "_blank" ? window.open(f.attr("data-link")) : window.location = f.attr("data-link")
                }
            });
            u.click(function () {
                u.css("display", "none");
                clearTimeout(e.timeoutID);
                I(e);
                C = c("#contentHolderUnit_" + e.current_img_no, f).find("img:first");
                C.css("display", "none");
                c(e.currentImg.attr("data-text-id")).children().css("opacity", 0);
                e.isVideoPlaying = true;
                if (a.thumbsWrapperMarginTop < 0) {
                    t.css("display", "none");
                    a.skin == "opportune" && k.css("display", "none")
                }
                if (a.showCircleTimer) {
                    clearInterval(e.intervalID);
                    e.ctx.clearRect(0, 0, e.canvas.width, e.canvas.height);
                    e.ctx.beginPath();
                    e.ctx.globalAlpha = 0;
                    e.ctx.arc(a.circleRadius + 2 * a.circleLineWidth, a.circleRadius + 2 * a.circleLineWidth, a.circleRadius, 0, 0, false);
                    e.ctx.lineWidth = a.circleLineWidth + 2;
                    e.ctx.strokeStyle = a.behindCircleColor;
                    e.ctx.stroke();
                    e.ctx.beginPath();
                    e.ctx.globalAlpha = 0;
                    e.ctx.arc(a.circleRadius + 2 * a.circleLineWidth, a.circleRadius + 2 * a.circleLineWidth, a.circleRadius, 0, 0, false);
                    e.ctx.lineWidth = a.circleLineWidth;
                    e.ctx.strokeStyle = a.circleColor;
                    e.ctx.stroke()
                }
            });
            l.click(function () {
                if (!e.slideIsRunning) {
                    e.isVideoPlaying = false;
                    if (a.showBottomNav) {
                        t.css({
                            opacity: 1,
                            display: "block"
                        });
                        a.skin == "opportune" && k.css("display", "block")
                    }
                    clearTimeout(e.timeoutID);
                    D(-1, e, a, p, y, v, b, j, h, f, u, A, w, r, o, q, s)
                }
            });
            n.click(function () {
                if (!e.slideIsRunning) {
                    e.isVideoPlaying = false;
                    if (a.showBottomNav) {
                        t.css({
                            opacity: 1,
                            display: "block"
                        });
                        a.skin == "opportune" && k.css("display", "block")
                    }
                    clearTimeout(e.timeoutID);
                    D(1, e, a, p, y, v, b, j, h, f, u, A, w, r, o, q, s)
                }
            });
            var P = !1;
            c(window).resize(function () {
                doResizeNow = true;
                if (navigator.userAgent.indexOf("Android") != -1) {
                    if (a.windowOrientationScreenSize0 == 0 && window.orientation == 0) a.windowOrientationScreenSize0 = c(window).width();
                    if (a.windowOrientationScreenSize90 == 0 && window.orientation == 90) a.windowOrientationScreenSize90 = c(window).height();
                    if (a.windowOrientationScreenSize_90 == 0 && window.orientation == -90) a.windowOrientationScreenSize_90 = c(window).height();
                    a.windowOrientationScreenSize0 && (window.orientation == 0 && c(window).width() > a.windowOrientationScreenSize0) && (doResizeNow = false);
                    a.windowOrientationScreenSize90 && (window.orientation == 90 && c(window).height() > a.windowOrientationScreenSize90) && (doResizeNow = false);
                    a.windowOrientationScreenSize_90 && (window.orientation == -90 && c(window).height() > a.windowOrientationScreenSize_90) && (doResizeNow = false);
                    if (e.windowWidth == 0) {
                        doResizeNow = false;
                        e.windowWidth = c(window).width()
                    }
                }
                c.browser.msie && (parseInt(c.browser.version, 10) == 9 && e.windowWidth == 0) && (doResizeNow = false);
                if (e.windowWidth == c(window).width()) {
                    doResizeNow = false;
                    if (a.windowCurOrientation != window.orientation && navigator.userAgent.indexOf("Android") != -1) {
                        a.windowCurOrientation = window.orientation;
                        doResizeNow = true
                    }
                } else e.windowWidth = c(window).width();
                if (a.responsive && doResizeNow) {
                    P !== false && clearTimeout(P);
                    P = setTimeout(function () {
                        var d = e,
                            g = a,
                            n = p,
                            x = v,
                            z = u,
                            C = A,
                            E = w,
                            G = y,
                            F = s,
                            H = c("body").css("overflow");
                        c("body").css("overflow", "hidden");
                        responsiveWidth = b.parent().parent().width();
                        responsiveHeight = b.parent().parent().height();
                        if (g.responsiveRelativeToBrowser) {
                            responsiveWidth = c(window).width();
                            responsiveHeight = c(window).height()
                        }
                        if (g.width100Proc) g.width = responsiveWidth;
                        if (g.height100Proc) g.height = responsiveHeight;
                        if (g.origWidth != responsiveWidth || g.width100Proc) {
                            if (g.origWidth > responsiveWidth || g.width100Proc) g.width = responsiveWidth;
                            else if (!g.width100Proc) g.width = g.origWidth;
                            if (!g.height100Proc) g.height = g.width / d.bannerRatio;
                            f.width(g.width);
                            f.height(g.height);
                            m.width(g.width);
                            m.height(g.height);
                            h.width(g.width);
                            h.height(g.height);
                            j.css("margin-top", parseInt((g.height - l.height()) / 2, 10) + "px");
                            I(d);
                            contentHolderUnit = c(".contentHolderUnit", f);
                            contentHolderUnit.width(g.width);
                            contentHolderUnit.height(g.height);
                            holderWidth = g.width * n;
                            for (i = 0; i < n; i++) {
                                K(i, g, f, C, x);
                                c(c(x[i]).attr("data-text-id")).css({
                                    width: b.width() + "px",
                                    left: parseInt(i * g.width, 10),
                                    top: j.css("top")
                                })
                            }
                            h.width(holderWidth);
                            if (g.skin == "opportune") {
                                k.css({
                                    left: parseInt((f.width() - k.width()) / 2, 10) + "px",
                                    top: g.height + "px"
                                });
                                (!g.width100Proc || !g.height100Proc) && k.css("margin-top", parseInt(g.thumbsWrapperMarginTop / (g.origWidth / g.width), 10) + "px")
                            } else R(d, g, n, f, E, r, o, q, F, B, t);
                            z.css({
                                left: parseInt((g.width - z.width()) / 2, 10) + "px",
                                top: parseInt((g.height - z.height()) / 2, 10) + "px"
                            });
                            clearTimeout(d.timeoutID);
                            D(1, d, g, n, G, x, b, j, h, f, z, C, E, r, o, q, F)
                        }
                        c("body").css("overflow", H)
                    }, 300)
                }
            });
            var y = c(".bottomNavButtonOFF", f);
            "opportune" == a.skin && (y.click(function () {
                if (!e.slideIsRunning) {
                    e.isVideoPlaying = false;
                    var g = c(this).attr("rel");
                    c(y[e.current_img_no]).removeClass("bottomNavButtonON");
                    e.previous_current_img_no = e.current_img_no;
                    e.bottomNavClicked = true;
                    e.current_img_no = g - 1;
                    clearTimeout(e.timeoutID);
                    D(1, e, a, p, y, v, b, j, h, f, u, A, w, r, o, q, s)
                }
            }), y.mouseenter(function () {
                var b = c(this),
                    e = b.attr("rel");
                if (a.showPreviewThumbs) {
                    x = c('<div class="bottomOverThumb"></div>');
                    b.append(x);
                    var f = c(v[e]).attr("data-bottom-thumb"),
                        g = c(v[M]).attr("data-bottom-thumb"),
                        d = 80,
                        h = -80;
                    if (M > e) {
                        d = -80;
                        h = 80
                    }
                    x.html("");
                    x.html('<div class="innerBottomOverThumb"><img src="' + g + '"style="margin:0px;" id="oldThumb"><img src="' + f + '" style="margin-top:-80px; margin-left:' + d + 'px;" id="newThumb"></div>');
                    c("#newThumb").stop().animate({
                        marginLeft: "0px"
                    }, 150, function () {
                        x.html('<div class="innerBottomOverThumb"><img src="' + f + '"></div>')
                    });
                    c("#oldThumb").stop().animate({
                        marginLeft: h + "px"
                    }, 150, function () {});
                    M = e
                }
                b.addClass("bottomNavButtonON")
            }), y.mouseleave(function () {
                var b = c(this),
                    f = b.attr("rel");
                a.showPreviewThumbs && x.remove();
                e.current_img_no != f && b.removeClass("bottomNavButtonON")
            }));
            w.mousedown(function () {
                arrowClicked = true;
                if (!e.effectIsRunning) {
                    e.isVideoPlaying = false;
                    var g = c(this).attr("rel");
                    c(w[e.current_img_no]).removeClass("thumbsHolder_ThumbON");
                    e.previous_current_img_no = e.current_img_no;
                    e.bottomNavClicked = true;
                    e.current_img_no = g - 1;
                    D(1, e, a, p, y, v, b, j, h, f, u, A, w, r, o, q, s)
                }
            });
            w.mouseup(function () {
                arrowClicked = false
            });
            w.mouseenter(function () {
                var a = c(this);
                a.attr("rel");
                a.addClass("thumbsHolder_ThumbON")
            });
            w.mouseleave(function () {
                var a = c(this),
                    b = a.attr("rel");
                e.current_img_no != b && a.removeClass("thumbsHolder_ThumbON")
            });
            o.click(function () {
                if (!e.isCarouselScrolling) {
                    currentCarouselLeft = r.css("left").substr(0, r.css("left").lastIndexOf("px"));
                    currentCarouselLeft < 0 && F(1, r, o, q, a, p, s, e)
                }
            });
            q.click(function () {
                if (!e.isCarouselScrolling) {
                    currentCarouselLeft = r.css("left").substr(0, r.css("left").lastIndexOf("px"));
                    Math.abs(currentCarouselLeft - e.carouselStep) < (s.width() + e.thumbMarginLeft) * p && F(-1, r, o, q, a, p, s, e)
                }
            });
            "opportune" == a.skin && c(y[e.current_img_no]).addClass("bottomNavButtonON");
            c(w[e.current_img_no]).addClass("thumbsHolder_ThumbON");
            0 < a.autoPlay && 1 < p && (a.showCircleTimer && (e.intervalID = setInterval(function () {
                Q(e, a)
            }, 125)), e.timeoutID = setTimeout(function () {
                D(1, e, a, p, y, v, b, j, h, f, u, A, w, r, o, q, s)
            }, 1E3 * a.autoPlay));
            "true" == c(v[e.current_img_no]).attr("data-video") && u.css("display", "block")
        })
    };
    c.fn.bannerscollection_kenburns.defaults = {
        skin: "opportune",
        width: 918,
        height: 382,
        width100Proc: !1,
        height100Proc: !1,
        autoPlay: 16,
        loop: !0,
        horizontalPosition: "center",
        verticalPosition: "center",
        initialZoom: 1,
        finalZoom: 0.8,
        duration: 20,
        durationIEfix: 30,
        initialOpacity: 1,
        target: "_blank",
        pauseOnMouseOver: !0,
        showCircleTimer: !0,
        showCircleTimerIE8IE7: !1,
        circleRadius: 10,
        circleLineWidth: 4,
        circleColor: "#FF0000",
        circleAlpha: 100,
        behindCircleColor: "#000000",
        behindCircleAlpha: 50,
        responsive: !0,
        responsiveRelativeToBrowser: !0,
        numberOfThumbsPerScreen: 0,
        thumbsOnMarginTop: 0,
        thumbsWrapperMarginTop: 0,
        showAllControllers: !0,
        showNavArrows: !0,
        showOnInitNavArrows: !0,
        autoHideNavArrows: !0,
        showBottomNav: !0,
        showOnInitBottomNav: !0,
        autoHideBottomNav: !1,
        showPreviewThumbs: !0,
        enableTouchScreen: !0,
        absUrl: "",
        origWidth: 0,
        origHeight: 0,
        origThumbW: 0,
        origThumbH: 0,
        origthumbsHolderWrapperH: 0,
        origthumbsHolder_MarginTop: 0,
        windowOrientationScreenSize0: 0,
        windowOrientationScreenSize90: 0,
        windowOrientationScreenSize_90: 0,
        windowCurOrientation: 0
    }
})(jQuery);