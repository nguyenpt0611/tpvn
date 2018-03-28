$(document).ready(function () {
    init();
});
var canvas, stage, exportRoot, anim_container, dom_overlay_container, fnStartAnimation;

function init() {
    canvas = document.getElementById("canvas");
    anim_container = document.getElementById("animation_container");
    dom_overlay_container = document.getElementById("dom_overlay_container");
    var comp = AdobeAn.getComposition("9F80377A5F2EF84D84ACA8B9BD4BCE41");
    var lib = comp.getLibrary();
    handleComplete({}, comp);
}

function handleComplete(evt, comp) {
    //This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
    var lib = comp.getLibrary();
    var ss = comp.getSpriteSheet();
    exportRoot = new lib.logo_AnimatedNew();
    stage = new lib.Stage(canvas);
    //Registers the "tick" event listener.
    fnStartAnimation = function () {
        stage.addChild(exportRoot);
        createjs.Ticker.setFPS(lib.properties.fps);
        createjs.Ticker.addEventListener("tick", stage);
    }

    //Code to support hidpi screens and responsive scaling.
    function makeResponsive(isResp, respDim, isScale, scaleType) {
        var lastW, lastH, lastS = 1;
        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        function resizeCanvas() {
            var w = lib.properties.width, h = lib.properties.height;
            var iw = window.innerWidth, ih = window.innerHeight;
            var pRatio = window.devicePixelRatio || 1, xRatio = iw / w, yRatio = ih / h, sRatio = 1;
            if (isResp) {
                if ((respDim == 'width' && lastW == iw) || (respDim == 'height' && lastH == ih)) {
                    sRatio = lastS;
                }
                else if (!isScale) {
                    if (iw < w || ih < h)
                        sRatio = Math.min(xRatio, yRatio);
                }
                else if (scaleType == 1) {
                    sRatio = Math.min(xRatio, yRatio);
                }
                else if (scaleType == 2) {
                    sRatio = Math.max(xRatio, yRatio);
                }
            }
            canvas.width = w * pRatio * sRatio;
            canvas.height = h * pRatio * sRatio;
            canvas.style.width = dom_overlay_container.style.width = anim_container.style.width = w * sRatio + 'px';
            canvas.style.height = anim_container.style.height = dom_overlay_container.style.height = h * sRatio + 'px';
            stage.scaleX = pRatio * sRatio;
            stage.scaleY = pRatio * sRatio;
            lastW = iw;
            lastH = ih;
            lastS = sRatio;
            stage.tickOnUpdate = false;
            stage.update();
            stage.tickOnUpdate = true;
        }
    }

    makeResponsive(false, 'both', false, 1);
    AdobeAn.compositionLoaded(lib.properties.id);
    fnStartAnimation();
}

