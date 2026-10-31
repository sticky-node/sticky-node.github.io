(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './kotlinx-serialization-kotlinx-serialization-core.js', './kotlinx-serialization-kotlinx-serialization-json.js', './kotlinx-coroutines-core.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./kotlinx-serialization-kotlinx-serialization-core.js'), require('./kotlinx-serialization-kotlinx-serialization-json.js'), require('./kotlinx-coroutines-core.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'sticky-node'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'sticky-node'.");
    }
    if (typeof globalThis['kotlinx-serialization-kotlinx-serialization-core'] === 'undefined') {
      throw new Error("Error loading module 'sticky-node'. Its dependency 'kotlinx-serialization-kotlinx-serialization-core' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-core' is loaded prior to 'sticky-node'.");
    }
    if (typeof globalThis['kotlinx-serialization-kotlinx-serialization-json'] === 'undefined') {
      throw new Error("Error loading module 'sticky-node'. Its dependency 'kotlinx-serialization-kotlinx-serialization-json' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-json' is loaded prior to 'sticky-node'.");
    }
    if (typeof globalThis['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'sticky-node'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'sticky-node'.");
    }
    globalThis['sticky-node'] = factory(typeof globalThis['sticky-node'] === 'undefined' ? {} : globalThis['sticky-node'], globalThis['kotlin-kotlin-stdlib'], globalThis['kotlinx-serialization-kotlinx-serialization-core'], globalThis['kotlinx-serialization-kotlinx-serialization-json'], globalThis['kotlinx-coroutines-core']);
  }
}(function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var hypot = Math.hypot;
  var THROW_CCE = kotlin_kotlin.$_$.ra;
  var Unit_instance = kotlin_kotlin.$_$.b4;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.j;
  var protoOf = kotlin_kotlin.$_$.n8;
  var emptyList = kotlin_kotlin.$_$.e5;
  var initMetadataForClass = kotlin_kotlin.$_$.p7;
  var VOID = kotlin_kotlin.$_$.f;
  var ArrayDeque_init_$Create$ = kotlin_kotlin.$_$.h;
  var get_lastIndex = kotlin_kotlin.$_$.n5;
  var numberToInt = kotlin_kotlin.$_$.k8;
  var booleanArray = kotlin_kotlin.$_$.b7;
  var isCharSequence = kotlin_kotlin.$_$.z7;
  var trim = kotlin_kotlin.$_$.da;
  var toString = kotlin_kotlin.$_$.r8;
  var ensureNotNull = kotlin_kotlin.$_$.hb;
  var initMetadataForObject = kotlin_kotlin.$_$.u7;
  var initMetadataForInterface = kotlin_kotlin.$_$.s7;
  var mutableListOf = kotlin_kotlin.$_$.t5;
  var last = kotlin_kotlin.$_$.p5;
  var charSequenceLength = kotlin_kotlin.$_$.g7;
  var isInterface = kotlin_kotlin.$_$.d8;
  var ArrayListSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.n1;
  var initMetadataForCompanion = kotlin_kotlin.$_$.q7;
  var PluginGeneratedSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.t1;
  var equals = kotlin_kotlin.$_$.i7;
  var UnknownFieldException_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.c;
  var StringSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.n;
  var IntSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.m;
  var typeParametersSerializers = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.p1;
  var GeneratedSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.q1;
  var throwMissingFieldException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.w1;
  var objectCreate = kotlin_kotlin.$_$.m8;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.e1;
  var isBlank = kotlin_kotlin.$_$.i9;
  var Json = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.b;
  var DoubleSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.l;
  var getNumberHashCode = kotlin_kotlin.$_$.l7;
  var coerceIn = kotlin_kotlin.$_$.w8;
  var roundToInt = kotlin_kotlin.$_$.s8;
  var getKClass = kotlin_kotlin.$_$.e;
  var SealedClassSerializer_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.a;
  var LazyThreadSafetyMode_PUBLICATION_getInstance = kotlin_kotlin.$_$.g;
  var lazy = kotlin_kotlin.$_$.lb;
  var SerializerFactory = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.u1;
  var get_nullable = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.q;
  var coerceAtLeast = kotlin_kotlin.$_$.u8;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.i;
  var split = kotlin_kotlin.$_$.m9;
  var checkIndexOverflow = kotlin_kotlin.$_$.q4;
  var NoSuchElementException_init_$Create$ = kotlin_kotlin.$_$.j1;
  var KProperty0 = kotlin_kotlin.$_$.b9;
  var getPropertyCallableRef = kotlin_kotlin.$_$.m7;
  var lazy_0 = kotlin_kotlin.$_$.mb;
  var intercepted = kotlin_kotlin.$_$.j6;
  var SafeContinuation_init_$Create$ = kotlin_kotlin.$_$.y;
  var Companion_instance = kotlin_kotlin.$_$.w3;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.u1;
  var CoroutineImpl = kotlin_kotlin.$_$.w6;
  var await_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.a;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.h6;
  var initMetadataForCoroutine = kotlin_kotlin.$_$.r7;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.q1;
  var charArrayOf = kotlin_kotlin.$_$.d7;
  var trimEnd = kotlin_kotlin.$_$.ba;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.g1;
  var plus = kotlin_kotlin.$_$.ob;
  var Default_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.a;
  var KtList = kotlin_kotlin.$_$.i4;
  var PrimitiveClasses_getInstance = kotlin_kotlin.$_$.r3;
  var arrayOf = kotlin_kotlin.$_$.eb;
  var createKType = kotlin_kotlin.$_$.b;
  var createInvariantKTypeProjection = kotlin_kotlin.$_$.a;
  var serializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.i2;
  var KSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.b2;
  var Collection = kotlin_kotlin.$_$.d4;
  var listOf = kotlin_kotlin.$_$.q5;
  var toIntOrNull = kotlin_kotlin.$_$.t9;
  var toDoubleOrNull = kotlin_kotlin.$_$.r9;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.b;
  var initMetadataForLambda = kotlin_kotlin.$_$.t7;
  var launch = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.d;
  var joinToString = kotlin_kotlin.$_$.l5;
  var first = kotlin_kotlin.$_$.h5;
  var MainScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.c;
  var setOf = kotlin_kotlin.$_$.x5;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(Editor, 'Editor');
  initMetadataForClass(History, 'History');
  initMetadataForObject(TextBox, 'TextBox');
  function get_claimsMouse() {
    return false;
  }
  function get_busy() {
    return false;
  }
  initMetadataForInterface(Tool, 'Tool');
  initMetadataForClass(Dragger, 'Dragger', Dragger);
  initMetadataForClass(FreehandTool, 'FreehandTool', FreehandTool, VOID, [Tool]);
  initMetadataForClass(ShapeTool, 'ShapeTool', VOID, VOID, [Tool]);
  initMetadataForClass(TextTool, 'TextTool', TextTool, VOID, [Tool]);
  initMetadataForClass(FillTool, 'FillTool', FillTool, VOID, [Tool]);
  initMetadataForClass(EraserTool, 'EraserTool', EraserTool, VOID, [Tool]);
  initMetadataForClass(ToolSet, 'ToolSet', ToolSet);
  initMetadataForCompanion(Companion);
  initMetadataForObject($serializer, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(DrawingFile, 'DrawingFile', DrawingFile, VOID, VOID, VOID, VOID, {0: $serializer_getInstance});
  initMetadataForCompanion(Companion_0);
  initMetadataForObject($serializer_0, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(LegacyDrawing, 'LegacyDrawing', LegacyDrawing, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_0});
  initMetadataForCompanion(Companion_1);
  initMetadataForObject($serializer_1, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(Point, 'Point', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_1});
  initMetadataForClass(BoundingBox, 'BoundingBox');
  initMetadataForInterface(Fillable, 'Fillable');
  initMetadataForCompanion(Companion_2, VOID, [SerializerFactory]);
  initMetadataForClass(Item, 'Item', VOID, VOID, VOID, VOID, VOID, {0: Companion_getInstance_2});
  initMetadataForCompanion(Companion_3);
  initMetadataForObject($serializer_2, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(StrokeItem, 'StrokeItem', VOID, Item, [Item, Fillable], VOID, VOID, {0: $serializer_getInstance_2});
  initMetadataForCompanion(Companion_4);
  initMetadataForObject($serializer_3, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(RectangleItem, 'RectangleItem', VOID, Item, [Item, Fillable], VOID, VOID, {0: $serializer_getInstance_3});
  initMetadataForCompanion(Companion_5);
  initMetadataForObject($serializer_4, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(CircleItem, 'CircleItem', VOID, Item, [Item, Fillable], VOID, VOID, {0: $serializer_getInstance_4});
  initMetadataForCompanion(Companion_6);
  initMetadataForObject($serializer_5, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(PolygonItem, 'PolygonItem', VOID, Item, [Item, Fillable], VOID, VOID, {0: $serializer_getInstance_5});
  initMetadataForCompanion(Companion_7);
  initMetadataForObject($serializer_6, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(ArrowItem, 'ArrowItem', VOID, Item, VOID, VOID, VOID, {0: $serializer_getInstance_6});
  initMetadataForCompanion(Companion_8);
  initMetadataForObject($serializer_7, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(TextItem, 'TextItem', VOID, Item, VOID, VOID, VOID, {0: $serializer_getInstance_7});
  initMetadataForCompanion(Companion_9);
  initMetadataForObject($serializer_8, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(RegionFillItem, 'RegionFillItem', VOID, Item, VOID, VOID, VOID, {0: $serializer_getInstance_8});
  initMetadataForCoroutine($saveToFileCOROUTINE$0, CoroutineImpl);
  initMetadataForCoroutine($pickFileTextCOROUTINE$1, CoroutineImpl);
  initMetadataForCoroutine($requestCOROUTINE$2, CoroutineImpl);
  initMetadataForCoroutine($listServerDrawingsCOROUTINE$3, CoroutineImpl);
  initMetadataForCoroutine($saveToServerCOROUTINE$4, CoroutineImpl);
  initMetadataForObject(Storage, 'Storage');
  initMetadataForLambda(setupControls$lambda$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(setupControls$lambda$slambda_1, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(setupControls$lambda$slambda_3, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(setupControls$lambda$slambda_5, CoroutineImpl, VOID, [1]);
  //endregion
  function main() {
    var tmp = document.getElementById('drawingcanvas');
    var canvas = tmp instanceof HTMLCanvasElement ? tmp : THROW_CCE();
    var editor = new Editor(canvas);
    editor.t1n();
    setupCanvasEvents(editor);
    setupControls(editor);
    var tmp_0 = window;
    tmp_0.addEventListener('resize', main$lambda(editor));
  }
  function main$lambda($editor) {
    return function (it) {
      $editor.t1n();
      return Unit_instance;
    };
  }
  function mainWrapper() {
    main();
  }
  function drawItem($this, item) {
    $this.h1n_1.save();
    item.u1n($this.h1n_1);
    $this.h1n_1.restore();
  }
  function restore($this, snapshot) {
    if (snapshot == null)
      return Unit_instance;
    replaceItems($this, decodeDrawing(snapshot));
    Storage_getInstance().e1o(snapshot);
    $this.f1o();
  }
  function replaceItems($this, newItems) {
    $this.j1n_1 = null;
    $this.i1n_1.z1();
    $this.i1n_1.z(newItems);
  }
  function Editor$requestRender$lambda(this$0) {
    return function (it) {
      this$0.s1n_1 = false;
      this$0.f1o();
      return Unit_instance;
    };
  }
  function Editor(canvas) {
    this.g1n_1 = canvas;
    var tmp = this;
    var tmp_0 = this.g1n_1.getContext('2d');
    tmp.h1n_1 = tmp_0 instanceof CanvasRenderingContext2D ? tmp_0 : THROW_CCE();
    var tmp_1 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_1.i1n_1 = ArrayList_init_$Create$();
    this.j1n_1 = null;
    this.k1n_1 = '#000000';
    this.l1n_1 = 3;
    this.m1n_1 = 20;
    this.n1n_1 = 5;
    this.o1n_1 = new ToolSet();
    this.p1n_1 = this.o1n_1.g1o_1;
    this.q1n_1 = null;
    this.s1n_1 = false;
    this.i1n_1.z(Storage_getInstance().o1o());
    this.r1n_1 = new History(encodeDrawing(this.i1n_1));
  }
  protoOf(Editor).p1o = function (next) {
    this.j1n_1 = null;
    this.p1n_1 = next;
    var tmp0_safe_receiver = this.q1n_1;
    if (tmp0_safe_receiver == null)
      null;
    else
      tmp0_safe_receiver(next);
    this.q1o();
  };
  protoOf(Editor).r1o = function (p, accept) {
    var tmp0 = this.i1n_1;
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.lastOrNull' call
      var iterator = tmp0.o1(tmp0.l());
      while (iterator.c4()) {
        var element = iterator.e4();
        // Inline function 'stickynode.editor.Editor.findTop.<anonymous>' call
        if (accept(element) && element.s1o(p)) {
          tmp$ret$1 = element;
          break $l$block;
        }
      }
      tmp$ret$1 = null;
    }
    return tmp$ret$1;
  };
  protoOf(Editor).f1o = function () {
    this.h1n_1.clearRect(0.0, 0.0, this.g1n_1.width, this.g1n_1.height);
    var _iterator__ex2g4s = this.i1n_1.i();
    while (_iterator__ex2g4s.j()) {
      var item = _iterator__ex2g4s.k();
      drawItem(this, item);
    }
    var tmp0_safe_receiver = this.j1n_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'stickynode.editor.Editor.render.<anonymous>' call
      drawItem(this, tmp0_safe_receiver);
    }
  };
  protoOf(Editor).q1o = function () {
    if (this.s1n_1)
      return Unit_instance;
    this.s1n_1 = true;
    var tmp = window;
    tmp.requestAnimationFrame(Editor$requestRender$lambda(this));
  };
  protoOf(Editor).t1n = function () {
    this.g1n_1.width = window.innerWidth;
    this.g1n_1.height = window.innerHeight;
    this.f1o();
  };
  protoOf(Editor).t1o = function () {
    var snapshot = encodeDrawing(this.i1n_1);
    if (this.r1n_1.x1o(snapshot)) {
      Storage_getInstance().e1o(snapshot);
    }
  };
  protoOf(Editor).y1o = function () {
    if (!this.p1n_1.a1p()) {
      restore(this, this.r1n_1.z1o());
    }
  };
  protoOf(Editor).b1p = function () {
    if (!this.p1n_1.a1p()) {
      restore(this, this.r1n_1.c1p());
    }
  };
  protoOf(Editor).z1 = function () {
    replaceItems(this, emptyList());
    this.f1o();
    this.t1o();
  };
  protoOf(Editor).d1p = function (newItems) {
    replaceItems(this, newItems);
    this.f1o();
    this.t1o();
  };
  protoOf(Editor).e1p = function () {
    return encodeDrawing(this.i1n_1, true);
  };
  function History(initial, limit) {
    limit = limit === VOID ? 100 : limit;
    this.u1o_1 = limit;
    var tmp = this;
    // Inline function 'kotlin.apply' call
    var this_0 = ArrayDeque_init_$Create$();
    // Inline function 'stickynode.editor.History.stack.<anonymous>' call
    this_0.kc(initial);
    tmp.v1o_1 = this_0;
    this.w1o_1 = 0;
  }
  protoOf(History).x1o = function (snapshot) {
    if (snapshot === this.v1o_1.n(this.w1o_1))
      return false;
    while (this.v1o_1.gc_1 > (this.w1o_1 + 1 | 0)) {
      this.v1o_1.nc();
    }
    this.v1o_1.kc(snapshot);
    if (this.v1o_1.gc_1 > this.u1o_1) {
      this.v1o_1.lc();
    }
    this.w1o_1 = get_lastIndex(this.v1o_1);
    return true;
  };
  protoOf(History).z1o = function () {
    if (this.w1o_1 === 0)
      return null;
    this.w1o_1 = this.w1o_1 - 1 | 0;
    return this.v1o_1.n(this.w1o_1);
  };
  protoOf(History).c1p = function () {
    if (this.w1o_1 === get_lastIndex(this.v1o_1))
      return null;
    this.w1o_1 = this.w1o_1 + 1 | 0;
    return this.v1o_1.n(this.w1o_1);
  };
  function findEnclosedRegion(ed, p) {
    var w = ed.g1n_1.width;
    var h = ed.g1n_1.height;
    var sx = numberToInt(p.f1p_1);
    var sy = numberToInt(p.g1p_1);
    if (p.f1p_1 < 0 || p.g1p_1 < 0 || sx >= w || sy >= h)
      return null;
    var tmp = document.createElement('canvas');
    var off = tmp instanceof HTMLCanvasElement ? tmp : THROW_CCE();
    off.width = w;
    off.height = h;
    var tmp_0 = off.getContext('2d');
    var ctx = tmp_0 instanceof CanvasRenderingContext2D ? tmp_0 : THROW_CCE();
    var _iterator__ex2g4s = ed.i1n_1.i();
    $l$loop: while (_iterator__ex2g4s.j()) {
      var item = _iterator__ex2g4s.k();
      if (item instanceof RegionFillItem)
        continue $l$loop;
      ctx.save();
      item.u1n(ctx);
      ctx.restore();
    }
    // Inline function 'kotlin.js.asDynamic' call
    var data = ctx.getImageData(0.0, 0.0, w, h).data;
    var blocked = booleanArray(imul(w, h));
    var inductionVariable = 0;
    var last = imul(w, h);
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp_1 = data[imul(i, 4) + 3 | 0];
        blocked[i] = !(((!(tmp_1 == null) ? typeof tmp_1 === 'number' : false) ? tmp_1 : THROW_CCE()) === 0);
      }
       while (inductionVariable < last);
    if (blocked[imul(sy, w) + sx | 0])
      return null;
    var runs = ArrayList_init_$Create$();
    var stack = ArrayDeque_init_$Create$();
    stack.kc(imul(sy, w) + sx | 0);
    $l$loop_1: while (true) {
      // Inline function 'kotlin.collections.isNotEmpty' call
      if (!!stack.m()) {
        break $l$loop_1;
      }
      var idx = stack.nc();
      if (blocked[idx])
        continue $l$loop_1;
      var y = idx / w | 0;
      var x = idx % w | 0;
      var left = x;
      while (left > 0 && !blocked[(imul(y, w) + left | 0) - 1 | 0]) {
        left = left - 1 | 0;
      }
      var right = x;
      while (right < (w - 1 | 0) && !blocked[(imul(y, w) + right | 0) + 1 | 0]) {
        right = right + 1 | 0;
      }
      if (left === 0 || right === (w - 1 | 0) || y === 0 || y === (h - 1 | 0))
        return null;
      var inductionVariable_0 = left;
      var last_0 = right;
      if (inductionVariable_0 <= last_0)
        do {
          var xx = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          blocked[imul(y, w) + xx | 0] = true;
        }
         while (!(xx === last_0));
      runs.d(y);
      runs.d(left);
      runs.d(right + 1 | 0);
      // Inline function 'kotlin.intArrayOf' call
      var indexedObject = new Int32Array([y - 1 | 0, y + 1 | 0]);
      var inductionVariable_1 = 0;
      var last_1 = indexedObject.length;
      while (inductionVariable_1 < last_1) {
        var ny = indexedObject[inductionVariable_1];
        inductionVariable_1 = inductionVariable_1 + 1 | 0;
        var inSpan = false;
        var inductionVariable_2 = left;
        var last_2 = right;
        if (inductionVariable_2 <= last_2)
          do {
            var xx_0 = inductionVariable_2;
            inductionVariable_2 = inductionVariable_2 + 1 | 0;
            var open = !blocked[imul(ny, w) + xx_0 | 0];
            if (open && !inSpan) {
              stack.kc(imul(ny, w) + xx_0 | 0);
              inSpan = true;
            } else if (!open) {
              inSpan = false;
            }
          }
           while (!(xx_0 === last_2));
      }
    }
    return runs;
  }
  function show$finish(finished, box, $onCommit, commit) {
    if (finished._v)
      return Unit_instance;
    finished._v = true;
    // Inline function 'kotlin.text.trim' call
    var this_0 = box.value;
    var text = toString(trim(isCharSequence(this_0) ? this_0 : THROW_CCE()));
    box.remove();
    if (commit)
      $onCommit(text);
  }
  function TextBox$show$lambda$lambda($armed) {
    return function (it) {
      $armed._v = true;
      return Unit_instance;
    };
  }
  function TextBox$show$lambda($box, $armed) {
    return function (it) {
      $box.focus();
      $box.select();
      var tmp = window;
      tmp.requestAnimationFrame(TextBox$show$lambda$lambda($armed));
      return Unit_instance;
    };
  }
  function TextBox$show$lambda_0($finished, $box, $onCommit) {
    return function (e) {
      var event = e instanceof KeyboardEvent ? e : THROW_CCE();
      var tmp;
      if (event.key === 'Enter' && !event.shiftKey) {
        event.preventDefault();
        show$finish($finished, $box, $onCommit, true);
        tmp = Unit_instance;
      }
      var tmp_0;
      if (event.key === 'Escape') {
        show$finish($finished, $box, $onCommit, false);
        tmp_0 = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function TextBox$show$lambda_1($armed, $box, $finished, $onCommit) {
    return function (it) {
      var tmp;
      if ($armed._v) {
        show$finish($finished, $box, $onCommit, true);
        tmp = Unit_instance;
      } else {
        $box.focus();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function TextBox() {
    this.h1p_1 = 'sticky-node-textbox';
  }
  protoOf(TextBox).i1p = function () {
    return !(document.querySelector('textarea.sticky-node-textbox') == null);
  };
  protoOf(TextBox).j1p = function (canvas, at, color, initialText, onCommit) {
    if (this.i1p())
      return Unit_instance;
    var bounds = canvas.getBoundingClientRect();
    var tmp = document.createElement('textarea');
    var box = tmp instanceof HTMLTextAreaElement ? tmp : THROW_CCE();
    box.className = 'sticky-node-textbox';
    // Inline function 'kotlin.with' call
    // Inline function 'stickynode.editor.TextBox.show.<anonymous>' call
    var $this$with = box.style;
    $this$with.position = 'fixed';
    $this$with.left = '' + (bounds.left + at.f1p_1 - 8) + 'px';
    $this$with.top = '' + (bounds.top + at.g1p_1 - 8) + 'px';
    $this$with.boxSizing = 'content-box';
    $this$with.width = '180px';
    $this$with.height = '70px';
    $this$with.padding = '6px';
    $this$with.margin = '0';
    $this$with.backgroundColor = 'white';
    $this$with.border = '2px solid red';
    $this$with.color = color;
    $this$with.zIndex = '1000';
    box.value = initialText;
    ensureNotNull(document.body).appendChild(box);
    var finished = {_v: false};
    var armed = {_v: false};
    var tmp_0 = window;
    tmp_0.requestAnimationFrame(TextBox$show$lambda(box, armed));
    box.addEventListener('keydown', TextBox$show$lambda_0(finished, box, onCommit));
    box.addEventListener('blur', TextBox$show$lambda_1(armed, box, finished, onCommit));
  };
  protoOf(TextBox).k1p = function (canvas, at, color, initialText, onCommit, $super) {
    initialText = initialText === VOID ? '' : initialText;
    var tmp;
    if ($super === VOID) {
      this.j1p(canvas, at, color, initialText, onCommit);
      tmp = Unit_instance;
    } else {
      tmp = $super.j1p.call(this, canvas, at, color, initialText, onCommit);
    }
    return tmp;
  };
  var TextBox_instance;
  function TextBox_getInstance() {
    return TextBox_instance;
  }
  function Tool() {
  }
  function Dragger() {
    this.p1p_1 = null;
    this.q1p_1 = new Point(0.0, 0.0);
  }
  protoOf(Dragger).r1p = function () {
    return !(this.p1p_1 == null);
  };
  protoOf(Dragger).s1p = function (item, at) {
    this.p1p_1 = item;
    this.q1p_1 = at;
  };
  protoOf(Dragger).t1p = function (to) {
    var tmp0_elvis_lhs = this.p1p_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var item = tmp;
    item.u1p(to.f1p_1 - this.q1p_1.f1p_1, to.g1p_1 - this.q1p_1.g1p_1);
    this.q1p_1 = to;
    return true;
  };
  protoOf(Dragger).v1p = function () {
    var wasActive = !(this.p1p_1 == null);
    this.p1p_1 = null;
    return wasActive;
  };
  function FreehandTool$onDown$lambda(it) {
    return it instanceof StrokeItem;
  }
  function FreehandTool() {
    this.w1p_1 = new Dragger();
    this.x1p_1 = null;
  }
  protoOf(FreehandTool).a1p = function () {
    return this.w1p_1.r1p() || !(this.x1p_1 == null);
  };
  protoOf(FreehandTool).m1p = function (ed, p, button) {
    var existing = ed.r1o(p, FreehandTool$onDown$lambda);
    if (!(existing == null)) {
      this.w1p_1.s1p(existing, p);
      return Unit_instance;
    }
    var fresh = new StrokeItem(mutableListOf([p]), ed.k1n_1, ed.l1n_1);
    this.x1p_1 = fresh;
    ed.j1n_1 = fresh;
  };
  protoOf(FreehandTool).n1p = function (ed, p) {
    if (this.w1p_1.t1p(p)) {
      ed.q1o();
      return Unit_instance;
    }
    var tmp0_elvis_lhs = this.x1p_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_instance;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var current = tmp;
    if (!last(current.y1p_1).equals(p)) {
      current.y1p_1.d(p);
      ed.q1o();
    }
  };
  protoOf(FreehandTool).o1p = function (ed) {
    if (this.w1p_1.v1p()) {
      ed.t1o();
      return Unit_instance;
    }
    var tmp0_elvis_lhs = this.x1p_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_instance;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var finished = tmp;
    this.x1p_1 = null;
    ed.j1n_1 = null;
    if (finished.y1p_1.l() >= 2) {
      ed.i1n_1.d(finished);
    }
    ed.f1o();
    ed.t1o();
  };
  function ShapeTool(owns, create) {
    this.c1q_1 = owns;
    this.d1q_1 = create;
    this.e1q_1 = new Dragger();
    this.f1q_1 = null;
    this.g1q_1 = null;
  }
  protoOf(ShapeTool).a1p = function () {
    return this.e1q_1.r1p() || !(this.f1q_1 == null);
  };
  protoOf(ShapeTool).m1p = function (ed, p, button) {
    var existing = ed.r1o(p, this.c1q_1);
    if (!(existing == null)) {
      this.e1q_1.s1p(existing, p);
    } else {
      this.f1q_1 = p;
      this.g1q_1 = p;
    }
  };
  protoOf(ShapeTool).n1p = function (ed, p) {
    if (this.e1q_1.t1p(p)) {
      ed.q1o();
      return Unit_instance;
    }
    var tmp0_elvis_lhs = this.f1q_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_instance;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var origin = tmp;
    this.g1q_1 = p;
    ed.j1n_1 = this.d1q_1(ed, origin, p);
    ed.q1o();
  };
  protoOf(ShapeTool).o1p = function (ed) {
    if (this.e1q_1.v1p()) {
      ed.t1o();
      return Unit_instance;
    }
    var tmp0_elvis_lhs = this.f1q_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_instance;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var origin = tmp;
    var tmp1_elvis_lhs = this.g1q_1;
    var end = tmp1_elvis_lhs == null ? origin : tmp1_elvis_lhs;
    this.f1q_1 = null;
    this.g1q_1 = null;
    ed.j1n_1 = null;
    var tmp0 = end.f1p_1 - origin.f1p_1;
    // Inline function 'kotlin.math.hypot' call
    var y = end.g1p_1 - origin.g1p_1;
    if (hypot(tmp0, y) > 3.0) {
      ed.i1n_1.d(this.d1q_1(ed, origin, end));
    }
    ed.f1o();
    ed.t1o();
  };
  function addNew($this, ed, at) {
    var color = ed.k1n_1;
    var fontSize = ed.m1n_1;
    var tmp = TextBox_instance;
    tmp.k1p(ed.g1n_1, at, color, VOID, TextTool$addNew$lambda(ed, at, color, fontSize));
  }
  function edit($this, ed, item) {
    var fontSize = ed.m1n_1;
    var tmp = TextBox_instance;
    var tmp_0 = new Point(item.h1q_1, item.i1q_1);
    var tmp_1 = item.j1q_1;
    var tmp_2 = item.k1q_1;
    tmp.j1p(ed.g1n_1, tmp_0, tmp_1, tmp_2, TextTool$edit$lambda(ed, item, fontSize));
  }
  function TextTool$onDown$lambda(it) {
    return it instanceof TextItem;
  }
  function TextTool$addNew$lambda($ed, $at, $color, $fontSize) {
    return function (text) {
      var tmp;
      // Inline function 'kotlin.text.isNotEmpty' call
      if (charSequenceLength(text) > 0) {
        $ed.i1n_1.d(new TextItem($at.f1p_1, $at.g1p_1, $color, text, $fontSize));
        $ed.f1o();
        $ed.t1o();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function TextTool$edit$lambda($ed, $item, $fontSize) {
    return function (text) {
      // Inline function 'kotlin.text.isEmpty' call
      if (charSequenceLength(text) === 0) {
        $ed.i1n_1.y1($item);
      } else {
        $item.k1q_1 = text;
        $item.l1q_1 = $fontSize;
      }
      $ed.f1o();
      $ed.t1o();
      return Unit_instance;
    };
  }
  function TextTool() {
    this.m1q_1 = true;
    this.n1q_1 = new Dragger();
    this.o1q_1 = null;
  }
  protoOf(TextTool).l1p = function () {
    return this.m1q_1;
  };
  protoOf(TextTool).a1p = function () {
    return this.n1q_1.r1p() || !(this.o1q_1 == null);
  };
  protoOf(TextTool).m1p = function (ed, p, button) {
    var tmp = ed.r1o(p, TextTool$onDown$lambda);
    var existing = tmp instanceof TextItem ? tmp : null;
    switch (button) {
      case 0:
        if (!(existing == null)) {
          this.n1q_1.s1p(existing, p);
        } else {
          this.o1q_1 = p;
        }

        break;
      case 2:
        if (!(existing == null)) {
          edit(this, ed, existing);
        }

        break;
      default:
        break;
    }
  };
  protoOf(TextTool).n1p = function (ed, p) {
    if (this.n1q_1.t1p(p)) {
      ed.q1o();
    }
  };
  protoOf(TextTool).o1p = function (ed) {
    if (this.n1q_1.v1p()) {
      ed.t1o();
      return Unit_instance;
    }
    var tmp0_elvis_lhs = this.o1q_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_instance;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var at = tmp;
    this.o1q_1 = null;
    addNew(this, ed, at);
  };
  function FillTool() {
    this.p1q_1 = true;
  }
  protoOf(FillTool).l1p = function () {
    return this.p1q_1;
  };
  protoOf(FillTool).m1p = function (ed, p, button) {
    var tmp0 = ed.i1n_1;
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.lastOrNull' call
      var iterator = tmp0.o1(tmp0.l());
      while (iterator.c4()) {
        var element = iterator.e4();
        // Inline function 'stickynode.editor.FillTool.onDown.<anonymous>' call
        var tmp;
        if (isInterface(element, Fillable)) {
          tmp = element.q1q(p);
        } else {
          tmp = false;
        }
        if (tmp) {
          tmp$ret$1 = element;
          break $l$block;
        }
      }
      tmp$ret$1 = null;
    }
    var tmp_0 = tmp$ret$1;
    var native = (!(tmp_0 == null) ? isInterface(tmp_0, Fillable) : false) ? tmp_0 : null;
    if (!(native == null)) {
      var newFill = button === 2 ? null : ed.k1n_1;
      var tmp_1;
      if (newFill == native.r1q()) {
        tmp_1 = true;
      } else {
        var tmp_2;
        if (newFill == null) {
          // Inline function 'kotlin.text.isNullOrEmpty' call
          var this_0 = native.r1q();
          tmp_2 = this_0 == null || charSequenceLength(this_0) === 0;
        } else {
          tmp_2 = false;
        }
        tmp_1 = tmp_2;
      }
      if (tmp_1)
        return Unit_instance;
      native.s1q(newFill);
      ed.f1o();
      ed.t1o();
      return Unit_instance;
    }
    var tmp3 = ed.i1n_1;
    var tmp$ret$4;
    $l$block_0: {
      // Inline function 'kotlin.collections.lastOrNull' call
      var iterator_0 = tmp3.o1(tmp3.l());
      while (iterator_0.c4()) {
        var element_0 = iterator_0.e4();
        // Inline function 'stickynode.editor.FillTool.onDown.<anonymous>' call
        var tmp_3;
        if (element_0 instanceof RegionFillItem) {
          tmp_3 = element_0.s1o(p);
        } else {
          tmp_3 = false;
        }
        if (tmp_3) {
          tmp$ret$4 = element_0;
          break $l$block_0;
        }
      }
      tmp$ret$4 = null;
    }
    var old = tmp$ret$4;
    if (button === 2) {
      if (!(old == null)) {
        ed.i1n_1.y1(old);
        ed.f1o();
        ed.t1o();
      }
      return Unit_instance;
    }
    var tmp0_elvis_lhs = findEnclosedRegion(ed, p);
    var tmp_4;
    if (tmp0_elvis_lhs == null) {
      return Unit_instance;
    } else {
      tmp_4 = tmp0_elvis_lhs;
    }
    var runs = tmp_4;
    if (!(old == null)) {
      ed.i1n_1.y1(old);
    }
    ed.i1n_1.b2(0, new RegionFillItem(runs, ed.k1n_1));
    ed.f1o();
    ed.t1o();
  };
  protoOf(FillTool).n1p = function (ed, p) {
    return Unit_instance;
  };
  protoOf(FillTool).o1p = function (ed) {
    return Unit_instance;
  };
  function erase($this, ed, p) {
    var tmp0 = ed.i1n_1;
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.indexOfLast' call
      var iterator = tmp0.o1(tmp0.l());
      while (iterator.c4()) {
        // Inline function 'stickynode.editor.EraserTool.erase.<anonymous>' call
        if (iterator.e4().s1o(p)) {
          tmp$ret$1 = iterator.d4();
          break $l$block;
        }
      }
      tmp$ret$1 = -1;
    }
    var index = tmp$ret$1;
    if (index < 0)
      return Unit_instance;
    ed.i1n_1.c2(index);
    $this.y1q_1 = true;
    ed.q1o();
  }
  function EraserTool() {
    this.x1q_1 = false;
    this.y1q_1 = false;
  }
  protoOf(EraserTool).a1p = function () {
    return this.x1q_1;
  };
  protoOf(EraserTool).m1p = function (ed, p, button) {
    this.x1q_1 = true;
    erase(this, ed, p);
  };
  protoOf(EraserTool).n1p = function (ed, p) {
    if (this.x1q_1) {
      erase(this, ed, p);
    }
  };
  protoOf(EraserTool).o1p = function (ed) {
    if (!this.x1q_1)
      return Unit_instance;
    this.x1q_1 = false;
    if (this.y1q_1) {
      this.y1q_1 = false;
      ed.t1o();
    }
  };
  function ToolSet$rectangle$lambda(it) {
    return it instanceof RectangleItem;
  }
  function ToolSet$rectangle$lambda_0(ed, start, end) {
    var box = boundingBox(start, end);
    return new RectangleItem(box.z1q_1, box.a1r_1, box.b1r_1, box.c1r_1, ed.k1n_1, ed.l1n_1);
  }
  function ToolSet$circle$lambda(it) {
    return it instanceof CircleItem;
  }
  function ToolSet$circle$lambda_0(ed, start, end) {
    var box = boundingBox(start, end);
    return new CircleItem(box.z1q_1, box.a1r_1, box.b1r_1, box.c1r_1, ed.k1n_1, ed.l1n_1);
  }
  function ToolSet$polygon$lambda(it) {
    return it instanceof PolygonItem;
  }
  function ToolSet$polygon$lambda_0(ed, start, end) {
    var box = boundingBox(start, end);
    return new PolygonItem(box.z1q_1, box.a1r_1, box.b1r_1, box.c1r_1, ed.n1n_1, ed.k1n_1, ed.l1n_1);
  }
  function ToolSet$arrow$lambda(it) {
    return it instanceof ArrowItem;
  }
  function ToolSet$arrow$lambda_0(ed, start, end) {
    return new ArrowItem(start.f1p_1, start.g1p_1, end.f1p_1, end.g1p_1, ed.k1n_1, ed.l1n_1);
  }
  function ToolSet() {
    this.g1o_1 = new FreehandTool();
    this.h1o_1 = new EraserTool();
    this.i1o_1 = new TextTool();
    this.j1o_1 = new FillTool();
    var tmp = this;
    var tmp_0 = ToolSet$rectangle$lambda;
    tmp.k1o_1 = new ShapeTool(tmp_0, ToolSet$rectangle$lambda_0);
    var tmp_1 = this;
    var tmp_2 = ToolSet$circle$lambda;
    tmp_1.l1o_1 = new ShapeTool(tmp_2, ToolSet$circle$lambda_0);
    var tmp_3 = this;
    var tmp_4 = ToolSet$polygon$lambda;
    tmp_3.m1o_1 = new ShapeTool(tmp_4, ToolSet$polygon$lambda_0);
    var tmp_5 = this;
    var tmp_6 = ToolSet$arrow$lambda;
    tmp_5.n1o_1 = new ShapeTool(tmp_6, ToolSet$arrow$lambda_0);
  }
  function get_json() {
    _init_properties_Drawing_kt__mbw8h8();
    return json;
  }
  var json;
  function get_prettyJson() {
    _init_properties_Drawing_kt__mbw8h8();
    return prettyJson;
  }
  var prettyJson;
  function Companion() {
    Companion_instance_0 = this;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.e1r_1 = [null, null, new ArrayListSerializer(Companion_getInstance_2().l14())];
  }
  protoOf(Companion).l14 = function () {
    return $serializer_getInstance();
  };
  var Companion_instance_0;
  function Companion_getInstance() {
    if (Companion_instance_0 == null)
      new Companion();
    return Companion_instance_0;
  }
  function $serializer() {
    $serializer_instance = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('stickynode.model.DrawingFile', this, 3);
    tmp0_serialDesc.dt('app', true);
    tmp0_serialDesc.dt('version', true);
    tmp0_serialDesc.dt('items', true);
    this.f1r_1 = tmp0_serialDesc;
  }
  protoOf($serializer).g1r = function (encoder, value) {
    var tmp0_desc = this.f1r_1;
    var tmp1_output = encoder.wl(tmp0_desc);
    var tmp2_cached = Companion_getInstance().e1r_1;
    if (tmp1_output.sn(tmp0_desc, 0) ? true : !(value.h1r_1 === '')) {
      tmp1_output.kn(tmp0_desc, 0, value.h1r_1);
    }
    if (tmp1_output.sn(tmp0_desc, 1) ? true : !(value.i1r_1 === 1)) {
      tmp1_output.fn(tmp0_desc, 1, value.i1r_1);
    }
    if (tmp1_output.sn(tmp0_desc, 2) ? true : !equals(value.j1r_1, emptyList())) {
      tmp1_output.mn(tmp0_desc, 2, tmp2_cached[2], value.j1r_1);
    }
    tmp1_output.xl(tmp0_desc);
  };
  protoOf($serializer).si = function (encoder, value) {
    return this.g1r(encoder, value instanceof DrawingFile ? value : THROW_CCE());
  };
  protoOf($serializer).ti = function (decoder) {
    var tmp0_desc = this.f1r_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = 0;
    var tmp6_local2 = null;
    var tmp7_input = decoder.wl(tmp0_desc);
    var tmp8_cached = Companion_getInstance().e1r_1;
    if (tmp7_input.mm()) {
      tmp4_local0 = tmp7_input.gm(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.bm(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp7_input.im(tmp0_desc, 2, tmp8_cached[2], tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp7_input.nm(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp7_input.gm(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.bm(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp7_input.im(tmp0_desc, 2, tmp8_cached[2], tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp7_input.xl(tmp0_desc);
    return DrawingFile_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  };
  protoOf($serializer).ri = function () {
    return this.f1r_1;
  };
  protoOf($serializer).ft = function () {
    var tmp0_cached = Companion_getInstance().e1r_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), IntSerializer_getInstance(), tmp0_cached[2]];
  };
  var $serializer_instance;
  function $serializer_getInstance() {
    if ($serializer_instance == null)
      new $serializer();
    return $serializer_instance;
  }
  function DrawingFile_init_$Init$(seen0, app, version, items, serializationConstructorMarker, $this) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance().f1r_1);
    }
    if (0 === (seen0 & 1))
      $this.h1r_1 = '';
    else
      $this.h1r_1 = app;
    if (0 === (seen0 & 2))
      $this.i1r_1 = 1;
    else
      $this.i1r_1 = version;
    if (0 === (seen0 & 4))
      $this.j1r_1 = emptyList();
    else
      $this.j1r_1 = items;
    return $this;
  }
  function DrawingFile_init_$Create$(seen0, app, version, items, serializationConstructorMarker) {
    return DrawingFile_init_$Init$(seen0, app, version, items, serializationConstructorMarker, objectCreate(protoOf(DrawingFile)));
  }
  function DrawingFile(app, version, items) {
    Companion_getInstance();
    app = app === VOID ? '' : app;
    version = version === VOID ? 1 : version;
    items = items === VOID ? emptyList() : items;
    this.h1r_1 = app;
    this.i1r_1 = version;
    this.j1r_1 = items;
  }
  function Companion_0() {
    Companion_instance_1 = this;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.k1r_1 = [new ArrayListSerializer($serializer_getInstance_2()), new ArrayListSerializer($serializer_getInstance_3()), new ArrayListSerializer($serializer_getInstance_4()), new ArrayListSerializer($serializer_getInstance_5()), new ArrayListSerializer($serializer_getInstance_6()), new ArrayListSerializer($serializer_getInstance_7())];
  }
  protoOf(Companion_0).l14 = function () {
    return $serializer_getInstance_0();
  };
  var Companion_instance_1;
  function Companion_getInstance_0() {
    if (Companion_instance_1 == null)
      new Companion_0();
    return Companion_instance_1;
  }
  function $serializer_0() {
    $serializer_instance_0 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('stickynode.model.LegacyDrawing', this, 6);
    tmp0_serialDesc.dt('strokeItems', true);
    tmp0_serialDesc.dt('rectangleItems', true);
    tmp0_serialDesc.dt('circleItems', true);
    tmp0_serialDesc.dt('polygonItems', true);
    tmp0_serialDesc.dt('arrowItems', true);
    tmp0_serialDesc.dt('textItems', true);
    this.l1r_1 = tmp0_serialDesc;
  }
  protoOf($serializer_0).m1r = function (encoder, value) {
    var tmp0_desc = this.l1r_1;
    var tmp1_output = encoder.wl(tmp0_desc);
    var tmp2_cached = Companion_getInstance_0().k1r_1;
    if (tmp1_output.sn(tmp0_desc, 0) ? true : !equals(value.n1r_1, emptyList())) {
      tmp1_output.mn(tmp0_desc, 0, tmp2_cached[0], value.n1r_1);
    }
    if (tmp1_output.sn(tmp0_desc, 1) ? true : !equals(value.o1r_1, emptyList())) {
      tmp1_output.mn(tmp0_desc, 1, tmp2_cached[1], value.o1r_1);
    }
    if (tmp1_output.sn(tmp0_desc, 2) ? true : !equals(value.p1r_1, emptyList())) {
      tmp1_output.mn(tmp0_desc, 2, tmp2_cached[2], value.p1r_1);
    }
    if (tmp1_output.sn(tmp0_desc, 3) ? true : !equals(value.q1r_1, emptyList())) {
      tmp1_output.mn(tmp0_desc, 3, tmp2_cached[3], value.q1r_1);
    }
    if (tmp1_output.sn(tmp0_desc, 4) ? true : !equals(value.r1r_1, emptyList())) {
      tmp1_output.mn(tmp0_desc, 4, tmp2_cached[4], value.r1r_1);
    }
    if (tmp1_output.sn(tmp0_desc, 5) ? true : !equals(value.s1r_1, emptyList())) {
      tmp1_output.mn(tmp0_desc, 5, tmp2_cached[5], value.s1r_1);
    }
    tmp1_output.xl(tmp0_desc);
  };
  protoOf($serializer_0).si = function (encoder, value) {
    return this.m1r(encoder, value instanceof LegacyDrawing ? value : THROW_CCE());
  };
  protoOf($serializer_0).ti = function (decoder) {
    var tmp0_desc = this.l1r_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_local5 = null;
    var tmp10_input = decoder.wl(tmp0_desc);
    var tmp11_cached = Companion_getInstance_0().k1r_1;
    if (tmp10_input.mm()) {
      tmp4_local0 = tmp10_input.im(tmp0_desc, 0, tmp11_cached[0], tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp10_input.im(tmp0_desc, 1, tmp11_cached[1], tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp10_input.im(tmp0_desc, 2, tmp11_cached[2], tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp10_input.im(tmp0_desc, 3, tmp11_cached[3], tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp10_input.im(tmp0_desc, 4, tmp11_cached[4], tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp10_input.im(tmp0_desc, 5, tmp11_cached[5], tmp9_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp10_input.nm(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp10_input.im(tmp0_desc, 0, tmp11_cached[0], tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp10_input.im(tmp0_desc, 1, tmp11_cached[1], tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp10_input.im(tmp0_desc, 2, tmp11_cached[2], tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp10_input.im(tmp0_desc, 3, tmp11_cached[3], tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp10_input.im(tmp0_desc, 4, tmp11_cached[4], tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp10_input.im(tmp0_desc, 5, tmp11_cached[5], tmp9_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp10_input.xl(tmp0_desc);
    return LegacyDrawing_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, null);
  };
  protoOf($serializer_0).ri = function () {
    return this.l1r_1;
  };
  protoOf($serializer_0).ft = function () {
    var tmp0_cached = Companion_getInstance_0().k1r_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [tmp0_cached[0], tmp0_cached[1], tmp0_cached[2], tmp0_cached[3], tmp0_cached[4], tmp0_cached[5]];
  };
  var $serializer_instance_0;
  function $serializer_getInstance_0() {
    if ($serializer_instance_0 == null)
      new $serializer_0();
    return $serializer_instance_0;
  }
  function LegacyDrawing_init_$Init$(seen0, strokeItems, rectangleItems, circleItems, polygonItems, arrowItems, textItems, serializationConstructorMarker, $this) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_0().l1r_1);
    }
    if (0 === (seen0 & 1))
      $this.n1r_1 = emptyList();
    else
      $this.n1r_1 = strokeItems;
    if (0 === (seen0 & 2))
      $this.o1r_1 = emptyList();
    else
      $this.o1r_1 = rectangleItems;
    if (0 === (seen0 & 4))
      $this.p1r_1 = emptyList();
    else
      $this.p1r_1 = circleItems;
    if (0 === (seen0 & 8))
      $this.q1r_1 = emptyList();
    else
      $this.q1r_1 = polygonItems;
    if (0 === (seen0 & 16))
      $this.r1r_1 = emptyList();
    else
      $this.r1r_1 = arrowItems;
    if (0 === (seen0 & 32))
      $this.s1r_1 = emptyList();
    else
      $this.s1r_1 = textItems;
    return $this;
  }
  function LegacyDrawing_init_$Create$(seen0, strokeItems, rectangleItems, circleItems, polygonItems, arrowItems, textItems, serializationConstructorMarker) {
    return LegacyDrawing_init_$Init$(seen0, strokeItems, rectangleItems, circleItems, polygonItems, arrowItems, textItems, serializationConstructorMarker, objectCreate(protoOf(LegacyDrawing)));
  }
  function LegacyDrawing(strokeItems, rectangleItems, circleItems, polygonItems, arrowItems, textItems) {
    Companion_getInstance_0();
    strokeItems = strokeItems === VOID ? emptyList() : strokeItems;
    rectangleItems = rectangleItems === VOID ? emptyList() : rectangleItems;
    circleItems = circleItems === VOID ? emptyList() : circleItems;
    polygonItems = polygonItems === VOID ? emptyList() : polygonItems;
    arrowItems = arrowItems === VOID ? emptyList() : arrowItems;
    textItems = textItems === VOID ? emptyList() : textItems;
    this.n1r_1 = strokeItems;
    this.o1r_1 = rectangleItems;
    this.p1r_1 = circleItems;
    this.q1r_1 = polygonItems;
    this.r1r_1 = arrowItems;
    this.s1r_1 = textItems;
  }
  protoOf(LegacyDrawing).t1r = function () {
    // Inline function 'kotlin.collections.buildList' call
    // Inline function 'kotlin.collections.buildListInternal' call
    // Inline function 'kotlin.apply' call
    var this_0 = ArrayList_init_$Create$();
    // Inline function 'stickynode.model.LegacyDrawing.toItems.<anonymous>' call
    this_0.z(this.n1r_1);
    this_0.z(this.o1r_1);
    this_0.z(this.p1r_1);
    this_0.z(this.q1r_1);
    this_0.z(this.r1r_1);
    this_0.z(this.s1r_1);
    return this_0.w4();
  };
  function encodeDrawing(items, pretty) {
    pretty = pretty === VOID ? false : pretty;
    _init_properties_Drawing_kt__mbw8h8();
    var file = new DrawingFile('sticky-node', 2, items);
    return (pretty ? get_prettyJson() : get_json()).d12(Companion_getInstance().l14(), file);
  }
  function decodeDrawing(text) {
    _init_properties_Drawing_kt__mbw8h8();
    if (isBlank(text))
      throw IllegalArgumentException_init_$Create$('The file is empty');
    var file = get_json().e12(Companion_getInstance().l14(), text);
    if (!(file.h1r_1 === 'sticky-node'))
      throw IllegalArgumentException_init_$Create$('Not a Sticky Node file');
    if (file.i1r_1 >= 2)
      return file.j1r_1;
    return get_json().e12(Companion_getInstance_0().l14(), text).t1r();
  }
  function json$lambda($this$Json) {
    _init_properties_Drawing_kt__mbw8h8();
    $this$Json.w12_1 = true;
    $this$Json.u12_1 = true;
    $this$Json.v12_1 = false;
    return Unit_instance;
  }
  function prettyJson$lambda($this$Json) {
    _init_properties_Drawing_kt__mbw8h8();
    $this$Json.y12_1 = true;
    $this$Json.z12_1 = '  ';
    return Unit_instance;
  }
  var properties_initialized_Drawing_kt_6zzioe;
  function _init_properties_Drawing_kt__mbw8h8() {
    if (!properties_initialized_Drawing_kt_6zzioe) {
      properties_initialized_Drawing_kt_6zzioe = true;
      json = Json(VOID, json$lambda);
      var tmp = get_json();
      prettyJson = Json(tmp, prettyJson$lambda);
    }
  }
  function Companion_1() {
  }
  var Companion_instance_2;
  function Companion_getInstance_1() {
    return Companion_instance_2;
  }
  function $serializer_1() {
    $serializer_instance_1 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('stickynode.model.Point', this, 2);
    tmp0_serialDesc.dt('x', false);
    tmp0_serialDesc.dt('y', false);
    this.u1r_1 = tmp0_serialDesc;
  }
  protoOf($serializer_1).v1r = function (encoder, value) {
    var tmp0_desc = this.u1r_1;
    var tmp1_output = encoder.wl(tmp0_desc);
    tmp1_output.in(tmp0_desc, 0, value.f1p_1);
    tmp1_output.in(tmp0_desc, 1, value.g1p_1);
    tmp1_output.xl(tmp0_desc);
  };
  protoOf($serializer_1).si = function (encoder, value) {
    return this.v1r(encoder, value instanceof Point ? value : THROW_CCE());
  };
  protoOf($serializer_1).ti = function (decoder) {
    var tmp0_desc = this.u1r_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = 0.0;
    var tmp5_local1 = 0.0;
    var tmp6_input = decoder.wl(tmp0_desc);
    if (tmp6_input.mm()) {
      tmp4_local0 = tmp6_input.em(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.em(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.nm(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.em(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.em(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp6_input.xl(tmp0_desc);
    return Point_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  protoOf($serializer_1).ri = function () {
    return this.u1r_1;
  };
  protoOf($serializer_1).ft = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [DoubleSerializer_getInstance(), DoubleSerializer_getInstance()];
  };
  var $serializer_instance_1;
  function $serializer_getInstance_1() {
    if ($serializer_instance_1 == null)
      new $serializer_1();
    return $serializer_instance_1;
  }
  function Point_init_$Init$(seen0, x, y, serializationConstructorMarker, $this) {
    if (!(3 === (3 & seen0))) {
      throwMissingFieldException(seen0, 3, $serializer_getInstance_1().u1r_1);
    }
    $this.f1p_1 = x;
    $this.g1p_1 = y;
    return $this;
  }
  function Point_init_$Create$(seen0, x, y, serializationConstructorMarker) {
    return Point_init_$Init$(seen0, x, y, serializationConstructorMarker, objectCreate(protoOf(Point)));
  }
  function Point(x, y) {
    this.f1p_1 = x;
    this.g1p_1 = y;
  }
  protoOf(Point).w1r = function (other) {
    var tmp0 = this.f1p_1 - other.f1p_1;
    // Inline function 'kotlin.math.hypot' call
    var y = this.g1p_1 - other.g1p_1;
    return hypot(tmp0, y);
  };
  protoOf(Point).toString = function () {
    return 'Point(x=' + this.f1p_1 + ', y=' + this.g1p_1 + ')';
  };
  protoOf(Point).hashCode = function () {
    var result = getNumberHashCode(this.f1p_1);
    result = imul(result, 31) + getNumberHashCode(this.g1p_1) | 0;
    return result;
  };
  protoOf(Point).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Point))
      return false;
    var tmp0_other_with_cast = other instanceof Point ? other : THROW_CCE();
    if (!equals(this.f1p_1, tmp0_other_with_cast.f1p_1))
      return false;
    if (!equals(this.g1p_1, tmp0_other_with_cast.g1p_1))
      return false;
    return true;
  };
  function BoundingBox(x, y, width, height) {
    this.z1q_1 = x;
    this.a1r_1 = y;
    this.b1r_1 = width;
    this.c1r_1 = height;
  }
  function boundingBox(a, b) {
    var tmp0 = a.f1p_1;
    // Inline function 'kotlin.math.min' call
    var b_0 = b.f1p_1;
    var tmp = Math.min(tmp0, b_0);
    var tmp2 = a.g1p_1;
    // Inline function 'kotlin.math.min' call
    var b_1 = b.g1p_1;
    var tmp_0 = Math.min(tmp2, b_1);
    // Inline function 'kotlin.math.abs' call
    var x = b.f1p_1 - a.f1p_1;
    var tmp_1 = Math.abs(x);
    // Inline function 'kotlin.math.abs' call
    var x_0 = b.g1p_1 - a.g1p_1;
    var tmp$ret$3 = Math.abs(x_0);
    return new BoundingBox(tmp, tmp_0, tmp_1, tmp$ret$3);
  }
  function distanceToSegment(p, a, b) {
    var dx = b.f1p_1 - a.f1p_1;
    var dy = b.g1p_1 - a.g1p_1;
    var lengthSquared = dx * dx + dy * dy;
    if (lengthSquared === 0.0)
      return p.w1r(a);
    var t = coerceIn(((p.f1p_1 - a.f1p_1) * dx + (p.g1p_1 - a.g1p_1) * dy) / lengthSquared, 0.0, 1.0);
    var tmp0 = p.f1p_1 - (a.f1p_1 + t * dx);
    // Inline function 'kotlin.math.hypot' call
    var y = p.g1p_1 - (a.g1p_1 + t * dy);
    return hypot(tmp0, y);
  }
  function pointInPolygon(p, polygon) {
    var inside = false;
    var previous = get_lastIndex(polygon);
    var inductionVariable = 0;
    var last = polygon.l() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var a = polygon.n(i);
        var b = polygon.n(previous);
        if (!(a.g1p_1 > p.g1p_1 === b.g1p_1 > p.g1p_1) && p.f1p_1 < (b.f1p_1 - a.f1p_1) * (p.g1p_1 - a.g1p_1) / (b.g1p_1 - a.g1p_1) + a.f1p_1) {
          inside = !inside;
        }
        previous = i;
      }
       while (inductionVariable <= last);
    return inside;
  }
  function get_measureContext() {
    _init_properties_Items_kt__3bnoaa();
    var tmp0 = measureContext$delegate;
    // Inline function 'kotlin.getValue' call
    measureContext$factory();
    return tmp0.r1();
  }
  var measureContext$delegate;
  function Fillable() {
  }
  function get_centerX(_this__u8e3s4) {
    _init_properties_Items_kt__3bnoaa();
    return _this__u8e3s4.x1r() + _this__u8e3s4.y1r() / 2;
  }
  function get_centerY(_this__u8e3s4) {
    _init_properties_Items_kt__3bnoaa();
    return _this__u8e3s4.z1r() + _this__u8e3s4.a1s() / 2;
  }
  function lineHeight(fontSize) {
    _init_properties_Items_kt__3bnoaa();
    return roundToInt(fontSize * 1.2);
  }
  function hitRadius(lineWidth) {
    _init_properties_Items_kt__3bnoaa();
    // Inline function 'kotlin.math.max' call
    var b = lineWidth / 2.0 + 2.0;
    return Math.max(8.0, b);
  }
  function roundStroke(_this__u8e3s4) {
    _init_properties_Items_kt__3bnoaa();
    // Inline function 'kotlin.js.asDynamic' call
    _this__u8e3s4.lineCap = 'round';
    // Inline function 'kotlin.js.asDynamic' call
    _this__u8e3s4.lineJoin = 'round';
  }
  function paint(_this__u8e3s4, fillColor, strokeColor, width) {
    _init_properties_Items_kt__3bnoaa();
    // Inline function 'kotlin.text.isNullOrEmpty' call
    if (!(fillColor == null || charSequenceLength(fillColor) === 0)) {
      _this__u8e3s4.fillStyle = fillColor;
      _this__u8e3s4.fill();
    }
    _this__u8e3s4.strokeStyle = strokeColor;
    _this__u8e3s4.lineWidth = width;
    _this__u8e3s4.stroke();
  }
  function _get_$cachedSerializer__te6jhj($this) {
    return $this.d1r_1.r1();
  }
  function Item$Companion$_anonymous__jaim2s() {
    var tmp = getKClass(Item);
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_0 = [getKClass(ArrowItem), getKClass(CircleItem), getKClass(PolygonItem), getKClass(RectangleItem), getKClass(RegionFillItem), getKClass(StrokeItem), getKClass(TextItem)];
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_1 = [$serializer_getInstance_6(), $serializer_getInstance_4(), $serializer_getInstance_5(), $serializer_getInstance_3(), $serializer_getInstance_8(), $serializer_getInstance_2(), $serializer_getInstance_7()];
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$8 = [];
    return SealedClassSerializer_init_$Create$('stickynode.model.Item', tmp, tmp_0, tmp_1, tmp$ret$8);
  }
  function Companion_2() {
    Companion_instance_3 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.d1r_1 = lazy(tmp_0, Item$Companion$_anonymous__jaim2s);
  }
  protoOf(Companion_2).l14 = function () {
    return _get_$cachedSerializer__te6jhj(this);
  };
  protoOf(Companion_2).qt = function (typeParamsSerializers) {
    return this.l14();
  };
  var Companion_instance_3;
  function Companion_getInstance_2() {
    if (Companion_instance_3 == null)
      new Companion_2();
    return Companion_instance_3;
  }
  function Item_init_$Init$(seen0, serializationConstructorMarker, $this) {
    return $this;
  }
  function Item() {
    Companion_getInstance_2();
  }
  protoOf(Item).q1q = function (p) {
    return this.s1o(p);
  };
  function nearLine($this, p) {
    var radius = hitRadius($this.a1q_1);
    if ($this.y1p_1.l() === 1)
      return p.w1r($this.y1p_1.n(0)) <= radius;
    var inductionVariable = 0;
    var last = $this.y1p_1.l() - 1 | 0;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (distanceToSegment(p, $this.y1p_1.n(i), $this.y1p_1.n(i + 1 | 0)) <= radius)
          return true;
      }
       while (inductionVariable < last);
    return false;
  }
  function inside($this, p) {
    return $this.y1p_1.l() >= 3 && pointInPolygon(p, $this.y1p_1);
  }
  function Companion_3() {
    Companion_instance_4 = this;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.b1s_1 = [new ArrayListSerializer($serializer_getInstance_1()), null, null, null];
  }
  var Companion_instance_4;
  function Companion_getInstance_3() {
    if (Companion_instance_4 == null)
      new Companion_3();
    return Companion_instance_4;
  }
  function $serializer_2() {
    $serializer_instance_2 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('stroke', this, 4);
    tmp0_serialDesc.dt('points', false);
    tmp0_serialDesc.dt('color', false);
    tmp0_serialDesc.dt('lineWidth', true);
    tmp0_serialDesc.dt('fill', true);
    this.c1s_1 = tmp0_serialDesc;
  }
  protoOf($serializer_2).d1s = function (encoder, value) {
    var tmp0_desc = this.c1s_1;
    var tmp1_output = encoder.wl(tmp0_desc);
    var tmp2_cached = Companion_getInstance_3().b1s_1;
    tmp1_output.mn(tmp0_desc, 0, tmp2_cached[0], value.y1p_1);
    tmp1_output.kn(tmp0_desc, 1, value.z1p_1);
    if (tmp1_output.sn(tmp0_desc, 2) ? true : !(value.a1q_1 === 3)) {
      tmp1_output.fn(tmp0_desc, 2, value.a1q_1);
    }
    if (tmp1_output.sn(tmp0_desc, 3) ? true : !(value.b1q_1 == null)) {
      tmp1_output.on(tmp0_desc, 3, StringSerializer_getInstance(), value.b1q_1);
    }
    tmp1_output.xl(tmp0_desc);
  };
  protoOf($serializer_2).si = function (encoder, value) {
    return this.d1s(encoder, value instanceof StrokeItem ? value : THROW_CCE());
  };
  protoOf($serializer_2).ti = function (decoder) {
    var tmp0_desc = this.c1s_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = 0;
    var tmp7_local3 = null;
    var tmp8_input = decoder.wl(tmp0_desc);
    var tmp9_cached = Companion_getInstance_3().b1s_1;
    if (tmp8_input.mm()) {
      tmp4_local0 = tmp8_input.im(tmp0_desc, 0, tmp9_cached[0], tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp8_input.gm(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp8_input.bm(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp8_input.km(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp8_input.nm(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp8_input.im(tmp0_desc, 0, tmp9_cached[0], tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp8_input.gm(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp8_input.bm(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp8_input.km(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp8_input.xl(tmp0_desc);
    return StrokeItem_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, null);
  };
  protoOf($serializer_2).ri = function () {
    return this.c1s_1;
  };
  protoOf($serializer_2).ft = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [Companion_getInstance_3().b1s_1[0], StringSerializer_getInstance(), IntSerializer_getInstance(), get_nullable(StringSerializer_getInstance())];
  };
  var $serializer_instance_2;
  function $serializer_getInstance_2() {
    if ($serializer_instance_2 == null)
      new $serializer_2();
    return $serializer_instance_2;
  }
  function StrokeItem_init_$Init$(seen0, points, color, lineWidth, fill, serializationConstructorMarker, $this) {
    if (!(3 === (3 & seen0))) {
      throwMissingFieldException(seen0, 3, $serializer_getInstance_2().c1s_1);
    }
    Item_init_$Init$(seen0, serializationConstructorMarker, $this);
    $this.y1p_1 = points;
    $this.z1p_1 = color;
    if (0 === (seen0 & 4))
      $this.a1q_1 = 3;
    else
      $this.a1q_1 = lineWidth;
    if (0 === (seen0 & 8))
      $this.b1q_1 = null;
    else
      $this.b1q_1 = fill;
    return $this;
  }
  function StrokeItem_init_$Create$(seen0, points, color, lineWidth, fill, serializationConstructorMarker) {
    return StrokeItem_init_$Init$(seen0, points, color, lineWidth, fill, serializationConstructorMarker, objectCreate(protoOf(StrokeItem)));
  }
  function StrokeItem(points, color, lineWidth, fill) {
    Companion_getInstance_3();
    lineWidth = lineWidth === VOID ? 3 : lineWidth;
    fill = fill === VOID ? null : fill;
    Item.call(this);
    this.y1p_1 = points;
    this.z1p_1 = color;
    this.a1q_1 = lineWidth;
    this.b1q_1 = fill;
  }
  protoOf(StrokeItem).s1q = function (_set____db54di) {
    this.b1q_1 = _set____db54di;
  };
  protoOf(StrokeItem).r1q = function () {
    return this.b1q_1;
  };
  protoOf(StrokeItem).u1n = function (ctx) {
    if (this.y1p_1.l() < 2)
      return Unit_instance;
    roundStroke(ctx);
    ctx.beginPath();
    ctx.moveTo(this.y1p_1.n(0).f1p_1, this.y1p_1.n(0).g1p_1);
    var inductionVariable = 1;
    var last = this.y1p_1.l();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        ctx.lineTo(this.y1p_1.n(i).f1p_1, this.y1p_1.n(i).g1p_1);
      }
       while (inductionVariable < last);
    paint(ctx, this.b1q_1, this.z1p_1, this.a1q_1);
  };
  protoOf(StrokeItem).s1o = function (p) {
    var tmp;
    if (nearLine(this, p)) {
      tmp = true;
    } else {
      var tmp_0;
      // Inline function 'kotlin.text.isNullOrEmpty' call
      var this_0 = this.b1q_1;
      if (!(this_0 == null || charSequenceLength(this_0) === 0)) {
        tmp_0 = inside(this, p);
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(StrokeItem).q1q = function (p) {
    return nearLine(this, p) || inside(this, p);
  };
  protoOf(StrokeItem).u1p = function (dx, dy) {
    var inductionVariable = 0;
    var last = this.y1p_1.l() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var point = this.y1p_1.n(i);
        this.y1p_1.a2(i, new Point(point.f1p_1 + dx, point.g1p_1 + dy));
      }
       while (inductionVariable <= last);
  };
  function Companion_4() {
  }
  var Companion_instance_5;
  function Companion_getInstance_4() {
    return Companion_instance_5;
  }
  function $serializer_3() {
    $serializer_instance_3 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('rectangle', this, 7);
    tmp0_serialDesc.dt('x', false);
    tmp0_serialDesc.dt('y', false);
    tmp0_serialDesc.dt('width', false);
    tmp0_serialDesc.dt('height', false);
    tmp0_serialDesc.dt('color', false);
    tmp0_serialDesc.dt('lineWidth', true);
    tmp0_serialDesc.dt('fill', true);
    this.e1s_1 = tmp0_serialDesc;
  }
  protoOf($serializer_3).f1s = function (encoder, value) {
    var tmp0_desc = this.e1s_1;
    var tmp1_output = encoder.wl(tmp0_desc);
    tmp1_output.in(tmp0_desc, 0, value.g1s_1);
    tmp1_output.in(tmp0_desc, 1, value.h1s_1);
    tmp1_output.in(tmp0_desc, 2, value.i1s_1);
    tmp1_output.in(tmp0_desc, 3, value.j1s_1);
    tmp1_output.kn(tmp0_desc, 4, value.k1s_1);
    if (tmp1_output.sn(tmp0_desc, 5) ? true : !(value.l1s_1 === 3)) {
      tmp1_output.fn(tmp0_desc, 5, value.l1s_1);
    }
    if (tmp1_output.sn(tmp0_desc, 6) ? true : !(value.m1s_1 == null)) {
      tmp1_output.on(tmp0_desc, 6, StringSerializer_getInstance(), value.m1s_1);
    }
    tmp1_output.xl(tmp0_desc);
  };
  protoOf($serializer_3).si = function (encoder, value) {
    return this.f1s(encoder, value instanceof RectangleItem ? value : THROW_CCE());
  };
  protoOf($serializer_3).ti = function (decoder) {
    var tmp0_desc = this.e1s_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = 0.0;
    var tmp5_local1 = 0.0;
    var tmp6_local2 = 0.0;
    var tmp7_local3 = 0.0;
    var tmp8_local4 = null;
    var tmp9_local5 = 0;
    var tmp10_local6 = null;
    var tmp11_input = decoder.wl(tmp0_desc);
    if (tmp11_input.mm()) {
      tmp4_local0 = tmp11_input.em(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp11_input.em(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp11_input.em(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp11_input.em(tmp0_desc, 3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp11_input.gm(tmp0_desc, 4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp11_input.bm(tmp0_desc, 5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp11_input.km(tmp0_desc, 6, StringSerializer_getInstance(), tmp10_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp11_input.nm(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp11_input.em(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp11_input.em(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp11_input.em(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp11_input.em(tmp0_desc, 3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp11_input.gm(tmp0_desc, 4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp11_input.bm(tmp0_desc, 5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp11_input.km(tmp0_desc, 6, StringSerializer_getInstance(), tmp10_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp11_input.xl(tmp0_desc);
    return RectangleItem_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, null);
  };
  protoOf($serializer_3).ri = function () {
    return this.e1s_1;
  };
  protoOf($serializer_3).ft = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [DoubleSerializer_getInstance(), DoubleSerializer_getInstance(), DoubleSerializer_getInstance(), DoubleSerializer_getInstance(), StringSerializer_getInstance(), IntSerializer_getInstance(), get_nullable(StringSerializer_getInstance())];
  };
  var $serializer_instance_3;
  function $serializer_getInstance_3() {
    if ($serializer_instance_3 == null)
      new $serializer_3();
    return $serializer_instance_3;
  }
  function RectangleItem_init_$Init$(seen0, x, y, width, height, color, lineWidth, fill, serializationConstructorMarker, $this) {
    if (!(31 === (31 & seen0))) {
      throwMissingFieldException(seen0, 31, $serializer_getInstance_3().e1s_1);
    }
    Item_init_$Init$(seen0, serializationConstructorMarker, $this);
    $this.g1s_1 = x;
    $this.h1s_1 = y;
    $this.i1s_1 = width;
    $this.j1s_1 = height;
    $this.k1s_1 = color;
    if (0 === (seen0 & 32))
      $this.l1s_1 = 3;
    else
      $this.l1s_1 = lineWidth;
    if (0 === (seen0 & 64))
      $this.m1s_1 = null;
    else
      $this.m1s_1 = fill;
    return $this;
  }
  function RectangleItem_init_$Create$(seen0, x, y, width, height, color, lineWidth, fill, serializationConstructorMarker) {
    return RectangleItem_init_$Init$(seen0, x, y, width, height, color, lineWidth, fill, serializationConstructorMarker, objectCreate(protoOf(RectangleItem)));
  }
  function RectangleItem(x, y, width, height, color, lineWidth, fill) {
    lineWidth = lineWidth === VOID ? 3 : lineWidth;
    fill = fill === VOID ? null : fill;
    Item.call(this);
    this.g1s_1 = x;
    this.h1s_1 = y;
    this.i1s_1 = width;
    this.j1s_1 = height;
    this.k1s_1 = color;
    this.l1s_1 = lineWidth;
    this.m1s_1 = fill;
  }
  protoOf(RectangleItem).x1r = function () {
    return this.g1s_1;
  };
  protoOf(RectangleItem).z1r = function () {
    return this.h1s_1;
  };
  protoOf(RectangleItem).y1r = function () {
    return this.i1s_1;
  };
  protoOf(RectangleItem).a1s = function () {
    return this.j1s_1;
  };
  protoOf(RectangleItem).s1q = function (_set____db54di) {
    this.m1s_1 = _set____db54di;
  };
  protoOf(RectangleItem).r1q = function () {
    return this.m1s_1;
  };
  protoOf(RectangleItem).u1n = function (ctx) {
    ctx.beginPath();
    ctx.rect(this.g1s_1, this.h1s_1, this.i1s_1, this.j1s_1);
    paint(ctx, this.m1s_1, this.k1s_1, this.l1s_1);
  };
  protoOf(RectangleItem).s1o = function (p) {
    var tmp;
    var containsLower = this.g1s_1;
    var containsUpper = this.g1s_1 + this.i1s_1;
    var containsArg = p.f1p_1;
    if (containsLower <= containsArg ? containsArg <= containsUpper : false) {
      var containsLower_0 = this.h1s_1;
      var containsUpper_0 = this.h1s_1 + this.j1s_1;
      var containsArg_0 = p.g1p_1;
      tmp = containsLower_0 <= containsArg_0 ? containsArg_0 <= containsUpper_0 : false;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(RectangleItem).u1p = function (dx, dy) {
    this.g1s_1 = this.g1s_1 + dx;
    this.h1s_1 = this.h1s_1 + dy;
  };
  function Companion_5() {
  }
  var Companion_instance_6;
  function Companion_getInstance_5() {
    return Companion_instance_6;
  }
  function $serializer_4() {
    $serializer_instance_4 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('circle', this, 7);
    tmp0_serialDesc.dt('x', false);
    tmp0_serialDesc.dt('y', false);
    tmp0_serialDesc.dt('width', false);
    tmp0_serialDesc.dt('height', false);
    tmp0_serialDesc.dt('color', false);
    tmp0_serialDesc.dt('lineWidth', true);
    tmp0_serialDesc.dt('fill', true);
    this.n1s_1 = tmp0_serialDesc;
  }
  protoOf($serializer_4).o1s = function (encoder, value) {
    var tmp0_desc = this.n1s_1;
    var tmp1_output = encoder.wl(tmp0_desc);
    tmp1_output.in(tmp0_desc, 0, value.p1s_1);
    tmp1_output.in(tmp0_desc, 1, value.q1s_1);
    tmp1_output.in(tmp0_desc, 2, value.r1s_1);
    tmp1_output.in(tmp0_desc, 3, value.s1s_1);
    tmp1_output.kn(tmp0_desc, 4, value.t1s_1);
    if (tmp1_output.sn(tmp0_desc, 5) ? true : !(value.u1s_1 === 3)) {
      tmp1_output.fn(tmp0_desc, 5, value.u1s_1);
    }
    if (tmp1_output.sn(tmp0_desc, 6) ? true : !(value.v1s_1 == null)) {
      tmp1_output.on(tmp0_desc, 6, StringSerializer_getInstance(), value.v1s_1);
    }
    tmp1_output.xl(tmp0_desc);
  };
  protoOf($serializer_4).si = function (encoder, value) {
    return this.o1s(encoder, value instanceof CircleItem ? value : THROW_CCE());
  };
  protoOf($serializer_4).ti = function (decoder) {
    var tmp0_desc = this.n1s_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = 0.0;
    var tmp5_local1 = 0.0;
    var tmp6_local2 = 0.0;
    var tmp7_local3 = 0.0;
    var tmp8_local4 = null;
    var tmp9_local5 = 0;
    var tmp10_local6 = null;
    var tmp11_input = decoder.wl(tmp0_desc);
    if (tmp11_input.mm()) {
      tmp4_local0 = tmp11_input.em(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp11_input.em(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp11_input.em(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp11_input.em(tmp0_desc, 3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp11_input.gm(tmp0_desc, 4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp11_input.bm(tmp0_desc, 5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp11_input.km(tmp0_desc, 6, StringSerializer_getInstance(), tmp10_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp11_input.nm(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp11_input.em(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp11_input.em(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp11_input.em(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp11_input.em(tmp0_desc, 3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp11_input.gm(tmp0_desc, 4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp11_input.bm(tmp0_desc, 5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp11_input.km(tmp0_desc, 6, StringSerializer_getInstance(), tmp10_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp11_input.xl(tmp0_desc);
    return CircleItem_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, null);
  };
  protoOf($serializer_4).ri = function () {
    return this.n1s_1;
  };
  protoOf($serializer_4).ft = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [DoubleSerializer_getInstance(), DoubleSerializer_getInstance(), DoubleSerializer_getInstance(), DoubleSerializer_getInstance(), StringSerializer_getInstance(), IntSerializer_getInstance(), get_nullable(StringSerializer_getInstance())];
  };
  var $serializer_instance_4;
  function $serializer_getInstance_4() {
    if ($serializer_instance_4 == null)
      new $serializer_4();
    return $serializer_instance_4;
  }
  function CircleItem_init_$Init$(seen0, x, y, width, height, color, lineWidth, fill, serializationConstructorMarker, $this) {
    if (!(31 === (31 & seen0))) {
      throwMissingFieldException(seen0, 31, $serializer_getInstance_4().n1s_1);
    }
    Item_init_$Init$(seen0, serializationConstructorMarker, $this);
    $this.p1s_1 = x;
    $this.q1s_1 = y;
    $this.r1s_1 = width;
    $this.s1s_1 = height;
    $this.t1s_1 = color;
    if (0 === (seen0 & 32))
      $this.u1s_1 = 3;
    else
      $this.u1s_1 = lineWidth;
    if (0 === (seen0 & 64))
      $this.v1s_1 = null;
    else
      $this.v1s_1 = fill;
    return $this;
  }
  function CircleItem_init_$Create$(seen0, x, y, width, height, color, lineWidth, fill, serializationConstructorMarker) {
    return CircleItem_init_$Init$(seen0, x, y, width, height, color, lineWidth, fill, serializationConstructorMarker, objectCreate(protoOf(CircleItem)));
  }
  function CircleItem(x, y, width, height, color, lineWidth, fill) {
    lineWidth = lineWidth === VOID ? 3 : lineWidth;
    fill = fill === VOID ? null : fill;
    Item.call(this);
    this.p1s_1 = x;
    this.q1s_1 = y;
    this.r1s_1 = width;
    this.s1s_1 = height;
    this.t1s_1 = color;
    this.u1s_1 = lineWidth;
    this.v1s_1 = fill;
  }
  protoOf(CircleItem).x1r = function () {
    return this.p1s_1;
  };
  protoOf(CircleItem).z1r = function () {
    return this.q1s_1;
  };
  protoOf(CircleItem).y1r = function () {
    return this.r1s_1;
  };
  protoOf(CircleItem).a1s = function () {
    return this.s1s_1;
  };
  protoOf(CircleItem).s1q = function (_set____db54di) {
    this.v1s_1 = _set____db54di;
  };
  protoOf(CircleItem).r1q = function () {
    return this.v1s_1;
  };
  protoOf(CircleItem).u1n = function (ctx) {
    ctx.beginPath();
    ctx.ellipse(get_centerX(this), get_centerY(this), this.r1s_1 / 2, this.s1s_1 / 2, 0.0, 0.0, 2 * 3.141592653589793);
    paint(ctx, this.v1s_1, this.t1s_1, this.u1s_1);
  };
  protoOf(CircleItem).s1o = function (p) {
    var radiusX = this.r1s_1 / 2;
    var radiusY = this.s1s_1 / 2;
    if (radiusX === 0.0 || radiusY === 0.0)
      return false;
    var nx = (p.f1p_1 - get_centerX(this)) / radiusX;
    var ny = (p.g1p_1 - get_centerY(this)) / radiusY;
    return nx * nx + ny * ny <= 1.0;
  };
  protoOf(CircleItem).u1p = function (dx, dy) {
    this.p1s_1 = this.p1s_1 + dx;
    this.q1s_1 = this.q1s_1 + dy;
  };
  function vertices($this) {
    var count = coerceAtLeast($this.a1t_1, 3);
    var tmp0 = $this.y1s_1;
    // Inline function 'kotlin.math.min' call
    var b = $this.z1s_1;
    var radius = Math.min(tmp0, b) / 2;
    var step = 2 * 3.141592653589793 / count;
    // Inline function 'kotlin.collections.List' call
    // Inline function 'kotlin.collections.MutableList' call
    var list = ArrayList_init_$Create$_0(count);
    // Inline function 'kotlin.repeat' call
    var inductionVariable = 0;
    if (inductionVariable < count)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.collections.MutableList.<anonymous>' call
        // Inline function 'stickynode.model.PolygonItem.vertices.<anonymous>' call
        var angle = -3.141592653589793 / 2 + index * step;
        var tmp = get_centerX($this);
        // Inline function 'kotlin.math.cos' call
        var tmp_0 = tmp + radius * Math.cos(angle);
        var tmp_1 = get_centerY($this);
        // Inline function 'kotlin.math.sin' call
        var tmp$ret$2 = Math.sin(angle);
        var tmp$ret$3 = new Point(tmp_0, tmp_1 + radius * tmp$ret$2);
        list.d(tmp$ret$3);
      }
       while (inductionVariable < count);
    return list;
  }
  function Companion_6() {
  }
  var Companion_instance_7;
  function Companion_getInstance_6() {
    return Companion_instance_7;
  }
  function $serializer_5() {
    $serializer_instance_5 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('polygon', this, 8);
    tmp0_serialDesc.dt('x', false);
    tmp0_serialDesc.dt('y', false);
    tmp0_serialDesc.dt('width', false);
    tmp0_serialDesc.dt('height', false);
    tmp0_serialDesc.dt('sides', false);
    tmp0_serialDesc.dt('color', false);
    tmp0_serialDesc.dt('lineWidth', true);
    tmp0_serialDesc.dt('fill', true);
    this.e1t_1 = tmp0_serialDesc;
  }
  protoOf($serializer_5).f1t = function (encoder, value) {
    var tmp0_desc = this.e1t_1;
    var tmp1_output = encoder.wl(tmp0_desc);
    tmp1_output.in(tmp0_desc, 0, value.w1s_1);
    tmp1_output.in(tmp0_desc, 1, value.x1s_1);
    tmp1_output.in(tmp0_desc, 2, value.y1s_1);
    tmp1_output.in(tmp0_desc, 3, value.z1s_1);
    tmp1_output.fn(tmp0_desc, 4, value.a1t_1);
    tmp1_output.kn(tmp0_desc, 5, value.b1t_1);
    if (tmp1_output.sn(tmp0_desc, 6) ? true : !(value.c1t_1 === 3)) {
      tmp1_output.fn(tmp0_desc, 6, value.c1t_1);
    }
    if (tmp1_output.sn(tmp0_desc, 7) ? true : !(value.d1t_1 == null)) {
      tmp1_output.on(tmp0_desc, 7, StringSerializer_getInstance(), value.d1t_1);
    }
    tmp1_output.xl(tmp0_desc);
  };
  protoOf($serializer_5).si = function (encoder, value) {
    return this.f1t(encoder, value instanceof PolygonItem ? value : THROW_CCE());
  };
  protoOf($serializer_5).ti = function (decoder) {
    var tmp0_desc = this.e1t_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = 0.0;
    var tmp5_local1 = 0.0;
    var tmp6_local2 = 0.0;
    var tmp7_local3 = 0.0;
    var tmp8_local4 = 0;
    var tmp9_local5 = null;
    var tmp10_local6 = 0;
    var tmp11_local7 = null;
    var tmp12_input = decoder.wl(tmp0_desc);
    if (tmp12_input.mm()) {
      tmp4_local0 = tmp12_input.em(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp12_input.em(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp12_input.em(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp12_input.em(tmp0_desc, 3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp12_input.bm(tmp0_desc, 4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp12_input.gm(tmp0_desc, 5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp12_input.bm(tmp0_desc, 6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp11_local7 = tmp12_input.km(tmp0_desc, 7, StringSerializer_getInstance(), tmp11_local7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp12_input.nm(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp12_input.em(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp12_input.em(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp12_input.em(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp12_input.em(tmp0_desc, 3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp12_input.bm(tmp0_desc, 4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp12_input.gm(tmp0_desc, 5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp12_input.bm(tmp0_desc, 6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp11_local7 = tmp12_input.km(tmp0_desc, 7, StringSerializer_getInstance(), tmp11_local7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp12_input.xl(tmp0_desc);
    return PolygonItem_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, tmp11_local7, null);
  };
  protoOf($serializer_5).ri = function () {
    return this.e1t_1;
  };
  protoOf($serializer_5).ft = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [DoubleSerializer_getInstance(), DoubleSerializer_getInstance(), DoubleSerializer_getInstance(), DoubleSerializer_getInstance(), IntSerializer_getInstance(), StringSerializer_getInstance(), IntSerializer_getInstance(), get_nullable(StringSerializer_getInstance())];
  };
  var $serializer_instance_5;
  function $serializer_getInstance_5() {
    if ($serializer_instance_5 == null)
      new $serializer_5();
    return $serializer_instance_5;
  }
  function PolygonItem_init_$Init$(seen0, x, y, width, height, sides, color, lineWidth, fill, serializationConstructorMarker, $this) {
    if (!(63 === (63 & seen0))) {
      throwMissingFieldException(seen0, 63, $serializer_getInstance_5().e1t_1);
    }
    Item_init_$Init$(seen0, serializationConstructorMarker, $this);
    $this.w1s_1 = x;
    $this.x1s_1 = y;
    $this.y1s_1 = width;
    $this.z1s_1 = height;
    $this.a1t_1 = sides;
    $this.b1t_1 = color;
    if (0 === (seen0 & 64))
      $this.c1t_1 = 3;
    else
      $this.c1t_1 = lineWidth;
    if (0 === (seen0 & 128))
      $this.d1t_1 = null;
    else
      $this.d1t_1 = fill;
    return $this;
  }
  function PolygonItem_init_$Create$(seen0, x, y, width, height, sides, color, lineWidth, fill, serializationConstructorMarker) {
    return PolygonItem_init_$Init$(seen0, x, y, width, height, sides, color, lineWidth, fill, serializationConstructorMarker, objectCreate(protoOf(PolygonItem)));
  }
  function PolygonItem(x, y, width, height, sides, color, lineWidth, fill) {
    lineWidth = lineWidth === VOID ? 3 : lineWidth;
    fill = fill === VOID ? null : fill;
    Item.call(this);
    this.w1s_1 = x;
    this.x1s_1 = y;
    this.y1s_1 = width;
    this.z1s_1 = height;
    this.a1t_1 = sides;
    this.b1t_1 = color;
    this.c1t_1 = lineWidth;
    this.d1t_1 = fill;
  }
  protoOf(PolygonItem).x1r = function () {
    return this.w1s_1;
  };
  protoOf(PolygonItem).z1r = function () {
    return this.x1s_1;
  };
  protoOf(PolygonItem).y1r = function () {
    return this.y1s_1;
  };
  protoOf(PolygonItem).a1s = function () {
    return this.z1s_1;
  };
  protoOf(PolygonItem).s1q = function (_set____db54di) {
    this.d1t_1 = _set____db54di;
  };
  protoOf(PolygonItem).r1q = function () {
    return this.d1t_1;
  };
  protoOf(PolygonItem).u1n = function (ctx) {
    var points = vertices(this);
    ctx.beginPath();
    ctx.moveTo(points.n(0).f1p_1, points.n(0).g1p_1);
    var inductionVariable = 1;
    var last = points.l();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        ctx.lineTo(points.n(i).f1p_1, points.n(i).g1p_1);
      }
       while (inductionVariable < last);
    ctx.closePath();
    paint(ctx, this.d1t_1, this.b1t_1, this.c1t_1);
  };
  protoOf(PolygonItem).s1o = function (p) {
    var tmp0 = this.y1s_1;
    // Inline function 'kotlin.math.min' call
    var b = this.z1s_1;
    if (Math.min(tmp0, b) === 0.0)
      return false;
    var points = vertices(this);
    var inside = false;
    var previous = get_lastIndex(points);
    var inductionVariable = 0;
    var last = points.l() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var a = points.n(i);
        var b_0 = points.n(previous);
        if (!(a.g1p_1 > p.g1p_1 === b_0.g1p_1 > p.g1p_1) && p.f1p_1 < (b_0.f1p_1 - a.f1p_1) * (p.g1p_1 - a.g1p_1) / (b_0.g1p_1 - a.g1p_1) + a.f1p_1) {
          inside = !inside;
        }
        previous = i;
      }
       while (inductionVariable <= last);
    return inside;
  };
  protoOf(PolygonItem).u1p = function (dx, dy) {
    this.w1s_1 = this.w1s_1 + dx;
    this.x1s_1 = this.x1s_1 + dy;
  };
  function Companion_7() {
  }
  var Companion_instance_8;
  function Companion_getInstance_7() {
    return Companion_instance_8;
  }
  function $serializer_6() {
    $serializer_instance_6 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('arrow', this, 6);
    tmp0_serialDesc.dt('startX', false);
    tmp0_serialDesc.dt('startY', false);
    tmp0_serialDesc.dt('endX', false);
    tmp0_serialDesc.dt('endY', false);
    tmp0_serialDesc.dt('color', false);
    tmp0_serialDesc.dt('lineWidth', true);
    this.g1t_1 = tmp0_serialDesc;
  }
  protoOf($serializer_6).h1t = function (encoder, value) {
    var tmp0_desc = this.g1t_1;
    var tmp1_output = encoder.wl(tmp0_desc);
    tmp1_output.in(tmp0_desc, 0, value.i1t_1);
    tmp1_output.in(tmp0_desc, 1, value.j1t_1);
    tmp1_output.in(tmp0_desc, 2, value.k1t_1);
    tmp1_output.in(tmp0_desc, 3, value.l1t_1);
    tmp1_output.kn(tmp0_desc, 4, value.m1t_1);
    if (tmp1_output.sn(tmp0_desc, 5) ? true : !(value.n1t_1 === 3)) {
      tmp1_output.fn(tmp0_desc, 5, value.n1t_1);
    }
    tmp1_output.xl(tmp0_desc);
  };
  protoOf($serializer_6).si = function (encoder, value) {
    return this.h1t(encoder, value instanceof ArrowItem ? value : THROW_CCE());
  };
  protoOf($serializer_6).ti = function (decoder) {
    var tmp0_desc = this.g1t_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = 0.0;
    var tmp5_local1 = 0.0;
    var tmp6_local2 = 0.0;
    var tmp7_local3 = 0.0;
    var tmp8_local4 = null;
    var tmp9_local5 = 0;
    var tmp10_input = decoder.wl(tmp0_desc);
    if (tmp10_input.mm()) {
      tmp4_local0 = tmp10_input.em(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp10_input.em(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp10_input.em(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp10_input.em(tmp0_desc, 3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp10_input.gm(tmp0_desc, 4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp10_input.bm(tmp0_desc, 5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp10_input.nm(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp10_input.em(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp10_input.em(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp10_input.em(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp10_input.em(tmp0_desc, 3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp10_input.gm(tmp0_desc, 4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp10_input.bm(tmp0_desc, 5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp10_input.xl(tmp0_desc);
    return ArrowItem_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, null);
  };
  protoOf($serializer_6).ri = function () {
    return this.g1t_1;
  };
  protoOf($serializer_6).ft = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [DoubleSerializer_getInstance(), DoubleSerializer_getInstance(), DoubleSerializer_getInstance(), DoubleSerializer_getInstance(), StringSerializer_getInstance(), IntSerializer_getInstance()];
  };
  var $serializer_instance_6;
  function $serializer_getInstance_6() {
    if ($serializer_instance_6 == null)
      new $serializer_6();
    return $serializer_instance_6;
  }
  function ArrowItem_init_$Init$(seen0, startX, startY, endX, endY, color, lineWidth, serializationConstructorMarker, $this) {
    if (!(31 === (31 & seen0))) {
      throwMissingFieldException(seen0, 31, $serializer_getInstance_6().g1t_1);
    }
    Item_init_$Init$(seen0, serializationConstructorMarker, $this);
    $this.i1t_1 = startX;
    $this.j1t_1 = startY;
    $this.k1t_1 = endX;
    $this.l1t_1 = endY;
    $this.m1t_1 = color;
    if (0 === (seen0 & 32))
      $this.n1t_1 = 3;
    else
      $this.n1t_1 = lineWidth;
    return $this;
  }
  function ArrowItem_init_$Create$(seen0, startX, startY, endX, endY, color, lineWidth, serializationConstructorMarker) {
    return ArrowItem_init_$Init$(seen0, startX, startY, endX, endY, color, lineWidth, serializationConstructorMarker, objectCreate(protoOf(ArrowItem)));
  }
  function ArrowItem(startX, startY, endX, endY, color, lineWidth) {
    lineWidth = lineWidth === VOID ? 3 : lineWidth;
    Item.call(this);
    this.i1t_1 = startX;
    this.j1t_1 = startY;
    this.k1t_1 = endX;
    this.l1t_1 = endY;
    this.m1t_1 = color;
    this.n1t_1 = lineWidth;
  }
  protoOf(ArrowItem).u1n = function (ctx) {
    // Inline function 'kotlin.math.max' call
    var b = this.n1t_1 * 4.0;
    var headLength = Math.max(16.0, b);
    var tmp2 = this.l1t_1 - this.j1t_1;
    // Inline function 'kotlin.math.atan2' call
    var x = this.k1t_1 - this.i1t_1;
    var angle = Math.atan2(tmp2, x);
    var spread = 3.141592653589793 / 6;
    ctx.strokeStyle = this.m1t_1;
    ctx.lineWidth = this.n1t_1;
    roundStroke(ctx);
    ctx.beginPath();
    ctx.moveTo(this.i1t_1, this.j1t_1);
    ctx.lineTo(this.k1t_1, this.l1t_1);
    var tmp = this.k1t_1;
    // Inline function 'kotlin.math.cos' call
    var x_0 = angle - spread;
    var tmp_0 = tmp - headLength * Math.cos(x_0);
    var tmp_1 = this.l1t_1;
    // Inline function 'kotlin.math.sin' call
    var x_1 = angle - spread;
    var tmp$ret$3 = Math.sin(x_1);
    ctx.moveTo(tmp_0, tmp_1 - headLength * tmp$ret$3);
    ctx.lineTo(this.k1t_1, this.l1t_1);
    var tmp_2 = this.k1t_1;
    // Inline function 'kotlin.math.cos' call
    var x_2 = angle + spread;
    var tmp_3 = tmp_2 - headLength * Math.cos(x_2);
    var tmp_4 = this.l1t_1;
    // Inline function 'kotlin.math.sin' call
    var x_3 = angle + spread;
    var tmp$ret$5 = Math.sin(x_3);
    ctx.lineTo(tmp_3, tmp_4 - headLength * tmp$ret$5);
    ctx.stroke();
  };
  protoOf(ArrowItem).s1o = function (p) {
    return distanceToSegment(p, new Point(this.i1t_1, this.j1t_1), new Point(this.k1t_1, this.l1t_1)) <= hitRadius(this.n1t_1);
  };
  protoOf(ArrowItem).u1p = function (dx, dy) {
    this.i1t_1 = this.i1t_1 + dx;
    this.j1t_1 = this.j1t_1 + dy;
    this.k1t_1 = this.k1t_1 + dx;
    this.l1t_1 = this.l1t_1 + dy;
  };
  function fontSpec($this) {
    return '' + $this.l1q_1 + 'px sans-serif';
  }
  function lines($this) {
    return split($this.k1q_1, ['\n']);
  }
  function Companion_8() {
  }
  var Companion_instance_9;
  function Companion_getInstance_8() {
    return Companion_instance_9;
  }
  function $serializer_7() {
    $serializer_instance_7 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('text', this, 5);
    tmp0_serialDesc.dt('x', false);
    tmp0_serialDesc.dt('y', false);
    tmp0_serialDesc.dt('color', false);
    tmp0_serialDesc.dt('text', false);
    tmp0_serialDesc.dt('fontSize', true);
    this.o1t_1 = tmp0_serialDesc;
  }
  protoOf($serializer_7).p1t = function (encoder, value) {
    var tmp0_desc = this.o1t_1;
    var tmp1_output = encoder.wl(tmp0_desc);
    tmp1_output.in(tmp0_desc, 0, value.h1q_1);
    tmp1_output.in(tmp0_desc, 1, value.i1q_1);
    tmp1_output.kn(tmp0_desc, 2, value.j1q_1);
    tmp1_output.kn(tmp0_desc, 3, value.k1q_1);
    if (tmp1_output.sn(tmp0_desc, 4) ? true : !(value.l1q_1 === 20)) {
      tmp1_output.fn(tmp0_desc, 4, value.l1q_1);
    }
    tmp1_output.xl(tmp0_desc);
  };
  protoOf($serializer_7).si = function (encoder, value) {
    return this.p1t(encoder, value instanceof TextItem ? value : THROW_CCE());
  };
  protoOf($serializer_7).ti = function (decoder) {
    var tmp0_desc = this.o1t_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = 0.0;
    var tmp5_local1 = 0.0;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = 0;
    var tmp9_input = decoder.wl(tmp0_desc);
    if (tmp9_input.mm()) {
      tmp4_local0 = tmp9_input.em(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp9_input.em(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp9_input.gm(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp9_input.gm(tmp0_desc, 3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp9_input.bm(tmp0_desc, 4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp9_input.nm(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp9_input.em(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp9_input.em(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp9_input.gm(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp9_input.gm(tmp0_desc, 3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp9_input.bm(tmp0_desc, 4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp9_input.xl(tmp0_desc);
    return TextItem_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, null);
  };
  protoOf($serializer_7).ri = function () {
    return this.o1t_1;
  };
  protoOf($serializer_7).ft = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [DoubleSerializer_getInstance(), DoubleSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), IntSerializer_getInstance()];
  };
  var $serializer_instance_7;
  function $serializer_getInstance_7() {
    if ($serializer_instance_7 == null)
      new $serializer_7();
    return $serializer_instance_7;
  }
  function TextItem_init_$Init$(seen0, x, y, color, text, fontSize, serializationConstructorMarker, $this) {
    if (!(15 === (15 & seen0))) {
      throwMissingFieldException(seen0, 15, $serializer_getInstance_7().o1t_1);
    }
    Item_init_$Init$(seen0, serializationConstructorMarker, $this);
    $this.h1q_1 = x;
    $this.i1q_1 = y;
    $this.j1q_1 = color;
    $this.k1q_1 = text;
    if (0 === (seen0 & 16))
      $this.l1q_1 = 20;
    else
      $this.l1q_1 = fontSize;
    return $this;
  }
  function TextItem_init_$Create$(seen0, x, y, color, text, fontSize, serializationConstructorMarker) {
    return TextItem_init_$Init$(seen0, x, y, color, text, fontSize, serializationConstructorMarker, objectCreate(protoOf(TextItem)));
  }
  function TextItem(x, y, color, text, fontSize) {
    fontSize = fontSize === VOID ? 20 : fontSize;
    Item.call(this);
    this.h1q_1 = x;
    this.i1q_1 = y;
    this.j1q_1 = color;
    this.k1q_1 = text;
    this.l1q_1 = fontSize;
  }
  protoOf(TextItem).u1n = function (ctx) {
    // Inline function 'kotlin.js.asDynamic' call
    ctx.textBaseline = 'top';
    ctx.font = fontSpec(this);
    ctx.fillStyle = this.j1q_1;
    var step = lineHeight(this.l1q_1);
    // Inline function 'kotlin.collections.forEachIndexed' call
    var index = 0;
    var _iterator__ex2g4s = lines(this).i();
    while (_iterator__ex2g4s.j()) {
      var item = _iterator__ex2g4s.k();
      var _unary__edvuaz = index;
      index = _unary__edvuaz + 1 | 0;
      // Inline function 'stickynode.model.TextItem.draw.<anonymous>' call
      var index_0 = checkIndexOverflow(_unary__edvuaz);
      ctx.fillText(item, this.h1q_1, this.i1q_1 + imul(index_0, step));
    }
  };
  protoOf(TextItem).s1o = function (p) {
    // Inline function 'kotlin.text.isEmpty' call
    var this_0 = this.k1q_1;
    if (charSequenceLength(this_0) === 0)
      return false;
    get_measureContext().font = fontSpec(this);
    var lines_0 = lines(this);
    // Inline function 'kotlin.collections.maxOf' call
    var iterator = lines_0.i();
    if (!iterator.j())
      throw NoSuchElementException_init_$Create$();
    // Inline function 'stickynode.model.TextItem.hitTest.<anonymous>' call
    var it = iterator.k();
    var maxValue = get_measureContext().measureText(it).width;
    while (iterator.j()) {
      // Inline function 'stickynode.model.TextItem.hitTest.<anonymous>' call
      var it_0 = iterator.k();
      var v = get_measureContext().measureText(it_0).width;
      // Inline function 'kotlin.comparisons.maxOf' call
      var a = maxValue;
      maxValue = Math.max(a, v);
    }
    // Inline function 'kotlin.math.max' call
    var b = maxValue;
    var width = Math.max(1.0, b);
    var height = imul(lines_0.l(), lineHeight(this.l1q_1));
    var tmp;
    var containsLower = this.h1q_1;
    var containsUpper = this.h1q_1 + width;
    var containsArg = p.f1p_1;
    if (containsLower <= containsArg ? containsArg <= containsUpper : false) {
      var containsLower_0 = this.i1q_1;
      var containsUpper_0 = this.i1q_1 + height;
      var containsArg_0 = p.g1p_1;
      tmp = containsLower_0 <= containsArg_0 ? containsArg_0 <= containsUpper_0 : false;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(TextItem).u1p = function (dx, dy) {
    this.h1q_1 = this.h1q_1 + dx;
    this.i1q_1 = this.i1q_1 + dy;
  };
  function Companion_9() {
    Companion_instance_10 = this;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.q1t_1 = [new ArrayListSerializer(IntSerializer_getInstance()), null, null, null];
  }
  var Companion_instance_10;
  function Companion_getInstance_9() {
    if (Companion_instance_10 == null)
      new Companion_9();
    return Companion_instance_10;
  }
  function $serializer_8() {
    $serializer_instance_8 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('regionFill', this, 4);
    tmp0_serialDesc.dt('runs', false);
    tmp0_serialDesc.dt('color', false);
    tmp0_serialDesc.dt('offsetX', true);
    tmp0_serialDesc.dt('offsetY', true);
    this.r1t_1 = tmp0_serialDesc;
  }
  protoOf($serializer_8).s1t = function (encoder, value) {
    var tmp0_desc = this.r1t_1;
    var tmp1_output = encoder.wl(tmp0_desc);
    var tmp2_cached = Companion_getInstance_9().q1t_1;
    tmp1_output.mn(tmp0_desc, 0, tmp2_cached[0], value.t1q_1);
    tmp1_output.kn(tmp0_desc, 1, value.u1q_1);
    if (tmp1_output.sn(tmp0_desc, 2) ? true : !equals(value.v1q_1, 0.0)) {
      tmp1_output.in(tmp0_desc, 2, value.v1q_1);
    }
    if (tmp1_output.sn(tmp0_desc, 3) ? true : !equals(value.w1q_1, 0.0)) {
      tmp1_output.in(tmp0_desc, 3, value.w1q_1);
    }
    tmp1_output.xl(tmp0_desc);
  };
  protoOf($serializer_8).si = function (encoder, value) {
    return this.s1t(encoder, value instanceof RegionFillItem ? value : THROW_CCE());
  };
  protoOf($serializer_8).ti = function (decoder) {
    var tmp0_desc = this.r1t_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = 0.0;
    var tmp7_local3 = 0.0;
    var tmp8_input = decoder.wl(tmp0_desc);
    var tmp9_cached = Companion_getInstance_9().q1t_1;
    if (tmp8_input.mm()) {
      tmp4_local0 = tmp8_input.im(tmp0_desc, 0, tmp9_cached[0], tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp8_input.gm(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp8_input.em(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp8_input.em(tmp0_desc, 3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp8_input.nm(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp8_input.im(tmp0_desc, 0, tmp9_cached[0], tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp8_input.gm(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp8_input.em(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp8_input.em(tmp0_desc, 3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp8_input.xl(tmp0_desc);
    return RegionFillItem_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, null);
  };
  protoOf($serializer_8).ri = function () {
    return this.r1t_1;
  };
  protoOf($serializer_8).ft = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [Companion_getInstance_9().q1t_1[0], StringSerializer_getInstance(), DoubleSerializer_getInstance(), DoubleSerializer_getInstance()];
  };
  var $serializer_instance_8;
  function $serializer_getInstance_8() {
    if ($serializer_instance_8 == null)
      new $serializer_8();
    return $serializer_instance_8;
  }
  function RegionFillItem_init_$Init$(seen0, runs, color, offsetX, offsetY, serializationConstructorMarker, $this) {
    if (!(3 === (3 & seen0))) {
      throwMissingFieldException(seen0, 3, $serializer_getInstance_8().r1t_1);
    }
    Item_init_$Init$(seen0, serializationConstructorMarker, $this);
    $this.t1q_1 = runs;
    $this.u1q_1 = color;
    if (0 === (seen0 & 4))
      $this.v1q_1 = 0.0;
    else
      $this.v1q_1 = offsetX;
    if (0 === (seen0 & 8))
      $this.w1q_1 = 0.0;
    else
      $this.w1q_1 = offsetY;
    return $this;
  }
  function RegionFillItem_init_$Create$(seen0, runs, color, offsetX, offsetY, serializationConstructorMarker) {
    return RegionFillItem_init_$Init$(seen0, runs, color, offsetX, offsetY, serializationConstructorMarker, objectCreate(protoOf(RegionFillItem)));
  }
  function RegionFillItem(runs, color, offsetX, offsetY) {
    Companion_getInstance_9();
    offsetX = offsetX === VOID ? 0.0 : offsetX;
    offsetY = offsetY === VOID ? 0.0 : offsetY;
    Item.call(this);
    this.t1q_1 = runs;
    this.u1q_1 = color;
    this.v1q_1 = offsetX;
    this.w1q_1 = offsetY;
  }
  protoOf(RegionFillItem).u1n = function (ctx) {
    ctx.fillStyle = this.u1q_1;
    var i = 0;
    while (i < this.t1q_1.l()) {
      var y = this.t1q_1.n(i);
      var x0 = this.t1q_1.n(i + 1 | 0);
      var x1 = this.t1q_1.n(i + 2 | 0);
      ctx.fillRect(x0 + this.v1q_1 - 1, y + this.w1q_1 - 1, (x1 - x0 | 0) + 2 | 0, 3.0);
      i = i + 3 | 0;
    }
  };
  protoOf(RegionFillItem).s1o = function (p) {
    // Inline function 'kotlin.math.floor' call
    var x = p.g1p_1 - this.w1q_1;
    var tmp$ret$0 = Math.floor(x);
    var y = numberToInt(tmp$ret$0);
    // Inline function 'kotlin.math.floor' call
    var x_0 = p.f1p_1 - this.v1q_1;
    var tmp$ret$1 = Math.floor(x_0);
    var x_1 = numberToInt(tmp$ret$1);
    var i = 0;
    while (i < this.t1q_1.l()) {
      if (this.t1q_1.n(i) === y && x_1 >= this.t1q_1.n(i + 1 | 0) && x_1 < this.t1q_1.n(i + 2 | 0))
        return true;
      i = i + 3 | 0;
    }
    return false;
  };
  protoOf(RegionFillItem).u1p = function (dx, dy) {
    this.v1q_1 = this.v1q_1 + dx;
    this.w1q_1 = this.w1q_1 + dy;
  };
  function measureContext$delegate$lambda() {
    _init_properties_Items_kt__3bnoaa();
    var tmp = document.createElement('canvas');
    var tmp_0 = (tmp instanceof HTMLCanvasElement ? tmp : THROW_CCE()).getContext('2d');
    return tmp_0 instanceof CanvasRenderingContext2D ? tmp_0 : THROW_CCE();
  }
  function measureContext$factory() {
    return getPropertyCallableRef('measureContext', 0, KProperty0, function () {
      return get_measureContext();
    }, null);
  }
  var properties_initialized_Items_kt_tr5xps;
  function _init_properties_Items_kt__3bnoaa() {
    if (!properties_initialized_Items_kt_tr5xps) {
      properties_initialized_Items_kt_tr5xps = true;
      measureContext$delegate = lazy_0(measureContext$delegate$lambda);
    }
  }
  function saveToFile(content, suggestedName, $completion) {
    suggestedName = suggestedName === VOID ? 'drawing.sticky.json' : suggestedName;
    var tmp = new $saveToFileCOROUTINE$0(content, suggestedName, $completion);
    tmp.e8_1 = Unit_instance;
    tmp.f8_1 = null;
    return tmp.k8();
  }
  function pickFileText($completion) {
    var tmp = new $pickFileTextCOROUTINE$1($completion);
    tmp.e8_1 = Unit_instance;
    tmp.f8_1 = null;
    return tmp.k8();
  }
  function pickFile($completion) {
    // Inline function 'kotlin.coroutines.suspendCoroutine.<anonymous>' call
    var safe = SafeContinuation_init_$Create$(intercepted($completion));
    // Inline function 'stickynode.storage.pickFile.<anonymous>' call
    var tmp = document.createElement('input');
    var input = tmp instanceof HTMLInputElement ? tmp : THROW_CCE();
    input.type = 'file';
    input.accept = '.json,application/json';
    input.addEventListener('change', pickFile$lambda(safe, input));
    input.addEventListener('cancel', pickFile$lambda_0(safe));
    input.click();
    return safe.u8();
  }
  function saveToFile$lambda($url) {
    return function () {
      // Inline function 'kotlin.js.asDynamic' call
      window.URL.revokeObjectURL($url);
      return Unit_instance;
    };
  }
  function pickFile$lambda($continuation, $input) {
    return function (it) {
      var tmp0 = $continuation;
      var tmp0_safe_receiver = $input.files;
      // Inline function 'kotlin.coroutines.resume' call
      // Inline function 'kotlin.Companion.success' call
      var value = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.item(0);
      var tmp$ret$0 = _Result___init__impl__xyqfz8(value);
      tmp0.n8(tmp$ret$0);
      return Unit_instance;
    };
  }
  function pickFile$lambda_0($continuation) {
    return function (it) {
      // Inline function 'kotlin.coroutines.resume' call
      var this_0 = $continuation;
      // Inline function 'kotlin.Companion.success' call
      var tmp$ret$0 = _Result___init__impl__xyqfz8(null);
      this_0.n8(tmp$ret$0);
      return Unit_instance;
    };
  }
  function $saveToFileCOROUTINE$0(content, suggestedName, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.b1u_1 = content;
    this.c1u_1 = suggestedName;
  }
  protoOf($saveToFileCOROUTINE$0).k8 = function () {
    var suspendResult = this.e8_1;
    $sm: do
      try {
        var tmp = this.c8_1;
        switch (tmp) {
          case 0:
            this.d8_1 = 7;
            if (window.showSaveFilePicker != undefined) {
              this.d8_1 = 6;
              this.e1u_1 = {};
              var this_0 = ['.json'];
              this.e1u_1['application/json'] = this_0;
              this.f1u_1 = {};
              this.f1u_1.description = 'Sticky Node drawing';
              this.f1u_1.accept = this.e1u_1;
              this.g1u_1 = {};
              this.g1u_1.suggestedName = this.c1u_1;
              var this_1 = [this.f1u_1];
              this.g1u_1.types = this_1;
              this.c8_1 = 2;
              var this_2 = window.showSaveFilePicker(this.g1u_1);
              suspendResult = await_0(this_2, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.c8_1 = 1;
              continue $sm;
            }

          case 1:
            var tmp_0 = this;
            var this_3 = [this.b1u_1];
            var type = 'application/json';
            var o = {};
            o['type'] = type;
            tmp_0.h1u_1 = new Blob(this_3, o);
            var tmp_1 = this;
            tmp_1.i1u_1 = window.URL.createObjectURL(this.h1u_1);
            var tmp_2 = this;
            var tmp_3 = document.createElement('a');
            tmp_2.j1u_1 = tmp_3 instanceof HTMLAnchorElement ? tmp_3 : THROW_CCE();
            this.j1u_1.href = this.i1u_1;
            this.j1u_1.download = this.c1u_1;
            ensureNotNull(document.body).appendChild(this.j1u_1);
            this.j1u_1.click();
            this.j1u_1.remove();
            var tmp_4 = window;
            tmp_4.setTimeout(saveToFile$lambda(this.i1u_1), 1000);
            return Unit_instance;
          case 2:
            this.k1u_1 = suspendResult;
            this.c8_1 = 3;
            var this_4 = this.k1u_1.createWritable();
            suspendResult = await_0(this_4, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            this.l1u_1 = suspendResult;
            this.c8_1 = 4;
            var this_5 = this.l1u_1.write(this.b1u_1);
            suspendResult = await_0(this_5, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            this.c8_1 = 5;
            var this_6 = this.l1u_1.close();
            suspendResult = await_0(this_6, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 5:
            this.d1u_1 = suspendResult;
            this.d8_1 = 7;
            this.c8_1 = 8;
            continue $sm;
          case 6:
            this.d8_1 = 7;
            var tmp_5 = this.f8_1;
            if (tmp_5 instanceof Error) {
              var error = this.f8_1;
              var tmp_6 = this;
              if (error.name != 'AbortError')
                throw error;
              tmp_6.d1u_1 = Unit_instance;
              this.c8_1 = 8;
              continue $sm;
            } else {
              throw this.f8_1;
            }

          case 7:
            throw this.f8_1;
          case 8:
            this.d8_1 = 7;
            return Unit_instance;
        }
      } catch ($p) {
        var e = $p;
        if (this.d8_1 === 7) {
          throw e;
        } else {
          this.c8_1 = this.d8_1;
          this.f8_1 = e;
        }
      }
     while (true);
  };
  function $pickFileTextCOROUTINE$1(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf($pickFileTextCOROUTINE$1).k8 = function () {
    var suspendResult = this.e8_1;
    $sm: do
      try {
        var tmp = this.c8_1;
        switch (tmp) {
          case 0:
            this.d8_1 = 3;
            this.c8_1 = 1;
            suspendResult = pickFile(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.u1u_1 = suspendResult;
            var tmp_0 = this;
            var tmp_1;
            if (this.u1u_1 == null) {
              return null;
            } else {
              tmp_1 = this.u1u_1;
            }

            tmp_0.v1u_1 = tmp_1;
            this.c8_1 = 2;
            var this_0 = this.v1u_1.text();
            suspendResult = await_0(this_0, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return suspendResult;
          case 3:
            throw this.f8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.d8_1 === 3) {
          throw e;
        } else {
          this.c8_1 = this.d8_1;
          this.f8_1 = e;
        }
      }
     while (true);
  };
  function configureServer() {
    var tmp0_elvis_lhs = localStorage.getItem('stickyNode.serverUrl');
    var currentUrl = tmp0_elvis_lhs == null ? 'https://table.tail964c8c.ts.net' : tmp0_elvis_lhs;
    var tmp1_safe_receiver = window.prompt('Server URL:', currentUrl);
    var tmp;
    if (tmp1_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.text.trim' call
      tmp = toString(trim(isCharSequence(tmp1_safe_receiver) ? tmp1_safe_receiver : THROW_CCE()));
    }
    var tmp2_safe_receiver = tmp;
    var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : trimEnd(tmp2_safe_receiver, charArrayOf([_Char___init__impl__6a9atx(47)]));
    var tmp_0;
    if (tmp3_elvis_lhs == null) {
      return false;
    } else {
      tmp_0 = tmp3_elvis_lhs;
    }
    var url = tmp_0;
    var tmp_1 = window;
    var tmp4_elvis_lhs = localStorage.getItem('stickyNode.serverToken');
    var tmp5_safe_receiver = tmp_1.prompt('Server token:', tmp4_elvis_lhs == null ? '' : tmp4_elvis_lhs);
    var tmp_2;
    if (tmp5_safe_receiver == null) {
      tmp_2 = null;
    } else {
      // Inline function 'kotlin.text.trim' call
      tmp_2 = toString(trim(isCharSequence(tmp5_safe_receiver) ? tmp5_safe_receiver : THROW_CCE()));
    }
    var tmp6_elvis_lhs = tmp_2;
    var tmp_3;
    if (tmp6_elvis_lhs == null) {
      return false;
    } else {
      tmp_3 = tmp6_elvis_lhs;
    }
    var token = tmp_3;
    localStorage.setItem('stickyNode.serverUrl', url);
    localStorage.setItem('stickyNode.serverToken', token);
    return true;
  }
  function ensureConfigured() {
    return !(localStorage.getItem('stickyNode.serverUrl') == null) && !(localStorage.getItem('stickyNode.serverToken') == null) || configureServer();
  }
  function request(path, method, body, $completion) {
    method = method === VOID ? 'GET' : method;
    body = body === VOID ? null : body;
    var tmp = new $requestCOROUTINE$2(path, method, body, $completion);
    tmp.e8_1 = Unit_instance;
    tmp.f8_1 = null;
    return tmp.k8();
  }
  function encode(name) {
    // Inline function 'kotlin.js.unsafeCast' call
    return encodeURIComponent(name);
  }
  function listServerDrawings($completion) {
    var tmp = new $listServerDrawingsCOROUTINE$3($completion);
    tmp.e8_1 = Unit_instance;
    tmp.f8_1 = null;
    return tmp.k8();
  }
  function loadFromServer(name, $completion) {
    return request('/api/drawings/' + encode(name), VOID, VOID, $completion);
  }
  function saveToServer(name, content, $completion) {
    var tmp = new $saveToServerCOROUTINE$4(name, content, $completion);
    tmp.e8_1 = Unit_instance;
    tmp.f8_1 = null;
    return tmp.k8();
  }
  function $requestCOROUTINE$2(path, method, body, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.e1v_1 = path;
    this.f1v_1 = method;
    this.g1v_1 = body;
  }
  protoOf($requestCOROUTINE$2).k8 = function () {
    var suspendResult = this.e8_1;
    $sm: do
      try {
        var tmp = this.c8_1;
        switch (tmp) {
          case 0:
            this.d8_1 = 3;
            if (!ensureConfigured())
              throw IllegalStateException_init_$Create$('Server not configured');
            this.h1v_1 = localStorage.getItem('stickyNode.serverUrl');
            this.i1v_1 = localStorage.getItem('stickyNode.serverToken');
            this.j1v_1 = {};
            this.j1v_1['Authorization'] = 'Bearer ' + this.i1v_1;
            this.k1v_1 = {};
            this.k1v_1.method = this.f1v_1;
            this.k1v_1.headers = this.j1v_1;
            if (!(this.g1v_1 == null)) {
              this.j1v_1['Content-Type'] = 'text/plain';
              this.k1v_1.body = this.g1v_1;
            }

            this.c8_1 = 1;
            var this_0 = window.fetch(plus(this.h1v_1, this.e1v_1), this.k1v_1);
            suspendResult = await_0(this_0, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.l1v_1 = suspendResult;
            if (this.l1v_1.ok != true) {
              if (this.l1v_1.status == 401)
                throw IllegalStateException_init_$Create$('Wrong token (use Server Settings)');
              throw IllegalStateException_init_$Create$('Server error ' + this.l1v_1.status);
            }

            this.c8_1 = 2;
            var this_1 = this.l1v_1.text();
            suspendResult = await_0(this_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return suspendResult;
          case 3:
            throw this.f8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.d8_1 === 3) {
          throw e;
        } else {
          this.c8_1 = this.d8_1;
          this.f8_1 = e;
        }
      }
     while (true);
  };
  function $listServerDrawingsCOROUTINE$3(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf($listServerDrawingsCOROUTINE$3).k8 = function () {
    var suspendResult = this.e8_1;
    $sm: do
      try {
        var tmp = this.c8_1;
        switch (tmp) {
          case 0:
            this.d8_1 = 2;
            var tmp_0 = this;
            tmp_0.u1v_1 = Default_getInstance();
            this.c8_1 = 1;
            suspendResult = request('/api/drawings', VOID, VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var tmp1 = suspendResult;
            var this_0 = this.u1v_1;
            var this_1 = this_0.lm();
            var this_2 = serializer(this_1, createKType(getKClass(KtList), arrayOf([createInvariantKTypeProjection(createKType(PrimitiveClasses_getInstance().wa(), arrayOf([]), false))]), false));
            return this_0.e12(isInterface(this_2, KSerializer) ? this_2 : THROW_CCE(), tmp1);
          case 2:
            throw this.f8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.d8_1 === 2) {
          throw e;
        } else {
          this.c8_1 = this.d8_1;
          this.f8_1 = e;
        }
      }
     while (true);
  };
  function $saveToServerCOROUTINE$4(name, content, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.d1w_1 = name;
    this.e1w_1 = content;
  }
  protoOf($saveToServerCOROUTINE$4).k8 = function () {
    var suspendResult = this.e8_1;
    $sm: do
      try {
        var tmp = this.c8_1;
        switch (tmp) {
          case 0:
            this.d8_1 = 2;
            this.c8_1 = 1;
            suspendResult = request('/api/drawings/' + encode(this.d1w_1), 'PUT', this.e1w_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_instance;
          case 2:
            throw this.f8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.d8_1 === 2) {
          throw e;
        } else {
          this.c8_1 = this.d8_1;
          this.f8_1 = e;
        }
      }
     while (true);
  };
  function migrateLegacy($this) {
    var tmp0 = $this.d1o_1;
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlin.collections.all' call
      var tmp;
      if (isInterface(tmp0, Collection)) {
        tmp = tmp0.m();
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$0 = true;
        break $l$block_0;
      }
      var _iterator__ex2g4s = tmp0.i();
      while (_iterator__ex2g4s.j()) {
        var element = _iterator__ex2g4s.k();
        // Inline function 'stickynode.storage.Storage.migrateLegacy.<anonymous>' call
        if (!(localStorage.getItem(element) == null)) {
          tmp$ret$0 = false;
          break $l$block_0;
        }
      }
      tmp$ret$0 = true;
    }
    if (tmp$ret$0)
      return emptyList();
    var v1 = '{"app":"sticky-node","version":1,' + ('"strokeItems":' + migrateLegacy$list('drawingCanvasStrokes') + ',"rectangleItems":' + migrateLegacy$list('drawingCanvasRectangles') + ',') + ('"circleItems":' + migrateLegacy$list('drawingCanvasCircles') + ',"polygonItems":' + migrateLegacy$list('drawingCanvasPolygons') + ',') + ('"arrowItems":' + migrateLegacy$list('drawingCanvasArrows') + ',"textItems":' + migrateLegacy$list('drawingCanvasText') + '}');
    var items = decodeDrawing(v1);
    $this.e1o(encodeDrawing(items));
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s_0 = $this.d1o_1.i();
    while (_iterator__ex2g4s_0.j()) {
      var element_0 = _iterator__ex2g4s_0.k();
      // Inline function 'stickynode.storage.Storage.migrateLegacy.<anonymous>' call
      localStorage.removeItem(element_0);
    }
    return items;
  }
  function migrateLegacy$list(key) {
    var tmp0_elvis_lhs = localStorage.getItem(key);
    return tmp0_elvis_lhs == null ? '[]' : tmp0_elvis_lhs;
  }
  function Storage() {
    Storage_instance = this;
    this.v1n_1 = 'stickyNode.drawing';
    this.w1n_1 = 'drawingCanvas';
    this.x1n_1 = 'drawingCanvasStrokes';
    this.y1n_1 = 'drawingCanvasRectangles';
    this.z1n_1 = 'drawingCanvasCircles';
    this.a1o_1 = 'drawingCanvasPolygons';
    this.b1o_1 = 'drawingCanvasArrows';
    this.c1o_1 = 'drawingCanvasText';
    this.d1o_1 = listOf(['drawingCanvas', 'drawingCanvasStrokes', 'drawingCanvasRectangles', 'drawingCanvasCircles', 'drawingCanvasPolygons', 'drawingCanvasArrows', 'drawingCanvasText']);
  }
  protoOf(Storage).o1o = function () {
    var tmp;
    try {
      var saved = localStorage.getItem('stickyNode.drawing');
      tmp = !(saved == null) ? decodeDrawing(saved) : migrateLegacy(this);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var error = $p;
        console.warn("Couldn't restore the saved drawing", error);
        tmp_0 = emptyList();
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(Storage).e1o = function (snapshot) {
    try {
      localStorage.setItem('stickyNode.drawing', snapshot);
    } catch ($p) {
      if ($p instanceof Error) {
        var error = $p;
        console.warn("Couldn't autosave (storage full or unavailable)", error);
      } else {
        throw $p;
      }
    }
  };
  var Storage_instance;
  function Storage_getInstance() {
    if (Storage_instance == null)
      new Storage();
    return Storage_instance;
  }
  function setupCanvasEvents(editor) {
    var canvas = editor.g1n_1;
    canvas.addEventListener('contextmenu', setupCanvasEvents$lambda(editor));
    canvas.addEventListener('mousedown', setupCanvasEvents$lambda_0(editor, canvas));
    var tmp = window;
    tmp.addEventListener('mousemove', setupCanvasEvents$lambda_1(editor, canvas));
    var tmp_0 = window;
    tmp_0.addEventListener('mouseup', setupCanvasEvents$lambda_2(editor));
  }
  function setupCanvasEvents$position(canvas, event) {
    var rect = canvas.getBoundingClientRect();
    return new Point(event.clientX - rect.left, event.clientY - rect.top);
  }
  function setupCanvasEvents$lambda($editor) {
    return function (event) {
      var tmp;
      if ($editor.p1n_1.l1p()) {
        event.preventDefault();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function setupCanvasEvents$lambda_0($editor, $canvas) {
    return function (e) {
      var event = e instanceof MouseEvent ? e : THROW_CCE();
      var button = event.button;
      var tool = $editor.p1n_1;
      var allowed = button === 0 || (button === 2 && tool.l1p());
      var tmp;
      if (!allowed) {
        return Unit_instance;
      }
      var tmp_0;
      if (tool.l1p()) {
        event.preventDefault();
        tmp_0 = Unit_instance;
      }
      var tmp_1;
      if (tool.a1p()) {
        tool.o1p($editor);
        tmp_1 = Unit_instance;
      }
      tool.m1p($editor, setupCanvasEvents$position($canvas, event), button);
      return Unit_instance;
    };
  }
  function setupCanvasEvents$lambda_1($editor, $canvas) {
    return function (e) {
      var event = e instanceof MouseEvent ? e : THROW_CCE();
      var tool = $editor.p1n_1;
      var tmp;
      if (!tool.a1p()) {
        return Unit_instance;
      }
      var tmp_0;
      if (event.buttons === 0) {
        tool.o1p($editor);
        tmp_0 = Unit_instance;
      } else {
        tool.n1p($editor, setupCanvasEvents$position($canvas, event));
        tmp_0 = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function setupCanvasEvents$lambda_2($editor) {
    return function (it) {
      $editor.p1n_1.o1p($editor);
      return Unit_instance;
    };
  }
  function get_scope() {
    _init_properties_Controls_kt__wbvoru();
    return scope;
  }
  var scope;
  function get_TEXT_INPUT_TYPES() {
    _init_properties_Controls_kt__wbvoru();
    return TEXT_INPUT_TYPES;
  }
  var TEXT_INPUT_TYPES;
  function onClick(id, action) {
    _init_properties_Controls_kt__wbvoru();
    var tmp0_safe_receiver = document.getElementById(id);
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.addEventListener('click', onClick$lambda(action));
    }
  }
  function bindRange(inputId, labelId, onChange) {
    _init_properties_Controls_kt__wbvoru();
    // Inline function 'stickynode.ui.byId' call
    var tmp = document.getElementById(inputId);
    var tmp0_elvis_lhs = tmp instanceof HTMLInputElement ? tmp : null;
    var tmp_0;
    if (tmp0_elvis_lhs == null) {
      return Unit_instance;
    } else {
      tmp_0 = tmp0_elvis_lhs;
    }
    var input = tmp_0;
    var label = document.getElementById(labelId);
    input.addEventListener('input', bindRange$lambda(input, onChange, label));
  }
  function isTyping(target) {
    _init_properties_Controls_kt__wbvoru();
    var tmp0_elvis_lhs = target instanceof Element ? target : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var element = tmp;
    var tmp_0;
    if (element.tagName === 'TEXTAREA') {
      tmp_0 = true;
    } else {
      var tmp_1;
      if (element instanceof HTMLInputElement) {
        tmp_1 = get_TEXT_INPUT_TYPES().n1(element.type);
      } else {
        tmp_1 = false;
      }
      tmp_0 = tmp_1;
    }
    return tmp_0;
  }
  function setupControls(editor) {
    _init_properties_Controls_kt__wbvoru();
    var tools = editor.o1n_1;
    onClick('drawButton', setupControls$lambda(editor, tools));
    onClick('rectangleButton', setupControls$lambda_0(editor, tools));
    onClick('circleButton', setupControls$lambda_1(editor, tools));
    onClick('arrowButton', setupControls$lambda_2(editor, tools));
    onClick('textButton', setupControls$lambda_3(editor, tools));
    onClick('fillButton', setupControls$lambda_4(editor, tools));
    onClick('eraserButton', setupControls$lambda_5(editor, tools));
    onClick('polygonButton', setupControls$lambda_6(editor, tools));
    // Inline function 'stickynode.ui.byId' call
    var id = 'eraserButton';
    var tmp = document.getElementById(id);
    var eraserButton = tmp instanceof HTMLButtonElement ? tmp : null;
    var tmp_0 = editor;
    tmp_0.q1n_1 = setupControls$lambda_7(eraserButton, tools);
    // Inline function 'stickynode.ui.byId' call
    var id_0 = 'colorPicker';
    var tmp_1 = document.getElementById(id_0);
    var tmp0_safe_receiver = tmp_1 instanceof HTMLInputElement ? tmp_1 : null;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'stickynode.ui.setupControls.<anonymous>' call
      tmp0_safe_receiver.addEventListener('input', setupControls$lambda_8(editor, tmp0_safe_receiver));
    }
    bindRange('lineWidthInput', 'lineWidthValue', setupControls$lambda_9(editor));
    bindRange('fontSizeInput', 'fontSizeValue', setupControls$lambda_10(editor));
    onClick('undoButton', setupControls$lambda_11(editor));
    onClick('redoButton', setupControls$lambda_12(editor));
    onClick('clearButton', setupControls$lambda_13(editor));
    onClick('saveFileButton', setupControls$lambda_14(editor));
    onClick('openFileButton', setupControls$lambda_15(editor));
    onClick('serverSettingsButton', setupControls$lambda_16);
    onClick('serverSaveButton', setupControls$lambda_17(editor));
    onClick('serverOpenButton', setupControls$lambda_18(editor));
    var tmp_2 = document;
    tmp_2.addEventListener('keydown', setupControls$lambda_19(editor));
  }
  function onClick$lambda($action) {
    return function (it) {
      $action();
      return Unit_instance;
    };
  }
  function bindRange$lambda($input, $onChange, $label) {
    return function (it) {
      var tmp0_safe_receiver = toIntOrNull($input.value);
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        $onChange(tmp0_safe_receiver);
      }
      var tmp1_safe_receiver = $label;
      if (tmp1_safe_receiver == null)
        null;
      else {
        tmp1_safe_receiver.textContent = $input.value;
      }
      return Unit_instance;
    };
  }
  function setupControls$lambda($editor, $tools) {
    return function () {
      $editor.p1o($tools.g1o_1);
      return Unit_instance;
    };
  }
  function setupControls$lambda_0($editor, $tools) {
    return function () {
      $editor.p1o($tools.k1o_1);
      return Unit_instance;
    };
  }
  function setupControls$lambda_1($editor, $tools) {
    return function () {
      $editor.p1o($tools.l1o_1);
      return Unit_instance;
    };
  }
  function setupControls$lambda_2($editor, $tools) {
    return function () {
      $editor.p1o($tools.n1o_1);
      return Unit_instance;
    };
  }
  function setupControls$lambda_3($editor, $tools) {
    return function () {
      $editor.p1o($tools.i1o_1);
      return Unit_instance;
    };
  }
  function setupControls$lambda_4($editor, $tools) {
    return function () {
      $editor.p1o($tools.j1o_1);
      return Unit_instance;
    };
  }
  function setupControls$lambda_5($editor, $tools) {
    return function () {
      $editor.p1o($editor.p1n_1 === $tools.h1o_1 ? $tools.g1o_1 : $tools.h1o_1);
      return Unit_instance;
    };
  }
  function setupControls$lambda_6($editor, $tools) {
    return function () {
      // Inline function 'stickynode.ui.byId' call
      var id = 'polygonSidesInput';
      var tmp = document.getElementById(id);
      var tmp0_safe_receiver = tmp instanceof HTMLInputElement ? tmp : null;
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.value;
      var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : toDoubleOrNull(tmp1_safe_receiver);
      var sides = tmp2_safe_receiver == null ? null : numberToInt(tmp2_safe_receiver);
      var tmp_0;
      if (!(sides == null) && sides >= 3) {
        $editor.n1n_1 = sides;
        $editor.p1o($tools.m1o_1);
        tmp_0 = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function setupControls$lambda_7($eraserButton, $tools) {
    return function (tool) {
      var tmp0_safe_receiver = $eraserButton;
      if (tmp0_safe_receiver == null)
        null;
      else {
        tmp0_safe_receiver.textContent = tool === $tools.h1o_1 ? 'Eraser: On' : 'Eraser: Off';
      }
      return Unit_instance;
    };
  }
  function setupControls$lambda_8($editor, $picker) {
    return function (it) {
      $editor.k1n_1 = $picker.value;
      return Unit_instance;
    };
  }
  function setupControls$lambda_9($editor) {
    return function (it) {
      $editor.l1n_1 = it;
      return Unit_instance;
    };
  }
  function setupControls$lambda_10($editor) {
    return function (it) {
      $editor.m1n_1 = it;
      return Unit_instance;
    };
  }
  function setupControls$lambda_11($editor) {
    return function () {
      $editor.y1o();
      return Unit_instance;
    };
  }
  function setupControls$lambda_12($editor) {
    return function () {
      $editor.b1p();
      return Unit_instance;
    };
  }
  function setupControls$lambda_13($editor) {
    return function () {
      $editor.z1();
      return Unit_instance;
    };
  }
  function setupControls$lambda$slambda($editor, resultContinuation) {
    this.n1w_1 = $editor;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(setupControls$lambda$slambda).p1w = function ($this$launch, $completion) {
    var tmp = this.q1w($this$launch, $completion);
    tmp.e8_1 = Unit_instance;
    tmp.f8_1 = null;
    return tmp.k8();
  };
  protoOf(setupControls$lambda$slambda).y8 = function (p1, $completion) {
    return this.p1w((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(setupControls$lambda$slambda).k8 = function () {
    var suspendResult = this.e8_1;
    $sm: do
      try {
        var tmp = this.c8_1;
        switch (tmp) {
          case 0:
            this.d8_1 = 3;
            this.d8_1 = 2;
            this.c8_1 = 1;
            suspendResult = saveToFile(this.n1w_1.e1p(), VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.d8_1 = 3;
            this.c8_1 = 4;
            continue $sm;
          case 2:
            this.d8_1 = 3;
            var tmp_0 = this.f8_1;
            if (tmp_0 instanceof Error) {
              var error = this.f8_1;
              window.alert("Couldn't save the file: " + error.message);
              this.c8_1 = 4;
              continue $sm;
            } else {
              throw this.f8_1;
            }

          case 3:
            throw this.f8_1;
          case 4:
            this.d8_1 = 3;
            return Unit_instance;
        }
      } catch ($p) {
        var e = $p;
        if (this.d8_1 === 3) {
          throw e;
        } else {
          this.c8_1 = this.d8_1;
          this.f8_1 = e;
        }
      }
     while (true);
  };
  protoOf(setupControls$lambda$slambda).q1w = function ($this$launch, completion) {
    var i = new setupControls$lambda$slambda(this.n1w_1, completion);
    i.o1w_1 = $this$launch;
    return i;
  };
  function setupControls$lambda$slambda_0($editor, resultContinuation) {
    var i = new setupControls$lambda$slambda($editor, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.p1w($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function setupControls$lambda_14($editor) {
    return function () {
      var tmp = get_scope();
      launch(tmp, VOID, VOID, setupControls$lambda$slambda_0($editor, null));
      return Unit_instance;
    };
  }
  function setupControls$lambda$slambda_1($editor, resultContinuation) {
    this.z1w_1 = $editor;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(setupControls$lambda$slambda_1).p1w = function ($this$launch, $completion) {
    var tmp = this.q1w($this$launch, $completion);
    tmp.e8_1 = Unit_instance;
    tmp.f8_1 = null;
    return tmp.k8();
  };
  protoOf(setupControls$lambda$slambda_1).y8 = function (p1, $completion) {
    return this.p1w((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(setupControls$lambda$slambda_1).k8 = function () {
    var suspendResult = this.e8_1;
    $sm: do
      try {
        var tmp = this.c8_1;
        switch (tmp) {
          case 0:
            this.d8_1 = 3;
            this.d8_1 = 2;
            this.c8_1 = 1;
            suspendResult = pickFileText(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var tmp0_elvis_lhs = suspendResult;
            var tmp_0;
            if (tmp0_elvis_lhs == null) {
              return Unit_instance;
            } else {
              tmp_0 = tmp0_elvis_lhs;
            }

            var text = tmp_0;
            this.z1w_1.d1p(decodeDrawing(text));
            this.d8_1 = 3;
            this.c8_1 = 4;
            continue $sm;
          case 2:
            this.d8_1 = 3;
            var tmp_1 = this.f8_1;
            if (tmp_1 instanceof Error) {
              var error = this.f8_1;
              window.alert("Couldn't open that file: " + error.message);
              this.c8_1 = 4;
              continue $sm;
            } else {
              throw this.f8_1;
            }

          case 3:
            throw this.f8_1;
          case 4:
            this.d8_1 = 3;
            return Unit_instance;
        }
      } catch ($p) {
        var e = $p;
        if (this.d8_1 === 3) {
          throw e;
        } else {
          this.c8_1 = this.d8_1;
          this.f8_1 = e;
        }
      }
     while (true);
  };
  protoOf(setupControls$lambda$slambda_1).q1w = function ($this$launch, completion) {
    var i = new setupControls$lambda$slambda_1(this.z1w_1, completion);
    i.a1x_1 = $this$launch;
    return i;
  };
  function setupControls$lambda$slambda_2($editor, resultContinuation) {
    var i = new setupControls$lambda$slambda_1($editor, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.p1w($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function setupControls$lambda_15($editor) {
    return function () {
      var tmp = get_scope();
      launch(tmp, VOID, VOID, setupControls$lambda$slambda_2($editor, null));
      return Unit_instance;
    };
  }
  function setupControls$lambda_16() {
    _init_properties_Controls_kt__wbvoru();
    configureServer();
    return Unit_instance;
  }
  function setupControls$lambda$slambda_3($name, $editor, resultContinuation) {
    this.j1x_1 = $name;
    this.k1x_1 = $editor;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(setupControls$lambda$slambda_3).p1w = function ($this$launch, $completion) {
    var tmp = this.q1w($this$launch, $completion);
    tmp.e8_1 = Unit_instance;
    tmp.f8_1 = null;
    return tmp.k8();
  };
  protoOf(setupControls$lambda$slambda_3).y8 = function (p1, $completion) {
    return this.p1w((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(setupControls$lambda$slambda_3).k8 = function () {
    var suspendResult = this.e8_1;
    $sm: do
      try {
        var tmp = this.c8_1;
        switch (tmp) {
          case 0:
            this.d8_1 = 3;
            this.d8_1 = 2;
            this.c8_1 = 1;
            suspendResult = saveToServer(this.j1x_1, this.k1x_1.e1p(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            window.alert('Saved "' + this.j1x_1 + '" to the server.');
            this.d8_1 = 3;
            this.c8_1 = 4;
            continue $sm;
          case 2:
            this.d8_1 = 3;
            var tmp_0 = this.f8_1;
            if (tmp_0 instanceof Error) {
              var error = this.f8_1;
              window.alert("Couldn't save to the server: " + error.message);
              this.c8_1 = 4;
              continue $sm;
            } else {
              throw this.f8_1;
            }

          case 3:
            throw this.f8_1;
          case 4:
            this.d8_1 = 3;
            return Unit_instance;
        }
      } catch ($p) {
        var e = $p;
        if (this.d8_1 === 3) {
          throw e;
        } else {
          this.c8_1 = this.d8_1;
          this.f8_1 = e;
        }
      }
     while (true);
  };
  protoOf(setupControls$lambda$slambda_3).q1w = function ($this$launch, completion) {
    var i = new setupControls$lambda$slambda_3(this.j1x_1, this.k1x_1, completion);
    i.l1x_1 = $this$launch;
    return i;
  };
  function setupControls$lambda$slambda_4($name, $editor, resultContinuation) {
    var i = new setupControls$lambda$slambda_3($name, $editor, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.p1w($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function setupControls$lambda_17($editor) {
    return function () {
      var tmp0_safe_receiver = window.prompt('Save as (letters, numbers, - and _ only):', 'drawing');
      var tmp;
      if (tmp0_safe_receiver == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.text.trim' call
        tmp = toString(trim(isCharSequence(tmp0_safe_receiver) ? tmp0_safe_receiver : THROW_CCE()));
      }
      var name = tmp;
      var tmp_0;
      // Inline function 'kotlin.text.isNullOrEmpty' call
      if (name == null || charSequenceLength(name) === 0) {
        return Unit_instance;
      }
      var tmp_1 = get_scope();
      launch(tmp_1, VOID, VOID, setupControls$lambda$slambda_4(name, $editor, null));
      return Unit_instance;
    };
  }
  function setupControls$lambda$slambda_5($editor, resultContinuation) {
    this.u1x_1 = $editor;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(setupControls$lambda$slambda_5).p1w = function ($this$launch, $completion) {
    var tmp = this.q1w($this$launch, $completion);
    tmp.e8_1 = Unit_instance;
    tmp.f8_1 = null;
    return tmp.k8();
  };
  protoOf(setupControls$lambda$slambda_5).y8 = function (p1, $completion) {
    return this.p1w((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(setupControls$lambda$slambda_5).k8 = function () {
    var suspendResult = this.e8_1;
    $sm: do
      try {
        var tmp = this.c8_1;
        switch (tmp) {
          case 0:
            this.d8_1 = 4;
            this.d8_1 = 3;
            this.c8_1 = 1;
            suspendResult = listServerDrawings(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.w1x_1 = suspendResult;
            if (this.w1x_1.m()) {
              window.alert('No saved drawings on the server yet.');
              return Unit_instance;
            }

            var tmp_0 = this;
            var tmp0_safe_receiver = window.prompt('Open which drawing?\n\n' + joinToString(this.w1x_1, '\n'), first(this.w1x_1));
            var tmp_1;
            if (tmp0_safe_receiver == null) {
              tmp_1 = null;
            } else {
              tmp_1 = toString(trim(isCharSequence(tmp0_safe_receiver) ? tmp0_safe_receiver : THROW_CCE()));
            }

            tmp_0.x1x_1 = tmp_1;
            var this_0 = this.x1x_1;
            if (this_0 == null || charSequenceLength(this_0) === 0)
              return Unit_instance;
            this.c8_1 = 2;
            suspendResult = loadFromServer(this.x1x_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var ARGUMENT = suspendResult;
            var ARGUMENT_0 = decodeDrawing(ARGUMENT);
            this.u1x_1.d1p(ARGUMENT_0);
            this.d8_1 = 4;
            this.c8_1 = 5;
            continue $sm;
          case 3:
            this.d8_1 = 4;
            var tmp_2 = this.f8_1;
            if (tmp_2 instanceof Error) {
              var error = this.f8_1;
              window.alert("Couldn't open that drawing: " + error.message);
              this.c8_1 = 5;
              continue $sm;
            } else {
              throw this.f8_1;
            }

          case 4:
            throw this.f8_1;
          case 5:
            this.d8_1 = 4;
            return Unit_instance;
        }
      } catch ($p) {
        var e = $p;
        if (this.d8_1 === 4) {
          throw e;
        } else {
          this.c8_1 = this.d8_1;
          this.f8_1 = e;
        }
      }
     while (true);
  };
  protoOf(setupControls$lambda$slambda_5).q1w = function ($this$launch, completion) {
    var i = new setupControls$lambda$slambda_5(this.u1x_1, completion);
    i.v1x_1 = $this$launch;
    return i;
  };
  function setupControls$lambda$slambda_6($editor, resultContinuation) {
    var i = new setupControls$lambda$slambda_5($editor, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.p1w($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function setupControls$lambda_18($editor) {
    return function () {
      var tmp = get_scope();
      launch(tmp, VOID, VOID, setupControls$lambda$slambda_6($editor, null));
      return Unit_instance;
    };
  }
  function setupControls$lambda_19($editor) {
    return function (e) {
      var event = e instanceof KeyboardEvent ? e : THROW_CCE();
      var tmp;
      if (!(event.ctrlKey || event.metaKey) || isTyping(event.target)) {
        return Unit_instance;
      }
      // Inline function 'kotlin.text.lowercase' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_0;
      switch (event.key.toLowerCase()) {
        case 'z':
          event.preventDefault();
          var tmp_1;
          if (event.shiftKey) {
            $editor.b1p();
            tmp_1 = Unit_instance;
          } else {
            $editor.y1o();
            tmp_1 = Unit_instance;
          }

          tmp_0 = tmp_1;
          break;
        case 'y':
          event.preventDefault();
          $editor.b1p();
          tmp_0 = Unit_instance;
          break;
        default:
          tmp_0 = Unit_instance;
          break;
      }
      return Unit_instance;
    };
  }
  var properties_initialized_Controls_kt_mopnlk;
  function _init_properties_Controls_kt__wbvoru() {
    if (!properties_initialized_Controls_kt_mopnlk) {
      properties_initialized_Controls_kt_mopnlk = true;
      scope = MainScope();
      TEXT_INPUT_TYPES = setOf(['text', 'number']);
    }
  }
  //region block: post-declaration
  protoOf(FreehandTool).l1p = get_claimsMouse;
  protoOf(ShapeTool).l1p = get_claimsMouse;
  protoOf(FillTool).a1p = get_busy;
  protoOf(EraserTool).l1p = get_claimsMouse;
  protoOf($serializer).gt = typeParametersSerializers;
  protoOf($serializer_0).gt = typeParametersSerializers;
  protoOf($serializer_1).gt = typeParametersSerializers;
  protoOf($serializer_2).gt = typeParametersSerializers;
  protoOf($serializer_3).gt = typeParametersSerializers;
  protoOf($serializer_4).gt = typeParametersSerializers;
  protoOf($serializer_5).gt = typeParametersSerializers;
  protoOf($serializer_6).gt = typeParametersSerializers;
  protoOf($serializer_7).gt = typeParametersSerializers;
  protoOf($serializer_8).gt = typeParametersSerializers;
  //endregion
  //region block: init
  TextBox_instance = new TextBox();
  Companion_instance_2 = new Companion_1();
  Companion_instance_5 = new Companion_4();
  Companion_instance_6 = new Companion_5();
  Companion_instance_7 = new Companion_6();
  Companion_instance_8 = new Companion_7();
  Companion_instance_9 = new Companion_8();
  //endregion
  mainWrapper();
  return _;
}));

//# sourceMappingURL=sticky-node.js.map
