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
  var THROW_CCE = kotlin_kotlin.$_$.ua;
  var Unit_instance = kotlin_kotlin.$_$.c4;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.j;
  var VOID = kotlin_kotlin.$_$.f;
  var protoOf = kotlin_kotlin.$_$.p8;
  var emptyList = kotlin_kotlin.$_$.f5;
  var initMetadataForClass = kotlin_kotlin.$_$.q7;
  var ArrayDeque_init_$Create$ = kotlin_kotlin.$_$.h;
  var get_lastIndex = kotlin_kotlin.$_$.o5;
  var numberToInt = kotlin_kotlin.$_$.m8;
  var booleanArray = kotlin_kotlin.$_$.c7;
  var isCharSequence = kotlin_kotlin.$_$.a8;
  var trim = kotlin_kotlin.$_$.ga;
  var toString = kotlin_kotlin.$_$.t8;
  var ensureNotNull = kotlin_kotlin.$_$.kb;
  var initMetadataForObject = kotlin_kotlin.$_$.v7;
  var initMetadataForInterface = kotlin_kotlin.$_$.t7;
  var mutableListOf = kotlin_kotlin.$_$.u5;
  var last = kotlin_kotlin.$_$.q5;
  var charSequenceLength = kotlin_kotlin.$_$.h7;
  var isInterface = kotlin_kotlin.$_$.e8;
  var ArrayListSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.n1;
  var initMetadataForCompanion = kotlin_kotlin.$_$.r7;
  var PluginGeneratedSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.t1;
  var equals = kotlin_kotlin.$_$.j7;
  var UnknownFieldException_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.c;
  var StringSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.n;
  var IntSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.m;
  var typeParametersSerializers = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.p1;
  var GeneratedSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.q1;
  var throwMissingFieldException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.w1;
  var objectCreate = kotlin_kotlin.$_$.o8;
  var hashCode = kotlin_kotlin.$_$.p7;
  var getStringHashCode = kotlin_kotlin.$_$.o7;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.e1;
  var isBlank = kotlin_kotlin.$_$.k9;
  var Json = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.b;
  var DoubleSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.l;
  var getNumberHashCode = kotlin_kotlin.$_$.m7;
  var coerceIn = kotlin_kotlin.$_$.y8;
  var roundToInt = kotlin_kotlin.$_$.u8;
  var getKClass = kotlin_kotlin.$_$.e;
  var SealedClassSerializer_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.a;
  var LazyThreadSafetyMode_PUBLICATION_getInstance = kotlin_kotlin.$_$.g;
  var lazy = kotlin_kotlin.$_$.ob;
  var SerializerFactory = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.u1;
  var get_nullable = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.q;
  var coerceAtLeast = kotlin_kotlin.$_$.w8;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.i;
  var split = kotlin_kotlin.$_$.o9;
  var checkIndexOverflow = kotlin_kotlin.$_$.r4;
  var NoSuchElementException_init_$Create$ = kotlin_kotlin.$_$.j1;
  var KProperty0 = kotlin_kotlin.$_$.d9;
  var getPropertyCallableRef = kotlin_kotlin.$_$.n7;
  var lazy_0 = kotlin_kotlin.$_$.pb;
  var intercepted = kotlin_kotlin.$_$.k6;
  var SafeContinuation_init_$Create$ = kotlin_kotlin.$_$.y;
  var Companion_instance = kotlin_kotlin.$_$.x3;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.u1;
  var CoroutineImpl = kotlin_kotlin.$_$.x6;
  var await_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.a;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.i6;
  var initMetadataForCoroutine = kotlin_kotlin.$_$.s7;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.b;
  var initMetadataForLambda = kotlin_kotlin.$_$.u7;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.g1;
  var createFailure = kotlin_kotlin.$_$.jb;
  var HashMap_init_$Create$ = kotlin_kotlin.$_$.m;
  var HashSet_init_$Create$ = kotlin_kotlin.$_$.p;
  var MainScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.c;
  var launch = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.d;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.q1;
  var charArrayOf = kotlin_kotlin.$_$.e7;
  var trimEnd = kotlin_kotlin.$_$.ea;
  var plus = kotlin_kotlin.$_$.rb;
  var Default_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.a;
  var KtList = kotlin_kotlin.$_$.j4;
  var PrimitiveClasses_getInstance = kotlin_kotlin.$_$.s3;
  var arrayOf = kotlin_kotlin.$_$.hb;
  var createKType = kotlin_kotlin.$_$.b;
  var createInvariantKTypeProjection = kotlin_kotlin.$_$.a;
  var serializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.i2;
  var KSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.b2;
  var Collection = kotlin_kotlin.$_$.e4;
  var listOf = kotlin_kotlin.$_$.r5;
  var to = kotlin_kotlin.$_$.ub;
  var mapOf = kotlin_kotlin.$_$.t5;
  var toIntOrNull = kotlin_kotlin.$_$.v9;
  var toDoubleOrNull = kotlin_kotlin.$_$.t9;
  var setOf = kotlin_kotlin.$_$.y5;
  var numberToDouble = kotlin_kotlin.$_$.l8;
  var Default_getInstance_0 = kotlin_kotlin.$_$.r3;
  var toString_0 = kotlin_kotlin.$_$.y9;
  var joinToString = kotlin_kotlin.$_$.m5;
  var first = kotlin_kotlin.$_$.i5;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(Editor, 'Editor');
  initMetadataForClass(History, 'History');
  initMetadataForObject(TextBox, 'TextBox');
  initMetadataForClass(ToolSet, 'ToolSet', ToolSet);
  function get_claimsMouse() {
    return false;
  }
  function get_busy() {
    return false;
  }
  function cancel(ed) {
    return Unit_instance;
  }
  initMetadataForInterface(Tool, 'Tool');
  initMetadataForClass(Dragger, 'Dragger', Dragger);
  initMetadataForClass(FreehandTool, 'FreehandTool', FreehandTool, VOID, [Tool]);
  initMetadataForClass(ShapeTool, 'ShapeTool', VOID, VOID, [Tool]);
  initMetadataForClass(TextTool, 'TextTool', TextTool, VOID, [Tool]);
  initMetadataForClass(FillTool, 'FillTool', FillTool, VOID, [Tool]);
  initMetadataForClass(EraserTool, 'EraserTool', EraserTool, VOID, [Tool]);
  initMetadataForCompanion(Companion);
  initMetadataForObject($serializer, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(DrawingFile, 'DrawingFile', DrawingFile, VOID, VOID, VOID, VOID, {0: $serializer_getInstance});
  initMetadataForClass(DecodedDrawing, 'DecodedDrawing');
  initMetadataForCompanion(Companion_0);
  initMetadataForObject($serializer_0, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(LegacyDrawing, 'LegacyDrawing', LegacyDrawing, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_0});
  initMetadataForCompanion(Companion_1);
  initMetadataForObject($serializer_1, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(Point, 'Point', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_1});
  initMetadataForClass(BoundingBox, 'BoundingBox');
  initMetadataForCompanion(Companion_2);
  initMetadataForObject($serializer_2, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(Item, 'Item', VOID, VOID, VOID, VOID, VOID, {0: Companion_getInstance_3});
  initMetadataForClass(ImageItem, 'ImageItem', VOID, Item, VOID, VOID, VOID, {0: $serializer_getInstance_2});
  initMetadataForInterface(Fillable, 'Fillable');
  initMetadataForCompanion(Companion_3, VOID, [SerializerFactory]);
  initMetadataForCompanion(Companion_4);
  initMetadataForObject($serializer_3, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(StrokeItem, 'StrokeItem', VOID, Item, [Item, Fillable], VOID, VOID, {0: $serializer_getInstance_3});
  initMetadataForCompanion(Companion_5);
  initMetadataForObject($serializer_4, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(RectangleItem, 'RectangleItem', VOID, Item, [Item, Fillable], VOID, VOID, {0: $serializer_getInstance_4});
  initMetadataForCompanion(Companion_6);
  initMetadataForObject($serializer_5, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(CircleItem, 'CircleItem', VOID, Item, [Item, Fillable], VOID, VOID, {0: $serializer_getInstance_5});
  initMetadataForCompanion(Companion_7);
  initMetadataForObject($serializer_6, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(PolygonItem, 'PolygonItem', VOID, Item, [Item, Fillable], VOID, VOID, {0: $serializer_getInstance_6});
  initMetadataForCompanion(Companion_8);
  initMetadataForObject($serializer_7, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(ArrowItem, 'ArrowItem', VOID, Item, VOID, VOID, VOID, {0: $serializer_getInstance_7});
  initMetadataForCompanion(Companion_9);
  initMetadataForObject($serializer_8, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(TextItem, 'TextItem', VOID, Item, VOID, VOID, VOID, {0: $serializer_getInstance_8});
  initMetadataForCompanion(Companion_10);
  initMetadataForObject($serializer_9, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(RegionFillItem, 'RegionFillItem', VOID, Item, VOID, VOID, VOID, {0: $serializer_getInstance_9});
  initMetadataForCoroutine($saveToFileCOROUTINE$0, CoroutineImpl);
  initMetadataForCoroutine($pickFileTextCOROUTINE$1, CoroutineImpl);
  initMetadataForLambda(ImageCache$get$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForCoroutine($addCOROUTINE$2, CoroutineImpl);
  initMetadataForObject(ImageCache, 'ImageCache', VOID, VOID, VOID, [2, 1]);
  initMetadataForCoroutine($sendAndReadCOROUTINE$3, CoroutineImpl);
  initMetadataForCoroutine($listServerDrawingsCOROUTINE$4, CoroutineImpl);
  initMetadataForCoroutine($saveToServerCOROUTINE$5, CoroutineImpl);
  initMetadataForObject(Storage, 'Storage');
  initMetadataForLambda(setupControls$lambda$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(setupControls$lambda$slambda_1, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(setupImageControls$lambda$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(setupServerControls$lambda$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(setupServerControls$lambda$slambda_1, CoroutineImpl, VOID, [1]);
  //endregion
  function main() {
    var tmp = document.getElementById('drawingcanvas');
    var canvas = tmp instanceof HTMLCanvasElement ? tmp : THROW_CCE();
    var editor = new Editor(canvas);
    editor.e1o();
    setupCanvasEvents(editor);
    setupControls(editor);
    var tmp_0 = window;
    tmp_0.addEventListener('resize', main$lambda(editor));
    var tmp_1 = ImageCache_getInstance();
    tmp_1.i1o_1 = main$lambda_0(editor);
  }
  function main$lambda($editor) {
    return function (it) {
      $editor.e1o();
      return Unit_instance;
    };
  }
  function main$lambda_0($editor) {
    return function () {
      $editor.j1o();
      return Unit_instance;
    };
  }
  function mainWrapper() {
    main();
  }
  function drawItem($this, item) {
    $this.r1n_1.save();
    item.k1o($this.r1n_1);
    $this.r1n_1.restore();
  }
  function restore($this, snapshot) {
    if (snapshot == null)
      return Unit_instance;
    var drawing = decodeDrawingData(snapshot);
    replaceItems($this, drawing.l1o_1);
    $this.v1n_1 = drawing.m1o_1;
    Storage_getInstance().w1o(snapshot);
    $this.x1o();
  }
  function replaceItems($this, newItems) {
    $this.t1n_1 = null;
    $this.s1n_1.z1();
    $this.s1n_1.z(newItems);
  }
  function Editor$requestRender$lambda(this$0) {
    return function (it) {
      this$0.d1o_1 = false;
      this$0.x1o();
      return Unit_instance;
    };
  }
  function Editor(canvas) {
    this.q1n_1 = canvas;
    var tmp = this;
    var tmp_0 = this.q1n_1.getContext('2d');
    tmp.r1n_1 = tmp_0 instanceof CanvasRenderingContext2D ? tmp_0 : THROW_CCE();
    var tmp_1 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_1.s1n_1 = ArrayList_init_$Create$();
    this.t1n_1 = null;
    this.u1n_1 = '#000000';
    this.v1n_1 = '#ffffff';
    this.w1n_1 = 3;
    this.x1n_1 = 20;
    this.y1n_1 = 5;
    this.z1n_1 = new ToolSet();
    this.a1o_1 = this.z1n_1.y1o_1;
    this.b1o_1 = null;
    this.d1o_1 = false;
    var drawing = Storage_getInstance().g1p();
    this.s1n_1.z(drawing.l1o_1);
    this.v1n_1 = drawing.m1o_1;
    this.c1o_1 = new History(encodeDrawing(this.s1n_1, VOID, this.v1n_1));
  }
  protoOf(Editor).h1p = function (next) {
    this.a1o_1.i1p(this);
    this.t1n_1 = null;
    this.a1o_1 = next;
    var tmp0_safe_receiver = this.b1o_1;
    if (tmp0_safe_receiver == null)
      null;
    else
      tmp0_safe_receiver(next);
    this.j1o();
  };
  protoOf(Editor).j1p = function (p, accept) {
    var tmp0 = this.s1n_1;
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.lastOrNull' call
      var iterator = tmp0.o1(tmp0.l());
      while (iterator.c4()) {
        var element = iterator.e4();
        // Inline function 'stickynode.editor.Editor.findTop.<anonymous>' call
        if (accept(element) && element.k1p(p)) {
          tmp$ret$1 = element;
          break $l$block;
        }
      }
      tmp$ret$1 = null;
    }
    return tmp$ret$1;
  };
  protoOf(Editor).x1o = function () {
    this.r1n_1.clearRect(0.0, 0.0, this.q1n_1.width, this.q1n_1.height);
    this.r1n_1.fillStyle = this.v1n_1;
    this.r1n_1.fillRect(0.0, 0.0, this.q1n_1.width, this.q1n_1.height);
    var _iterator__ex2g4s = this.s1n_1.i();
    while (_iterator__ex2g4s.j()) {
      var item = _iterator__ex2g4s.k();
      drawItem(this, item);
    }
    var tmp0_safe_receiver = this.t1n_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'stickynode.editor.Editor.render.<anonymous>' call
      drawItem(this, tmp0_safe_receiver);
    }
  };
  protoOf(Editor).j1o = function () {
    if (this.d1o_1)
      return Unit_instance;
    this.d1o_1 = true;
    var tmp = window;
    tmp.requestAnimationFrame(Editor$requestRender$lambda(this));
  };
  protoOf(Editor).e1o = function () {
    this.q1n_1.width = window.innerWidth;
    this.q1n_1.height = window.innerHeight;
    this.x1o();
  };
  protoOf(Editor).l1p = function () {
    var snapshot = encodeDrawing(this.s1n_1, VOID, this.v1n_1);
    if (this.c1o_1.p1p(snapshot)) {
      Storage_getInstance().w1o(snapshot);
    }
  };
  protoOf(Editor).q1p = function () {
    if (!this.a1o_1.s1p()) {
      restore(this, this.c1o_1.r1p());
    }
  };
  protoOf(Editor).t1p = function () {
    if (!this.a1o_1.s1p()) {
      restore(this, this.c1o_1.u1p());
    }
  };
  protoOf(Editor).z1 = function () {
    replaceItems(this, emptyList());
    this.x1o();
    this.l1p();
  };
  protoOf(Editor).v1p = function (newItems, newBackgroundColor) {
    replaceItems(this, newItems);
    this.v1n_1 = newBackgroundColor;
    this.x1o();
    this.l1p();
  };
  protoOf(Editor).w1p = function (newItems, newBackgroundColor, $super) {
    newBackgroundColor = newBackgroundColor === VOID ? this.v1n_1 : newBackgroundColor;
    var tmp;
    if ($super === VOID) {
      this.v1p(newItems, newBackgroundColor);
      tmp = Unit_instance;
    } else {
      tmp = $super.v1p.call(this, newItems, newBackgroundColor);
    }
    return tmp;
  };
  protoOf(Editor).x1p = function () {
    return encodeDrawing(this.s1n_1, true, this.v1n_1);
  };
  protoOf(Editor).y1p = function (value) {
    if (this.v1n_1 === value)
      return Unit_instance;
    this.v1n_1 = value;
    this.x1o();
    this.l1p();
  };
  function History(initial, limit) {
    limit = limit === VOID ? 100 : limit;
    this.m1p_1 = limit;
    var tmp = this;
    // Inline function 'kotlin.apply' call
    var this_0 = ArrayDeque_init_$Create$();
    // Inline function 'stickynode.editor.History.stack.<anonymous>' call
    this_0.kc(initial);
    tmp.n1p_1 = this_0;
    this.o1p_1 = 0;
  }
  protoOf(History).p1p = function (snapshot) {
    if (snapshot === this.n1p_1.n(this.o1p_1))
      return false;
    while (this.n1p_1.gc_1 > (this.o1p_1 + 1 | 0)) {
      this.n1p_1.nc();
    }
    this.n1p_1.kc(snapshot);
    if (this.n1p_1.gc_1 > this.m1p_1) {
      this.n1p_1.lc();
    }
    this.o1p_1 = get_lastIndex(this.n1p_1);
    return true;
  };
  protoOf(History).r1p = function () {
    if (this.o1p_1 === 0)
      return null;
    this.o1p_1 = this.o1p_1 - 1 | 0;
    return this.n1p_1.n(this.o1p_1);
  };
  protoOf(History).u1p = function () {
    if (this.o1p_1 === get_lastIndex(this.n1p_1))
      return null;
    this.o1p_1 = this.o1p_1 + 1 | 0;
    return this.n1p_1.n(this.o1p_1);
  };
  function findEnclosedRegion(ed, p) {
    var w = ed.q1n_1.width;
    var h = ed.q1n_1.height;
    var sx = numberToInt(p.z1p_1);
    var sy = numberToInt(p.a1q_1);
    if (p.z1p_1 < 0 || p.a1q_1 < 0 || sx >= w || sy >= h)
      return null;
    var tmp = document.createElement('canvas');
    var off = tmp instanceof HTMLCanvasElement ? tmp : THROW_CCE();
    off.width = w;
    off.height = h;
    var tmp_0 = off.getContext('2d');
    var ctx = tmp_0 instanceof CanvasRenderingContext2D ? tmp_0 : THROW_CCE();
    var _iterator__ex2g4s = ed.s1n_1.i();
    $l$loop: while (_iterator__ex2g4s.j()) {
      var item = _iterator__ex2g4s.k();
      if (item instanceof RegionFillItem)
        continue $l$loop;
      ctx.save();
      item.k1o(ctx);
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
    this.b1q_1 = 'sticky-node-textbox';
  }
  protoOf(TextBox).c1q = function () {
    return !(document.querySelector('textarea.sticky-node-textbox') == null);
  };
  protoOf(TextBox).d1q = function (canvas, at, color, initialText, onCommit) {
    if (this.c1q())
      return Unit_instance;
    var bounds = canvas.getBoundingClientRect();
    var tmp = document.createElement('textarea');
    var box = tmp instanceof HTMLTextAreaElement ? tmp : THROW_CCE();
    box.className = 'sticky-node-textbox';
    // Inline function 'kotlin.with' call
    // Inline function 'stickynode.editor.TextBox.show.<anonymous>' call
    var $this$with = box.style;
    $this$with.position = 'fixed';
    $this$with.left = '' + (bounds.left + at.z1p_1 - 8) + 'px';
    $this$with.top = '' + (bounds.top + at.a1q_1 - 8) + 'px';
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
  protoOf(TextBox).e1q = function (canvas, at, color, initialText, onCommit, $super) {
    initialText = initialText === VOID ? '' : initialText;
    var tmp;
    if ($super === VOID) {
      this.d1q(canvas, at, color, initialText, onCommit);
      tmp = Unit_instance;
    } else {
      tmp = $super.d1q.call(this, canvas, at, color, initialText, onCommit);
    }
    return tmp;
  };
  var TextBox_instance;
  function TextBox_getInstance() {
    return TextBox_instance;
  }
  function ToolSet$rectangle$lambda(it) {
    return it instanceof RectangleItem;
  }
  function ToolSet$rectangle$lambda_0(ed, start, end) {
    var box = boundingBox(start, end);
    return new RectangleItem(box.f1q_1, box.g1q_1, box.h1q_1, box.i1q_1, ed.u1n_1, ed.w1n_1);
  }
  function ToolSet$circle$lambda(it) {
    return it instanceof CircleItem;
  }
  function ToolSet$circle$lambda_0(ed, start, end) {
    var box = boundingBox(start, end);
    return new CircleItem(box.f1q_1, box.g1q_1, box.h1q_1, box.i1q_1, ed.u1n_1, ed.w1n_1);
  }
  function ToolSet$polygon$lambda(it) {
    return it instanceof PolygonItem;
  }
  function ToolSet$polygon$lambda_0(ed, start, end) {
    var box = boundingBox(start, end);
    return new PolygonItem(box.f1q_1, box.g1q_1, box.h1q_1, box.i1q_1, ed.y1n_1, ed.u1n_1, ed.w1n_1);
  }
  function ToolSet$arrow$lambda(it) {
    return it instanceof ArrowItem;
  }
  function ToolSet$arrow$lambda_0(ed, start, end) {
    return new ArrowItem(start.z1p_1, start.a1q_1, end.z1p_1, end.a1q_1, ed.u1n_1, ed.w1n_1);
  }
  function ToolSet() {
    this.y1o_1 = new FreehandTool();
    this.z1o_1 = new EraserTool();
    this.a1p_1 = new TextTool();
    this.b1p_1 = new FillTool();
    var tmp = this;
    var tmp_0 = ToolSet$rectangle$lambda;
    tmp.c1p_1 = new ShapeTool(tmp_0, ToolSet$rectangle$lambda_0);
    var tmp_1 = this;
    var tmp_2 = ToolSet$circle$lambda;
    tmp_1.d1p_1 = new ShapeTool(tmp_2, ToolSet$circle$lambda_0);
    var tmp_3 = this;
    var tmp_4 = ToolSet$polygon$lambda;
    tmp_3.e1p_1 = new ShapeTool(tmp_4, ToolSet$polygon$lambda_0);
    var tmp_5 = this;
    var tmp_6 = ToolSet$arrow$lambda;
    tmp_5.f1p_1 = new ShapeTool(tmp_6, ToolSet$arrow$lambda_0);
  }
  function Tool() {
  }
  function Dragger() {
    this.n1q_1 = null;
    this.o1q_1 = new Point(0.0, 0.0);
  }
  protoOf(Dragger).p1q = function () {
    return !(this.n1q_1 == null);
  };
  protoOf(Dragger).q1q = function (item, at) {
    this.n1q_1 = item;
    this.o1q_1 = at;
  };
  protoOf(Dragger).r1q = function (to) {
    var tmp0_elvis_lhs = this.n1q_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var item = tmp;
    item.s1q(to.z1p_1 - this.o1q_1.z1p_1, to.a1q_1 - this.o1q_1.a1q_1);
    this.o1q_1 = to;
    return true;
  };
  protoOf(Dragger).t1q = function () {
    var wasActive = !(this.n1q_1 == null);
    this.n1q_1 = null;
    return wasActive;
  };
  protoOf(Dragger).u1q = function () {
    this.n1q_1 = null;
  };
  function FreehandTool$onDown$lambda(it) {
    return it instanceof StrokeItem;
  }
  function FreehandTool() {
    this.v1q_1 = new Dragger();
    this.w1q_1 = null;
  }
  protoOf(FreehandTool).s1p = function () {
    return this.v1q_1.p1q() || !(this.w1q_1 == null);
  };
  protoOf(FreehandTool).i1p = function (ed) {
    this.v1q_1.u1q();
    this.w1q_1 = null;
    ed.t1n_1 = null;
  };
  protoOf(FreehandTool).k1q = function (ed, p, button) {
    var existing = ed.j1p(p, FreehandTool$onDown$lambda);
    if (!(existing == null)) {
      this.v1q_1.q1q(existing, p);
      return Unit_instance;
    }
    var fresh = new StrokeItem(mutableListOf([p]), ed.u1n_1, ed.w1n_1);
    this.w1q_1 = fresh;
    ed.t1n_1 = fresh;
  };
  protoOf(FreehandTool).l1q = function (ed, p) {
    if (this.v1q_1.r1q(p)) {
      ed.j1o();
      return Unit_instance;
    }
    var tmp0_elvis_lhs = this.w1q_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_instance;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var current = tmp;
    if (!last(current.x1q_1).equals(p)) {
      current.x1q_1.d(p);
      ed.j1o();
    }
  };
  protoOf(FreehandTool).m1q = function (ed) {
    if (this.v1q_1.t1q()) {
      ed.l1p();
      return Unit_instance;
    }
    var tmp0_elvis_lhs = this.w1q_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_instance;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var finished = tmp;
    this.w1q_1 = null;
    ed.t1n_1 = null;
    if (finished.x1q_1.l() >= 2) {
      ed.s1n_1.d(finished);
    }
    ed.x1o();
    ed.l1p();
  };
  function ShapeTool(owns, create) {
    this.b1r_1 = owns;
    this.c1r_1 = create;
    this.d1r_1 = new Dragger();
    this.e1r_1 = null;
    this.f1r_1 = null;
  }
  protoOf(ShapeTool).s1p = function () {
    return this.d1r_1.p1q() || !(this.e1r_1 == null);
  };
  protoOf(ShapeTool).i1p = function (ed) {
    this.d1r_1.u1q();
    this.e1r_1 = null;
    this.f1r_1 = null;
    ed.t1n_1 = null;
  };
  protoOf(ShapeTool).k1q = function (ed, p, button) {
    var existing = ed.j1p(p, this.b1r_1);
    if (!(existing == null)) {
      this.d1r_1.q1q(existing, p);
    } else {
      this.e1r_1 = p;
      this.f1r_1 = p;
    }
  };
  protoOf(ShapeTool).l1q = function (ed, p) {
    if (this.d1r_1.r1q(p)) {
      ed.j1o();
      return Unit_instance;
    }
    var tmp0_elvis_lhs = this.e1r_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_instance;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var origin = tmp;
    this.f1r_1 = p;
    ed.t1n_1 = this.c1r_1(ed, origin, p);
    ed.j1o();
  };
  protoOf(ShapeTool).m1q = function (ed) {
    if (this.d1r_1.t1q()) {
      ed.l1p();
      return Unit_instance;
    }
    var tmp0_elvis_lhs = this.e1r_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_instance;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var origin = tmp;
    var tmp1_elvis_lhs = this.f1r_1;
    var end = tmp1_elvis_lhs == null ? origin : tmp1_elvis_lhs;
    this.e1r_1 = null;
    this.f1r_1 = null;
    ed.t1n_1 = null;
    var tmp0 = end.z1p_1 - origin.z1p_1;
    // Inline function 'kotlin.math.hypot' call
    var y = end.a1q_1 - origin.a1q_1;
    if (hypot(tmp0, y) > 3.0) {
      ed.s1n_1.d(this.c1r_1(ed, origin, end));
    }
    ed.x1o();
    ed.l1p();
  };
  function addNew($this, ed, at) {
    var color = ed.u1n_1;
    var fontSize = ed.x1n_1;
    var tmp = TextBox_instance;
    tmp.e1q(ed.q1n_1, at, color, VOID, TextTool$addNew$lambda(ed, at, color, fontSize));
  }
  function edit($this, ed, item) {
    var tmp = TextBox_instance;
    var tmp_0 = new Point(item.g1r_1, item.h1r_1);
    var tmp_1 = item.i1r_1;
    var tmp_2 = item.j1r_1;
    tmp.d1q(ed.q1n_1, tmp_0, tmp_1, tmp_2, TextTool$edit$lambda(ed, item));
  }
  function TextTool$onDown$lambda(it) {
    return it instanceof TextItem;
  }
  function TextTool$addNew$lambda($ed, $at, $color, $fontSize) {
    return function (text) {
      var tmp;
      // Inline function 'kotlin.text.isNotEmpty' call
      if (charSequenceLength(text) > 0) {
        $ed.s1n_1.d(new TextItem($at.z1p_1, $at.a1q_1, $color, text, $fontSize));
        $ed.x1o();
        $ed.l1p();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function TextTool$edit$lambda($ed, $item) {
    return function (text) {
      // Inline function 'kotlin.text.isEmpty' call
      if (charSequenceLength(text) === 0) {
        $ed.s1n_1.y1($item);
      } else {
        $item.j1r_1 = text;
      }
      $ed.x1o();
      $ed.l1p();
      return Unit_instance;
    };
  }
  function TextTool() {
    this.l1r_1 = true;
    this.m1r_1 = new Dragger();
    this.n1r_1 = null;
  }
  protoOf(TextTool).j1q = function () {
    return this.l1r_1;
  };
  protoOf(TextTool).s1p = function () {
    return this.m1r_1.p1q() || !(this.n1r_1 == null);
  };
  protoOf(TextTool).i1p = function (ed) {
    this.m1r_1.u1q();
    this.n1r_1 = null;
  };
  protoOf(TextTool).k1q = function (ed, p, button) {
    var tmp = ed.j1p(p, TextTool$onDown$lambda);
    var existing = tmp instanceof TextItem ? tmp : null;
    switch (button) {
      case 0:
        if (!(existing == null)) {
          this.m1r_1.q1q(existing, p);
        } else {
          this.n1r_1 = p;
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
  protoOf(TextTool).l1q = function (ed, p) {
    if (this.m1r_1.r1q(p)) {
      ed.j1o();
    }
  };
  protoOf(TextTool).m1q = function (ed) {
    if (this.m1r_1.t1q()) {
      ed.l1p();
      return Unit_instance;
    }
    var tmp0_elvis_lhs = this.n1r_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_instance;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var at = tmp;
    this.n1r_1 = null;
    addNew(this, ed, at);
  };
  function FillTool() {
    this.o1r_1 = true;
  }
  protoOf(FillTool).j1q = function () {
    return this.o1r_1;
  };
  protoOf(FillTool).k1q = function (ed, p, button) {
    var tmp0 = ed.s1n_1;
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.lastOrNull' call
      var iterator = tmp0.o1(tmp0.l());
      while (iterator.c4()) {
        var element = iterator.e4();
        // Inline function 'stickynode.editor.FillTool.onDown.<anonymous>' call
        var tmp;
        if (isInterface(element, Fillable)) {
          tmp = element.p1r(p);
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
      var newFill = button === 2 ? null : ed.u1n_1;
      var tmp_1;
      if (newFill == native.q1r()) {
        tmp_1 = true;
      } else {
        var tmp_2;
        if (newFill == null) {
          // Inline function 'kotlin.text.isNullOrEmpty' call
          var this_0 = native.q1r();
          tmp_2 = this_0 == null || charSequenceLength(this_0) === 0;
        } else {
          tmp_2 = false;
        }
        tmp_1 = tmp_2;
      }
      if (tmp_1)
        return Unit_instance;
      native.r1r(newFill);
      ed.x1o();
      ed.l1p();
      return Unit_instance;
    }
    var tmp3 = ed.s1n_1;
    var tmp$ret$4;
    $l$block_0: {
      // Inline function 'kotlin.collections.lastOrNull' call
      var iterator_0 = tmp3.o1(tmp3.l());
      while (iterator_0.c4()) {
        var element_0 = iterator_0.e4();
        // Inline function 'stickynode.editor.FillTool.onDown.<anonymous>' call
        var tmp_3;
        if (element_0 instanceof RegionFillItem) {
          tmp_3 = element_0.k1p(p);
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
        ed.s1n_1.y1(old);
        ed.x1o();
        ed.l1p();
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
      ed.s1n_1.y1(old);
    }
    ed.s1n_1.b2(0, new RegionFillItem(runs, ed.u1n_1));
    ed.x1o();
    ed.l1p();
  };
  protoOf(FillTool).l1q = function (ed, p) {
    return Unit_instance;
  };
  protoOf(FillTool).m1q = function (ed) {
    return Unit_instance;
  };
  function erase($this, ed, p) {
    var tmp0 = ed.s1n_1;
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.indexOfLast' call
      var iterator = tmp0.o1(tmp0.l());
      while (iterator.c4()) {
        // Inline function 'stickynode.editor.EraserTool.erase.<anonymous>' call
        if (iterator.e4().k1p(p)) {
          tmp$ret$1 = iterator.d4();
          break $l$block;
        }
      }
      tmp$ret$1 = -1;
    }
    var index = tmp$ret$1;
    if (index < 0)
      return Unit_instance;
    ed.s1n_1.c2(index);
    $this.x1r_1 = true;
    ed.j1o();
  }
  function EraserTool() {
    this.w1r_1 = false;
    this.x1r_1 = false;
  }
  protoOf(EraserTool).s1p = function () {
    return this.w1r_1;
  };
  protoOf(EraserTool).i1p = function (ed) {
    this.w1r_1 = false;
    this.x1r_1 = false;
  };
  protoOf(EraserTool).k1q = function (ed, p, button) {
    this.w1r_1 = true;
    erase(this, ed, p);
  };
  protoOf(EraserTool).l1q = function (ed, p) {
    if (this.w1r_1) {
      erase(this, ed, p);
    }
  };
  protoOf(EraserTool).m1q = function (ed) {
    if (!this.w1r_1)
      return Unit_instance;
    this.w1r_1 = false;
    if (this.x1r_1) {
      this.x1r_1 = false;
      ed.l1p();
    }
  };
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
    tmp.z1r_1 = [null, null, new ArrayListSerializer(Companion_getInstance_3().v14()), null];
  }
  protoOf(Companion).v14 = function () {
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
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('stickynode.model.DrawingFile', this, 4);
    tmp0_serialDesc.nt('app', true);
    tmp0_serialDesc.nt('version', true);
    tmp0_serialDesc.nt('items', true);
    tmp0_serialDesc.nt('backgroundColor', true);
    this.a1s_1 = tmp0_serialDesc;
  }
  protoOf($serializer).b1s = function (encoder, value) {
    var tmp0_desc = this.a1s_1;
    var tmp1_output = encoder.gm(tmp0_desc);
    var tmp2_cached = Companion_getInstance().z1r_1;
    if (tmp1_output.co(tmp0_desc, 0) ? true : !(value.c1s_1 === '')) {
      tmp1_output.un(tmp0_desc, 0, value.c1s_1);
    }
    if (tmp1_output.co(tmp0_desc, 1) ? true : !(value.d1s_1 === 1)) {
      tmp1_output.pn(tmp0_desc, 1, value.d1s_1);
    }
    if (tmp1_output.co(tmp0_desc, 2) ? true : !equals(value.e1s_1, emptyList())) {
      tmp1_output.wn(tmp0_desc, 2, tmp2_cached[2], value.e1s_1);
    }
    if (tmp1_output.co(tmp0_desc, 3) ? true : !(value.f1s_1 === '#ffffff')) {
      tmp1_output.un(tmp0_desc, 3, value.f1s_1);
    }
    tmp1_output.hm(tmp0_desc);
  };
  protoOf($serializer).cj = function (encoder, value) {
    return this.b1s(encoder, value instanceof DrawingFile ? value : THROW_CCE());
  };
  protoOf($serializer).dj = function (decoder) {
    var tmp0_desc = this.a1s_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = 0;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_input = decoder.gm(tmp0_desc);
    var tmp9_cached = Companion_getInstance().z1r_1;
    if (tmp8_input.wm()) {
      tmp4_local0 = tmp8_input.qm(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp8_input.lm(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp8_input.sm(tmp0_desc, 2, tmp9_cached[2], tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp8_input.qm(tmp0_desc, 3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp8_input.xm(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp8_input.qm(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp8_input.lm(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp8_input.sm(tmp0_desc, 2, tmp9_cached[2], tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp8_input.qm(tmp0_desc, 3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp8_input.hm(tmp0_desc);
    return DrawingFile_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, null);
  };
  protoOf($serializer).bj = function () {
    return this.a1s_1;
  };
  protoOf($serializer).pt = function () {
    var tmp0_cached = Companion_getInstance().z1r_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), IntSerializer_getInstance(), tmp0_cached[2], StringSerializer_getInstance()];
  };
  var $serializer_instance;
  function $serializer_getInstance() {
    if ($serializer_instance == null)
      new $serializer();
    return $serializer_instance;
  }
  function DrawingFile_init_$Init$(seen0, app, version, items, backgroundColor, serializationConstructorMarker, $this) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance().a1s_1);
    }
    if (0 === (seen0 & 1))
      $this.c1s_1 = '';
    else
      $this.c1s_1 = app;
    if (0 === (seen0 & 2))
      $this.d1s_1 = 1;
    else
      $this.d1s_1 = version;
    if (0 === (seen0 & 4))
      $this.e1s_1 = emptyList();
    else
      $this.e1s_1 = items;
    if (0 === (seen0 & 8))
      $this.f1s_1 = '#ffffff';
    else
      $this.f1s_1 = backgroundColor;
    return $this;
  }
  function DrawingFile_init_$Create$(seen0, app, version, items, backgroundColor, serializationConstructorMarker) {
    return DrawingFile_init_$Init$(seen0, app, version, items, backgroundColor, serializationConstructorMarker, objectCreate(protoOf(DrawingFile)));
  }
  function DrawingFile(app, version, items, backgroundColor) {
    Companion_getInstance();
    app = app === VOID ? '' : app;
    version = version === VOID ? 1 : version;
    items = items === VOID ? emptyList() : items;
    backgroundColor = backgroundColor === VOID ? '#ffffff' : backgroundColor;
    this.c1s_1 = app;
    this.d1s_1 = version;
    this.e1s_1 = items;
    this.f1s_1 = backgroundColor;
  }
  function DecodedDrawing(items, backgroundColor) {
    this.l1o_1 = items;
    this.m1o_1 = backgroundColor;
  }
  protoOf(DecodedDrawing).toString = function () {
    return 'DecodedDrawing(items=' + toString(this.l1o_1) + ', backgroundColor=' + this.m1o_1 + ')';
  };
  protoOf(DecodedDrawing).hashCode = function () {
    var result = hashCode(this.l1o_1);
    result = imul(result, 31) + getStringHashCode(this.m1o_1) | 0;
    return result;
  };
  protoOf(DecodedDrawing).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof DecodedDrawing))
      return false;
    var tmp0_other_with_cast = other instanceof DecodedDrawing ? other : THROW_CCE();
    if (!equals(this.l1o_1, tmp0_other_with_cast.l1o_1))
      return false;
    if (!(this.m1o_1 === tmp0_other_with_cast.m1o_1))
      return false;
    return true;
  };
  function Companion_0() {
    Companion_instance_1 = this;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.g1s_1 = [new ArrayListSerializer($serializer_getInstance_3()), new ArrayListSerializer($serializer_getInstance_4()), new ArrayListSerializer($serializer_getInstance_5()), new ArrayListSerializer($serializer_getInstance_6()), new ArrayListSerializer($serializer_getInstance_7()), new ArrayListSerializer($serializer_getInstance_8())];
  }
  protoOf(Companion_0).v14 = function () {
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
    tmp0_serialDesc.nt('strokeItems', true);
    tmp0_serialDesc.nt('rectangleItems', true);
    tmp0_serialDesc.nt('circleItems', true);
    tmp0_serialDesc.nt('polygonItems', true);
    tmp0_serialDesc.nt('arrowItems', true);
    tmp0_serialDesc.nt('textItems', true);
    this.h1s_1 = tmp0_serialDesc;
  }
  protoOf($serializer_0).i1s = function (encoder, value) {
    var tmp0_desc = this.h1s_1;
    var tmp1_output = encoder.gm(tmp0_desc);
    var tmp2_cached = Companion_getInstance_0().g1s_1;
    if (tmp1_output.co(tmp0_desc, 0) ? true : !equals(value.j1s_1, emptyList())) {
      tmp1_output.wn(tmp0_desc, 0, tmp2_cached[0], value.j1s_1);
    }
    if (tmp1_output.co(tmp0_desc, 1) ? true : !equals(value.k1s_1, emptyList())) {
      tmp1_output.wn(tmp0_desc, 1, tmp2_cached[1], value.k1s_1);
    }
    if (tmp1_output.co(tmp0_desc, 2) ? true : !equals(value.l1s_1, emptyList())) {
      tmp1_output.wn(tmp0_desc, 2, tmp2_cached[2], value.l1s_1);
    }
    if (tmp1_output.co(tmp0_desc, 3) ? true : !equals(value.m1s_1, emptyList())) {
      tmp1_output.wn(tmp0_desc, 3, tmp2_cached[3], value.m1s_1);
    }
    if (tmp1_output.co(tmp0_desc, 4) ? true : !equals(value.n1s_1, emptyList())) {
      tmp1_output.wn(tmp0_desc, 4, tmp2_cached[4], value.n1s_1);
    }
    if (tmp1_output.co(tmp0_desc, 5) ? true : !equals(value.o1s_1, emptyList())) {
      tmp1_output.wn(tmp0_desc, 5, tmp2_cached[5], value.o1s_1);
    }
    tmp1_output.hm(tmp0_desc);
  };
  protoOf($serializer_0).cj = function (encoder, value) {
    return this.i1s(encoder, value instanceof LegacyDrawing ? value : THROW_CCE());
  };
  protoOf($serializer_0).dj = function (decoder) {
    var tmp0_desc = this.h1s_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_local5 = null;
    var tmp10_input = decoder.gm(tmp0_desc);
    var tmp11_cached = Companion_getInstance_0().g1s_1;
    if (tmp10_input.wm()) {
      tmp4_local0 = tmp10_input.sm(tmp0_desc, 0, tmp11_cached[0], tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp10_input.sm(tmp0_desc, 1, tmp11_cached[1], tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp10_input.sm(tmp0_desc, 2, tmp11_cached[2], tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp10_input.sm(tmp0_desc, 3, tmp11_cached[3], tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp10_input.sm(tmp0_desc, 4, tmp11_cached[4], tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp10_input.sm(tmp0_desc, 5, tmp11_cached[5], tmp9_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp10_input.xm(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp10_input.sm(tmp0_desc, 0, tmp11_cached[0], tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp10_input.sm(tmp0_desc, 1, tmp11_cached[1], tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp10_input.sm(tmp0_desc, 2, tmp11_cached[2], tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp10_input.sm(tmp0_desc, 3, tmp11_cached[3], tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp10_input.sm(tmp0_desc, 4, tmp11_cached[4], tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp10_input.sm(tmp0_desc, 5, tmp11_cached[5], tmp9_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp10_input.hm(tmp0_desc);
    return LegacyDrawing_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, null);
  };
  protoOf($serializer_0).bj = function () {
    return this.h1s_1;
  };
  protoOf($serializer_0).pt = function () {
    var tmp0_cached = Companion_getInstance_0().g1s_1;
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
      throwMissingFieldException(seen0, 0, $serializer_getInstance_0().h1s_1);
    }
    if (0 === (seen0 & 1))
      $this.j1s_1 = emptyList();
    else
      $this.j1s_1 = strokeItems;
    if (0 === (seen0 & 2))
      $this.k1s_1 = emptyList();
    else
      $this.k1s_1 = rectangleItems;
    if (0 === (seen0 & 4))
      $this.l1s_1 = emptyList();
    else
      $this.l1s_1 = circleItems;
    if (0 === (seen0 & 8))
      $this.m1s_1 = emptyList();
    else
      $this.m1s_1 = polygonItems;
    if (0 === (seen0 & 16))
      $this.n1s_1 = emptyList();
    else
      $this.n1s_1 = arrowItems;
    if (0 === (seen0 & 32))
      $this.o1s_1 = emptyList();
    else
      $this.o1s_1 = textItems;
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
    this.j1s_1 = strokeItems;
    this.k1s_1 = rectangleItems;
    this.l1s_1 = circleItems;
    this.m1s_1 = polygonItems;
    this.n1s_1 = arrowItems;
    this.o1s_1 = textItems;
  }
  protoOf(LegacyDrawing).p1s = function () {
    // Inline function 'kotlin.collections.buildList' call
    // Inline function 'kotlin.collections.buildListInternal' call
    // Inline function 'kotlin.apply' call
    var this_0 = ArrayList_init_$Create$();
    // Inline function 'stickynode.model.LegacyDrawing.toItems.<anonymous>' call
    this_0.z(this.j1s_1);
    this_0.z(this.k1s_1);
    this_0.z(this.l1s_1);
    this_0.z(this.m1s_1);
    this_0.z(this.n1s_1);
    this_0.z(this.o1s_1);
    return this_0.w4();
  };
  function encodeDrawing(items, pretty, backgroundColor) {
    pretty = pretty === VOID ? false : pretty;
    backgroundColor = backgroundColor === VOID ? '#ffffff' : backgroundColor;
    _init_properties_Drawing_kt__mbw8h8();
    var file = new DrawingFile('sticky-node', 2, items, backgroundColor);
    return (pretty ? get_prettyJson() : get_json()).n12(Companion_getInstance().v14(), file);
  }
  function decodeDrawingData(text) {
    _init_properties_Drawing_kt__mbw8h8();
    if (isBlank(text))
      throw IllegalArgumentException_init_$Create$('The file is empty');
    var file = get_json().o12(Companion_getInstance().v14(), text);
    if (!(file.c1s_1 === 'sticky-node'))
      throw IllegalArgumentException_init_$Create$('Not a Sticky Node file');
    if (file.d1s_1 >= 2) {
      return new DecodedDrawing(file.e1s_1, file.f1s_1);
    }
    return new DecodedDrawing(get_json().o12(Companion_getInstance_0().v14(), text).p1s(), '#ffffff');
  }
  function decodeDrawing(text) {
    _init_properties_Drawing_kt__mbw8h8();
    return decodeDrawingData(text).l1o_1;
  }
  function json$lambda($this$Json) {
    _init_properties_Drawing_kt__mbw8h8();
    $this$Json.g13_1 = true;
    $this$Json.e13_1 = true;
    $this$Json.f13_1 = false;
    return Unit_instance;
  }
  function prettyJson$lambda($this$Json) {
    _init_properties_Drawing_kt__mbw8h8();
    $this$Json.i13_1 = true;
    $this$Json.j13_1 = '  ';
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
    tmp0_serialDesc.nt('x', false);
    tmp0_serialDesc.nt('y', false);
    this.q1s_1 = tmp0_serialDesc;
  }
  protoOf($serializer_1).r1s = function (encoder, value) {
    var tmp0_desc = this.q1s_1;
    var tmp1_output = encoder.gm(tmp0_desc);
    tmp1_output.sn(tmp0_desc, 0, value.z1p_1);
    tmp1_output.sn(tmp0_desc, 1, value.a1q_1);
    tmp1_output.hm(tmp0_desc);
  };
  protoOf($serializer_1).cj = function (encoder, value) {
    return this.r1s(encoder, value instanceof Point ? value : THROW_CCE());
  };
  protoOf($serializer_1).dj = function (decoder) {
    var tmp0_desc = this.q1s_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = 0.0;
    var tmp5_local1 = 0.0;
    var tmp6_input = decoder.gm(tmp0_desc);
    if (tmp6_input.wm()) {
      tmp4_local0 = tmp6_input.om(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.om(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.xm(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.om(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.om(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp6_input.hm(tmp0_desc);
    return Point_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  protoOf($serializer_1).bj = function () {
    return this.q1s_1;
  };
  protoOf($serializer_1).pt = function () {
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
      throwMissingFieldException(seen0, 3, $serializer_getInstance_1().q1s_1);
    }
    $this.z1p_1 = x;
    $this.a1q_1 = y;
    return $this;
  }
  function Point_init_$Create$(seen0, x, y, serializationConstructorMarker) {
    return Point_init_$Init$(seen0, x, y, serializationConstructorMarker, objectCreate(protoOf(Point)));
  }
  function Point(x, y) {
    this.z1p_1 = x;
    this.a1q_1 = y;
  }
  protoOf(Point).s1s = function (other) {
    var tmp0 = this.z1p_1 - other.z1p_1;
    // Inline function 'kotlin.math.hypot' call
    var y = this.a1q_1 - other.a1q_1;
    return hypot(tmp0, y);
  };
  protoOf(Point).toString = function () {
    return 'Point(x=' + this.z1p_1 + ', y=' + this.a1q_1 + ')';
  };
  protoOf(Point).hashCode = function () {
    var result = getNumberHashCode(this.z1p_1);
    result = imul(result, 31) + getNumberHashCode(this.a1q_1) | 0;
    return result;
  };
  protoOf(Point).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Point))
      return false;
    var tmp0_other_with_cast = other instanceof Point ? other : THROW_CCE();
    if (!equals(this.z1p_1, tmp0_other_with_cast.z1p_1))
      return false;
    if (!equals(this.a1q_1, tmp0_other_with_cast.a1q_1))
      return false;
    return true;
  };
  function BoundingBox(x, y, width, height) {
    this.f1q_1 = x;
    this.g1q_1 = y;
    this.h1q_1 = width;
    this.i1q_1 = height;
  }
  function boundingBox(a, b) {
    var tmp0 = a.z1p_1;
    // Inline function 'kotlin.math.min' call
    var b_0 = b.z1p_1;
    var tmp = Math.min(tmp0, b_0);
    var tmp2 = a.a1q_1;
    // Inline function 'kotlin.math.min' call
    var b_1 = b.a1q_1;
    var tmp_0 = Math.min(tmp2, b_1);
    // Inline function 'kotlin.math.abs' call
    var x = b.z1p_1 - a.z1p_1;
    var tmp_1 = Math.abs(x);
    // Inline function 'kotlin.math.abs' call
    var x_0 = b.a1q_1 - a.a1q_1;
    var tmp$ret$3 = Math.abs(x_0);
    return new BoundingBox(tmp, tmp_0, tmp_1, tmp$ret$3);
  }
  function distanceToSegment(p, a, b) {
    var dx = b.z1p_1 - a.z1p_1;
    var dy = b.a1q_1 - a.a1q_1;
    var lengthSquared = dx * dx + dy * dy;
    if (lengthSquared === 0.0)
      return p.s1s(a);
    var t = coerceIn(((p.z1p_1 - a.z1p_1) * dx + (p.a1q_1 - a.a1q_1) * dy) / lengthSquared, 0.0, 1.0);
    var tmp0 = p.z1p_1 - (a.z1p_1 + t * dx);
    // Inline function 'kotlin.math.hypot' call
    var y = p.a1q_1 - (a.a1q_1 + t * dy);
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
        if (!(a.a1q_1 > p.a1q_1 === b.a1q_1 > p.a1q_1) && p.z1p_1 < (b.z1p_1 - a.z1p_1) * (p.a1q_1 - a.a1q_1) / (b.a1q_1 - a.a1q_1) + a.z1p_1) {
          inside = !inside;
        }
        previous = i;
      }
       while (inductionVariable <= last);
    return inside;
  }
  function Companion_2() {
  }
  var Companion_instance_3;
  function Companion_getInstance_2() {
    return Companion_instance_3;
  }
  function $serializer_2() {
    $serializer_instance_2 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('image', this, 5);
    tmp0_serialDesc.nt('x', false);
    tmp0_serialDesc.nt('y', false);
    tmp0_serialDesc.nt('width', false);
    tmp0_serialDesc.nt('height', false);
    tmp0_serialDesc.nt('imageId', false);
    this.t1s_1 = tmp0_serialDesc;
  }
  protoOf($serializer_2).u1s = function (encoder, value) {
    var tmp0_desc = this.t1s_1;
    var tmp1_output = encoder.gm(tmp0_desc);
    tmp1_output.sn(tmp0_desc, 0, value.v1s_1);
    tmp1_output.sn(tmp0_desc, 1, value.w1s_1);
    tmp1_output.sn(tmp0_desc, 2, value.x1s_1);
    tmp1_output.sn(tmp0_desc, 3, value.y1s_1);
    tmp1_output.un(tmp0_desc, 4, value.z1s_1);
    tmp1_output.hm(tmp0_desc);
  };
  protoOf($serializer_2).cj = function (encoder, value) {
    return this.u1s(encoder, value instanceof ImageItem ? value : THROW_CCE());
  };
  protoOf($serializer_2).dj = function (decoder) {
    var tmp0_desc = this.t1s_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = 0.0;
    var tmp5_local1 = 0.0;
    var tmp6_local2 = 0.0;
    var tmp7_local3 = 0.0;
    var tmp8_local4 = null;
    var tmp9_input = decoder.gm(tmp0_desc);
    if (tmp9_input.wm()) {
      tmp4_local0 = tmp9_input.om(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp9_input.om(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp9_input.om(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp9_input.om(tmp0_desc, 3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp9_input.qm(tmp0_desc, 4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp9_input.xm(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp9_input.om(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp9_input.om(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp9_input.om(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp9_input.om(tmp0_desc, 3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp9_input.qm(tmp0_desc, 4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp9_input.hm(tmp0_desc);
    return ImageItem_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, null);
  };
  protoOf($serializer_2).bj = function () {
    return this.t1s_1;
  };
  protoOf($serializer_2).pt = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [DoubleSerializer_getInstance(), DoubleSerializer_getInstance(), DoubleSerializer_getInstance(), DoubleSerializer_getInstance(), StringSerializer_getInstance()];
  };
  var $serializer_instance_2;
  function $serializer_getInstance_2() {
    if ($serializer_instance_2 == null)
      new $serializer_2();
    return $serializer_instance_2;
  }
  function ImageItem_init_$Init$(seen0, x, y, width, height, imageId, serializationConstructorMarker, $this) {
    if (!(31 === (31 & seen0))) {
      throwMissingFieldException(seen0, 31, $serializer_getInstance_2().t1s_1);
    }
    Item_init_$Init$(seen0, serializationConstructorMarker, $this);
    $this.v1s_1 = x;
    $this.w1s_1 = y;
    $this.x1s_1 = width;
    $this.y1s_1 = height;
    $this.z1s_1 = imageId;
    return $this;
  }
  function ImageItem_init_$Create$(seen0, x, y, width, height, imageId, serializationConstructorMarker) {
    return ImageItem_init_$Init$(seen0, x, y, width, height, imageId, serializationConstructorMarker, objectCreate(protoOf(ImageItem)));
  }
  function ImageItem(x, y, width, height, imageId) {
    Item.call(this);
    this.v1s_1 = x;
    this.w1s_1 = y;
    this.x1s_1 = width;
    this.y1s_1 = height;
    this.z1s_1 = imageId;
  }
  protoOf(ImageItem).a1t = function () {
    return this.v1s_1;
  };
  protoOf(ImageItem).b1t = function () {
    return this.w1s_1;
  };
  protoOf(ImageItem).c1t = function () {
    return this.x1s_1;
  };
  protoOf(ImageItem).d1t = function () {
    return this.y1s_1;
  };
  protoOf(ImageItem).k1o = function (ctx) {
    var img = ImageCache_getInstance().s14(this.z1s_1);
    if (!(img == null)) {
      ctx.drawImage(img, this.v1s_1, this.w1s_1, this.x1s_1, this.y1s_1);
    } else {
      ctx.strokeStyle = '#999999';
      ctx.lineWidth = 1.0;
      ctx.strokeRect(this.v1s_1, this.w1s_1, this.x1s_1, this.y1s_1);
      ctx.fillStyle = '#999999';
      ctx.font = '14px sans-serif';
      // Inline function 'kotlin.js.asDynamic' call
      ctx.textBaseline = 'top';
      ctx.fillText('Loading image...', this.v1s_1 + 8, this.w1s_1 + 8);
    }
  };
  protoOf(ImageItem).k1p = function (p) {
    var tmp;
    var containsLower = this.v1s_1;
    var containsUpper = this.v1s_1 + this.x1s_1;
    var containsArg = p.z1p_1;
    if (containsLower <= containsArg ? containsArg <= containsUpper : false) {
      var containsLower_0 = this.w1s_1;
      var containsUpper_0 = this.w1s_1 + this.y1s_1;
      var containsArg_0 = p.a1q_1;
      tmp = containsLower_0 <= containsArg_0 ? containsArg_0 <= containsUpper_0 : false;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(ImageItem).s1q = function (dx, dy) {
    this.v1s_1 = this.v1s_1 + dx;
    this.w1s_1 = this.w1s_1 + dy;
  };
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
    return _this__u8e3s4.a1t() + _this__u8e3s4.c1t() / 2;
  }
  function get_centerY(_this__u8e3s4) {
    _init_properties_Items_kt__3bnoaa();
    return _this__u8e3s4.b1t() + _this__u8e3s4.d1t() / 2;
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
    return $this.y1r_1.r1();
  }
  function Item$Companion$_anonymous__jaim2s() {
    var tmp = getKClass(Item);
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_0 = [getKClass(ArrowItem), getKClass(CircleItem), getKClass(ImageItem), getKClass(PolygonItem), getKClass(RectangleItem), getKClass(RegionFillItem), getKClass(StrokeItem), getKClass(TextItem)];
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_1 = [$serializer_getInstance_7(), $serializer_getInstance_5(), $serializer_getInstance_2(), $serializer_getInstance_6(), $serializer_getInstance_4(), $serializer_getInstance_9(), $serializer_getInstance_3(), $serializer_getInstance_8()];
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$8 = [];
    return SealedClassSerializer_init_$Create$('stickynode.model.Item', tmp, tmp_0, tmp_1, tmp$ret$8);
  }
  function Companion_3() {
    Companion_instance_4 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.y1r_1 = lazy(tmp_0, Item$Companion$_anonymous__jaim2s);
  }
  protoOf(Companion_3).v14 = function () {
    return _get_$cachedSerializer__te6jhj(this);
  };
  protoOf(Companion_3).au = function (typeParamsSerializers) {
    return this.v14();
  };
  var Companion_instance_4;
  function Companion_getInstance_3() {
    if (Companion_instance_4 == null)
      new Companion_3();
    return Companion_instance_4;
  }
  function Item_init_$Init$(seen0, serializationConstructorMarker, $this) {
    return $this;
  }
  function Item() {
    Companion_getInstance_3();
  }
  protoOf(Item).p1r = function (p) {
    return this.k1p(p);
  };
  function nearLine($this, p) {
    var radius = hitRadius($this.z1q_1);
    if ($this.x1q_1.l() === 1)
      return p.s1s($this.x1q_1.n(0)) <= radius;
    var inductionVariable = 0;
    var last = $this.x1q_1.l() - 1 | 0;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (distanceToSegment(p, $this.x1q_1.n(i), $this.x1q_1.n(i + 1 | 0)) <= radius)
          return true;
      }
       while (inductionVariable < last);
    return false;
  }
  function inside($this, p) {
    return $this.x1q_1.l() >= 3 && pointInPolygon(p, $this.x1q_1);
  }
  function Companion_4() {
    Companion_instance_5 = this;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.e1t_1 = [new ArrayListSerializer($serializer_getInstance_1()), null, null, null];
  }
  var Companion_instance_5;
  function Companion_getInstance_4() {
    if (Companion_instance_5 == null)
      new Companion_4();
    return Companion_instance_5;
  }
  function $serializer_3() {
    $serializer_instance_3 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('stroke', this, 4);
    tmp0_serialDesc.nt('points', false);
    tmp0_serialDesc.nt('color', false);
    tmp0_serialDesc.nt('lineWidth', true);
    tmp0_serialDesc.nt('fill', true);
    this.f1t_1 = tmp0_serialDesc;
  }
  protoOf($serializer_3).g1t = function (encoder, value) {
    var tmp0_desc = this.f1t_1;
    var tmp1_output = encoder.gm(tmp0_desc);
    var tmp2_cached = Companion_getInstance_4().e1t_1;
    tmp1_output.wn(tmp0_desc, 0, tmp2_cached[0], value.x1q_1);
    tmp1_output.un(tmp0_desc, 1, value.y1q_1);
    if (tmp1_output.co(tmp0_desc, 2) ? true : !(value.z1q_1 === 3)) {
      tmp1_output.pn(tmp0_desc, 2, value.z1q_1);
    }
    if (tmp1_output.co(tmp0_desc, 3) ? true : !(value.a1r_1 == null)) {
      tmp1_output.yn(tmp0_desc, 3, StringSerializer_getInstance(), value.a1r_1);
    }
    tmp1_output.hm(tmp0_desc);
  };
  protoOf($serializer_3).cj = function (encoder, value) {
    return this.g1t(encoder, value instanceof StrokeItem ? value : THROW_CCE());
  };
  protoOf($serializer_3).dj = function (decoder) {
    var tmp0_desc = this.f1t_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = 0;
    var tmp7_local3 = null;
    var tmp8_input = decoder.gm(tmp0_desc);
    var tmp9_cached = Companion_getInstance_4().e1t_1;
    if (tmp8_input.wm()) {
      tmp4_local0 = tmp8_input.sm(tmp0_desc, 0, tmp9_cached[0], tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp8_input.qm(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp8_input.lm(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp8_input.um(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp8_input.xm(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp8_input.sm(tmp0_desc, 0, tmp9_cached[0], tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp8_input.qm(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp8_input.lm(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp8_input.um(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp8_input.hm(tmp0_desc);
    return StrokeItem_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, null);
  };
  protoOf($serializer_3).bj = function () {
    return this.f1t_1;
  };
  protoOf($serializer_3).pt = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [Companion_getInstance_4().e1t_1[0], StringSerializer_getInstance(), IntSerializer_getInstance(), get_nullable(StringSerializer_getInstance())];
  };
  var $serializer_instance_3;
  function $serializer_getInstance_3() {
    if ($serializer_instance_3 == null)
      new $serializer_3();
    return $serializer_instance_3;
  }
  function StrokeItem_init_$Init$(seen0, points, color, lineWidth, fill, serializationConstructorMarker, $this) {
    if (!(3 === (3 & seen0))) {
      throwMissingFieldException(seen0, 3, $serializer_getInstance_3().f1t_1);
    }
    Item_init_$Init$(seen0, serializationConstructorMarker, $this);
    $this.x1q_1 = points;
    $this.y1q_1 = color;
    if (0 === (seen0 & 4))
      $this.z1q_1 = 3;
    else
      $this.z1q_1 = lineWidth;
    if (0 === (seen0 & 8))
      $this.a1r_1 = null;
    else
      $this.a1r_1 = fill;
    return $this;
  }
  function StrokeItem_init_$Create$(seen0, points, color, lineWidth, fill, serializationConstructorMarker) {
    return StrokeItem_init_$Init$(seen0, points, color, lineWidth, fill, serializationConstructorMarker, objectCreate(protoOf(StrokeItem)));
  }
  function StrokeItem(points, color, lineWidth, fill) {
    Companion_getInstance_4();
    lineWidth = lineWidth === VOID ? 3 : lineWidth;
    fill = fill === VOID ? null : fill;
    Item.call(this);
    this.x1q_1 = points;
    this.y1q_1 = color;
    this.z1q_1 = lineWidth;
    this.a1r_1 = fill;
  }
  protoOf(StrokeItem).r1r = function (_set____db54di) {
    this.a1r_1 = _set____db54di;
  };
  protoOf(StrokeItem).q1r = function () {
    return this.a1r_1;
  };
  protoOf(StrokeItem).k1o = function (ctx) {
    if (this.x1q_1.l() < 2)
      return Unit_instance;
    roundStroke(ctx);
    ctx.beginPath();
    ctx.moveTo(this.x1q_1.n(0).z1p_1, this.x1q_1.n(0).a1q_1);
    var inductionVariable = 1;
    var last = this.x1q_1.l();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        ctx.lineTo(this.x1q_1.n(i).z1p_1, this.x1q_1.n(i).a1q_1);
      }
       while (inductionVariable < last);
    paint(ctx, this.a1r_1, this.y1q_1, this.z1q_1);
  };
  protoOf(StrokeItem).k1p = function (p) {
    var tmp;
    if (nearLine(this, p)) {
      tmp = true;
    } else {
      var tmp_0;
      // Inline function 'kotlin.text.isNullOrEmpty' call
      var this_0 = this.a1r_1;
      if (!(this_0 == null || charSequenceLength(this_0) === 0)) {
        tmp_0 = inside(this, p);
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(StrokeItem).p1r = function (p) {
    return nearLine(this, p) || inside(this, p);
  };
  protoOf(StrokeItem).s1q = function (dx, dy) {
    var inductionVariable = 0;
    var last = this.x1q_1.l() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var point = this.x1q_1.n(i);
        this.x1q_1.a2(i, new Point(point.z1p_1 + dx, point.a1q_1 + dy));
      }
       while (inductionVariable <= last);
  };
  function Companion_5() {
  }
  var Companion_instance_6;
  function Companion_getInstance_5() {
    return Companion_instance_6;
  }
  function $serializer_4() {
    $serializer_instance_4 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('rectangle', this, 7);
    tmp0_serialDesc.nt('x', false);
    tmp0_serialDesc.nt('y', false);
    tmp0_serialDesc.nt('width', false);
    tmp0_serialDesc.nt('height', false);
    tmp0_serialDesc.nt('color', false);
    tmp0_serialDesc.nt('lineWidth', true);
    tmp0_serialDesc.nt('fill', true);
    this.h1t_1 = tmp0_serialDesc;
  }
  protoOf($serializer_4).i1t = function (encoder, value) {
    var tmp0_desc = this.h1t_1;
    var tmp1_output = encoder.gm(tmp0_desc);
    tmp1_output.sn(tmp0_desc, 0, value.j1t_1);
    tmp1_output.sn(tmp0_desc, 1, value.k1t_1);
    tmp1_output.sn(tmp0_desc, 2, value.l1t_1);
    tmp1_output.sn(tmp0_desc, 3, value.m1t_1);
    tmp1_output.un(tmp0_desc, 4, value.n1t_1);
    if (tmp1_output.co(tmp0_desc, 5) ? true : !(value.o1t_1 === 3)) {
      tmp1_output.pn(tmp0_desc, 5, value.o1t_1);
    }
    if (tmp1_output.co(tmp0_desc, 6) ? true : !(value.p1t_1 == null)) {
      tmp1_output.yn(tmp0_desc, 6, StringSerializer_getInstance(), value.p1t_1);
    }
    tmp1_output.hm(tmp0_desc);
  };
  protoOf($serializer_4).cj = function (encoder, value) {
    return this.i1t(encoder, value instanceof RectangleItem ? value : THROW_CCE());
  };
  protoOf($serializer_4).dj = function (decoder) {
    var tmp0_desc = this.h1t_1;
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
    var tmp11_input = decoder.gm(tmp0_desc);
    if (tmp11_input.wm()) {
      tmp4_local0 = tmp11_input.om(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp11_input.om(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp11_input.om(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp11_input.om(tmp0_desc, 3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp11_input.qm(tmp0_desc, 4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp11_input.lm(tmp0_desc, 5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp11_input.um(tmp0_desc, 6, StringSerializer_getInstance(), tmp10_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp11_input.xm(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp11_input.om(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp11_input.om(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp11_input.om(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp11_input.om(tmp0_desc, 3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp11_input.qm(tmp0_desc, 4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp11_input.lm(tmp0_desc, 5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp11_input.um(tmp0_desc, 6, StringSerializer_getInstance(), tmp10_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp11_input.hm(tmp0_desc);
    return RectangleItem_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, null);
  };
  protoOf($serializer_4).bj = function () {
    return this.h1t_1;
  };
  protoOf($serializer_4).pt = function () {
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
  function RectangleItem_init_$Init$(seen0, x, y, width, height, color, lineWidth, fill, serializationConstructorMarker, $this) {
    if (!(31 === (31 & seen0))) {
      throwMissingFieldException(seen0, 31, $serializer_getInstance_4().h1t_1);
    }
    Item_init_$Init$(seen0, serializationConstructorMarker, $this);
    $this.j1t_1 = x;
    $this.k1t_1 = y;
    $this.l1t_1 = width;
    $this.m1t_1 = height;
    $this.n1t_1 = color;
    if (0 === (seen0 & 32))
      $this.o1t_1 = 3;
    else
      $this.o1t_1 = lineWidth;
    if (0 === (seen0 & 64))
      $this.p1t_1 = null;
    else
      $this.p1t_1 = fill;
    return $this;
  }
  function RectangleItem_init_$Create$(seen0, x, y, width, height, color, lineWidth, fill, serializationConstructorMarker) {
    return RectangleItem_init_$Init$(seen0, x, y, width, height, color, lineWidth, fill, serializationConstructorMarker, objectCreate(protoOf(RectangleItem)));
  }
  function RectangleItem(x, y, width, height, color, lineWidth, fill) {
    lineWidth = lineWidth === VOID ? 3 : lineWidth;
    fill = fill === VOID ? null : fill;
    Item.call(this);
    this.j1t_1 = x;
    this.k1t_1 = y;
    this.l1t_1 = width;
    this.m1t_1 = height;
    this.n1t_1 = color;
    this.o1t_1 = lineWidth;
    this.p1t_1 = fill;
  }
  protoOf(RectangleItem).a1t = function () {
    return this.j1t_1;
  };
  protoOf(RectangleItem).b1t = function () {
    return this.k1t_1;
  };
  protoOf(RectangleItem).c1t = function () {
    return this.l1t_1;
  };
  protoOf(RectangleItem).d1t = function () {
    return this.m1t_1;
  };
  protoOf(RectangleItem).r1r = function (_set____db54di) {
    this.p1t_1 = _set____db54di;
  };
  protoOf(RectangleItem).q1r = function () {
    return this.p1t_1;
  };
  protoOf(RectangleItem).k1o = function (ctx) {
    ctx.beginPath();
    ctx.rect(this.j1t_1, this.k1t_1, this.l1t_1, this.m1t_1);
    paint(ctx, this.p1t_1, this.n1t_1, this.o1t_1);
  };
  protoOf(RectangleItem).k1p = function (p) {
    var tmp;
    var containsLower = this.j1t_1;
    var containsUpper = this.j1t_1 + this.l1t_1;
    var containsArg = p.z1p_1;
    if (containsLower <= containsArg ? containsArg <= containsUpper : false) {
      var containsLower_0 = this.k1t_1;
      var containsUpper_0 = this.k1t_1 + this.m1t_1;
      var containsArg_0 = p.a1q_1;
      tmp = containsLower_0 <= containsArg_0 ? containsArg_0 <= containsUpper_0 : false;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(RectangleItem).s1q = function (dx, dy) {
    this.j1t_1 = this.j1t_1 + dx;
    this.k1t_1 = this.k1t_1 + dy;
  };
  function Companion_6() {
  }
  var Companion_instance_7;
  function Companion_getInstance_6() {
    return Companion_instance_7;
  }
  function $serializer_5() {
    $serializer_instance_5 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('circle', this, 7);
    tmp0_serialDesc.nt('x', false);
    tmp0_serialDesc.nt('y', false);
    tmp0_serialDesc.nt('width', false);
    tmp0_serialDesc.nt('height', false);
    tmp0_serialDesc.nt('color', false);
    tmp0_serialDesc.nt('lineWidth', true);
    tmp0_serialDesc.nt('fill', true);
    this.q1t_1 = tmp0_serialDesc;
  }
  protoOf($serializer_5).r1t = function (encoder, value) {
    var tmp0_desc = this.q1t_1;
    var tmp1_output = encoder.gm(tmp0_desc);
    tmp1_output.sn(tmp0_desc, 0, value.s1t_1);
    tmp1_output.sn(tmp0_desc, 1, value.t1t_1);
    tmp1_output.sn(tmp0_desc, 2, value.u1t_1);
    tmp1_output.sn(tmp0_desc, 3, value.v1t_1);
    tmp1_output.un(tmp0_desc, 4, value.w1t_1);
    if (tmp1_output.co(tmp0_desc, 5) ? true : !(value.x1t_1 === 3)) {
      tmp1_output.pn(tmp0_desc, 5, value.x1t_1);
    }
    if (tmp1_output.co(tmp0_desc, 6) ? true : !(value.y1t_1 == null)) {
      tmp1_output.yn(tmp0_desc, 6, StringSerializer_getInstance(), value.y1t_1);
    }
    tmp1_output.hm(tmp0_desc);
  };
  protoOf($serializer_5).cj = function (encoder, value) {
    return this.r1t(encoder, value instanceof CircleItem ? value : THROW_CCE());
  };
  protoOf($serializer_5).dj = function (decoder) {
    var tmp0_desc = this.q1t_1;
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
    var tmp11_input = decoder.gm(tmp0_desc);
    if (tmp11_input.wm()) {
      tmp4_local0 = tmp11_input.om(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp11_input.om(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp11_input.om(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp11_input.om(tmp0_desc, 3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp11_input.qm(tmp0_desc, 4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp11_input.lm(tmp0_desc, 5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp11_input.um(tmp0_desc, 6, StringSerializer_getInstance(), tmp10_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp11_input.xm(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp11_input.om(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp11_input.om(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp11_input.om(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp11_input.om(tmp0_desc, 3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp11_input.qm(tmp0_desc, 4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp11_input.lm(tmp0_desc, 5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp11_input.um(tmp0_desc, 6, StringSerializer_getInstance(), tmp10_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp11_input.hm(tmp0_desc);
    return CircleItem_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, null);
  };
  protoOf($serializer_5).bj = function () {
    return this.q1t_1;
  };
  protoOf($serializer_5).pt = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [DoubleSerializer_getInstance(), DoubleSerializer_getInstance(), DoubleSerializer_getInstance(), DoubleSerializer_getInstance(), StringSerializer_getInstance(), IntSerializer_getInstance(), get_nullable(StringSerializer_getInstance())];
  };
  var $serializer_instance_5;
  function $serializer_getInstance_5() {
    if ($serializer_instance_5 == null)
      new $serializer_5();
    return $serializer_instance_5;
  }
  function CircleItem_init_$Init$(seen0, x, y, width, height, color, lineWidth, fill, serializationConstructorMarker, $this) {
    if (!(31 === (31 & seen0))) {
      throwMissingFieldException(seen0, 31, $serializer_getInstance_5().q1t_1);
    }
    Item_init_$Init$(seen0, serializationConstructorMarker, $this);
    $this.s1t_1 = x;
    $this.t1t_1 = y;
    $this.u1t_1 = width;
    $this.v1t_1 = height;
    $this.w1t_1 = color;
    if (0 === (seen0 & 32))
      $this.x1t_1 = 3;
    else
      $this.x1t_1 = lineWidth;
    if (0 === (seen0 & 64))
      $this.y1t_1 = null;
    else
      $this.y1t_1 = fill;
    return $this;
  }
  function CircleItem_init_$Create$(seen0, x, y, width, height, color, lineWidth, fill, serializationConstructorMarker) {
    return CircleItem_init_$Init$(seen0, x, y, width, height, color, lineWidth, fill, serializationConstructorMarker, objectCreate(protoOf(CircleItem)));
  }
  function CircleItem(x, y, width, height, color, lineWidth, fill) {
    lineWidth = lineWidth === VOID ? 3 : lineWidth;
    fill = fill === VOID ? null : fill;
    Item.call(this);
    this.s1t_1 = x;
    this.t1t_1 = y;
    this.u1t_1 = width;
    this.v1t_1 = height;
    this.w1t_1 = color;
    this.x1t_1 = lineWidth;
    this.y1t_1 = fill;
  }
  protoOf(CircleItem).a1t = function () {
    return this.s1t_1;
  };
  protoOf(CircleItem).b1t = function () {
    return this.t1t_1;
  };
  protoOf(CircleItem).c1t = function () {
    return this.u1t_1;
  };
  protoOf(CircleItem).d1t = function () {
    return this.v1t_1;
  };
  protoOf(CircleItem).r1r = function (_set____db54di) {
    this.y1t_1 = _set____db54di;
  };
  protoOf(CircleItem).q1r = function () {
    return this.y1t_1;
  };
  protoOf(CircleItem).k1o = function (ctx) {
    ctx.beginPath();
    ctx.ellipse(get_centerX(this), get_centerY(this), this.u1t_1 / 2, this.v1t_1 / 2, 0.0, 0.0, 2 * 3.141592653589793);
    paint(ctx, this.y1t_1, this.w1t_1, this.x1t_1);
  };
  protoOf(CircleItem).k1p = function (p) {
    var radiusX = this.u1t_1 / 2;
    var radiusY = this.v1t_1 / 2;
    if (radiusX === 0.0 || radiusY === 0.0)
      return false;
    var nx = (p.z1p_1 - get_centerX(this)) / radiusX;
    var ny = (p.a1q_1 - get_centerY(this)) / radiusY;
    return nx * nx + ny * ny <= 1.0;
  };
  protoOf(CircleItem).s1q = function (dx, dy) {
    this.s1t_1 = this.s1t_1 + dx;
    this.t1t_1 = this.t1t_1 + dy;
  };
  function vertices($this) {
    var count = coerceAtLeast($this.d1u_1, 3);
    var tmp0 = $this.b1u_1;
    // Inline function 'kotlin.math.min' call
    var b = $this.c1u_1;
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
  function Companion_7() {
  }
  var Companion_instance_8;
  function Companion_getInstance_7() {
    return Companion_instance_8;
  }
  function $serializer_6() {
    $serializer_instance_6 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('polygon', this, 8);
    tmp0_serialDesc.nt('x', false);
    tmp0_serialDesc.nt('y', false);
    tmp0_serialDesc.nt('width', false);
    tmp0_serialDesc.nt('height', false);
    tmp0_serialDesc.nt('sides', false);
    tmp0_serialDesc.nt('color', false);
    tmp0_serialDesc.nt('lineWidth', true);
    tmp0_serialDesc.nt('fill', true);
    this.h1u_1 = tmp0_serialDesc;
  }
  protoOf($serializer_6).i1u = function (encoder, value) {
    var tmp0_desc = this.h1u_1;
    var tmp1_output = encoder.gm(tmp0_desc);
    tmp1_output.sn(tmp0_desc, 0, value.z1t_1);
    tmp1_output.sn(tmp0_desc, 1, value.a1u_1);
    tmp1_output.sn(tmp0_desc, 2, value.b1u_1);
    tmp1_output.sn(tmp0_desc, 3, value.c1u_1);
    tmp1_output.pn(tmp0_desc, 4, value.d1u_1);
    tmp1_output.un(tmp0_desc, 5, value.e1u_1);
    if (tmp1_output.co(tmp0_desc, 6) ? true : !(value.f1u_1 === 3)) {
      tmp1_output.pn(tmp0_desc, 6, value.f1u_1);
    }
    if (tmp1_output.co(tmp0_desc, 7) ? true : !(value.g1u_1 == null)) {
      tmp1_output.yn(tmp0_desc, 7, StringSerializer_getInstance(), value.g1u_1);
    }
    tmp1_output.hm(tmp0_desc);
  };
  protoOf($serializer_6).cj = function (encoder, value) {
    return this.i1u(encoder, value instanceof PolygonItem ? value : THROW_CCE());
  };
  protoOf($serializer_6).dj = function (decoder) {
    var tmp0_desc = this.h1u_1;
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
    var tmp12_input = decoder.gm(tmp0_desc);
    if (tmp12_input.wm()) {
      tmp4_local0 = tmp12_input.om(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp12_input.om(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp12_input.om(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp12_input.om(tmp0_desc, 3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp12_input.lm(tmp0_desc, 4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp12_input.qm(tmp0_desc, 5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp12_input.lm(tmp0_desc, 6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp11_local7 = tmp12_input.um(tmp0_desc, 7, StringSerializer_getInstance(), tmp11_local7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp12_input.xm(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp12_input.om(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp12_input.om(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp12_input.om(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp12_input.om(tmp0_desc, 3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp12_input.lm(tmp0_desc, 4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp12_input.qm(tmp0_desc, 5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp12_input.lm(tmp0_desc, 6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp11_local7 = tmp12_input.um(tmp0_desc, 7, StringSerializer_getInstance(), tmp11_local7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp12_input.hm(tmp0_desc);
    return PolygonItem_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, tmp11_local7, null);
  };
  protoOf($serializer_6).bj = function () {
    return this.h1u_1;
  };
  protoOf($serializer_6).pt = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [DoubleSerializer_getInstance(), DoubleSerializer_getInstance(), DoubleSerializer_getInstance(), DoubleSerializer_getInstance(), IntSerializer_getInstance(), StringSerializer_getInstance(), IntSerializer_getInstance(), get_nullable(StringSerializer_getInstance())];
  };
  var $serializer_instance_6;
  function $serializer_getInstance_6() {
    if ($serializer_instance_6 == null)
      new $serializer_6();
    return $serializer_instance_6;
  }
  function PolygonItem_init_$Init$(seen0, x, y, width, height, sides, color, lineWidth, fill, serializationConstructorMarker, $this) {
    if (!(63 === (63 & seen0))) {
      throwMissingFieldException(seen0, 63, $serializer_getInstance_6().h1u_1);
    }
    Item_init_$Init$(seen0, serializationConstructorMarker, $this);
    $this.z1t_1 = x;
    $this.a1u_1 = y;
    $this.b1u_1 = width;
    $this.c1u_1 = height;
    $this.d1u_1 = sides;
    $this.e1u_1 = color;
    if (0 === (seen0 & 64))
      $this.f1u_1 = 3;
    else
      $this.f1u_1 = lineWidth;
    if (0 === (seen0 & 128))
      $this.g1u_1 = null;
    else
      $this.g1u_1 = fill;
    return $this;
  }
  function PolygonItem_init_$Create$(seen0, x, y, width, height, sides, color, lineWidth, fill, serializationConstructorMarker) {
    return PolygonItem_init_$Init$(seen0, x, y, width, height, sides, color, lineWidth, fill, serializationConstructorMarker, objectCreate(protoOf(PolygonItem)));
  }
  function PolygonItem(x, y, width, height, sides, color, lineWidth, fill) {
    lineWidth = lineWidth === VOID ? 3 : lineWidth;
    fill = fill === VOID ? null : fill;
    Item.call(this);
    this.z1t_1 = x;
    this.a1u_1 = y;
    this.b1u_1 = width;
    this.c1u_1 = height;
    this.d1u_1 = sides;
    this.e1u_1 = color;
    this.f1u_1 = lineWidth;
    this.g1u_1 = fill;
  }
  protoOf(PolygonItem).a1t = function () {
    return this.z1t_1;
  };
  protoOf(PolygonItem).b1t = function () {
    return this.a1u_1;
  };
  protoOf(PolygonItem).c1t = function () {
    return this.b1u_1;
  };
  protoOf(PolygonItem).d1t = function () {
    return this.c1u_1;
  };
  protoOf(PolygonItem).r1r = function (_set____db54di) {
    this.g1u_1 = _set____db54di;
  };
  protoOf(PolygonItem).q1r = function () {
    return this.g1u_1;
  };
  protoOf(PolygonItem).k1o = function (ctx) {
    var points = vertices(this);
    ctx.beginPath();
    ctx.moveTo(points.n(0).z1p_1, points.n(0).a1q_1);
    var inductionVariable = 1;
    var last = points.l();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        ctx.lineTo(points.n(i).z1p_1, points.n(i).a1q_1);
      }
       while (inductionVariable < last);
    ctx.closePath();
    paint(ctx, this.g1u_1, this.e1u_1, this.f1u_1);
  };
  protoOf(PolygonItem).k1p = function (p) {
    var tmp0 = this.b1u_1;
    // Inline function 'kotlin.math.min' call
    var b = this.c1u_1;
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
        if (!(a.a1q_1 > p.a1q_1 === b_0.a1q_1 > p.a1q_1) && p.z1p_1 < (b_0.z1p_1 - a.z1p_1) * (p.a1q_1 - a.a1q_1) / (b_0.a1q_1 - a.a1q_1) + a.z1p_1) {
          inside = !inside;
        }
        previous = i;
      }
       while (inductionVariable <= last);
    return inside;
  };
  protoOf(PolygonItem).s1q = function (dx, dy) {
    this.z1t_1 = this.z1t_1 + dx;
    this.a1u_1 = this.a1u_1 + dy;
  };
  function Companion_8() {
  }
  var Companion_instance_9;
  function Companion_getInstance_8() {
    return Companion_instance_9;
  }
  function $serializer_7() {
    $serializer_instance_7 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('arrow', this, 6);
    tmp0_serialDesc.nt('startX', false);
    tmp0_serialDesc.nt('startY', false);
    tmp0_serialDesc.nt('endX', false);
    tmp0_serialDesc.nt('endY', false);
    tmp0_serialDesc.nt('color', false);
    tmp0_serialDesc.nt('lineWidth', true);
    this.j1u_1 = tmp0_serialDesc;
  }
  protoOf($serializer_7).k1u = function (encoder, value) {
    var tmp0_desc = this.j1u_1;
    var tmp1_output = encoder.gm(tmp0_desc);
    tmp1_output.sn(tmp0_desc, 0, value.l1u_1);
    tmp1_output.sn(tmp0_desc, 1, value.m1u_1);
    tmp1_output.sn(tmp0_desc, 2, value.n1u_1);
    tmp1_output.sn(tmp0_desc, 3, value.o1u_1);
    tmp1_output.un(tmp0_desc, 4, value.p1u_1);
    if (tmp1_output.co(tmp0_desc, 5) ? true : !(value.q1u_1 === 3)) {
      tmp1_output.pn(tmp0_desc, 5, value.q1u_1);
    }
    tmp1_output.hm(tmp0_desc);
  };
  protoOf($serializer_7).cj = function (encoder, value) {
    return this.k1u(encoder, value instanceof ArrowItem ? value : THROW_CCE());
  };
  protoOf($serializer_7).dj = function (decoder) {
    var tmp0_desc = this.j1u_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = 0.0;
    var tmp5_local1 = 0.0;
    var tmp6_local2 = 0.0;
    var tmp7_local3 = 0.0;
    var tmp8_local4 = null;
    var tmp9_local5 = 0;
    var tmp10_input = decoder.gm(tmp0_desc);
    if (tmp10_input.wm()) {
      tmp4_local0 = tmp10_input.om(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp10_input.om(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp10_input.om(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp10_input.om(tmp0_desc, 3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp10_input.qm(tmp0_desc, 4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp10_input.lm(tmp0_desc, 5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp10_input.xm(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp10_input.om(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp10_input.om(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp10_input.om(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp10_input.om(tmp0_desc, 3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp10_input.qm(tmp0_desc, 4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp10_input.lm(tmp0_desc, 5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp10_input.hm(tmp0_desc);
    return ArrowItem_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, null);
  };
  protoOf($serializer_7).bj = function () {
    return this.j1u_1;
  };
  protoOf($serializer_7).pt = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [DoubleSerializer_getInstance(), DoubleSerializer_getInstance(), DoubleSerializer_getInstance(), DoubleSerializer_getInstance(), StringSerializer_getInstance(), IntSerializer_getInstance()];
  };
  var $serializer_instance_7;
  function $serializer_getInstance_7() {
    if ($serializer_instance_7 == null)
      new $serializer_7();
    return $serializer_instance_7;
  }
  function ArrowItem_init_$Init$(seen0, startX, startY, endX, endY, color, lineWidth, serializationConstructorMarker, $this) {
    if (!(31 === (31 & seen0))) {
      throwMissingFieldException(seen0, 31, $serializer_getInstance_7().j1u_1);
    }
    Item_init_$Init$(seen0, serializationConstructorMarker, $this);
    $this.l1u_1 = startX;
    $this.m1u_1 = startY;
    $this.n1u_1 = endX;
    $this.o1u_1 = endY;
    $this.p1u_1 = color;
    if (0 === (seen0 & 32))
      $this.q1u_1 = 3;
    else
      $this.q1u_1 = lineWidth;
    return $this;
  }
  function ArrowItem_init_$Create$(seen0, startX, startY, endX, endY, color, lineWidth, serializationConstructorMarker) {
    return ArrowItem_init_$Init$(seen0, startX, startY, endX, endY, color, lineWidth, serializationConstructorMarker, objectCreate(protoOf(ArrowItem)));
  }
  function ArrowItem(startX, startY, endX, endY, color, lineWidth) {
    lineWidth = lineWidth === VOID ? 3 : lineWidth;
    Item.call(this);
    this.l1u_1 = startX;
    this.m1u_1 = startY;
    this.n1u_1 = endX;
    this.o1u_1 = endY;
    this.p1u_1 = color;
    this.q1u_1 = lineWidth;
  }
  protoOf(ArrowItem).k1o = function (ctx) {
    // Inline function 'kotlin.math.max' call
    var b = this.q1u_1 * 4.0;
    var headLength = Math.max(16.0, b);
    var tmp2 = this.o1u_1 - this.m1u_1;
    // Inline function 'kotlin.math.atan2' call
    var x = this.n1u_1 - this.l1u_1;
    var angle = Math.atan2(tmp2, x);
    var spread = 3.141592653589793 / 6;
    ctx.strokeStyle = this.p1u_1;
    ctx.lineWidth = this.q1u_1;
    roundStroke(ctx);
    ctx.beginPath();
    ctx.moveTo(this.l1u_1, this.m1u_1);
    ctx.lineTo(this.n1u_1, this.o1u_1);
    var tmp = this.n1u_1;
    // Inline function 'kotlin.math.cos' call
    var x_0 = angle - spread;
    var tmp_0 = tmp - headLength * Math.cos(x_0);
    var tmp_1 = this.o1u_1;
    // Inline function 'kotlin.math.sin' call
    var x_1 = angle - spread;
    var tmp$ret$3 = Math.sin(x_1);
    ctx.moveTo(tmp_0, tmp_1 - headLength * tmp$ret$3);
    ctx.lineTo(this.n1u_1, this.o1u_1);
    var tmp_2 = this.n1u_1;
    // Inline function 'kotlin.math.cos' call
    var x_2 = angle + spread;
    var tmp_3 = tmp_2 - headLength * Math.cos(x_2);
    var tmp_4 = this.o1u_1;
    // Inline function 'kotlin.math.sin' call
    var x_3 = angle + spread;
    var tmp$ret$5 = Math.sin(x_3);
    ctx.lineTo(tmp_3, tmp_4 - headLength * tmp$ret$5);
    ctx.stroke();
  };
  protoOf(ArrowItem).k1p = function (p) {
    return distanceToSegment(p, new Point(this.l1u_1, this.m1u_1), new Point(this.n1u_1, this.o1u_1)) <= hitRadius(this.q1u_1);
  };
  protoOf(ArrowItem).s1q = function (dx, dy) {
    this.l1u_1 = this.l1u_1 + dx;
    this.m1u_1 = this.m1u_1 + dy;
    this.n1u_1 = this.n1u_1 + dx;
    this.o1u_1 = this.o1u_1 + dy;
  };
  function fontSpec($this) {
    return '' + $this.k1r_1 + 'px sans-serif';
  }
  function lines($this) {
    return split($this.j1r_1, ['\n']);
  }
  function Companion_9() {
  }
  var Companion_instance_10;
  function Companion_getInstance_9() {
    return Companion_instance_10;
  }
  function $serializer_8() {
    $serializer_instance_8 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('text', this, 5);
    tmp0_serialDesc.nt('x', false);
    tmp0_serialDesc.nt('y', false);
    tmp0_serialDesc.nt('color', false);
    tmp0_serialDesc.nt('text', false);
    tmp0_serialDesc.nt('fontSize', true);
    this.r1u_1 = tmp0_serialDesc;
  }
  protoOf($serializer_8).s1u = function (encoder, value) {
    var tmp0_desc = this.r1u_1;
    var tmp1_output = encoder.gm(tmp0_desc);
    tmp1_output.sn(tmp0_desc, 0, value.g1r_1);
    tmp1_output.sn(tmp0_desc, 1, value.h1r_1);
    tmp1_output.un(tmp0_desc, 2, value.i1r_1);
    tmp1_output.un(tmp0_desc, 3, value.j1r_1);
    if (tmp1_output.co(tmp0_desc, 4) ? true : !(value.k1r_1 === 20)) {
      tmp1_output.pn(tmp0_desc, 4, value.k1r_1);
    }
    tmp1_output.hm(tmp0_desc);
  };
  protoOf($serializer_8).cj = function (encoder, value) {
    return this.s1u(encoder, value instanceof TextItem ? value : THROW_CCE());
  };
  protoOf($serializer_8).dj = function (decoder) {
    var tmp0_desc = this.r1u_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = 0.0;
    var tmp5_local1 = 0.0;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = 0;
    var tmp9_input = decoder.gm(tmp0_desc);
    if (tmp9_input.wm()) {
      tmp4_local0 = tmp9_input.om(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp9_input.om(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp9_input.qm(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp9_input.qm(tmp0_desc, 3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp9_input.lm(tmp0_desc, 4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp9_input.xm(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp9_input.om(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp9_input.om(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp9_input.qm(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp9_input.qm(tmp0_desc, 3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp9_input.lm(tmp0_desc, 4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp9_input.hm(tmp0_desc);
    return TextItem_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, null);
  };
  protoOf($serializer_8).bj = function () {
    return this.r1u_1;
  };
  protoOf($serializer_8).pt = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [DoubleSerializer_getInstance(), DoubleSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), IntSerializer_getInstance()];
  };
  var $serializer_instance_8;
  function $serializer_getInstance_8() {
    if ($serializer_instance_8 == null)
      new $serializer_8();
    return $serializer_instance_8;
  }
  function TextItem_init_$Init$(seen0, x, y, color, text, fontSize, serializationConstructorMarker, $this) {
    if (!(15 === (15 & seen0))) {
      throwMissingFieldException(seen0, 15, $serializer_getInstance_8().r1u_1);
    }
    Item_init_$Init$(seen0, serializationConstructorMarker, $this);
    $this.g1r_1 = x;
    $this.h1r_1 = y;
    $this.i1r_1 = color;
    $this.j1r_1 = text;
    if (0 === (seen0 & 16))
      $this.k1r_1 = 20;
    else
      $this.k1r_1 = fontSize;
    return $this;
  }
  function TextItem_init_$Create$(seen0, x, y, color, text, fontSize, serializationConstructorMarker) {
    return TextItem_init_$Init$(seen0, x, y, color, text, fontSize, serializationConstructorMarker, objectCreate(protoOf(TextItem)));
  }
  function TextItem(x, y, color, text, fontSize) {
    fontSize = fontSize === VOID ? 20 : fontSize;
    Item.call(this);
    this.g1r_1 = x;
    this.h1r_1 = y;
    this.i1r_1 = color;
    this.j1r_1 = text;
    this.k1r_1 = fontSize;
  }
  protoOf(TextItem).k1o = function (ctx) {
    // Inline function 'kotlin.js.asDynamic' call
    ctx.textBaseline = 'top';
    ctx.font = fontSpec(this);
    ctx.fillStyle = this.i1r_1;
    var step = lineHeight(this.k1r_1);
    // Inline function 'kotlin.collections.forEachIndexed' call
    var index = 0;
    var _iterator__ex2g4s = lines(this).i();
    while (_iterator__ex2g4s.j()) {
      var item = _iterator__ex2g4s.k();
      var _unary__edvuaz = index;
      index = _unary__edvuaz + 1 | 0;
      // Inline function 'stickynode.model.TextItem.draw.<anonymous>' call
      var index_0 = checkIndexOverflow(_unary__edvuaz);
      ctx.fillText(item, this.g1r_1, this.h1r_1 + imul(index_0, step));
    }
  };
  protoOf(TextItem).k1p = function (p) {
    // Inline function 'kotlin.text.isEmpty' call
    var this_0 = this.j1r_1;
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
    var height = imul(lines_0.l(), lineHeight(this.k1r_1));
    var tmp;
    var containsLower = this.g1r_1;
    var containsUpper = this.g1r_1 + width;
    var containsArg = p.z1p_1;
    if (containsLower <= containsArg ? containsArg <= containsUpper : false) {
      var containsLower_0 = this.h1r_1;
      var containsUpper_0 = this.h1r_1 + height;
      var containsArg_0 = p.a1q_1;
      tmp = containsLower_0 <= containsArg_0 ? containsArg_0 <= containsUpper_0 : false;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(TextItem).s1q = function (dx, dy) {
    this.g1r_1 = this.g1r_1 + dx;
    this.h1r_1 = this.h1r_1 + dy;
  };
  function Companion_10() {
    Companion_instance_11 = this;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.t1u_1 = [new ArrayListSerializer(IntSerializer_getInstance()), null, null, null];
  }
  var Companion_instance_11;
  function Companion_getInstance_10() {
    if (Companion_instance_11 == null)
      new Companion_10();
    return Companion_instance_11;
  }
  function $serializer_9() {
    $serializer_instance_9 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('regionFill', this, 4);
    tmp0_serialDesc.nt('runs', false);
    tmp0_serialDesc.nt('color', false);
    tmp0_serialDesc.nt('offsetX', true);
    tmp0_serialDesc.nt('offsetY', true);
    this.u1u_1 = tmp0_serialDesc;
  }
  protoOf($serializer_9).v1u = function (encoder, value) {
    var tmp0_desc = this.u1u_1;
    var tmp1_output = encoder.gm(tmp0_desc);
    var tmp2_cached = Companion_getInstance_10().t1u_1;
    tmp1_output.wn(tmp0_desc, 0, tmp2_cached[0], value.s1r_1);
    tmp1_output.un(tmp0_desc, 1, value.t1r_1);
    if (tmp1_output.co(tmp0_desc, 2) ? true : !equals(value.u1r_1, 0.0)) {
      tmp1_output.sn(tmp0_desc, 2, value.u1r_1);
    }
    if (tmp1_output.co(tmp0_desc, 3) ? true : !equals(value.v1r_1, 0.0)) {
      tmp1_output.sn(tmp0_desc, 3, value.v1r_1);
    }
    tmp1_output.hm(tmp0_desc);
  };
  protoOf($serializer_9).cj = function (encoder, value) {
    return this.v1u(encoder, value instanceof RegionFillItem ? value : THROW_CCE());
  };
  protoOf($serializer_9).dj = function (decoder) {
    var tmp0_desc = this.u1u_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = 0.0;
    var tmp7_local3 = 0.0;
    var tmp8_input = decoder.gm(tmp0_desc);
    var tmp9_cached = Companion_getInstance_10().t1u_1;
    if (tmp8_input.wm()) {
      tmp4_local0 = tmp8_input.sm(tmp0_desc, 0, tmp9_cached[0], tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp8_input.qm(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp8_input.om(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp8_input.om(tmp0_desc, 3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp8_input.xm(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp8_input.sm(tmp0_desc, 0, tmp9_cached[0], tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp8_input.qm(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp8_input.om(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp8_input.om(tmp0_desc, 3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp8_input.hm(tmp0_desc);
    return RegionFillItem_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, null);
  };
  protoOf($serializer_9).bj = function () {
    return this.u1u_1;
  };
  protoOf($serializer_9).pt = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [Companion_getInstance_10().t1u_1[0], StringSerializer_getInstance(), DoubleSerializer_getInstance(), DoubleSerializer_getInstance()];
  };
  var $serializer_instance_9;
  function $serializer_getInstance_9() {
    if ($serializer_instance_9 == null)
      new $serializer_9();
    return $serializer_instance_9;
  }
  function RegionFillItem_init_$Init$(seen0, runs, color, offsetX, offsetY, serializationConstructorMarker, $this) {
    if (!(3 === (3 & seen0))) {
      throwMissingFieldException(seen0, 3, $serializer_getInstance_9().u1u_1);
    }
    Item_init_$Init$(seen0, serializationConstructorMarker, $this);
    $this.s1r_1 = runs;
    $this.t1r_1 = color;
    if (0 === (seen0 & 4))
      $this.u1r_1 = 0.0;
    else
      $this.u1r_1 = offsetX;
    if (0 === (seen0 & 8))
      $this.v1r_1 = 0.0;
    else
      $this.v1r_1 = offsetY;
    return $this;
  }
  function RegionFillItem_init_$Create$(seen0, runs, color, offsetX, offsetY, serializationConstructorMarker) {
    return RegionFillItem_init_$Init$(seen0, runs, color, offsetX, offsetY, serializationConstructorMarker, objectCreate(protoOf(RegionFillItem)));
  }
  function RegionFillItem(runs, color, offsetX, offsetY) {
    Companion_getInstance_10();
    offsetX = offsetX === VOID ? 0.0 : offsetX;
    offsetY = offsetY === VOID ? 0.0 : offsetY;
    Item.call(this);
    this.s1r_1 = runs;
    this.t1r_1 = color;
    this.u1r_1 = offsetX;
    this.v1r_1 = offsetY;
  }
  protoOf(RegionFillItem).k1o = function (ctx) {
    ctx.fillStyle = this.t1r_1;
    var i = 0;
    while (i < this.s1r_1.l()) {
      var y = this.s1r_1.n(i);
      var x0 = this.s1r_1.n(i + 1 | 0);
      var x1 = this.s1r_1.n(i + 2 | 0);
      ctx.fillRect(x0 + this.u1r_1 - 1, y + this.v1r_1 - 1, (x1 - x0 | 0) + 2 | 0, 3.0);
      i = i + 3 | 0;
    }
  };
  protoOf(RegionFillItem).k1p = function (p) {
    // Inline function 'kotlin.math.floor' call
    var x = p.a1q_1 - this.v1r_1;
    var tmp$ret$0 = Math.floor(x);
    var y = numberToInt(tmp$ret$0);
    // Inline function 'kotlin.math.floor' call
    var x_0 = p.z1p_1 - this.u1r_1;
    var tmp$ret$1 = Math.floor(x_0);
    var x_1 = numberToInt(tmp$ret$1);
    var i = 0;
    while (i < this.s1r_1.l()) {
      if (this.s1r_1.n(i) === y && x_1 >= this.s1r_1.n(i + 1 | 0) && x_1 < this.s1r_1.n(i + 2 | 0))
        return true;
      i = i + 3 | 0;
    }
    return false;
  };
  protoOf(RegionFillItem).s1q = function (dx, dy) {
    this.u1r_1 = this.u1r_1 + dx;
    this.v1r_1 = this.v1r_1 + dy;
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
  function pickImageFile($completion) {
    return pickFile('image/png,image/jpeg,image/gif,image/webp', $completion);
  }
  function pickFile(accept, $completion) {
    // Inline function 'kotlin.coroutines.suspendCoroutine.<anonymous>' call
    var safe = SafeContinuation_init_$Create$(intercepted($completion));
    // Inline function 'stickynode.storage.pickFile.<anonymous>' call
    var tmp = document.createElement('input');
    var input = tmp instanceof HTMLInputElement ? tmp : THROW_CCE();
    input.type = 'file';
    input.accept = accept;
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
    this.e1v_1 = content;
    this.f1v_1 = suggestedName;
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
              this.h1v_1 = {};
              var this_0 = ['.json'];
              this.h1v_1['application/json'] = this_0;
              this.i1v_1 = {};
              this.i1v_1.description = 'Sticky Node drawing';
              this.i1v_1.accept = this.h1v_1;
              this.j1v_1 = {};
              this.j1v_1.suggestedName = this.f1v_1;
              var this_1 = [this.i1v_1];
              this.j1v_1.types = this_1;
              this.c8_1 = 2;
              var this_2 = window.showSaveFilePicker(this.j1v_1);
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
            var this_3 = [this.e1v_1];
            var type = 'application/json';
            var o = {};
            o['type'] = type;
            tmp_0.k1v_1 = new Blob(this_3, o);
            var tmp_1 = this;
            tmp_1.l1v_1 = window.URL.createObjectURL(this.k1v_1);
            var tmp_2 = this;
            var tmp_3 = document.createElement('a');
            tmp_2.m1v_1 = tmp_3 instanceof HTMLAnchorElement ? tmp_3 : THROW_CCE();
            this.m1v_1.href = this.l1v_1;
            this.m1v_1.download = this.f1v_1;
            ensureNotNull(document.body).appendChild(this.m1v_1);
            this.m1v_1.click();
            this.m1v_1.remove();
            var tmp_4 = window;
            tmp_4.setTimeout(saveToFile$lambda(this.l1v_1), 1000);
            return Unit_instance;
          case 2:
            this.n1v_1 = suspendResult;
            this.c8_1 = 3;
            var this_4 = this.n1v_1.createWritable();
            suspendResult = await_0(this_4, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            this.o1v_1 = suspendResult;
            this.c8_1 = 4;
            var this_5 = this.o1v_1.write(this.e1v_1);
            suspendResult = await_0(this_5, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            this.c8_1 = 5;
            var this_6 = this.o1v_1.close();
            suspendResult = await_0(this_6, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 5:
            this.g1v_1 = suspendResult;
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
              tmp_6.g1v_1 = Unit_instance;
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
            suspendResult = pickFile('.json,application/json', this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.x1v_1 = suspendResult;
            var tmp_0 = this;
            var tmp_1;
            if (this.x1v_1 == null) {
              return null;
            } else {
              tmp_1 = this.x1v_1;
            }

            tmp_0.y1v_1 = tmp_1;
            this.c8_1 = 2;
            var this_0 = this.y1v_1.text();
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
  function decode($this, blob, $completion) {
    // Inline function 'kotlin.coroutines.suspendCoroutine.<anonymous>' call
    var safe = SafeContinuation_init_$Create$(intercepted($completion));
    // Inline function 'stickynode.storage.ImageCache.decode.<anonymous>' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.unsafeCast' call
    var url = window.URL.createObjectURL(blob);
    var tmp = document.createElement('img');
    var img = tmp instanceof HTMLImageElement ? tmp : THROW_CCE();
    img.addEventListener('load', ImageCache$decode$lambda(url, safe, img));
    img.addEventListener('error', ImageCache$decode$lambda_0(url, safe));
    img.src = url;
    return safe.u8();
  }
  function ImageCache$get$slambda($id, resultContinuation) {
    this.h1w_1 = $id;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(ImageCache$get$slambda).o1w = function ($this$launch, $completion) {
    var tmp = this.p1w($this$launch, $completion);
    tmp.e8_1 = Unit_instance;
    tmp.f8_1 = null;
    return tmp.k8();
  };
  protoOf(ImageCache$get$slambda).y8 = function (p1, $completion) {
    return this.o1w((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(ImageCache$get$slambda).k8 = function () {
    var suspendResult = this.e8_1;
    $sm: do
      try {
        var tmp = this.c8_1;
        switch (tmp) {
          case 0:
            this.d8_1 = 4;
            this.d8_1 = 3;
            var tmp_0 = this;
            tmp_0.k1w_1 = ImageCache_getInstance().f1o_1;
            var tmp_1 = this;
            tmp_1.l1w_1 = this.h1w_1;
            this.m1w_1 = ImageCache_getInstance();
            this.c8_1 = 1;
            suspendResult = fetchImageBlob(this.h1w_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.n1w_1 = suspendResult;
            this.c8_1 = 2;
            suspendResult = decode(this.m1w_1, this.n1w_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var tmp2 = suspendResult;
            var this_0 = this.k1w_1;
            var key = this.l1w_1;
            this_0.d2(key, tmp2);
            var tmp_2 = this;
            var tmp0_safe_receiver = ImageCache_getInstance().i1o_1;
            tmp_2.j1w_1 = tmp0_safe_receiver == null ? null : tmp0_safe_receiver();
            this.d8_1 = 4;
            this.c8_1 = 5;
            continue $sm;
          case 3:
            this.d8_1 = 4;
            var tmp_3 = this.f8_1;
            if (tmp_3 instanceof Error) {
              var error = this.f8_1;
              var tmp_4 = this;
              console.warn("Couldn't load image " + this.h1w_1, error);
              tmp_4.j1w_1 = Unit_instance;
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
  protoOf(ImageCache$get$slambda).p1w = function ($this$launch, completion) {
    var i = new ImageCache$get$slambda(this.h1w_1, completion);
    i.i1w_1 = $this$launch;
    return i;
  };
  function ImageCache$get$slambda_0($id, resultContinuation) {
    var i = new ImageCache$get$slambda($id, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.o1w($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function ImageCache$decode$lambda($url, $c, $img) {
    return function (it) {
      // Inline function 'kotlin.js.asDynamic' call
      window.URL.revokeObjectURL($url);
      var tmp1 = $c;
      // Inline function 'kotlin.coroutines.resume' call
      // Inline function 'kotlin.Companion.success' call
      var value = $img;
      var tmp$ret$1 = _Result___init__impl__xyqfz8(value);
      tmp1.n8(tmp$ret$1);
      return Unit_instance;
    };
  }
  function ImageCache$decode$lambda_0($url, $c) {
    return function (it) {
      // Inline function 'kotlin.js.asDynamic' call
      window.URL.revokeObjectURL($url);
      var tmp1 = $c;
      // Inline function 'kotlin.coroutines.resumeWithException' call
      // Inline function 'kotlin.Companion.failure' call
      var exception = IllegalStateException_init_$Create$('Not a readable image');
      var tmp$ret$1 = _Result___init__impl__xyqfz8(createFailure(exception));
      tmp1.n8(tmp$ret$1);
      return Unit_instance;
    };
  }
  function $addCOROUTINE$2(_this__u8e3s4, id, file, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.y1w_1 = _this__u8e3s4;
    this.z1w_1 = id;
    this.a1x_1 = file;
  }
  protoOf($addCOROUTINE$2).k8 = function () {
    var suspendResult = this.e8_1;
    $sm: do
      try {
        var tmp = this.c8_1;
        switch (tmp) {
          case 0:
            this.d8_1 = 2;
            this.c8_1 = 1;
            suspendResult = decode(this.y1w_1, this.a1x_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var this_0 = suspendResult;
            var tmp0 = ImageCache_getInstance().f1o_1;
            var key = this.z1w_1;
            tmp0.d2(key, this_0);
            return this_0;
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
  function ImageCache() {
    ImageCache_instance = this;
    this.f1o_1 = HashMap_init_$Create$();
    this.g1o_1 = HashSet_init_$Create$();
    this.h1o_1 = MainScope();
    this.i1o_1 = null;
  }
  protoOf(ImageCache).s14 = function (id) {
    var tmp0_safe_receiver = this.f1o_1.u1(id);
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      return tmp0_safe_receiver;
    }
    if (!isConfigured() || !this.g1o_1.d(id))
      return null;
    launch(this.h1o_1, VOID, VOID, ImageCache$get$slambda_0(id, null));
    return null;
  };
  protoOf(ImageCache).b1x = function (id, file, $completion) {
    var tmp = new $addCOROUTINE$2(this, id, file, $completion);
    tmp.e8_1 = Unit_instance;
    tmp.f8_1 = null;
    return tmp.k8();
  };
  var ImageCache_instance;
  function ImageCache_getInstance() {
    if (ImageCache_instance == null)
      new ImageCache();
    return ImageCache_instance;
  }
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
  function isConfigured() {
    return !(localStorage.getItem('stickyNode.serverUrl') == null) && !(localStorage.getItem('stickyNode.serverToken') == null);
  }
  function ensureConfigured() {
    return isConfigured() || configureServer();
  }
  function sendAndRead(path, method, body, contentType, read, $completion) {
    method = method === VOID ? 'GET' : method;
    body = body === VOID ? null : body;
    contentType = contentType === VOID ? null : contentType;
    var tmp = new $sendAndReadCOROUTINE$3(path, method, body, contentType, read, $completion);
    tmp.e8_1 = Unit_instance;
    tmp.f8_1 = null;
    return tmp.k8();
  }
  function request(path, method, body, $completion) {
    method = method === VOID ? 'GET' : method;
    body = body === VOID ? null : body;
    return sendAndRead(path, method, body, 'text/plain', request$lambda, $completion);
  }
  function encodePathSegment(value) {
    // Inline function 'kotlin.js.unsafeCast' call
    return encodeURIComponent(value);
  }
  function request$lambda(it) {
    // Inline function 'kotlin.js.unsafeCast' call
    return it.text();
  }
  function $sendAndReadCOROUTINE$3(path, method, body, contentType, read, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.k1x_1 = path;
    this.l1x_1 = method;
    this.m1x_1 = body;
    this.n1x_1 = contentType;
    this.o1x_1 = read;
  }
  protoOf($sendAndReadCOROUTINE$3).k8 = function () {
    var suspendResult = this.e8_1;
    $sm: do
      try {
        var tmp = this.c8_1;
        switch (tmp) {
          case 0:
            this.d8_1 = 3;
            if (!ensureConfigured())
              throw IllegalStateException_init_$Create$('Server not configured');
            this.p1x_1 = localStorage.getItem('stickyNode.serverUrl');
            this.q1x_1 = localStorage.getItem('stickyNode.serverToken');
            this.r1x_1 = {};
            this.r1x_1['Authorization'] = 'Bearer ' + this.q1x_1;
            this.s1x_1 = {};
            this.s1x_1.method = this.l1x_1;
            this.s1x_1.headers = this.r1x_1;
            if (this.m1x_1 != null) {
              if (!(this.n1x_1 == null)) {
                this.r1x_1['Content-Type'] = this.n1x_1;
              }
              this.s1x_1.body = this.m1x_1;
            }

            this.c8_1 = 1;
            var this_0 = window.fetch(plus(this.p1x_1, this.k1x_1), this.s1x_1);
            suspendResult = await_0(this_0, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.t1x_1 = suspendResult;
            if (this.t1x_1.ok != true) {
              if (this.t1x_1.status == 401)
                throw IllegalStateException_init_$Create$('Wrong token (use Server Settings)');
              throw IllegalStateException_init_$Create$('Server error ' + this.t1x_1.status);
            }

            this.c8_1 = 2;
            suspendResult = await_0(this.o1x_1(this.t1x_1), this);
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
  function listServerDrawings($completion) {
    var tmp = new $listServerDrawingsCOROUTINE$4($completion);
    tmp.e8_1 = Unit_instance;
    tmp.f8_1 = null;
    return tmp.k8();
  }
  function loadFromServer(name, $completion) {
    return request('/api/drawings/' + encodePathSegment(name), VOID, VOID, $completion);
  }
  function saveToServer(name, content, $completion) {
    var tmp = new $saveToServerCOROUTINE$5(name, content, $completion);
    tmp.e8_1 = Unit_instance;
    tmp.f8_1 = null;
    return tmp.k8();
  }
  function $listServerDrawingsCOROUTINE$4(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf($listServerDrawingsCOROUTINE$4).k8 = function () {
    var suspendResult = this.e8_1;
    $sm: do
      try {
        var tmp = this.c8_1;
        switch (tmp) {
          case 0:
            this.d8_1 = 2;
            var tmp_0 = this;
            tmp_0.c1y_1 = Default_getInstance();
            this.c8_1 = 1;
            suspendResult = request('/api/drawings', VOID, VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var tmp1 = suspendResult;
            var this_0 = this.c1y_1;
            var this_1 = this_0.vm();
            var this_2 = serializer(this_1, createKType(getKClass(KtList), arrayOf([createInvariantKTypeProjection(createKType(PrimitiveClasses_getInstance().wa(), arrayOf([]), false))]), false));
            return this_0.o12(isInterface(this_2, KSerializer) ? this_2 : THROW_CCE(), tmp1);
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
  function $saveToServerCOROUTINE$5(name, content, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.l1y_1 = name;
    this.m1y_1 = content;
  }
  protoOf($saveToServerCOROUTINE$5).k8 = function () {
    var suspendResult = this.e8_1;
    $sm: do
      try {
        var tmp = this.c8_1;
        switch (tmp) {
          case 0:
            this.d8_1 = 2;
            this.c8_1 = 1;
            suspendResult = request('/api/drawings/' + encodePathSegment(this.l1y_1), 'PUT', this.m1y_1, this);
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
  function uploadImage(id, file, $completion) {
    var tmp = '/api/images/' + encodePathSegment(id);
    var tmp_0 = file.type;
    return sendAndRead(tmp, 'PUT', file, tmp_0, uploadImage$lambda, $completion);
  }
  function fetchImageBlob(id, $completion) {
    var tmp = '/api/images/' + encodePathSegment(id);
    return sendAndRead(tmp, VOID, VOID, VOID, fetchImageBlob$lambda, $completion);
  }
  function uploadImage$lambda(it) {
    return Promise.resolve(Unit_instance);
  }
  function fetchImageBlob$lambda(it) {
    // Inline function 'kotlin.js.unsafeCast' call
    return it.blob();
  }
  function migrateLegacy($this) {
    var tmp0 = $this.v1o_1;
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
    if (tmp$ret$0) {
      return new DecodedDrawing(emptyList(), '#ffffff');
    }
    var v1 = '{"app":"sticky-node","version":1,' + ('"strokeItems":' + migrateLegacy$list('drawingCanvasStrokes') + ',"rectangleItems":' + migrateLegacy$list('drawingCanvasRectangles') + ',') + ('"circleItems":' + migrateLegacy$list('drawingCanvasCircles') + ',"polygonItems":' + migrateLegacy$list('drawingCanvasPolygons') + ',') + ('"arrowItems":' + migrateLegacy$list('drawingCanvasArrows') + ',"textItems":' + migrateLegacy$list('drawingCanvasText') + '}');
    var drawing = decodeDrawingData(v1);
    $this.w1o(encodeDrawing(drawing.l1o_1, VOID, drawing.m1o_1));
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s_0 = $this.v1o_1.i();
    while (_iterator__ex2g4s_0.j()) {
      var element_0 = _iterator__ex2g4s_0.k();
      // Inline function 'stickynode.storage.Storage.migrateLegacy.<anonymous>' call
      localStorage.removeItem(element_0);
    }
    return drawing;
  }
  function migrateLegacy$list(key) {
    var tmp0_elvis_lhs = localStorage.getItem(key);
    return tmp0_elvis_lhs == null ? '[]' : tmp0_elvis_lhs;
  }
  function Storage() {
    Storage_instance = this;
    this.n1o_1 = 'stickyNode.drawing';
    this.o1o_1 = 'drawingCanvas';
    this.p1o_1 = 'drawingCanvasStrokes';
    this.q1o_1 = 'drawingCanvasRectangles';
    this.r1o_1 = 'drawingCanvasCircles';
    this.s1o_1 = 'drawingCanvasPolygons';
    this.t1o_1 = 'drawingCanvasArrows';
    this.u1o_1 = 'drawingCanvasText';
    this.v1o_1 = listOf(['drawingCanvas', 'drawingCanvasStrokes', 'drawingCanvasRectangles', 'drawingCanvasCircles', 'drawingCanvasPolygons', 'drawingCanvasArrows', 'drawingCanvasText']);
  }
  protoOf(Storage).g1p = function () {
    var tmp;
    try {
      var saved = localStorage.getItem('stickyNode.drawing');
      tmp = !(saved == null) ? decodeDrawingData(saved) : migrateLegacy(this);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var error = $p;
        console.warn("Couldn't restore the saved drawing", error);
        tmp_0 = new DecodedDrawing(emptyList(), '#ffffff');
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(Storage).w1o = function (snapshot) {
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
    var canvas = editor.q1n_1;
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
      if ($editor.a1o_1.j1q()) {
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
      var tool = $editor.a1o_1;
      var allowed = button === 0 || (button === 2 && tool.j1q());
      var tmp;
      if (!allowed) {
        return Unit_instance;
      }
      var tmp_0;
      if (tool.j1q()) {
        event.preventDefault();
        tmp_0 = Unit_instance;
      }
      var tmp_1;
      if (tool.s1p()) {
        tool.m1q($editor);
        tmp_1 = Unit_instance;
      }
      tool.k1q($editor, setupCanvasEvents$position($canvas, event), button);
      return Unit_instance;
    };
  }
  function setupCanvasEvents$lambda_1($editor, $canvas) {
    return function (e) {
      var event = e instanceof MouseEvent ? e : THROW_CCE();
      var tool = $editor.a1o_1;
      var tmp;
      if (!tool.s1p()) {
        return Unit_instance;
      }
      var tmp_0;
      if (event.buttons === 0) {
        tool.m1q($editor);
        tmp_0 = Unit_instance;
      } else {
        tool.l1q($editor, setupCanvasEvents$position($canvas, event));
        tmp_0 = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function setupCanvasEvents$lambda_2($editor) {
    return function (it) {
      $editor.a1o_1.m1q($editor);
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
    var tools = editor.z1n_1;
    onClick('drawButton', setupControls$lambda(editor, tools));
    onClick('rectangleButton', setupControls$lambda_0(editor, tools));
    onClick('circleButton', setupControls$lambda_1(editor, tools));
    onClick('arrowButton', setupControls$lambda_2(editor, tools));
    onClick('textButton', setupControls$lambda_3(editor, tools));
    onClick('fillButton', setupControls$lambda_4(editor, tools));
    onClick('eraserButton', setupControls$lambda_5(editor, tools));
    onClick('polygonButton', setupControls$lambda_6(editor, tools));
    var toolButtons = mapOf([to(tools.y1o_1, 'drawButton'), to(tools.c1p_1, 'rectangleButton'), to(tools.d1p_1, 'circleButton'), to(tools.e1p_1, 'polygonButton'), to(tools.f1p_1, 'arrowButton'), to(tools.a1p_1, 'textButton'), to(tools.b1p_1, 'fillButton'), to(tools.z1o_1, 'eraserButton')]);
    var tmp = editor;
    tmp.b1o_1 = setupControls$lambda_7(toolButtons);
    // Inline function 'stickynode.ui.byId' call
    var id = 'colorPicker';
    var tmp_0 = document.getElementById(id);
    var tmp0_safe_receiver = tmp_0 instanceof HTMLInputElement ? tmp_0 : null;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'stickynode.ui.setupControls.<anonymous>' call
      tmp0_safe_receiver.addEventListener('input', setupControls$lambda_8(editor, tmp0_safe_receiver));
    }
    // Inline function 'stickynode.ui.byId' call
    var id_0 = 'backgroundColorPicker';
    var tmp_1 = document.getElementById(id_0);
    var tmp1_safe_receiver = tmp_1 instanceof HTMLInputElement ? tmp_1 : null;
    if (tmp1_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'stickynode.ui.setupControls.<anonymous>' call
      tmp1_safe_receiver.value = editor.v1n_1;
      tmp1_safe_receiver.addEventListener('input', setupControls$lambda_9(editor, tmp1_safe_receiver));
    }
    bindRange('lineWidthInput', 'lineWidthValue', setupControls$lambda_10(editor));
    bindRange('fontSizeInput', 'fontSizeValue', setupControls$lambda_11(editor));
    onClick('undoButton', setupControls$lambda_12(editor));
    onClick('redoButton', setupControls$lambda_13(editor));
    onClick('clearButton', setupControls$lambda_14(editor));
    onClick('saveFileButton', setupControls$lambda_15(editor));
    onClick('openFileButton', setupControls$lambda_16(editor));
    setupServerControls(editor, get_scope());
    setupImageControls(editor, get_scope());
    var tmp_2 = document;
    tmp_2.addEventListener('keydown', setupControls$lambda_17(editor));
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
      $editor.h1p($tools.y1o_1);
      return Unit_instance;
    };
  }
  function setupControls$lambda_0($editor, $tools) {
    return function () {
      $editor.h1p($tools.c1p_1);
      return Unit_instance;
    };
  }
  function setupControls$lambda_1($editor, $tools) {
    return function () {
      $editor.h1p($tools.d1p_1);
      return Unit_instance;
    };
  }
  function setupControls$lambda_2($editor, $tools) {
    return function () {
      $editor.h1p($tools.f1p_1);
      return Unit_instance;
    };
  }
  function setupControls$lambda_3($editor, $tools) {
    return function () {
      $editor.h1p($tools.a1p_1);
      return Unit_instance;
    };
  }
  function setupControls$lambda_4($editor, $tools) {
    return function () {
      $editor.h1p($tools.b1p_1);
      return Unit_instance;
    };
  }
  function setupControls$lambda_5($editor, $tools) {
    return function () {
      $editor.h1p($editor.a1o_1 === $tools.z1o_1 ? $tools.y1o_1 : $tools.z1o_1);
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
        $editor.y1n_1 = sides;
        $editor.h1p($tools.e1p_1);
        tmp_0 = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function setupControls$lambda_7($toolButtons) {
    return function (tool) {
      // Inline function 'kotlin.collections.iterator' call
      var _iterator__ex2g4s = $toolButtons.x1().i();
      while (_iterator__ex2g4s.j()) {
        var element = _iterator__ex2g4s.k();
        // Inline function 'stickynode.ui.setupControls.<anonymous>.<anonymous>' call
        // Inline function 'kotlin.collections.component1' call
        var t = element.q1();
        // Inline function 'kotlin.collections.component2' call
        var id = element.r1();
        var tmp0_safe_receiver = document.getElementById(id);
        var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.classList;
        if (tmp1_safe_receiver == null)
          null;
        else
          tmp1_safe_receiver.toggle('active', t === tool);
      }
      return Unit_instance;
    };
  }
  function setupControls$lambda_8($editor, $picker) {
    return function (it) {
      $editor.u1n_1 = $picker.value;
      return Unit_instance;
    };
  }
  function setupControls$lambda_9($editor, $picker) {
    return function (it) {
      $editor.y1p($picker.value);
      return Unit_instance;
    };
  }
  function setupControls$lambda_10($editor) {
    return function (it) {
      $editor.w1n_1 = it;
      return Unit_instance;
    };
  }
  function setupControls$lambda_11($editor) {
    return function (it) {
      $editor.x1n_1 = it;
      return Unit_instance;
    };
  }
  function setupControls$lambda_12($editor) {
    return function () {
      $editor.q1p();
      return Unit_instance;
    };
  }
  function setupControls$lambda_13($editor) {
    return function () {
      $editor.t1p();
      return Unit_instance;
    };
  }
  function setupControls$lambda_14($editor) {
    return function () {
      $editor.z1();
      return Unit_instance;
    };
  }
  function setupControls$lambda$slambda($editor, resultContinuation) {
    this.v1y_1 = $editor;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(setupControls$lambda$slambda).o1w = function ($this$launch, $completion) {
    var tmp = this.p1w($this$launch, $completion);
    tmp.e8_1 = Unit_instance;
    tmp.f8_1 = null;
    return tmp.k8();
  };
  protoOf(setupControls$lambda$slambda).y8 = function (p1, $completion) {
    return this.o1w((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
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
            suspendResult = saveToFile(this.v1y_1.x1p(), VOID, this);
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
  protoOf(setupControls$lambda$slambda).p1w = function ($this$launch, completion) {
    var i = new setupControls$lambda$slambda(this.v1y_1, completion);
    i.w1y_1 = $this$launch;
    return i;
  };
  function setupControls$lambda$slambda_0($editor, resultContinuation) {
    var i = new setupControls$lambda$slambda($editor, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.o1w($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function setupControls$lambda_15($editor) {
    return function () {
      var tmp = get_scope();
      launch(tmp, VOID, VOID, setupControls$lambda$slambda_0($editor, null));
      return Unit_instance;
    };
  }
  function setupControls$lambda$slambda_1($editor, resultContinuation) {
    this.f1z_1 = $editor;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(setupControls$lambda$slambda_1).o1w = function ($this$launch, $completion) {
    var tmp = this.p1w($this$launch, $completion);
    tmp.e8_1 = Unit_instance;
    tmp.f8_1 = null;
    return tmp.k8();
  };
  protoOf(setupControls$lambda$slambda_1).y8 = function (p1, $completion) {
    return this.o1w((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
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
            var drawing = decodeDrawingData(text);
            this.f1z_1.v1p(drawing.l1o_1, drawing.m1o_1);
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
  protoOf(setupControls$lambda$slambda_1).p1w = function ($this$launch, completion) {
    var i = new setupControls$lambda$slambda_1(this.f1z_1, completion);
    i.g1z_1 = $this$launch;
    return i;
  };
  function setupControls$lambda$slambda_2($editor, resultContinuation) {
    var i = new setupControls$lambda$slambda_1($editor, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.o1w($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function setupControls$lambda_16($editor) {
    return function () {
      var tmp = get_scope();
      launch(tmp, VOID, VOID, setupControls$lambda$slambda_2($editor, null));
      return Unit_instance;
    };
  }
  function setupControls$lambda_17($editor) {
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
            $editor.t1p();
            tmp_1 = Unit_instance;
          } else {
            $editor.q1p();
            tmp_1 = Unit_instance;
          }

          tmp_0 = tmp_1;
          break;
        case 'y':
          event.preventDefault();
          $editor.t1p();
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
  function setupImageControls(editor, scope) {
    onClick('addImageButton', setupImageControls$lambda(scope, editor));
  }
  function setupImageControls$lambda$slambda($editor, resultContinuation) {
    this.p1z_1 = $editor;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(setupImageControls$lambda$slambda).o1w = function ($this$launch, $completion) {
    var tmp = this.p1w($this$launch, $completion);
    tmp.e8_1 = Unit_instance;
    tmp.f8_1 = null;
    return tmp.k8();
  };
  protoOf(setupImageControls$lambda$slambda).y8 = function (p1, $completion) {
    return this.o1w((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(setupImageControls$lambda$slambda).k8 = function () {
    var suspendResult = this.e8_1;
    $sm: do
      try {
        var tmp = this.c8_1;
        switch (tmp) {
          case 0:
            this.d8_1 = 5;
            this.d8_1 = 4;
            this.c8_1 = 1;
            suspendResult = pickImageFile(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.r1z_1 = suspendResult;
            var tmp_0 = this;
            var tmp_1;
            if (this.r1z_1 == null) {
              return Unit_instance;
            } else {
              tmp_1 = this.r1z_1;
            }

            tmp_0.s1z_1 = tmp_1;
            var tmp_2 = this;
            var tmp_3;
            switch (this.s1z_1.type) {
              case 'image/png':
                tmp_3 = 'png';
                break;
              case 'image/jpeg':
                tmp_3 = 'jpg';
                break;
              case 'image/gif':
                tmp_3 = 'gif';
                break;
              case 'image/webp':
                tmp_3 = 'webp';
                break;
              default:
                throw IllegalArgumentException_init_$Create$('Use a PNG, JPEG, GIF or WebP image');
            }

            tmp_2.t1z_1 = tmp_3;
            if (numberToDouble(this.s1z_1.size) > 20971520) {
              throw IllegalArgumentException_init_$Create$('Image is larger than 20 MB');
            }

            this.u1z_1 = toString_0(Default_getInstance_0().yd().u2(1), 36) + '.' + this.t1z_1;
            this.c8_1 = 2;
            suspendResult = uploadImage(this.u1z_1, this.s1z_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.c8_1 = 3;
            suspendResult = ImageCache_getInstance().b1x(this.u1z_1, this.s1z_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            var img = suspendResult;
            var tmp0 = img.naturalWidth;
            var b = img.naturalHeight;
            var b_0 = 400.0 / Math.max(tmp0, b);
            var scale = Math.min(1.0, b_0);
            var w = img.naturalWidth * scale;
            var h = img.naturalHeight * scale;
            this.p1z_1.s1n_1.d(new ImageItem((this.p1z_1.q1n_1.width - w) / 2, (this.p1z_1.q1n_1.height - h) / 2, w, h, this.u1z_1));
            this.p1z_1.x1o();
            this.p1z_1.l1p();
            this.d8_1 = 5;
            this.c8_1 = 6;
            continue $sm;
          case 4:
            this.d8_1 = 5;
            var tmp_4 = this.f8_1;
            if (tmp_4 instanceof Error) {
              var error = this.f8_1;
              window.alert("Couldn't add the image: " + error.message);
              this.c8_1 = 6;
              continue $sm;
            } else {
              throw this.f8_1;
            }

          case 5:
            throw this.f8_1;
          case 6:
            this.d8_1 = 5;
            return Unit_instance;
        }
      } catch ($p) {
        var e = $p;
        if (this.d8_1 === 5) {
          throw e;
        } else {
          this.c8_1 = this.d8_1;
          this.f8_1 = e;
        }
      }
     while (true);
  };
  protoOf(setupImageControls$lambda$slambda).p1w = function ($this$launch, completion) {
    var i = new setupImageControls$lambda$slambda(this.p1z_1, completion);
    i.q1z_1 = $this$launch;
    return i;
  };
  function setupImageControls$lambda$slambda_0($editor, resultContinuation) {
    var i = new setupImageControls$lambda$slambda($editor, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.o1w($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function setupImageControls$lambda($scope, $editor) {
    return function () {
      launch($scope, VOID, VOID, setupImageControls$lambda$slambda_0($editor, null));
      return Unit_instance;
    };
  }
  function setupServerControls(editor, scope) {
    onClick('serverSettingsButton', setupServerControls$lambda);
    onClick('serverSaveButton', setupServerControls$lambda_0(scope, editor));
    onClick('serverOpenButton', setupServerControls$lambda_1(scope, editor));
  }
  function setupServerControls$lambda() {
    configureServer();
    return Unit_instance;
  }
  function setupServerControls$lambda$slambda($name, $editor, resultContinuation) {
    this.d20_1 = $name;
    this.e20_1 = $editor;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(setupServerControls$lambda$slambda).o1w = function ($this$launch, $completion) {
    var tmp = this.p1w($this$launch, $completion);
    tmp.e8_1 = Unit_instance;
    tmp.f8_1 = null;
    return tmp.k8();
  };
  protoOf(setupServerControls$lambda$slambda).y8 = function (p1, $completion) {
    return this.o1w((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(setupServerControls$lambda$slambda).k8 = function () {
    var suspendResult = this.e8_1;
    $sm: do
      try {
        var tmp = this.c8_1;
        switch (tmp) {
          case 0:
            this.d8_1 = 3;
            this.d8_1 = 2;
            this.c8_1 = 1;
            suspendResult = saveToServer(this.d20_1, this.e20_1.x1p(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            window.alert('Saved "' + this.d20_1 + '" to the server.');
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
  protoOf(setupServerControls$lambda$slambda).p1w = function ($this$launch, completion) {
    var i = new setupServerControls$lambda$slambda(this.d20_1, this.e20_1, completion);
    i.f20_1 = $this$launch;
    return i;
  };
  function setupServerControls$lambda$slambda_0($name, $editor, resultContinuation) {
    var i = new setupServerControls$lambda$slambda($name, $editor, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.o1w($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function setupServerControls$lambda_0($scope, $editor) {
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
      launch($scope, VOID, VOID, setupServerControls$lambda$slambda_0(name, $editor, null));
      return Unit_instance;
    };
  }
  function setupServerControls$lambda$slambda_1($editor, resultContinuation) {
    this.o20_1 = $editor;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(setupServerControls$lambda$slambda_1).o1w = function ($this$launch, $completion) {
    var tmp = this.p1w($this$launch, $completion);
    tmp.e8_1 = Unit_instance;
    tmp.f8_1 = null;
    return tmp.k8();
  };
  protoOf(setupServerControls$lambda$slambda_1).y8 = function (p1, $completion) {
    return this.o1w((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(setupServerControls$lambda$slambda_1).k8 = function () {
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
            this.q20_1 = suspendResult;
            if (this.q20_1.m()) {
              window.alert('No saved drawings on the server yet.');
              return Unit_instance;
            }

            var tmp_0 = this;
            var tmp0_safe_receiver = window.prompt('Open which drawing?\n\n' + joinToString(this.q20_1, '\n'), first(this.q20_1));
            var tmp_1;
            if (tmp0_safe_receiver == null) {
              tmp_1 = null;
            } else {
              tmp_1 = toString(trim(isCharSequence(tmp0_safe_receiver) ? tmp0_safe_receiver : THROW_CCE()));
            }

            tmp_0.r20_1 = tmp_1;
            var this_0 = this.r20_1;
            if (this_0 == null || charSequenceLength(this_0) === 0)
              return Unit_instance;
            this.c8_1 = 2;
            suspendResult = loadFromServer(this.r20_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var ARGUMENT = suspendResult;
            var ARGUMENT_0 = decodeDrawing(ARGUMENT);
            this.o20_1.w1p(ARGUMENT_0);
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
  protoOf(setupServerControls$lambda$slambda_1).p1w = function ($this$launch, completion) {
    var i = new setupServerControls$lambda$slambda_1(this.o20_1, completion);
    i.p20_1 = $this$launch;
    return i;
  };
  function setupServerControls$lambda$slambda_2($editor, resultContinuation) {
    var i = new setupServerControls$lambda$slambda_1($editor, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.o1w($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function setupServerControls$lambda_1($scope, $editor) {
    return function () {
      launch($scope, VOID, VOID, setupServerControls$lambda$slambda_2($editor, null));
      return Unit_instance;
    };
  }
  //region block: post-declaration
  protoOf(FreehandTool).j1q = get_claimsMouse;
  protoOf(ShapeTool).j1q = get_claimsMouse;
  protoOf(FillTool).s1p = get_busy;
  protoOf(FillTool).i1p = cancel;
  protoOf(EraserTool).j1q = get_claimsMouse;
  protoOf($serializer).qt = typeParametersSerializers;
  protoOf($serializer_0).qt = typeParametersSerializers;
  protoOf($serializer_1).qt = typeParametersSerializers;
  protoOf($serializer_2).qt = typeParametersSerializers;
  protoOf($serializer_3).qt = typeParametersSerializers;
  protoOf($serializer_4).qt = typeParametersSerializers;
  protoOf($serializer_5).qt = typeParametersSerializers;
  protoOf($serializer_6).qt = typeParametersSerializers;
  protoOf($serializer_7).qt = typeParametersSerializers;
  protoOf($serializer_8).qt = typeParametersSerializers;
  protoOf($serializer_9).qt = typeParametersSerializers;
  //endregion
  //region block: init
  TextBox_instance = new TextBox();
  Companion_instance_2 = new Companion_1();
  Companion_instance_3 = new Companion_2();
  Companion_instance_6 = new Companion_5();
  Companion_instance_7 = new Companion_6();
  Companion_instance_8 = new Companion_7();
  Companion_instance_9 = new Companion_8();
  Companion_instance_10 = new Companion_9();
  //endregion
  mainWrapper();
  return _;
}));

//# sourceMappingURL=sticky-node.js.map