(function (cjs, an) {

    var p; // shortcut to reference prototypes
    var lib = {};
    var ss = {};
    var img = {};
    lib.ssMetadata = [];


// symbols:
// helper functions:

    function mc_symbol_clone() {
        var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
        clone.gotoAndStop(this.currentFrame);
        clone.paused = this.paused;
        clone.framerate = this.framerate;
        return clone;
    }

    function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
        var prototype = cjs.extend(symbol, cjs.MovieClip);
        prototype.clone = mc_symbol_clone;
        prototype.nominalBounds = nominalBounds;
        prototype.frameBounds = frameBounds;
        return prototype;
    }


    (lib.Symbol5 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer_1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#95C7EB").s().p("AgjgRQAAgPALgKQAKgLAOAAQAPAAAKALQALAKAAAPQAAAcgVAWQgUAVgeAAg");
        this.shape.setTransform(99.5, 150.1, 27.825, 27.79);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(0, 0, 199, 300.2), null);


    (lib.Symbol4 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer_1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#4989C7").s().p("Aj3UVQrTmhjRsmQjRsXGUrTIa8PpQFqDQBvGSQBvGTjQFqQjRFpmUBhQiMAniGAAQj5AAjjiIg");
        this.shape.setTransform(125.1, 143.7);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(0, 0, 250.3, 287.4), null);


    (lib.Symbol3 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer_1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#6AA3D6").s().p("AgfAlQgOgEgHgNQgIgMAEgOQAEgOANgIIADgCQAZgNAbAJQAcAIAOAYIg9AjQgJAFgJAAIgKgBg");
        this.shape.setTransform(161.2, 106.7, 27.825, 27.79);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0, 0, 322.5, 213.3), null);


    (lib.Symbol2 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer_1
        this.shape = new cjs.Shape();
        this.shape.graphics.f().s("#F3F3F3").ss(1, 1, 1).p("AeegGQAAAEAAADQAAGTigFvQiQFKj/EDQgPAPgPAPQivCqjPB5QhzBEh9A0QllCVl+AAQl+AAlniUQldiRkQkJQgQgQgPgQQj+kCiPlIQiglvAAmWQAAmXCdlvQCWldESkNQBDhBBIg7QDbixEHhsQFniVGFAAQGEAAFnCWQEFBsDaCwQBKA8BEBEQETEMCVFeQAdBDAYBFQBDDDAYDNQAPBWAABcQAAAZgBAYgAeQjpQANBwABBzQgRF8kSESQkjEjmcAAQmdAAkjkjQkjkjAAmcQAAlHC3j7QAwhBA8g8QC8i9DvhCQCCglCTAAQGcAAEjEkQA8A8AvBBQBXB2AuCHQAYBHANBMgAgpeWIAA/N");
        this.shape.setTransform(195.1, 195);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(-1, -1, 392.1, 392.1), null);


    (lib.Symbol1 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer_1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#999999").s().p("AgpArQgSgRAAgaQAAgYASgRQARgSAYAAQAaAAARASQARARAAAYQAAAagRARQgRARgaAAQgYAAgRgRg");
        this.shape.setTransform(6, 6);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0, 0, 12, 12), null);


    (lib.lineDrawing = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // dot__Line
        this.instance = new lib.Symbol1();
        this.instance.parent = this;
        this.instance.setTransform(400.8, 659.3, 1, 1, 0, 0, 0, 6, 6);
        this.instance._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(65).to({_off: false}, 0).wait(1).to({y: 650.3}, 0).wait(1).to({y: 641.3}, 0).wait(1).to({y: 632.4}, 0).wait(1).to({y: 623.4}, 0).wait(1).to({y: 614.4}, 0).wait(1).to({y: 605.5}, 0).wait(1).to({y: 596.5}, 0).wait(1).to({y: 587.6}, 0).wait(1).to({y: 578.6}, 0).wait(1).to({y: 569.6}, 0).wait(1).to({y: 560.7}, 0).wait(1).to({y: 551.7}, 0).wait(1).to({y: 542.8}, 0).wait(1).to({y: 533.8}, 0).wait(1).to({y: 524.8}, 0).wait(1).to({y: 515.9}, 0).wait(1).to({y: 506.9}, 0).wait(1).to({y: 498}, 0).wait(1).to({y: 489}, 0).wait(1).to({y: 480}, 0).wait(1).to({y: 471.1}, 0).wait(1).to({y: 462.1}, 0).wait(1).to({y: 453.2}, 0).wait(1).to({alpha: 0.75}, 0).wait(1).to({alpha: 0.5}, 0).wait(1).to({alpha: 0.25}, 0).wait(1).to({alpha: 0}, 0).to({_off: true}, 1).wait(67));

        // Layer_2
        this.shape = new cjs.Shape();
        this.shape.graphics.f().s("#F3F3F3").ss(1, 1, 1).p("AAAAeIAAg7");
        this.shape.setTransform(400.8, 656.3);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f().s("#F3F3F3").ss(1, 1, 1).p("AAAhHIAACP");
        this.shape_1.setTransform(400.8, 652.1);

        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f().s("#F3F3F3").ss(1, 1, 1).p("AAAhxIAADj");
        this.shape_2.setTransform(400.8, 647.8);

        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f().s("#F3F3F3").ss(1, 1, 1).p("AAAibIAAE3");
        this.shape_3.setTransform(400.8, 643.6);

        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f().s("#F3F3F3").ss(1, 1, 1).p("AAAjGIAAGN");
        this.shape_4.setTransform(400.8, 639.4);

        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.f().s("#F3F3F3").ss(1, 1, 1).p("AAAjwIAAHg");
        this.shape_5.setTransform(400.8, 635.2);

        this.shape_6 = new cjs.Shape();
        this.shape_6.graphics.f().s("#F3F3F3").ss(1, 1, 1).p("AAAkaIAAI1");
        this.shape_6.setTransform(400.8, 631);

        this.shape_7 = new cjs.Shape();
        this.shape_7.graphics.f().s("#F3F3F3").ss(1, 1, 1).p("AAAlEIAAKJ");
        this.shape_7.setTransform(400.8, 626.8);

        this.shape_8 = new cjs.Shape();
        this.shape_8.graphics.f().s("#F3F3F3").ss(1, 1, 1).p("AAAluIAALd");
        this.shape_8.setTransform(400.8, 622.6);

        this.shape_9 = new cjs.Shape();
        this.shape_9.graphics.f().s("#F3F3F3").ss(1, 1, 1).p("AAAmYIAAMx");
        this.shape_9.setTransform(400.8, 618.4);

        this.shape_10 = new cjs.Shape();
        this.shape_10.graphics.f().s("#F3F3F3").ss(1, 1, 1).p("AAAnCIAAOF");
        this.shape_10.setTransform(400.8, 614.1);

        this.shape_11 = new cjs.Shape();
        this.shape_11.graphics.f().s("#F3F3F3").ss(1, 1, 1).p("AAAnsIAAPZ");
        this.shape_11.setTransform(400.8, 609.9);

        this.shape_12 = new cjs.Shape();
        this.shape_12.graphics.f().s("#F3F3F3").ss(1, 1, 1).p("AAAoXIAAQu");
        this.shape_12.setTransform(400.8, 605.7);

        this.shape_13 = new cjs.Shape();
        this.shape_13.graphics.f().s("#F3F3F3").ss(1, 1, 1).p("AAApBIAASD");
        this.shape_13.setTransform(400.8, 601.5);

        this.shape_14 = new cjs.Shape();
        this.shape_14.graphics.f().s("#F3F3F3").ss(1, 1, 1).p("AAAprIAATX");
        this.shape_14.setTransform(400.8, 597.3);

        this.shape_15 = new cjs.Shape();
        this.shape_15.graphics.f().s("#F3F3F3").ss(1, 1, 1).p("AAAqVIAAUr");
        this.shape_15.setTransform(400.8, 593.1);

        this.shape_16 = new cjs.Shape();
        this.shape_16.graphics.f().s("#F3F3F3").ss(1, 1, 1).p("AAAq/IAAV/");
        this.shape_16.setTransform(400.8, 588.9);

        this.shape_17 = new cjs.Shape();
        this.shape_17.graphics.f().s("#F3F3F3").ss(1, 1, 1).p("AAArpIAAXT");
        this.shape_17.setTransform(400.8, 584.7);

        this.shape_18 = new cjs.Shape();
        this.shape_18.graphics.f().s("#F3F3F3").ss(1, 1, 1).p("AAAsTIAAYn");
        this.shape_18.setTransform(400.8, 580.4);

        this.shape_19 = new cjs.Shape();
        this.shape_19.graphics.f().s("#F3F3F3").ss(1, 1, 1).p("AAAs9IAAZ7");
        this.shape_19.setTransform(400.8, 576.2);

        this.shape_20 = new cjs.Shape();
        this.shape_20.graphics.f().s("#F3F3F3").ss(1, 1, 1).p("AAAtoIAAbR");
        this.shape_20.setTransform(400.8, 572);

        this.shape_21 = new cjs.Shape();
        this.shape_21.graphics.f().s("#F3F3F3").ss(1, 1, 1).p("AAAuRIAAck");
        this.shape_21.setTransform(400.8, 567.8);

        this.shape_22 = new cjs.Shape();
        this.shape_22.graphics.f().s("#F3F3F3").ss(1, 1, 1).p("AAAu8IAAd5");
        this.shape_22.setTransform(400.8, 563.6);

        this.shape_23 = new cjs.Shape();
        this.shape_23.graphics.f().s("#F3F3F3").ss(1, 1, 1).p("AAAPnIAA/N");
        this.shape_23.setTransform(400.8, 559.4);

        this.shape_24 = new cjs.Shape();
        this.shape_24.graphics.f().s("#F3F3F3").ss(1, 1, 1).p("AAAvmIAAfN");
        this.shape_24.setTransform(400.8, 559.4);

        this.timeline.addTween(cjs.Tween.get({}).to({state: []}).to({state: [{t: this.shape}]}, 65).to({state: [{t: this.shape_1}]}, 1).to({state: [{t: this.shape_2}]}, 1).to({state: [{t: this.shape_3}]}, 1).to({state: [{t: this.shape_4}]}, 1).to({state: [{t: this.shape_5}]}, 1).to({state: [{t: this.shape_6}]}, 1).to({state: [{t: this.shape_7}]}, 1).to({state: [{t: this.shape_8}]}, 1).to({state: [{t: this.shape_9}]}, 1).to({state: [{t: this.shape_10}]}, 1).to({state: [{t: this.shape_11}]}, 1).to({state: [{t: this.shape_12}]}, 1).to({state: [{t: this.shape_13}]}, 1).to({state: [{t: this.shape_14}]}, 1).to({state: [{t: this.shape_15}]}, 1).to({state: [{t: this.shape_16}]}, 1).to({state: [{t: this.shape_17}]}, 1).to({state: [{t: this.shape_18}]}, 1).to({state: [{t: this.shape_19}]}, 1).to({state: [{t: this.shape_20}]}, 1).to({state: [{t: this.shape_21}]}, 1).to({state: [{t: this.shape_22}]}, 1).to({state: [{t: this.shape_23}]}, 1).to({state: [{t: this.shape_24}]}, 1).to({state: [{t: this.shape_24}]}, 1).to({state: [{t: this.shape_24}]}, 1).to({state: [{t: this.shape_23}]}, 1).to({state: []}, 1).wait(67));

        // dot__Small copy
        this.instance_1 = new lib.Symbol1();
        this.instance_1.parent = this;
        this.instance_1.setTransform(400.8, 459.2, 1, 1, 0, 0, 0, 6, 6);
        this.instance_1._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(88).to({_off: false}, 0).wait(1).to({
            x: 401.2,
            y: 449.3
        }, 0).wait(1).to({x: 402.5, y: 439.5}, 0).wait(1).to({x: 404.8, y: 429.9}, 0).wait(1).to({
            x: 408.1,
            y: 420.5
        }, 0).wait(1).to({x: 412.4, y: 411.6}, 0).wait(1).to({x: 417.6, y: 403.2}, 0).wait(1).to({
            x: 423.6,
            y: 395.4
        }, 0).wait(1).to({x: 430.5, y: 388.3}, 0).wait(1).to({x: 438, y: 381.9}, 0).wait(1).to({
            x: 446.1,
            y: 376.2
        }, 0).wait(1).to({x: 454.7, y: 371.4}, 0).wait(1).to({x: 463.8, y: 367.3}, 0).wait(1).to({
            x: 473.1,
            y: 364.1
        }, 0).wait(1).to({x: 482.7, y: 361.7}, 0).wait(1).to({x: 492.5, y: 360.3}, 0).wait(1).to({
            x: 502.4,
            y: 359.8
        }, 0).wait(1).to({x: 512.9, y: 360.5}, 0).wait(1).to({x: 523.3, y: 362.6}, 0).wait(1).to({
            x: 533.5,
            y: 365.8
        }, 0).wait(1).to({x: 543.2, y: 370}, 0).wait(1).to({x: 552.5, y: 375.1}, 0).wait(1).to({
            x: 561.3,
            y: 381.1
        }, 0).wait(1).to({x: 569.5, y: 387.9}, 0).wait(1).to({x: 576.9, y: 395.4}, 0).wait(1).to({
            x: 583.5,
            y: 403.8
        }, 0).wait(1).to({x: 589.1, y: 412.8}, 0).wait(1).to({x: 593.6, y: 422.4}, 0).wait(1).to({
            x: 596.9,
            y: 432.5
        }, 0).wait(1).to({x: 598.9, y: 442.9}, 0).wait(1).to({x: 599.6, y: 453.5}, 0).wait(1).to({
            x: 598.6,
            y: 469.6
        }, 0).wait(1).to({x: 595.6, y: 485.5}, 0).wait(1).to({x: 590.5, y: 500.8}, 0).wait(1).to({
            x: 583,
            y: 515.1
        }, 0).wait(1).to({x: 573.3, y: 528}, 0).wait(1).to({x: 561.6, y: 539.1}, 0).wait(1).to({
            x: 548,
            y: 547.9
        }, 0).wait(1).to({x: 533.2, y: 554.2}, 0).wait(1).to({x: 517.5, y: 557.9}, 0).wait(1).to({
            x: 501.4,
            y: 559.1
        }, 0).wait(1).to({x: 486.6, y: 558.1}, 0).wait(1).to({x: 472.1, y: 555}, 0).wait(1).to({
            x: 458.2,
            y: 549.9
        }, 0).wait(1).to({x: 445.2, y: 542.7}, 0).wait(1).to({x: 433.6, y: 533.5}, 0).wait(1).to({
            x: 423.5,
            y: 522.7
        }, 0).wait(1).to({x: 415.2, y: 510.4}, 0).wait(1).to({x: 408.8, y: 497}, 0).wait(1).to({
            x: 404.4,
            y: 482.9
        }, 0).wait(1).to({x: 401.9, y: 468.3}, 0).wait(1).to({x: 401.2, y: 453.5}, 0).wait(1).to({
            scaleX: 0.33,
            scaleY: 0.33,
            x: 401,
            y: 434.7,
            alpha: 0.667
        }, 0).wait(1).to({rotation: -180, x: 400.3, y: 416, alpha: 0.333}, 0).wait(1).to({
            scaleX: 1,
            scaleY: 1,
            y: 397.2,
            alpha: 0
        }, 0).to({_off: true}, 1).wait(17));

        // Layer_3 copy 2
        this.shape_25 = new cjs.Shape();
        this.shape_25.graphics.f().s("#F3F3F3").ss(1, 1, 1).p("AgHBZQABhbAOhW");
        this.shape_25.setTransform(401.8, 449.3);

        this.shape_26 = new cjs.Shape();
        this.shape_26.graphics.f().s("#F3F3F3").ss(1, 1, 1).p("AgXCXQACifAtiO");
        this.shape_26.setTransform(403.4, 443);

        this.shape_27 = new cjs.Shape();
        this.shape_27.graphics.f().s("#F3F3F3").ss(1, 1, 1).p("AgwDTQADjlBdjA");
        this.shape_27.setTransform(405.9, 437);

        this.shape_28 = new cjs.Shape();
        this.shape_28.graphics.f().s("#F3F3F3").ss(1, 1, 1).p("AhLEDQAEkgCTjl");
        this.shape_28.setTransform(408.6, 432.3);

        this.shape_29 = new cjs.Shape();
        this.shape_29.graphics.f().s("#F3F3F3").ss(1, 1, 1).p("AhfEgQADk9C0j2QAEgGAFgG");
        this.shape_29.setTransform(410.7, 429.3);

        this.shape_30 = new cjs.Shape();
        this.shape_30.graphics.f().s("#F3F3F3").ss(1, 1, 1).p("Ah8FDQAEk+Czj1QAegqAkgo");
        this.shape_30.setTransform(413.5, 425.8);

        this.shape_31 = new cjs.Shape();
        this.shape_31.graphics.f().s("#F3F3F3").ss(1, 1, 1).p("AifFmQAEk/Czj0QAwhBA8g8QAOgOAOgN");
        this.shape_31.setTransform(417, 422.3);

        this.shape_32 = new cjs.Shape();
        this.shape_32.graphics.f().s("#F3F3F3").ss(1, 1, 1).p("AizF4QAEk+Czj1QAvhBA8g8QAigiAjge");
        this.shape_32.setTransform(419, 420.5);

        this.shape_33 = new cjs.Shape();
        this.shape_33.graphics.f().s("#F3F3F3").ss(1, 1, 1).p("AjbGXQAEk/C0j1QAuhBA8g8QBHhGBOg2");
        this.shape_33.setTransform(423, 417.4);

        this.shape_34 = new cjs.Shape();
        this.shape_34.graphics.f().s("#F3F3F3").ss(1, 1, 1).p("Aj+GtQAEk/C0j1QAwhBA6g8QBmhmB1hC");
        this.shape_34.setTransform(426.5, 415.2);

        this.shape_35 = new cjs.Shape();
        this.shape_35.graphics.f().s("#F3F3F3").ss(1, 1, 1).p("AkpHCQAEk/C0j0QAwhBA8g8QCJiLCmhI");
        this.shape_35.setTransform(430.8, 413.1);

        this.shape_36 = new cjs.Shape();
        this.shape_36.graphics.f().s("#F3F3F3").ss(1, 1, 1).p("AlJHPQAEk/C0j1QAwhBA7g8QCkilDMhH");
        this.shape_36.setTransform(434, 411.8);

        this.shape_37 = new cjs.Shape();
        this.shape_37.graphics.f().s("#F3F3F3").ss(1, 1, 1).p("Al2HcQAEk/C0j1QAwhBA8g8QC7i8DvhCQAPgEAQgE");
        this.shape_37.setTransform(438.5, 410.5);

        this.shape_38 = new cjs.Shape();
        this.shape_38.graphics.f().s("#F3F3F3").ss(1, 1, 1).p("AmYHjQAEk+C0j1QAvhBA8g8QC8i9DvhCQAwgOAzgI");
        this.shape_38.setTransform(441.9, 409.8);

        this.shape_39 = new cjs.Shape();
        this.shape_39.graphics.f().s("#F3F3F3").ss(1, 1, 1).p("AnAHoQAEk+C0j1QAvhBA8g8QC8i9DvhCQBWgYBdgI");
        this.shape_39.setTransform(445.9, 409.3);

        this.shape_40 = new cjs.Shape();
        this.shape_40.graphics.f().s("#F3F3F3").ss(1, 1, 1).p("AoJHrQAEk/C0j1QAwhBA8g8QC8i9DuhCQCCglCSAAQAZAAAYAC");
        this.shape_40.setTransform(453.2, 409.1);

        this.shape_41 = new cjs.Shape();
        this.shape_41.graphics.f().s("#F3F3F3").ss(1, 1, 1).p("ApKHrQAEk/C0j1QAwhBA7g8QC9i9DuhCQCCglCSAAQBdAABWAP");
        this.shape_41.setTransform(459.7, 409.1);

        this.shape_42 = new cjs.Shape();
        this.shape_42.graphics.f().s("#F3F3F3").ss(1, 1, 1).p("Ap3HrQAEk/C0j1QAwhBA7g8QC9i9DuhCQCCglCSAAQCOAAB/Aj");
        this.shape_42.setTransform(464.2, 409.1);

        this.shape_43 = new cjs.Shape();
        this.shape_43.graphics.f().s("#F3F3F3").ss(1, 1, 1).p("AqkHrQAEk/C0j1QAwhBA8g8QC8i9DuhCQCCglCSAAQDBAACmBA");
        this.shape_43.setTransform(468.7, 409.1);

        this.shape_44 = new cjs.Shape();
        this.shape_44.graphics.f().s("#F3F3F3").ss(1, 1, 1).p("ArTHrQADk/C0j1QAwhBA8g8QC9i9DuhCQCBglCTAAQD4AADNBr");
        this.shape_44.setTransform(473.5, 409.1);

        this.shape_45 = new cjs.Shape();
        this.shape_45.graphics.f().s("#F3F3F3").ss(1, 1, 1).p("ArpHrQAEk/C0j1QAvhBA8g8QC9i9DvhCQCBglCSAAQETAADeCD");
        this.shape_45.setTransform(475.6, 409.1);

        this.shape_46 = new cjs.Shape();
        this.shape_46.graphics.f().s("#F3F3F3").ss(1, 1, 1).p("AseHrQADk/C0j1QAwhBA8g8QC9i9DuhCQCBglCTAAQFXAAEEDL");
        this.shape_46.setTransform(481, 409.1);

        this.shape_47 = new cjs.Shape();
        this.shape_47.graphics.f().s("#F3F3F3").ss(1, 1, 1).p("As9HrQAEk/C0j1QAvhBA8g8QC9i9DvhCQCBglCSAAQGBAAEYD/");
        this.shape_47.setTransform(484, 409.1);

        this.shape_48 = new cjs.Shape();
        this.shape_48.graphics.f().s("#F3F3F3").ss(1, 1, 1).p("AtgHrQAEk/C0j1QAvhBA8g8QC9i9DvhCQCCglCRAAQGcAAEjEkQARARAPAQ");
        this.shape_48.setTransform(487.5, 409.1);

        this.shape_49 = new cjs.Shape();
        this.shape_49.graphics.f().s("#F3F3F3").ss(1, 1, 1).p("AuCHrQAEk/C0j1QAwhBA8g8QC8i9DvhCQCCglCRAAQGcAAEkEkQA2A3AtA7");
        this.shape_49.setTransform(490.9, 409.1);

        this.shape_50 = new cjs.Shape();
        this.shape_50.graphics.f().s("#F3F3F3").ss(1, 1, 1).p("AumHrQAEk/C0j1QAvhBA8g8QC9i9DvhCQCCglCRAAQGcAAEjEkQA8A8AwBBQAgAsAgA7");
        this.shape_50.setTransform(494.5, 409.1);

        this.shape_51 = new cjs.Shape();
        this.shape_51.graphics.f().s("#F3F3F3").ss(1, 1, 1).p("Au0HrQADk/C0j1QAwhBA8g8QC9i9DuhCQCCglCSAAQGcAAEjEkQA8A8AvBBQAkAyAkBDQAMAVAJAU");
        this.shape_51.setTransform(496, 409.1);

        this.shape_52 = new cjs.Shape();
        this.shape_52.graphics.f().s("#F3F3F3").ss(1, 1, 1).p("AvEHrQAEk/C0j1QAwhBA7g8QC9i9DvhCQCCglCRAAQGcAAEkEkQA7A8AwBBQAjAyAlBDQAfA6AVA2");
        this.shape_52.setTransform(497.5, 409.1);

        this.shape_53 = new cjs.Shape();
        this.shape_53.graphics.f().s("#F3F3F3").ss(1, 1, 1).p("AvZHrQAEk/C0j1QAvhBA8g8QC9i9DvhCQCCglCRAAQGcAAEjEkQA8A8AwBBQAjAyAlBDQA0BiAXBUQANAxAGAj");
        this.shape_53.setTransform(499.6, 409.1);

        this.shape_54 = new cjs.Shape();
        this.shape_54.graphics.f().s("#F3F3F3").ss(1, 1, 1).p("AvhHrQAEk/C0j1QAvhBA8g8QC9i9DvhCQCCglCRAAQGcAAEjEkQA8A8AwBBQAjAyAlBDQA0BiAXBUQAQA9AGAnQAKA4ADA6");
        this.shape_54.setTransform(500.4, 409.1);

        this.shape_55 = new cjs.Shape();
        this.shape_55.graphics.f().s("#F3F3F3").ss(1, 1, 1).p("AviGiQAEk/C0j1QAwhBA7g8QC9i8DvhCQCCglCRAAQGcAAEkEjQA7A8AwBBQAjAyAlBEQA0BhAXBUQAQA9AGAoQAOBPABBVQAAAHAAAHQAAAYgBAYQAAAEAAAEQgCAmgEAl");
        this.shape_55.setTransform(500.5, 416.3);

        this.shape_56 = new cjs.Shape();
        this.shape_56.graphics.f().s("#F3F3F3").ss(1, 1, 1).p("AviFIQAEk/C0j1QAwhBA7g8QC9i8DvhCQCCglCRAAQGcAAEkEjQA7A8AwBBQAjAyAlBEQA0BiAXBTQAQA9AGAoQAOBPABBVQAAAHAAAHQAAAYgBAYQAAAEAAAEQgHCGgnB5");
        this.shape_56.setTransform(500.5, 425.3);

        this.shape_57 = new cjs.Shape();
        this.shape_57.graphics.f().s("#F3F3F3").ss(1, 1, 1).p("AviEAQAEk+C0j1QAwhBA7g8QC9i9DvhCQCCglCRAAQGcAAEkEkQA7A8AwBBQAjAxAlBFQA0BiAXBUQAQA8AGAnQAOBPABBVQAAAHAAAHQAAAYgBAYQAAAFAAAEQgLDYhfC2");
        this.shape_57.setTransform(500.5, 432.5);

        this.shape_58 = new cjs.Shape();
        this.shape_58.graphics.f().s("#F3F3F3").ss(1, 1, 1).p("AviCwQAEk+C0j2QAwhBA7g8QC9i9DvhCQCCglCRAAQGcAAEkEkQA7A8AwBBQAjAyAlBEQA0BiAXBUQAQA9AGAmQAOBQABBVQAAAGAAAHQAAAZgBAYQAAAEAAAEQgQE9jEDz");
        this.shape_58.setTransform(500.5, 440.6);

        this.shape_59 = new cjs.Shape();
        this.shape_59.graphics.f().s("#F3F3F3").ss(1, 1, 1).p("AviB2QAEk+C0j2QAwhBA7g8QC9i9DvhCQCCglCRAAQGcAAEkEkQA7A8AwBBQAjAxAlBFQA0BiAXBUQAQA9AGAnQAOBPABBVQAAAGAAAHQAAAZgBAYQAAAEAAAEQgTF4kPEPQgPAPgPAO");
        this.shape_59.setTransform(500.5, 446.4);

        this.shape_60 = new cjs.Shape();
        this.shape_60.graphics.f().s("#F3F3F3").ss(1, 1, 1).p("AviBQQAEk+C0j2QAwhBA7g8QC9i8DvhCQCCglCRAAQGcAAEkEjQA7A8AwBBQAjAyAlBEQA0BiAXBUQAQA9AGAoQAOBPABBUQAAAHAAAHQAAAYgBAYQAAAEAAAEQgTF5kPEOQg6A6g+Au");
        this.shape_60.setTransform(500.5, 450.1);

        this.shape_61 = new cjs.Shape();
        this.shape_61.graphics.f().s("#F3F3F3").ss(1, 1, 1).p("AviAmQAEk+C0j2QAwhBA7g8QC9i9DvhCQCCglCRAAQGcAAEkEkQA7A8AwBBQAjAxAlBFQA0BiAXBUQAQA9AGAnQAOBQABBUQAAAGAAAHQAAAZgBAYQAAAEAAAEQgTF4kPEPQh3B2iKBH");
        this.shape_61.setTransform(500.5, 454.4);

        this.shape_62 = new cjs.Shape();
        this.shape_62.graphics.f().s("#F3F3F3").ss(1, 1, 1).p("AviADQAEk9C0j2QAwhBA7g8QC9i9DvhCQCCglCRAAQGcAAEkEkQA7A8AwBBQAjAxAlBFQA0BiAXBUQAQA9AGAnQAOBQABBTQAAAHAAAHQAAAZgBAYQAAAEAAAEQgTF4kPEPQjAC/jzBC");
        this.shape_62.setTransform(500.5, 457.8);

        this.shape_63 = new cjs.Shape();
        this.shape_63.graphics.f().s("#F3F3F3").ss(1, 1, 1).p("AvigJQAEk/C0j2QAwhBA7g8QC9i8DvhCQCCglCRAAQGcAAEkEjQA7A8AwBBQAjAyAlBEQA0BiAXBUQAQA9AGAoQAOBPABBVQAAAHAAAGQAAAYgBAYQAAAEAAAEQgTF4kPEPQj1D1lKAn");
        this.shape_63.setTransform(500.5, 459.1);

        this.shape_64 = new cjs.Shape();
        this.shape_64.graphics.f().s("#F3F3F3").ss(1, 1, 1).p("AvigNQAEk+C0j2QAwhBA7g8QC9i9DvhCQCCglCRAAQGcAAEkEkQA7A8AwBBQAjAxAlBFQA0BiAXBUQAQA9AGAnQAOBQABBUQAAAHAAAGQAAAZgBAYQAAAEAAAEQgTF4kPEPQkWEWmDAN");
        this.shape_64.setTransform(500.5, 459.5);

        this.shape_65 = new cjs.Shape();
        this.shape_65.graphics.f().s("#F3F3F3").ss(1, 1, 1).p("AvigNQAEk/C0j2QAwhBA7g8QC9i8DvhCQCCglCRAAQGcAAEkEjQA7A8AwBBQAjAyAlBEQA0BiAXBUQAQA9AGAoQAOBPABBVQAAAHAAAGQAAAYgBAYQAAAEAAAEQgTF5kPEPQkkEjmcAAQhZAAhVgO");
        this.shape_65.setTransform(500.5, 459.5);

        this.shape_66 = new cjs.Shape();
        this.shape_66.graphics.f().s("#F3F3F3").ss(1, 1, 1).p("AvigNQAEk/C0j2QAwhBA7g8QC9i8DvhCQCCglCRAAQGcAAEkEjQA7A8AwBBQAjAyAlBEQA0BiAXBUQAQA9AGAoQAOBPABBVQAAAHAAAGQAAAYgBAYQAAAEAAAEQgTF5kPEPQkkEjmcAAQihAAiOgt");
        this.shape_66.setTransform(500.5, 459.5);

        this.shape_67 = new cjs.Shape();
        this.shape_67.graphics.f().s("#F3F3F3").ss(1, 1, 1).p("AvigNQAEk/C0j2QAwhBA7g8QC9i8DvhCQCCglCRAAQGcAAEkEjQA7A8AwBBQAjAyAlBEQA0BiAXBUQAQA9AGAoQAOBPABBVQAAAHAAAGQAAAYgBAYQAAAEAAAEQgTF5kPEPQkkEjmcAAQjbAAi5hS");
        this.shape_67.setTransform(500.5, 459.5);

        this.shape_68 = new cjs.Shape();
        this.shape_68.graphics.f().s("#F3F3F3").ss(1, 1, 1).p("AvigNQAEk/C0j2QAwhBA7g8QC9i8DvhCQCCglCRAAQGcAAEkEjQA7A8AwBBQAjAyAlBEQA0BiAXBUQAQA9AGAoQAKBRADBTQABAeAAAfAPUixQAOBPABBVQAAAHAAAGQAAAYgBAYIAAABQAAADAAAEQgTF5kPEPQkkEjmcAAQkDAAjUh0");
        this.shape_68.setTransform(500.5, 459.5);

        this.shape_69 = new cjs.Shape();
        this.shape_69.graphics.f().s("#F3F3F3").ss(1, 1, 1).p("AvigNQAEk/C0j2QAwhBA7g8QC9i8DvhCQCCglCRAAQGcAAEkEjQA7A8AwBBQAjAyAlBEQA0BiAXBUQAQA9AGAoQAKBRADBTQABAeAAAfAPUixQAOBPABBVQAAAHAAAGQAAAYgBAYIAAABQAAADAAAEQgTF5kPEPQkkEjmcAAQk3AAjzin");
        this.shape_69.setTransform(500.5, 459.5);

        this.shape_70 = new cjs.Shape();
        this.shape_70.graphics.f().s("#F3F3F3").ss(1, 1, 1).p("AvigNQAEk/C0j2QAwhBA7g8QC9i8DvhCQCCglCRAAQGcAAEkEjQA7A8AwBBQAjAyAlBEQA0BiAXBUQAQA9AGAoQAKBRADBTQABAeAAAfAPUixQAOBPABBVQAAAHAAAGQAAAYgBAYIAAABQAAADAAAEQgTF5kPEPQkkEjmcAAQmFAAkakF");
        this.shape_70.setTransform(500.5, 459.5);

        this.shape_71 = new cjs.Shape();
        this.shape_71.graphics.f().s("#F3F3F3").ss(1, 1, 1).p("AvigNQAEk/C0j2QAwhBA7g8QC9i8DvhCQCCglCRAAQGcAAEkEjQA7A8AwBBQAjAyAlBEQA0BiAXBUQAQA9AGAoQAKBRADBTQABAeAAAfAPUixQAOBPABBVQAAAHAAAGQAAAYgBAYIAAABQAAADAAAEQgTF5kPEPQkkEjmcAAQmcAAkjkjQgNgOgNgO");
        this.shape_71.setTransform(500.5, 459.5);

        this.shape_72 = new cjs.Shape();
        this.shape_72.graphics.f().s("#F3F3F3").ss(1, 1, 1).p("AvigNQAEk/C0j2QAwhBA7g8QC9i8DvhCQCCglCRAAQGcAAEkEjQA7A8AwBBQAjAyAlBEQA0BiAXBUQAQA9AGAoQAKBRADBTQABAeAAAfAPUixQAOBPABBVQAAAHAAAGQAAAYgBAYIAAABQAAADAAAEQgTF5kPEPQkkEjmcAAQmcAAkjkjQg7g8gvhA");
        this.shape_72.setTransform(500.5, 459.5);

        this.shape_73 = new cjs.Shape();
        this.shape_73.graphics.f().s("#F3F3F3").ss(1, 1, 1).p("AvigNQAEk/C0j2QAwhBA7g8QC9i8DvhCQCCglCRAAQGcAAEkEjQA7A8AwBBQAjAyAlBEQA0BiAXBUQAQA9AGAoQAKBRADBTQABAeAAAfAPUixQAOBPABBVQAAAHAAAGQAAAYgBAYIAAABQAAADAAAEQgTF5kPEPQkkEjmcAAQmcAAkjkjQhmhnhCh1");
        this.shape_73.setTransform(500.5, 459.5);

        this.shape_74 = new cjs.Shape();
        this.shape_74.graphics.f().s("#F3F3F3").ss(1, 1, 1).p("AvigNQAEk/C0j2QAwhBA7g8QC9i8DvhCQCCglCRAAQGcAAEkEjQA7A8AwBBQAjAyAlBEQA0BiAXBUQAQA9AGAoQAOBPABBVQAAAHAAAGQAAAYgBAYIAAABQAAADAAAEQgTF5kPEPQkkEjmcAAQmcAAkjkjQipiqhHjSAPUixQAKBRADBTQABAeAAAf");
        this.shape_74.setTransform(500.5, 459.5);

        this.shape_75 = new cjs.Shape();
        this.shape_75.graphics.f().s("#F3F3F3").ss(1, 1, 1).p("APiAwIAAABQAAADAAAEQgTF5kPEPQkkEjmcAAQmcAAkjkjQkjkjAAmdQAAgGAAgHQAEk/C0j2QAwhBA7g8QC9i8DvhCQCCglCRAAQGcAAEkEjQA7A8AwBBQAjAyAlBEQA0BiAXBUQAQA9AGAoQAOBPABBVQAAAHAAAGQAAAYgBAYgAPUixQAKBRADBTQABAeAAAf");
        this.shape_75.setTransform(500.5, 459.5);

        this.shape_76 = new cjs.Shape();
        this.shape_76.graphics.f().s("#F3F3F3").ss(1, 1, 1).p("APiAwIAAABQAAADAAAEQgTF5kPEPQkkEjmcAAQmcAAkjkjQkjkjAAmdQAAgGAAgHQAEk/C0j2QAwhBA7g8QC9i8DvhCQCCglCRAAQGcAAEkEjQA7A8AwBBQAjAyAlBEQA0BiAXBUQAQA9AGAoQAKBRADBTQABAeAAAfgAPUixQAOBPABBVQAAAHAAAGQAAAYgBAY");
        this.shape_76.setTransform(500.5, 459.5);

        this.timeline.addTween(cjs.Tween.get({}).to({state: []}).to({state: [{t: this.shape_25}]}, 89).to({state: [{t: this.shape_26}]}, 1).to({state: [{t: this.shape_27}]}, 1).to({state: [{t: this.shape_28}]}, 1).to({state: [{t: this.shape_29}]}, 1).to({state: [{t: this.shape_30}]}, 1).to({state: [{t: this.shape_31}]}, 1).to({state: [{t: this.shape_32}]}, 1).to({state: [{t: this.shape_33}]}, 1).to({state: [{t: this.shape_34}]}, 1).to({state: [{t: this.shape_35}]}, 1).to({state: [{t: this.shape_36}]}, 1).to({state: [{t: this.shape_37}]}, 1).to({state: [{t: this.shape_38}]}, 1).to({state: [{t: this.shape_39}]}, 1).to({state: [{t: this.shape_40}]}, 1).to({state: [{t: this.shape_41}]}, 1).to({state: [{t: this.shape_42}]}, 1).to({state: [{t: this.shape_43}]}, 1).to({state: [{t: this.shape_44}]}, 1).to({state: [{t: this.shape_45}]}, 1).to({state: [{t: this.shape_46}]}, 1).to({state: [{t: this.shape_47}]}, 1).to({state: [{t: this.shape_48}]}, 1).to({state: [{t: this.shape_49}]}, 1).to({state: [{t: this.shape_50}]}, 1).to({state: [{t: this.shape_51}]}, 1).to({state: [{t: this.shape_52}]}, 1).to({state: [{t: this.shape_53}]}, 1).to({state: [{t: this.shape_54}]}, 1).to({state: [{t: this.shape_55}]}, 1).to({state: [{t: this.shape_56}]}, 1).to({state: [{t: this.shape_57}]}, 1).to({state: [{t: this.shape_58}]}, 1).to({state: [{t: this.shape_59}]}, 1).to({state: [{t: this.shape_60}]}, 1).to({state: [{t: this.shape_61}]}, 1).to({state: [{t: this.shape_62}]}, 1).to({state: [{t: this.shape_63}]}, 1).to({state: [{t: this.shape_64}]}, 1).to({state: [{t: this.shape_65}]}, 1).to({state: [{t: this.shape_66}]}, 1).to({state: [{t: this.shape_67}]}, 1).to({state: [{t: this.shape_68}]}, 1).to({state: [{t: this.shape_69}]}, 1).to({state: [{t: this.shape_70}]}, 1).to({state: [{t: this.shape_71}]}, 1).to({state: [{t: this.shape_72}]}, 1).to({state: [{t: this.shape_73}]}, 1).to({state: [{t: this.shape_74}]}, 1).to({state: [{t: this.shape_75}]}, 1).to({state: [{t: this.shape_75}]}, 1).to({state: [{t: this.shape_75}]}, 1).to({state: [{t: this.shape_76}]}, 1).to({state: []}, 1).wait(17));

        // dot__Big
        this.instance_2 = new lib.Symbol1();
        this.instance_2.parent = this;
        this.instance_2.setTransform(400.8, 660.1, 1, 1, 0, 0, 0, 6, 6);

        this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({x: 380.1, y: 658.8}, 0).wait(1).to({
            x: 359.7,
            y: 655.2
        }, 0).wait(1).to({x: 339.9, y: 649.3}, 0).wait(1).to({x: 320.9, y: 641.2}, 0).wait(1).to({
            x: 302.8,
            y: 631.1
        }, 0).wait(1).to({x: 286, y: 619.1}, 0).wait(1).to({x: 270.5, y: 605.4}, 0).wait(1).to({
            x: 256.5,
            y: 590.1
        }, 0).wait(1).to({x: 244.2, y: 573.5}, 0).wait(1).to({x: 233.7, y: 555.7}, 0).wait(1).to({
            x: 225.1,
            y: 536.8
        }, 0).wait(1).to({x: 218.5, y: 517.3}, 0).wait(1).to({x: 213.8, y: 497.1}, 0).wait(1).to({
            x: 211,
            y: 476.6
        }, 0).wait(1).to({x: 210.2, y: 455.9}, 0).wait(1).to({x: 211.3, y: 437.2}, 0).wait(1).to({
            x: 214.5,
            y: 418.8
        }, 0).wait(1).to({x: 219.7, y: 400.8}, 0).wait(1).to({x: 226.6, y: 383.4}, 0).wait(1).to({
            x: 235.2,
            y: 366.8
        }, 0).wait(1).to({x: 245.4, y: 351.1}, 0).wait(1).to({x: 257.1, y: 336.4}, 0).wait(1).to({
            x: 270.1,
            y: 322.9
        }, 0).wait(1).to({x: 284.3, y: 310.7}, 0).wait(1).to({x: 299.6, y: 300}, 0).wait(1).to({
            x: 315.9,
            y: 290.8
        }, 0).wait(1).to({x: 333.1, y: 283.2}, 0).wait(1).to({x: 350.8, y: 277.3}, 0).wait(1).to({
            x: 369.1,
            y: 273.2
        }, 0).wait(1).to({x: 387.6, y: 270.8}, 0).wait(1).to({x: 406.4, y: 270.1}, 0).wait(1).to({
            x: 425.1,
            y: 271
        }, 0).wait(1).to({x: 443.7, y: 273.7}, 0).wait(1).to({x: 461.9, y: 278.1}, 0).wait(1).to({
            x: 479.7,
            y: 284.2
        }, 0).wait(1).to({x: 496.7, y: 292}, 0).wait(1).to({x: 513, y: 301.4}, 0).wait(1).to({
            x: 528.2,
            y: 312.4
        }, 0).wait(1).to({x: 542.2, y: 324.8}, 0).wait(1).to({x: 555.1, y: 338.5}, 0).wait(1).to({
            x: 566.5,
            y: 353.4
        }, 0).wait(1).to({x: 576.4, y: 369.4}, 0).wait(1).to({x: 584.7, y: 386.2}, 0).wait(1).to({
            x: 591.3,
            y: 403.7
        }, 0).wait(1).to({x: 596.1, y: 421.9}, 0).wait(1).to({x: 599, y: 440.4}, 0).wait(1).to({
            x: 600,
            y: 459.2
        }, 0).wait(1).to({x: 598.9, y: 478.9}, 0).wait(1).to({x: 595.8, y: 498.4}, 0).wait(1).to({
            x: 591.2,
            y: 517.6
        }, 0).wait(1).to({x: 585, y: 536.4}, 0).wait(1).to({x: 577.1, y: 554.5}, 0).wait(1).to({
            x: 567.7,
            y: 571.9
        }, 0).wait(1).to({x: 556.6, y: 588.3}, 0).wait(1).to({x: 543.9, y: 603.4}, 0).wait(1).to({
            x: 529.6,
            y: 617
        }, 0).wait(1).to({x: 513.8, y: 628.9}, 0).wait(1).to({x: 496.7, y: 638.8}, 0).wait(1).to({
            x: 478.7,
            y: 646.8
        }, 0).wait(1).to({x: 459.8, y: 652.8}, 0).wait(1).to({x: 440.5, y: 656.9}, 0).wait(1).to({
            x: 420.9,
            y: 659.3
        }, 0).wait(1).to({x: 401.1, y: 660.1}, 0).wait(1).to({x: 396.8, y: 660, alpha: 0.875}, 0).wait(1).to({
            x: 392.5,
            y: 659.8,
            alpha: 0.75
        }, 0).wait(1).to({x: 388.1, y: 659.6, alpha: 0.625}, 0).wait(1).to({
            x: 383.8,
            y: 659.3,
            alpha: 0.5
        }, 0).wait(1).to({x: 379.5, y: 659, alpha: 0.375}, 0).wait(1).to({
            x: 375.2,
            y: 658.5,
            alpha: 0.25
        }, 0).wait(1).to({x: 370.9, y: 657.7, alpha: 0.125}, 0).wait(1).to({
            x: 367,
            y: 656.4,
            alpha: 0
        }, 0).to({_off: true}, 1).wait(88));

        // Layer_3
        this.shape_77 = new cjs.Shape();
        this.shape_77.graphics.f().s("#F3F3F3").ss(1, 1, 1).p("ACGALQiGgCiFgT");
        this.shape_77.setTransform(389.4, 659);

        this.shape_78 = new cjs.Shape();
        this.shape_78.graphics.f().s("#F3F3F3").ss(1, 1, 1).p("ADiAdQjlgCjeg4");
        this.shape_78.setTransform(380.2, 657.2);

        this.shape_79 = new cjs.Shape();
        this.shape_79.graphics.f().s("#F3F3F3").ss(1, 1, 1).p("AFOBAQlXgElEh7");
        this.shape_79.setTransform(369.4, 653.7);

        this.shape_80 = new cjs.Shape();
        this.shape_80.graphics.f().s("#F3F3F3").ss(1, 1, 1).p("AGiBlQlzgFlciPQg7gYg5gc");
        this.shape_80.setTransform(361, 650.1);

        this.shape_81 = new cjs.Shape();
        this.shape_81.graphics.f().s("#F3F3F3").ss(1, 1, 1).p("AHtCOQlzgElciPQiLg6h/hO");
        this.shape_81.setTransform(353.5, 645.9);

        this.shape_82 = new cjs.Shape();
        this.shape_82.graphics.f().s("#F3F3F3").ss(1, 1, 1).p("AJYDYQlzgElciQQkGhrjaix");
        this.shape_82.setTransform(342.8, 638.5);

        this.shape_83 = new cjs.Shape();
        this.shape_83.graphics.f().s("#F3F3F3").ss(1, 1, 1).p("AKeEXQlzgElciQQlciQkQkJ");
        this.shape_83.setTransform(335.8, 632.2);

        this.shape_84 = new cjs.Shape();
        this.shape_84.graphics.f().s("#F3F3F3").ss(1, 1, 1).p("ALgFeQlzgEldiQQlciSkQkIQgQgPgPgQQg1g1gvg5");
        this.shape_84.setTransform(329.2, 625.1);

        this.shape_85 = new cjs.Shape();
        this.shape_85.graphics.f().s("#F3F3F3").ss(1, 1, 1).p("AMaGqQlzgFldiPQlciSkQkIQgQgQgPgPQh5h7hfiK");
        this.shape_85.setTransform(323.4, 617.6);

        this.shape_86 = new cjs.Shape();
        this.shape_86.graphics.f().s("#F3F3F3").ss(1, 1, 1).p("ANWINQlzgEldiQQlciSkQkIQgQgPgPgQQjMjPiEj9");
        this.shape_86.setTransform(317.4, 607.6);

        this.shape_87 = new cjs.Shape();
        this.shape_87.graphics.f().s("#F3F3F3").ss(1, 1, 1).p("AN+JhQl0gElciQQlciRkQkJQgQgQgQgQQj9kAiQlJQgJgVgJgV");
        this.shape_87.setTransform(313.4, 599.2);

        this.shape_88 = new cjs.Shape();
        this.shape_88.graphics.f().s("#F3F3F3").ss(1, 1, 1).p("AOiLNQlzgEldiQQlciSkQkJQgQgPgPgQQj+kBiPlJQg3h+gkiD");
        this.shape_88.setTransform(309.8, 588.4);

        this.shape_89 = new cjs.Shape();
        this.shape_89.graphics.f().s("#F3F3F3").ss(1, 1, 1).p("AO5M2Ql0gElciQQlciSkQkJQgQgPgQgQQj9kBiQlJQhijigmjx");
        this.shape_89.setTransform(307.5, 577.9);

        this.shape_90 = new cjs.Shape();
        this.shape_90.graphics.f().s("#F3F3F3").ss(1, 1, 1).p("APEOmQl0gElciQQlciSkQkJQgQgPgQgQQj9kCiQlIQiPlJgPlq");
        this.shape_90.setTransform(306.4, 566.7);

        this.shape_91 = new cjs.Shape();
        this.shape_91.graphics.f().s("#F3F3F3").ss(1, 1, 1).p("APEQSQlzgEldiQQlciSkQkJQgQgPgPgQQj9kCiQlIQiglvAAmWQAAhDAFhD");
        this.shape_91.setTransform(306.4, 555.9);

        this.shape_92 = new cjs.Shape();
        this.shape_92.graphics.f().s("#F3F3F3").ss(1, 1, 1).p("APERyQlzgEldiQQlciSkQkJQgQgPgPgQQj9kCiQlIQiglvAAmWQAAimAaig");
        this.shape_92.setTransform(306.4, 546.3);

        this.shape_93 = new cjs.Shape();
        this.shape_93.graphics.f().s("#F3F3F3").ss(1, 1, 1).p("APETCQlzgEldiQQlciSkQkJQgQgPgPgQQj9kCiQlJQigluAAmWQAAj7A8jr");
        this.shape_93.setTransform(306.4, 538.3);

        this.shape_94 = new cjs.Shape();
        this.shape_94.graphics.f().s("#F3F3F3").ss(1, 1, 1).p("APEScQlzgEldiQQlciSkQkJQgQgPgPgQQj9kCiQlJQigluAAmWQAAjSAqjI");
        this.shape_94.setTransform(306.4, 542.1);

        this.shape_95 = new cjs.Shape();
        this.shape_95.graphics.f().s("#F3F3F3").ss(1, 1, 1).p("APETSQlzgEldiQQlciRkQkJQgQgQgPgQQj9kCiQlIQigluAAmWQAAkNBEj6");
        this.shape_95.setTransform(306.4, 536.7);

        this.shape_96 = new cjs.Shape();
        this.shape_96.graphics.f().s("#F3F3F3").ss(1, 1, 1).p("APEUJQlzgEldiQQlciSkQkJQgQgPgPgQQj9kCiQlJQigluAAmWQAAlHBmkt");
        this.shape_96.setTransform(306.4, 531.2);

        this.shape_97 = new cjs.Shape();
        this.shape_97.graphics.f().s("#F3F3F3").ss(1, 1, 1).p("APEUwQlzgEldiQQlciRkQkJQgQgQgPgQQj9kBiQlJQigluAAmWQAAlzCClQ");
        this.shape_97.setTransform(306.4, 527.3);

        this.shape_98 = new cjs.Shape();
        this.shape_98.graphics.f().s("#F3F3F3").ss(1, 1, 1).p("APEV9QlzgEldiQQlciRkQkJQgQgQgPgQQj9kCiQlIQigluAAmWQAAmYCdlvQATgsAVgq");
        this.shape_98.setTransform(306.4, 519.6);

        this.shape_99 = new cjs.Shape();
        this.shape_99.graphics.f().s("#F3F3F3").ss(1, 1, 1).p("APEWqQlzgEldiQQlciRkQkJQgQgQgPgQQj9kCiQlIQigluAAmWQAAmYCdlvQAohbAvhV");
        this.shape_99.setTransform(306.4, 515.1);

        this.shape_100 = new cjs.Shape();
        this.shape_100.graphics.f().s("#F3F3F3").ss(1, 1, 1).p("APEXsQlzgEldiQQlciRkQkJQgQgQgPgQQj9kBiQlJQigluAAmWQAAmYCdlvQBHijBhiS");
        this.shape_100.setTransform(306.4, 508.5);

        this.shape_101 = new cjs.Shape();
        this.shape_101.graphics.f().s("#F3F3F3").ss(1, 1, 1).p("APEYqQlzgEldiQQlciRkQkKQgQgPgPgQQj9kCiQlIQiglwAAmVQAAmXCdlvQBljqCcjG");
        this.shape_101.setTransform(306.4, 502.3);

        this.shape_102 = new cjs.Shape();
        this.shape_102.graphics.f().s("#F3F3F3").ss(1, 1, 1).p("APEZgQlzgEldiQQlciRkQkJQgQgQgPgQQj9kCiQlIQiglvAAmWQAAmXCdlvQCBkrDcjx");
        this.shape_102.setTransform(306.4, 496.9);

        this.shape_103 = new cjs.Shape();
        this.shape_103.graphics.f().s("#F3F3F3").ss(1, 1, 1).p("APEaqQlzgEldiQQlciSkQkJQgQgPgPgQQj9kCiQlJQiglvAAmVQAAmYCdluQCWldESkNQAlgkAmgi");
        this.shape_103.setTransform(306.4, 489.5);

        this.shape_104 = new cjs.Shape();
        this.shape_104.graphics.f().s("#F3F3F3").ss(1, 1, 1).p("APEbhQlzgEldiQQlciRkQkJQgQgQgPgQQj9kCiQlIQiglvAAmVQAAmYCdlvQCWldESkNQBEhCBHg6QAkgdAlgb");
        this.shape_104.setTransform(306.4, 484);

        this.shape_105 = new cjs.Shape();
        this.shape_105.graphics.f().s("#F3F3F3").ss(1, 1, 1).p("APEcoQlzgEldiQQlciSkQkJQgQgPgPgQQj9kCiQlJQiglvAAmVQAAmYCdluQCWldESkNQBEhCBHg6QCLhxCdhV");
        this.shape_105.setTransform(306.4, 476.9);

        this.shape_106 = new cjs.Shape();
        this.shape_106.graphics.f().s("#F3F3F3").ss(1, 1, 1).p("APEdtQlzgEldiQQlciRkQkJQgQgQgPgQQj9kBiQlJQiglvAAmVQAAmYCdlvQCWldESkNQBEhBBHg7QDbiwEHhtQBEgcBGgY");
        this.shape_106.setTransform(306.4, 470);

        this.shape_107 = new cjs.Shape();
        this.shape_107.graphics.f().s("#F3F3F3").ss(1, 1, 1).p("AOneeQl0gElciQQlciRkQkJQgQgQgQgQQj9kCiQlIQiflvAAmWQAAmXCdlvQCWldESkNQBDhBBIg7QDaixEHhsQFniVGFAAQATAAATAA");
        this.shape_107.setTransform(309.3, 465.1);

        this.shape_108 = new cjs.Shape();
        this.shape_108.graphics.f().s("#F3F3F3").ss(1, 1, 1).p("AMzeeQl0gElciQQlciRkQkJQgQgQgQgQQj9kCiQlIQiflvAAmWQAAmXCdlvQCWldESkNQBDhBBIg7QDaixEHhsQFniVGFAAQCJAACFAS");
        this.shape_108.setTransform(320.9, 465.1);

        this.shape_109 = new cjs.Shape();
        this.shape_109.graphics.f().s("#F3F3F3").ss(1, 1, 1).p("ALneeQl0gElciQQldiRkQkJQgQgQgPgQQj9kCiQlIQiglvAAmWQAAmXCdlvQCWldESkNQBEhBBHg7QDbixEHhsQFmiVGFAAQDZAADOAu");
        this.shape_109.setTransform(328.6, 465.1);

        this.shape_110 = new cjs.Shape();
        this.shape_110.graphics.f().s("#F3F3F3").ss(1, 1, 1).p("AKXeeQl0gElbiQQldiRkQkJQgQgQgQgQQj9kCiQlIQiflvAAmWQAAmXCdlvQCWldESkNQBDhBBIg7QDaixEIhsQFmiVGFAAQEsAAEaBZ");
        this.shape_110.setTransform(336.5, 465.1);

        this.shape_111 = new cjs.Shape();
        this.shape_111.graphics.f().s("#F3F3F3").ss(1, 1, 1).p("AIzeeQl0gElciQQldiRkQkJQgQgQgPgQQj9kCiQlIQiglvAAmWQAAmXCdlvQCWldESkNQBEhBBHg7QDbixEIhsQFliVGFAAQGGAAFmCWQASAHARAI");
        this.shape_111.setTransform(346.6, 465.1);

        this.shape_112 = new cjs.Shape();
        this.shape_112.graphics.f().s("#F3F3F3").ss(1, 1, 1).p("AIJeeQlzgElciQQldiRkQkJQgQgQgPgQQj9kCiQlIQiglvAAmWQAAmXCdlvQCWldESkNQBDhBBIg7QDbixEHhsQFmiVGFAAQGFAAFnCWQA8AZA6Ac");
        this.shape_112.setTransform(350.7, 465.1);

        this.shape_113 = new cjs.Shape();
        this.shape_113.graphics.f().s("#F3F3F3").ss(1, 1, 1).p("AGaeeQlzgElciQQldiRkQkJQgQgQgQgQQj9kCiQlIQiflvAAmWQAAmXCdlvQCWldESkNQBDhBBIg7QDaixEIhsQFmiVGFAAQGFAAFmCWQC1BLCgBr");
        this.shape_113.setTransform(361.8, 465.1);

        this.shape_114 = new cjs.Shape();
        this.shape_114.graphics.f().s("#F3F3F3").ss(1, 1, 1).p("AFOeeQlygEldiQQldiRkQkJQgQgQgQgQQj9kCiQlIQiflvAAmWQAAmXCdlvQCWldESkNQBDhBBIg7QDaixEIhsQFniVGEAAQGFAAFmCWQEGBsDZCwQAHAGAHAG");
        this.shape_114.setTransform(369.4, 465.1);

        this.shape_115 = new cjs.Shape();
        this.shape_115.graphics.f().s("#F3F3F3").ss(1, 1, 1).p("AEOeeQlzgElciQQldiRkQkJQgRgQgPgQQj9kCiQlIQiflvAAmWQAAmXCdlvQCWldESkNQBDhBBIg7QDaixEIhsQFniVGEAAQGFAAFmCWQEFBsDaCwQBKA8BFBE");
        this.shape_115.setTransform(375.9, 465.1);

        this.shape_116 = new cjs.Shape();
        this.shape_116.graphics.f().s("#F3F3F3").ss(1, 1, 1).p("ADPeeQlygEldiQQldiRkQkJQgQgQgQgQQj9kCiQlIQiflvAAmWQAAmXCdlvQCWldESkNQBDhBBIg7QDaixEIhsQFniVGEAAQGFAAFmCWQEGBsDZCwQBKA8BFBEQBCBBA7BF");
        this.shape_116.setTransform(382.1, 465.1);

        this.shape_117 = new cjs.Shape();
        this.shape_117.graphics.f().s("#F3F3F3").ss(1, 1, 1).p("ACLeeQlzgElciQQleiRkQkJQgQgQgPgQQj9kCiQlIQiflvAAmWQAAmXCclvQCWldESkNQBEhBBHg7QDbixEIhsQFniVGDAAQGGAAFmCWQEFBsDaCwQBKA8BEBEQCWCSBxCr");
        this.shape_117.setTransform(389, 465.1);

        this.shape_118 = new cjs.Shape();
        this.shape_118.graphics.f().s("#F3F3F3").ss(1, 1, 1).p("ABeeeQlygEldiQQldiRkQkJQgQgQgPgQQj9kCiQlIQiglvAAmWQAAmXCdlvQCWldESkNQBDhBBIg7QDbixEHhsQFniVGEAAQGFAAFnCWQEFBsDZCwQBKA8BFBEQDVDQCKEB");
        this.shape_118.setTransform(393.4, 465.1);

        this.shape_119 = new cjs.Shape();
        this.shape_119.graphics.f().s("#F3F3F3").ss(1, 1, 1).p("AAzeeQlygEldiQQldiRkQkJQgQgQgPgQQj+kCiQlIQiflvAAmWQAAmXCdlvQCWldESkNQBDhBBIg7QDaixEIhsQFniVGEAAQGFAAFmCWQEGBsDZCwQBKA8BFBEQESEMCWFeQAGAQAHAQ");
        this.shape_119.setTransform(397.7, 465.1);

        this.shape_120 = new cjs.Shape();
        this.shape_120.graphics.f().s("#F3F3F3").ss(1, 1, 1).p("AAYeeQlzgElciQQleiRkQkJQgQgQgPgQQj9kCiQlIQiflvAAmWQAAmXCclvQCWldESkNQBEhBBHg7QDbixEIhsQFniVGDAAQGGAAFmCWQEFBsDaCwQBKA8BEBEQETEMCVFeQAdBDAYBFQAIAYAIAY");
        this.shape_120.setTransform(400.5, 465.1);

        this.shape_121 = new cjs.Shape();
        this.shape_121.graphics.f().s("#F3F3F3").ss(1, 1, 1).p("AA4eeQlygEldiQQldiRkQkJQgQgQgPgQQj+kCiPlIQiglvAAmWQAAmXCdlvQCWldESkNQBDhBBIg7QDbixEHhsQFniVGEAAQGFAAFnCWQEFBsDZCwQBKA8BFBEQESEMCWFeQABADACAE");
        this.shape_121.setTransform(397.2, 465.1);

        this.shape_122 = new cjs.Shape();
        this.shape_122.graphics.f().s("#F3F3F3").ss(1, 1, 1).p("AgNeeQlzgEldiQQldiRkQkJQgQgQgPgQQj+kCiPlIQiglvAAmWQAAmXCdlvQCWldESkNQBDhBBIg7QDbixEHhsQFniVGEAAQGFAAFnCWQEFBsDZCwQBKA8BFBEQESEMCWFeQAdBDAXBFQBCC/AZDJ");
        this.shape_122.setTransform(404.2, 465.1);

        this.shape_123 = new cjs.Shape();
        this.shape_123.graphics.f().s("#F3F3F3").ss(1, 1, 1).p("AgUeeQl0gElciQQleiRkQkJQgQgQgPgQQj9kCiQlIQiflvAAmWQAAmXCclvQCWldESkNQBEhBBHg7QDbixEIhsQFniVGEAAQGFAAFmCWQEFBsDaCwQBKA8BEBEQETEMCVFeQAdBDAYBFQBDDDAYDNQAOBVABBa");
        this.shape_123.setTransform(405, 465.1);

        this.shape_124 = new cjs.Shape();
        this.shape_124.graphics.f().s("#F3F3F3").ss(1, 1, 1).p("AgUeeQl0gElciQQleiRkQkJQgQgQgPgQQj9kCiQlIQiflvAAmWQAAmXCclvQCWldESkNQBEhBBHg7QDbixEIhsQFniVGEAAQGFAAFmCWQEFBsDaCwQBKA8BEBEQETEMCVFeQAdBDAYBFQBDDDAYDNQAPBWAABcQAAAZgBAXQgBAFAAADQgEBHgMBD");
        this.shape_124.setTransform(405, 465.1);

        this.shape_125 = new cjs.Shape();
        this.shape_125.graphics.f().s("#F3F3F3").ss(1, 1, 1).p("AgUeeQl0gElciQQleiRkQkJQgQgQgPgQQj9kCiQlIQiflvAAmWQAAmXCclvQCWldESkNQBEhBBHg7QDbixEIhsQFniVGEAAQGFAAFmCWQEFBsDaCwQBKA8BEBEQETEMCVFeQAdBDAYBFQBDDDAYDNQAPBWAABcQAAAZgBAXQgBAFAAADQgJC8hJChAeQjpQANBwABBy");
        this.shape_125.setTransform(405, 465.1);

        this.shape_126 = new cjs.Shape();
        this.shape_126.graphics.f().s("#F3F3F3").ss(1, 1, 1).p("AgUeeQl0gElciQQleiRkQkJQgQgQgPgQQj9kCiQlIQiflvAAmWQAAmXCclvQCWldESkNQBEhBBHg7QDbixEIhsQFniVGEAAQGFAAFmCWQEFBsDaCwQBKA8BEBEQETEMCVFeQAdBDAYBFQBDDDAYDNQAPBWAABcQAAAZgBAXQAAAFAAADQAABvgNBsAeQjpQANBwABBy");
        this.shape_126.setTransform(405, 465.1);

        this.shape_127 = new cjs.Shape();
        this.shape_127.graphics.f().s("#F3F3F3").ss(1, 1, 1).p("AgUeeQl0gElciQQleiRkQkJQgQgQgPgQQj9kCiQlIQiflvAAmWQAAmXCclvQCWldESkNQBEhBBHg7QDbixEIhsQFniVGEAAQGFAAFmCWQEFBsDaCwQBKA8BEBEQETEMCVFeQAdBDAYBFQBDDDAYDNQAPBWAABcQAAAZgBAXQAAAFAAADQAAEKhGD6AeQjpQANBwABBy");
        this.shape_127.setTransform(405, 465.1);

        this.shape_128 = new cjs.Shape();
        this.shape_128.graphics.f().s("#F3F3F3").ss(1, 1, 1).p("AgUeeQl0gElciQQleiRkQkJQgQgQgPgQQj9kCiQlIQiflvAAmWQAAmXCclvQCWldESkNQBEhBBHg7QDbixEIhsQFniVGEAAQGFAAFmCWQEFBsDaCwQBKA8BEBEQETEMCVFeQAdBDAYBFQBDDDAYDNQAPBWAABcQAAAZgBAXQAAAFAAADQAAGTigFvQgBABgBACAeQjpQANBwABBy");
        this.shape_128.setTransform(405, 465.1);

        this.shape_129 = new cjs.Shape();
        this.shape_129.graphics.f().s("#F3F3F3").ss(1, 1, 1).p("AgUeeQl0gElciQQleiRkQkJQgQgQgPgQQj9kCiQlIQiflvAAmWQAAmXCclvQCWldESkNQBEhBBHg7QDbixEIhsQFniVGEAAQGFAAFmCWQEFBsDaCwQBKA8BEBEQETEMCVFeQAdBDAYBFQBDDDAYDNQAPBWAABcQAAAZgBAXQAAAFAAADQAAGTigFvQgZA5gcA3AeQjpQANBwABBy");
        this.shape_129.setTransform(405, 465.1);

        this.shape_130 = new cjs.Shape();
        this.shape_130.graphics.f().s("#F3F3F3").ss(1, 1, 1).p("AgUeeQl0gElciQQleiRkQkJQgQgQgPgQQj9kCiQlIQiflvAAmWQAAmXCclvQCWldESkNQBEhBBHg7QDbixEIhsQFniVGEAAQGFAAFmCWQEFBsDaCwQBKA8BEBEQETEMCVFeQAdBDAYBFQBDDDAYDNQAPBWAABcQAAAZgBAXQAAAFAAADQAAGTigFvQg0B2hCBtAeQjpQANBwABBy");
        this.shape_130.setTransform(405, 465.1);

        this.shape_131 = new cjs.Shape();
        this.shape_131.graphics.f().s("#F3F3F3").ss(1, 1, 1).p("AgUeeQl0gElciQQleiRkQkJQgQgQgPgQQj9kCiQlIQiflvAAmWQAAmXCclvQCWldESkNQBEhBBHg7QDbixEIhsQFniVGEAAQGFAAFmCWQEFBsDaCwQBKA8BEBEQETEMCVFeQAdBDAYBFQBDDDAYDNQAPBWAABcQAAAZgBAXQAAAFAAADQAAGTigFvQhLCqhnCXAeQjpQANBwABBy");
        this.shape_131.setTransform(405, 465.1);

        this.shape_132 = new cjs.Shape();
        this.shape_132.graphics.f().s("#F3F3F3").ss(1, 1, 1).p("AgUeeQl0gElciQQleiRkQkJQgQgQgPgQQj9kCiQlIQiflvAAmWQAAmXCclvQCWldESkNQBEhBBHg7QDbixEIhsQFniVGEAAQGFAAFmCWQEFBsDaCwQBKA8BEBEQETEMCVFeQAdBDAYBFQBDDDAYDNQAPBWAABcQAAAZgBAXQAAAFAAADQAAGTigFvQhsD2ioDOAeQjpQANBwABBy");
        this.shape_132.setTransform(405, 465.1);

        this.shape_133 = new cjs.Shape();
        this.shape_133.graphics.f().s("#F3F3F3").ss(1, 1, 1).p("AgUeeQl0gElciQQleiRkQkJQgQgQgPgQQj9kCiQlIQiflvAAmWQAAmXCclvQCWldESkNQBEhBBHg7QDbixEIhsQFniVGEAAQGFAAFmCWQEFBsDaCwQBKA8BEBEQETEMCVFeQAdBDAYBFQBDDDAYDNQAPBWAABcQAAAZgBAXQAAAFAAADQAAGTigFvQiIE3jqD4AeQjpQANBwABBy");
        this.shape_133.setTransform(405, 465.1);

        this.shape_134 = new cjs.Shape();
        this.shape_134.graphics.f().s("#F3F3F3").ss(1, 1, 1).p("AgUeeQl0gElciQQleiRkQkJQgQgQgPgQQj9kCiQlIQiflvAAmWQAAmXCclvQCWldESkNQBEhBBHg7QDbixEIhsQFniVGEAAQGFAAFmCWQEFBsDaCwQBKA8BEBEQETEMCVFeQAdBDAYBFQBDDDAYDNQAPBWAABcQAAAZgBAXQAAAFAAADQAAGTigFvQiQFKj/EDQgPAPgOAPQgdAcgeAaAeQjpQANBwABBy");
        this.shape_134.setTransform(405, 465.1);

        this.shape_135 = new cjs.Shape();
        this.shape_135.graphics.f().s("#F3F3F3").ss(1, 1, 1).p("AgUeeQl0gElciQQleiRkQkJQgQgQgPgQQj9kCiQlIQiflvAAmWQAAmXCclvQCWldESkNQBEhBBHg7QDbixEIhsQFniVGEAAQGFAAFmCWQEFBsDaCwQBKA8BEBEQETEMCVFeQAdBDAYBFQBDDDAYDNQAPBWAABcQAAAZgBAXQAAAFAAADQAAGTigFvQiQFKj/EDQgKALhKBPQhEBKgQAPAeQjpQANBwABBy");
        this.shape_135.setTransform(405, 465.1);

        this.shape_136 = new cjs.Shape();
        this.shape_136.graphics.f().s("#F3F3F3").ss(1, 1, 1).p("AALeeQgGAAgFAAQl+AAlmiUQleiRkQkJQgQgQgPgQQj9kCiQlIQiflvAAmWQAAmXCclvQCWldESkNQBEhBBHg7QDbixEIhsQFniVGEAAQGFAAFmCWQEFBsDaCwQBKA8BEBEQETEMCVFeQAdBDAYBFQBDDDAYDNQAPBWAABcQAAAZgBAXQAAAFAAADQAAGTigFvQiQFKj/EDQgPAPgOAPQiJCEicBnAeQjpQANBwABBy");
        this.shape_136.setTransform(405, 465.1);

        this.shape_137 = new cjs.Shape();
        this.shape_137.graphics.f().s("#F3F3F3").ss(1, 1, 1).p("AATeeQgKAAgJAAQl+AAlmiUQleiRkQkJQgQgQgPgQQj9kCiQlIQiflvAAmWQAAmXCclvQCWldESkNQBEhBBHg7QDbixEIhsQFniVGEAAQGFAAFmCWQEFBsDaCwQBKA8BEBEQETEMCVFeQAdBDAYBFQBDDDAYDNQAPBWAABcQAAAZgBAXQAAAFAAADQAAGTigFvQiQFKj/EDQgPAPgOAPQiwCqjPB5Qg/AlhCAhAeQjpQANBwABBy");
        this.shape_137.setTransform(405, 465.1);

        this.shape_138 = new cjs.Shape();
        this.shape_138.graphics.f().s("#F3F3F3").ss(1, 1, 1).p("AAeeeQgPAAgPAAQl+AAlmiUQleiRkQkJQgQgQgPgQQj9kCiQlIQiflvAAmWQAAmXCclvQCWldESkNQBEhBBHg7QDbixEIhsQFniVGEAAQGFAAFmCWQEFBsDaCwQBKA8BEBEQETEMCVFeQAdBDAYBFQBDDDAYDNQAPBWAABcQAAAZgBAXQAAAFAAADQAAGTigFvQiQFKj/EDQgPAPgOAPQiwCqjPB5QhzBEh9A0Qg/AbhAAVAeQjpQANBwABBy");
        this.shape_138.setTransform(405, 465.1);

        this.shape_139 = new cjs.Shape();
        this.shape_139.graphics.f().s("#F3F3F3").ss(1, 1, 1).p("AeegHQAAAFAAADQAAGTigFvQiQFKj/EDQgPAPgOAPQiwCqjPB5QhzBEh9A0QllCVl+AAQl+AAlmiUQleiRkQkJQgQgQgPgQQj9kCiQlIQiflvAAmWQAAmXCclvQCWldESkNQBEhBBHg7QDbixEIhsQFniVGEAAQGFAAFmCWQEFBsDaCwQBKA8BEBEQETEMCVFeQAdBDAYBFQBDDDAYDNQAPBWAABcQAAAZgBAXgAeQjpQANBwABBy");
        this.shape_139.setTransform(405, 465.1);
        this.shape_139._off = true;

        this.timeline.addTween(cjs.Tween.get({}).to({state: []}).to({state: [{t: this.shape_77}]}, 1).to({state: [{t: this.shape_78}]}, 1).to({state: [{t: this.shape_79}]}, 1).to({state: [{t: this.shape_80}]}, 1).to({state: [{t: this.shape_81}]}, 1).to({state: [{t: this.shape_82}]}, 1).to({state: [{t: this.shape_83}]}, 1).to({state: [{t: this.shape_84}]}, 1).to({state: [{t: this.shape_85}]}, 1).to({state: [{t: this.shape_86}]}, 1).to({state: [{t: this.shape_87}]}, 1).to({state: [{t: this.shape_88}]}, 1).to({state: [{t: this.shape_89}]}, 1).to({state: [{t: this.shape_90}]}, 1).to({state: [{t: this.shape_91}]}, 1).to({state: [{t: this.shape_92}]}, 1).to({state: [{t: this.shape_93}]}, 1).to({state: [{t: this.shape_94}]}, 1).to({state: [{t: this.shape_95}]}, 1).to({state: [{t: this.shape_96}]}, 1).to({state: [{t: this.shape_97}]}, 1).to({state: [{t: this.shape_98}]}, 1).to({state: [{t: this.shape_99}]}, 1).to({state: [{t: this.shape_100}]}, 1).to({state: [{t: this.shape_101}]}, 1).to({state: [{t: this.shape_102}]}, 1).to({state: [{t: this.shape_103}]}, 1).to({state: [{t: this.shape_104}]}, 1).to({state: [{t: this.shape_105}]}, 1).to({state: [{t: this.shape_106}]}, 1).to({state: [{t: this.shape_107}]}, 1).to({state: [{t: this.shape_108}]}, 1).to({state: [{t: this.shape_109}]}, 1).to({state: [{t: this.shape_110}]}, 1).to({state: [{t: this.shape_111}]}, 1).to({state: [{t: this.shape_112}]}, 1).to({state: [{t: this.shape_113}]}, 1).to({state: [{t: this.shape_114}]}, 1).to({state: [{t: this.shape_115}]}, 1).to({state: [{t: this.shape_116}]}, 1).to({state: [{t: this.shape_117}]}, 1).to({state: [{t: this.shape_118}]}, 1).to({state: [{t: this.shape_119}]}, 1).to({state: [{t: this.shape_120}]}, 1).to({state: [{t: this.shape_121}]}, 1).to({state: [{t: this.shape_122}]}, 1).to({state: [{t: this.shape_123}]}, 1).to({state: [{t: this.shape_124}]}, 1).to({state: [{t: this.shape_125}]}, 1).to({state: [{t: this.shape_126}]}, 1).to({state: [{t: this.shape_127}]}, 1).to({state: [{t: this.shape_128}]}, 1).to({state: [{t: this.shape_129}]}, 1).to({state: [{t: this.shape_130}]}, 1).to({state: [{t: this.shape_131}]}, 1).to({state: [{t: this.shape_132}]}, 1).to({state: [{t: this.shape_133}]}, 1).to({state: [{t: this.shape_134}]}, 1).to({state: [{t: this.shape_135}]}, 1).to({state: [{t: this.shape_136}]}, 1).to({state: [{t: this.shape_137}]}, 1).to({state: [{t: this.shape_138}]}, 1).to({state: [{t: this.shape_139}]}, 1).to({state: [{t: this.shape_139}]}, 1).to({state: [{t: this.shape_139}]}, 1).to({state: [{t: this.shape_139}]}, 1).to({state: [{t: this.shape_139}]}, 1).to({state: [{t: this.shape_139}]}, 1).to({state: [{t: this.shape_139}]}, 1).to({state: []}, 1).wait(90));
        this.timeline.addTween(cjs.Tween.get(this.shape_139).wait(63).to({_off: false}, 0).wait(6).to({_off: true}, 1).wait(90));

        // line
        this.shape_140 = new cjs.Shape();
        this.shape_140.graphics.f().s("#F3F3F3").ss(1, 1, 1).p("AeegHQAAAFAAADQAAGTigFvQiQFKj/EDQgOAPgPAPQiwCqjOB5QhzBEh9A0QllCVl/AAQl+AAlmiUQldiRkQkJQgQgQgPgQQj+kCiPlIQiglvAAmWQAAmXCdlvQCWldESkNQBDhBBIg7QDaixEIhsQFniVGEAAQGFAAFnCWQEFBsDZCwQBKA8BFBEQESEMCWFeQAcBDAYBFQBDDDAYDNQAOBwAAByg");
        this.shape_140.setTransform(404.9, 465.1);

        this.shape_141 = new cjs.Shape();
        this.shape_141.graphics.f().s("#F3F3F3").ss(1, 1, 1).p("AeegHQAAAFAAADQAAGTigFvQiQFKj/EDQgOAPgPAPQiwCqjOB5QhzBEh9A0QllCVl/AAQl+AAlmiUQldiRkQkJQgQgQgPgQQj+kCiPlIQiglvAAmWQAAmXCdlvQCWldESkNQBDhBBIg7QDaixEIhsQFniVGEAAQGFAAFnCWQEFBsDZCwQBKA8BFBEQESEMCWFeQAcBDAYBFQBDDDAYDNQAOBwAABygAgoeWIAA/N");
        this.shape_141.setTransform(404.9, 465.1);

        this.shape_142 = new cjs.Shape();
        this.shape_142.graphics.f().s("#F3F3F3").ss(1, 1, 1).p("AeegHQAAAFAAADQAAGTigFvQiQFKj/EDQgPAPgOAPQiwCqjPB5QhzBEh9A0QllCVl+AAQl+AAlmiUQleiRkQkJQgQgQgPgQQj9kCiQlIQiflvAAmWQAAmXCclvQCWldESkNQBEhBBHg7QDbixEIhsQFniVGEAAQGFAAFmCWQEFBsDaCwQBKA8BEBEQETEMCVFeQAdBDAYBFQBDDDAYDNQANBwABByQgRF9kSESQkjEjmcAAQmdAAkjkjQkikjAAmcQAAlHC2j7QAwhBA8g8QC9i9DuhCQCCglCTAAQGcAAEjEkQA8A8AvBBQBXB2AuCHQAYBHANBMQAPBWAABcQAAAZgBAXgAgpeWIAA/N");
        this.shape_142.setTransform(405, 465.1);

        this.instance_3 = new lib.Symbol2();
        this.instance_3.parent = this;
        this.instance_3.setTransform(405, 465.1, 1, 1, 0, 0, 0, 195.1, 195);
        this.instance_3._off = true;

        this.timeline.addTween(cjs.Tween.get({}).to({state: []}).to({state: [{t: this.shape_140}]}, 64).to({state: [{t: this.shape_141}]}, 24).to({state: [{t: this.shape_142}]}, 54).to({state: [{t: this.instance_3}]}, 8).to({state: [{t: this.instance_3}]}, 1).to({state: [{t: this.instance_3}]}, 1).to({state: [{t: this.instance_3}]}, 1).to({state: [{t: this.instance_3}]}, 1).to({state: [{t: this.instance_3}]}, 1).to({state: [{t: this.instance_3}]}, 1).to({state: [{t: this.instance_3}]}, 1).to({state: [{t: this.instance_3}]}, 1).to({state: [{t: this.instance_3}]}, 1).wait(1));
        this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(150).to({_off: false}, 0).wait(1).to({
            scaleX: 1.03,
            scaleY: 1.03,
            alpha: 0.889
        }, 0).wait(1).to({scaleX: 1.05, scaleY: 1.05, alpha: 0.778}, 0).wait(1).to({
            scaleX: 1.08,
            scaleY: 1.08,
            y: 465,
            alpha: 0.667
        }, 0).wait(1).to({scaleX: 1.1, scaleY: 1.1, alpha: 0.556}, 0).wait(1).to({
            scaleX: 1.13,
            scaleY: 1.13,
            alpha: 0.444
        }, 0).wait(1).to({scaleX: 1.15, scaleY: 1.15, y: 465.1, alpha: 0.333}, 0).wait(1).to({
            scaleX: 1.18,
            scaleY: 1.18,
            alpha: 0.222
        }, 0).wait(1).to({scaleX: 1.21, scaleY: 1.21, alpha: 0.111}, 0).wait(1).to({
            scaleX: 1.23,
            scaleY: 1.23,
            y: 465,
            alpha: 0
        }, 0).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(394.8, 654.1, 12, 12);


