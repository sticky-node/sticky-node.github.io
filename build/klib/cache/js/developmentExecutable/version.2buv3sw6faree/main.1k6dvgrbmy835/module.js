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
  var THROW_CCE = kotlin_kotlin.$_$.nb;
  var Unit_getInstance = kotlin_kotlin.$_$.f4;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.h;
  var protoOf = kotlin_kotlin.$_$.a9;
  var VOID = kotlin_kotlin.$_$.d;
  var emptyList = kotlin_kotlin.$_$.l5;
  var initMetadataForClass = kotlin_kotlin.$_$.b8;
  var ArrayDeque_init_$Create$ = kotlin_kotlin.$_$.f;
  var get_lastIndex = kotlin_kotlin.$_$.t5;
  var numberToInt = kotlin_kotlin.$_$.x8;
  var booleanArray = kotlin_kotlin.$_$.m7;
  var isCharSequence = kotlin_kotlin.$_$.l8;
  var trim = kotlin_kotlin.$_$.wa;
  var toString = kotlin_kotlin.$_$.e9;
  var ensureNotNull = kotlin_kotlin.$_$.dc;
  var initMetadataForObject = kotlin_kotlin.$_$.g8;
  var initMetadataForInterface = kotlin_kotlin.$_$.e8;
  var mutableListOf = kotlin_kotlin.$_$.a6;
  var last = kotlin_kotlin.$_$.v5;
  var charSequenceLength = kotlin_kotlin.$_$.q7;
  var isInterface = kotlin_kotlin.$_$.p8;
  var ArrayListSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.p1;
  var initMetadataForCompanion = kotlin_kotlin.$_$.c8;
  var PluginGeneratedSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.w1;
  var equals = kotlin_kotlin.$_$.u7;
  var UnknownFieldException_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.d;
  var StringSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.o;
  var IntSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.n;
  var typeParametersSerializers = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.r1;
  var GeneratedSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.s1;
  var throwMissingFieldException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.z1;
  var objectCreate = kotlin_kotlin.$_$.z8;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.f1;
  var isBlank = kotlin_kotlin.$_$.z9;
  var Json = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.a;
  var DoubleSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.m;
  var getNumberHashCode = kotlin_kotlin.$_$.x7;
  var coerceIn = kotlin_kotlin.$_$.j9;
  var roundToInt = kotlin_kotlin.$_$.f9;
  var getKClass = kotlin_kotlin.$_$.c;
  var SealedClassSerializer_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.a;
  var LazyThreadSafetyMode_PUBLICATION_getInstance = kotlin_kotlin.$_$.e;
  var lazy = kotlin_kotlin.$_$.hc;
  var SerializerFactory = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.x1;
  var get_nullable = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.r;
  var coerceAtLeast = kotlin_kotlin.$_$.h9;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.g;
  var split = kotlin_kotlin.$_$.ga;
  var checkIndexOverflow = kotlin_kotlin.$_$.x4;
  var NoSuchElementException_init_$Create$ = kotlin_kotlin.$_$.l1;
  var KProperty0 = kotlin_kotlin.$_$.p9;
  var getPropertyCallableRef = kotlin_kotlin.$_$.y7;
  var lazy_0 = kotlin_kotlin.$_$.ic;
  var intercepted = kotlin_kotlin.$_$.r6;
  var SafeContinuation_init_$Create$ = kotlin_kotlin.$_$.x;
  var Companion_getInstance = kotlin_kotlin.$_$.a4;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.y1;
  var CoroutineImpl = kotlin_kotlin.$_$.f7;
  var await_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.a;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.p6;
  var initMetadataForCoroutine = kotlin_kotlin.$_$.d8;
  var Collection = kotlin_kotlin.$_$.h4;
  var listOf = kotlin_kotlin.$_$.x5;
  var toIntOrNull = kotlin_kotlin.$_$.na;
  var toDoubleOrNull = kotlin_kotlin.$_$.la;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.b;
  var initMetadataForLambda = kotlin_kotlin.$_$.f8;
  var launch = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.d;
  var MainScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.c;
  var setOf = kotlin_kotlin.$_$.f6;
  var SuspendFunction1 = kotlin_kotlin.$_$.g7;
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
  initMetadataForInterface(Boxed, 'Boxed');
  initMetadataForCompanion(Companion_2, VOID, [SerializerFactory]);
  initMetadataForClass(Item, 'Item', VOID, VOID, VOID, VOID, VOID, {0: Companion_getInstance_3});
  initMetadataForCompanion(Companion_3);
  initMetadataForObject($serializer_2, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(StrokeItem, 'StrokeItem', VOID, Item, [Item, Fillable], VOID, VOID, {0: $serializer_getInstance_2});
  initMetadataForCompanion(Companion_4);
  initMetadataForObject($serializer_3, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(RectangleItem, 'RectangleItem', VOID, Item, [Item, Boxed, Fillable], VOID, VOID, {0: $serializer_getInstance_3});
  initMetadataForCompanion(Companion_5);
  initMetadataForObject($serializer_4, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(CircleItem, 'CircleItem', VOID, Item, [Item, Boxed, Fillable], VOID, VOID, {0: $serializer_getInstance_4});
  initMetadataForCompanion(Companion_6);
  initMetadataForObject($serializer_5, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(PolygonItem, 'PolygonItem', VOID, Item, [Item, Boxed, Fillable], VOID, VOID, {0: $serializer_getInstance_5});
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
  initMetadataForObject(Storage, 'Storage');
  initMetadataForLambda(setupControls$lambda$slambda, CoroutineImpl, [CoroutineImpl], [1]);
  initMetadataForLambda(setupControls$lambda$slambda_1, CoroutineImpl, [CoroutineImpl], [1]);
  //endregion
  function main() {
    var tmp = document.getElementById('drawingcanvas');
    var canvas = tmp instanceof HTMLCanvasElement ? tmp : THROW_CCE();
    var editor = new Editor(canvas);
    editor.fitToWindow_u790h8_k$();
    setupCanvasEvents(editor);
    setupControls(editor);
    var tmp_0 = window;
    tmp_0.addEventListener('resize', main$lambda(editor));
  }
  function main$lambda($editor) {
    return function (it) {
      $editor.fitToWindow_u790h8_k$();
      return Unit_getInstance();
    };
  }
  function mainWrapper() {
    main();
  }
  function _get_ctx__e66oga($this) {
    return $this.ctx_1;
  }
  function _set_tool__9ujw73($this, _set____db54di) {
    $this.tool_1 = _set____db54di;
  }
  function _get_history__d61b7h($this) {
    return $this.history_1;
  }
  function _set_renderQueued__nr3wvm($this, _set____db54di) {
    $this.renderQueued_1 = _set____db54di;
  }
  function _get_renderQueued__87d6bi($this) {
    return $this.renderQueued_1;
  }
  function drawItem($this, item) {
    $this.ctx_1.save();
    item.draw_rpid3c_k$($this.ctx_1);
    $this.ctx_1.restore();
  }
  function restore($this, snapshot) {
    if (snapshot == null)
      return Unit_getInstance();
    replaceItems($this, decodeDrawing(snapshot));
    Storage_getInstance().save_kr09ot_k$(snapshot);
    $this.render_dje1iy_k$();
  }
  function replaceItems($this, newItems) {
    $this.preview_1 = null;
    $this.items_1.clear_j9egeb_k$();
    $this.items_1.addAll_4lagoh_k$(newItems);
  }
  function Editor$findTop$lambda(it) {
    return true;
  }
  function Editor$requestRender$lambda(this$0) {
    return function (it) {
      this$0.renderQueued_1 = false;
      this$0.render_dje1iy_k$();
      return Unit_getInstance();
    };
  }
  function Editor(canvas) {
    this.canvas_1 = canvas;
    var tmp = this;
    var tmp_0 = this.canvas_1.getContext('2d');
    tmp.ctx_1 = tmp_0 instanceof CanvasRenderingContext2D ? tmp_0 : THROW_CCE();
    var tmp_1 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_1.items_1 = ArrayList_init_$Create$();
    this.preview_1 = null;
    this.color_1 = '#000000';
    this.lineWidth_1 = 3;
    this.fontSize_1 = 20;
    this.polygonSides_1 = 5;
    this.tools_1 = new ToolSet();
    this.tool_1 = this.tools_1.get_freehand_dsmxlw_k$();
    this.onToolChanged_1 = null;
    this.renderQueued_1 = false;
    this.items_1.addAll_4lagoh_k$(Storage_getInstance().load_1zbae_k$());
    this.history_1 = new History(encodeDrawing(this.items_1));
  }
  protoOf(Editor).get_canvas_bshgm9_k$ = function () {
    return this.canvas_1;
  };
  protoOf(Editor).get_items_it823b_k$ = function () {
    return this.items_1;
  };
  protoOf(Editor).set_preview_zhisal_k$ = function (_set____db54di) {
    this.preview_1 = _set____db54di;
  };
  protoOf(Editor).get_preview_3zvuox_k$ = function () {
    return this.preview_1;
  };
  protoOf(Editor).set_color_ayzg4c_k$ = function (_set____db54di) {
    this.color_1 = _set____db54di;
  };
  protoOf(Editor).get_color_ipu8u2_k$ = function () {
    return this.color_1;
  };
  protoOf(Editor).set_lineWidth_97ta37_k$ = function (_set____db54di) {
    this.lineWidth_1 = _set____db54di;
  };
  protoOf(Editor).get_lineWidth_lbeliv_k$ = function () {
    return this.lineWidth_1;
  };
  protoOf(Editor).set_fontSize_6szsfv_k$ = function (_set____db54di) {
    this.fontSize_1 = _set____db54di;
  };
  protoOf(Editor).get_fontSize_pr9n47_k$ = function () {
    return this.fontSize_1;
  };
  protoOf(Editor).set_polygonSides_7fzqbb_k$ = function (_set____db54di) {
    this.polygonSides_1 = _set____db54di;
  };
  protoOf(Editor).get_polygonSides_rm31lh_k$ = function () {
    return this.polygonSides_1;
  };
  protoOf(Editor).get_tools_iz6t2q_k$ = function () {
    return this.tools_1;
  };
  protoOf(Editor).get_tool_wov2zl_k$ = function () {
    return this.tool_1;
  };
  protoOf(Editor).set_onToolChanged_3f4ytg_k$ = function (_set____db54di) {
    this.onToolChanged_1 = _set____db54di;
  };
  protoOf(Editor).get_onToolChanged_aze2yc_k$ = function () {
    return this.onToolChanged_1;
  };
  protoOf(Editor).selectTool_nfpv6_k$ = function (next) {
    this.preview_1 = null;
    this.tool_1 = next;
    var tmp0_safe_receiver = this.onToolChanged_1;
    if (tmp0_safe_receiver == null)
      null;
    else
      tmp0_safe_receiver(next);
    this.requestRender_xvw6ob_k$();
  };
  protoOf(Editor).findTop_jleozl_k$ = function (p, accept) {
    var tmp0 = this.items_1;
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.lastOrNull' call
      var iterator = tmp0.listIterator_70e65o_k$(tmp0.get_size_woubt6_k$());
      while (iterator.hasPrevious_qh0629_k$()) {
        var element = iterator.previous_l2dfd5_k$();
        // Inline function 'stickynode.editor.Editor.findTop.<anonymous>' call
        if (accept(element) && element.hitTest_1gxtur_k$(p)) {
          tmp$ret$1 = element;
          break $l$block;
        }
      }
      tmp$ret$1 = null;
    }
    return tmp$ret$1;
  };
  protoOf(Editor).findTop$default_fnknud_k$ = function (p, accept, $super) {
    var tmp;
    if (accept === VOID) {
      tmp = Editor$findTop$lambda;
    } else {
      tmp = accept;
    }
    accept = tmp;
    return $super === VOID ? this.findTop_jleozl_k$(p, accept) : $super.findTop_jleozl_k$.call(this, p, accept);
  };
  protoOf(Editor).render_dje1iy_k$ = function () {
    this.ctx_1.clearRect(0.0, 0.0, this.canvas_1.width, this.canvas_1.height);
    var _iterator__ex2g4s = this.items_1.iterator_jk1svi_k$();
    while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
      var item = _iterator__ex2g4s.next_20eer_k$();
      drawItem(this, item);
    }
    var tmp0_safe_receiver = this.preview_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'stickynode.editor.Editor.render.<anonymous>' call
      drawItem(this, tmp0_safe_receiver);
    }
  };
  protoOf(Editor).requestRender_xvw6ob_k$ = function () {
    if (this.renderQueued_1)
      return Unit_getInstance();
    this.renderQueued_1 = true;
    var tmp = window;
    tmp.requestAnimationFrame(Editor$requestRender$lambda(this));
  };
  protoOf(Editor).fitToWindow_u790h8_k$ = function () {
    this.canvas_1.width = window.innerWidth;
    this.canvas_1.height = window.innerHeight;
    this.render_dje1iy_k$();
  };
  protoOf(Editor).commit_vpt10n_k$ = function () {
    var snapshot = encodeDrawing(this.items_1);
    if (this.history_1.record_guryq1_k$(snapshot)) {
      Storage_getInstance().save_kr09ot_k$(snapshot);
    }
  };
  protoOf(Editor).undo_t6j8bw_k$ = function () {
    if (!this.tool_1.get_busy_wojps2_k$()) {
      restore(this, this.history_1.undo_251ic_k$());
    }
  };
  protoOf(Editor).redo_p9k3wy_k$ = function () {
    if (!this.tool_1.get_busy_wojps2_k$()) {
      restore(this, this.history_1.redo_22xvi_k$());
    }
  };
  protoOf(Editor).clear_j9egeb_k$ = function () {
    replaceItems(this, emptyList());
    this.render_dje1iy_k$();
    this.commit_vpt10n_k$();
  };
  protoOf(Editor).load_fth14d_k$ = function (newItems) {
    replaceItems(this, newItems);
    this.render_dje1iy_k$();
    this.commit_vpt10n_k$();
  };
  protoOf(Editor).exportJson_3gdc58_k$ = function () {
    return encodeDrawing(this.items_1, true);
  };
  function _get_limit__eq4zuy($this) {
    return $this.limit_1;
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
  function History(initial, limit) {
    limit = limit === VOID ? 100 : limit;
    this.limit_1 = limit;
    var tmp = this;
    // Inline function 'kotlin.apply' call
    var this_0 = ArrayDeque_init_$Create$();
    // Inline function 'stickynode.editor.History.stack.<anonymous>' call
    this_0.addLast_gaaijb_k$(initial);
    tmp.stack_1 = this_0;
    this.index_1 = 0;
  }
  protoOf(History).record_guryq1_k$ = function (snapshot) {
    if (snapshot === this.stack_1.get_c1px32_k$(this.index_1))
      return false;
    while (this.stack_1.get_size_woubt6_k$() > (this.index_1 + 1 | 0)) {
      this.stack_1.removeLast_i5wx8a_k$();
    }
    this.stack_1.addLast_gaaijb_k$(snapshot);
    if (this.stack_1.get_size_woubt6_k$() > this.limit_1) {
      this.stack_1.removeFirst_58pi0k_k$();
    }
    this.index_1 = get_lastIndex(this.stack_1);
    return true;
  };
  protoOf(History).undo_251ic_k$ = function () {
    if (this.index_1 === 0)
      return null;
    this.index_1 = this.index_1 - 1 | 0;
    return this.stack_1.get_c1px32_k$(this.index_1);
  };
  protoOf(History).redo_22xvi_k$ = function () {
    if (this.index_1 === get_lastIndex(this.stack_1))
      return null;
    this.index_1 = this.index_1 + 1 | 0;
    return this.stack_1.get_c1px32_k$(this.index_1);
  };
  function findEnclosedRegion(ed, p) {
    var w = ed.get_canvas_bshgm9_k$().width;
    var h = ed.get_canvas_bshgm9_k$().height;
    var sx = numberToInt(p.get_x_1mhr67_k$());
    var sy = numberToInt(p.get_y_1mhr68_k$());
    if (p.get_x_1mhr67_k$() < 0 || p.get_y_1mhr68_k$() < 0 || sx >= w || sy >= h)
      return null;
    var tmp = document.createElement('canvas');
    var off = tmp instanceof HTMLCanvasElement ? tmp : THROW_CCE();
    off.width = w;
    off.height = h;
    var tmp_0 = off.getContext('2d');
    var ctx = tmp_0 instanceof CanvasRenderingContext2D ? tmp_0 : THROW_CCE();
    var _iterator__ex2g4s = ed.get_items_it823b_k$().iterator_jk1svi_k$();
    $l$loop: while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
      var item = _iterator__ex2g4s.next_20eer_k$();
      if (item instanceof RegionFillItem)
        continue $l$loop;
      ctx.save();
      item.draw_rpid3c_k$(ctx);
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
    stack.addLast_gaaijb_k$(imul(sy, w) + sx | 0);
    $l$loop_1: while (true) {
      // Inline function 'kotlin.collections.isNotEmpty' call
      if (!!stack.isEmpty_y1axqb_k$()) {
        break $l$loop_1;
      }
      var idx = stack.removeLast_i5wx8a_k$();
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
      runs.add_utx5q5_k$(y);
      runs.add_utx5q5_k$(left);
      runs.add_utx5q5_k$(right + 1 | 0);
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
              stack.addLast_gaaijb_k$(imul(ny, w) + xx_0 | 0);
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
  function _get_CLASS_NAME__cp9395($this) {
    return $this.CLASS_NAME_1;
  }
  function show$finish(finished, box, $onCommit, commit) {
    if (finished._v)
      return Unit_getInstance();
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
      return Unit_getInstance();
    };
  }
  function TextBox$show$lambda($box, $armed) {
    return function (it) {
      $box.focus();
      $box.select();
      var tmp = window;
      tmp.requestAnimationFrame(TextBox$show$lambda$lambda($armed));
      return Unit_getInstance();
    };
  }
  function TextBox$show$lambda_0($finished, $box, $onCommit) {
    return function (e) {
      var event = e instanceof KeyboardEvent ? e : THROW_CCE();
      var tmp;
      if (event.key === 'Enter' && !event.shiftKey) {
        event.preventDefault();
        show$finish($finished, $box, $onCommit, true);
        tmp = Unit_getInstance();
      }
      var tmp_0;
      if (event.key === 'Escape') {
        show$finish($finished, $box, $onCommit, false);
        tmp_0 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function TextBox$show$lambda_1($armed, $box, $finished, $onCommit) {
    return function (it) {
      var tmp;
      if ($armed._v) {
        show$finish($finished, $box, $onCommit, true);
        tmp = Unit_getInstance();
      } else {
        $box.focus();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function TextBox() {
    TextBox_instance = this;
    this.CLASS_NAME_1 = 'sticky-node-textbox';
  }
  protoOf(TextBox).isOpen_jiokto_k$ = function () {
    return !(document.querySelector('textarea.sticky-node-textbox') == null);
  };
  protoOf(TextBox).show_aamyt0_k$ = function (canvas, at, color, initialText, onCommit) {
    if (this.isOpen_jiokto_k$())
      return Unit_getInstance();
    var bounds = canvas.getBoundingClientRect();
    var tmp = document.createElement('textarea');
    var box = tmp instanceof HTMLTextAreaElement ? tmp : THROW_CCE();
    box.className = 'sticky-node-textbox';
    // Inline function 'kotlin.with' call
    // Inline function 'stickynode.editor.TextBox.show.<anonymous>' call
    var $this$with = box.style;
    $this$with.position = 'fixed';
    $this$with.left = '' + (bounds.left + at.get_x_1mhr67_k$() - 8) + 'px';
    $this$with.top = '' + (bounds.top + at.get_y_1mhr68_k$() - 8) + 'px';
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
  protoOf(TextBox).show$default_8t5ky5_k$ = function (canvas, at, color, initialText, onCommit, $super) {
    initialText = initialText === VOID ? '' : initialText;
    var tmp;
    if ($super === VOID) {
      this.show_aamyt0_k$(canvas, at, color, initialText, onCommit);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.show_aamyt0_k$.call(this, canvas, at, color, initialText, onCommit);
    }
    return tmp;
  };
  var TextBox_instance;
  function TextBox_getInstance() {
    if (TextBox_instance == null)
      new TextBox();
    return TextBox_instance;
  }
  function get_MIN_SHAPE_DRAG() {
    return MIN_SHAPE_DRAG;
  }
  var MIN_SHAPE_DRAG;
  function Tool() {
  }
  function _set_target__aw1jfq($this, _set____db54di) {
    $this.target_1 = _set____db54di;
  }
  function _get_target__ccs42i($this) {
    return $this.target_1;
  }
  function _set_last__9pwosh($this, _set____db54di) {
    $this.last_1 = _set____db54di;
  }
  function _get_last__d9oodx($this) {
    return $this.last_1;
  }
  function Dragger() {
    this.target_1 = null;
    this.last_1 = new Point(0.0, 0.0);
  }
  protoOf(Dragger).get_active_avldsf_k$ = function () {
    return !(this.target_1 == null);
  };
  protoOf(Dragger).start_lvwrrj_k$ = function (item, at) {
    this.target_1 = item;
    this.last_1 = at;
  };
  protoOf(Dragger).move_m5bngx_k$ = function (to) {
    var tmp0_elvis_lhs = this.target_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var item = tmp;
    item.moveBy_hp42rs_k$(to.get_x_1mhr67_k$() - this.last_1.get_x_1mhr67_k$(), to.get_y_1mhr68_k$() - this.last_1.get_y_1mhr68_k$());
    this.last_1 = to;
    return true;
  };
  protoOf(Dragger).end_25ln_k$ = function () {
    var wasActive = !(this.target_1 == null);
    this.target_1 = null;
    return wasActive;
  };
  function _get_drag__d5ksrb($this) {
    return $this.drag_1;
  }
  function _set_stroke__57naov($this, _set____db54di) {
    $this.stroke_1 = _set____db54di;
  }
  function _get_stroke__6odvbn($this) {
    return $this.stroke_1;
  }
  function FreehandTool$onDown$lambda(it) {
    return it instanceof StrokeItem;
  }
  function FreehandTool() {
    this.drag_1 = new Dragger();
    this.stroke_1 = null;
  }
  protoOf(FreehandTool).get_busy_wojps2_k$ = function () {
    return this.drag_1.get_active_avldsf_k$() || !(this.stroke_1 == null);
  };
  protoOf(FreehandTool).onDown_sb4qs0_k$ = function (ed, p, button) {
    var existing = ed.findTop_jleozl_k$(p, FreehandTool$onDown$lambda);
    if (!(existing == null)) {
      this.drag_1.start_lvwrrj_k$(existing, p);
      return Unit_getInstance();
    }
    var fresh = new StrokeItem(mutableListOf([p]), ed.get_color_ipu8u2_k$(), ed.get_lineWidth_lbeliv_k$());
    this.stroke_1 = fresh;
    ed.set_preview_zhisal_k$(fresh);
  };
  protoOf(FreehandTool).onMove_580z7b_k$ = function (ed, p) {
    if (this.drag_1.move_m5bngx_k$(p)) {
      ed.requestRender_xvw6ob_k$();
      return Unit_getInstance();
    }
    var tmp0_elvis_lhs = this.stroke_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_getInstance();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var current = tmp;
    if (!last(current.get_points_i5obn0_k$()).equals(p)) {
      current.get_points_i5obn0_k$().add_utx5q5_k$(p);
      ed.requestRender_xvw6ob_k$();
    }
  };
  protoOf(FreehandTool).onUp_lz9rfn_k$ = function (ed) {
    if (this.drag_1.end_25ln_k$()) {
      ed.commit_vpt10n_k$();
      return Unit_getInstance();
    }
    var tmp0_elvis_lhs = this.stroke_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_getInstance();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var finished = tmp;
    this.stroke_1 = null;
    ed.set_preview_zhisal_k$(null);
    if (finished.get_points_i5obn0_k$().get_size_woubt6_k$() >= 2) {
      ed.get_items_it823b_k$().add_utx5q5_k$(finished);
    }
    ed.render_dje1iy_k$();
    ed.commit_vpt10n_k$();
  };
  function _get_owns__dbq05a($this) {
    return $this.owns_1;
  }
  function _get_create__g83typ($this) {
    return $this.create_1;
  }
  function _get_drag__d5ksrb_0($this) {
    return $this.drag_1;
  }
  function _set_start__ks52qr($this, _set____db54di) {
    $this.start_1 = _set____db54di;
  }
  function _get_start__b8zdqp($this) {
    return $this.start_1;
  }
  function _set_current__qj3kk($this, _set____db54di) {
    $this.current_1 = _set____db54di;
  }
  function _get_current__qcrdxk($this) {
    return $this.current_1;
  }
  function ShapeTool(owns, create) {
    this.owns_1 = owns;
    this.create_1 = create;
    this.drag_1 = new Dragger();
    this.start_1 = null;
    this.current_1 = null;
  }
  protoOf(ShapeTool).get_busy_wojps2_k$ = function () {
    return this.drag_1.get_active_avldsf_k$() || !(this.start_1 == null);
  };
  protoOf(ShapeTool).onDown_sb4qs0_k$ = function (ed, p, button) {
    var existing = ed.findTop_jleozl_k$(p, this.owns_1);
    if (!(existing == null)) {
      this.drag_1.start_lvwrrj_k$(existing, p);
    } else {
      this.start_1 = p;
      this.current_1 = p;
    }
  };
  protoOf(ShapeTool).onMove_580z7b_k$ = function (ed, p) {
    if (this.drag_1.move_m5bngx_k$(p)) {
      ed.requestRender_xvw6ob_k$();
      return Unit_getInstance();
    }
    var tmp0_elvis_lhs = this.start_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_getInstance();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var origin = tmp;
    this.current_1 = p;
    ed.set_preview_zhisal_k$(this.create_1(ed, origin, p));
    ed.requestRender_xvw6ob_k$();
  };
  protoOf(ShapeTool).onUp_lz9rfn_k$ = function (ed) {
    if (this.drag_1.end_25ln_k$()) {
      ed.commit_vpt10n_k$();
      return Unit_getInstance();
    }
    var tmp0_elvis_lhs = this.start_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_getInstance();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var origin = tmp;
    var tmp1_elvis_lhs = this.current_1;
    var end = tmp1_elvis_lhs == null ? origin : tmp1_elvis_lhs;
    this.start_1 = null;
    this.current_1 = null;
    ed.set_preview_zhisal_k$(null);
    var tmp0 = end.get_x_1mhr67_k$() - origin.get_x_1mhr67_k$();
    // Inline function 'kotlin.math.hypot' call
    var y = end.get_y_1mhr68_k$() - origin.get_y_1mhr68_k$();
    if (hypot(tmp0, y) > 3.0) {
      ed.get_items_it823b_k$().add_utx5q5_k$(this.create_1(ed, origin, end));
    }
    ed.render_dje1iy_k$();
    ed.commit_vpt10n_k$();
  };
  function _get_drag__d5ksrb_1($this) {
    return $this.drag_1;
  }
  function _set_pending__51snjm($this, _set____db54di) {
    $this.pending_1 = _set____db54di;
  }
  function _get_pending__uo0xwm($this) {
    return $this.pending_1;
  }
  function addNew($this, ed, at) {
    var color = ed.get_color_ipu8u2_k$();
    var fontSize = ed.get_fontSize_pr9n47_k$();
    var tmp = TextBox_getInstance();
    var tmp_0 = ed.get_canvas_bshgm9_k$();
    tmp.show$default_8t5ky5_k$(tmp_0, at, color, VOID, TextTool$addNew$lambda(ed, at, color, fontSize));
  }
  function edit($this, ed, item) {
    var fontSize = ed.get_fontSize_pr9n47_k$();
    var tmp = TextBox_getInstance();
    var tmp_0 = ed.get_canvas_bshgm9_k$();
    var tmp_1 = new Point(item.get_x_1mhr67_k$(), item.get_y_1mhr68_k$());
    var tmp_2 = item.get_color_ipu8u2_k$();
    var tmp_3 = item.get_text_wouvsm_k$();
    tmp.show_aamyt0_k$(tmp_0, tmp_1, tmp_2, tmp_3, TextTool$edit$lambda(ed, item, fontSize));
  }
  function TextTool$onDown$lambda(it) {
    return it instanceof TextItem;
  }
  function TextTool$addNew$lambda($ed, $at, $color, $fontSize) {
    return function (text) {
      var tmp;
      // Inline function 'kotlin.text.isNotEmpty' call
      if (charSequenceLength(text) > 0) {
        $ed.get_items_it823b_k$().add_utx5q5_k$(new TextItem($at.get_x_1mhr67_k$(), $at.get_y_1mhr68_k$(), $color, text, $fontSize));
        $ed.render_dje1iy_k$();
        $ed.commit_vpt10n_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function TextTool$edit$lambda($ed, $item, $fontSize) {
    return function (text) {
      // Inline function 'kotlin.text.isEmpty' call
      if (charSequenceLength(text) === 0) {
        $ed.get_items_it823b_k$().remove_cedx0m_k$($item);
      } else {
        $item.set_text_oy06f4_k$(text);
        $item.set_fontSize_6szsfv_k$($fontSize);
      }
      $ed.render_dje1iy_k$();
      $ed.commit_vpt10n_k$();
      return Unit_getInstance();
    };
  }
  function TextTool() {
    this.claimsMouse_1 = true;
    this.drag_1 = new Dragger();
    this.pending_1 = null;
  }
  protoOf(TextTool).get_claimsMouse_54sth7_k$ = function () {
    return this.claimsMouse_1;
  };
  protoOf(TextTool).get_busy_wojps2_k$ = function () {
    return this.drag_1.get_active_avldsf_k$() || !(this.pending_1 == null);
  };
  protoOf(TextTool).onDown_sb4qs0_k$ = function (ed, p, button) {
    var tmp = ed.findTop_jleozl_k$(p, TextTool$onDown$lambda);
    var existing = tmp instanceof TextItem ? tmp : null;
    switch (button) {
      case 0:
        if (!(existing == null)) {
          this.drag_1.start_lvwrrj_k$(existing, p);
        } else {
          this.pending_1 = p;
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
  protoOf(TextTool).onMove_580z7b_k$ = function (ed, p) {
    if (this.drag_1.move_m5bngx_k$(p)) {
      ed.requestRender_xvw6ob_k$();
    }
  };
  protoOf(TextTool).onUp_lz9rfn_k$ = function (ed) {
    if (this.drag_1.end_25ln_k$()) {
      ed.commit_vpt10n_k$();
      return Unit_getInstance();
    }
    var tmp0_elvis_lhs = this.pending_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_getInstance();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var at = tmp;
    this.pending_1 = null;
    addNew(this, ed, at);
  };
  function FillTool() {
    this.claimsMouse_1 = true;
  }
  protoOf(FillTool).get_claimsMouse_54sth7_k$ = function () {
    return this.claimsMouse_1;
  };
  protoOf(FillTool).onDown_sb4qs0_k$ = function (ed, p, button) {
    var tmp0 = ed.get_items_it823b_k$();
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.lastOrNull' call
      var iterator = tmp0.listIterator_70e65o_k$(tmp0.get_size_woubt6_k$());
      while (iterator.hasPrevious_qh0629_k$()) {
        var element = iterator.previous_l2dfd5_k$();
        // Inline function 'stickynode.editor.FillTool.onDown.<anonymous>' call
        var tmp;
        if (isInterface(element, Fillable)) {
          tmp = element.hitTestFill_vfzr9i_k$(p);
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
      var newFill = button === 2 ? null : ed.get_color_ipu8u2_k$();
      var tmp_1;
      if (newFill == native.get_fill_wom0ng_k$()) {
        tmp_1 = true;
      } else {
        var tmp_2;
        if (newFill == null) {
          // Inline function 'kotlin.text.isNullOrEmpty' call
          var this_0 = native.get_fill_wom0ng_k$();
          tmp_2 = this_0 == null || charSequenceLength(this_0) === 0;
        } else {
          tmp_2 = false;
        }
        tmp_1 = tmp_2;
      }
      if (tmp_1)
        return Unit_getInstance();
      native.set_fill_sosdnb_k$(newFill);
      ed.render_dje1iy_k$();
      ed.commit_vpt10n_k$();
      return Unit_getInstance();
    }
    var tmp3 = ed.get_items_it823b_k$();
    var tmp$ret$4;
    $l$block_0: {
      // Inline function 'kotlin.collections.lastOrNull' call
      var iterator_0 = tmp3.listIterator_70e65o_k$(tmp3.get_size_woubt6_k$());
      while (iterator_0.hasPrevious_qh0629_k$()) {
        var element_0 = iterator_0.previous_l2dfd5_k$();
        // Inline function 'stickynode.editor.FillTool.onDown.<anonymous>' call
        var tmp_3;
        if (element_0 instanceof RegionFillItem) {
          tmp_3 = element_0.hitTest_1gxtur_k$(p);
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
        ed.get_items_it823b_k$().remove_cedx0m_k$(old);
        ed.render_dje1iy_k$();
        ed.commit_vpt10n_k$();
      }
      return Unit_getInstance();
    }
    var tmp0_elvis_lhs = findEnclosedRegion(ed, p);
    var tmp_4;
    if (tmp0_elvis_lhs == null) {
      return Unit_getInstance();
    } else {
      tmp_4 = tmp0_elvis_lhs;
    }
    var runs = tmp_4;
    if (!(old == null)) {
      ed.get_items_it823b_k$().remove_cedx0m_k$(old);
    }
    ed.get_items_it823b_k$().add_dl6gt3_k$(0, new RegionFillItem(runs, ed.get_color_ipu8u2_k$()));
    ed.render_dje1iy_k$();
    ed.commit_vpt10n_k$();
  };
  protoOf(FillTool).onMove_580z7b_k$ = function (ed, p) {
    return Unit_getInstance();
  };
  protoOf(FillTool).onUp_lz9rfn_k$ = function (ed) {
    return Unit_getInstance();
  };
  function _set_active__h46tap($this, _set____db54di) {
    $this.active_1 = _set____db54di;
  }
  function _get_active__ikxdxh($this) {
    return $this.active_1;
  }
  function _set_erased__bm263d($this, _set____db54di) {
    $this.erased_1 = _set____db54di;
  }
  function _get_erased__d2sqq5($this) {
    return $this.erased_1;
  }
  function erase($this, ed, p) {
    var tmp0 = ed.get_items_it823b_k$();
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.indexOfLast' call
      var iterator = tmp0.listIterator_70e65o_k$(tmp0.get_size_woubt6_k$());
      while (iterator.hasPrevious_qh0629_k$()) {
        // Inline function 'stickynode.editor.EraserTool.erase.<anonymous>' call
        if (iterator.previous_l2dfd5_k$().hitTest_1gxtur_k$(p)) {
          tmp$ret$1 = iterator.nextIndex_jshxun_k$();
          break $l$block;
        }
      }
      tmp$ret$1 = -1;
    }
    var index = tmp$ret$1;
    if (index < 0)
      return Unit_getInstance();
    ed.get_items_it823b_k$().removeAt_6niowx_k$(index);
    $this.erased_1 = true;
    ed.requestRender_xvw6ob_k$();
  }
  function EraserTool() {
    this.active_1 = false;
    this.erased_1 = false;
  }
  protoOf(EraserTool).get_busy_wojps2_k$ = function () {
    return this.active_1;
  };
  protoOf(EraserTool).onDown_sb4qs0_k$ = function (ed, p, button) {
    this.active_1 = true;
    erase(this, ed, p);
  };
  protoOf(EraserTool).onMove_580z7b_k$ = function (ed, p) {
    if (this.active_1) {
      erase(this, ed, p);
    }
  };
  protoOf(EraserTool).onUp_lz9rfn_k$ = function (ed) {
    if (!this.active_1)
      return Unit_getInstance();
    this.active_1 = false;
    if (this.erased_1) {
      this.erased_1 = false;
      ed.commit_vpt10n_k$();
    }
  };
  function ToolSet$rectangle$lambda(it) {
    return it instanceof RectangleItem;
  }
  function ToolSet$rectangle$lambda_0(ed, start, end) {
    var box = boundingBox(start, end);
    return new RectangleItem(box.get_x_1mhr67_k$(), box.get_y_1mhr68_k$(), box.get_width_j0q4yl_k$(), box.get_height_e7t92o_k$(), ed.get_color_ipu8u2_k$(), ed.get_lineWidth_lbeliv_k$());
  }
  function ToolSet$circle$lambda(it) {
    return it instanceof CircleItem;
  }
  function ToolSet$circle$lambda_0(ed, start, end) {
    var box = boundingBox(start, end);
    return new CircleItem(box.get_x_1mhr67_k$(), box.get_y_1mhr68_k$(), box.get_width_j0q4yl_k$(), box.get_height_e7t92o_k$(), ed.get_color_ipu8u2_k$(), ed.get_lineWidth_lbeliv_k$());
  }
  function ToolSet$polygon$lambda(it) {
    return it instanceof PolygonItem;
  }
  function ToolSet$polygon$lambda_0(ed, start, end) {
    var box = boundingBox(start, end);
    return new PolygonItem(box.get_x_1mhr67_k$(), box.get_y_1mhr68_k$(), box.get_width_j0q4yl_k$(), box.get_height_e7t92o_k$(), ed.get_polygonSides_rm31lh_k$(), ed.get_color_ipu8u2_k$(), ed.get_lineWidth_lbeliv_k$());
  }
  function ToolSet$arrow$lambda(it) {
    return it instanceof ArrowItem;
  }
  function ToolSet$arrow$lambda_0(ed, start, end) {
    return new ArrowItem(start.get_x_1mhr67_k$(), start.get_y_1mhr68_k$(), end.get_x_1mhr67_k$(), end.get_y_1mhr68_k$(), ed.get_color_ipu8u2_k$(), ed.get_lineWidth_lbeliv_k$());
  }
  function ToolSet() {
    this.freehand_1 = new FreehandTool();
    this.eraser_1 = new EraserTool();
    this.text_1 = new TextTool();
    this.fill_1 = new FillTool();
    var tmp = this;
    var tmp_0 = ToolSet$rectangle$lambda;
    tmp.rectangle_1 = new ShapeTool(tmp_0, ToolSet$rectangle$lambda_0);
    var tmp_1 = this;
    var tmp_2 = ToolSet$circle$lambda;
    tmp_1.circle_1 = new ShapeTool(tmp_2, ToolSet$circle$lambda_0);
    var tmp_3 = this;
    var tmp_4 = ToolSet$polygon$lambda;
    tmp_3.polygon_1 = new ShapeTool(tmp_4, ToolSet$polygon$lambda_0);
    var tmp_5 = this;
    var tmp_6 = ToolSet$arrow$lambda;
    tmp_5.arrow_1 = new ShapeTool(tmp_6, ToolSet$arrow$lambda_0);
  }
  protoOf(ToolSet).get_freehand_dsmxlw_k$ = function () {
    return this.freehand_1;
  };
  protoOf(ToolSet).get_eraser_czouj9_k$ = function () {
    return this.eraser_1;
  };
  protoOf(ToolSet).get_text_wouvsm_k$ = function () {
    return this.text_1;
  };
  protoOf(ToolSet).get_fill_wom0ng_k$ = function () {
    return this.fill_1;
  };
  protoOf(ToolSet).get_rectangle_r245om_k$ = function () {
    return this.rectangle_1;
  };
  protoOf(ToolSet).get_circle_bwxzh5_k$ = function () {
    return this.circle_1;
  };
  protoOf(ToolSet).get_polygon_5b4a0f_k$ = function () {
    return this.polygon_1;
  };
  protoOf(ToolSet).get_arrow_iosp28_k$ = function () {
    return this.arrow_1;
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
  function get_APP_ID() {
    return APP_ID;
  }
  var APP_ID;
  function get_FORMAT_VERSION() {
    return FORMAT_VERSION;
  }
  var FORMAT_VERSION;
  function _get_$childSerializers__r2zwns($this) {
    return $this.$childSerializers_1;
  }
  function Companion() {
    Companion_instance = this;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.$childSerializers_1 = [null, null, new ArrayListSerializer(Companion_getInstance_3().serializer_9w0wvi_k$())];
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
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('stickynode.model.DrawingFile', this, 3);
    tmp0_serialDesc.addElement_5pzumi_k$('app', true);
    tmp0_serialDesc.addElement_5pzumi_k$('version', true);
    tmp0_serialDesc.addElement_5pzumi_k$('items', true);
    this.descriptor_1 = tmp0_serialDesc;
  }
  protoOf($serializer).serialize_cc7qi9_k$ = function (encoder, value) {
    var tmp0_desc = this.descriptor_1;
    var tmp1_output = encoder.beginStructure_yljocp_k$(tmp0_desc);
    var tmp2_cached = Companion_getInstance_0().$childSerializers_1;
    if (tmp1_output.shouldEncodeElementDefault_x8eyid_k$(tmp0_desc, 0) ? true : !(value.app_1 === '')) {
      tmp1_output.encodeStringElement_1n5wu2_k$(tmp0_desc, 0, value.app_1);
    }
    if (tmp1_output.shouldEncodeElementDefault_x8eyid_k$(tmp0_desc, 1) ? true : !(value.version_1 === 1)) {
      tmp1_output.encodeIntElement_krhhce_k$(tmp0_desc, 1, value.version_1);
    }
    if (tmp1_output.shouldEncodeElementDefault_x8eyid_k$(tmp0_desc, 2) ? true : !equals(value.items_1, emptyList())) {
      tmp1_output.encodeSerializableElement_isqxcl_k$(tmp0_desc, 2, tmp2_cached[2], value.items_1);
    }
    tmp1_output.endStructure_1xqz0n_k$(tmp0_desc);
  };
  protoOf($serializer).serialize_5ase3y_k$ = function (encoder, value) {
    return this.serialize_cc7qi9_k$(encoder, value instanceof DrawingFile ? value : THROW_CCE());
  };
  protoOf($serializer).deserialize_sy6x50_k$ = function (decoder) {
    var tmp0_desc = this.descriptor_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = 0;
    var tmp6_local2 = null;
    var tmp7_input = decoder.beginStructure_yljocp_k$(tmp0_desc);
    var tmp8_cached = Companion_getInstance_0().$childSerializers_1;
    if (tmp7_input.decodeSequentially_xlblqy_k$()) {
      tmp4_local0 = tmp7_input.decodeStringElement_3oenpg_k$(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.decodeIntElement_941u6a_k$(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp7_input.decodeSerializableElement_uahnnv_k$(tmp0_desc, 2, tmp8_cached[2], tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp7_input.decodeElementIndex_bstkhp_k$(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp7_input.decodeStringElement_3oenpg_k$(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.decodeIntElement_941u6a_k$(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp7_input.decodeSerializableElement_uahnnv_k$(tmp0_desc, 2, tmp8_cached[2], tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp7_input.endStructure_1xqz0n_k$(tmp0_desc);
    return DrawingFile_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  };
  protoOf($serializer).get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  protoOf($serializer).childSerializers_5ghqw5_k$ = function () {
    var tmp0_cached = Companion_getInstance_0().$childSerializers_1;
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
      $this.items_1 = emptyList();
    else
      $this.items_1 = items;
    return $this;
  }
  function DrawingFile_init_$Create$(seen0, app, version, items, serializationConstructorMarker) {
    return DrawingFile_init_$Init$(seen0, app, version, items, serializationConstructorMarker, objectCreate(protoOf(DrawingFile)));
  }
  function DrawingFile(app, version, items) {
    Companion_getInstance_0();
    app = app === VOID ? '' : app;
    version = version === VOID ? 1 : version;
    items = items === VOID ? emptyList() : items;
    this.app_1 = app;
    this.version_1 = version;
    this.items_1 = items;
  }
  protoOf(DrawingFile).get_app_18j9e0_k$ = function () {
    return this.app_1;
  };
  protoOf(DrawingFile).get_version_72w4j3_k$ = function () {
    return this.version_1;
  };
  protoOf(DrawingFile).get_items_it823b_k$ = function () {
    return this.items_1;
  };
  function _get_$childSerializers__r2zwns_0($this) {
    return $this.$childSerializers_1;
  }
  function Companion_0() {
    Companion_instance_0 = this;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.$childSerializers_1 = [new ArrayListSerializer($serializer_getInstance_2()), new ArrayListSerializer($serializer_getInstance_3()), new ArrayListSerializer($serializer_getInstance_4()), new ArrayListSerializer($serializer_getInstance_5()), new ArrayListSerializer($serializer_getInstance_6()), new ArrayListSerializer($serializer_getInstance_7())];
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
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('stickynode.model.LegacyDrawing', this, 6);
    tmp0_serialDesc.addElement_5pzumi_k$('strokeItems', true);
    tmp0_serialDesc.addElement_5pzumi_k$('rectangleItems', true);
    tmp0_serialDesc.addElement_5pzumi_k$('circleItems', true);
    tmp0_serialDesc.addElement_5pzumi_k$('polygonItems', true);
    tmp0_serialDesc.addElement_5pzumi_k$('arrowItems', true);
    tmp0_serialDesc.addElement_5pzumi_k$('textItems', true);
    this.descriptor_1 = tmp0_serialDesc;
  }
  protoOf($serializer_0).serialize_ovog22_k$ = function (encoder, value) {
    var tmp0_desc = this.descriptor_1;
    var tmp1_output = encoder.beginStructure_yljocp_k$(tmp0_desc);
    var tmp2_cached = Companion_getInstance_1().$childSerializers_1;
    if (tmp1_output.shouldEncodeElementDefault_x8eyid_k$(tmp0_desc, 0) ? true : !equals(value.strokeItems_1, emptyList())) {
      tmp1_output.encodeSerializableElement_isqxcl_k$(tmp0_desc, 0, tmp2_cached[0], value.strokeItems_1);
    }
    if (tmp1_output.shouldEncodeElementDefault_x8eyid_k$(tmp0_desc, 1) ? true : !equals(value.rectangleItems_1, emptyList())) {
      tmp1_output.encodeSerializableElement_isqxcl_k$(tmp0_desc, 1, tmp2_cached[1], value.rectangleItems_1);
    }
    if (tmp1_output.shouldEncodeElementDefault_x8eyid_k$(tmp0_desc, 2) ? true : !equals(value.circleItems_1, emptyList())) {
      tmp1_output.encodeSerializableElement_isqxcl_k$(tmp0_desc, 2, tmp2_cached[2], value.circleItems_1);
    }
    if (tmp1_output.shouldEncodeElementDefault_x8eyid_k$(tmp0_desc, 3) ? true : !equals(value.polygonItems_1, emptyList())) {
      tmp1_output.encodeSerializableElement_isqxcl_k$(tmp0_desc, 3, tmp2_cached[3], value.polygonItems_1);
    }
    if (tmp1_output.shouldEncodeElementDefault_x8eyid_k$(tmp0_desc, 4) ? true : !equals(value.arrowItems_1, emptyList())) {
      tmp1_output.encodeSerializableElement_isqxcl_k$(tmp0_desc, 4, tmp2_cached[4], value.arrowItems_1);
    }
    if (tmp1_output.shouldEncodeElementDefault_x8eyid_k$(tmp0_desc, 5) ? true : !equals(value.textItems_1, emptyList())) {
      tmp1_output.encodeSerializableElement_isqxcl_k$(tmp0_desc, 5, tmp2_cached[5], value.textItems_1);
    }
    tmp1_output.endStructure_1xqz0n_k$(tmp0_desc);
  };
  protoOf($serializer_0).serialize_5ase3y_k$ = function (encoder, value) {
    return this.serialize_ovog22_k$(encoder, value instanceof LegacyDrawing ? value : THROW_CCE());
  };
  protoOf($serializer_0).deserialize_sy6x50_k$ = function (decoder) {
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
    var tmp11_cached = Companion_getInstance_1().$childSerializers_1;
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
    return LegacyDrawing_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, null);
  };
  protoOf($serializer_0).get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  protoOf($serializer_0).childSerializers_5ghqw5_k$ = function () {
    var tmp0_cached = Companion_getInstance_1().$childSerializers_1;
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
      throwMissingFieldException(seen0, 0, $serializer_getInstance_0().descriptor_1);
    }
    if (0 === (seen0 & 1))
      $this.strokeItems_1 = emptyList();
    else
      $this.strokeItems_1 = strokeItems;
    if (0 === (seen0 & 2))
      $this.rectangleItems_1 = emptyList();
    else
      $this.rectangleItems_1 = rectangleItems;
    if (0 === (seen0 & 4))
      $this.circleItems_1 = emptyList();
    else
      $this.circleItems_1 = circleItems;
    if (0 === (seen0 & 8))
      $this.polygonItems_1 = emptyList();
    else
      $this.polygonItems_1 = polygonItems;
    if (0 === (seen0 & 16))
      $this.arrowItems_1 = emptyList();
    else
      $this.arrowItems_1 = arrowItems;
    if (0 === (seen0 & 32))
      $this.textItems_1 = emptyList();
    else
      $this.textItems_1 = textItems;
    return $this;
  }
  function LegacyDrawing_init_$Create$(seen0, strokeItems, rectangleItems, circleItems, polygonItems, arrowItems, textItems, serializationConstructorMarker) {
    return LegacyDrawing_init_$Init$(seen0, strokeItems, rectangleItems, circleItems, polygonItems, arrowItems, textItems, serializationConstructorMarker, objectCreate(protoOf(LegacyDrawing)));
  }
  function LegacyDrawing(strokeItems, rectangleItems, circleItems, polygonItems, arrowItems, textItems) {
    Companion_getInstance_1();
    strokeItems = strokeItems === VOID ? emptyList() : strokeItems;
    rectangleItems = rectangleItems === VOID ? emptyList() : rectangleItems;
    circleItems = circleItems === VOID ? emptyList() : circleItems;
    polygonItems = polygonItems === VOID ? emptyList() : polygonItems;
    arrowItems = arrowItems === VOID ? emptyList() : arrowItems;
    textItems = textItems === VOID ? emptyList() : textItems;
    this.strokeItems_1 = strokeItems;
    this.rectangleItems_1 = rectangleItems;
    this.circleItems_1 = circleItems;
    this.polygonItems_1 = polygonItems;
    this.arrowItems_1 = arrowItems;
    this.textItems_1 = textItems;
  }
  protoOf(LegacyDrawing).get_strokeItems_pivh8h_k$ = function () {
    return this.strokeItems_1;
  };
  protoOf(LegacyDrawing).get_rectangleItems_npge3q_k$ = function () {
    return this.rectangleItems_1;
  };
  protoOf(LegacyDrawing).get_circleItems_cgj3on_k$ = function () {
    return this.circleItems_1;
  };
  protoOf(LegacyDrawing).get_polygonItems_rrdxqp_k$ = function () {
    return this.polygonItems_1;
  };
  protoOf(LegacyDrawing).get_arrowItems_lx0j40_k$ = function () {
    return this.arrowItems_1;
  };
  protoOf(LegacyDrawing).get_textItems_8zbevq_k$ = function () {
    return this.textItems_1;
  };
  protoOf(LegacyDrawing).toItems_jfj6d7_k$ = function () {
    // Inline function 'kotlin.collections.buildList' call
    // Inline function 'kotlin.collections.buildListInternal' call
    // Inline function 'kotlin.apply' call
    var this_0 = ArrayList_init_$Create$();
    // Inline function 'stickynode.model.LegacyDrawing.toItems.<anonymous>' call
    this_0.addAll_4lagoh_k$(this.strokeItems_1);
    this_0.addAll_4lagoh_k$(this.rectangleItems_1);
    this_0.addAll_4lagoh_k$(this.circleItems_1);
    this_0.addAll_4lagoh_k$(this.polygonItems_1);
    this_0.addAll_4lagoh_k$(this.arrowItems_1);
    this_0.addAll_4lagoh_k$(this.textItems_1);
    return this_0.build_nmwvly_k$();
  };
  function encodeDrawing(items, pretty) {
    pretty = pretty === VOID ? false : pretty;
    _init_properties_Drawing_kt__mbw8h8();
    var file = new DrawingFile('sticky-node', 2, items);
    return (pretty ? get_prettyJson() : get_json()).encodeToString_k0apqx_k$(Companion_getInstance_0().serializer_9w0wvi_k$(), file);
  }
  function decodeDrawing(text) {
    _init_properties_Drawing_kt__mbw8h8();
    if (isBlank(text))
      throw IllegalArgumentException_init_$Create$('The file is empty');
    var file = get_json().decodeFromString_jwu9sq_k$(Companion_getInstance_0().serializer_9w0wvi_k$(), text);
    if (!(file.app_1 === 'sticky-node'))
      throw IllegalArgumentException_init_$Create$('Not a Sticky Node file');
    if (file.version_1 >= 2)
      return file.items_1;
    return get_json().decodeFromString_jwu9sq_k$(Companion_getInstance_1().serializer_9w0wvi_k$(), text).toItems_jfj6d7_k$();
  }
  function json$lambda($this$Json) {
    _init_properties_Drawing_kt__mbw8h8();
    $this$Json.set_ignoreUnknownKeys_pzvtne_k$(true);
    $this$Json.set_encodeDefaults_c5evsg_k$(true);
    $this$Json.set_explicitNulls_mtj2ai_k$(false);
    return Unit_getInstance();
  }
  function prettyJson$lambda($this$Json) {
    _init_properties_Drawing_kt__mbw8h8();
    $this$Json.set_prettyPrint_v2gnff_k$(true);
    $this$Json.set_prettyPrintIndent_ab0258_k$('  ');
    return Unit_getInstance();
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
    Companion_instance_1 = this;
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
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('stickynode.model.Point', this, 2);
    tmp0_serialDesc.addElement_5pzumi_k$('x', false);
    tmp0_serialDesc.addElement_5pzumi_k$('y', false);
    this.descriptor_1 = tmp0_serialDesc;
  }
  protoOf($serializer_1).serialize_gsogbp_k$ = function (encoder, value) {
    var tmp0_desc = this.descriptor_1;
    var tmp1_output = encoder.beginStructure_yljocp_k$(tmp0_desc);
    tmp1_output.encodeDoubleElement_a6rqhe_k$(tmp0_desc, 0, value.x_1);
    tmp1_output.encodeDoubleElement_a6rqhe_k$(tmp0_desc, 1, value.y_1);
    tmp1_output.endStructure_1xqz0n_k$(tmp0_desc);
  };
  protoOf($serializer_1).serialize_5ase3y_k$ = function (encoder, value) {
    return this.serialize_gsogbp_k$(encoder, value instanceof Point ? value : THROW_CCE());
  };
  protoOf($serializer_1).deserialize_sy6x50_k$ = function (decoder) {
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
  protoOf($serializer_1).get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  protoOf($serializer_1).childSerializers_5ghqw5_k$ = function () {
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
      throwMissingFieldException(seen0, 3, $serializer_getInstance_1().descriptor_1);
    }
    $this.x_1 = x;
    $this.y_1 = y;
    return $this;
  }
  function Point_init_$Create$(seen0, x, y, serializationConstructorMarker) {
    return Point_init_$Init$(seen0, x, y, serializationConstructorMarker, objectCreate(protoOf(Point)));
  }
  function Point(x, y) {
    Companion_getInstance_2();
    this.x_1 = x;
    this.y_1 = y;
  }
  protoOf(Point).get_x_1mhr67_k$ = function () {
    return this.x_1;
  };
  protoOf(Point).get_y_1mhr68_k$ = function () {
    return this.y_1;
  };
  protoOf(Point).distanceTo_kno8q6_k$ = function (other) {
    var tmp0 = this.x_1 - other.x_1;
    // Inline function 'kotlin.math.hypot' call
    var y = this.y_1 - other.y_1;
    return hypot(tmp0, y);
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
  protoOf(Point).copy$default_dadsmd_k$ = function (x, y, $super) {
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
  function boundingBox(a, b) {
    var tmp0 = a.x_1;
    // Inline function 'kotlin.math.min' call
    var b_0 = b.x_1;
    var tmp = Math.min(tmp0, b_0);
    var tmp2 = a.y_1;
    // Inline function 'kotlin.math.min' call
    var b_1 = b.y_1;
    var tmp_0 = Math.min(tmp2, b_1);
    // Inline function 'kotlin.math.abs' call
    var x = b.x_1 - a.x_1;
    var tmp_1 = Math.abs(x);
    // Inline function 'kotlin.math.abs' call
    var x_0 = b.y_1 - a.y_1;
    var tmp$ret$3 = Math.abs(x_0);
    return new BoundingBox(tmp, tmp_0, tmp_1, tmp$ret$3);
  }
  function distanceToSegment(p, a, b) {
    var dx = b.x_1 - a.x_1;
    var dy = b.y_1 - a.y_1;
    var lengthSquared = dx * dx + dy * dy;
    if (lengthSquared === 0.0)
      return p.distanceTo_kno8q6_k$(a);
    var t = coerceIn(((p.x_1 - a.x_1) * dx + (p.y_1 - a.y_1) * dy) / lengthSquared, 0.0, 1.0);
    var tmp0 = p.x_1 - (a.x_1 + t * dx);
    // Inline function 'kotlin.math.hypot' call
    var y = p.y_1 - (a.y_1 + t * dy);
    return hypot(tmp0, y);
  }
  function pointInPolygon(p, polygon) {
    var inside = false;
    var previous = get_lastIndex(polygon);
    var inductionVariable = 0;
    var last = polygon.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var a = polygon.get_c1px32_k$(i);
        var b = polygon.get_c1px32_k$(previous);
        if (!(a.y_1 > p.y_1 === b.y_1 > p.y_1) && p.x_1 < (b.x_1 - a.x_1) * (p.y_1 - a.y_1) / (b.y_1 - a.y_1) + a.x_1) {
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
    return tmp0.get_value_j01efc_k$();
  }
  var measureContext$delegate;
  function get_DEFAULT_LINE_WIDTH() {
    return DEFAULT_LINE_WIDTH;
  }
  var DEFAULT_LINE_WIDTH;
  function get_DEFAULT_FONT_SIZE() {
    return DEFAULT_FONT_SIZE;
  }
  var DEFAULT_FONT_SIZE;
  function get_MIN_HIT_RADIUS() {
    return MIN_HIT_RADIUS;
  }
  var MIN_HIT_RADIUS;
  function Fillable() {
  }
  function Boxed() {
  }
  function get_centerX(_this__u8e3s4) {
    _init_properties_Items_kt__3bnoaa();
    return _this__u8e3s4.get_x_1mhr67_k$() + _this__u8e3s4.get_width_j0q4yl_k$() / 2;
  }
  function get_centerY(_this__u8e3s4) {
    _init_properties_Items_kt__3bnoaa();
    return _this__u8e3s4.get_y_1mhr68_k$() + _this__u8e3s4.get_height_e7t92o_k$() / 2;
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
    return $this.$cachedSerializer$delegate_1.get_value_j01efc_k$();
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
    Companion_instance_2 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.$cachedSerializer$delegate_1 = lazy(tmp_0, Item$Companion$_anonymous__jaim2s);
  }
  protoOf(Companion_2).serializer_9w0wvi_k$ = function () {
    return _get_$cachedSerializer__te6jhj(this);
  };
  protoOf(Companion_2).serializer_nv39qc_k$ = function (typeParamsSerializers) {
    return this.serializer_9w0wvi_k$();
  };
  var Companion_instance_2;
  function Companion_getInstance_3() {
    if (Companion_instance_2 == null)
      new Companion_2();
    return Companion_instance_2;
  }
  function Item_init_$Init$(seen0, serializationConstructorMarker, $this) {
    return $this;
  }
  function Item_init_$Create$(seen0, serializationConstructorMarker) {
    return Item_init_$Init$(seen0, serializationConstructorMarker, objectCreate(protoOf(Item)));
  }
  function Item() {
    Companion_getInstance_3();
  }
  protoOf(Item).hitTestFill_vfzr9i_k$ = function (p) {
    return this.hitTest_1gxtur_k$(p);
  };
  function _get_$childSerializers__r2zwns_1($this) {
    return $this.$childSerializers_1;
  }
  function nearLine($this, p) {
    var radius = hitRadius($this.lineWidth_1);
    if ($this.points_1.get_size_woubt6_k$() === 1)
      return p.distanceTo_kno8q6_k$($this.points_1.get_c1px32_k$(0)) <= radius;
    var inductionVariable = 0;
    var last = $this.points_1.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (distanceToSegment(p, $this.points_1.get_c1px32_k$(i), $this.points_1.get_c1px32_k$(i + 1 | 0)) <= radius)
          return true;
      }
       while (inductionVariable < last);
    return false;
  }
  function inside($this, p) {
    return $this.points_1.get_size_woubt6_k$() >= 3 && pointInPolygon(p, $this.points_1);
  }
  function Companion_3() {
    Companion_instance_3 = this;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.$childSerializers_1 = [new ArrayListSerializer($serializer_getInstance_1()), null, null, null];
  }
  protoOf(Companion_3).serializer_9w0wvi_k$ = function () {
    return $serializer_getInstance_2();
  };
  var Companion_instance_3;
  function Companion_getInstance_4() {
    if (Companion_instance_3 == null)
      new Companion_3();
    return Companion_instance_3;
  }
  function $serializer_2() {
    $serializer_instance_2 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('stroke', this, 4);
    tmp0_serialDesc.addElement_5pzumi_k$('points', false);
    tmp0_serialDesc.addElement_5pzumi_k$('color', false);
    tmp0_serialDesc.addElement_5pzumi_k$('lineWidth', true);
    tmp0_serialDesc.addElement_5pzumi_k$('fill', true);
    this.descriptor_1 = tmp0_serialDesc;
  }
  protoOf($serializer_2).serialize_j2wkun_k$ = function (encoder, value) {
    var tmp0_desc = this.descriptor_1;
    var tmp1_output = encoder.beginStructure_yljocp_k$(tmp0_desc);
    var tmp2_cached = Companion_getInstance_4().$childSerializers_1;
    tmp1_output.encodeSerializableElement_isqxcl_k$(tmp0_desc, 0, tmp2_cached[0], value.points_1);
    tmp1_output.encodeStringElement_1n5wu2_k$(tmp0_desc, 1, value.color_1);
    if (tmp1_output.shouldEncodeElementDefault_x8eyid_k$(tmp0_desc, 2) ? true : !(value.lineWidth_1 === 3)) {
      tmp1_output.encodeIntElement_krhhce_k$(tmp0_desc, 2, value.lineWidth_1);
    }
    if (tmp1_output.shouldEncodeElementDefault_x8eyid_k$(tmp0_desc, 3) ? true : !(value.fill_1 == null)) {
      tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 3, StringSerializer_getInstance(), value.fill_1);
    }
    tmp1_output.endStructure_1xqz0n_k$(tmp0_desc);
  };
  protoOf($serializer_2).serialize_5ase3y_k$ = function (encoder, value) {
    return this.serialize_j2wkun_k$(encoder, value instanceof StrokeItem ? value : THROW_CCE());
  };
  protoOf($serializer_2).deserialize_sy6x50_k$ = function (decoder) {
    var tmp0_desc = this.descriptor_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = 0;
    var tmp7_local3 = null;
    var tmp8_input = decoder.beginStructure_yljocp_k$(tmp0_desc);
    var tmp9_cached = Companion_getInstance_4().$childSerializers_1;
    if (tmp8_input.decodeSequentially_xlblqy_k$()) {
      tmp4_local0 = tmp8_input.decodeSerializableElement_uahnnv_k$(tmp0_desc, 0, tmp9_cached[0], tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp8_input.decodeStringElement_3oenpg_k$(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp8_input.decodeIntElement_941u6a_k$(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp8_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp8_input.decodeElementIndex_bstkhp_k$(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp8_input.decodeSerializableElement_uahnnv_k$(tmp0_desc, 0, tmp9_cached[0], tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp8_input.decodeStringElement_3oenpg_k$(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp8_input.decodeIntElement_941u6a_k$(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp8_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp8_input.endStructure_1xqz0n_k$(tmp0_desc);
    return StrokeItem_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, null);
  };
  protoOf($serializer_2).get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  protoOf($serializer_2).childSerializers_5ghqw5_k$ = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [Companion_getInstance_4().$childSerializers_1[0], StringSerializer_getInstance(), IntSerializer_getInstance(), get_nullable(StringSerializer_getInstance())];
  };
  var $serializer_instance_2;
  function $serializer_getInstance_2() {
    if ($serializer_instance_2 == null)
      new $serializer_2();
    return $serializer_instance_2;
  }
  function StrokeItem_init_$Init$(seen0, points, color, lineWidth, fill, serializationConstructorMarker, $this) {
    if (!(3 === (3 & seen0))) {
      throwMissingFieldException(seen0, 3, $serializer_getInstance_2().descriptor_1);
    }
    Item_init_$Init$(seen0, serializationConstructorMarker, $this);
    $this.points_1 = points;
    $this.color_1 = color;
    if (0 === (seen0 & 4))
      $this.lineWidth_1 = 3;
    else
      $this.lineWidth_1 = lineWidth;
    if (0 === (seen0 & 8))
      $this.fill_1 = null;
    else
      $this.fill_1 = fill;
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
    this.points_1 = points;
    this.color_1 = color;
    this.lineWidth_1 = lineWidth;
    this.fill_1 = fill;
  }
  protoOf(StrokeItem).get_points_i5obn0_k$ = function () {
    return this.points_1;
  };
  protoOf(StrokeItem).get_color_ipu8u2_k$ = function () {
    return this.color_1;
  };
  protoOf(StrokeItem).get_lineWidth_lbeliv_k$ = function () {
    return this.lineWidth_1;
  };
  protoOf(StrokeItem).set_fill_sosdnb_k$ = function (_set____db54di) {
    this.fill_1 = _set____db54di;
  };
  protoOf(StrokeItem).get_fill_wom0ng_k$ = function () {
    return this.fill_1;
  };
  protoOf(StrokeItem).draw_rpid3c_k$ = function (ctx) {
    if (this.points_1.get_size_woubt6_k$() < 2)
      return Unit_getInstance();
    roundStroke(ctx);
    ctx.beginPath();
    ctx.moveTo(this.points_1.get_c1px32_k$(0).get_x_1mhr67_k$(), this.points_1.get_c1px32_k$(0).get_y_1mhr68_k$());
    var inductionVariable = 1;
    var last = this.points_1.get_size_woubt6_k$();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        ctx.lineTo(this.points_1.get_c1px32_k$(i).get_x_1mhr67_k$(), this.points_1.get_c1px32_k$(i).get_y_1mhr68_k$());
      }
       while (inductionVariable < last);
    paint(ctx, this.fill_1, this.color_1, this.lineWidth_1);
  };
  protoOf(StrokeItem).hitTest_1gxtur_k$ = function (p) {
    var tmp;
    if (nearLine(this, p)) {
      tmp = true;
    } else {
      var tmp_0;
      // Inline function 'kotlin.text.isNullOrEmpty' call
      var this_0 = this.fill_1;
      if (!(this_0 == null || charSequenceLength(this_0) === 0)) {
        tmp_0 = inside(this, p);
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(StrokeItem).hitTestFill_vfzr9i_k$ = function (p) {
    return nearLine(this, p) || inside(this, p);
  };
  protoOf(StrokeItem).moveBy_hp42rs_k$ = function (dx, dy) {
    var inductionVariable = 0;
    var last = this.points_1.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var point = this.points_1.get_c1px32_k$(i);
        this.points_1.set_82063s_k$(i, new Point(point.get_x_1mhr67_k$() + dx, point.get_y_1mhr68_k$() + dy));
      }
       while (inductionVariable <= last);
  };
  function Companion_4() {
    Companion_instance_4 = this;
  }
  protoOf(Companion_4).serializer_9w0wvi_k$ = function () {
    return $serializer_getInstance_3();
  };
  var Companion_instance_4;
  function Companion_getInstance_5() {
    if (Companion_instance_4 == null)
      new Companion_4();
    return Companion_instance_4;
  }
  function $serializer_3() {
    $serializer_instance_3 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('rectangle', this, 7);
    tmp0_serialDesc.addElement_5pzumi_k$('x', false);
    tmp0_serialDesc.addElement_5pzumi_k$('y', false);
    tmp0_serialDesc.addElement_5pzumi_k$('width', false);
    tmp0_serialDesc.addElement_5pzumi_k$('height', false);
    tmp0_serialDesc.addElement_5pzumi_k$('color', false);
    tmp0_serialDesc.addElement_5pzumi_k$('lineWidth', true);
    tmp0_serialDesc.addElement_5pzumi_k$('fill', true);
    this.descriptor_1 = tmp0_serialDesc;
  }
  protoOf($serializer_3).serialize_aff1o_k$ = function (encoder, value) {
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
    return this.serialize_aff1o_k$(encoder, value instanceof RectangleItem ? value : THROW_CCE());
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
    Item_init_$Init$(seen0, serializationConstructorMarker, $this);
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
    Companion_getInstance_5();
    lineWidth = lineWidth === VOID ? 3 : lineWidth;
    fill = fill === VOID ? null : fill;
    Item.call(this);
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
  protoOf(RectangleItem).draw_rpid3c_k$ = function (ctx) {
    ctx.beginPath();
    ctx.rect(this.x_1, this.y_1, this.width_1, this.height_1);
    paint(ctx, this.fill_1, this.color_1, this.lineWidth_1);
  };
  protoOf(RectangleItem).hitTest_1gxtur_k$ = function (p) {
    var tmp;
    var containsLower = this.x_1;
    var containsUpper = this.x_1 + this.width_1;
    var containsArg = p.get_x_1mhr67_k$();
    if (containsLower <= containsArg ? containsArg <= containsUpper : false) {
      var containsLower_0 = this.y_1;
      var containsUpper_0 = this.y_1 + this.height_1;
      var containsArg_0 = p.get_y_1mhr68_k$();
      tmp = containsLower_0 <= containsArg_0 ? containsArg_0 <= containsUpper_0 : false;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(RectangleItem).moveBy_hp42rs_k$ = function (dx, dy) {
    this.x_1 = this.x_1 + dx;
    this.y_1 = this.y_1 + dy;
  };
  function Companion_5() {
    Companion_instance_5 = this;
  }
  protoOf(Companion_5).serializer_9w0wvi_k$ = function () {
    return $serializer_getInstance_4();
  };
  var Companion_instance_5;
  function Companion_getInstance_6() {
    if (Companion_instance_5 == null)
      new Companion_5();
    return Companion_instance_5;
  }
  function $serializer_4() {
    $serializer_instance_4 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('circle', this, 7);
    tmp0_serialDesc.addElement_5pzumi_k$('x', false);
    tmp0_serialDesc.addElement_5pzumi_k$('y', false);
    tmp0_serialDesc.addElement_5pzumi_k$('width', false);
    tmp0_serialDesc.addElement_5pzumi_k$('height', false);
    tmp0_serialDesc.addElement_5pzumi_k$('color', false);
    tmp0_serialDesc.addElement_5pzumi_k$('lineWidth', true);
    tmp0_serialDesc.addElement_5pzumi_k$('fill', true);
    this.descriptor_1 = tmp0_serialDesc;
  }
  protoOf($serializer_4).serialize_4h19cz_k$ = function (encoder, value) {
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
    return this.serialize_4h19cz_k$(encoder, value instanceof CircleItem ? value : THROW_CCE());
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
    Item_init_$Init$(seen0, serializationConstructorMarker, $this);
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
    Companion_getInstance_6();
    lineWidth = lineWidth === VOID ? 3 : lineWidth;
    fill = fill === VOID ? null : fill;
    Item.call(this);
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
  protoOf(CircleItem).draw_rpid3c_k$ = function (ctx) {
    ctx.beginPath();
    ctx.ellipse(get_centerX(this), get_centerY(this), this.width_1 / 2, this.height_1 / 2, 0.0, 0.0, 2 * 3.141592653589793);
    paint(ctx, this.fill_1, this.color_1, this.lineWidth_1);
  };
  protoOf(CircleItem).hitTest_1gxtur_k$ = function (p) {
    var radiusX = this.width_1 / 2;
    var radiusY = this.height_1 / 2;
    if (radiusX === 0.0 || radiusY === 0.0)
      return false;
    var nx = (p.get_x_1mhr67_k$() - get_centerX(this)) / radiusX;
    var ny = (p.get_y_1mhr68_k$() - get_centerY(this)) / radiusY;
    return nx * nx + ny * ny <= 1.0;
  };
  protoOf(CircleItem).moveBy_hp42rs_k$ = function (dx, dy) {
    this.x_1 = this.x_1 + dx;
    this.y_1 = this.y_1 + dy;
  };
  function vertices($this) {
    var count = coerceAtLeast($this.sides_1, 3);
    var tmp0 = $this.width_1;
    // Inline function 'kotlin.math.min' call
    var b = $this.height_1;
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
        list.add_utx5q5_k$(tmp$ret$3);
      }
       while (inductionVariable < count);
    return list;
  }
  function Companion_6() {
    Companion_instance_6 = this;
  }
  protoOf(Companion_6).serializer_9w0wvi_k$ = function () {
    return $serializer_getInstance_5();
  };
  var Companion_instance_6;
  function Companion_getInstance_7() {
    if (Companion_instance_6 == null)
      new Companion_6();
    return Companion_instance_6;
  }
  function $serializer_5() {
    $serializer_instance_5 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('polygon', this, 8);
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
  protoOf($serializer_5).serialize_9g6o2x_k$ = function (encoder, value) {
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
    return this.serialize_9g6o2x_k$(encoder, value instanceof PolygonItem ? value : THROW_CCE());
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
    Item_init_$Init$(seen0, serializationConstructorMarker, $this);
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
    Companion_getInstance_7();
    lineWidth = lineWidth === VOID ? 3 : lineWidth;
    fill = fill === VOID ? null : fill;
    Item.call(this);
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
  protoOf(PolygonItem).draw_rpid3c_k$ = function (ctx) {
    var points = vertices(this);
    ctx.beginPath();
    ctx.moveTo(points.get_c1px32_k$(0).get_x_1mhr67_k$(), points.get_c1px32_k$(0).get_y_1mhr68_k$());
    var inductionVariable = 1;
    var last = points.get_size_woubt6_k$();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        ctx.lineTo(points.get_c1px32_k$(i).get_x_1mhr67_k$(), points.get_c1px32_k$(i).get_y_1mhr68_k$());
      }
       while (inductionVariable < last);
    ctx.closePath();
    paint(ctx, this.fill_1, this.color_1, this.lineWidth_1);
  };
  protoOf(PolygonItem).hitTest_1gxtur_k$ = function (p) {
    var tmp0 = this.width_1;
    // Inline function 'kotlin.math.min' call
    var b = this.height_1;
    if (Math.min(tmp0, b) === 0.0)
      return false;
    var points = vertices(this);
    var inside = false;
    var previous = get_lastIndex(points);
    var inductionVariable = 0;
    var last = points.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var a = points.get_c1px32_k$(i);
        var b_0 = points.get_c1px32_k$(previous);
        if (!(a.get_y_1mhr68_k$() > p.get_y_1mhr68_k$() === b_0.get_y_1mhr68_k$() > p.get_y_1mhr68_k$()) && p.get_x_1mhr67_k$() < (b_0.get_x_1mhr67_k$() - a.get_x_1mhr67_k$()) * (p.get_y_1mhr68_k$() - a.get_y_1mhr68_k$()) / (b_0.get_y_1mhr68_k$() - a.get_y_1mhr68_k$()) + a.get_x_1mhr67_k$()) {
          inside = !inside;
        }
        previous = i;
      }
       while (inductionVariable <= last);
    return inside;
  };
  protoOf(PolygonItem).moveBy_hp42rs_k$ = function (dx, dy) {
    this.x_1 = this.x_1 + dx;
    this.y_1 = this.y_1 + dy;
  };
  function Companion_7() {
    Companion_instance_7 = this;
  }
  protoOf(Companion_7).serializer_9w0wvi_k$ = function () {
    return $serializer_getInstance_6();
  };
  var Companion_instance_7;
  function Companion_getInstance_8() {
    if (Companion_instance_7 == null)
      new Companion_7();
    return Companion_instance_7;
  }
  function $serializer_6() {
    $serializer_instance_6 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('arrow', this, 6);
    tmp0_serialDesc.addElement_5pzumi_k$('startX', false);
    tmp0_serialDesc.addElement_5pzumi_k$('startY', false);
    tmp0_serialDesc.addElement_5pzumi_k$('endX', false);
    tmp0_serialDesc.addElement_5pzumi_k$('endY', false);
    tmp0_serialDesc.addElement_5pzumi_k$('color', false);
    tmp0_serialDesc.addElement_5pzumi_k$('lineWidth', true);
    this.descriptor_1 = tmp0_serialDesc;
  }
  protoOf($serializer_6).serialize_6xgepf_k$ = function (encoder, value) {
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
    return this.serialize_6xgepf_k$(encoder, value instanceof ArrowItem ? value : THROW_CCE());
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
    Item_init_$Init$(seen0, serializationConstructorMarker, $this);
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
    Companion_getInstance_8();
    lineWidth = lineWidth === VOID ? 3 : lineWidth;
    Item.call(this);
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
  protoOf(ArrowItem).draw_rpid3c_k$ = function (ctx) {
    // Inline function 'kotlin.math.max' call
    var b = this.lineWidth_1 * 4.0;
    var headLength = Math.max(16.0, b);
    var tmp2 = this.endY_1 - this.startY_1;
    // Inline function 'kotlin.math.atan2' call
    var x = this.endX_1 - this.startX_1;
    var angle = Math.atan2(tmp2, x);
    var spread = 3.141592653589793 / 6;
    ctx.strokeStyle = this.color_1;
    ctx.lineWidth = this.lineWidth_1;
    roundStroke(ctx);
    ctx.beginPath();
    ctx.moveTo(this.startX_1, this.startY_1);
    ctx.lineTo(this.endX_1, this.endY_1);
    var tmp = this.endX_1;
    // Inline function 'kotlin.math.cos' call
    var x_0 = angle - spread;
    var tmp_0 = tmp - headLength * Math.cos(x_0);
    var tmp_1 = this.endY_1;
    // Inline function 'kotlin.math.sin' call
    var x_1 = angle - spread;
    var tmp$ret$3 = Math.sin(x_1);
    ctx.moveTo(tmp_0, tmp_1 - headLength * tmp$ret$3);
    ctx.lineTo(this.endX_1, this.endY_1);
    var tmp_2 = this.endX_1;
    // Inline function 'kotlin.math.cos' call
    var x_2 = angle + spread;
    var tmp_3 = tmp_2 - headLength * Math.cos(x_2);
    var tmp_4 = this.endY_1;
    // Inline function 'kotlin.math.sin' call
    var x_3 = angle + spread;
    var tmp$ret$5 = Math.sin(x_3);
    ctx.lineTo(tmp_3, tmp_4 - headLength * tmp$ret$5);
    ctx.stroke();
  };
  protoOf(ArrowItem).hitTest_1gxtur_k$ = function (p) {
    return distanceToSegment(p, new Point(this.startX_1, this.startY_1), new Point(this.endX_1, this.endY_1)) <= hitRadius(this.lineWidth_1);
  };
  protoOf(ArrowItem).moveBy_hp42rs_k$ = function (dx, dy) {
    this.startX_1 = this.startX_1 + dx;
    this.startY_1 = this.startY_1 + dy;
    this.endX_1 = this.endX_1 + dx;
    this.endY_1 = this.endY_1 + dy;
  };
  function fontSpec($this) {
    return '' + $this.fontSize_1 + 'px sans-serif';
  }
  function lines($this) {
    return split($this.text_1, ['\n']);
  }
  function Companion_8() {
    Companion_instance_8 = this;
  }
  protoOf(Companion_8).serializer_9w0wvi_k$ = function () {
    return $serializer_getInstance_7();
  };
  var Companion_instance_8;
  function Companion_getInstance_9() {
    if (Companion_instance_8 == null)
      new Companion_8();
    return Companion_instance_8;
  }
  function $serializer_7() {
    $serializer_instance_7 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('text', this, 5);
    tmp0_serialDesc.addElement_5pzumi_k$('x', false);
    tmp0_serialDesc.addElement_5pzumi_k$('y', false);
    tmp0_serialDesc.addElement_5pzumi_k$('color', false);
    tmp0_serialDesc.addElement_5pzumi_k$('text', false);
    tmp0_serialDesc.addElement_5pzumi_k$('fontSize', true);
    this.descriptor_1 = tmp0_serialDesc;
  }
  protoOf($serializer_7).serialize_dwuzj_k$ = function (encoder, value) {
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
  protoOf($serializer_7).serialize_5ase3y_k$ = function (encoder, value) {
    return this.serialize_dwuzj_k$(encoder, value instanceof TextItem ? value : THROW_CCE());
  };
  protoOf($serializer_7).deserialize_sy6x50_k$ = function (decoder) {
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
  protoOf($serializer_7).get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  protoOf($serializer_7).childSerializers_5ghqw5_k$ = function () {
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
      throwMissingFieldException(seen0, 15, $serializer_getInstance_7().descriptor_1);
    }
    Item_init_$Init$(seen0, serializationConstructorMarker, $this);
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
    Companion_getInstance_9();
    fontSize = fontSize === VOID ? 20 : fontSize;
    Item.call(this);
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
  protoOf(TextItem).draw_rpid3c_k$ = function (ctx) {
    // Inline function 'kotlin.js.asDynamic' call
    ctx.textBaseline = 'top';
    ctx.font = fontSpec(this);
    ctx.fillStyle = this.color_1;
    var step = lineHeight(this.fontSize_1);
    // Inline function 'kotlin.collections.forEachIndexed' call
    var index = 0;
    var _iterator__ex2g4s = lines(this).iterator_jk1svi_k$();
    while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
      var item = _iterator__ex2g4s.next_20eer_k$();
      var _unary__edvuaz = index;
      index = _unary__edvuaz + 1 | 0;
      // Inline function 'stickynode.model.TextItem.draw.<anonymous>' call
      var index_0 = checkIndexOverflow(_unary__edvuaz);
      ctx.fillText(item, this.x_1, this.y_1 + imul(index_0, step));
    }
  };
  protoOf(TextItem).hitTest_1gxtur_k$ = function (p) {
    // Inline function 'kotlin.text.isEmpty' call
    var this_0 = this.text_1;
    if (charSequenceLength(this_0) === 0)
      return false;
    get_measureContext().font = fontSpec(this);
    var lines_0 = lines(this);
    // Inline function 'kotlin.collections.maxOf' call
    var iterator = lines_0.iterator_jk1svi_k$();
    if (!iterator.hasNext_bitz1p_k$())
      throw NoSuchElementException_init_$Create$();
    // Inline function 'stickynode.model.TextItem.hitTest.<anonymous>' call
    var it = iterator.next_20eer_k$();
    var maxValue = get_measureContext().measureText(it).width;
    while (iterator.hasNext_bitz1p_k$()) {
      // Inline function 'stickynode.model.TextItem.hitTest.<anonymous>' call
      var it_0 = iterator.next_20eer_k$();
      var v = get_measureContext().measureText(it_0).width;
      // Inline function 'kotlin.comparisons.maxOf' call
      var a = maxValue;
      maxValue = Math.max(a, v);
    }
    // Inline function 'kotlin.math.max' call
    var b = maxValue;
    var width = Math.max(1.0, b);
    var height = imul(lines_0.get_size_woubt6_k$(), lineHeight(this.fontSize_1));
    var tmp;
    var containsLower = this.x_1;
    var containsUpper = this.x_1 + width;
    var containsArg = p.get_x_1mhr67_k$();
    if (containsLower <= containsArg ? containsArg <= containsUpper : false) {
      var containsLower_0 = this.y_1;
      var containsUpper_0 = this.y_1 + height;
      var containsArg_0 = p.get_y_1mhr68_k$();
      tmp = containsLower_0 <= containsArg_0 ? containsArg_0 <= containsUpper_0 : false;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(TextItem).moveBy_hp42rs_k$ = function (dx, dy) {
    this.x_1 = this.x_1 + dx;
    this.y_1 = this.y_1 + dy;
  };
  function _get_$childSerializers__r2zwns_2($this) {
    return $this.$childSerializers_1;
  }
  function Companion_9() {
    Companion_instance_9 = this;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.$childSerializers_1 = [new ArrayListSerializer(IntSerializer_getInstance()), null, null, null];
  }
  protoOf(Companion_9).serializer_9w0wvi_k$ = function () {
    return $serializer_getInstance_8();
  };
  var Companion_instance_9;
  function Companion_getInstance_10() {
    if (Companion_instance_9 == null)
      new Companion_9();
    return Companion_instance_9;
  }
  function $serializer_8() {
    $serializer_instance_8 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('regionFill', this, 4);
    tmp0_serialDesc.addElement_5pzumi_k$('runs', false);
    tmp0_serialDesc.addElement_5pzumi_k$('color', false);
    tmp0_serialDesc.addElement_5pzumi_k$('offsetX', true);
    tmp0_serialDesc.addElement_5pzumi_k$('offsetY', true);
    this.descriptor_1 = tmp0_serialDesc;
  }
  protoOf($serializer_8).serialize_j32akr_k$ = function (encoder, value) {
    var tmp0_desc = this.descriptor_1;
    var tmp1_output = encoder.beginStructure_yljocp_k$(tmp0_desc);
    var tmp2_cached = Companion_getInstance_10().$childSerializers_1;
    tmp1_output.encodeSerializableElement_isqxcl_k$(tmp0_desc, 0, tmp2_cached[0], value.runs_1);
    tmp1_output.encodeStringElement_1n5wu2_k$(tmp0_desc, 1, value.color_1);
    if (tmp1_output.shouldEncodeElementDefault_x8eyid_k$(tmp0_desc, 2) ? true : !equals(value.offsetX_1, 0.0)) {
      tmp1_output.encodeDoubleElement_a6rqhe_k$(tmp0_desc, 2, value.offsetX_1);
    }
    if (tmp1_output.shouldEncodeElementDefault_x8eyid_k$(tmp0_desc, 3) ? true : !equals(value.offsetY_1, 0.0)) {
      tmp1_output.encodeDoubleElement_a6rqhe_k$(tmp0_desc, 3, value.offsetY_1);
    }
    tmp1_output.endStructure_1xqz0n_k$(tmp0_desc);
  };
  protoOf($serializer_8).serialize_5ase3y_k$ = function (encoder, value) {
    return this.serialize_j32akr_k$(encoder, value instanceof RegionFillItem ? value : THROW_CCE());
  };
  protoOf($serializer_8).deserialize_sy6x50_k$ = function (decoder) {
    var tmp0_desc = this.descriptor_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = 0.0;
    var tmp7_local3 = 0.0;
    var tmp8_input = decoder.beginStructure_yljocp_k$(tmp0_desc);
    var tmp9_cached = Companion_getInstance_10().$childSerializers_1;
    if (tmp8_input.decodeSequentially_xlblqy_k$()) {
      tmp4_local0 = tmp8_input.decodeSerializableElement_uahnnv_k$(tmp0_desc, 0, tmp9_cached[0], tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp8_input.decodeStringElement_3oenpg_k$(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp8_input.decodeDoubleElement_isei84_k$(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp8_input.decodeDoubleElement_isei84_k$(tmp0_desc, 3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp8_input.decodeElementIndex_bstkhp_k$(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp8_input.decodeSerializableElement_uahnnv_k$(tmp0_desc, 0, tmp9_cached[0], tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp8_input.decodeStringElement_3oenpg_k$(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp8_input.decodeDoubleElement_isei84_k$(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp8_input.decodeDoubleElement_isei84_k$(tmp0_desc, 3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp8_input.endStructure_1xqz0n_k$(tmp0_desc);
    return RegionFillItem_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, null);
  };
  protoOf($serializer_8).get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  protoOf($serializer_8).childSerializers_5ghqw5_k$ = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [Companion_getInstance_10().$childSerializers_1[0], StringSerializer_getInstance(), DoubleSerializer_getInstance(), DoubleSerializer_getInstance()];
  };
  var $serializer_instance_8;
  function $serializer_getInstance_8() {
    if ($serializer_instance_8 == null)
      new $serializer_8();
    return $serializer_instance_8;
  }
  function RegionFillItem_init_$Init$(seen0, runs, color, offsetX, offsetY, serializationConstructorMarker, $this) {
    if (!(3 === (3 & seen0))) {
      throwMissingFieldException(seen0, 3, $serializer_getInstance_8().descriptor_1);
    }
    Item_init_$Init$(seen0, serializationConstructorMarker, $this);
    $this.runs_1 = runs;
    $this.color_1 = color;
    if (0 === (seen0 & 4))
      $this.offsetX_1 = 0.0;
    else
      $this.offsetX_1 = offsetX;
    if (0 === (seen0 & 8))
      $this.offsetY_1 = 0.0;
    else
      $this.offsetY_1 = offsetY;
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
    this.runs_1 = runs;
    this.color_1 = color;
    this.offsetX_1 = offsetX;
    this.offsetY_1 = offsetY;
  }
  protoOf(RegionFillItem).get_runs_wotxg1_k$ = function () {
    return this.runs_1;
  };
  protoOf(RegionFillItem).get_color_ipu8u2_k$ = function () {
    return this.color_1;
  };
  protoOf(RegionFillItem).set_offsetX_z3ocr6_k$ = function (_set____db54di) {
    this.offsetX_1 = _set____db54di;
  };
  protoOf(RegionFillItem).get_offsetX_ocbsn8_k$ = function () {
    return this.offsetX_1;
  };
  protoOf(RegionFillItem).set_offsetY_s5wnhv_k$ = function (_set____db54di) {
    this.offsetY_1 = _set____db54di;
  };
  protoOf(RegionFillItem).get_offsetY_ocbsn7_k$ = function () {
    return this.offsetY_1;
  };
  protoOf(RegionFillItem).draw_rpid3c_k$ = function (ctx) {
    ctx.fillStyle = this.color_1;
    var i = 0;
    while (i < this.runs_1.get_size_woubt6_k$()) {
      var y = this.runs_1.get_c1px32_k$(i);
      var x0 = this.runs_1.get_c1px32_k$(i + 1 | 0);
      var x1 = this.runs_1.get_c1px32_k$(i + 2 | 0);
      ctx.fillRect(x0 + this.offsetX_1 - 1, y + this.offsetY_1 - 1, (x1 - x0 | 0) + 2 | 0, 3.0);
      i = i + 3 | 0;
    }
  };
  protoOf(RegionFillItem).hitTest_1gxtur_k$ = function (p) {
    // Inline function 'kotlin.math.floor' call
    var x = p.get_y_1mhr68_k$() - this.offsetY_1;
    var tmp$ret$0 = Math.floor(x);
    var y = numberToInt(tmp$ret$0);
    // Inline function 'kotlin.math.floor' call
    var x_0 = p.get_x_1mhr67_k$() - this.offsetX_1;
    var tmp$ret$1 = Math.floor(x_0);
    var x_1 = numberToInt(tmp$ret$1);
    var i = 0;
    while (i < this.runs_1.get_size_woubt6_k$()) {
      if (this.runs_1.get_c1px32_k$(i) === y && x_1 >= this.runs_1.get_c1px32_k$(i + 1 | 0) && x_1 < this.runs_1.get_c1px32_k$(i + 2 | 0))
        return true;
      i = i + 3 | 0;
    }
    return false;
  };
  protoOf(RegionFillItem).moveBy_hp42rs_k$ = function (dx, dy) {
    this.offsetX_1 = this.offsetX_1 + dx;
    this.offsetY_1 = this.offsetY_1 + dy;
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
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  function pickFileText($completion) {
    var tmp = new $pickFileTextCOROUTINE$1($completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
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
    return safe.getOrThrow_23gqzp_k$();
  }
  function saveToFile$lambda($url) {
    return function () {
      // Inline function 'kotlin.js.asDynamic' call
      window.URL.revokeObjectURL($url);
      return Unit_getInstance();
    };
  }
  function pickFile$lambda($continuation, $input) {
    return function (it) {
      var tmp0 = $continuation;
      var tmp0_safe_receiver = $input.files;
      // Inline function 'kotlin.coroutines.resume' call
      var value = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.item(0);
      // Inline function 'kotlin.Companion.success' call
      Companion_getInstance();
      var tmp$ret$0 = _Result___init__impl__xyqfz8(value);
      tmp0.resumeWith_dtxwbr_k$(tmp$ret$0);
      return Unit_getInstance();
    };
  }
  function pickFile$lambda_0($continuation) {
    return function (it) {
      // Inline function 'kotlin.coroutines.resume' call
      var this_0 = $continuation;
      // Inline function 'kotlin.Companion.success' call
      Companion_getInstance();
      var tmp$ret$0 = _Result___init__impl__xyqfz8(null);
      this_0.resumeWith_dtxwbr_k$(tmp$ret$0);
      return Unit_getInstance();
    };
  }
  function $saveToFileCOROUTINE$0(content, suggestedName, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.content_1 = content;
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
            if (window.showSaveFilePicker != undefined) {
              this.set_exceptionState_fex74n_k$(6);
              this.accept1__1 = {};
              var this_0 = ['.json'];
              this.accept1__1['application/json'] = this_0;
              this.type2__1 = {};
              this.type2__1.description = 'Sticky Node drawing';
              this.type2__1.accept = this.accept1__1;
              this.options3__1 = {};
              this.options3__1.suggestedName = this.suggestedName_1;
              var this_1 = [this.type2__1];
              this.options3__1.types = this_1;
              this.set_state_rjd8d0_k$(2);
              var this_2 = window.showSaveFilePicker(this.options3__1);
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
            var this_3 = [this.content_1];
            var type = 'application/json';
            var o = {};
            o['type'] = type;
            tmp_0.blob4__1 = new Blob(this_3, o);
            var tmp_1 = this;
            tmp_1.url5__1 = window.URL.createObjectURL(this.blob4__1);
            var tmp_2 = this;
            var tmp_3 = document.createElement('a');
            tmp_2.link6__1 = tmp_3 instanceof HTMLAnchorElement ? tmp_3 : THROW_CCE();
            this.link6__1.href = this.url5__1;
            this.link6__1.download = this.suggestedName_1;
            ensureNotNull(document.body).appendChild(this.link6__1);
            this.link6__1.click();
            this.link6__1.remove();
            var tmp_4 = window;
            tmp_4.setTimeout(saveToFile$lambda(this.url5__1), 1000);
            return Unit_getInstance();
          case 2:
            this.handle7__1 = suspendResult;
            this.set_state_rjd8d0_k$(3);
            var this_4 = this.handle7__1.createWritable();
            suspendResult = await_0(this_4, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            this.writable8__1 = suspendResult;
            this.set_state_rjd8d0_k$(4);
            var this_5 = this.writable8__1.write(this.content_1);
            suspendResult = await_0(this_5, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            this.set_state_rjd8d0_k$(5);
            var this_6 = this.writable8__1.close();
            suspendResult = await_0(this_6, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 5:
            this.TRY_RESULT0__1 = suspendResult;
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
              tmp_6.TRY_RESULT0__1 = Unit_getInstance();
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
  function $pickFileTextCOROUTINE$1(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf($pickFileTextCOROUTINE$1).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(3);
            this.set_state_rjd8d0_k$(1);
            suspendResult = pickFile(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.tmp0_elvis_lhs0__1 = suspendResult;
            var tmp_0 = this;
            var tmp_1;
            if (this.tmp0_elvis_lhs0__1 == null) {
              return null;
            } else {
              tmp_1 = this.tmp0_elvis_lhs0__1;
            }

            tmp_0.file1__1 = tmp_1;
            this.set_state_rjd8d0_k$(2);
            var this_0 = this.file1__1.text();
            suspendResult = await_0(this_0, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return suspendResult;
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
  function _get_KEY__e5qd6a($this) {
    return $this.KEY_1;
  }
  function _get_LEGACY_PNG__v3l8ko($this) {
    return $this.LEGACY_PNG_1;
  }
  function _get_LEGACY_STROKES__2abn5m($this) {
    return $this.LEGACY_STROKES_1;
  }
  function _get_LEGACY_RECTANGLES__orwuwn($this) {
    return $this.LEGACY_RECTANGLES_1;
  }
  function _get_LEGACY_CIRCLES__e6r926($this) {
    return $this.LEGACY_CIRCLES_1;
  }
  function _get_LEGACY_POLYGONS__4dkk3m($this) {
    return $this.LEGACY_POLYGONS_1;
  }
  function _get_LEGACY_ARROWS__ud09ox($this) {
    return $this.LEGACY_ARROWS_1;
  }
  function _get_LEGACY_TEXT__uec6j2($this) {
    return $this.LEGACY_TEXT_1;
  }
  function _get_legacyKeys__3ixary($this) {
    return $this.legacyKeys_1;
  }
  function migrateLegacy($this) {
    var tmp0 = $this.legacyKeys_1;
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlin.collections.all' call
      var tmp;
      if (isInterface(tmp0, Collection)) {
        tmp = tmp0.isEmpty_y1axqb_k$();
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$0 = true;
        break $l$block_0;
      }
      var _iterator__ex2g4s = tmp0.iterator_jk1svi_k$();
      while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
        var element = _iterator__ex2g4s.next_20eer_k$();
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
    $this.save_kr09ot_k$(encodeDrawing(items));
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s_0 = $this.legacyKeys_1.iterator_jk1svi_k$();
    while (_iterator__ex2g4s_0.hasNext_bitz1p_k$()) {
      var element_0 = _iterator__ex2g4s_0.next_20eer_k$();
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
    this.KEY_1 = 'stickyNode.drawing';
    this.LEGACY_PNG_1 = 'drawingCanvas';
    this.LEGACY_STROKES_1 = 'drawingCanvasStrokes';
    this.LEGACY_RECTANGLES_1 = 'drawingCanvasRectangles';
    this.LEGACY_CIRCLES_1 = 'drawingCanvasCircles';
    this.LEGACY_POLYGONS_1 = 'drawingCanvasPolygons';
    this.LEGACY_ARROWS_1 = 'drawingCanvasArrows';
    this.LEGACY_TEXT_1 = 'drawingCanvasText';
    this.legacyKeys_1 = listOf(['drawingCanvas', 'drawingCanvasStrokes', 'drawingCanvasRectangles', 'drawingCanvasCircles', 'drawingCanvasPolygons', 'drawingCanvasArrows', 'drawingCanvasText']);
  }
  protoOf(Storage).load_1zbae_k$ = function () {
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
  protoOf(Storage).save_kr09ot_k$ = function (snapshot) {
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
  function get_LEFT_BUTTON() {
    return LEFT_BUTTON;
  }
  var LEFT_BUTTON;
  function get_RIGHT_BUTTON() {
    return RIGHT_BUTTON;
  }
  var RIGHT_BUTTON;
  function setupCanvasEvents(editor) {
    var canvas = editor.get_canvas_bshgm9_k$();
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
      if ($editor.get_tool_wov2zl_k$().get_claimsMouse_54sth7_k$()) {
        event.preventDefault();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function setupCanvasEvents$lambda_0($editor, $canvas) {
    return function (e) {
      var event = e instanceof MouseEvent ? e : THROW_CCE();
      var button = event.button;
      var tool = $editor.get_tool_wov2zl_k$();
      var allowed = button === 0 || (button === 2 && tool.get_claimsMouse_54sth7_k$());
      var tmp;
      if (!allowed) {
        return Unit_getInstance();
      }
      var tmp_0;
      if (tool.get_claimsMouse_54sth7_k$()) {
        event.preventDefault();
        tmp_0 = Unit_getInstance();
      }
      var tmp_1;
      if (tool.get_busy_wojps2_k$()) {
        tool.onUp_lz9rfn_k$($editor);
        tmp_1 = Unit_getInstance();
      }
      tool.onDown_sb4qs0_k$($editor, setupCanvasEvents$position($canvas, event), button);
      return Unit_getInstance();
    };
  }
  function setupCanvasEvents$lambda_1($editor, $canvas) {
    return function (e) {
      var event = e instanceof MouseEvent ? e : THROW_CCE();
      var tool = $editor.get_tool_wov2zl_k$();
      var tmp;
      if (!tool.get_busy_wojps2_k$()) {
        return Unit_getInstance();
      }
      var tmp_0;
      if (event.buttons === 0) {
        tool.onUp_lz9rfn_k$($editor);
        tmp_0 = Unit_getInstance();
      } else {
        tool.onMove_580z7b_k$($editor, setupCanvasEvents$position($canvas, event));
        tmp_0 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function setupCanvasEvents$lambda_2($editor) {
    return function (it) {
      $editor.get_tool_wov2zl_k$().onUp_lz9rfn_k$($editor);
      return Unit_getInstance();
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
      return Unit_getInstance();
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
        tmp_1 = get_TEXT_INPUT_TYPES().contains_aljjnj_k$(element.type);
      } else {
        tmp_1 = false;
      }
      tmp_0 = tmp_1;
    }
    return tmp_0;
  }
  function setupControls(editor) {
    _init_properties_Controls_kt__wbvoru();
    var tools = editor.get_tools_iz6t2q_k$();
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
    editor.set_onToolChanged_3f4ytg_k$(setupControls$lambda_7(eraserButton, tools));
    // Inline function 'stickynode.ui.byId' call
    var id_0 = 'colorPicker';
    var tmp_0 = document.getElementById(id_0);
    var tmp0_safe_receiver = tmp_0 instanceof HTMLInputElement ? tmp_0 : null;
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
    var tmp_1 = document;
    tmp_1.addEventListener('keydown', setupControls$lambda_16(editor));
  }
  function onClick$lambda($action) {
    return function (it) {
      $action();
      return Unit_getInstance();
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
      return Unit_getInstance();
    };
  }
  function setupControls$lambda($editor, $tools) {
    return function () {
      $editor.selectTool_nfpv6_k$($tools.get_freehand_dsmxlw_k$());
      return Unit_getInstance();
    };
  }
  function setupControls$lambda_0($editor, $tools) {
    return function () {
      $editor.selectTool_nfpv6_k$($tools.get_rectangle_r245om_k$());
      return Unit_getInstance();
    };
  }
  function setupControls$lambda_1($editor, $tools) {
    return function () {
      $editor.selectTool_nfpv6_k$($tools.get_circle_bwxzh5_k$());
      return Unit_getInstance();
    };
  }
  function setupControls$lambda_2($editor, $tools) {
    return function () {
      $editor.selectTool_nfpv6_k$($tools.get_arrow_iosp28_k$());
      return Unit_getInstance();
    };
  }
  function setupControls$lambda_3($editor, $tools) {
    return function () {
      $editor.selectTool_nfpv6_k$($tools.get_text_wouvsm_k$());
      return Unit_getInstance();
    };
  }
  function setupControls$lambda_4($editor, $tools) {
    return function () {
      $editor.selectTool_nfpv6_k$($tools.get_fill_wom0ng_k$());
      return Unit_getInstance();
    };
  }
  function setupControls$lambda_5($editor, $tools) {
    return function () {
      $editor.selectTool_nfpv6_k$($editor.get_tool_wov2zl_k$() === $tools.get_eraser_czouj9_k$() ? $tools.get_freehand_dsmxlw_k$() : $tools.get_eraser_czouj9_k$());
      return Unit_getInstance();
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
        $editor.set_polygonSides_7fzqbb_k$(sides);
        $editor.selectTool_nfpv6_k$($tools.get_polygon_5b4a0f_k$());
        tmp_0 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function setupControls$lambda_7($eraserButton, $tools) {
    return function (tool) {
      var tmp0_safe_receiver = $eraserButton;
      if (tmp0_safe_receiver == null)
        null;
      else {
        tmp0_safe_receiver.textContent = tool === $tools.get_eraser_czouj9_k$() ? 'Eraser: On' : 'Eraser: Off';
      }
      return Unit_getInstance();
    };
  }
  function setupControls$lambda_8($editor, $picker) {
    return function (it) {
      $editor.set_color_ayzg4c_k$($picker.value);
      return Unit_getInstance();
    };
  }
  function setupControls$lambda_9($editor) {
    return function (it) {
      $editor.set_lineWidth_97ta37_k$(it);
      return Unit_getInstance();
    };
  }
  function setupControls$lambda_10($editor) {
    return function (it) {
      $editor.set_fontSize_6szsfv_k$(it);
      return Unit_getInstance();
    };
  }
  function setupControls$lambda_11($editor) {
    return function () {
      $editor.undo_t6j8bw_k$();
      return Unit_getInstance();
    };
  }
  function setupControls$lambda_12($editor) {
    return function () {
      $editor.redo_p9k3wy_k$();
      return Unit_getInstance();
    };
  }
  function setupControls$lambda_13($editor) {
    return function () {
      $editor.clear_j9egeb_k$();
      return Unit_getInstance();
    };
  }
  function setupControls$lambda$slambda($editor, resultContinuation) {
    this.$editor_1 = $editor;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(setupControls$lambda$slambda).invoke_d9fzmj_k$ = function ($this$launch, $completion) {
    var tmp = this.create_rcuf4x_k$($this$launch, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(setupControls$lambda$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_d9fzmj_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(setupControls$lambda$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(3);
            this.set_exceptionState_fex74n_k$(2);
            this.set_state_rjd8d0_k$(1);
            suspendResult = saveToFile(this.$editor_1.exportJson_3gdc58_k$(), VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.set_exceptionState_fex74n_k$(3);
            this.set_state_rjd8d0_k$(4);
            continue $sm;
          case 2:
            this.set_exceptionState_fex74n_k$(3);
            var tmp_0 = this.get_exception_x0n6w6_k$();
            if (tmp_0 instanceof Error) {
              var error = this.get_exception_x0n6w6_k$();
              window.alert("Couldn't save the file: " + error.message);
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
  protoOf(setupControls$lambda$slambda).create_rcuf4x_k$ = function ($this$launch, completion) {
    var i = new setupControls$lambda$slambda(this.$editor_1, completion);
    i.$this$launch_1 = $this$launch;
    return i;
  };
  protoOf(setupControls$lambda$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function setupControls$lambda$slambda_0($editor, resultContinuation) {
    var i = new setupControls$lambda$slambda($editor, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.invoke_d9fzmj_k$($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function setupControls$lambda_14($editor) {
    return function () {
      var tmp = get_scope();
      launch(tmp, VOID, VOID, setupControls$lambda$slambda_0($editor, null));
      return Unit_getInstance();
    };
  }
  function setupControls$lambda$slambda_1($editor, resultContinuation) {
    this.$editor_1 = $editor;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(setupControls$lambda$slambda_1).invoke_d9fzmj_k$ = function ($this$launch, $completion) {
    var tmp = this.create_rcuf4x_k$($this$launch, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(setupControls$lambda$slambda_1).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_d9fzmj_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(setupControls$lambda$slambda_1).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(3);
            this.set_exceptionState_fex74n_k$(2);
            this.set_state_rjd8d0_k$(1);
            suspendResult = pickFileText(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var tmp0_elvis_lhs = suspendResult;
            var tmp_0;
            if (tmp0_elvis_lhs == null) {
              return Unit_getInstance();
            } else {
              tmp_0 = tmp0_elvis_lhs;
            }

            var text = tmp_0;
            this.$editor_1.load_fth14d_k$(decodeDrawing(text));
            this.set_exceptionState_fex74n_k$(3);
            this.set_state_rjd8d0_k$(4);
            continue $sm;
          case 2:
            this.set_exceptionState_fex74n_k$(3);
            var tmp_1 = this.get_exception_x0n6w6_k$();
            if (tmp_1 instanceof Error) {
              var error = this.get_exception_x0n6w6_k$();
              window.alert("Couldn't open that file: " + error.message);
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
  protoOf(setupControls$lambda$slambda_1).create_rcuf4x_k$ = function ($this$launch, completion) {
    var i = new setupControls$lambda$slambda_1(this.$editor_1, completion);
    i.$this$launch_1 = $this$launch;
    return i;
  };
  protoOf(setupControls$lambda$slambda_1).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function setupControls$lambda$slambda_2($editor, resultContinuation) {
    var i = new setupControls$lambda$slambda_1($editor, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.invoke_d9fzmj_k$($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function setupControls$lambda_15($editor) {
    return function () {
      var tmp = get_scope();
      launch(tmp, VOID, VOID, setupControls$lambda$slambda_2($editor, null));
      return Unit_getInstance();
    };
  }
  function setupControls$lambda_16($editor) {
    return function (e) {
      var event = e instanceof KeyboardEvent ? e : THROW_CCE();
      var tmp;
      if (!(event.ctrlKey || event.metaKey) || isTyping(event.target)) {
        return Unit_getInstance();
      }
      // Inline function 'kotlin.text.lowercase' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_0;
      switch (event.key.toLowerCase()) {
        case 'z':
          event.preventDefault();
          var tmp_1;
          if (event.shiftKey) {
            $editor.redo_p9k3wy_k$();
            tmp_1 = Unit_getInstance();
          } else {
            $editor.undo_t6j8bw_k$();
            tmp_1 = Unit_getInstance();
          }

          tmp_0 = tmp_1;
          break;
        case 'y':
          event.preventDefault();
          $editor.redo_p9k3wy_k$();
          tmp_0 = Unit_getInstance();
          break;
        default:
          tmp_0 = Unit_getInstance();
          break;
      }
      return Unit_getInstance();
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
  protoOf(FreehandTool).get_claimsMouse_54sth7_k$ = get_claimsMouse;
  protoOf(ShapeTool).get_claimsMouse_54sth7_k$ = get_claimsMouse;
  protoOf(FillTool).get_busy_wojps2_k$ = get_busy;
  protoOf(EraserTool).get_claimsMouse_54sth7_k$ = get_claimsMouse;
  protoOf($serializer).typeParametersSerializers_fr94fx_k$ = typeParametersSerializers;
  protoOf($serializer_0).typeParametersSerializers_fr94fx_k$ = typeParametersSerializers;
  protoOf($serializer_1).typeParametersSerializers_fr94fx_k$ = typeParametersSerializers;
  protoOf($serializer_2).typeParametersSerializers_fr94fx_k$ = typeParametersSerializers;
  protoOf($serializer_3).typeParametersSerializers_fr94fx_k$ = typeParametersSerializers;
  protoOf($serializer_4).typeParametersSerializers_fr94fx_k$ = typeParametersSerializers;
  protoOf($serializer_5).typeParametersSerializers_fr94fx_k$ = typeParametersSerializers;
  protoOf($serializer_6).typeParametersSerializers_fr94fx_k$ = typeParametersSerializers;
  protoOf($serializer_7).typeParametersSerializers_fr94fx_k$ = typeParametersSerializers;
  protoOf($serializer_8).typeParametersSerializers_fr94fx_k$ = typeParametersSerializers;
  //endregion
  //region block: init
  MIN_SHAPE_DRAG = 3.0;
  APP_ID = 'sticky-node';
  FORMAT_VERSION = 2;
  DEFAULT_LINE_WIDTH = 3;
  DEFAULT_FONT_SIZE = 20;
  MIN_HIT_RADIUS = 8.0;
  LEFT_BUTTON = 0;
  RIGHT_BUTTON = 2;
  //endregion
  mainWrapper();
  return _;
}));
