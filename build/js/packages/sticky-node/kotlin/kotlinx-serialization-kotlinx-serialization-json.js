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
  var EmptySerializersModule = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.x1;
  var protoOf = kotlin_kotlin.$_$.n8;
  var initMetadataForObject = kotlin_kotlin.$_$.u7;
  var VOID = kotlin_kotlin.$_$.f;
  var Unit_instance = kotlin_kotlin.$_$.b4;
  var initMetadataForClass = kotlin_kotlin.$_$.p7;
  var toString = kotlin_kotlin.$_$.r8;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.e1;
  var charSequenceLength = kotlin_kotlin.$_$.g7;
  var charSequenceGet = kotlin_kotlin.$_$.f7;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.q1;
  var equals = kotlin_kotlin.$_$.i7;
  var toString_0 = kotlin_kotlin.$_$.qb;
  var Enum = kotlin_kotlin.$_$.ja;
  var Decoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.k1;
  var CompositeDecoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.i1;
  var initMetadataForInterface = kotlin_kotlin.$_$.s7;
  var initMetadataForCompanion = kotlin_kotlin.$_$.q7;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.a1;
  var hashCode = kotlin_kotlin.$_$.o7;
  var joinToString = kotlin_kotlin.$_$.l5;
  var THROW_CCE = kotlin_kotlin.$_$.ra;
  var KtMap = kotlin_kotlin.$_$.k4;
  var SerializerFactory = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.u1;
  var getKClassFromExpression = kotlin_kotlin.$_$.d;
  var getBooleanHashCode = kotlin_kotlin.$_$.k7;
  var getStringHashCode = kotlin_kotlin.$_$.n7;
  var KtList = kotlin_kotlin.$_$.i4;
  var NumberFormatException_init_$Create$ = kotlin_kotlin.$_$.k1;
  var numberRangeToNumber = kotlin_kotlin.$_$.i8;
  var ClosedRange = kotlin_kotlin.$_$.t8;
  var isInterface = kotlin_kotlin.$_$.d8;
  var contains = kotlin_kotlin.$_$.x8;
  var toDouble = kotlin_kotlin.$_$.s9;
  var StringCompanionObject_instance = kotlin_kotlin.$_$.q3;
  var serializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.r;
  var InlinePrimitiveDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.r1;
  var SEALED_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.d;
  var buildSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.e1;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.nb;
  var KSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.b2;
  var MapSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.p;
  var SerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.c1;
  var ListSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.o;
  var STRING_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.e;
  var ENUM_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.g;
  var PrimitiveSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.y;
  var toLongOrNull = kotlin_kotlin.$_$.v9;
  var toULongOrNull = kotlin_kotlin.$_$.y9;
  var ULong = kotlin_kotlin.$_$.ya;
  var Companion_getInstance = kotlin_kotlin.$_$.z3;
  var serializer_0 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.v;
  var _ULong___get_data__impl__fggpzb = kotlin_kotlin.$_$.r2;
  var toDoubleOrNull = kotlin_kotlin.$_$.r9;
  var toBooleanStrictOrNull = kotlin_kotlin.$_$.q9;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.g1;
  var lazy = kotlin_kotlin.$_$.mb;
  var get_isNullable = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.b1;
  var get_isInline = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.a1;
  var get_annotations = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.z;
  var KProperty1 = kotlin_kotlin.$_$.c9;
  var getPropertyCallableRef = kotlin_kotlin.$_$.m7;
  var Encoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.l1;
  var CompositeEncoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.j1;
  var toLong = kotlin_kotlin.$_$.p8;
  var _UInt___init__impl__l7qpdl = kotlin_kotlin.$_$.h2;
  var UInt__toString_impl_dbgl21 = kotlin_kotlin.$_$.j2;
  var _ULong___init__impl__c78o9k = kotlin_kotlin.$_$.q2;
  var ULong__toString_impl_f9au7k = kotlin_kotlin.$_$.s2;
  var _UByte___init__impl__g9hnc4 = kotlin_kotlin.$_$.y1;
  var UByte__toString_impl_v72jg = kotlin_kotlin.$_$.a2;
  var _UShort___init__impl__jigrne = kotlin_kotlin.$_$.z2;
  var UShort__toString_impl_edaoee = kotlin_kotlin.$_$.b3;
  var ElementMarker = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.o1;
  var captureStack = kotlin_kotlin.$_$.c7;
  var SerializationException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.e2;
  var SerializationException_init_$Init$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.b;
  var charSequenceSubSequence = kotlin_kotlin.$_$.h7;
  var coerceAtLeast = kotlin_kotlin.$_$.u8;
  var coerceAtMost = kotlin_kotlin.$_$.v8;
  var CLASS_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.h;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.s;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.j;
  var singleOrNull = kotlin_kotlin.$_$.y5;
  var emptyMap = kotlin_kotlin.$_$.f5;
  var getValue = kotlin_kotlin.$_$.i5;
  var fillArrayVal = kotlin_kotlin.$_$.j7;
  var copyOf = kotlin_kotlin.$_$.b5;
  var copyOf_0 = kotlin_kotlin.$_$.c5;
  var LIST_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.i;
  var DeepRecursiveFunction = kotlin_kotlin.$_$.ha;
  var invoke = kotlin_kotlin.$_$.ib;
  var CoroutineImpl = kotlin_kotlin.$_$.w6;
  var DeepRecursiveScope = kotlin_kotlin.$_$.ia;
  var Unit = kotlin_kotlin.$_$.bb;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.h6;
  var initMetadataForLambda = kotlin_kotlin.$_$.t7;
  var initMetadataForCoroutine = kotlin_kotlin.$_$.r7;
  var SealedClassSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.d2;
  var jsonCachedSerialNames = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.v1;
  var ENUM = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.d1;
  var PrimitiveKind = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.x;
  var PolymorphicKind = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.w;
  var CONTEXTUAL_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.f;
  var MAP_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.j;
  var contextual = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.y1;
  var SerializersModuleCollector = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.z1;
  var AbstractDecoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.g1;
  var AbstractPolymorphicSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.m1;
  var DeserializationStrategy = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.a2;
  var getKClass = kotlin_kotlin.$_$.e;
  var findPolymorphicSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.g2;
  var ensureNotNull = kotlin_kotlin.$_$.hb;
  var substringBefore = kotlin_kotlin.$_$.p9;
  var removeSuffix = kotlin_kotlin.$_$.k9;
  var substringAfter = kotlin_kotlin.$_$.o9;
  var contains_0 = kotlin_kotlin.$_$.e9;
  var plus = kotlin_kotlin.$_$.ob;
  var MissingFieldException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.c2;
  var IllegalArgumentException = kotlin_kotlin.$_$.ma;
  var isFinite = kotlin_kotlin.$_$.kb;
  var isFinite_0 = kotlin_kotlin.$_$.jb;
  var toUInt = kotlin_kotlin.$_$.x9;
  var _UInt___get_data__impl__f0vqqw = kotlin_kotlin.$_$.i2;
  var toULong = kotlin_kotlin.$_$.z9;
  var toUByte = kotlin_kotlin.$_$.w9;
  var _UByte___get_data__impl__jof9qr = kotlin_kotlin.$_$.z1;
  var toUShort = kotlin_kotlin.$_$.aa;
  var _UShort___get_data__impl__g0245 = kotlin_kotlin.$_$.a3;
  var objectCreate = kotlin_kotlin.$_$.m8;
  var AbstractEncoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.h1;
  var OBJECT_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.k;
  var findPolymorphicSerializer_0 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.h2;
  var SerializationStrategy = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.f2;
  var toString_1 = kotlin_kotlin.$_$.t1;
  var Companion_getInstance_0 = kotlin_kotlin.$_$.y3;
  var serializer_1 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.t;
  var Companion_getInstance_1 = kotlin_kotlin.$_$.x3;
  var serializer_2 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.u;
  var Companion_getInstance_2 = kotlin_kotlin.$_$.a4;
  var serializer_3 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.s;
  var setOf = kotlin_kotlin.$_$.x5;
  var Char__toInt_impl_vasixd = kotlin_kotlin.$_$.s1;
  var numberToChar = kotlin_kotlin.$_$.j8;
  var equals_0 = kotlin_kotlin.$_$.f9;
  var toByte = kotlin_kotlin.$_$.o8;
  var startsWith = kotlin_kotlin.$_$.n9;
  var NamedValueDecoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.s1;
  var toShort = kotlin_kotlin.$_$.q8;
  var single = kotlin_kotlin.$_$.l9;
  var Char = kotlin_kotlin.$_$.ga;
  var emptySet = kotlin_kotlin.$_$.g5;
  var plus_0 = kotlin_kotlin.$_$.u5;
  var toInt = kotlin_kotlin.$_$.u9;
  var toList = kotlin_kotlin.$_$.b6;
  var enumEntries = kotlin_kotlin.$_$.y6;
  var getContextualDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.f1;
  var last = kotlin_kotlin.$_$.p5;
  var removeLast = kotlin_kotlin.$_$.w5;
  var lastIndexOf = kotlin_kotlin.$_$.j9;
  var Long = kotlin_kotlin.$_$.na;
  var Char__minus_impl_a2frrh = kotlin_kotlin.$_$.r1;
  var numberToLong = kotlin_kotlin.$_$.l8;
  var charArray = kotlin_kotlin.$_$.e7;
  var indexOf = kotlin_kotlin.$_$.g9;
  var indexOf_0 = kotlin_kotlin.$_$.h9;
  var StringBuilder_init_$Create$_0 = kotlin_kotlin.$_$.z;
  var HashMap_init_$Create$ = kotlin_kotlin.$_$.l;
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
  initMetadataForInterface(JsonDecoder, 'JsonDecoder', VOID, VOID, [Decoder, CompositeDecoder]);
  initMetadataForCompanion(Companion);
  initMetadataForClass(JsonElement, 'JsonElement', VOID, VOID, VOID, VOID, VOID, {0: JsonElementSerializer_getInstance});
  initMetadataForCompanion(Companion_0);
  initMetadataForClass(JsonObject, 'JsonObject', VOID, JsonElement, [JsonElement, KtMap], VOID, VOID, {0: JsonObjectSerializer_getInstance});
  initMetadataForClass(JsonPrimitive, 'JsonPrimitive', VOID, JsonElement, VOID, VOID, VOID, {0: JsonPrimitiveSerializer_getInstance});
  initMetadataForObject(JsonNull, 'JsonNull', VOID, JsonPrimitive, [JsonPrimitive, SerializerFactory], VOID, VOID, {0: JsonNullSerializer_getInstance});
  initMetadataForCompanion(Companion_1);
  initMetadataForClass(JsonLiteral, 'JsonLiteral', VOID, JsonPrimitive);
  initMetadataForCompanion(Companion_2);
  initMetadataForClass(JsonArray, 'JsonArray', VOID, JsonElement, [JsonElement, KtList], VOID, VOID, {0: JsonArraySerializer_getInstance});
  initMetadataForObject(JsonElementSerializer, 'JsonElementSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(JsonObjectDescriptor, 'JsonObjectDescriptor', VOID, VOID, [SerialDescriptor]);
  initMetadataForObject(JsonObjectSerializer, 'JsonObjectSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(JsonArrayDescriptor, 'JsonArrayDescriptor', VOID, VOID, [SerialDescriptor]);
  initMetadataForObject(JsonArraySerializer, 'JsonArraySerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(JsonPrimitiveSerializer, 'JsonPrimitiveSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(JsonNullSerializer, 'JsonNullSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(JsonLiteralSerializer, 'JsonLiteralSerializer', VOID, VOID, [KSerializer]);
  initMetadataForClass(defer$1, VOID, VOID, VOID, [SerialDescriptor]);
  initMetadataForInterface(JsonEncoder, 'JsonEncoder', VOID, VOID, [Encoder, CompositeEncoder]);
  initMetadataForClass(Composer, 'Composer');
  initMetadataForClass(ComposerForUnsignedNumbers, 'ComposerForUnsignedNumbers', VOID, Composer);
  initMetadataForClass(ComposerForUnquotedLiterals, 'ComposerForUnquotedLiterals', VOID, Composer);
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
  initMetadataForClass(StreamingJsonDecoder, 'StreamingJsonDecoder', VOID, AbstractDecoder, [JsonDecoder, AbstractDecoder]);
  initMetadataForClass(JsonDecoderForUnsignedTypes, 'JsonDecoderForUnsignedTypes', VOID, AbstractDecoder);
  initMetadataForClass(StreamingJsonEncoder, 'StreamingJsonEncoder', VOID, AbstractEncoder, [JsonEncoder, AbstractEncoder]);
  initMetadataForClass(AbstractJsonTreeDecoder, 'AbstractJsonTreeDecoder', VOID, NamedValueDecoder, [NamedValueDecoder, JsonDecoder]);
  initMetadataForClass(JsonTreeDecoder, 'JsonTreeDecoder', VOID, AbstractJsonTreeDecoder);
  initMetadataForClass(JsonTreeListDecoder, 'JsonTreeListDecoder', VOID, AbstractJsonTreeDecoder);
  initMetadataForClass(JsonPrimitiveDecoder, 'JsonPrimitiveDecoder', VOID, AbstractJsonTreeDecoder);
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
    this.a12_1 = configuration;
    this.b12_1 = serializersModule;
    this.c12_1 = new DescriptorSchemaCache();
  }
  protoOf(Json).lm = function () {
    return this.b12_1;
  };
  protoOf(Json).d12 = function (serializer, value) {
    var result = new JsonToStringWriter();
    try {
      encodeByWriter(this, result, serializer, value);
      return result.toString();
    }finally {
      result.g12();
    }
  };
  protoOf(Json).e12 = function (deserializer, string) {
    var lexer = StringJsonLexer_0(this, string);
    var input = new StreamingJsonDecoder(this, WriteMode_OBJ_getInstance(), lexer, deserializer.ri(), null);
    var result = input.vl(deserializer);
    lexer.t12();
    return result;
  };
  function Json_0(from, builderAction) {
    from = from === VOID ? Default_getInstance() : from;
    var builder = new JsonBuilder(from);
    builderAction(builder);
    var conf = builder.m13();
    return new JsonImpl(conf, builder.l13_1);
  }
  function JsonBuilder(json) {
    this.u12_1 = json.a12_1.n13_1;
    this.v12_1 = json.a12_1.s13_1;
    this.w12_1 = json.a12_1.o13_1;
    this.x12_1 = json.a12_1.p13_1;
    this.y12_1 = json.a12_1.r13_1;
    this.z12_1 = json.a12_1.t13_1;
    this.a13_1 = json.a12_1.u13_1;
    this.b13_1 = json.a12_1.w13_1;
    this.c13_1 = json.a12_1.d14_1;
    this.d13_1 = json.a12_1.y13_1;
    this.e13_1 = json.a12_1.z13_1;
    this.f13_1 = json.a12_1.a14_1;
    this.g13_1 = json.a12_1.b14_1;
    this.h13_1 = json.a12_1.c14_1;
    this.i13_1 = json.a12_1.x13_1;
    this.j13_1 = json.a12_1.q13_1;
    this.k13_1 = json.a12_1.v13_1;
    this.l13_1 = json.lm();
  }
  protoOf(JsonBuilder).m13 = function () {
    if (this.k13_1) {
      // Inline function 'kotlin.require' call
      if (!(this.b13_1 === 'type')) {
        // Inline function 'kotlinx.serialization.json.JsonBuilder.build.<anonymous>' call
        var message = 'Class discriminator should not be specified when array polymorphism is specified';
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
      // Inline function 'kotlin.require' call
      if (!this.c13_1.equals(ClassDiscriminatorMode_POLYMORPHIC_getInstance())) {
        // Inline function 'kotlinx.serialization.json.JsonBuilder.build.<anonymous>' call
        var message_0 = 'useArrayPolymorphism option can only be used if classDiscriminatorMode in a default POLYMORPHIC state.';
        throw IllegalArgumentException_init_$Create$(toString(message_0));
      }
    }
    if (!this.y12_1) {
      // Inline function 'kotlin.require' call
      if (!(this.z12_1 === '    ')) {
        // Inline function 'kotlinx.serialization.json.JsonBuilder.build.<anonymous>' call
        var message_1 = 'Indent should not be specified when default printing mode is used';
        throw IllegalArgumentException_init_$Create$(toString(message_1));
      }
    } else if (!(this.z12_1 === '    ')) {
      var tmp3 = this.z12_1;
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
        var message_2 = 'Only whitespace, tab, newline and carriage return are allowed as pretty print symbols. Had ' + this.z12_1;
        throw IllegalArgumentException_init_$Create$(toString(message_2));
      }
    }
    return new JsonConfiguration(this.u12_1, this.w12_1, this.x12_1, this.j13_1, this.y12_1, this.v12_1, this.z12_1, this.a13_1, this.k13_1, this.b13_1, this.i13_1, this.d13_1, this.e13_1, this.f13_1, this.g13_1, this.h13_1, this.c13_1);
  };
  function validateConfiguration($this) {
    if (equals($this.lm(), EmptySerializersModule()))
      return Unit_instance;
    var collector = new PolymorphismValidator($this.a12_1.v13_1, $this.a12_1.w13_1);
    $this.lm().i11(collector);
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
    this.n13_1 = encodeDefaults;
    this.o13_1 = ignoreUnknownKeys;
    this.p13_1 = isLenient;
    this.q13_1 = allowStructuredMapKeys;
    this.r13_1 = prettyPrint;
    this.s13_1 = explicitNulls;
    this.t13_1 = prettyPrintIndent;
    this.u13_1 = coerceInputValues;
    this.v13_1 = useArrayPolymorphism;
    this.w13_1 = classDiscriminator;
    this.x13_1 = allowSpecialFloatingPointValues;
    this.y13_1 = useAlternativeNames;
    this.z13_1 = namingStrategy;
    this.a14_1 = decodeEnumsCaseInsensitive;
    this.b14_1 = allowTrailingComma;
    this.c14_1 = allowComments;
    this.d14_1 = classDiscriminatorMode;
  }
  protoOf(JsonConfiguration).toString = function () {
    return 'JsonConfiguration(encodeDefaults=' + this.n13_1 + ', ignoreUnknownKeys=' + this.o13_1 + ', isLenient=' + this.p13_1 + ', ' + ('allowStructuredMapKeys=' + this.q13_1 + ', prettyPrint=' + this.r13_1 + ', explicitNulls=' + this.s13_1 + ', ') + ("prettyPrintIndent='" + this.t13_1 + "', coerceInputValues=" + this.u13_1 + ', useArrayPolymorphism=' + this.v13_1 + ', ') + ("classDiscriminator='" + this.w13_1 + "', allowSpecialFloatingPointValues=" + this.x13_1 + ', ') + ('useAlternativeNames=' + this.y13_1 + ', namingStrategy=' + toString_0(this.z13_1) + ', decodeEnumsCaseInsensitive=' + this.a14_1 + ', ') + ('allowTrailingComma=' + this.b14_1 + ', allowComments=' + this.c14_1 + ', classDiscriminatorMode=' + this.d14_1.toString() + ')');
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
  function JsonDecoder() {
  }
  function get_jsonUnquotedLiteralDescriptor() {
    _init_properties_JsonElement_kt__7cbdc2();
    return jsonUnquotedLiteralDescriptor;
  }
  var jsonUnquotedLiteralDescriptor;
  function Companion() {
  }
  var Companion_instance;
  function Companion_getInstance_3() {
    return Companion_instance;
  }
  function JsonElement() {
  }
  function Companion_0() {
  }
  var Companion_instance_0;
  function Companion_getInstance_4() {
    return Companion_instance_0;
  }
  function JsonObject$toString$lambda(_destruct__k2r9zo) {
    // Inline function 'kotlin.collections.component1' call
    var k = _destruct__k2r9zo.q1();
    // Inline function 'kotlin.collections.component2' call
    var v = _destruct__k2r9zo.r1();
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    // Inline function 'kotlinx.serialization.json.JsonObject.toString.<anonymous>.<anonymous>' call
    printQuoted(this_0, k);
    this_0.r7(_Char___init__impl__6a9atx(58));
    this_0.p7(v);
    return this_0.toString();
  }
  function JsonObject(content) {
    JsonElement.call(this);
    this.g14_1 = content;
  }
  protoOf(JsonObject).equals = function (other) {
    return equals(this.g14_1, other);
  };
  protoOf(JsonObject).hashCode = function () {
    return hashCode(this.g14_1);
  };
  protoOf(JsonObject).toString = function () {
    var tmp = this.g14_1.x1();
    return joinToString(tmp, ',', '{', '}', VOID, VOID, JsonObject$toString$lambda);
  };
  protoOf(JsonObject).h14 = function (key) {
    return this.g14_1.s1(key);
  };
  protoOf(JsonObject).s1 = function (key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return false;
    return this.h14((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  };
  protoOf(JsonObject).i14 = function (key) {
    return this.g14_1.u1(key);
  };
  protoOf(JsonObject).u1 = function (key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return null;
    return this.i14((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  };
  protoOf(JsonObject).m = function () {
    return this.g14_1.m();
  };
  protoOf(JsonObject).x1 = function () {
    return this.g14_1.x1();
  };
  protoOf(JsonObject).v1 = function () {
    return this.g14_1.v1();
  };
  protoOf(JsonObject).l = function () {
    return this.g14_1.l();
  };
  protoOf(JsonObject).w1 = function () {
    return this.g14_1.w1();
  };
  function JsonNull() {
    JsonNull_instance = this;
    JsonPrimitive.call(this);
    this.j14_1 = 'null';
  }
  protoOf(JsonNull).k14 = function () {
    return this.j14_1;
  };
  protoOf(JsonNull).l14 = function () {
    return JsonNullSerializer_getInstance();
  };
  protoOf(JsonNull).qt = function (typeParamsSerializers) {
    return this.l14();
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
  function Companion_getInstance_5() {
    return Companion_instance_1;
  }
  function JsonPrimitive() {
    JsonElement.call(this);
  }
  protoOf(JsonPrimitive).toString = function () {
    return this.k14();
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
    this.m14_1 = isString;
    this.n14_1 = coerceToInlineType;
    this.o14_1 = toString(body);
    if (!(this.n14_1 == null)) {
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.require' call
      if (!this.n14_1.fk()) {
        // Inline function 'kotlin.require.<anonymous>' call
        var message = 'Failed requirement.';
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
    }
  }
  protoOf(JsonLiteral).k14 = function () {
    return this.o14_1;
  };
  protoOf(JsonLiteral).toString = function () {
    var tmp;
    if (this.m14_1) {
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.apply' call
      var this_0 = StringBuilder_init_$Create$();
      // Inline function 'kotlinx.serialization.json.JsonLiteral.toString.<anonymous>' call
      printQuoted(this_0, this.o14_1);
      tmp = this_0.toString();
    } else {
      tmp = this.o14_1;
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
    if (!(this.m14_1 === other.m14_1))
      return false;
    if (!(this.o14_1 === other.o14_1))
      return false;
    return true;
  };
  protoOf(JsonLiteral).hashCode = function () {
    var result = getBooleanHashCode(this.m14_1);
    result = imul(31, result) + getStringHashCode(this.o14_1) | 0;
    return result;
  };
  function Companion_2() {
  }
  var Companion_instance_2;
  function Companion_getInstance_6() {
    return Companion_instance_2;
  }
  function JsonArray(content) {
    JsonElement.call(this);
    this.p14_1 = content;
  }
  protoOf(JsonArray).equals = function (other) {
    return equals(this.p14_1, other);
  };
  protoOf(JsonArray).hashCode = function () {
    return hashCode(this.p14_1);
  };
  protoOf(JsonArray).toString = function () {
    return joinToString(this.p14_1, ',', '[', ']');
  };
  protoOf(JsonArray).n = function (index) {
    return this.p14_1.n(index);
  };
  protoOf(JsonArray).m = function () {
    return this.p14_1.m();
  };
  protoOf(JsonArray).i = function () {
    return this.p14_1.i();
  };
  protoOf(JsonArray).o1 = function (index) {
    return this.p14_1.o1(index);
  };
  protoOf(JsonArray).l = function () {
    return this.p14_1.l();
  };
  function get_booleanOrNull(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    return toBooleanStrictOrNull_0(_this__u8e3s4.k14());
  }
  function get_int(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    // Inline function 'kotlinx.serialization.json.mapExceptions' call
    var tmp;
    try {
      // Inline function 'kotlinx.serialization.json.<get-int>.<anonymous>' call
      tmp = (new StringJsonLexer(_this__u8e3s4.k14())).q14();
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
      throw NumberFormatException_init_$Create$(_this__u8e3s4.k14() + ' is not an Int');
    return result.x();
  }
  function get_long(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    // Inline function 'kotlinx.serialization.json.mapExceptions' call
    var tmp;
    try {
      // Inline function 'kotlinx.serialization.json.<get-long>.<anonymous>' call
      tmp = (new StringJsonLexer(_this__u8e3s4.k14())).q14();
    } catch ($p) {
      var tmp_0;
      if ($p instanceof JsonDecodingException) {
        var e = $p;
        throw NumberFormatException_init_$Create$(e.message);
      } else {
        throw $p;
      }
    }
    return tmp;
  }
  function get_float(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    // Inline function 'kotlin.text.toFloat' call
    var this_0 = _this__u8e3s4.k14();
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return toDouble(this_0);
  }
  function get_double(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    return toDouble(_this__u8e3s4.k14());
  }
  function get_contentOrNull(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    var tmp;
    if (_this__u8e3s4 instanceof JsonNull) {
      tmp = null;
    } else {
      tmp = _this__u8e3s4.k14();
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
  function JsonElementSerializer$descriptor$lambda($this$buildSerialDescriptor) {
    $this$buildSerialDescriptor.cj('JsonPrimitive', defer(JsonElementSerializer$descriptor$lambda$lambda));
    $this$buildSerialDescriptor.cj('JsonNull', defer(JsonElementSerializer$descriptor$lambda$lambda_0));
    $this$buildSerialDescriptor.cj('JsonLiteral', defer(JsonElementSerializer$descriptor$lambda$lambda_1));
    $this$buildSerialDescriptor.cj('JsonObject', defer(JsonElementSerializer$descriptor$lambda$lambda_2));
    $this$buildSerialDescriptor.cj('JsonArray', defer(JsonElementSerializer$descriptor$lambda$lambda_3));
    return Unit_instance;
  }
  function JsonElementSerializer$descriptor$lambda$lambda() {
    return JsonPrimitiveSerializer_getInstance().r14_1;
  }
  function JsonElementSerializer$descriptor$lambda$lambda_0() {
    return JsonNullSerializer_getInstance().s14_1;
  }
  function JsonElementSerializer$descriptor$lambda$lambda_1() {
    return JsonLiteralSerializer_getInstance().t14_1;
  }
  function JsonElementSerializer$descriptor$lambda$lambda_2() {
    return JsonObjectSerializer_getInstance().u14_1;
  }
  function JsonElementSerializer$descriptor$lambda$lambda_3() {
    return JsonArraySerializer_getInstance().v14_1;
  }
  function JsonElementSerializer() {
    JsonElementSerializer_instance = this;
    var tmp = this;
    var tmp_0 = SEALED_getInstance();
    tmp.w14_1 = buildSerialDescriptor('kotlinx.serialization.json.JsonElement', tmp_0, [], JsonElementSerializer$descriptor$lambda);
  }
  protoOf(JsonElementSerializer).ri = function () {
    return this.w14_1;
  };
  protoOf(JsonElementSerializer).x14 = function (encoder, value) {
    verify(encoder);
    if (value instanceof JsonPrimitive) {
      encoder.nn(JsonPrimitiveSerializer_getInstance(), value);
    } else {
      if (value instanceof JsonObject) {
        encoder.nn(JsonObjectSerializer_getInstance(), value);
      } else {
        if (value instanceof JsonArray) {
          encoder.nn(JsonArraySerializer_getInstance(), value);
        } else {
          noWhenBranchMatchedException();
        }
      }
    }
  };
  protoOf(JsonElementSerializer).si = function (encoder, value) {
    return this.x14(encoder, value instanceof JsonElement ? value : THROW_CCE());
  };
  protoOf(JsonElementSerializer).ti = function (decoder) {
    var input = asJsonDecoder(decoder);
    return input.f14();
  };
  var JsonElementSerializer_instance;
  function JsonElementSerializer_getInstance() {
    if (JsonElementSerializer_instance == null)
      new JsonElementSerializer();
    return JsonElementSerializer_instance;
  }
  function JsonObjectDescriptor() {
    JsonObjectDescriptor_instance = this;
    this.y14_1 = MapSerializer(serializer(StringCompanionObject_instance), JsonElementSerializer_getInstance()).ri();
    this.z14_1 = 'kotlinx.serialization.json.JsonObject';
  }
  protoOf(JsonObjectDescriptor).sj = function () {
    return this.z14_1;
  };
  protoOf(JsonObjectDescriptor).ik = function (index) {
    return this.y14_1.ik(index);
  };
  protoOf(JsonObjectDescriptor).jk = function (name) {
    return this.y14_1.jk(name);
  };
  protoOf(JsonObjectDescriptor).kk = function (index) {
    return this.y14_1.kk(index);
  };
  protoOf(JsonObjectDescriptor).lk = function (index) {
    return this.y14_1.lk(index);
  };
  protoOf(JsonObjectDescriptor).mk = function (index) {
    return this.y14_1.mk(index);
  };
  protoOf(JsonObjectDescriptor).ek = function () {
    return this.y14_1.ek();
  };
  protoOf(JsonObjectDescriptor).ak = function () {
    return this.y14_1.ak();
  };
  protoOf(JsonObjectDescriptor).fk = function () {
    return this.y14_1.fk();
  };
  protoOf(JsonObjectDescriptor).gk = function () {
    return this.y14_1.gk();
  };
  protoOf(JsonObjectDescriptor).hk = function () {
    return this.y14_1.hk();
  };
  var JsonObjectDescriptor_instance;
  function JsonObjectDescriptor_getInstance() {
    if (JsonObjectDescriptor_instance == null)
      new JsonObjectDescriptor();
    return JsonObjectDescriptor_instance;
  }
  function JsonObjectSerializer() {
    JsonObjectSerializer_instance = this;
    this.u14_1 = JsonObjectDescriptor_getInstance();
  }
  protoOf(JsonObjectSerializer).ri = function () {
    return this.u14_1;
  };
  protoOf(JsonObjectSerializer).a15 = function (encoder, value) {
    verify(encoder);
    MapSerializer(serializer(StringCompanionObject_instance), JsonElementSerializer_getInstance()).si(encoder, value);
  };
  protoOf(JsonObjectSerializer).si = function (encoder, value) {
    return this.a15(encoder, value instanceof JsonObject ? value : THROW_CCE());
  };
  protoOf(JsonObjectSerializer).ti = function (decoder) {
    verify_0(decoder);
    return new JsonObject(MapSerializer(serializer(StringCompanionObject_instance), JsonElementSerializer_getInstance()).ti(decoder));
  };
  var JsonObjectSerializer_instance;
  function JsonObjectSerializer_getInstance() {
    if (JsonObjectSerializer_instance == null)
      new JsonObjectSerializer();
    return JsonObjectSerializer_instance;
  }
  function JsonArrayDescriptor() {
    JsonArrayDescriptor_instance = this;
    this.b15_1 = ListSerializer(JsonElementSerializer_getInstance()).ri();
    this.c15_1 = 'kotlinx.serialization.json.JsonArray';
  }
  protoOf(JsonArrayDescriptor).sj = function () {
    return this.c15_1;
  };
  protoOf(JsonArrayDescriptor).ik = function (index) {
    return this.b15_1.ik(index);
  };
  protoOf(JsonArrayDescriptor).jk = function (name) {
    return this.b15_1.jk(name);
  };
  protoOf(JsonArrayDescriptor).kk = function (index) {
    return this.b15_1.kk(index);
  };
  protoOf(JsonArrayDescriptor).lk = function (index) {
    return this.b15_1.lk(index);
  };
  protoOf(JsonArrayDescriptor).mk = function (index) {
    return this.b15_1.mk(index);
  };
  protoOf(JsonArrayDescriptor).ek = function () {
    return this.b15_1.ek();
  };
  protoOf(JsonArrayDescriptor).ak = function () {
    return this.b15_1.ak();
  };
  protoOf(JsonArrayDescriptor).fk = function () {
    return this.b15_1.fk();
  };
  protoOf(JsonArrayDescriptor).gk = function () {
    return this.b15_1.gk();
  };
  protoOf(JsonArrayDescriptor).hk = function () {
    return this.b15_1.hk();
  };
  var JsonArrayDescriptor_instance;
  function JsonArrayDescriptor_getInstance() {
    if (JsonArrayDescriptor_instance == null)
      new JsonArrayDescriptor();
    return JsonArrayDescriptor_instance;
  }
  function JsonArraySerializer() {
    JsonArraySerializer_instance = this;
    this.v14_1 = JsonArrayDescriptor_getInstance();
  }
  protoOf(JsonArraySerializer).ri = function () {
    return this.v14_1;
  };
  protoOf(JsonArraySerializer).d15 = function (encoder, value) {
    verify(encoder);
    ListSerializer(JsonElementSerializer_getInstance()).si(encoder, value);
  };
  protoOf(JsonArraySerializer).si = function (encoder, value) {
    return this.d15(encoder, value instanceof JsonArray ? value : THROW_CCE());
  };
  protoOf(JsonArraySerializer).ti = function (decoder) {
    verify_0(decoder);
    return new JsonArray(ListSerializer(JsonElementSerializer_getInstance()).ti(decoder));
  };
  var JsonArraySerializer_instance;
  function JsonArraySerializer_getInstance() {
    if (JsonArraySerializer_instance == null)
      new JsonArraySerializer();
    return JsonArraySerializer_instance;
  }
  function defer(deferred) {
    return new defer$1(deferred);
  }
  function JsonPrimitiveSerializer() {
    JsonPrimitiveSerializer_instance = this;
    this.r14_1 = buildSerialDescriptor('kotlinx.serialization.json.JsonPrimitive', STRING_getInstance(), []);
  }
  protoOf(JsonPrimitiveSerializer).ri = function () {
    return this.r14_1;
  };
  protoOf(JsonPrimitiveSerializer).e15 = function (encoder, value) {
    verify(encoder);
    var tmp;
    if (value instanceof JsonNull) {
      encoder.nn(JsonNullSerializer_getInstance(), JsonNull_getInstance());
      tmp = Unit_instance;
    } else {
      var tmp_0 = JsonLiteralSerializer_getInstance();
      encoder.nn(tmp_0, value instanceof JsonLiteral ? value : THROW_CCE());
      tmp = Unit_instance;
    }
    return tmp;
  };
  protoOf(JsonPrimitiveSerializer).si = function (encoder, value) {
    return this.e15(encoder, value instanceof JsonPrimitive ? value : THROW_CCE());
  };
  protoOf(JsonPrimitiveSerializer).ti = function (decoder) {
    var result = asJsonDecoder(decoder).f14();
    if (!(result instanceof JsonPrimitive))
      throw JsonDecodingException_0(-1, 'Unexpected JSON element, expected JsonPrimitive, had ' + toString(getKClassFromExpression(result)), toString(result));
    return result;
  };
  var JsonPrimitiveSerializer_instance;
  function JsonPrimitiveSerializer_getInstance() {
    if (JsonPrimitiveSerializer_instance == null)
      new JsonPrimitiveSerializer();
    return JsonPrimitiveSerializer_instance;
  }
  function JsonNullSerializer() {
    JsonNullSerializer_instance = this;
    this.s14_1 = buildSerialDescriptor('kotlinx.serialization.json.JsonNull', ENUM_getInstance(), []);
  }
  protoOf(JsonNullSerializer).ri = function () {
    return this.s14_1;
  };
  protoOf(JsonNullSerializer).f15 = function (encoder, value) {
    verify(encoder);
    encoder.rm();
  };
  protoOf(JsonNullSerializer).si = function (encoder, value) {
    return this.f15(encoder, value instanceof JsonNull ? value : THROW_CCE());
  };
  protoOf(JsonNullSerializer).ti = function (decoder) {
    verify_0(decoder);
    if (decoder.il()) {
      throw new JsonDecodingException("Expected 'null' literal");
    }
    decoder.jl();
    return JsonNull_getInstance();
  };
  var JsonNullSerializer_instance;
  function JsonNullSerializer_getInstance() {
    if (JsonNullSerializer_instance == null)
      new JsonNullSerializer();
    return JsonNullSerializer_instance;
  }
  function JsonLiteralSerializer() {
    JsonLiteralSerializer_instance = this;
    this.t14_1 = PrimitiveSerialDescriptor('kotlinx.serialization.json.JsonLiteral', STRING_getInstance());
  }
  protoOf(JsonLiteralSerializer).ri = function () {
    return this.t14_1;
  };
  protoOf(JsonLiteralSerializer).g15 = function (encoder, value) {
    verify(encoder);
    if (value.m14_1) {
      return encoder.an(value.o14_1);
    }
    if (!(value.n14_1 == null)) {
      return encoder.bn(value.n14_1).an(value.o14_1);
    }
    var tmp0_safe_receiver = toLongOrNull(value.o14_1);
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      return encoder.wm(tmp0_safe_receiver);
    }
    var tmp1_safe_receiver = toULongOrNull(value.o14_1);
    var tmp = tmp1_safe_receiver;
    if ((tmp == null ? null : new ULong(tmp)) == null)
      null;
    else {
      var tmp_0 = tmp1_safe_receiver;
      // Inline function 'kotlin.let' call
      var it = (tmp_0 == null ? null : new ULong(tmp_0)).bi_1;
      var tmp_1 = encoder.bn(serializer_0(Companion_getInstance()).ri());
      // Inline function 'kotlin.ULong.toLong' call
      var tmp$ret$1 = _ULong___get_data__impl__fggpzb(it);
      tmp_1.wm(tmp$ret$1);
      return Unit_instance;
    }
    var tmp2_safe_receiver = toDoubleOrNull(value.o14_1);
    if (tmp2_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      return encoder.ym(tmp2_safe_receiver);
    }
    var tmp3_safe_receiver = toBooleanStrictOrNull(value.o14_1);
    if (tmp3_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      return encoder.sm(tmp3_safe_receiver);
    }
    encoder.an(value.o14_1);
  };
  protoOf(JsonLiteralSerializer).si = function (encoder, value) {
    return this.g15(encoder, value instanceof JsonLiteral ? value : THROW_CCE());
  };
  protoOf(JsonLiteralSerializer).ti = function (decoder) {
    var result = asJsonDecoder(decoder).f14();
    if (!(result instanceof JsonLiteral))
      throw JsonDecodingException_0(-1, 'Unexpected JSON element, expected JsonLiteral, had ' + toString(getKClassFromExpression(result)), toString(result));
    return result;
  };
  var JsonLiteralSerializer_instance;
  function JsonLiteralSerializer_getInstance() {
    if (JsonLiteralSerializer_instance == null)
      new JsonLiteralSerializer();
    return JsonLiteralSerializer_instance;
  }
  function verify(encoder) {
    asJsonEncoder(encoder);
  }
  function asJsonDecoder(_this__u8e3s4) {
    var tmp0_elvis_lhs = isInterface(_this__u8e3s4, JsonDecoder) ? _this__u8e3s4 : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$('This serializer can be used only with Json format.' + ('Expected Decoder to be JsonDecoder, got ' + toString(getKClassFromExpression(_this__u8e3s4))));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function verify_0(decoder) {
    asJsonDecoder(decoder);
  }
  function asJsonEncoder(_this__u8e3s4) {
    var tmp0_elvis_lhs = isInterface(_this__u8e3s4, JsonEncoder) ? _this__u8e3s4 : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$('This serializer can be used only with Json format.' + ('Expected Encoder to be JsonEncoder, got ' + toString(getKClassFromExpression(_this__u8e3s4))));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function _get_original__l7ku1m($this) {
    var tmp0 = $this.h15_1;
    // Inline function 'kotlin.getValue' call
    original$factory();
    return tmp0.r1();
  }
  function defer$1($deferred) {
    this.h15_1 = lazy($deferred);
  }
  protoOf(defer$1).sj = function () {
    return _get_original__l7ku1m(this).sj();
  };
  protoOf(defer$1).ek = function () {
    return _get_original__l7ku1m(this).ek();
  };
  protoOf(defer$1).gk = function () {
    return _get_original__l7ku1m(this).gk();
  };
  protoOf(defer$1).ik = function (index) {
    return _get_original__l7ku1m(this).ik(index);
  };
  protoOf(defer$1).jk = function (name) {
    return _get_original__l7ku1m(this).jk(name);
  };
  protoOf(defer$1).kk = function (index) {
    return _get_original__l7ku1m(this).kk(index);
  };
  protoOf(defer$1).lk = function (index) {
    return _get_original__l7ku1m(this).lk(index);
  };
  protoOf(defer$1).mk = function (index) {
    return _get_original__l7ku1m(this).mk(index);
  };
  function original$factory() {
    return getPropertyCallableRef('original', 1, KProperty1, function (receiver) {
      return _get_original__l7ku1m(receiver);
    }, null);
  }
  function JsonEncoder() {
  }
  function Composer(writer) {
    this.i15_1 = writer;
    this.j15_1 = true;
  }
  protoOf(Composer).k15 = function () {
    this.j15_1 = true;
  };
  protoOf(Composer).l15 = function () {
    return Unit_instance;
  };
  protoOf(Composer).m15 = function () {
    this.j15_1 = false;
  };
  protoOf(Composer).n15 = function () {
    this.j15_1 = false;
  };
  protoOf(Composer).o15 = function () {
    return Unit_instance;
  };
  protoOf(Composer).p15 = function (v) {
    return this.i15_1.q15(v);
  };
  protoOf(Composer).r15 = function (v) {
    return this.i15_1.s15(v);
  };
  protoOf(Composer).t15 = function (v) {
    return this.i15_1.s15(v.toString());
  };
  protoOf(Composer).u15 = function (v) {
    return this.i15_1.s15(v.toString());
  };
  protoOf(Composer).v15 = function (v) {
    return this.i15_1.w15(toLong(v));
  };
  protoOf(Composer).x15 = function (v) {
    return this.i15_1.w15(toLong(v));
  };
  protoOf(Composer).y15 = function (v) {
    return this.i15_1.w15(toLong(v));
  };
  protoOf(Composer).z15 = function (v) {
    return this.i15_1.w15(v);
  };
  protoOf(Composer).a16 = function (v) {
    return this.i15_1.s15(v.toString());
  };
  protoOf(Composer).b16 = function (value) {
    return this.i15_1.c16(value);
  };
  function Composer_0(sb, json) {
    return json.a12_1.r13_1 ? new ComposerWithPrettyPrint(sb, json) : new Composer(sb);
  }
  function ComposerForUnsignedNumbers(writer, forceQuoting) {
    Composer.call(this, writer);
    this.f16_1 = forceQuoting;
  }
  protoOf(ComposerForUnsignedNumbers).y15 = function (v) {
    if (this.f16_1) {
      // Inline function 'kotlin.toUInt' call
      var tmp$ret$0 = _UInt___init__impl__l7qpdl(v);
      this.b16(UInt__toString_impl_dbgl21(tmp$ret$0));
    } else {
      // Inline function 'kotlin.toUInt' call
      var tmp$ret$1 = _UInt___init__impl__l7qpdl(v);
      this.r15(UInt__toString_impl_dbgl21(tmp$ret$1));
    }
  };
  protoOf(ComposerForUnsignedNumbers).z15 = function (v) {
    if (this.f16_1) {
      // Inline function 'kotlin.toULong' call
      var tmp$ret$0 = _ULong___init__impl__c78o9k(v);
      this.b16(ULong__toString_impl_f9au7k(tmp$ret$0));
    } else {
      // Inline function 'kotlin.toULong' call
      var tmp$ret$1 = _ULong___init__impl__c78o9k(v);
      this.r15(ULong__toString_impl_f9au7k(tmp$ret$1));
    }
  };
  protoOf(ComposerForUnsignedNumbers).v15 = function (v) {
    if (this.f16_1) {
      // Inline function 'kotlin.toUByte' call
      var tmp$ret$0 = _UByte___init__impl__g9hnc4(v);
      this.b16(UByte__toString_impl_v72jg(tmp$ret$0));
    } else {
      // Inline function 'kotlin.toUByte' call
      var tmp$ret$1 = _UByte___init__impl__g9hnc4(v);
      this.r15(UByte__toString_impl_v72jg(tmp$ret$1));
    }
  };
  protoOf(ComposerForUnsignedNumbers).x15 = function (v) {
    if (this.f16_1) {
      // Inline function 'kotlin.toUShort' call
      var tmp$ret$0 = _UShort___init__impl__jigrne(v);
      this.b16(UShort__toString_impl_edaoee(tmp$ret$0));
    } else {
      // Inline function 'kotlin.toUShort' call
      var tmp$ret$1 = _UShort___init__impl__jigrne(v);
      this.r15(UShort__toString_impl_edaoee(tmp$ret$1));
    }
  };
  function ComposerForUnquotedLiterals(writer, forceQuoting) {
    Composer.call(this, writer);
    this.i16_1 = forceQuoting;
  }
  protoOf(ComposerForUnquotedLiterals).b16 = function (value) {
    if (this.i16_1) {
      protoOf(Composer).b16.call(this, value);
    } else {
      protoOf(Composer).r15.call(this, value);
    }
  };
  function ComposerWithPrettyPrint(writer, json) {
    Composer.call(this, writer);
    this.l16_1 = json;
    this.m16_1 = 0;
  }
  protoOf(ComposerWithPrettyPrint).k15 = function () {
    this.j15_1 = true;
    this.m16_1 = this.m16_1 + 1 | 0;
  };
  protoOf(ComposerWithPrettyPrint).l15 = function () {
    this.m16_1 = this.m16_1 - 1 | 0;
  };
  protoOf(ComposerWithPrettyPrint).m15 = function () {
    this.j15_1 = false;
    this.r15('\n');
    // Inline function 'kotlin.repeat' call
    var times = this.m16_1;
    var inductionVariable = 0;
    if (inductionVariable < times)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlinx.serialization.json.internal.ComposerWithPrettyPrint.nextItem.<anonymous>' call
        this.r15(this.l16_1.a12_1.t13_1);
      }
       while (inductionVariable < times);
  };
  protoOf(ComposerWithPrettyPrint).n15 = function () {
    if (this.j15_1)
      this.j15_1 = false;
    else {
      this.m15();
    }
  };
  protoOf(ComposerWithPrettyPrint).o15 = function () {
    this.p15(_Char___init__impl__6a9atx(32));
  };
  function readIfAbsent($this, descriptor, index) {
    $this.o16_1 = (!descriptor.mk(index) && descriptor.lk(index).ak());
    return $this.o16_1;
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
    tmp.n16_1 = new ElementMarker(descriptor, JsonElementMarker$readIfAbsent$ref(this));
    this.o16_1 = false;
  }
  protoOf(JsonElementMarker).p16 = function (index) {
    this.n16_1.bs(index);
  };
  protoOf(JsonElementMarker).q16 = function () {
    return this.n16_1.cs();
  };
  function invalidTrailingComma(_this__u8e3s4, entity) {
    entity = entity === VOID ? 'object' : entity;
    _this__u8e3s4.r16('Trailing comma before the end of JSON ' + entity, _this__u8e3s4.p12_1 - 1 | 0, "Trailing commas are non-complaint JSON and not allowed by default. Use 'allowTrailingCommas = true' in 'Json {}' builder to support them.");
  }
  function throwInvalidFloatingPointDecoded(_this__u8e3s4, result) {
    _this__u8e3s4.s16('Unexpected special floating-point value ' + toString(result) + '. By default, ' + 'non-finite floating point values are prohibited because they do not conform JSON specification', VOID, "It is possible to deserialize them using 'JsonBuilder.allowSpecialFloatingPointValues = true'");
  }
  function JsonEncodingException(message) {
    JsonException.call(this, message);
    captureStack(this, JsonEncodingException);
  }
  function InvalidKeyKindException(keyDescriptor) {
    return new JsonEncodingException("Value of type '" + keyDescriptor.sj() + "' can't be used in JSON as a key in the map. " + ("It should have either primitive or enum kind, but its kind is '" + keyDescriptor.ek().toString() + "'.\n") + "Use 'allowStructuredMapKeys = true' in 'Json {}' builder to convert such maps to [key1, value1, key2, value2,...] arrays.");
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
    var index = _this__u8e3s4.jk(name);
    if (!(index === -3))
      return index;
    if (!json.a12_1.y13_1)
      return index;
    return getJsonNameIndexSlowPath(_this__u8e3s4, json, name);
  }
  function getJsonElementName(_this__u8e3s4, json, index) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    var strategy = namingStrategy(_this__u8e3s4, json);
    return strategy == null ? _this__u8e3s4.ik(index) : serializationNamesIndices(_this__u8e3s4, json, strategy)[index];
  }
  function namingStrategy(_this__u8e3s4, json) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    return equals(_this__u8e3s4.ek(), CLASS_getInstance()) ? json.a12_1.z13_1 : null;
  }
  function deserializationNamesMap(_this__u8e3s4, descriptor) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    var tmp = get_schemaCache(_this__u8e3s4);
    var tmp_0 = get_JsonDeserializationNamesKey();
    return tmp.u16(descriptor, tmp_0, deserializationNamesMap$lambda(descriptor, _this__u8e3s4));
  }
  function decodeCaseInsensitive(_this__u8e3s4, descriptor) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    return _this__u8e3s4.a12_1.a14_1 && equals(descriptor.ek(), ENUM_getInstance());
  }
  function getJsonNameIndexSlowPath(_this__u8e3s4, json, name) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    var tmp0_elvis_lhs = deserializationNamesMap(json, _this__u8e3s4).u1(name);
    return tmp0_elvis_lhs == null ? -3 : tmp0_elvis_lhs;
  }
  function serializationNamesIndices(_this__u8e3s4, json, strategy) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    var tmp = get_schemaCache(json);
    var tmp_0 = get_JsonSerializationNamesKey();
    return tmp.u16(_this__u8e3s4, tmp_0, serializationNamesIndices$lambda(_this__u8e3s4, strategy));
  }
  function buildDeserializationNamesMap(_this__u8e3s4, json) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    // Inline function 'kotlin.collections.mutableMapOf' call
    var builder = LinkedHashMap_init_$Create$();
    var useLowercaseEnums = decodeCaseInsensitive(json, _this__u8e3s4);
    var strategyForClasses = namingStrategy(_this__u8e3s4, json);
    var inductionVariable = 0;
    var last = _this__u8e3s4.gk();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.collections.filterIsInstance' call
        var tmp0 = _this__u8e3s4.kk(i);
        // Inline function 'kotlin.collections.filterIsInstanceTo' call
        var destination = ArrayList_init_$Create$();
        var _iterator__ex2g4s = tmp0.i();
        while (_iterator__ex2g4s.j()) {
          var element = _iterator__ex2g4s.k();
          if (element instanceof JsonNames) {
            destination.d(element);
          }
        }
        var tmp0_safe_receiver = singleOrNull(destination);
        var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.v16_1;
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
          tmp_0 = _this__u8e3s4.ik(i).toLowerCase();
        } else if (!(strategyForClasses == null)) {
          tmp_0 = strategyForClasses.w16(_this__u8e3s4, i, _this__u8e3s4.ik(i));
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
    if (builder.m()) {
      // Inline function 'kotlinx.serialization.json.internal.buildDeserializationNamesMap.<anonymous>' call
      tmp_1 = emptyMap();
    } else {
      tmp_1 = builder;
    }
    return tmp_1;
  }
  function buildDeserializationNamesMap$putOrThrow(_this__u8e3s4, $this_buildDeserializationNamesMap, name, index) {
    var entity = equals($this_buildDeserializationNamesMap.ek(), ENUM_getInstance()) ? 'enum value' : 'property';
    // Inline function 'kotlin.collections.contains' call
    // Inline function 'kotlin.collections.containsKey' call
    if ((isInterface(_this__u8e3s4, KtMap) ? _this__u8e3s4 : THROW_CCE()).s1(name)) {
      throw new JsonException("The suggested name '" + name + "' for " + entity + ' ' + $this_buildDeserializationNamesMap.ik(index) + ' is already one of the names for ' + entity + ' ' + ($this_buildDeserializationNamesMap.ik(getValue(_this__u8e3s4, name)) + ' in ' + toString($this_buildDeserializationNamesMap)));
    }
    // Inline function 'kotlin.collections.set' call
    _this__u8e3s4.d2(name, index);
  }
  function deserializationNamesMap$lambda($descriptor, $this_deserializationNamesMap) {
    return function () {
      return buildDeserializationNamesMap($descriptor, $this_deserializationNamesMap);
    };
  }
  function serializationNamesIndices$lambda($this_serializationNamesIndices, $strategy) {
    return function () {
      var tmp = 0;
      var tmp_0 = $this_serializationNamesIndices.gk();
      // Inline function 'kotlin.arrayOfNulls' call
      var tmp_1 = fillArrayVal(Array(tmp_0), null);
      while (tmp < tmp_0) {
        var tmp_2 = tmp;
        var baseName = $this_serializationNamesIndices.ik(tmp_2);
        tmp_1[tmp_2] = $strategy.w16($this_serializationNamesIndices, tmp_2, baseName);
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
    var newSize = imul($this.z16_1, 2);
    $this.x16_1 = copyOf($this.x16_1, newSize);
    $this.y16_1 = copyOf_0($this.y16_1, newSize);
  }
  function JsonPath() {
    var tmp = this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp.x16_1 = fillArrayVal(Array(8), null);
    var tmp_0 = this;
    var tmp_1 = 0;
    var tmp_2 = new Int32Array(8);
    while (tmp_1 < 8) {
      tmp_2[tmp_1] = -1;
      tmp_1 = tmp_1 + 1 | 0;
    }
    tmp_0.y16_1 = tmp_2;
    this.z16_1 = -1;
  }
  protoOf(JsonPath).a17 = function (sd) {
    this.z16_1 = this.z16_1 + 1 | 0;
    var depth = this.z16_1;
    if (depth === this.x16_1.length) {
      resize(this);
    }
    this.x16_1[depth] = sd;
  };
  protoOf(JsonPath).b17 = function (index) {
    this.y16_1[this.z16_1] = index;
  };
  protoOf(JsonPath).c17 = function (key) {
    var tmp;
    if (!(this.y16_1[this.z16_1] === -2)) {
      this.z16_1 = this.z16_1 + 1 | 0;
      tmp = this.z16_1 === this.x16_1.length;
    } else {
      tmp = false;
    }
    if (tmp) {
      resize(this);
    }
    this.x16_1[this.z16_1] = key;
    this.y16_1[this.z16_1] = -2;
  };
  protoOf(JsonPath).d17 = function () {
    if (this.y16_1[this.z16_1] === -2) {
      this.x16_1[this.z16_1] = Tombstone_instance;
    }
  };
  protoOf(JsonPath).e17 = function () {
    var depth = this.z16_1;
    if (this.y16_1[depth] === -2) {
      this.y16_1[depth] = -1;
      this.z16_1 = this.z16_1 - 1 | 0;
    }
    if (!(this.z16_1 === -1)) {
      this.z16_1 = this.z16_1 - 1 | 0;
    }
  };
  protoOf(JsonPath).f17 = function () {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    // Inline function 'kotlinx.serialization.json.internal.JsonPath.getPath.<anonymous>' call
    this_0.q7('$');
    // Inline function 'kotlin.repeat' call
    var times = this.z16_1 + 1 | 0;
    var inductionVariable = 0;
    if (inductionVariable < times)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlinx.serialization.json.internal.JsonPath.getPath.<anonymous>.<anonymous>' call
        var element = this.x16_1[index];
        if (!(element == null) ? isInterface(element, SerialDescriptor) : false) {
          if (equals(element.ek(), LIST_getInstance())) {
            if (!(this.y16_1[index] === -1)) {
              this_0.q7('[');
              this_0.jb(this.y16_1[index]);
              this_0.q7(']');
            }
          } else {
            var idx = this.y16_1[index];
            if (idx >= 0) {
              this_0.q7('.');
              this_0.q7(element.ik(idx));
            }
          }
        } else {
          if (!(element === Tombstone_instance)) {
            this_0.q7('[');
            this_0.q7("'");
            this_0.p7(element);
            this_0.q7("'");
            this_0.q7(']');
          }
        }
      }
       while (inductionVariable < times);
    return this_0.toString();
  };
  protoOf(JsonPath).toString = function () {
    return this.f17();
  };
  function encodeByWriter(json, writer, serializer, value) {
    var tmp = WriteMode_OBJ_getInstance();
    // Inline function 'kotlin.arrayOfNulls' call
    var size = get_entries().l();
    var tmp$ret$0 = fillArrayVal(Array(size), null);
    var encoder = StreamingJsonEncoder_init_$Create$(writer, json, tmp, tmp$ret$0);
    encoder.nn(serializer, value);
  }
  function readObject($this) {
    // Inline function 'kotlinx.serialization.json.internal.JsonTreeReader.readObjectImpl' call
    var lastToken = $this.p17_1.t17(6);
    if ($this.p17_1.u17() === 4) {
      $this.p17_1.s16('Unexpected leading comma');
    }
    // Inline function 'kotlin.collections.linkedMapOf' call
    var result = LinkedHashMap_init_$Create$();
    $l$loop: while ($this.p17_1.v17()) {
      var key = $this.q17_1 ? $this.p17_1.x17() : $this.p17_1.w17();
      $this.p17_1.t17(5);
      // Inline function 'kotlinx.serialization.json.internal.JsonTreeReader.readObject.<anonymous>' call
      var element = $this.y17();
      // Inline function 'kotlin.collections.set' call
      result.d2(key, element);
      lastToken = $this.p17_1.z17();
      var tmp0_subject = lastToken;
      if (tmp0_subject !== 4)
        if (tmp0_subject === 7)
          break $l$loop;
        else {
          $this.p17_1.s16('Expected end of the object or comma');
        }
    }
    if (lastToken === 6) {
      $this.p17_1.t17(7);
    } else if (lastToken === 4) {
      if (!$this.r17_1) {
        invalidTrailingComma($this.p17_1);
      }
      $this.p17_1.t17(7);
    }
    return new JsonObject(result);
  }
  function readObject_0(_this__u8e3s4, $this, $completion) {
    var tmp = new $readObjectCOROUTINE$0($this, _this__u8e3s4, $completion);
    tmp.e8_1 = Unit_instance;
    tmp.f8_1 = null;
    return tmp.k8();
  }
  function readArray($this) {
    var lastToken = $this.p17_1.z17();
    if ($this.p17_1.u17() === 4) {
      $this.p17_1.s16('Unexpected leading comma');
    }
    // Inline function 'kotlin.collections.arrayListOf' call
    var result = ArrayList_init_$Create$();
    while ($this.p17_1.v17()) {
      var element = $this.y17();
      result.d(element);
      lastToken = $this.p17_1.z17();
      if (!(lastToken === 4)) {
        var tmp0 = $this.p17_1;
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.require' call
        var condition = lastToken === 9;
        var position = tmp0.p12_1;
        if (!condition) {
          // Inline function 'kotlinx.serialization.json.internal.JsonTreeReader.readArray.<anonymous>' call
          var tmp$ret$1 = 'Expected end of the array or comma';
          tmp0.s16(tmp$ret$1, position);
        }
      }
    }
    if (lastToken === 8) {
      $this.p17_1.t17(9);
    } else if (lastToken === 4) {
      if (!$this.r17_1) {
        invalidTrailingComma($this.p17_1, 'array');
      }
      $this.p17_1.t17(9);
    }
    return new JsonArray(result);
  }
  function readValue($this, isString) {
    var tmp;
    if ($this.q17_1 || !isString) {
      tmp = $this.p17_1.x17();
    } else {
      tmp = $this.p17_1.w17();
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
    this.x18_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(JsonTreeReader$readDeepRecursive$slambda).c19 = function ($this$DeepRecursiveFunction, it, $completion) {
    var tmp = this.d19($this$DeepRecursiveFunction, it, $completion);
    tmp.e8_1 = Unit_instance;
    tmp.f8_1 = null;
    return tmp.k8();
  };
  protoOf(JsonTreeReader$readDeepRecursive$slambda).z8 = function (p1, p2, $completion) {
    var tmp = p1 instanceof DeepRecursiveScope ? p1 : THROW_CCE();
    return this.c19(tmp, p2 instanceof Unit ? p2 : THROW_CCE(), $completion);
  };
  protoOf(JsonTreeReader$readDeepRecursive$slambda).k8 = function () {
    var suspendResult = this.e8_1;
    $sm: do
      try {
        var tmp = this.c8_1;
        switch (tmp) {
          case 0:
            this.d8_1 = 3;
            this.a19_1 = this.x18_1.p17_1.u17();
            if (this.a19_1 === 1) {
              this.b19_1 = readValue(this.x18_1, true);
              this.c8_1 = 2;
              continue $sm;
            } else {
              if (this.a19_1 === 0) {
                this.b19_1 = readValue(this.x18_1, false);
                this.c8_1 = 2;
                continue $sm;
              } else {
                if (this.a19_1 === 6) {
                  this.c8_1 = 1;
                  suspendResult = readObject_0(this.y18_1, this.x18_1, this);
                  if (suspendResult === get_COROUTINE_SUSPENDED()) {
                    return suspendResult;
                  }
                  continue $sm;
                } else {
                  if (this.a19_1 === 8) {
                    this.b19_1 = readArray(this.x18_1);
                    this.c8_1 = 2;
                    continue $sm;
                  } else {
                    var tmp_0 = this;
                    this.x18_1.p17_1.s16("Can't begin reading element, unexpected token");
                  }
                }
              }
            }

            break;
          case 1:
            this.b19_1 = suspendResult;
            this.c8_1 = 2;
            continue $sm;
          case 2:
            return this.b19_1;
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
  protoOf(JsonTreeReader$readDeepRecursive$slambda).d19 = function ($this$DeepRecursiveFunction, it, completion) {
    var i = new JsonTreeReader$readDeepRecursive$slambda(this.x18_1, completion);
    i.y18_1 = $this$DeepRecursiveFunction;
    i.z18_1 = it;
    return i;
  };
  function JsonTreeReader$readDeepRecursive$slambda_0(this$0, resultContinuation) {
    var i = new JsonTreeReader$readDeepRecursive$slambda(this$0, resultContinuation);
    var l = function ($this$DeepRecursiveFunction, it, $completion) {
      return i.c19($this$DeepRecursiveFunction, it, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function $readObjectCOROUTINE$0(_this__u8e3s4, _this__u8e3s4_0, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.i18_1 = _this__u8e3s4;
    this.j18_1 = _this__u8e3s4_0;
  }
  protoOf($readObjectCOROUTINE$0).k8 = function () {
    var suspendResult = this.e8_1;
    $sm: do
      try {
        var tmp = this.c8_1;
        switch (tmp) {
          case 0:
            this.d8_1 = 5;
            var tmp_0 = this;
            tmp_0.k18_1 = this.i18_1;
            this.l18_1 = this.k18_1;
            this.m18_1 = this.l18_1.p17_1.t17(6);
            if (this.l18_1.p17_1.u17() === 4) {
              this.l18_1.p17_1.s16('Unexpected leading comma');
            }

            var tmp_1 = this;
            tmp_1.n18_1 = LinkedHashMap_init_$Create$();
            this.c8_1 = 1;
            continue $sm;
          case 1:
            if (!this.l18_1.p17_1.v17()) {
              this.c8_1 = 4;
              continue $sm;
            }

            this.o18_1 = this.l18_1.q17_1 ? this.l18_1.p17_1.x17() : this.l18_1.p17_1.w17();
            this.l18_1.p17_1.t17(5);
            this.c8_1 = 2;
            suspendResult = this.j18_1.fg(Unit_instance, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var element = suspendResult;
            var tmp0 = this.n18_1;
            var key = this.o18_1;
            tmp0.d2(key, element);
            this.m18_1 = this.l18_1.p17_1.z17();
            var tmp0_subject = this.m18_1;
            if (tmp0_subject === 4) {
              this.c8_1 = 3;
              continue $sm;
            } else {
              if (tmp0_subject === 7) {
                this.c8_1 = 4;
                continue $sm;
              } else {
                this.l18_1.p17_1.s16('Expected end of the object or comma');
              }
            }

            break;
          case 3:
            this.c8_1 = 1;
            continue $sm;
          case 4:
            if (this.m18_1 === 6) {
              this.l18_1.p17_1.t17(7);
            } else if (this.m18_1 === 4) {
              if (!this.l18_1.r17_1) {
                invalidTrailingComma(this.l18_1.p17_1);
              }
              this.l18_1.p17_1.t17(7);
            }

            return new JsonObject(this.n18_1);
          case 5:
            throw this.f8_1;
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
  function JsonTreeReader(configuration, lexer) {
    this.p17_1 = lexer;
    this.q17_1 = configuration.p13_1;
    this.r17_1 = configuration.b14_1;
    this.s17_1 = 0;
  }
  protoOf(JsonTreeReader).y17 = function () {
    var token = this.p17_1.u17();
    var tmp;
    if (token === 1) {
      tmp = readValue(this, true);
    } else if (token === 0) {
      tmp = readValue(this, false);
    } else if (token === 6) {
      var tmp_0;
      this.s17_1 = this.s17_1 + 1 | 0;
      if (this.s17_1 === 200) {
        tmp_0 = readDeepRecursive(this);
      } else {
        tmp_0 = readObject(this);
      }
      var result = tmp_0;
      this.s17_1 = this.s17_1 - 1 | 0;
      tmp = result;
    } else if (token === 8) {
      tmp = readArray(this);
    } else {
      this.p17_1.s16('Cannot read Json element because of unexpected ' + tokenDescription(token));
    }
    return tmp;
  };
  function classDiscriminator(_this__u8e3s4, json) {
    var _iterator__ex2g4s = _this__u8e3s4.hk().i();
    while (_iterator__ex2g4s.j()) {
      var annotation = _iterator__ex2g4s.k();
      if (annotation instanceof JsonClassDiscriminator)
        return annotation.e19_1;
    }
    return json.a12_1.w13_1;
  }
  function validateIfSealed(serializer, actualSerializer, classDiscriminator) {
    if (!(serializer instanceof SealedClassSerializer))
      return Unit_instance;
    if (jsonCachedSerialNames(actualSerializer.ri()).n1(classDiscriminator)) {
      var baseName = serializer.ri().sj();
      var actualName = actualSerializer.ri().sj();
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
    var kind = descriptor.ek();
    var tmp;
    if (kind instanceof PolymorphicKind) {
      tmp = true;
    } else {
      tmp = equals(kind, CONTEXTUAL_getInstance());
    }
    if (tmp) {
      throw IllegalArgumentException_init_$Create$('Serializer for ' + actualClass.v9() + " can't be registered as a subclass for polymorphic serialization " + ('because its kind ' + kind.toString() + ' is not concrete. To work with multiple hierarchies, register it as a base class.'));
    }
    if ($this.f19_1)
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
      throw IllegalArgumentException_init_$Create$('Serializer for ' + actualClass.v9() + ' of kind ' + kind.toString() + ' cannot be serialized polymorphically with class discriminator.');
    }
  }
  function checkDiscriminatorCollisions($this, descriptor, actualClass) {
    var inductionVariable = 0;
    var last = descriptor.gk();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var name = descriptor.ik(i);
        if (name === $this.g19_1) {
          throw IllegalArgumentException_init_$Create$('Polymorphic serializer for ' + toString(actualClass) + " has property '" + name + "' that conflicts " + 'with JSON class discriminator. You can either change class discriminator in JsonConfiguration, ' + 'rename property with @SerialName annotation ' + 'or fall back to array polymorphism');
        }
      }
       while (inductionVariable < last);
  }
  function PolymorphismValidator(useArrayPolymorphism, discriminator) {
    this.f19_1 = useArrayPolymorphism;
    this.g19_1 = discriminator;
  }
  protoOf(PolymorphismValidator).r11 = function (kClass, provider) {
  };
  protoOf(PolymorphismValidator).u11 = function (baseClass, actualClass, actualSerializer) {
    var descriptor = actualSerializer.ri();
    checkKind_0(this, descriptor, actualClass);
    if (!this.f19_1) {
      checkDiscriminatorCollisions(this, descriptor, actualClass);
    }
  };
  protoOf(PolymorphismValidator).v11 = function (baseClass, defaultSerializerProvider) {
  };
  protoOf(PolymorphismValidator).w11 = function (baseClass, defaultDeserializerProvider) {
  };
  function Key() {
  }
  function DescriptorSchemaCache() {
    this.t16_1 = createMapForCache(16);
  }
  protoOf(DescriptorSchemaCache).h19 = function (descriptor, key, value) {
    // Inline function 'kotlin.collections.getOrPut' call
    var this_0 = this.t16_1;
    var value_0 = this_0.u1(descriptor);
    var tmp;
    if (value_0 == null) {
      // Inline function 'kotlinx.serialization.json.internal.DescriptorSchemaCache.set.<anonymous>' call
      var answer = createMapForCache(2);
      this_0.d2(descriptor, answer);
      tmp = answer;
    } else {
      tmp = value_0;
    }
    var tmp2 = tmp;
    var tmp3 = key instanceof Key ? key : THROW_CCE();
    // Inline function 'kotlin.collections.set' call
    var value_1 = !(value == null) ? value : THROW_CCE();
    tmp2.d2(tmp3, value_1);
  };
  protoOf(DescriptorSchemaCache).u16 = function (descriptor, key, defaultValue) {
    var tmp0_safe_receiver = this.i19(descriptor, key);
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      return tmp0_safe_receiver;
    }
    var value = defaultValue();
    this.h19(descriptor, key, value);
    return value;
  };
  protoOf(DescriptorSchemaCache).i19 = function (descriptor, key) {
    var tmp0_safe_receiver = this.t16_1.u1(descriptor);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      tmp = tmp0_safe_receiver.u1(key instanceof Key ? key : THROW_CCE());
    }
    var tmp_0 = tmp;
    return !(tmp_0 == null) ? tmp_0 : null;
  };
  function DiscriminatorHolder(discriminatorToSkip) {
    this.j19_1 = discriminatorToSkip;
  }
  function trySkip(_this__u8e3s4, $this, unknownKey) {
    if (_this__u8e3s4 == null)
      return false;
    if (_this__u8e3s4.j19_1 === unknownKey) {
      _this__u8e3s4.j19_1 = null;
      return true;
    }
    return false;
  }
  function skipLeftoverElements($this, descriptor) {
    while (!($this.nm(descriptor) === -1)) {
    }
  }
  function checkLeadingComma($this) {
    if ($this.j12_1.u17() === 4) {
      $this.j12_1.s16('Unexpected leading comma');
    }
  }
  function decodeMapIndex($this) {
    var hasComma = false;
    var decodingKey = !(($this.l12_1 % 2 | 0) === 0);
    if (decodingKey) {
      if (!($this.l12_1 === -1)) {
        hasComma = $this.j12_1.l19();
      }
    } else {
      $this.j12_1.k19(_Char___init__impl__6a9atx(58));
    }
    var tmp;
    if ($this.j12_1.v17()) {
      if (decodingKey) {
        if ($this.l12_1 === -1) {
          var tmp0 = $this.j12_1;
          // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.require' call
          var condition = !hasComma;
          var position = tmp0.p12_1;
          if (!condition) {
            // Inline function 'kotlinx.serialization.json.internal.StreamingJsonDecoder.decodeMapIndex.<anonymous>' call
            var tmp$ret$0 = 'Unexpected leading comma';
            tmp0.s16(tmp$ret$0, position);
          }
        } else {
          var tmp3 = $this.j12_1;
          // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.require' call
          var condition_0 = hasComma;
          var position_0 = tmp3.p12_1;
          if (!condition_0) {
            // Inline function 'kotlinx.serialization.json.internal.StreamingJsonDecoder.decodeMapIndex.<anonymous>' call
            var tmp$ret$1 = 'Expected comma after the key-value pair';
            tmp3.s16(tmp$ret$1, position_0);
          }
        }
      }
      $this.l12_1 = $this.l12_1 + 1 | 0;
      tmp = $this.l12_1;
    } else {
      if (hasComma && !$this.h12_1.a12_1.b14_1) {
        invalidTrailingComma($this.j12_1);
      }
      tmp = -1;
    }
    return tmp;
  }
  function coerceInputValue($this, descriptor, index) {
    var tmp0 = $this.h12_1;
    var tmp$ret$1;
    $l$block_2: {
      // Inline function 'kotlinx.serialization.json.internal.tryCoerceValue' call
      var isOptional = descriptor.mk(index);
      var elementDescriptor = descriptor.lk(index);
      var tmp;
      if (isOptional && !elementDescriptor.ak()) {
        // Inline function 'kotlinx.serialization.json.internal.StreamingJsonDecoder.coerceInputValue.<anonymous>' call
        tmp = $this.j12_1.m19(true);
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$1 = true;
        break $l$block_2;
      }
      if (equals(elementDescriptor.ek(), ENUM_getInstance())) {
        var tmp_0;
        if (elementDescriptor.ak()) {
          // Inline function 'kotlinx.serialization.json.internal.StreamingJsonDecoder.coerceInputValue.<anonymous>' call
          tmp_0 = $this.j12_1.m19(false);
        } else {
          tmp_0 = false;
        }
        if (tmp_0) {
          tmp$ret$1 = false;
          break $l$block_2;
        }
        // Inline function 'kotlinx.serialization.json.internal.StreamingJsonDecoder.coerceInputValue.<anonymous>' call
        var tmp0_elvis_lhs = $this.j12_1.n19($this.n12_1.p13_1);
        var tmp_1;
        if (tmp0_elvis_lhs == null) {
          tmp$ret$1 = false;
          break $l$block_2;
        } else {
          tmp_1 = tmp0_elvis_lhs;
        }
        var enumValue = tmp_1;
        var enumIndex = getJsonNameIndex(elementDescriptor, tmp0, enumValue);
        var coerceToNull = !tmp0.a12_1.s13_1 && elementDescriptor.ak();
        if (enumIndex === -3 && (isOptional || coerceToNull)) {
          // Inline function 'kotlinx.serialization.json.internal.StreamingJsonDecoder.coerceInputValue.<anonymous>' call
          $this.j12_1.w17();
          tmp$ret$1 = true;
          break $l$block_2;
        }
      }
      tmp$ret$1 = false;
    }
    return tmp$ret$1;
  }
  function decodeObjectIndex($this, descriptor) {
    var hasComma = $this.j12_1.l19();
    while ($this.j12_1.v17()) {
      hasComma = false;
      var key = decodeStringKey($this);
      $this.j12_1.k19(_Char___init__impl__6a9atx(58));
      var index = getJsonNameIndex(descriptor, $this.h12_1, key);
      var tmp;
      if (!(index === -3)) {
        var tmp_0;
        if ($this.n12_1.u13_1 && coerceInputValue($this, descriptor, index)) {
          hasComma = $this.j12_1.l19();
          tmp_0 = false;
        } else {
          var tmp0_safe_receiver = $this.o12_1;
          if (tmp0_safe_receiver == null)
            null;
          else {
            tmp0_safe_receiver.p16(index);
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
    if (hasComma && !$this.h12_1.a12_1.b14_1) {
      invalidTrailingComma($this.j12_1);
    }
    var tmp1_safe_receiver = $this.o12_1;
    var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.q16();
    return tmp2_elvis_lhs == null ? -1 : tmp2_elvis_lhs;
  }
  function handleUnknown($this, key) {
    if ($this.n12_1.o13_1 || trySkip($this.m12_1, $this, key)) {
      $this.j12_1.p19($this.n12_1.p13_1);
    } else {
      $this.j12_1.o19(key);
    }
    return $this.j12_1.l19();
  }
  function decodeListIndex($this) {
    var hasComma = $this.j12_1.l19();
    var tmp;
    if ($this.j12_1.v17()) {
      if (!($this.l12_1 === -1) && !hasComma) {
        $this.j12_1.s16('Expected end of the array or comma');
      }
      $this.l12_1 = $this.l12_1 + 1 | 0;
      tmp = $this.l12_1;
    } else {
      if (hasComma && !$this.h12_1.a12_1.b14_1) {
        invalidTrailingComma($this.j12_1, 'array');
      }
      tmp = -1;
    }
    return tmp;
  }
  function decodeStringKey($this) {
    var tmp;
    if ($this.n12_1.p13_1) {
      tmp = $this.j12_1.r19();
    } else {
      tmp = $this.j12_1.q19();
    }
    return tmp;
  }
  function StreamingJsonDecoder(json, mode, lexer, descriptor, discriminatorHolder) {
    AbstractDecoder.call(this);
    this.h12_1 = json;
    this.i12_1 = mode;
    this.j12_1 = lexer;
    this.k12_1 = this.h12_1.lm();
    this.l12_1 = -1;
    this.m12_1 = discriminatorHolder;
    this.n12_1 = this.h12_1.a12_1;
    this.o12_1 = this.n12_1.s13_1 ? null : new JsonElementMarker(descriptor);
  }
  protoOf(StreamingJsonDecoder).e14 = function () {
    return this.h12_1;
  };
  protoOf(StreamingJsonDecoder).lm = function () {
    return this.k12_1;
  };
  protoOf(StreamingJsonDecoder).f14 = function () {
    return (new JsonTreeReader(this.h12_1.a12_1, this.j12_1)).y17();
  };
  protoOf(StreamingJsonDecoder).vl = function (deserializer) {
    try {
      var tmp;
      if (!(deserializer instanceof AbstractPolymorphicSerializer)) {
        tmp = true;
      } else {
        tmp = this.h12_1.a12_1.v13_1;
      }
      if (tmp) {
        return deserializer.ti(this);
      }
      var discriminator = classDiscriminator(deserializer.ri(), this.h12_1);
      var tmp0_elvis_lhs = this.j12_1.s19(discriminator, this.n12_1.p13_1);
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
            tmp_1 = this.e14().a12_1.v13_1;
          }
          if (tmp_1) {
            tmp$ret$0 = tmp1.ti(this);
            break $l$block;
          }
          var discriminator_0 = classDiscriminator(tmp1.ri(), this.e14());
          var tmp0 = this.f14();
          // Inline function 'kotlinx.serialization.json.internal.cast' call
          var serialName = tmp1.ri().sj();
          if (!(tmp0 instanceof JsonObject)) {
            var tmp_2 = getKClass(JsonObject).v9();
            var tmp_3 = getKClassFromExpression(tmp0).v9();
            // Inline function 'kotlinx.serialization.json.internal.StreamingJsonDecoder.decodeSerializableValue.<anonymous>' call
            var tmp$ret$1 = this.j12_1.q12_1.f17();
            throw JsonDecodingException_0(-1, 'Expected ' + tmp_2 + ', but had ' + tmp_3 + ' as the serialized body of ' + serialName + ' at element: ' + tmp$ret$1, toString(tmp0));
          }
          var jsonTree = tmp0;
          var tmp0_safe_receiver = jsonTree.i14(discriminator_0);
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
          tmp$ret$0 = readPolymorphicJson(this.e14(), discriminator_0, jsonTree, actualSerializer);
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
          this.j12_1.s16(message, VOID, hint);
        } else {
          throw $p;
        }
        tmp_7 = tmp_8;
      }
      var tmp_9 = tmp_7;
      var actualSerializer_0 = isInterface(tmp_9, DeserializationStrategy) ? tmp_9 : THROW_CCE();
      this.m12_1 = new DiscriminatorHolder(discriminator);
      return actualSerializer_0.ti(this);
    } catch ($p) {
      if ($p instanceof MissingFieldException) {
        var e = $p;
        if (contains_0(ensureNotNull(e.message), 'at path'))
          throw e;
        throw new MissingFieldException(e.uj_1, plus(e.message, ' at path: ') + this.j12_1.q12_1.f17(), e);
      } else {
        throw $p;
      }
    }
  };
  protoOf(StreamingJsonDecoder).wl = function (descriptor) {
    var newMode = switchMode(this.h12_1, descriptor);
    this.j12_1.q12_1.a17(descriptor);
    this.j12_1.k19(newMode.v19_1);
    checkLeadingComma(this);
    var tmp;
    switch (newMode.f2_1) {
      case 1:
      case 2:
      case 3:
        tmp = new StreamingJsonDecoder(this.h12_1, newMode, this.j12_1, descriptor, this.m12_1);
        break;
      default:
        var tmp_0;
        if (this.i12_1.equals(newMode) && this.h12_1.a12_1.s13_1) {
          tmp_0 = this;
        } else {
          tmp_0 = new StreamingJsonDecoder(this.h12_1, newMode, this.j12_1, descriptor, this.m12_1);
        }

        tmp = tmp_0;
        break;
    }
    return tmp;
  };
  protoOf(StreamingJsonDecoder).xl = function (descriptor) {
    if (this.h12_1.a12_1.o13_1 && descriptor.gk() === 0) {
      skipLeftoverElements(this, descriptor);
    }
    if (this.j12_1.l19() && !this.h12_1.a12_1.b14_1) {
      invalidTrailingComma(this.j12_1, '');
    }
    this.j12_1.k19(this.i12_1.w19_1);
    this.j12_1.q12_1.e17();
  };
  protoOf(StreamingJsonDecoder).il = function () {
    var tmp;
    var tmp0_safe_receiver = this.o12_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.o16_1;
    if (!(tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs)) {
      tmp = !this.j12_1.x19();
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(StreamingJsonDecoder).jl = function () {
    return null;
  };
  protoOf(StreamingJsonDecoder).im = function (descriptor, index, deserializer, previousValue) {
    var isMapKey = this.i12_1.equals(WriteMode_MAP_getInstance()) && (index & 1) === 0;
    if (isMapKey) {
      this.j12_1.q12_1.d17();
    }
    var value = protoOf(AbstractDecoder).im.call(this, descriptor, index, deserializer, previousValue);
    if (isMapKey) {
      this.j12_1.q12_1.c17(value);
    }
    return value;
  };
  protoOf(StreamingJsonDecoder).nm = function (descriptor) {
    var index;
    switch (this.i12_1.f2_1) {
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
    if (!this.i12_1.equals(WriteMode_MAP_getInstance())) {
      this.j12_1.q12_1.b17(index);
    }
    return index;
  };
  protoOf(StreamingJsonDecoder).kl = function () {
    return this.j12_1.y19();
  };
  protoOf(StreamingJsonDecoder).ll = function () {
    var value = this.j12_1.q14();
    if (!value.equals(toLong(value.y2()))) {
      this.j12_1.s16("Failed to parse byte for input '" + value.toString() + "'");
    }
    return value.y2();
  };
  protoOf(StreamingJsonDecoder).ml = function () {
    var value = this.j12_1.q14();
    if (!value.equals(toLong(value.z2()))) {
      this.j12_1.s16("Failed to parse short for input '" + value.toString() + "'");
    }
    return value.z2();
  };
  protoOf(StreamingJsonDecoder).nl = function () {
    var value = this.j12_1.q14();
    if (!value.equals(toLong(value.x()))) {
      this.j12_1.s16("Failed to parse int for input '" + value.toString() + "'");
    }
    return value.x();
  };
  protoOf(StreamingJsonDecoder).ol = function () {
    return this.j12_1.q14();
  };
  protoOf(StreamingJsonDecoder).pl = function () {
    var tmp0 = this.j12_1;
    var tmp$ret$4;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var input = tmp0.x17();
      try {
        // Inline function 'kotlinx.serialization.json.internal.StreamingJsonDecoder.decodeFloat.<anonymous>' call
        // Inline function 'kotlin.text.toFloat' call
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$4 = toDouble(input);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          tmp0.s16("Failed to parse type '" + 'float' + "' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    var result = tmp$ret$4;
    var specialFp = this.h12_1.a12_1.x13_1;
    if (specialFp || isFinite(result))
      return result;
    throwInvalidFloatingPointDecoded(this.j12_1, result);
  };
  protoOf(StreamingJsonDecoder).ql = function () {
    var tmp0 = this.j12_1;
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var input = tmp0.x17();
      try {
        // Inline function 'kotlinx.serialization.json.internal.StreamingJsonDecoder.decodeDouble.<anonymous>' call
        tmp$ret$1 = toDouble(input);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          tmp0.s16("Failed to parse type '" + 'double' + "' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    var result = tmp$ret$1;
    var specialFp = this.h12_1.a12_1.x13_1;
    if (specialFp || isFinite_0(result))
      return result;
    throwInvalidFloatingPointDecoded(this.j12_1, result);
  };
  protoOf(StreamingJsonDecoder).rl = function () {
    var string = this.j12_1.x17();
    if (!(string.length === 1)) {
      this.j12_1.s16("Expected single char, but got '" + string + "'");
    }
    return charSequenceGet(string, 0);
  };
  protoOf(StreamingJsonDecoder).sl = function () {
    var tmp;
    if (this.n12_1.p13_1) {
      tmp = this.j12_1.r19();
    } else {
      tmp = this.j12_1.w17();
    }
    return tmp;
  };
  protoOf(StreamingJsonDecoder).tl = function (descriptor) {
    return get_isUnsignedNumber(descriptor) ? new JsonDecoderForUnsignedTypes(this.j12_1, this.h12_1) : protoOf(AbstractDecoder).tl.call(this, descriptor);
  };
  function JsonDecoderForUnsignedTypes(lexer, json) {
    AbstractDecoder.call(this);
    this.z19_1 = lexer;
    this.a1a_1 = json.lm();
  }
  protoOf(JsonDecoderForUnsignedTypes).lm = function () {
    return this.a1a_1;
  };
  protoOf(JsonDecoderForUnsignedTypes).nm = function (descriptor) {
    var message = 'unsupported';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  protoOf(JsonDecoderForUnsignedTypes).nl = function () {
    var tmp0 = this.z19_1;
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var input = tmp0.x17();
      try {
        // Inline function 'kotlinx.serialization.json.internal.JsonDecoderForUnsignedTypes.decodeInt.<anonymous>' call
        // Inline function 'kotlin.UInt.toInt' call
        var this_0 = toUInt(input);
        tmp$ret$2 = _UInt___get_data__impl__f0vqqw(this_0);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          tmp0.s16("Failed to parse type '" + 'UInt' + "' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$2;
  };
  protoOf(JsonDecoderForUnsignedTypes).ol = function () {
    var tmp0 = this.z19_1;
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var input = tmp0.x17();
      try {
        // Inline function 'kotlinx.serialization.json.internal.JsonDecoderForUnsignedTypes.decodeLong.<anonymous>' call
        // Inline function 'kotlin.ULong.toLong' call
        var this_0 = toULong(input);
        tmp$ret$2 = _ULong___get_data__impl__fggpzb(this_0);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          tmp0.s16("Failed to parse type '" + 'ULong' + "' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$2;
  };
  protoOf(JsonDecoderForUnsignedTypes).ll = function () {
    var tmp0 = this.z19_1;
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var input = tmp0.x17();
      try {
        // Inline function 'kotlinx.serialization.json.internal.JsonDecoderForUnsignedTypes.decodeByte.<anonymous>' call
        // Inline function 'kotlin.UByte.toByte' call
        var this_0 = toUByte(input);
        tmp$ret$2 = _UByte___get_data__impl__jof9qr(this_0);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          tmp0.s16("Failed to parse type '" + 'UByte' + "' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$2;
  };
  protoOf(JsonDecoderForUnsignedTypes).ml = function () {
    var tmp0 = this.z19_1;
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var input = tmp0.x17();
      try {
        // Inline function 'kotlinx.serialization.json.internal.JsonDecoderForUnsignedTypes.decodeShort.<anonymous>' call
        // Inline function 'kotlin.UShort.toShort' call
        var this_0 = toUShort(input);
        tmp$ret$2 = _UShort___get_data__impl__g0245(this_0);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          tmp0.s16("Failed to parse type '" + 'UShort' + "' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$2;
  };
  function get_unsignedNumberDescriptors() {
    _init_properties_StreamingJsonEncoder_kt__pn1bsi();
    return unsignedNumberDescriptors;
  }
  var unsignedNumberDescriptors;
  function StreamingJsonEncoder_init_$Init$(output, json, mode, modeReuseCache, $this) {
    StreamingJsonEncoder.call($this, Composer_0(output, json), json, mode, modeReuseCache);
    return $this;
  }
  function StreamingJsonEncoder_init_$Create$(output, json, mode, modeReuseCache) {
    return StreamingJsonEncoder_init_$Init$(output, json, mode, modeReuseCache, objectCreate(protoOf(StreamingJsonEncoder)));
  }
  function encodeTypeInfo($this, discriminator, serialName) {
    $this.g17_1.m15();
    $this.an(discriminator);
    $this.g17_1.p15(_Char___init__impl__6a9atx(58));
    $this.g17_1.o15();
    $this.an(serialName);
  }
  function StreamingJsonEncoder(composer, json, mode, modeReuseCache) {
    AbstractEncoder.call(this);
    this.g17_1 = composer;
    this.h17_1 = json;
    this.i17_1 = mode;
    this.j17_1 = modeReuseCache;
    this.k17_1 = this.h17_1.lm();
    this.l17_1 = this.h17_1.a12_1;
    this.m17_1 = false;
    this.n17_1 = null;
    this.o17_1 = null;
    var i = this.i17_1.f2_1;
    if (!(this.j17_1 == null)) {
      if (!(this.j17_1[i] === null) || !(this.j17_1[i] === this)) {
        this.j17_1[i] = this;
      }
    }
  }
  protoOf(StreamingJsonEncoder).e14 = function () {
    return this.h17_1;
  };
  protoOf(StreamingJsonEncoder).lm = function () {
    return this.k17_1;
  };
  protoOf(StreamingJsonEncoder).sn = function (descriptor, index) {
    return this.l17_1.n13_1;
  };
  protoOf(StreamingJsonEncoder).nn = function (serializer, value) {
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.encodePolymorphically' call
      if (this.e14().a12_1.v13_1) {
        serializer.si(this, value);
        break $l$block;
      }
      var isPolymorphicSerializer = serializer instanceof AbstractPolymorphicSerializer;
      var tmp;
      if (isPolymorphicSerializer) {
        tmp = !this.e14().a12_1.d14_1.equals(ClassDiscriminatorMode_NONE_getInstance());
      } else {
        var tmp_0;
        switch (this.e14().a12_1.d14_1.f2_1) {
          case 0:
          case 2:
            tmp_0 = false;
            break;
          case 1:
            // Inline function 'kotlin.let' call

            // Inline function 'kotlinx.serialization.json.internal.encodePolymorphically.<anonymous>' call

            var it = serializer.ri().ek();
            tmp_0 = equals(it, CLASS_getInstance()) || equals(it, OBJECT_getInstance());
            break;
          default:
            noWhenBranchMatchedException();
            break;
        }
        tmp = tmp_0;
      }
      var needDiscriminator = tmp;
      var baseClassDiscriminator = needDiscriminator ? classDiscriminator(serializer.ri(), this.e14()) : null;
      var tmp_1;
      if (isPolymorphicSerializer) {
        var casted = serializer instanceof AbstractPolymorphicSerializer ? serializer : THROW_CCE();
        $l$block_0: {
          // Inline function 'kotlin.requireNotNull' call
          if (value == null) {
            // Inline function 'kotlinx.serialization.json.internal.encodePolymorphically.<anonymous>' call
            var message = 'Value for serializer ' + toString(serializer.ri()) + ' should always be non-null. Please report issue to the kotlinx.serialization tracker.';
            throw IllegalArgumentException_init_$Create$(toString(message));
          } else {
            break $l$block_0;
          }
        }
        var actual = findPolymorphicSerializer_0(casted, this, value);
        if (!(baseClassDiscriminator == null)) {
          access$validateIfSealed$tPolymorphicKt(serializer, actual, baseClassDiscriminator);
        }
        checkKind(actual.ri().ek());
        tmp_1 = isInterface(actual, SerializationStrategy) ? actual : THROW_CCE();
      } else {
        tmp_1 = serializer;
      }
      var actualSerializer = tmp_1;
      if (!(baseClassDiscriminator == null)) {
        // Inline function 'kotlinx.serialization.json.internal.StreamingJsonEncoder.encodeSerializableValue.<anonymous>' call
        var serialName = actualSerializer.ri().sj();
        this.n17_1 = baseClassDiscriminator;
        this.o17_1 = serialName;
      }
      actualSerializer.si(this, value);
    }
  };
  protoOf(StreamingJsonEncoder).wl = function (descriptor) {
    var newMode = switchMode(this.h17_1, descriptor);
    if (!(newMode.v19_1 === _Char___init__impl__6a9atx(0))) {
      this.g17_1.p15(newMode.v19_1);
      this.g17_1.k15();
    }
    var discriminator = this.n17_1;
    if (!(discriminator == null)) {
      var tmp0_elvis_lhs = this.o17_1;
      encodeTypeInfo(this, discriminator, tmp0_elvis_lhs == null ? descriptor.sj() : tmp0_elvis_lhs);
      this.n17_1 = null;
      this.o17_1 = null;
    }
    if (this.i17_1.equals(newMode)) {
      return this;
    }
    var tmp1_safe_receiver = this.j17_1;
    var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver[newMode.f2_1];
    return tmp2_elvis_lhs == null ? new StreamingJsonEncoder(this.g17_1, this.h17_1, newMode, this.j17_1) : tmp2_elvis_lhs;
  };
  protoOf(StreamingJsonEncoder).xl = function (descriptor) {
    if (!(this.i17_1.w19_1 === _Char___init__impl__6a9atx(0))) {
      this.g17_1.l15();
      this.g17_1.n15();
      this.g17_1.p15(this.i17_1.w19_1);
    }
  };
  protoOf(StreamingJsonEncoder).pm = function (descriptor, index) {
    switch (this.i17_1.f2_1) {
      case 1:
        if (!this.g17_1.j15_1) {
          this.g17_1.p15(_Char___init__impl__6a9atx(44));
        }

        this.g17_1.m15();
        break;
      case 2:
        if (!this.g17_1.j15_1) {
          var tmp = this;
          var tmp_0;
          if ((index % 2 | 0) === 0) {
            this.g17_1.p15(_Char___init__impl__6a9atx(44));
            this.g17_1.m15();
            tmp_0 = true;
          } else {
            this.g17_1.p15(_Char___init__impl__6a9atx(58));
            this.g17_1.o15();
            tmp_0 = false;
          }
          tmp.m17_1 = tmp_0;
        } else {
          this.m17_1 = true;
          this.g17_1.m15();
        }

        break;
      case 3:
        if (index === 0)
          this.m17_1 = true;
        if (index === 1) {
          this.g17_1.p15(_Char___init__impl__6a9atx(44));
          this.g17_1.o15();
          this.m17_1 = false;
        }

        break;
      default:
        if (!this.g17_1.j15_1) {
          this.g17_1.p15(_Char___init__impl__6a9atx(44));
        }

        this.g17_1.m15();
        this.an(getJsonElementName(descriptor, this.h17_1, index));
        this.g17_1.p15(_Char___init__impl__6a9atx(58));
        this.g17_1.o15();
        break;
    }
    return true;
  };
  protoOf(StreamingJsonEncoder).on = function (descriptor, index, serializer, value) {
    if (!(value == null) || this.l17_1.s13_1) {
      protoOf(AbstractEncoder).on.call(this, descriptor, index, serializer, value);
    }
  };
  protoOf(StreamingJsonEncoder).bn = function (descriptor) {
    var tmp;
    if (get_isUnsignedNumber(descriptor)) {
      // Inline function 'kotlinx.serialization.json.internal.StreamingJsonEncoder.composerAs' call
      var tmp_0;
      var tmp_1 = this.g17_1;
      if (tmp_1 instanceof ComposerForUnsignedNumbers) {
        tmp_0 = this.g17_1;
      } else {
        var tmp1 = this.g17_1.i15_1;
        // Inline function 'kotlinx.serialization.json.internal.StreamingJsonEncoder.encodeInline.stub_for_inlining' call
        var p1 = this.m17_1;
        tmp_0 = new ComposerForUnsignedNumbers(tmp1, p1);
      }
      var tmp$ret$1 = tmp_0;
      tmp = new StreamingJsonEncoder(tmp$ret$1, this.h17_1, this.i17_1, null);
    } else if (get_isUnquotedLiteral(descriptor)) {
      // Inline function 'kotlinx.serialization.json.internal.StreamingJsonEncoder.composerAs' call
      var tmp_2;
      var tmp_3 = this.g17_1;
      if (tmp_3 instanceof ComposerForUnquotedLiterals) {
        tmp_2 = this.g17_1;
      } else {
        var tmp4 = this.g17_1.i15_1;
        // Inline function 'kotlinx.serialization.json.internal.StreamingJsonEncoder.encodeInline.stub_for_inlining' call
        var p1_0 = this.m17_1;
        tmp_2 = new ComposerForUnquotedLiterals(tmp4, p1_0);
      }
      var tmp$ret$3 = tmp_2;
      tmp = new StreamingJsonEncoder(tmp$ret$3, this.h17_1, this.i17_1, null);
    } else if (!(this.n17_1 == null)) {
      // Inline function 'kotlin.apply' call
      // Inline function 'kotlinx.serialization.json.internal.StreamingJsonEncoder.encodeInline.<anonymous>' call
      this.o17_1 = descriptor.sj();
      tmp = this;
    } else {
      tmp = protoOf(AbstractEncoder).bn.call(this, descriptor);
    }
    return tmp;
  };
  protoOf(StreamingJsonEncoder).rm = function () {
    this.g17_1.r15('null');
  };
  protoOf(StreamingJsonEncoder).sm = function (value) {
    if (this.m17_1) {
      this.an(value.toString());
    } else {
      this.g17_1.a16(value);
    }
  };
  protoOf(StreamingJsonEncoder).tm = function (value) {
    if (this.m17_1) {
      this.an(value.toString());
    } else {
      this.g17_1.v15(value);
    }
  };
  protoOf(StreamingJsonEncoder).um = function (value) {
    if (this.m17_1) {
      this.an(value.toString());
    } else {
      this.g17_1.x15(value);
    }
  };
  protoOf(StreamingJsonEncoder).vm = function (value) {
    if (this.m17_1) {
      this.an(value.toString());
    } else {
      this.g17_1.y15(value);
    }
  };
  protoOf(StreamingJsonEncoder).wm = function (value) {
    if (this.m17_1) {
      this.an(value.toString());
    } else {
      this.g17_1.z15(value);
    }
  };
  protoOf(StreamingJsonEncoder).xm = function (value) {
    if (this.m17_1) {
      this.an(value.toString());
    } else {
      this.g17_1.t15(value);
    }
    if (!this.l17_1.x13_1 && !isFinite(value)) {
      throw InvalidFloatingPointEncoded(value, toString(this.g17_1.i15_1));
    }
  };
  protoOf(StreamingJsonEncoder).ym = function (value) {
    if (this.m17_1) {
      this.an(value.toString());
    } else {
      this.g17_1.u15(value);
    }
    if (!this.l17_1.x13_1 && !isFinite_0(value)) {
      throw InvalidFloatingPointEncoded(value, toString(this.g17_1.i15_1));
    }
  };
  protoOf(StreamingJsonEncoder).zm = function (value) {
    this.an(toString_1(value));
  };
  protoOf(StreamingJsonEncoder).an = function (value) {
    return this.g17_1.b16(value);
  };
  function get_isUnsignedNumber(_this__u8e3s4) {
    _init_properties_StreamingJsonEncoder_kt__pn1bsi();
    return _this__u8e3s4.fk() && get_unsignedNumberDescriptors().n1(_this__u8e3s4);
  }
  function get_isUnquotedLiteral(_this__u8e3s4) {
    _init_properties_StreamingJsonEncoder_kt__pn1bsi();
    return _this__u8e3s4.fk() && equals(_this__u8e3s4, get_jsonUnquotedLiteralDescriptor());
  }
  var properties_initialized_StreamingJsonEncoder_kt_6ifwwk;
  function _init_properties_StreamingJsonEncoder_kt__pn1bsi() {
    if (!properties_initialized_StreamingJsonEncoder_kt_6ifwwk) {
      properties_initialized_StreamingJsonEncoder_kt_6ifwwk = true;
      unsignedNumberDescriptors = setOf([serializer_1(Companion_getInstance_0()).ri(), serializer_0(Companion_getInstance()).ri(), serializer_2(Companion_getInstance_1()).ri(), serializer_3(Companion_getInstance_2()).ri()]);
    }
  }
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
    _this__u8e3s4.r7(_Char___init__impl__6a9atx(34));
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
          _this__u8e3s4.gb(value, lastPos, i);
          _this__u8e3s4.q7(get_ESCAPE_STRINGS()[c]);
          lastPos = i + 1 | 0;
        }
      }
       while (inductionVariable <= last);
    if (!(lastPos === 0))
      _this__u8e3s4.gb(value, lastPos, value.length);
    else
      _this__u8e3s4.q7(value);
    _this__u8e3s4.r7(_Char___init__impl__6a9atx(34));
  }
  function toBooleanStrictOrNull_0(_this__u8e3s4) {
    _init_properties_StringOps_kt__fcy1db();
    return equals_0(_this__u8e3s4, 'true', true) ? true : equals_0(_this__u8e3s4, 'false', true) ? false : null;
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
    throw JsonDecodingException_0(-1, "Failed to parse literal '" + literal.toString() + "' as " + type + ' value at element: ' + $this.h1a(tag), toString($this.i1a()));
  }
  function AbstractJsonTreeDecoder(json, value, polymorphicDiscriminator) {
    polymorphicDiscriminator = polymorphicDiscriminator === VOID ? null : polymorphicDiscriminator;
    NamedValueDecoder.call(this);
    this.d1a_1 = json;
    this.e1a_1 = value;
    this.f1a_1 = polymorphicDiscriminator;
    this.g1a_1 = this.e14().a12_1;
  }
  protoOf(AbstractJsonTreeDecoder).e14 = function () {
    return this.d1a_1;
  };
  protoOf(AbstractJsonTreeDecoder).r1 = function () {
    return this.e1a_1;
  };
  protoOf(AbstractJsonTreeDecoder).lm = function () {
    return this.e14().lm();
  };
  protoOf(AbstractJsonTreeDecoder).i1a = function () {
    var tmp0_safe_receiver = this.iz();
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.currentObject.<anonymous>' call
      tmp = this.j1a(tmp0_safe_receiver);
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? this.r1() : tmp1_elvis_lhs;
  };
  protoOf(AbstractJsonTreeDecoder).h1a = function (currentTag) {
    return this.kz() + ('.' + currentTag);
  };
  protoOf(AbstractJsonTreeDecoder).f14 = function () {
    return this.i1a();
  };
  protoOf(AbstractJsonTreeDecoder).vl = function (deserializer) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.decodeSerializableValuePolymorphic' call
      var tmp;
      if (!(deserializer instanceof AbstractPolymorphicSerializer)) {
        tmp = true;
      } else {
        tmp = this.e14().a12_1.v13_1;
      }
      if (tmp) {
        tmp$ret$0 = deserializer.ti(this);
        break $l$block;
      }
      var discriminator = classDiscriminator(deserializer.ri(), this.e14());
      var tmp0 = this.f14();
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var serialName = deserializer.ri().sj();
      if (!(tmp0 instanceof JsonObject)) {
        var tmp_0 = getKClass(JsonObject).v9();
        var tmp_1 = getKClassFromExpression(tmp0).v9();
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.decodeSerializableValue.stub_for_inlining' call
        var tmp$ret$1 = this.kz();
        throw JsonDecodingException_0(-1, 'Expected ' + tmp_0 + ', but had ' + tmp_1 + ' as the serialized body of ' + serialName + ' at element: ' + tmp$ret$1, toString(tmp0));
      }
      var jsonTree = tmp0;
      var tmp0_safe_receiver = jsonTree.i14(discriminator);
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
      tmp$ret$0 = readPolymorphicJson(this.e14(), discriminator, jsonTree, actualSerializer);
    }
    return tmp$ret$0;
  };
  protoOf(AbstractJsonTreeDecoder).jz = function (parentName, childName) {
    return childName;
  };
  protoOf(AbstractJsonTreeDecoder).wl = function (descriptor) {
    var currentObject = this.i1a();
    var tmp0_subject = descriptor.ek();
    var tmp;
    var tmp_0;
    if (equals(tmp0_subject, LIST_getInstance())) {
      tmp_0 = true;
    } else {
      tmp_0 = tmp0_subject instanceof PolymorphicKind;
    }
    if (tmp_0) {
      var tmp_1 = this.e14();
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var serialName = descriptor.sj();
      if (!(currentObject instanceof JsonArray)) {
        var tmp_2 = getKClass(JsonArray).v9();
        var tmp_3 = getKClassFromExpression(currentObject).v9();
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast.<anonymous>' call
        var tmp$ret$0 = this.kz();
        throw JsonDecodingException_0(-1, 'Expected ' + tmp_2 + ', but had ' + tmp_3 + ' as the serialized body of ' + serialName + ' at element: ' + tmp$ret$0, toString(currentObject));
      }
      tmp = new JsonTreeListDecoder(tmp_1, currentObject);
    } else {
      if (equals(tmp0_subject, MAP_getInstance())) {
        // Inline function 'kotlinx.serialization.json.internal.selectMapMode' call
        var this_0 = this.e14();
        var keyDescriptor = carrierDescriptor(descriptor.lk(0), this_0.lm());
        var keyKind = keyDescriptor.ek();
        var tmp_4;
        var tmp_5;
        if (keyKind instanceof PrimitiveKind) {
          tmp_5 = true;
        } else {
          tmp_5 = equals(keyKind, ENUM_getInstance());
        }
        if (tmp_5) {
          // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.beginStructure.<anonymous>' call
          var tmp_6 = this.e14();
          // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
          // Inline function 'kotlinx.serialization.json.internal.cast' call
          var serialName_0 = descriptor.sj();
          if (!(currentObject instanceof JsonObject)) {
            var tmp_7 = getKClass(JsonObject).v9();
            var tmp_8 = getKClassFromExpression(currentObject).v9();
            // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast.<anonymous>' call
            var tmp$ret$3 = this.kz();
            throw JsonDecodingException_0(-1, 'Expected ' + tmp_7 + ', but had ' + tmp_8 + ' as the serialized body of ' + serialName_0 + ' at element: ' + tmp$ret$3, toString(currentObject));
          }
          tmp_4 = new JsonTreeMapDecoder(tmp_6, currentObject);
        } else {
          if (this_0.a12_1.q13_1) {
            // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.beginStructure.<anonymous>' call
            var tmp_9 = this.e14();
            // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
            // Inline function 'kotlinx.serialization.json.internal.cast' call
            var serialName_1 = descriptor.sj();
            if (!(currentObject instanceof JsonArray)) {
              var tmp_10 = getKClass(JsonArray).v9();
              var tmp_11 = getKClassFromExpression(currentObject).v9();
              // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast.<anonymous>' call
              var tmp$ret$7 = this.kz();
              throw JsonDecodingException_0(-1, 'Expected ' + tmp_10 + ', but had ' + tmp_11 + ' as the serialized body of ' + serialName_1 + ' at element: ' + tmp$ret$7, toString(currentObject));
            }
            tmp_4 = new JsonTreeListDecoder(tmp_9, currentObject);
          } else {
            throw InvalidKeyKindException(keyDescriptor);
          }
        }
        tmp = tmp_4;
      } else {
        var tmp_12 = this.e14();
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
        // Inline function 'kotlinx.serialization.json.internal.cast' call
        var serialName_2 = descriptor.sj();
        if (!(currentObject instanceof JsonObject)) {
          var tmp_13 = getKClass(JsonObject).v9();
          var tmp_14 = getKClassFromExpression(currentObject).v9();
          // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast.<anonymous>' call
          var tmp$ret$12 = this.kz();
          throw JsonDecodingException_0(-1, 'Expected ' + tmp_13 + ', but had ' + tmp_14 + ' as the serialized body of ' + serialName_2 + ' at element: ' + tmp$ret$12, toString(currentObject));
        }
        tmp = new JsonTreeDecoder(tmp_12, currentObject, this.f1a_1);
      }
    }
    return tmp;
  };
  protoOf(AbstractJsonTreeDecoder).xl = function (descriptor) {
  };
  protoOf(AbstractJsonTreeDecoder).il = function () {
    var tmp = this.i1a();
    return !(tmp instanceof JsonNull);
  };
  protoOf(AbstractJsonTreeDecoder).k1a = function (tag) {
    return !(this.j1a(tag) === JsonNull_getInstance());
  };
  protoOf(AbstractJsonTreeDecoder).mz = function (tag) {
    return this.k1a((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).l1a = function (tag) {
    var tmp$ret$4;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.j1a(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp = getKClass(JsonPrimitive).v9();
        var tmp_0 = getKClassFromExpression(value).v9();
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast.<anonymous>' call
        var tmp$ret$0 = this.h1a(tag);
        throw JsonDecodingException_0(-1, 'Expected ' + tmp + ', but had ' + tmp_0 + ' as the serialized body of ' + 'boolean' + ' at element: ' + tmp$ret$0, toString(value));
      }
      var literal = value;
      try {
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.decodeTaggedBoolean.stub_for_inlining' call
        var tmp0_elvis_lhs = get_booleanOrNull(literal);
        var tmp_1;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, literal, 'boolean', tag);
        } else {
          tmp_1 = tmp0_elvis_lhs;
        }
        tmp$ret$4 = tmp_1;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          unparsedPrimitive(this, literal, 'boolean', tag);
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$4;
  };
  protoOf(AbstractJsonTreeDecoder).nz = function (tag) {
    return this.l1a((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).m1a = function (tag) {
    var tmp$ret$4;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.j1a(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp = getKClass(JsonPrimitive).v9();
        var tmp_0 = getKClassFromExpression(value).v9();
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast.<anonymous>' call
        var tmp$ret$0 = this.h1a(tag);
        throw JsonDecodingException_0(-1, 'Expected ' + tmp + ', but had ' + tmp_0 + ' as the serialized body of ' + 'byte' + ' at element: ' + tmp$ret$0, toString(value));
      }
      var literal = value;
      try {
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.decodeTaggedByte.<anonymous>' call
        var result = get_int(literal);
        var tmp0_elvis_lhs = (-128 <= result ? result <= 127 : false) ? toByte(result) : null;
        var tmp_1;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, literal, 'byte', tag);
        } else {
          tmp_1 = tmp0_elvis_lhs;
        }
        tmp$ret$4 = tmp_1;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          unparsedPrimitive(this, literal, 'byte', tag);
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$4;
  };
  protoOf(AbstractJsonTreeDecoder).oz = function (tag) {
    return this.m1a((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).n1a = function (tag) {
    var tmp$ret$4;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.j1a(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp = getKClass(JsonPrimitive).v9();
        var tmp_0 = getKClassFromExpression(value).v9();
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast.<anonymous>' call
        var tmp$ret$0 = this.h1a(tag);
        throw JsonDecodingException_0(-1, 'Expected ' + tmp + ', but had ' + tmp_0 + ' as the serialized body of ' + 'short' + ' at element: ' + tmp$ret$0, toString(value));
      }
      var literal = value;
      try {
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.decodeTaggedShort.<anonymous>' call
        var result = get_int(literal);
        var tmp0_elvis_lhs = (-32768 <= result ? result <= 32767 : false) ? toShort(result) : null;
        var tmp_1;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, literal, 'short', tag);
        } else {
          tmp_1 = tmp0_elvis_lhs;
        }
        tmp$ret$4 = tmp_1;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          unparsedPrimitive(this, literal, 'short', tag);
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$4;
  };
  protoOf(AbstractJsonTreeDecoder).pz = function (tag) {
    return this.n1a((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).o1a = function (tag) {
    var tmp$ret$4;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.j1a(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp = getKClass(JsonPrimitive).v9();
        var tmp_0 = getKClassFromExpression(value).v9();
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast.<anonymous>' call
        var tmp$ret$0 = this.h1a(tag);
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
  protoOf(AbstractJsonTreeDecoder).qz = function (tag) {
    return this.o1a((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).p1a = function (tag) {
    var tmp$ret$4;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.j1a(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp = getKClass(JsonPrimitive).v9();
        var tmp_0 = getKClassFromExpression(value).v9();
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast.<anonymous>' call
        var tmp$ret$0 = this.h1a(tag);
        throw JsonDecodingException_0(-1, 'Expected ' + tmp + ', but had ' + tmp_0 + ' as the serialized body of ' + 'long' + ' at element: ' + tmp$ret$0, toString(value));
      }
      var literal = value;
      try {
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.decodeTaggedLong.<anonymous>' call
        var tmp0_elvis_lhs = get_long(literal);
        var tmp_1;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, literal, 'long', tag);
        } else {
          tmp_1 = tmp0_elvis_lhs;
        }
        tmp$ret$4 = tmp_1;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          unparsedPrimitive(this, literal, 'long', tag);
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$4;
  };
  protoOf(AbstractJsonTreeDecoder).rz = function (tag) {
    return this.p1a((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).q1a = function (tag) {
    var tmp$ret$4;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.j1a(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp = getKClass(JsonPrimitive).v9();
        var tmp_0 = getKClassFromExpression(value).v9();
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast.<anonymous>' call
        var tmp$ret$0 = this.h1a(tag);
        throw JsonDecodingException_0(-1, 'Expected ' + tmp + ', but had ' + tmp_0 + ' as the serialized body of ' + 'float' + ' at element: ' + tmp$ret$0, toString(value));
      }
      var literal = value;
      try {
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.decodeTaggedFloat.<anonymous>' call
        var tmp0_elvis_lhs = get_float(literal);
        var tmp_1;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, literal, 'float', tag);
        } else {
          tmp_1 = tmp0_elvis_lhs;
        }
        tmp$ret$4 = tmp_1;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          unparsedPrimitive(this, literal, 'float', tag);
        } else {
          throw $p;
        }
      }
    }
    var result = tmp$ret$4;
    var specialFp = this.e14().a12_1.x13_1;
    if (specialFp || isFinite(result))
      return result;
    throw InvalidFloatingPointDecoded(result, tag, toString(this.i1a()));
  };
  protoOf(AbstractJsonTreeDecoder).sz = function (tag) {
    return this.q1a((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).r1a = function (tag) {
    var tmp$ret$4;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.j1a(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp = getKClass(JsonPrimitive).v9();
        var tmp_0 = getKClassFromExpression(value).v9();
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast.<anonymous>' call
        var tmp$ret$0 = this.h1a(tag);
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
    var specialFp = this.e14().a12_1.x13_1;
    if (specialFp || isFinite_0(result))
      return result;
    throw InvalidFloatingPointDecoded(result, tag, toString(this.i1a()));
  };
  protoOf(AbstractJsonTreeDecoder).tz = function (tag) {
    return this.r1a((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).s1a = function (tag) {
    var tmp$ret$4;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.j1a(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp = getKClass(JsonPrimitive).v9();
        var tmp_0 = getKClassFromExpression(value).v9();
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast.<anonymous>' call
        var tmp$ret$0 = this.h1a(tag);
        throw JsonDecodingException_0(-1, 'Expected ' + tmp + ', but had ' + tmp_0 + ' as the serialized body of ' + 'char' + ' at element: ' + tmp$ret$0, toString(value));
      }
      var literal = value;
      try {
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.decodeTaggedChar.<anonymous>' call
        var tmp0_elvis_lhs = new Char(single(literal.k14()));
        var tmp_1;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, literal, 'char', tag);
        } else {
          tmp_1 = tmp0_elvis_lhs;
        }
        tmp$ret$4 = tmp_1.a1_1;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          unparsedPrimitive(this, literal, 'char', tag);
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$4;
  };
  protoOf(AbstractJsonTreeDecoder).uz = function (tag) {
    return this.s1a((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).t1a = function (tag) {
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
    // Inline function 'kotlinx.serialization.json.internal.cast' call
    var value = this.j1a(tag);
    if (!(value instanceof JsonPrimitive)) {
      var tmp = getKClass(JsonPrimitive).v9();
      var tmp_0 = getKClassFromExpression(value).v9();
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast.<anonymous>' call
      var tmp$ret$0 = this.h1a(tag);
      throw JsonDecodingException_0(-1, 'Expected ' + tmp + ', but had ' + tmp_0 + ' as the serialized body of ' + 'string' + ' at element: ' + tmp$ret$0, toString(value));
    }
    var value_0 = value;
    if (!(value_0 instanceof JsonLiteral))
      throw JsonDecodingException_0(-1, "Expected string value for a non-null key '" + tag + "', got null literal instead at element: " + this.h1a(tag), toString(this.i1a()));
    if (!value_0.m14_1 && !this.e14().a12_1.p13_1) {
      throw JsonDecodingException_0(-1, "String literal for key '" + tag + "' should be quoted at element: " + this.h1a(tag) + ".\nUse 'isLenient = true' in 'Json {}' builder to accept non-compliant JSON.", toString(this.i1a()));
    }
    return value_0.o14_1;
  };
  protoOf(AbstractJsonTreeDecoder).vz = function (tag) {
    return this.t1a((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).u1a = function (tag, inlineDescriptor) {
    var tmp;
    if (get_isUnsignedNumber(inlineDescriptor)) {
      var tmp_0 = this.e14();
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      var tmp1 = this.j1a(tag);
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var serialName = inlineDescriptor.sj();
      if (!(tmp1 instanceof JsonPrimitive)) {
        var tmp_1 = getKClass(JsonPrimitive).v9();
        var tmp_2 = getKClassFromExpression(tmp1).v9();
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast.<anonymous>' call
        var tmp$ret$0 = this.h1a(tag);
        throw JsonDecodingException_0(-1, 'Expected ' + tmp_1 + ', but had ' + tmp_2 + ' as the serialized body of ' + serialName + ' at element: ' + tmp$ret$0, toString(tmp1));
      }
      var lexer = StringJsonLexer_0(tmp_0, tmp1.k14());
      tmp = new JsonDecoderForUnsignedTypes(lexer, this.e14());
    } else {
      tmp = protoOf(NamedValueDecoder).wz.call(this, tag, inlineDescriptor);
    }
    return tmp;
  };
  protoOf(AbstractJsonTreeDecoder).wz = function (tag, inlineDescriptor) {
    return this.u1a((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), inlineDescriptor);
  };
  protoOf(AbstractJsonTreeDecoder).tl = function (descriptor) {
    return !(this.iz() == null) ? protoOf(NamedValueDecoder).tl.call(this, descriptor) : (new JsonPrimitiveDecoder(this.e14(), this.r1(), this.f1a_1)).tl(descriptor);
  };
  function coerceInputValue_0($this, descriptor, index, tag) {
    var tmp0 = $this.e14();
    var tmp$ret$1;
    $l$block_2: {
      // Inline function 'kotlinx.serialization.json.internal.tryCoerceValue' call
      var isOptional = descriptor.mk(index);
      var elementDescriptor = descriptor.lk(index);
      var tmp;
      if (isOptional && !elementDescriptor.ak()) {
        // Inline function 'kotlinx.serialization.json.internal.JsonTreeDecoder.coerceInputValue.<anonymous>' call
        var tmp_0 = $this.j1a(tag);
        tmp = tmp_0 instanceof JsonNull;
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$1 = true;
        break $l$block_2;
      }
      if (equals(elementDescriptor.ek(), ENUM_getInstance())) {
        var tmp_1;
        if (elementDescriptor.ak()) {
          // Inline function 'kotlinx.serialization.json.internal.JsonTreeDecoder.coerceInputValue.<anonymous>' call
          var tmp_2 = $this.j1a(tag);
          tmp_1 = tmp_2 instanceof JsonNull;
        } else {
          tmp_1 = false;
        }
        if (tmp_1) {
          tmp$ret$1 = false;
          break $l$block_2;
        }
        // Inline function 'kotlinx.serialization.json.internal.JsonTreeDecoder.coerceInputValue.<anonymous>' call
        var tmp_3 = $this.j1a(tag);
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
        var coerceToNull = !tmp0.a12_1.s13_1 && elementDescriptor.ak();
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
    $this.e1b_1 = (!$this.e14().a12_1.s13_1 && !descriptor.mk(index) && descriptor.lk(index).ak());
    return $this.e1b_1;
  }
  function JsonTreeDecoder(json, value, polymorphicDiscriminator, polyDescriptor) {
    polymorphicDiscriminator = polymorphicDiscriminator === VOID ? null : polymorphicDiscriminator;
    polyDescriptor = polyDescriptor === VOID ? null : polyDescriptor;
    AbstractJsonTreeDecoder.call(this, json, value, polymorphicDiscriminator);
    this.b1b_1 = value;
    this.c1b_1 = polyDescriptor;
    this.d1b_1 = 0;
    this.e1b_1 = false;
  }
  protoOf(JsonTreeDecoder).r1 = function () {
    return this.b1b_1;
  };
  protoOf(JsonTreeDecoder).nm = function (descriptor) {
    while (this.d1b_1 < descriptor.gk()) {
      var _unary__edvuaz = this.d1b_1;
      this.d1b_1 = _unary__edvuaz + 1 | 0;
      var name = this.dz(descriptor, _unary__edvuaz);
      var index = this.d1b_1 - 1 | 0;
      this.e1b_1 = false;
      var tmp;
      var tmp_0;
      // Inline function 'kotlin.collections.contains' call
      // Inline function 'kotlin.collections.containsKey' call
      var this_0 = this.r1();
      if ((isInterface(this_0, KtMap) ? this_0 : THROW_CCE()).s1(name)) {
        tmp_0 = true;
      } else {
        tmp_0 = absenceIsNull(this, descriptor, index);
      }
      if (tmp_0) {
        tmp = !this.g1a_1.u13_1 || !coerceInputValue_0(this, descriptor, index, name);
      } else {
        tmp = false;
      }
      if (tmp) {
        return index;
      }
    }
    return -1;
  };
  protoOf(JsonTreeDecoder).il = function () {
    return !this.e1b_1 && protoOf(AbstractJsonTreeDecoder).il.call(this);
  };
  protoOf(JsonTreeDecoder).ez = function (descriptor, index) {
    var strategy = namingStrategy(descriptor, this.e14());
    var baseName = descriptor.ik(index);
    if (strategy == null) {
      if (!this.g1a_1.y13_1)
        return baseName;
      if (this.r1().v1().n1(baseName))
        return baseName;
    }
    var deserializationNamesMap_0 = deserializationNamesMap(this.e14(), descriptor);
    // Inline function 'kotlin.collections.find' call
    var tmp0 = this.r1().v1();
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var _iterator__ex2g4s = tmp0.i();
      while (_iterator__ex2g4s.j()) {
        var element = _iterator__ex2g4s.k();
        // Inline function 'kotlinx.serialization.json.internal.JsonTreeDecoder.elementName.<anonymous>' call
        if (deserializationNamesMap_0.u1(element) === index) {
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
    var fallbackName = strategy == null ? null : strategy.w16(descriptor, index, baseName);
    return fallbackName == null ? baseName : fallbackName;
  };
  protoOf(JsonTreeDecoder).j1a = function (tag) {
    return getValue(this.r1(), tag);
  };
  protoOf(JsonTreeDecoder).wl = function (descriptor) {
    if (descriptor === this.c1b_1) {
      var tmp = this.e14();
      var tmp1 = this.i1a();
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var serialName = this.c1b_1.sj();
      if (!(tmp1 instanceof JsonObject)) {
        var tmp_0 = getKClass(JsonObject).v9();
        var tmp_1 = getKClassFromExpression(tmp1).v9();
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast.<anonymous>' call
        var tmp$ret$0 = this.kz();
        throw JsonDecodingException_0(-1, 'Expected ' + tmp_0 + ', but had ' + tmp_1 + ' as the serialized body of ' + serialName + ' at element: ' + tmp$ret$0, toString(tmp1));
      }
      return new JsonTreeDecoder(tmp, tmp1, this.f1a_1, this.c1b_1);
    }
    return protoOf(AbstractJsonTreeDecoder).wl.call(this, descriptor);
  };
  protoOf(JsonTreeDecoder).xl = function (descriptor) {
    var tmp;
    if (this.g1a_1.o13_1) {
      tmp = true;
    } else {
      var tmp_0 = descriptor.ek();
      tmp = tmp_0 instanceof PolymorphicKind;
    }
    if (tmp)
      return Unit_instance;
    var strategy = namingStrategy(descriptor, this.e14());
    var tmp_1;
    if (strategy == null && !this.g1a_1.y13_1) {
      tmp_1 = jsonCachedSerialNames(descriptor);
    } else if (!(strategy == null)) {
      tmp_1 = deserializationNamesMap(this.e14(), descriptor).v1();
    } else {
      var tmp_2 = jsonCachedSerialNames(descriptor);
      var tmp0_safe_receiver = get_schemaCache(this.e14()).i19(descriptor, get_JsonDeserializationNamesKey());
      // Inline function 'kotlin.collections.orEmpty' call
      var tmp0_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.v1();
      var tmp$ret$0 = tmp0_elvis_lhs == null ? emptySet() : tmp0_elvis_lhs;
      tmp_1 = plus_0(tmp_2, tmp$ret$0);
    }
    var names = tmp_1;
    var _iterator__ex2g4s = this.r1().v1().i();
    while (_iterator__ex2g4s.j()) {
      var key = _iterator__ex2g4s.k();
      if (!names.n1(key) && !(key === this.f1a_1)) {
        throw UnknownKeyException(key, this.r1().toString());
      }
    }
  };
  function JsonTreeListDecoder(json, value) {
    AbstractJsonTreeDecoder.call(this, json, value);
    this.l1b_1 = value;
    this.m1b_1 = this.l1b_1.l();
    this.n1b_1 = -1;
  }
  protoOf(JsonTreeListDecoder).r1 = function () {
    return this.l1b_1;
  };
  protoOf(JsonTreeListDecoder).ez = function (descriptor, index) {
    return index.toString();
  };
  protoOf(JsonTreeListDecoder).j1a = function (tag) {
    return this.l1b_1.n(toInt(tag));
  };
  protoOf(JsonTreeListDecoder).nm = function (descriptor) {
    while (this.n1b_1 < (this.m1b_1 - 1 | 0)) {
      this.n1b_1 = this.n1b_1 + 1 | 0;
      return this.n1b_1;
    }
    return -1;
  };
  function JsonPrimitiveDecoder(json, value, polymorphicDiscriminator) {
    polymorphicDiscriminator = polymorphicDiscriminator === VOID ? null : polymorphicDiscriminator;
    AbstractJsonTreeDecoder.call(this, json, value, polymorphicDiscriminator);
    this.u1b_1 = value;
    this.xz('primitive');
  }
  protoOf(JsonPrimitiveDecoder).r1 = function () {
    return this.u1b_1;
  };
  protoOf(JsonPrimitiveDecoder).nm = function (descriptor) {
    return 0;
  };
  protoOf(JsonPrimitiveDecoder).j1a = function (tag) {
    // Inline function 'kotlin.require' call
    if (!(tag === 'primitive')) {
      // Inline function 'kotlinx.serialization.json.internal.JsonPrimitiveDecoder.currentElement.<anonymous>' call
      var message = "This input can only handle primitives with 'primitive' tag";
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return this.u1b_1;
  };
  function JsonTreeMapDecoder(json, value) {
    JsonTreeDecoder.call(this, json, value);
    this.f1c_1 = value;
    this.g1c_1 = toList(this.f1c_1.v1());
    this.h1c_1 = imul(this.g1c_1.l(), 2);
    this.i1c_1 = -1;
  }
  protoOf(JsonTreeMapDecoder).r1 = function () {
    return this.f1c_1;
  };
  protoOf(JsonTreeMapDecoder).ez = function (descriptor, index) {
    var i = index / 2 | 0;
    return this.g1c_1.n(i);
  };
  protoOf(JsonTreeMapDecoder).nm = function (descriptor) {
    while (this.i1c_1 < (this.h1c_1 - 1 | 0)) {
      this.i1c_1 = this.i1c_1 + 1 | 0;
      return this.i1c_1;
    }
    return -1;
  };
  protoOf(JsonTreeMapDecoder).j1a = function (tag) {
    return (this.i1c_1 % 2 | 0) === 0 ? JsonPrimitive_0(tag) : getValue(this.f1c_1, tag);
  };
  protoOf(JsonTreeMapDecoder).xl = function (descriptor) {
  };
  function readPolymorphicJson(_this__u8e3s4, discriminator, element, deserializer) {
    return (new JsonTreeDecoder(_this__u8e3s4, element, discriminator, deserializer.ri())).vl(deserializer);
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
    this.v19_1 = begin;
    this.w19_1 = end;
  }
  function switchMode(_this__u8e3s4, desc) {
    var tmp0_subject = desc.ek();
    var tmp;
    if (tmp0_subject instanceof PolymorphicKind) {
      tmp = WriteMode_POLY_OBJ_getInstance();
    } else {
      if (equals(tmp0_subject, LIST_getInstance())) {
        tmp = WriteMode_LIST_getInstance();
      } else {
        if (equals(tmp0_subject, MAP_getInstance())) {
          // Inline function 'kotlinx.serialization.json.internal.selectMapMode' call
          var keyDescriptor = carrierDescriptor(desc.lk(0), _this__u8e3s4.lm());
          var keyKind = keyDescriptor.ek();
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
            if (_this__u8e3s4.a12_1.q13_1) {
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
    if (equals(_this__u8e3s4.ek(), CONTEXTUAL_getInstance())) {
      var tmp0_safe_receiver = getContextualDescriptor(module_0, _this__u8e3s4);
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : carrierDescriptor(tmp0_safe_receiver, module_0);
      tmp = tmp1_elvis_lhs == null ? _this__u8e3s4 : tmp1_elvis_lhs;
    } else if (_this__u8e3s4.fk()) {
      tmp = carrierDescriptor(_this__u8e3s4.lk(0), module_0);
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
    $this.j1c(lastPosition, current);
    return appendEsc($this, current + 1 | 0);
  }
  function decodedString($this, lastPosition, currentPosition) {
    $this.j1c(lastPosition, currentPosition);
    var result = $this.s12_1.toString();
    $this.s12_1.mb(0);
    return result;
  }
  function takePeeked($this) {
    // Inline function 'kotlin.also' call
    var this_0 = ensureNotNull($this.r12_1);
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.takePeeked.<anonymous>' call
    $this.r12_1 = null;
    return this_0;
  }
  function wasUnquotedString($this) {
    return !(charSequenceGet($this.k1c(), $this.p12_1 - 1 | 0) === _Char___init__impl__6a9atx(34));
  }
  function appendEsc($this, startPosition) {
    var currentPosition = startPosition;
    currentPosition = $this.l1c(currentPosition);
    if (currentPosition === -1) {
      $this.s16('Expected escape sequence to continue, got EOF');
    }
    var tmp = $this.k1c();
    var _unary__edvuaz = currentPosition;
    currentPosition = _unary__edvuaz + 1 | 0;
    var currentChar = charSequenceGet(tmp, _unary__edvuaz);
    if (currentChar === _Char___init__impl__6a9atx(117)) {
      return appendHex($this, $this.k1c(), currentPosition);
    }
    // Inline function 'kotlin.code' call
    var tmp$ret$0 = Char__toInt_impl_vasixd(currentChar);
    var c = escapeToChar(tmp$ret$0);
    if (c === _Char___init__impl__6a9atx(0)) {
      $this.s16("Invalid escaped char '" + toString_1(currentChar) + "'");
    }
    $this.s12_1.r7(c);
    return currentPosition;
  }
  function appendHex($this, source, startPos) {
    if ((startPos + 4 | 0) >= charSequenceLength(source)) {
      $this.p12_1 = startPos;
      $this.m1c();
      if (($this.p12_1 + 4 | 0) >= charSequenceLength(source)) {
        $this.s16('Unexpected EOF during unicode escape');
      }
      return appendHex($this, source, $this.p12_1);
    }
    $this.s12_1.r7(numberToChar((((fromHexChar($this, source, startPos) << 12) + (fromHexChar($this, source, startPos + 1 | 0) << 8) | 0) + (fromHexChar($this, source, startPos + 2 | 0) << 4) | 0) + fromHexChar($this, source, startPos + 3 | 0) | 0));
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
      $this.s16("Invalid toHexChar char '" + toString_1(character) + "' in unicode escape");
    }
    return tmp;
  }
  function consumeBoolean2($this, start) {
    var current = $this.l1c(start);
    if (current >= charSequenceLength($this.k1c()) || current === -1) {
      $this.s16('EOF');
    }
    var tmp = $this.k1c();
    var _unary__edvuaz = current;
    current = _unary__edvuaz + 1 | 0;
    // Inline function 'kotlin.code' call
    var this_0 = charSequenceGet(tmp, _unary__edvuaz);
    var tmp0_subject = Char__toInt_impl_vasixd(this_0) | 32;
    var tmp_0;
    // Inline function 'kotlin.code' call
    var this_1 = _Char___init__impl__6a9atx(116);
    if (tmp0_subject === Char__toInt_impl_vasixd(this_1)) {
      consumeBooleanLiteral($this, 'rue', current);
      tmp_0 = true;
    } else {
      // Inline function 'kotlin.code' call
      var this_2 = _Char___init__impl__6a9atx(102);
      if (tmp0_subject === Char__toInt_impl_vasixd(this_2)) {
        consumeBooleanLiteral($this, 'alse', current);
        tmp_0 = false;
      } else {
        $this.s16("Expected valid boolean literal prefix, but had '" + $this.x17() + "'");
      }
    }
    return tmp_0;
  }
  function consumeBooleanLiteral($this, literalSuffix, current) {
    if ((charSequenceLength($this.k1c()) - current | 0) < literalSuffix.length) {
      $this.s16('Unexpected end of boolean literal');
    }
    var inductionVariable = 0;
    var last = charSequenceLength(literalSuffix) - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var expected = charSequenceGet(literalSuffix, i);
        var actual = charSequenceGet($this.k1c(), current + i | 0);
        // Inline function 'kotlin.code' call
        var tmp = Char__toInt_impl_vasixd(expected);
        // Inline function 'kotlin.code' call
        if (!(tmp === (Char__toInt_impl_vasixd(actual) | 32))) {
          $this.s16("Expected valid boolean literal prefix, but had '" + $this.x17() + "'");
        }
      }
       while (inductionVariable <= last);
    $this.p12_1 = current + literalSuffix.length | 0;
  }
  function consumeNumericLiteral$calculateExponent(exponentAccumulator, isExponentPositive) {
    var tmp;
    switch (isExponentPositive) {
      case false:
        // Inline function 'kotlin.math.pow' call

        var x = -exponentAccumulator.a3();
        tmp = Math.pow(10.0, x);
        break;
      case true:
        // Inline function 'kotlin.math.pow' call

        var x_0 = exponentAccumulator.a3();
        tmp = Math.pow(10.0, x_0);
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  }
  function AbstractJsonLexer() {
    this.p12_1 = 0;
    this.q12_1 = new JsonPath();
    this.r12_1 = null;
    this.s12_1 = StringBuilder_init_$Create$();
  }
  protoOf(AbstractJsonLexer).m1c = function () {
  };
  protoOf(AbstractJsonLexer).l19 = function () {
    var current = this.n1c();
    var source = this.k1c();
    if (current >= charSequenceLength(source) || current === -1)
      return false;
    if (charSequenceGet(source, current) === _Char___init__impl__6a9atx(44)) {
      this.p12_1 = this.p12_1 + 1 | 0;
      return true;
    }
    return false;
  };
  protoOf(AbstractJsonLexer).o1c = function (c) {
    return c === _Char___init__impl__6a9atx(125) || c === _Char___init__impl__6a9atx(93) || (c === _Char___init__impl__6a9atx(58) || c === _Char___init__impl__6a9atx(44)) ? false : true;
  };
  protoOf(AbstractJsonLexer).t12 = function () {
    var nextToken = this.z17();
    if (!(nextToken === 10)) {
      this.s16('Expected EOF after parsing, but had ' + toString_1(charSequenceGet(this.k1c(), this.p12_1 - 1 | 0)) + ' instead');
    }
  };
  protoOf(AbstractJsonLexer).t17 = function (expected) {
    var token = this.z17();
    if (!(token === expected)) {
      this.p1c(expected);
    }
    return token;
  };
  protoOf(AbstractJsonLexer).q1c = function (expected) {
    if (this.p12_1 > 0 && expected === _Char___init__impl__6a9atx(34)) {
      var tmp$ret$1;
      $l$block: {
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.withPositionRollback' call
        var snapshot = this.p12_1;
        try {
          // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.unexpectedToken.<anonymous>' call
          this.p12_1 = this.p12_1 - 1 | 0;
          tmp$ret$1 = this.x17();
          break $l$block;
        }finally {
          this.p12_1 = snapshot;
        }
      }
      var inputLiteral = tmp$ret$1;
      if (inputLiteral === 'null') {
        this.r16("Expected string literal but 'null' literal was found", this.p12_1 - 1 | 0, "Use 'coerceInputValues = true' in 'Json {}' builder to coerce nulls if property has a default value.");
      }
    }
    this.p1c(charToTokenClass(expected));
  };
  protoOf(AbstractJsonLexer).r1c = function (expectedToken, wasConsumed) {
    var expected = tokenDescription(expectedToken);
    var position = wasConsumed ? this.p12_1 - 1 | 0 : this.p12_1;
    var s = this.p12_1 === charSequenceLength(this.k1c()) || position < 0 ? 'EOF' : toString_1(charSequenceGet(this.k1c(), position));
    this.s16('Expected ' + expected + ", but had '" + s + "' instead", position);
  };
  protoOf(AbstractJsonLexer).p1c = function (expectedToken, wasConsumed, $super) {
    wasConsumed = wasConsumed === VOID ? true : wasConsumed;
    return $super === VOID ? this.r1c(expectedToken, wasConsumed) : $super.r1c.call(this, expectedToken, wasConsumed);
  };
  protoOf(AbstractJsonLexer).u17 = function () {
    var source = this.k1c();
    var cpos = this.p12_1;
    $l$loop_0: while (true) {
      cpos = this.l1c(cpos);
      if (cpos === -1)
        break $l$loop_0;
      var ch = charSequenceGet(source, cpos);
      if (ch === _Char___init__impl__6a9atx(32) || ch === _Char___init__impl__6a9atx(10) || ch === _Char___init__impl__6a9atx(13) || ch === _Char___init__impl__6a9atx(9)) {
        cpos = cpos + 1 | 0;
        continue $l$loop_0;
      }
      this.p12_1 = cpos;
      return charToTokenClass(ch);
    }
    this.p12_1 = cpos;
    return 10;
  };
  protoOf(AbstractJsonLexer).m19 = function (doConsume) {
    var current = this.n1c();
    current = this.l1c(current);
    var len = charSequenceLength(this.k1c()) - current | 0;
    if (len < 4 || current === -1)
      return false;
    var inductionVariable = 0;
    if (inductionVariable <= 3)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!(charSequenceGet('null', i) === charSequenceGet(this.k1c(), current + i | 0)))
          return false;
      }
       while (inductionVariable <= 3);
    if (len > 4 && charToTokenClass(charSequenceGet(this.k1c(), current + 4 | 0)) === 0)
      return false;
    if (doConsume) {
      this.p12_1 = current + 4 | 0;
    }
    return true;
  };
  protoOf(AbstractJsonLexer).x19 = function (doConsume, $super) {
    doConsume = doConsume === VOID ? true : doConsume;
    return $super === VOID ? this.m19(doConsume) : $super.m19.call(this, doConsume);
  };
  protoOf(AbstractJsonLexer).n19 = function (isLenient) {
    var token = this.u17();
    var tmp;
    if (isLenient) {
      if (!(token === 1) && !(token === 0))
        return null;
      tmp = this.x17();
    } else {
      if (!(token === 1))
        return null;
      tmp = this.w17();
    }
    var string = tmp;
    this.r12_1 = string;
    return string;
  };
  protoOf(AbstractJsonLexer).s1c = function () {
    this.r12_1 = null;
  };
  protoOf(AbstractJsonLexer).t1c = function (startPos, endPos) {
    // Inline function 'kotlin.text.substring' call
    var this_0 = this.k1c();
    return toString(charSequenceSubSequence(this_0, startPos, endPos));
  };
  protoOf(AbstractJsonLexer).w17 = function () {
    if (!(this.r12_1 == null)) {
      return takePeeked(this);
    }
    return this.q19();
  };
  protoOf(AbstractJsonLexer).consumeString2 = function (source, startPosition, current) {
    var currentPosition = current;
    var lastPosition = startPosition;
    var char = charSequenceGet(source, currentPosition);
    var usedAppend = false;
    while (!(char === _Char___init__impl__6a9atx(34))) {
      if (char === _Char___init__impl__6a9atx(92)) {
        usedAppend = true;
        currentPosition = this.l1c(appendEscape(this, lastPosition, currentPosition));
        if (currentPosition === -1) {
          this.s16('Unexpected EOF', currentPosition);
        }
        lastPosition = currentPosition;
      } else {
        currentPosition = currentPosition + 1 | 0;
        if (currentPosition >= charSequenceLength(source)) {
          usedAppend = true;
          this.j1c(lastPosition, currentPosition);
          currentPosition = this.l1c(currentPosition);
          if (currentPosition === -1) {
            this.s16('Unexpected EOF', currentPosition);
          }
          lastPosition = currentPosition;
        }
      }
      char = charSequenceGet(source, currentPosition);
    }
    var tmp;
    if (!usedAppend) {
      tmp = this.t1c(lastPosition, currentPosition);
    } else {
      tmp = decodedString(this, lastPosition, currentPosition);
    }
    var string = tmp;
    this.p12_1 = currentPosition + 1 | 0;
    return string;
  };
  protoOf(AbstractJsonLexer).r19 = function () {
    var result = this.x17();
    if (result === 'null' && wasUnquotedString(this)) {
      this.s16("Unexpected 'null' value instead of string literal");
    }
    return result;
  };
  protoOf(AbstractJsonLexer).x17 = function () {
    if (!(this.r12_1 == null)) {
      return takePeeked(this);
    }
    var current = this.n1c();
    if (current >= charSequenceLength(this.k1c()) || current === -1) {
      this.s16('EOF', current);
    }
    var token = charToTokenClass(charSequenceGet(this.k1c(), current));
    if (token === 1) {
      return this.w17();
    }
    if (!(token === 0)) {
      this.s16('Expected beginning of the string, but got ' + toString_1(charSequenceGet(this.k1c(), current)));
    }
    var usedAppend = false;
    while (charToTokenClass(charSequenceGet(this.k1c(), current)) === 0) {
      current = current + 1 | 0;
      if (current >= charSequenceLength(this.k1c())) {
        usedAppend = true;
        this.j1c(this.p12_1, current);
        var eof = this.l1c(current);
        if (eof === -1) {
          this.p12_1 = current;
          return decodedString(this, 0, 0);
        } else {
          current = eof;
        }
      }
    }
    var tmp;
    if (!usedAppend) {
      tmp = this.t1c(this.p12_1, current);
    } else {
      tmp = decodedString(this, this.p12_1, current);
    }
    var result = tmp;
    this.p12_1 = current;
    return result;
  };
  protoOf(AbstractJsonLexer).j1c = function (fromIndex, toIndex) {
    this.s12_1.gb(this.k1c(), fromIndex, toIndex);
  };
  protoOf(AbstractJsonLexer).p19 = function (allowLenientStrings) {
    // Inline function 'kotlin.collections.mutableListOf' call
    var tokenStack = ArrayList_init_$Create$();
    var lastToken = this.u17();
    if (!(lastToken === 8) && !(lastToken === 6)) {
      this.x17();
      return Unit_instance;
    }
    $l$loop: while (true) {
      lastToken = this.u17();
      if (lastToken === 1) {
        if (allowLenientStrings)
          this.x17();
        else
          this.q19();
        continue $l$loop;
      }
      var tmp0_subject = lastToken;
      if (tmp0_subject === 8 || tmp0_subject === 6) {
        tokenStack.d(lastToken);
      } else if (tmp0_subject === 9) {
        if (!(last(tokenStack) === 8))
          throw JsonDecodingException_0(this.p12_1, 'found ] instead of } at path: ' + this.q12_1.toString(), this.k1c());
        removeLast(tokenStack);
      } else if (tmp0_subject === 7) {
        if (!(last(tokenStack) === 6))
          throw JsonDecodingException_0(this.p12_1, 'found } instead of ] at path: ' + this.q12_1.toString(), this.k1c());
        removeLast(tokenStack);
      } else if (tmp0_subject === 10) {
        this.s16('Unexpected end of input due to malformed JSON during ignoring unknown keys');
      }
      this.z17();
      if (tokenStack.l() === 0)
        return Unit_instance;
    }
  };
  protoOf(AbstractJsonLexer).toString = function () {
    return "JsonReader(source='" + toString(this.k1c()) + "', currentPosition=" + this.p12_1 + ')';
  };
  protoOf(AbstractJsonLexer).o19 = function (key) {
    var processed = this.t1c(0, this.p12_1);
    var lastIndexOf_0 = lastIndexOf(processed, key);
    this.r16("Encountered an unknown key '" + key + "'", lastIndexOf_0, "Use 'ignoreUnknownKeys = true' in 'Json {}' builder to ignore unknown keys.");
  };
  protoOf(AbstractJsonLexer).r16 = function (message, position, hint) {
    var tmp;
    // Inline function 'kotlin.text.isEmpty' call
    if (charSequenceLength(hint) === 0) {
      tmp = '';
    } else {
      tmp = '\n' + hint;
    }
    var hintMessage = tmp;
    throw JsonDecodingException_0(position, message + ' at path: ' + this.q12_1.f17() + hintMessage, this.k1c());
  };
  protoOf(AbstractJsonLexer).s16 = function (message, position, hint, $super) {
    position = position === VOID ? this.p12_1 : position;
    hint = hint === VOID ? '' : hint;
    return $super === VOID ? this.r16(message, position, hint) : $super.r16.call(this, message, position, hint);
  };
  protoOf(AbstractJsonLexer).q14 = function () {
    var current = this.n1c();
    current = this.l1c(current);
    if (current >= charSequenceLength(this.k1c()) || current === -1) {
      this.s16('EOF');
    }
    var tmp;
    if (charSequenceGet(this.k1c(), current) === _Char___init__impl__6a9atx(34)) {
      current = current + 1 | 0;
      if (current === charSequenceLength(this.k1c())) {
        this.s16('EOF');
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
    $l$loop_4: while (!(current === charSequenceLength(this.k1c()))) {
      var ch = charSequenceGet(this.k1c(), current);
      if ((ch === _Char___init__impl__6a9atx(101) || ch === _Char___init__impl__6a9atx(69)) && !hasExponent) {
        if (current === start) {
          this.s16('Unexpected symbol ' + toString_1(ch) + ' in numeric literal');
        }
        isExponentPositive = true;
        hasExponent = true;
        current = current + 1 | 0;
        continue $l$loop_4;
      }
      if (ch === _Char___init__impl__6a9atx(45) && hasExponent) {
        if (current === start) {
          this.s16("Unexpected symbol '-' in numeric literal");
        }
        isExponentPositive = false;
        current = current + 1 | 0;
        continue $l$loop_4;
      }
      if (ch === _Char___init__impl__6a9atx(43) && hasExponent) {
        if (current === start) {
          this.s16("Unexpected symbol '+' in numeric literal");
        }
        isExponentPositive = true;
        current = current + 1 | 0;
        continue $l$loop_4;
      }
      if (ch === _Char___init__impl__6a9atx(45)) {
        if (!(current === start)) {
          this.s16("Unexpected symbol '-' in numeric literal");
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
        this.s16("Unexpected symbol '" + toString_1(ch) + "' in numeric literal");
      }
      if (hasExponent) {
        // Inline function 'kotlin.Long.times' call
        // Inline function 'kotlin.Long.plus' call
        exponentAccumulator = exponentAccumulator.n2(toLong(10)).l2(toLong(digit));
        continue $l$loop_4;
      }
      // Inline function 'kotlin.Long.times' call
      // Inline function 'kotlin.Long.minus' call
      accumulator = accumulator.n2(toLong(10)).m2(toLong(digit));
      if (accumulator.v(new Long(0, 0)) > 0) {
        this.s16('Numeric value overflow');
      }
    }
    var hasChars = !(current === start);
    if (start === current || (isNegative && start === (current - 1 | 0))) {
      this.s16('Expected numeric literal');
    }
    if (hasQuotation) {
      if (!hasChars) {
        this.s16('EOF');
      }
      if (!(charSequenceGet(this.k1c(), current) === _Char___init__impl__6a9atx(34))) {
        this.s16('Expected closing quotation mark');
      }
      current = current + 1 | 0;
    }
    this.p12_1 = current;
    if (hasExponent) {
      var doubleAccumulator = accumulator.a3() * consumeNumericLiteral$calculateExponent(exponentAccumulator, isExponentPositive);
      if (doubleAccumulator > (new Long(-1, 2147483647)).a3() || doubleAccumulator < (new Long(0, -2147483648)).a3()) {
        this.s16('Numeric value overflow');
      }
      // Inline function 'kotlin.math.floor' call
      if (!(Math.floor(doubleAccumulator) === doubleAccumulator)) {
        this.s16("Can't convert " + doubleAccumulator + ' to Long');
      }
      accumulator = numberToLong(doubleAccumulator);
    }
    var tmp_0;
    if (isNegative) {
      tmp_0 = accumulator;
    } else if (!accumulator.equals(new Long(0, -2147483648))) {
      tmp_0 = accumulator.q2();
    } else {
      this.s16('Numeric value overflow');
    }
    return tmp_0;
  };
  protoOf(AbstractJsonLexer).y19 = function () {
    var current = this.n1c();
    if (current === charSequenceLength(this.k1c())) {
      this.s16('EOF');
    }
    var tmp;
    if (charSequenceGet(this.k1c(), current) === _Char___init__impl__6a9atx(34)) {
      current = current + 1 | 0;
      tmp = true;
    } else {
      tmp = false;
    }
    var hasQuotation = tmp;
    var result = consumeBoolean2(this, current);
    if (hasQuotation) {
      if (this.p12_1 === charSequenceLength(this.k1c())) {
        this.s16('EOF');
      }
      if (!(charSequenceGet(this.k1c(), this.p12_1) === _Char___init__impl__6a9atx(34))) {
        this.s16('Expected closing quotation mark');
      }
      this.p12_1 = this.p12_1 + 1 | 0;
    }
    return result;
  };
  function charToTokenClass(c) {
    var tmp;
    // Inline function 'kotlin.code' call
    if (Char__toInt_impl_vasixd(c) < 126) {
      var tmp_0 = CharMappings_getInstance().v1c_1;
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
    return c < 117 ? CharMappings_getInstance().u1c_1[c] : _Char___init__impl__6a9atx(0);
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
      $this.u1c_1[tmp$ret$0] = numberToChar(c);
    }
  }
  function initC2ESC_0($this, c, esc) {
    // Inline function 'kotlin.code' call
    var tmp$ret$0 = Char__toInt_impl_vasixd(c);
    return initC2ESC($this, tmp$ret$0, esc);
  }
  function initC2TC($this, c, cl) {
    $this.v1c_1[c] = cl;
  }
  function initC2TC_0($this, c, cl) {
    // Inline function 'kotlin.code' call
    var tmp$ret$0 = Char__toInt_impl_vasixd(c);
    return initC2TC($this, tmp$ret$0, cl);
  }
  function CharMappings() {
    CharMappings_instance = this;
    this.u1c_1 = charArray(117);
    this.v1c_1 = new Int8Array(126);
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
  protoOf(StringJsonLexerWithComments).z17 = function () {
    var source = this.k1c();
    var cpos = this.n1c();
    if (cpos >= source.length || cpos === -1)
      return 10;
    this.p12_1 = cpos + 1 | 0;
    return charToTokenClass(charSequenceGet(source, cpos));
  };
  protoOf(StringJsonLexerWithComments).v17 = function () {
    var current = this.n1c();
    if (current >= this.k1c().length || current === -1)
      return false;
    return this.o1c(charSequenceGet(this.k1c(), current));
  };
  protoOf(StringJsonLexerWithComments).k19 = function (expected) {
    var source = this.k1c();
    var current = this.n1c();
    if (current >= source.length || current === -1) {
      this.p12_1 = -1;
      this.q1c(expected);
    }
    var c = charSequenceGet(source, current);
    this.p12_1 = current + 1 | 0;
    if (c === expected)
      return Unit_instance;
    else {
      this.q1c(expected);
    }
  };
  protoOf(StringJsonLexerWithComments).u17 = function () {
    var source = this.k1c();
    var cpos = this.n1c();
    if (cpos >= source.length || cpos === -1)
      return 10;
    this.p12_1 = cpos;
    return charToTokenClass(charSequenceGet(source, cpos));
  };
  protoOf(StringJsonLexerWithComments).n1c = function () {
    var current = this.p12_1;
    if (current === -1)
      return current;
    var source = this.k1c();
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
            this.p12_1 = source.length;
            this.s16('Expected end of the block comment: "*/", but had EOF instead');
          } else {
            current = current + 2 | 0;
          }
          continue $l$loop_1;
        }
      }
      break $l$loop_1;
    }
    this.p12_1 = current;
    return current;
  };
  function StringJsonLexer(source) {
    AbstractJsonLexer.call(this);
    this.f1d_1 = source;
  }
  protoOf(StringJsonLexer).k1c = function () {
    return this.f1d_1;
  };
  protoOf(StringJsonLexer).l1c = function (position) {
    return position < this.k1c().length ? position : -1;
  };
  protoOf(StringJsonLexer).z17 = function () {
    var source = this.k1c();
    var cpos = this.p12_1;
    $l$loop: while (!(cpos === -1) && cpos < source.length) {
      var _unary__edvuaz = cpos;
      cpos = _unary__edvuaz + 1 | 0;
      var c = charSequenceGet(source, _unary__edvuaz);
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.isWs' call
      if (c === _Char___init__impl__6a9atx(32) || c === _Char___init__impl__6a9atx(10) || c === _Char___init__impl__6a9atx(13) || c === _Char___init__impl__6a9atx(9))
        continue $l$loop;
      this.p12_1 = cpos;
      return charToTokenClass(c);
    }
    this.p12_1 = source.length;
    return 10;
  };
  protoOf(StringJsonLexer).v17 = function () {
    var current = this.p12_1;
    if (current === -1)
      return false;
    var source = this.k1c();
    $l$loop: while (current < source.length) {
      var c = charSequenceGet(source, current);
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.isWs' call
      if (c === _Char___init__impl__6a9atx(32) || c === _Char___init__impl__6a9atx(10) || c === _Char___init__impl__6a9atx(13) || c === _Char___init__impl__6a9atx(9)) {
        current = current + 1 | 0;
        continue $l$loop;
      }
      this.p12_1 = current;
      return this.o1c(c);
    }
    this.p12_1 = current;
    return false;
  };
  protoOf(StringJsonLexer).n1c = function () {
    var current = this.p12_1;
    if (current === -1)
      return current;
    var source = this.k1c();
    $l$loop: while (current < source.length) {
      var c = charSequenceGet(source, current);
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.isWs' call
      if (c === _Char___init__impl__6a9atx(32) || c === _Char___init__impl__6a9atx(10) || c === _Char___init__impl__6a9atx(13) || c === _Char___init__impl__6a9atx(9)) {
        current = current + 1 | 0;
      } else {
        break $l$loop;
      }
    }
    this.p12_1 = current;
    return current;
  };
  protoOf(StringJsonLexer).k19 = function (expected) {
    if (this.p12_1 === -1) {
      this.q1c(expected);
    }
    var source = this.k1c();
    var cpos = this.p12_1;
    $l$loop: while (cpos < source.length) {
      var _unary__edvuaz = cpos;
      cpos = _unary__edvuaz + 1 | 0;
      var c = charSequenceGet(source, _unary__edvuaz);
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.isWs' call
      if (c === _Char___init__impl__6a9atx(32) || c === _Char___init__impl__6a9atx(10) || c === _Char___init__impl__6a9atx(13) || c === _Char___init__impl__6a9atx(9))
        continue $l$loop;
      this.p12_1 = cpos;
      if (c === expected)
        return Unit_instance;
      this.q1c(expected);
    }
    this.p12_1 = -1;
    this.q1c(expected);
  };
  protoOf(StringJsonLexer).q19 = function () {
    this.k19(_Char___init__impl__6a9atx(34));
    var current = this.p12_1;
    var closingQuote = indexOf_0(this.k1c(), _Char___init__impl__6a9atx(34), current);
    if (closingQuote === -1) {
      this.x17();
      this.r1c(1, false);
    }
    var inductionVariable = current;
    if (inductionVariable < closingQuote)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (charSequenceGet(this.k1c(), i) === _Char___init__impl__6a9atx(92)) {
          return this.consumeString2(this.k1c(), this.p12_1, i);
        }
      }
       while (inductionVariable < closingQuote);
    this.p12_1 = closingQuote + 1 | 0;
    // Inline function 'kotlin.text.substring' call
    // Inline function 'kotlin.js.asDynamic' call
    return this.k1c().substring(current, closingQuote);
  };
  protoOf(StringJsonLexer).s19 = function (keyToMatch, isLenient) {
    var positionSnapshot = this.p12_1;
    try {
      if (!(this.z17() === 6))
        return null;
      var firstKey = this.n19(isLenient);
      if (!(firstKey === keyToMatch))
        return null;
      this.s1c();
      if (!(this.z17() === 5))
        return null;
      return this.n19(isLenient);
    }finally {
      this.p12_1 = positionSnapshot;
      this.s1c();
    }
  };
  function StringJsonLexer_0(json, source) {
    return !json.a12_1.c14_1 ? new StringJsonLexer(source) : new StringJsonLexerWithComments(source);
  }
  function get_schemaCache(_this__u8e3s4) {
    return _this__u8e3s4.c12_1;
  }
  function JsonToStringWriter() {
    this.f12_1 = StringBuilder_init_$Create$_0(128);
  }
  protoOf(JsonToStringWriter).w15 = function (value) {
    this.f12_1.kb(value);
  };
  protoOf(JsonToStringWriter).q15 = function (char) {
    this.f12_1.r7(char);
  };
  protoOf(JsonToStringWriter).s15 = function (text) {
    this.f12_1.q7(text);
  };
  protoOf(JsonToStringWriter).c16 = function (text) {
    printQuoted(this.f12_1, text);
  };
  protoOf(JsonToStringWriter).g12 = function () {
    this.f12_1.nb();
  };
  protoOf(JsonToStringWriter).toString = function () {
    return this.f12_1.toString();
  };
  function createMapForCache(initialCapacity) {
    return HashMap_init_$Create$(initialCapacity);
  }
  //region block: post-declaration
  protoOf(defer$1).ak = get_isNullable;
  protoOf(defer$1).fk = get_isInline;
  protoOf(defer$1).hk = get_annotations;
  protoOf(PolymorphismValidator).t11 = contextual;
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
  _.$_$.a = Default_getInstance;
  _.$_$.b = Json_0;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlinx-serialization-kotlinx-serialization-json.js.map