// stage content:
    (lib.logo_AnimatedNew = function (mode, startPosition, loop) {
        if (loop == null) {
            loop = false;
        }
        this.initialize(mode, startPosition, loop, {});

        // timeline functions:
        this.frame_164 = function () {
            stop();
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).wait(164).call(this.frame_164).wait(1));

        // 3
        this.instance = new lib.lineDrawing();
        this.instance.parent = this;
        this.instance.setTransform(385.7, 1276.5, 1, 1, -120, 0, 0, 126.1, 111.1);

        this.timeline.addTween(cjs.Tween.get(this.instance).to({_off: true}, 160).wait(5));

        // 2
        this.instance_1 = new lib.lineDrawing();
        this.instance_1.parent = this;
        this.instance_1.setTransform(1254.6, 468.4, 1, 1, 120, 0, 0, 126.1, 111.1);

        this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off: true}, 160).wait(5));

        // 1
        this.instance_2 = new lib.lineDrawing();
        this.instance_2.parent = this;
        this.instance_2.setTransform(132.6, 109.8, 1, 1, 0, 0, 0, 126, 111);

        this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off: true}, 160).wait(5));

        // Layer_5
        this.instance_3 = new lib.Symbol3();
        this.instance_3.parent = this;
        this.instance_3.setTransform(564.2, 758.6, 0.744, 0.744, 0, 0, 0, 161.1, 106.7);
        this.instance_3.alpha = 0;
        this.instance_3._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(158).to({_off: false}, 0).wait(1).to({
            regX: 161.2,
            scaleX: 0.8,
            scaleY: 0.8,
            alpha: 0.2
        }, 0).wait(1).to({scaleX: 0.85, scaleY: 0.85, x: 564.1, alpha: 0.4}, 0).wait(1).to({
            scaleX: 0.9,
            scaleY: 0.9,
            x: 564,
            alpha: 0.6
        }, 0).wait(1).to({scaleX: 0.95, scaleY: 0.95, y: 758.7, alpha: 0.8}, 0).wait(1).to({
            scaleX: 1,
            scaleY: 1,
            x: 563.9,
            alpha: 1
        }, 0).wait(1).to({y: 757.9}, 0).wait(1));

        // Layer_4
        this.instance_4 = new lib.Symbol4();
        this.instance_4.parent = this;
        this.instance_4.setTransform(742.1, 575.2, 0.759, 0.758, 0, 0, 0, 125.4, 143.8);
        this.instance_4.alpha = 0;
        this.instance_4._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(158).to({_off: false}, 0).wait(1).to({
            regX: 125.1,
            regY: 143.7,
            scaleX: 0.81,
            scaleY: 0.81,
            x: 741.8,
            y: 575,
            alpha: 0.2
        }, 0).wait(1).to({scaleX: 0.86, scaleY: 0.86, x: 741.7, y: 574.8, alpha: 0.4}, 0).wait(1).to({
            scaleX: 0.9,
            scaleY: 0.9,
            y: 574.7,
            alpha: 0.6
        }, 0).wait(1).to({scaleX: 0.95, scaleY: 0.95, x: 741.6, y: 574.5, alpha: 0.8}, 0).wait(1).to({
            scaleX: 1,
            scaleY: 1,
            y: 574.4,
            alpha: 1
        }, 0).wait(2));

        // Layer_1
        this.instance_5 = new lib.Symbol5();
        this.instance_5.parent = this;
        this.instance_5.setTransform(506.4, 510.2, 0.854, 0.854, 0, 0, 0, 99.5, 150.3);
        this.instance_5.alpha = 0;
        this.instance_5._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(158).to({_off: false}, 0).wait(1).to({
            regY: 150.1,
            scaleX: 0.88,
            scaleY: 0.88,
            y: 510,
            alpha: 0.2
        }, 0).wait(1).to({scaleX: 0.91, scaleY: 0.91, y: 509.9, alpha: 0.4}, 0).wait(1).to({
            scaleX: 0.94,
            scaleY: 0.94,
            alpha: 0.6
        }, 0).wait(1).to({scaleX: 0.97, scaleY: 0.97, y: 509.8, alpha: 0.8}, 0).wait(1).to({
            scaleX: 1,
            scaleY: 1,
            alpha: 1
        }, 0).wait(2));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(816, 865.8, 859.8, 859.4);
