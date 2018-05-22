(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [
		{name:"frogi_atlas_", frames: [[0,0,200,350],[202,252,280,250],[202,0,280,250],[252,504,200,220],[0,504,250,250]]}
];


// symbols:



(lib.frog1 = function() {
	this.spriteSheet = ss["frogi_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.frog2 = function() {
	this.spriteSheet = ss["frogi_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.frog3 = function() {
	this.spriteSheet = ss["frogi_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.frog5 = function() {
	this.spriteSheet = ss["frogi_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.logo = function() {
	this.spriteSheet = ss["frogi_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Анимация31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.text = new cjs.Text("Ох, объедался бы здесь ежедневно!", "30px 'Calibri'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 39;
	this.text.lineWidth = 216;
	this.text.parent = this;
	this.text.setTransform(-60.1,-61.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#F7F7F7").ss(1,1,1).p("AiUwUQENBHDdCcQGXEfAAGXQAAAbgBAbAQYQVQDkg8EHAAQEIAADkA8A/shFQgCgbAAgbQAAmXGXkfQDdicEPhH");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AvWK1QmXkfAAmWQAAgbACgaQAal0F7kLQGXkfI/AAQJAAAGXEfQF8ELAZF0QACAaAAAbQAAGWmXEfQmXEfpAAAQo/AAmXkfg");
	this.shape_1.setTransform(-64,6.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-204,-105.4,408.2,210.9);


(lib.Анимация30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.text = new cjs.Text("Ох, объедался бы здесь ежедневно!", "30px 'Calibri'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 39;
	this.text.lineWidth = 216;
	this.text.parent = this;
	this.text.setTransform(-60.1,-61.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#F7F7F7").ss(1,1,1).p("A/shFQgCgbAAgcQAAmWGXkfQDdicEPhHAiUwUQENBHDdCcQGXEfAAGWQAAAcgBAbAQYQVQDkg9EHAAQEIAADkA9");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AvWK1QmXkfAAmWQAAgbACgaQAZl0F8kLQGXkfI/AAQJAAAGXEfQF7ELAaF0QACAaAAAbQAAGWmXEfQmXEfpAAAQo/AAmXkfg");
	this.shape_1.setTransform(-64,6.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-204,-105.4,408.2,210.9);


(lib.Анимация29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.frog5();
	this.instance.parent = this;
	this.instance.setTransform(-100,-110);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-100,-110,200,220);


(lib.Анимация28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.frog5();
	this.instance.parent = this;
	this.instance.setTransform(-100,-110);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-100,-110,200,220);


(lib.Анимация27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.text = new cjs.Text("Так вкусно, что сейчас станцую!", "30px 'Calibri'", "#F7F7F7");
	this.text.textAlign = "center";
	this.text.lineHeight = 39;
	this.text.lineWidth = 174;
	this.text.parent = this;
	this.text.setTransform(6,-58.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#F7F7F7").ss(1,1,1).p("AYsAAQAAGBnPERQnOEQqPAAQqOAAnPkQQnOkRAAmBQAAmAHOkRQHPkQKOAAQKPAAHOEQQHPERAAGAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AxcKSQnPkRAAmBQAAmAHPkQQHPkRKNAAQKPAAHOERQHPEQAAGAQAAGBnPERQnOEQqPAAQqNAAnPkQg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-159,-94,318,188);


(lib.Анимация26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.text = new cjs.Text("Так вкусно, что сейчас станцую!", "30px 'Calibri'", "#F7F7F7");
	this.text.textAlign = "center";
	this.text.lineHeight = 39;
	this.text.lineWidth = 174;
	this.text.parent = this;
	this.text.setTransform(6,-58.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#F7F7F7").ss(1,1,1).p("AYsAAQAAGBnPERQnOEQqPAAQqOAAnPkQQnOkRAAmBQAAmAHOkRQHPkQKOAAQKPAAHOEQQHPERAAGAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AxcKRQnPkQAAmBQAAmAHPkRQHPkQKNAAQKOAAHPEQQHPERAAGAQAAGBnPEQQnPERqOAAQqNAAnPkRg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-159,-94,318,188);


(lib.Анимация25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.text = new cjs.Text("Так вкусно, что сейчас станцую!", "30px 'Calibri'", "#F7F7F7");
	this.text.textAlign = "center";
	this.text.lineHeight = 39;
	this.text.lineWidth = 174;
	this.text.parent = this;
	this.text.setTransform(6,-58.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#F7F7F7").ss(1,1,1).p("AYsAAQAAGBnPERQnOEQqPAAQqOAAnPkQQnOkRAAmBQAAmAHOkRQHPkQKOAAQKPAAHOEQQHPERAAGAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AxdKRQnOkQAAmBQAAmAHOkRQHPkQKOAAQKOAAHPEQQHPERAAGAQAAGBnPEQQnPERqOAAQqOAAnPkRg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-159,-94,318,188);


(lib.Анимация24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.text = new cjs.Text("Так вкусно, что сейчас станцую!", "30px 'Calibri'", "#F7F7F7");
	this.text.textAlign = "center";
	this.text.lineHeight = 39;
	this.text.lineWidth = 174;
	this.text.parent = this;
	this.text.setTransform(6,-58.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#F7F7F7").ss(1,1,1).p("AYsAAQAAGBnPERQnOEQqPAAQqNAAnQkQQnOkRAAmBQAAmAHOkRQHQkQKNAAQKPAAHOEQQHPERAAGAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AxcKSQnPkRAAmBQAAmAHPkQQHPkRKNAAQKPAAHOERQHPEQAAGAQAAGBnPERQnOEQqPAAQqNAAnPkQg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-159,-94,318,188);


(lib.Анимация23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.text = new cjs.Text("Так вкусно, что сейчас станцую!", "30px 'Calibri'", "#F7F7F7");
	this.text.textAlign = "center";
	this.text.lineHeight = 39;
	this.text.lineWidth = 174;
	this.text.parent = this;
	this.text.setTransform(6,-58.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#F7F7F7").ss(1,1,1).p("AYsAAQAAGBnPERQnOEQqPAAQqNAAnQkQQnOkRAAmBQAAmAHOkRQHQkQKNAAQKPAAHOEQQHPERAAGAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AxcKSQnPkRAAmBQAAmAHPkQQHPkRKNAAQKPAAHOERQHPEQAAGAQAAGBnPERQnOEQqPAAQqNAAnPkQg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-159,-94,318,188);


(lib.Анимация22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.text = new cjs.Text("Так вкусно, что сейчас станцую!", "30px 'Calibri'", "#F7F7F7");
	this.text.textAlign = "center";
	this.text.lineHeight = 39;
	this.text.lineWidth = 174;
	this.text.parent = this;
	this.text.setTransform(6,-58.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#F7F7F7").ss(1,1,1).p("AYsAAQAAGBnPERQnPEQqOAAQqNAAnQkQQnOkRAAmBQAAmAHOkRQHQkQKNAAQKOAAHPEQQHPERAAGAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AxcKRQnPkQAAmBQAAmAHPkRQHPkQKNAAQKPAAHOEQQHPERAAGAQAAGBnPEQQnOERqPAAQqNAAnPkRg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-159,-94,318,188);


(lib.Анимация21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.frog2();
	this.instance.parent = this;
	this.instance.setTransform(-140,-125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-140,-125,280,250);


(lib.Анимация20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.frog2();
	this.instance.parent = this;
	this.instance.setTransform(-140,-125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-140,-125,280,250);


(lib.Анимация19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.frog2();
	this.instance.parent = this;
	this.instance.setTransform(-140,-125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-140,-125,280,250);


(lib.Анимация18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.frog2();
	this.instance.parent = this;
	this.instance.setTransform(-140,-125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-140,-125,280,250);


(lib.Анимация17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.frog2();
	this.instance.parent = this;
	this.instance.setTransform(-140,-125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-140,-125,280,250);


(lib.Анимация16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.frog2();
	this.instance.parent = this;
	this.instance.setTransform(-140,-125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-140,-125,280,250);


(lib.Анимация15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.frog2();
	this.instance.parent = this;
	this.instance.setTransform(-140,-125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-140,-125,280,250);


(lib.Анимация14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.frog2();
	this.instance.parent = this;
	this.instance.setTransform(-140,-125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-140,-125,280,250);


(lib.Анимация13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.frog2();
	this.instance.parent = this;
	this.instance.setTransform(-140,-125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-140,-125,280,250);


(lib.Анимация12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.frog2();
	this.instance.parent = this;
	this.instance.setTransform(-140,-125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-140,-125,280,250);


(lib.Анимация11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.frog2();
	this.instance.parent = this;
	this.instance.setTransform(-140,-125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-140,-125,280,250);


(lib.Анимация10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B3B34E").s().p("AgGBlQgDgBgCgCIgDgFIAAgIIAAgIIADgGQACgBADgBIAGgBIAIABQACABACABQACACABAEIAAAIIAAAIQgBADgCACQgCACgCABIgIABIgGgBgAAAAyIgEAAIgDgBIgCgBIgBgDIgCiKIAAgDIACgDIAFgBIAFgBIAHABIAEABIACADIAAADIgCCKIgBADIgBABIgEABIgFAAg");
	this.shape.setTransform(115.6,26.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B3B34E").s().p("AAoBGIgEgBIgCgBIAAgCIAAg6IhDAAIAAA6IAAACIgCABIgEABIgGAAIgGAAIgDgBIgCgBIgBgCIAAiDIABgCIACgBIADgBIAGgBIAGABIAEABIACABIAAACIAAA2IBDAAIAAg2IAAgCIACgBIAEgBIAGgBIAGABIADABIACABIABACIAACDIgBACIgCABIgDABIgGAAIgGAAg");
	this.shape_1.setTransform(102.1,29.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#B3B34E").s().p("AgaBGQgJgDgGgGQgFgEgEgIQgDgHAAgKQAAgLAEgIQAFgIAJgFQAIgFANgDQAMgCAOAAIASAAIAAgLQAAgHgBgHQgCgFgEgEQgDgEgGgCQgGgCgIAAQgIAAgHACIgNAFIgJAFIgEACIgDgBIgCgBIgBgEIAAgDIABgHIADgDIAGgFIAMgEQAFgDAIgBIAOgCQAOAAALAEQAJADAGAGQAHAHACAIQADAKAAAMIAABYIgBADIgDABIgGAAIgGAAIgEgBIgBgDIAAgNQgIAJgLAFQgKAGgLgBQgKAAgJgCgAgGAHQgIACgFAEQgEACgDAGQgDAEAAAGQABAKAGAHQAHAFALAAQAJAAAIgEQAIgGAJgJIAAgcIgUAAQgKAAgGABg");
	this.shape_2.setTransform(86.5,29.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#B3B34E").s().p("Ag1BhIgEgBIgCgBIgBgCIAAi3IABgCIABgCIAEAAIAFgBIAFABIADAAIACACIAAACIAAARIAMgKIAMgIQAFgDAGgBQAFgCAHAAQAOAAAKAGQAKAFAGAKQAHAKADANQADAMAAAPQAAARgEANQgEANgHAKQgHAKgLAFQgKAFgPAAQgFAAgFgBIgJgEQgFgCgEgEIgKgJIAABCIgBACIgCABIgEABIgGABIgFgBgAgGhLIgJAFQgFADgEAFIgLAMIAAAzQAKAMAJAHQAJAGAIAAQAKAAAGgEQAHgFAEgHQAEgHACgIQACgJAAgKQgBgKgBgJQgBgKgEgHQgEgHgGgFQgHgEgJAAQgEAAgFABg");
	this.shape_3.setTransform(72.3,32);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#B3B34E").s().p("AgcBEQgNgGgIgJQgIgJgEgNQgEgNAAgRQAAgPAFgOQADgNAJgKQAJgJAMgGQANgFAPgBQAQABANAEQAMAFAIAJQAIAKAEANQAEANAAAQQAAAPgEAOQgFANgIAKQgJALgMAFQgMAGgQgBQgRAAgLgEgAgRgvQgIADgFAHQgFAHgCAKQgDAJAAALQAAAKADAKQABAKAFAGQAEAIAJAEQAHAEALAAQAKAAAJgEQAHgDAFgIQAFgGACgKQADgKAAgLQAAgKgCgJQgCgKgFgHQgEgHgIgEQgIgFgLAAQgKABgIAEg");
	this.shape_4.setTransform(56.1,29.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#B3B34E").s().p("AgFBGIgEgBIgCgBIAAgCIAAhxIgnAAIgCgBIgCgCIgBgDIgBgFIABgFIABgDIACgCIACgBIBlAAIADABIACACIABADIAAAFIAAAFIgBADIgCACIgDABIgnAAIAABxIAAACIgCABIgEABIgGAAIgFAAg");
	this.shape_5.setTransform(42.8,29.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#B3B34E").s().p("AgSBEQgKgFgIgJQgHgJgEgNQgEgNAAgSQAAgSAFgOQAFgOAIgJQAJgJALgEQAKgEAMgBIANABIALAEIAJAEIAFAFIADACIABACIABAEIAAAEIgBAIQgBABAAAAQgBABAAAAQgBAAAAAAQAAAAgBAAQgCABgDgDIgHgGIgLgEQgGgDgJAAQgQAAgJANQgKAOAAAYQABANACAKQACAJAFAHQAEAGAIAEQAFACAJAAQAIAAAHgCIAKgGIAIgGQADgDACAAIACABIACACIAAAEIAAAFIAAAEIAAADIgBACIgCADIgHAFIgJAFIgNADQgGABgHAAQgOAAgLgEg");
	this.shape_6.setTransform(30.8,29.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#B3B34E").s().p("AgWBEQgMgFgJgJQgIgIgEgOQgFgNAAgTQAAgQAFgNQAEgNAJgKQAIgKALgEQAMgGAOAAQAPAAALAGQALAEAHAJQAHAIADALQAEAMAAANIAAAEQAAAFgDADQgDACgEAAIhWAAQAAAKADAKQACAIAFAHQAFAGAIAEQAJACAKAAQAKABAHgCIANgDIAJgEIAFgBIACAAIABABIABAEIAAAEIAAADIAAADIgBACIgBABIgFADIgKAEIgPADQgIABgKAAQgPAAgMgEgAgNgxQgHADgFAGQgEAFgDAHQgCAIgBAIIBHAAQABgTgJgLQgJgLgSAAQgIAAgGAEg");
	this.shape_7.setTransform(16.7,29.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#B3B34E").s().p("Ag2BhIgDgBIgCgBIgBgCIAAi3IABgCIACgCIADAAIAFgBIAFABIADAAIACACIABACIAAARIALgKIALgIQAGgDAGgBQAFgCAHAAQAOAAAKAGQAKAFAGAKQAHAKADANQACAMABAPQgBARgDANQgEANgHAKQgIAKgKAFQgLAFgOAAQgEAAgGgBIgJgEQgFgCgFgEIgKgJIAABCIAAACIgCABIgEABIgFABIgHgBgAgGhLIgJAFQgEADgGAFIgLAMIAAAzQAKAMAJAHQAJAGAJAAQAKAAAGgEQAHgFADgHQAFgHACgIQABgJABgKQgBgKgBgJQgCgKgDgHQgEgHgHgFQgFgEgKAAQgEAAgFABg");
	this.shape_8.setTransform(1.9,32);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#B3B34E").s().p("AApBmIgEgBIgCgCIgBgCIAAhLIAAgMIABgLIgHALIgIALIg3BMIgCACIgCACIgDABIgFAAIgFAAIgDgBIgCgCIAAgCIAAiDIAAgCIACgBIADAAIAGgBIAKABQABAAAAABQABAAAAAAQAAABAAAAQAAABAAAAIAABMIAAALIgBALIAHgLIAIgKIA3hNIACgCIADgBIADAAIAFgBIAFABIAEAAIACABIAAACIAACDIgBACIgBACIgFABIgGAAIgFAAgAgSg6QgIgDgFgFQgHgGgCgHQgDgIAAgJIAAgCIADgCIADgBIAGAAIAFAAIAEABIABACIAAADQAAAFABAEQACADADADQADAEAEABQAEACAFAAQAFAAAEgCQAFgBACgEQADgCACgEQABgFABgEIAAgDIABgCIADgBIAGAAIAGAAIADABIACACIABACQAAAJgDAHQgCAHgGAGQgFAFgIAEQgJACgMAAQgKAAgJgCg");
	this.shape_9.setTransform(-21.3,26.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#B3B34E").s().p("AApBGIgEAAIgCgCIgBgCIAAhLIAAgLIABgMIgHAMIgIAKIg3BMIgCACIgCACIgDAAIgFAAIgFAAIgDAAIgCgCIAAgCIAAiDIAAgCIACgBIADgBIAGgBIAKACQABAAAAAAQABAAAAABQAAAAAAABQAAAAAAABIAABLIAAAMIgBALIAHgLIAIgKIA3hNIACgCIADgBIADgBIAFgBIAFABIAEABIACABIAAACIAACDIgBACIgBACIgFAAIgGAAIgFAAg");
	this.shape_10.setTransform(-37.5,29.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#B3B34E").s().p("AAjBGIgEAAIgCgCIgBgCIgOgiIgGgLQgDgFgEgDQgDgDgFgCIgLgBIgLAAIAAA8IAAABIgDACIgDAAIgGAAIgFAAIgEAAIgCgCIgBgBIAAiFIABgBIACgBIAEgBIAFgBIAGABIADABIADABIAAABIAAA3IALAAIAKgBIAIgEIAGgHQADgFACgHIANgeIABgCIACgBIAEgBIAGgBIAGABIAEABIABABIABABIgBACIgBAEIgMAdQgDAIgEAEIgHAJIgHAFIgHADIAAAAIAKADIAIAGIAHAJIAGALIAOAiIABACIAAABIABACIAAABIgBACIgCABIgDAAIgGAAIgHAAg");
	this.shape_11.setTransform(-51.9,29.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#B3B34E").s().p("AgRBEQgMgFgGgJQgIgJgEgNQgEgNAAgSQAAgSAFgOQAFgOAIgJQAJgJAKgEQALgEAMgBIANABIALAEIAJAEIAFAFIADACIABACIABAEIAAAEIgBAIQgBABAAAAQgBABAAAAQgBAAAAAAQAAAAgBAAQgCABgDgDIgHgGIgLgEQgGgDgJAAQgQAAgJANQgKAOAAAYQABANACAKQACAJAFAHQAFAGAGAEQAGACAJAAQAIAAAHgCIALgGIAIgGQADgDABAAIACABIACACIAAAEIAAAFIAAAEIAAADIgBACIgDADIgGAFIgJAFIgNADQgGABgHAAQgNAAgLgEg");
	this.shape_12.setTransform(-65.7,29.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#B3B34E").s().p("AAoBGIgEgBIgCgBIAAgCIAAg6IhDAAIAAA6IAAACIgCABIgEABIgGAAIgGAAIgDgBIgCgBIgBgCIAAiDIABgCIACgBIADgBIAGgBIAGABIAEABIACABIAAACIAAA2IBDAAIAAg2IAAgCIACgBIAEgBIAGgBIAGABIADABIACABIABACIAACDIgBACIgCABIgDABIgGAAIgGAAg");
	this.shape_13.setTransform(-80.3,29.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#B3B34E").s().p("AgdBEQgMgGgIgJQgIgJgEgNQgEgNAAgRQAAgPAFgOQADgNAJgKQAIgJANgGQANgFAQgBQAQABAMAEQAMAFAIAJQAIAKAEANQAEANAAAQQAAAPgEAOQgFANgIAKQgJALgMAFQgMAGgRgBQgQAAgMgEgAgRgvQgIADgFAHQgFAHgDAKQgCAJAAALQAAAKACAKQACAKAFAGQAFAIAHAEQAIAEALAAQAKAAAJgEQAHgDAFgIQAGgGACgKQACgKAAgLQAAgKgCgJQgCgKgFgHQgEgHgIgEQgIgFgLAAQgKABgIAEg");
	this.shape_14.setTransform(-96.2,29.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#B3B34E").s().p("AAlBGIgDgBIgCgBIAAgCIAAhzIg+AAIAABzIgBACIgCABIgEABIgGAAIgFAAIgEgBIgCgBIgBgCIAAh+QAAgFACgCQACgCAEAAIBgAAQADAAACACQABACAAAFIAAB+IAAACIgCABIgDABIgHAAIgGAAg");
	this.shape_15.setTransform(-111.9,29.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#B3B34E").s().p("AAmBHIgEgBIgCgCIgBgCIAAg3IgNAAQgJAAgGABQgDACgFAEQgDADgEAFIgGANIgKAaIgCADIgDACIgEABIgGAAIgFAAIgEAAIgCgCIgBgCIABgDIADgIIALgZQAEgKAGgGQAGgHAIgDQgOgDgJgIQgJgJAAgOQABgJAEgHQAEgJAHgFQAIgFALgDQAMgDANAAIAIAAIAJABIAKAAIAIABQAFABACACQACADAAAEIAAB8IgBACIgBACIgEABIgGAAIgGAAgAgFgyQgHACgEADQgEADgCAEQgBAFAAAEQAAAGACAEQACAFAEACQAEADAGACQAFABALAAIAUAAIAAgtIgKAAIgLAAQgKgBgFACg");
	this.shape_16.setTransform(-127.5,29.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#B3B34E").s().p("AApBmIgEgBIgCgCIgBgCIAAhLIAAgMIABgLIgHALIgIALIg3BMIgCACIgCACIgDABIgFAAIgFAAIgDgBIgCgCIgBgCIAAiCIABgDIACgBIAEgBIAFAAIAKABQABAAAAABQABAAAAAAQAAABAAAAQABABAAABIAABKIAAAMIgBALIAGgLIAIgKIA3hMIADgDIACgBIADgBIAFAAIAFAAIAEABIACABIAAADIAACCIgBACIgBACIgFABIgFAAIgGAAgAgSg6QgIgDgFgFQgGgFgDgIQgDgIAAgJIABgCIACgCIADgBIAGAAIAFAAIAEABIABACIAAADQAAAFABAEQACADADADQADAEAEABQAFACAEAAQAGAAAEgCQAEgBACgEQAEgDABgDQACgEgBgFIABgDIABgCIAEgBIAFAAIAGAAIADABIADACIAAACQAAAIgDAIQgCAHgGAGQgFAFgIAEQgJACgMAAQgKAAgJgCg");
	this.shape_17.setTransform(26.1,-12.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#B3B34E").s().p("AgpBHIgIAAIgIgBIgIAAQgFgBgEgDQgCgEAAgGIAAh6IAAgCIACgBIADgBIAGAAIAKABQABAAAAAAQABABAAAAQAAABAAAAQAAABAAAAIAAAvIAMgBIALAAQAQAAALADQAKADAHAGQAIAGADAHQAEAIAAAKQAAAKgEAJQgEAJgHAGQgIAHgLAEQgMADgRAAIgHAAgAgqAAIgLAAIAAAyIALABIAMABQASAAAIgHQAIgIAAgMQAAgGgCgFQgCgFgDgDQgEgEgHgCQgHgBgKAAIgLABgAA7BFIgDgBIgCgBIgBgCIAAiDIABgCIACgBIADgBIAGAAIAGAAIAEABIACABIABACIAACDIgBACIgCABIgEABIgGABIgGgBg");
	this.shape_18.setTransform(8,-9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#B3B34E").s().p("AgQBIIgJgBIgJAAIgIgBQgFgBgEgDQgCgDAAgGIAAhxQAAgGACgDQADgDAGgBIAIgBIAJAAIAJAAIAKgBQAOAAAKADQAKACAHAFQAHAEADAHQAEAGgBAJQAAALgFAIQgHAIgLADQAOADAIAIQAHAJAAANQAAALgEAIQgDAIgJAFQgHAGgMADQgLADgPAAIgJAAgAgeA0IAGAAIAHABIAFAAIAGAAQAJAAAHgBQAGgCAFgDQAFgDACgFQABgFAAgFQAAgGgBgFQgCgEgFgDQgFgDgGgCIgQgBIgYAAgAgegzIAAApIAZAAQAOAAAIgGQAIgGAAgKQAAgFgCgEQgCgEgDgCQgFgDgGgBIgOgBIgNAAIgKABg");
	this.shape_19.setTransform(-8.7,-9.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#B3B34E").s().p("AgcBEQgNgFgIgKQgIgJgEgNQgEgNAAgRQAAgPAEgOQAFgNAIgKQAJgKAMgFQAMgGAQAAQAQAAANAFQAMAFAIAJQAIAKAEANQAEANAAAQQAAAPgEAOQgEANgJAKQgJALgMAFQgNAGgPgBQgQAAgMgEgAgRgwQgIAEgFAHQgFAHgCAJQgDAKAAALQAAAKADAKQABAKAFAGQAEAIAJAEQAHAEALAAQALAAAHgEQAIgEAFgGQAFgIACgJQADgJAAgMQAAgKgCgJQgCgKgEgHQgFgHgIgEQgIgFgMABQgKAAgHADg");
	this.shape_20.setTransform(-24.2,-9.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#B3B34E").s().p("AAoBGIgEgBIgCgBIAAgCIAAg6IhDAAIAAA6IAAACIgCABIgEABIgGAAIgGAAIgDgBIgCgBIgBgCIAAiDIABgCIACgBIADgBIAGAAIAGAAIAEABIACABIAAACIAAA1IBDAAIAAg1IAAgCIACgBIAEgBIAGAAIAGAAIADABIACABIABACIAACDIgBACIgCABIgDABIgGAAIgGAAg");
	this.shape_21.setTransform(-40.2,-9.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#B3B34E").s().p("AAmBHIgEgBIgCgBIAAgDIAAg3IgPAAQgJAAgFABQgDACgFAEQgDADgDAFIgHANIgKAaIgCADIgDACIgEABIgHAAIgEAAIgEAAIgCgCIgBgCIABgDIADgIIALgZQAEgJAGgHQAGgHAHgDQgNgDgJgIQgJgIABgOQAAgKADgHQAEgJAIgFQAIgFALgDQAMgDANAAIAIAAIAJAAIAKABIAIABQAEABADACQACADAAAEIAAB8IgBADIgBABIgEABIgGAAIgGAAgAgFgyQgGACgFADQgEADgBAFQgCADAAAGQAAAFACAEQACAFAEACQAEADAGABQAGACAKAAIAVAAIAAgtIgLgBIgLAAQgKABgFABg");
	this.shape_22.setTransform(74.3,-47.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#B3B34E").s().p("AgSBDQgKgEgIgJQgHgJgEgNQgEgNAAgRQAAgTAFgOQAFgOAIgJQAJgJAKgEQALgFAMAAIANACIALADIAJAEIAFAFIADACIABACIABAEIAAAEIgBAIQgBABAAAAQgBABAAAAQgBAAAAAAQAAAAgBAAQgCAAgDgCIgHgFIgLgGQgGgCgJAAQgQAAgJANQgKANAAAZQABANACAJQACAKAFAHQAFAGAGAEQAGACAJAAQAIAAAHgCIAKgGIAJgFQADgEABAAIACABIACADIAAADIAAAFIAAAEIAAADIgBADIgDACIgGAFIgJAEIgNAEQgGACgHAAQgNgBgMgFg");
	this.shape_23.setTransform(61.7,-47.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#B3B34E").s().p("Ag8BGIgBgBIgBgEIgBgFIABgGIAAgDIACgCIACgBQAFAAAEgCQAEgCAEgFQAEgFADgJQAEgIACgNIAGgbIAEgmQABgFACgCQABgCAEAAIBCAAQAEAAACACQACACAAAFIAAB+IgBACIgCABIgDABIgGAAIgGAAIgEgBIgCgBIAAgCIAAhzIglAAIgEAqQgEARgEAOQgEANgFAJQgFAJgGAGQgGAGgHACQgHADgJAAIgCgBg");
	this.shape_24.setTransform(46.6,-47.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#B3B34E").s().p("AgqBHIgIAAIgHgBIgIAAQgFgBgEgDQgDgEAAgGIAAh6IABgCIACgBIAEgBIAFAAIAKABQABAAAAAAQABABAAAAQAAABAAAAQABABAAAAIAAAvIAKgBIAMAAQAQAAALADQALADAGAGQAIAGADAHQADAIABAKQgBAKgDAJQgEAJgHAGQgIAHgLAEQgMADgRAAIgIAAgAgqAAIgKAAIAAAyIAKABIAMABQARAAAJgHQAHgIAAgMQAAgGgBgFQgCgFgEgDQgDgEgHgCQgIgBgKAAIgKABgAA7BFIgDgBIgCgBIgBgCIAAiDIABgCIACgBIADgBIAGAAIAGAAIAEABIACABIAAACIAACDIAAACIgCABIgEABIgGABIgGgBg");
	this.shape_25.setTransform(29.9,-47.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#B3B34E").s().p("Ag1BhIgEgBIgCgBIgBgCIAAi3IABgCIABgCIAEAAIAFgBIAFABIADAAIACACIAAACIAAARIAMgKIAMgIQAFgDAGgBQAFgCAHAAQAOAAAKAGQAKAFAGAKQAHAKADANQADAMAAAPQAAARgEANQgEANgHAKQgHAKgLAFQgKAFgPAAQgFAAgFgBIgJgEQgFgCgEgEIgKgJIAABCIgBACIgCABIgEABIgGABIgFgBgAgGhLIgJAFQgFADgFAFIgKAMIAAAzQAKAMAJAHQAJAGAIAAQAKAAAGgEQAHgFAEgHQAEgHACgIQACgJAAgKQgBgKgBgJQgBgKgEgHQgEgHgGgFQgHgEgJAAQgEAAgFABg");
	this.shape_26.setTransform(12.5,-45.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#B3B34E").s().p("AAjBGIgEgBIgCgBIgBgCIgOgiIgGgLQgDgFgEgDQgDgDgFgCIgLgBIgLAAIAAA8IAAABIgDABIgDABIgGAAIgFAAIgEgBIgCgBIgBgBIAAiFIABgBIACgBIAEgBIAFAAIAGAAIADABIADABIAAABIAAA3IALAAIAKgBIAIgEIAGgHQADgFACgGIANgfIABgCIACgBIAEgBIAGAAIAGAAIAEABIABABIABABIgBACIgBAEIgMAdQgDAIgEAEIgHAIIgHAGIgHACIAAABIAKADIAIAGIAHAJIAGAMIAOAhIABACIAAACIABABIAAABIgBABIgCABIgDABIgGAAIgHAAg");
	this.shape_27.setTransform(-2.1,-47.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#B3B34E").s().p("AgFBGIgDgBIgDgBIAAgCIAAhxIgoAAIgBgBIgCgCIgBgDIgBgFIABgFIABgDIACgCIABgBIBmAAIADABIACACIAAADIAAAFIAAAFIAAADIgCACIgDABIgnAAIAABxIgBACIgBABIgEABIgGAAIgFAAg");
	this.shape_28.setTransform(-15.5,-47.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#B3B34E").s().p("AgdBDQgMgEgIgKQgIgJgEgNQgEgNAAgRQAAgPAFgOQADgNAJgKQAIgJANgGQANgGAQAAQAQAAAMAFQAMAFAIAKQAIAIAEANQAEAOAAAQQAAAQgEANQgFANgIAKQgJALgMAFQgNAGgPAAQgRgBgMgFgAgRgwQgIAEgFAHQgFAHgDAJQgCAKAAALQAAALACAJQACAJAFAIQAEAGAJAFQAHAEALAAQAKAAAJgEQAHgEAFgGQAFgIACgJQADgJAAgMQAAgKgCgJQgCgKgFgHQgEgHgIgEQgIgFgLABQgKAAgIADg");
	this.shape_29.setTransform(-29,-47.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#B3B34E").s().p("AgQAmIgEAAIgCgBIgBgCIAAgCIAUgnIAAgTIABgGIACgEIAEgBIAGgBIAGABIAFABIACAEIABAGIAAAJIgCAHIgCAHIgFAFIgTAfIgBABIgDACIgDABIgFAAg");
	this.shape_30.setTransform(-48.2,-40.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#B3B34E").s().p("AgaBFQgJgCgGgGQgFgEgEgIQgDgIAAgJQAAgLAEgIQAFgJAJgEQAIgFANgDQAMgCAOgBIASAAIAAgKQAAgIgBgFQgCgGgEgEQgDgEgGgCQgGgCgIAAQgIAAgHACIgNAFIgJAFIgEABIgDAAIgCgBIgBgDIAAgFIABgGIADgEIAGgEIAMgFQAFgCAIgBIAOgCQAOABALADQAJADAGAGQAHAHACAJQADAJAAAMIAABYIgBACIgDACIgGAAIgGAAIgEgCIgBgCIAAgNQgIAJgLAFQgKAGgLAAQgKgBgJgDgAgGAHQgIACgFAEQgEACgDAGQgDAEAAAGQABAKAGAHQAHAFALAAQAJAAAIgEQAIgGAJgJIAAgcIgUAAQgKAAgGABg");
	this.shape_31.setTransform(-58.8,-47.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#B3B34E").s().p("Ag1BhIgEgBIgCgBIgBgCIAAi3IABgCIABgCIAEAAIAFgBIAFABIADAAIACACIAAACIAAARIAMgKIALgIQAGgDAGgBQAFgCAHAAQAOAAAKAGQAKAFAGAKQAHAKADANQADAMAAAPQAAARgEANQgEANgHAKQgHAKgLAFQgKAFgPAAQgFAAgFgBIgJgEQgFgCgEgEIgKgJIAABCIgBACIgCABIgEABIgGABIgFgBgAgGhLIgJAFQgFADgFAFIgKAMIAAAzQAKAMAJAHQAJAGAIAAQAKAAAGgEQAHgFAEgHQAEgHACgIQACgJAAgKQgBgKgBgJQgBgKgEgHQgEgHgGgFQgHgEgJAAQgEAAgFABg");
	this.shape_32.setTransform(-73,-45.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#B3B34E").s().p("AgmBgIgGgBIgFgCIgEgCIgBgCIgBgCIgBgEIAAgFIABgIQABgBAAAAQAAgBABAAQAAAAABgBQAAAAABAAIACABIAEACIAFACIAIABIAHAAIAGgEIAGgHIAGgNIhDiHIgCgEIABgDIAEgCIAIAAIAGAAIAFABIACACIACADIAiBFIAKAVIAJAWIABAAIAIgWIAJgYIAbhDIABgDIACgBIAFgBIAHAAIAHAAIAEACIABACIgBADIg2CCIgMAbQgGALgFAGQgHAGgHACQgHACgJAAIgHAAg");
	this.shape_33.setTransform(-88.2,-50.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#F7F7F7").ss(1,1,1).p("AbMAAQAAGQn+EaQn9EbrRAAQrQAAn+kbQn9kaAAmQQAAmOH9kcQH+kaLQAAQLRAAH9EaQH+EcAAGOg");

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#333333").s().p("AzOKqQn9kaAAmQQAAmPH9kaQH+kbLQAAQLRAAH+EbQH9EaAAGPQAAGQn9EaQn+EbrRAAQrQAAn+kbg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-175,-97.5,350,195);


(lib.Анимация9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B3B34E").s().p("AgGBlQgDgBgCgCIgDgFIAAgIIAAgIIADgGQACgBADgBIAGgBIAIABQACABACABQACACABAEIAAAIIAAAIQgBADgCACQgCACgCABIgIABIgGgBgAAAAyIgEAAIgDgBIgCgBIgBgDIgCiKIAAgDIACgDIAFgBIAFgBIAHABIAEABIACADIAAADIgCCKIgBADIgBABIgEABIgFAAg");
	this.shape.setTransform(115.6,26.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B3B34E").s().p("AAoBGIgEgBIgCgBIAAgCIAAg6IhDAAIAAA6IAAACIgCABIgEABIgGAAIgGAAIgDgBIgCgBIgBgCIAAiDIABgCIACgBIADgBIAGgBIAGABIAEABIACABIAAACIAAA2IBDAAIAAg2IAAgCIACgBIAEgBIAGgBIAGABIADABIACABIABACIAACDIgBACIgCABIgDABIgGAAIgGAAg");
	this.shape_1.setTransform(102.1,29.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#B3B34E").s().p("AgaBGQgJgDgGgGQgFgEgEgIQgDgHAAgKQAAgLAEgIQAFgIAJgFQAIgFANgDQAMgCAOAAIASAAIAAgLQAAgHgBgHQgCgFgEgEQgDgEgGgCQgGgCgIAAQgIAAgHACIgNAFIgJAFIgEACIgDgBIgCgBIgBgEIAAgDIABgHIADgDIAGgFIAMgEQAFgDAIgBIAOgCQAOAAALAEQAJADAGAGQAHAHACAIQADAKAAAMIAABYIgBADIgDABIgGAAIgGAAIgEgBIgBgDIAAgNQgIAJgLAFQgKAGgLgBQgKAAgJgCgAgGAHQgIACgFAEQgEACgDAGQgDAEAAAGQABAKAGAHQAHAFALAAQAJAAAIgEQAIgGAJgJIAAgcIgUAAQgKAAgGABg");
	this.shape_2.setTransform(86.5,29.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#B3B34E").s().p("Ag1BhIgEgBIgCgBIgBgCIAAi3IABgCIABgCIAEAAIAFgBIAFABIADAAIACACIAAACIAAARIAMgKIAMgIQAFgDAGgBQAFgCAHAAQAOAAAKAGQAKAFAGAKQAHAKADANQADAMAAAPQAAARgEANQgEANgHAKQgHAKgLAFQgKAFgPAAQgFAAgFgBIgJgEQgFgCgEgEIgKgJIAABCIgBACIgCABIgEABIgGABIgFgBgAgGhLIgJAFQgFADgEAFIgLAMIAAAzQAKAMAJAHQAJAGAIAAQAKAAAGgEQAHgFAEgHQAEgHACgIQACgJAAgKQgBgKgBgJQgBgKgEgHQgEgHgGgFQgHgEgJAAQgEAAgFABg");
	this.shape_3.setTransform(72.3,32);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#B3B34E").s().p("AgcBEQgNgGgIgJQgIgJgEgNQgEgNAAgRQAAgPAFgOQADgNAJgKQAJgJAMgGQANgFAPgBQAQABANAEQAMAFAIAJQAIAKAEANQAEANAAAQQAAAPgEAOQgFANgIAKQgJALgMAFQgMAGgQgBQgRAAgLgEgAgRgvQgIADgFAHQgFAHgCAKQgDAJAAALQAAAKADAKQABAKAFAGQAEAIAJAEQAHAEALAAQAKAAAJgEQAHgDAFgIQAFgGACgKQADgKAAgLQAAgKgCgJQgCgKgFgHQgEgHgIgEQgIgFgLAAQgKABgIAEg");
	this.shape_4.setTransform(56.1,29.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#B3B34E").s().p("AgFBGIgEgBIgCgBIAAgCIAAhxIgnAAIgCgBIgCgCIgBgDIgBgFIABgFIABgDIACgCIACgBIBlAAIADABIACACIABADIAAAFIAAAFIgBADIgCACIgDABIgnAAIAABxIAAACIgCABIgEABIgGAAIgFAAg");
	this.shape_5.setTransform(42.8,29.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#B3B34E").s().p("AgSBEQgKgFgIgJQgHgJgEgNQgEgNAAgSQAAgSAFgOQAFgOAIgJQAJgJALgEQAKgEAMgBIANABIALAEIAJAEIAFAFIADACIABACIABAEIAAAEIgBAIQgBABAAAAQgBABAAAAQgBAAAAAAQAAAAgBAAQgCABgDgDIgHgGIgLgEQgGgDgJAAQgQAAgJANQgKAOAAAYQABANACAKQACAJAFAHQAEAGAIAEQAFACAJAAQAIAAAHgCIAKgGIAIgGQADgDACAAIACABIACACIAAAEIAAAFIAAAEIAAADIgBACIgCADIgHAFIgJAFIgNADQgGABgHAAQgOAAgLgEg");
	this.shape_6.setTransform(30.8,29.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#B3B34E").s().p("AgWBEQgMgFgJgJQgIgIgEgOQgFgNAAgTQAAgQAFgNQAEgNAJgKQAIgKALgEQAMgGAOAAQAPAAALAGQALAEAHAJQAHAIADALQAEAMAAANIAAAEQAAAFgDADQgDACgEAAIhWAAQAAAKADAKQACAIAFAHQAFAGAIAEQAJACAKAAQAKABAHgCIANgDIAJgEIAFgBIACAAIABABIABAEIAAAEIAAADIAAADIgBACIgBABIgFADIgKAEIgPADQgIABgKAAQgPAAgMgEgAgNgxQgHADgFAGQgEAFgDAHQgCAIgBAIIBHAAQABgTgJgLQgJgLgSAAQgIAAgGAEg");
	this.shape_7.setTransform(16.7,29.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#B3B34E").s().p("Ag2BhIgDgBIgCgBIgBgCIAAi3IABgCIACgCIADAAIAFgBIAFABIADAAIACACIABACIAAARIALgKIALgIQAGgDAGgBQAFgCAHAAQAOAAAKAGQAKAFAGAKQAHAKADANQACAMABAPQgBARgDANQgEANgHAKQgIAKgKAFQgLAFgOAAQgEAAgGgBIgJgEQgFgCgFgEIgKgJIAABCIAAACIgCABIgEABIgFABIgHgBgAgGhLIgJAFQgEADgGAFIgLAMIAAAzQAKAMAJAHQAJAGAJAAQAKAAAGgEQAHgFADgHQAFgHACgIQABgJABgKQgBgKgBgJQgCgKgDgHQgEgHgHgFQgFgEgKAAQgEAAgFABg");
	this.shape_8.setTransform(1.9,32);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#B3B34E").s().p("AApBmIgEgBIgCgCIgBgCIAAhLIAAgMIABgLIgHALIgIALIg3BMIgCACIgCACIgDABIgFAAIgFAAIgDgBIgCgCIAAgCIAAiDIAAgCIACgBIADAAIAGgBIAKABQABAAAAABQABAAAAAAQAAABAAAAQAAABAAAAIAABMIAAALIgBALIAHgLIAIgKIA3hNIACgCIADgBIADAAIAFgBIAFABIAEAAIACABIAAACIAACDIgBACIgBACIgFABIgGAAIgFAAgAgSg6QgIgDgFgFQgHgGgCgHQgDgIAAgJIAAgCIADgCIADgBIAGAAIAFAAIAEABIABACIAAADQAAAFABAEQACADADADQADAEAEABQAEACAFAAQAFAAAEgCQAFgBACgEQADgCACgEQABgFABgEIAAgDIABgCIADgBIAGAAIAGAAIADABIACACIABACQAAAJgDAHQgCAHgGAGQgFAFgIAEQgJACgMAAQgKAAgJgCg");
	this.shape_9.setTransform(-21.3,26.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#B3B34E").s().p("AApBGIgEAAIgCgCIgBgCIAAhLIAAgLIABgMIgHAMIgIAKIg3BMIgCACIgCACIgDAAIgFAAIgFAAIgDAAIgCgCIAAgCIAAiDIAAgCIACgBIADgBIAGgBIAKACQABAAAAAAQABAAAAABQAAAAAAABQAAAAAAABIAABLIAAAMIgBALIAHgLIAIgKIA3hNIACgCIADgBIADgBIAFgBIAFABIAEABIACABIAAACIAACDIgBACIgBACIgFAAIgGAAIgFAAg");
	this.shape_10.setTransform(-37.5,29.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#B3B34E").s().p("AAjBGIgEAAIgCgCIgBgCIgOgiIgGgLQgDgFgEgDQgDgDgFgCIgLgBIgLAAIAAA8IAAABIgDACIgDAAIgGAAIgFAAIgEAAIgCgCIgBgBIAAiFIABgBIACgBIAEgBIAFgBIAGABIADABIADABIAAABIAAA3IALAAIAKgBIAIgEIAGgHQADgFACgHIANgeIABgCIACgBIAEgBIAGgBIAGABIAEABIABABIABABIgBACIgBAEIgMAdQgDAIgEAEIgHAJIgHAFIgHADIAAAAIAKADIAIAGIAHAJIAGALIAOAiIABACIAAABIABACIAAABIgBACIgCABIgDAAIgGAAIgHAAg");
	this.shape_11.setTransform(-51.9,29.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#B3B34E").s().p("AgRBEQgMgFgGgJQgIgJgEgNQgEgNAAgSQAAgSAFgOQAFgOAIgJQAJgJAKgEQALgEAMgBIANABIALAEIAJAEIAFAFIADACIABACIABAEIAAAEIgBAIQgBABAAAAQgBABAAAAQgBAAAAAAQAAAAgBAAQgCABgDgDIgHgGIgLgEQgGgDgJAAQgQAAgJANQgKAOAAAYQABANACAKQACAJAFAHQAFAGAGAEQAGACAJAAQAIAAAHgCIALgGIAIgGQADgDABAAIACABIACACIAAAEIAAAFIAAAEIAAADIgBACIgDADIgGAFIgJAFIgNADQgGABgHAAQgNAAgLgEg");
	this.shape_12.setTransform(-65.7,29.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#B3B34E").s().p("AAoBGIgEgBIgCgBIAAgCIAAg6IhDAAIAAA6IAAACIgCABIgEABIgGAAIgGAAIgDgBIgCgBIgBgCIAAiDIABgCIACgBIADgBIAGgBIAGABIAEABIACABIAAACIAAA2IBDAAIAAg2IAAgCIACgBIAEgBIAGgBIAGABIADABIACABIABACIAACDIgBACIgCABIgDABIgGAAIgGAAg");
	this.shape_13.setTransform(-80.3,29.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#B3B34E").s().p("AgdBEQgMgGgIgJQgIgJgEgNQgEgNAAgRQAAgPAFgOQADgNAJgKQAIgJANgGQANgFAQgBQAQABAMAEQAMAFAIAJQAIAKAEANQAEANAAAQQAAAPgEAOQgFANgIAKQgJALgMAFQgMAGgRgBQgQAAgMgEgAgRgvQgIADgFAHQgFAHgDAKQgCAJAAALQAAAKACAKQACAKAFAGQAFAIAHAEQAIAEALAAQAKAAAJgEQAHgDAFgIQAGgGACgKQACgKAAgLQAAgKgCgJQgCgKgFgHQgEgHgIgEQgIgFgLAAQgKABgIAEg");
	this.shape_14.setTransform(-96.2,29.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#B3B34E").s().p("AAlBGIgDgBIgCgBIAAgCIAAhzIg+AAIAABzIgBACIgCABIgEABIgGAAIgFAAIgEgBIgCgBIgBgCIAAh+QAAgFACgCQACgCAEAAIBgAAQADAAACACQABACAAAFIAAB+IAAACIgCABIgDABIgHAAIgGAAg");
	this.shape_15.setTransform(-111.9,29.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#B3B34E").s().p("AAmBHIgEgBIgCgCIgBgCIAAg3IgNAAQgJAAgGABQgDACgFAEQgDADgEAFIgGANIgKAaIgCADIgDACIgEABIgGAAIgFAAIgEAAIgCgCIgBgCIABgDIADgIIALgZQAEgKAGgGQAGgHAIgDQgOgDgJgIQgJgJAAgOQABgJAEgHQAEgJAHgFQAIgFALgDQAMgDANAAIAIAAIAJABIAKAAIAIABQAFABACACQACADAAAEIAAB8IgBACIgBACIgEABIgGAAIgGAAgAgFgyQgHACgEADQgEADgCAEQgBAFAAAEQAAAGACAEQACAFAEACQAEADAGACQAFABALAAIAUAAIAAgtIgKAAIgLAAQgKgBgFACg");
	this.shape_16.setTransform(-127.5,29.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#B3B34E").s().p("AApBmIgEgBIgCgCIgBgCIAAhLIAAgMIABgLIgHALIgIALIg3BMIgCACIgCACIgDABIgFAAIgFAAIgDgBIgCgCIgBgCIAAiCIABgDIACgBIAEgBIAFAAIAKABQABAAAAABQABAAAAAAQAAABAAAAQABABAAABIAABKIAAAMIgBALIAGgLIAIgKIA3hMIADgDIACgBIADgBIAFAAIAFAAIAEABIACABIAAADIAACCIgBACIgBACIgFABIgFAAIgGAAgAgSg6QgIgDgFgFQgGgFgDgIQgDgIAAgJIABgCIACgCIADgBIAGAAIAFAAIAEABIABACIAAADQAAAFABAEQACADADADQADAEAEABQAFACAEAAQAGAAAEgCQAEgBACgEQAEgDABgDQACgEgBgFIABgDIABgCIAEgBIAFAAIAGAAIADABIADACIAAACQAAAIgDAIQgCAHgGAGQgFAFgIAEQgJACgMAAQgKAAgJgCg");
	this.shape_17.setTransform(26.1,-12.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#B3B34E").s().p("AgpBHIgIAAIgIgBIgIAAQgFgBgEgDQgCgEAAgGIAAh6IAAgCIACgBIADgBIAGAAIAKABQABAAAAAAQABABAAAAQAAABAAAAQAAABAAAAIAAAvIAMgBIALAAQAQAAALADQAKADAHAGQAIAGADAHQAEAIAAAKQAAAKgEAJQgEAJgHAGQgIAHgLAEQgMADgRAAIgHAAgAgqAAIgLAAIAAAyIALABIAMABQASAAAIgHQAIgIAAgMQAAgGgCgFQgCgFgDgDQgEgEgHgCQgHgBgKAAIgLABgAA7BFIgDgBIgCgBIgBgCIAAiDIABgCIACgBIADgBIAGAAIAGAAIAEABIACABIABACIAACDIgBACIgCABIgEABIgGABIgGgBg");
	this.shape_18.setTransform(8,-9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#B3B34E").s().p("AgQBIIgJgBIgJAAIgIgBQgFgBgEgDQgCgDAAgGIAAhxQAAgGACgDQADgDAGgBIAIgBIAJAAIAJAAIAKgBQAOAAAKADQAKACAHAFQAHAEADAHQAEAGgBAJQAAALgFAIQgHAIgLADQAOADAIAIQAHAJAAANQAAALgEAIQgDAIgJAFQgHAGgMADQgLADgPAAIgJAAgAgeA0IAGAAIAHABIAFAAIAGAAQAJAAAHgBQAGgCAFgDQAFgDACgFQABgFAAgFQAAgGgBgFQgCgEgFgDQgFgDgGgCIgQgBIgYAAgAgegzIAAApIAZAAQAOAAAIgGQAIgGAAgKQAAgFgCgEQgCgEgDgCQgFgDgGgBIgOgBIgNAAIgKABg");
	this.shape_19.setTransform(-8.7,-9.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#B3B34E").s().p("AgcBEQgNgFgIgKQgIgJgEgNQgEgNAAgRQAAgPAEgOQAFgNAIgKQAJgKAMgFQAMgGAQAAQAQAAANAFQAMAFAIAJQAIAKAEANQAEANAAAQQAAAPgEAOQgEANgJAKQgJALgMAFQgNAGgPgBQgQAAgMgEgAgRgwQgIAEgFAHQgFAHgCAJQgDAKAAALQAAAKADAKQABAKAFAGQAEAIAJAEQAHAEALAAQALAAAHgEQAIgEAFgGQAFgIACgJQADgJAAgMQAAgKgCgJQgCgKgEgHQgFgHgIgEQgIgFgMABQgKAAgHADg");
	this.shape_20.setTransform(-24.2,-9.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#B3B34E").s().p("AAoBGIgEgBIgCgBIAAgCIAAg6IhDAAIAAA6IAAACIgCABIgEABIgGAAIgGAAIgDgBIgCgBIgBgCIAAiDIABgCIACgBIADgBIAGAAIAGAAIAEABIACABIAAACIAAA1IBDAAIAAg1IAAgCIACgBIAEgBIAGAAIAGAAIADABIACABIABACIAACDIgBACIgCABIgDABIgGAAIgGAAg");
	this.shape_21.setTransform(-40.2,-9.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#B3B34E").s().p("AAmBHIgEgBIgCgBIAAgDIAAg3IgPAAQgJAAgFABQgDACgFAEQgDADgDAFIgHANIgKAaIgCADIgDACIgEABIgHAAIgEAAIgEAAIgCgCIgBgCIABgDIADgIIALgZQAEgJAGgHQAGgHAHgDQgNgDgJgIQgJgIABgOQAAgKADgHQAEgJAIgFQAIgFALgDQAMgDANAAIAIAAIAJAAIAKABIAIABQAEABADACQACADAAAEIAAB8IgBADIgBABIgEABIgGAAIgGAAgAgFgyQgGACgFADQgEADgBAFQgCADAAAGQAAAFACAEQACAFAEACQAEADAGABQAGACAKAAIAVAAIAAgtIgLgBIgLAAQgKABgFABg");
	this.shape_22.setTransform(74.3,-47.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#B3B34E").s().p("AgSBDQgKgEgIgJQgHgJgEgNQgEgNAAgRQAAgTAFgOQAFgOAIgJQAJgJAKgEQALgFAMAAIANACIALADIAJAEIAFAFIADACIABACIABAEIAAAEIgBAIQgBABAAAAQgBABAAAAQgBAAAAAAQAAAAgBAAQgCAAgDgCIgHgFIgLgGQgGgCgJAAQgQAAgJANQgKANAAAZQABANACAJQACAKAFAHQAFAGAGAEQAGACAJAAQAIAAAHgCIAKgGIAJgFQADgEABAAIACABIACADIAAADIAAAFIAAAEIAAADIgBADIgDACIgGAFIgJAEIgNAEQgGACgHAAQgNgBgMgFg");
	this.shape_23.setTransform(61.7,-47.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#B3B34E").s().p("Ag8BGIgBgBIgBgEIgBgFIABgGIAAgDIACgCIACgBQAFAAAEgCQAEgCAEgFQAEgFADgJQAEgIACgNIAGgbIAEgmQABgFACgCQABgCAEAAIBCAAQAEAAACACQACACAAAFIAAB+IgBACIgCABIgDABIgGAAIgGAAIgEgBIgCgBIAAgCIAAhzIglAAIgEAqQgEARgEAOQgEANgFAJQgFAJgGAGQgGAGgHACQgHADgJAAIgCgBg");
	this.shape_24.setTransform(46.6,-47.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#B3B34E").s().p("AgqBHIgIAAIgHgBIgIAAQgFgBgEgDQgDgEAAgGIAAh6IABgCIACgBIAEgBIAFAAIAKABQABAAAAAAQABABAAAAQAAABAAAAQABABAAAAIAAAvIAKgBIAMAAQAQAAALADQALADAGAGQAIAGADAHQADAIABAKQgBAKgDAJQgEAJgHAGQgIAHgLAEQgMADgRAAIgIAAgAgqAAIgKAAIAAAyIAKABIAMABQARAAAJgHQAHgIAAgMQAAgGgBgFQgCgFgEgDQgDgEgHgCQgIgBgKAAIgKABgAA7BFIgDgBIgCgBIgBgCIAAiDIABgCIACgBIADgBIAGAAIAGAAIAEABIACABIAAACIAACDIAAACIgCABIgEABIgGABIgGgBg");
	this.shape_25.setTransform(29.9,-47.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#B3B34E").s().p("Ag1BhIgEgBIgCgBIgBgCIAAi3IABgCIABgCIAEAAIAFgBIAFABIADAAIACACIAAACIAAARIAMgKIAMgIQAFgDAGgBQAFgCAHAAQAOAAAKAGQAKAFAGAKQAHAKADANQADAMAAAPQAAARgEANQgEANgHAKQgHAKgLAFQgKAFgPAAQgFAAgFgBIgJgEQgFgCgEgEIgKgJIAABCIgBACIgCABIgEABIgGABIgFgBgAgGhLIgJAFQgFADgFAFIgKAMIAAAzQAKAMAJAHQAJAGAIAAQAKAAAGgEQAHgFAEgHQAEgHACgIQACgJAAgKQgBgKgBgJQgBgKgEgHQgEgHgGgFQgHgEgJAAQgEAAgFABg");
	this.shape_26.setTransform(12.5,-45.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#B3B34E").s().p("AAjBGIgEgBIgCgBIgBgCIgOgiIgGgLQgDgFgEgDQgDgDgFgCIgLgBIgLAAIAAA8IAAABIgDABIgDABIgGAAIgFAAIgEgBIgCgBIgBgBIAAiFIABgBIACgBIAEgBIAFAAIAGAAIADABIADABIAAABIAAA3IALAAIAKgBIAIgEIAGgHQADgFACgGIANgfIABgCIACgBIAEgBIAGAAIAGAAIAEABIABABIABABIgBACIgBAEIgMAdQgDAIgEAEIgHAIIgHAGIgHACIAAABIAKADIAIAGIAHAJIAGAMIAOAhIABACIAAACIABABIAAABIgBABIgCABIgDABIgGAAIgHAAg");
	this.shape_27.setTransform(-2.1,-47.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#B3B34E").s().p("AgFBGIgDgBIgDgBIAAgCIAAhxIgoAAIgBgBIgCgCIgBgDIgBgFIABgFIABgDIACgCIABgBIBmAAIADABIACACIAAADIAAAFIAAAFIAAADIgCACIgDABIgnAAIAABxIgBACIgBABIgEABIgGAAIgFAAg");
	this.shape_28.setTransform(-15.5,-47.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#B3B34E").s().p("AgdBDQgMgEgIgKQgIgJgEgNQgEgNAAgRQAAgPAFgOQADgNAJgKQAIgJANgGQANgGAQAAQAQAAAMAFQAMAFAIAKQAIAIAEANQAEAOAAAQQAAAQgEANQgFANgIAKQgJALgMAFQgNAGgPAAQgRgBgMgFgAgRgwQgIAEgFAHQgFAHgDAJQgCAKAAALQAAALACAJQACAJAFAIQAEAGAJAFQAHAEALAAQAKAAAJgEQAHgEAFgGQAFgIACgJQADgJAAgMQAAgKgCgJQgCgKgFgHQgEgHgIgEQgIgFgLABQgKAAgIADg");
	this.shape_29.setTransform(-29,-47.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#B3B34E").s().p("AgQAmIgEAAIgCgBIgBgCIAAgCIAUgnIAAgTIABgGIACgEIAEgBIAGgBIAGABIAFABIACAEIABAGIAAAJIgCAHIgCAHIgFAFIgTAfIgBABIgDACIgDABIgFAAg");
	this.shape_30.setTransform(-48.2,-40.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#B3B34E").s().p("AgaBFQgJgCgGgGQgFgEgEgIQgDgIAAgJQAAgLAEgIQAFgJAJgEQAIgFANgDQAMgCAOgBIASAAIAAgKQAAgIgBgFQgCgGgEgEQgDgEgGgCQgGgCgIAAQgIAAgHACIgNAFIgJAFIgEABIgDAAIgCgBIgBgDIAAgFIABgGIADgEIAGgEIAMgFQAFgCAIgBIAOgCQAOABALADQAJADAGAGQAHAHACAJQADAJAAAMIAABYIgBACIgDACIgGAAIgGAAIgEgCIgBgCIAAgNQgIAJgLAFQgKAGgLAAQgKgBgJgDgAgGAHQgIACgFAEQgEACgDAGQgDAEAAAGQABAKAGAHQAHAFALAAQAJAAAIgEQAIgGAJgJIAAgcIgUAAQgKAAgGABg");
	this.shape_31.setTransform(-58.8,-47.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#B3B34E").s().p("Ag1BhIgEgBIgCgBIgBgCIAAi3IABgCIABgCIAEAAIAFgBIAFABIADAAIACACIAAACIAAARIAMgKIALgIQAGgDAGgBQAFgCAHAAQAOAAAKAGQAKAFAGAKQAHAKADANQADAMAAAPQAAARgEANQgEANgHAKQgHAKgLAFQgKAFgPAAQgFAAgFgBIgJgEQgFgCgEgEIgKgJIAABCIgBACIgCABIgEABIgGABIgFgBgAgGhLIgJAFQgFADgFAFIgKAMIAAAzQAKAMAJAHQAJAGAIAAQAKAAAGgEQAHgFAEgHQAEgHACgIQACgJAAgKQgBgKgBgJQgBgKgEgHQgEgHgGgFQgHgEgJAAQgEAAgFABg");
	this.shape_32.setTransform(-73,-45.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#B3B34E").s().p("AgmBgIgGgBIgFgCIgEgCIgBgCIgBgCIgBgEIAAgFIABgIQABgBAAAAQAAgBABAAQAAAAABgBQAAAAABAAIACABIAEACIAFACIAIABIAHAAIAGgEIAGgHIAGgNIhDiHIgCgEIABgDIAEgCIAIAAIAGAAIAFABIACACIACADIAiBFIAKAVIAJAWIABAAIAIgWIAJgYIAbhDIABgDIACgBIAFgBIAHAAIAHAAIAEACIABACIgBADIg2CCIgMAbQgGALgFAGQgHAGgHACQgHACgJAAIgHAAg");
	this.shape_33.setTransform(-88.2,-50.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#F7F7F7").ss(1,1,1).p("AbMAAQAAGPn+EbQn9EbrRAAQrQAAn+kbQn9kbAAmPQAAmPH9kbQH+kaLQAAQLRAAH9EaQH+EbAAGPg");

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#333333").s().p("AzOKqQn9kaAAmQQAAmPH9kaQH+kbLQAAQLRAAH+EbQH9EaAAGPQAAGQn9EaQn+EbrRAAQrQAAn+kbg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-175,-97.5,350,195);


(lib.Анимация7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.text = new cjs.Text("Ах, какая вкусная еда!", "30px 'Calibri'", "#F7F7F7");
	this.text.textAlign = "center";
	this.text.lineHeight = 39;
	this.text.lineWidth = 209;
	this.text.parent = this;
	this.text.setTransform(14.5,-62.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#F7F7F7").ss(1,1,1).p("AU5CYQhfDDj4CbQmQD5o2AAQo0AAmQj5QmQj5AAlfQAAlgGQj5QArgbAtgY");
	this.shape.setTransform(-24.3,29.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AvFJZQmPj5AAlgQAAiEA5h2QBejDD4ibQGQj5I1AAQI2AAGPD5QGQD5AAFfQAAFgmQD5QgrAbgsAXQl1DHn5AAQo1AAmQj5g");
	this.shape_1.setTransform(21.5,-20);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-159,-105,317,211);


(lib.Анимация6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.frog3();
	this.instance.parent = this;
	this.instance.setTransform(-140,-125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-140,-125,280,250);


(lib.Анимация5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.frog3();
	this.instance.parent = this;
	this.instance.setTransform(-140,-125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-140,-125,280,250);


(lib.Анимация4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.frog1();
	this.instance.parent = this;
	this.instance.setTransform(-100,-175);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-100,-175,200,350);


(lib.Анимация3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.frog1();
	this.instance.parent = this;
	this.instance.setTransform(-100,-175);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-100,-175,200,350);


// stage content:
(lib.frogi = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// logo
	this.instance = new lib.logo();
	this.instance.parent = this;
	this.instance.setTransform(293,27);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},30).wait(471));

	// sing
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F7F7F7").s().p("AgTA4QgKgDgHgHQgGgIgEgLQgEgMABgOQgBgOAEgLQAEgLAGgIQAIgIAJgEQAKgEALgBQANAAAJAFQAJAEAGAHQAGAHADAKQACAJAAALIAAADQAAAEgCACQgDACgDAAIhHAAQAAAJACAHQACAIAEAFQAFAFAGADQAHADAJAAQAIAAAGgBIALgDIAHgDIAEgBIACAAIABACIAAACIABAEIgBACIAAACIAAACIgCACIgDACIgJACIgMADQgHACgHAAQgNgBgLgEgAgLgpQgGADgEAEQgEAFgCAGQgBAHgBAHIA7AAQAAgRgHgIQgHgKgPABQgHgBgFADg");
	this.shape.setTransform(615.5,336);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F7F7F7").s().p("AAjA6IgFAAIgEAAIgCgBIgBgCIgLgcIgGgJIgFgHQgCgDgEAAQgFgCgFAAIgIAAIAAAxIgBACIgCABIgEAAIgEAAIgFAAIgCAAIgCgBIgBgCIAAhuIABgBIACgBIACgBIAFAAIAEAAIAEABIACABIABABIAAAuIAIAAIAJgBIAGgEQACgCADgDIAFgJIAKgaIABgBIABgCIAEgBIAFAAIAFAAIADABIABABIAAABIAAADIAAACIgLAZIgGAKIgFAHIgGAEIgGACIAAABIAIACIAHAFIAFAHIAFAKIAMAcIABACIAAABIABABIAAABIgBABIgBABIgDAAIgFAAg");
	this.shape_1.setTransform(604.4,336);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F7F7F7").s().p("AgOA4QgJgDgHgIQgGgHgDgLQgDgMAAgOQAAgPAEgLQAEgMAHgHQAGgIAKgDQAJgFAKAAIAKABIAJAEIAIADIAEADIACADIABACIABACIAAAEIgBAHQAAAAgBABQAAAAAAAAQgBAAAAAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBgBQgBAAAAgBIgGgEQgEgCgFgCQgFgCgHgBQgOAAgHAMQgIALAAAVQAAAKACAIQACAIAEAFQAEAFAFADQAFADAHAAQAHAAAFgDIAKgEIAGgFIAEgCIACAAIABACIAAADIAAAEIAAAEIAAADIgBABIgCACIgFAFIgIADIgKADIgLACQgLgBgJgEg");
	this.shape_2.setTransform(592.9,336);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F7F7F7").s().p("AAmA6IgFAAIgDAAIgBgCIgBgBIAAgwIg3AAIAAAwIAAABIgCACIgDAAIgFAAIgFAAIgDAAIgCgCIAAgBIAAhtIAAgBIACgCIADgBIAFAAIAFAAIADABIACACIAAABIAAAtIA3AAIAAgtIABgBIABgCIADgBIAFAAIAFAAIADABIACACIAAABIAABtIAAABIgCACIgDAAIgFAAg");
	this.shape_3.setTransform(580.8,336);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F7F7F7").s().p("AAnA6IgFAAIgDAAIgCgCIAAgBIAAg+IAAgKIABgJIgGAJIgIAKIgtA+IgBACIgCABIgDAAIgEAAIgEAAIgDAAIgCgCIAAgBIAAhtIAAgBIACgCIAEgBIAEAAIAIABQABABAAAAQABAAAAAAQAAABAAAAQAAAAAAABIAAA/IAAAJIgBAKIAGgJIAGgJIAvhAIABgBIACgCIADgBIAEAAIAEAAIADABIACACIAAABIAABtIAAABIgCACIgDAAIgFAAg");
	this.shape_4.setTransform(567.4,336);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F7F7F7").s().p("ABLBPIgFAAIgDAAIgCgCIAAgBIAAiJIAAAAIg4CJIgBACIgCABIgDAAIgDAAIgFAAIgDAAIgBgBIgBgCIg2iJIAACJIAAABIgCACIgDAAIgFAAIgGAAIgDAAIgBgCIgBgBIAAiRQAAgFADgCQADgCADAAIANAAIAHABIAFACIAEAEIACAGIAtBxIAAAAIAvhxIADgGIAEgEIAEgCIAFgBIAOAAIAEAAIACACIACADIABAEIAACRIAAABIgCACIgDAAIgGAAg");
	this.shape_5.setTransform(549.9,333.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F7F7F7").s().p("AgNA8IgIgBIgHAAIgHgBQgEAAgDgDQgCgCAAgGIAAhdQAAgFACgDQACgDAFAAIAHgBIAHAAIAIAAIAIgBQALAAAJACQAIACAGAEQAGAEADAFQACAGAAAHQAAAJgFAHQgFAGgJADQAMADAGAGQAGAHAAAMQAAAIgDAHQgDAHgHAEQgGAFgKACQgKADgLAAIgIAAgAgZArIAFABIAFAAIAGAAIAEABQAHAAAGgCQAGgBADgDQAEgDACgDQACgEAAgFQAAgFgCgEQgCgDgEgDQgDgCgGgBQgGgCgHAAIgUAAgAgZgqIAAAiIAVAAQAMAAAGgFQAHgFAAgIQAAgEgCgEIgEgFQgEgCgFgBIgMgBIgKAAIgJABg");
	this.shape_6.setTransform(528,336);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F7F7F7").s().p("AAmA6IgFAAIgDAAIgBgCIgBgBIAAgwIg3AAIAAAwIAAABIgCACIgDAAIgFAAIgFAAIgDAAIgCgCIAAgBIAAhtIAAgBIACgCIADgBIAFAAIAFAAIADABIACACIAAABIAAAtIA3AAIAAgtIABgBIABgCIADgBIAFAAIAFAAIADABIACACIAAABIAABtIAAABIgCACIgDAAIgFAAg");
	this.shape_7.setTransform(509.3,336);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F7F7F7").s().p("AgWA6QgHgCgFgEQgFgFgCgGQgDgGAAgIQAAgJAEgHQAEgHAHgEQAHgEAKgDQAKgBAMAAIAPAAIAAgJQAAgGgBgFQgCgGgCgCQgDgEgFgCQgFgBgHAAQgGAAgGACIgLAEIgHADIgFACIgBAAIgCgCIAAgCIgBgEIABgEIACgEIAGgEIAJgDIALgDIAMgCQAMAAAIADQAIADAFAFQAGAGACAHQACAHAAALIAABJIgBACIgCABIgFAAIgFAAIgDgBIgBgCIAAgLQgHAIgJAEQgJAFgJAAQgJAAgHgDgAgFAHQgHABgEACQgEADgBAEQgCAEAAAFQAAAJAFAEQAFAGAKAAQAHAAAHgFQAHgDAHgJIAAgXIgRAAQgIAAgFACg");
	this.shape_8.setTransform(496.2,336);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F7F7F7").s().p("AgsBRIgDgBIgCgBIgBgBIAAiZIABgBIABgCIADgBIAEAAIAEAAIADABIACACIAAABIAAAPIAKgJQAEgEAFgCQAFgDAFgBQAEgBAFgBQAMABAJAEQAIAFAFAIQAGAIACAKQADAMAAAMQAAAOgEAKQgDALgGAJQgGAHgJAFQgJAFgLAAIgIgCIgIgDIgIgFIgIgHIAAA3IgBABIgCABIgDABIgFAAIgEAAgAgEg+QgEABgEADIgIAGIgJAKIAAArQAIAKAHAFQAIAGAHAAQAIAAAFgEQAGgDADgHIAFgMQACgIAAgHQAAgJgCgIQgBgIgDgFQgDgGgGgFQgFgDgIAAIgGABg");
	this.shape_9.setTransform(484.4,338.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F7F7F7").s().p("AgYA4QgKgEgGgHQgHgIgEgLQgDgLAAgOQAAgNADgLQAEgLAHgIQAHgJALgEQAKgEANgBQANAAALAFQAKADAHAJQAGAHAEALQADALAAAOQAAAMgDALQgEAMgHAIQgHAIgLAFQgLAFgNAAQgNgBgKgEgAgOgoQgHAEgEAFQgEAGgCAJQgCAHAAAJQAAAIACAJQABAHAEAGQAEAHAGADQAHAEAJAAQAJAAAGgEQAGgDAFgGQAEgGACgHQACgJAAgJQAAgIgBgHQgCgJgEgGQgEgGgHgDQgGgDgKgBQgHAAgHADg");
	this.shape_10.setTransform(470.9,336);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F7F7F7").s().p("AAAA6IgEAAIgDAAIgBgCIgBgBIAAheIghAAIgCgBIgBgBIgBgDIAAgEIAAgEIABgDIABgCIACAAIBVAAIACAAIABACIABADIAAAEIAAAEIgBADIgBABIgCABIghAAIAABeIAAABIgCACIgDAAIgFAAg");
	this.shape_11.setTransform(459.7,336);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#F7F7F7").s().p("AgOA4QgJgDgHgIQgGgHgDgLQgDgMAAgOQAAgPAEgLQAEgMAHgHQAGgIAKgDQAJgFAKAAIAKABIAJAEIAIADIAEADIACADIABACIABACIAAAEIgBAHQgBAAAAABQAAAAAAAAQgBAAAAAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBgBQgBAAAAgBIgGgEQgEgCgFgCQgFgCgHgBQgOAAgHAMQgIALAAAVQAAAKACAIQACAIAEAFQAEAFAFADQAFADAHAAQAHAAAFgDIAKgEIAGgFIAEgCIACAAIABACIAAADIAAAEIAAAEIAAADIgBABIgCACIgFAFIgIADIgKADIgLACQgLgBgJgEg");
	this.shape_12.setTransform(449.7,336);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#F7F7F7").s().p("AgSA4QgLgDgGgHQgIgIgDgLQgDgMgBgOQABgOADgLQADgLAIgIQAGgIAKgEQAKgEALgBQANAAAJAFQAJAEAGAHQAGAHACAKQADAJAAALIAAADQAAAEgCACQgDACgDAAIhHAAQAAAJACAHQACAIAEAFQAEAFAIADQAGADAJAAQAIAAAGgBIALgDIAHgDIAEgBIACAAIABACIABACIAAAEIAAACIAAACIgBACIgBACIgFACIgIACIgMADQgHACgIAAQgNgBgJgEgAgLgpQgGADgEAEQgDAFgCAGQgDAHAAAHIA7AAQAAgRgHgIQgIgKgOABQgGgBgGADg");
	this.shape_13.setTransform(438.1,336);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#F7F7F7").s().p("AgsBRIgDgBIgCgBIgBgBIAAiZIABgBIABgCIADgBIAEAAIAEAAIADABIACACIAAABIAAAPIAKgJQAEgEAFgCQAFgDAFgBQAEgBAFgBQAMABAJAEQAIAFAFAIQAGAIACAKQADAMAAAMQAAAOgEAKQgDALgGAJQgGAHgJAFQgJAFgLAAIgIgCIgIgDIgIgFIgIgHIAAA3IgBABIgCABIgDABIgFAAIgEAAgAgEg+QgEABgEADIgIAGIgJAKIAAArQAIAKAHAFQAIAGAHAAQAIAAAFgEQAGgDADgHIAFgMQACgIAAgHQAAgJgCgIQgBgIgDgFQgDgGgGgFQgFgDgIAAIgGABg");
	this.shape_14.setTransform(425.6,338.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#F7F7F7").s().p("AAnBVIgFAAIgDgBIgCgBIgBgCIAAg/IABgKIAAgIIgFAIIgHAKIguA/IgCACIgBABIgDABIgEAAIgEAAIgDgBIgBgBIgBgCIAAhtIABgBIACgCIACAAIAFAAIAIABQABAAAAAAQABAAAAABQAAAAAAAAQABABAAAAIAAA/IgBAJIAAAKIAFgJIAGgJIAuhAIACgBIACgCIADAAIAEAAIAFAAIACAAIABACIABABIAABtIgBACIgBABIgDABIgFAAgAgPgwQgGgDgFgEQgFgEgDgHQgBgGAAgIIAAgCIABgBIADgBIAFAAIAEAAIADABIACACIAAACQgBAEACADQABAEACACQADADADABQAEABAEAAQAEAAAEgBQAEgBACgDIADgGIABgHIABgCIABgCIADgBIAEAAIAFAAIADABIABABIABACQAAAHgCAHQgCAGgFAEQgEAFgHACQgHADgKAAQgJAAgHgCg");
	this.shape_15.setTransform(406.3,333.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#F7F7F7").s().p("AAnA6IgFAAIgDAAIgCgCIgBgBIAAg+IABgKIAAgJIgFAJIgHAKIguA+IgCACIgBABIgDAAIgEAAIgEAAIgDAAIgBgCIgBgBIAAhtIABgBIACgCIACgBIAFAAIAIABQABABAAAAQABAAAAAAQAAABAAAAQABAAAAABIAAA/IgBAJIAAAKIAFgJIAGgJIAuhAIACgBIACgCIADgBIAEAAIAFAAIACABIABACIABABIAABtIgBABIgBACIgDAAIgFAAg");
	this.shape_16.setTransform(392.8,336);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#F7F7F7").s().p("AAjA6IgFAAIgEAAIgCgBIgBgCIgLgcIgGgJIgFgHQgDgDgDAAQgFgCgFAAIgIAAIAAAxIgBACIgCABIgEAAIgEAAIgFAAIgCAAIgCgBIgBgCIAAhuIABgBIACgBIACgBIAFAAIAEAAIAEABIACABIABABIAAAuIAIAAIAJgBIAGgEQACgCADgDIAFgJIAKgaIABgBIABgCIAEgBIAFAAIAFAAIADABIABABIAAABIAAADIgBACIgKAZIgGAKIgFAHIgGAEIgGACIAAABIAIACIAHAFIAGAHIAEAKIAMAcIABACIABABIAAABIAAABIAAABIgCABIgDAAIgFAAg");
	this.shape_17.setTransform(380.8,336);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#F7F7F7").s().p("AgOA4QgJgDgHgIQgGgHgDgLQgDgMAAgOQAAgPAEgLQAEgMAHgHQAGgIAKgDQAJgFAKAAIAKABIAJAEIAIADIAEADIACADIABACIABACIAAAEIgBAHQAAAAgBABQAAAAAAAAQgBAAAAAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBgBQgBAAAAgBIgGgEQgEgCgFgCQgFgCgHgBQgOAAgHAMQgIALAAAVQAAAKACAIQACAIAEAFQAEAFAFADQAFADAHAAQAHAAAFgDIAKgEIAGgFIAEgCIACAAIABACIAAADIAAAEIAAAEIAAADIgBABIgCACIgFAFIgIADIgKADIgLACQgLgBgJgEg");
	this.shape_18.setTransform(369.3,336);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#F7F7F7").s().p("AAmA6IgFAAIgDAAIgBgCIgBgBIAAgwIg3AAIAAAwIAAABIgCACIgDAAIgFAAIgFAAIgDAAIgCgCIAAgBIAAhtIAAgBIACgCIADgBIAFAAIAFAAIADABIACACIAAABIAAAtIA3AAIAAgtIABgBIABgCIADgBIAFAAIAFAAIADABIACACIAAABIAABtIAAABIgCACIgDAAIgFAAg");
	this.shape_19.setTransform(357.2,336);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#F7F7F7").s().p("AgYA4QgKgEgGgHQgHgIgEgLQgDgLAAgOQAAgNADgLQAEgLAHgIQAHgJALgEQAKgEANgBQANAAALAFQAJADAIAJQAGAHAEALQADALAAAOQAAAMgDALQgEAMgHAIQgHAIgLAFQgLAFgNAAQgNgBgKgEgAgOgoQgGAEgFAFQgEAGgCAJQgCAHAAAJQAAAIACAJQABAHAEAGQAEAHAGADQAHAEAJAAQAJAAAGgEQAGgDAFgGQAEgGACgHQACgJAAgJQAAgIgBgHQgCgJgEgGQgEgGgGgDQgHgDgKgBQgHAAgHADg");
	this.shape_20.setTransform(344,336);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#F7F7F7").s().p("AAlA6IgGAAIgCAAIgCgCIgBgBIAAhfIgzAAIAABfIAAABIgDACIgDAAIgEAAIgFAAIgDAAIgCgCIgBgBIAAhpQABgEACgCQAAAAAAAAQABgBAAAAQABAAABAAQAAAAABAAIBPAAQABAAABAAQABAAAAAAQABAAAAABQABAAAAAAQABACABAEIAABpIgBABIgBACIgEAAIgEAAg");
	this.shape_21.setTransform(330.9,336);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#F7F7F7").s().p("AAkA7IgEAAIgEAAIgCgCIAAgCIAAguIgLAAQgIAAgEABQgDACgDADIgHAHIgFALIgJAVIgBADIgCACIgEAAIgFAAIgEAAIgDAAIgCgBIgBgCIABgDIADgHIAIgUQAEgIAFgFQAFgGAHgDQgMgCgIgGQgGgIAAgLQgBgIAEgHQADgGAGgEQAHgFAKgDQAJgCAKAAIAHAAIAJABIAIAAIAGABQADAAACACQACACAAAEIAABnIAAACIgCACIgCAAIgGAAgAgEgpQgGABgDADQgDADgCADQgCADABAFQAAAEABADQACAEAEACQADADAFABQAEACAJAAIARAAIAAglIgJgCIgJAAQgHAAgFACg");
	this.shape_22.setTransform(317.9,336);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#F7F7F7").s().p("AAnBVIgFAAIgDgBIgCgBIgBgCIAAg/IABgKIAAgIIgFAIIgHAKIguA/IgCACIgBABIgDABIgEAAIgEAAIgDgBIgBgBIgBgCIAAhtIABgBIACgCIACAAIAFAAIAIABQABAAAAAAQABAAAAABQAAAAAAAAQABABAAAAIAAA/IgBAJIAAAKIAFgJIAHgJIAthAIACgBIACgCIADAAIAEAAIAFAAIACAAIABACIABABIAABtIgBACIgBABIgDABIgFAAgAgPgwQgGgDgFgEQgFgEgDgHQgBgGAAgIIAAgCIABgBIADgBIAFAAIAEAAIADABIACACIAAACQgBAEACADQABAEACACQADADADABQAEABAEAAQAEAAAEgBQAEgBACgDIADgGIABgHIABgCIABgCIADgBIAEAAIAFAAIADABIABABIABACQAAAHgCAHQgCAGgFAEQgEAFgHACQgHADgLAAQgIAAgHgCg");
	this.shape_23.setTransform(300.1,333.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#F7F7F7").s().p("AgjA7IgGAAIgGAAIgHgBQgFgBgCgCQgDgDAAgFIAAhmIABgBIACgBIADgBIAEAAIAIABQABAAAAAAQABAAAAABQAAAAABAAQAAABAAAAIAAAnIAJAAIAKgBQANAAAJADQAIADAGAEQAGAFADAGQADAHAAAIQAAAJgDAHQgDAHgGAGQgHAFgJADQgKADgOAAIgHAAgAgrAAIAAAqIAIABIAKAAQAPAAAHgGQAGgGAAgKQAAgFgCgEQgBgFgDgCQgDgDgGgCQgGAAgIAAIgJAAIgIAAgAA2A6IgEAAIgDgBIgCgBIgBgCIAAhtIABgBIACgBIADgBIAEAAIAFAAIAEABIABABIABABIAABtIgBACIgBABIgEABIgFAAg");
	this.shape_24.setTransform(285,336.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#F7F7F7").s().p("AgNA8IgIgBIgHAAIgHgBQgEAAgDgDQgCgCAAgGIAAhdQAAgFACgDQACgDAFAAIAHgBIAHAAIAIAAIAIgBQALAAAJACQAIACAGAEQAGAEADAFQACAGAAAHQAAAJgFAHQgFAGgJADQAMADAGAGQAGAHAAAMQAAAIgDAHQgDAHgHAEQgGAFgKACQgKADgLAAIgIAAgAgZArIAFABIAFAAIAGAAIAEABQAHAAAGgCQAGgBADgDQAEgDACgDQACgEAAgFQAAgFgCgEQgCgDgEgDQgDgCgGgBQgGgCgHAAIgUAAgAgZgqIAAAiIAVAAQAMAAAGgFQAHgFAAgIQAAgEgCgEIgEgFQgEgCgFgBIgMgBIgKAAIgJABg");
	this.shape_25.setTransform(271.1,336);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#F7F7F7").s().p("AgYA4QgKgEgGgHQgIgIgCgLQgEgLAAgOQAAgNAEgLQADgLAHgIQAHgJALgEQAKgEANgBQANAAAKAFQAKADAIAJQAGAHADALQAEALAAAOQAAAMgEALQgDAMgHAIQgHAIgLAFQgKAFgOAAQgNgBgKgEgAgOgoQgGAEgFAFQgEAGgCAJQgCAHAAAJQAAAIACAJQABAHAEAGQAEAHAGADQAHAEAJAAQAJAAAGgEQAGgDAFgGQAEgGACgHQACgJAAgJQAAgIgBgHQgCgJgEgGQgEgGgHgDQgGgDgKgBQgHAAgHADg");
	this.shape_26.setTransform(258.1,336);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#F7F7F7").s().p("AAmA6IgFAAIgDAAIgBgCIgBgBIAAgwIg3AAIAAAwIAAABIgCACIgDAAIgFAAIgFAAIgDAAIgCgCIAAgBIAAhtIAAgBIACgCIADgBIAFAAIAFAAIADABIACACIAAABIAAAtIA3AAIAAgtIABgBIABgCIADgBIAFAAIAFAAIADABIACACIAAABIAABtIAAABIgCACIgDAAIgFAAg");
	this.shape_27.setTransform(244.8,336);

	this.text = new cjs.Text("", "20px 'Calibri'", "#333333");
	this.text.lineHeight = 26;
	this.text.parent = this;
	this.text.setTransform(261.1,250.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[]},30).wait(471));

	// firstBackground
	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#00FF00").ss(1,1,1).p("EhDGggVMCGNAAAMAAABArMiGNAAAg");
	this.shape_28.setTransform(428.5,206);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#333333").s().p("EhDGAgWMAAAhArMCGNAAAMAAABArg");
	this.shape_29.setTransform(428.5,206);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_29},{t:this.shape_28}]}).to({state:[]},30).wait(471));

	// jumpingFrog
	this.instance_1 = new lib.Анимация3("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(802,450);
	this.instance_1._off = true;

	this.instance_2 = new lib.Анимация4("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(590,175);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(30).to({_off:false},0).to({_off:true,x:590,y:175},19).wait(452));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(30).to({_off:false},19).to({x:512,y:230},10).to({x:447,y:171},10).to({x:386.1,y:229},10).to({startPosition:0},10).to({x:363.1,y:170},10).to({y:237},10).to({y:166},10).to({y:225},10).to({x:15.1,y:-182},19).to({_off:true},1).wait(352));

	// newPlace
	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#B3B34E").s().p("AgGBlQgDgBgCgCIgDgFIAAgIIAAgIIADgGQACgBADgBIAGgBIAIABQACABACABQACACABAEIAAAIIAAAIQgBADgCACQgCACgCABIgIABIgGgBgAAAAyIgEAAIgDgBIgCgBIgBgDIgCiKIAAgDIACgDIAFgBIAFgBIAHABIAEABIACADIAAADIgCCKIgBADIgBABIgEABIgFAAg");
	this.shape_30.setTransform(705.6,134);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#B3B34E").s().p("AAoBGIgEgBIgCgBIAAgCIAAg6IhDAAIAAA6IAAACIgCABIgEABIgGAAIgGAAIgDgBIgCgBIgBgCIAAiDIABgCIACgBIADgBIAGgBIAGABIAEABIACABIAAACIAAA2IBDAAIAAg2IAAgCIACgBIAEgBIAGgBIAGABIADABIACABIABACIAACDIgBACIgCABIgDABIgGAAIgGAAg");
	this.shape_31.setTransform(692.1,137.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#B3B34E").s().p("AgaBFQgJgCgFgGQgHgEgCgIQgEgHAAgKQAAgLAFgIQAEgIAIgFQAJgFAMgDQAMgCAPgBIASAAIAAgKQAAgHgCgHQgBgFgDgEQgEgEgGgCQgGgCgIAAQgIAAgHACIgNAFIgJAFIgFACIgCgBIgCgBIAAgEIAAgDIAAgHIACgDIAHgFIALgEQAHgDAHgBIAOgCQAOAAAKAEQAKADAHAGQAFAHAEAIQACAKAAAMIAABYIgBADIgDABIgGAAIgGAAIgDgBIgBgDIAAgNQgJAJgLAFQgLAGgLgBQgKAAgIgDgAgHAHQgHACgFAEQgEACgDAGQgDAEABAGQgBAKAIAHQAGAFAMAAQAIAAAIgEQAIgGAJgJIAAgcIgVAAQgJAAgHABg");
	this.shape_32.setTransform(676.5,137.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#B3B34E").s().p("Ag2BhIgDgBIgCgBIAAgCIAAi3IAAgCIACgCIADAAIAFgBIAFABIAEAAIABACIAAACIAAARIAMgKIAMgIQAFgDAGgBQAFgCAGAAQAPAAAKAGQAKAFAHAKQAGAKADANQACAMAAAPQAAARgDANQgEANgHAKQgIAKgKAFQgLAFgNAAQgGAAgEgBIgKgEQgFgCgFgEIgKgJIAABCIAAACIgCABIgDABIgGABIgHgBgAgFhLIgJAFQgGADgEAFIgMAMIAAAzQALAMAIAHQAKAGAJAAQAIAAAHgEQAHgFADgHQAFgHABgIQACgJAAgKQAAgKgBgJQgBgKgEgHQgEgHgHgFQgFgEgKAAQgEAAgEABg");
	this.shape_33.setTransform(662.3,139.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#B3B34E").s().p("AgdBEQgMgGgIgJQgIgJgEgNQgEgNAAgRQAAgPAFgOQAEgNAIgKQAJgJAMgGQAMgFARgBQAPABANAEQAMAFAIAJQAIAKAEANQAEANAAAQQAAAPgEAOQgFANgIAKQgIALgNAFQgNAGgQgBQgPAAgNgEgAgRgvQgIADgFAHQgFAHgDAKQgCAJAAALQAAAKACAKQACAKAFAGQAFAIAHAEQAIAEALAAQALAAAHgEQAIgDAFgIQAFgGADgKQACgKAAgLQAAgKgCgJQgCgKgFgHQgEgHgIgEQgIgFgMAAQgKABgHAEg");
	this.shape_34.setTransform(646.1,137.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#B3B34E").s().p("AgFBGIgEgBIgBgBIgBgCIAAhxIgoAAIgCgBIgBgCIgBgDIAAgFIAAgFIABgDIABgCIACgBIBnAAIACABIABACIABADIAAAFIAAAFIgBADIgBACIgCABIgoAAIAABxIgBACIgCABIgDABIgGAAIgFAAg");
	this.shape_35.setTransform(632.8,137.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#B3B34E").s().p("AgRBEQgMgFgGgJQgIgJgEgNQgEgNAAgSQAAgSAFgOQAEgOAJgJQAIgJALgEQAMgEAMgBIAMABIALAEIAJAEIAGAFIACACIABACIAAAEIAAAEIgBAIQAAABAAAAQgBABAAAAQgBAAAAAAQgBAAAAAAQgCABgDgDIgHgGIgLgEQgGgDgIAAQgRAAgJANQgJAOAAAYQgBANADAKQACAJAFAHQAFAGAGAEQAGACAJAAQAJAAAFgCIAMgGIAIgGQACgDACAAIACABIABACIABAEIAAAFIAAAEIgBADIgBACIgCADIgGAFIgKAFIgMADQgGABgHAAQgOAAgKgEg");
	this.shape_36.setTransform(620.8,137.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#B3B34E").s().p("AgWBEQgMgFgJgJQgIgIgEgOQgFgNAAgTQAAgQAFgNQAEgNAJgKQAIgKALgEQAMgGAOAAQAPAAALAGQALAEAHAJQAHAIADALQAEAMAAANIAAAEQAAAFgDADQgDACgEAAIhWAAQAAAKADAJQACAJAFAHQAFAGAIAEQAJACAKAAQAKABAHgCIANgDIAJgEIAFgBIACAAIABABIABAEIAAAEIAAADIAAADIgBACIgBABIgFADIgKAEIgPADQgIABgKAAQgPAAgMgEgAgNgxQgHADgFAGQgEAFgDAHQgCAIgBAIIBHAAQABgTgJgLQgJgLgSAAQgIAAgGAEg");
	this.shape_37.setTransform(606.7,137.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#B3B34E").s().p("Ag1BhIgEgBIgCgBIAAgCIAAi3IAAgCIABgCIAEAAIAFgBIAFABIAEAAIABACIAAACIAAARIAMgKIAMgIQAFgDAGgBQAFgCAGAAQAPAAAKAGQAKAFAHAKQAGAKADANQACAMAAAPQABARgEANQgEANgHAKQgHAKgLAFQgLAFgNAAQgFAAgFgBIgKgEQgFgCgEgEIgKgJIAABCIgBACIgCABIgDABIgHABIgFgBgAgFhLIgJAFQgFADgFAFIgLAMIAAAzQAJAMAKAHQAIAGAKAAQAIAAAHgEQAHgFAEgHQAEgHABgIQACgJABgKQAAgKgCgJQgBgKgEgHQgEgHgGgFQgHgEgJAAQgEAAgEABg");
	this.shape_38.setTransform(591.9,139.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#B3B34E").s().p("AApBmIgEgBIgCgCIAAgCIAAhLIAAgMIABgLIgIALIgIALIg3BMIgCACIgCACIgDABIgEAAIgGAAIgDgBIgCgCIgBgCIAAiDIABgCIACgBIADAAIAHgBIAJABQABAAAAABQABAAAAAAQAAABAAAAQABABAAAAIAABMIAAALIgBALIAHgLIAHgKIA4hNIABgCIACgBIAEAAIAFgBIAFABIADAAIACABIAAACIAACDIAAACIgCACIgDABIgHAAIgFAAgAgRg6QgJgDgGgFQgFgGgDgHQgDgIAAgJIAAgCIACgCIAEgBIAFAAIAGAAIADABIABACIABADQAAAFACAEQABADADADQADAEAEABQAFACAEAAQAGAAAEgCQAEgBADgEQADgCABgEQABgFAAgEIABgDIACgCIADgBIAFAAIAFAAIAFABIACACIAAACQAAAJgCAHQgDAHgFAGQgGAFgJAEQgIACgMAAQgKAAgIgCg");
	this.shape_39.setTransform(568.7,133.9);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#B3B34E").s().p("AApBGIgEgBIgCgBIAAgCIAAhLIAAgLIABgMIgIAMIgIAKIg3BMIgCACIgCABIgDABIgEAAIgGAAIgDgBIgCgBIgBgCIAAiDIABgCIACgBIAEgBIAGgBIAJACQABAAAAAAQABAAAAABQAAAAAAABQAAAAAAABIAABLIAAAMIAAALIAHgLIAHgKIA4hNIACgCIABgBIAEgBIAFgBIAFABIADABIACABIAAACIAACDIAAACIgCABIgDABIgHAAIgFAAg");
	this.shape_40.setTransform(552.5,137.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#B3B34E").s().p("AAjBGIgEgBIgCgBIgBgCIgOgiIgGgLQgDgFgEgDQgDgDgFgCIgLgBIgLAAIAAA8IAAABIgDABIgDABIgGAAIgFAAIgEgBIgCgBIgBgBIAAiFIABgBIACgBIAEgBIAFgBIAGABIADABIADABIAAABIAAA3IALAAIAKgBIAIgEIAGgHQADgFACgHIANgeIABgCIACgBIAEgBIAGgBIAGABIAEABIABABIABABIgBACIgBAEIgMAdQgDAIgEAEIgHAIIgHAGIgHADIAAAAIAKADIAIAGIAHAJIAGALIAOAiIABACIAAABIABACIAAABIgBACIgCAAIgDABIgGAAIgHAAg");
	this.shape_41.setTransform(538.1,137.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#B3B34E").s().p("AgSBEQgKgFgIgJQgHgJgEgNQgEgNAAgSQAAgSAFgOQAFgOAIgJQAJgJALgEQALgEAMgBIAMABIALAEIAJAEIAGAFIACACIABACIAAAEIAAAEIgBAIQAAABAAAAQgBABAAAAQgBAAAAAAQgBAAAAAAQgCABgDgDIgHgGIgLgEQgGgDgIAAQgRAAgJANQgKAOABAYQAAANACAKQACAJAFAHQAEAGAIAEQAFACAJAAQAJAAAFgCIALgGIAIgGQAEgDABAAIACABIABACIABAEIAAAFIAAAEIgBADIgBACIgBADIgHAFIgKAFIgLADQgHABgHAAQgNAAgMgEg");
	this.shape_42.setTransform(524.3,137.1);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#B3B34E").s().p("AAoBGIgEgBIgCgBIAAgCIAAg6IhDAAIAAA6IAAACIgCABIgEABIgGAAIgGAAIgDgBIgCgBIgBgCIAAiDIABgCIACgBIADgBIAGgBIAGABIAEABIACABIAAACIAAA2IBDAAIAAg2IAAgCIACgBIAEgBIAGgBIAGABIADABIACABIABACIAACDIgBACIgCABIgDABIgGAAIgGAAg");
	this.shape_43.setTransform(509.7,137.1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#B3B34E").s().p("AgcBEQgNgGgIgJQgIgJgEgNQgEgNAAgRQAAgPAEgOQAFgNAIgKQAJgJAMgGQAMgFAQgBQARABAMAEQAMAFAIAJQAIAKAEANQAEANAAAQQAAAPgEAOQgFANgIAKQgJALgMAFQgNAGgQgBQgPAAgMgEgAgRgvQgIADgFAHQgFAHgCAKQgDAJAAALQAAAKADAKQABAKAFAGQAEAIAJAEQAHAEALAAQAKAAAIgEQAIgDAFgIQAGgGABgKQADgKAAgLQAAgKgCgJQgCgKgEgHQgFgHgIgEQgIgFgMAAQgKABgHAEg");
	this.shape_44.setTransform(493.8,137.1);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#B3B34E").s().p("AAmBGIgEgBIgCgBIgBgCIAAhzIg+AAIAABzIAAACIgCABIgDABIgGAAIgHAAIgDgBIgCgBIAAgCIAAh+QAAgFACgCQACgCADAAIBfAAQAEAAACACQABACABAFIAAB+IgBACIgBABIgFABIgFAAIgGAAg");
	this.shape_45.setTransform(478.1,137.1);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#B3B34E").s().p("AAmBHIgEgBIgCgCIAAgCIAAg3IgPAAQgIAAgFABQgFACgDAEQgFADgDAFIgGANIgLAaIgBADIgCACIgFABIgHAAIgEAAIgEAAIgCgCIgBgCIABgDIAEgIIAKgZQAEgKAGgGQAGgHAHgDQgOgDgIgIQgIgJgBgOQABgJADgHQAFgJAIgFQAHgFALgDQALgDAOAAIAIAAIAKABIAJABIAIAAQAEABACACQADADAAAEIAAB8IAAACIgDACIgDABIgHAAIgFAAgAgFgyQgGACgEADQgFADgBAEQgCAFAAAEQAAAGACAEQACAEAEADQAEADAGACQAGABALAAIAUAAIAAgtIgLAAIgKAAQgKgBgGACg");
	this.shape_46.setTransform(462.5,137);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#B3B34E").s().p("AApBmIgEgBIgCgCIAAgCIAAhLIAAgMIAAgLIgHALIgIALIg3BMIgCACIgCACIgDABIgEAAIgGAAIgDgBIgCgCIAAgCIAAiCIAAgDIACgBIADgBIAHAAIAJABQABAAAAABQABAAAAAAQAAABAAAAQAAABAAABIAABKIAAAMIgBALIAIgLIAHgKIA3hMIACgDIACgBIAEgBIAFAAIAFAAIADABIADABIAAADIAACCIgBACIgCACIgDABIgHAAIgFAAgAgSg6QgIgDgGgFQgGgFgCgIQgDgIAAgJIAAgCIACgCIAEgBIAFAAIAGAAIADABIACACIAAADQAAAFACAEQABADADADQADAEAEABQAEACAFAAQAFAAAEgCQAFgBACgEQADgDACgDQACgEAAgFIAAgDIACgCIACgBIAGAAIAFAAIAFABIABACIABACQAAAIgCAIQgDAHgGAGQgFAFgJAEQgIACgMAAQgKAAgJgCg");
	this.shape_47.setTransform(616.1,95.3);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#B3B34E").s().p("AgqBHIgIAAIgHgBIgHAAQgHgBgCgDQgEgEAAgGIAAh6IABgCIACgBIADgBIAGAAIAKABQABAAAAAAQABABAAAAQAAABAAAAQAAABAAAAIAAAvIALgBIANAAQAPAAALADQAKADAIAGQAHAGADAHQADAIAAAKQAAAKgDAJQgDAJgIAGQgIAHgLAEQgMADgRAAIgIAAgAgrAAIgKAAIAAAyIAKABIANABQARAAAJgHQAHgIAAgMQAAgGgCgFQgBgFgEgDQgDgEgIgCQgGgBgLAAIgLABgAA8BFIgFgBIgBgBIgBgCIAAiDIABgCIABgBIAFgBIAFAAIAGAAIAEABIACABIABACIAACDIgBACIgCABIgEABIgGABIgFgBg");
	this.shape_48.setTransform(598,98.5);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#B3B34E").s().p("AgQBIIgJgBIgIAAIgIgBQgHgBgCgDQgDgDAAgGIAAhxQAAgGADgDQADgDAFgBIAIgBIAJAAIAKAAIAJgBQAOAAAJADQALACAHAFQAHAEADAHQADAGABAJQAAALgHAIQgGAIgLADQAPADAHAIQAHAJAAANQAAALgEAIQgEAIgHAFQgJAGgLADQgMADgOAAIgJAAgAgdA0IAFAAIAGABIAGAAIAHAAQAIAAAGgBQAIgCAEgDQAFgDABgFQADgFAAgFQAAgGgDgFQgBgEgFgDQgEgDgIgCIgPgBIgXAAgAgdgzIAAApIAYAAQAOAAAIgGQAIgGAAgKQAAgFgCgEQgBgEgFgCQgEgDgGgBIgPgBIgMAAIgJABg");
	this.shape_49.setTransform(581.3,98.4);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#B3B34E").s().p("AgdBEQgMgFgIgKQgIgJgEgNQgEgNAAgRQAAgPAFgOQADgNAJgKQAIgKANgFQAMgGARAAQAQAAAMAFQAMAFAIAJQAIAKAEANQAEANAAAQQAAAPgEAOQgFANgIAKQgJALgMAFQgMAGgRgBQgQAAgMgEgAgRgwQgIAEgFAHQgFAHgDAJQgCAKAAALQAAAKACAKQACAKAFAGQAFAIAHAEQAIAEALAAQAKAAAJgEQAHgEAFgGQAGgIACgJQACgJAAgMQAAgKgCgJQgCgKgFgHQgEgHgIgEQgIgFgLABQgKAAgIADg");
	this.shape_50.setTransform(565.8,98.5);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#B3B34E").s().p("AAoBGIgEgBIgCgBIAAgCIAAg6IhDAAIAAA6IAAACIgCABIgEABIgGAAIgGAAIgDgBIgCgBIgBgCIAAiDIABgCIACgBIADgBIAGAAIAGAAIAEABIACABIAAACIAAA1IBDAAIAAg1IAAgCIACgBIAEgBIAGAAIAGAAIADABIACABIABACIAACDIgBACIgCABIgDABIgGAAIgGAAg");
	this.shape_51.setTransform(549.8,98.5);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#B3B34E").s().p("AAmBHIgEgBIgCgBIgBgDIAAg3IgNAAQgKAAgFABQgEACgDAEQgFADgDAFIgGANIgLAaIgBADIgCACIgFABIgGAAIgFAAIgEAAIgCgCIgBgCIABgDIAEgIIAKgZQAEgJAGgHQAGgHAIgDQgPgDgIgIQgJgIAAgOQAAgKAFgHQADgJAIgFQAIgFALgDQALgDAOAAIAIAAIAKAAIAJABIAIABQAEABADACQACADAAAEIAAB8IAAADIgCABIgEABIgHAAIgFAAgAgFgyQgHACgDADQgFADgCAFQgBADAAAGQAAAFACAEQACAFAEACQAEADAGACQAGABALAAIATAAIAAgtIgKgBIgKAAQgKABgGABg");
	this.shape_52.setTransform(664.3,59.8);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#B3B34E").s().p("AgRBDQgMgEgGgJQgIgJgEgNQgEgNAAgRQAAgTAFgOQAFgOAIgJQAIgJALgEQAMgFAMAAIAMACIALADIAJAEIAGAFIACACIABACIAAAEIAAAEIgBAIQAAABAAAAQgBABAAAAQgBAAAAAAQgBAAAAAAQgCAAgDgCIgHgFIgLgGQgGgCgIAAQgRAAgJANQgKANABAZQAAANACAJQACAKAFAHQAFAGAGAEQAGACAJAAQAJAAAFgCIAMgGIAHgFQAEgEABAAIACABIABADIABADIAAAFIAAAEIgBADIgBADIgCACIgGAFIgKAEIgLAEQgHACgHAAQgOgBgKgFg");
	this.shape_53.setTransform(651.7,59.9);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#B3B34E").s().p("Ag8BGIgBgBIgBgEIgBgFIABgGIAAgDIACgCIACgBQAFAAAEgCQAEgCAEgFQAEgFADgJQAEgIACgNIAGgbIAEgmQABgFACgCQABgCAEAAIBCAAQAEAAACACQACACAAAFIAAB+IgBACIgCABIgDABIgGAAIgGAAIgEgBIgCgBIAAgCIAAhzIglAAIgEAqQgEARgEAOQgEANgFAJQgFAJgGAGQgGAGgHACQgHADgJAAIgCgBg");
	this.shape_54.setTransform(636.6,60);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#B3B34E").s().p("AgpBHIgIAAIgIgBIgIAAQgFgBgDgDQgDgEAAgGIAAh6IAAgCIACgBIADgBIAGAAIAKABQABAAAAAAQABABAAAAQAAABAAAAQAAABAAAAIAAAvIAMgBIAMAAQAPAAALADQAKADAIAGQAHAGADAHQADAIAAAKQAAAKgDAJQgEAJgHAGQgIAHgLAEQgMADgRAAIgHAAgAgrAAIgKAAIAAAyIAKABIANABQASAAAIgHQAIgIAAgMQAAgGgDgFQgBgFgDgDQgFgEgGgCQgIgBgJAAIgMABgAA8BFIgFgBIgBgBIgBgCIAAiDIABgCIABgBIAFgBIAFAAIAGAAIAEABIACABIABACIAACDIgBACIgCABIgEABIgGABIgFgBg");
	this.shape_55.setTransform(619.9,59.9);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#B3B34E").s().p("Ag2BhIgDgBIgCgBIAAgCIAAi3IAAgCIACgCIADAAIAFgBIAFABIAEAAIABACIAAACIAAARIAMgKIAMgIQAFgDAGgBQAFgCAGAAQAPAAAKAGQAKAFAHAKQAGAKADANQADAMgBAPQAAARgDANQgEANgHAKQgIAKgKAFQgLAFgNAAQgGAAgEgBIgKgEQgFgCgFgEIgKgJIAABCIAAACIgCABIgDABIgHABIgGgBgAgFhLIgJAFQgGADgEAFIgMAMIAAAzQALAMAIAHQAKAGAJAAQAIAAAHgEQAHgFADgHQAFgHABgIQACgJAAgKQAAgKgBgJQgCgKgDgHQgEgHgHgFQgFgEgKAAQgEAAgEABg");
	this.shape_56.setTransform(602.5,62.4);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#B3B34E").s().p("AAjBGIgEgBIgCgBIgBgCIgOgiIgGgLQgDgFgEgDQgDgDgFgCIgLgBIgLAAIAAA8IAAABIgDABIgDABIgGAAIgFAAIgEgBIgCgBIgBgBIAAiFIABgBIACgBIAEgBIAFAAIAGAAIADABIADABIAAABIAAA3IALAAIAKgBIAIgEIAGgHQADgFACgGIANgfIABgCIACgBIAEgBIAGAAIAGAAIAEABIABABIABABIgBACIgBAEIgMAdQgDAIgEAEIgHAIIgHAGIgHACIAAABIAKADIAIAGIAHAJIAGAMIAOAhIABACIAAACIABABIAAABIgBABIgCABIgDABIgGAAIgHAAg");
	this.shape_57.setTransform(587.9,59.9);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#B3B34E").s().p("AgFBGIgEgBIgCgBIAAgCIAAhxIgnAAIgDgBIgBgCIgBgDIgBgFIABgFIABgDIABgCIADgBIBlAAIADABIABACIACADIAAAFIAAAFIgCADIgBACIgDABIgnAAIAABxIAAACIgDABIgDABIgGAAIgFAAg");
	this.shape_58.setTransform(574.5,59.9);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#B3B34E").s().p("AgdBDQgMgEgIgKQgIgJgEgNQgEgNAAgRQAAgPAEgOQAFgNAIgKQAJgJAMgGQANgGAPAAQARAAAMAFQAMAFAIAKQAIAIAEAOQAEANAAAQQAAAQgEANQgFANgIAKQgIALgNAFQgNAGgQAAQgPgBgNgFgAgRgwQgIAEgFAHQgFAHgDAJQgCAKAAALQAAALACAJQACAJAFAIQAFAGAHAFQAIAEALAAQALAAAHgEQAIgEAFgGQAFgIADgJQACgJAAgMQAAgKgCgJQgCgKgEgHQgFgHgIgEQgIgFgMABQgKAAgHADg");
	this.shape_59.setTransform(561,59.9);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#B3B34E").s().p("AgQAmIgEAAIgCgBIgBgCIAAgCIAUgnIAAgTIABgGIACgEIAEgBIAGgBIAGABIAFABIACAEIABAGIAAAJIgCAHIgCAHIgFAFIgTAfIgBABIgDACIgDABIgFAAg");
	this.shape_60.setTransform(541.8,67.3);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#B3B34E").s().p("AgaBFQgJgCgFgGQgHgEgCgIQgEgIAAgJQAAgLAFgIQAEgJAIgEQAJgFAMgDQAMgCAPgBIASAAIAAgKQAAgIgCgFQgBgGgDgEQgEgEgGgCQgGgCgIAAQgIAAgHACIgNAFIgJAFIgFABIgCAAIgBgBIgBgDIAAgFIAAgGIACgDIAHgFIALgFQAHgCAHgBIAOgCQAOABAKADQAKADAHAGQAFAHAEAJQACAJAAAMIAABYIgBACIgDACIgGAAIgGAAIgEgCIAAgCIAAgNQgJAJgLAFQgLAGgLAAQgKgBgIgDgAgHAHQgHACgFAEQgFACgCAGQgDAEABAGQgBAKAIAHQAGAFAMAAQAIAAAIgEQAIgGAJgJIAAgcIgVAAQgJAAgHABg");
	this.shape_61.setTransform(531.2,59.9);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#B3B34E").s().p("Ag2BhIgDgBIgCgBIAAgCIAAi3IAAgCIACgCIADAAIAFgBIAFABIAEAAIABACIAAACIAAARIAMgKIAMgIQAFgDAGgBQAFgCAGAAQAPAAAKAGQAKAFAHAKQAGAKADANQADAMgBAPQAAARgDANQgEANgHAKQgIAKgKAFQgLAFgNAAQgGAAgEgBIgKgEQgFgCgFgEIgKgJIAABCIAAACIgCABIgDABIgHABIgGgBgAgFhLIgJAFQgGADgEAFIgMAMIAAAzQALAMAIAHQAKAGAJAAQAIAAAHgEQAHgFADgHQAFgHABgIQACgJAAgKQAAgKgBgJQgCgKgDgHQgEgHgHgFQgFgEgKAAQgEAAgEABg");
	this.shape_62.setTransform(517,62.4);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#B3B34E").s().p("AgmBgIgGgBIgFgCIgEgCIgBgCIgBgCIgBgEIAAgFIABgIQABgBAAAAQAAgBABAAQAAAAABgBQAAAAABAAIACABIAEACIAFACIAIABIAHAAIAGgEIAGgHIAGgNIhDiHIgCgEIABgDIAEgCIAIAAIAGAAIAFABIACACIACADIAiBFIAKAVIAJAWIABAAIAIgWIAJgYIAbhDIABgDIACgBIAFgBIAHAAIAHAAIAEACIABACIgBADIg2CCIgMAbQgGALgFAGQgHAGgHACQgHACgJAAIgHAAg");
	this.shape_63.setTransform(501.8,57.4);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#F7F7F7").ss(1,1,1).p("AbMAAQAAGPn+EbQn9EbrRAAQrQAAn+kbQn9kbAAmPQAAmPH9kbQH+kaLQAAQLRAAH9EaQH+EbAAGPg");
	this.shape_64.setTransform(590,107.6);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#333333").s().p("AzOKqQn9kaAAmQQAAmPH9kaQH+kbLQAAQLRAAH+EbQH9EaAAGPQAAGQn9EaQn+EbrRAAQrQAAn+kbg");
	this.shape_65.setTransform(590,107.6);

	this.instance_3 = new lib.Анимация9("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(590,107.6);
	this.instance_3._off = true;

	this.instance_4 = new lib.Анимация10("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(445,-103.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30}]},89).to({state:[{t:this.instance_3}]},40).to({state:[{t:this.instance_4}]},19).to({state:[]},1).wait(352));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(129).to({_off:false},0).to({_off:true,x:445,y:-103.5},19).wait(353));

	// eatingFrog
	this.instance_5 = new lib.Анимация5("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(-123,291);
	this.instance_5._off = true;

	this.instance_6 = new lib.Анимация6("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(492,275);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(149).to({_off:false},0).to({_off:true,x:492,y:275},31).wait(321));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(149).to({_off:false},31).to({startPosition:0},9).to({x:975},60).to({_off:true},1).wait(251));

	// tasty
	this.instance_7 = new lib.Анимация7("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(258.1,-72);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(180).to({_off:false},0).to({y:105},9).to({x:963},60).to({_off:true},1).wait(251));

	// dance
	this.instance_8 = new lib.Анимация22("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(408,-82);
	this.instance_8._off = true;

	this.instance_9 = new lib.Анимация23("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(462,93);
	this.instance_9._off = true;

	this.instance_10 = new lib.Анимация24("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(560,93);
	this.instance_10._off = true;

	this.instance_11 = new lib.Анимация25("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(656,97);
	this.instance_11._off = true;

	this.instance_12 = new lib.Анимация26("synched",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(742,125);
	this.instance_12._off = true;

	this.instance_13 = new lib.Анимация27("synched",0);
	this.instance_13.parent = this;
	this.instance_13.setTransform(905,129);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(280).to({_off:false},0).to({_off:true,x:462,y:93},9).wait(212));
	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(280).to({_off:false},9).to({_off:true,x:560},10).wait(202));
	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(289).to({_off:false},10).to({_off:true,x:656,y:97},11).wait(191));
	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(299).to({_off:false},11).to({_off:true,x:742,y:125},9).wait(182));
	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(310).to({_off:false},9).to({_off:true,x:905,y:129},10).wait(172));
	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(319).to({_off:false},10).to({x:1002,y:191},10).to({startPosition:0},11).to({_off:true},1).wait(150));

	// dancingFrog
	this.instance_14 = new lib.Анимация11("synched",0);
	this.instance_14.parent = this;
	this.instance_14.setTransform(0,361);
	this.instance_14._off = true;

	this.instance_15 = new lib.Анимация12("synched",0);
	this.instance_15.parent = this;
	this.instance_15.setTransform(140,218);
	this.instance_15._off = true;

	this.instance_16 = new lib.Анимация13("synched",0);
	this.instance_16.parent = this;
	this.instance_16.setTransform(190,271);
	this.instance_16._off = true;

	this.instance_17 = new lib.Анимация14("synched",0);
	this.instance_17.parent = this;
	this.instance_17.setTransform(190,218);
	this.instance_17._off = true;

	this.instance_18 = new lib.Анимация15("synched",0);
	this.instance_18.parent = this;
	this.instance_18.setTransform(244,275);
	this.instance_18._off = true;

	this.instance_19 = new lib.Анимация16("synched",0);
	this.instance_19.parent = this;
	this.instance_19.setTransform(359,212);
	this.instance_19._off = true;

	this.instance_20 = new lib.Анимация17("synched",0);
	this.instance_20.parent = this;
	this.instance_20.setTransform(453,266);
	this.instance_20._off = true;

	this.instance_21 = new lib.Анимация18("synched",0);
	this.instance_21.parent = this;
	this.instance_21.setTransform(550,218);
	this.instance_21._off = true;

	this.instance_22 = new lib.Анимация19("synched",0);
	this.instance_22.parent = this;
	this.instance_22.setTransform(626,275);
	this.instance_22._off = true;

	this.instance_23 = new lib.Анимация20("synched",0);
	this.instance_23.parent = this;
	this.instance_23.setTransform(733,275);
	this.instance_23._off = true;

	this.instance_24 = new lib.Анимация21("synched",0);
	this.instance_24.parent = this;
	this.instance_24.setTransform(975,292);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_14}]},250).to({state:[{t:this.instance_15}]},10).to({state:[{t:this.instance_16}]},10).to({state:[{t:this.instance_17}]},10).to({state:[{t:this.instance_18}]},9).to({state:[{t:this.instance_19}]},10).to({state:[{t:this.instance_20}]},11).to({state:[{t:this.instance_21}]},9).to({state:[{t:this.instance_22}]},10).to({state:[{t:this.instance_23}]},10).to({state:[{t:this.instance_24}]},11).to({state:[]},1).wait(150));
	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(250).to({_off:false},0).to({_off:true,x:140,y:218},10).wait(241));
	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(250).to({_off:false},10).to({_off:true,x:190,y:271},10).wait(231));
	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(260).to({_off:false},10).to({_off:true,y:218},10).wait(221));
	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(270).to({_off:false},10).to({_off:true,x:244,y:275},9).wait(212));
	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(280).to({_off:false},9).to({_off:true,x:359,y:212},10).wait(202));
	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(289).to({_off:false},10).to({_off:true,x:453,y:266},11).wait(191));
	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(299).to({_off:false},11).to({_off:true,x:550,y:218},9).wait(182));
	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(310).to({_off:false},9).to({_off:true,x:626,y:275},10).wait(172));
	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(319).to({_off:false},10).to({_off:true,x:733},10).wait(162));
	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(329).to({_off:false},10).to({_off:true,x:975,y:292},11).wait(151));

	// overwise
	this.instance_25 = new lib.Анимация30("synched",0);
	this.instance_25.parent = this;
	this.instance_25.setTransform(466.1,-43.4);
	this.instance_25._off = true;

	this.instance_26 = new lib.Анимация31("synched",0);
	this.instance_26.parent = this;
	this.instance_26.setTransform(643.1,144.6);
	this.instance_26._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(371).to({_off:false},0).to({_off:true,x:643.1,y:144.6},28).wait(102));
	this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(371).to({_off:false},28).to({x:1326.1},41).to({_off:true},1).wait(60));

	// eatingFrog
	this.instance_27 = new lib.Анимация28("synched",0);
	this.instance_27.parent = this;
	this.instance_27.setTransform(104,-63);
	this.instance_27._off = true;

	this.instance_28 = new lib.Анимация29("synched",0);
	this.instance_28.parent = this;
	this.instance_28.setTransform(363,273);
	this.instance_28._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_27).wait(351).to({_off:false},0).to({_off:true,x:363,y:273},28).wait(122));
	this.timeline.addTween(cjs.Tween.get(this.instance_28).wait(351).to({_off:false},28).to({startPosition:0},20).to({x:951},41).to({_off:true},1).wait(60));

	// logotype
	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#F7F7F7").s().p("AgTA4QgJgDgIgIQgGgHgEgMQgDgLAAgPQAAgMADgMQAEgLAGgIQAIgIAJgEQAKgFALAAQANAAAJAFQAJAEAGAHQAGAHACAKQAEAJAAAKIAAAFQgBADgCACQgDACgCAAIhIAAQAAAJACAHQACAIAEAFQAFAGAGACQAHADAJAAQAIAAAGgBIALgDIAHgDIAFgCIABABIABABIAAADIABAEIgBACIAAACIAAACIgBACIgEACIgJACIgMADQgHABgHABQgNAAgLgFgAgLgpQgFADgEAEQgFAFgCAGQgCAGAAAIIA7AAQABgQgIgKQgHgJgPAAQgGABgGACg");
	this.shape_66.setTransform(655.4,317.8);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#F7F7F7").s().p("AAjA7IgFAAIgEgBIgCgBIgBgCIgLgcIgGgJIgFgHQgCgCgEgBQgFgCgFAAIgIAAIAAAxIgCACIgBABIgDABIgFAAIgEAAIgDgBIgCgBIgBgCIAAhuIABgBIACgBIADAAIAEAAIAFAAIADAAIABABIACABIAAAuIAIAAIAIgBIAHgEQACgCADgDIAEgJIALgaIABgBIACgCIADAAIAFAAIAFAAIADAAIACABIAAABIAAACIgBADIgLAYIgFAKIgGAHIgGAFIgGACIAAABIAIACIAHAFIAFAIIAGAJIALAcIABACIAAABIABABIAAABIgBABIgBABIgDABIgFAAg");
	this.shape_67.setTransform(644.2,317.8);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#F7F7F7").s().p("AgOA4QgJgEgHgHQgGgHgDgMQgDgLAAgOQAAgPAEgMQAEgLAHgIQAGgHAKgDQAJgFAKAAIAKABIAJAEIAIADIAEAEIACACIABACIABACIAAAEIgBAHQAAAAgBABQAAAAAAAAQgBAAAAAAQAAABgBAAQAAAAgBgBQAAAAgBAAQAAAAgBgBQgBAAAAgBIgGgEQgEgDgFgBQgFgCgHgBQgOAAgHAMQgIALAAAUQAAALACAIQACAIAEAFQAEAGAFADQAFACAHAAQAHAAAFgCIAKgFIAGgFIAEgCIACAAIABACIAAADIAAAEIAAAEIAAACIgBACIgCACIgFAFIgIADIgKADIgLACQgLAAgJgFg");
	this.shape_68.setTransform(632.7,317.8);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#F7F7F7").s().p("AAmA7IgFAAIgDgBIgBgCIgBgBIAAgwIg3AAIAAAwIAAABIgCACIgDABIgFAAIgFAAIgDgBIgCgCIAAgBIAAhtIAAgBIACgBIADgBIAFAAIAFAAIADABIACABIAAABIAAAtIA3AAIAAgtIABgBIABgBIADgBIAFAAIAFAAIADABIACABIAAABIAABtIAAABIgCACIgDABIgFAAg");
	this.shape_69.setTransform(620.6,317.8);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#F7F7F7").s().p("AAnA7IgFAAIgDgBIgCgCIgBgBIAAg+IABgKIAAgKIgFAKIgIAJIgtA/IgBACIgCABIgDABIgEAAIgEAAIgDgBIgBgCIgBgBIAAhtIABgBIABgCIADAAIAFAAIAIABQABAAAAAAQABAAAAAAQAAABAAAAQAAAAAAABIAAA/IAAAJIAAAJIAFgJIAGgJIAug/IACgBIACgCIADAAIAEAAIAEAAIADAAIACACIAAABIAABtIAAABIgCACIgDABIgFAAg");
	this.shape_70.setTransform(607.2,317.8);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#F7F7F7").s().p("ABLBPIgFAAIgDAAIgCgCIAAgBIAAiJIAAAAIg4CJIgBACIgCABIgDAAIgDAAIgFAAIgDAAIgBgBIgBgCIg2iJIAACJIAAABIgCACIgDAAIgFAAIgGAAIgDAAIgBgCIgBgBIAAiRQAAgFADgCQADgCADAAIANAAIAHABIAFACIAEAEIACAGIAtBxIAAAAIAvhxIADgGIAEgEIAEgCIAFgBIAOAAIAEAAIACACIACADIABAEIAACRIAAABIgCACIgDAAIgGAAg");
	this.shape_71.setTransform(589.8,315.7);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#F7F7F7").s().p("AgNA8IgIgBIgHAAIgHgBQgEAAgDgDQgCgCAAgGIAAhdQAAgFACgDQACgDAFAAIAHgBIAHAAIAIAAIAIgBQALAAAJACQAIACAGAEQAGAEADAFQACAGAAAHQAAAJgFAHQgFAGgJADQAMADAGAGQAGAHAAAMQAAAIgDAHQgDAHgHAEQgGAFgKACQgKADgLAAIgIAAgAgZArIAFABIAFAAIAGAAIAEABQAHAAAGgCQAGgBADgDQAEgDACgDQACgEAAgFQAAgFgCgEQgCgDgEgDQgDgCgGgBQgGgCgHAAIgUAAgAgZgqIAAAiIAVAAQAMAAAGgFQAHgFAAgIQAAgEgCgEIgEgFQgEgCgFgBIgMgBIgKAAIgJABg");
	this.shape_72.setTransform(567.8,317.7);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#F7F7F7").s().p("AAmA7IgFAAIgDgBIgBgCIgBgBIAAgwIg3AAIAAAwIAAABIgCACIgDABIgFAAIgFAAIgDgBIgCgCIAAgBIAAhtIAAgBIACgBIADgBIAFAAIAFAAIADABIACABIAAABIAAAtIA3AAIAAgtIABgBIABgBIADgBIAFAAIAFAAIADABIACABIAAABIAABtIAAABIgCACIgDABIgFAAg");
	this.shape_73.setTransform(549.1,317.8);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#F7F7F7").s().p("AgWA6QgHgCgFgEQgFgFgCgGQgDgGAAgIQAAgKAEgGQAEgHAHgEQAHgEAKgDQAKgBAMgBIAPAAIAAgIQAAgHgBgEQgCgGgCgCQgDgEgFgCQgFgBgHAAQgGAAgGACIgLAEIgHADIgFACIgBAAIgCgCIAAgCIgBgDIABgGIACgCIAGgFIAJgDIALgDIAMgCQAMAAAIAEQAIACAFAFQAGAFACAIQACAIAAAKIAABJIgBACIgCACIgFAAIgFAAIgDgCIgBgCIAAgLQgHAIgJAEQgJAEgJABQgJgBgHgCgAgFAHQgHABgEACQgEADgBAEQgCAEAAAFQAAAJAFAEQAFAGAKgBQAHAAAHgDQAHgFAHgIIAAgXIgRAAQgIAAgFACg");
	this.shape_74.setTransform(536.1,317.8);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#F7F7F7").s().p("AgsBRIgDgBIgCgBIgBgBIAAiZIABgBIABgCIADAAIAEAAIAEAAIADAAIACACIAAABIAAAPIAKgJQAEgEAFgCQAFgDAFgBQAEgCAFAAQAMAAAJAFQAIAFAFAIQAGAIACAKQADALAAANQAAANgEALQgDALgGAJQgGAHgJAFQgJAEgLABIgIgBIgIgEIgIgFIgIgHIAAA3IgBABIgCABIgDABIgFAAIgEAAgAgEg+QgEABgEADIgIAHIgJAKIAAAqQAIAKAHAFQAIAGAHAAQAIAAAFgEQAGgDADgHIAFgMQACgHAAgJQAAgIgCgIQgBgHgDgGQgDgHgGgDQgFgEgIAAIgGABg");
	this.shape_75.setTransform(524.2,319.9);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#F7F7F7").s().p("AgYA4QgKgDgHgJQgHgHgDgLQgDgLAAgOQAAgMADgMQAEgLAHgIQAHgIAKgFQALgFANAAQAOAAAKAFQAJAEAIAHQAGAIAEALQADALAAAOQAAAMgDAMQgEALgHAIQgIAIgKAFQgLAEgMABQgOAAgKgFgAgOgnQgHADgEAGQgEAGgCAHQgCAJAAAIQAAAIABAJQACAHAEAGQAEAHAGADQAHADAJABQAJgBAGgDQAHgDAEgFQAEgGACgIQACgJAAgJQAAgIgBgIQgDgHgDgGQgEgHgGgDQgHgDgKgBQgIAAgGAEg");
	this.shape_76.setTransform(510.7,317.8);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#F7F7F7").s().p("AAAA6IgEAAIgDAAIgBgCIgBgBIAAheIghAAIgCgBIgBgBIgBgDIAAgEIAAgEIABgDIABgCIACAAIBVAAIACAAIABACIABADIAAAEIAAAEIgBADIgBABIgCABIghAAIAABeIAAABIgCACIgDAAIgFAAg");
	this.shape_77.setTransform(499.5,317.8);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#F7F7F7").s().p("AgOA4QgJgEgHgHQgGgHgDgMQgDgLAAgOQAAgPAEgMQAEgLAHgIQAGgHAKgDQAJgFAKAAIAKABIAJAEIAIADIAEAEIACACIABACIABACIAAAEIgBAHQgBAAAAABQAAAAAAAAQgBAAAAAAQAAABgBAAQAAAAgBgBQAAAAgBAAQAAAAgBgBQgBAAAAgBIgGgEQgEgDgFgBQgFgCgHgBQgOAAgHAMQgIALAAAUQAAALACAIQACAIAEAFQAEAGAFADQAFACAHAAQAHAAAFgCIAKgFIAGgFIAEgCIACAAIABACIAAADIAAAEIAAAEIAAACIgBACIgCACIgFAFIgIADIgKADIgLACQgLAAgJgFg");
	this.shape_78.setTransform(489.6,317.8);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#F7F7F7").s().p("AgTA4QgJgDgIgIQgGgHgEgMQgDgLAAgPQAAgMADgMQAEgLAGgIQAIgIAJgEQAKgFALAAQANAAAJAFQAJAEAGAHQAGAHADAKQACAJAAAKIAAAFQABADgDACQgDACgDAAIhHAAQAAAJACAHQACAIAEAFQAFAGAGACQAHADAJAAQAIAAAGgBIALgDIAHgDIAEgCIACABIABABIABADIAAAEIAAACIAAACIgBACIgCACIgDACIgJACIgMADQgHABgHABQgNAAgLgFgAgLgpQgGADgEAEQgDAFgDAGQgBAGgBAIIA7AAQAAgQgHgKQgIgJgOAAQgGABgGACg");
	this.shape_79.setTransform(477.9,317.8);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#F7F7F7").s().p("AgsBRIgDgBIgCgBIgBgBIAAiZIABgBIABgCIADAAIAEAAIAEAAIADAAIACACIAAABIAAAPIAKgJQAEgEAFgCQAFgDAFgBQAEgCAFAAQAMAAAJAFQAIAFAFAIQAGAIACAKQADALAAANQAAANgEALQgDALgGAJQgGAHgJAFQgJAEgLABIgIgBIgIgEIgIgFIgIgHIAAA3IgBABIgCABIgDABIgFAAIgEAAgAgEg+QgEABgEADIgIAHIgJAKIAAAqQAIAKAHAFQAIAGAHAAQAIAAAFgEQAGgDADgHIAFgMQACgHAAgJQAAgIgCgIQgBgHgDgGQgDgHgGgDQgFgEgIAAIgGABg");
	this.shape_80.setTransform(465.5,319.9);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#F7F7F7").s().p("AAnBVIgFAAIgDgBIgCgBIAAgCIAAg/IAAgKIABgIIgHAIIgGAKIguA/IgCACIgBABIgDABIgEAAIgEAAIgDgBIgCgBIAAgCIAAhtIAAgBIADgCIADAAIAEAAIAIABQABAAAAAAQABAAAAABQAAAAAAAAQABABAAAAIAAA/IgBAJIgBAKIAGgJIAHgJIAuhAIABgBIACgCIADAAIAEAAIAFAAIACAAIABACIABABIAABtIgBACIgBABIgDABIgFAAgAgOgwQgHgDgFgEQgFgEgCgHQgCgGAAgIIAAgCIACgBIACgBIAFAAIAEAAIADABIACACIAAACQAAAEABADQABAEACACQADADAEABQADABAEAAQAFAAADgBQADgBADgDIAEgGIABgHIAAgCIABgCIADgBIAEAAIAFAAIADABIACABIAAACQAAAHgCAHQgCAGgEAEQgFAFgHACQgHADgKAAQgIAAgHgCg");
	this.shape_81.setTransform(446.2,315.1);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#F7F7F7").s().p("AAnA7IgFAAIgDgBIgCgCIAAgBIAAg+IAAgKIABgKIgHAKIgGAJIguA/IgCACIgBABIgDABIgEAAIgEAAIgDgBIgCgCIAAgBIAAhtIAAgBIADgCIADAAIAEAAIAIABQABAAAAAAQABAAAAAAQAAABAAAAQABAAAAABIAAA/IgBAJIgBAJIAGgJIAHgJIAug/IABgBIACgCIADAAIAEAAIAFAAIACAAIABACIABABIAABtIgBABIgBACIgDABIgFAAg");
	this.shape_82.setTransform(432.7,317.8);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#F7F7F7").s().p("AAjA7IgFAAIgEgBIgCgBIgBgCIgLgcIgGgJIgFgHQgCgCgEgBQgFgCgFAAIgIAAIAAAxIgBACIgCABIgDABIgFAAIgFAAIgCgBIgCgBIgBgCIAAhuIABgBIACgBIACAAIAFAAIAFAAIADAAIACABIABABIAAAuIAIAAIAJgBIAGgEQADgCACgDIAEgJIALgaIABgBIACgCIADAAIAFAAIAFAAIADAAIACABIAAABIAAACIgBADIgLAYIgFAKIgGAHIgGAFIgGACIAAABIAIACIAHAFIAFAIIAGAJIALAcIABACIAAABIABABIAAABIgBABIgBABIgDABIgFAAg");
	this.shape_83.setTransform(420.7,317.8);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#F7F7F7").s().p("AgOA4QgJgEgHgHQgGgHgDgMQgDgLAAgOQAAgPAEgMQAEgLAHgIQAGgHAKgDQAJgFAKAAIAKABIAJAEIAIADIAEAEIACACIABACIABACIAAAEIgBAHQAAAAgBABQAAAAAAAAQgBAAAAAAQAAABgBAAQAAAAgBgBQAAAAgBAAQAAAAgBgBQgBAAAAgBIgGgEQgEgDgFgBQgFgCgHgBQgOAAgHAMQgIALAAAUQAAALACAIQACAIAEAFQAEAGAFADQAFACAHAAQAHAAAFgCIAKgFIAGgFIAEgCIACAAIABACIAAADIAAAEIAAAEIAAACIgBACIgCACIgFAFIgIADIgKADIgLACQgLAAgJgFg");
	this.shape_84.setTransform(409.2,317.8);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#F7F7F7").s().p("AAmA7IgFAAIgDgBIgBgCIgBgBIAAgwIg3AAIAAAwIAAABIgCACIgDABIgFAAIgFAAIgDgBIgCgCIAAgBIAAhtIAAgBIACgBIADgBIAFAAIAFAAIADABIACABIAAABIAAAtIA3AAIAAgtIABgBIABgBIADgBIAFAAIAFAAIADABIACABIAAABIAABtIAAABIgCACIgDABIgFAAg");
	this.shape_85.setTransform(397.1,317.8);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#F7F7F7").s().p("AgYA4QgKgDgHgJQgHgHgDgLQgDgLAAgOQAAgMADgMQAEgLAHgIQAHgIAKgFQALgFANAAQAOAAAKAFQAJAEAIAHQAGAIAEALQADALAAAOQAAAMgDAMQgEALgHAIQgIAIgKAFQgLAEgMABQgOAAgKgFgAgOgnQgHADgEAGQgEAGgCAHQgCAJAAAIQAAAIABAJQACAHAEAGQAEAHAGADQAHADAJABQAJgBAGgDQAHgDAEgFQAEgGACgIQACgJAAgJQAAgIgBgIQgDgHgDgGQgEgHgGgDQgHgDgJgBQgJAAgGAEg");
	this.shape_86.setTransform(383.8,317.8);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#F7F7F7").s().p("AAkA6IgEAAIgDAAIgDgCIAAgBIAAhfIgzAAIAABfIgBABIgCACIgCAAIgGAAIgEAAIgDAAIgCgCIgBgBIAAhpQAAgEACgCQABAAAAAAQABgBAAAAQABAAABAAQAAAAABAAIBQAAQAAAAABAAQABAAAAAAQABAAAAABQABAAAAAAQACACAAAEIAABpIgBABIgCACIgCAAIgGAAg");
	this.shape_87.setTransform(370.7,317.8);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#F7F7F7").s().p("AAkA7IgFAAIgDgBIgBgBIgBgBIAAgvIgLAAQgIAAgEACQgEABgDACIgGAIIgFAKIgJAWIgBADIgCABIgEABIgFAAIgEAAIgDgBIgCAAIAAgCIAAgDIADgGIAIgVQAEgIAFgFQAFgGAGgDQgMgCgHgGQgGgHgBgMQAAgJAEgGQADgHAHgEQAGgEAKgDQAIgCALAAIAIAAIAIABIAIAAIAGAAQAEABACACQABADAAADIAABoIAAABIgBABIgDABIgGAAgAgEgpQgGABgDADQgEACgBAEQgBADAAAFQAAAEACAEQABADADACQADADAGABQAEABAJABIARAAIAAglIgJgBIgIAAQgJAAgEABg");
	this.shape_88.setTransform(357.7,317.7);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#F7F7F7").s().p("AAnBVIgFAAIgDgBIgCgBIAAgCIAAg/IAAgKIAAgIIgGAIIgGAKIguA/IgCACIgBABIgDABIgEAAIgEAAIgDgBIgCgBIAAgCIAAhtIAAgBIADgCIADAAIAEAAIAIABQABAAAAAAQABAAAAABQAAAAAAAAQABABAAAAIAAA/IgBAJIgBAKIAGgJIAHgJIAthAIACgBIACgCIADAAIAEAAIAFAAIACAAIABACIABABIAABtIgBACIgBABIgDABIgFAAgAgPgwQgGgDgFgEQgFgEgCgHQgCgGAAgIIAAgCIACgBIACgBIAFAAIAEAAIADABIACACIAAACQAAAEABADQABAEACACQADADAEABQADABAEAAQAFAAADgBQADgBADgDIAEgGIABgHIAAgCIABgCIADgBIAEAAIAFAAIADABIACABIAAACQAAAHgCAHQgCAGgFAEQgEAFgHACQgHADgKAAQgIAAgIgCg");
	this.shape_89.setTransform(340,315.1);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#F7F7F7").s().p("AgjA7IgGAAIgGAAIgHgBQgFgBgCgCQgDgDAAgFIAAhmIABgBIACgBIADgBIAEAAIAIABQABAAAAAAQABAAAAABQAAAAABAAQAAABAAAAIAAAnIAJAAIAKgBQANAAAJADQAIADAGAEQAGAFADAGQADAHAAAIQAAAJgDAHQgDAHgGAGQgHAFgJADQgKADgOAAIgHAAgAgrAAIAAAqIAIABIAKAAQAPAAAHgGQAGgGAAgKQAAgFgCgEQgBgFgDgCQgDgDgGgCQgGAAgIAAIgJAAIgIAAgAA2A6IgEAAIgDgBIgCgBIgBgCIAAhtIABgBIACgBIADgBIAEAAIAFAAIAEABIABABIABABIAABtIgBACIgBABIgEABIgFAAg");
	this.shape_90.setTransform(324.9,317.8);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#F7F7F7").s().p("AAmA7IgFAAIgDgBIgBgCIgBgBIAAgwIg3AAIAAAwIAAABIgCACIgDABIgFAAIgFAAIgDgBIgCgCIAAgBIAAhtIAAgBIACgBIADgBIAFAAIAFAAIADABIACABIAAABIAAAtIA3AAIAAgtIABgBIABgBIADgBIAFAAIAFAAIADABIACABIAAABIAABtIAAABIgCACIgDABIgFAAg");
	this.shape_91.setTransform(309.9,317.8);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#F7F7F7").s().p("AgsBRIgDgBIgCgBIgBgBIAAiZIABgBIABgCIADAAIAEAAIAEAAIADAAIACACIAAABIAAAPIAKgJQAEgEAFgCQAFgDAFgBQAEgCAFAAQAMAAAJAFQAIAFAFAIQAGAIACAKQADALAAANQAAANgEALQgDALgGAJQgGAHgJAFQgJAEgLABIgIgBIgIgEIgIgFIgIgHIAAA3IgBABIgCABIgDABIgFAAIgEAAgAgEg+QgEABgEADIgIAHIgJAKIAAAqQAIAKAHAFQAIAGAHAAQAIAAAFgEQAGgDADgHIAFgMQACgHAAgJQAAgIgCgIQgBgHgDgGQgDgHgGgDQgFgEgIAAIgGABg");
	this.shape_92.setTransform(297,319.9);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#F7F7F7").s().p("AgWA6QgHgCgFgEQgFgFgCgGQgDgGAAgIQAAgKAEgGQAEgHAHgEQAHgEAKgDQAKgBAMgBIAPAAIAAgIQAAgHgBgEQgCgGgCgCQgDgEgFgCQgFgBgHAAQgGAAgGACIgLAEIgHADIgFACIgBAAIgCgCIAAgCIgBgDIABgGIACgCIAGgFIAJgDIALgDIAMgCQAMAAAIAEQAIACAFAFQAGAFACAIQACAIAAAKIAABJIgBACIgCACIgFAAIgFAAIgDgCIgBgCIAAgLQgHAIgJAEQgJAEgJABQgJgBgHgCgAgFAHQgHABgEACQgEADgBAEQgCAEAAAFQAAAJAFAEQAFAGAKgBQAHAAAHgDQAHgFAHgIIAAgXIgRAAQgIAAgFACg");
	this.shape_93.setTransform(283.7,317.8);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#F7F7F7").s().p("AAjA7IgFAAIgEgBIgCgBIgBgCIgLgcIgGgJIgFgHQgCgCgEgBQgFgCgFAAIgIAAIAAAxIgBACIgCABIgEABIgEAAIgFAAIgCgBIgCgBIgBgCIAAhuIABgBIACgBIACAAIAFAAIAEAAIAEAAIACABIABABIAAAuIAIAAIAJgBIAGgEQACgCADgDIAFgJIAKgaIABgBIABgCIAEAAIAFAAIAFAAIADAAIABABIAAABIAAACIAAADIgLAYIgGAKIgFAHIgGAFIgGACIAAABIAIACIAHAFIAFAIIAFAJIAMAcIABACIAAABIABABIAAABIgBABIgBABIgDABIgFAAg");
	this.shape_94.setTransform(273.2,317.8);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#F7F7F7").s().p("AAnA7IgFAAIgDgBIgCgCIgBgBIAAg+IABgKIAAgKIgFAKIgHAJIguA/IgCACIgBABIgDABIgEAAIgEAAIgDgBIgBgCIgBgBIAAhtIABgBIACgCIACAAIAFAAIAIABQABAAAAAAQABAAAAAAQAAABAAAAQABAAAAABIAAA/IgBAJIAAAJIAFgJIAGgJIAug/IACgBIACgCIADAAIAEAAIAFAAIACAAIABACIABABIAABtIgBABIgBACIgDABIgFAAg");
	this.shape_95.setTransform(260.1,317.8);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#F7F7F7").s().p("AhBA6QgBAAAAAAQgBAAgBAAQAAAAgBgBQAAAAgBAAQgBgCAAgEIAAhpIAAgBIACgBIADgBIAFAAIAEAAIAEABIABABIABABIAABfIAqAAIAAhfIABgBIABgBIADgBIAEAAIAEAAIAEABIACABIAAABIAABfIArAAIAAhfIAAgBIACgBIACgBIAFAAIAFAAIAEABIABABIABABIAABpQAAAEgCACQgBAAAAAAQgBABAAAAQgBAAgBAAQAAAAgBAAg");
	this.shape_96.setTransform(244.2,317.7);

	this.instance_29 = new lib.logo();
	this.instance_29.parent = this;
	this.instance_29.setTransform(302,48);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_29},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66}]},441).to({state:[]},59).wait(1));

	// lastBackground
	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f().s("#333333").ss(1,1,1).p("EhFrggkMCLXAAAMAAABBJMiLXAAAg");
	this.shape_97.setTransform(431,193.5);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#333333").s().p("EhFrAglMAAAhBJMCLXAAAMAAABBJg");
	this.shape_98.setTransform(431,193.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_98},{t:this.shape_97}]},441).to({state:[]},59).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(415.6,198.1,861,416);
// library properties:
lib.properties = {
	width: 835,
	height: 400,
	fps: 12,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/frogi_atlas_.png?1504307134393", id:"frogi_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;