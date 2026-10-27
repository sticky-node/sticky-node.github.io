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
  var THROW_CCE = kotlin_kotlin.$_$.qb;
  var ensureNotNull = kotlin_kotlin.$_$.gc;
  var Unit_getInstance = kotlin_kotlin.$_$.g4;
  var CoroutineImpl = kotlin_kotlin.$_$.l7;
  var protoOf = kotlin_kotlin.$_$.g9;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.b;
  var isInterface = kotlin_kotlin.$_$.v8;
  var VOID = kotlin_kotlin.$_$.d;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.v6;
  var initMetadataForLambda = kotlin_kotlin.$_$.l8;
  var MainScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.c;
  var launch = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.d;
  var SuspendFunction1 = kotlin_kotlin.$_$.m7;
  var toDouble = kotlin_kotlin.$_$.pa;
  var numberToInt = kotlin_kotlin.$_$.d9;
  var toDoubleOrNull = kotlin_kotlin.$_$.oa;
  var initMetadataForClass = kotlin_kotlin.$_$.h8;
  var ArrayListSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.o1;
  var initMetadataForCompanion = kotlin_kotlin.$_$.i8;
  var PluginGeneratedSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.v1;
  var emptyList = kotlin_kotlin.$_$.o5;
  var equals = kotlin_kotlin.$_$.a8;
  var UnknownFieldException_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.c;
  var StringSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.n;
  var IntSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.m;
  var typeParametersSerializers = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.q1;
  var GeneratedSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.r1;
  var initMetadataForObject = kotlin_kotlin.$_$.m8;
  var throwMissingFieldException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.y1;
  var objectCreate = kotlin_kotlin.$_$.f9;
  var Exception_init_$Create$ = kotlin_kotlin.$_$.c1;
  var isBlank = kotlin_kotlin.$_$.ca;
  var intercepted = kotlin_kotlin.$_$.x6;
  var SafeContinuation_init_$Create$ = kotlin_kotlin.$_$.x;
  var await_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.a;
  var Companion_getInstance = kotlin_kotlin.$_$.b4;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.z1;
  var initMetadataForCoroutine = kotlin_kotlin.$_$.j8;
  var Json = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.a;
  var mutableListOf = kotlin_kotlin.$_$.f6;
  var toMutableList = kotlin_kotlin.$_$.r6;
  var DoubleSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.l;
  var getNumberHashCode = kotlin_kotlin.$_$.d8;
  var initMetadataForInterface = kotlin_kotlin.$_$.k8;
  var get_nullable = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.q;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.h;
  var ListSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.o;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.a5;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.g;
  var get_lastIndex = kotlin_kotlin.$_$.y5;
  var asReversed = kotlin_kotlin.$_$.y4;
  var get_indices = kotlin_kotlin.$_$.v5;
  var Collection = kotlin_kotlin.$_$.i4;
  var getOrNull = kotlin_kotlin.$_$.r5;
  var charSequenceLength = kotlin_kotlin.$_$.w7;
  var split = kotlin_kotlin.$_$.ja;
  var NoSuchElementException_init_$Create$ = kotlin_kotlin.$_$.m1;
  var to = kotlin_kotlin.$_$.rc;
  var mapOf = kotlin_kotlin.$_$.e6;
  var checkIndexOverflow = kotlin_kotlin.$_$.z4;
  var drop = kotlin_kotlin.$_$.n5;
  var isCharSequence = kotlin_kotlin.$_$.r8;
  var trim = kotlin_kotlin.$_$.za;
  var toString = kotlin_kotlin.$_$.k9;
  //endregion
  //region block: pre-declaration
  initMetadataForLambda(main$lambda$slambda, CoroutineImpl, [CoroutineImpl], [1]);
  initMetadataForLambda(main$lambda$slambda_1, CoroutineImpl, [CoroutineImpl], [1]);
  initMetadataForClass(BoundingBox, 'BoundingBox');
  initMetadataForCompanion(Companion);
  initMetadataForObject($serializer, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(StickyDocument, 'StickyDocument', StickyDocument, VOID, VOID, VOID, VOID, {0: $serializer_getInstance});
  initMetadataForLambda(openFromFile$lambda$slambda, CoroutineImpl, [CoroutineImpl], [1]);
  initMetadataForCoroutine($saveToFileCOROUTINE$0, CoroutineImpl);
  initMetadataForClass(History, 'History');
  initMetadataForCompanion(Companion_0);
  initMetadataForObject($serializer_0, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(Point, 'Point', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_0});
  initMetadataForInterface(Fillable, 'Fillable');
  initMetadataForCompanion(Companion_1);
  initMetadataForObject($serializer_1, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(Stroke, 'Stroke', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_1});
  initMetadataForCompanion(Companion_2);
  initMetadataForObject($serializer_2, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(TextItem, 'TextItem', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_2});
  initMetadataForCompanion(Companion_3);
  initMetadataForObject($serializer_3, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(RectangleItem, 'RectangleItem', VOID, VOID, [Fillable], VOID, VOID, {0: $serializer_getInstance_3});
  initMetadataForCompanion(Companion_4);
  initMetadataForObject($serializer_4, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(CircleItem, 'CircleItem', VOID, VOID, [Fillable], VOID, VOID, {0: $serializer_getInstance_4});
  initMetadataForCompanion(Companion_5);
  initMetadataForObject($serializer_5, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(PolygonItem, 'PolygonItem', VOID, VOID, [Fillable], VOID, VOID, {0: $serializer_getInstance_5});
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
      return Unit_getInstance();
    };
  }
  function main$lambda_0($canvas, $state) {
    return function () {
      saveCanvas($canvas, $state);
      return Unit_getInstance();
    };
  }
  function main$lambda_1($persist, $history) {
    return function () {
      $persist();
      $history.record_fgmca7_k$();
      return Unit_getInstance();
    };
  }
  function main$lambda_2($state) {
    return function () {
      return !($state.get_startPosition_d95qiq_k$() == null) || !($state.get_currentStroke_z58r2w_k$() == null) || !($state.get_editingStroke_bi8r0n_k$() == null) || !($state.get_editingCircle_3rgtb3_k$() == null) || !($state.get_editingRectangle_ldge4g_k$() == null) || !($state.get_editingPolygon_q3jmob_k$() == null) || !($state.get_editingArrow_mtg0o6_k$() == null) || !($state.get_editingText_lck0p0_k$() == null) || !($state.get_pendingTextPosition_5yd58c_k$() == null);
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
      return Unit_getInstance();
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
      return Unit_getInstance();
    };
  }
  function main$lambda_5($canvas, $context, $state, $textContext, $history) {
    return function () {
      clearCanvas($canvas, $context, $state);
      renderOverlay($textContext, $state);
      $history.record_fgmca7_k$();
      return Unit_getInstance();
    };
  }
  function main$lambda$lambda($history) {
    return function () {
      return $history.undo_251ic_k$();
    };
  }
  function main$lambda_6($applyHistory, $history) {
    return function () {
      $applyHistory(main$lambda$lambda($history));
      return Unit_getInstance();
    };
  }
  function main$lambda$lambda_0($history) {
    return function () {
      return $history.redo_22xvi_k$();
    };
  }
  function main$lambda_7($applyHistory, $history) {
    return function () {
      $applyHistory(main$lambda$lambda_0($history));
      return Unit_getInstance();
    };
  }
  function main$lambda$slambda($state, resultContinuation) {
    this.$state_1 = $state;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(main$lambda$slambda).invoke_d9fzmj_k$ = function ($this$launch, $completion) {
    var tmp = this.create_rcuf4x_k$($this$launch, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(main$lambda$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_d9fzmj_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(main$lambda$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            this.set_state_rjd8d0_k$(1);
            suspendResult = saveToFile(this.$state_1, VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_getInstance();
          case 2:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 2) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  protoOf(main$lambda$slambda).create_rcuf4x_k$ = function ($this$launch, completion) {
    var i = new main$lambda$slambda(this.$state_1, completion);
    i.$this$launch_1 = $this$launch;
    return i;
  };
  protoOf(main$lambda$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function main$lambda$slambda_0($state, resultContinuation) {
    var i = new main$lambda$slambda($state, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.invoke_d9fzmj_k$($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function main$lambda_8($state) {
    return function (it) {
      var tmp = MainScope();
      launch(tmp, VOID, VOID, main$lambda$slambda_0($state, null));
      return Unit_getInstance();
    };
  }
  function main$lambda$slambda_1($state, $context, $canvas, $textContext, $history, resultContinuation) {
    this.$state_1 = $state;
    this.$context_1 = $context;
    this.$canvas_1 = $canvas;
    this.$textContext_1 = $textContext;
    this.$history_1 = $history;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(main$lambda$slambda_1).invoke_d9fzmj_k$ = function ($this$launch, $completion) {
    var tmp = this.create_rcuf4x_k$($this$launch, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(main$lambda$slambda_1).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_d9fzmj_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(main$lambda$slambda_1).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(3);
            this.set_state_rjd8d0_k$(1);
            suspendResult = openFromFile(this.$state_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            if (suspendResult) {
              this.$context_1.clearRect(0.0, 0.0, this.$canvas_1.width, this.$canvas_1.height);
              renderOverlay(this.$textContext_1, this.$state_1);
              saveCanvas(this.$canvas_1, this.$state_1);
              this.$history_1.record_fgmca7_k$();
              this.set_state_rjd8d0_k$(2);
              continue $sm;
            } else {
              this.set_state_rjd8d0_k$(2);
              continue $sm;
            }

          case 2:
            return Unit_getInstance();
          case 3:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 3) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  protoOf(main$lambda$slambda_1).create_rcuf4x_k$ = function ($this$launch, completion) {
    var i = new main$lambda$slambda_1(this.$state_1, this.$context_1, this.$canvas_1, this.$textContext_1, this.$history_1, completion);
    i.$this$launch_1 = $this$launch;
    return i;
  };
  protoOf(main$lambda$slambda_1).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function main$lambda$slambda_2($state, $context, $canvas, $textContext, $history, resultContinuation) {
    var i = new main$lambda$slambda_1($state, $context, $canvas, $textContext, $history, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.invoke_d9fzmj_k$($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function main$lambda_9($state, $context, $canvas, $textContext, $history) {
    return function (it) {
      var tmp = MainScope();
      launch(tmp, VOID, VOID, main$lambda$slambda_2($state, $context, $canvas, $textContext, $history, null));
      return Unit_getInstance();
    };
  }
  function renderOverlay$ref() {
    var l = function (p0, p1) {
      renderOverlay(p0, p1);
      return Unit_getInstance();
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
      $state.set_fontSize_6szsfv_k$(numberToInt(toDouble($fontSizeInput.value)));
      var tmp0_safe_receiver = $fontSizeValue;
      if (tmp0_safe_receiver == null)
        null;
      else {
        tmp0_safe_receiver.textContent = $fontSizeInput.value;
      }
      return Unit_getInstance();
    };
  }
  function setupControls$lambda_0($state, $lineWidthInput, $lineWidthValue) {
    return function (it) {
      $state.set_lineWidth_97ta37_k$(numberToInt(toDouble($lineWidthInput.value)));
      var tmp0_safe_receiver = $lineWidthValue;
      if (tmp0_safe_receiver == null)
        null;
      else {
        tmp0_safe_receiver.textContent = $lineWidthInput.value;
      }
      return Unit_getInstance();
    };
  }
  function setupControls$lambda_1($clearCanvas) {
    return function (it) {
      $clearCanvas();
      return Unit_getInstance();
    };
  }
  function setupControls$lambda_2($state, $eraserButton) {
    return function (it) {
      $state.set_tool_ony1u3_k$('draw');
      $state.set_erasing_9bfbf3_k$(false);
      $eraserButton.textContent = 'Eraser: Off';
      return Unit_getInstance();
    };
  }
  function setupControls$lambda_3($state) {
    return function (it) {
      $state.set_tool_ony1u3_k$('rectangle');
      $state.set_erasing_9bfbf3_k$(false);
      return Unit_getInstance();
    };
  }
  function setupControls$lambda_4($state, $colorPicker) {
    return function (it) {
      $state.set_selectedColor_xursdb_k$($colorPicker.value);
      return Unit_getInstance();
    };
  }
  function setupControls$lambda_5($state, $eraserButton) {
    return function (it) {
      $state.set_tool_ony1u3_k$('draw');
      $state.set_erasing_9bfbf3_k$(!$state.get_erasing_ng9ybq_k$());
      $eraserButton.textContent = $state.get_erasing_ng9ybq_k$() ? 'Eraser: On' : 'Eraser: Off';
      return Unit_getInstance();
    };
  }
  function setupControls$lambda_6($state) {
    return function (it) {
      $state.set_tool_ony1u3_k$('text');
      $state.set_erasing_9bfbf3_k$(false);
      return Unit_getInstance();
    };
  }
  function setupControls$lambda_7($state) {
    return function (it) {
      $state.set_tool_ony1u3_k$('circle');
      $state.set_erasing_9bfbf3_k$(false);
      return Unit_getInstance();
    };
  }
  function setupControls$lambda_8($state) {
    return function (it) {
      $state.set_tool_ony1u3_k$('arrow');
      $state.set_erasing_9bfbf3_k$(false);
      return Unit_getInstance();
    };
  }
  function setupControls$lambda_9($state, $eraserButton) {
    return function (it) {
      $state.set_tool_ony1u3_k$('fill');
      $state.set_erasing_9bfbf3_k$(false);
      $eraserButton.textContent = 'Eraser: Off';
      return Unit_getInstance();
    };
  }
  function setupControls$lambda_10($polygonSidesInput, $state) {
    return function (it) {
      var tmp0_safe_receiver = toDoubleOrNull($polygonSidesInput.value);
      var sides = tmp0_safe_receiver == null ? null : numberToInt(tmp0_safe_receiver);
      var tmp;
      if (!(sides == null) && sides >= 3) {
        $state.set_polygonSides_7fzqbb_k$(sides);
        $state.set_tool_ony1u3_k$('polygon');
        $state.set_erasing_9bfbf3_k$(false);
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function setupControls$lambda_11($undo) {
    return function (it) {
      $undo();
      return Unit_getInstance();
    };
  }
  function setupControls$lambda_12($redo) {
    return function (it) {
      $redo();
      return Unit_getInstance();
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
        return Unit_getInstance();
      }
      var tmp_4;
      if (!(event.ctrlKey || event.metaKey)) {
        return Unit_getInstance();
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
      return Unit_getInstance();
    };
  }
  function getMousePosition(canvas, event) {
    var rectangle = canvas.getBoundingClientRect();
    return new Point(event.clientX - rectangle.left, event.clientY - rectangle.top);
  }
  function BoundingBox(x, y, width, height) {
    this.x_1 = x;
    this.y_1 = y;
    this.width_1 = width;
    this.height_1 = height;
  }
  protoOf(BoundingBox).get_x_1mhr67_k$ = function () {
    return this.x_1;
  };
  protoOf(BoundingBox).get_y_1mhr68_k$ = function () {
    return this.y_1;
  };
  protoOf(BoundingBox).get_width_j0q4yl_k$ = function () {
    return this.width_1;
  };
  protoOf(BoundingBox).get_height_e7t92o_k$ = function () {
    return this.height_1;
  };
  function getBoundingBox(start, end) {
    var tmp0 = start.get_x_1mhr67_k$();
    // Inline function 'kotlin.math.min' call
    var b = end.get_x_1mhr67_k$();
    var tmp = Math.min(tmp0, b);
    var tmp2 = start.get_y_1mhr68_k$();
    // Inline function 'kotlin.math.min' call
    var b_0 = end.get_y_1mhr68_k$();
    var tmp_0 = Math.min(tmp2, b_0);
    // Inline function 'kotlin.math.abs' call
    var x = end.get_x_1mhr67_k$() - start.get_x_1mhr67_k$();
    var tmp_1 = Math.abs(x);
    // Inline function 'kotlin.math.abs' call
    var x_0 = end.get_y_1mhr68_k$() - start.get_y_1mhr68_k$();
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
      if ($state.get_tool_wov2zl_k$() === 'text' || $state.get_tool_wov2zl_k$() === 'fill') {
        event.preventDefault();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function setupCanvasEvents$lambda_0($canvas, $state, $h, $saveCanvas) {
    return function (e) {
      var event = e instanceof MouseEvent ? e : THROW_CCE();
      var position = getMousePosition($canvas, event);
      var tmp;
      if ($state.get_erasing_ng9ybq_k$()) {
        handleFreehandMouseDown($h, position);
        return Unit_getInstance();
      }
      var tmp_0;
      if ($state.get_tool_wov2zl_k$() === 'fill') {
        event.preventDefault();
        var color = event.button === 2 ? null : $state.get_selectedColor_mfz4gv_k$();
        if (fillAt($state, position, color)) {
          $h.render_dje1iy_k$();
          $saveCanvas();
        }
        return Unit_getInstance();
      }
      var tmp_1;
      if (handleTextMouseDown($h, event, position)) {
        return Unit_getInstance();
      }
      var tmp_2;
      if (handleShapeMouseDown($h, position)) {
        return Unit_getInstance();
      }
      handleFreehandMouseDown($h, position);
      return Unit_getInstance();
    };
  }
  function setupCanvasEvents$lambda_1($canvas, $state, $h) {
    return function (e) {
      var position = getMousePosition($canvas, e instanceof MouseEvent ? e : THROW_CCE());
      $state.set_lastPosition_mmd7ci_k$(position);
      var tmp;
      if ($state.get_erasing_ng9ybq_k$()) {
        handleFreehandMouseMove($h, position);
        return Unit_getInstance();
      }
      var tmp_0;
      if (handleTextMouseMove($h, position)) {
        return Unit_getInstance();
      }
      var tmp_1;
      if (handleShapeMouseMove($h, position)) {
        return Unit_getInstance();
      }
      handleFreehandMouseMove($h, position);
      return Unit_getInstance();
    };
  }
  function setupCanvasEvents$lambda_2($state, $h) {
    return function (it) {
      var tmp;
      if ($state.get_erasing_ng9ybq_k$()) {
        handleFreehandMouseUp($h);
        return Unit_getInstance();
      }
      var tmp_0;
      if (handleTextMouseUp($h)) {
        return Unit_getInstance();
      }
      var tmp_1;
      if (handleShapeMouseUp($h)) {
        return Unit_getInstance();
      }
      handleFreehandMouseUp($h);
      return Unit_getInstance();
    };
  }
  function setupCanvasEvents$lambda_3($h) {
    return function (it) {
      handleFreehandMouseLeave($h);
      return Unit_getInstance();
    };
  }
  function get_prettyJson() {
    _init_properties_Files_kt__abgarp();
    return prettyJson;
  }
  var prettyJson;
  function _get_$childSerializers__r2zwns($this) {
    return $this.$childSerializers_1;
  }
  function Companion() {
    Companion_instance = this;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.$childSerializers_1 = [null, null, new ArrayListSerializer($serializer_getInstance_1()), new ArrayListSerializer($serializer_getInstance_2()), new ArrayListSerializer($serializer_getInstance_3()), new ArrayListSerializer($serializer_getInstance_4()), new ArrayListSerializer($serializer_getInstance_5()), new ArrayListSerializer($serializer_getInstance_6())];
  }
  protoOf(Companion).serializer_9w0wvi_k$ = function () {
    return $serializer_getInstance();
  };
  var Companion_instance;
  function Companion_getInstance_0() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function $serializer() {
    $serializer_instance = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('stickynode.canvas.StickyDocument', this, 8);
    tmp0_serialDesc.addElement_5pzumi_k$('app', true);
    tmp0_serialDesc.addElement_5pzumi_k$('version', true);
    tmp0_serialDesc.addElement_5pzumi_k$('strokeItems', true);
    tmp0_serialDesc.addElement_5pzumi_k$('textItems', true);
    tmp0_serialDesc.addElement_5pzumi_k$('rectangleItems', true);
    tmp0_serialDesc.addElement_5pzumi_k$('circleItems', true);
    tmp0_serialDesc.addElement_5pzumi_k$('polygonItems', true);
    tmp0_serialDesc.addElement_5pzumi_k$('arrowItems', true);
    this.descriptor_1 = tmp0_serialDesc;
  }
  protoOf($serializer).serialize_htk3u2_k$ = function (encoder, value) {
    var tmp0_desc = this.descriptor_1;
    var tmp1_output = encoder.beginStructure_yljocp_k$(tmp0_desc);
    var tmp2_cached = Companion_getInstance_0().$childSerializers_1;
    if (tmp1_output.shouldEncodeElementDefault_x8eyid_k$(tmp0_desc, 0) ? true : !(value.app_1 === '')) {
      tmp1_output.encodeStringElement_1n5wu2_k$(tmp0_desc, 0, value.app_1);
    }
    if (tmp1_output.shouldEncodeElementDefault_x8eyid_k$(tmp0_desc, 1) ? true : !(value.version_1 === 1)) {
      tmp1_output.encodeIntElement_krhhce_k$(tmp0_desc, 1, value.version_1);
    }
    if (tmp1_output.shouldEncodeElementDefault_x8eyid_k$(tmp0_desc, 2) ? true : !equals(value.strokeItems_1, emptyList())) {
      tmp1_output.encodeSerializableElement_isqxcl_k$(tmp0_desc, 2, tmp2_cached[2], value.strokeItems_1);
    }
    if (tmp1_output.shouldEncodeElementDefault_x8eyid_k$(tmp0_desc, 3) ? true : !equals(value.textItems_1, emptyList())) {
      tmp1_output.encodeSerializableElement_isqxcl_k$(tmp0_desc, 3, tmp2_cached[3], value.textItems_1);
    }
    if (tmp1_output.shouldEncodeElementDefault_x8eyid_k$(tmp0_desc, 4) ? true : !equals(value.rectangleItems_1, emptyList())) {
      tmp1_output.encodeSerializableElement_isqxcl_k$(tmp0_desc, 4, tmp2_cached[4], value.rectangleItems_1);
    }
    if (tmp1_output.shouldEncodeElementDefault_x8eyid_k$(tmp0_desc, 5) ? true : !equals(value.circleItems_1, emptyList())) {
      tmp1_output.encodeSerializableElement_isqxcl_k$(tmp0_desc, 5, tmp2_cached[5], value.circleItems_1);
    }
    if (tmp1_output.shouldEncodeElementDefault_x8eyid_k$(tmp0_desc, 6) ? true : !equals(value.polygonItems_1, emptyList())) {
      tmp1_output.encodeSerializableElement_isqxcl_k$(tmp0_desc, 6, tmp2_cached[6], value.polygonItems_1);
    }
    if (tmp1_output.shouldEncodeElementDefault_x8eyid_k$(tmp0_desc, 7) ? true : !equals(value.arrowItems_1, emptyList())) {
      tmp1_output.encodeSerializableElement_isqxcl_k$(tmp0_desc, 7, tmp2_cached[7], value.arrowItems_1);
    }
    tmp1_output.endStructure_1xqz0n_k$(tmp0_desc);
  };
  protoOf($serializer).serialize_5ase3y_k$ = function (encoder, value) {
    return this.serialize_htk3u2_k$(encoder, value instanceof StickyDocument ? value : THROW_CCE());
  };
  protoOf($serializer).deserialize_sy6x50_k$ = function (decoder) {
    var tmp0_desc = this.descriptor_1;
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
    var tmp12_input = decoder.beginStructure_yljocp_k$(tmp0_desc);
    var tmp13_cached = Companion_getInstance_0().$childSerializers_1;
    if (tmp12_input.decodeSequentially_xlblqy_k$()) {
      tmp4_local0 = tmp12_input.decodeStringElement_3oenpg_k$(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp12_input.decodeIntElement_941u6a_k$(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp12_input.decodeSerializableElement_uahnnv_k$(tmp0_desc, 2, tmp13_cached[2], tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp12_input.decodeSerializableElement_uahnnv_k$(tmp0_desc, 3, tmp13_cached[3], tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp12_input.decodeSerializableElement_uahnnv_k$(tmp0_desc, 4, tmp13_cached[4], tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp12_input.decodeSerializableElement_uahnnv_k$(tmp0_desc, 5, tmp13_cached[5], tmp9_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp12_input.decodeSerializableElement_uahnnv_k$(tmp0_desc, 6, tmp13_cached[6], tmp10_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp11_local7 = tmp12_input.decodeSerializableElement_uahnnv_k$(tmp0_desc, 7, tmp13_cached[7], tmp11_local7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp12_input.decodeElementIndex_bstkhp_k$(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp12_input.decodeStringElement_3oenpg_k$(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp12_input.decodeIntElement_941u6a_k$(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp12_input.decodeSerializableElement_uahnnv_k$(tmp0_desc, 2, tmp13_cached[2], tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp12_input.decodeSerializableElement_uahnnv_k$(tmp0_desc, 3, tmp13_cached[3], tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp12_input.decodeSerializableElement_uahnnv_k$(tmp0_desc, 4, tmp13_cached[4], tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp12_input.decodeSerializableElement_uahnnv_k$(tmp0_desc, 5, tmp13_cached[5], tmp9_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp12_input.decodeSerializableElement_uahnnv_k$(tmp0_desc, 6, tmp13_cached[6], tmp10_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp11_local7 = tmp12_input.decodeSerializableElement_uahnnv_k$(tmp0_desc, 7, tmp13_cached[7], tmp11_local7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp12_input.endStructure_1xqz0n_k$(tmp0_desc);
    return StickyDocument_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, tmp11_local7, null);
  };
  protoOf($serializer).get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  protoOf($serializer).childSerializers_5ghqw5_k$ = function () {
    var tmp0_cached = Companion_getInstance_0().$childSerializers_1;
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
      throwMissingFieldException(seen0, 0, $serializer_getInstance().descriptor_1);
    }
    if (0 === (seen0 & 1))
      $this.app_1 = '';
    else
      $this.app_1 = app;
    if (0 === (seen0 & 2))
      $this.version_1 = 1;
    else
      $this.version_1 = version;
    if (0 === (seen0 & 4))
      $this.strokeItems_1 = emptyList();
    else
      $this.strokeItems_1 = strokeItems;
    if (0 === (seen0 & 8))
      $this.textItems_1 = emptyList();
    else
      $this.textItems_1 = textItems;
    if (0 === (seen0 & 16))
      $this.rectangleItems_1 = emptyList();
    else
      $this.rectangleItems_1 = rectangleItems;
    if (0 === (seen0 & 32))
      $this.circleItems_1 = emptyList();
    else
      $this.circleItems_1 = circleItems;
    if (0 === (seen0 & 64))
      $this.polygonItems_1 = emptyList();
    else
      $this.polygonItems_1 = polygonItems;
    if (0 === (seen0 & 128))
      $this.arrowItems_1 = emptyList();
    else
      $this.arrowItems_1 = arrowItems;
    return $this;
  }
  function StickyDocument_init_$Create$(seen0, app, version, strokeItems, textItems, rectangleItems, circleItems, polygonItems, arrowItems, serializationConstructorMarker) {
    return StickyDocument_init_$Init$(seen0, app, version, strokeItems, textItems, rectangleItems, circleItems, polygonItems, arrowItems, serializationConstructorMarker, objectCreate(protoOf(StickyDocument)));
  }
  function StickyDocument(app, version, strokeItems, textItems, rectangleItems, circleItems, polygonItems, arrowItems) {
    Companion_getInstance_0();
    app = app === VOID ? '' : app;
    version = version === VOID ? 1 : version;
    strokeItems = strokeItems === VOID ? emptyList() : strokeItems;
    textItems = textItems === VOID ? emptyList() : textItems;
    rectangleItems = rectangleItems === VOID ? emptyList() : rectangleItems;
    circleItems = circleItems === VOID ? emptyList() : circleItems;
    polygonItems = polygonItems === VOID ? emptyList() : polygonItems;
    arrowItems = arrowItems === VOID ? emptyList() : arrowItems;
    this.app_1 = app;
    this.version_1 = version;
    this.strokeItems_1 = strokeItems;
    this.textItems_1 = textItems;
    this.rectangleItems_1 = rectangleItems;
    this.circleItems_1 = circleItems;
    this.polygonItems_1 = polygonItems;
    this.arrowItems_1 = arrowItems;
  }
  protoOf(StickyDocument).get_app_18j9e0_k$ = function () {
    return this.app_1;
  };
  protoOf(StickyDocument).get_version_72w4j3_k$ = function () {
    return this.version_1;
  };
  protoOf(StickyDocument).get_strokeItems_pivh8h_k$ = function () {
    return this.strokeItems_1;
  };
  protoOf(StickyDocument).get_textItems_8zbevq_k$ = function () {
    return this.textItems_1;
  };
  protoOf(StickyDocument).get_rectangleItems_npge3q_k$ = function () {
    return this.rectangleItems_1;
  };
  protoOf(StickyDocument).get_circleItems_cgj3on_k$ = function () {
    return this.circleItems_1;
  };
  protoOf(StickyDocument).get_polygonItems_rrdxqp_k$ = function () {
    return this.polygonItems_1;
  };
  protoOf(StickyDocument).get_arrowItems_lx0j40_k$ = function () {
    return this.arrowItems_1;
  };
  function serialize(state) {
    _init_properties_Files_kt__abgarp();
    return get_prettyJson().encodeToString_k0apqx_k$(Companion_getInstance_0().serializer_9w0wvi_k$(), new StickyDocument('sticky-node', 1, state.get_strokeItems_pivh8h_k$(), state.get_textItems_8zbevq_k$(), state.get_rectangleItems_npge3q_k$(), state.get_circleItems_cgj3on_k$(), state.get_polygonItems_rrdxqp_k$(), state.get_arrowItems_lx0j40_k$()));
  }
  function applyDocument(state, text) {
    _init_properties_Files_kt__abgarp();
    if (isBlank(text))
      throw Exception_init_$Create$('The file is empty');
    var doc = get_json().decodeFromString_jwu9sq_k$(Companion_getInstance_0().serializer_9w0wvi_k$(), text);
    if (!(doc.app_1 === 'sticky-node'))
      throw Exception_init_$Create$('Not a Sticky Node file');
    state.get_strokeItems_pivh8h_k$().clear_j9egeb_k$();
    state.get_strokeItems_pivh8h_k$().addAll_4lagoh_k$(doc.strokeItems_1);
    state.get_textItems_8zbevq_k$().clear_j9egeb_k$();
    state.get_textItems_8zbevq_k$().addAll_4lagoh_k$(doc.textItems_1);
    state.get_rectangleItems_npge3q_k$().clear_j9egeb_k$();
    state.get_rectangleItems_npge3q_k$().addAll_4lagoh_k$(doc.rectangleItems_1);
    state.get_circleItems_cgj3on_k$().clear_j9egeb_k$();
    state.get_circleItems_cgj3on_k$().addAll_4lagoh_k$(doc.circleItems_1);
    state.get_polygonItems_rrdxqp_k$().clear_j9egeb_k$();
    state.get_polygonItems_rrdxqp_k$().addAll_4lagoh_k$(doc.polygonItems_1);
    state.get_arrowItems_lx0j40_k$().clear_j9egeb_k$();
    state.get_arrowItems_lx0j40_k$().addAll_4lagoh_k$(doc.arrowItems_1);
  }
  function saveToFile(state, suggestedName, $completion) {
    suggestedName = suggestedName === VOID ? 'drawing.sticky.json' : suggestedName;
    var tmp = new $saveToFileCOROUTINE$0(state, suggestedName, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
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
    return safe.getOrThrow_23gqzp_k$();
  }
  function prettyJson$lambda($this$Json) {
    _init_properties_Files_kt__abgarp();
    $this$Json.set_prettyPrint_v2gnff_k$(true);
    $this$Json.set_prettyPrintIndent_ab0258_k$('  ');
    return Unit_getInstance();
  }
  function saveToFile$lambda($url) {
    return function () {
      // Inline function 'kotlin.js.asDynamic' call
      window.URL.revokeObjectURL($url);
      return Unit_getInstance();
    };
  }
  function openFromFile$lambda$slambda($file, $state, $continuation, resultContinuation) {
    this.$file_1 = $file;
    this.$state_1 = $state;
    this.$continuation_1 = $continuation;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(openFromFile$lambda$slambda).invoke_d9fzmj_k$ = function ($this$launch, $completion) {
    var tmp = this.create_rcuf4x_k$($this$launch, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(openFromFile$lambda$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_d9fzmj_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(openFromFile$lambda$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(3);
            this.set_exceptionState_fex74n_k$(2);
            this.set_state_rjd8d0_k$(1);
            var this_0 = this.$file_1.text();
            suspendResult = await_0(this_0, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var text = suspendResult;
            applyDocument(this.$state_1, text);
            var this_1 = this.$continuation_1;
            Companion_getInstance();
            this_1.resumeWith_dtxwbr_k$(_Result___init__impl__xyqfz8(true));
            this.set_exceptionState_fex74n_k$(3);
            this.set_state_rjd8d0_k$(4);
            continue $sm;
          case 2:
            this.set_exceptionState_fex74n_k$(3);
            var tmp_0 = this.get_exception_x0n6w6_k$();
            if (tmp_0 instanceof Error) {
              var error = this.get_exception_x0n6w6_k$();
              window.alert("Couldn't open that file: " + error.message);
              var this_2 = this.$continuation_1;
              Companion_getInstance();
              this_2.resumeWith_dtxwbr_k$(_Result___init__impl__xyqfz8(false));
              this.set_state_rjd8d0_k$(4);
              continue $sm;
            } else {
              throw this.get_exception_x0n6w6_k$();
            }

          case 3:
            throw this.get_exception_x0n6w6_k$();
          case 4:
            this.set_exceptionState_fex74n_k$(3);
            return Unit_getInstance();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 3) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  protoOf(openFromFile$lambda$slambda).create_rcuf4x_k$ = function ($this$launch, completion) {
    var i = new openFromFile$lambda$slambda(this.$file_1, this.$state_1, this.$continuation_1, completion);
    i.$this$launch_1 = $this$launch;
    return i;
  };
  protoOf(openFromFile$lambda$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function openFromFile$lambda$slambda_0($file, $state, $continuation, resultContinuation) {
    var i = new openFromFile$lambda$slambda($file, $state, $continuation, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.invoke_d9fzmj_k$($this$launch, $completion);
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
        Companion_getInstance();
        var tmp$ret$0 = _Result___init__impl__xyqfz8(false);
        this_0.resumeWith_dtxwbr_k$(tmp$ret$0);
      } else {
        var tmp = MainScope();
        launch(tmp, VOID, VOID, openFromFile$lambda$slambda_0(file, $state, $continuation, null));
      }
      return null;
    };
  }
  function $saveToFileCOROUTINE$0(state, suggestedName, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.state_2 = state;
    this.suggestedName_1 = suggestedName;
  }
  protoOf($saveToFileCOROUTINE$0).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(7);
            this.content0__1 = serialize(this.state_2);
            if (window.showSaveFilePicker != undefined) {
              this.set_exceptionState_fex74n_k$(6);
              this.accept2__1 = {};
              var this_0 = ['.json'];
              this.accept2__1['application/json'] = this_0;
              this.type3__1 = {};
              this.type3__1.description = 'Sticky Node drawing';
              this.type3__1.accept = this.accept2__1;
              this.options4__1 = {};
              this.options4__1.suggestedName = this.suggestedName_1;
              var this_1 = [this.type3__1];
              this.options4__1.types = this_1;
              this.set_state_rjd8d0_k$(2);
              var this_2 = window.showSaveFilePicker(this.options4__1);
              suspendResult = await_0(this_2, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.set_state_rjd8d0_k$(1);
              continue $sm;
            }

          case 1:
            var tmp_0 = this;
            var this_3 = [this.content0__1];
            var type = 'application/json';
            var o = {};
            o['type'] = type;
            tmp_0.blob5__1 = new Blob(this_3, o);
            var tmp_1 = this;
            tmp_1.url6__1 = window.URL.createObjectURL(this.blob5__1);
            var tmp_2 = this;
            var tmp_3 = document.createElement('a');
            tmp_2.link7__1 = tmp_3 instanceof HTMLAnchorElement ? tmp_3 : THROW_CCE();
            this.link7__1.href = this.url6__1;
            this.link7__1.download = this.suggestedName_1;
            ensureNotNull(document.body).appendChild(this.link7__1);
            this.link7__1.click();
            this.link7__1.remove();
            var tmp_4 = window;
            tmp_4.setTimeout(saveToFile$lambda(this.url6__1), 1000);
            return Unit_getInstance();
          case 2:
            this.handle8__1 = suspendResult;
            this.set_state_rjd8d0_k$(3);
            var this_4 = this.handle8__1.createWritable();
            suspendResult = await_0(this_4, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            this.writable9__1 = suspendResult;
            this.set_state_rjd8d0_k$(4);
            var this_5 = this.writable9__1.write(this.content0__1);
            suspendResult = await_0(this_5, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            this.set_state_rjd8d0_k$(5);
            var this_6 = this.writable9__1.close();
            suspendResult = await_0(this_6, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 5:
            this.TRY_RESULT1__1 = suspendResult;
            this.set_exceptionState_fex74n_k$(7);
            this.set_state_rjd8d0_k$(8);
            continue $sm;
          case 6:
            this.set_exceptionState_fex74n_k$(7);
            var tmp_5 = this.get_exception_x0n6w6_k$();
            if (tmp_5 instanceof Error) {
              var error = this.get_exception_x0n6w6_k$();
              var tmp_6 = this;
              if (error.name != 'AbortError')
                throw error;
              tmp_6.TRY_RESULT1__1 = Unit_getInstance();
              this.set_state_rjd8d0_k$(8);
              continue $sm;
            } else {
              throw this.get_exception_x0n6w6_k$();
            }

          case 7:
            throw this.get_exception_x0n6w6_k$();
          case 8:
            this.set_exceptionState_fex74n_k$(7);
            return Unit_getInstance();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 7) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
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
  function get_MAX_HISTORY() {
    return MAX_HISTORY;
  }
  var MAX_HISTORY;
  function _get_state__b8zcm8($this) {
    return $this.state_1;
  }
  function serialize_0($this) {
    return get_json().encodeToString_k0apqx_k$(Companion_getInstance_8().serializer_9w0wvi_k$(), new Items($this.state_1.get_strokeItems_pivh8h_k$(), $this.state_1.get_textItems_8zbevq_k$(), $this.state_1.get_rectangleItems_npge3q_k$(), $this.state_1.get_circleItems_cgj3on_k$(), $this.state_1.get_polygonItems_rrdxqp_k$(), $this.state_1.get_arrowItems_lx0j40_k$()));
  }
  function _set_stack__ks4rel($this, _set____db54di) {
    $this.stack_1 = _set____db54di;
  }
  function _get_stack__b8zp2v($this) {
    return $this.stack_1;
  }
  function _set_index__fyfqnn($this, _set____db54di) {
    $this.index_1 = _set____db54di;
  }
  function _get_index__g2optt($this) {
    return $this.index_1;
  }
  function restore($this, snapshot) {
    var data = get_json().decodeFromString_jwu9sq_k$(Companion_getInstance_8().serializer_9w0wvi_k$(), snapshot);
    $this.state_1.get_strokeItems_pivh8h_k$().clear_j9egeb_k$();
    $this.state_1.get_strokeItems_pivh8h_k$().addAll_4lagoh_k$(data.get_strokeItems_pivh8h_k$());
    $this.state_1.get_textItems_8zbevq_k$().clear_j9egeb_k$();
    $this.state_1.get_textItems_8zbevq_k$().addAll_4lagoh_k$(data.get_textItems_8zbevq_k$());
    $this.state_1.get_rectangleItems_npge3q_k$().clear_j9egeb_k$();
    $this.state_1.get_rectangleItems_npge3q_k$().addAll_4lagoh_k$(data.get_rectangleItems_npge3q_k$());
    $this.state_1.get_circleItems_cgj3on_k$().clear_j9egeb_k$();
    $this.state_1.get_circleItems_cgj3on_k$().addAll_4lagoh_k$(data.get_circleItems_cgj3on_k$());
    $this.state_1.get_polygonItems_rrdxqp_k$().clear_j9egeb_k$();
    $this.state_1.get_polygonItems_rrdxqp_k$().addAll_4lagoh_k$(data.get_polygonItems_rrdxqp_k$());
    $this.state_1.get_arrowItems_lx0j40_k$().clear_j9egeb_k$();
    $this.state_1.get_arrowItems_lx0j40_k$().addAll_4lagoh_k$(data.get_arrowItems_lx0j40_k$());
  }
  function History(state) {
    this.state_1 = state;
    this.stack_1 = mutableListOf([serialize_0(this)]);
    this.index_1 = 0;
  }
  protoOf(History).record_fgmca7_k$ = function () {
    var snapshot = serialize_0(this);
    if (snapshot === this.stack_1.get_c1px32_k$(this.index_1))
      return false;
    this.stack_1 = toMutableList(this.stack_1.subList_xle3r2_k$(0, this.index_1 + 1 | 0));
    this.stack_1.add_utx5q5_k$(snapshot);
    if (this.stack_1.get_size_woubt6_k$() > 100) {
      this.stack_1.removeAt_6niowx_k$(0);
    }
    this.index_1 = this.stack_1.get_size_woubt6_k$() - 1 | 0;
    return true;
  };
  protoOf(History).undo_251ic_k$ = function () {
    if (this.index_1 === 0)
      return false;
    this.index_1 = this.index_1 - 1 | 0;
    restore(this, this.stack_1.get_c1px32_k$(this.index_1));
    return true;
  };
  protoOf(History).redo_22xvi_k$ = function () {
    if (this.index_1 === (this.stack_1.get_size_woubt6_k$() - 1 | 0))
      return false;
    this.index_1 = this.index_1 + 1 | 0;
    restore(this, this.stack_1.get_c1px32_k$(this.index_1));
    return true;
  };
  function get_json() {
    _init_properties_Model_kt__1gdqdl();
    return json;
  }
  var json;
  function Companion_0() {
    Companion_instance_0 = this;
  }
  protoOf(Companion_0).serializer_9w0wvi_k$ = function () {
    return $serializer_getInstance_0();
  };
  var Companion_instance_0;
  function Companion_getInstance_1() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function $serializer_0() {
    $serializer_instance_0 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('stickynode.canvas.Point', this, 2);
    tmp0_serialDesc.addElement_5pzumi_k$('x', false);
    tmp0_serialDesc.addElement_5pzumi_k$('y', false);
    this.descriptor_1 = tmp0_serialDesc;
  }
  protoOf($serializer_0).serialize_9ceelk_k$ = function (encoder, value) {
    var tmp0_desc = this.descriptor_1;
    var tmp1_output = encoder.beginStructure_yljocp_k$(tmp0_desc);
    tmp1_output.encodeDoubleElement_a6rqhe_k$(tmp0_desc, 0, value.x_1);
    tmp1_output.encodeDoubleElement_a6rqhe_k$(tmp0_desc, 1, value.y_1);
    tmp1_output.endStructure_1xqz0n_k$(tmp0_desc);
  };
  protoOf($serializer_0).serialize_5ase3y_k$ = function (encoder, value) {
    return this.serialize_9ceelk_k$(encoder, value instanceof Point ? value : THROW_CCE());
  };
  protoOf($serializer_0).deserialize_sy6x50_k$ = function (decoder) {
    var tmp0_desc = this.descriptor_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = 0.0;
    var tmp5_local1 = 0.0;
    var tmp6_input = decoder.beginStructure_yljocp_k$(tmp0_desc);
    if (tmp6_input.decodeSequentially_xlblqy_k$()) {
      tmp4_local0 = tmp6_input.decodeDoubleElement_isei84_k$(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.decodeDoubleElement_isei84_k$(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.decodeElementIndex_bstkhp_k$(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.decodeDoubleElement_isei84_k$(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.decodeDoubleElement_isei84_k$(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp6_input.endStructure_1xqz0n_k$(tmp0_desc);
    return Point_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  protoOf($serializer_0).get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  protoOf($serializer_0).childSerializers_5ghqw5_k$ = function () {
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
      throwMissingFieldException(seen0, 3, $serializer_getInstance_0().descriptor_1);
    }
    $this.x_1 = x;
    $this.y_1 = y;
    return $this;
  }
  function Point_init_$Create$(seen0, x, y, serializationConstructorMarker) {
    return Point_init_$Init$(seen0, x, y, serializationConstructorMarker, objectCreate(protoOf(Point)));
  }
  function Point(x, y) {
    Companion_getInstance_1();
    this.x_1 = x;
    this.y_1 = y;
  }
  protoOf(Point).get_x_1mhr67_k$ = function () {
    return this.x_1;
  };
  protoOf(Point).get_y_1mhr68_k$ = function () {
    return this.y_1;
  };
  protoOf(Point).component1_7eebsc_k$ = function () {
    return this.x_1;
  };
  protoOf(Point).component2_7eebsb_k$ = function () {
    return this.y_1;
  };
  protoOf(Point).copy_6r5gqz_k$ = function (x, y) {
    return new Point(x, y);
  };
  protoOf(Point).copy$default_c9rj7e_k$ = function (x, y, $super) {
    x = x === VOID ? this.x_1 : x;
    y = y === VOID ? this.y_1 : y;
    return $super === VOID ? this.copy_6r5gqz_k$(x, y) : $super.copy_6r5gqz_k$.call(this, x, y);
  };
  protoOf(Point).toString = function () {
    return 'Point(x=' + this.x_1 + ', y=' + this.y_1 + ')';
  };
  protoOf(Point).hashCode = function () {
    var result = getNumberHashCode(this.x_1);
    result = imul(result, 31) + getNumberHashCode(this.y_1) | 0;
    return result;
  };
  protoOf(Point).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Point))
      return false;
    var tmp0_other_with_cast = other instanceof Point ? other : THROW_CCE();
    if (!equals(this.x_1, tmp0_other_with_cast.x_1))
      return false;
    if (!equals(this.y_1, tmp0_other_with_cast.y_1))
      return false;
    return true;
  };
  function Fillable() {
  }
  function _get_$childSerializers__r2zwns_0($this) {
    return $this.$childSerializers_1;
  }
  function Companion_1() {
    Companion_instance_1 = this;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.$childSerializers_1 = [new ArrayListSerializer($serializer_getInstance_0()), null, null];
  }
  protoOf(Companion_1).serializer_9w0wvi_k$ = function () {
    return $serializer_getInstance_1();
  };
  var Companion_instance_1;
  function Companion_getInstance_2() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function $serializer_1() {
    $serializer_instance_1 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('stickynode.canvas.Stroke', this, 3);
    tmp0_serialDesc.addElement_5pzumi_k$('points', false);
    tmp0_serialDesc.addElement_5pzumi_k$('color', false);
    tmp0_serialDesc.addElement_5pzumi_k$('lineWidth', true);
    this.descriptor_1 = tmp0_serialDesc;
  }
  protoOf($serializer_1).serialize_5cow16_k$ = function (encoder, value) {
    var tmp0_desc = this.descriptor_1;
    var tmp1_output = encoder.beginStructure_yljocp_k$(tmp0_desc);
    var tmp2_cached = Companion_getInstance_2().$childSerializers_1;
    tmp1_output.encodeSerializableElement_isqxcl_k$(tmp0_desc, 0, tmp2_cached[0], value.points_1);
    tmp1_output.encodeStringElement_1n5wu2_k$(tmp0_desc, 1, value.color_1);
    if (tmp1_output.shouldEncodeElementDefault_x8eyid_k$(tmp0_desc, 2) ? true : !(value.lineWidth_1 === 3)) {
      tmp1_output.encodeIntElement_krhhce_k$(tmp0_desc, 2, value.lineWidth_1);
    }
    tmp1_output.endStructure_1xqz0n_k$(tmp0_desc);
  };
  protoOf($serializer_1).serialize_5ase3y_k$ = function (encoder, value) {
    return this.serialize_5cow16_k$(encoder, value instanceof Stroke ? value : THROW_CCE());
  };
  protoOf($serializer_1).deserialize_sy6x50_k$ = function (decoder) {
    var tmp0_desc = this.descriptor_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = 0;
    var tmp7_input = decoder.beginStructure_yljocp_k$(tmp0_desc);
    var tmp8_cached = Companion_getInstance_2().$childSerializers_1;
    if (tmp7_input.decodeSequentially_xlblqy_k$()) {
      tmp4_local0 = tmp7_input.decodeSerializableElement_uahnnv_k$(tmp0_desc, 0, tmp8_cached[0], tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.decodeStringElement_3oenpg_k$(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp7_input.decodeIntElement_941u6a_k$(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp7_input.decodeElementIndex_bstkhp_k$(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp7_input.decodeSerializableElement_uahnnv_k$(tmp0_desc, 0, tmp8_cached[0], tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.decodeStringElement_3oenpg_k$(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp7_input.decodeIntElement_941u6a_k$(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp7_input.endStructure_1xqz0n_k$(tmp0_desc);
    return Stroke_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  };
  protoOf($serializer_1).get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  protoOf($serializer_1).childSerializers_5ghqw5_k$ = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [Companion_getInstance_2().$childSerializers_1[0], StringSerializer_getInstance(), IntSerializer_getInstance()];
  };
  var $serializer_instance_1;
  function $serializer_getInstance_1() {
    if ($serializer_instance_1 == null)
      new $serializer_1();
    return $serializer_instance_1;
  }
  function Stroke_init_$Init$(seen0, points, color, lineWidth, serializationConstructorMarker, $this) {
    if (!(3 === (3 & seen0))) {
      throwMissingFieldException(seen0, 3, $serializer_getInstance_1().descriptor_1);
    }
    $this.points_1 = points;
    $this.color_1 = color;
    if (0 === (seen0 & 4))
      $this.lineWidth_1 = 3;
    else
      $this.lineWidth_1 = lineWidth;
    return $this;
  }
  function Stroke_init_$Create$(seen0, points, color, lineWidth, serializationConstructorMarker) {
    return Stroke_init_$Init$(seen0, points, color, lineWidth, serializationConstructorMarker, objectCreate(protoOf(Stroke)));
  }
  function Stroke(points, color, lineWidth) {
    Companion_getInstance_2();
    lineWidth = lineWidth === VOID ? 3 : lineWidth;
    this.points_1 = points;
    this.color_1 = color;
    this.lineWidth_1 = lineWidth;
  }
  protoOf(Stroke).set_points_w0ahkm_k$ = function (_set____db54di) {
    this.points_1 = _set____db54di;
  };
  protoOf(Stroke).get_points_i5obn0_k$ = function () {
    return this.points_1;
  };
  protoOf(Stroke).get_color_ipu8u2_k$ = function () {
    return this.color_1;
  };
  protoOf(Stroke).get_lineWidth_lbeliv_k$ = function () {
    return this.lineWidth_1;
  };
  function Companion_2() {
    Companion_instance_2 = this;
  }
  protoOf(Companion_2).serializer_9w0wvi_k$ = function () {
    return $serializer_getInstance_2();
  };
  var Companion_instance_2;
  function Companion_getInstance_3() {
    if (Companion_instance_2 == null)
      new Companion_2();
    return Companion_instance_2;
  }
  function $serializer_2() {
    $serializer_instance_2 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('stickynode.canvas.TextItem', this, 5);
    tmp0_serialDesc.addElement_5pzumi_k$('x', false);
    tmp0_serialDesc.addElement_5pzumi_k$('y', false);
    tmp0_serialDesc.addElement_5pzumi_k$('color', false);
    tmp0_serialDesc.addElement_5pzumi_k$('text', false);
    tmp0_serialDesc.addElement_5pzumi_k$('fontSize', true);
    this.descriptor_1 = tmp0_serialDesc;
  }
  protoOf($serializer_2).serialize_vt40ha_k$ = function (encoder, value) {
    var tmp0_desc = this.descriptor_1;
    var tmp1_output = encoder.beginStructure_yljocp_k$(tmp0_desc);
    tmp1_output.encodeDoubleElement_a6rqhe_k$(tmp0_desc, 0, value.x_1);
    tmp1_output.encodeDoubleElement_a6rqhe_k$(tmp0_desc, 1, value.y_1);
    tmp1_output.encodeStringElement_1n5wu2_k$(tmp0_desc, 2, value.color_1);
    tmp1_output.encodeStringElement_1n5wu2_k$(tmp0_desc, 3, value.text_1);
    if (tmp1_output.shouldEncodeElementDefault_x8eyid_k$(tmp0_desc, 4) ? true : !(value.fontSize_1 === 20)) {
      tmp1_output.encodeIntElement_krhhce_k$(tmp0_desc, 4, value.fontSize_1);
    }
    tmp1_output.endStructure_1xqz0n_k$(tmp0_desc);
  };
  protoOf($serializer_2).serialize_5ase3y_k$ = function (encoder, value) {
    return this.serialize_vt40ha_k$(encoder, value instanceof TextItem ? value : THROW_CCE());
  };
  protoOf($serializer_2).deserialize_sy6x50_k$ = function (decoder) {
    var tmp0_desc = this.descriptor_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = 0.0;
    var tmp5_local1 = 0.0;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = 0;
    var tmp9_input = decoder.beginStructure_yljocp_k$(tmp0_desc);
    if (tmp9_input.decodeSequentially_xlblqy_k$()) {
      tmp4_local0 = tmp9_input.decodeDoubleElement_isei84_k$(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp9_input.decodeDoubleElement_isei84_k$(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp9_input.decodeStringElement_3oenpg_k$(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp9_input.decodeStringElement_3oenpg_k$(tmp0_desc, 3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp9_input.decodeIntElement_941u6a_k$(tmp0_desc, 4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp9_input.decodeElementIndex_bstkhp_k$(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp9_input.decodeDoubleElement_isei84_k$(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp9_input.decodeDoubleElement_isei84_k$(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp9_input.decodeStringElement_3oenpg_k$(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp9_input.decodeStringElement_3oenpg_k$(tmp0_desc, 3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp9_input.decodeIntElement_941u6a_k$(tmp0_desc, 4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp9_input.endStructure_1xqz0n_k$(tmp0_desc);
    return TextItem_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, null);
  };
  protoOf($serializer_2).get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  protoOf($serializer_2).childSerializers_5ghqw5_k$ = function () {
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
      throwMissingFieldException(seen0, 15, $serializer_getInstance_2().descriptor_1);
    }
    $this.x_1 = x;
    $this.y_1 = y;
    $this.color_1 = color;
    $this.text_1 = text;
    if (0 === (seen0 & 16))
      $this.fontSize_1 = 20;
    else
      $this.fontSize_1 = fontSize;
    return $this;
  }
  function TextItem_init_$Create$(seen0, x, y, color, text, fontSize, serializationConstructorMarker) {
    return TextItem_init_$Init$(seen0, x, y, color, text, fontSize, serializationConstructorMarker, objectCreate(protoOf(TextItem)));
  }
  function TextItem(x, y, color, text, fontSize) {
    Companion_getInstance_3();
    fontSize = fontSize === VOID ? 20 : fontSize;
    this.x_1 = x;
    this.y_1 = y;
    this.color_1 = color;
    this.text_1 = text;
    this.fontSize_1 = fontSize;
  }
  protoOf(TextItem).set_x_scd9vp_k$ = function (_set____db54di) {
    this.x_1 = _set____db54di;
  };
  protoOf(TextItem).get_x_1mhr67_k$ = function () {
    return this.x_1;
  };
  protoOf(TextItem).set_y_lelkme_k$ = function (_set____db54di) {
    this.y_1 = _set____db54di;
  };
  protoOf(TextItem).get_y_1mhr68_k$ = function () {
    return this.y_1;
  };
  protoOf(TextItem).set_color_ayzg4c_k$ = function (_set____db54di) {
    this.color_1 = _set____db54di;
  };
  protoOf(TextItem).get_color_ipu8u2_k$ = function () {
    return this.color_1;
  };
  protoOf(TextItem).set_text_oy06f4_k$ = function (_set____db54di) {
    this.text_1 = _set____db54di;
  };
  protoOf(TextItem).get_text_wouvsm_k$ = function () {
    return this.text_1;
  };
  protoOf(TextItem).set_fontSize_6szsfv_k$ = function (_set____db54di) {
    this.fontSize_1 = _set____db54di;
  };
  protoOf(TextItem).get_fontSize_pr9n47_k$ = function () {
    return this.fontSize_1;
  };
  function Companion_3() {
    Companion_instance_3 = this;
  }
  protoOf(Companion_3).serializer_9w0wvi_k$ = function () {
    return $serializer_getInstance_3();
  };
  var Companion_instance_3;
  function Companion_getInstance_4() {
    if (Companion_instance_3 == null)
      new Companion_3();
    return Companion_instance_3;
  }
  function $serializer_3() {
    $serializer_instance_3 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('stickynode.canvas.RectangleItem', this, 7);
    tmp0_serialDesc.addElement_5pzumi_k$('x', false);
    tmp0_serialDesc.addElement_5pzumi_k$('y', false);
    tmp0_serialDesc.addElement_5pzumi_k$('width', false);
    tmp0_serialDesc.addElement_5pzumi_k$('height', false);
    tmp0_serialDesc.addElement_5pzumi_k$('color', false);
    tmp0_serialDesc.addElement_5pzumi_k$('lineWidth', true);
    tmp0_serialDesc.addElement_5pzumi_k$('fill', true);
    this.descriptor_1 = tmp0_serialDesc;
  }
  protoOf($serializer_3).serialize_niovmh_k$ = function (encoder, value) {
    var tmp0_desc = this.descriptor_1;
    var tmp1_output = encoder.beginStructure_yljocp_k$(tmp0_desc);
    tmp1_output.encodeDoubleElement_a6rqhe_k$(tmp0_desc, 0, value.x_1);
    tmp1_output.encodeDoubleElement_a6rqhe_k$(tmp0_desc, 1, value.y_1);
    tmp1_output.encodeDoubleElement_a6rqhe_k$(tmp0_desc, 2, value.width_1);
    tmp1_output.encodeDoubleElement_a6rqhe_k$(tmp0_desc, 3, value.height_1);
    tmp1_output.encodeStringElement_1n5wu2_k$(tmp0_desc, 4, value.color_1);
    if (tmp1_output.shouldEncodeElementDefault_x8eyid_k$(tmp0_desc, 5) ? true : !(value.lineWidth_1 === 3)) {
      tmp1_output.encodeIntElement_krhhce_k$(tmp0_desc, 5, value.lineWidth_1);
    }
    if (tmp1_output.shouldEncodeElementDefault_x8eyid_k$(tmp0_desc, 6) ? true : !(value.fill_1 == null)) {
      tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 6, StringSerializer_getInstance(), value.fill_1);
    }
    tmp1_output.endStructure_1xqz0n_k$(tmp0_desc);
  };
  protoOf($serializer_3).serialize_5ase3y_k$ = function (encoder, value) {
    return this.serialize_niovmh_k$(encoder, value instanceof RectangleItem ? value : THROW_CCE());
  };
  protoOf($serializer_3).deserialize_sy6x50_k$ = function (decoder) {
    var tmp0_desc = this.descriptor_1;
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
    var tmp11_input = decoder.beginStructure_yljocp_k$(tmp0_desc);
    if (tmp11_input.decodeSequentially_xlblqy_k$()) {
      tmp4_local0 = tmp11_input.decodeDoubleElement_isei84_k$(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp11_input.decodeDoubleElement_isei84_k$(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp11_input.decodeDoubleElement_isei84_k$(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp11_input.decodeDoubleElement_isei84_k$(tmp0_desc, 3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp11_input.decodeStringElement_3oenpg_k$(tmp0_desc, 4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp11_input.decodeIntElement_941u6a_k$(tmp0_desc, 5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp11_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 6, StringSerializer_getInstance(), tmp10_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp11_input.decodeElementIndex_bstkhp_k$(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp11_input.decodeDoubleElement_isei84_k$(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp11_input.decodeDoubleElement_isei84_k$(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp11_input.decodeDoubleElement_isei84_k$(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp11_input.decodeDoubleElement_isei84_k$(tmp0_desc, 3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp11_input.decodeStringElement_3oenpg_k$(tmp0_desc, 4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp11_input.decodeIntElement_941u6a_k$(tmp0_desc, 5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp11_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 6, StringSerializer_getInstance(), tmp10_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp11_input.endStructure_1xqz0n_k$(tmp0_desc);
    return RectangleItem_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, null);
  };
  protoOf($serializer_3).get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  protoOf($serializer_3).childSerializers_5ghqw5_k$ = function () {
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
      throwMissingFieldException(seen0, 31, $serializer_getInstance_3().descriptor_1);
    }
    $this.x_1 = x;
    $this.y_1 = y;
    $this.width_1 = width;
    $this.height_1 = height;
    $this.color_1 = color;
    if (0 === (seen0 & 32))
      $this.lineWidth_1 = 3;
    else
      $this.lineWidth_1 = lineWidth;
    if (0 === (seen0 & 64))
      $this.fill_1 = null;
    else
      $this.fill_1 = fill;
    return $this;
  }
  function RectangleItem_init_$Create$(seen0, x, y, width, height, color, lineWidth, fill, serializationConstructorMarker) {
    return RectangleItem_init_$Init$(seen0, x, y, width, height, color, lineWidth, fill, serializationConstructorMarker, objectCreate(protoOf(RectangleItem)));
  }
  function RectangleItem(x, y, width, height, color, lineWidth, fill) {
    Companion_getInstance_4();
    lineWidth = lineWidth === VOID ? 3 : lineWidth;
    fill = fill === VOID ? null : fill;
    this.x_1 = x;
    this.y_1 = y;
    this.width_1 = width;
    this.height_1 = height;
    this.color_1 = color;
    this.lineWidth_1 = lineWidth;
    this.fill_1 = fill;
  }
  protoOf(RectangleItem).set_x_scd9vp_k$ = function (_set____db54di) {
    this.x_1 = _set____db54di;
  };
  protoOf(RectangleItem).get_x_1mhr67_k$ = function () {
    return this.x_1;
  };
  protoOf(RectangleItem).set_y_lelkme_k$ = function (_set____db54di) {
    this.y_1 = _set____db54di;
  };
  protoOf(RectangleItem).get_y_1mhr68_k$ = function () {
    return this.y_1;
  };
  protoOf(RectangleItem).get_width_j0q4yl_k$ = function () {
    return this.width_1;
  };
  protoOf(RectangleItem).get_height_e7t92o_k$ = function () {
    return this.height_1;
  };
  protoOf(RectangleItem).get_color_ipu8u2_k$ = function () {
    return this.color_1;
  };
  protoOf(RectangleItem).get_lineWidth_lbeliv_k$ = function () {
    return this.lineWidth_1;
  };
  protoOf(RectangleItem).set_fill_sosdnb_k$ = function (_set____db54di) {
    this.fill_1 = _set____db54di;
  };
  protoOf(RectangleItem).get_fill_wom0ng_k$ = function () {
    return this.fill_1;
  };
  function Companion_4() {
    Companion_instance_4 = this;
  }
  protoOf(Companion_4).serializer_9w0wvi_k$ = function () {
    return $serializer_getInstance_4();
  };
  var Companion_instance_4;
  function Companion_getInstance_5() {
    if (Companion_instance_4 == null)
      new Companion_4();
    return Companion_instance_4;
  }
  function $serializer_4() {
    $serializer_instance_4 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('stickynode.canvas.CircleItem', this, 7);
    tmp0_serialDesc.addElement_5pzumi_k$('x', false);
    tmp0_serialDesc.addElement_5pzumi_k$('y', false);
    tmp0_serialDesc.addElement_5pzumi_k$('width', false);
    tmp0_serialDesc.addElement_5pzumi_k$('height', false);
    tmp0_serialDesc.addElement_5pzumi_k$('color', false);
    tmp0_serialDesc.addElement_5pzumi_k$('lineWidth', true);
    tmp0_serialDesc.addElement_5pzumi_k$('fill', true);
    this.descriptor_1 = tmp0_serialDesc;
  }
  protoOf($serializer_4).serialize_662i2k_k$ = function (encoder, value) {
    var tmp0_desc = this.descriptor_1;
    var tmp1_output = encoder.beginStructure_yljocp_k$(tmp0_desc);
    tmp1_output.encodeDoubleElement_a6rqhe_k$(tmp0_desc, 0, value.x_1);
    tmp1_output.encodeDoubleElement_a6rqhe_k$(tmp0_desc, 1, value.y_1);
    tmp1_output.encodeDoubleElement_a6rqhe_k$(tmp0_desc, 2, value.width_1);
    tmp1_output.encodeDoubleElement_a6rqhe_k$(tmp0_desc, 3, value.height_1);
    tmp1_output.encodeStringElement_1n5wu2_k$(tmp0_desc, 4, value.color_1);
    if (tmp1_output.shouldEncodeElementDefault_x8eyid_k$(tmp0_desc, 5) ? true : !(value.lineWidth_1 === 3)) {
      tmp1_output.encodeIntElement_krhhce_k$(tmp0_desc, 5, value.lineWidth_1);
    }
    if (tmp1_output.shouldEncodeElementDefault_x8eyid_k$(tmp0_desc, 6) ? true : !(value.fill_1 == null)) {
      tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 6, StringSerializer_getInstance(), value.fill_1);
    }
    tmp1_output.endStructure_1xqz0n_k$(tmp0_desc);
  };
  protoOf($serializer_4).serialize_5ase3y_k$ = function (encoder, value) {
    return this.serialize_662i2k_k$(encoder, value instanceof CircleItem ? value : THROW_CCE());
  };
  protoOf($serializer_4).deserialize_sy6x50_k$ = function (decoder) {
    var tmp0_desc = this.descriptor_1;
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
    var tmp11_input = decoder.beginStructure_yljocp_k$(tmp0_desc);
    if (tmp11_input.decodeSequentially_xlblqy_k$()) {
      tmp4_local0 = tmp11_input.decodeDoubleElement_isei84_k$(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp11_input.decodeDoubleElement_isei84_k$(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp11_input.decodeDoubleElement_isei84_k$(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp11_input.decodeDoubleElement_isei84_k$(tmp0_desc, 3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp11_input.decodeStringElement_3oenpg_k$(tmp0_desc, 4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp11_input.decodeIntElement_941u6a_k$(tmp0_desc, 5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp11_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 6, StringSerializer_getInstance(), tmp10_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp11_input.decodeElementIndex_bstkhp_k$(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp11_input.decodeDoubleElement_isei84_k$(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp11_input.decodeDoubleElement_isei84_k$(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp11_input.decodeDoubleElement_isei84_k$(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp11_input.decodeDoubleElement_isei84_k$(tmp0_desc, 3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp11_input.decodeStringElement_3oenpg_k$(tmp0_desc, 4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp11_input.decodeIntElement_941u6a_k$(tmp0_desc, 5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp11_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 6, StringSerializer_getInstance(), tmp10_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp11_input.endStructure_1xqz0n_k$(tmp0_desc);
    return CircleItem_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, null);
  };
  protoOf($serializer_4).get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  protoOf($serializer_4).childSerializers_5ghqw5_k$ = function () {
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
      throwMissingFieldException(seen0, 31, $serializer_getInstance_4().descriptor_1);
    }
    $this.x_1 = x;
    $this.y_1 = y;
    $this.width_1 = width;
    $this.height_1 = height;
    $this.color_1 = color;
    if (0 === (seen0 & 32))
      $this.lineWidth_1 = 3;
    else
      $this.lineWidth_1 = lineWidth;
    if (0 === (seen0 & 64))
      $this.fill_1 = null;
    else
      $this.fill_1 = fill;
    return $this;
  }
  function CircleItem_init_$Create$(seen0, x, y, width, height, color, lineWidth, fill, serializationConstructorMarker) {
    return CircleItem_init_$Init$(seen0, x, y, width, height, color, lineWidth, fill, serializationConstructorMarker, objectCreate(protoOf(CircleItem)));
  }
  function CircleItem(x, y, width, height, color, lineWidth, fill) {
    Companion_getInstance_5();
    lineWidth = lineWidth === VOID ? 3 : lineWidth;
    fill = fill === VOID ? null : fill;
    this.x_1 = x;
    this.y_1 = y;
    this.width_1 = width;
    this.height_1 = height;
    this.color_1 = color;
    this.lineWidth_1 = lineWidth;
    this.fill_1 = fill;
  }
  protoOf(CircleItem).set_x_scd9vp_k$ = function (_set____db54di) {
    this.x_1 = _set____db54di;
  };
  protoOf(CircleItem).get_x_1mhr67_k$ = function () {
    return this.x_1;
  };
  protoOf(CircleItem).set_y_lelkme_k$ = function (_set____db54di) {
    this.y_1 = _set____db54di;
  };
  protoOf(CircleItem).get_y_1mhr68_k$ = function () {
    return this.y_1;
  };
  protoOf(CircleItem).get_width_j0q4yl_k$ = function () {
    return this.width_1;
  };
  protoOf(CircleItem).get_height_e7t92o_k$ = function () {
    return this.height_1;
  };
  protoOf(CircleItem).get_color_ipu8u2_k$ = function () {
    return this.color_1;
  };
  protoOf(CircleItem).get_lineWidth_lbeliv_k$ = function () {
    return this.lineWidth_1;
  };
  protoOf(CircleItem).set_fill_sosdnb_k$ = function (_set____db54di) {
    this.fill_1 = _set____db54di;
  };
  protoOf(CircleItem).get_fill_wom0ng_k$ = function () {
    return this.fill_1;
  };
  function Companion_5() {
    Companion_instance_5 = this;
  }
  protoOf(Companion_5).serializer_9w0wvi_k$ = function () {
    return $serializer_getInstance_5();
  };
  var Companion_instance_5;
  function Companion_getInstance_6() {
    if (Companion_instance_5 == null)
      new Companion_5();
    return Companion_instance_5;
  }
  function $serializer_5() {
    $serializer_instance_5 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('stickynode.canvas.PolygonItem', this, 8);
    tmp0_serialDesc.addElement_5pzumi_k$('x', false);
    tmp0_serialDesc.addElement_5pzumi_k$('y', false);
    tmp0_serialDesc.addElement_5pzumi_k$('width', false);
    tmp0_serialDesc.addElement_5pzumi_k$('height', false);
    tmp0_serialDesc.addElement_5pzumi_k$('sides', false);
    tmp0_serialDesc.addElement_5pzumi_k$('color', false);
    tmp0_serialDesc.addElement_5pzumi_k$('lineWidth', true);
    tmp0_serialDesc.addElement_5pzumi_k$('fill', true);
    this.descriptor_1 = tmp0_serialDesc;
  }
  protoOf($serializer_5).serialize_ve2ex0_k$ = function (encoder, value) {
    var tmp0_desc = this.descriptor_1;
    var tmp1_output = encoder.beginStructure_yljocp_k$(tmp0_desc);
    tmp1_output.encodeDoubleElement_a6rqhe_k$(tmp0_desc, 0, value.x_1);
    tmp1_output.encodeDoubleElement_a6rqhe_k$(tmp0_desc, 1, value.y_1);
    tmp1_output.encodeDoubleElement_a6rqhe_k$(tmp0_desc, 2, value.width_1);
    tmp1_output.encodeDoubleElement_a6rqhe_k$(tmp0_desc, 3, value.height_1);
    tmp1_output.encodeIntElement_krhhce_k$(tmp0_desc, 4, value.sides_1);
    tmp1_output.encodeStringElement_1n5wu2_k$(tmp0_desc, 5, value.color_1);
    if (tmp1_output.shouldEncodeElementDefault_x8eyid_k$(tmp0_desc, 6) ? true : !(value.lineWidth_1 === 3)) {
      tmp1_output.encodeIntElement_krhhce_k$(tmp0_desc, 6, value.lineWidth_1);
    }
    if (tmp1_output.shouldEncodeElementDefault_x8eyid_k$(tmp0_desc, 7) ? true : !(value.fill_1 == null)) {
      tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 7, StringSerializer_getInstance(), value.fill_1);
    }
    tmp1_output.endStructure_1xqz0n_k$(tmp0_desc);
  };
  protoOf($serializer_5).serialize_5ase3y_k$ = function (encoder, value) {
    return this.serialize_ve2ex0_k$(encoder, value instanceof PolygonItem ? value : THROW_CCE());
  };
  protoOf($serializer_5).deserialize_sy6x50_k$ = function (decoder) {
    var tmp0_desc = this.descriptor_1;
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
    var tmp12_input = decoder.beginStructure_yljocp_k$(tmp0_desc);
    if (tmp12_input.decodeSequentially_xlblqy_k$()) {
      tmp4_local0 = tmp12_input.decodeDoubleElement_isei84_k$(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp12_input.decodeDoubleElement_isei84_k$(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp12_input.decodeDoubleElement_isei84_k$(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp12_input.decodeDoubleElement_isei84_k$(tmp0_desc, 3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp12_input.decodeIntElement_941u6a_k$(tmp0_desc, 4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp12_input.decodeStringElement_3oenpg_k$(tmp0_desc, 5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp12_input.decodeIntElement_941u6a_k$(tmp0_desc, 6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp11_local7 = tmp12_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 7, StringSerializer_getInstance(), tmp11_local7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp12_input.decodeElementIndex_bstkhp_k$(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp12_input.decodeDoubleElement_isei84_k$(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp12_input.decodeDoubleElement_isei84_k$(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp12_input.decodeDoubleElement_isei84_k$(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp12_input.decodeDoubleElement_isei84_k$(tmp0_desc, 3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp12_input.decodeIntElement_941u6a_k$(tmp0_desc, 4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp12_input.decodeStringElement_3oenpg_k$(tmp0_desc, 5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp12_input.decodeIntElement_941u6a_k$(tmp0_desc, 6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp11_local7 = tmp12_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 7, StringSerializer_getInstance(), tmp11_local7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp12_input.endStructure_1xqz0n_k$(tmp0_desc);
    return PolygonItem_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, tmp11_local7, null);
  };
  protoOf($serializer_5).get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  protoOf($serializer_5).childSerializers_5ghqw5_k$ = function () {
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
      throwMissingFieldException(seen0, 63, $serializer_getInstance_5().descriptor_1);
    }
    $this.x_1 = x;
    $this.y_1 = y;
    $this.width_1 = width;
    $this.height_1 = height;
    $this.sides_1 = sides;
    $this.color_1 = color;
    if (0 === (seen0 & 64))
      $this.lineWidth_1 = 3;
    else
      $this.lineWidth_1 = lineWidth;
    if (0 === (seen0 & 128))
      $this.fill_1 = null;
    else
      $this.fill_1 = fill;
    return $this;
  }
  function PolygonItem_init_$Create$(seen0, x, y, width, height, sides, color, lineWidth, fill, serializationConstructorMarker) {
    return PolygonItem_init_$Init$(seen0, x, y, width, height, sides, color, lineWidth, fill, serializationConstructorMarker, objectCreate(protoOf(PolygonItem)));
  }
  function PolygonItem(x, y, width, height, sides, color, lineWidth, fill) {
    Companion_getInstance_6();
    lineWidth = lineWidth === VOID ? 3 : lineWidth;
    fill = fill === VOID ? null : fill;
    this.x_1 = x;
    this.y_1 = y;
    this.width_1 = width;
    this.height_1 = height;
    this.sides_1 = sides;
    this.color_1 = color;
    this.lineWidth_1 = lineWidth;
    this.fill_1 = fill;
  }
  protoOf(PolygonItem).set_x_scd9vp_k$ = function (_set____db54di) {
    this.x_1 = _set____db54di;
  };
  protoOf(PolygonItem).get_x_1mhr67_k$ = function () {
    return this.x_1;
  };
  protoOf(PolygonItem).set_y_lelkme_k$ = function (_set____db54di) {
    this.y_1 = _set____db54di;
  };
  protoOf(PolygonItem).get_y_1mhr68_k$ = function () {
    return this.y_1;
  };
  protoOf(PolygonItem).get_width_j0q4yl_k$ = function () {
    return this.width_1;
  };
  protoOf(PolygonItem).get_height_e7t92o_k$ = function () {
    return this.height_1;
  };
  protoOf(PolygonItem).get_sides_iyiy8j_k$ = function () {
    return this.sides_1;
  };
  protoOf(PolygonItem).get_color_ipu8u2_k$ = function () {
    return this.color_1;
  };
  protoOf(PolygonItem).get_lineWidth_lbeliv_k$ = function () {
    return this.lineWidth_1;
  };
  protoOf(PolygonItem).set_fill_sosdnb_k$ = function (_set____db54di) {
    this.fill_1 = _set____db54di;
  };
  protoOf(PolygonItem).get_fill_wom0ng_k$ = function () {
    return this.fill_1;
  };
  function Companion_6() {
    Companion_instance_6 = this;
  }
  protoOf(Companion_6).serializer_9w0wvi_k$ = function () {
    return $serializer_getInstance_6();
  };
  var Companion_instance_6;
  function Companion_getInstance_7() {
    if (Companion_instance_6 == null)
      new Companion_6();
    return Companion_instance_6;
  }
  function $serializer_6() {
    $serializer_instance_6 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('stickynode.canvas.ArrowItem', this, 6);
    tmp0_serialDesc.addElement_5pzumi_k$('startX', false);
    tmp0_serialDesc.addElement_5pzumi_k$('startY', false);
    tmp0_serialDesc.addElement_5pzumi_k$('endX', false);
    tmp0_serialDesc.addElement_5pzumi_k$('endY', false);
    tmp0_serialDesc.addElement_5pzumi_k$('color', false);
    tmp0_serialDesc.addElement_5pzumi_k$('lineWidth', true);
    this.descriptor_1 = tmp0_serialDesc;
  }
  protoOf($serializer_6).serialize_hibvi4_k$ = function (encoder, value) {
    var tmp0_desc = this.descriptor_1;
    var tmp1_output = encoder.beginStructure_yljocp_k$(tmp0_desc);
    tmp1_output.encodeDoubleElement_a6rqhe_k$(tmp0_desc, 0, value.startX_1);
    tmp1_output.encodeDoubleElement_a6rqhe_k$(tmp0_desc, 1, value.startY_1);
    tmp1_output.encodeDoubleElement_a6rqhe_k$(tmp0_desc, 2, value.endX_1);
    tmp1_output.encodeDoubleElement_a6rqhe_k$(tmp0_desc, 3, value.endY_1);
    tmp1_output.encodeStringElement_1n5wu2_k$(tmp0_desc, 4, value.color_1);
    if (tmp1_output.shouldEncodeElementDefault_x8eyid_k$(tmp0_desc, 5) ? true : !(value.lineWidth_1 === 3)) {
      tmp1_output.encodeIntElement_krhhce_k$(tmp0_desc, 5, value.lineWidth_1);
    }
    tmp1_output.endStructure_1xqz0n_k$(tmp0_desc);
  };
  protoOf($serializer_6).serialize_5ase3y_k$ = function (encoder, value) {
    return this.serialize_hibvi4_k$(encoder, value instanceof ArrowItem ? value : THROW_CCE());
  };
  protoOf($serializer_6).deserialize_sy6x50_k$ = function (decoder) {
    var tmp0_desc = this.descriptor_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = 0.0;
    var tmp5_local1 = 0.0;
    var tmp6_local2 = 0.0;
    var tmp7_local3 = 0.0;
    var tmp8_local4 = null;
    var tmp9_local5 = 0;
    var tmp10_input = decoder.beginStructure_yljocp_k$(tmp0_desc);
    if (tmp10_input.decodeSequentially_xlblqy_k$()) {
      tmp4_local0 = tmp10_input.decodeDoubleElement_isei84_k$(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp10_input.decodeDoubleElement_isei84_k$(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp10_input.decodeDoubleElement_isei84_k$(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp10_input.decodeDoubleElement_isei84_k$(tmp0_desc, 3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp10_input.decodeStringElement_3oenpg_k$(tmp0_desc, 4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp10_input.decodeIntElement_941u6a_k$(tmp0_desc, 5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp10_input.decodeElementIndex_bstkhp_k$(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp10_input.decodeDoubleElement_isei84_k$(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp10_input.decodeDoubleElement_isei84_k$(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp10_input.decodeDoubleElement_isei84_k$(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp10_input.decodeDoubleElement_isei84_k$(tmp0_desc, 3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp10_input.decodeStringElement_3oenpg_k$(tmp0_desc, 4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp10_input.decodeIntElement_941u6a_k$(tmp0_desc, 5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp10_input.endStructure_1xqz0n_k$(tmp0_desc);
    return ArrowItem_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, null);
  };
  protoOf($serializer_6).get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  protoOf($serializer_6).childSerializers_5ghqw5_k$ = function () {
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
      throwMissingFieldException(seen0, 31, $serializer_getInstance_6().descriptor_1);
    }
    $this.startX_1 = startX;
    $this.startY_1 = startY;
    $this.endX_1 = endX;
    $this.endY_1 = endY;
    $this.color_1 = color;
    if (0 === (seen0 & 32))
      $this.lineWidth_1 = 3;
    else
      $this.lineWidth_1 = lineWidth;
    return $this;
  }
  function ArrowItem_init_$Create$(seen0, startX, startY, endX, endY, color, lineWidth, serializationConstructorMarker) {
    return ArrowItem_init_$Init$(seen0, startX, startY, endX, endY, color, lineWidth, serializationConstructorMarker, objectCreate(protoOf(ArrowItem)));
  }
  function ArrowItem(startX, startY, endX, endY, color, lineWidth) {
    Companion_getInstance_7();
    lineWidth = lineWidth === VOID ? 3 : lineWidth;
    this.startX_1 = startX;
    this.startY_1 = startY;
    this.endX_1 = endX;
    this.endY_1 = endY;
    this.color_1 = color;
    this.lineWidth_1 = lineWidth;
  }
  protoOf(ArrowItem).set_startX_tweqcj_k$ = function (_set____db54di) {
    this.startX_1 = _set____db54di;
  };
  protoOf(ArrowItem).get_startX_jnf4u7_k$ = function () {
    return this.startX_1;
  };
  protoOf(ArrowItem).set_startY_y6xmda_k$ = function (_set____db54di) {
    this.startY_1 = _set____db54di;
  };
  protoOf(ArrowItem).get_startY_jnf4u8_k$ = function () {
    return this.startY_1;
  };
  protoOf(ArrowItem).set_endX_mh4xwk_k$ = function (_set____db54di) {
    this.endX_1 = _set____db54di;
  };
  protoOf(ArrowItem).get_endX_wolh5y_k$ = function () {
    return this.endX_1;
  };
  protoOf(ArrowItem).set_endY_fjd8n9_k$ = function (_set____db54di) {
    this.endY_1 = _set____db54di;
  };
  protoOf(ArrowItem).get_endY_wolh5z_k$ = function () {
    return this.endY_1;
  };
  protoOf(ArrowItem).get_color_ipu8u2_k$ = function () {
    return this.color_1;
  };
  protoOf(ArrowItem).get_lineWidth_lbeliv_k$ = function () {
    return this.lineWidth_1;
  };
  function _get_$childSerializers__r2zwns_1($this) {
    return $this.$childSerializers_1;
  }
  function Companion_7() {
    Companion_instance_7 = this;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.$childSerializers_1 = [new ArrayListSerializer($serializer_getInstance_1()), new ArrayListSerializer($serializer_getInstance_2()), new ArrayListSerializer($serializer_getInstance_3()), new ArrayListSerializer($serializer_getInstance_4()), new ArrayListSerializer($serializer_getInstance_5()), new ArrayListSerializer($serializer_getInstance_6())];
  }
  protoOf(Companion_7).serializer_9w0wvi_k$ = function () {
    return $serializer_getInstance_7();
  };
  var Companion_instance_7;
  function Companion_getInstance_8() {
    if (Companion_instance_7 == null)
      new Companion_7();
    return Companion_instance_7;
  }
  function $serializer_7() {
    $serializer_instance_7 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('stickynode.canvas.Items', this, 6);
    tmp0_serialDesc.addElement_5pzumi_k$('strokeItems', false);
    tmp0_serialDesc.addElement_5pzumi_k$('textItems', false);
    tmp0_serialDesc.addElement_5pzumi_k$('rectangleItems', false);
    tmp0_serialDesc.addElement_5pzumi_k$('circleItems', false);
    tmp0_serialDesc.addElement_5pzumi_k$('polygonItems', false);
    tmp0_serialDesc.addElement_5pzumi_k$('arrowItems', false);
    this.descriptor_1 = tmp0_serialDesc;
  }
  protoOf($serializer_7).serialize_l2cv60_k$ = function (encoder, value) {
    var tmp0_desc = this.descriptor_1;
    var tmp1_output = encoder.beginStructure_yljocp_k$(tmp0_desc);
    var tmp2_cached = Companion_getInstance_8().$childSerializers_1;
    tmp1_output.encodeSerializableElement_isqxcl_k$(tmp0_desc, 0, tmp2_cached[0], value.strokeItems_1);
    tmp1_output.encodeSerializableElement_isqxcl_k$(tmp0_desc, 1, tmp2_cached[1], value.textItems_1);
    tmp1_output.encodeSerializableElement_isqxcl_k$(tmp0_desc, 2, tmp2_cached[2], value.rectangleItems_1);
    tmp1_output.encodeSerializableElement_isqxcl_k$(tmp0_desc, 3, tmp2_cached[3], value.circleItems_1);
    tmp1_output.encodeSerializableElement_isqxcl_k$(tmp0_desc, 4, tmp2_cached[4], value.polygonItems_1);
    tmp1_output.encodeSerializableElement_isqxcl_k$(tmp0_desc, 5, tmp2_cached[5], value.arrowItems_1);
    tmp1_output.endStructure_1xqz0n_k$(tmp0_desc);
  };
  protoOf($serializer_7).serialize_5ase3y_k$ = function (encoder, value) {
    return this.serialize_l2cv60_k$(encoder, value instanceof Items ? value : THROW_CCE());
  };
  protoOf($serializer_7).deserialize_sy6x50_k$ = function (decoder) {
    var tmp0_desc = this.descriptor_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_local5 = null;
    var tmp10_input = decoder.beginStructure_yljocp_k$(tmp0_desc);
    var tmp11_cached = Companion_getInstance_8().$childSerializers_1;
    if (tmp10_input.decodeSequentially_xlblqy_k$()) {
      tmp4_local0 = tmp10_input.decodeSerializableElement_uahnnv_k$(tmp0_desc, 0, tmp11_cached[0], tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp10_input.decodeSerializableElement_uahnnv_k$(tmp0_desc, 1, tmp11_cached[1], tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp10_input.decodeSerializableElement_uahnnv_k$(tmp0_desc, 2, tmp11_cached[2], tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp10_input.decodeSerializableElement_uahnnv_k$(tmp0_desc, 3, tmp11_cached[3], tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp10_input.decodeSerializableElement_uahnnv_k$(tmp0_desc, 4, tmp11_cached[4], tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp10_input.decodeSerializableElement_uahnnv_k$(tmp0_desc, 5, tmp11_cached[5], tmp9_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp10_input.decodeElementIndex_bstkhp_k$(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp10_input.decodeSerializableElement_uahnnv_k$(tmp0_desc, 0, tmp11_cached[0], tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp10_input.decodeSerializableElement_uahnnv_k$(tmp0_desc, 1, tmp11_cached[1], tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp10_input.decodeSerializableElement_uahnnv_k$(tmp0_desc, 2, tmp11_cached[2], tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp10_input.decodeSerializableElement_uahnnv_k$(tmp0_desc, 3, tmp11_cached[3], tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp10_input.decodeSerializableElement_uahnnv_k$(tmp0_desc, 4, tmp11_cached[4], tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp10_input.decodeSerializableElement_uahnnv_k$(tmp0_desc, 5, tmp11_cached[5], tmp9_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp10_input.endStructure_1xqz0n_k$(tmp0_desc);
    return Items_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, null);
  };
  protoOf($serializer_7).get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  protoOf($serializer_7).childSerializers_5ghqw5_k$ = function () {
    var tmp0_cached = Companion_getInstance_8().$childSerializers_1;
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
      throwMissingFieldException(seen0, 63, $serializer_getInstance_7().descriptor_1);
    }
    $this.strokeItems_1 = strokeItems;
    $this.textItems_1 = textItems;
    $this.rectangleItems_1 = rectangleItems;
    $this.circleItems_1 = circleItems;
    $this.polygonItems_1 = polygonItems;
    $this.arrowItems_1 = arrowItems;
    return $this;
  }
  function Items_init_$Create$(seen0, strokeItems, textItems, rectangleItems, circleItems, polygonItems, arrowItems, serializationConstructorMarker) {
    return Items_init_$Init$(seen0, strokeItems, textItems, rectangleItems, circleItems, polygonItems, arrowItems, serializationConstructorMarker, objectCreate(protoOf(Items)));
  }
  function Items(strokeItems, textItems, rectangleItems, circleItems, polygonItems, arrowItems) {
    Companion_getInstance_8();
    this.strokeItems_1 = strokeItems;
    this.textItems_1 = textItems;
    this.rectangleItems_1 = rectangleItems;
    this.circleItems_1 = circleItems;
    this.polygonItems_1 = polygonItems;
    this.arrowItems_1 = arrowItems;
  }
  protoOf(Items).get_strokeItems_pivh8h_k$ = function () {
    return this.strokeItems_1;
  };
  protoOf(Items).get_textItems_8zbevq_k$ = function () {
    return this.textItems_1;
  };
  protoOf(Items).get_rectangleItems_npge3q_k$ = function () {
    return this.rectangleItems_1;
  };
  protoOf(Items).get_circleItems_cgj3on_k$ = function () {
    return this.circleItems_1;
  };
  protoOf(Items).get_polygonItems_rrdxqp_k$ = function () {
    return this.polygonItems_1;
  };
  protoOf(Items).get_arrowItems_lx0j40_k$ = function () {
    return this.arrowItems_1;
  };
  function State() {
    this.tool_1 = 'draw';
    this.selectedColor_1 = '#000000';
    this.erasing_1 = false;
    this.drawing_1 = false;
    this.startPosition_1 = null;
    this.canvasSnapshot_1 = null;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.strokeItems_1 = ArrayList_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_0.textItems_1 = ArrayList_init_$Create$();
    var tmp_1 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_1.rectangleItems_1 = ArrayList_init_$Create$();
    var tmp_2 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_2.circleItems_1 = ArrayList_init_$Create$();
    var tmp_3 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_3.polygonItems_1 = ArrayList_init_$Create$();
    var tmp_4 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_4.arrowItems_1 = ArrayList_init_$Create$();
    this.polygonSides_1 = 5;
    this.currentStroke_1 = null;
    this.editingStroke_1 = null;
    this.editingCircle_1 = null;
    this.editingRectangle_1 = null;
    this.editingPolygon_1 = null;
    this.editingArrow_1 = null;
    this.editingText_1 = null;
    this.pendingTextPosition_1 = null;
    this.editOffset_1 = null;
    this.lastPosition_1 = null;
    this.lineWidth_1 = 3;
    this.fontSize_1 = 20;
  }
  protoOf(State).set_tool_ony1u3_k$ = function (_set____db54di) {
    this.tool_1 = _set____db54di;
  };
  protoOf(State).get_tool_wov2zl_k$ = function () {
    return this.tool_1;
  };
  protoOf(State).set_selectedColor_xursdb_k$ = function (_set____db54di) {
    this.selectedColor_1 = _set____db54di;
  };
  protoOf(State).get_selectedColor_mfz4gv_k$ = function () {
    return this.selectedColor_1;
  };
  protoOf(State).set_erasing_9bfbf3_k$ = function (_set____db54di) {
    this.erasing_1 = _set____db54di;
  };
  protoOf(State).get_erasing_ng9ybq_k$ = function () {
    return this.erasing_1;
  };
  protoOf(State).set_drawing_rwhub8_k$ = function (_set____db54di) {
    this.drawing_1 = _set____db54di;
  };
  protoOf(State).get_drawing_wwiddh_k$ = function () {
    return this.drawing_1;
  };
  protoOf(State).set_startPosition_a2dsao_k$ = function (_set____db54di) {
    this.startPosition_1 = _set____db54di;
  };
  protoOf(State).get_startPosition_d95qiq_k$ = function () {
    return this.startPosition_1;
  };
  protoOf(State).set_canvasSnapshot_kjd87_k$ = function (_set____db54di) {
    this.canvasSnapshot_1 = _set____db54di;
  };
  protoOf(State).get_canvasSnapshot_qkwi11_k$ = function () {
    return this.canvasSnapshot_1;
  };
  protoOf(State).get_strokeItems_pivh8h_k$ = function () {
    return this.strokeItems_1;
  };
  protoOf(State).get_textItems_8zbevq_k$ = function () {
    return this.textItems_1;
  };
  protoOf(State).get_rectangleItems_npge3q_k$ = function () {
    return this.rectangleItems_1;
  };
  protoOf(State).get_circleItems_cgj3on_k$ = function () {
    return this.circleItems_1;
  };
  protoOf(State).get_polygonItems_rrdxqp_k$ = function () {
    return this.polygonItems_1;
  };
  protoOf(State).get_arrowItems_lx0j40_k$ = function () {
    return this.arrowItems_1;
  };
  protoOf(State).set_polygonSides_7fzqbb_k$ = function (_set____db54di) {
    this.polygonSides_1 = _set____db54di;
  };
  protoOf(State).get_polygonSides_rm31lh_k$ = function () {
    return this.polygonSides_1;
  };
  protoOf(State).set_currentStroke_ky7n3q_k$ = function (_set____db54di) {
    this.currentStroke_1 = _set____db54di;
  };
  protoOf(State).get_currentStroke_z58r2w_k$ = function () {
    return this.currentStroke_1;
  };
  protoOf(State).set_editingStroke_b73whh_k$ = function (_set____db54di) {
    this.editingStroke_1 = _set____db54di;
  };
  protoOf(State).get_editingStroke_bi8r0n_k$ = function () {
    return this.editingStroke_1;
  };
  protoOf(State).set_editingCircle_twqoun_k$ = function (_set____db54di) {
    this.editingCircle_1 = _set____db54di;
  };
  protoOf(State).get_editingCircle_3rgtb3_k$ = function () {
    return this.editingCircle_1;
  };
  protoOf(State).set_editingRectangle_mobwhj_k$ = function (_set____db54di) {
    this.editingRectangle_1 = _set____db54di;
  };
  protoOf(State).get_editingRectangle_ldge4g_k$ = function () {
    return this.editingRectangle_1;
  };
  protoOf(State).set_editingPolygon_zbqdup_k$ = function (_set____db54di) {
    this.editingPolygon_1 = _set____db54di;
  };
  protoOf(State).get_editingPolygon_q3jmob_k$ = function () {
    return this.editingPolygon_1;
  };
  protoOf(State).set_editingArrow_6cz93o_k$ = function (_set____db54di) {
    this.editingArrow_1 = _set____db54di;
  };
  protoOf(State).get_editingArrow_mtg0o6_k$ = function () {
    return this.editingArrow_1;
  };
  protoOf(State).set_editingText_qair36_k$ = function (_set____db54di) {
    this.editingText_1 = _set____db54di;
  };
  protoOf(State).get_editingText_lck0p0_k$ = function () {
    return this.editingText_1;
  };
  protoOf(State).set_pendingTextPosition_w5pflu_k$ = function (_set____db54di) {
    this.pendingTextPosition_1 = _set____db54di;
  };
  protoOf(State).get_pendingTextPosition_5yd58c_k$ = function () {
    return this.pendingTextPosition_1;
  };
  protoOf(State).set_editOffset_7b8yc4_k$ = function (_set____db54di) {
    this.editOffset_1 = _set____db54di;
  };
  protoOf(State).get_editOffset_9sigg6_k$ = function () {
    return this.editOffset_1;
  };
  protoOf(State).set_lastPosition_mmd7ci_k$ = function (_set____db54di) {
    this.lastPosition_1 = _set____db54di;
  };
  protoOf(State).get_lastPosition_bjivo8_k$ = function () {
    return this.lastPosition_1;
  };
  protoOf(State).set_lineWidth_97ta37_k$ = function (_set____db54di) {
    this.lineWidth_1 = _set____db54di;
  };
  protoOf(State).get_lineWidth_lbeliv_k$ = function () {
    return this.lineWidth_1;
  };
  protoOf(State).set_fontSize_6szsfv_k$ = function (_set____db54di) {
    this.fontSize_1 = _set____db54di;
  };
  protoOf(State).get_fontSize_pr9n47_k$ = function () {
    return this.fontSize_1;
  };
  function json$lambda($this$Json) {
    _init_properties_Model_kt__1gdqdl();
    $this$Json.set_ignoreUnknownKeys_pzvtne_k$(true);
    $this$Json.set_encodeDefaults_c5evsg_k$(true);
    $this$Json.set_explicitNulls_mtj2ai_k$(false);
    return Unit_getInstance();
  }
  var properties_initialized_Model_kt_bjs3d3;
  function _init_properties_Model_kt__1gdqdl() {
    if (!properties_initialized_Model_kt_bjs3d3) {
      properties_initialized_Model_kt_bjs3d3 = true;
      json = Json(VOID, json$lambda);
    }
  }
  function get_storageKey() {
    return storageKey;
  }
  var storageKey;
  function get_textStorageKey() {
    return textStorageKey;
  }
  var textStorageKey;
  function get_rectangleStorageKey() {
    return rectangleStorageKey;
  }
  var rectangleStorageKey;
  function get_circleStorageKey() {
    return circleStorageKey;
  }
  var circleStorageKey;
  function get_polygonStorageKey() {
    return polygonStorageKey;
  }
  var polygonStorageKey;
  function get_strokeStorageKey() {
    return strokeStorageKey;
  }
  var strokeStorageKey;
  function get_arrowStorageKey() {
    return arrowStorageKey;
  }
  var arrowStorageKey;
  function saveCanvas(canvas, state) {
    localStorage.setItem('drawingCanvas', canvas.toDataURL('image/png'));
    localStorage.setItem('drawingCanvasText', get_json().encodeToString_k0apqx_k$(ListSerializer(Companion_getInstance_3().serializer_9w0wvi_k$()), state.get_textItems_8zbevq_k$()));
    localStorage.setItem('drawingCanvasRectangles', get_json().encodeToString_k0apqx_k$(ListSerializer(Companion_getInstance_4().serializer_9w0wvi_k$()), state.get_rectangleItems_npge3q_k$()));
    localStorage.setItem('drawingCanvasCircles', get_json().encodeToString_k0apqx_k$(ListSerializer(Companion_getInstance_5().serializer_9w0wvi_k$()), state.get_circleItems_cgj3on_k$()));
    localStorage.setItem('drawingCanvasPolygons', get_json().encodeToString_k0apqx_k$(ListSerializer(Companion_getInstance_6().serializer_9w0wvi_k$()), state.get_polygonItems_rrdxqp_k$()));
    localStorage.setItem('drawingCanvasStrokes', get_json().encodeToString_k0apqx_k$(ListSerializer(Companion_getInstance_2().serializer_9w0wvi_k$()), state.get_strokeItems_pivh8h_k$()));
    localStorage.setItem('drawingCanvasArrows', get_json().encodeToString_k0apqx_k$(ListSerializer(Companion_getInstance_7().serializer_9w0wvi_k$()), state.get_arrowItems_lx0j40_k$()));
  }
  function loadCanvas(canvas, context, state) {
    var tmp0_safe_receiver = localStorage.getItem('drawingCanvasCircles');
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'stickynode.canvas.loadCanvas.<anonymous>' call
      state.get_circleItems_cgj3on_k$().addAll_4lagoh_k$(get_json().decodeFromString_jwu9sq_k$(ListSerializer(Companion_getInstance_5().serializer_9w0wvi_k$()), tmp0_safe_receiver));
    }
    var tmp1_safe_receiver = localStorage.getItem('drawingCanvasPolygons');
    if (tmp1_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'stickynode.canvas.loadCanvas.<anonymous>' call
      state.get_polygonItems_rrdxqp_k$().addAll_4lagoh_k$(get_json().decodeFromString_jwu9sq_k$(ListSerializer(Companion_getInstance_6().serializer_9w0wvi_k$()), tmp1_safe_receiver));
    }
    var tmp2_safe_receiver = localStorage.getItem('drawingCanvasStrokes');
    if (tmp2_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'stickynode.canvas.loadCanvas.<anonymous>' call
      state.get_strokeItems_pivh8h_k$().addAll_4lagoh_k$(get_json().decodeFromString_jwu9sq_k$(ListSerializer(Companion_getInstance_2().serializer_9w0wvi_k$()), tmp2_safe_receiver));
    }
    var tmp3_safe_receiver = localStorage.getItem('drawingCanvasArrows');
    if (tmp3_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'stickynode.canvas.loadCanvas.<anonymous>' call
      state.get_arrowItems_lx0j40_k$().addAll_4lagoh_k$(get_json().decodeFromString_jwu9sq_k$(ListSerializer(Companion_getInstance_7().serializer_9w0wvi_k$()), tmp3_safe_receiver));
    }
    var tmp4_safe_receiver = localStorage.getItem('drawingCanvasText');
    if (tmp4_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'stickynode.canvas.loadCanvas.<anonymous>' call
      state.get_textItems_8zbevq_k$().addAll_4lagoh_k$(get_json().decodeFromString_jwu9sq_k$(ListSerializer(Companion_getInstance_3().serializer_9w0wvi_k$()), tmp4_safe_receiver));
    }
    var tmp5_safe_receiver = localStorage.getItem('drawingCanvasRectangles');
    if (tmp5_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'stickynode.canvas.loadCanvas.<anonymous>' call
      state.get_rectangleItems_npge3q_k$().addAll_4lagoh_k$(get_json().decodeFromString_jwu9sq_k$(ListSerializer(Companion_getInstance_4().serializer_9w0wvi_k$()), tmp5_safe_receiver));
    }
    var tmp6_elvis_lhs = localStorage.getItem('drawingCanvas');
    var tmp;
    if (tmp6_elvis_lhs == null) {
      return Unit_getInstance();
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
    state.get_textItems_8zbevq_k$().clear_j9egeb_k$();
    state.get_rectangleItems_npge3q_k$().clear_j9egeb_k$();
    state.get_circleItems_cgj3on_k$().clear_j9egeb_k$();
    state.get_polygonItems_rrdxqp_k$().clear_j9egeb_k$();
    state.get_strokeItems_pivh8h_k$().clear_j9egeb_k$();
    state.get_arrowItems_lx0j40_k$().clear_j9egeb_k$();
  }
  function loadCanvas$lambda($context, $image) {
    return function (it) {
      $context.drawImage($image, 0.0, 0.0);
      return null;
    };
  }
  function handleFreehandMouseDown(h, position) {
    var state = h.get_state_iypx7s_k$();
    if (state.get_erasing_ng9ybq_k$()) {
      state.set_drawing_rwhub8_k$(true);
      var removed = eraseAt(state, position, h.get_textContext_fqn3o9_k$());
      if (removed) {
        h.render_dje1iy_k$();
        h.get_saveCanvas_acgjeq_k$()();
      }
      return Unit_getInstance();
    }
    var existingStroke = findStrokeAt(state.get_strokeItems_pivh8h_k$(), position);
    if (!(existingStroke == null)) {
      state.set_editingStroke_b73whh_k$(existingStroke);
      state.set_editOffset_7b8yc4_k$(new Point(position.get_x_1mhr67_k$() - existingStroke.get_points_i5obn0_k$().get_c1px32_k$(0).get_x_1mhr67_k$(), position.get_y_1mhr68_k$() - existingStroke.get_points_i5obn0_k$().get_c1px32_k$(0).get_y_1mhr68_k$()));
      return Unit_getInstance();
    }
    var stroke = new Stroke(mutableListOf([position]), state.get_selectedColor_mfz4gv_k$(), state.get_lineWidth_lbeliv_k$());
    state.set_currentStroke_ky7n3q_k$(stroke);
    state.get_strokeItems_pivh8h_k$().add_utx5q5_k$(stroke);
    h.render_dje1iy_k$();
  }
  function handleFreehandMouseMove(h, position) {
    var state = h.get_state_iypx7s_k$();
    if (state.get_erasing_ng9ybq_k$() && state.get_drawing_wwiddh_k$()) {
      var removed = eraseAt(state, position, h.get_textContext_fqn3o9_k$());
      if (removed) {
        h.render_dje1iy_k$();
        h.get_saveCanvas_acgjeq_k$()();
      }
      return Unit_getInstance();
    }
    var editing = state.get_editingStroke_bi8r0n_k$();
    if (!(editing == null)) {
      var firstPoint = editing.get_points_i5obn0_k$().get_c1px32_k$(0);
      var offset = ensureNotNull(state.get_editOffset_9sigg6_k$());
      var deltaX = position.get_x_1mhr67_k$() - offset.get_x_1mhr67_k$() - firstPoint.get_x_1mhr67_k$();
      var deltaY = position.get_y_1mhr68_k$() - offset.get_y_1mhr68_k$() - firstPoint.get_y_1mhr68_k$();
      // Inline function 'kotlin.collections.map' call
      var this_0 = editing.get_points_i5obn0_k$();
      // Inline function 'kotlin.collections.mapTo' call
      var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(this_0, 10));
      var _iterator__ex2g4s = this_0.iterator_jk1svi_k$();
      while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
        var item = _iterator__ex2g4s.next_20eer_k$();
        // Inline function 'stickynode.canvas.events.handleFreehandMouseMove.<anonymous>' call
        var tmp$ret$0 = new Point(item.get_x_1mhr67_k$() + deltaX, item.get_y_1mhr68_k$() + deltaY);
        destination.add_utx5q5_k$(tmp$ret$0);
      }
      editing.set_points_w0ahkm_k$(toMutableList(destination));
      h.render_dje1iy_k$();
      return Unit_getInstance();
    }
    var current = state.get_currentStroke_z58r2w_k$();
    if (!state.get_erasing_ng9ybq_k$() && !(current == null)) {
      current.get_points_i5obn0_k$().add_utx5q5_k$(position);
      h.render_dje1iy_k$();
      return Unit_getInstance();
    }
  }
  function handleFreehandMouseUp(h) {
    var state = h.get_state_iypx7s_k$();
    if (!(state.get_editingStroke_bi8r0n_k$() == null)) {
      h.get_saveCanvas_acgjeq_k$()();
      state.set_editingStroke_b73whh_k$(null);
      state.set_editOffset_7b8yc4_k$(null);
      return Unit_getInstance();
    }
    var current = state.get_currentStroke_z58r2w_k$();
    if (!(current == null)) {
      if (current.get_points_i5obn0_k$().get_size_woubt6_k$() < 2) {
        state.get_strokeItems_pivh8h_k$().removeAt_6niowx_k$(get_lastIndex(state.get_strokeItems_pivh8h_k$()));
      }
      h.get_saveCanvas_acgjeq_k$()();
      state.set_currentStroke_ky7n3q_k$(null);
      return Unit_getInstance();
    }
    state.set_drawing_rwhub8_k$(false);
  }
  function handleFreehandMouseLeave(h) {
    var state = h.get_state_iypx7s_k$();
    var current = state.get_currentStroke_z58r2w_k$();
    if (!(current == null) && current.get_points_i5obn0_k$().get_size_woubt6_k$() < 2) {
      state.get_strokeItems_pivh8h_k$().removeAt_6niowx_k$(get_lastIndex(state.get_strokeItems_pivh8h_k$()));
    }
    if (state.get_drawing_wwiddh_k$() || !(state.get_currentStroke_z58r2w_k$() == null) || !(state.get_editingStroke_bi8r0n_k$() == null))
      h.get_saveCanvas_acgjeq_k$()();
    state.set_drawing_rwhub8_k$(false);
    state.set_currentStroke_ky7n3q_k$(null);
    state.set_editingStroke_b73whh_k$(null);
    state.set_editOffset_7b8yc4_k$(null);
  }
  function Handlers(canvas, context, textContext, state, saveCanvas, renderOverlay) {
    this.canvas_1 = canvas;
    this.context_1 = context;
    this.textContext_1 = textContext;
    this.state_1 = state;
    this.saveCanvas_1 = saveCanvas;
    this.renderOverlay_1 = renderOverlay;
  }
  protoOf(Handlers).get_canvas_bshgm9_k$ = function () {
    return this.canvas_1;
  };
  protoOf(Handlers).get_context_h02k06_k$ = function () {
    return this.context_1;
  };
  protoOf(Handlers).get_textContext_fqn3o9_k$ = function () {
    return this.textContext_1;
  };
  protoOf(Handlers).get_state_iypx7s_k$ = function () {
    return this.state_1;
  };
  protoOf(Handlers).get_saveCanvas_acgjeq_k$ = function () {
    return this.saveCanvas_1;
  };
  protoOf(Handlers).get_renderOverlay_y00vgv_k$ = function () {
    return this.renderOverlay_1;
  };
  protoOf(Handlers).render_dje1iy_k$ = function () {
    return this.renderOverlay_1(this.textContext_1, this.state_1);
  };
  function findCircleAt(circleItems, position) {
    var tmp0 = asReversed(circleItems);
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var _iterator__ex2g4s = tmp0.iterator_jk1svi_k$();
      while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
        var element = _iterator__ex2g4s.next_20eer_k$();
        // Inline function 'stickynode.canvas.events.findCircleAt.<anonymous>' call
        var centerX = element.get_x_1mhr67_k$() + element.get_width_j0q4yl_k$() / 2;
        var centerY = element.get_y_1mhr68_k$() + element.get_height_e7t92o_k$() / 2;
        var radiusX = element.get_width_j0q4yl_k$() / 2;
        var radiusY = element.get_height_e7t92o_k$() / 2;
        var tmp;
        if (radiusX === 0.0 || radiusY === 0.0) {
          tmp = false;
        } else {
          var normalizedX = (position.get_x_1mhr67_k$() - centerX) / radiusX;
          var normalizedY = (position.get_y_1mhr68_k$() - centerY) / radiusY;
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
      var _iterator__ex2g4s = tmp0.iterator_jk1svi_k$();
      while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
        var element = _iterator__ex2g4s.next_20eer_k$();
        // Inline function 'stickynode.canvas.events.findRectangleAt.<anonymous>' call
        if (position.get_x_1mhr67_k$() >= element.get_x_1mhr67_k$() && position.get_x_1mhr67_k$() <= element.get_x_1mhr67_k$() + element.get_width_j0q4yl_k$() && position.get_y_1mhr68_k$() >= element.get_y_1mhr68_k$() && position.get_y_1mhr68_k$() <= element.get_y_1mhr68_k$() + element.get_height_e7t92o_k$()) {
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
      var _iterator__ex2g4s = tmp0.iterator_jk1svi_k$();
      while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
        var element = _iterator__ex2g4s.next_20eer_k$();
        // Inline function 'stickynode.canvas.events.findPolygonAt.<anonymous>' call
        var centerX = element.get_x_1mhr67_k$() + element.get_width_j0q4yl_k$() / 2;
        var centerY = element.get_y_1mhr68_k$() + element.get_height_e7t92o_k$() / 2;
        var tmp0_0 = element.get_width_j0q4yl_k$();
        // Inline function 'kotlin.math.min' call
        var b = element.get_height_e7t92o_k$();
        var radius = Math.min(tmp0_0, b) / 2;
        var tmp;
        if (radius === 0.0) {
          tmp = false;
        } else {
          var tmp2 = position.get_x_1mhr67_k$() - centerX;
          // Inline function 'kotlin.math.hypot' call
          var y = position.get_y_1mhr68_k$() - centerY;
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
      var _iterator__ex2g4s = tmp0.iterator_jk1svi_k$();
      while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
        var element = _iterator__ex2g4s.next_20eer_k$();
        // Inline function 'stickynode.canvas.events.findStrokeAt.<anonymous>' call
        var points = element.get_points_i5obn0_k$();
        var tmp0_0 = get_indices(points);
        var tmp$ret$0;
        $l$block_0: {
          // Inline function 'kotlin.collections.any' call
          var tmp;
          if (isInterface(tmp0_0, Collection)) {
            tmp = tmp0_0.isEmpty_y1axqb_k$();
          } else {
            tmp = false;
          }
          if (tmp) {
            tmp$ret$0 = false;
            break $l$block_0;
          }
          var inductionVariable = tmp0_0.get_first_irdx8n_k$();
          var last = tmp0_0.get_last_wopotb_k$();
          if (inductionVariable <= last)
            do {
              var element_0 = inductionVariable;
              inductionVariable = inductionVariable + 1 | 0;
              // Inline function 'stickynode.canvas.events.findStrokeAt.<anonymous>.<anonymous>' call
              var index = element_0;
              var point = points.get_c1px32_k$(index);
              var nextPoint = getOrNull(points, index + 1 | 0);
              var tmp_0;
              if (nextPoint == null) {
                var tmp0_1 = point.get_x_1mhr67_k$() - position.get_x_1mhr67_k$();
                // Inline function 'kotlin.math.hypot' call
                var y = point.get_y_1mhr68_k$() - position.get_y_1mhr68_k$();
                tmp_0 = hypot(tmp0_1, y) <= 8;
              } else {
                var segmentX = nextPoint.get_x_1mhr67_k$() - point.get_x_1mhr67_k$();
                var segmentY = nextPoint.get_y_1mhr68_k$() - point.get_y_1mhr68_k$();
                var segmentLengthSquared = segmentX * segmentX + segmentY * segmentY;
                var tmp_1;
                if (segmentLengthSquared === 0.0) {
                  tmp_1 = 0.0;
                } else {
                  // Inline function 'kotlin.math.min' call
                  var b = ((position.get_x_1mhr67_k$() - point.get_x_1mhr67_k$()) * segmentX + (position.get_y_1mhr68_k$() - point.get_y_1mhr68_k$()) * segmentY) / segmentLengthSquared;
                  // Inline function 'kotlin.math.max' call
                  var b_0 = Math.min(1.0, b);
                  tmp_1 = Math.max(0.0, b_0);
                }
                var projection = tmp_1;
                var closestX = point.get_x_1mhr67_k$() + projection * segmentX;
                var closestY = point.get_y_1mhr68_k$() + projection * segmentY;
                var tmp6 = position.get_x_1mhr67_k$() - closestX;
                // Inline function 'kotlin.math.hypot' call
                var y_0 = position.get_y_1mhr68_k$() - closestY;
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
      var _iterator__ex2g4s = tmp0.iterator_jk1svi_k$();
      while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
        var element = _iterator__ex2g4s.next_20eer_k$();
        // Inline function 'stickynode.canvas.events.findArrowAt.<anonymous>' call
        if (pointToSegmentDistance(position.get_x_1mhr67_k$(), position.get_y_1mhr68_k$(), element.get_startX_jnf4u7_k$(), element.get_startY_jnf4u8_k$(), element.get_endX_wolh5y_k$(), element.get_endY_wolh5z_k$()) <= threshold) {
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
      var _iterator__ex2g4s = tmp1.iterator_jk1svi_k$();
      while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
        var element = _iterator__ex2g4s.next_20eer_k$();
        // Inline function 'stickynode.canvas.events.findTextAt.<anonymous>' call
        var tmp;
        // Inline function 'kotlin.text.isEmpty' call
        var this_0 = element.get_text_wouvsm_k$();
        if (charSequenceLength(this_0) === 0) {
          tmp = false;
        } else {
          var fontSize = element.get_fontSize_pr9n47_k$();
          textContext.font = '' + fontSize + 'px sans-serif';
          var lines = split(element.get_text_wouvsm_k$(), ['\n']);
          // Inline function 'kotlin.collections.maxOf' call
          var iterator = lines.iterator_jk1svi_k$();
          if (!iterator.hasNext_bitz1p_k$())
            throw NoSuchElementException_init_$Create$();
          // Inline function 'stickynode.canvas.events.findTextAt.<anonymous>.<anonymous>' call
          var line = iterator.next_20eer_k$();
          var maxValue = textContext.measureText(line).width;
          while (iterator.hasNext_bitz1p_k$()) {
            // Inline function 'stickynode.canvas.events.findTextAt.<anonymous>.<anonymous>' call
            var line_0 = iterator.next_20eer_k$();
            var v = textContext.measureText(line_0).width;
            // Inline function 'kotlin.comparisons.maxOf' call
            var a = maxValue;
            maxValue = Math.max(a, v);
          }
          // Inline function 'kotlin.math.max' call
          var a_0 = maxValue;
          var width = Math.max(a_0, 1.0);
          var height = imul(lines.get_size_woubt6_k$(), getLineHeight(fontSize));
          tmp = (position.get_x_1mhr67_k$() >= element.get_x_1mhr67_k$() && position.get_x_1mhr67_k$() <= element.get_x_1mhr67_k$() + width && position.get_y_1mhr68_k$() >= element.get_y_1mhr68_k$() && position.get_y_1mhr68_k$() <= element.get_y_1mhr68_k$() + height);
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
  function _get_getItems__x29jwh($this) {
    return $this.getItems_1;
  }
  function _get_findAt__nonfzz($this) {
    return $this.findAt_1;
  }
  function _get_getEditing__to9aw9($this) {
    return $this.getEditing_1;
  }
  function _get_setEditing__s7iq9h($this) {
    return $this.setEditing_1;
  }
  function _get_origin__hwq945($this) {
    return $this.origin_1;
  }
  function _get_preview__e3e5vt($this) {
    return $this.preview_1;
  }
  function _get_create__g83typ($this) {
    return $this.create_1;
  }
  function TypedShapeConfig(getItems, findAt, getEditing, setEditing, origin, preview, create) {
    ShapeConfig.call(this);
    this.getItems_1 = getItems;
    this.findAt_1 = findAt;
    this.getEditing_1 = getEditing;
    this.setEditing_1 = setEditing;
    this.origin_1 = origin;
    this.preview_1 = preview;
    this.create_1 = create;
  }
  protoOf(TypedShapeConfig).beginEdit_cdvfw4_k$ = function (state, position) {
    var tmp0_elvis_lhs = this.findAt_1(this.getItems_1(state), position);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var existing = tmp;
    this.setEditing_1(state, existing);
    var o = this.origin_1(existing);
    state.set_editOffset_7b8yc4_k$(new Point(position.get_x_1mhr67_k$() - o.get_x_1mhr67_k$(), position.get_y_1mhr68_k$() - o.get_y_1mhr68_k$()));
    return true;
  };
  protoOf(TypedShapeConfig).isEditing_wcf7nu_k$ = function (state) {
    return !(this.getEditing_1(state) == null);
  };
  protoOf(TypedShapeConfig).endEdit_221lpt_k$ = function (state) {
    return this.setEditing_1(state, null);
  };
  protoOf(TypedShapeConfig).drawPreview_xvy11w_k$ = function (context, start, current, state) {
    return this.preview_1(context, start, current, state);
  };
  protoOf(TypedShapeConfig).addItem_tqdqio_k$ = function (state, start, end) {
    this.getItems_1(state).add_utx5q5_k$(this.create_1(start, end, state));
  };
  function SHAPE_CONFIGS$lambda(it) {
    _init_properties_ShapeDefinitions_kt__xfukox();
    return it.get_arrowItems_lx0j40_k$();
  }
  function SHAPE_CONFIGS$lambda_0(items, p) {
    _init_properties_ShapeDefinitions_kt__xfukox();
    return findArrowAt(items, p);
  }
  function SHAPE_CONFIGS$lambda_1(it) {
    _init_properties_ShapeDefinitions_kt__xfukox();
    return it.get_editingArrow_mtg0o6_k$();
  }
  function SHAPE_CONFIGS$lambda_2(s, v) {
    _init_properties_ShapeDefinitions_kt__xfukox();
    s.set_editingArrow_6cz93o_k$(v);
    return Unit_getInstance();
  }
  function SHAPE_CONFIGS$lambda_3(it) {
    _init_properties_ShapeDefinitions_kt__xfukox();
    return new Point(it.get_startX_jnf4u7_k$(), it.get_startY_jnf4u8_k$());
  }
  function SHAPE_CONFIGS$lambda_4(ctx, start, current, s) {
    _init_properties_ShapeDefinitions_kt__xfukox();
    drawArrow(ctx, start, current, s.get_selectedColor_mfz4gv_k$(), s.get_lineWidth_lbeliv_k$());
    return Unit_getInstance();
  }
  function SHAPE_CONFIGS$lambda_5(start, end, s) {
    _init_properties_ShapeDefinitions_kt__xfukox();
    return new ArrowItem(start.get_x_1mhr67_k$(), start.get_y_1mhr68_k$(), end.get_x_1mhr67_k$(), end.get_y_1mhr68_k$(), s.get_selectedColor_mfz4gv_k$(), s.get_lineWidth_lbeliv_k$());
  }
  function SHAPE_CONFIGS$lambda_6(it) {
    _init_properties_ShapeDefinitions_kt__xfukox();
    return it.get_circleItems_cgj3on_k$();
  }
  function SHAPE_CONFIGS$lambda_7(items, p) {
    _init_properties_ShapeDefinitions_kt__xfukox();
    return findCircleAt(items, p);
  }
  function SHAPE_CONFIGS$lambda_8(it) {
    _init_properties_ShapeDefinitions_kt__xfukox();
    return it.get_editingCircle_3rgtb3_k$();
  }
  function SHAPE_CONFIGS$lambda_9(s, v) {
    _init_properties_ShapeDefinitions_kt__xfukox();
    s.set_editingCircle_twqoun_k$(v);
    return Unit_getInstance();
  }
  function SHAPE_CONFIGS$lambda_10(it) {
    _init_properties_ShapeDefinitions_kt__xfukox();
    return new Point(it.get_x_1mhr67_k$(), it.get_y_1mhr68_k$());
  }
  function SHAPE_CONFIGS$lambda_11(ctx, start, current, s) {
    _init_properties_ShapeDefinitions_kt__xfukox();
    drawCircle(ctx, start, current, s.get_selectedColor_mfz4gv_k$(), s.get_lineWidth_lbeliv_k$());
    return Unit_getInstance();
  }
  function SHAPE_CONFIGS$lambda_12(start, end, s) {
    _init_properties_ShapeDefinitions_kt__xfukox();
    var b = getBoundingBox(start, end);
    return new CircleItem(b.get_x_1mhr67_k$(), b.get_y_1mhr68_k$(), b.get_width_j0q4yl_k$(), b.get_height_e7t92o_k$(), s.get_selectedColor_mfz4gv_k$(), s.get_lineWidth_lbeliv_k$());
  }
  function SHAPE_CONFIGS$lambda_13(it) {
    _init_properties_ShapeDefinitions_kt__xfukox();
    return it.get_rectangleItems_npge3q_k$();
  }
  function SHAPE_CONFIGS$lambda_14(items, p) {
    _init_properties_ShapeDefinitions_kt__xfukox();
    return findRectangleAt(items, p);
  }
  function SHAPE_CONFIGS$lambda_15(it) {
    _init_properties_ShapeDefinitions_kt__xfukox();
    return it.get_editingRectangle_ldge4g_k$();
  }
  function SHAPE_CONFIGS$lambda_16(s, v) {
    _init_properties_ShapeDefinitions_kt__xfukox();
    s.set_editingRectangle_mobwhj_k$(v);
    return Unit_getInstance();
  }
  function SHAPE_CONFIGS$lambda_17(it) {
    _init_properties_ShapeDefinitions_kt__xfukox();
    return new Point(it.get_x_1mhr67_k$(), it.get_y_1mhr68_k$());
  }
  function SHAPE_CONFIGS$lambda_18(ctx, start, current, s) {
    _init_properties_ShapeDefinitions_kt__xfukox();
    drawRectangle(ctx, start, current, s.get_selectedColor_mfz4gv_k$(), s.get_lineWidth_lbeliv_k$());
    return Unit_getInstance();
  }
  function SHAPE_CONFIGS$lambda_19(start, end, s) {
    _init_properties_ShapeDefinitions_kt__xfukox();
    var b = getBoundingBox(start, end);
    return new RectangleItem(b.get_x_1mhr67_k$(), b.get_y_1mhr68_k$(), b.get_width_j0q4yl_k$(), b.get_height_e7t92o_k$(), s.get_selectedColor_mfz4gv_k$(), s.get_lineWidth_lbeliv_k$());
  }
  function SHAPE_CONFIGS$lambda_20(it) {
    _init_properties_ShapeDefinitions_kt__xfukox();
    return it.get_polygonItems_rrdxqp_k$();
  }
  function SHAPE_CONFIGS$lambda_21(items, p) {
    _init_properties_ShapeDefinitions_kt__xfukox();
    return findPolygonAt(items, p);
  }
  function SHAPE_CONFIGS$lambda_22(it) {
    _init_properties_ShapeDefinitions_kt__xfukox();
    return it.get_editingPolygon_q3jmob_k$();
  }
  function SHAPE_CONFIGS$lambda_23(s, v) {
    _init_properties_ShapeDefinitions_kt__xfukox();
    s.set_editingPolygon_zbqdup_k$(v);
    return Unit_getInstance();
  }
  function SHAPE_CONFIGS$lambda_24(it) {
    _init_properties_ShapeDefinitions_kt__xfukox();
    return new Point(it.get_x_1mhr67_k$(), it.get_y_1mhr68_k$());
  }
  function SHAPE_CONFIGS$lambda_25(ctx, start, current, s) {
    _init_properties_ShapeDefinitions_kt__xfukox();
    drawPolygon(ctx, start, current, s.get_polygonSides_rm31lh_k$(), s.get_selectedColor_mfz4gv_k$(), s.get_lineWidth_lbeliv_k$());
    return Unit_getInstance();
  }
  function SHAPE_CONFIGS$lambda_26(start, end, s) {
    _init_properties_ShapeDefinitions_kt__xfukox();
    var b = getBoundingBox(start, end);
    return new PolygonItem(b.get_x_1mhr67_k$(), b.get_y_1mhr68_k$(), b.get_width_j0q4yl_k$(), b.get_height_e7t92o_k$(), s.get_polygonSides_rm31lh_k$(), s.get_selectedColor_mfz4gv_k$(), s.get_lineWidth_lbeliv_k$());
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
    state.set_startPosition_a2dsao_k$(position);
    state.set_lastPosition_mmd7ci_k$(position);
    state.set_canvasSnapshot_kjd87_k$(context.getImageData(0.0, 0.0, canvas.width, canvas.height));
  }
  function handleShapeMouseDown(h, position) {
    var state = h.get_state_iypx7s_k$();
    var tmp0_elvis_lhs = get_SHAPE_CONFIGS().get_wei43m_k$(state.get_tool_wov2zl_k$());
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var config = tmp;
    if (config.beginEdit_cdvfw4_k$(state, position))
      return true;
    takeCanvasSnapshot(h.get_canvas_bshgm9_k$(), h.get_context_h02k06_k$(), state, position);
    return true;
  }
  function handleShapeMouseMove(h, position) {
    var state = h.get_state_iypx7s_k$();
    var config = get_SHAPE_CONFIGS().get_wei43m_k$(state.get_tool_wov2zl_k$());
    var start = state.get_startPosition_d95qiq_k$();
    if (!(config == null) && !(start == null)) {
      h.get_context_h02k06_k$().putImageData(ensureNotNull(state.get_canvasSnapshot_qkwi11_k$()), 0.0, 0.0);
      config.drawPreview_xvy11w_k$(h.get_context_h02k06_k$(), start, position, state);
      return true;
    }
    var arrow = state.get_editingArrow_mtg0o6_k$();
    if (!(arrow == null)) {
      var offset = ensureNotNull(state.get_editOffset_9sigg6_k$());
      var dx = arrow.get_endX_wolh5y_k$() - arrow.get_startX_jnf4u7_k$();
      var dy = arrow.get_endY_wolh5z_k$() - arrow.get_startY_jnf4u8_k$();
      var newStartX = position.get_x_1mhr67_k$() - offset.get_x_1mhr67_k$();
      var newStartY = position.get_y_1mhr68_k$() - offset.get_y_1mhr68_k$();
      arrow.set_startX_tweqcj_k$(newStartX);
      arrow.set_startY_y6xmda_k$(newStartY);
      arrow.set_endX_mh4xwk_k$(newStartX + dx);
      arrow.set_endY_fjd8n9_k$(newStartY + dy);
      h.render_dje1iy_k$();
      return true;
    }
    var offset_0 = state.get_editOffset_9sigg6_k$();
    var circle = state.get_editingCircle_3rgtb3_k$();
    var rectangle = state.get_editingRectangle_ldge4g_k$();
    var polygon = state.get_editingPolygon_q3jmob_k$();
    if (!(circle == null)) {
      circle.set_x_scd9vp_k$(position.get_x_1mhr67_k$() - ensureNotNull(offset_0).get_x_1mhr67_k$());
      circle.set_y_lelkme_k$(position.get_y_1mhr68_k$() - offset_0.get_y_1mhr68_k$());
    } else if (!(rectangle == null)) {
      rectangle.set_x_scd9vp_k$(position.get_x_1mhr67_k$() - ensureNotNull(offset_0).get_x_1mhr67_k$());
      rectangle.set_y_lelkme_k$(position.get_y_1mhr68_k$() - offset_0.get_y_1mhr68_k$());
    } else if (!(polygon == null)) {
      polygon.set_x_scd9vp_k$(position.get_x_1mhr67_k$() - ensureNotNull(offset_0).get_x_1mhr67_k$());
      polygon.set_y_lelkme_k$(position.get_y_1mhr68_k$() - offset_0.get_y_1mhr68_k$());
    } else
      return false;
    h.render_dje1iy_k$();
    return true;
  }
  function handleShapeMouseUp(h) {
    var state = h.get_state_iypx7s_k$();
    var tmp0_elvis_lhs = get_SHAPE_CONFIGS().get_wei43m_k$(state.get_tool_wov2zl_k$());
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var config = tmp;
    if (config.isEditing_wcf7nu_k$(state)) {
      h.get_saveCanvas_acgjeq_k$()();
      config.endEdit_221lpt_k$(state);
      state.set_editOffset_7b8yc4_k$(null);
      return true;
    }
    var start = state.get_startPosition_d95qiq_k$();
    if (!(start == null)) {
      var endPosition = ensureNotNull(state.get_lastPosition_bjivo8_k$());
      var tmp0 = endPosition.get_x_1mhr67_k$() - start.get_x_1mhr67_k$();
      // Inline function 'kotlin.math.hypot' call
      var y = endPosition.get_y_1mhr68_k$() - start.get_y_1mhr68_k$();
      var moved = hypot(tmp0, y) > 3;
      if (moved) {
        config.addItem_tqdqio_k$(state, start, endPosition);
      }
      h.get_context_h02k06_k$().putImageData(ensureNotNull(state.get_canvasSnapshot_qkwi11_k$()), 0.0, 0.0);
      h.render_dje1iy_k$();
      h.get_saveCanvas_acgjeq_k$()();
    }
    state.set_startPosition_a2dsao_k$(null);
    state.set_canvasSnapshot_kjd87_k$(null);
    return true;
  }
  function openNewTextBox(h, position) {
    if (!(document.querySelector('textarea.sticky-node-textbox') == null))
      return Unit_getInstance();
    var state = h.get_state_iypx7s_k$();
    var tmp = h.get_canvas_bshgm9_k$();
    var tmp_0 = state.get_selectedColor_mfz4gv_k$();
    var tmp_1 = state.get_fontSize_pr9n47_k$();
    createTextBox(tmp, position, tmp_0, VOID, tmp_1, openNewTextBox$lambda(state, h));
  }
  function handleTextMouseDown(h, event, position) {
    var state = h.get_state_iypx7s_k$();
    if (!(state.get_tool_wov2zl_k$() === 'text'))
      return false;
    event.preventDefault();
    var existingText = findTextAt(h.get_textContext_fqn3o9_k$(), state.get_textItems_8zbevq_k$(), position);
    if (event.button === 0) {
      if (!(existingText == null)) {
        state.set_editingText_qair36_k$(existingText);
        state.set_pendingTextPosition_w5pflu_k$(null);
        state.set_editOffset_7b8yc4_k$(new Point(position.get_x_1mhr67_k$() - existingText.get_x_1mhr67_k$(), position.get_y_1mhr68_k$() - existingText.get_y_1mhr68_k$()));
        return true;
      }
      state.set_pendingTextPosition_w5pflu_k$(position);
      return true;
    }
    if (!(event.button === 2))
      return true;
    if (existingText == null)
      return true;
    var tmp0_canvas = h.get_canvas_bshgm9_k$();
    var tmp1_position = new Point(existingText.get_x_1mhr67_k$(), existingText.get_y_1mhr68_k$());
    var tmp2_color = state.get_selectedColor_mfz4gv_k$();
    var tmp3_fontSize = state.get_fontSize_pr9n47_k$();
    createTextBox(tmp0_canvas, tmp1_position, tmp2_color, existingText, tmp3_fontSize, handleTextMouseDown$lambda(existingText, h));
    return true;
  }
  function handleTextMouseMove(h, position) {
    var state = h.get_state_iypx7s_k$();
    if (!(state.get_pendingTextPosition_5yd58c_k$() == null))
      return true;
    var tmp0_elvis_lhs = state.get_editingText_lck0p0_k$();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var editing = tmp;
    var offset = ensureNotNull(state.get_editOffset_9sigg6_k$());
    editing.set_x_scd9vp_k$(position.get_x_1mhr67_k$() - offset.get_x_1mhr67_k$());
    editing.set_y_lelkme_k$(position.get_y_1mhr68_k$() - offset.get_y_1mhr68_k$());
    h.render_dje1iy_k$();
    return true;
  }
  function handleTextMouseUp(h) {
    var state = h.get_state_iypx7s_k$();
    if (!(state.get_tool_wov2zl_k$() === 'text'))
      return false;
    if (!(state.get_editingText_lck0p0_k$() == null)) {
      h.get_saveCanvas_acgjeq_k$()();
      state.set_editingText_qair36_k$(null);
      state.set_editOffset_7b8yc4_k$(null);
      return true;
    }
    var pending = state.get_pendingTextPosition_5yd58c_k$();
    if (!(pending == null)) {
      state.set_pendingTextPosition_w5pflu_k$(null);
      openNewTextBox(h, pending);
    }
    return true;
  }
  function openNewTextBox$lambda($state, $h) {
    return function (updatedText) {
      $state.get_textItems_8zbevq_k$().add_utx5q5_k$(updatedText);
      $h.render_dje1iy_k$();
      $h.get_saveCanvas_acgjeq_k$()();
      return Unit_getInstance();
    };
  }
  function handleTextMouseDown$lambda($existingText, $h) {
    return function (updatedText) {
      $existingText.set_x_scd9vp_k$(updatedText.get_x_1mhr67_k$());
      $existingText.set_y_lelkme_k$(updatedText.get_y_1mhr68_k$());
      $existingText.set_color_ayzg4c_k$(updatedText.get_color_ipu8u2_k$());
      $existingText.set_fontSize_6szsfv_k$(updatedText.get_fontSize_pr9n47_k$());
      $existingText.set_text_oy06f4_k$(updatedText.get_text_wouvsm_k$());
      $h.render_dje1iy_k$();
      $h.get_saveCanvas_acgjeq_k$()();
      return Unit_getInstance();
    };
  }
  function renderText(textContext, textItems) {
    // Inline function 'kotlin.js.asDynamic' call
    textContext.textBaseline = 'top';
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = textItems.iterator_jk1svi_k$();
    while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
      var element = _iterator__ex2g4s.next_20eer_k$();
      // Inline function 'stickynode.canvas.render.renderText.<anonymous>' call
      textContext.font = '' + element.get_fontSize_pr9n47_k$() + 'px sans-serif';
      textContext.fillStyle = element.get_color_ipu8u2_k$();
      var lineHeight = getLineHeight(element.get_fontSize_pr9n47_k$());
      // Inline function 'kotlin.collections.forEachIndexed' call
      var index = 0;
      var _iterator__ex2g4s_0 = split(element.get_text_wouvsm_k$(), ['\n']).iterator_jk1svi_k$();
      while (_iterator__ex2g4s_0.hasNext_bitz1p_k$()) {
        var item = _iterator__ex2g4s_0.next_20eer_k$();
        var _unary__edvuaz = index;
        index = _unary__edvuaz + 1 | 0;
        // Inline function 'stickynode.canvas.render.renderText.<anonymous>.<anonymous>' call
        var index_0 = checkIndexOverflow(_unary__edvuaz);
        textContext.fillText(item, element.get_x_1mhr67_k$(), element.get_y_1mhr68_k$() + imul(index_0, lineHeight));
      }
    }
  }
  function renderStrokes(context, strokeItems) {
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = strokeItems.iterator_jk1svi_k$();
    while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
      var element = _iterator__ex2g4s.next_20eer_k$();
      $l$block: {
        // Inline function 'stickynode.canvas.render.renderStrokes.<anonymous>' call
        var points = element.get_points_i5obn0_k$();
        if (points.get_size_woubt6_k$() < 2) {
          break $l$block;
        }
        context.globalCompositeOperation = 'source-over';
        context.strokeStyle = element.get_color_ipu8u2_k$();
        context.lineWidth = element.get_lineWidth_lbeliv_k$();
        // Inline function 'kotlin.js.asDynamic' call
        context.lineCap = 'round';
        // Inline function 'kotlin.js.asDynamic' call
        context.lineJoin = 'round';
        context.beginPath();
        context.moveTo(points.get_c1px32_k$(0).get_x_1mhr67_k$(), points.get_c1px32_k$(0).get_y_1mhr68_k$());
        // Inline function 'kotlin.collections.forEach' call
        var _iterator__ex2g4s_0 = drop(points, 1).iterator_jk1svi_k$();
        while (_iterator__ex2g4s_0.hasNext_bitz1p_k$()) {
          var element_0 = _iterator__ex2g4s_0.next_20eer_k$();
          // Inline function 'stickynode.canvas.render.renderStrokes.<anonymous>.<anonymous>' call
          context.lineTo(element_0.get_x_1mhr67_k$(), element_0.get_y_1mhr68_k$());
        }
        context.stroke();
      }
    }
  }
  function renderOverlay(textContext, state) {
    textContext.clearRect(0.0, 0.0, textContext.canvas.width, textContext.canvas.height);
    renderStrokes(textContext, state.get_strokeItems_pivh8h_k$());
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = state.get_rectangleItems_npge3q_k$().iterator_jk1svi_k$();
    while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
      var element = _iterator__ex2g4s.next_20eer_k$();
      // Inline function 'stickynode.canvas.render.renderOverlay.<anonymous>' call
      drawStoredRectangle(textContext, element);
    }
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s_0 = state.get_circleItems_cgj3on_k$().iterator_jk1svi_k$();
    while (_iterator__ex2g4s_0.hasNext_bitz1p_k$()) {
      var element_0 = _iterator__ex2g4s_0.next_20eer_k$();
      // Inline function 'stickynode.canvas.render.renderOverlay.<anonymous>' call
      drawStoredCircle(textContext, element_0);
    }
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s_1 = state.get_polygonItems_rrdxqp_k$().iterator_jk1svi_k$();
    while (_iterator__ex2g4s_1.hasNext_bitz1p_k$()) {
      var element_1 = _iterator__ex2g4s_1.next_20eer_k$();
      // Inline function 'stickynode.canvas.render.renderOverlay.<anonymous>' call
      drawStoredPolygon(textContext, element_1);
    }
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s_2 = state.get_arrowItems_lx0j40_k$().iterator_jk1svi_k$();
    while (_iterator__ex2g4s_2.hasNext_bitz1p_k$()) {
      var element_2 = _iterator__ex2g4s_2.next_20eer_k$();
      // Inline function 'stickynode.canvas.render.renderOverlay.<anonymous>' call
      drawStoredArrow(textContext, element_2);
    }
    renderText(textContext, state.get_textItems_8zbevq_k$());
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
    drawArrowLine(context, startPosition.get_x_1mhr67_k$(), startPosition.get_y_1mhr68_k$(), currentPosition.get_x_1mhr67_k$(), currentPosition.get_y_1mhr68_k$(), color, lineWidth);
  }
  function drawStoredArrow(context, item) {
    drawArrowLine(context, item.get_startX_jnf4u7_k$(), item.get_startY_jnf4u8_k$(), item.get_endX_wolh5y_k$(), item.get_endY_wolh5z_k$(), item.get_color_ipu8u2_k$(), item.get_lineWidth_lbeliv_k$());
  }
  function drawCircle(context, startPosition, currentPosition, color, lineWidth) {
    lineWidth = lineWidth === VOID ? 3 : lineWidth;
    var box = getBoundingBox(startPosition, currentPosition);
    drawStoredCircle(context, new CircleItem(box.get_x_1mhr67_k$(), box.get_y_1mhr68_k$(), box.get_width_j0q4yl_k$(), box.get_height_e7t92o_k$(), color, lineWidth));
  }
  function drawStoredCircle(context, item) {
    context.globalCompositeOperation = 'source-over';
    context.strokeStyle = item.get_color_ipu8u2_k$();
    context.lineWidth = item.get_lineWidth_lbeliv_k$();
    context.beginPath();
    context.ellipse(item.get_x_1mhr67_k$() + item.get_width_j0q4yl_k$() / 2, item.get_y_1mhr68_k$() + item.get_height_e7t92o_k$() / 2, item.get_width_j0q4yl_k$() / 2, item.get_height_e7t92o_k$() / 2, 0.0, 0.0, 2 * 3.141592653589793);
    var fill = item.get_fill_wom0ng_k$();
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
      var iterator = list.listIterator_70e65o_k$(list.get_size_woubt6_k$());
      while (iterator.hasPrevious_qh0629_k$()) {
        if (predicate(iterator.previous_l2dfd5_k$())) {
          tmp$ret$0 = iterator.nextIndex_jshxun_k$();
          break $l$block;
        }
      }
      tmp$ret$0 = -1;
    }
    var index = tmp$ret$0;
    if (!(index === -1)) {
      list.removeAt_6niowx_k$(index);
      return true;
    }
    return false;
  }
  function eraseAt(state, position, textContext) {
    var text = findTextAt(textContext, state.get_textItems_8zbevq_k$(), position);
    var tmp;
    if (!(text == null)) {
      var tmp_0 = state.get_textItems_8zbevq_k$();
      tmp = removeFirstMatching(tmp_0, eraseAt$lambda(text));
    } else {
      tmp = false;
    }
    if (tmp) {
      return true;
    }
    var circle = findCircleAt(state.get_circleItems_cgj3on_k$(), position);
    var tmp_1;
    if (!(circle == null)) {
      var tmp_2 = state.get_circleItems_cgj3on_k$();
      tmp_1 = removeFirstMatching(tmp_2, eraseAt$lambda_0(circle));
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      return true;
    }
    var polygon = findPolygonAt(state.get_polygonItems_rrdxqp_k$(), position);
    var tmp_3;
    if (!(polygon == null)) {
      var tmp_4 = state.get_polygonItems_rrdxqp_k$();
      tmp_3 = removeFirstMatching(tmp_4, eraseAt$lambda_1(polygon));
    } else {
      tmp_3 = false;
    }
    if (tmp_3) {
      return true;
    }
    var rect = findRectangleAt(state.get_rectangleItems_npge3q_k$(), position);
    var tmp_5;
    if (!(rect == null)) {
      var tmp_6 = state.get_rectangleItems_npge3q_k$();
      tmp_5 = removeFirstMatching(tmp_6, eraseAt$lambda_2(rect));
    } else {
      tmp_5 = false;
    }
    if (tmp_5) {
      return true;
    }
    var arrow = findArrowAt(state.get_arrowItems_lx0j40_k$(), position);
    var tmp_7;
    if (!(arrow == null)) {
      var tmp_8 = state.get_arrowItems_lx0j40_k$();
      tmp_7 = removeFirstMatching(tmp_8, eraseAt$lambda_3(arrow));
    } else {
      tmp_7 = false;
    }
    if (tmp_7) {
      return true;
    }
    var stroke = findStrokeAt(state.get_strokeItems_pivh8h_k$(), position);
    var tmp_9;
    if (!(stroke == null)) {
      var tmp_10 = state.get_strokeItems_pivh8h_k$();
      tmp_9 = removeFirstMatching(tmp_10, eraseAt$lambda_4(stroke));
    } else {
      tmp_9 = false;
    }
    if (tmp_9) {
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
    var tmp0_elvis_lhs = findPolygonAt(state.get_polygonItems_rrdxqp_k$(), position);
    var tmp1_elvis_lhs = tmp0_elvis_lhs == null ? findCircleAt(state.get_circleItems_cgj3on_k$(), position) : tmp0_elvis_lhs;
    var target = tmp1_elvis_lhs == null ? findRectangleAt(state.get_rectangleItems_npge3q_k$(), position) : tmp1_elvis_lhs;
    if (target == null)
      return false;
    if (color == null) {
      // Inline function 'kotlin.text.isNullOrEmpty' call
      var this_0 = target.get_fill_wom0ng_k$();
      if (this_0 == null || charSequenceLength(this_0) === 0)
        return false;
      target.set_fill_sosdnb_k$(null);
      return true;
    }
    if (target.get_fill_wom0ng_k$() == color)
      return false;
    target.set_fill_sosdnb_k$(color);
    return true;
  }
  function drawPolygon(context, startPosition, currentPosition, sides, color, lineWidth) {
    lineWidth = lineWidth === VOID ? 3 : lineWidth;
    var box = getBoundingBox(startPosition, currentPosition);
    drawStoredPolygon(context, new PolygonItem(box.get_x_1mhr67_k$(), box.get_y_1mhr68_k$(), box.get_width_j0q4yl_k$(), box.get_height_e7t92o_k$(), sides, color, lineWidth));
  }
  function drawStoredPolygon(context, item) {
    var centerX = item.get_x_1mhr67_k$() + item.get_width_j0q4yl_k$() / 2;
    var centerY = item.get_y_1mhr68_k$() + item.get_height_e7t92o_k$() / 2;
    var tmp0 = item.get_width_j0q4yl_k$();
    // Inline function 'kotlin.math.min' call
    var b = item.get_height_e7t92o_k$();
    var radius = Math.min(tmp0, b) / 2;
    var angleStep = 3.141592653589793 * 2 / item.get_sides_iyiy8j_k$();
    context.globalCompositeOperation = 'source-over';
    context.strokeStyle = item.get_color_ipu8u2_k$();
    context.lineWidth = item.get_lineWidth_lbeliv_k$();
    context.beginPath();
    var inductionVariable = 0;
    var last = item.get_sides_iyiy8j_k$();
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
    var fill = item.get_fill_wom0ng_k$();
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
    context.strokeRect(startPosition.get_x_1mhr67_k$(), startPosition.get_y_1mhr68_k$(), currentPosition.get_x_1mhr67_k$() - startPosition.get_x_1mhr67_k$(), currentPosition.get_y_1mhr68_k$() - startPosition.get_y_1mhr68_k$());
  }
  function drawStoredRectangle(context, item) {
    context.globalCompositeOperation = 'source-over';
    var fill = item.get_fill_wom0ng_k$();
    // Inline function 'kotlin.text.isNullOrEmpty' call
    if (!(fill == null || charSequenceLength(fill) === 0)) {
      context.fillStyle = fill;
      context.fillRect(item.get_x_1mhr67_k$(), item.get_y_1mhr68_k$(), item.get_width_j0q4yl_k$(), item.get_height_e7t92o_k$());
    }
    context.lineWidth = item.get_lineWidth_lbeliv_k$();
    context.strokeStyle = item.get_color_ipu8u2_k$();
    context.strokeRect(item.get_x_1mhr67_k$(), item.get_y_1mhr68_k$(), item.get_width_j0q4yl_k$(), item.get_height_e7t92o_k$());
  }
  function get_DEFAULT_FONT_SIZE() {
    return DEFAULT_FONT_SIZE;
  }
  var DEFAULT_FONT_SIZE;
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
    textBox.style.left = '' + (bounds.left + position.get_x_1mhr67_k$() - 8) + 'px';
    textBox.style.top = '' + (bounds.top + position.get_y_1mhr68_k$() - 8) + 'px';
    textBox.style.boxSizing = 'content-box';
    textBox.style.width = '180px';
    textBox.style.height = '70px';
    textBox.style.padding = '6px';
    textBox.style.margin = '0';
    textBox.style.backgroundColor = 'white';
    textBox.style.border = '2px solid red';
    textBox.style.color = color;
    textBox.style.zIndex = '1000';
    var tmp1_elvis_lhs = textItem == null ? null : textItem.get_text_wouvsm_k$();
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
          var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_x_1mhr67_k$();
          var tmp6_x = tmp1_elvis_lhs == null ? $position.get_x_1mhr67_k$() : tmp1_elvis_lhs;
          var tmp2_safe_receiver = $textItem;
          var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.get_y_1mhr68_k$();
          var tmp7_y = tmp3_elvis_lhs == null ? $position.get_y_1mhr68_k$() : tmp3_elvis_lhs;
          var tmp4_safe_receiver = $textItem;
          var tmp5_elvis_lhs = tmp4_safe_receiver == null ? null : tmp4_safe_receiver.get_color_ipu8u2_k$();
          var tmp8_color = tmp5_elvis_lhs == null ? $color : tmp5_elvis_lhs;
          $onCommit(new TextItem(tmp6_x, tmp7_y, tmp8_color, text, $fontSize));
        }
        $textBox.remove();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function createTextBox$lambda$lambda($allowBlur) {
    return function (it) {
      $allowBlur._v = true;
      return Unit_getInstance();
    };
  }
  function createTextBox$lambda_0($textBox, $allowBlur) {
    return function (it) {
      $textBox.focus();
      $textBox.select();
      var tmp = window;
      tmp.requestAnimationFrame(createTextBox$lambda$lambda($allowBlur));
      return Unit_getInstance();
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
        tmp_0 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function createTextBox$lambda_2($allowBlur, $textBox, $commitText) {
    return function (it) {
      var tmp;
      if (!$allowBlur._v) {
        $textBox.focus();
        tmp = Unit_getInstance();
      } else {
        tmp = $commitText();
      }
      return Unit_getInstance();
    };
  }
  //region block: post-declaration
  protoOf($serializer).typeParametersSerializers_fr94fx_k$ = typeParametersSerializers;
  protoOf($serializer_0).typeParametersSerializers_fr94fx_k$ = typeParametersSerializers;
  protoOf($serializer_1).typeParametersSerializers_fr94fx_k$ = typeParametersSerializers;
  protoOf($serializer_2).typeParametersSerializers_fr94fx_k$ = typeParametersSerializers;
  protoOf($serializer_3).typeParametersSerializers_fr94fx_k$ = typeParametersSerializers;
  protoOf($serializer_4).typeParametersSerializers_fr94fx_k$ = typeParametersSerializers;
  protoOf($serializer_5).typeParametersSerializers_fr94fx_k$ = typeParametersSerializers;
  protoOf($serializer_6).typeParametersSerializers_fr94fx_k$ = typeParametersSerializers;
  protoOf($serializer_7).typeParametersSerializers_fr94fx_k$ = typeParametersSerializers;
  //endregion
  //region block: init
  MAX_HISTORY = 100;
  storageKey = 'drawingCanvas';
  textStorageKey = 'drawingCanvasText';
  rectangleStorageKey = 'drawingCanvasRectangles';
  circleStorageKey = 'drawingCanvasCircles';
  polygonStorageKey = 'drawingCanvasPolygons';
  strokeStorageKey = 'drawingCanvasStrokes';
  arrowStorageKey = 'drawingCanvasArrows';
  DEFAULT_FONT_SIZE = 20;
  //endregion
  mainWrapper();
  return _;
}));

//# sourceMappingURL=sticky-node.js.map
