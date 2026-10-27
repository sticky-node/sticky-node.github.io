(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlinx-serialization-kotlinx-serialization-core.js', './kotlin-kotlin-stdlib.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlinx-serialization-kotlinx-serialization-core.js'), require('./kotlin-kotlin-stdlib.js'));
  else {
    if (typeof globalThis['kotlinx-serialization-kotlinx-serialization-core'] === 'undefined') {
      throw new Error("Error loading module 'kotlinx-serialization-kotlinx-serialization-json'. Its dependency 'kotlinx-serialization-kotlinx-serialization-core' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-core' is loaded prior to 'kotlinx-serialization-kotlinx-serialization-json'.");
    }
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kotlinx-serialization-kotlinx-serialization-json'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kotlinx-serialization-kotlinx-serialization-json'.");
    }
    globalThis['kotlinx-serialization-kotlinx-serialization-json'] = factory(typeof globalThis['kotlinx-serialization-kotlinx-serialization-json'] === 'undefined' ? {} : globalThis['kotlinx-serialization-kotlinx-serialization-json'], globalThis['kotlinx-serialization-kotlinx-serialization-core'], globalThis['kotlin-kotlin-stdlib']);
  }
}(function (_, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var EmptySerializersModule = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.j1;
  var protoOf = kotlin_kotlin.$_$.w4;
  var initMetadataForObject = kotlin_kotlin.$_$.n4;
  var VOID = kotlin_kotlin.$_$.c;
  var Unit_instance = kotlin_kotlin.$_$.s1;
  var initMetadataForClass = kotlin_kotlin.$_$.i4;
  var toString = kotlin_kotlin.$_$.z4;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.w;
  var charSequenceLength = kotlin_kotlin.$_$.z3;
  var charSequenceGet = kotlin_kotlin.$_$.y3;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.h1;
  var equals = kotlin_kotlin.$_$.b4;
  var toString_0 = kotlin_kotlin.$_$.r6;
  var Enum = kotlin_kotlin.$_$.y5;
  var initMetadataForCompanion = kotlin_kotlin.$_$.j4;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.r;
  var hashCode = kotlin_kotlin.$_$.h4;
  var joinToString = kotlin_kotlin.$_$.o2;
  var THROW_CCE = kotlin_kotlin.$_$.e6;
  var KtMap = kotlin_kotlin.$_$.w1;
  var getKClassFromExpression = kotlin_kotlin.$_$.a;
  var getBooleanHashCode = kotlin_kotlin.$_$.d4;
  var getStringHashCode = kotlin_kotlin.$_$.g4;
  var KtList = kotlin_kotlin.$_$.v1;
  var NumberFormatException_init_$Create$ = kotlin_kotlin.$_$.c1;
  var numberRangeToNumber = kotlin_kotlin.$_$.r4;
  var ClosedRange = kotlin_kotlin.$_$.a5;
  var isInterface = kotlin_kotlin.$_$.p4;
  var contains = kotlin_kotlin.$_$.d5;
  var toDouble = kotlin_kotlin.$_$.s5;
  var StringCompanionObject_instance = kotlin_kotlin.$_$.q1;
  var serializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.n;
  var InlinePrimitiveDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.e1;
  var toLong = kotlin_kotlin.$_$.y4;
  var ElementMarker = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.b1;
  var captureStack = kotlin_kotlin.$_$.w3;
  var SerializationException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.p1;
  var SerializationException_init_$Init$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.a;
  var charSequenceSubSequence = kotlin_kotlin.$_$.a4;
  var coerceAtLeast = kotlin_kotlin.$_$.b5;
  var coerceAtMost = kotlin_kotlin.$_$.c5;
  var CLASS_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.e;
  var ENUM_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.d;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.l;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.g;
  var singleOrNull = kotlin_kotlin.$_$.y2;
  var emptyMap = kotlin_kotlin.$_$.h2;
  var getValue = kotlin_kotlin.$_$.k2;
  var fillArrayVal = kotlin_kotlin.$_$.c4;
  var copyOf = kotlin_kotlin.$_$.c2;
  var copyOf_0 = kotlin_kotlin.$_$.d2;
  var LIST_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.f;
  var SerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.q;
  var DeepRecursiveFunction = kotlin_kotlin.$_$.w5;
  var invoke = kotlin_kotlin.$_$.l6;
  var CoroutineImpl = kotlin_kotlin.$_$.r3;
  var DeepRecursiveScope = kotlin_kotlin.$_$.x5;
  var Unit = kotlin_kotlin.$_$.f6;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.c3;
  var initMetadataForLambda = kotlin_kotlin.$_$.m4;
  var initMetadataForCoroutine = kotlin_kotlin.$_$.k4;
  var SealedClassSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.o1;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.y;
  var jsonCachedSerialNames = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.h1;
  var ENUM = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.r;
  var PrimitiveKind = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.p;
  var PolymorphicKind = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.o;
  var CONTEXTUAL_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.c;
  var MAP_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.g;
  var contextual = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.k1;
  var SerializersModuleCollector = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.l1;
  var AbstractDecoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.t;
  var AbstractPolymorphicSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.z;
  var DeserializationStrategy = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.m1;
  var getKClass = kotlin_kotlin.$_$.b;
  var findPolymorphicSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.r1;
  var ensureNotNull = kotlin_kotlin.$_$.k6;
  var substringBefore = kotlin_kotlin.$_$.q5;
  var removeSuffix = kotlin_kotlin.$_$.m5;
  var substringAfter = kotlin_kotlin.$_$.p5;
  var contains_0 = kotlin_kotlin.$_$.h5;
  var plus = kotlin_kotlin.$_$.p6;
  var MissingFieldException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.n1;
  var IllegalArgumentException = kotlin_kotlin.$_$.b6;
  var isFinite = kotlin_kotlin.$_$.m6;
  var CompositeDecoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.v;
  var Decoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.x;
  var objectCreate = kotlin_kotlin.$_$.v4;
  var AbstractEncoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.u;
  var OBJECT_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.h;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.o6;
  var findPolymorphicSerializer_0 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.s1;
  var SerializationStrategy = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.q1;
  var Encoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.y;
  var CompositeEncoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.w;
  var Char__toInt_impl_vasixd = kotlin_kotlin.$_$.j1;
  var numberToChar = kotlin_kotlin.$_$.s4;
  var toString_1 = kotlin_kotlin.$_$.k1;
  var toByte = kotlin_kotlin.$_$.x4;
  var startsWith = kotlin_kotlin.$_$.o5;
  var NamedValueDecoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.f1;
  var emptySet = kotlin_kotlin.$_$.i2;
  var plus_0 = kotlin_kotlin.$_$.v2;
  var toInt = kotlin_kotlin.$_$.u5;
  var toList = kotlin_kotlin.$_$.z2;
  var enumEntries = kotlin_kotlin.$_$.t3;
  var getContextualDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.s;
  var last = kotlin_kotlin.$_$.s2;
  var removeLast = kotlin_kotlin.$_$.x2;
  var lastIndexOf = kotlin_kotlin.$_$.l5;
  var Long = kotlin_kotlin.$_$.c6;
  var Char__minus_impl_a2frrh = kotlin_kotlin.$_$.i1;
  var numberToLong = kotlin_kotlin.$_$.u4;
  var charArray = kotlin_kotlin.$_$.x3;
  var indexOf = kotlin_kotlin.$_$.i5;
  var indexOf_0 = kotlin_kotlin.$_$.j5;
  var StringBuilder_init_$Create$_0 = kotlin_kotlin.$_$.q;
  var HashMap_init_$Create$ = kotlin_kotlin.$_$.i;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(Json, 'Json');
  initMetadataForObject(Default, 'Default', VOID, Json);
  initMetadataForClass(JsonBuilder, 'JsonBuilder');
  initMetadataForClass(JsonImpl, 'JsonImpl', VOID, Json);
  initMetadataForClass(JsonClassDiscriminator, 'JsonClassDiscriminator');
  initMetadataForClass(JsonNames, 'JsonNames');
  initMetadataForClass(JsonConfiguration, 'JsonConfiguration');
  initMetadataForClass(ClassDiscriminatorMode, 'ClassDiscriminatorMode', VOID, Enum);
  initMetadataForCompanion(Companion);
  initMetadataForClass(JsonElement, 'JsonElement');
  initMetadataForCompanion(Companion_0);
  initMetadataForClass(JsonObject, 'JsonObject', VOID, JsonElement, [JsonElement, KtMap]);
  initMetadataForClass(JsonPrimitive, 'JsonPrimitive', VOID, JsonElement);
  initMetadataForObject(JsonNull, 'JsonNull', VOID, JsonPrimitive);
  initMetadataForCompanion(Companion_1);
  initMetadataForClass(JsonLiteral, 'JsonLiteral', VOID, JsonPrimitive);
  initMetadataForCompanion(Companion_2);
  initMetadataForClass(JsonArray, 'JsonArray', VOID, JsonElement, [JsonElement, KtList]);
  initMetadataForClass(Composer, 'Composer');
  initMetadataForClass(ComposerWithPrettyPrint, 'ComposerWithPrettyPrint', VOID, Composer);
  initMetadataForClass(JsonElementMarker, 'JsonElementMarker');
  initMetadataForClass(JsonException, 'JsonException', VOID, SerializationException);
  initMetadataForClass(JsonEncodingException, 'JsonEncodingException', VOID, JsonException);
  initMetadataForClass(JsonDecodingException, 'JsonDecodingException', VOID, JsonException);
  initMetadataForObject(Tombstone, 'Tombstone');
  initMetadataForClass(JsonPath, 'JsonPath', JsonPath);
  initMetadataForLambda(JsonTreeReader$readDeepRecursive$slambda, CoroutineImpl, VOID, [2]);
  initMetadataForCoroutine($readObjectCOROUTINE$0, CoroutineImpl);
  initMetadataForClass(JsonTreeReader, 'JsonTreeReader', VOID, VOID, VOID, [0]);
  initMetadataForClass(PolymorphismValidator, 'PolymorphismValidator', VOID, VOID, [SerializersModuleCollector]);
  initMetadataForClass(Key, 'Key', Key);
  initMetadataForClass(DescriptorSchemaCache, 'DescriptorSchemaCache', DescriptorSchemaCache);
  initMetadataForClass(DiscriminatorHolder, 'DiscriminatorHolder');
  initMetadataForClass(StreamingJsonDecoder, 'StreamingJsonDecoder', VOID, AbstractDecoder, [CompositeDecoder, Decoder, AbstractDecoder]);
  initMetadataForClass(StreamingJsonEncoder, 'StreamingJsonEncoder', VOID, AbstractEncoder, [Encoder, CompositeEncoder, AbstractEncoder]);
  initMetadataForClass(AbstractJsonTreeDecoder, 'AbstractJsonTreeDecoder', VOID, NamedValueDecoder, [NamedValueDecoder, CompositeDecoder, Decoder]);
  initMetadataForClass(JsonTreeDecoder, 'JsonTreeDecoder', VOID, AbstractJsonTreeDecoder);
  initMetadataForClass(JsonTreeListDecoder, 'JsonTreeListDecoder', VOID, AbstractJsonTreeDecoder);
  initMetadataForClass(JsonTreeMapDecoder, 'JsonTreeMapDecoder', VOID, JsonTreeDecoder);
  initMetadataForClass(WriteMode, 'WriteMode', VOID, Enum);
  initMetadataForClass(AbstractJsonLexer, 'AbstractJsonLexer');
  initMetadataForObject(CharMappings, 'CharMappings');
  initMetadataForClass(StringJsonLexer, 'StringJsonLexer', VOID, AbstractJsonLexer);
  initMetadataForClass(StringJsonLexerWithComments, 'StringJsonLexerWithComments', VOID, StringJsonLexer);
  initMetadataForClass(JsonToStringWriter, 'JsonToStringWriter', JsonToStringWriter);
  //endregion
  function Default() {
    Default_instance = this;
    Json.call(this, new JsonConfiguration(), EmptySerializersModule());
  }
  var Default_instance;
  function Default_getInstance() {
    if (Default_instance == null)
      new Default();
    return Default_instance;
  }
  function Json(configuration, serializersModule) {
    Default_getInstance();
    this.nj_1 = configuration;
    this.oj_1 = serializersModule;
    this.pj_1 = new DescriptorSchemaCache();
  }
  protoOf(Json).le = function () {
    return this.oj_1;
  };
  protoOf(Json).qj = function (serializer, value) {
    var result = new JsonToStringWriter();
    try {
      encodeByWriter(this, result, serializer, value);
      return result.toString();
    }finally {
      result.tj();
    }
  };
  protoOf(Json).rj = function (deserializer, string) {
    var lexer = StringJsonLexer_0(this, string);
    var input = new StreamingJsonDecoder(this, WriteMode_OBJ_getInstance(), lexer, deserializer.uc(), null);
    var result = input.ce(deserializer);
    lexer.gk();
    return result;
  };
  function Json_0(from, builderAction) {
    from = from === VOID ? Default_getInstance() : from;
    var builder = new JsonBuilder(from);
    builderAction(builder);
    var conf = builder.zk();
    return new JsonImpl(conf, builder.yk_1);
  }
  function JsonBuilder(json) {
    this.hk_1 = json.nj_1.al_1;
    this.ik_1 = json.nj_1.fl_1;
    this.jk_1 = json.nj_1.bl_1;
    this.kk_1 = json.nj_1.cl_1;
    this.lk_1 = json.nj_1.el_1;
    this.mk_1 = json.nj_1.gl_1;
    this.nk_1 = json.nj_1.hl_1;
    this.ok_1 = json.nj_1.jl_1;
    this.pk_1 = json.nj_1.ql_1;
    this.qk_1 = json.nj_1.ll_1;
    this.rk_1 = json.nj_1.ml_1;
    this.sk_1 = json.nj_1.nl_1;
    this.tk_1 = json.nj_1.ol_1;
    this.uk_1 = json.nj_1.pl_1;
    this.vk_1 = json.nj_1.kl_1;
    this.wk_1 = json.nj_1.dl_1;
    this.xk_1 = json.nj_1.il_1;
    this.yk_1 = json.le();
  }
  protoOf(JsonBuilder).zk = function () {
    if (this.xk_1) {
      // Inline function 'kotlin.require' call
      if (!(this.ok_1 === 'type')) {
        // Inline function 'kotlinx.serialization.json.JsonBuilder.build.<anonymous>' call
        var message = 'Class discriminator should not be specified when array polymorphism is specified';
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
      // Inline function 'kotlin.require' call
      if (!this.pk_1.equals(ClassDiscriminatorMode_POLYMORPHIC_getInstance())) {
        // Inline function 'kotlinx.serialization.json.JsonBuilder.build.<anonymous>' call
        var message_0 = 'useArrayPolymorphism option can only be used if classDiscriminatorMode in a default POLYMORPHIC state.';
        throw IllegalArgumentException_init_$Create$(toString(message_0));
      }
    }
    if (!this.lk_1) {
      // Inline function 'kotlin.require' call
      if (!(this.mk_1 === '    ')) {
        // Inline function 'kotlinx.serialization.json.JsonBuilder.build.<anonymous>' call
        var message_1 = 'Indent should not be specified when default printing mode is used';
        throw IllegalArgumentException_init_$Create$(toString(message_1));
      }
    } else if (!(this.mk_1 === '    ')) {
      var tmp3 = this.mk_1;
      var tmp$ret$4;
      $l$block: {
        // Inline function 'kotlin.text.all' call
        var inductionVariable = 0;
        while (inductionVariable < charSequenceLength(tmp3)) {
          var element = charSequenceGet(tmp3, inductionVariable);
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'kotlinx.serialization.json.JsonBuilder.build.<anonymous>' call
          if (!(element === _Char___init__impl__6a9atx(32) || element === _Char___init__impl__6a9atx(9) || element === _Char___init__impl__6a9atx(13) || element === _Char___init__impl__6a9atx(10))) {
            tmp$ret$4 = false;
            break $l$block;
          }
        }
        tmp$ret$4 = true;
      }
      var allWhitespaces = tmp$ret$4;
      // Inline function 'kotlin.require' call
      if (!allWhitespaces) {
        // Inline function 'kotlinx.serialization.json.JsonBuilder.build.<anonymous>' call
        var message_2 = 'Only whitespace, tab, newline and carriage return are allowed as pretty print symbols. Had ' + this.mk_1;
        throw IllegalArgumentException_init_$Create$(toString(message_2));
      }
    }
    return new JsonConfiguration(this.hk_1, this.jk_1, this.kk_1, this.wk_1, this.lk_1, this.ik_1, this.mk_1, this.nk_1, this.xk_1, this.ok_1, this.vk_1, this.qk_1, this.rk_1, this.sk_1, this.tk_1, this.uk_1, this.pk_1);
  };
  function validateConfiguration($this) {
    if (equals($this.le(), EmptySerializersModule()))
      return Unit_instance;
    var collector = new PolymorphismValidator($this.nj_1.il_1, $this.nj_1.jl_1);
    $this.le().yi(collector);
  }
  function JsonImpl(configuration, module_0) {
    Json.call(this, configuration, module_0);
    validateConfiguration(this);
  }
  function JsonClassDiscriminator() {
  }
  function JsonNames() {
  }
  function JsonConfiguration(encodeDefaults, ignoreUnknownKeys, isLenient, allowStructuredMapKeys, prettyPrint, explicitNulls, prettyPrintIndent, coerceInputValues, useArrayPolymorphism, classDiscriminator, allowSpecialFloatingPointValues, useAlternativeNames, namingStrategy, decodeEnumsCaseInsensitive, allowTrailingComma, allowComments, classDiscriminatorMode) {
    encodeDefaults = encodeDefaults === VOID ? false : encodeDefaults;
    ignoreUnknownKeys = ignoreUnknownKeys === VOID ? false : ignoreUnknownKeys;
    isLenient = isLenient === VOID ? false : isLenient;
    allowStructuredMapKeys = allowStructuredMapKeys === VOID ? false : allowStructuredMapKeys;
    prettyPrint = prettyPrint === VOID ? false : prettyPrint;
    explicitNulls = explicitNulls === VOID ? true : explicitNulls;
    prettyPrintIndent = prettyPrintIndent === VOID ? '    ' : prettyPrintIndent;
    coerceInputValues = coerceInputValues === VOID ? false : coerceInputValues;
    useArrayPolymorphism = useArrayPolymorphism === VOID ? false : useArrayPolymorphism;
    classDiscriminator = classDiscriminator === VOID ? 'type' : classDiscriminator;
    allowSpecialFloatingPointValues = allowSpecialFloatingPointValues === VOID ? false : allowSpecialFloatingPointValues;
    useAlternativeNames = useAlternativeNames === VOID ? true : useAlternativeNames;
    namingStrategy = namingStrategy === VOID ? null : namingStrategy;
    decodeEnumsCaseInsensitive = decodeEnumsCaseInsensitive === VOID ? false : decodeEnumsCaseInsensitive;
    allowTrailingComma = allowTrailingComma === VOID ? false : allowTrailingComma;
    allowComments = allowComments === VOID ? false : allowComments;
    classDiscriminatorMode = classDiscriminatorMode === VOID ? ClassDiscriminatorMode_POLYMORPHIC_getInstance() : classDiscriminatorMode;
    this.al_1 = encodeDefaults;
    this.bl_1 = ignoreUnknownKeys;
    this.cl_1 = isLenient;
    this.dl_1 = allowStructuredMapKeys;
    this.el_1 = prettyPrint;
    this.fl_1 = explicitNulls;
    this.gl_1 = prettyPrintIndent;
    this.hl_1 = coerceInputValues;
    this.il_1 = useArrayPolymorphism;
    this.jl_1 = classDiscriminator;
    this.kl_1 = allowSpecialFloatingPointValues;
    this.ll_1 = useAlternativeNames;
    this.ml_1 = namingStrategy;
    this.nl_1 = decodeEnumsCaseInsensitive;
    this.ol_1 = allowTrailingComma;
    this.pl_1 = allowComments;
    this.ql_1 = classDiscriminatorMode;
  }
  protoOf(JsonConfiguration).toString = function () {
    return 'JsonConfiguration(encodeDefaults=' + this.al_1 + ', ignoreUnknownKeys=' + this.bl_1 + ', isLenient=' + this.cl_1 + ', ' + ('allowStructuredMapKeys=' + this.dl_1 + ', prettyPrint=' + this.el_1 + ', explicitNulls=' + this.fl_1 + ', ') + ("prettyPrintIndent='" + this.gl_1 + "', coerceInputValues=" + this.hl_1 + ', useArrayPolymorphism=' + this.il_1 + ', ') + ("classDiscriminator='" + this.jl_1 + "', allowSpecialFloatingPointValues=" + this.kl_1 + ', ') + ('useAlternativeNames=' + this.ll_1 + ', namingStrategy=' + toString_0(this.ml_1) + ', decodeEnumsCaseInsensitive=' + this.nl_1 + ', ') + ('allowTrailingComma=' + this.ol_1 + ', allowComments=' + this.pl_1 + ', classDiscriminatorMode=' + this.ql_1.toString() + ')');
  };
  var ClassDiscriminatorMode_NONE_instance;
  var ClassDiscriminatorMode_ALL_JSON_OBJECTS_instance;
  var ClassDiscriminatorMode_POLYMORPHIC_instance;
  var ClassDiscriminatorMode_entriesInitialized;
  function ClassDiscriminatorMode_initEntries() {
    if (ClassDiscriminatorMode_entriesInitialized)
      return Unit_instance;
    ClassDiscriminatorMode_entriesInitialized = true;
    ClassDiscriminatorMode_NONE_instance = new ClassDiscriminatorMode('NONE', 0);
    ClassDiscriminatorMode_ALL_JSON_OBJECTS_instance = new ClassDiscriminatorMode('ALL_JSON_OBJECTS', 1);
    ClassDiscriminatorMode_POLYMORPHIC_instance = new ClassDiscriminatorMode('POLYMORPHIC', 2);
  }
  function ClassDiscriminatorMode(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function ClassDiscriminatorMode_NONE_getInstance() {
    ClassDiscriminatorMode_initEntries();
    return ClassDiscriminatorMode_NONE_instance;
  }
  function ClassDiscriminatorMode_POLYMORPHIC_getInstance() {
    ClassDiscriminatorMode_initEntries();
    return ClassDiscriminatorMode_POLYMORPHIC_instance;
  }
  var jsonUnquotedLiteralDescriptor;
  function Companion() {
  }
  var Companion_instance;
  function Companion_getInstance() {
    return Companion_instance;
  }
  function JsonElement() {
  }
  function Companion_0() {
  }
  var Companion_instance_0;
  function Companion_getInstance_0() {
    return Companion_instance_0;
  }
  function JsonObject$toString$lambda(_destruct__k2r9zo) {
    // Inline function 'kotlin.collections.component1' call
    var k = _destruct__k2r9zo.a1();
    // Inline function 'kotlin.collections.component2' call
    var v = _destruct__k2r9zo.b1();
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    // Inline function 'kotlinx.serialization.json.JsonObject.toString.<anonymous>.<anonymous>' call
    printQuoted(this_0, k);
    this_0.y5(_Char___init__impl__6a9atx(58));
    this_0.w5(v);
    return this_0.toString();
  }
  function JsonObject(content) {
    JsonElement.call(this);
    this.rl_1 = content;
  }
  protoOf(JsonObject).equals = function (other) {
    return equals(this.rl_1, other);
  };
  protoOf(JsonObject).hashCode = function () {
    return hashCode(this.rl_1);
  };
  protoOf(JsonObject).toString = function () {
    var tmp = this.rl_1.f1();
    return joinToString(tmp, ',', '{', '}', VOID, VOID, JsonObject$toString$lambda);
  };
  protoOf(JsonObject).sl = function (key) {
    return this.rl_1.c1(key);
  };
  protoOf(JsonObject).c1 = function (key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return false;
    return this.sl((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  };
  protoOf(JsonObject).tl = function (key) {
    return this.rl_1.d1(key);
  };
  protoOf(JsonObject).d1 = function (key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return null;
    return this.tl((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  };
  protoOf(JsonObject).o = function () {
    return this.rl_1.o();
  };
  protoOf(JsonObject).f1 = function () {
    return this.rl_1.f1();
  };
  protoOf(JsonObject).e1 = function () {
    return this.rl_1.e1();
  };
  protoOf(JsonObject).i = function () {
    return this.rl_1.i();
  };
  function JsonNull() {
    JsonNull_instance = this;
    JsonPrimitive.call(this);
    this.ul_1 = 'null';
  }
  protoOf(JsonNull).vl = function () {
    return this.ul_1;
  };
  var JsonNull_instance;
  function JsonNull_getInstance() {
    if (JsonNull_instance == null)
      new JsonNull();
    return JsonNull_instance;
  }
  function Companion_1() {
  }
  var Companion_instance_1;
  function Companion_getInstance_1() {
    return Companion_instance_1;
  }
  function JsonPrimitive() {
    JsonElement.call(this);
  }
  protoOf(JsonPrimitive).toString = function () {
    return this.vl();
  };
  function JsonPrimitive_0(value) {
    _init_properties_JsonElement_kt__7cbdc2();
    if (value == null)
      return JsonNull_getInstance();
    return new JsonLiteral(value, true);
  }
  function JsonLiteral(body, isString, coerceToInlineType) {
    coerceToInlineType = coerceToInlineType === VOID ? null : coerceToInlineType;
    JsonPrimitive.call(this);
    this.wl_1 = isString;
    this.xl_1 = coerceToInlineType;
    this.yl_1 = toString(body);
    if (!(this.xl_1 == null)) {
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.require' call
      if (!this.xl_1.kd()) {
        // Inline function 'kotlin.require.<anonymous>' call
        var message = 'Failed requirement.';
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
    }
  }
  protoOf(JsonLiteral).vl = function () {
    return this.yl_1;
  };
  protoOf(JsonLiteral).toString = function () {
    var tmp;
    if (this.wl_1) {
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.apply' call
      var this_0 = StringBuilder_init_$Create$();
      // Inline function 'kotlinx.serialization.json.JsonLiteral.toString.<anonymous>' call
      printQuoted(this_0, this.yl_1);
      tmp = this_0.toString();
    } else {
      tmp = this.yl_1;
    }
    return tmp;
  };
  protoOf(JsonLiteral).equals = function (other) {
    if (this === other)
      return true;
    if (other == null || !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!(other instanceof JsonLiteral))
      THROW_CCE();
    if (!(this.wl_1 === other.wl_1))
      return false;
    if (!(this.yl_1 === other.yl_1))
      return false;
    return true;
  };
  protoOf(JsonLiteral).hashCode = function () {
    var result = getBooleanHashCode(this.wl_1);
    result = imul(31, result) + getStringHashCode(this.yl_1) | 0;
    return result;
  };
  function Companion_2() {
  }
  var Companion_instance_2;
  function Companion_getInstance_2() {
    return Companion_instance_2;
  }
  function JsonArray(content) {
    JsonElement.call(this);
    this.zl_1 = content;
  }
  protoOf(JsonArray).equals = function (other) {
    return equals(this.zl_1, other);
  };
  protoOf(JsonArray).hashCode = function () {
    return hashCode(this.zl_1);
  };
  protoOf(JsonArray).toString = function () {
    return joinToString(this.zl_1, ',', '[', ']');
  };
  protoOf(JsonArray).h = function (index) {
    return this.zl_1.h(index);
  };
  protoOf(JsonArray).o = function () {
    return this.zl_1.o();
  };
  protoOf(JsonArray).e = function () {
    return this.zl_1.e();
  };
  protoOf(JsonArray).j = function (index) {
    return this.zl_1.j(index);
  };
  protoOf(JsonArray).i = function () {
    return this.zl_1.i();
  };
  function get_int(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    // Inline function 'kotlinx.serialization.json.mapExceptions' call
    var tmp;
    try {
      // Inline function 'kotlinx.serialization.json.<get-int>.<anonymous>' call
      tmp = (new StringJsonLexer(_this__u8e3s4.vl())).am();
    } catch ($p) {
      var tmp_0;
      if ($p instanceof JsonDecodingException) {
        var e = $p;
        throw NumberFormatException_init_$Create$(e.message);
      } else {
        throw $p;
      }
    }
    var result = tmp;
    // Inline function 'kotlin.ranges.contains' call
    var this_0 = numberRangeToNumber(-2147483648, 2147483647);
    if (!contains(isInterface(this_0, ClosedRange) ? this_0 : THROW_CCE(), result))
      throw NumberFormatException_init_$Create$(_this__u8e3s4.vl() + ' is not an Int');
    return result.u();
  }
  function get_double(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    return toDouble(_this__u8e3s4.vl());
  }
  function get_contentOrNull(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    var tmp;
    if (_this__u8e3s4 instanceof JsonNull) {
      tmp = null;
    } else {
      tmp = _this__u8e3s4.vl();
    }
    return tmp;
  }
  function get_jsonPrimitive(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof JsonPrimitive ? _this__u8e3s4 : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      error(_this__u8e3s4, 'JsonPrimitive');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function error(_this__u8e3s4, element) {
    _init_properties_JsonElement_kt__7cbdc2();
    throw IllegalArgumentException_init_$Create$('Element ' + toString(getKClassFromExpression(_this__u8e3s4)) + ' is not a ' + element);
  }
  var properties_initialized_JsonElement_kt_abxy8s;
  function _init_properties_JsonElement_kt__7cbdc2() {
    if (!properties_initialized_JsonElement_kt_abxy8s) {
      properties_initialized_JsonElement_kt_abxy8s = true;
      jsonUnquotedLiteralDescriptor = InlinePrimitiveDescriptor('kotlinx.serialization.json.JsonUnquotedLiteral', serializer(StringCompanionObject_instance));
    }
  }
  function Composer(writer) {
    this.bm_1 = writer;
    this.cm_1 = true;
  }
  protoOf(Composer).dm = function () {
    this.cm_1 = true;
  };
  protoOf(Composer).em = function () {
    return Unit_instance;
  };
  protoOf(Composer).fm = function () {
    this.cm_1 = false;
  };
  protoOf(Composer).gm = function () {
    this.cm_1 = false;
  };
  protoOf(Composer).hm = function () {
    return Unit_instance;
  };
  protoOf(Composer).im = function (v) {
    return this.bm_1.jm(v);
  };
  protoOf(Composer).km = function (v) {
    return this.bm_1.lm(v);
  };
  protoOf(Composer).mm = function (v) {
    return this.bm_1.lm(v.toString());
  };
  protoOf(Composer).nm = function (v) {
    return this.bm_1.om(toLong(v));
  };
  protoOf(Composer).pm = function (value) {
    return this.bm_1.qm(value);
  };
  function Composer_0(sb, json) {
    return json.nj_1.el_1 ? new ComposerWithPrettyPrint(sb, json) : new Composer(sb);
  }
  function ComposerWithPrettyPrint(writer, json) {
    Composer.call(this, writer);
    this.tm_1 = json;
    this.um_1 = 0;
  }
  protoOf(ComposerWithPrettyPrint).dm = function () {
    this.cm_1 = true;
    this.um_1 = this.um_1 + 1 | 0;
  };
  protoOf(ComposerWithPrettyPrint).em = function () {
    this.um_1 = this.um_1 - 1 | 0;
  };
  protoOf(ComposerWithPrettyPrint).fm = function () {
    this.cm_1 = false;
    this.km('\n');
    // Inline function 'kotlin.repeat' call
    var times = this.um_1;
    var inductionVariable = 0;
    if (inductionVariable < times)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlinx.serialization.json.internal.ComposerWithPrettyPrint.nextItem.<anonymous>' call
        this.km(this.tm_1.nj_1.gl_1);
      }
       while (inductionVariable < times);
  };
  protoOf(ComposerWithPrettyPrint).gm = function () {
    if (this.cm_1)
      this.cm_1 = false;
    else {
      this.fm();
    }
  };
  protoOf(ComposerWithPrettyPrint).hm = function () {
    this.im(_Char___init__impl__6a9atx(32));
  };
  function readIfAbsent($this, descriptor, index) {
    $this.wm_1 = (!descriptor.rd(index) && descriptor.qd(index).cd());
    return $this.wm_1;
  }
  function JsonElementMarker$readIfAbsent$ref($boundThis) {
    var l = function (p0, p1) {
      return readIfAbsent($boundThis, p0, p1);
    };
    l.callableName = 'readIfAbsent';
    return l;
  }
  function JsonElementMarker(descriptor) {
    var tmp = this;
    tmp.vm_1 = new ElementMarker(descriptor, JsonElementMarker$readIfAbsent$ref(this));
    this.wm_1 = false;
  }
  protoOf(JsonElementMarker).xm = function (index) {
    this.vm_1.pg(index);
  };
  protoOf(JsonElementMarker).ym = function () {
    return this.vm_1.qg();
  };
  function invalidTrailingComma(_this__u8e3s4, entity) {
    entity = entity === VOID ? 'object' : entity;
    _this__u8e3s4.zm('Trailing comma before the end of JSON ' + entity, _this__u8e3s4.ck_1 - 1 | 0, "Trailing commas are non-complaint JSON and not allowed by default. Use 'allowTrailingCommas = true' in 'Json {}' builder to support them.");
  }
  function throwInvalidFloatingPointDecoded(_this__u8e3s4, result) {
    _this__u8e3s4.an('Unexpected special floating-point value ' + toString(result) + '. By default, ' + 'non-finite floating point values are prohibited because they do not conform JSON specification', VOID, "It is possible to deserialize them using 'JsonBuilder.allowSpecialFloatingPointValues = true'");
  }
  function JsonEncodingException(message) {
    JsonException.call(this, message);
    captureStack(this, JsonEncodingException);
  }
  function InvalidKeyKindException(keyDescriptor) {
    return new JsonEncodingException("Value of type '" + keyDescriptor.id() + "' can't be used in JSON as a key in the map. " + ("It should have either primitive or enum kind, but its kind is '" + keyDescriptor.jd().toString() + "'.\n") + "Use 'allowStructuredMapKeys = true' in 'Json {}' builder to convert such maps to [key1, value1, key2, value2,...] arrays.");
  }
  function JsonDecodingException(message) {
    JsonException.call(this, message);
    captureStack(this, JsonDecodingException);
  }
  function JsonDecodingException_0(offset, message, input) {
    return JsonDecodingException_1(offset, message + '\nJSON input: ' + toString(minify(input, offset)));
  }
  function InvalidFloatingPointDecoded(value, key, output) {
    return JsonDecodingException_1(-1, unexpectedFpErrorMessage(value, key, output));
  }
  function UnknownKeyException(key, input) {
    return JsonDecodingException_1(-1, "Encountered an unknown key '" + key + "'.\n" + "Use 'ignoreUnknownKeys = true' in 'Json {}' builder to ignore unknown keys.\n" + ('Current input: ' + toString(minify(input))));
  }
  function InvalidFloatingPointEncoded(value, output) {
    return new JsonEncodingException('Unexpected special floating-point value ' + toString(value) + '. By default, ' + 'non-finite floating point values are prohibited because they do not conform JSON specification. ' + "It is possible to deserialize them using 'JsonBuilder.allowSpecialFloatingPointValues = true'\n" + ('Current output: ' + toString(minify(output))));
  }
  function JsonException(message) {
    SerializationException_init_$Init$(message, this);
    captureStack(this, JsonException);
  }
  function unexpectedFpErrorMessage(value, key, output) {
    return 'Unexpected special floating-point value ' + toString(value) + ' with key ' + key + '. By default, ' + 'non-finite floating point values are prohibited because they do not conform JSON specification. ' + "It is possible to deserialize them using 'JsonBuilder.allowSpecialFloatingPointValues = true'\n" + ('Current output: ' + toString(minify(output)));
  }
  function JsonDecodingException_1(offset, message) {
    return new JsonDecodingException(offset >= 0 ? 'Unexpected JSON token at offset ' + offset + ': ' + message : message);
  }
  function minify(_this__u8e3s4, offset) {
    offset = offset === VOID ? -1 : offset;
    if (charSequenceLength(_this__u8e3s4) < 200)
      return _this__u8e3s4;
    if (offset === -1) {
      var start = charSequenceLength(_this__u8e3s4) - 60 | 0;
      if (start <= 0)
        return _this__u8e3s4;
      // Inline function 'kotlin.text.substring' call
      var endIndex = charSequenceLength(_this__u8e3s4);
      return '.....' + toString(charSequenceSubSequence(_this__u8e3s4, start, endIndex));
    }
    var start_0 = offset - 30 | 0;
    var end = offset + 30 | 0;
    var prefix = start_0 <= 0 ? '' : '.....';
    var suffix = end >= charSequenceLength(_this__u8e3s4) ? '' : '.....';
    var tmp4 = coerceAtLeast(start_0, 0);
    // Inline function 'kotlin.text.substring' call
    var endIndex_0 = coerceAtMost(end, charSequenceLength(_this__u8e3s4));
    return prefix + toString(charSequenceSubSequence(_this__u8e3s4, tmp4, endIndex_0)) + suffix;
  }
  function get_JsonDeserializationNamesKey() {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    return JsonDeserializationNamesKey;
  }
  var JsonDeserializationNamesKey;
  function get_JsonSerializationNamesKey() {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    return JsonSerializationNamesKey;
  }
  var JsonSerializationNamesKey;
  function getJsonNameIndex(_this__u8e3s4, json, name) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    if (decodeCaseInsensitive(json, _this__u8e3s4)) {
      // Inline function 'kotlin.text.lowercase' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$1 = name.toLowerCase();
      return getJsonNameIndexSlowPath(_this__u8e3s4, json, tmp$ret$1);
    }
    var strategy = namingStrategy(_this__u8e3s4, json);
    if (!(strategy == null))
      return getJsonNameIndexSlowPath(_this__u8e3s4, json, name);
    var index = _this__u8e3s4.od(name);
    if (!(index === -3))
      return index;
    if (!json.nj_1.ll_1)
      return index;
    return getJsonNameIndexSlowPath(_this__u8e3s4, json, name);
  }
  function getJsonElementName(_this__u8e3s4, json, index) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    var strategy = namingStrategy(_this__u8e3s4, json);
    return strategy == null ? _this__u8e3s4.nd(index) : serializationNamesIndices(_this__u8e3s4, json, strategy)[index];
  }
  function namingStrategy(_this__u8e3s4, json) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    return equals(_this__u8e3s4.jd(), CLASS_getInstance()) ? json.nj_1.ml_1 : null;
  }
  function deserializationNamesMap(_this__u8e3s4, descriptor) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    var tmp = get_schemaCache(_this__u8e3s4);
    var tmp_0 = get_JsonDeserializationNamesKey();
    return tmp.cn(descriptor, tmp_0, deserializationNamesMap$lambda(descriptor, _this__u8e3s4));
  }
  function decodeCaseInsensitive(_this__u8e3s4, descriptor) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    return _this__u8e3s4.nj_1.nl_1 && equals(descriptor.jd(), ENUM_getInstance());
  }
  function getJsonNameIndexSlowPath(_this__u8e3s4, json, name) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    var tmp0_elvis_lhs = deserializationNamesMap(json, _this__u8e3s4).d1(name);
    return tmp0_elvis_lhs == null ? -3 : tmp0_elvis_lhs;
  }
  function serializationNamesIndices(_this__u8e3s4, json, strategy) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    var tmp = get_schemaCache(json);
    var tmp_0 = get_JsonSerializationNamesKey();
    return tmp.cn(_this__u8e3s4, tmp_0, serializationNamesIndices$lambda(_this__u8e3s4, strategy));
  }
  function buildDeserializationNamesMap(_this__u8e3s4, json) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    // Inline function 'kotlin.collections.mutableMapOf' call
    var builder = LinkedHashMap_init_$Create$();
    var useLowercaseEnums = decodeCaseInsensitive(json, _this__u8e3s4);
    var strategyForClasses = namingStrategy(_this__u8e3s4, json);
    var inductionVariable = 0;
    var last = _this__u8e3s4.ld();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.collections.filterIsInstance' call
        var tmp0 = _this__u8e3s4.pd(i);
        // Inline function 'kotlin.collections.filterIsInstanceTo' call
        var destination = ArrayList_init_$Create$();
        var _iterator__ex2g4s = tmp0.e();
        while (_iterator__ex2g4s.f()) {
          var element = _iterator__ex2g4s.g();
          if (element instanceof JsonNames) {
            destination.n(element);
          }
        }
        var tmp0_safe_receiver = singleOrNull(destination);
        var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.dn_1;
        if (tmp1_safe_receiver == null)
          null;
        else {
          // Inline function 'kotlin.collections.forEach' call
          var inductionVariable_0 = 0;
          var last_0 = tmp1_safe_receiver.length;
          while (inductionVariable_0 < last_0) {
            var element_0 = tmp1_safe_receiver[inductionVariable_0];
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            // Inline function 'kotlinx.serialization.json.internal.buildDeserializationNamesMap.<anonymous>' call
            var tmp;
            if (useLowercaseEnums) {
              // Inline function 'kotlin.text.lowercase' call
              // Inline function 'kotlin.js.asDynamic' call
              tmp = element_0.toLowerCase();
            } else {
              tmp = element_0;
            }
            buildDeserializationNamesMap$putOrThrow(builder, _this__u8e3s4, tmp, i);
          }
        }
        var tmp_0;
        if (useLowercaseEnums) {
          // Inline function 'kotlin.text.lowercase' call
          // Inline function 'kotlin.js.asDynamic' call
          tmp_0 = _this__u8e3s4.nd(i).toLowerCase();
        } else if (!(strategyForClasses == null)) {
          tmp_0 = strategyForClasses.en(_this__u8e3s4, i, _this__u8e3s4.nd(i));
        } else {
          tmp_0 = null;
        }
        var nameToPut = tmp_0;
        if (nameToPut == null)
          null;
        else {
          // Inline function 'kotlin.let' call
          // Inline function 'kotlinx.serialization.json.internal.buildDeserializationNamesMap.<anonymous>' call
          buildDeserializationNamesMap$putOrThrow(builder, _this__u8e3s4, nameToPut, i);
        }
      }
       while (inductionVariable < last);
    // Inline function 'kotlin.collections.ifEmpty' call
    var tmp_1;
    if (builder.o()) {
      // Inline function 'kotlinx.serialization.json.internal.buildDeserializationNamesMap.<anonymous>' call
      tmp_1 = emptyMap();
    } else {
      tmp_1 = builder;
    }
    return tmp_1;
  }
  function buildDeserializationNamesMap$putOrThrow(_this__u8e3s4, $this_buildDeserializationNamesMap, name, index) {
    var entity = equals($this_buildDeserializationNamesMap.jd(), ENUM_getInstance()) ? 'enum value' : 'property';
    // Inline function 'kotlin.collections.contains' call
    // Inline function 'kotlin.collections.containsKey' call
    if ((isInterface(_this__u8e3s4, KtMap) ? _this__u8e3s4 : THROW_CCE()).c1(name)) {
      throw new JsonException("The suggested name '" + name + "' for " + entity + ' ' + $this_buildDeserializationNamesMap.nd(index) + ' is already one of the names for ' + entity + ' ' + ($this_buildDeserializationNamesMap.nd(getValue(_this__u8e3s4, name)) + ' in ' + toString($this_buildDeserializationNamesMap)));
    }
    // Inline function 'kotlin.collections.set' call
    _this__u8e3s4.j3(name, index);
  }
  function deserializationNamesMap$lambda($descriptor, $this_deserializationNamesMap) {
    return function () {
      return buildDeserializationNamesMap($descriptor, $this_deserializationNamesMap);
    };
  }
  function serializationNamesIndices$lambda($this_serializationNamesIndices, $strategy) {
    return function () {
      var tmp = 0;
      var tmp_0 = $this_serializationNamesIndices.ld();
      // Inline function 'kotlin.arrayOfNulls' call
      var tmp_1 = fillArrayVal(Array(tmp_0), null);
      while (tmp < tmp_0) {
        var tmp_2 = tmp;
        var baseName = $this_serializationNamesIndices.nd(tmp_2);
        tmp_1[tmp_2] = $strategy.en($this_serializationNamesIndices, tmp_2, baseName);
        tmp = tmp + 1 | 0;
      }
      return tmp_1;
    };
  }
  var properties_initialized_JsonNamesMap_kt_ljpf42;
  function _init_properties_JsonNamesMap_kt__cbbp0k() {
    if (!properties_initialized_JsonNamesMap_kt_ljpf42) {
      properties_initialized_JsonNamesMap_kt_ljpf42 = true;
      JsonDeserializationNamesKey = new Key();
      JsonSerializationNamesKey = new Key();
    }
  }
  function Tombstone() {
  }
  var Tombstone_instance;
  function Tombstone_getInstance() {
    return Tombstone_instance;
  }
  function resize($this) {
    var newSize = imul($this.hn_1, 2);
    $this.fn_1 = copyOf($this.fn_1, newSize);
    $this.gn_1 = copyOf_0($this.gn_1, newSize);
  }
  function JsonPath() {
    var tmp = this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp.fn_1 = fillArrayVal(Array(8), null);
    var tmp_0 = this;
    var tmp_1 = 0;
    var tmp_2 = new Int32Array(8);
    while (tmp_1 < 8) {
      tmp_2[tmp_1] = -1;
      tmp_1 = tmp_1 + 1 | 0;
    }
    tmp_0.gn_1 = tmp_2;
    this.hn_1 = -1;
  }
  protoOf(JsonPath).in = function (sd) {
    this.hn_1 = this.hn_1 + 1 | 0;
    var depth = this.hn_1;
    if (depth === this.fn_1.length) {
      resize(this);
    }
    this.fn_1[depth] = sd;
  };
  protoOf(JsonPath).jn = function (index) {
    this.gn_1[this.hn_1] = index;
  };
  protoOf(JsonPath).kn = function (key) {
    var tmp;
    if (!(this.gn_1[this.hn_1] === -2)) {
      this.hn_1 = this.hn_1 + 1 | 0;
      tmp = this.hn_1 === this.fn_1.length;
    } else {
      tmp = false;
    }
    if (tmp) {
      resize(this);
    }
    this.fn_1[this.hn_1] = key;
    this.gn_1[this.hn_1] = -2;
  };
  protoOf(JsonPath).ln = function () {
    if (this.gn_1[this.hn_1] === -2) {
      this.fn_1[this.hn_1] = Tombstone_instance;
    }
  };
  protoOf(JsonPath).mn = function () {
    var depth = this.hn_1;
    if (this.gn_1[depth] === -2) {
      this.gn_1[depth] = -1;
      this.hn_1 = this.hn_1 - 1 | 0;
    }
    if (!(this.hn_1 === -1)) {
      this.hn_1 = this.hn_1 - 1 | 0;
    }
  };
  protoOf(JsonPath).nn = function () {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    // Inline function 'kotlinx.serialization.json.internal.JsonPath.getPath.<anonymous>' call
    this_0.x5('$');
    // Inline function 'kotlin.repeat' call
    var times = this.hn_1 + 1 | 0;
    var inductionVariable = 0;
    if (inductionVariable < times)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlinx.serialization.json.internal.JsonPath.getPath.<anonymous>.<anonymous>' call
        var element = this.fn_1[index];
        if (!(element == null) ? isInterface(element, SerialDescriptor) : false) {
          if (equals(element.jd(), LIST_getInstance())) {
            if (!(this.gn_1[index] === -1)) {
              this_0.x5('[');
              this_0.h9(this.gn_1[index]);
              this_0.x5(']');
            }
          } else {
            var idx = this.gn_1[index];
            if (idx >= 0) {
              this_0.x5('.');
              this_0.x5(element.nd(idx));
            }
          }
        } else {
          if (!(element === Tombstone_instance)) {
            this_0.x5('[');
            this_0.x5("'");
            this_0.w5(element);
            this_0.x5("'");
            this_0.x5(']');
          }
        }
      }
       while (inductionVariable < times);
    return this_0.toString();
  };
  protoOf(JsonPath).toString = function () {
    return this.nn();
  };
  function encodeByWriter(json, writer, serializer, value) {
    var tmp = WriteMode_OBJ_getInstance();
    // Inline function 'kotlin.arrayOfNulls' call
    var size = get_entries().i();
    var tmp$ret$0 = fillArrayVal(Array(size), null);
    var encoder = StreamingJsonEncoder_init_$Create$(writer, json, tmp, tmp$ret$0);
    encoder.ze(serializer, value);
  }
  function readObject($this) {
    // Inline function 'kotlinx.serialization.json.internal.JsonTreeReader.readObjectImpl' call
    var lastToken = $this.xn_1.bo(6);
    if ($this.xn_1.co() === 4) {
      $this.xn_1.an('Unexpected leading comma');
    }
    // Inline function 'kotlin.collections.linkedMapOf' call
    var result = LinkedHashMap_init_$Create$();
    $l$loop: while ($this.xn_1.do()) {
      var key = $this.yn_1 ? $this.xn_1.fo() : $this.xn_1.eo();
      $this.xn_1.bo(5);
      // Inline function 'kotlinx.serialization.json.internal.JsonTreeReader.readObject.<anonymous>' call
      var element = $this.go();
      // Inline function 'kotlin.collections.set' call
      result.j3(key, element);
      lastToken = $this.xn_1.ho();
      var tmp0_subject = lastToken;
      if (tmp0_subject !== 4)
        if (tmp0_subject === 7)
          break $l$loop;
        else {
          $this.xn_1.an('Expected end of the object or comma');
        }
    }
    if (lastToken === 6) {
      $this.xn_1.bo(7);
    } else if (lastToken === 4) {
      if (!$this.zn_1) {
        invalidTrailingComma($this.xn_1);
      }
      $this.xn_1.bo(7);
    }
    return new JsonObject(result);
  }
  function readObject_0(_this__u8e3s4, $this, $completion) {
    var tmp = new $readObjectCOROUTINE$0($this, _this__u8e3s4, $completion);
    tmp.l6_1 = Unit_instance;
    tmp.m6_1 = null;
    return tmp.r6();
  }
  function readArray($this) {
    var lastToken = $this.xn_1.ho();
    if ($this.xn_1.co() === 4) {
      $this.xn_1.an('Unexpected leading comma');
    }
    // Inline function 'kotlin.collections.arrayListOf' call
    var result = ArrayList_init_$Create$();
    while ($this.xn_1.do()) {
      var element = $this.go();
      result.n(element);
      lastToken = $this.xn_1.ho();
      if (!(lastToken === 4)) {
        var tmp0 = $this.xn_1;
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.require' call
        var condition = lastToken === 9;
        var position = tmp0.ck_1;
        if (!condition) {
          // Inline function 'kotlinx.serialization.json.internal.JsonTreeReader.readArray.<anonymous>' call
          var tmp$ret$1 = 'Expected end of the array or comma';
          tmp0.an(tmp$ret$1, position);
        }
      }
    }
    if (lastToken === 8) {
      $this.xn_1.bo(9);
    } else if (lastToken === 4) {
      if (!$this.zn_1) {
        invalidTrailingComma($this.xn_1, 'array');
      }
      $this.xn_1.bo(9);
    }
    return new JsonArray(result);
  }
  function readValue($this, isString) {
    var tmp;
    if ($this.yn_1 || !isString) {
      tmp = $this.xn_1.fo();
    } else {
      tmp = $this.xn_1.eo();
    }
    var string = tmp;
    if (!isString && string === 'null')
      return JsonNull_getInstance();
    return new JsonLiteral(string, isString);
  }
  function readDeepRecursive($this) {
    return invoke(new DeepRecursiveFunction(JsonTreeReader$readDeepRecursive$slambda_0($this, null)), Unit_instance);
  }
  function JsonTreeReader$readDeepRecursive$slambda(this$0, resultContinuation) {
    this.fp_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(JsonTreeReader$readDeepRecursive$slambda).kp = function ($this$DeepRecursiveFunction, it, $completion) {
    var tmp = this.lp($this$DeepRecursiveFunction, it, $completion);
    tmp.l6_1 = Unit_instance;
    tmp.m6_1 = null;
    return tmp.r6();
  };
  protoOf(JsonTreeReader$readDeepRecursive$slambda).g7 = function (p1, p2, $completion) {
    var tmp = p1 instanceof DeepRecursiveScope ? p1 : THROW_CCE();
    return this.kp(tmp, p2 instanceof Unit ? p2 : THROW_CCE(), $completion);
  };
  protoOf(JsonTreeReader$readDeepRecursive$slambda).r6 = function () {
    var suspendResult = this.l6_1;
    $sm: do
      try {
        var tmp = this.j6_1;
        switch (tmp) {
          case 0:
            this.k6_1 = 3;
            this.ip_1 = this.fp_1.xn_1.co();
            if (this.ip_1 === 1) {
              this.jp_1 = readValue(this.fp_1, true);
              this.j6_1 = 2;
              continue $sm;
            } else {
              if (this.ip_1 === 0) {
                this.jp_1 = readValue(this.fp_1, false);
                this.j6_1 = 2;
                continue $sm;
              } else {
                if (this.ip_1 === 6) {
                  this.j6_1 = 1;
                  suspendResult = readObject_0(this.gp_1, this.fp_1, this);
                  if (suspendResult === get_COROUTINE_SUSPENDED()) {
                    return suspendResult;
                  }
                  continue $sm;
                } else {
                  if (this.ip_1 === 8) {
                    this.jp_1 = readArray(this.fp_1);
                    this.j6_1 = 2;
                    continue $sm;
                  } else {
                    var tmp_0 = this;
                    this.fp_1.xn_1.an("Can't begin reading element, unexpected token");
                  }
                }
              }
            }

            break;
          case 1:
            this.jp_1 = suspendResult;
            this.j6_1 = 2;
            continue $sm;
          case 2:
            return this.jp_1;
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
  protoOf(JsonTreeReader$readDeepRecursive$slambda).lp = function ($this$DeepRecursiveFunction, it, completion) {
    var i = new JsonTreeReader$readDeepRecursive$slambda(this.fp_1, completion);
    i.gp_1 = $this$DeepRecursiveFunction;
    i.hp_1 = it;
    return i;
  };
  function JsonTreeReader$readDeepRecursive$slambda_0(this$0, resultContinuation) {
    var i = new JsonTreeReader$readDeepRecursive$slambda(this$0, resultContinuation);
    var l = function ($this$DeepRecursiveFunction, it, $completion) {
      return i.kp($this$DeepRecursiveFunction, it, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function $readObjectCOROUTINE$0(_this__u8e3s4, _this__u8e3s4_0, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.qo_1 = _this__u8e3s4;
    this.ro_1 = _this__u8e3s4_0;
  }
  protoOf($readObjectCOROUTINE$0).r6 = function () {
    var suspendResult = this.l6_1;
    $sm: do
      try {
        var tmp = this.j6_1;
        switch (tmp) {
          case 0:
            this.k6_1 = 5;
            var tmp_0 = this;
            tmp_0.so_1 = this.qo_1;
            this.to_1 = this.so_1;
            this.uo_1 = this.to_1.xn_1.bo(6);
            if (this.to_1.xn_1.co() === 4) {
              this.to_1.xn_1.an('Unexpected leading comma');
            }

            var tmp_1 = this;
            tmp_1.vo_1 = LinkedHashMap_init_$Create$();
            this.j6_1 = 1;
            continue $sm;
          case 1:
            if (!this.to_1.xn_1.do()) {
              this.j6_1 = 4;
              continue $sm;
            }

            this.wo_1 = this.to_1.yn_1 ? this.to_1.xn_1.fo() : this.to_1.xn_1.eo();
            this.to_1.xn_1.bo(5);
            this.j6_1 = 2;
            suspendResult = this.ro_1.ic(Unit_instance, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var element = suspendResult;
            var tmp0 = this.vo_1;
            var key = this.wo_1;
            tmp0.j3(key, element);
            this.uo_1 = this.to_1.xn_1.ho();
            var tmp0_subject = this.uo_1;
            if (tmp0_subject === 4) {
              this.j6_1 = 3;
              continue $sm;
            } else {
              if (tmp0_subject === 7) {
                this.j6_1 = 4;
                continue $sm;
              } else {
                this.to_1.xn_1.an('Expected end of the object or comma');
              }
            }

            break;
          case 3:
            this.j6_1 = 1;
            continue $sm;
          case 4:
            if (this.uo_1 === 6) {
              this.to_1.xn_1.bo(7);
            } else if (this.uo_1 === 4) {
              if (!this.to_1.zn_1) {
                invalidTrailingComma(this.to_1.xn_1);
              }
              this.to_1.xn_1.bo(7);
            }

            return new JsonObject(this.vo_1);
          case 5:
            throw this.m6_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.k6_1 === 5) {
          throw e;
        } else {
          this.j6_1 = this.k6_1;
          this.m6_1 = e;
        }
      }
     while (true);
  };
  function JsonTreeReader(configuration, lexer) {
    this.xn_1 = lexer;
    this.yn_1 = configuration.cl_1;
    this.zn_1 = configuration.ol_1;
    this.ao_1 = 0;
  }
  protoOf(JsonTreeReader).go = function () {
    var token = this.xn_1.co();
    var tmp;
    if (token === 1) {
      tmp = readValue(this, true);
    } else if (token === 0) {
      tmp = readValue(this, false);
    } else if (token === 6) {
      var tmp_0;
      this.ao_1 = this.ao_1 + 1 | 0;
      if (this.ao_1 === 200) {
        tmp_0 = readDeepRecursive(this);
      } else {
        tmp_0 = readObject(this);
      }
      var result = tmp_0;
      this.ao_1 = this.ao_1 - 1 | 0;
      tmp = result;
    } else if (token === 8) {
      tmp = readArray(this);
    } else {
      this.xn_1.an('Cannot read Json element because of unexpected ' + tokenDescription(token));
    }
    return tmp;
  };
  function classDiscriminator(_this__u8e3s4, json) {
    var _iterator__ex2g4s = _this__u8e3s4.md().e();
    while (_iterator__ex2g4s.f()) {
      var annotation = _iterator__ex2g4s.g();
      if (annotation instanceof JsonClassDiscriminator)
        return annotation.mp_1;
    }
    return json.nj_1.jl_1;
  }
  function validateIfSealed(serializer, actualSerializer, classDiscriminator) {
    if (!(serializer instanceof SealedClassSerializer))
      return Unit_instance;
    if (jsonCachedSerialNames(actualSerializer.uc()).y(classDiscriminator)) {
      var baseName = serializer.uc().id();
      var actualName = actualSerializer.uc().id();
      // Inline function 'kotlin.error' call
      var message = "Sealed class '" + actualName + "' cannot be serialized as base class '" + baseName + "' because" + (" it has property name that conflicts with JSON class discriminator '" + classDiscriminator + "'. ") + 'You can either change class discriminator in JsonConfiguration, ' + 'rename property with @SerialName annotation or fall back to array polymorphism';
      throw IllegalStateException_init_$Create$(toString(message));
    }
  }
  function checkKind(kind) {
    if (kind instanceof ENUM) {
      // Inline function 'kotlin.error' call
      var message = "Enums cannot be serialized polymorphically with 'type' parameter. You can use 'JsonBuilder.useArrayPolymorphism' instead";
      throw IllegalStateException_init_$Create$(toString(message));
    }
    if (kind instanceof PrimitiveKind) {
      // Inline function 'kotlin.error' call
      var message_0 = "Primitives cannot be serialized polymorphically with 'type' parameter. You can use 'JsonBuilder.useArrayPolymorphism' instead";
      throw IllegalStateException_init_$Create$(toString(message_0));
    }
    if (kind instanceof PolymorphicKind) {
      // Inline function 'kotlin.error' call
      var message_1 = 'Actual serializer for polymorphic cannot be polymorphic itself';
      throw IllegalStateException_init_$Create$(toString(message_1));
    }
  }
  function access$validateIfSealed$tPolymorphicKt(serializer, actualSerializer, classDiscriminator) {
    return validateIfSealed(serializer, actualSerializer, classDiscriminator);
  }
  function checkKind_0($this, descriptor, actualClass) {
    var kind = descriptor.jd();
    var tmp;
    if (kind instanceof PolymorphicKind) {
      tmp = true;
    } else {
      tmp = equals(kind, CONTEXTUAL_getInstance());
    }
    if (tmp) {
      throw IllegalArgumentException_init_$Create$('Serializer for ' + actualClass.a8() + " can't be registered as a subclass for polymorphic serialization " + ('because its kind ' + kind.toString() + ' is not concrete. To work with multiple hierarchies, register it as a base class.'));
    }
    if ($this.np_1)
      return Unit_instance;
    var tmp_0;
    var tmp_1;
    if (equals(kind, LIST_getInstance()) || equals(kind, MAP_getInstance())) {
      tmp_1 = true;
    } else {
      tmp_1 = kind instanceof PrimitiveKind;
    }
    if (tmp_1) {
      tmp_0 = true;
    } else {
      tmp_0 = kind instanceof ENUM;
    }
    if (tmp_0) {
      throw IllegalArgumentException_init_$Create$('Serializer for ' + actualClass.a8() + ' of kind ' + kind.toString() + ' cannot be serialized polymorphically with class discriminator.');
    }
  }
  function checkDiscriminatorCollisions($this, descriptor, actualClass) {
    var inductionVariable = 0;
    var last = descriptor.ld();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var name = descriptor.nd(i);
        if (name === $this.op_1) {
          throw IllegalArgumentException_init_$Create$('Polymorphic serializer for ' + toString(actualClass) + " has property '" + name + "' that conflicts " + 'with JSON class discriminator. You can either change class discriminator in JsonConfiguration, ' + 'rename property with @SerialName annotation ' + 'or fall back to array polymorphism');
        }
      }
       while (inductionVariable < last);
  }
  function PolymorphismValidator(useArrayPolymorphism, discriminator) {
    this.np_1 = useArrayPolymorphism;
    this.op_1 = discriminator;
  }
  protoOf(PolymorphismValidator).hj = function (kClass, provider) {
  };
  protoOf(PolymorphismValidator).kj = function (baseClass, actualClass, actualSerializer) {
    var descriptor = actualSerializer.uc();
    checkKind_0(this, descriptor, actualClass);
    if (!this.np_1) {
      checkDiscriminatorCollisions(this, descriptor, actualClass);
    }
  };
  protoOf(PolymorphismValidator).lj = function (baseClass, defaultSerializerProvider) {
  };
  protoOf(PolymorphismValidator).mj = function (baseClass, defaultDeserializerProvider) {
  };
  function Key() {
  }
  function DescriptorSchemaCache() {
    this.bn_1 = createMapForCache(16);
  }
  protoOf(DescriptorSchemaCache).pp = function (descriptor, key, value) {
    // Inline function 'kotlin.collections.getOrPut' call
    var this_0 = this.bn_1;
    var value_0 = this_0.d1(descriptor);
    var tmp;
    if (value_0 == null) {
      // Inline function 'kotlinx.serialization.json.internal.DescriptorSchemaCache.set.<anonymous>' call
      var answer = createMapForCache(2);
      this_0.j3(descriptor, answer);
      tmp = answer;
    } else {
      tmp = value_0;
    }
    var tmp2 = tmp;
    var tmp3 = key instanceof Key ? key : THROW_CCE();
    // Inline function 'kotlin.collections.set' call
    var value_1 = !(value == null) ? value : THROW_CCE();
    tmp2.j3(tmp3, value_1);
  };
  protoOf(DescriptorSchemaCache).cn = function (descriptor, key, defaultValue) {
    var tmp0_safe_receiver = this.qp(descriptor, key);
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      return tmp0_safe_receiver;
    }
    var value = defaultValue();
    this.pp(descriptor, key, value);
    return value;
  };
  protoOf(DescriptorSchemaCache).qp = function (descriptor, key) {
    var tmp0_safe_receiver = this.bn_1.d1(descriptor);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      tmp = tmp0_safe_receiver.d1(key instanceof Key ? key : THROW_CCE());
    }
    var tmp_0 = tmp;
    return !(tmp_0 == null) ? tmp_0 : null;
  };
  function DiscriminatorHolder(discriminatorToSkip) {
    this.rp_1 = discriminatorToSkip;
  }
  function trySkip(_this__u8e3s4, $this, unknownKey) {
    if (_this__u8e3s4 == null)
      return false;
    if (_this__u8e3s4.rp_1 === unknownKey) {
      _this__u8e3s4.rp_1 = null;
      return true;
    }
    return false;
  }
  function skipLeftoverElements($this, descriptor) {
    while (!($this.ne(descriptor) === -1)) {
    }
  }
  function checkLeadingComma($this) {
    if ($this.wj_1.co() === 4) {
      $this.wj_1.an('Unexpected leading comma');
    }
  }
  function decodeMapIndex($this) {
    var hasComma = false;
    var decodingKey = !(($this.yj_1 % 2 | 0) === 0);
    if (decodingKey) {
      if (!($this.yj_1 === -1)) {
        hasComma = $this.wj_1.tp();
      }
    } else {
      $this.wj_1.sp(_Char___init__impl__6a9atx(58));
    }
    var tmp;
    if ($this.wj_1.do()) {
      if (decodingKey) {
        if ($this.yj_1 === -1) {
          var tmp0 = $this.wj_1;
          // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.require' call
          var condition = !hasComma;
          var position = tmp0.ck_1;
          if (!condition) {
            // Inline function 'kotlinx.serialization.json.internal.StreamingJsonDecoder.decodeMapIndex.<anonymous>' call
            var tmp$ret$0 = 'Unexpected leading comma';
            tmp0.an(tmp$ret$0, position);
          }
        } else {
          var tmp3 = $this.wj_1;
          // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.require' call
          var condition_0 = hasComma;
          var position_0 = tmp3.ck_1;
          if (!condition_0) {
            // Inline function 'kotlinx.serialization.json.internal.StreamingJsonDecoder.decodeMapIndex.<anonymous>' call
            var tmp$ret$1 = 'Expected comma after the key-value pair';
            tmp3.an(tmp$ret$1, position_0);
          }
        }
      }
      $this.yj_1 = $this.yj_1 + 1 | 0;
      tmp = $this.yj_1;
    } else {
      if (hasComma && !$this.uj_1.nj_1.ol_1) {
        invalidTrailingComma($this.wj_1);
      }
      tmp = -1;
    }
    return tmp;
  }
  function coerceInputValue($this, descriptor, index) {
    var tmp0 = $this.uj_1;
    var tmp$ret$1;
    $l$block_2: {
      // Inline function 'kotlinx.serialization.json.internal.tryCoerceValue' call
      var isOptional = descriptor.rd(index);
      var elementDescriptor = descriptor.qd(index);
      var tmp;
      if (isOptional && !elementDescriptor.cd()) {
        // Inline function 'kotlinx.serialization.json.internal.StreamingJsonDecoder.coerceInputValue.<anonymous>' call
        tmp = $this.wj_1.up(true);
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$1 = true;
        break $l$block_2;
      }
      if (equals(elementDescriptor.jd(), ENUM_getInstance())) {
        var tmp_0;
        if (elementDescriptor.cd()) {
          // Inline function 'kotlinx.serialization.json.internal.StreamingJsonDecoder.coerceInputValue.<anonymous>' call
          tmp_0 = $this.wj_1.up(false);
        } else {
          tmp_0 = false;
        }
        if (tmp_0) {
          tmp$ret$1 = false;
          break $l$block_2;
        }
        // Inline function 'kotlinx.serialization.json.internal.StreamingJsonDecoder.coerceInputValue.<anonymous>' call
        var tmp0_elvis_lhs = $this.wj_1.vp($this.ak_1.cl_1);
        var tmp_1;
        if (tmp0_elvis_lhs == null) {
          tmp$ret$1 = false;
          break $l$block_2;
        } else {
          tmp_1 = tmp0_elvis_lhs;
        }
        var enumValue = tmp_1;
        var enumIndex = getJsonNameIndex(elementDescriptor, tmp0, enumValue);
        var coerceToNull = !tmp0.nj_1.fl_1 && elementDescriptor.cd();
        if (enumIndex === -3 && (isOptional || coerceToNull)) {
          // Inline function 'kotlinx.serialization.json.internal.StreamingJsonDecoder.coerceInputValue.<anonymous>' call
          $this.wj_1.eo();
          tmp$ret$1 = true;
          break $l$block_2;
        }
      }
      tmp$ret$1 = false;
    }
    return tmp$ret$1;
  }
  function decodeObjectIndex($this, descriptor) {
    var hasComma = $this.wj_1.tp();
    while ($this.wj_1.do()) {
      hasComma = false;
      var key = decodeStringKey($this);
      $this.wj_1.sp(_Char___init__impl__6a9atx(58));
      var index = getJsonNameIndex(descriptor, $this.uj_1, key);
      var tmp;
      if (!(index === -3)) {
        var tmp_0;
        if ($this.ak_1.hl_1 && coerceInputValue($this, descriptor, index)) {
          hasComma = $this.wj_1.tp();
          tmp_0 = false;
        } else {
          var tmp0_safe_receiver = $this.bk_1;
          if (tmp0_safe_receiver == null)
            null;
          else {
            tmp0_safe_receiver.xm(index);
          }
          return index;
        }
        tmp = tmp_0;
      } else {
        tmp = true;
      }
      var isUnknown = tmp;
      if (isUnknown) {
        hasComma = handleUnknown($this, key);
      }
    }
    if (hasComma && !$this.uj_1.nj_1.ol_1) {
      invalidTrailingComma($this.wj_1);
    }
    var tmp1_safe_receiver = $this.bk_1;
    var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.ym();
    return tmp2_elvis_lhs == null ? -1 : tmp2_elvis_lhs;
  }
  function handleUnknown($this, key) {
    if ($this.ak_1.bl_1 || trySkip($this.zj_1, $this, key)) {
      $this.wj_1.xp($this.ak_1.cl_1);
    } else {
      $this.wj_1.wp(key);
    }
    return $this.wj_1.tp();
  }
  function decodeListIndex($this) {
    var hasComma = $this.wj_1.tp();
    var tmp;
    if ($this.wj_1.do()) {
      if (!($this.yj_1 === -1) && !hasComma) {
        $this.wj_1.an('Expected end of the array or comma');
      }
      $this.yj_1 = $this.yj_1 + 1 | 0;
      tmp = $this.yj_1;
    } else {
      if (hasComma && !$this.uj_1.nj_1.ol_1) {
        invalidTrailingComma($this.wj_1, 'array');
      }
      tmp = -1;
    }
    return tmp;
  }
  function decodeStringKey($this) {
    var tmp;
    if ($this.ak_1.cl_1) {
      tmp = $this.wj_1.zp();
    } else {
      tmp = $this.wj_1.yp();
    }
    return tmp;
  }
  function StreamingJsonDecoder(json, mode, lexer, descriptor, discriminatorHolder) {
    AbstractDecoder.call(this);
    this.uj_1 = json;
    this.vj_1 = mode;
    this.wj_1 = lexer;
    this.xj_1 = this.uj_1.le();
    this.yj_1 = -1;
    this.zj_1 = discriminatorHolder;
    this.ak_1 = this.uj_1.nj_1;
    this.bk_1 = this.ak_1.fl_1 ? null : new JsonElementMarker(descriptor);
  }
  protoOf(StreamingJsonDecoder).aq = function () {
    return this.uj_1;
  };
  protoOf(StreamingJsonDecoder).le = function () {
    return this.xj_1;
  };
  protoOf(StreamingJsonDecoder).bq = function () {
    return (new JsonTreeReader(this.uj_1.nj_1, this.wj_1)).go();
  };
  protoOf(StreamingJsonDecoder).ce = function (deserializer) {
    try {
      var tmp;
      if (!(deserializer instanceof AbstractPolymorphicSerializer)) {
        tmp = true;
      } else {
        tmp = this.uj_1.nj_1.il_1;
      }
      if (tmp) {
        return deserializer.wc(this);
      }
      var discriminator = classDiscriminator(deserializer.uc(), this.uj_1);
      var tmp0_elvis_lhs = this.wj_1.cq(discriminator, this.ak_1.cl_1);
      var tmp_0;
      if (tmp0_elvis_lhs == null) {
        var tmp1 = isInterface(deserializer, DeserializationStrategy) ? deserializer : THROW_CCE();
        var tmp$ret$0;
        $l$block: {
          // Inline function 'kotlinx.serialization.json.internal.decodeSerializableValuePolymorphic' call
          var tmp_1;
          if (!(tmp1 instanceof AbstractPolymorphicSerializer)) {
            tmp_1 = true;
          } else {
            tmp_1 = this.aq().nj_1.il_1;
          }
          if (tmp_1) {
            tmp$ret$0 = tmp1.wc(this);
            break $l$block;
          }
          var discriminator_0 = classDiscriminator(tmp1.uc(), this.aq());
          var tmp0 = this.bq();
          // Inline function 'kotlinx.serialization.json.internal.cast' call
          var serialName = tmp1.uc().id();
          if (!(tmp0 instanceof JsonObject)) {
            var tmp_2 = getKClass(JsonObject).a8();
            var tmp_3 = getKClassFromExpression(tmp0).a8();
            // Inline function 'kotlinx.serialization.json.internal.StreamingJsonDecoder.decodeSerializableValue.<anonymous>' call
            var tmp$ret$1 = this.wj_1.dk_1.nn();
            throw JsonDecodingException_0(-1, 'Expected ' + tmp_2 + ', but had ' + tmp_3 + ' as the serialized body of ' + serialName + ' at element: ' + tmp$ret$1, toString(tmp0));
          }
          var jsonTree = tmp0;
          var tmp0_safe_receiver = jsonTree.tl(discriminator_0);
          var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : get_jsonPrimitive(tmp0_safe_receiver);
          var type = tmp1_safe_receiver == null ? null : get_contentOrNull(tmp1_safe_receiver);
          var tmp_4;
          try {
            tmp_4 = findPolymorphicSerializer(tmp1, this, type);
          } catch ($p) {
            var tmp_5;
            if ($p instanceof SerializationException) {
              var it = $p;
              throw JsonDecodingException_0(-1, ensureNotNull(it.message), jsonTree.toString());
            } else {
              throw $p;
            }
          }
          var tmp_6 = tmp_4;
          var actualSerializer = isInterface(tmp_6, DeserializationStrategy) ? tmp_6 : THROW_CCE();
          tmp$ret$0 = readPolymorphicJson(this.aq(), discriminator_0, jsonTree, actualSerializer);
        }
        return tmp$ret$0;
      } else {
        tmp_0 = tmp0_elvis_lhs;
      }
      var type_0 = tmp_0;
      var tmp_7;
      try {
        tmp_7 = findPolymorphicSerializer(deserializer, this, type_0);
      } catch ($p) {
        var tmp_8;
        if ($p instanceof SerializationException) {
          var it_0 = $p;
          var message = removeSuffix(substringBefore(ensureNotNull(it_0.message), _Char___init__impl__6a9atx(10)), '.');
          var hint = substringAfter(ensureNotNull(it_0.message), _Char___init__impl__6a9atx(10), '');
          this.wj_1.an(message, VOID, hint);
        } else {
          throw $p;
        }
        tmp_7 = tmp_8;
      }
      var tmp_9 = tmp_7;
      var actualSerializer_0 = isInterface(tmp_9, DeserializationStrategy) ? tmp_9 : THROW_CCE();
      this.zj_1 = new DiscriminatorHolder(discriminator);
      return actualSerializer_0.wc(this);
    } catch ($p) {
      if ($p instanceof MissingFieldException) {
        var e = $p;
        if (contains_0(ensureNotNull(e.message), 'at path'))
          throw e;
        throw new MissingFieldException(e.bd_1, plus(e.message, ' at path: ') + this.wj_1.dk_1.nn(), e);
      } else {
        throw $p;
      }
    }
  };
  protoOf(StreamingJsonDecoder).de = function (descriptor) {
    var newMode = switchMode(this.uj_1, descriptor);
    this.wj_1.dk_1.in(descriptor);
    this.wj_1.sp(newMode.fq_1);
    checkLeadingComma(this);
    var tmp;
    switch (newMode.h1_1) {
      case 1:
      case 2:
      case 3:
        tmp = new StreamingJsonDecoder(this.uj_1, newMode, this.wj_1, descriptor, this.zj_1);
        break;
      default:
        var tmp_0;
        if (this.vj_1.equals(newMode) && this.uj_1.nj_1.fl_1) {
          tmp_0 = this;
        } else {
          tmp_0 = new StreamingJsonDecoder(this.uj_1, newMode, this.wj_1, descriptor, this.zj_1);
        }

        tmp = tmp_0;
        break;
    }
    return tmp;
  };
  protoOf(StreamingJsonDecoder).ee = function (descriptor) {
    if (this.uj_1.nj_1.bl_1 && descriptor.ld() === 0) {
      skipLeftoverElements(this, descriptor);
    }
    if (this.wj_1.tp() && !this.uj_1.nj_1.ol_1) {
      invalidTrailingComma(this.wj_1, '');
    }
    this.wj_1.sp(this.vj_1.gq_1);
    this.wj_1.dk_1.mn();
  };
  protoOf(StreamingJsonDecoder).wd = function () {
    var tmp;
    var tmp0_safe_receiver = this.bk_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.wm_1;
    if (!(tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs)) {
      tmp = !this.wj_1.hq();
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(StreamingJsonDecoder).xd = function () {
    return null;
  };
  protoOf(StreamingJsonDecoder).ie = function (descriptor, index, deserializer, previousValue) {
    var isMapKey = this.vj_1.equals(WriteMode_MAP_getInstance()) && (index & 1) === 0;
    if (isMapKey) {
      this.wj_1.dk_1.ln();
    }
    var value = protoOf(AbstractDecoder).ie.call(this, descriptor, index, deserializer, previousValue);
    if (isMapKey) {
      this.wj_1.dk_1.kn(value);
    }
    return value;
  };
  protoOf(StreamingJsonDecoder).ne = function (descriptor) {
    var index;
    switch (this.vj_1.h1_1) {
      case 0:
        index = decodeObjectIndex(this, descriptor);
        break;
      case 2:
        index = decodeMapIndex(this);
        break;
      default:
        index = decodeListIndex(this);
        break;
    }
    if (!this.vj_1.equals(WriteMode_MAP_getInstance())) {
      this.wj_1.dk_1.jn(index);
    }
    return index;
  };
  protoOf(StreamingJsonDecoder).yd = function () {
    var value = this.wj_1.am();
    if (!value.equals(toLong(value.u()))) {
      this.wj_1.an("Failed to parse int for input '" + value.toString() + "'");
    }
    return value.u();
  };
  protoOf(StreamingJsonDecoder).zd = function () {
    var tmp0 = this.wj_1;
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var input = tmp0.fo();
      try {
        // Inline function 'kotlinx.serialization.json.internal.StreamingJsonDecoder.decodeDouble.<anonymous>' call
        tmp$ret$1 = toDouble(input);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          tmp0.an("Failed to parse type '" + 'double' + "' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    var result = tmp$ret$1;
    var specialFp = this.uj_1.nj_1.kl_1;
    if (specialFp || isFinite(result))
      return result;
    throwInvalidFloatingPointDecoded(this.wj_1, result);
  };
  protoOf(StreamingJsonDecoder).ae = function () {
    var tmp;
    if (this.ak_1.cl_1) {
      tmp = this.wj_1.zp();
    } else {
      tmp = this.wj_1.eo();
    }
    return tmp;
  };
  function StreamingJsonEncoder_init_$Init$(output, json, mode, modeReuseCache, $this) {
    StreamingJsonEncoder.call($this, Composer_0(output, json), json, mode, modeReuseCache);
    return $this;
  }
  function StreamingJsonEncoder_init_$Create$(output, json, mode, modeReuseCache) {
    return StreamingJsonEncoder_init_$Init$(output, json, mode, modeReuseCache, objectCreate(protoOf(StreamingJsonEncoder)));
  }
  function encodeTypeInfo($this, discriminator, serialName) {
    $this.on_1.fm();
    $this.ue(discriminator);
    $this.on_1.im(_Char___init__impl__6a9atx(58));
    $this.on_1.hm();
    $this.ue(serialName);
  }
  function StreamingJsonEncoder(composer, json, mode, modeReuseCache) {
    AbstractEncoder.call(this);
    this.on_1 = composer;
    this.pn_1 = json;
    this.qn_1 = mode;
    this.rn_1 = modeReuseCache;
    this.sn_1 = this.pn_1.le();
    this.tn_1 = this.pn_1.nj_1;
    this.un_1 = false;
    this.vn_1 = null;
    this.wn_1 = null;
    var i = this.qn_1.h1_1;
    if (!(this.rn_1 == null)) {
      if (!(this.rn_1[i] === null) || !(this.rn_1[i] === this)) {
        this.rn_1[i] = this;
      }
    }
  }
  protoOf(StreamingJsonEncoder).aq = function () {
    return this.pn_1;
  };
  protoOf(StreamingJsonEncoder).le = function () {
    return this.sn_1;
  };
  protoOf(StreamingJsonEncoder).ef = function (descriptor, index) {
    return this.tn_1.al_1;
  };
  protoOf(StreamingJsonEncoder).ze = function (serializer, value) {
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.encodePolymorphically' call
      if (this.aq().nj_1.il_1) {
        serializer.vc(this, value);
        break $l$block;
      }
      var isPolymorphicSerializer = serializer instanceof AbstractPolymorphicSerializer;
      var tmp;
      if (isPolymorphicSerializer) {
        tmp = !this.aq().nj_1.ql_1.equals(ClassDiscriminatorMode_NONE_getInstance());
      } else {
        var tmp_0;
        switch (this.aq().nj_1.ql_1.h1_1) {
          case 0:
          case 2:
            tmp_0 = false;
            break;
          case 1:
            // Inline function 'kotlin.let' call

            // Inline function 'kotlinx.serialization.json.internal.encodePolymorphically.<anonymous>' call

            var it = serializer.uc().jd();
            tmp_0 = equals(it, CLASS_getInstance()) || equals(it, OBJECT_getInstance());
            break;
          default:
            noWhenBranchMatchedException();
            break;
        }
        tmp = tmp_0;
      }
      var needDiscriminator = tmp;
      var baseClassDiscriminator = needDiscriminator ? classDiscriminator(serializer.uc(), this.aq()) : null;
      var tmp_1;
      if (isPolymorphicSerializer) {
        var casted = serializer instanceof AbstractPolymorphicSerializer ? serializer : THROW_CCE();
        $l$block_0: {
          // Inline function 'kotlin.requireNotNull' call
          if (value == null) {
            // Inline function 'kotlinx.serialization.json.internal.encodePolymorphically.<anonymous>' call
            var message = 'Value for serializer ' + toString(serializer.uc()) + ' should always be non-null. Please report issue to the kotlinx.serialization tracker.';
            throw IllegalArgumentException_init_$Create$(toString(message));
          } else {
            break $l$block_0;
          }
        }
        var actual = findPolymorphicSerializer_0(casted, this, value);
        if (!(baseClassDiscriminator == null)) {
          access$validateIfSealed$tPolymorphicKt(serializer, actual, baseClassDiscriminator);
        }
        checkKind(actual.uc().jd());
        tmp_1 = isInterface(actual, SerializationStrategy) ? actual : THROW_CCE();
      } else {
        tmp_1 = serializer;
      }
      var actualSerializer = tmp_1;
      if (!(baseClassDiscriminator == null)) {
        // Inline function 'kotlinx.serialization.json.internal.StreamingJsonEncoder.encodeSerializableValue.<anonymous>' call
        var serialName = actualSerializer.uc().id();
        this.vn_1 = baseClassDiscriminator;
        this.wn_1 = serialName;
      }
      actualSerializer.vc(this, value);
    }
  };
  protoOf(StreamingJsonEncoder).de = function (descriptor) {
    var newMode = switchMode(this.pn_1, descriptor);
    if (!(newMode.fq_1 === _Char___init__impl__6a9atx(0))) {
      this.on_1.im(newMode.fq_1);
      this.on_1.dm();
    }
    var discriminator = this.vn_1;
    if (!(discriminator == null)) {
      var tmp0_elvis_lhs = this.wn_1;
      encodeTypeInfo(this, discriminator, tmp0_elvis_lhs == null ? descriptor.id() : tmp0_elvis_lhs);
      this.vn_1 = null;
      this.wn_1 = null;
    }
    if (this.qn_1.equals(newMode)) {
      return this;
    }
    var tmp1_safe_receiver = this.rn_1;
    var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver[newMode.h1_1];
    return tmp2_elvis_lhs == null ? new StreamingJsonEncoder(this.on_1, this.pn_1, newMode, this.rn_1) : tmp2_elvis_lhs;
  };
  protoOf(StreamingJsonEncoder).ee = function (descriptor) {
    if (!(this.qn_1.gq_1 === _Char___init__impl__6a9atx(0))) {
      this.on_1.em();
      this.on_1.gm();
      this.on_1.im(this.qn_1.gq_1);
    }
  };
  protoOf(StreamingJsonEncoder).pe = function (descriptor, index) {
    switch (this.qn_1.h1_1) {
      case 1:
        if (!this.on_1.cm_1) {
          this.on_1.im(_Char___init__impl__6a9atx(44));
        }

        this.on_1.fm();
        break;
      case 2:
        if (!this.on_1.cm_1) {
          var tmp = this;
          var tmp_0;
          if ((index % 2 | 0) === 0) {
            this.on_1.im(_Char___init__impl__6a9atx(44));
            this.on_1.fm();
            tmp_0 = true;
          } else {
            this.on_1.im(_Char___init__impl__6a9atx(58));
            this.on_1.hm();
            tmp_0 = false;
          }
          tmp.un_1 = tmp_0;
        } else {
          this.un_1 = true;
          this.on_1.fm();
        }

        break;
      case 3:
        if (index === 0)
          this.un_1 = true;
        if (index === 1) {
          this.on_1.im(_Char___init__impl__6a9atx(44));
          this.on_1.hm();
          this.un_1 = false;
        }

        break;
      default:
        if (!this.on_1.cm_1) {
          this.on_1.im(_Char___init__impl__6a9atx(44));
        }

        this.on_1.fm();
        this.ue(getJsonElementName(descriptor, this.pn_1, index));
        this.on_1.im(_Char___init__impl__6a9atx(58));
        this.on_1.hm();
        break;
    }
    return true;
  };
  protoOf(StreamingJsonEncoder).af = function (descriptor, index, serializer, value) {
    if (!(value == null) || this.tn_1.fl_1) {
      protoOf(AbstractEncoder).af.call(this, descriptor, index, serializer, value);
    }
  };
  protoOf(StreamingJsonEncoder).re = function () {
    this.on_1.km('null');
  };
  protoOf(StreamingJsonEncoder).se = function (value) {
    if (this.un_1) {
      this.ue(value.toString());
    } else {
      this.on_1.nm(value);
    }
  };
  protoOf(StreamingJsonEncoder).te = function (value) {
    if (this.un_1) {
      this.ue(value.toString());
    } else {
      this.on_1.mm(value);
    }
    if (!this.tn_1.kl_1 && !isFinite(value)) {
      throw InvalidFloatingPointEncoded(value, toString(this.on_1.bm_1));
    }
  };
  protoOf(StreamingJsonEncoder).ue = function (value) {
    return this.on_1.pm(value);
  };
  function get_ESCAPE_STRINGS() {
    _init_properties_StringOps_kt__fcy1db();
    return ESCAPE_STRINGS;
  }
  var ESCAPE_STRINGS;
  var ESCAPE_MARKERS;
  function toHexChar(i) {
    _init_properties_StringOps_kt__fcy1db();
    var d = i & 15;
    var tmp;
    if (d < 10) {
      // Inline function 'kotlin.code' call
      var this_0 = _Char___init__impl__6a9atx(48);
      var tmp$ret$0 = Char__toInt_impl_vasixd(this_0);
      tmp = numberToChar(d + tmp$ret$0 | 0);
    } else {
      var tmp_0 = d - 10 | 0;
      // Inline function 'kotlin.code' call
      var this_1 = _Char___init__impl__6a9atx(97);
      var tmp$ret$1 = Char__toInt_impl_vasixd(this_1);
      tmp = numberToChar(tmp_0 + tmp$ret$1 | 0);
    }
    return tmp;
  }
  function printQuoted(_this__u8e3s4, value) {
    _init_properties_StringOps_kt__fcy1db();
    _this__u8e3s4.y5(_Char___init__impl__6a9atx(34));
    var lastPos = 0;
    var inductionVariable = 0;
    var last = charSequenceLength(value) - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.code' call
        var this_0 = charSequenceGet(value, i);
        var c = Char__toInt_impl_vasixd(this_0);
        if (c < get_ESCAPE_STRINGS().length && !(get_ESCAPE_STRINGS()[c] == null)) {
          _this__u8e3s4.f9(value, lastPos, i);
          _this__u8e3s4.x5(get_ESCAPE_STRINGS()[c]);
          lastPos = i + 1 | 0;
        }
      }
       while (inductionVariable <= last);
    if (!(lastPos === 0))
      _this__u8e3s4.f9(value, lastPos, value.length);
    else
      _this__u8e3s4.x5(value);
    _this__u8e3s4.y5(_Char___init__impl__6a9atx(34));
  }
  var properties_initialized_StringOps_kt_wzaea7;
  function _init_properties_StringOps_kt__fcy1db() {
    if (!properties_initialized_StringOps_kt_wzaea7) {
      properties_initialized_StringOps_kt_wzaea7 = true;
      // Inline function 'kotlin.arrayOfNulls' call
      // Inline function 'kotlin.apply' call
      var this_0 = fillArrayVal(Array(93), null);
      // Inline function 'kotlinx.serialization.json.internal.ESCAPE_STRINGS.<anonymous>' call
      var inductionVariable = 0;
      if (inductionVariable <= 31)
        do {
          var c = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var c1 = toHexChar(c >> 12);
          var c2 = toHexChar(c >> 8);
          var c3 = toHexChar(c >> 4);
          var c4 = toHexChar(c);
          this_0[c] = '\\u' + toString_1(c1) + toString_1(c2) + toString_1(c3) + toString_1(c4);
        }
         while (inductionVariable <= 31);
      // Inline function 'kotlin.code' call
      var this_1 = _Char___init__impl__6a9atx(34);
      this_0[Char__toInt_impl_vasixd(this_1)] = '\\"';
      // Inline function 'kotlin.code' call
      var this_2 = _Char___init__impl__6a9atx(92);
      this_0[Char__toInt_impl_vasixd(this_2)] = '\\\\';
      // Inline function 'kotlin.code' call
      var this_3 = _Char___init__impl__6a9atx(9);
      this_0[Char__toInt_impl_vasixd(this_3)] = '\\t';
      // Inline function 'kotlin.code' call
      var this_4 = _Char___init__impl__6a9atx(8);
      this_0[Char__toInt_impl_vasixd(this_4)] = '\\b';
      // Inline function 'kotlin.code' call
      var this_5 = _Char___init__impl__6a9atx(10);
      this_0[Char__toInt_impl_vasixd(this_5)] = '\\n';
      // Inline function 'kotlin.code' call
      var this_6 = _Char___init__impl__6a9atx(13);
      this_0[Char__toInt_impl_vasixd(this_6)] = '\\r';
      this_0[12] = '\\f';
      ESCAPE_STRINGS = this_0;
      // Inline function 'kotlin.apply' call
      var this_7 = new Int8Array(93);
      // Inline function 'kotlinx.serialization.json.internal.ESCAPE_MARKERS.<anonymous>' call
      var inductionVariable_0 = 0;
      if (inductionVariable_0 <= 31)
        do {
          var c_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          this_7[c_0] = 1;
        }
         while (inductionVariable_0 <= 31);
      // Inline function 'kotlin.code' call
      var this_8 = _Char___init__impl__6a9atx(34);
      var tmp = Char__toInt_impl_vasixd(this_8);
      // Inline function 'kotlin.code' call
      var this_9 = _Char___init__impl__6a9atx(34);
      var tmp$ret$1 = Char__toInt_impl_vasixd(this_9);
      this_7[tmp] = toByte(tmp$ret$1);
      // Inline function 'kotlin.code' call
      var this_10 = _Char___init__impl__6a9atx(92);
      var tmp_0 = Char__toInt_impl_vasixd(this_10);
      // Inline function 'kotlin.code' call
      var this_11 = _Char___init__impl__6a9atx(92);
      var tmp$ret$3 = Char__toInt_impl_vasixd(this_11);
      this_7[tmp_0] = toByte(tmp$ret$3);
      // Inline function 'kotlin.code' call
      var this_12 = _Char___init__impl__6a9atx(9);
      var tmp_1 = Char__toInt_impl_vasixd(this_12);
      // Inline function 'kotlin.code' call
      var this_13 = _Char___init__impl__6a9atx(116);
      var tmp$ret$5 = Char__toInt_impl_vasixd(this_13);
      this_7[tmp_1] = toByte(tmp$ret$5);
      // Inline function 'kotlin.code' call
      var this_14 = _Char___init__impl__6a9atx(8);
      var tmp_2 = Char__toInt_impl_vasixd(this_14);
      // Inline function 'kotlin.code' call
      var this_15 = _Char___init__impl__6a9atx(98);
      var tmp$ret$7 = Char__toInt_impl_vasixd(this_15);
      this_7[tmp_2] = toByte(tmp$ret$7);
      // Inline function 'kotlin.code' call
      var this_16 = _Char___init__impl__6a9atx(10);
      var tmp_3 = Char__toInt_impl_vasixd(this_16);
      // Inline function 'kotlin.code' call
      var this_17 = _Char___init__impl__6a9atx(110);
      var tmp$ret$9 = Char__toInt_impl_vasixd(this_17);
      this_7[tmp_3] = toByte(tmp$ret$9);
      // Inline function 'kotlin.code' call
      var this_18 = _Char___init__impl__6a9atx(13);
      var tmp_4 = Char__toInt_impl_vasixd(this_18);
      // Inline function 'kotlin.code' call
      var this_19 = _Char___init__impl__6a9atx(114);
      var tmp$ret$11 = Char__toInt_impl_vasixd(this_19);
      this_7[tmp_4] = toByte(tmp$ret$11);
      // Inline function 'kotlin.code' call
      var this_20 = _Char___init__impl__6a9atx(102);
      var tmp$ret$12 = Char__toInt_impl_vasixd(this_20);
      this_7[12] = toByte(tmp$ret$12);
      ESCAPE_MARKERS = this_7;
    }
  }
  function unparsedPrimitive($this, literal, primitive, tag) {
    var type = startsWith(primitive, 'i') ? 'an ' + primitive : 'a ' + primitive;
    throw JsonDecodingException_0(-1, "Failed to parse literal '" + literal.toString() + "' as " + type + ' value at element: ' + $this.oq(tag), toString($this.pq()));
  }
  function AbstractJsonTreeDecoder(json, value, polymorphicDiscriminator) {
    polymorphicDiscriminator = polymorphicDiscriminator === VOID ? null : polymorphicDiscriminator;
    NamedValueDecoder.call(this);
    this.kq_1 = json;
    this.lq_1 = value;
    this.mq_1 = polymorphicDiscriminator;
    this.nq_1 = this.aq().nj_1;
  }
  protoOf(AbstractJsonTreeDecoder).aq = function () {
    return this.kq_1;
  };
  protoOf(AbstractJsonTreeDecoder).b1 = function () {
    return this.lq_1;
  };
  protoOf(AbstractJsonTreeDecoder).le = function () {
    return this.aq().le();
  };
  protoOf(AbstractJsonTreeDecoder).pq = function () {
    var tmp0_safe_receiver = this.ni();
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.currentObject.<anonymous>' call
      tmp = this.qq(tmp0_safe_receiver);
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? this.b1() : tmp1_elvis_lhs;
  };
  protoOf(AbstractJsonTreeDecoder).oq = function (currentTag) {
    return this.pi() + ('.' + currentTag);
  };
  protoOf(AbstractJsonTreeDecoder).bq = function () {
    return this.pq();
  };
  protoOf(AbstractJsonTreeDecoder).ce = function (deserializer) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.decodeSerializableValuePolymorphic' call
      var tmp;
      if (!(deserializer instanceof AbstractPolymorphicSerializer)) {
        tmp = true;
      } else {
        tmp = this.aq().nj_1.il_1;
      }
      if (tmp) {
        tmp$ret$0 = deserializer.wc(this);
        break $l$block;
      }
      var discriminator = classDiscriminator(deserializer.uc(), this.aq());
      var tmp0 = this.bq();
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var serialName = deserializer.uc().id();
      if (!(tmp0 instanceof JsonObject)) {
        var tmp_0 = getKClass(JsonObject).a8();
        var tmp_1 = getKClassFromExpression(tmp0).a8();
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.decodeSerializableValue.stub_for_inlining' call
        var tmp$ret$1 = this.pi();
        throw JsonDecodingException_0(-1, 'Expected ' + tmp_0 + ', but had ' + tmp_1 + ' as the serialized body of ' + serialName + ' at element: ' + tmp$ret$1, toString(tmp0));
      }
      var jsonTree = tmp0;
      var tmp0_safe_receiver = jsonTree.tl(discriminator);
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : get_jsonPrimitive(tmp0_safe_receiver);
      var type = tmp1_safe_receiver == null ? null : get_contentOrNull(tmp1_safe_receiver);
      var tmp_2;
      try {
        tmp_2 = findPolymorphicSerializer(deserializer, this, type);
      } catch ($p) {
        var tmp_3;
        if ($p instanceof SerializationException) {
          var it = $p;
          throw JsonDecodingException_0(-1, ensureNotNull(it.message), jsonTree.toString());
        } else {
          throw $p;
        }
      }
      var tmp_4 = tmp_2;
      var actualSerializer = isInterface(tmp_4, DeserializationStrategy) ? tmp_4 : THROW_CCE();
      tmp$ret$0 = readPolymorphicJson(this.aq(), discriminator, jsonTree, actualSerializer);
    }
    return tmp$ret$0;
  };
  protoOf(AbstractJsonTreeDecoder).oi = function (parentName, childName) {
    return childName;
  };
  protoOf(AbstractJsonTreeDecoder).de = function (descriptor) {
    var currentObject = this.pq();
    var tmp0_subject = descriptor.jd();
    var tmp;
    var tmp_0;
    if (equals(tmp0_subject, LIST_getInstance())) {
      tmp_0 = true;
    } else {
      tmp_0 = tmp0_subject instanceof PolymorphicKind;
    }
    if (tmp_0) {
      var tmp_1 = this.aq();
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var serialName = descriptor.id();
      if (!(currentObject instanceof JsonArray)) {
        var tmp_2 = getKClass(JsonArray).a8();
        var tmp_3 = getKClassFromExpression(currentObject).a8();
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast.<anonymous>' call
        var tmp$ret$0 = this.pi();
        throw JsonDecodingException_0(-1, 'Expected ' + tmp_2 + ', but had ' + tmp_3 + ' as the serialized body of ' + serialName + ' at element: ' + tmp$ret$0, toString(currentObject));
      }
      tmp = new JsonTreeListDecoder(tmp_1, currentObject);
    } else {
      if (equals(tmp0_subject, MAP_getInstance())) {
        // Inline function 'kotlinx.serialization.json.internal.selectMapMode' call
        var this_0 = this.aq();
        var keyDescriptor = carrierDescriptor(descriptor.qd(0), this_0.le());
        var keyKind = keyDescriptor.jd();
        var tmp_4;
        var tmp_5;
        if (keyKind instanceof PrimitiveKind) {
          tmp_5 = true;
        } else {
          tmp_5 = equals(keyKind, ENUM_getInstance());
        }
        if (tmp_5) {
          // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.beginStructure.<anonymous>' call
          var tmp_6 = this.aq();
          // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
          // Inline function 'kotlinx.serialization.json.internal.cast' call
          var serialName_0 = descriptor.id();
          if (!(currentObject instanceof JsonObject)) {
            var tmp_7 = getKClass(JsonObject).a8();
            var tmp_8 = getKClassFromExpression(currentObject).a8();
            // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast.<anonymous>' call
            var tmp$ret$3 = this.pi();
            throw JsonDecodingException_0(-1, 'Expected ' + tmp_7 + ', but had ' + tmp_8 + ' as the serialized body of ' + serialName_0 + ' at element: ' + tmp$ret$3, toString(currentObject));
          }
          tmp_4 = new JsonTreeMapDecoder(tmp_6, currentObject);
        } else {
          if (this_0.nj_1.dl_1) {
            // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.beginStructure.<anonymous>' call
            var tmp_9 = this.aq();
            // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
            // Inline function 'kotlinx.serialization.json.internal.cast' call
            var serialName_1 = descriptor.id();
            if (!(currentObject instanceof JsonArray)) {
              var tmp_10 = getKClass(JsonArray).a8();
              var tmp_11 = getKClassFromExpression(currentObject).a8();
              // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast.<anonymous>' call
              var tmp$ret$7 = this.pi();
              throw JsonDecodingException_0(-1, 'Expected ' + tmp_10 + ', but had ' + tmp_11 + ' as the serialized body of ' + serialName_1 + ' at element: ' + tmp$ret$7, toString(currentObject));
            }
            tmp_4 = new JsonTreeListDecoder(tmp_9, currentObject);
          } else {
            throw InvalidKeyKindException(keyDescriptor);
          }
        }
        tmp = tmp_4;
      } else {
        var tmp_12 = this.aq();
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
        // Inline function 'kotlinx.serialization.json.internal.cast' call
        var serialName_2 = descriptor.id();
        if (!(currentObject instanceof JsonObject)) {
          var tmp_13 = getKClass(JsonObject).a8();
          var tmp_14 = getKClassFromExpression(currentObject).a8();
          // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast.<anonymous>' call
          var tmp$ret$12 = this.pi();
          throw JsonDecodingException_0(-1, 'Expected ' + tmp_13 + ', but had ' + tmp_14 + ' as the serialized body of ' + serialName_2 + ' at element: ' + tmp$ret$12, toString(currentObject));
        }
        tmp = new JsonTreeDecoder(tmp_12, currentObject, this.mq_1);
      }
    }
    return tmp;
  };
  protoOf(AbstractJsonTreeDecoder).ee = function (descriptor) {
  };
  protoOf(AbstractJsonTreeDecoder).wd = function () {
    var tmp = this.pq();
    return !(tmp instanceof JsonNull);
  };
  protoOf(AbstractJsonTreeDecoder).rq = function (tag) {
    return !(this.qq(tag) === JsonNull_getInstance());
  };
  protoOf(AbstractJsonTreeDecoder).ri = function (tag) {
    return this.rq((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).sq = function (tag) {
    var tmp$ret$4;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.qq(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp = getKClass(JsonPrimitive).a8();
        var tmp_0 = getKClassFromExpression(value).a8();
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast.<anonymous>' call
        var tmp$ret$0 = this.oq(tag);
        throw JsonDecodingException_0(-1, 'Expected ' + tmp + ', but had ' + tmp_0 + ' as the serialized body of ' + 'int' + ' at element: ' + tmp$ret$0, toString(value));
      }
      var literal = value;
      try {
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.decodeTaggedInt.<anonymous>' call
        var tmp0_elvis_lhs = get_int(literal);
        var tmp_1;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, literal, 'int', tag);
        } else {
          tmp_1 = tmp0_elvis_lhs;
        }
        tmp$ret$4 = tmp_1;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          unparsedPrimitive(this, literal, 'int', tag);
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$4;
  };
  protoOf(AbstractJsonTreeDecoder).si = function (tag) {
    return this.sq((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).tq = function (tag) {
    var tmp$ret$4;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.qq(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp = getKClass(JsonPrimitive).a8();
        var tmp_0 = getKClassFromExpression(value).a8();
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast.<anonymous>' call
        var tmp$ret$0 = this.oq(tag);
        throw JsonDecodingException_0(-1, 'Expected ' + tmp + ', but had ' + tmp_0 + ' as the serialized body of ' + 'double' + ' at element: ' + tmp$ret$0, toString(value));
      }
      var literal = value;
      try {
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.decodeTaggedDouble.<anonymous>' call
        var tmp0_elvis_lhs = get_double(literal);
        var tmp_1;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, literal, 'double', tag);
        } else {
          tmp_1 = tmp0_elvis_lhs;
        }
        tmp$ret$4 = tmp_1;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          unparsedPrimitive(this, literal, 'double', tag);
        } else {
          throw $p;
        }
      }
    }
    var result = tmp$ret$4;
    var specialFp = this.aq().nj_1.kl_1;
    if (specialFp || isFinite(result))
      return result;
    throw InvalidFloatingPointDecoded(result, tag, toString(this.pq()));
  };
  protoOf(AbstractJsonTreeDecoder).ti = function (tag) {
    return this.tq((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).uq = function (tag) {
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
    // Inline function 'kotlinx.serialization.json.internal.cast' call
    var value = this.qq(tag);
    if (!(value instanceof JsonPrimitive)) {
      var tmp = getKClass(JsonPrimitive).a8();
      var tmp_0 = getKClassFromExpression(value).a8();
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast.<anonymous>' call
      var tmp$ret$0 = this.oq(tag);
      throw JsonDecodingException_0(-1, 'Expected ' + tmp + ', but had ' + tmp_0 + ' as the serialized body of ' + 'string' + ' at element: ' + tmp$ret$0, toString(value));
    }
    var value_0 = value;
    if (!(value_0 instanceof JsonLiteral))
      throw JsonDecodingException_0(-1, "Expected string value for a non-null key '" + tag + "', got null literal instead at element: " + this.oq(tag), toString(this.pq()));
    if (!value_0.wl_1 && !this.aq().nj_1.cl_1) {
      throw JsonDecodingException_0(-1, "String literal for key '" + tag + "' should be quoted at element: " + this.oq(tag) + ".\nUse 'isLenient = true' in 'Json {}' builder to accept non-compliant JSON.", toString(this.pq()));
    }
    return value_0.yl_1;
  };
  protoOf(AbstractJsonTreeDecoder).ui = function (tag) {
    return this.uq((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  function coerceInputValue_0($this, descriptor, index, tag) {
    var tmp0 = $this.aq();
    var tmp$ret$1;
    $l$block_2: {
      // Inline function 'kotlinx.serialization.json.internal.tryCoerceValue' call
      var isOptional = descriptor.rd(index);
      var elementDescriptor = descriptor.qd(index);
      var tmp;
      if (isOptional && !elementDescriptor.cd()) {
        // Inline function 'kotlinx.serialization.json.internal.JsonTreeDecoder.coerceInputValue.<anonymous>' call
        var tmp_0 = $this.qq(tag);
        tmp = tmp_0 instanceof JsonNull;
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$1 = true;
        break $l$block_2;
      }
      if (equals(elementDescriptor.jd(), ENUM_getInstance())) {
        var tmp_1;
        if (elementDescriptor.cd()) {
          // Inline function 'kotlinx.serialization.json.internal.JsonTreeDecoder.coerceInputValue.<anonymous>' call
          var tmp_2 = $this.qq(tag);
          tmp_1 = tmp_2 instanceof JsonNull;
        } else {
          tmp_1 = false;
        }
        if (tmp_1) {
          tmp$ret$1 = false;
          break $l$block_2;
        }
        // Inline function 'kotlinx.serialization.json.internal.JsonTreeDecoder.coerceInputValue.<anonymous>' call
        var tmp_3 = $this.qq(tag);
        var tmp0_safe_receiver = tmp_3 instanceof JsonPrimitive ? tmp_3 : null;
        var tmp0_elvis_lhs = tmp0_safe_receiver == null ? null : get_contentOrNull(tmp0_safe_receiver);
        var tmp_4;
        if (tmp0_elvis_lhs == null) {
          tmp$ret$1 = false;
          break $l$block_2;
        } else {
          tmp_4 = tmp0_elvis_lhs;
        }
        var enumValue = tmp_4;
        var enumIndex = getJsonNameIndex(elementDescriptor, tmp0, enumValue);
        var coerceToNull = !tmp0.nj_1.fl_1 && elementDescriptor.cd();
        if (enumIndex === -3 && (isOptional || coerceToNull)) {
          // Inline function 'kotlinx.serialization.json.internal.tryCoerceValue.<anonymous>' call
          tmp$ret$1 = true;
          break $l$block_2;
        }
      }
      tmp$ret$1 = false;
    }
    return tmp$ret$1;
  }
  function absenceIsNull($this, descriptor, index) {
    $this.er_1 = (!$this.aq().nj_1.fl_1 && !descriptor.rd(index) && descriptor.qd(index).cd());
    return $this.er_1;
  }
  function JsonTreeDecoder(json, value, polymorphicDiscriminator, polyDescriptor) {
    polymorphicDiscriminator = polymorphicDiscriminator === VOID ? null : polymorphicDiscriminator;
    polyDescriptor = polyDescriptor === VOID ? null : polyDescriptor;
    AbstractJsonTreeDecoder.call(this, json, value, polymorphicDiscriminator);
    this.br_1 = value;
    this.cr_1 = polyDescriptor;
    this.dr_1 = 0;
    this.er_1 = false;
  }
  protoOf(JsonTreeDecoder).b1 = function () {
    return this.br_1;
  };
  protoOf(JsonTreeDecoder).ne = function (descriptor) {
    while (this.dr_1 < descriptor.ld()) {
      var _unary__edvuaz = this.dr_1;
      this.dr_1 = _unary__edvuaz + 1 | 0;
      var name = this.ii(descriptor, _unary__edvuaz);
      var index = this.dr_1 - 1 | 0;
      this.er_1 = false;
      var tmp;
      var tmp_0;
      // Inline function 'kotlin.collections.contains' call
      // Inline function 'kotlin.collections.containsKey' call
      var this_0 = this.b1();
      if ((isInterface(this_0, KtMap) ? this_0 : THROW_CCE()).c1(name)) {
        tmp_0 = true;
      } else {
        tmp_0 = absenceIsNull(this, descriptor, index);
      }
      if (tmp_0) {
        tmp = !this.nq_1.hl_1 || !coerceInputValue_0(this, descriptor, index, name);
      } else {
        tmp = false;
      }
      if (tmp) {
        return index;
      }
    }
    return -1;
  };
  protoOf(JsonTreeDecoder).wd = function () {
    return !this.er_1 && protoOf(AbstractJsonTreeDecoder).wd.call(this);
  };
  protoOf(JsonTreeDecoder).ji = function (descriptor, index) {
    var strategy = namingStrategy(descriptor, this.aq());
    var baseName = descriptor.nd(index);
    if (strategy == null) {
      if (!this.nq_1.ll_1)
        return baseName;
      if (this.b1().e1().y(baseName))
        return baseName;
    }
    var deserializationNamesMap_0 = deserializationNamesMap(this.aq(), descriptor);
    // Inline function 'kotlin.collections.find' call
    var tmp0 = this.b1().e1();
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var _iterator__ex2g4s = tmp0.e();
      while (_iterator__ex2g4s.f()) {
        var element = _iterator__ex2g4s.g();
        // Inline function 'kotlinx.serialization.json.internal.JsonTreeDecoder.elementName.<anonymous>' call
        if (deserializationNamesMap_0.d1(element) === index) {
          tmp$ret$1 = element;
          break $l$block;
        }
      }
      tmp$ret$1 = null;
    }
    var tmp0_safe_receiver = tmp$ret$1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      return tmp0_safe_receiver;
    }
    var fallbackName = strategy == null ? null : strategy.en(descriptor, index, baseName);
    return fallbackName == null ? baseName : fallbackName;
  };
  protoOf(JsonTreeDecoder).qq = function (tag) {
    return getValue(this.b1(), tag);
  };
  protoOf(JsonTreeDecoder).de = function (descriptor) {
    if (descriptor === this.cr_1) {
      var tmp = this.aq();
      var tmp1 = this.pq();
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var serialName = this.cr_1.id();
      if (!(tmp1 instanceof JsonObject)) {
        var tmp_0 = getKClass(JsonObject).a8();
        var tmp_1 = getKClassFromExpression(tmp1).a8();
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast.<anonymous>' call
        var tmp$ret$0 = this.pi();
        throw JsonDecodingException_0(-1, 'Expected ' + tmp_0 + ', but had ' + tmp_1 + ' as the serialized body of ' + serialName + ' at element: ' + tmp$ret$0, toString(tmp1));
      }
      return new JsonTreeDecoder(tmp, tmp1, this.mq_1, this.cr_1);
    }
    return protoOf(AbstractJsonTreeDecoder).de.call(this, descriptor);
  };
  protoOf(JsonTreeDecoder).ee = function (descriptor) {
    var tmp;
    if (this.nq_1.bl_1) {
      tmp = true;
    } else {
      var tmp_0 = descriptor.jd();
      tmp = tmp_0 instanceof PolymorphicKind;
    }
    if (tmp)
      return Unit_instance;
    var strategy = namingStrategy(descriptor, this.aq());
    var tmp_1;
    if (strategy == null && !this.nq_1.ll_1) {
      tmp_1 = jsonCachedSerialNames(descriptor);
    } else if (!(strategy == null)) {
      tmp_1 = deserializationNamesMap(this.aq(), descriptor).e1();
    } else {
      var tmp_2 = jsonCachedSerialNames(descriptor);
      var tmp0_safe_receiver = get_schemaCache(this.aq()).qp(descriptor, get_JsonDeserializationNamesKey());
      // Inline function 'kotlin.collections.orEmpty' call
      var tmp0_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.e1();
      var tmp$ret$0 = tmp0_elvis_lhs == null ? emptySet() : tmp0_elvis_lhs;
      tmp_1 = plus_0(tmp_2, tmp$ret$0);
    }
    var names = tmp_1;
    var _iterator__ex2g4s = this.b1().e1().e();
    while (_iterator__ex2g4s.f()) {
      var key = _iterator__ex2g4s.g();
      if (!names.y(key) && !(key === this.mq_1)) {
        throw UnknownKeyException(key, this.b1().toString());
      }
    }
  };
  function JsonTreeListDecoder(json, value) {
    AbstractJsonTreeDecoder.call(this, json, value);
    this.lr_1 = value;
    this.mr_1 = this.lr_1.i();
    this.nr_1 = -1;
  }
  protoOf(JsonTreeListDecoder).b1 = function () {
    return this.lr_1;
  };
  protoOf(JsonTreeListDecoder).ji = function (descriptor, index) {
    return index.toString();
  };
  protoOf(JsonTreeListDecoder).qq = function (tag) {
    return this.lr_1.h(toInt(tag));
  };
  protoOf(JsonTreeListDecoder).ne = function (descriptor) {
    while (this.nr_1 < (this.mr_1 - 1 | 0)) {
      this.nr_1 = this.nr_1 + 1 | 0;
      return this.nr_1;
    }
    return -1;
  };
  function JsonTreeMapDecoder(json, value) {
    JsonTreeDecoder.call(this, json, value);
    this.yr_1 = value;
    this.zr_1 = toList(this.yr_1.e1());
    this.as_1 = imul(this.zr_1.i(), 2);
    this.bs_1 = -1;
  }
  protoOf(JsonTreeMapDecoder).b1 = function () {
    return this.yr_1;
  };
  protoOf(JsonTreeMapDecoder).ji = function (descriptor, index) {
    var i = index / 2 | 0;
    return this.zr_1.h(i);
  };
  protoOf(JsonTreeMapDecoder).ne = function (descriptor) {
    while (this.bs_1 < (this.as_1 - 1 | 0)) {
      this.bs_1 = this.bs_1 + 1 | 0;
      return this.bs_1;
    }
    return -1;
  };
  protoOf(JsonTreeMapDecoder).qq = function (tag) {
    return (this.bs_1 % 2 | 0) === 0 ? JsonPrimitive_0(tag) : getValue(this.yr_1, tag);
  };
  protoOf(JsonTreeMapDecoder).ee = function (descriptor) {
  };
  function readPolymorphicJson(_this__u8e3s4, discriminator, element, deserializer) {
    return (new JsonTreeDecoder(_this__u8e3s4, element, discriminator, deserializer.uc())).ce(deserializer);
  }
  var WriteMode_OBJ_instance;
  var WriteMode_LIST_instance;
  var WriteMode_MAP_instance;
  var WriteMode_POLY_OBJ_instance;
  function values() {
    return [WriteMode_OBJ_getInstance(), WriteMode_LIST_getInstance(), WriteMode_MAP_getInstance(), WriteMode_POLY_OBJ_getInstance()];
  }
  function get_entries() {
    if ($ENTRIES == null)
      $ENTRIES = enumEntries(values());
    return $ENTRIES;
  }
  var WriteMode_entriesInitialized;
  function WriteMode_initEntries() {
    if (WriteMode_entriesInitialized)
      return Unit_instance;
    WriteMode_entriesInitialized = true;
    WriteMode_OBJ_instance = new WriteMode('OBJ', 0, _Char___init__impl__6a9atx(123), _Char___init__impl__6a9atx(125));
    WriteMode_LIST_instance = new WriteMode('LIST', 1, _Char___init__impl__6a9atx(91), _Char___init__impl__6a9atx(93));
    WriteMode_MAP_instance = new WriteMode('MAP', 2, _Char___init__impl__6a9atx(123), _Char___init__impl__6a9atx(125));
    WriteMode_POLY_OBJ_instance = new WriteMode('POLY_OBJ', 3, _Char___init__impl__6a9atx(91), _Char___init__impl__6a9atx(93));
  }
  var $ENTRIES;
  function WriteMode(name, ordinal, begin, end) {
    Enum.call(this, name, ordinal);
    this.fq_1 = begin;
    this.gq_1 = end;
  }
  function switchMode(_this__u8e3s4, desc) {
    var tmp0_subject = desc.jd();
    var tmp;
    if (tmp0_subject instanceof PolymorphicKind) {
      tmp = WriteMode_POLY_OBJ_getInstance();
    } else {
      if (equals(tmp0_subject, LIST_getInstance())) {
        tmp = WriteMode_LIST_getInstance();
      } else {
        if (equals(tmp0_subject, MAP_getInstance())) {
          // Inline function 'kotlinx.serialization.json.internal.selectMapMode' call
          var keyDescriptor = carrierDescriptor(desc.qd(0), _this__u8e3s4.le());
          var keyKind = keyDescriptor.jd();
          var tmp_0;
          var tmp_1;
          if (keyKind instanceof PrimitiveKind) {
            tmp_1 = true;
          } else {
            tmp_1 = equals(keyKind, ENUM_getInstance());
          }
          if (tmp_1) {
            // Inline function 'kotlinx.serialization.json.internal.switchMode.<anonymous>' call
            tmp_0 = WriteMode_MAP_getInstance();
          } else {
            if (_this__u8e3s4.nj_1.dl_1) {
              // Inline function 'kotlinx.serialization.json.internal.switchMode.<anonymous>' call
              tmp_0 = WriteMode_LIST_getInstance();
            } else {
              throw InvalidKeyKindException(keyDescriptor);
            }
          }
          tmp = tmp_0;
        } else {
          tmp = WriteMode_OBJ_getInstance();
        }
      }
    }
    return tmp;
  }
  function carrierDescriptor(_this__u8e3s4, module_0) {
    var tmp;
    if (equals(_this__u8e3s4.jd(), CONTEXTUAL_getInstance())) {
      var tmp0_safe_receiver = getContextualDescriptor(module_0, _this__u8e3s4);
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : carrierDescriptor(tmp0_safe_receiver, module_0);
      tmp = tmp1_elvis_lhs == null ? _this__u8e3s4 : tmp1_elvis_lhs;
    } else if (_this__u8e3s4.kd()) {
      tmp = carrierDescriptor(_this__u8e3s4.qd(0), module_0);
    } else {
      tmp = _this__u8e3s4;
    }
    return tmp;
  }
  function WriteMode_OBJ_getInstance() {
    WriteMode_initEntries();
    return WriteMode_OBJ_instance;
  }
  function WriteMode_LIST_getInstance() {
    WriteMode_initEntries();
    return WriteMode_LIST_instance;
  }
  function WriteMode_MAP_getInstance() {
    WriteMode_initEntries();
    return WriteMode_MAP_instance;
  }
  function WriteMode_POLY_OBJ_getInstance() {
    WriteMode_initEntries();
    return WriteMode_POLY_OBJ_instance;
  }
  function appendEscape($this, lastPosition, current) {
    $this.cs(lastPosition, current);
    return appendEsc($this, current + 1 | 0);
  }
  function decodedString($this, lastPosition, currentPosition) {
    $this.cs(lastPosition, currentPosition);
    var result = $this.fk_1.toString();
    $this.fk_1.j9(0);
    return result;
  }
  function takePeeked($this) {
    // Inline function 'kotlin.also' call
    var this_0 = ensureNotNull($this.ek_1);
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.takePeeked.<anonymous>' call
    $this.ek_1 = null;
    return this_0;
  }
  function wasUnquotedString($this) {
    return !(charSequenceGet($this.ds(), $this.ck_1 - 1 | 0) === _Char___init__impl__6a9atx(34));
  }
  function appendEsc($this, startPosition) {
    var currentPosition = startPosition;
    currentPosition = $this.es(currentPosition);
    if (currentPosition === -1) {
      $this.an('Expected escape sequence to continue, got EOF');
    }
    var tmp = $this.ds();
    var _unary__edvuaz = currentPosition;
    currentPosition = _unary__edvuaz + 1 | 0;
    var currentChar = charSequenceGet(tmp, _unary__edvuaz);
    if (currentChar === _Char___init__impl__6a9atx(117)) {
      return appendHex($this, $this.ds(), currentPosition);
    }
    // Inline function 'kotlin.code' call
    var tmp$ret$0 = Char__toInt_impl_vasixd(currentChar);
    var c = escapeToChar(tmp$ret$0);
    if (c === _Char___init__impl__6a9atx(0)) {
      $this.an("Invalid escaped char '" + toString_1(currentChar) + "'");
    }
    $this.fk_1.y5(c);
    return currentPosition;
  }
  function appendHex($this, source, startPos) {
    if ((startPos + 4 | 0) >= charSequenceLength(source)) {
      $this.ck_1 = startPos;
      $this.fs();
      if (($this.ck_1 + 4 | 0) >= charSequenceLength(source)) {
        $this.an('Unexpected EOF during unicode escape');
      }
      return appendHex($this, source, $this.ck_1);
    }
    $this.fk_1.y5(numberToChar((((fromHexChar($this, source, startPos) << 12) + (fromHexChar($this, source, startPos + 1 | 0) << 8) | 0) + (fromHexChar($this, source, startPos + 2 | 0) << 4) | 0) + fromHexChar($this, source, startPos + 3 | 0) | 0));
    return startPos + 4 | 0;
  }
  function fromHexChar($this, source, currentPosition) {
    var character = charSequenceGet(source, currentPosition);
    var tmp;
    if (_Char___init__impl__6a9atx(48) <= character ? character <= _Char___init__impl__6a9atx(57) : false) {
      // Inline function 'kotlin.code' call
      var tmp_0 = Char__toInt_impl_vasixd(character);
      // Inline function 'kotlin.code' call
      var this_0 = _Char___init__impl__6a9atx(48);
      tmp = tmp_0 - Char__toInt_impl_vasixd(this_0) | 0;
    } else if (_Char___init__impl__6a9atx(97) <= character ? character <= _Char___init__impl__6a9atx(102) : false) {
      // Inline function 'kotlin.code' call
      var tmp_1 = Char__toInt_impl_vasixd(character);
      // Inline function 'kotlin.code' call
      var this_1 = _Char___init__impl__6a9atx(97);
      tmp = (tmp_1 - Char__toInt_impl_vasixd(this_1) | 0) + 10 | 0;
    } else if (_Char___init__impl__6a9atx(65) <= character ? character <= _Char___init__impl__6a9atx(70) : false) {
      // Inline function 'kotlin.code' call
      var tmp_2 = Char__toInt_impl_vasixd(character);
      // Inline function 'kotlin.code' call
      var this_2 = _Char___init__impl__6a9atx(65);
      tmp = (tmp_2 - Char__toInt_impl_vasixd(this_2) | 0) + 10 | 0;
    } else {
      $this.an("Invalid toHexChar char '" + toString_1(character) + "' in unicode escape");
    }
    return tmp;
  }
  function consumeNumericLiteral$calculateExponent(exponentAccumulator, isExponentPositive) {
    var tmp;
    switch (isExponentPositive) {
      case false:
        // Inline function 'kotlin.math.pow' call

        var x = -exponentAccumulator.w1();
        tmp = Math.pow(10.0, x);
        break;
      case true:
        // Inline function 'kotlin.math.pow' call

        var x_0 = exponentAccumulator.w1();
        tmp = Math.pow(10.0, x_0);
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  }
  function AbstractJsonLexer() {
    this.ck_1 = 0;
    this.dk_1 = new JsonPath();
    this.ek_1 = null;
    this.fk_1 = StringBuilder_init_$Create$();
  }
  protoOf(AbstractJsonLexer).fs = function () {
  };
  protoOf(AbstractJsonLexer).tp = function () {
    var current = this.gs();
    var source = this.ds();
    if (current >= charSequenceLength(source) || current === -1)
      return false;
    if (charSequenceGet(source, current) === _Char___init__impl__6a9atx(44)) {
      this.ck_1 = this.ck_1 + 1 | 0;
      return true;
    }
    return false;
  };
  protoOf(AbstractJsonLexer).hs = function (c) {
    return c === _Char___init__impl__6a9atx(125) || c === _Char___init__impl__6a9atx(93) || (c === _Char___init__impl__6a9atx(58) || c === _Char___init__impl__6a9atx(44)) ? false : true;
  };
  protoOf(AbstractJsonLexer).gk = function () {
    var nextToken = this.ho();
    if (!(nextToken === 10)) {
      this.an('Expected EOF after parsing, but had ' + toString_1(charSequenceGet(this.ds(), this.ck_1 - 1 | 0)) + ' instead');
    }
  };
  protoOf(AbstractJsonLexer).bo = function (expected) {
    var token = this.ho();
    if (!(token === expected)) {
      this.is(expected);
    }
    return token;
  };
  protoOf(AbstractJsonLexer).js = function (expected) {
    if (this.ck_1 > 0 && expected === _Char___init__impl__6a9atx(34)) {
      var tmp$ret$1;
      $l$block: {
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.withPositionRollback' call
        var snapshot = this.ck_1;
        try {
          // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.unexpectedToken.<anonymous>' call
          this.ck_1 = this.ck_1 - 1 | 0;
          tmp$ret$1 = this.fo();
          break $l$block;
        }finally {
          this.ck_1 = snapshot;
        }
      }
      var inputLiteral = tmp$ret$1;
      if (inputLiteral === 'null') {
        this.zm("Expected string literal but 'null' literal was found", this.ck_1 - 1 | 0, "Use 'coerceInputValues = true' in 'Json {}' builder to coerce nulls if property has a default value.");
      }
    }
    this.is(charToTokenClass(expected));
  };
  protoOf(AbstractJsonLexer).ks = function (expectedToken, wasConsumed) {
    var expected = tokenDescription(expectedToken);
    var position = wasConsumed ? this.ck_1 - 1 | 0 : this.ck_1;
    var s = this.ck_1 === charSequenceLength(this.ds()) || position < 0 ? 'EOF' : toString_1(charSequenceGet(this.ds(), position));
    this.an('Expected ' + expected + ", but had '" + s + "' instead", position);
  };
  protoOf(AbstractJsonLexer).is = function (expectedToken, wasConsumed, $super) {
    wasConsumed = wasConsumed === VOID ? true : wasConsumed;
    return $super === VOID ? this.ks(expectedToken, wasConsumed) : $super.ks.call(this, expectedToken, wasConsumed);
  };
  protoOf(AbstractJsonLexer).co = function () {
    var source = this.ds();
    var cpos = this.ck_1;
    $l$loop_0: while (true) {
      cpos = this.es(cpos);
      if (cpos === -1)
        break $l$loop_0;
      var ch = charSequenceGet(source, cpos);
      if (ch === _Char___init__impl__6a9atx(32) || ch === _Char___init__impl__6a9atx(10) || ch === _Char___init__impl__6a9atx(13) || ch === _Char___init__impl__6a9atx(9)) {
        cpos = cpos + 1 | 0;
        continue $l$loop_0;
      }
      this.ck_1 = cpos;
      return charToTokenClass(ch);
    }
    this.ck_1 = cpos;
    return 10;
  };
  protoOf(AbstractJsonLexer).up = function (doConsume) {
    var current = this.gs();
    current = this.es(current);
    var len = charSequenceLength(this.ds()) - current | 0;
    if (len < 4 || current === -1)
      return false;
    var inductionVariable = 0;
    if (inductionVariable <= 3)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!(charSequenceGet('null', i) === charSequenceGet(this.ds(), current + i | 0)))
          return false;
      }
       while (inductionVariable <= 3);
    if (len > 4 && charToTokenClass(charSequenceGet(this.ds(), current + 4 | 0)) === 0)
      return false;
    if (doConsume) {
      this.ck_1 = current + 4 | 0;
    }
    return true;
  };
  protoOf(AbstractJsonLexer).hq = function (doConsume, $super) {
    doConsume = doConsume === VOID ? true : doConsume;
    return $super === VOID ? this.up(doConsume) : $super.up.call(this, doConsume);
  };
  protoOf(AbstractJsonLexer).vp = function (isLenient) {
    var token = this.co();
    var tmp;
    if (isLenient) {
      if (!(token === 1) && !(token === 0))
        return null;
      tmp = this.fo();
    } else {
      if (!(token === 1))
        return null;
      tmp = this.eo();
    }
    var string = tmp;
    this.ek_1 = string;
    return string;
  };
  protoOf(AbstractJsonLexer).ls = function () {
    this.ek_1 = null;
  };
  protoOf(AbstractJsonLexer).ms = function (startPos, endPos) {
    // Inline function 'kotlin.text.substring' call
    var this_0 = this.ds();
    return toString(charSequenceSubSequence(this_0, startPos, endPos));
  };
  protoOf(AbstractJsonLexer).eo = function () {
    if (!(this.ek_1 == null)) {
      return takePeeked(this);
    }
    return this.yp();
  };
  protoOf(AbstractJsonLexer).consumeString2 = function (source, startPosition, current) {
    var currentPosition = current;
    var lastPosition = startPosition;
    var char = charSequenceGet(source, currentPosition);
    var usedAppend = false;
    while (!(char === _Char___init__impl__6a9atx(34))) {
      if (char === _Char___init__impl__6a9atx(92)) {
        usedAppend = true;
        currentPosition = this.es(appendEscape(this, lastPosition, currentPosition));
        if (currentPosition === -1) {
          this.an('Unexpected EOF', currentPosition);
        }
        lastPosition = currentPosition;
      } else {
        currentPosition = currentPosition + 1 | 0;
        if (currentPosition >= charSequenceLength(source)) {
          usedAppend = true;
          this.cs(lastPosition, currentPosition);
          currentPosition = this.es(currentPosition);
          if (currentPosition === -1) {
            this.an('Unexpected EOF', currentPosition);
          }
          lastPosition = currentPosition;
        }
      }
      char = charSequenceGet(source, currentPosition);
    }
    var tmp;
    if (!usedAppend) {
      tmp = this.ms(lastPosition, currentPosition);
    } else {
      tmp = decodedString(this, lastPosition, currentPosition);
    }
    var string = tmp;
    this.ck_1 = currentPosition + 1 | 0;
    return string;
  };
  protoOf(AbstractJsonLexer).zp = function () {
    var result = this.fo();
    if (result === 'null' && wasUnquotedString(this)) {
      this.an("Unexpected 'null' value instead of string literal");
    }
    return result;
  };
  protoOf(AbstractJsonLexer).fo = function () {
    if (!(this.ek_1 == null)) {
      return takePeeked(this);
    }
    var current = this.gs();
    if (current >= charSequenceLength(this.ds()) || current === -1) {
      this.an('EOF', current);
    }
    var token = charToTokenClass(charSequenceGet(this.ds(), current));
    if (token === 1) {
      return this.eo();
    }
    if (!(token === 0)) {
      this.an('Expected beginning of the string, but got ' + toString_1(charSequenceGet(this.ds(), current)));
    }
    var usedAppend = false;
    while (charToTokenClass(charSequenceGet(this.ds(), current)) === 0) {
      current = current + 1 | 0;
      if (current >= charSequenceLength(this.ds())) {
        usedAppend = true;
        this.cs(this.ck_1, current);
        var eof = this.es(current);
        if (eof === -1) {
          this.ck_1 = current;
          return decodedString(this, 0, 0);
        } else {
          current = eof;
        }
      }
    }
    var tmp;
    if (!usedAppend) {
      tmp = this.ms(this.ck_1, current);
    } else {
      tmp = decodedString(this, this.ck_1, current);
    }
    var result = tmp;
    this.ck_1 = current;
    return result;
  };
  protoOf(AbstractJsonLexer).cs = function (fromIndex, toIndex) {
    this.fk_1.f9(this.ds(), fromIndex, toIndex);
  };
  protoOf(AbstractJsonLexer).xp = function (allowLenientStrings) {
    // Inline function 'kotlin.collections.mutableListOf' call
    var tokenStack = ArrayList_init_$Create$();
    var lastToken = this.co();
    if (!(lastToken === 8) && !(lastToken === 6)) {
      this.fo();
      return Unit_instance;
    }
    $l$loop: while (true) {
      lastToken = this.co();
      if (lastToken === 1) {
        if (allowLenientStrings)
          this.fo();
        else
          this.yp();
        continue $l$loop;
      }
      var tmp0_subject = lastToken;
      if (tmp0_subject === 8 || tmp0_subject === 6) {
        tokenStack.n(lastToken);
      } else if (tmp0_subject === 9) {
        if (!(last(tokenStack) === 8))
          throw JsonDecodingException_0(this.ck_1, 'found ] instead of } at path: ' + this.dk_1.toString(), this.ds());
        removeLast(tokenStack);
      } else if (tmp0_subject === 7) {
        if (!(last(tokenStack) === 6))
          throw JsonDecodingException_0(this.ck_1, 'found } instead of ] at path: ' + this.dk_1.toString(), this.ds());
        removeLast(tokenStack);
      } else if (tmp0_subject === 10) {
        this.an('Unexpected end of input due to malformed JSON during ignoring unknown keys');
      }
      this.ho();
      if (tokenStack.i() === 0)
        return Unit_instance;
    }
  };
  protoOf(AbstractJsonLexer).toString = function () {
    return "JsonReader(source='" + toString(this.ds()) + "', currentPosition=" + this.ck_1 + ')';
  };
  protoOf(AbstractJsonLexer).wp = function (key) {
    var processed = this.ms(0, this.ck_1);
    var lastIndexOf_0 = lastIndexOf(processed, key);
    this.zm("Encountered an unknown key '" + key + "'", lastIndexOf_0, "Use 'ignoreUnknownKeys = true' in 'Json {}' builder to ignore unknown keys.");
  };
  protoOf(AbstractJsonLexer).zm = function (message, position, hint) {
    var tmp;
    // Inline function 'kotlin.text.isEmpty' call
    if (charSequenceLength(hint) === 0) {
      tmp = '';
    } else {
      tmp = '\n' + hint;
    }
    var hintMessage = tmp;
    throw JsonDecodingException_0(position, message + ' at path: ' + this.dk_1.nn() + hintMessage, this.ds());
  };
  protoOf(AbstractJsonLexer).an = function (message, position, hint, $super) {
    position = position === VOID ? this.ck_1 : position;
    hint = hint === VOID ? '' : hint;
    return $super === VOID ? this.zm(message, position, hint) : $super.zm.call(this, message, position, hint);
  };
  protoOf(AbstractJsonLexer).am = function () {
    var current = this.gs();
    current = this.es(current);
    if (current >= charSequenceLength(this.ds()) || current === -1) {
      this.an('EOF');
    }
    var tmp;
    if (charSequenceGet(this.ds(), current) === _Char___init__impl__6a9atx(34)) {
      current = current + 1 | 0;
      if (current === charSequenceLength(this.ds())) {
        this.an('EOF');
      }
      tmp = true;
    } else {
      tmp = false;
    }
    var hasQuotation = tmp;
    var accumulator = new Long(0, 0);
    var exponentAccumulator = new Long(0, 0);
    var isNegative = false;
    var isExponentPositive = false;
    var hasExponent = false;
    var start = current;
    $l$loop_4: while (!(current === charSequenceLength(this.ds()))) {
      var ch = charSequenceGet(this.ds(), current);
      if ((ch === _Char___init__impl__6a9atx(101) || ch === _Char___init__impl__6a9atx(69)) && !hasExponent) {
        if (current === start) {
          this.an('Unexpected symbol ' + toString_1(ch) + ' in numeric literal');
        }
        isExponentPositive = true;
        hasExponent = true;
        current = current + 1 | 0;
        continue $l$loop_4;
      }
      if (ch === _Char___init__impl__6a9atx(45) && hasExponent) {
        if (current === start) {
          this.an("Unexpected symbol '-' in numeric literal");
        }
        isExponentPositive = false;
        current = current + 1 | 0;
        continue $l$loop_4;
      }
      if (ch === _Char___init__impl__6a9atx(43) && hasExponent) {
        if (current === start) {
          this.an("Unexpected symbol '+' in numeric literal");
        }
        isExponentPositive = true;
        current = current + 1 | 0;
        continue $l$loop_4;
      }
      if (ch === _Char___init__impl__6a9atx(45)) {
        if (!(current === start)) {
          this.an("Unexpected symbol '-' in numeric literal");
        }
        isNegative = true;
        current = current + 1 | 0;
        continue $l$loop_4;
      }
      var token = charToTokenClass(ch);
      if (!(token === 0))
        break $l$loop_4;
      current = current + 1 | 0;
      var digit = Char__minus_impl_a2frrh(ch, _Char___init__impl__6a9atx(48));
      if (!(0 <= digit ? digit <= 9 : false)) {
        this.an("Unexpected symbol '" + toString_1(ch) + "' in numeric literal");
      }
      if (hasExponent) {
        // Inline function 'kotlin.Long.times' call
        // Inline function 'kotlin.Long.plus' call
        exponentAccumulator = exponentAccumulator.q1(toLong(10)).o1(toLong(digit));
        continue $l$loop_4;
      }
      // Inline function 'kotlin.Long.times' call
      // Inline function 'kotlin.Long.minus' call
      accumulator = accumulator.q1(toLong(10)).p1(toLong(digit));
      if (accumulator.v(new Long(0, 0)) > 0) {
        this.an('Numeric value overflow');
      }
    }
    var hasChars = !(current === start);
    if (start === current || (isNegative && start === (current - 1 | 0))) {
      this.an('Expected numeric literal');
    }
    if (hasQuotation) {
      if (!hasChars) {
        this.an('EOF');
      }
      if (!(charSequenceGet(this.ds(), current) === _Char___init__impl__6a9atx(34))) {
        this.an('Expected closing quotation mark');
      }
      current = current + 1 | 0;
    }
    this.ck_1 = current;
    if (hasExponent) {
      var doubleAccumulator = accumulator.w1() * consumeNumericLiteral$calculateExponent(exponentAccumulator, isExponentPositive);
      if (doubleAccumulator > (new Long(-1, 2147483647)).w1() || doubleAccumulator < (new Long(0, -2147483648)).w1()) {
        this.an('Numeric value overflow');
      }
      // Inline function 'kotlin.math.floor' call
      if (!(Math.floor(doubleAccumulator) === doubleAccumulator)) {
        this.an("Can't convert " + doubleAccumulator + ' to Long');
      }
      accumulator = numberToLong(doubleAccumulator);
    }
    var tmp_0;
    if (isNegative) {
      tmp_0 = accumulator;
    } else if (!accumulator.equals(new Long(0, -2147483648))) {
      tmp_0 = accumulator.s1();
    } else {
      this.an('Numeric value overflow');
    }
    return tmp_0;
  };
  function charToTokenClass(c) {
    var tmp;
    // Inline function 'kotlin.code' call
    if (Char__toInt_impl_vasixd(c) < 126) {
      var tmp_0 = CharMappings_getInstance().os_1;
      // Inline function 'kotlin.code' call
      tmp = tmp_0[Char__toInt_impl_vasixd(c)];
    } else {
      tmp = 0;
    }
    return tmp;
  }
  function tokenDescription(token) {
    return token === 1 ? "quotation mark '\"'" : token === 2 ? "string escape sequence '\\'" : token === 4 ? "comma ','" : token === 5 ? "colon ':'" : token === 6 ? "start of the object '{'" : token === 7 ? "end of the object '}'" : token === 8 ? "start of the array '['" : token === 9 ? "end of the array ']'" : token === 10 ? 'end of the input' : token === 127 ? 'invalid token' : 'valid token';
  }
  function escapeToChar(c) {
    return c < 117 ? CharMappings_getInstance().ns_1[c] : _Char___init__impl__6a9atx(0);
  }
  function initEscape($this) {
    var inductionVariable = 0;
    if (inductionVariable <= 31)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        initC2ESC($this, i, _Char___init__impl__6a9atx(117));
      }
       while (inductionVariable <= 31);
    initC2ESC($this, 8, _Char___init__impl__6a9atx(98));
    initC2ESC($this, 9, _Char___init__impl__6a9atx(116));
    initC2ESC($this, 10, _Char___init__impl__6a9atx(110));
    initC2ESC($this, 12, _Char___init__impl__6a9atx(102));
    initC2ESC($this, 13, _Char___init__impl__6a9atx(114));
    initC2ESC_0($this, _Char___init__impl__6a9atx(47), _Char___init__impl__6a9atx(47));
    initC2ESC_0($this, _Char___init__impl__6a9atx(34), _Char___init__impl__6a9atx(34));
    initC2ESC_0($this, _Char___init__impl__6a9atx(92), _Char___init__impl__6a9atx(92));
  }
  function initCharToToken($this) {
    var inductionVariable = 0;
    if (inductionVariable <= 32)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        initC2TC($this, i, 127);
      }
       while (inductionVariable <= 32);
    initC2TC($this, 9, 3);
    initC2TC($this, 10, 3);
    initC2TC($this, 13, 3);
    initC2TC($this, 32, 3);
    initC2TC_0($this, _Char___init__impl__6a9atx(44), 4);
    initC2TC_0($this, _Char___init__impl__6a9atx(58), 5);
    initC2TC_0($this, _Char___init__impl__6a9atx(123), 6);
    initC2TC_0($this, _Char___init__impl__6a9atx(125), 7);
    initC2TC_0($this, _Char___init__impl__6a9atx(91), 8);
    initC2TC_0($this, _Char___init__impl__6a9atx(93), 9);
    initC2TC_0($this, _Char___init__impl__6a9atx(34), 1);
    initC2TC_0($this, _Char___init__impl__6a9atx(92), 2);
  }
  function initC2ESC($this, c, esc) {
    if (!(esc === _Char___init__impl__6a9atx(117))) {
      // Inline function 'kotlin.code' call
      var tmp$ret$0 = Char__toInt_impl_vasixd(esc);
      $this.ns_1[tmp$ret$0] = numberToChar(c);
    }
  }
  function initC2ESC_0($this, c, esc) {
    // Inline function 'kotlin.code' call
    var tmp$ret$0 = Char__toInt_impl_vasixd(c);
    return initC2ESC($this, tmp$ret$0, esc);
  }
  function initC2TC($this, c, cl) {
    $this.os_1[c] = cl;
  }
  function initC2TC_0($this, c, cl) {
    // Inline function 'kotlin.code' call
    var tmp$ret$0 = Char__toInt_impl_vasixd(c);
    return initC2TC($this, tmp$ret$0, cl);
  }
  function CharMappings() {
    CharMappings_instance = this;
    this.ns_1 = charArray(117);
    this.os_1 = new Int8Array(126);
    initEscape(this);
    initCharToToken(this);
  }
  var CharMappings_instance;
  function CharMappings_getInstance() {
    if (CharMappings_instance == null)
      new CharMappings();
    return CharMappings_instance;
  }
  function StringJsonLexerWithComments(source) {
    StringJsonLexer.call(this, source);
  }
  protoOf(StringJsonLexerWithComments).ho = function () {
    var source = this.ds();
    var cpos = this.gs();
    if (cpos >= source.length || cpos === -1)
      return 10;
    this.ck_1 = cpos + 1 | 0;
    return charToTokenClass(charSequenceGet(source, cpos));
  };
  protoOf(StringJsonLexerWithComments).do = function () {
    var current = this.gs();
    if (current >= this.ds().length || current === -1)
      return false;
    return this.hs(charSequenceGet(this.ds(), current));
  };
  protoOf(StringJsonLexerWithComments).sp = function (expected) {
    var source = this.ds();
    var current = this.gs();
    if (current >= source.length || current === -1) {
      this.ck_1 = -1;
      this.js(expected);
    }
    var c = charSequenceGet(source, current);
    this.ck_1 = current + 1 | 0;
    if (c === expected)
      return Unit_instance;
    else {
      this.js(expected);
    }
  };
  protoOf(StringJsonLexerWithComments).co = function () {
    var source = this.ds();
    var cpos = this.gs();
    if (cpos >= source.length || cpos === -1)
      return 10;
    this.ck_1 = cpos;
    return charToTokenClass(charSequenceGet(source, cpos));
  };
  protoOf(StringJsonLexerWithComments).gs = function () {
    var current = this.ck_1;
    if (current === -1)
      return current;
    var source = this.ds();
    $l$loop_1: while (current < source.length) {
      var c = charSequenceGet(source, current);
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.isWs' call
      if (c === _Char___init__impl__6a9atx(32) || c === _Char___init__impl__6a9atx(10) || c === _Char___init__impl__6a9atx(13) || c === _Char___init__impl__6a9atx(9)) {
        current = current + 1 | 0;
        continue $l$loop_1;
      }
      if (c === _Char___init__impl__6a9atx(47) && (current + 1 | 0) < source.length) {
        var tmp0_subject = charSequenceGet(source, current + 1 | 0);
        if (tmp0_subject === _Char___init__impl__6a9atx(47)) {
          current = indexOf_0(source, _Char___init__impl__6a9atx(10), current + 2 | 0);
          if (current === -1) {
            current = source.length;
          } else {
            current = current + 1 | 0;
          }
          continue $l$loop_1;
        } else if (tmp0_subject === _Char___init__impl__6a9atx(42)) {
          current = indexOf(source, '*/', current + 2 | 0);
          if (current === -1) {
            this.ck_1 = source.length;
            this.an('Expected end of the block comment: "*/", but had EOF instead');
          } else {
            current = current + 2 | 0;
          }
          continue $l$loop_1;
        }
      }
      break $l$loop_1;
    }
    this.ck_1 = current;
    return current;
  };
  function StringJsonLexer(source) {
    AbstractJsonLexer.call(this);
    this.ys_1 = source;
  }
  protoOf(StringJsonLexer).ds = function () {
    return this.ys_1;
  };
  protoOf(StringJsonLexer).es = function (position) {
    return position < this.ds().length ? position : -1;
  };
  protoOf(StringJsonLexer).ho = function () {
    var source = this.ds();
    var cpos = this.ck_1;
    $l$loop: while (!(cpos === -1) && cpos < source.length) {
      var _unary__edvuaz = cpos;
      cpos = _unary__edvuaz + 1 | 0;
      var c = charSequenceGet(source, _unary__edvuaz);
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.isWs' call
      if (c === _Char___init__impl__6a9atx(32) || c === _Char___init__impl__6a9atx(10) || c === _Char___init__impl__6a9atx(13) || c === _Char___init__impl__6a9atx(9))
        continue $l$loop;
      this.ck_1 = cpos;
      return charToTokenClass(c);
    }
    this.ck_1 = source.length;
    return 10;
  };
  protoOf(StringJsonLexer).do = function () {
    var current = this.ck_1;
    if (current === -1)
      return false;
    var source = this.ds();
    $l$loop: while (current < source.length) {
      var c = charSequenceGet(source, current);
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.isWs' call
      if (c === _Char___init__impl__6a9atx(32) || c === _Char___init__impl__6a9atx(10) || c === _Char___init__impl__6a9atx(13) || c === _Char___init__impl__6a9atx(9)) {
        current = current + 1 | 0;
        continue $l$loop;
      }
      this.ck_1 = current;
      return this.hs(c);
    }
    this.ck_1 = current;
    return false;
  };
  protoOf(StringJsonLexer).gs = function () {
    var current = this.ck_1;
    if (current === -1)
      return current;
    var source = this.ds();
    $l$loop: while (current < source.length) {
      var c = charSequenceGet(source, current);
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.isWs' call
      if (c === _Char___init__impl__6a9atx(32) || c === _Char___init__impl__6a9atx(10) || c === _Char___init__impl__6a9atx(13) || c === _Char___init__impl__6a9atx(9)) {
        current = current + 1 | 0;
      } else {
        break $l$loop;
      }
    }
    this.ck_1 = current;
    return current;
  };
  protoOf(StringJsonLexer).sp = function (expected) {
    if (this.ck_1 === -1) {
      this.js(expected);
    }
    var source = this.ds();
    var cpos = this.ck_1;
    $l$loop: while (cpos < source.length) {
      var _unary__edvuaz = cpos;
      cpos = _unary__edvuaz + 1 | 0;
      var c = charSequenceGet(source, _unary__edvuaz);
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.isWs' call
      if (c === _Char___init__impl__6a9atx(32) || c === _Char___init__impl__6a9atx(10) || c === _Char___init__impl__6a9atx(13) || c === _Char___init__impl__6a9atx(9))
        continue $l$loop;
      this.ck_1 = cpos;
      if (c === expected)
        return Unit_instance;
      this.js(expected);
    }
    this.ck_1 = -1;
    this.js(expected);
  };
  protoOf(StringJsonLexer).yp = function () {
    this.sp(_Char___init__impl__6a9atx(34));
    var current = this.ck_1;
    var closingQuote = indexOf_0(this.ds(), _Char___init__impl__6a9atx(34), current);
    if (closingQuote === -1) {
      this.fo();
      this.ks(1, false);
    }
    var inductionVariable = current;
    if (inductionVariable < closingQuote)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (charSequenceGet(this.ds(), i) === _Char___init__impl__6a9atx(92)) {
          return this.consumeString2(this.ds(), this.ck_1, i);
        }
      }
       while (inductionVariable < closingQuote);
    this.ck_1 = closingQuote + 1 | 0;
    // Inline function 'kotlin.text.substring' call
    // Inline function 'kotlin.js.asDynamic' call
    return this.ds().substring(current, closingQuote);
  };
  protoOf(StringJsonLexer).cq = function (keyToMatch, isLenient) {
    var positionSnapshot = this.ck_1;
    try {
      if (!(this.ho() === 6))
        return null;
      var firstKey = this.vp(isLenient);
      if (!(firstKey === keyToMatch))
        return null;
      this.ls();
      if (!(this.ho() === 5))
        return null;
      return this.vp(isLenient);
    }finally {
      this.ck_1 = positionSnapshot;
      this.ls();
    }
  };
  function StringJsonLexer_0(json, source) {
    return !json.nj_1.pl_1 ? new StringJsonLexer(source) : new StringJsonLexerWithComments(source);
  }
  function get_schemaCache(_this__u8e3s4) {
    return _this__u8e3s4.pj_1;
  }
  function JsonToStringWriter() {
    this.sj_1 = StringBuilder_init_$Create$_0(128);
  }
  protoOf(JsonToStringWriter).om = function (value) {
    this.sj_1.i9(value);
  };
  protoOf(JsonToStringWriter).jm = function (char) {
    this.sj_1.y5(char);
  };
  protoOf(JsonToStringWriter).lm = function (text) {
    this.sj_1.x5(text);
  };
  protoOf(JsonToStringWriter).qm = function (text) {
    printQuoted(this.sj_1, text);
  };
  protoOf(JsonToStringWriter).tj = function () {
    this.sj_1.k9();
  };
  protoOf(JsonToStringWriter).toString = function () {
    return this.sj_1.toString();
  };
  function createMapForCache(initialCapacity) {
    return HashMap_init_$Create$(initialCapacity);
  }
  //region block: post-declaration
  protoOf(PolymorphismValidator).jj = contextual;
  //endregion
  //region block: init
  Companion_instance = new Companion();
  Companion_instance_0 = new Companion_0();
  Companion_instance_1 = new Companion_1();
  Companion_instance_2 = new Companion_2();
  Tombstone_instance = new Tombstone();
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = Json_0;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlinx-serialization-kotlinx-serialization-json.js.map
