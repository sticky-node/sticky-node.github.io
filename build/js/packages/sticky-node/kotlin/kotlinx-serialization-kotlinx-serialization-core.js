(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kotlinx-serialization-kotlinx-serialization-core'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kotlinx-serialization-kotlinx-serialization-core'.");
    }
    globalThis['kotlinx-serialization-kotlinx-serialization-core'] = factory(typeof globalThis['kotlinx-serialization-kotlinx-serialization-core'] === 'undefined' ? {} : globalThis['kotlinx-serialization-kotlinx-serialization-core'], globalThis['kotlin-kotlin-stdlib']);
  }
}(function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var protoOf = kotlin_kotlin.$_$.w4;
  var initMetadataForInterface = kotlin_kotlin.$_$.l4;
  var VOID = kotlin_kotlin.$_$.c;
  var getKClassFromExpression = kotlin_kotlin.$_$.a;
  var initMetadataForClass = kotlin_kotlin.$_$.i4;
  var KProperty1 = kotlin_kotlin.$_$.g5;
  var getPropertyCallableRef = kotlin_kotlin.$_$.f4;
  var IllegalArgumentException_init_$Init$ = kotlin_kotlin.$_$.u;
  var objectCreate = kotlin_kotlin.$_$.v4;
  var captureStack = kotlin_kotlin.$_$.w3;
  var IllegalArgumentException_init_$Init$_0 = kotlin_kotlin.$_$.v;
  var IllegalArgumentException_init_$Init$_1 = kotlin_kotlin.$_$.x;
  var IllegalArgumentException = kotlin_kotlin.$_$.b6;
  var toString = kotlin_kotlin.$_$.z4;
  var THROW_CCE = kotlin_kotlin.$_$.e6;
  var isInterface = kotlin_kotlin.$_$.p4;
  var emptyList = kotlin_kotlin.$_$.g2;
  var initMetadataForObject = kotlin_kotlin.$_$.n4;
  var ensureNotNull = kotlin_kotlin.$_$.k6;
  var getStringHashCode = kotlin_kotlin.$_$.g4;
  var Unit_instance = kotlin_kotlin.$_$.s1;
  var toIntOrNull = kotlin_kotlin.$_$.t5;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.w;
  var equals = kotlin_kotlin.$_$.b4;
  var hashCode = kotlin_kotlin.$_$.h4;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.g;
  var ArrayList = kotlin_kotlin.$_$.t1;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.h;
  var KtList = kotlin_kotlin.$_$.v1;
  var Collection = kotlin_kotlin.$_$.u1;
  var longArray = kotlin_kotlin.$_$.q4;
  var initMetadataForCompanion = kotlin_kotlin.$_$.j4;
  var get_lastIndex = kotlin_kotlin.$_$.p2;
  var Long = kotlin_kotlin.$_$.c6;
  var countTrailingZeroBits = kotlin_kotlin.$_$.i6;
  var contentEquals = kotlin_kotlin.$_$.a2;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.y;
  var HashSet_init_$Create$ = kotlin_kotlin.$_$.k;
  var copyToArray = kotlin_kotlin.$_$.e2;
  var contentHashCode = kotlin_kotlin.$_$.b2;
  var HashMap_init_$Create$ = kotlin_kotlin.$_$.j;
  var ArrayList_init_$Create$_1 = kotlin_kotlin.$_$.f;
  var fillArrayVal = kotlin_kotlin.$_$.c4;
  var booleanArray = kotlin_kotlin.$_$.v3;
  var emptyMap = kotlin_kotlin.$_$.h2;
  var LazyThreadSafetyMode_PUBLICATION_getInstance = kotlin_kotlin.$_$.d;
  var lazy = kotlin_kotlin.$_$.n6;
  var until = kotlin_kotlin.$_$.e5;
  var joinToString = kotlin_kotlin.$_$.o2;
  var charSequenceLength = kotlin_kotlin.$_$.z3;
  var lastOrNull = kotlin_kotlin.$_$.r2;
  var get_lastIndex_0 = kotlin_kotlin.$_$.q2;
  var KtMap = kotlin_kotlin.$_$.w1;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.o6;
  var KClass = kotlin_kotlin.$_$.f5;
  var get_indices = kotlin_kotlin.$_$.m2;
  var IndexOutOfBoundsException_init_$Create$ = kotlin_kotlin.$_$.a1;
  var get_indices_0 = kotlin_kotlin.$_$.l2;
  //endregion
  //region block: pre-declaration
  initMetadataForInterface(SerializationStrategy, 'SerializationStrategy');
  initMetadataForInterface(DeserializationStrategy, 'DeserializationStrategy');
  initMetadataForInterface(KSerializer, 'KSerializer', VOID, VOID, [SerializationStrategy, DeserializationStrategy]);
  initMetadataForClass(AbstractPolymorphicSerializer, 'AbstractPolymorphicSerializer', VOID, VOID, [KSerializer]);
  initMetadataForClass(SealedClassSerializer, 'SealedClassSerializer', VOID, AbstractPolymorphicSerializer);
  initMetadataForClass(SerializationException, 'SerializationException', SerializationException_init_$Create$, IllegalArgumentException);
  initMetadataForClass(UnknownFieldException, 'UnknownFieldException', VOID, SerializationException);
  initMetadataForClass(MissingFieldException, 'MissingFieldException', VOID, SerializationException);
  function get_isNullable() {
    return false;
  }
  function get_isInline() {
    return false;
  }
  function get_annotations() {
    return emptyList();
  }
  initMetadataForInterface(SerialDescriptor, 'SerialDescriptor');
  initMetadataForClass(ContextDescriptor, 'ContextDescriptor', VOID, VOID, [SerialDescriptor]);
  initMetadataForClass(elementDescriptors$1);
  initMetadataForClass(elementDescriptors$$inlined$Iterable$1);
  initMetadataForClass(SerialKind, 'SerialKind');
  initMetadataForObject(ENUM, 'ENUM', VOID, SerialKind);
  initMetadataForObject(CONTEXTUAL, 'CONTEXTUAL', VOID, SerialKind);
  initMetadataForClass(PolymorphicKind, 'PolymorphicKind', VOID, SerialKind);
  initMetadataForClass(PrimitiveKind, 'PrimitiveKind', VOID, SerialKind);
  initMetadataForObject(INT, 'INT', VOID, PrimitiveKind);
  initMetadataForObject(DOUBLE, 'DOUBLE', VOID, PrimitiveKind);
  initMetadataForObject(STRING, 'STRING', VOID, PrimitiveKind);
  initMetadataForClass(StructureKind, 'StructureKind', VOID, SerialKind);
  initMetadataForObject(CLASS, 'CLASS', VOID, StructureKind);
  initMetadataForObject(LIST, 'LIST', VOID, StructureKind);
  initMetadataForObject(MAP, 'MAP', VOID, StructureKind);
  initMetadataForObject(OBJECT, 'OBJECT', VOID, StructureKind);
  function decodeSerializableValue(deserializer) {
    return deserializer.wc(this);
  }
  initMetadataForInterface(Decoder, 'Decoder');
  function decodeSequentially() {
    return false;
  }
  function decodeCollectionSize(descriptor) {
    return -1;
  }
  function decodeSerializableElement$default(descriptor, index, deserializer, previousValue, $super) {
    previousValue = previousValue === VOID ? null : previousValue;
    return $super === VOID ? this.ie(descriptor, index, deserializer, previousValue) : $super.ie.call(this, descriptor, index, deserializer, previousValue);
  }
  initMetadataForInterface(CompositeDecoder, 'CompositeDecoder');
  initMetadataForClass(AbstractDecoder, 'AbstractDecoder', VOID, VOID, [Decoder, CompositeDecoder]);
  function encodeNotNullMark() {
  }
  function beginCollection(descriptor, collectionSize) {
    return this.de(descriptor);
  }
  function encodeSerializableValue(serializer, value) {
    serializer.vc(this, value);
  }
  function encodeNullableSerializableValue(serializer, value) {
    var isNullabilitySupported = serializer.uc().cd();
    if (isNullabilitySupported) {
      return this.ze(isInterface(serializer, SerializationStrategy) ? serializer : THROW_CCE(), value);
    }
    if (value == null) {
      this.re();
    } else {
      this.cf();
      this.ze(serializer, value);
    }
  }
  initMetadataForInterface(Encoder, 'Encoder');
  function shouldEncodeElementDefault(descriptor, index) {
    return true;
  }
  initMetadataForInterface(CompositeEncoder, 'CompositeEncoder');
  initMetadataForClass(AbstractEncoder, 'AbstractEncoder', VOID, VOID, [Encoder, CompositeEncoder]);
  initMetadataForInterface(CachedNames, 'CachedNames');
  initMetadataForClass(ListLikeDescriptor, 'ListLikeDescriptor', VOID, VOID, [SerialDescriptor]);
  initMetadataForClass(ArrayListClassDesc, 'ArrayListClassDesc', VOID, ListLikeDescriptor);
  initMetadataForClass(AbstractCollectionSerializer, 'AbstractCollectionSerializer', VOID, VOID, [KSerializer]);
  initMetadataForClass(CollectionLikeSerializer, 'CollectionLikeSerializer', VOID, AbstractCollectionSerializer);
  initMetadataForClass(CollectionSerializer, 'CollectionSerializer', VOID, CollectionLikeSerializer);
  initMetadataForClass(ArrayListSerializer, 'ArrayListSerializer', VOID, CollectionSerializer);
  initMetadataForCompanion(Companion);
  initMetadataForClass(ElementMarker, 'ElementMarker');
  initMetadataForClass(PluginGeneratedSerialDescriptor, 'PluginGeneratedSerialDescriptor', VOID, VOID, [SerialDescriptor, CachedNames]);
  initMetadataForClass(InlineClassDescriptor, 'InlineClassDescriptor', VOID, PluginGeneratedSerialDescriptor);
  function typeParametersSerializers() {
    return get_EMPTY_SERIALIZER_ARRAY();
  }
  initMetadataForInterface(GeneratedSerializer, 'GeneratedSerializer', VOID, VOID, [KSerializer]);
  initMetadataForClass(InlinePrimitiveDescriptor$1, VOID, VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(NullableSerializer, 'NullableSerializer', VOID, VOID, [KSerializer]);
  initMetadataForClass(SerialDescriptorForNullable, 'SerialDescriptorForNullable', VOID, VOID, [SerialDescriptor, CachedNames]);
  initMetadataForObject(StringSerializer, 'StringSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(DoubleSerializer, 'DoubleSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(IntSerializer, 'IntSerializer', VOID, VOID, [KSerializer]);
  initMetadataForClass(PrimitiveSerialDescriptor, 'PrimitiveSerialDescriptor', VOID, VOID, [SerialDescriptor]);
  initMetadataForClass(TaggedDecoder, 'TaggedDecoder', VOID, VOID, [Decoder, CompositeDecoder]);
  initMetadataForClass(NamedValueDecoder, 'NamedValueDecoder', VOID, TaggedDecoder);
  initMetadataForClass(SerializersModule, 'SerializersModule');
  initMetadataForClass(SerialModuleImpl, 'SerialModuleImpl', VOID, SerializersModule);
  initMetadataForClass(ContextualProvider, 'ContextualProvider');
  initMetadataForClass(Argless, 'Argless', VOID, ContextualProvider);
  initMetadataForClass(WithTypeArguments, 'WithTypeArguments', VOID, ContextualProvider);
  function contextual(kClass, serializer) {
    return this.hj(kClass, SerializersModuleCollector$contextual$lambda(serializer));
  }
  initMetadataForInterface(SerializersModuleCollector, 'SerializersModuleCollector');
  initMetadataForClass(SerializableWith, 'SerializableWith', VOID, VOID, VOID, VOID, 0);
  //endregion
  function KSerializer() {
  }
  function SerializationStrategy() {
  }
  function DeserializationStrategy() {
  }
  function findPolymorphicSerializer(_this__u8e3s4, encoder, value) {
    var tmp0_elvis_lhs = _this__u8e3s4.xc(encoder, value);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throwSubtypeNotRegistered(getKClassFromExpression(value), _this__u8e3s4.yc());
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function findPolymorphicSerializer_0(_this__u8e3s4, decoder, klassName) {
    var tmp0_elvis_lhs = _this__u8e3s4.zc(decoder, klassName);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throwSubtypeNotRegistered_0(klassName, _this__u8e3s4.yc());
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function SealedClassSerializer() {
  }
  protoOf(SealedClassSerializer).uc = function () {
    var tmp0 = this.ad_1;
    // Inline function 'kotlin.getValue' call
    descriptor$factory();
    return tmp0.b1();
  };
  function descriptor$factory() {
    return getPropertyCallableRef('descriptor', 1, KProperty1, function (receiver) {
      return receiver.uc();
    }, null);
  }
  function SerializationException_init_$Init$($this) {
    IllegalArgumentException_init_$Init$($this);
    SerializationException.call($this);
    return $this;
  }
  function SerializationException_init_$Create$() {
    var tmp = SerializationException_init_$Init$(objectCreate(protoOf(SerializationException)));
    captureStack(tmp, SerializationException_init_$Create$);
    return tmp;
  }
  function SerializationException_init_$Init$_0(message, $this) {
    IllegalArgumentException_init_$Init$_0(message, $this);
    SerializationException.call($this);
    return $this;
  }
  function SerializationException_init_$Create$_0(message) {
    var tmp = SerializationException_init_$Init$_0(message, objectCreate(protoOf(SerializationException)));
    captureStack(tmp, SerializationException_init_$Create$_0);
    return tmp;
  }
  function SerializationException_init_$Init$_1(message, cause, $this) {
    IllegalArgumentException_init_$Init$_1(message, cause, $this);
    SerializationException.call($this);
    return $this;
  }
  function SerializationException() {
    captureStack(this, SerializationException);
  }
  function UnknownFieldException_init_$Init$(index, $this) {
    UnknownFieldException.call($this, 'An unknown field for index ' + index);
    return $this;
  }
  function UnknownFieldException_init_$Create$(index) {
    var tmp = UnknownFieldException_init_$Init$(index, objectCreate(protoOf(UnknownFieldException)));
    captureStack(tmp, UnknownFieldException_init_$Create$);
    return tmp;
  }
  function UnknownFieldException(message) {
    SerializationException_init_$Init$_0(message, this);
    captureStack(this, UnknownFieldException);
  }
  function MissingFieldException_init_$Init$(missingFields, serialName, $this) {
    MissingFieldException.call($this, missingFields, missingFields.i() === 1 ? "Field '" + missingFields.h(0) + "' is required for type with serial name '" + serialName + "', but it was missing" : 'Fields ' + toString(missingFields) + " are required for type with serial name '" + serialName + "', but they were missing", null);
    return $this;
  }
  function MissingFieldException_init_$Create$(missingFields, serialName) {
    var tmp = MissingFieldException_init_$Init$(missingFields, serialName, objectCreate(protoOf(MissingFieldException)));
    captureStack(tmp, MissingFieldException_init_$Create$);
    return tmp;
  }
  function MissingFieldException(missingFields, message, cause) {
    SerializationException_init_$Init$_1(message, cause, this);
    captureStack(this, MissingFieldException);
    this.bd_1 = missingFields;
  }
  function get_nullable(_this__u8e3s4) {
    var tmp;
    if (_this__u8e3s4.uc().cd()) {
      tmp = isInterface(_this__u8e3s4, KSerializer) ? _this__u8e3s4 : THROW_CCE();
    } else {
      tmp = new NullableSerializer(_this__u8e3s4);
    }
    return tmp;
  }
  function serializer(_this__u8e3s4) {
    return StringSerializer_getInstance();
  }
  function ListSerializer(elementSerializer) {
    return new ArrayListSerializer(elementSerializer);
  }
  function ContextDescriptor() {
  }
  function getContextualDescriptor(_this__u8e3s4, descriptor) {
    var tmp0_safe_receiver = get_capturedKClass(descriptor);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlinx.serialization.descriptors.getContextualDescriptor.<anonymous>' call
      var tmp0_safe_receiver_0 = _this__u8e3s4.dd(tmp0_safe_receiver);
      tmp = tmp0_safe_receiver_0 == null ? null : tmp0_safe_receiver_0.uc();
    }
    return tmp;
  }
  function get_capturedKClass(_this__u8e3s4) {
    var tmp;
    if (_this__u8e3s4 instanceof ContextDescriptor) {
      tmp = _this__u8e3s4.hd_1;
    } else {
      if (_this__u8e3s4 instanceof SerialDescriptorForNullable) {
        tmp = get_capturedKClass(_this__u8e3s4.ed_1);
      } else {
        tmp = null;
      }
    }
    return tmp;
  }
  function SerialDescriptor() {
  }
  function get_elementDescriptors(_this__u8e3s4) {
    // Inline function 'kotlin.collections.Iterable' call
    return new elementDescriptors$$inlined$Iterable$1(_this__u8e3s4);
  }
  function elementDescriptors$1($this_elementDescriptors) {
    this.td_1 = $this_elementDescriptors;
    this.sd_1 = $this_elementDescriptors.ld();
  }
  protoOf(elementDescriptors$1).f = function () {
    return this.sd_1 > 0;
  };
  protoOf(elementDescriptors$1).g = function () {
    var tmp = this.td_1.ld();
    var _unary__edvuaz = this.sd_1;
    this.sd_1 = _unary__edvuaz - 1 | 0;
    return this.td_1.qd(tmp - _unary__edvuaz | 0);
  };
  function elementDescriptors$$inlined$Iterable$1($this_elementDescriptors) {
    this.ud_1 = $this_elementDescriptors;
  }
  protoOf(elementDescriptors$$inlined$Iterable$1).e = function () {
    // Inline function 'kotlinx.serialization.descriptors.<get-elementDescriptors>.<anonymous>' call
    return new elementDescriptors$1(this.ud_1);
  };
  function ENUM() {
    ENUM_instance = this;
    SerialKind.call(this);
  }
  var ENUM_instance;
  function ENUM_getInstance() {
    if (ENUM_instance == null)
      new ENUM();
    return ENUM_instance;
  }
  function CONTEXTUAL() {
    CONTEXTUAL_instance = this;
    SerialKind.call(this);
  }
  var CONTEXTUAL_instance;
  function CONTEXTUAL_getInstance() {
    if (CONTEXTUAL_instance == null)
      new CONTEXTUAL();
    return CONTEXTUAL_instance;
  }
  function SerialKind() {
  }
  protoOf(SerialKind).toString = function () {
    return ensureNotNull(getKClassFromExpression(this).a8());
  };
  protoOf(SerialKind).hashCode = function () {
    return getStringHashCode(this.toString());
  };
  function PolymorphicKind() {
  }
  function INT() {
    INT_instance = this;
    PrimitiveKind.call(this);
  }
  var INT_instance;
  function INT_getInstance() {
    if (INT_instance == null)
      new INT();
    return INT_instance;
  }
  function DOUBLE() {
    DOUBLE_instance = this;
    PrimitiveKind.call(this);
  }
  var DOUBLE_instance;
  function DOUBLE_getInstance() {
    if (DOUBLE_instance == null)
      new DOUBLE();
    return DOUBLE_instance;
  }
  function STRING() {
    STRING_instance = this;
    PrimitiveKind.call(this);
  }
  var STRING_instance;
  function STRING_getInstance() {
    if (STRING_instance == null)
      new STRING();
    return STRING_instance;
  }
  function PrimitiveKind() {
    SerialKind.call(this);
  }
  function CLASS() {
    CLASS_instance = this;
    StructureKind.call(this);
  }
  var CLASS_instance;
  function CLASS_getInstance() {
    if (CLASS_instance == null)
      new CLASS();
    return CLASS_instance;
  }
  function LIST() {
    LIST_instance = this;
    StructureKind.call(this);
  }
  var LIST_instance;
  function LIST_getInstance() {
    if (LIST_instance == null)
      new LIST();
    return LIST_instance;
  }
  function MAP() {
    MAP_instance = this;
    StructureKind.call(this);
  }
  var MAP_instance;
  function MAP_getInstance() {
    if (MAP_instance == null)
      new MAP();
    return MAP_instance;
  }
  function OBJECT() {
    OBJECT_instance = this;
    StructureKind.call(this);
  }
  var OBJECT_instance;
  function OBJECT_getInstance() {
    if (OBJECT_instance == null)
      new OBJECT();
    return OBJECT_instance;
  }
  function StructureKind() {
    SerialKind.call(this);
  }
  function AbstractDecoder() {
  }
  protoOf(AbstractDecoder).vd = function () {
    throw SerializationException_init_$Create$_0(toString(getKClassFromExpression(this)) + " can't retrieve untyped values");
  };
  protoOf(AbstractDecoder).wd = function () {
    return true;
  };
  protoOf(AbstractDecoder).xd = function () {
    return null;
  };
  protoOf(AbstractDecoder).yd = function () {
    var tmp = this.vd();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).zd = function () {
    var tmp = this.vd();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).ae = function () {
    var tmp = this.vd();
    return typeof tmp === 'string' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).be = function (deserializer, previousValue) {
    return this.ce(deserializer);
  };
  protoOf(AbstractDecoder).de = function (descriptor) {
    return this;
  };
  protoOf(AbstractDecoder).ee = function (descriptor) {
  };
  protoOf(AbstractDecoder).fe = function (descriptor, index) {
    return this.yd();
  };
  protoOf(AbstractDecoder).ge = function (descriptor, index) {
    return this.zd();
  };
  protoOf(AbstractDecoder).he = function (descriptor, index) {
    return this.ae();
  };
  protoOf(AbstractDecoder).ie = function (descriptor, index, deserializer, previousValue) {
    return this.be(deserializer, previousValue);
  };
  protoOf(AbstractDecoder).ke = function (descriptor, index, deserializer, previousValue) {
    // Inline function 'kotlinx.serialization.encoding.decodeIfNullable' call
    var isNullabilitySupported = deserializer.uc().cd();
    var tmp;
    if (isNullabilitySupported || this.wd()) {
      // Inline function 'kotlinx.serialization.encoding.AbstractDecoder.decodeNullableSerializableElement.<anonymous>' call
      tmp = this.be(deserializer, previousValue);
    } else {
      tmp = this.xd();
    }
    return tmp;
  };
  function AbstractEncoder() {
  }
  protoOf(AbstractEncoder).de = function (descriptor) {
    return this;
  };
  protoOf(AbstractEncoder).ee = function (descriptor) {
  };
  protoOf(AbstractEncoder).pe = function (descriptor, index) {
    return true;
  };
  protoOf(AbstractEncoder).qe = function (value) {
    throw SerializationException_init_$Create$_0('Non-serializable ' + toString(getKClassFromExpression(value)) + ' is not supported by ' + toString(getKClassFromExpression(this)) + ' encoder');
  };
  protoOf(AbstractEncoder).re = function () {
    throw SerializationException_init_$Create$_0("'null' is not supported by default");
  };
  protoOf(AbstractEncoder).se = function (value) {
    return this.qe(value);
  };
  protoOf(AbstractEncoder).te = function (value) {
    return this.qe(value);
  };
  protoOf(AbstractEncoder).ue = function (value) {
    return this.qe(value);
  };
  protoOf(AbstractEncoder).ve = function (descriptor, index, value) {
    if (this.pe(descriptor, index)) {
      this.se(value);
    }
  };
  protoOf(AbstractEncoder).we = function (descriptor, index, value) {
    if (this.pe(descriptor, index)) {
      this.te(value);
    }
  };
  protoOf(AbstractEncoder).xe = function (descriptor, index, value) {
    if (this.pe(descriptor, index)) {
      this.ue(value);
    }
  };
  protoOf(AbstractEncoder).ye = function (descriptor, index, serializer, value) {
    if (this.pe(descriptor, index)) {
      this.ze(serializer, value);
    }
  };
  protoOf(AbstractEncoder).af = function (descriptor, index, serializer, value) {
    if (this.pe(descriptor, index)) {
      this.bf(serializer, value);
    }
  };
  function Decoder() {
  }
  function CompositeDecoder() {
  }
  function Encoder() {
  }
  function CompositeEncoder() {
  }
  function AbstractPolymorphicSerializer() {
  }
  protoOf(AbstractPolymorphicSerializer).zc = function (decoder, klassName) {
    return decoder.le().ff(this.yc(), klassName);
  };
  protoOf(AbstractPolymorphicSerializer).xc = function (encoder, value) {
    return encoder.le().gf(this.yc(), value);
  };
  function throwSubtypeNotRegistered(subClass, baseClass) {
    var tmp0_elvis_lhs = subClass.a8();
    throwSubtypeNotRegistered_0(tmp0_elvis_lhs == null ? toString(subClass) : tmp0_elvis_lhs, baseClass);
  }
  function throwSubtypeNotRegistered_0(subClassName, baseClass) {
    var scope = "in the polymorphic scope of '" + baseClass.a8() + "'";
    throw SerializationException_init_$Create$_0(subClassName == null ? 'Class discriminator was missing and no default serializers were registered ' + scope + '.' : "Serializer for subclass '" + subClassName + "' is not found " + scope + '.\n' + ("Check if class with serial name '" + subClassName + "' exists and serializer is registered in a corresponding SerializersModule.\n") + ("To be registered automatically, class '" + subClassName + "' has to be '@Serializable', and the base class '" + baseClass.a8() + "' has to be sealed and '@Serializable'."));
  }
  function CachedNames() {
  }
  function ArrayListClassDesc(elementDesc) {
    ListLikeDescriptor.call(this, elementDesc);
  }
  protoOf(ArrayListClassDesc).id = function () {
    return 'kotlin.collections.ArrayList';
  };
  function ListLikeDescriptor(elementDescriptor) {
    this.kf_1 = elementDescriptor;
    this.lf_1 = 1;
  }
  protoOf(ListLikeDescriptor).jd = function () {
    return LIST_getInstance();
  };
  protoOf(ListLikeDescriptor).ld = function () {
    return this.lf_1;
  };
  protoOf(ListLikeDescriptor).nd = function (index) {
    return index.toString();
  };
  protoOf(ListLikeDescriptor).od = function (name) {
    var tmp0_elvis_lhs = toIntOrNull(name);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalArgumentException_init_$Create$(name + ' is not a valid list index');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(ListLikeDescriptor).rd = function (index) {
    // Inline function 'kotlin.require' call
    if (!(index >= 0)) {
      // Inline function 'kotlinx.serialization.internal.ListLikeDescriptor.isElementOptional.<anonymous>' call
      var message = 'Illegal index ' + index + ', ' + this.id() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return false;
  };
  protoOf(ListLikeDescriptor).pd = function (index) {
    // Inline function 'kotlin.require' call
    if (!(index >= 0)) {
      // Inline function 'kotlinx.serialization.internal.ListLikeDescriptor.getElementAnnotations.<anonymous>' call
      var message = 'Illegal index ' + index + ', ' + this.id() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return emptyList();
  };
  protoOf(ListLikeDescriptor).qd = function (index) {
    // Inline function 'kotlin.require' call
    if (!(index >= 0)) {
      // Inline function 'kotlinx.serialization.internal.ListLikeDescriptor.getElementDescriptor.<anonymous>' call
      var message = 'Illegal index ' + index + ', ' + this.id() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return this.kf_1;
  };
  protoOf(ListLikeDescriptor).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ListLikeDescriptor))
      return false;
    if (equals(this.kf_1, other.kf_1) && this.id() === other.id())
      return true;
    return false;
  };
  protoOf(ListLikeDescriptor).hashCode = function () {
    return imul(hashCode(this.kf_1), 31) + getStringHashCode(this.id()) | 0;
  };
  protoOf(ListLikeDescriptor).toString = function () {
    return this.id() + '(' + toString(this.kf_1) + ')';
  };
  function ArrayListSerializer(element) {
    CollectionSerializer.call(this, element);
    this.nf_1 = new ArrayListClassDesc(element.uc());
  }
  protoOf(ArrayListSerializer).uc = function () {
    return this.nf_1;
  };
  protoOf(ArrayListSerializer).of = function () {
    // Inline function 'kotlin.collections.arrayListOf' call
    return ArrayList_init_$Create$();
  };
  protoOf(ArrayListSerializer).pf = function (_this__u8e3s4) {
    return _this__u8e3s4.i();
  };
  protoOf(ArrayListSerializer).qf = function (_this__u8e3s4) {
    return this.pf(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ArrayListSerializer).rf = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  protoOf(ArrayListSerializer).sf = function (_this__u8e3s4) {
    return this.rf(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ArrayListSerializer).tf = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? ArrayList_init_$Create$_0(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  protoOf(ArrayListSerializer).uf = function (_this__u8e3s4) {
    return this.tf((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtList) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ArrayListSerializer).vf = function (_this__u8e3s4, size) {
    return _this__u8e3s4.q3(size);
  };
  protoOf(ArrayListSerializer).wf = function (_this__u8e3s4, size) {
    return this.vf(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE(), size);
  };
  protoOf(ArrayListSerializer).xf = function (_this__u8e3s4, index, element) {
    _this__u8e3s4.w2(index, element);
  };
  protoOf(ArrayListSerializer).yf = function (_this__u8e3s4, index, element) {
    var tmp = _this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE();
    return this.xf(tmp, index, (element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  function CollectionSerializer(element) {
    CollectionLikeSerializer.call(this, element);
  }
  protoOf(CollectionSerializer).ag = function (_this__u8e3s4) {
    return _this__u8e3s4.i();
  };
  protoOf(CollectionSerializer).ig = function (_this__u8e3s4) {
    return this.ag((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Collection) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(CollectionSerializer).bg = function (_this__u8e3s4) {
    return _this__u8e3s4.e();
  };
  protoOf(CollectionSerializer).jg = function (_this__u8e3s4) {
    return this.bg((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Collection) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  function CollectionLikeSerializer(elementSerializer) {
    AbstractCollectionSerializer.call(this);
    this.cg_1 = elementSerializer;
  }
  protoOf(CollectionLikeSerializer).dg = function (encoder, value) {
    var size = this.ig(value);
    // Inline function 'kotlinx.serialization.encoding.encodeCollection' call
    var descriptor = this.uc();
    var composite = encoder.df(descriptor, size);
    // Inline function 'kotlinx.serialization.internal.CollectionLikeSerializer.serialize.<anonymous>' call
    var iterator = this.jg(value);
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        composite.ye(this.uc(), index, this.cg_1, iterator.g());
      }
       while (inductionVariable < size);
    composite.ee(descriptor);
  };
  protoOf(CollectionLikeSerializer).vc = function (encoder, value) {
    return this.dg(encoder, (value == null ? true : !(value == null)) ? value : THROW_CCE());
  };
  protoOf(CollectionLikeSerializer).eg = function (decoder, builder, startIndex, size) {
    // Inline function 'kotlin.require' call
    if (!(size >= 0)) {
      // Inline function 'kotlinx.serialization.internal.CollectionLikeSerializer.readAll.<anonymous>' call
      var message = 'Size must be known in advance when using READ_ALL';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        this.fg(decoder, startIndex + index | 0, builder, false);
      }
       while (inductionVariable < size);
  };
  protoOf(CollectionLikeSerializer).fg = function (decoder, index, builder, checkIndex) {
    this.yf(builder, index, decoder.je(this.uc(), index, this.cg_1));
  };
  function readSize($this, decoder, builder) {
    var size = decoder.oe($this.uc());
    $this.wf(builder, size);
    return size;
  }
  function AbstractCollectionSerializer() {
  }
  protoOf(AbstractCollectionSerializer).hg = function (decoder, previous) {
    var tmp1_elvis_lhs = previous == null ? null : this.uf(previous);
    var builder = tmp1_elvis_lhs == null ? this.of() : tmp1_elvis_lhs;
    var startIndex = this.qf(builder);
    var compositeDecoder = decoder.de(this.uc());
    if (compositeDecoder.me()) {
      this.eg(compositeDecoder, builder, startIndex, readSize(this, compositeDecoder, builder));
    } else {
      $l$loop: while (true) {
        var index = compositeDecoder.ne(this.uc());
        if (index === -1)
          break $l$loop;
        this.gg(compositeDecoder, startIndex + index | 0, builder);
      }
    }
    compositeDecoder.ee(this.uc());
    return this.sf(builder);
  };
  protoOf(AbstractCollectionSerializer).wc = function (decoder) {
    return this.hg(decoder, null);
  };
  protoOf(AbstractCollectionSerializer).gg = function (decoder, index, builder, checkIndex, $super) {
    checkIndex = checkIndex === VOID ? true : checkIndex;
    var tmp;
    if ($super === VOID) {
      this.fg(decoder, index, builder, checkIndex);
      tmp = Unit_instance;
    } else {
      tmp = $super.fg.call(this, decoder, index, builder, checkIndex);
    }
    return tmp;
  };
  function Companion() {
    Companion_instance = this;
    this.kg_1 = longArray(0);
  }
  var Companion_instance;
  function Companion_getInstance() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function prepareHighMarksArray($this, elementsCount) {
    var slotsCount = (elementsCount - 1 | 0) >>> 6 | 0;
    var elementsInLastSlot = elementsCount & 63;
    var highMarks = longArray(slotsCount);
    if (!(elementsInLastSlot === 0)) {
      highMarks[get_lastIndex(highMarks)] = (new Long(-1, -1)).u1(elementsCount);
    }
    return highMarks;
  }
  function markHigh($this, index) {
    var slot = (index >>> 6 | 0) - 1 | 0;
    var offsetInSlot = index & 63;
    $this.og_1[slot] = $this.og_1[slot].v1((new Long(1, 0)).u1(offsetInSlot));
  }
  function nextUnmarkedHighIndex($this) {
    var inductionVariable = 0;
    var last = $this.og_1.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var slot = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var slotOffset = imul(slot + 1 | 0, 64);
        var slotMarks = $this.og_1[slot];
        while (!slotMarks.equals(new Long(-1, -1))) {
          var indexInSlot = countTrailingZeroBits(slotMarks.t1());
          slotMarks = slotMarks.v1((new Long(1, 0)).u1(indexInSlot));
          var index = slotOffset + indexInSlot | 0;
          if ($this.mg_1($this.lg_1, index)) {
            $this.og_1[slot] = slotMarks;
            return index;
          }
        }
        $this.og_1[slot] = slotMarks;
      }
       while (inductionVariable <= last);
    return -1;
  }
  function ElementMarker(descriptor, readIfAbsent) {
    Companion_getInstance();
    this.lg_1 = descriptor;
    this.mg_1 = readIfAbsent;
    var elementsCount = this.lg_1.ld();
    if (elementsCount <= 64) {
      var tmp = this;
      var tmp_0;
      if (elementsCount === 64) {
        tmp_0 = new Long(0, 0);
      } else {
        tmp_0 = (new Long(-1, -1)).u1(elementsCount);
      }
      tmp.ng_1 = tmp_0;
      this.og_1 = Companion_getInstance().kg_1;
    } else {
      this.ng_1 = new Long(0, 0);
      this.og_1 = prepareHighMarksArray(this, elementsCount);
    }
  }
  protoOf(ElementMarker).pg = function (index) {
    if (index < 64) {
      this.ng_1 = this.ng_1.v1((new Long(1, 0)).u1(index));
    } else {
      markHigh(this, index);
    }
  };
  protoOf(ElementMarker).qg = function () {
    var elementsCount = this.lg_1.ld();
    while (!this.ng_1.equals(new Long(-1, -1))) {
      var index = countTrailingZeroBits(this.ng_1.t1());
      this.ng_1 = this.ng_1.v1((new Long(1, 0)).u1(index));
      if (this.mg_1(this.lg_1, index)) {
        return index;
      }
    }
    if (elementsCount > 64) {
      return nextUnmarkedHighIndex(this);
    }
    return -1;
  };
  function InlinePrimitiveDescriptor(name, primitiveSerializer) {
    return new InlineClassDescriptor(name, new InlinePrimitiveDescriptor$1(primitiveSerializer));
  }
  function InlineClassDescriptor(name, generatedSerializer) {
    PluginGeneratedSerialDescriptor.call(this, name, generatedSerializer, 1);
    this.dh_1 = true;
  }
  protoOf(InlineClassDescriptor).kd = function () {
    return this.dh_1;
  };
  protoOf(InlineClassDescriptor).hashCode = function () {
    return imul(protoOf(PluginGeneratedSerialDescriptor).hashCode.call(this), 31);
  };
  protoOf(InlineClassDescriptor).equals = function (other) {
    var tmp$ret$0;
    $l$block_5: {
      // Inline function 'kotlinx.serialization.internal.equalsImpl' call
      if (this === other) {
        tmp$ret$0 = true;
        break $l$block_5;
      }
      if (!(other instanceof InlineClassDescriptor)) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.id() === other.id())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      // Inline function 'kotlinx.serialization.internal.InlineClassDescriptor.equals.<anonymous>' call
      if (!(other.dh_1 && contentEquals(this.qh(), other.qh()))) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.ld() === other.ld())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var inductionVariable = 0;
      var last = this.ld();
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (!(this.qd(index).id() === other.qd(index).id())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
          if (!equals(this.qd(index).jd(), other.qd(index).jd())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
        }
         while (inductionVariable < last);
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  function InlinePrimitiveDescriptor$1($primitiveSerializer) {
    this.sh_1 = $primitiveSerializer;
  }
  protoOf(InlinePrimitiveDescriptor$1).th = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [this.sh_1];
  };
  protoOf(InlinePrimitiveDescriptor$1).uc = function () {
    var message = 'unsupported';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  protoOf(InlinePrimitiveDescriptor$1).vc = function (encoder, value) {
    // Inline function 'kotlin.error' call
    var message = 'unsupported';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  protoOf(InlinePrimitiveDescriptor$1).wc = function (decoder) {
    // Inline function 'kotlin.error' call
    var message = 'unsupported';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  function jsonCachedSerialNames(_this__u8e3s4) {
    return cachedSerialNames(_this__u8e3s4);
  }
  function NullableSerializer(serializer) {
    this.vh_1 = serializer;
    this.wh_1 = new SerialDescriptorForNullable(this.vh_1.uc());
  }
  protoOf(NullableSerializer).uc = function () {
    return this.wh_1;
  };
  protoOf(NullableSerializer).xh = function (encoder, value) {
    if (!(value == null)) {
      encoder.cf();
      encoder.ze(this.vh_1, value);
    } else {
      encoder.re();
    }
  };
  protoOf(NullableSerializer).vc = function (encoder, value) {
    return this.xh(encoder, (value == null ? true : !(value == null)) ? value : THROW_CCE());
  };
  protoOf(NullableSerializer).wc = function (decoder) {
    return decoder.wd() ? decoder.ce(this.vh_1) : decoder.xd();
  };
  protoOf(NullableSerializer).equals = function (other) {
    if (this === other)
      return true;
    if (other == null || !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!(other instanceof NullableSerializer))
      THROW_CCE();
    if (!equals(this.vh_1, other.vh_1))
      return false;
    return true;
  };
  protoOf(NullableSerializer).hashCode = function () {
    return hashCode(this.vh_1);
  };
  function SerialDescriptorForNullable(original) {
    this.ed_1 = original;
    this.fd_1 = this.ed_1.id() + '?';
    this.gd_1 = cachedSerialNames(this.ed_1);
  }
  protoOf(SerialDescriptorForNullable).id = function () {
    return this.fd_1;
  };
  protoOf(SerialDescriptorForNullable).hf = function () {
    return this.gd_1;
  };
  protoOf(SerialDescriptorForNullable).cd = function () {
    return true;
  };
  protoOf(SerialDescriptorForNullable).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SerialDescriptorForNullable))
      return false;
    if (!equals(this.ed_1, other.ed_1))
      return false;
    return true;
  };
  protoOf(SerialDescriptorForNullable).toString = function () {
    return toString(this.ed_1) + '?';
  };
  protoOf(SerialDescriptorForNullable).hashCode = function () {
    return imul(hashCode(this.ed_1), 31);
  };
  protoOf(SerialDescriptorForNullable).jd = function () {
    return this.ed_1.jd();
  };
  protoOf(SerialDescriptorForNullable).kd = function () {
    return this.ed_1.kd();
  };
  protoOf(SerialDescriptorForNullable).ld = function () {
    return this.ed_1.ld();
  };
  protoOf(SerialDescriptorForNullable).md = function () {
    return this.ed_1.md();
  };
  protoOf(SerialDescriptorForNullable).nd = function (index) {
    return this.ed_1.nd(index);
  };
  protoOf(SerialDescriptorForNullable).od = function (name) {
    return this.ed_1.od(name);
  };
  protoOf(SerialDescriptorForNullable).pd = function (index) {
    return this.ed_1.pd(index);
  };
  protoOf(SerialDescriptorForNullable).qd = function (index) {
    return this.ed_1.qd(index);
  };
  protoOf(SerialDescriptorForNullable).rd = function (index) {
    return this.ed_1.rd(index);
  };
  function get_EMPTY_DESCRIPTOR_ARRAY() {
    _init_properties_Platform_common_kt__3qzecs();
    return EMPTY_DESCRIPTOR_ARRAY;
  }
  var EMPTY_DESCRIPTOR_ARRAY;
  function cachedSerialNames(_this__u8e3s4) {
    _init_properties_Platform_common_kt__3qzecs();
    if (isInterface(_this__u8e3s4, CachedNames))
      return _this__u8e3s4.hf();
    var result = HashSet_init_$Create$(_this__u8e3s4.ld());
    var inductionVariable = 0;
    var last = _this__u8e3s4.ld();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.collections.plusAssign' call
        var element = _this__u8e3s4.nd(i);
        result.n(element);
      }
       while (inductionVariable < last);
    return result;
  }
  function compactArray(_this__u8e3s4) {
    _init_properties_Platform_common_kt__3qzecs();
    // Inline function 'kotlin.takeUnless' call
    var tmp;
    // Inline function 'kotlinx.serialization.internal.compactArray.<anonymous>' call
    // Inline function 'kotlin.collections.isNullOrEmpty' call
    if (!(_this__u8e3s4 == null || _this__u8e3s4.o())) {
      tmp = _this__u8e3s4;
    } else {
      tmp = null;
    }
    var tmp0_safe_receiver = tmp;
    var tmp_0;
    if (tmp0_safe_receiver == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.collections.toTypedArray' call
      tmp_0 = copyToArray(tmp0_safe_receiver);
    }
    var tmp1_elvis_lhs = tmp_0;
    return tmp1_elvis_lhs == null ? get_EMPTY_DESCRIPTOR_ARRAY() : tmp1_elvis_lhs;
  }
  var properties_initialized_Platform_common_kt_i7q4ty;
  function _init_properties_Platform_common_kt__3qzecs() {
    if (!properties_initialized_Platform_common_kt_i7q4ty) {
      properties_initialized_Platform_common_kt_i7q4ty = true;
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      EMPTY_DESCRIPTOR_ARRAY = [];
    }
  }
  function throwMissingFieldException(seen, goldenMask, descriptor) {
    // Inline function 'kotlin.collections.mutableListOf' call
    var missingFields = ArrayList_init_$Create$();
    var missingFieldsBits = goldenMask & ~seen;
    var inductionVariable = 0;
    if (inductionVariable < 32)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!((missingFieldsBits & 1) === 0)) {
          // Inline function 'kotlin.collections.plusAssign' call
          var element = descriptor.nd(i);
          missingFields.n(element);
        }
        missingFieldsBits = missingFieldsBits >>> 1 | 0;
      }
       while (inductionVariable < 32);
    throw MissingFieldException_init_$Create$(missingFields, descriptor.id());
  }
  function hashCodeImpl(_this__u8e3s4, typeParams) {
    var result = getStringHashCode(_this__u8e3s4.id());
    result = imul(31, result) + contentHashCode(typeParams) | 0;
    var elementDescriptors = get_elementDescriptors(_this__u8e3s4);
    // Inline function 'kotlinx.serialization.internal.elementsHashCodeBy' call
    // Inline function 'kotlin.collections.fold' call
    var accumulator = 1;
    var _iterator__ex2g4s = elementDescriptors.e();
    while (_iterator__ex2g4s.f()) {
      var element = _iterator__ex2g4s.g();
      // Inline function 'kotlinx.serialization.internal.elementsHashCodeBy.<anonymous>' call
      var hash = accumulator;
      var tmp = imul(31, hash);
      // Inline function 'kotlinx.serialization.internal.hashCodeImpl.<anonymous>' call
      // Inline function 'kotlin.hashCode' call
      var tmp0_safe_receiver = element.id();
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
      accumulator = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    }
    var namesHash = accumulator;
    // Inline function 'kotlinx.serialization.internal.elementsHashCodeBy' call
    // Inline function 'kotlin.collections.fold' call
    var accumulator_0 = 1;
    var _iterator__ex2g4s_0 = elementDescriptors.e();
    while (_iterator__ex2g4s_0.f()) {
      var element_0 = _iterator__ex2g4s_0.g();
      // Inline function 'kotlinx.serialization.internal.elementsHashCodeBy.<anonymous>' call
      var hash_0 = accumulator_0;
      var tmp_0 = imul(31, hash_0);
      // Inline function 'kotlinx.serialization.internal.hashCodeImpl.<anonymous>' call
      // Inline function 'kotlin.hashCode' call
      var tmp0_safe_receiver_0 = element_0.jd();
      var tmp1_elvis_lhs_0 = tmp0_safe_receiver_0 == null ? null : hashCode(tmp0_safe_receiver_0);
      accumulator_0 = tmp_0 + (tmp1_elvis_lhs_0 == null ? 0 : tmp1_elvis_lhs_0) | 0;
    }
    var kindHash = accumulator_0;
    result = imul(31, result) + namesHash | 0;
    result = imul(31, result) + kindHash | 0;
    return result;
  }
  function _get_childSerializers__7vnyfa($this) {
    var tmp0 = $this.nh_1;
    // Inline function 'kotlin.getValue' call
    childSerializers$factory();
    return tmp0.b1();
  }
  function _get__hashCode__tgwhef($this) {
    var tmp0 = $this.ph_1;
    // Inline function 'kotlin.getValue' call
    _hashCode$factory();
    return tmp0.b1();
  }
  function buildIndices($this) {
    var indices = HashMap_init_$Create$();
    var inductionVariable = 0;
    var last = $this.ih_1.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.collections.set' call
        var key = $this.ih_1[i];
        indices.j3(key, i);
      }
       while (inductionVariable <= last);
    return indices;
  }
  function PluginGeneratedSerialDescriptor$childSerializers$delegate$lambda(this$0) {
    return function () {
      var tmp0_safe_receiver = this$0.fh_1;
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.th();
      return tmp1_elvis_lhs == null ? get_EMPTY_SERIALIZER_ARRAY() : tmp1_elvis_lhs;
    };
  }
  function PluginGeneratedSerialDescriptor$typeParameterDescriptors$delegate$lambda(this$0) {
    return function () {
      var tmp0_safe_receiver = this$0.fh_1;
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.uh();
      var tmp;
      if (tmp1_safe_receiver == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.collections.map' call
        // Inline function 'kotlin.collections.mapTo' call
        var destination = ArrayList_init_$Create$_1(tmp1_safe_receiver.length);
        var inductionVariable = 0;
        var last = tmp1_safe_receiver.length;
        while (inductionVariable < last) {
          var item = tmp1_safe_receiver[inductionVariable];
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'kotlinx.serialization.internal.PluginGeneratedSerialDescriptor.typeParameterDescriptors$delegate.<anonymous>.<anonymous>' call
          var tmp$ret$0 = item.uc();
          destination.n(tmp$ret$0);
        }
        tmp = destination;
      }
      return compactArray(tmp);
    };
  }
  function PluginGeneratedSerialDescriptor$_hashCode$delegate$lambda(this$0) {
    return function () {
      return hashCodeImpl(this$0, this$0.qh());
    };
  }
  function PluginGeneratedSerialDescriptor$toString$lambda(this$0) {
    return function (i) {
      return this$0.nd(i) + ': ' + this$0.qd(i).id();
    };
  }
  function PluginGeneratedSerialDescriptor(serialName, generatedSerializer, elementsCount) {
    generatedSerializer = generatedSerializer === VOID ? null : generatedSerializer;
    this.eh_1 = serialName;
    this.fh_1 = generatedSerializer;
    this.gh_1 = elementsCount;
    this.hh_1 = -1;
    var tmp = this;
    var tmp_0 = 0;
    var tmp_1 = this.gh_1;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_2 = fillArrayVal(Array(tmp_1), null);
    while (tmp_0 < tmp_1) {
      tmp_2[tmp_0] = '[UNINITIALIZED]';
      tmp_0 = tmp_0 + 1 | 0;
    }
    tmp.ih_1 = tmp_2;
    var tmp_3 = this;
    // Inline function 'kotlin.arrayOfNulls' call
    var size = this.gh_1;
    tmp_3.jh_1 = fillArrayVal(Array(size), null);
    this.kh_1 = null;
    this.lh_1 = booleanArray(this.gh_1);
    this.mh_1 = emptyMap();
    var tmp_4 = this;
    var tmp_5 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp_4.nh_1 = lazy(tmp_5, PluginGeneratedSerialDescriptor$childSerializers$delegate$lambda(this));
    var tmp_6 = this;
    var tmp_7 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp_6.oh_1 = lazy(tmp_7, PluginGeneratedSerialDescriptor$typeParameterDescriptors$delegate$lambda(this));
    var tmp_8 = this;
    var tmp_9 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp_8.ph_1 = lazy(tmp_9, PluginGeneratedSerialDescriptor$_hashCode$delegate$lambda(this));
  }
  protoOf(PluginGeneratedSerialDescriptor).id = function () {
    return this.eh_1;
  };
  protoOf(PluginGeneratedSerialDescriptor).ld = function () {
    return this.gh_1;
  };
  protoOf(PluginGeneratedSerialDescriptor).jd = function () {
    return CLASS_getInstance();
  };
  protoOf(PluginGeneratedSerialDescriptor).md = function () {
    var tmp0_elvis_lhs = this.kh_1;
    return tmp0_elvis_lhs == null ? emptyList() : tmp0_elvis_lhs;
  };
  protoOf(PluginGeneratedSerialDescriptor).hf = function () {
    return this.mh_1.e1();
  };
  protoOf(PluginGeneratedSerialDescriptor).qh = function () {
    var tmp0 = this.oh_1;
    // Inline function 'kotlin.getValue' call
    typeParameterDescriptors$factory();
    return tmp0.b1();
  };
  protoOf(PluginGeneratedSerialDescriptor).rh = function (name, isOptional) {
    this.hh_1 = this.hh_1 + 1 | 0;
    this.ih_1[this.hh_1] = name;
    this.lh_1[this.hh_1] = isOptional;
    this.jh_1[this.hh_1] = null;
    if (this.hh_1 === (this.gh_1 - 1 | 0)) {
      this.mh_1 = buildIndices(this);
    }
  };
  protoOf(PluginGeneratedSerialDescriptor).qd = function (index) {
    return getChecked(_get_childSerializers__7vnyfa(this), index).uc();
  };
  protoOf(PluginGeneratedSerialDescriptor).rd = function (index) {
    return getChecked_0(this.lh_1, index);
  };
  protoOf(PluginGeneratedSerialDescriptor).pd = function (index) {
    var tmp0_elvis_lhs = getChecked(this.jh_1, index);
    return tmp0_elvis_lhs == null ? emptyList() : tmp0_elvis_lhs;
  };
  protoOf(PluginGeneratedSerialDescriptor).nd = function (index) {
    return getChecked(this.ih_1, index);
  };
  protoOf(PluginGeneratedSerialDescriptor).od = function (name) {
    var tmp0_elvis_lhs = this.mh_1.d1(name);
    return tmp0_elvis_lhs == null ? -3 : tmp0_elvis_lhs;
  };
  protoOf(PluginGeneratedSerialDescriptor).equals = function (other) {
    var tmp$ret$0;
    $l$block_5: {
      // Inline function 'kotlinx.serialization.internal.equalsImpl' call
      if (this === other) {
        tmp$ret$0 = true;
        break $l$block_5;
      }
      if (!(other instanceof PluginGeneratedSerialDescriptor)) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.id() === other.id())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      // Inline function 'kotlinx.serialization.internal.PluginGeneratedSerialDescriptor.equals.<anonymous>' call
      if (!contentEquals(this.qh(), other.qh())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.ld() === other.ld())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var inductionVariable = 0;
      var last = this.ld();
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (!(this.qd(index).id() === other.qd(index).id())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
          if (!equals(this.qd(index).jd(), other.qd(index).jd())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
        }
         while (inductionVariable < last);
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  protoOf(PluginGeneratedSerialDescriptor).hashCode = function () {
    return _get__hashCode__tgwhef(this);
  };
  protoOf(PluginGeneratedSerialDescriptor).toString = function () {
    var tmp = until(0, this.gh_1);
    var tmp_0 = this.id() + '(';
    return joinToString(tmp, ', ', tmp_0, ')', VOID, VOID, PluginGeneratedSerialDescriptor$toString$lambda(this));
  };
  function childSerializers$factory() {
    return getPropertyCallableRef('childSerializers', 1, KProperty1, function (receiver) {
      return _get_childSerializers__7vnyfa(receiver);
    }, null);
  }
  function typeParameterDescriptors$factory() {
    return getPropertyCallableRef('typeParameterDescriptors', 1, KProperty1, function (receiver) {
      return receiver.qh();
    }, null);
  }
  function _hashCode$factory() {
    return getPropertyCallableRef('_hashCode', 1, KProperty1, function (receiver) {
      return _get__hashCode__tgwhef(receiver);
    }, null);
  }
  function get_EMPTY_SERIALIZER_ARRAY() {
    _init_properties_PluginHelperInterfaces_kt__xgvzfp();
    return EMPTY_SERIALIZER_ARRAY;
  }
  var EMPTY_SERIALIZER_ARRAY;
  function GeneratedSerializer() {
  }
  var properties_initialized_PluginHelperInterfaces_kt_ap8in1;
  function _init_properties_PluginHelperInterfaces_kt__xgvzfp() {
    if (!properties_initialized_PluginHelperInterfaces_kt_ap8in1) {
      properties_initialized_PluginHelperInterfaces_kt_ap8in1 = true;
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      EMPTY_SERIALIZER_ARRAY = [];
    }
  }
  function StringSerializer() {
    StringSerializer_instance = this;
    this.yh_1 = new PrimitiveSerialDescriptor('kotlin.String', STRING_getInstance());
  }
  protoOf(StringSerializer).uc = function () {
    return this.yh_1;
  };
  protoOf(StringSerializer).zh = function (encoder, value) {
    return encoder.ue(value);
  };
  protoOf(StringSerializer).vc = function (encoder, value) {
    return this.zh(encoder, (!(value == null) ? typeof value === 'string' : false) ? value : THROW_CCE());
  };
  protoOf(StringSerializer).wc = function (decoder) {
    return decoder.ae();
  };
  var StringSerializer_instance;
  function StringSerializer_getInstance() {
    if (StringSerializer_instance == null)
      new StringSerializer();
    return StringSerializer_instance;
  }
  function DoubleSerializer() {
    DoubleSerializer_instance = this;
    this.ai_1 = new PrimitiveSerialDescriptor('kotlin.Double', DOUBLE_getInstance());
  }
  protoOf(DoubleSerializer).uc = function () {
    return this.ai_1;
  };
  protoOf(DoubleSerializer).bi = function (encoder, value) {
    return encoder.te(value);
  };
  protoOf(DoubleSerializer).vc = function (encoder, value) {
    return this.bi(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  protoOf(DoubleSerializer).wc = function (decoder) {
    return decoder.zd();
  };
  var DoubleSerializer_instance;
  function DoubleSerializer_getInstance() {
    if (DoubleSerializer_instance == null)
      new DoubleSerializer();
    return DoubleSerializer_instance;
  }
  function IntSerializer() {
    IntSerializer_instance = this;
    this.ci_1 = new PrimitiveSerialDescriptor('kotlin.Int', INT_getInstance());
  }
  protoOf(IntSerializer).uc = function () {
    return this.ci_1;
  };
  protoOf(IntSerializer).di = function (encoder, value) {
    return encoder.se(value);
  };
  protoOf(IntSerializer).vc = function (encoder, value) {
    return this.di(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  protoOf(IntSerializer).wc = function (decoder) {
    return decoder.yd();
  };
  var IntSerializer_instance;
  function IntSerializer_getInstance() {
    if (IntSerializer_instance == null)
      new IntSerializer();
    return IntSerializer_instance;
  }
  function error($this) {
    throw IllegalStateException_init_$Create$('Primitive descriptor does not have elements');
  }
  function PrimitiveSerialDescriptor(serialName, kind) {
    this.ei_1 = serialName;
    this.fi_1 = kind;
  }
  protoOf(PrimitiveSerialDescriptor).id = function () {
    return this.ei_1;
  };
  protoOf(PrimitiveSerialDescriptor).jd = function () {
    return this.fi_1;
  };
  protoOf(PrimitiveSerialDescriptor).ld = function () {
    return 0;
  };
  protoOf(PrimitiveSerialDescriptor).nd = function (index) {
    error(this);
  };
  protoOf(PrimitiveSerialDescriptor).od = function (name) {
    error(this);
  };
  protoOf(PrimitiveSerialDescriptor).rd = function (index) {
    error(this);
  };
  protoOf(PrimitiveSerialDescriptor).qd = function (index) {
    error(this);
  };
  protoOf(PrimitiveSerialDescriptor).pd = function (index) {
    error(this);
  };
  protoOf(PrimitiveSerialDescriptor).toString = function () {
    return 'PrimitiveDescriptor(' + this.ei_1 + ')';
  };
  protoOf(PrimitiveSerialDescriptor).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof PrimitiveSerialDescriptor))
      return false;
    if (this.ei_1 === other.ei_1 && equals(this.fi_1, other.fi_1))
      return true;
    return false;
  };
  protoOf(PrimitiveSerialDescriptor).hashCode = function () {
    return getStringHashCode(this.ei_1) + imul(31, this.fi_1.hashCode()) | 0;
  };
  function NamedValueDecoder() {
    TaggedDecoder.call(this);
  }
  protoOf(NamedValueDecoder).ii = function (_this__u8e3s4, index) {
    return this.ki(this.ji(_this__u8e3s4, index));
  };
  protoOf(NamedValueDecoder).ki = function (nestedName) {
    var tmp0_elvis_lhs = this.ni();
    return this.oi(tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs, nestedName);
  };
  protoOf(NamedValueDecoder).ji = function (descriptor, index) {
    return descriptor.nd(index);
  };
  protoOf(NamedValueDecoder).oi = function (parentName, childName) {
    var tmp;
    // Inline function 'kotlin.text.isEmpty' call
    if (charSequenceLength(parentName) === 0) {
      tmp = childName;
    } else {
      tmp = parentName + '.' + childName;
    }
    return tmp;
  };
  protoOf(NamedValueDecoder).pi = function () {
    return this.li_1.o() ? '$' : joinToString(this.li_1, '.', '$.');
  };
  function tagBlock($this, tag, block) {
    $this.vi(tag);
    var r = block();
    if (!$this.mi_1) {
      $this.wi();
    }
    $this.mi_1 = false;
    return r;
  }
  function TaggedDecoder$decodeSerializableElement$lambda(this$0, $deserializer, $previousValue) {
    return function () {
      return this$0.be($deserializer, $previousValue);
    };
  }
  function TaggedDecoder$decodeNullableSerializableElement$lambda(this$0, $deserializer, $previousValue) {
    return function () {
      var tmp0 = this$0;
      // Inline function 'kotlinx.serialization.encoding.decodeIfNullable' call
      var isNullabilitySupported = $deserializer.uc().cd();
      var tmp;
      if (isNullabilitySupported || tmp0.wd()) {
        // Inline function 'kotlinx.serialization.internal.TaggedDecoder.decodeNullableSerializableElement.<anonymous>.<anonymous>' call
        tmp = this$0.be($deserializer, $previousValue);
      } else {
        tmp = tmp0.xd();
      }
      return tmp;
    };
  }
  function TaggedDecoder() {
    var tmp = this;
    // Inline function 'kotlin.collections.arrayListOf' call
    tmp.li_1 = ArrayList_init_$Create$();
    this.mi_1 = false;
  }
  protoOf(TaggedDecoder).le = function () {
    return EmptySerializersModule_0();
  };
  protoOf(TaggedDecoder).qi = function (tag) {
    throw SerializationException_init_$Create$_0(toString(getKClassFromExpression(this)) + " can't retrieve untyped values");
  };
  protoOf(TaggedDecoder).ri = function (tag) {
    return true;
  };
  protoOf(TaggedDecoder).si = function (tag) {
    var tmp = this.qi(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).ti = function (tag) {
    var tmp = this.qi(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).ui = function (tag) {
    var tmp = this.qi(tag);
    return typeof tmp === 'string' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).be = function (deserializer, previousValue) {
    return this.ce(deserializer);
  };
  protoOf(TaggedDecoder).wd = function () {
    var tmp0_elvis_lhs = this.ni();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var currentTag = tmp;
    return this.ri(currentTag);
  };
  protoOf(TaggedDecoder).xd = function () {
    return null;
  };
  protoOf(TaggedDecoder).yd = function () {
    return this.si(this.wi());
  };
  protoOf(TaggedDecoder).zd = function () {
    return this.ti(this.wi());
  };
  protoOf(TaggedDecoder).ae = function () {
    return this.ui(this.wi());
  };
  protoOf(TaggedDecoder).de = function (descriptor) {
    return this;
  };
  protoOf(TaggedDecoder).ee = function (descriptor) {
  };
  protoOf(TaggedDecoder).fe = function (descriptor, index) {
    return this.si(this.ii(descriptor, index));
  };
  protoOf(TaggedDecoder).ge = function (descriptor, index) {
    return this.ti(this.ii(descriptor, index));
  };
  protoOf(TaggedDecoder).he = function (descriptor, index) {
    return this.ui(this.ii(descriptor, index));
  };
  protoOf(TaggedDecoder).ie = function (descriptor, index, deserializer, previousValue) {
    var tmp = this.ii(descriptor, index);
    return tagBlock(this, tmp, TaggedDecoder$decodeSerializableElement$lambda(this, deserializer, previousValue));
  };
  protoOf(TaggedDecoder).ke = function (descriptor, index, deserializer, previousValue) {
    var tmp = this.ii(descriptor, index);
    return tagBlock(this, tmp, TaggedDecoder$decodeNullableSerializableElement$lambda(this, deserializer, previousValue));
  };
  protoOf(TaggedDecoder).ni = function () {
    return lastOrNull(this.li_1);
  };
  protoOf(TaggedDecoder).vi = function (name) {
    this.li_1.n(name);
  };
  protoOf(TaggedDecoder).wi = function () {
    var r = this.li_1.i2(get_lastIndex_0(this.li_1));
    this.mi_1 = true;
    return r;
  };
  function get_EmptySerializersModuleLegacyJs() {
    _init_properties_SerializersModule_kt__u78ha3();
    return EmptySerializersModule;
  }
  var EmptySerializersModule;
  function SerializersModule() {
  }
  protoOf(SerializersModule).dd = function (kClass, typeArgumentsSerializers, $super) {
    typeArgumentsSerializers = typeArgumentsSerializers === VOID ? emptyList() : typeArgumentsSerializers;
    return $super === VOID ? this.xi(kClass, typeArgumentsSerializers) : $super.xi.call(this, kClass, typeArgumentsSerializers);
  };
  function SerialModuleImpl(class2ContextualFactory, polyBase2Serializers, polyBase2DefaultSerializerProvider, polyBase2NamedSerializers, polyBase2DefaultDeserializerProvider, hasInterfaceContextualSerializers) {
    SerializersModule.call(this);
    this.zi_1 = class2ContextualFactory;
    this.aj_1 = polyBase2Serializers;
    this.bj_1 = polyBase2DefaultSerializerProvider;
    this.cj_1 = polyBase2NamedSerializers;
    this.dj_1 = polyBase2DefaultDeserializerProvider;
    this.ej_1 = hasInterfaceContextualSerializers;
  }
  protoOf(SerialModuleImpl).gf = function (baseClass, value) {
    if (!baseClass.b8(value))
      return null;
    var tmp0_safe_receiver = this.aj_1.d1(baseClass);
    var tmp = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.d1(getKClassFromExpression(value));
    var registered = (!(tmp == null) ? isInterface(tmp, SerializationStrategy) : false) ? tmp : null;
    if (!(registered == null))
      return registered;
    var tmp_0 = this.bj_1.d1(baseClass);
    var tmp1_safe_receiver = (!(tmp_0 == null) ? typeof tmp_0 === 'function' : false) ? tmp_0 : null;
    return tmp1_safe_receiver == null ? null : tmp1_safe_receiver(value);
  };
  protoOf(SerialModuleImpl).ff = function (baseClass, serializedClassName) {
    var tmp0_safe_receiver = this.cj_1.d1(baseClass);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.collections.get' call
      tmp = (isInterface(tmp0_safe_receiver, KtMap) ? tmp0_safe_receiver : THROW_CCE()).d1(serializedClassName);
    }
    var tmp_0 = tmp;
    var registered = (!(tmp_0 == null) ? isInterface(tmp_0, KSerializer) : false) ? tmp_0 : null;
    if (!(registered == null))
      return registered;
    var tmp_1 = this.dj_1.d1(baseClass);
    var tmp1_safe_receiver = (!(tmp_1 == null) ? typeof tmp_1 === 'function' : false) ? tmp_1 : null;
    return tmp1_safe_receiver == null ? null : tmp1_safe_receiver(serializedClassName);
  };
  protoOf(SerialModuleImpl).xi = function (kClass, typeArgumentsSerializers) {
    var tmp0_safe_receiver = this.zi_1.d1(kClass);
    var tmp = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.fj(typeArgumentsSerializers);
    return (tmp == null ? true : isInterface(tmp, KSerializer)) ? tmp : null;
  };
  protoOf(SerialModuleImpl).yi = function (collector) {
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s = this.zi_1.f1().e();
    while (_iterator__ex2g4s.f()) {
      var element = _iterator__ex2g4s.g();
      // Inline function 'kotlinx.serialization.modules.SerialModuleImpl.dumpTo.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var kclass = element.a1();
      // Inline function 'kotlin.collections.component2' call
      var serial = element.b1();
      if (serial instanceof Argless) {
        var tmp = isInterface(kclass, KClass) ? kclass : THROW_CCE();
        var tmp_0 = serial.ij_1;
        collector.jj(tmp, isInterface(tmp_0, KSerializer) ? tmp_0 : THROW_CCE());
      } else {
        if (serial instanceof WithTypeArguments) {
          collector.hj(kclass, serial.gj_1);
        } else {
          noWhenBranchMatchedException();
        }
      }
    }
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s_0 = this.aj_1.f1().e();
    while (_iterator__ex2g4s_0.f()) {
      var element_0 = _iterator__ex2g4s_0.g();
      // Inline function 'kotlinx.serialization.modules.SerialModuleImpl.dumpTo.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var baseClass = element_0.a1();
      // Inline function 'kotlin.collections.component2' call
      var classMap = element_0.b1();
      // Inline function 'kotlin.collections.forEach' call
      // Inline function 'kotlin.collections.iterator' call
      var _iterator__ex2g4s_1 = classMap.f1().e();
      while (_iterator__ex2g4s_1.f()) {
        var element_1 = _iterator__ex2g4s_1.g();
        // Inline function 'kotlinx.serialization.modules.SerialModuleImpl.dumpTo.<anonymous>.<anonymous>' call
        // Inline function 'kotlin.collections.component1' call
        var actualClass = element_1.a1();
        // Inline function 'kotlin.collections.component2' call
        var serializer = element_1.b1();
        var tmp_1 = isInterface(baseClass, KClass) ? baseClass : THROW_CCE();
        var tmp_2 = isInterface(actualClass, KClass) ? actualClass : THROW_CCE();
        // Inline function 'kotlinx.serialization.internal.cast' call
        var tmp$ret$9 = isInterface(serializer, KSerializer) ? serializer : THROW_CCE();
        collector.kj(tmp_1, tmp_2, tmp$ret$9);
      }
    }
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s_2 = this.bj_1.f1().e();
    while (_iterator__ex2g4s_2.f()) {
      var element_2 = _iterator__ex2g4s_2.g();
      // Inline function 'kotlinx.serialization.modules.SerialModuleImpl.dumpTo.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var baseClass_0 = element_2.a1();
      // Inline function 'kotlin.collections.component2' call
      var provider = element_2.b1();
      var tmp_3 = isInterface(baseClass_0, KClass) ? baseClass_0 : THROW_CCE();
      collector.lj(tmp_3, typeof provider === 'function' ? provider : THROW_CCE());
    }
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s_3 = this.dj_1.f1().e();
    while (_iterator__ex2g4s_3.f()) {
      var element_3 = _iterator__ex2g4s_3.g();
      // Inline function 'kotlinx.serialization.modules.SerialModuleImpl.dumpTo.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var baseClass_1 = element_3.a1();
      // Inline function 'kotlin.collections.component2' call
      var provider_0 = element_3.b1();
      var tmp_4 = isInterface(baseClass_1, KClass) ? baseClass_1 : THROW_CCE();
      collector.mj(tmp_4, typeof provider_0 === 'function' ? provider_0 : THROW_CCE());
    }
  };
  function Argless() {
  }
  function WithTypeArguments() {
  }
  function ContextualProvider() {
  }
  var properties_initialized_SerializersModule_kt_fjigjn;
  function _init_properties_SerializersModule_kt__u78ha3() {
    if (!properties_initialized_SerializersModule_kt_fjigjn) {
      properties_initialized_SerializersModule_kt_fjigjn = true;
      EmptySerializersModule = new SerialModuleImpl(emptyMap(), emptyMap(), emptyMap(), emptyMap(), emptyMap(), false);
    }
  }
  function EmptySerializersModule_0() {
    return get_EmptySerializersModuleLegacyJs();
  }
  function SerializersModuleCollector$contextual$lambda($serializer) {
    return function (it) {
      return $serializer;
    };
  }
  function SerializersModuleCollector() {
  }
  function SerializableWith() {
  }
  function getChecked(_this__u8e3s4, index) {
    if (!(0 <= index ? index <= (_this__u8e3s4.length - 1 | 0) : false))
      throw IndexOutOfBoundsException_init_$Create$('Index ' + index + ' out of bounds ' + get_indices(_this__u8e3s4).toString());
    return _this__u8e3s4[index];
  }
  function getChecked_0(_this__u8e3s4, index) {
    if (!(0 <= index ? index <= (_this__u8e3s4.length - 1 | 0) : false))
      throw IndexOutOfBoundsException_init_$Create$('Index ' + index + ' out of bounds ' + get_indices_0(_this__u8e3s4).toString());
    return _this__u8e3s4[index];
  }
  //region block: post-declaration
  protoOf(AbstractDecoder).je = decodeSerializableElement$default;
  protoOf(AbstractDecoder).ce = decodeSerializableValue;
  protoOf(AbstractDecoder).me = decodeSequentially;
  protoOf(AbstractDecoder).oe = decodeCollectionSize;
  protoOf(AbstractEncoder).cf = encodeNotNullMark;
  protoOf(AbstractEncoder).df = beginCollection;
  protoOf(AbstractEncoder).ze = encodeSerializableValue;
  protoOf(AbstractEncoder).bf = encodeNullableSerializableValue;
  protoOf(AbstractEncoder).ef = shouldEncodeElementDefault;
  protoOf(ListLikeDescriptor).cd = get_isNullable;
  protoOf(ListLikeDescriptor).kd = get_isInline;
  protoOf(ListLikeDescriptor).md = get_annotations;
  protoOf(PluginGeneratedSerialDescriptor).cd = get_isNullable;
  protoOf(PluginGeneratedSerialDescriptor).kd = get_isInline;
  protoOf(InlinePrimitiveDescriptor$1).uh = typeParametersSerializers;
  protoOf(PrimitiveSerialDescriptor).cd = get_isNullable;
  protoOf(PrimitiveSerialDescriptor).kd = get_isInline;
  protoOf(PrimitiveSerialDescriptor).md = get_annotations;
  protoOf(TaggedDecoder).je = decodeSerializableElement$default;
  protoOf(TaggedDecoder).ce = decodeSerializableValue;
  protoOf(TaggedDecoder).me = decodeSequentially;
  protoOf(TaggedDecoder).oe = decodeCollectionSize;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = SerializationException_init_$Init$_0;
  _.$_$.b = UnknownFieldException_init_$Create$;
  _.$_$.c = CONTEXTUAL_getInstance;
  _.$_$.d = ENUM_getInstance;
  _.$_$.e = CLASS_getInstance;
  _.$_$.f = LIST_getInstance;
  _.$_$.g = MAP_getInstance;
  _.$_$.h = OBJECT_getInstance;
  _.$_$.i = DoubleSerializer_getInstance;
  _.$_$.j = IntSerializer_getInstance;
  _.$_$.k = StringSerializer_getInstance;
  _.$_$.l = ListSerializer;
  _.$_$.m = get_nullable;
  _.$_$.n = serializer;
  _.$_$.o = PolymorphicKind;
  _.$_$.p = PrimitiveKind;
  _.$_$.q = SerialDescriptor;
  _.$_$.r = ENUM;
  _.$_$.s = getContextualDescriptor;
  _.$_$.t = AbstractDecoder;
  _.$_$.u = AbstractEncoder;
  _.$_$.v = CompositeDecoder;
  _.$_$.w = CompositeEncoder;
  _.$_$.x = Decoder;
  _.$_$.y = Encoder;
  _.$_$.z = AbstractPolymorphicSerializer;
  _.$_$.a1 = ArrayListSerializer;
  _.$_$.b1 = ElementMarker;
  _.$_$.c1 = typeParametersSerializers;
  _.$_$.d1 = GeneratedSerializer;
  _.$_$.e1 = InlinePrimitiveDescriptor;
  _.$_$.f1 = NamedValueDecoder;
  _.$_$.g1 = PluginGeneratedSerialDescriptor;
  _.$_$.h1 = jsonCachedSerialNames;
  _.$_$.i1 = throwMissingFieldException;
  _.$_$.j1 = EmptySerializersModule_0;
  _.$_$.k1 = contextual;
  _.$_$.l1 = SerializersModuleCollector;
  _.$_$.m1 = DeserializationStrategy;
  _.$_$.n1 = MissingFieldException;
  _.$_$.o1 = SealedClassSerializer;
  _.$_$.p1 = SerializationException;
  _.$_$.q1 = SerializationStrategy;
  _.$_$.r1 = findPolymorphicSerializer_0;
  _.$_$.s1 = findPolymorphicSerializer;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlinx-serialization-kotlinx-serialization-core.js.map
