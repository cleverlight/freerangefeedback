/*
 * AllInOne Banner - Banner Rotator v3.0
 *
 * Copyright 2012, LambertJroup
 *
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
                if (b.responsive) {
                    newCss = "";
                    if (m.css("font-size").lastIndexOf("px") != -1) {
                        fontSize = m.css("font-size").substr(0, m.css("font-size").lastIndexOf("px"));
                        newCss = newCss + ("font-size:" + fontSize / (b.origWidth / b.width) + "px;")
                    } else if (m.css("font-size").lastIndexOf("em") != -1) {
                        fontSize = m.css("font-size").substr(0, m.css("font-size").lastIndexOf("em"));
                        newCss = newCss + ("font-size:" + fontSize / (b.origWidth / b.width) + "em;")
                    }
                    if (m.css("line-height").lastIndexOf("px") != -1) {
                        lineHeight = m.css("line-height").substr(0, m.css("line-height").lastIndexOf("px"));
                        newCss = newCss + ("line-height:" + lineHeight / (b.origWidth / b.width) + "px;")
                    } else if (m.css("line-height").lastIndexOf("em") != -1) {
                        lineHeight = m.css("line-height").substr(0, m.css("line-height").lastIndexOf("em"));
                        newCss = newCss + ("line-height:" + lineHeight / (b.origWidth / b.width) + "em;")
                    }
                    m.wrapInner('<div class="newFS" style="' + newCss + '" />')
                }
                var f = m.attr("data-final-left"),
                    d = m.attr("data-final-top");
                if (b.responsive) {
                    f = parseInt(f / (b.origWidth / b.width), 10);
                    d = parseInt(d / (b.origWidth / b.width), 10)
                }
                var g = 1;
                a.isVideoPlaying == true && (g = 0);
                m.animate({
                    opacity: g,
                    left: f + "px",
                    top: d + "px"
                }, m.attr("data-duration") * 1E3, function () {
                    a.isVideoPlaying == true && c(a.currentImg.attr("data-text-id")).children().css("opacity", 0)
                })
            }, 1E3 * currentText_arr[g].attr("data-delay"));
            g++
        })
    }
    
    function H(a, b) {
        nowx = (new Date).getTime();
        !a.mouseOverBanner && (!a.effectIsRunning && b.showCircleTimer) && (a.ctx.clearRect(0, 0, a.canvas.width, a.canvas.height), a.ctx.beginPath(), a.ctx.globalAlpha = b.behindCircleAlpha / 100, a.ctx.arc(b.circleRadius + 2 * b.circleLineWidth, b.circleRadius + 2 * b.circleLineWidth, b.circleRadius, 0, 2 * Math.PI, !1), a.ctx.lineWidth = b.circleLineWidth + 2, a.ctx.strokeStyle = b.behindCircleColor, a.ctx.stroke(), a.ctx.beginPath(), a.ctx.globalAlpha = b.circleAlpha / 100, a.ctx.arc(b.circleRadius + 2 * b.circleLineWidth, b.circleRadius + 2 * b.circleLineWidth, b.circleRadius, 0, 2 * ((a.timeElapsed + nowx - a.arcInitialTime) / 1E3) / b.autoPlay * Math.PI, !1), a.ctx.lineWidth = b.circleLineWidth, a.ctx.strokeStyle = b.circleColor, a.ctx.stroke())
    }
    
    function I(a, b, d) {
        c(".stripe", a).remove();
        c(".block", a).remove();
        y = x = Math.round(b.width / b.numberOfStripes);
        for (var g = !0, f = 0; f < b.numberOfStripes; f++) f == b.numberOfStripes - 1 && (y = a.width() - x * (b.numberOfStripes - 1)), !b.responsive || !c.browser.msie || c.browser.msie && 9 <= c.browser.version ? -1 != r.indexOf("ipad") || -1 != r.indexOf("iphone") || -1 != r.indexOf("ipod") || -1 != r.indexOf("webos") ? g = !1 : a.append(c('<div class="stripe"></div>').css({
            opacity: "0",
            left: x * f + "px",
            width: y + "px",
            height: "0px",
            background: 'url("' + d.current_imgInside.attr("src") + '") ' + -1 * f * x + "px 0%"
        })) : g = !1, g || (mleft = -1 * x * f, a.append(c('<div class="stripe"><img src="' + d.current_imgInside.attr("src") + '" width="' + b.width + '" height="' + b.height + '" style="margin-left:' + mleft + 'px;"></div>').css({
            opacity: "0",
            left: x * f + "px",
            width: y + "px",
            height: "0px"
        })));
        b.responsive && g && (!c.browser.msie || c.browser.msie && 9 <= c.browser.version) && c(".stripe", a).css({
            "-webkit-background-size": b.width + "px " + b.height + "px",
            "-moz-background-size": b.width + "px " + b.height + "px",
            "-o-background-size": b.width + "px " + b.height + "px",
            "-ms-background-size": b.width + "px " + b.height + "px",
            "background-size": b.width + "px " + b.height + "px"
        })
    }
    
    function F(a, b, c, g, f) {
        var h = a.width(),
            m = a.height();
        a.css({
            width: "0",
            height: "0"
        });
        b == g.numberOfRows - 1 && c == g.numberOfColumns - 1 ? setTimeout(function () {
            a.animate({
                opacity: "1.0",
                width: h,
                height: m
            }, 1E3 * g.effectDuration / 3, "", function () {
                f.trigger("effectComplete")
            })
        }, n) : setTimeout(function () {
            a.animate({
                opacity: "1.0",
                width: h,
                height: m
            }, 1E3 * g.effectDuration / 3)
        }, n);
        n += D
    }
    
    function A(a, b, d, g, f, h, m, C) {
        var p = !0;
        if (!b.loop && d.current_img_no + a >= g || !b.loop && 0 > d.current_img_no + a) p = !1;
        if (p) {
            c(".newFS", h).contents().unwrap();
            b.showCircleTimer && (d.ctx.clearRect(0, 0, d.canvas.width, d.canvas.height), d.ctx.beginPath(), d.ctx.globalAlpha = b.behindCircleAlpha / 100, d.ctx.arc(b.circleRadius + 2 * b.circleLineWidth, b.circleRadius + 2 * b.circleLineWidth, b.circleRadius, 0, 2 * Math.PI, !1), d.ctx.lineWidth = b.circleLineWidth + 2, d.ctx.strokeStyle = b.behindCircleColor, d.ctx.stroke(), d.ctx.beginPath(), d.ctx.globalAlpha = b.circleAlpha / 100, d.ctx.arc(b.circleRadius + 2 * b.circleLineWidth, b.circleRadius + 2 * b.circleLineWidth, b.circleRadius, 0, 0, !1), d.ctx.lineWidth = b.circleLineWidth, d.ctx.strokeStyle = b.circleColor, d.ctx.stroke());
            c(d.currentImg.attr("data-text-id")).css("display", "none");
            c(m[d.current_img_no]).removeClass("bottomNavButtonON");
            b.randomizeImages && !d.bottomNavClicked ? (a = Math.floor(Math.random() * g), d.current_img_no = d.cur...eenSize0 && (window.orientation == 0 && c(window).width() > a.windowOrientationScreenSize0) && (doResizeNow = false); a.windowOrientationScreenSize90 && (window.orientation == 90 && c(window).height() > a.windowOrientationScreenSize90) && (doResizeNow = false); a.windowOrientationScreenSize_90 && (window.orientation == -90 && c(window).height() > a.windowOrientationScreenSize_90) && (doResizeNow = false);
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
                y !== false && clearTimeout(y);
                y = setTimeout(function () {
                    var d = a,
                        g = s,
                        m = v,
                        u = o,
                        x = c("body").css("overflow");
                    c("body").css("overflow", "hidden");
                    if (d.enableTouchScreen) {
                        responsiveWidth = b.parent().parent().parent().width();
                        responsiveHeight = b.parent().parent().parent().height()
                    } else {
                        responsiveWidth = b.parent().parent().width();
                        responsiveHeight = b.parent().parent().height()
                    }
                    if (d.responsiveRelativeToBrowser) {
                        responsiveWidth = c(window).width();
                        responsiveHeight = c(window).height()
                    }
                    if (d.width100Proc) d.width = responsiveWidth;
                    if (d.height100Proc) d.height = responsiveHeight;
                    if (d.skin == "attractive") {
                        d.isAttractiveResp = false;
                        p.css("right", d.rightVal + "px")
                    }
                    if (d.origWidth != responsiveWidth || d.width100Proc) {
                        if (d.origWidth > responsiveWidth || d.width100Proc) {
                            d.width = responsiveWidth;
                            d.isAttractiveResp = true;
                            d.skin == "attractive" && p.css("right", d.rightVal - 1 + "px")
                        } else if (!d.width100Proc) d.width = d.origWidth;
                        if (!d.height100Proc) d.height = d.width / e.bannerRatio;
                        d.width = parseInt(d.width, 10);
                        d.height = parseInt(d.height, 10);
                        if (d.enableTouchScreen && d.responsive) d.width = d.width - 1;
                        f.width(d.width);
                        f.height(d.height);
                        if (r.indexOf("ipad") != -1 || r.indexOf("iphone") != -1 || r.indexOf("ipod") != -1 || r.indexOf("webos") != -1 || c.browser.msie && c.browser.version <= 7) {
                            c("#curBgImgIos", f).attr("src", e.current_imgInside.attr("src"));
                            c("#curBgImgIos", f).width(d.width);
                            c("#curBgImgIos", f).height(d.height)
                        } else !c.browser.msie || c.browser.msie && c.browser.version >= 9 ? f.css({
                            "-webkit-background-size": d.width + "px " + d.height + "px",
                            "-moz-background-size": d.width + "px " + d.height + "px",
                            "-o-background-size": d.width + "px " + d.height + "px",
                            "-ms-background-size": d.width + "px " + d.height + "px",
                            "background-size": d.width + "px " + d.height + "px"
                        }) : c.browser.version == 8 && f.css({
                            filter: "progid:DXImageTransform.Microsoft.AlphaImageLoader(src='" + e.current_imgInside.attr("src") + "',sizingMethod='scale')"
                        });
                        if (d.enableTouchScreen) {
                            f.parent().width(d.width + 1);
                            f.parent().height(d.height)
                        }
                        h.css("margin-top", parseInt((d.height - n.height()) / 2, 10) + "px");
                        for (i = 0; i < g; i++) c(c(k[i]).attr("data-text-id")).css("width", b.width() + "px");
                        l.css("left", parseInt((f.width() - l.width()) / 2, 10) + "px");
                        t.css("left", parseInt(l.css("left").substring(0, l.css("left").length - 2), 10) - t.width() + "px");
                        w.css("left", parseInt(l.css("left").substring(0, l.css("left").length - 2), 10) + l.width() + parseInt(u.css("padding-left").substring(0, u.css("padding-left").length - 2), 10) + "px");
                        clearTimeout(e.timeoutID);
                        A(1, d, e, g, q, f, m, k)
                    }
                    c("body").css("overflow", x)
                }, 300)
            }
        });
    var v = c(".bottomNavButtonOFF", f);
    v.mousedown(function () {
        B = true;
        if (!e.effectIsRunning) {
            var b = c(this).attr("rel");
            c(v[e.current_img_no]).removeClass("bottomNavButtonON");
            e.bottomNavClicked = true;
            e.current_img_no = b - 1;
            A(1, a, e, s, q, f, v, k)
        }
    });
    v.mouseup(function () {
        B = false
    });
    v.mouseenter(function () {
        var b = c(this),
            d = b.attr("rel");
        if (a.showPreviewThumbs) {
            z = c('<div class="bottomOverThumb"></div>');
            b.append(z);
            d = c(k[d]).attr("data-bottom-thumb");
            z.html('<img src="' + d + '">')
        }
        b.addClass("bottomNavButtonON")
    });
    v.mouseleave(function () {
        var b = c(this),
            d = b.attr("rel");
        a.showPreviewThumbs && z.remove();
        e.current_img_no != d && b.removeClass("bottomNavButtonON")
    });
    c(v[e.current_img_no]).addClass("bottomNavButtonON");
    0 < a.autoPlay && 1 < s && (a.showCircleTimer && (e.intervalID = setInterval(function () {
        H(e, a)
    }, 125)), e.timeoutID = setTimeout(function () {
        A(1, a, e, s, q, f, v, k)
    }, 1E3 * a.autoPlay))
})
};
c.fn.myReverse = [].reverse;
c.fn.allinone_bannerRotator.defaults = {
    skin: "classic",
    width: 960,
    height: 384,
    width100Proc: !1,
    height100Proc: !1,
    randomizeImages: !1,
    firstImg: 0,
    numberOfStripes: 20,
    numberOfRows: 5,
    numberOfColumns: 10,
    defaultEffect: "random",
    effectDuration: 0.5,
    autoPlay: 4,
    loop: !0,
    target: "_blank",
    showAllControllers: !0,
    showNavArrows: !0,
    showOnInitNavArrows: !0,
    autoHideNavArrows: !0,
    showBottomNav: !0,
    showOnInitBottomNav: !0,
    autoHideBottomNav: !0,
    showPreviewThumbs: !0,
    enableTouchScreen: !0,
    absUrl: "",
    showCircleTimer: !0,
    showCircleTimerIE8IE7: !1,
    circleRadius: 10,
    circleLineWidth: 4,
    circleColor: "#FF0000",
    circleAlpha: 100,
    behindCircleColor: "#000000",
    behindCircleAlpha: 50,
    responsive: !1,
    responsiveRelativeToBrowser: !0,
    origWidth: 0,
    origHeight: 0,
    thumbsWrapperMarginBottom: 0,
    windowOrientationScreenSize0: 0,
    windowOrientationScreenSize90: 0,
    windowOrientationScreenSize_90: 0,
    windowCurOrientation: 0
}
})(jQuery);