// library properties:
    lib.properties = {
        id: '9F80377A5F2EF84D84ACA8B9BD4BCE41',
        width: 1200,
        height: 1200,
        fps: 24,
        color: "#FFFFFF",
        opacity: 1.00,
        manifest: [],
        preloads: []
    };


// bootstrap callback support:

    (lib.Stage = function (canvas) {
        createjs.Stage.call(this, canvas);
    }).prototype = p = new createjs.Stage();

    p.setAutoPlay = function (autoPlay) {
        this.tickEnabled = autoPlay;
    }
    p.play = function () {
        this.tickEnabled = true;
        this.getChildAt(0).gotoAndPlay(this.getTimelinePosition())
    }
    p.stop = function (ms) {
        if (ms) this.seek(ms);
        this.tickEnabled = false;
    }
    p.seek = function (ms) {
        this.tickEnabled = true;
        this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000);
    }
    p.getDuration = function () {
        return this.getChildAt(0).totalFrames / lib.properties.fps * 1000;
    }

    p.getTimelinePosition = function () {
        return this.getChildAt(0).currentFrame / lib.properties.fps * 1000;
    }

    an.bootcompsLoaded = an.bootcompsLoaded || [];
    if (!an.bootstrapListeners) {
        an.bootstrapListeners = [];
    }

    an.bootstrapCallback = function (fnCallback) {
        an.bootstrapListeners.push(fnCallback);
        if (an.bootcompsLoaded.length > 0) {
            for (var i = 0; i < an.bootcompsLoaded.length; ++i) {
                fnCallback(an.bootcompsLoaded[i]);
            }
        }
    };

    an.compositions = an.compositions || {};
    an.compositions['9F80377A5F2EF84D84ACA8B9BD4BCE41'] = {
        getStage: function () {
            return exportRoot.getStage();
        },
        getLibrary: function () {
            return lib;
        },
        getSpriteSheet: function () {
            return ss;
        },
        getImages: function () {
            return img;
        }
    };

    an.compositionLoaded = function (id) {
        an.bootcompsLoaded.push(id);
        for (var j = 0; j < an.bootstrapListeners.length; j++) {
            an.bootstrapListeners[j](id);
        }
    }

    an.getComposition = function (id) {
        return an.compositions[id];
    }


})(createjs = createjs || {}, AdobeAn = AdobeAn || {});
var createjs, AdobeAn;