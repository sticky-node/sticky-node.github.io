(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './kotlinx-coroutines-core.js', './kotlinx-serialization-kotlinx-serialization-core.js', './kotlinx-serialization-kotlinx-serialization-json.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./kotlinx-coroutines-core.js'), require('./kotlinx-serialization-kotlinx-serialization-core.js'), require('./kotlinx-serialization-kotlinx-serialization-json.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'sticky-node'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'sticky-node'.");
    }
    if (typeof globalThis['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'sticky-node'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'sticky-node'.");
    }
    if (typeof globalThis['kotlinx-serialization-kotlinx-serialization-core'] === 'undefined') {
      throw new Error("Error loading module 'sticky-node'. Its dependency 'kotlinx-serialization-kotlinx-serialization-core' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-core' is loaded prior to 'sticky-node'.");
    }
    if (typeof globalThis['kotlinx-serialization-kotlinx-serialization-json'] === 'undefined') {
      throw new Error("Error loading module 'sticky-node'. Its dependency 'kotlinx-serialization-kotlinx-serialization-json' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-json' is loaded prior to 'sticky-node'.");
    }
    globalThis['sticky-node'] = factory(typeof globalThis['sticky-node'] === 'undefined' ? {} : globalThis['sticky-node'], globalThis['kotlin-kotlin-stdlib'], globalThis['kotlinx-coroutines-core'], globalThis['kotlinx-serialization-kotlinx-serialization-core'], globalThis['kotlinx-serialization-kotlinx-serialization-json']);
  }
}(function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var hypot = Math.hypot;
  var THROW_CCE = kotlin_kotlin.$_$.e6;
  var Unit_instance = kotlin_kotlin.$_$.s1;
  var ensureNotNull = kotlin_kotlin.$_$.k6;
  var CoroutineImpl = kotlin_kotlin.$_$.r3;
  var protoOf = kotlin_kotlin.$_$.w4;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.b;
  var isInterface = kotlin_kotlin.$_$.p4;
  var VOID = kotlin_kotlin.$_$.c;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.c3;
  var initMetadataForLambda = kotlin_kotlin.$_$.m4;
  var MainScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.c;
  var launch = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.d;
  var toDouble = kotlin_kotlin.$_$.s5;
  var numberToInt = kotlin_kotlin.$_$.t4;
  var toDoubleOrNull = kotlin_kotlin.$_$.r5;
  var initMetadataForClass = kotlin_kotlin.$_$.i4;
  var ArrayListSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.a1;
  var initMetadataForCompanion = kotlin_kotlin.$_$.j4;
  var PluginGeneratedSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.g1;
  var emptyList = kotlin_kotlin.$_$.g2;
  var equals = kotlin_kotlin.$_$.b4;
  var UnknownFieldException_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.b;
  var StringSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.k;
  var IntSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.j;
  var typeParametersSerializers = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.c1;
  var GeneratedSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.d1;
  var initMetadataForObject = kotlin_kotlin.$_$.n4;
  var throwMissingFieldException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.i1;
  var objectCreate = kotlin_kotlin.$_$.v4;
  var Exception_init_$Create$ = kotlin_kotlin.$_$.t;
  var isBlank = kotlin_kotlin.$_$.k5;
  var intercepted = kotlin_kotlin.$_$.e3;
  var SafeContinuation_init_$Create$ = kotlin_kotlin.$_$.p;
  var await_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.a;
  var Companion_instance = kotlin_kotlin.$_$.r1;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.l1;
  var initMetadataForCoroutine = kotlin_kotlin.$_$.k4;
  var Json = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.a;
  var mutableListOf = kotlin_kotlin.$_$.u2;
  var toMutableList = kotlin_kotlin.$_$.a3;
  var DoubleSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.i;
  var getNumberHashCode = kotlin_kotlin.$_$.e4;
  var get_nullable = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.m;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.g;
  var ListSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.l;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.z1;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.f;
  var get_lastIndex = kotlin_kotlin.$_$.q2;
  var asReversed = kotlin_kotlin.$_$.x1;
  var get_indices = kotlin_kotlin.$_$.n2;
  var Collection = kotlin_kotlin.$_$.u1;
  var getOrNull = kotlin_kotlin.$_$.j2;
  var charSequenceLength = kotlin_kotlin.$_$.z3;
  var split = kotlin_kotlin.$_$.n5;
  var NoSuchElementException_init_$Create$ = kotlin_kotlin.$_$.b1;
  var to = kotlin_kotlin.$_$.s6;
  var mapOf = kotlin_kotlin.$_$.t2;
  var checkIndexOverflow = kotlin_kotlin.$_$.y1;
  var drop = kotlin_kotlin.$_$.f2;
  var isCharSequence = kotlin_kotlin.$_$.o4;
  var trim = kotlin_kotlin.$_$.v5;
  var toString = kotlin_kotlin.$_$.z4;
  //endregion
  //region block: pre-declaration
  initMetadataForLambda(main$lambda$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(main$lambda$slambda_1, CoroutineImpl, VOID, [1]);
  initMetadataForClass(BoundingBox, 'BoundingBox');
  initMetadataForCompanion(Companion);
  initMetadataForObject($serializer, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(StickyDocument, 'StickyDocument', StickyDocument, VOID, VOID, VOID, VOID, {0: $serializer_getInstance});
  initMetadataForLambda(openFromFile$lambda$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForCoroutine($saveToFileCOROUTINE$0, CoroutineImpl);
  initMetadataForClass(History, 'History');
  initMetadataForCompanion(Companion_0);
  initMetadataForObject($serializer_0, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(Point, 'Point', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_0});
  initMetadataForCompanion(Companion_1);
  initMetadataForObject($serializer_1, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(Stroke, 'Stroke', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_1});
  initMetadataForCompanion(Companion_2);
  initMetadataForObject($serializer_2, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(TextItem, 'TextItem', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_2});
  initMetadataForCompanion(Companion_3);
  initMetadataForObject($serializer_3, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(RectangleItem, 'RectangleItem', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_3});
  initMetadataForCompanion(Companion_4);
  initMetadataForObject($serializer_4, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(CircleItem, 'CircleItem', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_4});
  initMetadataForCompanion(Companion_5);
  initMetadataForObject($serializer_5, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(PolygonItem, 'PolygonItem', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_5});
  initMetadataForCompanion(Companion_6);
  initMetadataForObject($serializer_6, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(ArrowItem, 'ArrowItem', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_6});
  initMetadataForCompanion(Companion_7);
  initMetadataForObject($serializer_7, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(Items, 'Items', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_7});
  initMetadataForClass(State, 'State', State);
  initMetadataForClass(Handlers, 'Handlers');
  initMetadataForClass(ShapeConfig, 'ShapeConfig');
  initMetadataForClass(TypedShapeConfig, 'TypedShapeConfig', VOID, ShapeConfig);
  //endregion
  function main() {
    var tmp = document.getElementById('drawingcanvas');
    var canvas = tmp instanceof HTMLCanvasElement ? tmp : THROW_CCE();
    var tmp_0 = canvas.getContext('2d', {willReadFrequently: true});
    var context = tmp_0 instanceof CanvasRenderingContext2D ? tmp_0 : THROW_CCE();
    var tmp_1 = document.createElement('canvas');
    var textCanvas = tmp_1 instanceof HTMLCanvasElement ? tmp_1 : THROW_CCE();
    var tmp_2 = textCanvas.getContext('2d');
    var textContext = tmp_2 instanceof CanvasRenderingContext2D ? tmp_2 : THROW_CCE();
    textCanvas.id = 'textcanvas';
    // Inline function 'kotlin.js.asDynamic' call
    canvas.after(textCanvas);
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    textCanvas.width = canvas.width;
    textCanvas.height = canvas.height;
    var syncTextCanvasPosition = main$lambda(textCanvas, canvas);
    syncTextCanvasPosition();
    var state = new State();
    loadCanvas(canvas, context, state);
    renderOverlay(textContext, state);
    var history = new History(state);
    var persist = main$lambda_0(canvas, state);
    var commit = main$lambda_1(persist, history);
    var isBusy = main$lambda_2(state);
    var applyHistory = main$lambda_3(isBusy, textContext, state, persist);
    var tmp_3 = window;
    tmp_3.addEventListener('resize', main$lambda_4(canvas, textCanvas, syncTextCanvasPosition, textContext, state));
    var tmp_4 = main$lambda_5(canvas, context, state, textContext, history);
    var tmp_5 = main$lambda_6(applyHistory, history);
    setupControls(state, tmp_4, tmp_5, main$lambda_7(applyHistory, history));
    var tmp_6 = ensureNotNull(document.getElementById('saveFileButton'));
    tmp_6.addEventListener('click', main$lambda_8(state));
    var tmp_7 = ensureNotNull(document.getElementById('openFileButton'));
    tmp_7.addEventListener('click', main$lambda_9(state, context, canvas, textContext, history));
    setupCanvasEvents(canvas, context, textContext, state, commit, renderOverlay$ref());
  }
  function main$lambda($textCanvas, $canvas) {
    return function () {
      $textCanvas.style.top = '' + $canvas.offsetTop + 'px';
      return Unit_instance;
    };
  }
  function main$lambda_0($canvas, $state) {
    return function () {
      saveCanvas($canvas, $state);
      return Unit_instance;
    };
  }
  function main$lambda_1($persist, $history) {
    return function () {
      $persist();
      $history.z12();
      return Unit_instance;
    };
  }
  function main$lambda_2($state) {
    return function () {
      return !($state.e13_1 == null) || !($state.n13_1 == null) || !($state.o13_1 == null) || !($state.p13_1 == null) || !($state.q13_1 == null) || !($state.r13_1 == null) || !($state.s13_1 == null) || !($state.t13_1 == null) || !($state.u13_1 == null);
    };
  }
  function main$lambda_3($isBusy, $textContext, $state, $persist) {
    return function (action) {
      var tmp;
      if (!$isBusy()) {
        var tmp_0;
        if (action()) {
          renderOverlay($textContext, $state);
          tmp_0 = $persist();
        }
        tmp = tmp_0;
      }
      return Unit_instance;
    };
  }
  function main$lambda_4($canvas, $textCanvas, $syncTextCanvasPosition, $textContext, $state) {
    return function (it) {
      $canvas.width = window.innerWidth;
      $canvas.height = window.innerHeight;
      $textCanvas.width = $canvas.width;
      $textCanvas.height = $canvas.height;
      $syncTextCanvasPosition();
      renderOverlay($textContext, $state);
      return Unit_instance;
    };
  }
  function main$lambda_5($canvas, $context, $state, $textContext, $history) {
    return function () {
      clearCanvas($canvas, $context, $state);
      renderOverlay($textContext, $state);
      $history.z12();
      return Unit_instance;
    };
  }
  function main$lambda$lambda($history) {
    return function () {
      return $history.z13();
    };
  }
  function main$lambda_6($applyHistory, $history) {
    return function () {
      $applyHistory(main$lambda$lambda($history));
      return Unit_instance;
    };
  }
  function main$lambda$lambda_0($history) {
    return function () {
      return $history.a14();
    };
  }
  function main$lambda_7($applyHistory, $history) {
    return function () {
      $applyHistory(main$lambda$lambda_0($history));
      return Unit_instance;
    };
  }
  function main$lambda$slambda($state, resultContinuation) {
    this.j14_1 = $state;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(main$lambda$slambda).l14 = function ($this$launch, $completion) {
    var tmp = this.m14($this$launch, $completion);
    tmp.l6_1 = Unit_instance;
    tmp.m6_1 = null;
    return tmp.r6();
  };
  protoOf(main$lambda$slambda).f7 = function (p1, $completion) {
    return this.l14((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(main$lambda$slambda).r6 = function () {
    var suspendResult = this.l6_1;
    $sm: do
      try {
        var tmp = this.j6_1;
        switch (tmp) {
          case 0:
            this.k6_1 = 2;
            this.j6_1 = 1;
            suspendResult = saveToFile(this.j14_1, VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_instance;
          case 2:
            throw this.m6_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.k6_1 === 2) {
          throw e;
        } else {
          this.j6_1 = this.k6_1;
          this.m6_1 = e;
        }
      }
     while (true);
  };
  protoOf(main$lambda$slambda).m14 = function ($this$launch, completion) {
    var i = new main$lambda$slambda(this.j14_1, completion);
    i.k14_1 = $this$launch;
    return i;
  };
  function main$lambda$slambda_0($state, resultContinuation) {
    var i = new main$lambda$slambda($state, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.l14($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function main$lambda_8($state) {
    return function (it) {
      var tmp = MainScope();
      launch(tmp, VOID, VOID, main$lambda$slambda_0($state, null));
      return Unit_instance;
    };
  }
  function main$lambda$slambda_1($state, $context, $canvas, $textContext, $history, resultContinuation) {
    this.v14_1 = $state;
    this.w14_1 = $context;
    this.x14_1 = $canvas;
    this.y14_1 = $textContext;
    this.z14_1 = $history;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(main$lambda$slambda_1).l14 = function ($this$launch, $completion) {
    var tmp = this.m14($this$launch, $completion);
    tmp.l6_1 = Unit_instance;
    tmp.m6_1 = null;
    return tmp.r6();
  };
  protoOf(main$lambda$slambda_1).f7 = function (p1, $completion) {
    return this.l14((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(main$lambda$slambda_1).r6 = function () {
    var suspendResult = this.l6_1;
    $sm: do
      try {
        var tmp = this.j6_1;
        switch (tmp) {
          case 0:
            this.k6_1 = 3;
            this.j6_1 = 1;
            suspendResult = openFromFile(this.v14_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            if (suspendResult) {
              this.w14_1.clearRect(0.0, 0.0, this.x14_1.width, this.x14_1.height);
              renderOverlay(this.y14_1, this.v14_1);
              saveCanvas(this.x14_1, this.v14_1);
              this.z14_1.z12();
              this.j6_1 = 2;
              continue $sm;
            } else {
              this.j6_1 = 2;
              continue $sm;
            }

          case 2:
            return Unit_instance;
          case 3:
            throw this.m6_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.k6_1 === 3) {
          throw e;
        } else {
          this.j6_1 = this.k6_1;
          this.m6_1 = e;
        }
      }
     while (true);
  };
  protoOf(main$lambda$slambda_1).m14 = function ($this$launch, completion) {
    var i = new main$lambda$slambda_1(this.v14_1, this.w14_1, this.x14_1, this.y14_1, this.z14_1, completion);
    i.a15_1 = $this$launch;
    return i;
  };
  function main$lambda$slambda_2($state, $context, $canvas, $textContext, $history, resultContinuation) {
    var i = new main$lambda$slambda_1($state, $context, $canvas, $textContext, $history, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.l14($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function main$lambda_9($state, $context, $canvas, $textContext, $history) {
    return function (it) {
      var tmp = MainScope();
      launch(tmp, VOID, VOID, main$lambda$slambda_2($state, $context, $canvas, $textContext, $history, null));
      return Unit_instance;
    };
  }
  function renderOverlay$ref() {
    var l = function (p0, p1) {
      renderOverlay(p0, p1);
      return Unit_instance;
    };
    l.callableName = 'renderOverlay';
    return l;
  }
  function mainWrapper() {
    main();
  }
  function setupControls(state, clearCanvas, undo, redo) {
    // Inline function 'stickynode.canvas.byId' call
    var id = 'clearButton';
    var tmp = document.getElementById(id);
    var tmp$ret$0 = tmp instanceof HTMLButtonElement ? tmp : null;
    var clearButton = ensureNotNull(tmp$ret$0);
    // Inline function 'stickynode.canvas.byId' call
    var id_0 = 'drawButton';
    var tmp_0 = document.getElementById(id_0);
    var drawButton = tmp_0 instanceof HTMLButtonElement ? tmp_0 : null;
    // Inline function 'stickynode.canvas.byId' call
    var id_1 = 'rectangleButton';
    var tmp_1 = document.getElementById(id_1);
    var tmp$ret$2 = tmp_1 instanceof HTMLButtonElement ? tmp_1 : null;
    var rectangleButton = ensureNotNull(tmp$ret$2);
    // Inline function 'stickynode.canvas.byId' call
    var id_2 = 'colorPicker';
    var tmp_2 = document.getElementById(id_2);
    var tmp$ret$3 = tmp_2 instanceof HTMLInputElement ? tmp_2 : null;
    var colorPicker = ensureNotNull(tmp$ret$3);
    // Inline function 'stickynode.canvas.byId' call
    var id_3 = 'eraserButton';
    var tmp_3 = document.getElementById(id_3);
    var tmp$ret$4 = tmp_3 instanceof HTMLButtonElement ? tmp_3 : null;
    var eraserButton = ensureNotNull(tmp$ret$4);
    // Inline function 'stickynode.canvas.byId' call
    var id_4 = 'textButton';
    var tmp_4 = document.getElementById(id_4);
    var tmp$ret$5 = tmp_4 instanceof HTMLButtonElement ? tmp_4 : null;
    var textButton = ensureNotNull(tmp$ret$5);
    // Inline function 'stickynode.canvas.byId' call
    var id_5 = 'circleButton';
    var tmp_5 = document.getElementById(id_5);
    var tmp$ret$6 = tmp_5 instanceof HTMLButtonElement ? tmp_5 : null;
    var circleButton = ensureNotNull(tmp$ret$6);
    // Inline function 'stickynode.canvas.byId' call
    var id_6 = 'arrowButton';
    var tmp_6 = document.getElementById(id_6);
    var arrowButton = tmp_6 instanceof HTMLButtonElement ? tmp_6 : null;
    // Inline function 'stickynode.canvas.byId' call
    var id_7 = 'fillButton';
    var tmp_7 = document.getElementById(id_7);
    var fillButton = tmp_7 instanceof HTMLButtonElement ? tmp_7 : null;
    // Inline function 'stickynode.canvas.byId' call
    var id_8 = 'polygonButton';
    var tmp_8 = document.getElementById(id_8);
    var tmp$ret$9 = tmp_8 instanceof HTMLButtonElement ? tmp_8 : null;
    var polygonButton = ensureNotNull(tmp$ret$9);
    // Inline function 'stickynode.canvas.byId' call
    var id_9 = 'polygonSidesInput';
    var tmp_9 = document.getElementById(id_9);
    var tmp$ret$10 = tmp_9 instanceof HTMLInputElement ? tmp_9 : null;
    var polygonSidesInput = ensureNotNull(tmp$ret$10);
    // Inline function 'stickynode.canvas.byId' call
    var id_10 = 'lineWidthInput';
    var tmp_10 = document.getElementById(id_10);
    var lineWidthInput = tmp_10 instanceof HTMLInputElement ? tmp_10 : null;
    var lineWidthValue = document.getElementById('lineWidthValue');
    // Inline function 'stickynode.canvas.byId' call
    var id_11 = 'fontSizeInput';
    var tmp_11 = document.getElementById(id_11);
    var fontSizeInput = tmp_11 instanceof HTMLInputElement ? tmp_11 : null;
    var fontSizeValue = document.getElementById('fontSizeValue');
    if (fontSizeInput == null)
      null;
    else {
      fontSizeInput.addEventListener('input', setupControls$lambda(state, fontSizeInput, fontSizeValue));
    }
    if (lineWidthInput == null)
      null;
    else {
      lineWidthInput.addEventListener('input', setupControls$lambda_0(state, lineWidthInput, lineWidthValue));
    }
    clearButton.addEventListener('click', setupControls$lambda_1(clearCanvas));
    if (drawButton == null)
      null;
    else {
      drawButton.addEventListener('click', setupControls$lambda_2(state, eraserButton));
    }
    rectangleButton.addEventListener('click', setupControls$lambda_3(state));
    colorPicker.addEventListener('input', setupControls$lambda_4(state, colorPicker));
    eraserButton.addEventListener('click', setupControls$lambda_5(state, eraserButton));
    textButton.addEventListener('click', setupControls$lambda_6(state));
    circleButton.addEventListener('click', setupControls$lambda_7(state));
    if (arrowButton == null)
      null;
    else {
      arrowButton.addEventListener('click', setupControls$lambda_8(state));
    }
    if (fillButton == null)
      null;
    else {
      fillButton.addEventListener('click', setupControls$lambda_9(state, eraserButton));
    }
    polygonButton.addEventListener('click', setupControls$lambda_10(polygonSidesInput, state));
    var tmp5_safe_receiver = document.getElementById('undoButton');
    if (tmp5_safe_receiver == null)
      null;
    else {
      tmp5_safe_receiver.addEventListener('click', setupControls$lambda_11(undo));
    }
    var tmp6_safe_receiver = document.getElementById('redoButton');
    if (tmp6_safe_receiver == null)
      null;
    else {
      tmp6_safe_receiver.addEventListener('click', setupControls$lambda_12(redo));
    }
    var tmp_12 = document;
    tmp_12.addEventListener('keydown', setupControls$lambda_13(undo, redo));
  }
  function setupControls$lambda($state, $fontSizeInput, $fontSizeValue) {
    return function (it) {
      $state.y13_1 = numberToInt(toDouble($fontSizeInput.value));
      var tmp0_safe_receiver = $fontSizeValue;
      if (tmp0_safe_receiver == null)
        null;
      else {
        tmp0_safe_receiver.textContent = $fontSizeInput.value;
      }
      return Unit_instance;
    };
  }
  function setupControls$lambda_0($state, $lineWidthInput, $lineWidthValue) {
    return function (it) {
      $state.x13_1 = numberToInt(toDouble($lineWidthInput.value));
      var tmp0_safe_receiver = $lineWidthValue;
      if (tmp0_safe_receiver == null)
        null;
      else {
        tmp0_safe_receiver.textContent = $lineWidthInput.value;
      }
      return Unit_instance;
    };
  }
  function setupControls$lambda_1($clearCanvas) {
    return function (it) {
      $clearCanvas();
      return Unit_instance;
    };
  }
  function setupControls$lambda_2($state, $eraserButton) {
    return function (it) {
      $state.a13_1 = 'draw';
      $state.c13_1 = false;
      $eraserButton.textContent = 'Eraser: Off';
      return Unit_instance;
    };
  }
  function setupControls$lambda_3($state) {
    return function (it) {
      $state.a13_1 = 'rectangle';
      $state.c13_1 = false;
      return Unit_instance;
    };
  }
  function setupControls$lambda_4($state, $colorPicker) {
    return function (it) {
      $state.b13_1 = $colorPicker.value;
      return Unit_instance;
    };
  }
  function setupControls$lambda_5($state, $eraserButton) {
    return function (it) {
      $state.a13_1 = 'draw';
      $state.c13_1 = !$state.c13_1;
      $eraserButton.textContent = $state.c13_1 ? 'Eraser: On' : 'Eraser: Off';
      return Unit_instance;
    };
  }
  function setupControls$lambda_6($state) {
    return function (it) {
      $state.a13_1 = 'text';
      $state.c13_1 = false;
      return Unit_instance;
    };
  }
  function setupControls$lambda_7($state) {
    return function (it) {
      $state.a13_1 = 'circle';
      $state.c13_1 = false;
      return Unit_instance;
    };
  }
  function setupControls$lambda_8($state) {
    return function (it) {
      $state.a13_1 = 'arrow';
      $state.c13_1 = false;
      return Unit_instance;
    };
  }
  function setupControls$lambda_9($state, $eraserButton) {
    return function (it) {
      $state.a13_1 = 'fill';
      $state.c13_1 = false;
      $eraserButton.textContent = 'Eraser: Off';
      return Unit_instance;
    };
  }
  function setupControls$lambda_10($polygonSidesInput, $state) {
    return function (it) {
      var tmp0_safe_receiver = toDoubleOrNull($polygonSidesInput.value);
      var sides = tmp0_safe_receiver == null ? null : numberToInt(tmp0_safe_receiver);
      var tmp;
      if (!(sides == null) && sides >= 3) {
        $state.m13_1 = sides;
        $state.a13_1 = 'polygon';
        $state.c13_1 = false;
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function setupControls$lambda_11($undo) {
    return function (it) {
      $undo();
      return Unit_instance;
    };
  }
  function setupControls$lambda_12($redo) {
    return function (it) {
      $redo();
      return Unit_instance;
    };
  }
  function setupControls$lambda_13($undo, $redo) {
    return function (e) {
      var event = e instanceof KeyboardEvent ? e : THROW_CCE();
      var tmp = event.target;
      var target = tmp instanceof Element ? tmp : null;
      var tmp_0;
      if (!(target == null)) {
        var tmp_1;
        if (target.tagName === 'TEXTAREA') {
          tmp_1 = true;
        } else {
          var tmp_2;
          if (target.tagName === 'INPUT') {
            tmp_2 = !((target instanceof HTMLInputElement ? target : THROW_CCE()).type === 'color');
          } else {
            tmp_2 = false;
          }
          tmp_1 = tmp_2;
        }
        tmp_0 = tmp_1;
      } else {
        tmp_0 = false;
      }
      var isTyping = tmp_0;
      var tmp_3;
      if (isTyping) {
        return Unit_instance;
      }
      var tmp_4;
      if (!(event.ctrlKey || event.metaKey)) {
        return Unit_instance;
      }
      // Inline function 'kotlin.text.lowercase' call
      // Inline function 'kotlin.js.asDynamic' call
      var key = event.key.toLowerCase();
      var tmp_5;
      if (key === 'z' && !event.shiftKey) {
        event.preventDefault();
        tmp_5 = $undo();
      } else if (key === 'z' && event.shiftKey || key === 'y') {
        event.preventDefault();
        tmp_5 = $redo();
      }
      return Unit_instance;
    };
  }
  function getMousePosition(canvas, event) {
    var rectangle = canvas.getBoundingClientRect();
    return new Point(event.clientX - rectangle.left, event.clientY - rectangle.top);
  }
  function BoundingBox(x, y, width, height) {
    this.b15_1 = x;
    this.c15_1 = y;
    this.d15_1 = width;
    this.e15_1 = height;
  }
  function getBoundingBox(start, end) {
    var tmp0 = start.f15_1;
    // Inline function 'kotlin.math.min' call
    var b = end.f15_1;
    var tmp = Math.min(tmp0, b);
    var tmp2 = start.g15_1;
    // Inline function 'kotlin.math.min' call
    var b_0 = end.g15_1;
    var tmp_0 = Math.min(tmp2, b_0);
    // Inline function 'kotlin.math.abs' call
    var x = end.f15_1 - start.f15_1;
    var tmp_1 = Math.abs(x);
    // Inline function 'kotlin.math.abs' call
    var x_0 = end.g15_1 - start.g15_1;
    var tmp$ret$3 = Math.abs(x_0);
    return new BoundingBox(tmp, tmp_0, tmp_1, tmp$ret$3);
  }
  function setupCanvasEvents(canvas, context, textContext, state, saveCanvas, renderOverlay) {
    var h = new Handlers(canvas, context, textContext, state, saveCanvas, renderOverlay);
    canvas.addEventListener('contextmenu', setupCanvasEvents$lambda(state));
    canvas.addEventListener('mousedown', setupCanvasEvents$lambda_0(canvas, state, h, saveCanvas));
    canvas.addEventListener('mousemove', setupCanvasEvents$lambda_1(canvas, state, h));
    var tmp = window;
    tmp.addEventListener('mouseup', setupCanvasEvents$lambda_2(state, h));
    canvas.addEventListener('mouseleave', setupCanvasEvents$lambda_3(h));
  }
  function setupCanvasEvents$lambda($state) {
    return function (event) {
      var tmp;
      if ($state.a13_1 === 'text' || $state.a13_1 === 'fill') {
        event.preventDefault();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function setupCanvasEvents$lambda_0($canvas, $state, $h, $saveCanvas) {
    return function (e) {
      var event = e instanceof MouseEvent ? e : THROW_CCE();
      var position = getMousePosition($canvas, event);
      var tmp;
      if ($state.c13_1) {
        handleFreehandMouseDown($h, position);
        return Unit_instance;
      }
      var tmp_0;
      if ($state.a13_1 === 'fill') {
        event.preventDefault();
        var color = event.button === 2 ? null : $state.b13_1;
        if (fillAt($state, position, color)) {
          $h.n15();
          $saveCanvas();
        }
        return Unit_instance;
      }
      var tmp_1;
      if (handleTextMouseDown($h, event, position)) {
        return Unit_instance;
      }
      var tmp_2;
      if (handleShapeMouseDown($h, position)) {
        return Unit_instance;
      }
      handleFreehandMouseDown($h, position);
      return Unit_instance;
    };
  }
  function setupCanvasEvents$lambda_1($canvas, $state, $h) {
    return function (e) {
      var position = getMousePosition($canvas, e instanceof MouseEvent ? e : THROW_CCE());
      $state.w13_1 = position;
      var tmp;
      if ($state.c13_1) {
        handleFreehandMouseMove($h, position);
        return Unit_instance;
      }
      var tmp_0;
      if (handleTextMouseMove($h, position)) {
        return Unit_instance;
      }
      var tmp_1;
      if (handleShapeMouseMove($h, position)) {
        return Unit_instance;
      }
      handleFreehandMouseMove($h, position);
      return Unit_instance;
    };
  }
  function setupCanvasEvents$lambda_2($state, $h) {
    return function (it) {
      var tmp;
      if ($state.c13_1) {
        handleFreehandMouseUp($h);
        return Unit_instance;
      }
      var tmp_0;
      if (handleTextMouseUp($h)) {
        return Unit_instance;
      }
      var tmp_1;
      if (handleShapeMouseUp($h)) {
        return Unit_instance;
      }
      handleFreehandMouseUp($h);
      return Unit_instance;
    };
  }
  function setupCanvasEvents$lambda_3($h) {
    return function (it) {
      handleFreehandMouseLeave($h);
      return Unit_instance;
    };
  }
  function get_prettyJson() {
    _init_properties_Files_kt__abgarp();
    return prettyJson;
  }
  var prettyJson;
  function Companion() {
    Companion_instance_0 = this;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.o15_1 = [null, null, new ArrayListSerializer($serializer_getInstance_1()), new ArrayListSerializer($serializer_getInstance_2()), new ArrayListSerializer($serializer_getInstance_3()), new ArrayListSerializer($serializer_getInstance_4()), new ArrayListSerializer($serializer_getInstance_5()), new ArrayListSerializer($serializer_getInstance_6())];
  }
  protoOf(Companion).p15 = function () {
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
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('stickynode.canvas.StickyDocument', this, 8);
    tmp0_serialDesc.rh('app', true);
    tmp0_serialDesc.rh('version', true);
    tmp0_serialDesc.rh('strokeItems', true);
    tmp0_serialDesc.rh('textItems', true);
    tmp0_serialDesc.rh('rectangleItems', true);
    tmp0_serialDesc.rh('circleItems', true);
    tmp0_serialDesc.rh('polygonItems', true);
    tmp0_serialDesc.rh('arrowItems', true);
    this.q15_1 = tmp0_serialDesc;
  }
  protoOf($serializer).r15 = function (encoder, value) {
    var tmp0_desc = this.q15_1;
    var tmp1_output = encoder.de(tmp0_desc);
    var tmp2_cached = Companion_getInstance().o15_1;
    if (tmp1_output.ef(tmp0_desc, 0) ? true : !(value.s15_1 === '')) {
      tmp1_output.xe(tmp0_desc, 0, value.s15_1);
    }
    if (tmp1_output.ef(tmp0_desc, 1) ? true : !(value.t15_1 === 1)) {
      tmp1_output.ve(tmp0_desc, 1, value.t15_1);
    }
    if (tmp1_output.ef(tmp0_desc, 2) ? true : !equals(value.u15_1, emptyList())) {
      tmp1_output.ye(tmp0_desc, 2, tmp2_cached[2], value.u15_1);
    }
    if (tmp1_output.ef(tmp0_desc, 3) ? true : !equals(value.v15_1, emptyList())) {
      tmp1_output.ye(tmp0_desc, 3, tmp2_cached[3], value.v15_1);
    }
    if (tmp1_output.ef(tmp0_desc, 4) ? true : !equals(value.w15_1, emptyList())) {
      tmp1_output.ye(tmp0_desc, 4, tmp2_cached[4], value.w15_1);
    }
    if (tmp1_output.ef(tmp0_desc, 5) ? true : !equals(value.x15_1, emptyList())) {
      tmp1_output.ye(tmp0_desc, 5, tmp2_cached[5], value.x15_1);
    }
    if (tmp1_output.ef(tmp0_desc, 6) ? true : !equals(value.y15_1, emptyList())) {
      tmp1_output.ye(tmp0_desc, 6, tmp2_cached[6], value.y15_1);
    }
    if (tmp1_output.ef(tmp0_desc, 7) ? true : !equals(value.z15_1, emptyList())) {
      tmp1_output.ye(tmp0_desc, 7, tmp2_cached[7], value.z15_1);
    }
    tmp1_output.ee(tmp0_desc);
  };
  protoOf($serializer).vc = function (encoder, value) {
    return this.r15(encoder, value instanceof StickyDocument ? value : THROW_CCE());
  };
  protoOf($serializer).wc = function (decoder) {
    var tmp0_desc = this.q15_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = 0;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_local5 = null;
    var tmp10_local6 = null;
    var tmp11_local7 = null;
    var tmp12_input = decoder.de(tmp0_desc);
    var tmp13_cached = Companion_getInstance().o15_1;
    if (tmp12_input.me()) {
      tmp4_local0 = tmp12_input.he(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp12_input.fe(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp12_input.ie(tmp0_desc, 2, tmp13_cached[2], tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp12_input.ie(tmp0_desc, 3, tmp13_cached[3], tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp12_input.ie(tmp0_desc, 4, tmp13_cached[4], tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp12_input.ie(tmp0_desc, 5, tmp13_cached[5], tmp9_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp12_input.ie(tmp0_desc, 6, tmp13_cached[6], tmp10_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp11_local7 = tmp12_input.ie(tmp0_desc, 7, tmp13_cached[7], tmp11_local7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp12_input.ne(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp12_input.he(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp12_input.fe(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp12_input.ie(tmp0_desc, 2, tmp13_cached[2], tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp12_input.ie(tmp0_desc, 3, tmp13_cached[3], tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp12_input.ie(tmp0_desc, 4, tmp13_cached[4], tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp12_input.ie(tmp0_desc, 5, tmp13_cached[5], tmp9_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp12_input.ie(tmp0_desc, 6, tmp13_cached[6], tmp10_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp11_local7 = tmp12_input.ie(tmp0_desc, 7, tmp13_cached[7], tmp11_local7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp12_input.ee(tmp0_desc);
    return StickyDocument_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, tmp11_local7, null);
  };
  protoOf($serializer).uc = function () {
    return this.q15_1;
  };
  protoOf($serializer).th = function () {
    var tmp0_cached = Companion_getInstance().o15_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), IntSerializer_getInstance(), tmp0_cached[2], tmp0_cached[3], tmp0_cached[4], tmp0_cached[5], tmp0_cached[6], tmp0_cached[7]];
  };
  var $serializer_instance;
  function $serializer_getInstance() {
    if ($serializer_instance == null)
      new $serializer();
    return $serializer_instance;
  }
  function StickyDocument_init_$Init$(seen0, app, version, strokeItems, textItems, rectangleItems, circleItems, polygonItems, arrowItems, serializationConstructorMarker, $this) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance().q15_1);
    }
    if (0 === (seen0 & 1))
      $this.s15_1 = '';
    else
      $this.s15_1 = app;
    if (0 === (seen0 & 2))
      $this.t15_1 = 1;
    else
      $this.t15_1 = version;
    if (0 === (seen0 & 4))
      $this.u15_1 = emptyList();
    else
      $this.u15_1 = strokeItems;
    if (0 === (seen0 & 8))
      $this.v15_1 = emptyList();
    else
      $this.v15_1 = textItems;
    if (0 === (seen0 & 16))
      $this.w15_1 = emptyList();
    else
      $this.w15_1 = rectangleItems;
    if (0 === (seen0 & 32))
      $this.x15_1 = emptyList();
    else
      $this.x15_1 = circleItems;
    if (0 === (seen0 & 64))
      $this.y15_1 = emptyList();
    else
      $this.y15_1 = polygonItems;
    if (0 === (seen0 & 128))
      $this.z15_1 = emptyList();
    else
      $this.z15_1 = arrowItems;
    return $this;
  }
  function StickyDocument_init_$Create$(seen0, app, version, strokeItems, textItems, rectangleItems, circleItems, polygonItems, arrowItems, serializationConstructorMarker) {
    return StickyDocument_init_$Init$(seen0, app, version, strokeItems, textItems, rectangleItems, circleItems, polygonItems, arrowItems, serializationConstructorMarker, objectCreate(protoOf(StickyDocument)));
  }
  function StickyDocument(app, version, strokeItems, textItems, rectangleItems, circleItems, polygonItems, arrowItems) {
    Companion_getInstance();
    app = app === VOID ? '' : app;
    version = version === VOID ? 1 : version;
    strokeItems = strokeItems === VOID ? emptyList() : strokeItems;
    textItems = textItems === VOID ? emptyList() : textItems;
    rectangleItems = rectangleItems === VOID ? emptyList() : rectangleItems;
    circleItems = circleItems === VOID ? emptyList() : circleItems;
    polygonItems = polygonItems === VOID ? emptyList() : polygonItems;
    arrowItems = arrowItems === VOID ? emptyList() : arrowItems;
    this.s15_1 = app;
    this.t15_1 = version;
    this.u15_1 = strokeItems;
    this.v15_1 = textItems;
    this.w15_1 = rectangleItems;
    this.x15_1 = circleItems;
    this.y15_1 = polygonItems;
    this.z15_1 = arrowItems;
  }
  function serialize(state) {
    _init_properties_Files_kt__abgarp();
    return get_prettyJson().qj(Companion_getInstance().p15(), new StickyDocument('sticky-node', 1, state.g13_1, state.h13_1, state.i13_1, state.j13_1, state.k13_1, state.l13_1));
  }
  function applyDocument(state, text) {
    _init_properties_Files_kt__abgarp();
    if (isBlank(text))
      throw Exception_init_$Create$('The file is empty');
    var doc = get_json().rj(Companion_getInstance().p15(), text);
    if (!(doc.s15_1 === 'sticky-node'))
      throw Exception_init_$Create$('Not a Sticky Node file');
    state.g13_1.z2();
    state.g13_1.x(doc.u15_1);
    state.h13_1.z2();
    state.h13_1.x(doc.v15_1);
    state.i13_1.z2();
    state.i13_1.x(doc.w15_1);
    state.j13_1.z2();
    state.j13_1.x(doc.x15_1);
    state.k13_1.z2();
    state.k13_1.x(doc.y15_1);
    state.l13_1.z2();
    state.l13_1.x(doc.z15_1);
  }
  function saveToFile(state, suggestedName, $completion) {
    suggestedName = suggestedName === VOID ? 'drawing.sticky.json' : suggestedName;
    var tmp = new $saveToFileCOROUTINE$0(state, suggestedName, $completion);
    tmp.l6_1 = Unit_instance;
    tmp.m6_1 = null;
    return tmp.r6();
  }
  function openFromFile(state, $completion) {
    // Inline function 'kotlin.coroutines.suspendCoroutine.<anonymous>' call
    var safe = SafeContinuation_init_$Create$(intercepted($completion));
    // Inline function 'stickynode.canvas.openFromFile.<anonymous>' call
    var tmp = document.createElement('input');
    var input = tmp instanceof HTMLInputElement ? tmp : THROW_CCE();
    input.type = 'file';
    input.accept = '.json,application/json';
    input.onchange = openFromFile$lambda(input, safe, state);
    input.click();
    return safe.b7();
  }
  function prettyJson$lambda($this$Json) {
    _init_properties_Files_kt__abgarp();
    $this$Json.lk_1 = true;
    $this$Json.mk_1 = '  ';
    return Unit_instance;
  }
  function saveToFile$lambda($url) {
    return function () {
      // Inline function 'kotlin.js.asDynamic' call
      window.URL.revokeObjectURL($url);
      return Unit_instance;
    };
  }
  function openFromFile$lambda$slambda($file, $state, $continuation, resultContinuation) {
    this.c17_1 = $file;
    this.d17_1 = $state;
    this.e17_1 = $continuation;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(openFromFile$lambda$slambda).l14 = function ($this$launch, $completion) {
    var tmp = this.m14($this$launch, $completion);
    tmp.l6_1 = Unit_instance;
    tmp.m6_1 = null;
    return tmp.r6();
  };
  protoOf(openFromFile$lambda$slambda).f7 = function (p1, $completion) {
    return this.l14((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(openFromFile$lambda$slambda).r6 = function () {
    var suspendResult = this.l6_1;
    $sm: do
      try {
        var tmp = this.j6_1;
        switch (tmp) {
          case 0:
            this.k6_1 = 3;
            this.k6_1 = 2;
            this.j6_1 = 1;
            var this_0 = this.c17_1.text();
            suspendResult = await_0(this_0, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var text = suspendResult;
            applyDocument(this.d17_1, text);
            this.e17_1.u6(_Result___init__impl__xyqfz8(true));
            this.k6_1 = 3;
            this.j6_1 = 4;
            continue $sm;
          case 2:
            this.k6_1 = 3;
            var tmp_0 = this.m6_1;
            if (tmp_0 instanceof Error) {
              var error = this.m6_1;
              window.alert("Couldn't open that file: " + error.message);
              this.e17_1.u6(_Result___init__impl__xyqfz8(false));
              this.j6_1 = 4;
              continue $sm;
            } else {
              throw this.m6_1;
            }

          case 3:
            throw this.m6_1;
          case 4:
            this.k6_1 = 3;
            return Unit_instance;
        }
      } catch ($p) {
        var e = $p;
        if (this.k6_1 === 3) {
          throw e;
        } else {
          this.j6_1 = this.k6_1;
          this.m6_1 = e;
        }
      }
     while (true);
  };
  protoOf(openFromFile$lambda$slambda).m14 = function ($this$launch, completion) {
    var i = new openFromFile$lambda$slambda(this.c17_1, this.d17_1, this.e17_1, completion);
    i.f17_1 = $this$launch;
    return i;
  };
  function openFromFile$lambda$slambda_0($file, $state, $continuation, resultContinuation) {
    var i = new openFromFile$lambda$slambda($file, $state, $continuation, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.l14($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function openFromFile$lambda($input, $continuation, $state) {
    return function (it) {
      var tmp0_safe_receiver = $input.files;
      var file = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.item(0);
      if (file == null) {
        // Inline function 'kotlin.coroutines.resume' call
        var this_0 = $continuation;
        // Inline function 'kotlin.Companion.success' call
        var tmp$ret$0 = _Result___init__impl__xyqfz8(false);
        this_0.u6(tmp$ret$0);
      } else {
        var tmp = MainScope();
        launch(tmp, VOID, VOID, openFromFile$lambda$slambda_0(file, $state, $continuation, null));
      }
      return null;
    };
  }
  function $saveToFileCOROUTINE$0(state, suggestedName, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.i16_1 = state;
    this.j16_1 = suggestedName;
  }
  protoOf($saveToFileCOROUTINE$0).r6 = function () {
    var suspendResult = this.l6_1;
    $sm: do
      try {
        var tmp = this.j6_1;
        switch (tmp) {
          case 0:
            this.k6_1 = 7;
            this.k16_1 = serialize(this.i16_1);
            if (window.showSaveFilePicker != undefined) {
              this.k6_1 = 6;
              this.m16_1 = {};
              var this_0 = ['.json'];
              this.m16_1['application/json'] = this_0;
              this.n16_1 = {};
              this.n16_1.description = 'Sticky Node drawing';
              this.n16_1.accept = this.m16_1;
              this.o16_1 = {};
              this.o16_1.suggestedName = this.j16_1;
              var this_1 = [this.n16_1];
              this.o16_1.types = this_1;
              this.j6_1 = 2;
              var this_2 = window.showSaveFilePicker(this.o16_1);
              suspendResult = await_0(this_2, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.j6_1 = 1;
              continue $sm;
            }

          case 1:
            var tmp_0 = this;
            var this_3 = [this.k16_1];
            var type = 'application/json';
            var o = {};
            o['type'] = type;
            tmp_0.p16_1 = new Blob(this_3, o);
            var tmp_1 = this;
            tmp_1.q16_1 = window.URL.createObjectURL(this.p16_1);
            var tmp_2 = this;
            var tmp_3 = document.createElement('a');
            tmp_2.r16_1 = tmp_3 instanceof HTMLAnchorElement ? tmp_3 : THROW_CCE();
            this.r16_1.href = this.q16_1;
            this.r16_1.download = this.j16_1;
            ensureNotNull(document.body).appendChild(this.r16_1);
            this.r16_1.click();
            this.r16_1.remove();
            var tmp_4 = window;
            tmp_4.setTimeout(saveToFile$lambda(this.q16_1), 1000);
            return Unit_instance;
          case 2:
            this.s16_1 = suspendResult;
            this.j6_1 = 3;
            var this_4 = this.s16_1.createWritable();
            suspendResult = await_0(this_4, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            this.t16_1 = suspendResult;
            this.j6_1 = 4;
            var this_5 = this.t16_1.write(this.k16_1);
            suspendResult = await_0(this_5, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            this.j6_1 = 5;
            var this_6 = this.t16_1.close();
            suspendResult = await_0(this_6, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 5:
            this.l16_1 = suspendResult;
            this.k6_1 = 7;
            this.j6_1 = 8;
            continue $sm;
          case 6:
            this.k6_1 = 7;
            var tmp_5 = this.m6_1;
            if (tmp_5 instanceof Error) {
              var error = this.m6_1;
              var tmp_6 = this;
              if (error.name != 'AbortError')
                throw error;
              tmp_6.l16_1 = Unit_instance;
              this.j6_1 = 8;
              continue $sm;
            } else {
              throw this.m6_1;
            }

          case 7:
            throw this.m6_1;
          case 8:
            this.k6_1 = 7;
            return Unit_instance;
        }
      } catch ($p) {
        var e = $p;
        if (this.k6_1 === 7) {
          throw e;
        } else {
          this.j6_1 = this.k6_1;
          this.m6_1 = e;
        }
      }
     while (true);
  };
  var properties_initialized_Files_kt_9myqk9;
  function _init_properties_Files_kt__abgarp() {
    if (!properties_initialized_Files_kt_9myqk9) {
      properties_initialized_Files_kt_9myqk9 = true;
      var tmp = get_json();
      prettyJson = Json(tmp, prettyJson$lambda);
    }
  }
  function serialize_0($this) {
    return get_json().qj(Companion_getInstance_7().p15(), new Items($this.w12_1.g13_1, $this.w12_1.h13_1, $this.w12_1.i13_1, $this.w12_1.j13_1, $this.w12_1.k13_1, $this.w12_1.l13_1));
  }
  function restore($this, snapshot) {
    var data = get_json().rj(Companion_getInstance_7().p15(), snapshot);
    $this.w12_1.g13_1.z2();
    $this.w12_1.g13_1.x(data.h17_1);
    $this.w12_1.h13_1.z2();
    $this.w12_1.h13_1.x(data.i17_1);
    $this.w12_1.i13_1.z2();
    $this.w12_1.i13_1.x(data.j17_1);
    $this.w12_1.j13_1.z2();
    $this.w12_1.j13_1.x(data.k17_1);
    $this.w12_1.k13_1.z2();
    $this.w12_1.k13_1.x(data.l17_1);
    $this.w12_1.l13_1.z2();
    $this.w12_1.l13_1.x(data.m17_1);
  }
  function History(state) {
    this.w12_1 = state;
    this.x12_1 = mutableListOf([serialize_0(this)]);
    this.y12_1 = 0;
  }
  protoOf(History).z12 = function () {
    var snapshot = serialize_0(this);
    if (snapshot === this.x12_1.h(this.y12_1))
      return false;
    this.x12_1 = toMutableList(this.x12_1.b3(0, this.y12_1 + 1 | 0));
    this.x12_1.n(snapshot);
    if (this.x12_1.i() > 100) {
      this.x12_1.i2(0);
    }
    this.y12_1 = this.x12_1.i() - 1 | 0;
    return true;
  };
  protoOf(History).z13 = function () {
    if (this.y12_1 === 0)
      return false;
    this.y12_1 = this.y12_1 - 1 | 0;
    restore(this, this.x12_1.h(this.y12_1));
    return true;
  };
  protoOf(History).a14 = function () {
    if (this.y12_1 === (this.x12_1.i() - 1 | 0))
      return false;
    this.y12_1 = this.y12_1 + 1 | 0;
    restore(this, this.x12_1.h(this.y12_1));
    return true;
  };
  function get_json() {
    _init_properties_Model_kt__1gdqdl();
    return json;
  }
  var json;
  function Companion_0() {
  }
  var Companion_instance_1;
  function Companion_getInstance_0() {
    return Companion_instance_1;
  }
  function $serializer_0() {
    $serializer_instance_0 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('stickynode.canvas.Point', this, 2);
    tmp0_serialDesc.rh('x', false);
    tmp0_serialDesc.rh('y', false);
    this.n17_1 = tmp0_serialDesc;
  }
  protoOf($serializer_0).o17 = function (encoder, value) {
    var tmp0_desc = this.n17_1;
    var tmp1_output = encoder.de(tmp0_desc);
    tmp1_output.we(tmp0_desc, 0, value.f15_1);
    tmp1_output.we(tmp0_desc, 1, value.g15_1);
    tmp1_output.ee(tmp0_desc);
  };
  protoOf($serializer_0).vc = function (encoder, value) {
    return this.o17(encoder, value instanceof Point ? value : THROW_CCE());
  };
  protoOf($serializer_0).wc = function (decoder) {
    var tmp0_desc = this.n17_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = 0.0;
    var tmp5_local1 = 0.0;
    var tmp6_input = decoder.de(tmp0_desc);
    if (tmp6_input.me()) {
      tmp4_local0 = tmp6_input.ge(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.ge(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.ne(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.ge(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.ge(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp6_input.ee(tmp0_desc);
    return Point_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  protoOf($serializer_0).uc = function () {
    return this.n17_1;
  };
  protoOf($serializer_0).th = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [DoubleSerializer_getInstance(), DoubleSerializer_getInstance()];
  };
  var $serializer_instance_0;
  function $serializer_getInstance_0() {
    if ($serializer_instance_0 == null)
      new $serializer_0();
    return $serializer_instance_0;
  }
  function Point_init_$Init$(seen0, x, y, serializationConstructorMarker, $this) {
    if (!(3 === (3 & seen0))) {
      throwMissingFieldException(seen0, 3, $serializer_getInstance_0().n17_1);
    }
    $this.f15_1 = x;
    $this.g15_1 = y;
    return $this;
  }
  function Point_init_$Create$(seen0, x, y, serializationConstructorMarker) {
    return Point_init_$Init$(seen0, x, y, serializationConstructorMarker, objectCreate(protoOf(Point)));
  }
  function Point(x, y) {
    this.f15_1 = x;
    this.g15_1 = y;
  }
  protoOf(Point).toString = function () {
    return 'Point(x=' + this.f15_1 + ', y=' + this.g15_1 + ')';
  };
  protoOf(Point).hashCode = function () {
    var result = getNumberHashCode(this.f15_1);
    result = imul(result, 31) + getNumberHashCode(this.g15_1) | 0;
    return result;
  };
  protoOf(Point).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Point))
      return false;
    var tmp0_other_with_cast = other instanceof Point ? other : THROW_CCE();
    if (!equals(this.f15_1, tmp0_other_with_cast.f15_1))
      return false;
    if (!equals(this.g15_1, tmp0_other_with_cast.g15_1))
      return false;
    return true;
  };
  function Companion_1() {
    Companion_instance_2 = this;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.p17_1 = [new ArrayListSerializer($serializer_getInstance_0()), null, null];
  }
  protoOf(Companion_1).p15 = function () {
    return $serializer_getInstance_1();
  };
  var Companion_instance_2;
  function Companion_getInstance_1() {
    if (Companion_instance_2 == null)
      new Companion_1();
    return Companion_instance_2;
  }
  function $serializer_1() {
    $serializer_instance_1 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('stickynode.canvas.Stroke', this, 3);
    tmp0_serialDesc.rh('points', false);
    tmp0_serialDesc.rh('color', false);
    tmp0_serialDesc.rh('lineWidth', true);
    this.q17_1 = tmp0_serialDesc;
  }
  protoOf($serializer_1).r17 = function (encoder, value) {
    var tmp0_desc = this.q17_1;
    var tmp1_output = encoder.de(tmp0_desc);
    var tmp2_cached = Companion_getInstance_1().p17_1;
    tmp1_output.ye(tmp0_desc, 0, tmp2_cached[0], value.s17_1);
    tmp1_output.xe(tmp0_desc, 1, value.t17_1);
    if (tmp1_output.ef(tmp0_desc, 2) ? true : !(value.u17_1 === 3)) {
      tmp1_output.ve(tmp0_desc, 2, value.u17_1);
    }
    tmp1_output.ee(tmp0_desc);
  };
  protoOf($serializer_1).vc = function (encoder, value) {
    return this.r17(encoder, value instanceof Stroke ? value : THROW_CCE());
  };
  protoOf($serializer_1).wc = function (decoder) {
    var tmp0_desc = this.q17_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = 0;
    var tmp7_input = decoder.de(tmp0_desc);
    var tmp8_cached = Companion_getInstance_1().p17_1;
    if (tmp7_input.me()) {
      tmp4_local0 = tmp7_input.ie(tmp0_desc, 0, tmp8_cached[0], tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.he(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp7_input.fe(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp7_input.ne(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp7_input.ie(tmp0_desc, 0, tmp8_cached[0], tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.he(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp7_input.fe(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp7_input.ee(tmp0_desc);
    return Stroke_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  };
  protoOf($serializer_1).uc = function () {
    return this.q17_1;
  };
  protoOf($serializer_1).th = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [Companion_getInstance_1().p17_1[0], StringSerializer_getInstance(), IntSerializer_getInstance()];
  };
  var $serializer_instance_1;
  function $serializer_getInstance_1() {
    if ($serializer_instance_1 == null)
      new $serializer_1();
    return $serializer_instance_1;
  }
  function Stroke_init_$Init$(seen0, points, color, lineWidth, serializationConstructorMarker, $this) {
    if (!(3 === (3 & seen0))) {
      throwMissingFieldException(seen0, 3, $serializer_getInstance_1().q17_1);
    }
    $this.s17_1 = points;
    $this.t17_1 = color;
    if (0 === (seen0 & 4))
      $this.u17_1 = 3;
    else
      $this.u17_1 = lineWidth;
    return $this;
  }
  function Stroke_init_$Create$(seen0, points, color, lineWidth, serializationConstructorMarker) {
    return Stroke_init_$Init$(seen0, points, color, lineWidth, serializationConstructorMarker, objectCreate(protoOf(Stroke)));
  }
  function Stroke(points, color, lineWidth) {
    Companion_getInstance_1();
    lineWidth = lineWidth === VOID ? 3 : lineWidth;
    this.s17_1 = points;
    this.t17_1 = color;
    this.u17_1 = lineWidth;
  }
  function Companion_2() {
  }
  protoOf(Companion_2).p15 = function () {
    return $serializer_getInstance_2();
  };
  var Companion_instance_3;
  function Companion_getInstance_2() {
    return Companion_instance_3;
  }
  function $serializer_2() {
    $serializer_instance_2 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('stickynode.canvas.TextItem', this, 5);
    tmp0_serialDesc.rh('x', false);
    tmp0_serialDesc.rh('y', false);
    tmp0_serialDesc.rh('color', false);
    tmp0_serialDesc.rh('text', false);
    tmp0_serialDesc.rh('fontSize', true);
    this.v17_1 = tmp0_serialDesc;
  }
  protoOf($serializer_2).w17 = function (encoder, value) {
    var tmp0_desc = this.v17_1;
    var tmp1_output = encoder.de(tmp0_desc);
    tmp1_output.we(tmp0_desc, 0, value.x17_1);
    tmp1_output.we(tmp0_desc, 1, value.y17_1);
    tmp1_output.xe(tmp0_desc, 2, value.z17_1);
    tmp1_output.xe(tmp0_desc, 3, value.a18_1);
    if (tmp1_output.ef(tmp0_desc, 4) ? true : !(value.b18_1 === 20)) {
      tmp1_output.ve(tmp0_desc, 4, value.b18_1);
    }
    tmp1_output.ee(tmp0_desc);
  };
  protoOf($serializer_2).vc = function (encoder, value) {
    return this.w17(encoder, value instanceof TextItem ? value : THROW_CCE());
  };
  protoOf($serializer_2).wc = function (decoder) {
    var tmp0_desc = this.v17_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = 0.0;
    var tmp5_local1 = 0.0;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = 0;
    var tmp9_input = decoder.de(tmp0_desc);
    if (tmp9_input.me()) {
      tmp4_local0 = tmp9_input.ge(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp9_input.ge(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp9_input.he(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp9_input.he(tmp0_desc, 3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp9_input.fe(tmp0_desc, 4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp9_input.ne(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp9_input.ge(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp9_input.ge(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp9_input.he(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp9_input.he(tmp0_desc, 3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp9_input.fe(tmp0_desc, 4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp9_input.ee(tmp0_desc);
    return TextItem_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, null);
  };
  protoOf($serializer_2).uc = function () {
    return this.v17_1;
  };
  protoOf($serializer_2).th = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [DoubleSerializer_getInstance(), DoubleSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), IntSerializer_getInstance()];
  };
  var $serializer_instance_2;
  function $serializer_getInstance_2() {
    if ($serializer_instance_2 == null)
      new $serializer_2();
    return $serializer_instance_2;
  }
  function TextItem_init_$Init$(seen0, x, y, color, text, fontSize, serializationConstructorMarker, $this) {
    if (!(15 === (15 & seen0))) {
      throwMissingFieldException(seen0, 15, $serializer_getInstance_2().v17_1);
    }
    $this.x17_1 = x;
    $this.y17_1 = y;
    $this.z17_1 = color;
    $this.a18_1 = text;
    if (0 === (seen0 & 16))
      $this.b18_1 = 20;
    else
      $this.b18_1 = fontSize;
    return $this;
  }
  function TextItem_init_$Create$(seen0, x, y, color, text, fontSize, serializationConstructorMarker) {
    return TextItem_init_$Init$(seen0, x, y, color, text, fontSize, serializationConstructorMarker, objectCreate(protoOf(TextItem)));
  }
  function TextItem(x, y, color, text, fontSize) {
    fontSize = fontSize === VOID ? 20 : fontSize;
    this.x17_1 = x;
    this.y17_1 = y;
    this.z17_1 = color;
    this.a18_1 = text;
    this.b18_1 = fontSize;
  }
  function Companion_3() {
  }
  protoOf(Companion_3).p15 = function () {
    return $serializer_getInstance_3();
  };
  var Companion_instance_4;
  function Companion_getInstance_3() {
    return Companion_instance_4;
  }
  function $serializer_3() {
    $serializer_instance_3 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('stickynode.canvas.RectangleItem', this, 7);
    tmp0_serialDesc.rh('x', false);
    tmp0_serialDesc.rh('y', false);
    tmp0_serialDesc.rh('width', false);
    tmp0_serialDesc.rh('height', false);
    tmp0_serialDesc.rh('color', false);
    tmp0_serialDesc.rh('lineWidth', true);
    tmp0_serialDesc.rh('fill', true);
    this.c18_1 = tmp0_serialDesc;
  }
  protoOf($serializer_3).d18 = function (encoder, value) {
    var tmp0_desc = this.c18_1;
    var tmp1_output = encoder.de(tmp0_desc);
    tmp1_output.we(tmp0_desc, 0, value.e18_1);
    tmp1_output.we(tmp0_desc, 1, value.f18_1);
    tmp1_output.we(tmp0_desc, 2, value.g18_1);
    tmp1_output.we(tmp0_desc, 3, value.h18_1);
    tmp1_output.xe(tmp0_desc, 4, value.i18_1);
    if (tmp1_output.ef(tmp0_desc, 5) ? true : !(value.j18_1 === 3)) {
      tmp1_output.ve(tmp0_desc, 5, value.j18_1);
    }
    if (tmp1_output.ef(tmp0_desc, 6) ? true : !(value.k18_1 == null)) {
      tmp1_output.af(tmp0_desc, 6, StringSerializer_getInstance(), value.k18_1);
    }
    tmp1_output.ee(tmp0_desc);
  };
  protoOf($serializer_3).vc = function (encoder, value) {
    return this.d18(encoder, value instanceof RectangleItem ? value : THROW_CCE());
  };
  protoOf($serializer_3).wc = function (decoder) {
    var tmp0_desc = this.c18_1;
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
    var tmp11_input = decoder.de(tmp0_desc);
    if (tmp11_input.me()) {
      tmp4_local0 = tmp11_input.ge(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp11_input.ge(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp11_input.ge(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp11_input.ge(tmp0_desc, 3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp11_input.he(tmp0_desc, 4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp11_input.fe(tmp0_desc, 5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp11_input.ke(tmp0_desc, 6, StringSerializer_getInstance(), tmp10_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp11_input.ne(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp11_input.ge(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp11_input.ge(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp11_input.ge(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp11_input.ge(tmp0_desc, 3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp11_input.he(tmp0_desc, 4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp11_input.fe(tmp0_desc, 5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp11_input.ke(tmp0_desc, 6, StringSerializer_getInstance(), tmp10_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp11_input.ee(tmp0_desc);
    return RectangleItem_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, null);
  };
  protoOf($serializer_3).uc = function () {
    return this.c18_1;
  };
  protoOf($serializer_3).th = function () {
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
      throwMissingFieldException(seen0, 31, $serializer_getInstance_3().c18_1);
    }
    $this.e18_1 = x;
    $this.f18_1 = y;
    $this.g18_1 = width;
    $this.h18_1 = height;
    $this.i18_1 = color;
    if (0 === (seen0 & 32))
      $this.j18_1 = 3;
    else
      $this.j18_1 = lineWidth;
    if (0 === (seen0 & 64))
      $this.k18_1 = null;
    else
      $this.k18_1 = fill;
    return $this;
  }
  function RectangleItem_init_$Create$(seen0, x, y, width, height, color, lineWidth, fill, serializationConstructorMarker) {
    return RectangleItem_init_$Init$(seen0, x, y, width, height, color, lineWidth, fill, serializationConstructorMarker, objectCreate(protoOf(RectangleItem)));
  }
  function RectangleItem(x, y, width, height, color, lineWidth, fill) {
    lineWidth = lineWidth === VOID ? 3 : lineWidth;
    fill = fill === VOID ? null : fill;
    this.e18_1 = x;
    this.f18_1 = y;
    this.g18_1 = width;
    this.h18_1 = height;
    this.i18_1 = color;
    this.j18_1 = lineWidth;
    this.k18_1 = fill;
  }
  protoOf(RectangleItem).l18 = function (_set____db54di) {
    this.k18_1 = _set____db54di;
  };
  protoOf(RectangleItem).m18 = function () {
    return this.k18_1;
  };
  function Companion_4() {
  }
  protoOf(Companion_4).p15 = function () {
    return $serializer_getInstance_4();
  };
  var Companion_instance_5;
  function Companion_getInstance_4() {
    return Companion_instance_5;
  }
  function $serializer_4() {
    $serializer_instance_4 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('stickynode.canvas.CircleItem', this, 7);
    tmp0_serialDesc.rh('x', false);
    tmp0_serialDesc.rh('y', false);
    tmp0_serialDesc.rh('width', false);
    tmp0_serialDesc.rh('height', false);
    tmp0_serialDesc.rh('color', false);
    tmp0_serialDesc.rh('lineWidth', true);
    tmp0_serialDesc.rh('fill', true);
    this.n18_1 = tmp0_serialDesc;
  }
  protoOf($serializer_4).o18 = function (encoder, value) {
    var tmp0_desc = this.n18_1;
    var tmp1_output = encoder.de(tmp0_desc);
    tmp1_output.we(tmp0_desc, 0, value.p18_1);
    tmp1_output.we(tmp0_desc, 1, value.q18_1);
    tmp1_output.we(tmp0_desc, 2, value.r18_1);
    tmp1_output.we(tmp0_desc, 3, value.s18_1);
    tmp1_output.xe(tmp0_desc, 4, value.t18_1);
    if (tmp1_output.ef(tmp0_desc, 5) ? true : !(value.u18_1 === 3)) {
      tmp1_output.ve(tmp0_desc, 5, value.u18_1);
    }
    if (tmp1_output.ef(tmp0_desc, 6) ? true : !(value.v18_1 == null)) {
      tmp1_output.af(tmp0_desc, 6, StringSerializer_getInstance(), value.v18_1);
    }
    tmp1_output.ee(tmp0_desc);
  };
  protoOf($serializer_4).vc = function (encoder, value) {
    return this.o18(encoder, value instanceof CircleItem ? value : THROW_CCE());
  };
  protoOf($serializer_4).wc = function (decoder) {
    var tmp0_desc = this.n18_1;
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
    var tmp11_input = decoder.de(tmp0_desc);
    if (tmp11_input.me()) {
      tmp4_local0 = tmp11_input.ge(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp11_input.ge(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp11_input.ge(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp11_input.ge(tmp0_desc, 3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp11_input.he(tmp0_desc, 4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp11_input.fe(tmp0_desc, 5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp11_input.ke(tmp0_desc, 6, StringSerializer_getInstance(), tmp10_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp11_input.ne(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp11_input.ge(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp11_input.ge(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp11_input.ge(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp11_input.ge(tmp0_desc, 3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp11_input.he(tmp0_desc, 4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp11_input.fe(tmp0_desc, 5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp11_input.ke(tmp0_desc, 6, StringSerializer_getInstance(), tmp10_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp11_input.ee(tmp0_desc);
    return CircleItem_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, null);
  };
  protoOf($serializer_4).uc = function () {
    return this.n18_1;
  };
  protoOf($serializer_4).th = function () {
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
      throwMissingFieldException(seen0, 31, $serializer_getInstance_4().n18_1);
    }
    $this.p18_1 = x;
    $this.q18_1 = y;
    $this.r18_1 = width;
    $this.s18_1 = height;
    $this.t18_1 = color;
    if (0 === (seen0 & 32))
      $this.u18_1 = 3;
    else
      $this.u18_1 = lineWidth;
    if (0 === (seen0 & 64))
      $this.v18_1 = null;
    else
      $this.v18_1 = fill;
    return $this;
  }
  function CircleItem_init_$Create$(seen0, x, y, width, height, color, lineWidth, fill, serializationConstructorMarker) {
    return CircleItem_init_$Init$(seen0, x, y, width, height, color, lineWidth, fill, serializationConstructorMarker, objectCreate(protoOf(CircleItem)));
  }
  function CircleItem(x, y, width, height, color, lineWidth, fill) {
    lineWidth = lineWidth === VOID ? 3 : lineWidth;
    fill = fill === VOID ? null : fill;
    this.p18_1 = x;
    this.q18_1 = y;
    this.r18_1 = width;
    this.s18_1 = height;
    this.t18_1 = color;
    this.u18_1 = lineWidth;
    this.v18_1 = fill;
  }
  protoOf(CircleItem).l18 = function (_set____db54di) {
    this.v18_1 = _set____db54di;
  };
  protoOf(CircleItem).m18 = function () {
    return this.v18_1;
  };
  function Companion_5() {
  }
  protoOf(Companion_5).p15 = function () {
    return $serializer_getInstance_5();
  };
  var Companion_instance_6;
  function Companion_getInstance_5() {
    return Companion_instance_6;
  }
  function $serializer_5() {
    $serializer_instance_5 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('stickynode.canvas.PolygonItem', this, 8);
    tmp0_serialDesc.rh('x', false);
    tmp0_serialDesc.rh('y', false);
    tmp0_serialDesc.rh('width', false);
    tmp0_serialDesc.rh('height', false);
    tmp0_serialDesc.rh('sides', false);
    tmp0_serialDesc.rh('color', false);
    tmp0_serialDesc.rh('lineWidth', true);
    tmp0_serialDesc.rh('fill', true);
    this.w18_1 = tmp0_serialDesc;
  }
  protoOf($serializer_5).x18 = function (encoder, value) {
    var tmp0_desc = this.w18_1;
    var tmp1_output = encoder.de(tmp0_desc);
    tmp1_output.we(tmp0_desc, 0, value.y18_1);
    tmp1_output.we(tmp0_desc, 1, value.z18_1);
    tmp1_output.we(tmp0_desc, 2, value.a19_1);
    tmp1_output.we(tmp0_desc, 3, value.b19_1);
    tmp1_output.ve(tmp0_desc, 4, value.c19_1);
    tmp1_output.xe(tmp0_desc, 5, value.d19_1);
    if (tmp1_output.ef(tmp0_desc, 6) ? true : !(value.e19_1 === 3)) {
      tmp1_output.ve(tmp0_desc, 6, value.e19_1);
    }
    if (tmp1_output.ef(tmp0_desc, 7) ? true : !(value.f19_1 == null)) {
      tmp1_output.af(tmp0_desc, 7, StringSerializer_getInstance(), value.f19_1);
    }
    tmp1_output.ee(tmp0_desc);
  };
  protoOf($serializer_5).vc = function (encoder, value) {
    return this.x18(encoder, value instanceof PolygonItem ? value : THROW_CCE());
  };
  protoOf($serializer_5).wc = function (decoder) {
    var tmp0_desc = this.w18_1;
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
    var tmp12_input = decoder.de(tmp0_desc);
    if (tmp12_input.me()) {
      tmp4_local0 = tmp12_input.ge(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp12_input.ge(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp12_input.ge(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp12_input.ge(tmp0_desc, 3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp12_input.fe(tmp0_desc, 4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp12_input.he(tmp0_desc, 5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp12_input.fe(tmp0_desc, 6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp11_local7 = tmp12_input.ke(tmp0_desc, 7, StringSerializer_getInstance(), tmp11_local7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp12_input.ne(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp12_input.ge(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp12_input.ge(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp12_input.ge(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp12_input.ge(tmp0_desc, 3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp12_input.fe(tmp0_desc, 4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp12_input.he(tmp0_desc, 5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp12_input.fe(tmp0_desc, 6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp11_local7 = tmp12_input.ke(tmp0_desc, 7, StringSerializer_getInstance(), tmp11_local7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp12_input.ee(tmp0_desc);
    return PolygonItem_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, tmp11_local7, null);
  };
  protoOf($serializer_5).uc = function () {
    return this.w18_1;
  };
  protoOf($serializer_5).th = function () {
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
      throwMissingFieldException(seen0, 63, $serializer_getInstance_5().w18_1);
    }
    $this.y18_1 = x;
    $this.z18_1 = y;
    $this.a19_1 = width;
    $this.b19_1 = height;
    $this.c19_1 = sides;
    $this.d19_1 = color;
    if (0 === (seen0 & 64))
      $this.e19_1 = 3;
    else
      $this.e19_1 = lineWidth;
    if (0 === (seen0 & 128))
      $this.f19_1 = null;
    else
      $this.f19_1 = fill;
    return $this;
  }
  function PolygonItem_init_$Create$(seen0, x, y, width, height, sides, color, lineWidth, fill, serializationConstructorMarker) {
    return PolygonItem_init_$Init$(seen0, x, y, width, height, sides, color, lineWidth, fill, serializationConstructorMarker, objectCreate(protoOf(PolygonItem)));
  }
  function PolygonItem(x, y, width, height, sides, color, lineWidth, fill) {
    lineWidth = lineWidth === VOID ? 3 : lineWidth;
    fill = fill === VOID ? null : fill;
    this.y18_1 = x;
    this.z18_1 = y;
    this.a19_1 = width;
    this.b19_1 = height;
    this.c19_1 = sides;
    this.d19_1 = color;
    this.e19_1 = lineWidth;
    this.f19_1 = fill;
  }
  protoOf(PolygonItem).l18 = function (_set____db54di) {
    this.f19_1 = _set____db54di;
  };
  protoOf(PolygonItem).m18 = function () {
    return this.f19_1;
  };
  function Companion_6() {
  }
  protoOf(Companion_6).p15 = function () {
    return $serializer_getInstance_6();
  };
  var Companion_instance_7;
  function Companion_getInstance_6() {
    return Companion_instance_7;
  }
  function $serializer_6() {
    $serializer_instance_6 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('stickynode.canvas.ArrowItem', this, 6);
    tmp0_serialDesc.rh('startX', false);
    tmp0_serialDesc.rh('startY', false);
    tmp0_serialDesc.rh('endX', false);
    tmp0_serialDesc.rh('endY', false);
    tmp0_serialDesc.rh('color', false);
    tmp0_serialDesc.rh('lineWidth', true);
    this.g19_1 = tmp0_serialDesc;
  }
  protoOf($serializer_6).h19 = function (encoder, value) {
    var tmp0_desc = this.g19_1;
    var tmp1_output = encoder.de(tmp0_desc);
    tmp1_output.we(tmp0_desc, 0, value.i19_1);
    tmp1_output.we(tmp0_desc, 1, value.j19_1);
    tmp1_output.we(tmp0_desc, 2, value.k19_1);
    tmp1_output.we(tmp0_desc, 3, value.l19_1);
    tmp1_output.xe(tmp0_desc, 4, value.m19_1);
    if (tmp1_output.ef(tmp0_desc, 5) ? true : !(value.n19_1 === 3)) {
      tmp1_output.ve(tmp0_desc, 5, value.n19_1);
    }
    tmp1_output.ee(tmp0_desc);
  };
  protoOf($serializer_6).vc = function (encoder, value) {
    return this.h19(encoder, value instanceof ArrowItem ? value : THROW_CCE());
  };
  protoOf($serializer_6).wc = function (decoder) {
    var tmp0_desc = this.g19_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = 0.0;
    var tmp5_local1 = 0.0;
    var tmp6_local2 = 0.0;
    var tmp7_local3 = 0.0;
    var tmp8_local4 = null;
    var tmp9_local5 = 0;
    var tmp10_input = decoder.de(tmp0_desc);
    if (tmp10_input.me()) {
      tmp4_local0 = tmp10_input.ge(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp10_input.ge(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp10_input.ge(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp10_input.ge(tmp0_desc, 3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp10_input.he(tmp0_desc, 4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp10_input.fe(tmp0_desc, 5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp10_input.ne(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp10_input.ge(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp10_input.ge(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp10_input.ge(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp10_input.ge(tmp0_desc, 3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp10_input.he(tmp0_desc, 4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp10_input.fe(tmp0_desc, 5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp10_input.ee(tmp0_desc);
    return ArrowItem_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, null);
  };
  protoOf($serializer_6).uc = function () {
    return this.g19_1;
  };
  protoOf($serializer_6).th = function () {
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
      throwMissingFieldException(seen0, 31, $serializer_getInstance_6().g19_1);
    }
    $this.i19_1 = startX;
    $this.j19_1 = startY;
    $this.k19_1 = endX;
    $this.l19_1 = endY;
    $this.m19_1 = color;
    if (0 === (seen0 & 32))
      $this.n19_1 = 3;
    else
      $this.n19_1 = lineWidth;
    return $this;
  }
  function ArrowItem_init_$Create$(seen0, startX, startY, endX, endY, color, lineWidth, serializationConstructorMarker) {
    return ArrowItem_init_$Init$(seen0, startX, startY, endX, endY, color, lineWidth, serializationConstructorMarker, objectCreate(protoOf(ArrowItem)));
  }
  function ArrowItem(startX, startY, endX, endY, color, lineWidth) {
    lineWidth = lineWidth === VOID ? 3 : lineWidth;
    this.i19_1 = startX;
    this.j19_1 = startY;
    this.k19_1 = endX;
    this.l19_1 = endY;
    this.m19_1 = color;
    this.n19_1 = lineWidth;
  }
  function Companion_7() {
    Companion_instance_8 = this;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.g17_1 = [new ArrayListSerializer($serializer_getInstance_1()), new ArrayListSerializer($serializer_getInstance_2()), new ArrayListSerializer($serializer_getInstance_3()), new ArrayListSerializer($serializer_getInstance_4()), new ArrayListSerializer($serializer_getInstance_5()), new ArrayListSerializer($serializer_getInstance_6())];
  }
  protoOf(Companion_7).p15 = function () {
    return $serializer_getInstance_7();
  };
  var Companion_instance_8;
  function Companion_getInstance_7() {
    if (Companion_instance_8 == null)
      new Companion_7();
    return Companion_instance_8;
  }
  function $serializer_7() {
    $serializer_instance_7 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('stickynode.canvas.Items', this, 6);
    tmp0_serialDesc.rh('strokeItems', false);
    tmp0_serialDesc.rh('textItems', false);
    tmp0_serialDesc.rh('rectangleItems', false);
    tmp0_serialDesc.rh('circleItems', false);
    tmp0_serialDesc.rh('polygonItems', false);
    tmp0_serialDesc.rh('arrowItems', false);
    this.o19_1 = tmp0_serialDesc;
  }
  protoOf($serializer_7).p19 = function (encoder, value) {
    var tmp0_desc = this.o19_1;
    var tmp1_output = encoder.de(tmp0_desc);
    var tmp2_cached = Companion_getInstance_7().g17_1;
    tmp1_output.ye(tmp0_desc, 0, tmp2_cached[0], value.h17_1);
    tmp1_output.ye(tmp0_desc, 1, tmp2_cached[1], value.i17_1);
    tmp1_output.ye(tmp0_desc, 2, tmp2_cached[2], value.j17_1);
    tmp1_output.ye(tmp0_desc, 3, tmp2_cached[3], value.k17_1);
    tmp1_output.ye(tmp0_desc, 4, tmp2_cached[4], value.l17_1);
    tmp1_output.ye(tmp0_desc, 5, tmp2_cached[5], value.m17_1);
    tmp1_output.ee(tmp0_desc);
  };
  protoOf($serializer_7).vc = function (encoder, value) {
    return this.p19(encoder, value instanceof Items ? value : THROW_CCE());
  };
  protoOf($serializer_7).wc = function (decoder) {
    var tmp0_desc = this.o19_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_local5 = null;
    var tmp10_input = decoder.de(tmp0_desc);
    var tmp11_cached = Companion_getInstance_7().g17_1;
    if (tmp10_input.me()) {
      tmp4_local0 = tmp10_input.ie(tmp0_desc, 0, tmp11_cached[0], tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp10_input.ie(tmp0_desc, 1, tmp11_cached[1], tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp10_input.ie(tmp0_desc, 2, tmp11_cached[2], tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp10_input.ie(tmp0_desc, 3, tmp11_cached[3], tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp10_input.ie(tmp0_desc, 4, tmp11_cached[4], tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp10_input.ie(tmp0_desc, 5, tmp11_cached[5], tmp9_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp10_input.ne(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp10_input.ie(tmp0_desc, 0, tmp11_cached[0], tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp10_input.ie(tmp0_desc, 1, tmp11_cached[1], tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp10_input.ie(tmp0_desc, 2, tmp11_cached[2], tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp10_input.ie(tmp0_desc, 3, tmp11_cached[3], tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp10_input.ie(tmp0_desc, 4, tmp11_cached[4], tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp10_input.ie(tmp0_desc, 5, tmp11_cached[5], tmp9_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp10_input.ee(tmp0_desc);
    return Items_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, null);
  };
  protoOf($serializer_7).uc = function () {
    return this.o19_1;
  };
  protoOf($serializer_7).th = function () {
    var tmp0_cached = Companion_getInstance_7().g17_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [tmp0_cached[0], tmp0_cached[1], tmp0_cached[2], tmp0_cached[3], tmp0_cached[4], tmp0_cached[5]];
  };
  var $serializer_instance_7;
  function $serializer_getInstance_7() {
    if ($serializer_instance_7 == null)
      new $serializer_7();
    return $serializer_instance_7;
  }
  function Items_init_$Init$(seen0, strokeItems, textItems, rectangleItems, circleItems, polygonItems, arrowItems, serializationConstructorMarker, $this) {
    if (!(63 === (63 & seen0))) {
      throwMissingFieldException(seen0, 63, $serializer_getInstance_7().o19_1);
    }
    $this.h17_1 = strokeItems;
    $this.i17_1 = textItems;
    $this.j17_1 = rectangleItems;
    $this.k17_1 = circleItems;
    $this.l17_1 = polygonItems;
    $this.m17_1 = arrowItems;
    return $this;
  }
  function Items_init_$Create$(seen0, strokeItems, textItems, rectangleItems, circleItems, polygonItems, arrowItems, serializationConstructorMarker) {
    return Items_init_$Init$(seen0, strokeItems, textItems, rectangleItems, circleItems, polygonItems, arrowItems, serializationConstructorMarker, objectCreate(protoOf(Items)));
  }
  function Items(strokeItems, textItems, rectangleItems, circleItems, polygonItems, arrowItems) {
    Companion_getInstance_7();
    this.h17_1 = strokeItems;
    this.i17_1 = textItems;
    this.j17_1 = rectangleItems;
    this.k17_1 = circleItems;
    this.l17_1 = polygonItems;
    this.m17_1 = arrowItems;
  }
  function State() {
    this.a13_1 = 'draw';
    this.b13_1 = '#000000';
    this.c13_1 = false;
    this.d13_1 = false;
    this.e13_1 = null;
    this.f13_1 = null;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.g13_1 = ArrayList_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_0.h13_1 = ArrayList_init_$Create$();
    var tmp_1 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_1.i13_1 = ArrayList_init_$Create$();
    var tmp_2 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_2.j13_1 = ArrayList_init_$Create$();
    var tmp_3 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_3.k13_1 = ArrayList_init_$Create$();
    var tmp_4 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_4.l13_1 = ArrayList_init_$Create$();
    this.m13_1 = 5;
    this.n13_1 = null;
    this.o13_1 = null;
    this.p13_1 = null;
    this.q13_1 = null;
    this.r13_1 = null;
    this.s13_1 = null;
    this.t13_1 = null;
    this.u13_1 = null;
    this.v13_1 = null;
    this.w13_1 = null;
    this.x13_1 = 3;
    this.y13_1 = 20;
  }
  function json$lambda($this$Json) {
    _init_properties_Model_kt__1gdqdl();
    $this$Json.jk_1 = true;
    $this$Json.hk_1 = true;
    $this$Json.ik_1 = false;
    return Unit_instance;
  }
  var properties_initialized_Model_kt_bjs3d3;
  function _init_properties_Model_kt__1gdqdl() {
    if (!properties_initialized_Model_kt_bjs3d3) {
      properties_initialized_Model_kt_bjs3d3 = true;
      json = Json(VOID, json$lambda);
    }
  }
  function saveCanvas(canvas, state) {
    localStorage.setItem('drawingCanvas', canvas.toDataURL('image/png'));
    localStorage.setItem('drawingCanvasText', get_json().qj(ListSerializer(Companion_instance_3.p15()), state.h13_1));
    localStorage.setItem('drawingCanvasRectangles', get_json().qj(ListSerializer(Companion_instance_4.p15()), state.i13_1));
    localStorage.setItem('drawingCanvasCircles', get_json().qj(ListSerializer(Companion_instance_5.p15()), state.j13_1));
    localStorage.setItem('drawingCanvasPolygons', get_json().qj(ListSerializer(Companion_instance_6.p15()), state.k13_1));
    localStorage.setItem('drawingCanvasStrokes', get_json().qj(ListSerializer(Companion_getInstance_1().p15()), state.g13_1));
    localStorage.setItem('drawingCanvasArrows', get_json().qj(ListSerializer(Companion_instance_7.p15()), state.l13_1));
  }
  function loadCanvas(canvas, context, state) {
    var tmp0_safe_receiver = localStorage.getItem('drawingCanvasCircles');
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'stickynode.canvas.loadCanvas.<anonymous>' call
      state.j13_1.x(get_json().rj(ListSerializer(Companion_instance_5.p15()), tmp0_safe_receiver));
    }
    var tmp1_safe_receiver = localStorage.getItem('drawingCanvasPolygons');
    if (tmp1_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'stickynode.canvas.loadCanvas.<anonymous>' call
      state.k13_1.x(get_json().rj(ListSerializer(Companion_instance_6.p15()), tmp1_safe_receiver));
    }
    var tmp2_safe_receiver = localStorage.getItem('drawingCanvasStrokes');
    if (tmp2_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'stickynode.canvas.loadCanvas.<anonymous>' call
      state.g13_1.x(get_json().rj(ListSerializer(Companion_getInstance_1().p15()), tmp2_safe_receiver));
    }
    var tmp3_safe_receiver = localStorage.getItem('drawingCanvasArrows');
    if (tmp3_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'stickynode.canvas.loadCanvas.<anonymous>' call
      state.l13_1.x(get_json().rj(ListSerializer(Companion_instance_7.p15()), tmp3_safe_receiver));
    }
    var tmp4_safe_receiver = localStorage.getItem('drawingCanvasText');
    if (tmp4_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'stickynode.canvas.loadCanvas.<anonymous>' call
      state.h13_1.x(get_json().rj(ListSerializer(Companion_instance_3.p15()), tmp4_safe_receiver));
    }
    var tmp5_safe_receiver = localStorage.getItem('drawingCanvasRectangles');
    if (tmp5_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'stickynode.canvas.loadCanvas.<anonymous>' call
      state.i13_1.x(get_json().rj(ListSerializer(Companion_instance_4.p15()), tmp5_safe_receiver));
    }
    var tmp6_elvis_lhs = localStorage.getItem('drawingCanvas');
    var tmp;
    if (tmp6_elvis_lhs == null) {
      return Unit_instance;
    } else {
      tmp = tmp6_elvis_lhs;
    }
    var savedDrawing = tmp;
    var tmp_0 = document.createElement('img');
    var image = tmp_0 instanceof HTMLImageElement ? tmp_0 : THROW_CCE();
    image.onload = loadCanvas$lambda(context, image);
    image.src = savedDrawing;
  }
  function clearCanvas(canvas, context, state) {
    context.clearRect(0.0, 0.0, canvas.width, canvas.height);
    context.globalCompositeOperation = 'source-over';
    localStorage.removeItem('drawingCanvas');
    localStorage.removeItem('drawingCanvasText');
    localStorage.removeItem('drawingCanvasRectangles');
    localStorage.removeItem('drawingCanvasCircles');
    localStorage.removeItem('drawingCanvasPolygons');
    localStorage.removeItem('drawingCanvasStrokes');
    localStorage.removeItem('drawingCanvasArrows');
    state.h13_1.z2();
    state.i13_1.z2();
    state.j13_1.z2();
    state.k13_1.z2();
    state.g13_1.z2();
    state.l13_1.z2();
  }
  function loadCanvas$lambda($context, $image) {
    return function (it) {
      $context.drawImage($image, 0.0, 0.0);
      return null;
    };
  }
  function handleFreehandMouseDown(h, position) {
    var state = h.k15_1;
    if (state.c13_1) {
      state.d13_1 = true;
      var removed = eraseAt(state, position, h.j15_1);
      if (removed) {
        h.n15();
        h.l15_1();
      }
      return Unit_instance;
    }
    var existingStroke = findStrokeAt(state.g13_1, position);
    if (!(existingStroke == null)) {
      state.o13_1 = existingStroke;
      state.v13_1 = new Point(position.f15_1 - existingStroke.s17_1.h(0).f15_1, position.g15_1 - existingStroke.s17_1.h(0).g15_1);
      return Unit_instance;
    }
    var stroke = new Stroke(mutableListOf([position]), state.b13_1, state.x13_1);
    state.n13_1 = stroke;
    state.g13_1.n(stroke);
    h.n15();
  }
  function handleFreehandMouseMove(h, position) {
    var state = h.k15_1;
    if (state.c13_1 && state.d13_1) {
      var removed = eraseAt(state, position, h.j15_1);
      if (removed) {
        h.n15();
        h.l15_1();
      }
      return Unit_instance;
    }
    var editing = state.o13_1;
    if (!(editing == null)) {
      var firstPoint = editing.s17_1.h(0);
      var offset = ensureNotNull(state.v13_1);
      var deltaX = position.f15_1 - offset.f15_1 - firstPoint.f15_1;
      var deltaY = position.g15_1 - offset.g15_1 - firstPoint.g15_1;
      var tmp = editing;
      // Inline function 'kotlin.collections.map' call
      var this_0 = editing.s17_1;
      // Inline function 'kotlin.collections.mapTo' call
      var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(this_0, 10));
      var _iterator__ex2g4s = this_0.e();
      while (_iterator__ex2g4s.f()) {
        var item = _iterator__ex2g4s.g();
        // Inline function 'stickynode.canvas.events.handleFreehandMouseMove.<anonymous>' call
        var tmp$ret$0 = new Point(item.f15_1 + deltaX, item.g15_1 + deltaY);
        destination.n(tmp$ret$0);
      }
      tmp.s17_1 = toMutableList(destination);
      h.n15();
      return Unit_instance;
    }
    var current = state.n13_1;
    if (!state.c13_1 && !(current == null)) {
      current.s17_1.n(position);
      h.n15();
      return Unit_instance;
    }
  }
  function handleFreehandMouseUp(h) {
    var state = h.k15_1;
    if (!(state.o13_1 == null)) {
      h.l15_1();
      state.o13_1 = null;
      state.v13_1 = null;
      return Unit_instance;
    }
    var current = state.n13_1;
    if (!(current == null)) {
      if (current.s17_1.i() < 2) {
        state.g13_1.i2(get_lastIndex(state.g13_1));
      }
      h.l15_1();
      state.n13_1 = null;
      return Unit_instance;
    }
    state.d13_1 = false;
  }
  function handleFreehandMouseLeave(h) {
    var state = h.k15_1;
    var current = state.n13_1;
    if (!(current == null) && current.s17_1.i() < 2) {
      state.g13_1.i2(get_lastIndex(state.g13_1));
    }
    if (state.d13_1 || !(state.n13_1 == null) || !(state.o13_1 == null))
      h.l15_1();
    state.d13_1 = false;
    state.n13_1 = null;
    state.o13_1 = null;
    state.v13_1 = null;
  }
  function Handlers(canvas, context, textContext, state, saveCanvas, renderOverlay) {
    this.h15_1 = canvas;
    this.i15_1 = context;
    this.j15_1 = textContext;
    this.k15_1 = state;
    this.l15_1 = saveCanvas;
    this.m15_1 = renderOverlay;
  }
  protoOf(Handlers).n15 = function () {
    return this.m15_1(this.j15_1, this.k15_1);
  };
  function findCircleAt(circleItems, position) {
    var tmp0 = asReversed(circleItems);
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var _iterator__ex2g4s = tmp0.e();
      while (_iterator__ex2g4s.f()) {
        var element = _iterator__ex2g4s.g();
        // Inline function 'stickynode.canvas.events.findCircleAt.<anonymous>' call
        var centerX = element.p18_1 + element.r18_1 / 2;
        var centerY = element.q18_1 + element.s18_1 / 2;
        var radiusX = element.r18_1 / 2;
        var radiusY = element.s18_1 / 2;
        var tmp;
        if (radiusX === 0.0 || radiusY === 0.0) {
          tmp = false;
        } else {
          var normalizedX = (position.f15_1 - centerX) / radiusX;
          var normalizedY = (position.g15_1 - centerY) / radiusY;
          tmp = normalizedX * normalizedX + normalizedY * normalizedY <= 1;
        }
        if (tmp) {
          tmp$ret$1 = element;
          break $l$block;
        }
      }
      tmp$ret$1 = null;
    }
    return tmp$ret$1;
  }
  function findRectangleAt(rectangleItems, position) {
    var tmp0 = asReversed(rectangleItems);
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var _iterator__ex2g4s = tmp0.e();
      while (_iterator__ex2g4s.f()) {
        var element = _iterator__ex2g4s.g();
        // Inline function 'stickynode.canvas.events.findRectangleAt.<anonymous>' call
        if (position.f15_1 >= element.e18_1 && position.f15_1 <= element.e18_1 + element.g18_1 && position.g15_1 >= element.f18_1 && position.g15_1 <= element.f18_1 + element.h18_1) {
          tmp$ret$1 = element;
          break $l$block;
        }
      }
      tmp$ret$1 = null;
    }
    return tmp$ret$1;
  }
  function findPolygonAt(polygonItems, position) {
    var tmp0 = asReversed(polygonItems);
    var tmp$ret$3;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var _iterator__ex2g4s = tmp0.e();
      while (_iterator__ex2g4s.f()) {
        var element = _iterator__ex2g4s.g();
        // Inline function 'stickynode.canvas.events.findPolygonAt.<anonymous>' call
        var centerX = element.y18_1 + element.a19_1 / 2;
        var centerY = element.z18_1 + element.b19_1 / 2;
        var tmp0_0 = element.a19_1;
        // Inline function 'kotlin.math.min' call
        var b = element.b19_1;
        var radius = Math.min(tmp0_0, b) / 2;
        var tmp;
        if (radius === 0.0) {
          tmp = false;
        } else {
          var tmp2 = position.f15_1 - centerX;
          // Inline function 'kotlin.math.hypot' call
          var y = position.g15_1 - centerY;
          tmp = hypot(tmp2, y) <= radius;
        }
        if (tmp) {
          tmp$ret$3 = element;
          break $l$block;
        }
      }
      tmp$ret$3 = null;
    }
    return tmp$ret$3;
  }
  function findStrokeAt(strokeItems, position) {
    var tmp0 = asReversed(strokeItems);
    var tmp$ret$7;
    $l$block_1: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var _iterator__ex2g4s = tmp0.e();
      while (_iterator__ex2g4s.f()) {
        var element = _iterator__ex2g4s.g();
        // Inline function 'stickynode.canvas.events.findStrokeAt.<anonymous>' call
        var points = element.s17_1;
        var tmp0_0 = get_indices(points);
        var tmp$ret$0;
        $l$block_0: {
          // Inline function 'kotlin.collections.any' call
          var tmp;
          if (isInterface(tmp0_0, Collection)) {
            tmp = tmp0_0.o();
          } else {
            tmp = false;
          }
          if (tmp) {
            tmp$ret$0 = false;
            break $l$block_0;
          }
          var inductionVariable = tmp0_0.ob_1;
          var last = tmp0_0.pb_1;
          if (inductionVariable <= last)
            do {
              var element_0 = inductionVariable;
              inductionVariable = inductionVariable + 1 | 0;
              // Inline function 'stickynode.canvas.events.findStrokeAt.<anonymous>.<anonymous>' call
              var index = element_0;
              var point = points.h(index);
              var nextPoint = getOrNull(points, index + 1 | 0);
              var tmp_0;
              if (nextPoint == null) {
                var tmp0_1 = point.f15_1 - position.f15_1;
                // Inline function 'kotlin.math.hypot' call
                var y = point.g15_1 - position.g15_1;
                tmp_0 = hypot(tmp0_1, y) <= 8;
              } else {
                var segmentX = nextPoint.f15_1 - point.f15_1;
                var segmentY = nextPoint.g15_1 - point.g15_1;
                var segmentLengthSquared = segmentX * segmentX + segmentY * segmentY;
                var tmp_1;
                if (segmentLengthSquared === 0.0) {
                  tmp_1 = 0.0;
                } else {
                  // Inline function 'kotlin.math.min' call
                  var b = ((position.f15_1 - point.f15_1) * segmentX + (position.g15_1 - point.g15_1) * segmentY) / segmentLengthSquared;
                  // Inline function 'kotlin.math.max' call
                  var b_0 = Math.min(1.0, b);
                  tmp_1 = Math.max(0.0, b_0);
                }
                var projection = tmp_1;
                var closestX = point.f15_1 + projection * segmentX;
                var closestY = point.g15_1 + projection * segmentY;
                var tmp6 = position.f15_1 - closestX;
                // Inline function 'kotlin.math.hypot' call
                var y_0 = position.g15_1 - closestY;
                tmp_0 = hypot(tmp6, y_0) <= 8;
              }
              if (tmp_0) {
                tmp$ret$0 = true;
                break $l$block_0;
              }
            }
             while (!(element_0 === last));
          tmp$ret$0 = false;
        }
        if (tmp$ret$0) {
          tmp$ret$7 = element;
          break $l$block_1;
        }
      }
      tmp$ret$7 = null;
    }
    return tmp$ret$7;
  }
  function pointToSegmentDistance(px, py, x1, y1, x2, y2) {
    var dx = x2 - x1;
    var dy = y2 - y1;
    var lengthSq = dx * dx + dy * dy;
    if (lengthSq === 0.0) {
      var tmp0 = px - x1;
      // Inline function 'kotlin.math.hypot' call
      var y = py - y1;
      return hypot(tmp0, y);
    }
    // Inline function 'kotlin.math.min' call
    var b = ((px - x1) * dx + (py - y1) * dy) / lengthSq;
    // Inline function 'kotlin.math.max' call
    var b_0 = Math.min(1.0, b);
    var t = Math.max(0.0, b_0);
    var projX = x1 + t * dx;
    var projY = y1 + t * dy;
    var tmp6 = px - projX;
    // Inline function 'kotlin.math.hypot' call
    var y_0 = py - projY;
    return hypot(tmp6, y_0);
  }
  function findArrowAt(arrowItems, position, threshold) {
    threshold = threshold === VOID ? 8.0 : threshold;
    var tmp0 = asReversed(arrowItems);
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var _iterator__ex2g4s = tmp0.e();
      while (_iterator__ex2g4s.f()) {
        var element = _iterator__ex2g4s.g();
        // Inline function 'stickynode.canvas.events.findArrowAt.<anonymous>' call
        if (pointToSegmentDistance(position.f15_1, position.g15_1, element.i19_1, element.j19_1, element.k19_1, element.l19_1) <= threshold) {
          tmp$ret$1 = element;
          break $l$block;
        }
      }
      tmp$ret$1 = null;
    }
    return tmp$ret$1;
  }
  function findTextAt(textContext, textItems, position) {
    // Inline function 'kotlin.js.asDynamic' call
    textContext.textBaseline = 'top';
    var tmp1 = asReversed(textItems);
    var tmp$ret$8;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var _iterator__ex2g4s = tmp1.e();
      while (_iterator__ex2g4s.f()) {
        var element = _iterator__ex2g4s.g();
        // Inline function 'stickynode.canvas.events.findTextAt.<anonymous>' call
        var tmp;
        // Inline function 'kotlin.text.isEmpty' call
        var this_0 = element.a18_1;
        if (charSequenceLength(this_0) === 0) {
          tmp = false;
        } else {
          var fontSize = element.b18_1;
          textContext.font = '' + fontSize + 'px sans-serif';
          var lines = split(element.a18_1, ['\n']);
          // Inline function 'kotlin.collections.maxOf' call
          var iterator = lines.e();
          if (!iterator.f())
            throw NoSuchElementException_init_$Create$();
          // Inline function 'stickynode.canvas.events.findTextAt.<anonymous>.<anonymous>' call
          var line = iterator.g();
          var maxValue = textContext.measureText(line).width;
          while (iterator.f()) {
            // Inline function 'stickynode.canvas.events.findTextAt.<anonymous>.<anonymous>' call
            var line_0 = iterator.g();
            var v = textContext.measureText(line_0).width;
            // Inline function 'kotlin.comparisons.maxOf' call
            var a = maxValue;
            maxValue = Math.max(a, v);
          }
          // Inline function 'kotlin.math.max' call
          var a_0 = maxValue;
          var width = Math.max(a_0, 1.0);
          var height = imul(lines.i(), getLineHeight(fontSize));
          tmp = (position.f15_1 >= element.x17_1 && position.f15_1 <= element.x17_1 + width && position.g15_1 >= element.y17_1 && position.g15_1 <= element.y17_1 + height);
        }
        if (tmp) {
          tmp$ret$8 = element;
          break $l$block;
        }
      }
      tmp$ret$8 = null;
    }
    return tmp$ret$8;
  }
  function get_SHAPE_CONFIGS() {
    _init_properties_ShapeDefinitions_kt__xfukox();
    return SHAPE_CONFIGS;
  }
  var SHAPE_CONFIGS;
  function ShapeConfig() {
  }
  function TypedShapeConfig(getItems, findAt, getEditing, setEditing, origin, preview, create) {
    ShapeConfig.call(this);
    this.v19_1 = getItems;
    this.w19_1 = findAt;
    this.x19_1 = getEditing;
    this.y19_1 = setEditing;
    this.z19_1 = origin;
    this.a1a_1 = preview;
    this.b1a_1 = create;
  }
  protoOf(TypedShapeConfig).q19 = function (state, position) {
    var tmp0_elvis_lhs = this.w19_1(this.v19_1(state), position);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var existing = tmp;
    this.y19_1(state, existing);
    var o = this.z19_1(existing);
    state.v13_1 = new Point(position.f15_1 - o.f15_1, position.g15_1 - o.g15_1);
    return true;
  };
  protoOf(TypedShapeConfig).r19 = function (state) {
    return !(this.x19_1(state) == null);
  };
  protoOf(TypedShapeConfig).s19 = function (state) {
    return this.y19_1(state, null);
  };
  protoOf(TypedShapeConfig).t19 = function (context, start, current, state) {
    return this.a1a_1(context, start, current, state);
  };
  protoOf(TypedShapeConfig).u19 = function (state, start, end) {
    this.v19_1(state).n(this.b1a_1(start, end, state));
  };
  function SHAPE_CONFIGS$lambda(it) {
    _init_properties_ShapeDefinitions_kt__xfukox();
    return it.l13_1;
  }
  function SHAPE_CONFIGS$lambda_0(items, p) {
    _init_properties_ShapeDefinitions_kt__xfukox();
    return findArrowAt(items, p);
  }
  function SHAPE_CONFIGS$lambda_1(it) {
    _init_properties_ShapeDefinitions_kt__xfukox();
    return it.s13_1;
  }
  function SHAPE_CONFIGS$lambda_2(s, v) {
    _init_properties_ShapeDefinitions_kt__xfukox();
    s.s13_1 = v;
    return Unit_instance;
  }
  function SHAPE_CONFIGS$lambda_3(it) {
    _init_properties_ShapeDefinitions_kt__xfukox();
    return new Point(it.i19_1, it.j19_1);
  }
  function SHAPE_CONFIGS$lambda_4(ctx, start, current, s) {
    _init_properties_ShapeDefinitions_kt__xfukox();
    drawArrow(ctx, start, current, s.b13_1, s.x13_1);
    return Unit_instance;
  }
  function SHAPE_CONFIGS$lambda_5(start, end, s) {
    _init_properties_ShapeDefinitions_kt__xfukox();
    return new ArrowItem(start.f15_1, start.g15_1, end.f15_1, end.g15_1, s.b13_1, s.x13_1);
  }
  function SHAPE_CONFIGS$lambda_6(it) {
    _init_properties_ShapeDefinitions_kt__xfukox();
    return it.j13_1;
  }
  function SHAPE_CONFIGS$lambda_7(items, p) {
    _init_properties_ShapeDefinitions_kt__xfukox();
    return findCircleAt(items, p);
  }
  function SHAPE_CONFIGS$lambda_8(it) {
    _init_properties_ShapeDefinitions_kt__xfukox();
    return it.p13_1;
  }
  function SHAPE_CONFIGS$lambda_9(s, v) {
    _init_properties_ShapeDefinitions_kt__xfukox();
    s.p13_1 = v;
    return Unit_instance;
  }
  function SHAPE_CONFIGS$lambda_10(it) {
    _init_properties_ShapeDefinitions_kt__xfukox();
    return new Point(it.p18_1, it.q18_1);
  }
  function SHAPE_CONFIGS$lambda_11(ctx, start, current, s) {
    _init_properties_ShapeDefinitions_kt__xfukox();
    drawCircle(ctx, start, current, s.b13_1, s.x13_1);
    return Unit_instance;
  }
  function SHAPE_CONFIGS$lambda_12(start, end, s) {
    _init_properties_ShapeDefinitions_kt__xfukox();
    var b = getBoundingBox(start, end);
    return new CircleItem(b.b15_1, b.c15_1, b.d15_1, b.e15_1, s.b13_1, s.x13_1);
  }
  function SHAPE_CONFIGS$lambda_13(it) {
    _init_properties_ShapeDefinitions_kt__xfukox();
    return it.i13_1;
  }
  function SHAPE_CONFIGS$lambda_14(items, p) {
    _init_properties_ShapeDefinitions_kt__xfukox();
    return findRectangleAt(items, p);
  }
  function SHAPE_CONFIGS$lambda_15(it) {
    _init_properties_ShapeDefinitions_kt__xfukox();
    return it.q13_1;
  }
  function SHAPE_CONFIGS$lambda_16(s, v) {
    _init_properties_ShapeDefinitions_kt__xfukox();
    s.q13_1 = v;
    return Unit_instance;
  }
  function SHAPE_CONFIGS$lambda_17(it) {
    _init_properties_ShapeDefinitions_kt__xfukox();
    return new Point(it.e18_1, it.f18_1);
  }
  function SHAPE_CONFIGS$lambda_18(ctx, start, current, s) {
    _init_properties_ShapeDefinitions_kt__xfukox();
    drawRectangle(ctx, start, current, s.b13_1, s.x13_1);
    return Unit_instance;
  }
  function SHAPE_CONFIGS$lambda_19(start, end, s) {
    _init_properties_ShapeDefinitions_kt__xfukox();
    var b = getBoundingBox(start, end);
    return new RectangleItem(b.b15_1, b.c15_1, b.d15_1, b.e15_1, s.b13_1, s.x13_1);
  }
  function SHAPE_CONFIGS$lambda_20(it) {
    _init_properties_ShapeDefinitions_kt__xfukox();
    return it.k13_1;
  }
  function SHAPE_CONFIGS$lambda_21(items, p) {
    _init_properties_ShapeDefinitions_kt__xfukox();
    return findPolygonAt(items, p);
  }
  function SHAPE_CONFIGS$lambda_22(it) {
    _init_properties_ShapeDefinitions_kt__xfukox();
    return it.r13_1;
  }
  function SHAPE_CONFIGS$lambda_23(s, v) {
    _init_properties_ShapeDefinitions_kt__xfukox();
    s.r13_1 = v;
    return Unit_instance;
  }
  function SHAPE_CONFIGS$lambda_24(it) {
    _init_properties_ShapeDefinitions_kt__xfukox();
    return new Point(it.y18_1, it.z18_1);
  }
  function SHAPE_CONFIGS$lambda_25(ctx, start, current, s) {
    _init_properties_ShapeDefinitions_kt__xfukox();
    drawPolygon(ctx, start, current, s.m13_1, s.b13_1, s.x13_1);
    return Unit_instance;
  }
  function SHAPE_CONFIGS$lambda_26(start, end, s) {
    _init_properties_ShapeDefinitions_kt__xfukox();
    var b = getBoundingBox(start, end);
    return new PolygonItem(b.b15_1, b.c15_1, b.d15_1, b.e15_1, s.m13_1, s.b13_1, s.x13_1);
  }
  var properties_initialized_ShapeDefinitions_kt_s3rlc1;
  function _init_properties_ShapeDefinitions_kt__xfukox() {
    if (!properties_initialized_ShapeDefinitions_kt_s3rlc1) {
      properties_initialized_ShapeDefinitions_kt_s3rlc1 = true;
      var tmp = SHAPE_CONFIGS$lambda;
      var tmp_0 = SHAPE_CONFIGS$lambda_0;
      var tmp_1 = SHAPE_CONFIGS$lambda_1;
      var tmp_2 = SHAPE_CONFIGS$lambda_2;
      var tmp_3 = SHAPE_CONFIGS$lambda_3;
      var tmp_4 = SHAPE_CONFIGS$lambda_4;
      var tmp_5 = to('arrow', new TypedShapeConfig(tmp, tmp_0, tmp_1, tmp_2, tmp_3, tmp_4, SHAPE_CONFIGS$lambda_5));
      var tmp_6 = SHAPE_CONFIGS$lambda_6;
      var tmp_7 = SHAPE_CONFIGS$lambda_7;
      var tmp_8 = SHAPE_CONFIGS$lambda_8;
      var tmp_9 = SHAPE_CONFIGS$lambda_9;
      var tmp_10 = SHAPE_CONFIGS$lambda_10;
      var tmp_11 = SHAPE_CONFIGS$lambda_11;
      var tmp_12 = to('circle', new TypedShapeConfig(tmp_6, tmp_7, tmp_8, tmp_9, tmp_10, tmp_11, SHAPE_CONFIGS$lambda_12));
      var tmp_13 = SHAPE_CONFIGS$lambda_13;
      var tmp_14 = SHAPE_CONFIGS$lambda_14;
      var tmp_15 = SHAPE_CONFIGS$lambda_15;
      var tmp_16 = SHAPE_CONFIGS$lambda_16;
      var tmp_17 = SHAPE_CONFIGS$lambda_17;
      var tmp_18 = SHAPE_CONFIGS$lambda_18;
      var tmp_19 = to('rectangle', new TypedShapeConfig(tmp_13, tmp_14, tmp_15, tmp_16, tmp_17, tmp_18, SHAPE_CONFIGS$lambda_19));
      var tmp_20 = SHAPE_CONFIGS$lambda_20;
      var tmp_21 = SHAPE_CONFIGS$lambda_21;
      var tmp_22 = SHAPE_CONFIGS$lambda_22;
      var tmp_23 = SHAPE_CONFIGS$lambda_23;
      var tmp_24 = SHAPE_CONFIGS$lambda_24;
      var tmp_25 = SHAPE_CONFIGS$lambda_25;
      SHAPE_CONFIGS = mapOf([tmp_5, tmp_12, tmp_19, to('polygon', new TypedShapeConfig(tmp_20, tmp_21, tmp_22, tmp_23, tmp_24, tmp_25, SHAPE_CONFIGS$lambda_26))]);
    }
  }
  function takeCanvasSnapshot(canvas, context, state, position) {
    state.e13_1 = position;
    state.w13_1 = position;
    state.f13_1 = context.getImageData(0.0, 0.0, canvas.width, canvas.height);
  }
  function handleShapeMouseDown(h, position) {
    var state = h.k15_1;
    var tmp0_elvis_lhs = get_SHAPE_CONFIGS().d1(state.a13_1);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var config = tmp;
    if (config.q19(state, position))
      return true;
    takeCanvasSnapshot(h.h15_1, h.i15_1, state, position);
    return true;
  }
  function handleShapeMouseMove(h, position) {
    var state = h.k15_1;
    var config = get_SHAPE_CONFIGS().d1(state.a13_1);
    var start = state.e13_1;
    if (!(config == null) && !(start == null)) {
      h.i15_1.putImageData(ensureNotNull(state.f13_1), 0.0, 0.0);
      config.t19(h.i15_1, start, position, state);
      return true;
    }
    var arrow = state.s13_1;
    if (!(arrow == null)) {
      var offset = ensureNotNull(state.v13_1);
      var dx = arrow.k19_1 - arrow.i19_1;
      var dy = arrow.l19_1 - arrow.j19_1;
      var newStartX = position.f15_1 - offset.f15_1;
      var newStartY = position.g15_1 - offset.g15_1;
      arrow.i19_1 = newStartX;
      arrow.j19_1 = newStartY;
      arrow.k19_1 = newStartX + dx;
      arrow.l19_1 = newStartY + dy;
      h.n15();
      return true;
    }
    var offset_0 = state.v13_1;
    var circle = state.p13_1;
    var rectangle = state.q13_1;
    var polygon = state.r13_1;
    if (!(circle == null)) {
      circle.p18_1 = position.f15_1 - ensureNotNull(offset_0).f15_1;
      circle.q18_1 = position.g15_1 - offset_0.g15_1;
    } else if (!(rectangle == null)) {
      rectangle.e18_1 = position.f15_1 - ensureNotNull(offset_0).f15_1;
      rectangle.f18_1 = position.g15_1 - offset_0.g15_1;
    } else if (!(polygon == null)) {
      polygon.y18_1 = position.f15_1 - ensureNotNull(offset_0).f15_1;
      polygon.z18_1 = position.g15_1 - offset_0.g15_1;
    } else
      return false;
    h.n15();
    return true;
  }
  function handleShapeMouseUp(h) {
    var state = h.k15_1;
    var tmp0_elvis_lhs = get_SHAPE_CONFIGS().d1(state.a13_1);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var config = tmp;
    if (config.r19(state)) {
      h.l15_1();
      config.s19(state);
      state.v13_1 = null;
      return true;
    }
    var start = state.e13_1;
    if (!(start == null)) {
      var endPosition = ensureNotNull(state.w13_1);
      var tmp0 = endPosition.f15_1 - start.f15_1;
      // Inline function 'kotlin.math.hypot' call
      var y = endPosition.g15_1 - start.g15_1;
      var moved = hypot(tmp0, y) > 3;
      if (moved) {
        config.u19(state, start, endPosition);
      }
      h.i15_1.putImageData(ensureNotNull(state.f13_1), 0.0, 0.0);
      h.n15();
      h.l15_1();
    }
    state.e13_1 = null;
    state.f13_1 = null;
    return true;
  }
  function openNewTextBox(h, position) {
    if (!(document.querySelector('textarea.sticky-node-textbox') == null))
      return Unit_instance;
    var state = h.k15_1;
    var tmp = state.b13_1;
    var tmp_0 = state.y13_1;
    createTextBox(h.h15_1, position, tmp, VOID, tmp_0, openNewTextBox$lambda(state, h));
  }
  function handleTextMouseDown(h, event, position) {
    var state = h.k15_1;
    if (!(state.a13_1 === 'text'))
      return false;
    event.preventDefault();
    var existingText = findTextAt(h.j15_1, state.h13_1, position);
    if (event.button === 0) {
      if (!(existingText == null)) {
        state.t13_1 = existingText;
        state.u13_1 = null;
        state.v13_1 = new Point(position.f15_1 - existingText.x17_1, position.g15_1 - existingText.y17_1);
        return true;
      }
      state.u13_1 = position;
      return true;
    }
    if (!(event.button === 2))
      return true;
    if (existingText == null)
      return true;
    var tmp0_canvas = h.h15_1;
    var tmp1_position = new Point(existingText.x17_1, existingText.y17_1);
    var tmp2_color = state.b13_1;
    var tmp3_fontSize = state.y13_1;
    createTextBox(tmp0_canvas, tmp1_position, tmp2_color, existingText, tmp3_fontSize, handleTextMouseDown$lambda(existingText, h));
    return true;
  }
  function handleTextMouseMove(h, position) {
    var state = h.k15_1;
    if (!(state.u13_1 == null))
      return true;
    var tmp0_elvis_lhs = state.t13_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var editing = tmp;
    var offset = ensureNotNull(state.v13_1);
    editing.x17_1 = position.f15_1 - offset.f15_1;
    editing.y17_1 = position.g15_1 - offset.g15_1;
    h.n15();
    return true;
  }
  function handleTextMouseUp(h) {
    var state = h.k15_1;
    if (!(state.a13_1 === 'text'))
      return false;
    if (!(state.t13_1 == null)) {
      h.l15_1();
      state.t13_1 = null;
      state.v13_1 = null;
      return true;
    }
    var pending = state.u13_1;
    if (!(pending == null)) {
      state.u13_1 = null;
      openNewTextBox(h, pending);
    }
    return true;
  }
  function openNewTextBox$lambda($state, $h) {
    return function (updatedText) {
      $state.h13_1.n(updatedText);
      $h.n15();
      $h.l15_1();
      return Unit_instance;
    };
  }
  function handleTextMouseDown$lambda($existingText, $h) {
    return function (updatedText) {
      $existingText.x17_1 = updatedText.x17_1;
      $existingText.y17_1 = updatedText.y17_1;
      $existingText.z17_1 = updatedText.z17_1;
      $existingText.b18_1 = updatedText.b18_1;
      $existingText.a18_1 = updatedText.a18_1;
      $h.n15();
      $h.l15_1();
      return Unit_instance;
    };
  }
  function renderText(textContext, textItems) {
    // Inline function 'kotlin.js.asDynamic' call
    textContext.textBaseline = 'top';
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = textItems.e();
    while (_iterator__ex2g4s.f()) {
      var element = _iterator__ex2g4s.g();
      // Inline function 'stickynode.canvas.render.renderText.<anonymous>' call
      textContext.font = '' + element.b18_1 + 'px sans-serif';
      textContext.fillStyle = element.z17_1;
      var lineHeight = getLineHeight(element.b18_1);
      // Inline function 'kotlin.collections.forEachIndexed' call
      var index = 0;
      var _iterator__ex2g4s_0 = split(element.a18_1, ['\n']).e();
      while (_iterator__ex2g4s_0.f()) {
        var item = _iterator__ex2g4s_0.g();
        var _unary__edvuaz = index;
        index = _unary__edvuaz + 1 | 0;
        // Inline function 'stickynode.canvas.render.renderText.<anonymous>.<anonymous>' call
        var index_0 = checkIndexOverflow(_unary__edvuaz);
        textContext.fillText(item, element.x17_1, element.y17_1 + imul(index_0, lineHeight));
      }
    }
  }
  function renderStrokes(context, strokeItems) {
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = strokeItems.e();
    while (_iterator__ex2g4s.f()) {
      var element = _iterator__ex2g4s.g();
      $l$block: {
        // Inline function 'stickynode.canvas.render.renderStrokes.<anonymous>' call
        var points = element.s17_1;
        if (points.i() < 2) {
          break $l$block;
        }
        context.globalCompositeOperation = 'source-over';
        context.strokeStyle = element.t17_1;
        context.lineWidth = element.u17_1;
        // Inline function 'kotlin.js.asDynamic' call
        context.lineCap = 'round';
        // Inline function 'kotlin.js.asDynamic' call
        context.lineJoin = 'round';
        context.beginPath();
        context.moveTo(points.h(0).f15_1, points.h(0).g15_1);
        // Inline function 'kotlin.collections.forEach' call
        var _iterator__ex2g4s_0 = drop(points, 1).e();
        while (_iterator__ex2g4s_0.f()) {
          var element_0 = _iterator__ex2g4s_0.g();
          // Inline function 'stickynode.canvas.render.renderStrokes.<anonymous>.<anonymous>' call
          context.lineTo(element_0.f15_1, element_0.g15_1);
        }
        context.stroke();
      }
    }
  }
  function renderOverlay(textContext, state) {
    textContext.clearRect(0.0, 0.0, textContext.canvas.width, textContext.canvas.height);
    renderStrokes(textContext, state.g13_1);
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = state.i13_1.e();
    while (_iterator__ex2g4s.f()) {
      var element = _iterator__ex2g4s.g();
      // Inline function 'stickynode.canvas.render.renderOverlay.<anonymous>' call
      drawStoredRectangle(textContext, element);
    }
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s_0 = state.j13_1.e();
    while (_iterator__ex2g4s_0.f()) {
      var element_0 = _iterator__ex2g4s_0.g();
      // Inline function 'stickynode.canvas.render.renderOverlay.<anonymous>' call
      drawStoredCircle(textContext, element_0);
    }
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s_1 = state.k13_1.e();
    while (_iterator__ex2g4s_1.f()) {
      var element_1 = _iterator__ex2g4s_1.g();
      // Inline function 'stickynode.canvas.render.renderOverlay.<anonymous>' call
      drawStoredPolygon(textContext, element_1);
    }
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s_2 = state.l13_1.e();
    while (_iterator__ex2g4s_2.f()) {
      var element_2 = _iterator__ex2g4s_2.g();
      // Inline function 'stickynode.canvas.render.renderOverlay.<anonymous>' call
      drawStoredArrow(textContext, element_2);
    }
    renderText(textContext, state.h13_1);
  }
  function drawArrowLine(context, fromX, fromY, toX, toY, color, lineWidth) {
    lineWidth = lineWidth === VOID ? 3 : lineWidth;
    // Inline function 'kotlin.math.max' call
    var b = lineWidth * 4.0;
    var headLength = Math.max(16.0, b);
    var tmp2 = toY - fromY;
    // Inline function 'kotlin.math.atan2' call
    var x = toX - fromX;
    var angle = Math.atan2(tmp2, x);
    context.strokeStyle = color;
    context.lineWidth = lineWidth;
    // Inline function 'kotlin.js.asDynamic' call
    context.lineCap = 'round';
    // Inline function 'kotlin.js.asDynamic' call
    context.lineJoin = 'round';
    context.beginPath();
    context.moveTo(fromX, fromY);
    context.lineTo(toX, toY);
    context.stroke();
    var arrowAngle = 3.141592653589793 / 6;
    context.beginPath();
    // Inline function 'kotlin.math.cos' call
    var x_0 = angle - arrowAngle;
    var tmp = toX - headLength * Math.cos(x_0);
    // Inline function 'kotlin.math.sin' call
    var x_1 = angle - arrowAngle;
    var tmp$ret$5 = Math.sin(x_1);
    context.moveTo(tmp, toY - headLength * tmp$ret$5);
    context.lineTo(toX, toY);
    // Inline function 'kotlin.math.cos' call
    var x_2 = angle + arrowAngle;
    var tmp_0 = toX - headLength * Math.cos(x_2);
    // Inline function 'kotlin.math.sin' call
    var x_3 = angle + arrowAngle;
    var tmp$ret$7 = Math.sin(x_3);
    context.lineTo(tmp_0, toY - headLength * tmp$ret$7);
    context.stroke();
  }
  function drawArrow(context, startPosition, currentPosition, color, lineWidth) {
    lineWidth = lineWidth === VOID ? 3 : lineWidth;
    context.globalCompositeOperation = 'source-over';
    drawArrowLine(context, startPosition.f15_1, startPosition.g15_1, currentPosition.f15_1, currentPosition.g15_1, color, lineWidth);
  }
  function drawStoredArrow(context, item) {
    drawArrowLine(context, item.i19_1, item.j19_1, item.k19_1, item.l19_1, item.m19_1, item.n19_1);
  }
  function drawCircle(context, startPosition, currentPosition, color, lineWidth) {
    lineWidth = lineWidth === VOID ? 3 : lineWidth;
    var box = getBoundingBox(startPosition, currentPosition);
    drawStoredCircle(context, new CircleItem(box.b15_1, box.c15_1, box.d15_1, box.e15_1, color, lineWidth));
  }
  function drawStoredCircle(context, item) {
    context.globalCompositeOperation = 'source-over';
    context.strokeStyle = item.t18_1;
    context.lineWidth = item.u18_1;
    context.beginPath();
    context.ellipse(item.p18_1 + item.r18_1 / 2, item.q18_1 + item.s18_1 / 2, item.r18_1 / 2, item.s18_1 / 2, 0.0, 0.0, 2 * 3.141592653589793);
    var fill = item.v18_1;
    // Inline function 'kotlin.text.isNullOrEmpty' call
    if (!(fill == null || charSequenceLength(fill) === 0)) {
      context.fillStyle = fill;
      context.fill();
    }
    context.stroke();
  }
  function removeFirstMatching(list, predicate) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlin.collections.indexOfLast' call
      var iterator = list.j(list.i());
      while (iterator.o2()) {
        if (predicate(iterator.q2())) {
          tmp$ret$0 = iterator.p2();
          break $l$block;
        }
      }
      tmp$ret$0 = -1;
    }
    var index = tmp$ret$0;
    if (!(index === -1)) {
      list.i2(index);
      return true;
    }
    return false;
  }
  function eraseAt(state, position, textContext) {
    var text = findTextAt(textContext, state.h13_1, position);
    var tmp;
    if (!(text == null)) {
      tmp = removeFirstMatching(state.h13_1, eraseAt$lambda(text));
    } else {
      tmp = false;
    }
    if (tmp) {
      return true;
    }
    var circle = findCircleAt(state.j13_1, position);
    var tmp_0;
    if (!(circle == null)) {
      tmp_0 = removeFirstMatching(state.j13_1, eraseAt$lambda_0(circle));
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      return true;
    }
    var polygon = findPolygonAt(state.k13_1, position);
    var tmp_1;
    if (!(polygon == null)) {
      tmp_1 = removeFirstMatching(state.k13_1, eraseAt$lambda_1(polygon));
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      return true;
    }
    var rect = findRectangleAt(state.i13_1, position);
    var tmp_2;
    if (!(rect == null)) {
      tmp_2 = removeFirstMatching(state.i13_1, eraseAt$lambda_2(rect));
    } else {
      tmp_2 = false;
    }
    if (tmp_2) {
      return true;
    }
    var arrow = findArrowAt(state.l13_1, position);
    var tmp_3;
    if (!(arrow == null)) {
      tmp_3 = removeFirstMatching(state.l13_1, eraseAt$lambda_3(arrow));
    } else {
      tmp_3 = false;
    }
    if (tmp_3) {
      return true;
    }
    var stroke = findStrokeAt(state.g13_1, position);
    var tmp_4;
    if (!(stroke == null)) {
      tmp_4 = removeFirstMatching(state.g13_1, eraseAt$lambda_4(stroke));
    } else {
      tmp_4 = false;
    }
    if (tmp_4) {
      return true;
    }
    return false;
  }
  function eraseAt$lambda($text) {
    return function (it) {
      return it === $text;
    };
  }
  function eraseAt$lambda_0($circle) {
    return function (it) {
      return it === $circle;
    };
  }
  function eraseAt$lambda_1($polygon) {
    return function (it) {
      return it === $polygon;
    };
  }
  function eraseAt$lambda_2($rect) {
    return function (it) {
      return it === $rect;
    };
  }
  function eraseAt$lambda_3($arrow) {
    return function (it) {
      return it === $arrow;
    };
  }
  function eraseAt$lambda_4($stroke) {
    return function (it) {
      return it === $stroke;
    };
  }
  function fillAt(state, position, color) {
    var tmp0_elvis_lhs = findPolygonAt(state.k13_1, position);
    var tmp1_elvis_lhs = tmp0_elvis_lhs == null ? findCircleAt(state.j13_1, position) : tmp0_elvis_lhs;
    var target = tmp1_elvis_lhs == null ? findRectangleAt(state.i13_1, position) : tmp1_elvis_lhs;
    if (target == null)
      return false;
    if (color == null) {
      // Inline function 'kotlin.text.isNullOrEmpty' call
      var this_0 = target.m18();
      if (this_0 == null || charSequenceLength(this_0) === 0)
        return false;
      target.l18(null);
      return true;
    }
    if (target.m18() == color)
      return false;
    target.l18(color);
    return true;
  }
  function drawPolygon(context, startPosition, currentPosition, sides, color, lineWidth) {
    lineWidth = lineWidth === VOID ? 3 : lineWidth;
    var box = getBoundingBox(startPosition, currentPosition);
    drawStoredPolygon(context, new PolygonItem(box.b15_1, box.c15_1, box.d15_1, box.e15_1, sides, color, lineWidth));
  }
  function drawStoredPolygon(context, item) {
    var centerX = item.y18_1 + item.a19_1 / 2;
    var centerY = item.z18_1 + item.b19_1 / 2;
    var tmp0 = item.a19_1;
    // Inline function 'kotlin.math.min' call
    var b = item.b19_1;
    var radius = Math.min(tmp0, b) / 2;
    var angleStep = 3.141592653589793 * 2 / item.c19_1;
    context.globalCompositeOperation = 'source-over';
    context.strokeStyle = item.d19_1;
    context.lineWidth = item.e19_1;
    context.beginPath();
    var inductionVariable = 0;
    var last = item.c19_1;
    if (inductionVariable < last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var angle = -3.141592653589793 / 2 + index * angleStep;
        // Inline function 'kotlin.math.cos' call
        var pointX = centerX + radius * Math.cos(angle);
        // Inline function 'kotlin.math.sin' call
        var pointY = centerY + radius * Math.sin(angle);
        if (index === 0) {
          context.moveTo(pointX, pointY);
        } else {
          context.lineTo(pointX, pointY);
        }
      }
       while (inductionVariable < last);
    context.closePath();
    var fill = item.f19_1;
    // Inline function 'kotlin.text.isNullOrEmpty' call
    if (!(fill == null || charSequenceLength(fill) === 0)) {
      context.fillStyle = fill;
      context.fill();
    }
    context.stroke();
  }
  function drawRectangle(context, startPosition, currentPosition, color, lineWidth) {
    lineWidth = lineWidth === VOID ? 3 : lineWidth;
    context.globalCompositeOperation = 'source-over';
    context.strokeStyle = color;
    context.lineWidth = lineWidth;
    context.strokeRect(startPosition.f15_1, startPosition.g15_1, currentPosition.f15_1 - startPosition.f15_1, currentPosition.g15_1 - startPosition.g15_1);
  }
  function drawStoredRectangle(context, item) {
    context.globalCompositeOperation = 'source-over';
    var fill = item.k18_1;
    // Inline function 'kotlin.text.isNullOrEmpty' call
    if (!(fill == null || charSequenceLength(fill) === 0)) {
      context.fillStyle = fill;
      context.fillRect(item.e18_1, item.f18_1, item.g18_1, item.h18_1);
    }
    context.lineWidth = item.j18_1;
    context.strokeStyle = item.i18_1;
    context.strokeRect(item.e18_1, item.f18_1, item.g18_1, item.h18_1);
  }
  function getLineHeight(fontSize) {
    fontSize = fontSize === VOID ? 20 : fontSize;
    // Inline function 'kotlin.math.floor' call
    var x = fontSize * 1.2 + 0.5;
    var tmp$ret$0 = Math.floor(x);
    return numberToInt(tmp$ret$0);
  }
  function createTextBox(canvas, position, color, textItem, fontSize, onCommit) {
    textItem = textItem === VOID ? null : textItem;
    fontSize = fontSize === VOID ? 20 : fontSize;
    var bounds = canvas.getBoundingClientRect();
    var tmp = document.createElement('textarea');
    var textBox = tmp instanceof HTMLTextAreaElement ? tmp : THROW_CCE();
    textBox.className = 'sticky-node-textbox';
    textBox.style.position = 'fixed';
    textBox.style.left = '' + (bounds.left + position.f15_1 - 8) + 'px';
    textBox.style.top = '' + (bounds.top + position.g15_1 - 8) + 'px';
    textBox.style.boxSizing = 'content-box';
    textBox.style.width = '180px';
    textBox.style.height = '70px';
    textBox.style.padding = '6px';
    textBox.style.margin = '0';
    textBox.style.backgroundColor = 'white';
    textBox.style.border = '2px solid red';
    textBox.style.color = color;
    textBox.style.zIndex = '1000';
    var tmp1_elvis_lhs = textItem == null ? null : textItem.a18_1;
    textBox.value = tmp1_elvis_lhs == null ? '' : tmp1_elvis_lhs;
    ensureNotNull(document.body).appendChild(textBox);
    var committed = {_v: false};
    var allowBlur = {_v: false};
    var commitText = createTextBox$lambda(committed, textBox, onCommit, textItem, position, color, fontSize);
    var tmp_0 = window;
    tmp_0.requestAnimationFrame(createTextBox$lambda_0(textBox, allowBlur));
    textBox.addEventListener('keydown', createTextBox$lambda_1(commitText, committed, textBox));
    textBox.addEventListener('blur', createTextBox$lambda_2(allowBlur, textBox, commitText));
  }
  function createTextBox$lambda($committed, $textBox, $onCommit, $textItem, $position, $color, $fontSize) {
    return function () {
      var tmp;
      if (!$committed._v) {
        $committed._v = true;
        // Inline function 'kotlin.text.trim' call
        var this_0 = $textBox.value;
        var text = toString(trim(isCharSequence(this_0) ? this_0 : THROW_CCE()));
        // Inline function 'kotlin.text.isNotEmpty' call
        if (charSequenceLength(text) > 0) {
          var tmp0_safe_receiver = $textItem;
          var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.x17_1;
          var tmp6_x = tmp1_elvis_lhs == null ? $position.f15_1 : tmp1_elvis_lhs;
          var tmp2_safe_receiver = $textItem;
          var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.y17_1;
          var tmp7_y = tmp3_elvis_lhs == null ? $position.g15_1 : tmp3_elvis_lhs;
          var tmp4_safe_receiver = $textItem;
          var tmp5_elvis_lhs = tmp4_safe_receiver == null ? null : tmp4_safe_receiver.z17_1;
          var tmp8_color = tmp5_elvis_lhs == null ? $color : tmp5_elvis_lhs;
          $onCommit(new TextItem(tmp6_x, tmp7_y, tmp8_color, text, $fontSize));
        }
        $textBox.remove();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function createTextBox$lambda$lambda($allowBlur) {
    return function (it) {
      $allowBlur._v = true;
      return Unit_instance;
    };
  }
  function createTextBox$lambda_0($textBox, $allowBlur) {
    return function (it) {
      $textBox.focus();
      $textBox.select();
      var tmp = window;
      tmp.requestAnimationFrame(createTextBox$lambda$lambda($allowBlur));
      return Unit_instance;
    };
  }
  function createTextBox$lambda_1($commitText, $committed, $textBox) {
    return function (e) {
      var event = e instanceof KeyboardEvent ? e : THROW_CCE();
      var tmp;
      if (event.key === 'Enter' && !event.shiftKey) {
        event.preventDefault();
        tmp = $commitText();
      }
      var tmp_0;
      if (event.key === 'Escape') {
        $committed._v = true;
        $textBox.remove();
        tmp_0 = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function createTextBox$lambda_2($allowBlur, $textBox, $commitText) {
    return function (it) {
      var tmp;
      if (!$allowBlur._v) {
        $textBox.focus();
        tmp = Unit_instance;
      } else {
        tmp = $commitText();
      }
      return Unit_instance;
    };
  }
  //region block: post-declaration
  protoOf($serializer).uh = typeParametersSerializers;
  protoOf($serializer_0).uh = typeParametersSerializers;
  protoOf($serializer_1).uh = typeParametersSerializers;
  protoOf($serializer_2).uh = typeParametersSerializers;
  protoOf($serializer_3).uh = typeParametersSerializers;
  protoOf($serializer_4).uh = typeParametersSerializers;
  protoOf($serializer_5).uh = typeParametersSerializers;
  protoOf($serializer_6).uh = typeParametersSerializers;
  protoOf($serializer_7).uh = typeParametersSerializers;
  //endregion
  //region block: init
  Companion_instance_1 = new Companion_0();
  Companion_instance_3 = new Companion_2();
  Companion_instance_4 = new Companion_3();
  Companion_instance_5 = new Companion_4();
  Companion_instance_6 = new Companion_5();
  Companion_instance_7 = new Companion_6();
  //endregion
  mainWrapper();
  return _;
}));

//# sourceMappingURL=sticky-node.js.map
