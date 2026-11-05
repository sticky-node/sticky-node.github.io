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
  var protoOf = kotlin_kotlin.$_$.p8;
  var initMetadataForInterface = kotlin_kotlin.$_$.t7;
  var VOID = kotlin_kotlin.$_$.f;
  var StringCompanionObject_instance = kotlin_kotlin.$_$.q3;
  var Unit_instance = kotlin_kotlin.$_$.c4;
  var emptyList = kotlin_kotlin.$_$.f5;
  var LazyThreadSafetyMode_PUBLICATION_getInstance = kotlin_kotlin.$_$.g;
  var lazy = kotlin_kotlin.$_$.ob;
  var toString = kotlin_kotlin.$_$.t8;
  var initMetadataForClass = kotlin_kotlin.$_$.q7;
  var getKClassFromExpression = kotlin_kotlin.$_$.d;
  var KProperty1 = kotlin_kotlin.$_$.e9;
  var getPropertyCallableRef = kotlin_kotlin.$_$.n7;
  var asList = kotlin_kotlin.$_$.q4;
  var objectCreate = kotlin_kotlin.$_$.o8;
  var THROW_CCE = kotlin_kotlin.$_$.ua;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.e1;
  var zip = kotlin_kotlin.$_$.g6;
  var toMap = kotlin_kotlin.$_$.e6;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.s;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.g1;
  var mapCapacity = kotlin_kotlin.$_$.s5;
  var LinkedHashMap_init_$Create$_0 = kotlin_kotlin.$_$.r;
  var KtMap = kotlin_kotlin.$_$.l4;
  var isInterface = kotlin_kotlin.$_$.e8;
  var IllegalArgumentException_init_$Init$ = kotlin_kotlin.$_$.c1;
  var captureStack = kotlin_kotlin.$_$.d7;
  var IllegalArgumentException_init_$Init$_0 = kotlin_kotlin.$_$.d1;
  var IllegalArgumentException_init_$Init$_1 = kotlin_kotlin.$_$.f1;
  var IllegalArgumentException = kotlin_kotlin.$_$.pa;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.s4;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.i;
  var KClass = kotlin_kotlin.$_$.c9;
  var Triple = kotlin_kotlin.$_$.va;
  var getKClass = kotlin_kotlin.$_$.e;
  var Pair = kotlin_kotlin.$_$.ra;
  var Entry = kotlin_kotlin.$_$.k4;
  var KtMutableMap = kotlin_kotlin.$_$.n4;
  var LinkedHashMap = kotlin_kotlin.$_$.h4;
  var HashMap = kotlin_kotlin.$_$.f4;
  var KtSet = kotlin_kotlin.$_$.p4;
  var KtMutableSet = kotlin_kotlin.$_$.o4;
  var LinkedHashSet = kotlin_kotlin.$_$.i4;
  var HashSet = kotlin_kotlin.$_$.g4;
  var Collection = kotlin_kotlin.$_$.e4;
  var KtList = kotlin_kotlin.$_$.j4;
  var KtMutableList = kotlin_kotlin.$_$.m4;
  var ArrayList = kotlin_kotlin.$_$.d4;
  var copyToArray = kotlin_kotlin.$_$.e5;
  var _Result___get_value__impl__bjfvqg = kotlin_kotlin.$_$.x1;
  var _Result___get_isFailure__impl__jpiriv = kotlin_kotlin.$_$.w1;
  var Result = kotlin_kotlin.$_$.sa;
  var ensureNotNull = kotlin_kotlin.$_$.kb;
  var equals = kotlin_kotlin.$_$.j7;
  var getStringHashCode = kotlin_kotlin.$_$.o7;
  var isBlank = kotlin_kotlin.$_$.k9;
  var toList = kotlin_kotlin.$_$.d6;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.j;
  var HashSet_init_$Create$ = kotlin_kotlin.$_$.p;
  var toHashSet = kotlin_kotlin.$_$.b6;
  var toBooleanArray = kotlin_kotlin.$_$.a6;
  var withIndex = kotlin_kotlin.$_$.f6;
  var to = kotlin_kotlin.$_$.ub;
  var lazy_0 = kotlin_kotlin.$_$.pb;
  var contentEquals = kotlin_kotlin.$_$.t4;
  var until = kotlin_kotlin.$_$.b9;
  var joinToString = kotlin_kotlin.$_$.m5;
  var initMetadataForObject = kotlin_kotlin.$_$.v7;
  var Long = kotlin_kotlin.$_$.qa;
  var Char = kotlin_kotlin.$_$.ja;
  var Duration__toIsoString_impl_9h6wsm = kotlin_kotlin.$_$.p1;
  var Duration = kotlin_kotlin.$_$.ha;
  var Companion_getInstance = kotlin_kotlin.$_$.t3;
  var Uuid = kotlin_kotlin.$_$.ia;
  var Companion_getInstance_0 = kotlin_kotlin.$_$.u3;
  var toIntOrNull = kotlin_kotlin.$_$.v9;
  var hashCode = kotlin_kotlin.$_$.p7;
  var ArrayList_init_$Create$_1 = kotlin_kotlin.$_$.k;
  var HashSet_init_$Create$_0 = kotlin_kotlin.$_$.q;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.u;
  var LinkedHashSet_init_$Create$_0 = kotlin_kotlin.$_$.v;
  var HashMap_init_$Create$ = kotlin_kotlin.$_$.m;
  var HashMap_init_$Create$_0 = kotlin_kotlin.$_$.n;
  var LinkedHashMap_init_$Create$_1 = kotlin_kotlin.$_$.t;
  var isArray = kotlin_kotlin.$_$.w7;
  var arrayIterator = kotlin_kotlin.$_$.b7;
  var step = kotlin_kotlin.$_$.a9;
  var getValue = kotlin_kotlin.$_$.j5;
  var longArray = kotlin_kotlin.$_$.i8;
  var initMetadataForCompanion = kotlin_kotlin.$_$.r7;
  var get_lastIndex = kotlin_kotlin.$_$.n5;
  var countTrailingZeroBits = kotlin_kotlin.$_$.ib;
  var HashSet_init_$Create$_1 = kotlin_kotlin.$_$.o;
  var toString_0 = kotlin_kotlin.$_$.tb;
  var KTypeParameter = kotlin_kotlin.$_$.f9;
  var contentHashCode = kotlin_kotlin.$_$.u4;
  var fillArrayVal = kotlin_kotlin.$_$.k7;
  var booleanArray = kotlin_kotlin.$_$.c7;
  var emptyMap = kotlin_kotlin.$_$.g5;
  var Companion_getInstance_1 = kotlin_kotlin.$_$.v3;
  var isCharArray = kotlin_kotlin.$_$.z7;
  var charArray = kotlin_kotlin.$_$.f7;
  var DoubleCompanionObject_instance = kotlin_kotlin.$_$.m3;
  var isDoubleArray = kotlin_kotlin.$_$.b8;
  var FloatCompanionObject_instance = kotlin_kotlin.$_$.n3;
  var isFloatArray = kotlin_kotlin.$_$.c8;
  var Companion_getInstance_2 = kotlin_kotlin.$_$.w3;
  var isLongArray = kotlin_kotlin.$_$.f8;
  var Companion_getInstance_3 = kotlin_kotlin.$_$.a4;
  var _ULongArray___get_size__impl__ju6dtr = kotlin_kotlin.$_$.x2;
  var ULongArray = kotlin_kotlin.$_$.ab;
  var _ULongArray___init__impl__twm1l3 = kotlin_kotlin.$_$.t2;
  var _ULong___init__impl__c78o9k = kotlin_kotlin.$_$.q2;
  var ULongArray__get_impl_pr71q9 = kotlin_kotlin.$_$.v2;
  var _ULong___get_data__impl__fggpzb = kotlin_kotlin.$_$.r2;
  var IntCompanionObject_instance = kotlin_kotlin.$_$.o3;
  var isIntArray = kotlin_kotlin.$_$.d8;
  var Companion_getInstance_4 = kotlin_kotlin.$_$.z3;
  var _UIntArray___get_size__impl__r6l8ci = kotlin_kotlin.$_$.o2;
  var UIntArray = kotlin_kotlin.$_$.ya;
  var _UIntArray___init__impl__ghjpc6 = kotlin_kotlin.$_$.k2;
  var _UInt___init__impl__l7qpdl = kotlin_kotlin.$_$.h2;
  var UIntArray__get_impl_gp5kza = kotlin_kotlin.$_$.m2;
  var _UInt___get_data__impl__f0vqqw = kotlin_kotlin.$_$.i2;
  var ShortCompanionObject_instance = kotlin_kotlin.$_$.p3;
  var isShortArray = kotlin_kotlin.$_$.g8;
  var Companion_getInstance_5 = kotlin_kotlin.$_$.b4;
  var _UShortArray___get_size__impl__jqto1b = kotlin_kotlin.$_$.g3;
  var UShortArray = kotlin_kotlin.$_$.cb;
  var _UShortArray___init__impl__9b26ef = kotlin_kotlin.$_$.c3;
  var _UShort___init__impl__jigrne = kotlin_kotlin.$_$.z2;
  var UShortArray__get_impl_fnbhmx = kotlin_kotlin.$_$.e3;
  var _UShort___get_data__impl__g0245 = kotlin_kotlin.$_$.a3;
  var ByteCompanionObject_instance = kotlin_kotlin.$_$.l3;
  var isByteArray = kotlin_kotlin.$_$.y7;
  var Companion_getInstance_6 = kotlin_kotlin.$_$.y3;
  var _UByteArray___get_size__impl__h6pkdv = kotlin_kotlin.$_$.f2;
  var UByteArray = kotlin_kotlin.$_$.wa;
  var _UByteArray___init__impl__ip4y9n = kotlin_kotlin.$_$.c2;
  var _UByte___init__impl__g9hnc4 = kotlin_kotlin.$_$.y1;
  var UByteArray__get_impl_t5f3hv = kotlin_kotlin.$_$.d2;
  var _UByte___get_data__impl__jof9qr = kotlin_kotlin.$_$.z1;
  var BooleanCompanionObject_instance = kotlin_kotlin.$_$.k3;
  var isBooleanArray = kotlin_kotlin.$_$.x7;
  var coerceAtLeast = kotlin_kotlin.$_$.w8;
  var copyOf = kotlin_kotlin.$_$.y4;
  var copyOf_0 = kotlin_kotlin.$_$.a5;
  var copyOf_1 = kotlin_kotlin.$_$.b5;
  var copyOf_2 = kotlin_kotlin.$_$.w4;
  var _ULongArray___get_storage__impl__28e64j = kotlin_kotlin.$_$.y2;
  var _ULongArray___init__impl__twm1l3_0 = kotlin_kotlin.$_$.u2;
  var ULongArray__set_impl_z19mvh = kotlin_kotlin.$_$.w2;
  var copyOf_3 = kotlin_kotlin.$_$.d5;
  var _UIntArray___get_storage__impl__92a0v0 = kotlin_kotlin.$_$.p2;
  var _UIntArray___init__impl__ghjpc6_0 = kotlin_kotlin.$_$.l2;
  var UIntArray__set_impl_7f2zu2 = kotlin_kotlin.$_$.n2;
  var copyOf_4 = kotlin_kotlin.$_$.v4;
  var _UShortArray___get_storage__impl__t2jpv5 = kotlin_kotlin.$_$.h3;
  var _UShortArray___init__impl__9b26ef_0 = kotlin_kotlin.$_$.d3;
  var UShortArray__set_impl_6d8whp = kotlin_kotlin.$_$.f3;
  var copyOf_5 = kotlin_kotlin.$_$.z4;
  var _UByteArray___get_storage__impl__d4kctt = kotlin_kotlin.$_$.g2;
  var _UByteArray___init__impl__ip4y9n_0 = kotlin_kotlin.$_$.b2;
  var UByteArray__set_impl_jvcicn = kotlin_kotlin.$_$.e2;
  var copyOf_6 = kotlin_kotlin.$_$.x4;
  var Unit = kotlin_kotlin.$_$.eb;
  var trimIndent = kotlin_kotlin.$_$.fa;
  var charSequenceLength = kotlin_kotlin.$_$.h7;
  var lastOrNull = kotlin_kotlin.$_$.p5;
  var get_lastIndex_0 = kotlin_kotlin.$_$.o5;
  var ULong = kotlin_kotlin.$_$.bb;
  var UInt = kotlin_kotlin.$_$.za;
  var UShort = kotlin_kotlin.$_$.db;
  var UByte = kotlin_kotlin.$_$.xa;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.qb;
  var PrimitiveClasses_getInstance = kotlin_kotlin.$_$.s3;
  var mapOf = kotlin_kotlin.$_$.t5;
  var get_js = kotlin_kotlin.$_$.h8;
  var findAssociatedObject = kotlin_kotlin.$_$.c;
  var get_indices = kotlin_kotlin.$_$.l5;
  var IndexOutOfBoundsException_init_$Create$ = kotlin_kotlin.$_$.i1;
  var get_indices_0 = kotlin_kotlin.$_$.k5;
  var Companion_instance = kotlin_kotlin.$_$.x3;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.u1;
  var createFailure = kotlin_kotlin.$_$.jb;
  //endregion
  //region block: pre-declaration
  initMetadataForInterface(SerializationStrategy, 'SerializationStrategy');
  initMetadataForInterface(DeserializationStrategy, 'DeserializationStrategy');
  initMetadataForInterface(KSerializer, 'KSerializer', VOID, VOID, [SerializationStrategy, DeserializationStrategy]);
  initMetadataForClass(AbstractPolymorphicSerializer, 'AbstractPolymorphicSerializer', VOID, VOID, [KSerializer]);
  initMetadataForClass(PolymorphicSerializer, 'PolymorphicSerializer', VOID, AbstractPolymorphicSerializer);
  initMetadataForClass(SealedClassSerializer$$inlined$groupingBy$1);
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
  initMetadataForClass(ClassSerialDescriptorBuilder, 'ClassSerialDescriptorBuilder');
  initMetadataForInterface(CachedNames, 'CachedNames');
  initMetadataForClass(SerialDescriptorImpl, 'SerialDescriptorImpl', VOID, VOID, [SerialDescriptor, CachedNames]);
  initMetadataForClass(SerialKind, 'SerialKind');
  initMetadataForObject(ENUM, 'ENUM', VOID, SerialKind);
  initMetadataForObject(CONTEXTUAL, 'CONTEXTUAL', VOID, SerialKind);
  initMetadataForClass(PolymorphicKind, 'PolymorphicKind', VOID, SerialKind);
  initMetadataForObject(SEALED, 'SEALED', VOID, PolymorphicKind);
  initMetadataForObject(OPEN, 'OPEN', VOID, PolymorphicKind);
  initMetadataForClass(PrimitiveKind, 'PrimitiveKind', VOID, SerialKind);
  initMetadataForObject(BOOLEAN, 'BOOLEAN', VOID, PrimitiveKind);
  initMetadataForObject(BYTE, 'BYTE', VOID, PrimitiveKind);
  initMetadataForObject(CHAR, 'CHAR', VOID, PrimitiveKind);
  initMetadataForObject(SHORT, 'SHORT', VOID, PrimitiveKind);
  initMetadataForObject(INT, 'INT', VOID, PrimitiveKind);
  initMetadataForObject(LONG, 'LONG', VOID, PrimitiveKind);
  initMetadataForObject(FLOAT, 'FLOAT', VOID, PrimitiveKind);
  initMetadataForObject(DOUBLE, 'DOUBLE', VOID, PrimitiveKind);
  initMetadataForObject(STRING, 'STRING', VOID, PrimitiveKind);
  initMetadataForClass(StructureKind, 'StructureKind', VOID, SerialKind);
  initMetadataForObject(CLASS, 'CLASS', VOID, StructureKind);
  initMetadataForObject(LIST, 'LIST', VOID, StructureKind);
  initMetadataForObject(MAP, 'MAP', VOID, StructureKind);
  initMetadataForObject(OBJECT, 'OBJECT', VOID, StructureKind);
  function decodeSerializableValue(deserializer) {
    return deserializer.dj(this);
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
    return $super === VOID ? this.sm(descriptor, index, deserializer, previousValue) : $super.sm.call(this, descriptor, index, deserializer, previousValue);
  }
  initMetadataForInterface(CompositeDecoder, 'CompositeDecoder');
  initMetadataForClass(AbstractDecoder, 'AbstractDecoder', VOID, VOID, [Decoder, CompositeDecoder]);
  function encodeNotNullMark() {
  }
  function beginCollection(descriptor, collectionSize) {
    return this.gm(descriptor);
  }
  function encodeSerializableValue(serializer, value) {
    serializer.cj(this, value);
  }
  function encodeNullableSerializableValue(serializer, value) {
    var isNullabilitySupported = serializer.bj().kk();
    if (isNullabilitySupported) {
      return this.xn(isInterface(serializer, SerializationStrategy) ? serializer : THROW_CCE(), value);
    }
    if (value == null) {
      this.bn();
    } else {
      this.ao();
      this.xn(serializer, value);
    }
  }
  initMetadataForInterface(Encoder, 'Encoder');
  function shouldEncodeElementDefault(descriptor, index) {
    return true;
  }
  initMetadataForInterface(CompositeEncoder, 'CompositeEncoder');
  initMetadataForClass(AbstractEncoder, 'AbstractEncoder', VOID, VOID, [Encoder, CompositeEncoder]);
  initMetadataForObject(NothingSerializer_0, 'NothingSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(DurationSerializer, 'DurationSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(UuidSerializer, 'UuidSerializer', VOID, VOID, [KSerializer]);
  initMetadataForClass(ListLikeDescriptor, 'ListLikeDescriptor', VOID, VOID, [SerialDescriptor]);
  initMetadataForClass(ArrayListClassDesc, 'ArrayListClassDesc', VOID, ListLikeDescriptor);
  initMetadataForClass(HashSetClassDesc, 'HashSetClassDesc', VOID, ListLikeDescriptor);
  initMetadataForClass(LinkedHashSetClassDesc, 'LinkedHashSetClassDesc', VOID, ListLikeDescriptor);
  initMetadataForClass(MapLikeDescriptor, 'MapLikeDescriptor', VOID, VOID, [SerialDescriptor]);
  initMetadataForClass(HashMapClassDesc, 'HashMapClassDesc', VOID, MapLikeDescriptor);
  initMetadataForClass(LinkedHashMapClassDesc, 'LinkedHashMapClassDesc', VOID, MapLikeDescriptor);
  initMetadataForClass(ArrayClassDesc, 'ArrayClassDesc', VOID, ListLikeDescriptor);
  initMetadataForClass(PrimitiveArrayDescriptor, 'PrimitiveArrayDescriptor', VOID, ListLikeDescriptor);
  initMetadataForClass(AbstractCollectionSerializer, 'AbstractCollectionSerializer', VOID, VOID, [KSerializer]);
  initMetadataForClass(CollectionLikeSerializer, 'CollectionLikeSerializer', VOID, AbstractCollectionSerializer);
  initMetadataForClass(CollectionSerializer, 'CollectionSerializer', VOID, CollectionLikeSerializer);
  initMetadataForClass(ArrayListSerializer, 'ArrayListSerializer', VOID, CollectionSerializer);
  initMetadataForClass(HashSetSerializer, 'HashSetSerializer', VOID, CollectionSerializer);
  initMetadataForClass(LinkedHashSetSerializer, 'LinkedHashSetSerializer', VOID, CollectionSerializer);
  initMetadataForClass(MapLikeSerializer, 'MapLikeSerializer', VOID, AbstractCollectionSerializer);
  initMetadataForClass(HashMapSerializer, 'HashMapSerializer', VOID, MapLikeSerializer);
  initMetadataForClass(LinkedHashMapSerializer, 'LinkedHashMapSerializer', VOID, MapLikeSerializer);
  initMetadataForClass(ReferenceArraySerializer, 'ReferenceArraySerializer', VOID, CollectionLikeSerializer);
  initMetadataForClass(PrimitiveArraySerializer, 'PrimitiveArraySerializer', VOID, CollectionLikeSerializer);
  initMetadataForClass(PrimitiveArrayBuilder, 'PrimitiveArrayBuilder');
  initMetadataForCompanion(Companion);
  initMetadataForClass(ElementMarker, 'ElementMarker');
  initMetadataForClass(PluginGeneratedSerialDescriptor, 'PluginGeneratedSerialDescriptor', VOID, VOID, [SerialDescriptor, CachedNames]);
  initMetadataForClass(InlineClassDescriptor, 'InlineClassDescriptor', VOID, PluginGeneratedSerialDescriptor);
  function typeParametersSerializers() {
    return get_EMPTY_SERIALIZER_ARRAY();
  }
  initMetadataForInterface(GeneratedSerializer, 'GeneratedSerializer', VOID, VOID, [KSerializer]);
  initMetadataForClass(InlinePrimitiveDescriptor$1, VOID, VOID, VOID, [GeneratedSerializer]);
  initMetadataForObject(NoOpEncoder, 'NoOpEncoder', VOID, AbstractEncoder);
  initMetadataForObject(NothingSerialDescriptor, 'NothingSerialDescriptor', VOID, VOID, [SerialDescriptor]);
  initMetadataForClass(NullableSerializer, 'NullableSerializer', VOID, VOID, [KSerializer]);
  initMetadataForClass(SerialDescriptorForNullable, 'SerialDescriptorForNullable', VOID, VOID, [SerialDescriptor, CachedNames]);
  initMetadataForClass(ObjectSerializer, 'ObjectSerializer', VOID, VOID, [KSerializer]);
  initMetadataForInterface(SerializerFactory, 'SerializerFactory');
  initMetadataForObject(CharArraySerializer_0, 'CharArraySerializer', VOID, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  initMetadataForObject(DoubleArraySerializer_0, 'DoubleArraySerializer', VOID, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  initMetadataForObject(FloatArraySerializer_0, 'FloatArraySerializer', VOID, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  initMetadataForObject(LongArraySerializer_0, 'LongArraySerializer', VOID, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  initMetadataForObject(ULongArraySerializer_0, 'ULongArraySerializer', VOID, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  initMetadataForObject(IntArraySerializer_0, 'IntArraySerializer', VOID, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  initMetadataForObject(UIntArraySerializer_0, 'UIntArraySerializer', VOID, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  initMetadataForObject(ShortArraySerializer_0, 'ShortArraySerializer', VOID, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  initMetadataForObject(UShortArraySerializer_0, 'UShortArraySerializer', VOID, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  initMetadataForObject(ByteArraySerializer_0, 'ByteArraySerializer', VOID, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  initMetadataForObject(UByteArraySerializer_0, 'UByteArraySerializer', VOID, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  initMetadataForObject(BooleanArraySerializer_0, 'BooleanArraySerializer', VOID, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  initMetadataForClass(CharArrayBuilder, 'CharArrayBuilder', VOID, PrimitiveArrayBuilder);
  initMetadataForClass(DoubleArrayBuilder, 'DoubleArrayBuilder', VOID, PrimitiveArrayBuilder);
  initMetadataForClass(FloatArrayBuilder, 'FloatArrayBuilder', VOID, PrimitiveArrayBuilder);
  initMetadataForClass(LongArrayBuilder, 'LongArrayBuilder', VOID, PrimitiveArrayBuilder);
  initMetadataForClass(ULongArrayBuilder, 'ULongArrayBuilder', VOID, PrimitiveArrayBuilder);
  initMetadataForClass(IntArrayBuilder, 'IntArrayBuilder', VOID, PrimitiveArrayBuilder);
  initMetadataForClass(UIntArrayBuilder, 'UIntArrayBuilder', VOID, PrimitiveArrayBuilder);
  initMetadataForClass(ShortArrayBuilder, 'ShortArrayBuilder', VOID, PrimitiveArrayBuilder);
  initMetadataForClass(UShortArrayBuilder, 'UShortArrayBuilder', VOID, PrimitiveArrayBuilder);
  initMetadataForClass(ByteArrayBuilder, 'ByteArrayBuilder', VOID, PrimitiveArrayBuilder);
  initMetadataForClass(UByteArrayBuilder, 'UByteArrayBuilder', VOID, PrimitiveArrayBuilder);
  initMetadataForClass(BooleanArrayBuilder, 'BooleanArrayBuilder', VOID, PrimitiveArrayBuilder);
  initMetadataForObject(StringSerializer, 'StringSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(CharSerializer, 'CharSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(DoubleSerializer, 'DoubleSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(FloatSerializer, 'FloatSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(LongSerializer, 'LongSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(IntSerializer, 'IntSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(ShortSerializer, 'ShortSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(ByteSerializer, 'ByteSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(BooleanSerializer, 'BooleanSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(UnitSerializer, 'UnitSerializer', VOID, VOID, [KSerializer]);
  initMetadataForClass(PrimitiveSerialDescriptor_0, 'PrimitiveSerialDescriptor', VOID, VOID, [SerialDescriptor]);
  initMetadataForClass(TaggedDecoder, 'TaggedDecoder', VOID, VOID, [Decoder, CompositeDecoder]);
  initMetadataForClass(NamedValueDecoder, 'NamedValueDecoder', VOID, TaggedDecoder);
  initMetadataForClass(MapEntry, 'MapEntry', VOID, VOID, [Entry]);
  initMetadataForClass(KeyValueSerializer, 'KeyValueSerializer', VOID, VOID, [KSerializer]);
  initMetadataForClass(MapEntrySerializer_0, 'MapEntrySerializer', VOID, KeyValueSerializer);
  initMetadataForClass(PairSerializer_0, 'PairSerializer', VOID, KeyValueSerializer);
  initMetadataForClass(TripleSerializer_0, 'TripleSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(ULongSerializer, 'ULongSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(UIntSerializer, 'UIntSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(UShortSerializer, 'UShortSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(UByteSerializer, 'UByteSerializer', VOID, VOID, [KSerializer]);
  initMetadataForClass(SerializersModule, 'SerializersModule');
  initMetadataForClass(SerialModuleImpl, 'SerialModuleImpl', VOID, SerializersModule);
  initMetadataForClass(ContextualProvider, 'ContextualProvider');
  initMetadataForClass(Argless, 'Argless', VOID, ContextualProvider);
  initMetadataForClass(WithTypeArguments, 'WithTypeArguments', VOID, ContextualProvider);
  function contextual(kClass, serializer) {
    return this.b12(kClass, SerializersModuleCollector$contextual$lambda(serializer));
  }
  initMetadataForInterface(SerializersModuleCollector, 'SerializersModuleCollector');
  initMetadataForClass(SerializableWith, 'SerializableWith', VOID, VOID, VOID, VOID, 0);
  initMetadataForClass(createCache$1);
  initMetadataForClass(createParametrizedCache$1);
  //endregion
  function KSerializer() {
  }
  function SerializationStrategy() {
  }
  function DeserializationStrategy() {
  }
  function PolymorphicSerializer$descriptor$delegate$lambda$lambda(this$0) {
    return function ($this$buildSerialDescriptor) {
      $this$buildSerialDescriptor.mj('type', serializer_0(StringCompanionObject_instance).bj());
      $this$buildSerialDescriptor.mj('value', buildSerialDescriptor('kotlinx.serialization.Polymorphic<' + this$0.nj_1.v9() + '>', CONTEXTUAL_getInstance(), []));
      $this$buildSerialDescriptor.gj_1 = this$0.oj_1;
      return Unit_instance;
    };
  }
  function PolymorphicSerializer$descriptor$delegate$lambda(this$0) {
    return function () {
      var tmp = OPEN_getInstance();
      return withContext(buildSerialDescriptor('kotlinx.serialization.Polymorphic', tmp, [], PolymorphicSerializer$descriptor$delegate$lambda$lambda(this$0)), this$0.nj_1);
    };
  }
  function PolymorphicSerializer(baseClass) {
    AbstractPolymorphicSerializer.call(this);
    this.nj_1 = baseClass;
    this.oj_1 = emptyList();
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.pj_1 = lazy(tmp_0, PolymorphicSerializer$descriptor$delegate$lambda(this));
  }
  protoOf(PolymorphicSerializer).qj = function () {
    return this.nj_1;
  };
  protoOf(PolymorphicSerializer).bj = function () {
    var tmp0 = this.pj_1;
    // Inline function 'kotlin.getValue' call
    descriptor$factory();
    return tmp0.r1();
  };
  protoOf(PolymorphicSerializer).toString = function () {
    return 'kotlinx.serialization.PolymorphicSerializer(baseClass: ' + toString(this.nj_1) + ')';
  };
  function findPolymorphicSerializer(_this__u8e3s4, encoder, value) {
    var tmp0_elvis_lhs = _this__u8e3s4.tj(encoder, value);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throwSubtypeNotRegistered(getKClassFromExpression(value), _this__u8e3s4.qj());
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function findPolymorphicSerializer_0(_this__u8e3s4, decoder, klassName) {
    var tmp0_elvis_lhs = _this__u8e3s4.sj(decoder, klassName);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throwSubtypeNotRegistered_0(klassName, _this__u8e3s4.qj());
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function descriptor$factory() {
    return getPropertyCallableRef('descriptor', 1, KProperty1, function (receiver) {
      return receiver.bj();
    }, null);
  }
  function SealedClassSerializer_init_$Init$(serialName, baseClass, subclasses, subclassSerializers, classAnnotations, $this) {
    SealedClassSerializer.call($this, serialName, baseClass, subclasses, subclassSerializers);
    $this.vj_1 = asList(classAnnotations);
    return $this;
  }
  function SealedClassSerializer_init_$Create$(serialName, baseClass, subclasses, subclassSerializers, classAnnotations) {
    return SealedClassSerializer_init_$Init$(serialName, baseClass, subclasses, subclassSerializers, classAnnotations, objectCreate(protoOf(SealedClassSerializer)));
  }
  function SealedClassSerializer$descriptor$delegate$lambda$lambda$lambda(this$0) {
    return function ($this$buildSerialDescriptor) {
      // Inline function 'kotlin.collections.iterator' call
      var _iterator__ex2g4s = this$0.yj_1.x1().i();
      while (_iterator__ex2g4s.j()) {
        var element = _iterator__ex2g4s.k();
        // Inline function 'kotlinx.serialization.SealedClassSerializer.descriptor$delegate.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        // Inline function 'kotlin.collections.component1' call
        var name = element.q1();
        // Inline function 'kotlin.collections.component2' call
        var serializer = element.r1();
        $this$buildSerialDescriptor.mj(name, serializer.bj());
      }
      return Unit_instance;
    };
  }
  function SealedClassSerializer$descriptor$delegate$lambda$lambda(this$0) {
    return function ($this$buildSerialDescriptor) {
      $this$buildSerialDescriptor.mj('type', serializer_0(StringCompanionObject_instance).bj());
      var tmp = 'kotlinx.serialization.Sealed<' + this$0.uj_1.v9() + '>';
      var tmp_0 = CONTEXTUAL_getInstance();
      var elementDescriptor = buildSerialDescriptor(tmp, tmp_0, [], SealedClassSerializer$descriptor$delegate$lambda$lambda$lambda(this$0));
      $this$buildSerialDescriptor.mj('value', elementDescriptor);
      $this$buildSerialDescriptor.gj_1 = this$0.vj_1;
      return Unit_instance;
    };
  }
  function SealedClassSerializer$descriptor$delegate$lambda($serialName, this$0) {
    return function () {
      var tmp = SEALED_getInstance();
      return buildSerialDescriptor($serialName, tmp, [], SealedClassSerializer$descriptor$delegate$lambda$lambda(this$0));
    };
  }
  function SealedClassSerializer$$inlined$groupingBy$1($this) {
    this.zj_1 = $this;
  }
  protoOf(SealedClassSerializer$$inlined$groupingBy$1).ak = function () {
    return this.zj_1.i();
  };
  protoOf(SealedClassSerializer$$inlined$groupingBy$1).bk = function (element) {
    // Inline function 'kotlinx.serialization.SealedClassSerializer.<anonymous>' call
    return element.r1().bj().ck();
  };
  protoOf(SealedClassSerializer$$inlined$groupingBy$1).dk = function (element) {
    return this.bk((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  function SealedClassSerializer(serialName, baseClass, subclasses, subclassSerializers) {
    AbstractPolymorphicSerializer.call(this);
    this.uj_1 = baseClass;
    this.vj_1 = emptyList();
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.wj_1 = lazy(tmp_0, SealedClassSerializer$descriptor$delegate$lambda(serialName, this));
    if (!(subclasses.length === subclassSerializers.length)) {
      throw IllegalArgumentException_init_$Create$('All subclasses of sealed class ' + this.uj_1.v9() + ' should be marked @Serializable');
    }
    this.xj_1 = toMap(zip(subclasses, subclassSerializers));
    var tmp_1 = this;
    // Inline function 'kotlin.collections.groupingBy' call
    var this_0 = this.xj_1.x1();
    // Inline function 'kotlin.collections.aggregate' call
    var tmp0 = new SealedClassSerializer$$inlined$groupingBy$1(this_0);
    // Inline function 'kotlin.collections.mutableMapOf' call
    // Inline function 'kotlin.collections.aggregateTo' call
    var destination = LinkedHashMap_init_$Create$();
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s = tmp0.ak();
    while (_iterator__ex2g4s.j()) {
      var e = _iterator__ex2g4s.k();
      var key = tmp0.dk(e);
      var accumulator = destination.u1(key);
      // Inline function 'kotlinx.serialization.SealedClassSerializer.<anonymous>' call
      accumulator == null && !destination.s1(key);
      if (!(accumulator == null)) {
        // Inline function 'kotlin.error' call
        var message = "Multiple sealed subclasses of '" + toString(this.uj_1) + "' have the same serial name '" + key + "':" + (" '" + toString(accumulator.q1()) + "', '" + toString(e.q1()) + "'");
        throw IllegalStateException_init_$Create$(toString(message));
      }
      // Inline function 'kotlin.collections.set' call
      destination.d2(key, e);
    }
    // Inline function 'kotlin.collections.mapValues' call
    // Inline function 'kotlin.collections.mapValuesTo' call
    var destination_0 = LinkedHashMap_init_$Create$_0(mapCapacity(destination.l()));
    // Inline function 'kotlin.collections.associateByTo' call
    var _iterator__ex2g4s_0 = destination.x1().i();
    while (_iterator__ex2g4s_0.j()) {
      var element = _iterator__ex2g4s_0.k();
      // Inline function 'kotlin.collections.mapValuesTo.<anonymous>' call
      var tmp_2 = element.q1();
      // Inline function 'kotlinx.serialization.SealedClassSerializer.<anonymous>' call
      var tmp$ret$7 = element.r1().r1();
      destination_0.d2(tmp_2, tmp$ret$7);
    }
    tmp_1.yj_1 = destination_0;
  }
  protoOf(SealedClassSerializer).qj = function () {
    return this.uj_1;
  };
  protoOf(SealedClassSerializer).bj = function () {
    var tmp0 = this.wj_1;
    // Inline function 'kotlin.getValue' call
    descriptor$factory_0();
    return tmp0.r1();
  };
  protoOf(SealedClassSerializer).sj = function (decoder, klassName) {
    // Inline function 'kotlin.collections.get' call
    var this_0 = this.yj_1;
    var tmp0_elvis_lhs = (isInterface(this_0, KtMap) ? this_0 : THROW_CCE()).u1(klassName);
    return tmp0_elvis_lhs == null ? protoOf(AbstractPolymorphicSerializer).sj.call(this, decoder, klassName) : tmp0_elvis_lhs;
  };
  protoOf(SealedClassSerializer).tj = function (encoder, value) {
    var tmp0_elvis_lhs = this.xj_1.u1(getKClassFromExpression(value));
    var tmp1_safe_receiver = tmp0_elvis_lhs == null ? protoOf(AbstractPolymorphicSerializer).tj.call(this, encoder, value) : tmp0_elvis_lhs;
    var tmp;
    if (tmp1_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlinx.serialization.internal.cast' call
      tmp = isInterface(tmp1_safe_receiver, SerializationStrategy) ? tmp1_safe_receiver : THROW_CCE();
    }
    return tmp;
  };
  function descriptor$factory_0() {
    return getPropertyCallableRef('descriptor', 1, KProperty1, function (receiver) {
      return receiver.bj();
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
    MissingFieldException.call($this, missingFields, missingFields.l() === 1 ? "Field '" + missingFields.n(0) + "' is required for type with serial name '" + serialName + "', but it was missing" : 'Fields ' + toString(missingFields) + " are required for type with serial name '" + serialName + "', but they were missing", null);
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
    this.ek_1 = missingFields;
  }
  function serializerOrNull(_this__u8e3s4) {
    var tmp0_elvis_lhs = compiledSerializerImpl(_this__u8e3s4);
    return tmp0_elvis_lhs == null ? builtinSerializerOrNull(_this__u8e3s4) : tmp0_elvis_lhs;
  }
  function serializersForParameters(_this__u8e3s4, typeArguments, failOnMissingTypeArgSerializer) {
    var tmp;
    if (failOnMissingTypeArgSerializer) {
      // Inline function 'kotlin.collections.map' call
      // Inline function 'kotlin.collections.mapTo' call
      var destination = ArrayList_init_$Create$(collectionSizeOrDefault(typeArguments, 10));
      var _iterator__ex2g4s = typeArguments.i();
      while (_iterator__ex2g4s.j()) {
        var item = _iterator__ex2g4s.k();
        // Inline function 'kotlinx.serialization.serializersForParameters.<anonymous>' call
        var tmp$ret$0 = serializer(_this__u8e3s4, item);
        destination.d(tmp$ret$0);
      }
      tmp = destination;
    } else {
      // Inline function 'kotlin.collections.map' call
      // Inline function 'kotlin.collections.mapTo' call
      var destination_0 = ArrayList_init_$Create$(collectionSizeOrDefault(typeArguments, 10));
      var _iterator__ex2g4s_0 = typeArguments.i();
      while (_iterator__ex2g4s_0.j()) {
        var item_0 = _iterator__ex2g4s_0.k();
        // Inline function 'kotlinx.serialization.serializersForParameters.<anonymous>' call
        var tmp0_elvis_lhs = serializerOrNull_0(_this__u8e3s4, item_0);
        var tmp_0;
        if (tmp0_elvis_lhs == null) {
          return null;
        } else {
          tmp_0 = tmp0_elvis_lhs;
        }
        var tmp$ret$3 = tmp_0;
        destination_0.d(tmp$ret$3);
      }
      tmp = destination_0;
    }
    var serializers = tmp;
    return serializers;
  }
  function parametrizedSerializerOrNull(_this__u8e3s4, serializers, elementClassifierIfArray) {
    var tmp0_elvis_lhs = builtinParametrizedSerializer(_this__u8e3s4, serializers, elementClassifierIfArray);
    return tmp0_elvis_lhs == null ? compiledParametrizedSerializer(_this__u8e3s4, serializers) : tmp0_elvis_lhs;
  }
  function serializer(_this__u8e3s4, type) {
    var tmp0_elvis_lhs = serializerByKTypeImpl(_this__u8e3s4, type, true);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      platformSpecificSerializerNotRegistered(kclass(type));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function serializerOrNull_0(_this__u8e3s4, type) {
    return serializerByKTypeImpl(_this__u8e3s4, type, false);
  }
  function builtinParametrizedSerializer(_this__u8e3s4, serializers, elementClassifierIfArray) {
    var tmp;
    if (_this__u8e3s4.equals(getKClass(Collection)) || _this__u8e3s4.equals(getKClass(KtList)) || (_this__u8e3s4.equals(getKClass(KtMutableList)) || _this__u8e3s4.equals(getKClass(ArrayList)))) {
      tmp = new ArrayListSerializer(serializers.n(0));
    } else if (_this__u8e3s4.equals(getKClass(HashSet))) {
      tmp = new HashSetSerializer(serializers.n(0));
    } else if (_this__u8e3s4.equals(getKClass(KtSet)) || (_this__u8e3s4.equals(getKClass(KtMutableSet)) || _this__u8e3s4.equals(getKClass(LinkedHashSet)))) {
      tmp = new LinkedHashSetSerializer(serializers.n(0));
    } else if (_this__u8e3s4.equals(getKClass(HashMap))) {
      tmp = new HashMapSerializer(serializers.n(0), serializers.n(1));
    } else if (_this__u8e3s4.equals(getKClass(KtMap)) || (_this__u8e3s4.equals(getKClass(KtMutableMap)) || _this__u8e3s4.equals(getKClass(LinkedHashMap)))) {
      tmp = new LinkedHashMapSerializer(serializers.n(0), serializers.n(1));
    } else if (_this__u8e3s4.equals(getKClass(Entry))) {
      tmp = MapEntrySerializer(serializers.n(0), serializers.n(1));
    } else if (_this__u8e3s4.equals(getKClass(Pair))) {
      tmp = PairSerializer(serializers.n(0), serializers.n(1));
    } else if (_this__u8e3s4.equals(getKClass(Triple))) {
      tmp = TripleSerializer(serializers.n(0), serializers.n(1), serializers.n(2));
    } else {
      var tmp_0;
      if (isReferenceArray(_this__u8e3s4)) {
        var tmp_1 = elementClassifierIfArray();
        tmp_0 = ArraySerializer((!(tmp_1 == null) ? isInterface(tmp_1, KClass) : false) ? tmp_1 : THROW_CCE(), serializers.n(0));
      } else {
        tmp_0 = null;
      }
      tmp = tmp_0;
    }
    return tmp;
  }
  function compiledParametrizedSerializer(_this__u8e3s4, serializers) {
    // Inline function 'kotlin.collections.toTypedArray' call
    var tmp$ret$0 = copyToArray(serializers);
    return constructSerializerForGivenTypeArgs(_this__u8e3s4, tmp$ret$0.slice());
  }
  function serializerByKTypeImpl(_this__u8e3s4, type, failOnMissingTypeArgSerializer) {
    var rootClass = kclass(type);
    var isNullable = type.la();
    // Inline function 'kotlin.collections.map' call
    var this_0 = type.ka();
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
    var _iterator__ex2g4s = this_0.i();
    while (_iterator__ex2g4s.j()) {
      var item = _iterator__ex2g4s.k();
      // Inline function 'kotlinx.serialization.serializerByKTypeImpl.stub_for_inlining' call
      var tmp$ret$0 = typeOrThrow(item);
      destination.d(tmp$ret$0);
    }
    var typeArguments = destination;
    var tmp;
    if (typeArguments.m()) {
      var tmp_0;
      if (isInterface_0(rootClass) && !(_this__u8e3s4.gk(rootClass) == null)) {
        tmp_0 = null;
      } else {
        tmp_0 = findCachedSerializer(rootClass, isNullable);
      }
      tmp = tmp_0;
    } else {
      var tmp_1;
      if (_this__u8e3s4.fk()) {
        tmp_1 = null;
      } else {
        // Inline function 'kotlin.Result.getOrNull' call
        var this_1 = findParametrizedCachedSerializer(rootClass, typeArguments, isNullable);
        var tmp_2;
        if (_Result___get_isFailure__impl__jpiriv(this_1)) {
          tmp_2 = null;
        } else {
          var tmp_3 = _Result___get_value__impl__bjfvqg(this_1);
          tmp_2 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
        }
        tmp_1 = tmp_2;
      }
      tmp = tmp_1;
    }
    var cachedSerializer = tmp;
    if (!(cachedSerializer == null))
      return cachedSerializer;
    var tmp_4;
    if (typeArguments.m()) {
      var tmp0_elvis_lhs = serializerOrNull(rootClass);
      var tmp1_elvis_lhs = tmp0_elvis_lhs == null ? _this__u8e3s4.gk(rootClass) : tmp0_elvis_lhs;
      var tmp_5;
      if (tmp1_elvis_lhs == null) {
        // Inline function 'kotlinx.serialization.polymorphicIfInterface' call
        tmp_5 = isInterface_0(rootClass) ? new PolymorphicSerializer(rootClass) : null;
      } else {
        tmp_5 = tmp1_elvis_lhs;
      }
      tmp_4 = tmp_5;
    } else {
      var tmp2_elvis_lhs = serializersForParameters(_this__u8e3s4, typeArguments, failOnMissingTypeArgSerializer);
      var tmp_6;
      if (tmp2_elvis_lhs == null) {
        return null;
      } else {
        tmp_6 = tmp2_elvis_lhs;
      }
      var serializers = tmp_6;
      var tmp3_elvis_lhs = parametrizedSerializerOrNull(rootClass, serializers, serializerByKTypeImpl$lambda(typeArguments));
      var tmp4_elvis_lhs = tmp3_elvis_lhs == null ? _this__u8e3s4.hk(rootClass, serializers) : tmp3_elvis_lhs;
      var tmp_7;
      if (tmp4_elvis_lhs == null) {
        // Inline function 'kotlinx.serialization.polymorphicIfInterface' call
        tmp_7 = isInterface_0(rootClass) ? new PolymorphicSerializer(rootClass) : null;
      } else {
        tmp_7 = tmp4_elvis_lhs;
      }
      tmp_4 = tmp_7;
    }
    var contextualSerializer = tmp_4;
    var tmp_8;
    if (contextualSerializer == null) {
      tmp_8 = null;
    } else {
      // Inline function 'kotlinx.serialization.internal.cast' call
      tmp_8 = isInterface(contextualSerializer, KSerializer) ? contextualSerializer : THROW_CCE();
    }
    var tmp6_safe_receiver = tmp_8;
    return tmp6_safe_receiver == null ? null : nullable(tmp6_safe_receiver, isNullable);
  }
  function nullable(_this__u8e3s4, shouldBeNullable) {
    if (shouldBeNullable)
      return get_nullable(_this__u8e3s4);
    return isInterface(_this__u8e3s4, KSerializer) ? _this__u8e3s4 : THROW_CCE();
  }
  function serializerByKTypeImpl$lambda($typeArguments) {
    return function () {
      return $typeArguments.n(0).ja();
    };
  }
  function get_SERIALIZERS_CACHE() {
    _init_properties_SerializersCache_kt__hgwi2p();
    return SERIALIZERS_CACHE;
  }
  var SERIALIZERS_CACHE;
  function get_SERIALIZERS_CACHE_NULLABLE() {
    _init_properties_SerializersCache_kt__hgwi2p();
    return SERIALIZERS_CACHE_NULLABLE;
  }
  var SERIALIZERS_CACHE_NULLABLE;
  function get_PARAMETRIZED_SERIALIZERS_CACHE() {
    _init_properties_SerializersCache_kt__hgwi2p();
    return PARAMETRIZED_SERIALIZERS_CACHE;
  }
  var PARAMETRIZED_SERIALIZERS_CACHE;
  function get_PARAMETRIZED_SERIALIZERS_CACHE_NULLABLE() {
    _init_properties_SerializersCache_kt__hgwi2p();
    return PARAMETRIZED_SERIALIZERS_CACHE_NULLABLE;
  }
  var PARAMETRIZED_SERIALIZERS_CACHE_NULLABLE;
  function findCachedSerializer(clazz, isNullable) {
    _init_properties_SerializersCache_kt__hgwi2p();
    var tmp;
    if (!isNullable) {
      var tmp0_safe_receiver = get_SERIALIZERS_CACHE().ik(clazz);
      var tmp_0;
      if (tmp0_safe_receiver == null) {
        tmp_0 = null;
      } else {
        // Inline function 'kotlinx.serialization.internal.cast' call
        tmp_0 = isInterface(tmp0_safe_receiver, KSerializer) ? tmp0_safe_receiver : THROW_CCE();
      }
      tmp = tmp_0;
    } else {
      tmp = get_SERIALIZERS_CACHE_NULLABLE().ik(clazz);
    }
    return tmp;
  }
  function findParametrizedCachedSerializer(clazz, types, isNullable) {
    _init_properties_SerializersCache_kt__hgwi2p();
    var tmp;
    if (!isNullable) {
      var tmp_0 = get_PARAMETRIZED_SERIALIZERS_CACHE().jk(clazz, types);
      tmp = new Result(tmp_0) instanceof Result ? tmp_0 : THROW_CCE();
    } else {
      tmp = get_PARAMETRIZED_SERIALIZERS_CACHE_NULLABLE().jk(clazz, types);
    }
    return tmp;
  }
  function SERIALIZERS_CACHE$lambda(it) {
    _init_properties_SerializersCache_kt__hgwi2p();
    var tmp0_elvis_lhs = serializerOrNull(it);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlinx.serialization.polymorphicIfInterface' call
      tmp = isInterface_0(it) ? new PolymorphicSerializer(it) : null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function SERIALIZERS_CACHE_NULLABLE$lambda(it) {
    _init_properties_SerializersCache_kt__hgwi2p();
    var tmp0_elvis_lhs = serializerOrNull(it);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlinx.serialization.polymorphicIfInterface' call
      tmp = isInterface_0(it) ? new PolymorphicSerializer(it) : null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var tmp1_safe_receiver = tmp;
    var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : get_nullable(tmp1_safe_receiver);
    var tmp_0;
    if (tmp2_safe_receiver == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlinx.serialization.internal.cast' call
      tmp_0 = isInterface(tmp2_safe_receiver, KSerializer) ? tmp2_safe_receiver : THROW_CCE();
    }
    return tmp_0;
  }
  function PARAMETRIZED_SERIALIZERS_CACHE$lambda(clazz, types) {
    _init_properties_SerializersCache_kt__hgwi2p();
    var serializers = ensureNotNull(serializersForParameters(EmptySerializersModule_0(), types, true));
    return parametrizedSerializerOrNull(clazz, serializers, PARAMETRIZED_SERIALIZERS_CACHE$lambda$lambda(types));
  }
  function PARAMETRIZED_SERIALIZERS_CACHE$lambda$lambda($types) {
    return function () {
      return $types.n(0).ja();
    };
  }
  function PARAMETRIZED_SERIALIZERS_CACHE_NULLABLE$lambda(clazz, types) {
    _init_properties_SerializersCache_kt__hgwi2p();
    var serializers = ensureNotNull(serializersForParameters(EmptySerializersModule_0(), types, true));
    var tmp0_safe_receiver = parametrizedSerializerOrNull(clazz, serializers, PARAMETRIZED_SERIALIZERS_CACHE_NULLABLE$lambda$lambda(types));
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : get_nullable(tmp0_safe_receiver);
    var tmp;
    if (tmp1_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlinx.serialization.internal.cast' call
      tmp = isInterface(tmp1_safe_receiver, KSerializer) ? tmp1_safe_receiver : THROW_CCE();
    }
    return tmp;
  }
  function PARAMETRIZED_SERIALIZERS_CACHE_NULLABLE$lambda$lambda($types) {
    return function () {
      return $types.n(0).ja();
    };
  }
  var properties_initialized_SerializersCache_kt_q8kf25;
  function _init_properties_SerializersCache_kt__hgwi2p() {
    if (!properties_initialized_SerializersCache_kt_q8kf25) {
      properties_initialized_SerializersCache_kt_q8kf25 = true;
      SERIALIZERS_CACHE = createCache(SERIALIZERS_CACHE$lambda);
      SERIALIZERS_CACHE_NULLABLE = createCache(SERIALIZERS_CACHE_NULLABLE$lambda);
      PARAMETRIZED_SERIALIZERS_CACHE = createParametrizedCache(PARAMETRIZED_SERIALIZERS_CACHE$lambda);
      PARAMETRIZED_SERIALIZERS_CACHE_NULLABLE = createParametrizedCache(PARAMETRIZED_SERIALIZERS_CACHE_NULLABLE$lambda);
    }
  }
  function get_nullable(_this__u8e3s4) {
    var tmp;
    if (_this__u8e3s4.bj().kk()) {
      tmp = isInterface(_this__u8e3s4, KSerializer) ? _this__u8e3s4 : THROW_CCE();
    } else {
      tmp = new NullableSerializer(_this__u8e3s4);
    }
    return tmp;
  }
  function serializer_0(_this__u8e3s4) {
    return StringSerializer_getInstance();
  }
  function serializer_1(_this__u8e3s4) {
    return CharSerializer_getInstance();
  }
  function CharArraySerializer() {
    return CharArraySerializer_getInstance();
  }
  function serializer_2(_this__u8e3s4) {
    return DoubleSerializer_getInstance();
  }
  function DoubleArraySerializer() {
    return DoubleArraySerializer_getInstance();
  }
  function serializer_3(_this__u8e3s4) {
    return FloatSerializer_getInstance();
  }
  function FloatArraySerializer() {
    return FloatArraySerializer_getInstance();
  }
  function serializer_4(_this__u8e3s4) {
    return LongSerializer_getInstance();
  }
  function LongArraySerializer() {
    return LongArraySerializer_getInstance();
  }
  function serializer_5(_this__u8e3s4) {
    return ULongSerializer_getInstance();
  }
  function ULongArraySerializer() {
    return ULongArraySerializer_getInstance();
  }
  function serializer_6(_this__u8e3s4) {
    return IntSerializer_getInstance();
  }
  function IntArraySerializer() {
    return IntArraySerializer_getInstance();
  }
  function serializer_7(_this__u8e3s4) {
    return UIntSerializer_getInstance();
  }
  function UIntArraySerializer() {
    return UIntArraySerializer_getInstance();
  }
  function serializer_8(_this__u8e3s4) {
    return ShortSerializer_getInstance();
  }
  function ShortArraySerializer() {
    return ShortArraySerializer_getInstance();
  }
  function serializer_9(_this__u8e3s4) {
    return UShortSerializer_getInstance();
  }
  function UShortArraySerializer() {
    return UShortArraySerializer_getInstance();
  }
  function serializer_10(_this__u8e3s4) {
    return ByteSerializer_getInstance();
  }
  function ByteArraySerializer() {
    return ByteArraySerializer_getInstance();
  }
  function serializer_11(_this__u8e3s4) {
    return UByteSerializer_getInstance();
  }
  function UByteArraySerializer() {
    return UByteArraySerializer_getInstance();
  }
  function serializer_12(_this__u8e3s4) {
    return BooleanSerializer_getInstance();
  }
  function BooleanArraySerializer() {
    return BooleanArraySerializer_getInstance();
  }
  function serializer_13(_this__u8e3s4) {
    return UnitSerializer_getInstance();
  }
  function NothingSerializer() {
    return NothingSerializer_getInstance();
  }
  function serializer_14(_this__u8e3s4) {
    return DurationSerializer_getInstance();
  }
  function serializer_15(_this__u8e3s4) {
    return UuidSerializer_getInstance();
  }
  function MapEntrySerializer(keySerializer, valueSerializer) {
    return new MapEntrySerializer_0(keySerializer, valueSerializer);
  }
  function PairSerializer(keySerializer, valueSerializer) {
    return new PairSerializer_0(keySerializer, valueSerializer);
  }
  function TripleSerializer(aSerializer, bSerializer, cSerializer) {
    return new TripleSerializer_0(aSerializer, bSerializer, cSerializer);
  }
  function ArraySerializer(kClass, elementSerializer) {
    return new ReferenceArraySerializer(kClass, elementSerializer);
  }
  function MapSerializer(keySerializer, valueSerializer) {
    return new LinkedHashMapSerializer(keySerializer, valueSerializer);
  }
  function ListSerializer(elementSerializer) {
    return new ArrayListSerializer(elementSerializer);
  }
  function withContext(_this__u8e3s4, context) {
    return new ContextDescriptor(_this__u8e3s4, context);
  }
  function ContextDescriptor(original, kClass) {
    this.lk_1 = original;
    this.mk_1 = kClass;
    this.nk_1 = this.lk_1.ck() + '<' + this.mk_1.v9() + '>';
  }
  protoOf(ContextDescriptor).ck = function () {
    return this.nk_1;
  };
  protoOf(ContextDescriptor).equals = function (other) {
    var tmp0_elvis_lhs = other instanceof ContextDescriptor ? other : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var another = tmp;
    return equals(this.lk_1, another.lk_1) && another.mk_1.equals(this.mk_1);
  };
  protoOf(ContextDescriptor).hashCode = function () {
    var result = this.mk_1.hashCode();
    result = imul(31, result) + getStringHashCode(this.nk_1) | 0;
    return result;
  };
  protoOf(ContextDescriptor).toString = function () {
    return 'ContextDescriptor(kClass: ' + toString(this.mk_1) + ', original: ' + toString(this.lk_1) + ')';
  };
  protoOf(ContextDescriptor).ok = function () {
    return this.lk_1.ok();
  };
  protoOf(ContextDescriptor).kk = function () {
    return this.lk_1.kk();
  };
  protoOf(ContextDescriptor).pk = function () {
    return this.lk_1.pk();
  };
  protoOf(ContextDescriptor).qk = function () {
    return this.lk_1.qk();
  };
  protoOf(ContextDescriptor).rk = function () {
    return this.lk_1.rk();
  };
  protoOf(ContextDescriptor).sk = function (index) {
    return this.lk_1.sk(index);
  };
  protoOf(ContextDescriptor).tk = function (name) {
    return this.lk_1.tk(name);
  };
  protoOf(ContextDescriptor).uk = function (index) {
    return this.lk_1.uk(index);
  };
  protoOf(ContextDescriptor).vk = function (index) {
    return this.lk_1.vk(index);
  };
  protoOf(ContextDescriptor).wk = function (index) {
    return this.lk_1.wk(index);
  };
  function getContextualDescriptor(_this__u8e3s4, descriptor) {
    var tmp0_safe_receiver = get_capturedKClass(descriptor);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlinx.serialization.descriptors.getContextualDescriptor.<anonymous>' call
      var tmp0_safe_receiver_0 = _this__u8e3s4.gk(tmp0_safe_receiver);
      tmp = tmp0_safe_receiver_0 == null ? null : tmp0_safe_receiver_0.bj();
    }
    return tmp;
  }
  function get_capturedKClass(_this__u8e3s4) {
    var tmp;
    if (_this__u8e3s4 instanceof ContextDescriptor) {
      tmp = _this__u8e3s4.mk_1;
    } else {
      if (_this__u8e3s4 instanceof SerialDescriptorForNullable) {
        tmp = get_capturedKClass(_this__u8e3s4.xk_1);
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
    this.bl_1 = $this_elementDescriptors;
    this.al_1 = $this_elementDescriptors.qk();
  }
  protoOf(elementDescriptors$1).j = function () {
    return this.al_1 > 0;
  };
  protoOf(elementDescriptors$1).k = function () {
    var tmp = this.bl_1.qk();
    var _unary__edvuaz = this.al_1;
    this.al_1 = _unary__edvuaz - 1 | 0;
    return this.bl_1.vk(tmp - _unary__edvuaz | 0);
  };
  function elementDescriptors$$inlined$Iterable$1($this_elementDescriptors) {
    this.cl_1 = $this_elementDescriptors;
  }
  protoOf(elementDescriptors$$inlined$Iterable$1).i = function () {
    // Inline function 'kotlinx.serialization.descriptors.<get-elementDescriptors>.<anonymous>' call
    return new elementDescriptors$1(this.cl_1);
  };
  function buildSerialDescriptor(serialName, kind, typeParameters, builder) {
    var tmp;
    if (builder === VOID) {
      tmp = buildSerialDescriptor$lambda;
    } else {
      tmp = builder;
    }
    builder = tmp;
    // Inline function 'kotlin.text.isNotBlank' call
    // Inline function 'kotlin.require' call
    if (!!isBlank(serialName)) {
      // Inline function 'kotlinx.serialization.descriptors.buildSerialDescriptor.<anonymous>' call
      var message = 'Blank serial names are prohibited';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    if (!!equals(kind, CLASS_getInstance())) {
      // Inline function 'kotlinx.serialization.descriptors.buildSerialDescriptor.<anonymous>' call
      var message_0 = "For StructureKind.CLASS please use 'buildClassSerialDescriptor' instead";
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    var sdBuilder = new ClassSerialDescriptorBuilder(serialName);
    builder(sdBuilder);
    return new SerialDescriptorImpl(serialName, kind, sdBuilder.hj_1.l(), toList(typeParameters), sdBuilder);
  }
  function ClassSerialDescriptorBuilder(serialName) {
    this.ej_1 = serialName;
    this.fj_1 = false;
    this.gj_1 = emptyList();
    this.hj_1 = ArrayList_init_$Create$_0();
    this.ij_1 = HashSet_init_$Create$();
    this.jj_1 = ArrayList_init_$Create$_0();
    this.kj_1 = ArrayList_init_$Create$_0();
    this.lj_1 = ArrayList_init_$Create$_0();
  }
  protoOf(ClassSerialDescriptorBuilder).dl = function (elementName, descriptor, annotations, isOptional) {
    // Inline function 'kotlin.require' call
    if (!this.ij_1.d(elementName)) {
      // Inline function 'kotlinx.serialization.descriptors.ClassSerialDescriptorBuilder.element.<anonymous>' call
      var message = "Element with name '" + elementName + "' is already registered in " + this.ej_1;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.collections.plusAssign' call
    this.hj_1.d(elementName);
    // Inline function 'kotlin.collections.plusAssign' call
    this.jj_1.d(descriptor);
    // Inline function 'kotlin.collections.plusAssign' call
    this.kj_1.d(annotations);
    // Inline function 'kotlin.collections.plusAssign' call
    this.lj_1.d(isOptional);
  };
  protoOf(ClassSerialDescriptorBuilder).mj = function (elementName, descriptor, annotations, isOptional, $super) {
    annotations = annotations === VOID ? emptyList() : annotations;
    isOptional = isOptional === VOID ? false : isOptional;
    var tmp;
    if ($super === VOID) {
      this.dl(elementName, descriptor, annotations, isOptional);
      tmp = Unit_instance;
    } else {
      tmp = $super.dl.call(this, elementName, descriptor, annotations, isOptional);
    }
    return tmp;
  };
  function _get__hashCode__tgwhef($this) {
    var tmp0 = $this.pl_1;
    // Inline function 'kotlin.getValue' call
    _hashCode$factory();
    return tmp0.r1();
  }
  function SerialDescriptorImpl$_hashCode$delegate$lambda(this$0) {
    return function () {
      return hashCodeImpl(this$0, this$0.ol_1);
    };
  }
  function SerialDescriptorImpl$toString$lambda(this$0) {
    return function (it) {
      return this$0.sk(it) + ': ' + this$0.vk(it).ck();
    };
  }
  function SerialDescriptorImpl(serialName, kind, elementsCount, typeParameters, builder) {
    this.el_1 = serialName;
    this.fl_1 = kind;
    this.gl_1 = elementsCount;
    this.hl_1 = builder.gj_1;
    this.il_1 = toHashSet(builder.hj_1);
    var tmp = this;
    // Inline function 'kotlin.collections.toTypedArray' call
    var this_0 = builder.hj_1;
    tmp.jl_1 = copyToArray(this_0);
    this.kl_1 = compactArray(builder.jj_1);
    var tmp_0 = this;
    // Inline function 'kotlin.collections.toTypedArray' call
    var this_1 = builder.kj_1;
    tmp_0.ll_1 = copyToArray(this_1);
    this.ml_1 = toBooleanArray(builder.lj_1);
    var tmp_1 = this;
    // Inline function 'kotlin.collections.map' call
    var this_2 = withIndex(this.jl_1);
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_2, 10));
    var _iterator__ex2g4s = this_2.i();
    while (_iterator__ex2g4s.j()) {
      var item = _iterator__ex2g4s.k();
      // Inline function 'kotlinx.serialization.descriptors.SerialDescriptorImpl.name2Index.<anonymous>' call
      var tmp$ret$2 = to(item.tc_1, item.sc_1);
      destination.d(tmp$ret$2);
    }
    tmp_1.nl_1 = toMap(destination);
    this.ol_1 = compactArray(typeParameters);
    var tmp_2 = this;
    tmp_2.pl_1 = lazy_0(SerialDescriptorImpl$_hashCode$delegate$lambda(this));
  }
  protoOf(SerialDescriptorImpl).ck = function () {
    return this.el_1;
  };
  protoOf(SerialDescriptorImpl).ok = function () {
    return this.fl_1;
  };
  protoOf(SerialDescriptorImpl).qk = function () {
    return this.gl_1;
  };
  protoOf(SerialDescriptorImpl).rk = function () {
    return this.hl_1;
  };
  protoOf(SerialDescriptorImpl).ql = function () {
    return this.il_1;
  };
  protoOf(SerialDescriptorImpl).sk = function (index) {
    return getChecked(this.jl_1, index);
  };
  protoOf(SerialDescriptorImpl).tk = function (name) {
    var tmp0_elvis_lhs = this.nl_1.u1(name);
    return tmp0_elvis_lhs == null ? -3 : tmp0_elvis_lhs;
  };
  protoOf(SerialDescriptorImpl).uk = function (index) {
    return getChecked(this.ll_1, index);
  };
  protoOf(SerialDescriptorImpl).vk = function (index) {
    return getChecked(this.kl_1, index);
  };
  protoOf(SerialDescriptorImpl).wk = function (index) {
    return getChecked_0(this.ml_1, index);
  };
  protoOf(SerialDescriptorImpl).equals = function (other) {
    var tmp$ret$0;
    $l$block_5: {
      // Inline function 'kotlinx.serialization.internal.equalsImpl' call
      if (this === other) {
        tmp$ret$0 = true;
        break $l$block_5;
      }
      if (!(other instanceof SerialDescriptorImpl)) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.ck() === other.ck())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      // Inline function 'kotlinx.serialization.descriptors.SerialDescriptorImpl.equals.<anonymous>' call
      if (!contentEquals(this.ol_1, other.ol_1)) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.qk() === other.qk())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var inductionVariable = 0;
      var last = this.qk();
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (!(this.vk(index).ck() === other.vk(index).ck())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
          if (!equals(this.vk(index).ok(), other.vk(index).ok())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
        }
         while (inductionVariable < last);
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  protoOf(SerialDescriptorImpl).hashCode = function () {
    return _get__hashCode__tgwhef(this);
  };
  protoOf(SerialDescriptorImpl).toString = function () {
    var tmp = until(0, this.gl_1);
    var tmp_0 = this.el_1 + '(';
    return joinToString(tmp, ', ', tmp_0, ')', VOID, VOID, SerialDescriptorImpl$toString$lambda(this));
  };
  function buildClassSerialDescriptor(serialName, typeParameters, builderAction) {
    var tmp;
    if (builderAction === VOID) {
      tmp = buildClassSerialDescriptor$lambda;
    } else {
      tmp = builderAction;
    }
    builderAction = tmp;
    // Inline function 'kotlin.text.isNotBlank' call
    // Inline function 'kotlin.require' call
    if (!!isBlank(serialName)) {
      // Inline function 'kotlinx.serialization.descriptors.buildClassSerialDescriptor.<anonymous>' call
      var message = 'Blank serial names are prohibited';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var sdBuilder = new ClassSerialDescriptorBuilder(serialName);
    builderAction(sdBuilder);
    return new SerialDescriptorImpl(serialName, CLASS_getInstance(), sdBuilder.hj_1.l(), toList(typeParameters), sdBuilder);
  }
  function PrimitiveSerialDescriptor(serialName, kind) {
    // Inline function 'kotlin.text.isNotBlank' call
    // Inline function 'kotlin.require' call
    if (!!isBlank(serialName)) {
      // Inline function 'kotlinx.serialization.descriptors.PrimitiveSerialDescriptor.<anonymous>' call
      var message = 'Blank serial names are prohibited';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return PrimitiveDescriptorSafe(serialName, kind);
  }
  function buildSerialDescriptor$lambda(_this__u8e3s4) {
    return Unit_instance;
  }
  function buildClassSerialDescriptor$lambda(_this__u8e3s4) {
    return Unit_instance;
  }
  function _hashCode$factory() {
    return getPropertyCallableRef('_hashCode', 1, KProperty1, function (receiver) {
      return _get__hashCode__tgwhef(receiver);
    }, null);
  }
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
    return ensureNotNull(getKClassFromExpression(this).v9());
  };
  protoOf(SerialKind).hashCode = function () {
    return getStringHashCode(this.toString());
  };
  function SEALED() {
    SEALED_instance = this;
    PolymorphicKind.call(this);
  }
  var SEALED_instance;
  function SEALED_getInstance() {
    if (SEALED_instance == null)
      new SEALED();
    return SEALED_instance;
  }
  function OPEN() {
    OPEN_instance = this;
    PolymorphicKind.call(this);
  }
  var OPEN_instance;
  function OPEN_getInstance() {
    if (OPEN_instance == null)
      new OPEN();
    return OPEN_instance;
  }
  function PolymorphicKind() {
    SerialKind.call(this);
  }
  function BOOLEAN() {
    BOOLEAN_instance = this;
    PrimitiveKind.call(this);
  }
  var BOOLEAN_instance;
  function BOOLEAN_getInstance() {
    if (BOOLEAN_instance == null)
      new BOOLEAN();
    return BOOLEAN_instance;
  }
  function BYTE() {
    BYTE_instance = this;
    PrimitiveKind.call(this);
  }
  var BYTE_instance;
  function BYTE_getInstance() {
    if (BYTE_instance == null)
      new BYTE();
    return BYTE_instance;
  }
  function CHAR() {
    CHAR_instance = this;
    PrimitiveKind.call(this);
  }
  var CHAR_instance;
  function CHAR_getInstance() {
    if (CHAR_instance == null)
      new CHAR();
    return CHAR_instance;
  }
  function SHORT() {
    SHORT_instance = this;
    PrimitiveKind.call(this);
  }
  var SHORT_instance;
  function SHORT_getInstance() {
    if (SHORT_instance == null)
      new SHORT();
    return SHORT_instance;
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
  function LONG() {
    LONG_instance = this;
    PrimitiveKind.call(this);
  }
  var LONG_instance;
  function LONG_getInstance() {
    if (LONG_instance == null)
      new LONG();
    return LONG_instance;
  }
  function FLOAT() {
    FLOAT_instance = this;
    PrimitiveKind.call(this);
  }
  var FLOAT_instance;
  function FLOAT_getInstance() {
    if (FLOAT_instance == null)
      new FLOAT();
    return FLOAT_instance;
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
  protoOf(AbstractDecoder).rl = function () {
    throw SerializationException_init_$Create$_0(toString(getKClassFromExpression(this)) + " can't retrieve untyped values");
  };
  protoOf(AbstractDecoder).sl = function () {
    return true;
  };
  protoOf(AbstractDecoder).tl = function () {
    return null;
  };
  protoOf(AbstractDecoder).ul = function () {
    var tmp = this.rl();
    return typeof tmp === 'boolean' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).vl = function () {
    var tmp = this.rl();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).wl = function () {
    var tmp = this.rl();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).xl = function () {
    var tmp = this.rl();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).yl = function () {
    var tmp = this.rl();
    return tmp instanceof Long ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).zl = function () {
    var tmp = this.rl();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).am = function () {
    var tmp = this.rl();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).bm = function () {
    var tmp = this.rl();
    return tmp instanceof Char ? tmp.a1_1 : THROW_CCE();
  };
  protoOf(AbstractDecoder).cm = function () {
    var tmp = this.rl();
    return typeof tmp === 'string' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).dm = function (descriptor) {
    return this;
  };
  protoOf(AbstractDecoder).em = function (deserializer, previousValue) {
    return this.fm(deserializer);
  };
  protoOf(AbstractDecoder).gm = function (descriptor) {
    return this;
  };
  protoOf(AbstractDecoder).hm = function (descriptor) {
  };
  protoOf(AbstractDecoder).im = function (descriptor, index) {
    return this.ul();
  };
  protoOf(AbstractDecoder).jm = function (descriptor, index) {
    return this.vl();
  };
  protoOf(AbstractDecoder).km = function (descriptor, index) {
    return this.wl();
  };
  protoOf(AbstractDecoder).lm = function (descriptor, index) {
    return this.xl();
  };
  protoOf(AbstractDecoder).mm = function (descriptor, index) {
    return this.yl();
  };
  protoOf(AbstractDecoder).nm = function (descriptor, index) {
    return this.zl();
  };
  protoOf(AbstractDecoder).om = function (descriptor, index) {
    return this.am();
  };
  protoOf(AbstractDecoder).pm = function (descriptor, index) {
    return this.bm();
  };
  protoOf(AbstractDecoder).qm = function (descriptor, index) {
    return this.cm();
  };
  protoOf(AbstractDecoder).rm = function (descriptor, index) {
    return this.dm(descriptor.vk(index));
  };
  protoOf(AbstractDecoder).sm = function (descriptor, index, deserializer, previousValue) {
    return this.em(deserializer, previousValue);
  };
  protoOf(AbstractDecoder).um = function (descriptor, index, deserializer, previousValue) {
    // Inline function 'kotlinx.serialization.encoding.decodeIfNullable' call
    var isNullabilitySupported = deserializer.bj().kk();
    var tmp;
    if (isNullabilitySupported || this.sl()) {
      // Inline function 'kotlinx.serialization.encoding.AbstractDecoder.decodeNullableSerializableElement.<anonymous>' call
      tmp = this.em(deserializer, previousValue);
    } else {
      tmp = this.tl();
    }
    return tmp;
  };
  function AbstractEncoder() {
  }
  protoOf(AbstractEncoder).gm = function (descriptor) {
    return this;
  };
  protoOf(AbstractEncoder).hm = function (descriptor) {
  };
  protoOf(AbstractEncoder).zm = function (descriptor, index) {
    return true;
  };
  protoOf(AbstractEncoder).an = function (value) {
    throw SerializationException_init_$Create$_0('Non-serializable ' + toString(getKClassFromExpression(value)) + ' is not supported by ' + toString(getKClassFromExpression(this)) + ' encoder');
  };
  protoOf(AbstractEncoder).bn = function () {
    throw SerializationException_init_$Create$_0("'null' is not supported by default");
  };
  protoOf(AbstractEncoder).cn = function (value) {
    return this.an(value);
  };
  protoOf(AbstractEncoder).dn = function (value) {
    return this.an(value);
  };
  protoOf(AbstractEncoder).en = function (value) {
    return this.an(value);
  };
  protoOf(AbstractEncoder).fn = function (value) {
    return this.an(value);
  };
  protoOf(AbstractEncoder).gn = function (value) {
    return this.an(value);
  };
  protoOf(AbstractEncoder).hn = function (value) {
    return this.an(value);
  };
  protoOf(AbstractEncoder).in = function (value) {
    return this.an(value);
  };
  protoOf(AbstractEncoder).jn = function (value) {
    return this.an(new Char(value));
  };
  protoOf(AbstractEncoder).kn = function (value) {
    return this.an(value);
  };
  protoOf(AbstractEncoder).ln = function (descriptor) {
    return this;
  };
  protoOf(AbstractEncoder).mn = function (descriptor, index, value) {
    if (this.zm(descriptor, index)) {
      this.cn(value);
    }
  };
  protoOf(AbstractEncoder).nn = function (descriptor, index, value) {
    if (this.zm(descriptor, index)) {
      this.dn(value);
    }
  };
  protoOf(AbstractEncoder).on = function (descriptor, index, value) {
    if (this.zm(descriptor, index)) {
      this.en(value);
    }
  };
  protoOf(AbstractEncoder).pn = function (descriptor, index, value) {
    if (this.zm(descriptor, index)) {
      this.fn(value);
    }
  };
  protoOf(AbstractEncoder).qn = function (descriptor, index, value) {
    if (this.zm(descriptor, index)) {
      this.gn(value);
    }
  };
  protoOf(AbstractEncoder).rn = function (descriptor, index, value) {
    if (this.zm(descriptor, index)) {
      this.hn(value);
    }
  };
  protoOf(AbstractEncoder).sn = function (descriptor, index, value) {
    if (this.zm(descriptor, index)) {
      this.in(value);
    }
  };
  protoOf(AbstractEncoder).tn = function (descriptor, index, value) {
    if (this.zm(descriptor, index)) {
      this.jn(value);
    }
  };
  protoOf(AbstractEncoder).un = function (descriptor, index, value) {
    if (this.zm(descriptor, index)) {
      this.kn(value);
    }
  };
  protoOf(AbstractEncoder).vn = function (descriptor, index) {
    return this.zm(descriptor, index) ? this.ln(descriptor.vk(index)) : NoOpEncoder_getInstance();
  };
  protoOf(AbstractEncoder).wn = function (descriptor, index, serializer, value) {
    if (this.zm(descriptor, index)) {
      this.xn(serializer, value);
    }
  };
  protoOf(AbstractEncoder).yn = function (descriptor, index, serializer, value) {
    if (this.zm(descriptor, index)) {
      this.zn(serializer, value);
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
  function decodeSequentially_0($this, compositeDecoder) {
    var klassName = compositeDecoder.qm($this.bj(), 0);
    var serializer = findPolymorphicSerializer_0($this, compositeDecoder, klassName);
    return compositeDecoder.tm($this.bj(), 1, serializer);
  }
  function AbstractPolymorphicSerializer() {
  }
  protoOf(AbstractPolymorphicSerializer).rj = function (encoder, value) {
    var actualSerializer = findPolymorphicSerializer(this, encoder, value);
    // Inline function 'kotlinx.serialization.encoding.encodeStructure' call
    var descriptor = this.bj();
    var composite = encoder.gm(descriptor);
    // Inline function 'kotlinx.serialization.internal.AbstractPolymorphicSerializer.serialize.<anonymous>' call
    composite.un(this.bj(), 0, actualSerializer.bj().ck());
    var tmp = this.bj();
    // Inline function 'kotlinx.serialization.internal.cast' call
    var tmp$ret$0 = isInterface(actualSerializer, SerializationStrategy) ? actualSerializer : THROW_CCE();
    composite.wn(tmp, 1, tmp$ret$0, value);
    composite.hm(descriptor);
  };
  protoOf(AbstractPolymorphicSerializer).cj = function (encoder, value) {
    return this.rj(encoder, !(value == null) ? value : THROW_CCE());
  };
  protoOf(AbstractPolymorphicSerializer).dj = function (decoder) {
    // Inline function 'kotlinx.serialization.encoding.decodeStructure' call
    var descriptor = this.bj();
    var composite = decoder.gm(descriptor);
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.internal.AbstractPolymorphicSerializer.deserialize.<anonymous>' call
      var klassName = null;
      var value = null;
      if (composite.wm()) {
        tmp$ret$0 = decodeSequentially_0(this, composite);
        break $l$block;
      }
      mainLoop: while (true) {
        var index = composite.xm(this.bj());
        switch (index) {
          case -1:
            break mainLoop;
          case 0:
            klassName = composite.qm(this.bj(), index);
            break;
          case 1:
            var tmp0 = klassName;
            var tmp$ret$2;
            $l$block_0: {
              // Inline function 'kotlin.requireNotNull' call
              if (tmp0 == null) {
                // Inline function 'kotlinx.serialization.internal.AbstractPolymorphicSerializer.deserialize.<anonymous>.<anonymous>' call
                var message = 'Cannot read polymorphic value before its type token';
                throw IllegalArgumentException_init_$Create$(toString(message));
              } else {
                tmp$ret$2 = tmp0;
                break $l$block_0;
              }
            }

            klassName = tmp$ret$2;
            var serializer = findPolymorphicSerializer_0(this, composite, klassName);
            value = composite.tm(this.bj(), index, serializer);
            break;
          default:
            var tmp0_elvis_lhs = klassName;
            throw SerializationException_init_$Create$_0('Invalid index in polymorphic deserialization of ' + (tmp0_elvis_lhs == null ? 'unknown class' : tmp0_elvis_lhs) + ('\n Expected 0, 1 or DECODE_DONE(-1), but found ' + index));
        }
      }
      var tmp1 = value;
      var tmp$ret$4;
      $l$block_1: {
        // Inline function 'kotlin.requireNotNull' call
        if (tmp1 == null) {
          // Inline function 'kotlinx.serialization.internal.AbstractPolymorphicSerializer.deserialize.<anonymous>.<anonymous>' call
          var message_0 = 'Polymorphic value has not been read for class ' + klassName;
          throw IllegalArgumentException_init_$Create$(toString(message_0));
        } else {
          tmp$ret$4 = tmp1;
          break $l$block_1;
        }
      }
      var tmp = tmp$ret$4;
      tmp$ret$0 = !(tmp == null) ? tmp : THROW_CCE();
    }
    var result = tmp$ret$0;
    composite.hm(descriptor);
    return result;
  };
  protoOf(AbstractPolymorphicSerializer).sj = function (decoder, klassName) {
    return decoder.vm().do(this.qj(), klassName);
  };
  protoOf(AbstractPolymorphicSerializer).tj = function (encoder, value) {
    return encoder.vm().eo(this.qj(), value);
  };
  function throwSubtypeNotRegistered(subClass, baseClass) {
    var tmp0_elvis_lhs = subClass.v9();
    throwSubtypeNotRegistered_0(tmp0_elvis_lhs == null ? toString(subClass) : tmp0_elvis_lhs, baseClass);
  }
  function throwSubtypeNotRegistered_0(subClassName, baseClass) {
    var scope = "in the polymorphic scope of '" + baseClass.v9() + "'";
    throw SerializationException_init_$Create$_0(subClassName == null ? 'Class discriminator was missing and no default serializers were registered ' + scope + '.' : "Serializer for subclass '" + subClassName + "' is not found " + scope + '.\n' + ("Check if class with serial name '" + subClassName + "' exists and serializer is registered in a corresponding SerializersModule.\n") + ("To be registered automatically, class '" + subClassName + "' has to be '@Serializable', and the base class '" + baseClass.v9() + "' has to be sealed and '@Serializable'."));
  }
  function NothingSerializer_0() {
    NothingSerializer_instance = this;
    this.fo_1 = NothingSerialDescriptor_getInstance();
  }
  protoOf(NothingSerializer_0).bj = function () {
    return this.fo_1;
  };
  protoOf(NothingSerializer_0).go = function (encoder, value) {
    throw SerializationException_init_$Create$_0("'kotlin.Nothing' cannot be serialized");
  };
  protoOf(NothingSerializer_0).cj = function (encoder, value) {
    var tmp;
    if (false) {
      tmp = value;
    } else {
      tmp = THROW_CCE();
    }
    return this.go(encoder, tmp);
  };
  protoOf(NothingSerializer_0).dj = function (decoder) {
    throw SerializationException_init_$Create$_0("'kotlin.Nothing' does not have instances");
  };
  var NothingSerializer_instance;
  function NothingSerializer_getInstance() {
    if (NothingSerializer_instance == null)
      new NothingSerializer_0();
    return NothingSerializer_instance;
  }
  function DurationSerializer() {
    DurationSerializer_instance = this;
    this.ho_1 = new PrimitiveSerialDescriptor_0('kotlin.time.Duration', STRING_getInstance());
  }
  protoOf(DurationSerializer).bj = function () {
    return this.ho_1;
  };
  protoOf(DurationSerializer).io = function (encoder, value) {
    encoder.kn(Duration__toIsoString_impl_9h6wsm(value));
  };
  protoOf(DurationSerializer).cj = function (encoder, value) {
    return this.io(encoder, value instanceof Duration ? value.ng_1 : THROW_CCE());
  };
  protoOf(DurationSerializer).jo = function (decoder) {
    return Companion_getInstance().mg(decoder.cm());
  };
  protoOf(DurationSerializer).dj = function (decoder) {
    return new Duration(this.jo(decoder));
  };
  var DurationSerializer_instance;
  function DurationSerializer_getInstance() {
    if (DurationSerializer_instance == null)
      new DurationSerializer();
    return DurationSerializer_instance;
  }
  function UuidSerializer() {
    UuidSerializer_instance = this;
    this.ko_1 = new PrimitiveSerialDescriptor_0('kotlin.uuid.Uuid', STRING_getInstance());
  }
  protoOf(UuidSerializer).bj = function () {
    return this.ko_1;
  };
  protoOf(UuidSerializer).lo = function (encoder, value) {
    encoder.kn(value.toString());
  };
  protoOf(UuidSerializer).cj = function (encoder, value) {
    return this.lo(encoder, value instanceof Uuid ? value : THROW_CCE());
  };
  protoOf(UuidSerializer).dj = function (decoder) {
    return Companion_getInstance_0().mh(decoder.cm());
  };
  var UuidSerializer_instance;
  function UuidSerializer_getInstance() {
    if (UuidSerializer_instance == null)
      new UuidSerializer();
    return UuidSerializer_instance;
  }
  function CachedNames() {
  }
  function ArrayListClassDesc(elementDesc) {
    ListLikeDescriptor.call(this, elementDesc);
  }
  protoOf(ArrayListClassDesc).ck = function () {
    return 'kotlin.collections.ArrayList';
  };
  function HashSetClassDesc(elementDesc) {
    ListLikeDescriptor.call(this, elementDesc);
  }
  protoOf(HashSetClassDesc).ck = function () {
    return 'kotlin.collections.HashSet';
  };
  function LinkedHashSetClassDesc(elementDesc) {
    ListLikeDescriptor.call(this, elementDesc);
  }
  protoOf(LinkedHashSetClassDesc).ck = function () {
    return 'kotlin.collections.LinkedHashSet';
  };
  function HashMapClassDesc(keyDesc, valueDesc) {
    MapLikeDescriptor.call(this, 'kotlin.collections.HashMap', keyDesc, valueDesc);
  }
  function LinkedHashMapClassDesc(keyDesc, valueDesc) {
    MapLikeDescriptor.call(this, 'kotlin.collections.LinkedHashMap', keyDesc, valueDesc);
  }
  function ArrayClassDesc(elementDesc) {
    ListLikeDescriptor.call(this, elementDesc);
  }
  protoOf(ArrayClassDesc).ck = function () {
    return 'kotlin.Array';
  };
  function ListLikeDescriptor(elementDescriptor) {
    this.oo_1 = elementDescriptor;
    this.po_1 = 1;
  }
  protoOf(ListLikeDescriptor).ok = function () {
    return LIST_getInstance();
  };
  protoOf(ListLikeDescriptor).qk = function () {
    return this.po_1;
  };
  protoOf(ListLikeDescriptor).sk = function (index) {
    return index.toString();
  };
  protoOf(ListLikeDescriptor).tk = function (name) {
    var tmp0_elvis_lhs = toIntOrNull(name);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalArgumentException_init_$Create$(name + ' is not a valid list index');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(ListLikeDescriptor).wk = function (index) {
    // Inline function 'kotlin.require' call
    if (!(index >= 0)) {
      // Inline function 'kotlinx.serialization.internal.ListLikeDescriptor.isElementOptional.<anonymous>' call
      var message = 'Illegal index ' + index + ', ' + this.ck() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return false;
  };
  protoOf(ListLikeDescriptor).uk = function (index) {
    // Inline function 'kotlin.require' call
    if (!(index >= 0)) {
      // Inline function 'kotlinx.serialization.internal.ListLikeDescriptor.getElementAnnotations.<anonymous>' call
      var message = 'Illegal index ' + index + ', ' + this.ck() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return emptyList();
  };
  protoOf(ListLikeDescriptor).vk = function (index) {
    // Inline function 'kotlin.require' call
    if (!(index >= 0)) {
      // Inline function 'kotlinx.serialization.internal.ListLikeDescriptor.getElementDescriptor.<anonymous>' call
      var message = 'Illegal index ' + index + ', ' + this.ck() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return this.oo_1;
  };
  protoOf(ListLikeDescriptor).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ListLikeDescriptor))
      return false;
    if (equals(this.oo_1, other.oo_1) && this.ck() === other.ck())
      return true;
    return false;
  };
  protoOf(ListLikeDescriptor).hashCode = function () {
    return imul(hashCode(this.oo_1), 31) + getStringHashCode(this.ck()) | 0;
  };
  protoOf(ListLikeDescriptor).toString = function () {
    return this.ck() + '(' + toString(this.oo_1) + ')';
  };
  function MapLikeDescriptor(serialName, keyDescriptor, valueDescriptor) {
    this.uo_1 = serialName;
    this.vo_1 = keyDescriptor;
    this.wo_1 = valueDescriptor;
    this.xo_1 = 2;
  }
  protoOf(MapLikeDescriptor).ck = function () {
    return this.uo_1;
  };
  protoOf(MapLikeDescriptor).ok = function () {
    return MAP_getInstance();
  };
  protoOf(MapLikeDescriptor).qk = function () {
    return this.xo_1;
  };
  protoOf(MapLikeDescriptor).sk = function (index) {
    return index.toString();
  };
  protoOf(MapLikeDescriptor).tk = function (name) {
    var tmp0_elvis_lhs = toIntOrNull(name);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalArgumentException_init_$Create$(name + ' is not a valid map index');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(MapLikeDescriptor).wk = function (index) {
    // Inline function 'kotlin.require' call
    if (!(index >= 0)) {
      // Inline function 'kotlinx.serialization.internal.MapLikeDescriptor.isElementOptional.<anonymous>' call
      var message = 'Illegal index ' + index + ', ' + this.ck() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return false;
  };
  protoOf(MapLikeDescriptor).uk = function (index) {
    // Inline function 'kotlin.require' call
    if (!(index >= 0)) {
      // Inline function 'kotlinx.serialization.internal.MapLikeDescriptor.getElementAnnotations.<anonymous>' call
      var message = 'Illegal index ' + index + ', ' + this.ck() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return emptyList();
  };
  protoOf(MapLikeDescriptor).vk = function (index) {
    // Inline function 'kotlin.require' call
    if (!(index >= 0)) {
      // Inline function 'kotlinx.serialization.internal.MapLikeDescriptor.getElementDescriptor.<anonymous>' call
      var message = 'Illegal index ' + index + ', ' + this.ck() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var tmp;
    switch (index % 2 | 0) {
      case 0:
        tmp = this.vo_1;
        break;
      case 1:
        tmp = this.wo_1;
        break;
      default:
        var message_0 = 'Unreached';
        throw IllegalStateException_init_$Create$(toString(message_0));
    }
    return tmp;
  };
  protoOf(MapLikeDescriptor).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof MapLikeDescriptor))
      return false;
    if (!(this.ck() === other.ck()))
      return false;
    if (!equals(this.vo_1, other.vo_1))
      return false;
    if (!equals(this.wo_1, other.wo_1))
      return false;
    return true;
  };
  protoOf(MapLikeDescriptor).hashCode = function () {
    var result = getStringHashCode(this.ck());
    result = imul(31, result) + hashCode(this.vo_1) | 0;
    result = imul(31, result) + hashCode(this.wo_1) | 0;
    return result;
  };
  protoOf(MapLikeDescriptor).toString = function () {
    return this.ck() + '(' + toString(this.vo_1) + ', ' + toString(this.wo_1) + ')';
  };
  function PrimitiveArrayDescriptor(primitive) {
    ListLikeDescriptor.call(this, primitive);
    this.cp_1 = primitive.ck() + 'Array';
  }
  protoOf(PrimitiveArrayDescriptor).ck = function () {
    return this.cp_1;
  };
  function ArrayListSerializer(element) {
    CollectionSerializer.call(this, element);
    this.ep_1 = new ArrayListClassDesc(element.bj());
  }
  protoOf(ArrayListSerializer).bj = function () {
    return this.ep_1;
  };
  protoOf(ArrayListSerializer).fp = function () {
    // Inline function 'kotlin.collections.arrayListOf' call
    return ArrayList_init_$Create$_0();
  };
  protoOf(ArrayListSerializer).gp = function (_this__u8e3s4) {
    return _this__u8e3s4.l();
  };
  protoOf(ArrayListSerializer).hp = function (_this__u8e3s4) {
    return this.gp(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ArrayListSerializer).ip = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  protoOf(ArrayListSerializer).jp = function (_this__u8e3s4) {
    return this.ip(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ArrayListSerializer).kp = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? ArrayList_init_$Create$_1(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  protoOf(ArrayListSerializer).lp = function (_this__u8e3s4) {
    return this.kp((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtList) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ArrayListSerializer).mp = function (_this__u8e3s4, size) {
    return _this__u8e3s4.x4(size);
  };
  protoOf(ArrayListSerializer).np = function (_this__u8e3s4, size) {
    return this.mp(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE(), size);
  };
  protoOf(ArrayListSerializer).op = function (_this__u8e3s4, index, element) {
    _this__u8e3s4.b2(index, element);
  };
  protoOf(ArrayListSerializer).pp = function (_this__u8e3s4, index, element) {
    var tmp = _this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE();
    return this.op(tmp, index, (element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  function HashSetSerializer(eSerializer) {
    CollectionSerializer.call(this, eSerializer);
    this.aq_1 = new HashSetClassDesc(eSerializer.bj());
  }
  protoOf(HashSetSerializer).bj = function () {
    return this.aq_1;
  };
  protoOf(HashSetSerializer).fp = function () {
    return HashSet_init_$Create$();
  };
  protoOf(HashSetSerializer).bq = function (_this__u8e3s4) {
    return _this__u8e3s4.l();
  };
  protoOf(HashSetSerializer).hp = function (_this__u8e3s4) {
    return this.bq(_this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashSetSerializer).cq = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  protoOf(HashSetSerializer).jp = function (_this__u8e3s4) {
    return this.cq(_this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashSetSerializer).dq = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? HashSet_init_$Create$_0(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  protoOf(HashSetSerializer).lp = function (_this__u8e3s4) {
    return this.dq((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtSet) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashSetSerializer).eq = function (_this__u8e3s4, size) {
  };
  protoOf(HashSetSerializer).np = function (_this__u8e3s4, size) {
    return this.eq(_this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : THROW_CCE(), size);
  };
  protoOf(HashSetSerializer).fq = function (_this__u8e3s4, index, element) {
    _this__u8e3s4.d(element);
  };
  protoOf(HashSetSerializer).pp = function (_this__u8e3s4, index, element) {
    var tmp = _this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : THROW_CCE();
    return this.fq(tmp, index, (element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  function LinkedHashSetSerializer(eSerializer) {
    CollectionSerializer.call(this, eSerializer);
    this.hq_1 = new LinkedHashSetClassDesc(eSerializer.bj());
  }
  protoOf(LinkedHashSetSerializer).bj = function () {
    return this.hq_1;
  };
  protoOf(LinkedHashSetSerializer).fp = function () {
    // Inline function 'kotlin.collections.linkedSetOf' call
    return LinkedHashSet_init_$Create$();
  };
  protoOf(LinkedHashSetSerializer).iq = function (_this__u8e3s4) {
    return _this__u8e3s4.l();
  };
  protoOf(LinkedHashSetSerializer).hp = function (_this__u8e3s4) {
    return this.iq(_this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashSetSerializer).jq = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  protoOf(LinkedHashSetSerializer).jp = function (_this__u8e3s4) {
    return this.jq(_this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashSetSerializer).dq = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? LinkedHashSet_init_$Create$_0(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  protoOf(LinkedHashSetSerializer).lp = function (_this__u8e3s4) {
    return this.dq((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtSet) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashSetSerializer).kq = function (_this__u8e3s4, size) {
  };
  protoOf(LinkedHashSetSerializer).np = function (_this__u8e3s4, size) {
    return this.kq(_this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : THROW_CCE(), size);
  };
  protoOf(LinkedHashSetSerializer).lq = function (_this__u8e3s4, index, element) {
    _this__u8e3s4.d(element);
  };
  protoOf(LinkedHashSetSerializer).pp = function (_this__u8e3s4, index, element) {
    var tmp = _this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : THROW_CCE();
    return this.lq(tmp, index, (element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  function HashMapSerializer(kSerializer, vSerializer) {
    MapLikeSerializer.call(this, kSerializer, vSerializer);
    this.oq_1 = new HashMapClassDesc(kSerializer.bj(), vSerializer.bj());
  }
  protoOf(HashMapSerializer).bj = function () {
    return this.oq_1;
  };
  protoOf(HashMapSerializer).pq = function (_this__u8e3s4) {
    return _this__u8e3s4.l();
  };
  protoOf(HashMapSerializer).qq = function (_this__u8e3s4) {
    return this.pq((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtMap) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashMapSerializer).rq = function (_this__u8e3s4) {
    // Inline function 'kotlin.collections.iterator' call
    return _this__u8e3s4.x1().i();
  };
  protoOf(HashMapSerializer).sq = function (_this__u8e3s4) {
    return this.rq((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtMap) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashMapSerializer).fp = function () {
    return HashMap_init_$Create$();
  };
  protoOf(HashMapSerializer).tq = function (_this__u8e3s4) {
    return imul(_this__u8e3s4.l(), 2);
  };
  protoOf(HashMapSerializer).hp = function (_this__u8e3s4) {
    return this.tq(_this__u8e3s4 instanceof HashMap ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashMapSerializer).uq = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  protoOf(HashMapSerializer).jp = function (_this__u8e3s4) {
    return this.uq(_this__u8e3s4 instanceof HashMap ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashMapSerializer).vq = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof HashMap ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? HashMap_init_$Create$_0(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  protoOf(HashMapSerializer).lp = function (_this__u8e3s4) {
    return this.vq((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtMap) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashMapSerializer).wq = function (_this__u8e3s4, size) {
  };
  protoOf(HashMapSerializer).np = function (_this__u8e3s4, size) {
    return this.wq(_this__u8e3s4 instanceof HashMap ? _this__u8e3s4 : THROW_CCE(), size);
  };
  function LinkedHashMapSerializer(kSerializer, vSerializer) {
    MapLikeSerializer.call(this, kSerializer, vSerializer);
    this.dr_1 = new LinkedHashMapClassDesc(kSerializer.bj(), vSerializer.bj());
  }
  protoOf(LinkedHashMapSerializer).bj = function () {
    return this.dr_1;
  };
  protoOf(LinkedHashMapSerializer).pq = function (_this__u8e3s4) {
    return _this__u8e3s4.l();
  };
  protoOf(LinkedHashMapSerializer).qq = function (_this__u8e3s4) {
    return this.pq((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtMap) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashMapSerializer).rq = function (_this__u8e3s4) {
    // Inline function 'kotlin.collections.iterator' call
    return _this__u8e3s4.x1().i();
  };
  protoOf(LinkedHashMapSerializer).sq = function (_this__u8e3s4) {
    return this.rq((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtMap) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashMapSerializer).fp = function () {
    return LinkedHashMap_init_$Create$();
  };
  protoOf(LinkedHashMapSerializer).er = function (_this__u8e3s4) {
    return imul(_this__u8e3s4.l(), 2);
  };
  protoOf(LinkedHashMapSerializer).hp = function (_this__u8e3s4) {
    return this.er(_this__u8e3s4 instanceof LinkedHashMap ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashMapSerializer).fr = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  protoOf(LinkedHashMapSerializer).jp = function (_this__u8e3s4) {
    return this.fr(_this__u8e3s4 instanceof LinkedHashMap ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashMapSerializer).vq = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof LinkedHashMap ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? LinkedHashMap_init_$Create$_1(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  protoOf(LinkedHashMapSerializer).lp = function (_this__u8e3s4) {
    return this.vq((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtMap) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashMapSerializer).gr = function (_this__u8e3s4, size) {
  };
  protoOf(LinkedHashMapSerializer).np = function (_this__u8e3s4, size) {
    return this.gr(_this__u8e3s4 instanceof LinkedHashMap ? _this__u8e3s4 : THROW_CCE(), size);
  };
  function ReferenceArraySerializer(kClass, eSerializer) {
    CollectionLikeSerializer.call(this, eSerializer);
    this.ir_1 = kClass;
    this.jr_1 = new ArrayClassDesc(eSerializer.bj());
  }
  protoOf(ReferenceArraySerializer).bj = function () {
    return this.jr_1;
  };
  protoOf(ReferenceArraySerializer).kr = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(ReferenceArraySerializer).qq = function (_this__u8e3s4) {
    return this.kr((!(_this__u8e3s4 == null) ? isArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ReferenceArraySerializer).lr = function (_this__u8e3s4) {
    return arrayIterator(_this__u8e3s4);
  };
  protoOf(ReferenceArraySerializer).sq = function (_this__u8e3s4) {
    return this.lr((!(_this__u8e3s4 == null) ? isArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ReferenceArraySerializer).fp = function () {
    // Inline function 'kotlin.collections.arrayListOf' call
    return ArrayList_init_$Create$_0();
  };
  protoOf(ReferenceArraySerializer).mr = function (_this__u8e3s4) {
    return _this__u8e3s4.l();
  };
  protoOf(ReferenceArraySerializer).hp = function (_this__u8e3s4) {
    return this.mr(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ReferenceArraySerializer).nr = function (_this__u8e3s4) {
    return toNativeArrayImpl(_this__u8e3s4, this.ir_1);
  };
  protoOf(ReferenceArraySerializer).jp = function (_this__u8e3s4) {
    return this.nr(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ReferenceArraySerializer).or = function (_this__u8e3s4) {
    return ArrayList_init_$Create$_1(asList(_this__u8e3s4));
  };
  protoOf(ReferenceArraySerializer).lp = function (_this__u8e3s4) {
    return this.or((!(_this__u8e3s4 == null) ? isArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ReferenceArraySerializer).pr = function (_this__u8e3s4, size) {
    return _this__u8e3s4.x4(size);
  };
  protoOf(ReferenceArraySerializer).np = function (_this__u8e3s4, size) {
    return this.pr(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE(), size);
  };
  protoOf(ReferenceArraySerializer).qr = function (_this__u8e3s4, index, element) {
    _this__u8e3s4.b2(index, element);
  };
  protoOf(ReferenceArraySerializer).pp = function (_this__u8e3s4, index, element) {
    var tmp = _this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE();
    return this.qr(tmp, index, (element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  function CollectionSerializer(element) {
    CollectionLikeSerializer.call(this, element);
  }
  protoOf(CollectionSerializer).rp = function (_this__u8e3s4) {
    return _this__u8e3s4.l();
  };
  protoOf(CollectionSerializer).qq = function (_this__u8e3s4) {
    return this.rp((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Collection) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(CollectionSerializer).sp = function (_this__u8e3s4) {
    return _this__u8e3s4.i();
  };
  protoOf(CollectionSerializer).sq = function (_this__u8e3s4) {
    return this.sp((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Collection) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  function MapLikeSerializer(keySerializer, valueSerializer) {
    AbstractCollectionSerializer.call(this);
    this.xq_1 = keySerializer;
    this.yq_1 = valueSerializer;
  }
  protoOf(MapLikeSerializer).zq = function (decoder, builder, startIndex, size) {
    // Inline function 'kotlin.require' call
    if (!(size >= 0)) {
      // Inline function 'kotlinx.serialization.internal.MapLikeSerializer.readAll.<anonymous>' call
      var message = 'Size must be known in advance when using READ_ALL';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var progression = step(until(0, imul(size, 2)), 2);
    var inductionVariable = progression.p_1;
    var last = progression.q_1;
    var step_0 = progression.r_1;
    if (step_0 > 0 && inductionVariable <= last || (step_0 < 0 && last <= inductionVariable))
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + step_0 | 0;
        this.ar(decoder, startIndex + index | 0, builder, false);
      }
       while (!(index === last));
  };
  protoOf(MapLikeSerializer).vp = function (decoder, builder, startIndex, size) {
    return this.zq(decoder, (!(builder == null) ? isInterface(builder, KtMutableMap) : false) ? builder : THROW_CCE(), startIndex, size);
  };
  protoOf(MapLikeSerializer).ar = function (decoder, index, builder, checkIndex) {
    var key = decoder.tm(this.bj(), index, this.xq_1);
    var tmp;
    if (checkIndex) {
      // Inline function 'kotlin.also' call
      var this_0 = decoder.xm(this.bj());
      // Inline function 'kotlinx.serialization.internal.MapLikeSerializer.readElement.<anonymous>' call
      // Inline function 'kotlin.require' call
      if (!(this_0 === (index + 1 | 0))) {
        // Inline function 'kotlinx.serialization.internal.MapLikeSerializer.readElement.<anonymous>.<anonymous>' call
        var message = 'Value must follow key in a map, index for key: ' + index + ', returned index for value: ' + this_0;
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
      tmp = this_0;
    } else {
      tmp = index + 1 | 0;
    }
    var vIndex = tmp;
    var tmp_0;
    var tmp_1;
    if (builder.s1(key)) {
      var tmp_2 = this.yq_1.bj().ok();
      tmp_1 = !(tmp_2 instanceof PrimitiveKind);
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      tmp_0 = decoder.sm(this.bj(), vIndex, this.yq_1, getValue(builder, key));
    } else {
      tmp_0 = decoder.tm(this.bj(), vIndex, this.yq_1);
    }
    var value = tmp_0;
    // Inline function 'kotlin.collections.set' call
    builder.d2(key, value);
  };
  protoOf(MapLikeSerializer).wp = function (decoder, index, builder, checkIndex) {
    return this.ar(decoder, index, (!(builder == null) ? isInterface(builder, KtMutableMap) : false) ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(MapLikeSerializer).up = function (encoder, value) {
    var size = this.qq(value);
    // Inline function 'kotlinx.serialization.encoding.encodeCollection' call
    var descriptor = this.bj();
    var composite = encoder.bo(descriptor, size);
    // Inline function 'kotlinx.serialization.internal.MapLikeSerializer.serialize.<anonymous>' call
    var iterator = this.sq(value);
    var index = 0;
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s = iterator;
    while (_iterator__ex2g4s.j()) {
      var element = _iterator__ex2g4s.k();
      // Inline function 'kotlinx.serialization.internal.MapLikeSerializer.serialize.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var k = element.q1();
      // Inline function 'kotlin.collections.component2' call
      var v = element.r1();
      var tmp = this.bj();
      var _unary__edvuaz = index;
      index = _unary__edvuaz + 1 | 0;
      composite.wn(tmp, _unary__edvuaz, this.xq_1, k);
      var tmp_0 = this.bj();
      var _unary__edvuaz_0 = index;
      index = _unary__edvuaz_0 + 1 | 0;
      composite.wn(tmp_0, _unary__edvuaz_0, this.yq_1, v);
    }
    composite.hm(descriptor);
  };
  protoOf(MapLikeSerializer).cj = function (encoder, value) {
    return this.up(encoder, (value == null ? true : !(value == null)) ? value : THROW_CCE());
  };
  function CollectionLikeSerializer(elementSerializer) {
    AbstractCollectionSerializer.call(this);
    this.tp_1 = elementSerializer;
  }
  protoOf(CollectionLikeSerializer).up = function (encoder, value) {
    var size = this.qq(value);
    // Inline function 'kotlinx.serialization.encoding.encodeCollection' call
    var descriptor = this.bj();
    var composite = encoder.bo(descriptor, size);
    // Inline function 'kotlinx.serialization.internal.CollectionLikeSerializer.serialize.<anonymous>' call
    var iterator = this.sq(value);
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        composite.wn(this.bj(), index, this.tp_1, iterator.k());
      }
       while (inductionVariable < size);
    composite.hm(descriptor);
  };
  protoOf(CollectionLikeSerializer).cj = function (encoder, value) {
    return this.up(encoder, (value == null ? true : !(value == null)) ? value : THROW_CCE());
  };
  protoOf(CollectionLikeSerializer).vp = function (decoder, builder, startIndex, size) {
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
        this.wp(decoder, startIndex + index | 0, builder, false);
      }
       while (inductionVariable < size);
  };
  protoOf(CollectionLikeSerializer).wp = function (decoder, index, builder, checkIndex) {
    this.pp(builder, index, decoder.tm(this.bj(), index, this.tp_1));
  };
  function readSize($this, decoder, builder) {
    var size = decoder.ym($this.bj());
    $this.np(builder, size);
    return size;
  }
  function AbstractCollectionSerializer() {
  }
  protoOf(AbstractCollectionSerializer).yp = function (decoder, previous) {
    var tmp1_elvis_lhs = previous == null ? null : this.lp(previous);
    var builder = tmp1_elvis_lhs == null ? this.fp() : tmp1_elvis_lhs;
    var startIndex = this.hp(builder);
    var compositeDecoder = decoder.gm(this.bj());
    if (compositeDecoder.wm()) {
      this.vp(compositeDecoder, builder, startIndex, readSize(this, compositeDecoder, builder));
    } else {
      $l$loop: while (true) {
        var index = compositeDecoder.xm(this.bj());
        if (index === -1)
          break $l$loop;
        this.xp(compositeDecoder, startIndex + index | 0, builder);
      }
    }
    compositeDecoder.hm(this.bj());
    return this.jp(builder);
  };
  protoOf(AbstractCollectionSerializer).dj = function (decoder) {
    return this.yp(decoder, null);
  };
  protoOf(AbstractCollectionSerializer).xp = function (decoder, index, builder, checkIndex, $super) {
    checkIndex = checkIndex === VOID ? true : checkIndex;
    var tmp;
    if ($super === VOID) {
      this.wp(decoder, index, builder, checkIndex);
      tmp = Unit_instance;
    } else {
      tmp = $super.wp.call(this, decoder, index, builder, checkIndex);
    }
    return tmp;
  };
  function PrimitiveArraySerializer(primitiveSerializer) {
    CollectionLikeSerializer.call(this, primitiveSerializer);
    this.sr_1 = new PrimitiveArrayDescriptor(primitiveSerializer.bj());
  }
  protoOf(PrimitiveArraySerializer).bj = function () {
    return this.sr_1;
  };
  protoOf(PrimitiveArraySerializer).tr = function (_this__u8e3s4) {
    return _this__u8e3s4.ur();
  };
  protoOf(PrimitiveArraySerializer).hp = function (_this__u8e3s4) {
    return this.tr(_this__u8e3s4 instanceof PrimitiveArrayBuilder ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(PrimitiveArraySerializer).vr = function (_this__u8e3s4) {
    return _this__u8e3s4.wr();
  };
  protoOf(PrimitiveArraySerializer).jp = function (_this__u8e3s4) {
    return this.vr(_this__u8e3s4 instanceof PrimitiveArrayBuilder ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(PrimitiveArraySerializer).xr = function (_this__u8e3s4, size) {
    return _this__u8e3s4.yr(size);
  };
  protoOf(PrimitiveArraySerializer).np = function (_this__u8e3s4, size) {
    return this.xr(_this__u8e3s4 instanceof PrimitiveArrayBuilder ? _this__u8e3s4 : THROW_CCE(), size);
  };
  protoOf(PrimitiveArraySerializer).zr = function (_this__u8e3s4) {
    var message = 'This method lead to boxing and must not be used, use writeContents instead';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  protoOf(PrimitiveArraySerializer).sq = function (_this__u8e3s4) {
    return this.zr((_this__u8e3s4 == null ? true : !(_this__u8e3s4 == null)) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(PrimitiveArraySerializer).as = function (_this__u8e3s4, index, element) {
    var message = 'This method lead to boxing and must not be used, use Builder.append instead';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  protoOf(PrimitiveArraySerializer).pp = function (_this__u8e3s4, index, element) {
    var tmp = _this__u8e3s4 instanceof PrimitiveArrayBuilder ? _this__u8e3s4 : THROW_CCE();
    return this.as(tmp, index, (element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(PrimitiveArraySerializer).fp = function () {
    return this.lp(this.bs());
  };
  protoOf(PrimitiveArraySerializer).es = function (encoder, value) {
    var size = this.qq(value);
    // Inline function 'kotlinx.serialization.encoding.encodeCollection' call
    var descriptor = this.sr_1;
    var composite = encoder.bo(descriptor, size);
    // Inline function 'kotlinx.serialization.internal.PrimitiveArraySerializer.serialize.<anonymous>' call
    this.ds(composite, value, size);
    composite.hm(descriptor);
  };
  protoOf(PrimitiveArraySerializer).cj = function (encoder, value) {
    return this.es(encoder, (value == null ? true : !(value == null)) ? value : THROW_CCE());
  };
  protoOf(PrimitiveArraySerializer).up = function (encoder, value) {
    return this.es(encoder, (value == null ? true : !(value == null)) ? value : THROW_CCE());
  };
  protoOf(PrimitiveArraySerializer).dj = function (decoder) {
    return this.yp(decoder, null);
  };
  function PrimitiveArrayBuilder() {
  }
  protoOf(PrimitiveArrayBuilder).fs = function (requiredCapacity, $super) {
    requiredCapacity = requiredCapacity === VOID ? this.ur() + 1 | 0 : requiredCapacity;
    var tmp;
    if ($super === VOID) {
      this.yr(requiredCapacity);
      tmp = Unit_instance;
    } else {
      tmp = $super.yr.call(this, requiredCapacity);
    }
    return tmp;
  };
  function Companion() {
    Companion_instance_0 = this;
    this.gs_1 = longArray(0);
  }
  var Companion_instance_0;
  function Companion_getInstance_7() {
    if (Companion_instance_0 == null)
      new Companion();
    return Companion_instance_0;
  }
  function prepareHighMarksArray($this, elementsCount) {
    var slotsCount = (elementsCount - 1 | 0) >>> 6 | 0;
    var elementsInLastSlot = elementsCount & 63;
    var highMarks = longArray(slotsCount);
    if (!(elementsInLastSlot === 0)) {
      highMarks[get_lastIndex(highMarks)] = (new Long(-1, -1)).s2(elementsCount);
    }
    return highMarks;
  }
  function markHigh($this, index) {
    var slot = (index >>> 6 | 0) - 1 | 0;
    var offsetInSlot = index & 63;
    $this.ks_1[slot] = $this.ks_1[slot].w2((new Long(1, 0)).s2(offsetInSlot));
  }
  function nextUnmarkedHighIndex($this) {
    var inductionVariable = 0;
    var last = $this.ks_1.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var slot = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var slotOffset = imul(slot + 1 | 0, 64);
        var slotMarks = $this.ks_1[slot];
        while (!slotMarks.equals(new Long(-1, -1))) {
          var indexInSlot = countTrailingZeroBits(slotMarks.r2());
          slotMarks = slotMarks.w2((new Long(1, 0)).s2(indexInSlot));
          var index = slotOffset + indexInSlot | 0;
          if ($this.is_1($this.hs_1, index)) {
            $this.ks_1[slot] = slotMarks;
            return index;
          }
        }
        $this.ks_1[slot] = slotMarks;
      }
       while (inductionVariable <= last);
    return -1;
  }
  function ElementMarker(descriptor, readIfAbsent) {
    Companion_getInstance_7();
    this.hs_1 = descriptor;
    this.is_1 = readIfAbsent;
    var elementsCount = this.hs_1.qk();
    if (elementsCount <= 64) {
      var tmp = this;
      var tmp_0;
      if (elementsCount === 64) {
        tmp_0 = new Long(0, 0);
      } else {
        tmp_0 = (new Long(-1, -1)).s2(elementsCount);
      }
      tmp.js_1 = tmp_0;
      this.ks_1 = Companion_getInstance_7().gs_1;
    } else {
      this.js_1 = new Long(0, 0);
      this.ks_1 = prepareHighMarksArray(this, elementsCount);
    }
  }
  protoOf(ElementMarker).ls = function (index) {
    if (index < 64) {
      this.js_1 = this.js_1.w2((new Long(1, 0)).s2(index));
    } else {
      markHigh(this, index);
    }
  };
  protoOf(ElementMarker).ms = function () {
    var elementsCount = this.hs_1.qk();
    while (!this.js_1.equals(new Long(-1, -1))) {
      var index = countTrailingZeroBits(this.js_1.r2());
      this.js_1 = this.js_1.w2((new Long(1, 0)).s2(index));
      if (this.is_1(this.hs_1, index)) {
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
    this.zs_1 = true;
  }
  protoOf(InlineClassDescriptor).pk = function () {
    return this.zs_1;
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
      if (!(this.ck() === other.ck())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      // Inline function 'kotlinx.serialization.internal.InlineClassDescriptor.equals.<anonymous>' call
      if (!(other.zs_1 && contentEquals(this.mt(), other.mt()))) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.qk() === other.qk())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var inductionVariable = 0;
      var last = this.qk();
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (!(this.vk(index).ck() === other.vk(index).ck())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
          if (!equals(this.vk(index).ok(), other.vk(index).ok())) {
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
    this.ot_1 = $primitiveSerializer;
  }
  protoOf(InlinePrimitiveDescriptor$1).pt = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [this.ot_1];
  };
  protoOf(InlinePrimitiveDescriptor$1).bj = function () {
    var message = 'unsupported';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  protoOf(InlinePrimitiveDescriptor$1).cj = function (encoder, value) {
    // Inline function 'kotlin.error' call
    var message = 'unsupported';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  protoOf(InlinePrimitiveDescriptor$1).dj = function (decoder) {
    // Inline function 'kotlin.error' call
    var message = 'unsupported';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  function jsonCachedSerialNames(_this__u8e3s4) {
    return cachedSerialNames(_this__u8e3s4);
  }
  function NoOpEncoder() {
    NoOpEncoder_instance = this;
    AbstractEncoder.call(this);
    this.rt_1 = EmptySerializersModule_0();
  }
  protoOf(NoOpEncoder).vm = function () {
    return this.rt_1;
  };
  protoOf(NoOpEncoder).an = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).bn = function () {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).cn = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).dn = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).en = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).fn = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).gn = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).hn = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).in = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).jn = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).kn = function (value) {
    return Unit_instance;
  };
  var NoOpEncoder_instance;
  function NoOpEncoder_getInstance() {
    if (NoOpEncoder_instance == null)
      new NoOpEncoder();
    return NoOpEncoder_instance;
  }
  function error($this) {
    throw IllegalStateException_init_$Create$('Descriptor for type `kotlin.Nothing` does not have elements');
  }
  function NothingSerialDescriptor() {
    NothingSerialDescriptor_instance = this;
    this.st_1 = OBJECT_getInstance();
    this.tt_1 = 'kotlin.Nothing';
  }
  protoOf(NothingSerialDescriptor).ok = function () {
    return this.st_1;
  };
  protoOf(NothingSerialDescriptor).ck = function () {
    return this.tt_1;
  };
  protoOf(NothingSerialDescriptor).qk = function () {
    return 0;
  };
  protoOf(NothingSerialDescriptor).sk = function (index) {
    error(this);
  };
  protoOf(NothingSerialDescriptor).tk = function (name) {
    error(this);
  };
  protoOf(NothingSerialDescriptor).wk = function (index) {
    error(this);
  };
  protoOf(NothingSerialDescriptor).vk = function (index) {
    error(this);
  };
  protoOf(NothingSerialDescriptor).uk = function (index) {
    error(this);
  };
  protoOf(NothingSerialDescriptor).toString = function () {
    return 'NothingSerialDescriptor';
  };
  protoOf(NothingSerialDescriptor).equals = function (other) {
    return this === other;
  };
  protoOf(NothingSerialDescriptor).hashCode = function () {
    return getStringHashCode(this.tt_1) + imul(31, this.st_1.hashCode()) | 0;
  };
  var NothingSerialDescriptor_instance;
  function NothingSerialDescriptor_getInstance() {
    if (NothingSerialDescriptor_instance == null)
      new NothingSerialDescriptor();
    return NothingSerialDescriptor_instance;
  }
  function NullableSerializer(serializer) {
    this.ut_1 = serializer;
    this.vt_1 = new SerialDescriptorForNullable(this.ut_1.bj());
  }
  protoOf(NullableSerializer).bj = function () {
    return this.vt_1;
  };
  protoOf(NullableSerializer).wt = function (encoder, value) {
    if (!(value == null)) {
      encoder.ao();
      encoder.xn(this.ut_1, value);
    } else {
      encoder.bn();
    }
  };
  protoOf(NullableSerializer).cj = function (encoder, value) {
    return this.wt(encoder, (value == null ? true : !(value == null)) ? value : THROW_CCE());
  };
  protoOf(NullableSerializer).dj = function (decoder) {
    return decoder.sl() ? decoder.fm(this.ut_1) : decoder.tl();
  };
  protoOf(NullableSerializer).equals = function (other) {
    if (this === other)
      return true;
    if (other == null || !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!(other instanceof NullableSerializer))
      THROW_CCE();
    if (!equals(this.ut_1, other.ut_1))
      return false;
    return true;
  };
  protoOf(NullableSerializer).hashCode = function () {
    return hashCode(this.ut_1);
  };
  function SerialDescriptorForNullable(original) {
    this.xk_1 = original;
    this.yk_1 = this.xk_1.ck() + '?';
    this.zk_1 = cachedSerialNames(this.xk_1);
  }
  protoOf(SerialDescriptorForNullable).ck = function () {
    return this.yk_1;
  };
  protoOf(SerialDescriptorForNullable).ql = function () {
    return this.zk_1;
  };
  protoOf(SerialDescriptorForNullable).kk = function () {
    return true;
  };
  protoOf(SerialDescriptorForNullable).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SerialDescriptorForNullable))
      return false;
    if (!equals(this.xk_1, other.xk_1))
      return false;
    return true;
  };
  protoOf(SerialDescriptorForNullable).toString = function () {
    return toString(this.xk_1) + '?';
  };
  protoOf(SerialDescriptorForNullable).hashCode = function () {
    return imul(hashCode(this.xk_1), 31);
  };
  protoOf(SerialDescriptorForNullable).ok = function () {
    return this.xk_1.ok();
  };
  protoOf(SerialDescriptorForNullable).pk = function () {
    return this.xk_1.pk();
  };
  protoOf(SerialDescriptorForNullable).qk = function () {
    return this.xk_1.qk();
  };
  protoOf(SerialDescriptorForNullable).rk = function () {
    return this.xk_1.rk();
  };
  protoOf(SerialDescriptorForNullable).sk = function (index) {
    return this.xk_1.sk(index);
  };
  protoOf(SerialDescriptorForNullable).tk = function (name) {
    return this.xk_1.tk(name);
  };
  protoOf(SerialDescriptorForNullable).uk = function (index) {
    return this.xk_1.uk(index);
  };
  protoOf(SerialDescriptorForNullable).vk = function (index) {
    return this.xk_1.vk(index);
  };
  protoOf(SerialDescriptorForNullable).wk = function (index) {
    return this.xk_1.wk(index);
  };
  function ObjectSerializer$descriptor$delegate$lambda$lambda(this$0) {
    return function ($this$buildSerialDescriptor) {
      $this$buildSerialDescriptor.gj_1 = this$0.yt_1;
      return Unit_instance;
    };
  }
  function ObjectSerializer$descriptor$delegate$lambda($serialName, this$0) {
    return function () {
      var tmp = OBJECT_getInstance();
      return buildSerialDescriptor($serialName, tmp, [], ObjectSerializer$descriptor$delegate$lambda$lambda(this$0));
    };
  }
  function ObjectSerializer(serialName, objectInstance) {
    this.xt_1 = objectInstance;
    this.yt_1 = emptyList();
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.zt_1 = lazy(tmp_0, ObjectSerializer$descriptor$delegate$lambda(serialName, this));
  }
  protoOf(ObjectSerializer).bj = function () {
    var tmp0 = this.zt_1;
    // Inline function 'kotlin.getValue' call
    descriptor$factory_1();
    return tmp0.r1();
  };
  protoOf(ObjectSerializer).rj = function (encoder, value) {
    encoder.gm(this.bj()).hm(this.bj());
  };
  protoOf(ObjectSerializer).cj = function (encoder, value) {
    return this.rj(encoder, !(value == null) ? value : THROW_CCE());
  };
  protoOf(ObjectSerializer).dj = function (decoder) {
    // Inline function 'kotlinx.serialization.encoding.decodeStructure' call
    var descriptor = this.bj();
    var composite = decoder.gm(descriptor);
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlinx.serialization.internal.ObjectSerializer.deserialize.<anonymous>' call
      if (composite.wm()) {
        tmp$ret$0 = Unit_instance;
        break $l$block_0;
      }
      var index = composite.xm(this.bj());
      if (index === -1) {
        tmp$ret$0 = Unit_instance;
        break $l$block_0;
      } else
        throw SerializationException_init_$Create$_0('Unexpected index ' + index);
    }
    var result = tmp$ret$0;
    composite.hm(descriptor);
    return this.xt_1;
  };
  function descriptor$factory_1() {
    return getPropertyCallableRef('descriptor', 1, KProperty1, function (receiver) {
      return receiver.bj();
    }, null);
  }
  function get_EMPTY_DESCRIPTOR_ARRAY() {
    _init_properties_Platform_common_kt__3qzecs();
    return EMPTY_DESCRIPTOR_ARRAY;
  }
  var EMPTY_DESCRIPTOR_ARRAY;
  function cachedSerialNames(_this__u8e3s4) {
    _init_properties_Platform_common_kt__3qzecs();
    if (isInterface(_this__u8e3s4, CachedNames))
      return _this__u8e3s4.ql();
    var result = HashSet_init_$Create$_1(_this__u8e3s4.qk());
    var inductionVariable = 0;
    var last = _this__u8e3s4.qk();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.collections.plusAssign' call
        var element = _this__u8e3s4.sk(i);
        result.d(element);
      }
       while (inductionVariable < last);
    return result;
  }
  function kclass(_this__u8e3s4) {
    _init_properties_Platform_common_kt__3qzecs();
    var t = _this__u8e3s4.ja();
    var tmp;
    if (!(t == null) ? isInterface(t, KClass) : false) {
      tmp = t;
    } else {
      if (!(t == null) ? isInterface(t, KTypeParameter) : false) {
        throw IllegalArgumentException_init_$Create$('Captured type parameter ' + toString(t) + ' from generic non-reified function. ' + ('Such functionality cannot be supported because ' + toString(t) + ' is erased, either specify serializer explicitly or make ') + ('calling function inline with reified ' + toString(t) + '.'));
      } else {
        throw IllegalArgumentException_init_$Create$('Only KClass supported as classifier, got ' + toString_0(t));
      }
    }
    var tmp_0 = tmp;
    return isInterface(tmp_0, KClass) ? tmp_0 : THROW_CCE();
  }
  function typeOrThrow(_this__u8e3s4) {
    _init_properties_Platform_common_kt__3qzecs();
    var tmp0 = _this__u8e3s4.re_1;
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.requireNotNull' call
      if (tmp0 == null) {
        // Inline function 'kotlinx.serialization.internal.typeOrThrow.<anonymous>' call
        var message = 'Star projections in type arguments are not allowed, but had ' + toString_0(_this__u8e3s4.re_1);
        throw IllegalArgumentException_init_$Create$(toString(message));
      } else {
        tmp$ret$1 = tmp0;
        break $l$block;
      }
    }
    return tmp$ret$1;
  }
  function notRegisteredMessage(_this__u8e3s4) {
    _init_properties_Platform_common_kt__3qzecs();
    var tmp0_elvis_lhs = _this__u8e3s4.v9();
    return notRegisteredMessage_0(tmp0_elvis_lhs == null ? '<local class name not available>' : tmp0_elvis_lhs);
  }
  function compactArray(_this__u8e3s4) {
    _init_properties_Platform_common_kt__3qzecs();
    // Inline function 'kotlin.takeUnless' call
    var tmp;
    // Inline function 'kotlinx.serialization.internal.compactArray.<anonymous>' call
    // Inline function 'kotlin.collections.isNullOrEmpty' call
    if (!(_this__u8e3s4 == null || _this__u8e3s4.m())) {
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
  function notRegisteredMessage_0(className) {
    _init_properties_Platform_common_kt__3qzecs();
    return "Serializer for class '" + className + "' is not found.\n" + "Please ensure that class is marked as '@Serializable' and that the serialization compiler plugin is applied.\n";
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
    var missingFields = ArrayList_init_$Create$_0();
    var missingFieldsBits = goldenMask & ~seen;
    var inductionVariable = 0;
    if (inductionVariable < 32)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!((missingFieldsBits & 1) === 0)) {
          // Inline function 'kotlin.collections.plusAssign' call
          var element = descriptor.sk(i);
          missingFields.d(element);
        }
        missingFieldsBits = missingFieldsBits >>> 1 | 0;
      }
       while (inductionVariable < 32);
    throw MissingFieldException_init_$Create$(missingFields, descriptor.ck());
  }
  function hashCodeImpl(_this__u8e3s4, typeParams) {
    var result = getStringHashCode(_this__u8e3s4.ck());
    result = imul(31, result) + contentHashCode(typeParams) | 0;
    var elementDescriptors = get_elementDescriptors(_this__u8e3s4);
    // Inline function 'kotlinx.serialization.internal.elementsHashCodeBy' call
    // Inline function 'kotlin.collections.fold' call
    var accumulator = 1;
    var _iterator__ex2g4s = elementDescriptors.i();
    while (_iterator__ex2g4s.j()) {
      var element = _iterator__ex2g4s.k();
      // Inline function 'kotlinx.serialization.internal.elementsHashCodeBy.<anonymous>' call
      var hash = accumulator;
      var tmp = imul(31, hash);
      // Inline function 'kotlinx.serialization.internal.hashCodeImpl.<anonymous>' call
      // Inline function 'kotlin.hashCode' call
      var tmp0_safe_receiver = element.ck();
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
      accumulator = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    }
    var namesHash = accumulator;
    // Inline function 'kotlinx.serialization.internal.elementsHashCodeBy' call
    // Inline function 'kotlin.collections.fold' call
    var accumulator_0 = 1;
    var _iterator__ex2g4s_0 = elementDescriptors.i();
    while (_iterator__ex2g4s_0.j()) {
      var element_0 = _iterator__ex2g4s_0.k();
      // Inline function 'kotlinx.serialization.internal.elementsHashCodeBy.<anonymous>' call
      var hash_0 = accumulator_0;
      var tmp_0 = imul(31, hash_0);
      // Inline function 'kotlinx.serialization.internal.hashCodeImpl.<anonymous>' call
      // Inline function 'kotlin.hashCode' call
      var tmp0_safe_receiver_0 = element_0.ok();
      var tmp1_elvis_lhs_0 = tmp0_safe_receiver_0 == null ? null : hashCode(tmp0_safe_receiver_0);
      accumulator_0 = tmp_0 + (tmp1_elvis_lhs_0 == null ? 0 : tmp1_elvis_lhs_0) | 0;
    }
    var kindHash = accumulator_0;
    result = imul(31, result) + namesHash | 0;
    result = imul(31, result) + kindHash | 0;
    return result;
  }
  function _get_childSerializers__7vnyfa($this) {
    var tmp0 = $this.jt_1;
    // Inline function 'kotlin.getValue' call
    childSerializers$factory();
    return tmp0.r1();
  }
  function _get__hashCode__tgwhef_0($this) {
    var tmp0 = $this.lt_1;
    // Inline function 'kotlin.getValue' call
    _hashCode$factory_0();
    return tmp0.r1();
  }
  function buildIndices($this) {
    var indices = HashMap_init_$Create$();
    var inductionVariable = 0;
    var last = $this.et_1.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.collections.set' call
        var key = $this.et_1[i];
        indices.d2(key, i);
      }
       while (inductionVariable <= last);
    return indices;
  }
  function PluginGeneratedSerialDescriptor$childSerializers$delegate$lambda(this$0) {
    return function () {
      var tmp0_safe_receiver = this$0.bt_1;
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.pt();
      return tmp1_elvis_lhs == null ? get_EMPTY_SERIALIZER_ARRAY() : tmp1_elvis_lhs;
    };
  }
  function PluginGeneratedSerialDescriptor$typeParameterDescriptors$delegate$lambda(this$0) {
    return function () {
      var tmp0_safe_receiver = this$0.bt_1;
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.qt();
      var tmp;
      if (tmp1_safe_receiver == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.collections.map' call
        // Inline function 'kotlin.collections.mapTo' call
        var destination = ArrayList_init_$Create$(tmp1_safe_receiver.length);
        var inductionVariable = 0;
        var last = tmp1_safe_receiver.length;
        while (inductionVariable < last) {
          var item = tmp1_safe_receiver[inductionVariable];
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'kotlinx.serialization.internal.PluginGeneratedSerialDescriptor.typeParameterDescriptors$delegate.<anonymous>.<anonymous>' call
          var tmp$ret$0 = item.bj();
          destination.d(tmp$ret$0);
        }
        tmp = destination;
      }
      return compactArray(tmp);
    };
  }
  function PluginGeneratedSerialDescriptor$_hashCode$delegate$lambda(this$0) {
    return function () {
      return hashCodeImpl(this$0, this$0.mt());
    };
  }
  function PluginGeneratedSerialDescriptor$toString$lambda(this$0) {
    return function (i) {
      return this$0.sk(i) + ': ' + this$0.vk(i).ck();
    };
  }
  function PluginGeneratedSerialDescriptor(serialName, generatedSerializer, elementsCount) {
    generatedSerializer = generatedSerializer === VOID ? null : generatedSerializer;
    this.at_1 = serialName;
    this.bt_1 = generatedSerializer;
    this.ct_1 = elementsCount;
    this.dt_1 = -1;
    var tmp = this;
    var tmp_0 = 0;
    var tmp_1 = this.ct_1;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_2 = fillArrayVal(Array(tmp_1), null);
    while (tmp_0 < tmp_1) {
      tmp_2[tmp_0] = '[UNINITIALIZED]';
      tmp_0 = tmp_0 + 1 | 0;
    }
    tmp.et_1 = tmp_2;
    var tmp_3 = this;
    // Inline function 'kotlin.arrayOfNulls' call
    var size = this.ct_1;
    tmp_3.ft_1 = fillArrayVal(Array(size), null);
    this.gt_1 = null;
    this.ht_1 = booleanArray(this.ct_1);
    this.it_1 = emptyMap();
    var tmp_4 = this;
    var tmp_5 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp_4.jt_1 = lazy(tmp_5, PluginGeneratedSerialDescriptor$childSerializers$delegate$lambda(this));
    var tmp_6 = this;
    var tmp_7 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp_6.kt_1 = lazy(tmp_7, PluginGeneratedSerialDescriptor$typeParameterDescriptors$delegate$lambda(this));
    var tmp_8 = this;
    var tmp_9 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp_8.lt_1 = lazy(tmp_9, PluginGeneratedSerialDescriptor$_hashCode$delegate$lambda(this));
  }
  protoOf(PluginGeneratedSerialDescriptor).ck = function () {
    return this.at_1;
  };
  protoOf(PluginGeneratedSerialDescriptor).qk = function () {
    return this.ct_1;
  };
  protoOf(PluginGeneratedSerialDescriptor).ok = function () {
    return CLASS_getInstance();
  };
  protoOf(PluginGeneratedSerialDescriptor).rk = function () {
    var tmp0_elvis_lhs = this.gt_1;
    return tmp0_elvis_lhs == null ? emptyList() : tmp0_elvis_lhs;
  };
  protoOf(PluginGeneratedSerialDescriptor).ql = function () {
    return this.it_1.v1();
  };
  protoOf(PluginGeneratedSerialDescriptor).mt = function () {
    var tmp0 = this.kt_1;
    // Inline function 'kotlin.getValue' call
    typeParameterDescriptors$factory();
    return tmp0.r1();
  };
  protoOf(PluginGeneratedSerialDescriptor).nt = function (name, isOptional) {
    this.dt_1 = this.dt_1 + 1 | 0;
    this.et_1[this.dt_1] = name;
    this.ht_1[this.dt_1] = isOptional;
    this.ft_1[this.dt_1] = null;
    if (this.dt_1 === (this.ct_1 - 1 | 0)) {
      this.it_1 = buildIndices(this);
    }
  };
  protoOf(PluginGeneratedSerialDescriptor).vk = function (index) {
    return getChecked(_get_childSerializers__7vnyfa(this), index).bj();
  };
  protoOf(PluginGeneratedSerialDescriptor).wk = function (index) {
    return getChecked_0(this.ht_1, index);
  };
  protoOf(PluginGeneratedSerialDescriptor).uk = function (index) {
    var tmp0_elvis_lhs = getChecked(this.ft_1, index);
    return tmp0_elvis_lhs == null ? emptyList() : tmp0_elvis_lhs;
  };
  protoOf(PluginGeneratedSerialDescriptor).sk = function (index) {
    return getChecked(this.et_1, index);
  };
  protoOf(PluginGeneratedSerialDescriptor).tk = function (name) {
    var tmp0_elvis_lhs = this.it_1.u1(name);
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
      if (!(this.ck() === other.ck())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      // Inline function 'kotlinx.serialization.internal.PluginGeneratedSerialDescriptor.equals.<anonymous>' call
      if (!contentEquals(this.mt(), other.mt())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.qk() === other.qk())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var inductionVariable = 0;
      var last = this.qk();
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (!(this.vk(index).ck() === other.vk(index).ck())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
          if (!equals(this.vk(index).ok(), other.vk(index).ok())) {
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
    return _get__hashCode__tgwhef_0(this);
  };
  protoOf(PluginGeneratedSerialDescriptor).toString = function () {
    var tmp = until(0, this.ct_1);
    var tmp_0 = this.ck() + '(';
    return joinToString(tmp, ', ', tmp_0, ')', VOID, VOID, PluginGeneratedSerialDescriptor$toString$lambda(this));
  };
  function childSerializers$factory() {
    return getPropertyCallableRef('childSerializers', 1, KProperty1, function (receiver) {
      return _get_childSerializers__7vnyfa(receiver);
    }, null);
  }
  function typeParameterDescriptors$factory() {
    return getPropertyCallableRef('typeParameterDescriptors', 1, KProperty1, function (receiver) {
      return receiver.mt();
    }, null);
  }
  function _hashCode$factory_0() {
    return getPropertyCallableRef('_hashCode', 1, KProperty1, function (receiver) {
      return _get__hashCode__tgwhef_0(receiver);
    }, null);
  }
  function get_EMPTY_SERIALIZER_ARRAY() {
    _init_properties_PluginHelperInterfaces_kt__xgvzfp();
    return EMPTY_SERIALIZER_ARRAY;
  }
  var EMPTY_SERIALIZER_ARRAY;
  function SerializerFactory() {
  }
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
  function CharArraySerializer_0() {
    CharArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_1(Companion_getInstance_1()));
  }
  protoOf(CharArraySerializer_0).du = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(CharArraySerializer_0).qq = function (_this__u8e3s4) {
    return this.du((!(_this__u8e3s4 == null) ? isCharArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(CharArraySerializer_0).eu = function (_this__u8e3s4) {
    return new CharArrayBuilder(_this__u8e3s4);
  };
  protoOf(CharArraySerializer_0).lp = function (_this__u8e3s4) {
    return this.eu((!(_this__u8e3s4 == null) ? isCharArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(CharArraySerializer_0).bs = function () {
    return charArray(0);
  };
  protoOf(CharArraySerializer_0).fu = function (decoder, index, builder, checkIndex) {
    builder.iu(decoder.pm(this.sr_1, index));
  };
  protoOf(CharArraySerializer_0).wp = function (decoder, index, builder, checkIndex) {
    return this.fu(decoder, index, builder instanceof CharArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(CharArraySerializer_0).cs = function (decoder, index, builder, checkIndex) {
    return this.fu(decoder, index, builder instanceof CharArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(CharArraySerializer_0).ju = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.tn(this.sr_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(CharArraySerializer_0).ds = function (encoder, content, size) {
    return this.ju(encoder, (!(content == null) ? isCharArray(content) : false) ? content : THROW_CCE(), size);
  };
  var CharArraySerializer_instance;
  function CharArraySerializer_getInstance() {
    if (CharArraySerializer_instance == null)
      new CharArraySerializer_0();
    return CharArraySerializer_instance;
  }
  function DoubleArraySerializer_0() {
    DoubleArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_2(DoubleCompanionObject_instance));
  }
  protoOf(DoubleArraySerializer_0).mu = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(DoubleArraySerializer_0).qq = function (_this__u8e3s4) {
    return this.mu((!(_this__u8e3s4 == null) ? isDoubleArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(DoubleArraySerializer_0).nu = function (_this__u8e3s4) {
    return new DoubleArrayBuilder(_this__u8e3s4);
  };
  protoOf(DoubleArraySerializer_0).lp = function (_this__u8e3s4) {
    return this.nu((!(_this__u8e3s4 == null) ? isDoubleArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(DoubleArraySerializer_0).bs = function () {
    return new Float64Array(0);
  };
  protoOf(DoubleArraySerializer_0).ou = function (decoder, index, builder, checkIndex) {
    builder.ru(decoder.om(this.sr_1, index));
  };
  protoOf(DoubleArraySerializer_0).wp = function (decoder, index, builder, checkIndex) {
    return this.ou(decoder, index, builder instanceof DoubleArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(DoubleArraySerializer_0).cs = function (decoder, index, builder, checkIndex) {
    return this.ou(decoder, index, builder instanceof DoubleArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(DoubleArraySerializer_0).su = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.sn(this.sr_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(DoubleArraySerializer_0).ds = function (encoder, content, size) {
    return this.su(encoder, (!(content == null) ? isDoubleArray(content) : false) ? content : THROW_CCE(), size);
  };
  var DoubleArraySerializer_instance;
  function DoubleArraySerializer_getInstance() {
    if (DoubleArraySerializer_instance == null)
      new DoubleArraySerializer_0();
    return DoubleArraySerializer_instance;
  }
  function FloatArraySerializer_0() {
    FloatArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_3(FloatCompanionObject_instance));
  }
  protoOf(FloatArraySerializer_0).vu = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(FloatArraySerializer_0).qq = function (_this__u8e3s4) {
    return this.vu((!(_this__u8e3s4 == null) ? isFloatArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(FloatArraySerializer_0).wu = function (_this__u8e3s4) {
    return new FloatArrayBuilder(_this__u8e3s4);
  };
  protoOf(FloatArraySerializer_0).lp = function (_this__u8e3s4) {
    return this.wu((!(_this__u8e3s4 == null) ? isFloatArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(FloatArraySerializer_0).bs = function () {
    return new Float32Array(0);
  };
  protoOf(FloatArraySerializer_0).xu = function (decoder, index, builder, checkIndex) {
    builder.av(decoder.nm(this.sr_1, index));
  };
  protoOf(FloatArraySerializer_0).wp = function (decoder, index, builder, checkIndex) {
    return this.xu(decoder, index, builder instanceof FloatArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(FloatArraySerializer_0).cs = function (decoder, index, builder, checkIndex) {
    return this.xu(decoder, index, builder instanceof FloatArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(FloatArraySerializer_0).bv = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.rn(this.sr_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(FloatArraySerializer_0).ds = function (encoder, content, size) {
    return this.bv(encoder, (!(content == null) ? isFloatArray(content) : false) ? content : THROW_CCE(), size);
  };
  var FloatArraySerializer_instance;
  function FloatArraySerializer_getInstance() {
    if (FloatArraySerializer_instance == null)
      new FloatArraySerializer_0();
    return FloatArraySerializer_instance;
  }
  function LongArraySerializer_0() {
    LongArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_4(Companion_getInstance_2()));
  }
  protoOf(LongArraySerializer_0).ev = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(LongArraySerializer_0).qq = function (_this__u8e3s4) {
    return this.ev((!(_this__u8e3s4 == null) ? isLongArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LongArraySerializer_0).fv = function (_this__u8e3s4) {
    return new LongArrayBuilder(_this__u8e3s4);
  };
  protoOf(LongArraySerializer_0).lp = function (_this__u8e3s4) {
    return this.fv((!(_this__u8e3s4 == null) ? isLongArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LongArraySerializer_0).bs = function () {
    return longArray(0);
  };
  protoOf(LongArraySerializer_0).gv = function (decoder, index, builder, checkIndex) {
    builder.jv(decoder.mm(this.sr_1, index));
  };
  protoOf(LongArraySerializer_0).wp = function (decoder, index, builder, checkIndex) {
    return this.gv(decoder, index, builder instanceof LongArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(LongArraySerializer_0).cs = function (decoder, index, builder, checkIndex) {
    return this.gv(decoder, index, builder instanceof LongArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(LongArraySerializer_0).kv = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.qn(this.sr_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(LongArraySerializer_0).ds = function (encoder, content, size) {
    return this.kv(encoder, (!(content == null) ? isLongArray(content) : false) ? content : THROW_CCE(), size);
  };
  var LongArraySerializer_instance;
  function LongArraySerializer_getInstance() {
    if (LongArraySerializer_instance == null)
      new LongArraySerializer_0();
    return LongArraySerializer_instance;
  }
  function ULongArraySerializer_0() {
    ULongArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_5(Companion_getInstance_3()));
  }
  protoOf(ULongArraySerializer_0).nv = function (_this__u8e3s4) {
    return _ULongArray___get_size__impl__ju6dtr(_this__u8e3s4);
  };
  protoOf(ULongArraySerializer_0).qq = function (_this__u8e3s4) {
    return this.nv(_this__u8e3s4 instanceof ULongArray ? _this__u8e3s4.qi_1 : THROW_CCE());
  };
  protoOf(ULongArraySerializer_0).ov = function (_this__u8e3s4) {
    return new ULongArrayBuilder(_this__u8e3s4);
  };
  protoOf(ULongArraySerializer_0).lp = function (_this__u8e3s4) {
    return this.ov(_this__u8e3s4 instanceof ULongArray ? _this__u8e3s4.qi_1 : THROW_CCE());
  };
  protoOf(ULongArraySerializer_0).pv = function () {
    return _ULongArray___init__impl__twm1l3(0);
  };
  protoOf(ULongArraySerializer_0).bs = function () {
    return new ULongArray(this.pv());
  };
  protoOf(ULongArraySerializer_0).qv = function (decoder, index, builder, checkIndex) {
    // Inline function 'kotlin.toULong' call
    var this_0 = decoder.rm(this.sr_1, index).yl();
    var tmp$ret$0 = _ULong___init__impl__c78o9k(this_0);
    builder.tv(tmp$ret$0);
  };
  protoOf(ULongArraySerializer_0).wp = function (decoder, index, builder, checkIndex) {
    return this.qv(decoder, index, builder instanceof ULongArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(ULongArraySerializer_0).cs = function (decoder, index, builder, checkIndex) {
    return this.qv(decoder, index, builder instanceof ULongArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(ULongArraySerializer_0).uv = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = encoder.vn(this.sr_1, i);
        // Inline function 'kotlin.ULong.toLong' call
        var this_0 = ULongArray__get_impl_pr71q9(content, i);
        var tmp$ret$0 = _ULong___get_data__impl__fggpzb(this_0);
        tmp.gn(tmp$ret$0);
      }
       while (inductionVariable < size);
  };
  protoOf(ULongArraySerializer_0).ds = function (encoder, content, size) {
    return this.uv(encoder, content instanceof ULongArray ? content.qi_1 : THROW_CCE(), size);
  };
  var ULongArraySerializer_instance;
  function ULongArraySerializer_getInstance() {
    if (ULongArraySerializer_instance == null)
      new ULongArraySerializer_0();
    return ULongArraySerializer_instance;
  }
  function IntArraySerializer_0() {
    IntArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_6(IntCompanionObject_instance));
  }
  protoOf(IntArraySerializer_0).xv = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(IntArraySerializer_0).qq = function (_this__u8e3s4) {
    return this.xv((!(_this__u8e3s4 == null) ? isIntArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(IntArraySerializer_0).yv = function (_this__u8e3s4) {
    return new IntArrayBuilder(_this__u8e3s4);
  };
  protoOf(IntArraySerializer_0).lp = function (_this__u8e3s4) {
    return this.yv((!(_this__u8e3s4 == null) ? isIntArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(IntArraySerializer_0).bs = function () {
    return new Int32Array(0);
  };
  protoOf(IntArraySerializer_0).zv = function (decoder, index, builder, checkIndex) {
    builder.cw(decoder.lm(this.sr_1, index));
  };
  protoOf(IntArraySerializer_0).wp = function (decoder, index, builder, checkIndex) {
    return this.zv(decoder, index, builder instanceof IntArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(IntArraySerializer_0).cs = function (decoder, index, builder, checkIndex) {
    return this.zv(decoder, index, builder instanceof IntArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(IntArraySerializer_0).dw = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.pn(this.sr_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(IntArraySerializer_0).ds = function (encoder, content, size) {
    return this.dw(encoder, (!(content == null) ? isIntArray(content) : false) ? content : THROW_CCE(), size);
  };
  var IntArraySerializer_instance;
  function IntArraySerializer_getInstance() {
    if (IntArraySerializer_instance == null)
      new IntArraySerializer_0();
    return IntArraySerializer_instance;
  }
  function UIntArraySerializer_0() {
    UIntArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_7(Companion_getInstance_4()));
  }
  protoOf(UIntArraySerializer_0).gw = function (_this__u8e3s4) {
    return _UIntArray___get_size__impl__r6l8ci(_this__u8e3s4);
  };
  protoOf(UIntArraySerializer_0).qq = function (_this__u8e3s4) {
    return this.gw(_this__u8e3s4 instanceof UIntArray ? _this__u8e3s4.gi_1 : THROW_CCE());
  };
  protoOf(UIntArraySerializer_0).hw = function (_this__u8e3s4) {
    return new UIntArrayBuilder(_this__u8e3s4);
  };
  protoOf(UIntArraySerializer_0).lp = function (_this__u8e3s4) {
    return this.hw(_this__u8e3s4 instanceof UIntArray ? _this__u8e3s4.gi_1 : THROW_CCE());
  };
  protoOf(UIntArraySerializer_0).iw = function () {
    return _UIntArray___init__impl__ghjpc6(0);
  };
  protoOf(UIntArraySerializer_0).bs = function () {
    return new UIntArray(this.iw());
  };
  protoOf(UIntArraySerializer_0).jw = function (decoder, index, builder, checkIndex) {
    // Inline function 'kotlin.toUInt' call
    var this_0 = decoder.rm(this.sr_1, index).xl();
    var tmp$ret$0 = _UInt___init__impl__l7qpdl(this_0);
    builder.mw(tmp$ret$0);
  };
  protoOf(UIntArraySerializer_0).wp = function (decoder, index, builder, checkIndex) {
    return this.jw(decoder, index, builder instanceof UIntArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(UIntArraySerializer_0).cs = function (decoder, index, builder, checkIndex) {
    return this.jw(decoder, index, builder instanceof UIntArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(UIntArraySerializer_0).nw = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = encoder.vn(this.sr_1, i);
        // Inline function 'kotlin.UInt.toInt' call
        var this_0 = UIntArray__get_impl_gp5kza(content, i);
        var tmp$ret$0 = _UInt___get_data__impl__f0vqqw(this_0);
        tmp.fn(tmp$ret$0);
      }
       while (inductionVariable < size);
  };
  protoOf(UIntArraySerializer_0).ds = function (encoder, content, size) {
    return this.nw(encoder, content instanceof UIntArray ? content.gi_1 : THROW_CCE(), size);
  };
  var UIntArraySerializer_instance;
  function UIntArraySerializer_getInstance() {
    if (UIntArraySerializer_instance == null)
      new UIntArraySerializer_0();
    return UIntArraySerializer_instance;
  }
  function ShortArraySerializer_0() {
    ShortArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_8(ShortCompanionObject_instance));
  }
  protoOf(ShortArraySerializer_0).qw = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(ShortArraySerializer_0).qq = function (_this__u8e3s4) {
    return this.qw((!(_this__u8e3s4 == null) ? isShortArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ShortArraySerializer_0).rw = function (_this__u8e3s4) {
    return new ShortArrayBuilder(_this__u8e3s4);
  };
  protoOf(ShortArraySerializer_0).lp = function (_this__u8e3s4) {
    return this.rw((!(_this__u8e3s4 == null) ? isShortArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ShortArraySerializer_0).bs = function () {
    return new Int16Array(0);
  };
  protoOf(ShortArraySerializer_0).sw = function (decoder, index, builder, checkIndex) {
    builder.vw(decoder.km(this.sr_1, index));
  };
  protoOf(ShortArraySerializer_0).wp = function (decoder, index, builder, checkIndex) {
    return this.sw(decoder, index, builder instanceof ShortArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(ShortArraySerializer_0).cs = function (decoder, index, builder, checkIndex) {
    return this.sw(decoder, index, builder instanceof ShortArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(ShortArraySerializer_0).ww = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.on(this.sr_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(ShortArraySerializer_0).ds = function (encoder, content, size) {
    return this.ww(encoder, (!(content == null) ? isShortArray(content) : false) ? content : THROW_CCE(), size);
  };
  var ShortArraySerializer_instance;
  function ShortArraySerializer_getInstance() {
    if (ShortArraySerializer_instance == null)
      new ShortArraySerializer_0();
    return ShortArraySerializer_instance;
  }
  function UShortArraySerializer_0() {
    UShortArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_9(Companion_getInstance_5()));
  }
  protoOf(UShortArraySerializer_0).zw = function (_this__u8e3s4) {
    return _UShortArray___get_size__impl__jqto1b(_this__u8e3s4);
  };
  protoOf(UShortArraySerializer_0).qq = function (_this__u8e3s4) {
    return this.zw(_this__u8e3s4 instanceof UShortArray ? _this__u8e3s4.aj_1 : THROW_CCE());
  };
  protoOf(UShortArraySerializer_0).ax = function (_this__u8e3s4) {
    return new UShortArrayBuilder(_this__u8e3s4);
  };
  protoOf(UShortArraySerializer_0).lp = function (_this__u8e3s4) {
    return this.ax(_this__u8e3s4 instanceof UShortArray ? _this__u8e3s4.aj_1 : THROW_CCE());
  };
  protoOf(UShortArraySerializer_0).bx = function () {
    return _UShortArray___init__impl__9b26ef(0);
  };
  protoOf(UShortArraySerializer_0).bs = function () {
    return new UShortArray(this.bx());
  };
  protoOf(UShortArraySerializer_0).cx = function (decoder, index, builder, checkIndex) {
    // Inline function 'kotlin.toUShort' call
    var this_0 = decoder.rm(this.sr_1, index).wl();
    var tmp$ret$0 = _UShort___init__impl__jigrne(this_0);
    builder.fx(tmp$ret$0);
  };
  protoOf(UShortArraySerializer_0).wp = function (decoder, index, builder, checkIndex) {
    return this.cx(decoder, index, builder instanceof UShortArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(UShortArraySerializer_0).cs = function (decoder, index, builder, checkIndex) {
    return this.cx(decoder, index, builder instanceof UShortArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(UShortArraySerializer_0).gx = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = encoder.vn(this.sr_1, i);
        // Inline function 'kotlin.UShort.toShort' call
        var this_0 = UShortArray__get_impl_fnbhmx(content, i);
        var tmp$ret$0 = _UShort___get_data__impl__g0245(this_0);
        tmp.en(tmp$ret$0);
      }
       while (inductionVariable < size);
  };
  protoOf(UShortArraySerializer_0).ds = function (encoder, content, size) {
    return this.gx(encoder, content instanceof UShortArray ? content.aj_1 : THROW_CCE(), size);
  };
  var UShortArraySerializer_instance;
  function UShortArraySerializer_getInstance() {
    if (UShortArraySerializer_instance == null)
      new UShortArraySerializer_0();
    return UShortArraySerializer_instance;
  }
  function ByteArraySerializer_0() {
    ByteArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_10(ByteCompanionObject_instance));
  }
  protoOf(ByteArraySerializer_0).jx = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(ByteArraySerializer_0).qq = function (_this__u8e3s4) {
    return this.jx((!(_this__u8e3s4 == null) ? isByteArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ByteArraySerializer_0).kx = function (_this__u8e3s4) {
    return new ByteArrayBuilder(_this__u8e3s4);
  };
  protoOf(ByteArraySerializer_0).lp = function (_this__u8e3s4) {
    return this.kx((!(_this__u8e3s4 == null) ? isByteArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ByteArraySerializer_0).bs = function () {
    return new Int8Array(0);
  };
  protoOf(ByteArraySerializer_0).lx = function (decoder, index, builder, checkIndex) {
    builder.ox(decoder.jm(this.sr_1, index));
  };
  protoOf(ByteArraySerializer_0).wp = function (decoder, index, builder, checkIndex) {
    return this.lx(decoder, index, builder instanceof ByteArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(ByteArraySerializer_0).cs = function (decoder, index, builder, checkIndex) {
    return this.lx(decoder, index, builder instanceof ByteArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(ByteArraySerializer_0).px = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.nn(this.sr_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(ByteArraySerializer_0).ds = function (encoder, content, size) {
    return this.px(encoder, (!(content == null) ? isByteArray(content) : false) ? content : THROW_CCE(), size);
  };
  var ByteArraySerializer_instance;
  function ByteArraySerializer_getInstance() {
    if (ByteArraySerializer_instance == null)
      new ByteArraySerializer_0();
    return ByteArraySerializer_instance;
  }
  function UByteArraySerializer_0() {
    UByteArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_11(Companion_getInstance_6()));
  }
  protoOf(UByteArraySerializer_0).sx = function (_this__u8e3s4) {
    return _UByteArray___get_size__impl__h6pkdv(_this__u8e3s4);
  };
  protoOf(UByteArraySerializer_0).qq = function (_this__u8e3s4) {
    return this.sx(_this__u8e3s4 instanceof UByteArray ? _this__u8e3s4.wh_1 : THROW_CCE());
  };
  protoOf(UByteArraySerializer_0).tx = function (_this__u8e3s4) {
    return new UByteArrayBuilder(_this__u8e3s4);
  };
  protoOf(UByteArraySerializer_0).lp = function (_this__u8e3s4) {
    return this.tx(_this__u8e3s4 instanceof UByteArray ? _this__u8e3s4.wh_1 : THROW_CCE());
  };
  protoOf(UByteArraySerializer_0).ux = function () {
    return _UByteArray___init__impl__ip4y9n(0);
  };
  protoOf(UByteArraySerializer_0).bs = function () {
    return new UByteArray(this.ux());
  };
  protoOf(UByteArraySerializer_0).vx = function (decoder, index, builder, checkIndex) {
    // Inline function 'kotlin.toUByte' call
    var this_0 = decoder.rm(this.sr_1, index).vl();
    var tmp$ret$0 = _UByte___init__impl__g9hnc4(this_0);
    builder.yx(tmp$ret$0);
  };
  protoOf(UByteArraySerializer_0).wp = function (decoder, index, builder, checkIndex) {
    return this.vx(decoder, index, builder instanceof UByteArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(UByteArraySerializer_0).cs = function (decoder, index, builder, checkIndex) {
    return this.vx(decoder, index, builder instanceof UByteArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(UByteArraySerializer_0).zx = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = encoder.vn(this.sr_1, i);
        // Inline function 'kotlin.UByte.toByte' call
        var this_0 = UByteArray__get_impl_t5f3hv(content, i);
        var tmp$ret$0 = _UByte___get_data__impl__jof9qr(this_0);
        tmp.dn(tmp$ret$0);
      }
       while (inductionVariable < size);
  };
  protoOf(UByteArraySerializer_0).ds = function (encoder, content, size) {
    return this.zx(encoder, content instanceof UByteArray ? content.wh_1 : THROW_CCE(), size);
  };
  var UByteArraySerializer_instance;
  function UByteArraySerializer_getInstance() {
    if (UByteArraySerializer_instance == null)
      new UByteArraySerializer_0();
    return UByteArraySerializer_instance;
  }
  function BooleanArraySerializer_0() {
    BooleanArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_12(BooleanCompanionObject_instance));
  }
  protoOf(BooleanArraySerializer_0).cy = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(BooleanArraySerializer_0).qq = function (_this__u8e3s4) {
    return this.cy((!(_this__u8e3s4 == null) ? isBooleanArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(BooleanArraySerializer_0).dy = function (_this__u8e3s4) {
    return new BooleanArrayBuilder(_this__u8e3s4);
  };
  protoOf(BooleanArraySerializer_0).lp = function (_this__u8e3s4) {
    return this.dy((!(_this__u8e3s4 == null) ? isBooleanArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(BooleanArraySerializer_0).bs = function () {
    return booleanArray(0);
  };
  protoOf(BooleanArraySerializer_0).ey = function (decoder, index, builder, checkIndex) {
    builder.hy(decoder.im(this.sr_1, index));
  };
  protoOf(BooleanArraySerializer_0).wp = function (decoder, index, builder, checkIndex) {
    return this.ey(decoder, index, builder instanceof BooleanArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(BooleanArraySerializer_0).cs = function (decoder, index, builder, checkIndex) {
    return this.ey(decoder, index, builder instanceof BooleanArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(BooleanArraySerializer_0).iy = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.mn(this.sr_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(BooleanArraySerializer_0).ds = function (encoder, content, size) {
    return this.iy(encoder, (!(content == null) ? isBooleanArray(content) : false) ? content : THROW_CCE(), size);
  };
  var BooleanArraySerializer_instance;
  function BooleanArraySerializer_getInstance() {
    if (BooleanArraySerializer_instance == null)
      new BooleanArraySerializer_0();
    return BooleanArraySerializer_instance;
  }
  function CharArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.gu_1 = bufferWithData;
    this.hu_1 = bufferWithData.length;
    this.yr(10);
  }
  protoOf(CharArrayBuilder).ur = function () {
    return this.hu_1;
  };
  protoOf(CharArrayBuilder).yr = function (requiredCapacity) {
    if (this.gu_1.length < requiredCapacity)
      this.gu_1 = copyOf(this.gu_1, coerceAtLeast(requiredCapacity, imul(this.gu_1.length, 2)));
  };
  protoOf(CharArrayBuilder).iu = function (c) {
    this.fs();
    var tmp = this.gu_1;
    var _unary__edvuaz = this.hu_1;
    this.hu_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(CharArrayBuilder).wr = function () {
    return copyOf(this.gu_1, this.hu_1);
  };
  function DoubleArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.pu_1 = bufferWithData;
    this.qu_1 = bufferWithData.length;
    this.yr(10);
  }
  protoOf(DoubleArrayBuilder).ur = function () {
    return this.qu_1;
  };
  protoOf(DoubleArrayBuilder).yr = function (requiredCapacity) {
    if (this.pu_1.length < requiredCapacity)
      this.pu_1 = copyOf_0(this.pu_1, coerceAtLeast(requiredCapacity, imul(this.pu_1.length, 2)));
  };
  protoOf(DoubleArrayBuilder).ru = function (c) {
    this.fs();
    var tmp = this.pu_1;
    var _unary__edvuaz = this.qu_1;
    this.qu_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(DoubleArrayBuilder).wr = function () {
    return copyOf_0(this.pu_1, this.qu_1);
  };
  function FloatArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.yu_1 = bufferWithData;
    this.zu_1 = bufferWithData.length;
    this.yr(10);
  }
  protoOf(FloatArrayBuilder).ur = function () {
    return this.zu_1;
  };
  protoOf(FloatArrayBuilder).yr = function (requiredCapacity) {
    if (this.yu_1.length < requiredCapacity)
      this.yu_1 = copyOf_1(this.yu_1, coerceAtLeast(requiredCapacity, imul(this.yu_1.length, 2)));
  };
  protoOf(FloatArrayBuilder).av = function (c) {
    this.fs();
    var tmp = this.yu_1;
    var _unary__edvuaz = this.zu_1;
    this.zu_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(FloatArrayBuilder).wr = function () {
    return copyOf_1(this.yu_1, this.zu_1);
  };
  function LongArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.hv_1 = bufferWithData;
    this.iv_1 = bufferWithData.length;
    this.yr(10);
  }
  protoOf(LongArrayBuilder).ur = function () {
    return this.iv_1;
  };
  protoOf(LongArrayBuilder).yr = function (requiredCapacity) {
    if (this.hv_1.length < requiredCapacity)
      this.hv_1 = copyOf_2(this.hv_1, coerceAtLeast(requiredCapacity, imul(this.hv_1.length, 2)));
  };
  protoOf(LongArrayBuilder).jv = function (c) {
    this.fs();
    var tmp = this.hv_1;
    var _unary__edvuaz = this.iv_1;
    this.iv_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(LongArrayBuilder).wr = function () {
    return copyOf_2(this.hv_1, this.iv_1);
  };
  function ULongArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.rv_1 = bufferWithData;
    this.sv_1 = _ULongArray___get_size__impl__ju6dtr(bufferWithData);
    this.yr(10);
  }
  protoOf(ULongArrayBuilder).ur = function () {
    return this.sv_1;
  };
  protoOf(ULongArrayBuilder).yr = function (requiredCapacity) {
    if (_ULongArray___get_size__impl__ju6dtr(this.rv_1) < requiredCapacity) {
      var tmp = this;
      var tmp0 = this.rv_1;
      // Inline function 'kotlin.collections.copyOf' call
      var newSize = coerceAtLeast(requiredCapacity, imul(_ULongArray___get_size__impl__ju6dtr(this.rv_1), 2));
      tmp.rv_1 = _ULongArray___init__impl__twm1l3_0(copyOf_2(_ULongArray___get_storage__impl__28e64j(tmp0), newSize));
    }
  };
  protoOf(ULongArrayBuilder).tv = function (c) {
    this.fs();
    var tmp = this.rv_1;
    var _unary__edvuaz = this.sv_1;
    this.sv_1 = _unary__edvuaz + 1 | 0;
    ULongArray__set_impl_z19mvh(tmp, _unary__edvuaz, c);
  };
  protoOf(ULongArrayBuilder).jy = function () {
    var tmp0 = this.rv_1;
    // Inline function 'kotlin.collections.copyOf' call
    var newSize = this.sv_1;
    return _ULongArray___init__impl__twm1l3_0(copyOf_2(_ULongArray___get_storage__impl__28e64j(tmp0), newSize));
  };
  protoOf(ULongArrayBuilder).wr = function () {
    return new ULongArray(this.jy());
  };
  function IntArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.aw_1 = bufferWithData;
    this.bw_1 = bufferWithData.length;
    this.yr(10);
  }
  protoOf(IntArrayBuilder).ur = function () {
    return this.bw_1;
  };
  protoOf(IntArrayBuilder).yr = function (requiredCapacity) {
    if (this.aw_1.length < requiredCapacity)
      this.aw_1 = copyOf_3(this.aw_1, coerceAtLeast(requiredCapacity, imul(this.aw_1.length, 2)));
  };
  protoOf(IntArrayBuilder).cw = function (c) {
    this.fs();
    var tmp = this.aw_1;
    var _unary__edvuaz = this.bw_1;
    this.bw_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(IntArrayBuilder).wr = function () {
    return copyOf_3(this.aw_1, this.bw_1);
  };
  function UIntArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.kw_1 = bufferWithData;
    this.lw_1 = _UIntArray___get_size__impl__r6l8ci(bufferWithData);
    this.yr(10);
  }
  protoOf(UIntArrayBuilder).ur = function () {
    return this.lw_1;
  };
  protoOf(UIntArrayBuilder).yr = function (requiredCapacity) {
    if (_UIntArray___get_size__impl__r6l8ci(this.kw_1) < requiredCapacity) {
      var tmp = this;
      var tmp0 = this.kw_1;
      // Inline function 'kotlin.collections.copyOf' call
      var newSize = coerceAtLeast(requiredCapacity, imul(_UIntArray___get_size__impl__r6l8ci(this.kw_1), 2));
      tmp.kw_1 = _UIntArray___init__impl__ghjpc6_0(copyOf_3(_UIntArray___get_storage__impl__92a0v0(tmp0), newSize));
    }
  };
  protoOf(UIntArrayBuilder).mw = function (c) {
    this.fs();
    var tmp = this.kw_1;
    var _unary__edvuaz = this.lw_1;
    this.lw_1 = _unary__edvuaz + 1 | 0;
    UIntArray__set_impl_7f2zu2(tmp, _unary__edvuaz, c);
  };
  protoOf(UIntArrayBuilder).ky = function () {
    var tmp0 = this.kw_1;
    // Inline function 'kotlin.collections.copyOf' call
    var newSize = this.lw_1;
    return _UIntArray___init__impl__ghjpc6_0(copyOf_3(_UIntArray___get_storage__impl__92a0v0(tmp0), newSize));
  };
  protoOf(UIntArrayBuilder).wr = function () {
    return new UIntArray(this.ky());
  };
  function ShortArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.tw_1 = bufferWithData;
    this.uw_1 = bufferWithData.length;
    this.yr(10);
  }
  protoOf(ShortArrayBuilder).ur = function () {
    return this.uw_1;
  };
  protoOf(ShortArrayBuilder).yr = function (requiredCapacity) {
    if (this.tw_1.length < requiredCapacity)
      this.tw_1 = copyOf_4(this.tw_1, coerceAtLeast(requiredCapacity, imul(this.tw_1.length, 2)));
  };
  protoOf(ShortArrayBuilder).vw = function (c) {
    this.fs();
    var tmp = this.tw_1;
    var _unary__edvuaz = this.uw_1;
    this.uw_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(ShortArrayBuilder).wr = function () {
    return copyOf_4(this.tw_1, this.uw_1);
  };
  function UShortArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.dx_1 = bufferWithData;
    this.ex_1 = _UShortArray___get_size__impl__jqto1b(bufferWithData);
    this.yr(10);
  }
  protoOf(UShortArrayBuilder).ur = function () {
    return this.ex_1;
  };
  protoOf(UShortArrayBuilder).yr = function (requiredCapacity) {
    if (_UShortArray___get_size__impl__jqto1b(this.dx_1) < requiredCapacity) {
      var tmp = this;
      var tmp0 = this.dx_1;
      // Inline function 'kotlin.collections.copyOf' call
      var newSize = coerceAtLeast(requiredCapacity, imul(_UShortArray___get_size__impl__jqto1b(this.dx_1), 2));
      tmp.dx_1 = _UShortArray___init__impl__9b26ef_0(copyOf_4(_UShortArray___get_storage__impl__t2jpv5(tmp0), newSize));
    }
  };
  protoOf(UShortArrayBuilder).fx = function (c) {
    this.fs();
    var tmp = this.dx_1;
    var _unary__edvuaz = this.ex_1;
    this.ex_1 = _unary__edvuaz + 1 | 0;
    UShortArray__set_impl_6d8whp(tmp, _unary__edvuaz, c);
  };
  protoOf(UShortArrayBuilder).ly = function () {
    var tmp0 = this.dx_1;
    // Inline function 'kotlin.collections.copyOf' call
    var newSize = this.ex_1;
    return _UShortArray___init__impl__9b26ef_0(copyOf_4(_UShortArray___get_storage__impl__t2jpv5(tmp0), newSize));
  };
  protoOf(UShortArrayBuilder).wr = function () {
    return new UShortArray(this.ly());
  };
  function ByteArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.mx_1 = bufferWithData;
    this.nx_1 = bufferWithData.length;
    this.yr(10);
  }
  protoOf(ByteArrayBuilder).ur = function () {
    return this.nx_1;
  };
  protoOf(ByteArrayBuilder).yr = function (requiredCapacity) {
    if (this.mx_1.length < requiredCapacity)
      this.mx_1 = copyOf_5(this.mx_1, coerceAtLeast(requiredCapacity, imul(this.mx_1.length, 2)));
  };
  protoOf(ByteArrayBuilder).ox = function (c) {
    this.fs();
    var tmp = this.mx_1;
    var _unary__edvuaz = this.nx_1;
    this.nx_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(ByteArrayBuilder).wr = function () {
    return copyOf_5(this.mx_1, this.nx_1);
  };
  function UByteArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.wx_1 = bufferWithData;
    this.xx_1 = _UByteArray___get_size__impl__h6pkdv(bufferWithData);
    this.yr(10);
  }
  protoOf(UByteArrayBuilder).ur = function () {
    return this.xx_1;
  };
  protoOf(UByteArrayBuilder).yr = function (requiredCapacity) {
    if (_UByteArray___get_size__impl__h6pkdv(this.wx_1) < requiredCapacity) {
      var tmp = this;
      var tmp0 = this.wx_1;
      // Inline function 'kotlin.collections.copyOf' call
      var newSize = coerceAtLeast(requiredCapacity, imul(_UByteArray___get_size__impl__h6pkdv(this.wx_1), 2));
      tmp.wx_1 = _UByteArray___init__impl__ip4y9n_0(copyOf_5(_UByteArray___get_storage__impl__d4kctt(tmp0), newSize));
    }
  };
  protoOf(UByteArrayBuilder).yx = function (c) {
    this.fs();
    var tmp = this.wx_1;
    var _unary__edvuaz = this.xx_1;
    this.xx_1 = _unary__edvuaz + 1 | 0;
    UByteArray__set_impl_jvcicn(tmp, _unary__edvuaz, c);
  };
  protoOf(UByteArrayBuilder).my = function () {
    var tmp0 = this.wx_1;
    // Inline function 'kotlin.collections.copyOf' call
    var newSize = this.xx_1;
    return _UByteArray___init__impl__ip4y9n_0(copyOf_5(_UByteArray___get_storage__impl__d4kctt(tmp0), newSize));
  };
  protoOf(UByteArrayBuilder).wr = function () {
    return new UByteArray(this.my());
  };
  function BooleanArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.fy_1 = bufferWithData;
    this.gy_1 = bufferWithData.length;
    this.yr(10);
  }
  protoOf(BooleanArrayBuilder).ur = function () {
    return this.gy_1;
  };
  protoOf(BooleanArrayBuilder).yr = function (requiredCapacity) {
    if (this.fy_1.length < requiredCapacity)
      this.fy_1 = copyOf_6(this.fy_1, coerceAtLeast(requiredCapacity, imul(this.fy_1.length, 2)));
  };
  protoOf(BooleanArrayBuilder).hy = function (c) {
    this.fs();
    var tmp = this.fy_1;
    var _unary__edvuaz = this.gy_1;
    this.gy_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(BooleanArrayBuilder).wr = function () {
    return copyOf_6(this.fy_1, this.gy_1);
  };
  function get_BUILTIN_SERIALIZERS() {
    _init_properties_Primitives_kt__k0eto4();
    return BUILTIN_SERIALIZERS;
  }
  var BUILTIN_SERIALIZERS;
  function builtinSerializerOrNull(_this__u8e3s4) {
    _init_properties_Primitives_kt__k0eto4();
    var tmp = get_BUILTIN_SERIALIZERS().u1(_this__u8e3s4);
    return (tmp == null ? true : isInterface(tmp, KSerializer)) ? tmp : THROW_CCE();
  }
  function StringSerializer() {
    StringSerializer_instance = this;
    this.ny_1 = new PrimitiveSerialDescriptor_0('kotlin.String', STRING_getInstance());
  }
  protoOf(StringSerializer).bj = function () {
    return this.ny_1;
  };
  protoOf(StringSerializer).oy = function (encoder, value) {
    return encoder.kn(value);
  };
  protoOf(StringSerializer).cj = function (encoder, value) {
    return this.oy(encoder, (!(value == null) ? typeof value === 'string' : false) ? value : THROW_CCE());
  };
  protoOf(StringSerializer).dj = function (decoder) {
    return decoder.cm();
  };
  var StringSerializer_instance;
  function StringSerializer_getInstance() {
    if (StringSerializer_instance == null)
      new StringSerializer();
    return StringSerializer_instance;
  }
  function CharSerializer() {
    CharSerializer_instance = this;
    this.py_1 = new PrimitiveSerialDescriptor_0('kotlin.Char', CHAR_getInstance());
  }
  protoOf(CharSerializer).bj = function () {
    return this.py_1;
  };
  protoOf(CharSerializer).qy = function (encoder, value) {
    return encoder.jn(value);
  };
  protoOf(CharSerializer).cj = function (encoder, value) {
    return this.qy(encoder, value instanceof Char ? value.a1_1 : THROW_CCE());
  };
  protoOf(CharSerializer).ry = function (decoder) {
    return decoder.bm();
  };
  protoOf(CharSerializer).dj = function (decoder) {
    return new Char(this.ry(decoder));
  };
  var CharSerializer_instance;
  function CharSerializer_getInstance() {
    if (CharSerializer_instance == null)
      new CharSerializer();
    return CharSerializer_instance;
  }
  function DoubleSerializer() {
    DoubleSerializer_instance = this;
    this.sy_1 = new PrimitiveSerialDescriptor_0('kotlin.Double', DOUBLE_getInstance());
  }
  protoOf(DoubleSerializer).bj = function () {
    return this.sy_1;
  };
  protoOf(DoubleSerializer).ty = function (encoder, value) {
    return encoder.in(value);
  };
  protoOf(DoubleSerializer).cj = function (encoder, value) {
    return this.ty(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  protoOf(DoubleSerializer).dj = function (decoder) {
    return decoder.am();
  };
  var DoubleSerializer_instance;
  function DoubleSerializer_getInstance() {
    if (DoubleSerializer_instance == null)
      new DoubleSerializer();
    return DoubleSerializer_instance;
  }
  function FloatSerializer() {
    FloatSerializer_instance = this;
    this.uy_1 = new PrimitiveSerialDescriptor_0('kotlin.Float', FLOAT_getInstance());
  }
  protoOf(FloatSerializer).bj = function () {
    return this.uy_1;
  };
  protoOf(FloatSerializer).vy = function (encoder, value) {
    return encoder.hn(value);
  };
  protoOf(FloatSerializer).cj = function (encoder, value) {
    return this.vy(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  protoOf(FloatSerializer).dj = function (decoder) {
    return decoder.zl();
  };
  var FloatSerializer_instance;
  function FloatSerializer_getInstance() {
    if (FloatSerializer_instance == null)
      new FloatSerializer();
    return FloatSerializer_instance;
  }
  function LongSerializer() {
    LongSerializer_instance = this;
    this.wy_1 = new PrimitiveSerialDescriptor_0('kotlin.Long', LONG_getInstance());
  }
  protoOf(LongSerializer).bj = function () {
    return this.wy_1;
  };
  protoOf(LongSerializer).xy = function (encoder, value) {
    return encoder.gn(value);
  };
  protoOf(LongSerializer).cj = function (encoder, value) {
    return this.xy(encoder, value instanceof Long ? value : THROW_CCE());
  };
  protoOf(LongSerializer).dj = function (decoder) {
    return decoder.yl();
  };
  var LongSerializer_instance;
  function LongSerializer_getInstance() {
    if (LongSerializer_instance == null)
      new LongSerializer();
    return LongSerializer_instance;
  }
  function IntSerializer() {
    IntSerializer_instance = this;
    this.yy_1 = new PrimitiveSerialDescriptor_0('kotlin.Int', INT_getInstance());
  }
  protoOf(IntSerializer).bj = function () {
    return this.yy_1;
  };
  protoOf(IntSerializer).zy = function (encoder, value) {
    return encoder.fn(value);
  };
  protoOf(IntSerializer).cj = function (encoder, value) {
    return this.zy(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  protoOf(IntSerializer).dj = function (decoder) {
    return decoder.xl();
  };
  var IntSerializer_instance;
  function IntSerializer_getInstance() {
    if (IntSerializer_instance == null)
      new IntSerializer();
    return IntSerializer_instance;
  }
  function ShortSerializer() {
    ShortSerializer_instance = this;
    this.az_1 = new PrimitiveSerialDescriptor_0('kotlin.Short', SHORT_getInstance());
  }
  protoOf(ShortSerializer).bj = function () {
    return this.az_1;
  };
  protoOf(ShortSerializer).bz = function (encoder, value) {
    return encoder.en(value);
  };
  protoOf(ShortSerializer).cj = function (encoder, value) {
    return this.bz(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  protoOf(ShortSerializer).dj = function (decoder) {
    return decoder.wl();
  };
  var ShortSerializer_instance;
  function ShortSerializer_getInstance() {
    if (ShortSerializer_instance == null)
      new ShortSerializer();
    return ShortSerializer_instance;
  }
  function ByteSerializer() {
    ByteSerializer_instance = this;
    this.cz_1 = new PrimitiveSerialDescriptor_0('kotlin.Byte', BYTE_getInstance());
  }
  protoOf(ByteSerializer).bj = function () {
    return this.cz_1;
  };
  protoOf(ByteSerializer).dz = function (encoder, value) {
    return encoder.dn(value);
  };
  protoOf(ByteSerializer).cj = function (encoder, value) {
    return this.dz(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  protoOf(ByteSerializer).dj = function (decoder) {
    return decoder.vl();
  };
  var ByteSerializer_instance;
  function ByteSerializer_getInstance() {
    if (ByteSerializer_instance == null)
      new ByteSerializer();
    return ByteSerializer_instance;
  }
  function BooleanSerializer() {
    BooleanSerializer_instance = this;
    this.ez_1 = new PrimitiveSerialDescriptor_0('kotlin.Boolean', BOOLEAN_getInstance());
  }
  protoOf(BooleanSerializer).bj = function () {
    return this.ez_1;
  };
  protoOf(BooleanSerializer).fz = function (encoder, value) {
    return encoder.cn(value);
  };
  protoOf(BooleanSerializer).cj = function (encoder, value) {
    return this.fz(encoder, (!(value == null) ? typeof value === 'boolean' : false) ? value : THROW_CCE());
  };
  protoOf(BooleanSerializer).dj = function (decoder) {
    return decoder.ul();
  };
  var BooleanSerializer_instance;
  function BooleanSerializer_getInstance() {
    if (BooleanSerializer_instance == null)
      new BooleanSerializer();
    return BooleanSerializer_instance;
  }
  function UnitSerializer() {
    UnitSerializer_instance = this;
    this.gz_1 = new ObjectSerializer('kotlin.Unit', Unit_instance);
  }
  protoOf(UnitSerializer).bj = function () {
    return this.gz_1.bj();
  };
  protoOf(UnitSerializer).hz = function (encoder, value) {
    this.gz_1.rj(encoder, Unit_instance);
  };
  protoOf(UnitSerializer).cj = function (encoder, value) {
    return this.hz(encoder, value instanceof Unit ? value : THROW_CCE());
  };
  protoOf(UnitSerializer).iz = function (decoder) {
    this.gz_1.dj(decoder);
  };
  protoOf(UnitSerializer).dj = function (decoder) {
    this.iz(decoder);
    return Unit_instance;
  };
  var UnitSerializer_instance;
  function UnitSerializer_getInstance() {
    if (UnitSerializer_instance == null)
      new UnitSerializer();
    return UnitSerializer_instance;
  }
  function error_0($this) {
    throw IllegalStateException_init_$Create$('Primitive descriptor does not have elements');
  }
  function PrimitiveSerialDescriptor_0(serialName, kind) {
    this.jz_1 = serialName;
    this.kz_1 = kind;
  }
  protoOf(PrimitiveSerialDescriptor_0).ck = function () {
    return this.jz_1;
  };
  protoOf(PrimitiveSerialDescriptor_0).ok = function () {
    return this.kz_1;
  };
  protoOf(PrimitiveSerialDescriptor_0).qk = function () {
    return 0;
  };
  protoOf(PrimitiveSerialDescriptor_0).sk = function (index) {
    error_0(this);
  };
  protoOf(PrimitiveSerialDescriptor_0).tk = function (name) {
    error_0(this);
  };
  protoOf(PrimitiveSerialDescriptor_0).wk = function (index) {
    error_0(this);
  };
  protoOf(PrimitiveSerialDescriptor_0).vk = function (index) {
    error_0(this);
  };
  protoOf(PrimitiveSerialDescriptor_0).uk = function (index) {
    error_0(this);
  };
  protoOf(PrimitiveSerialDescriptor_0).toString = function () {
    return 'PrimitiveDescriptor(' + this.jz_1 + ')';
  };
  protoOf(PrimitiveSerialDescriptor_0).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof PrimitiveSerialDescriptor_0))
      return false;
    if (this.jz_1 === other.jz_1 && equals(this.kz_1, other.kz_1))
      return true;
    return false;
  };
  protoOf(PrimitiveSerialDescriptor_0).hashCode = function () {
    return getStringHashCode(this.jz_1) + imul(31, this.kz_1.hashCode()) | 0;
  };
  function PrimitiveDescriptorSafe(serialName, kind) {
    _init_properties_Primitives_kt__k0eto4();
    checkName(serialName);
    return new PrimitiveSerialDescriptor_0(serialName, kind);
  }
  function checkName(serialName) {
    _init_properties_Primitives_kt__k0eto4();
    var values = get_BUILTIN_SERIALIZERS().w1();
    var _iterator__ex2g4s = values.i();
    while (_iterator__ex2g4s.j()) {
      var primitive = _iterator__ex2g4s.k();
      var primitiveName = primitive.bj().ck();
      if (serialName === primitiveName) {
        throw IllegalArgumentException_init_$Create$(trimIndent('\n                The name of serial descriptor should uniquely identify associated serializer.\n                For serial name ' + serialName + ' there already exists ' + getKClassFromExpression(primitive).v9() + '.\n                Please refer to SerialDescriptor documentation for additional information.\n            '));
      }
    }
  }
  var properties_initialized_Primitives_kt_6dpii6;
  function _init_properties_Primitives_kt__k0eto4() {
    if (!properties_initialized_Primitives_kt_6dpii6) {
      properties_initialized_Primitives_kt_6dpii6 = true;
      BUILTIN_SERIALIZERS = initBuiltins();
    }
  }
  function NamedValueDecoder() {
    TaggedDecoder.call(this);
  }
  protoOf(NamedValueDecoder).nz = function (_this__u8e3s4, index) {
    return this.pz(this.oz(_this__u8e3s4, index));
  };
  protoOf(NamedValueDecoder).pz = function (nestedName) {
    var tmp0_elvis_lhs = this.sz();
    return this.tz(tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs, nestedName);
  };
  protoOf(NamedValueDecoder).oz = function (descriptor, index) {
    return descriptor.sk(index);
  };
  protoOf(NamedValueDecoder).tz = function (parentName, childName) {
    var tmp;
    // Inline function 'kotlin.text.isEmpty' call
    if (charSequenceLength(parentName) === 0) {
      tmp = childName;
    } else {
      tmp = parentName + '.' + childName;
    }
    return tmp;
  };
  protoOf(NamedValueDecoder).uz = function () {
    return this.qz_1.m() ? '$' : joinToString(this.qz_1, '.', '$.');
  };
  function tagBlock($this, tag, block) {
    $this.h10(tag);
    var r = block();
    if (!$this.rz_1) {
      $this.i10();
    }
    $this.rz_1 = false;
    return r;
  }
  function TaggedDecoder$decodeSerializableElement$lambda(this$0, $deserializer, $previousValue) {
    return function () {
      return this$0.em($deserializer, $previousValue);
    };
  }
  function TaggedDecoder$decodeNullableSerializableElement$lambda(this$0, $deserializer, $previousValue) {
    return function () {
      var tmp0 = this$0;
      // Inline function 'kotlinx.serialization.encoding.decodeIfNullable' call
      var isNullabilitySupported = $deserializer.bj().kk();
      var tmp;
      if (isNullabilitySupported || tmp0.sl()) {
        // Inline function 'kotlinx.serialization.internal.TaggedDecoder.decodeNullableSerializableElement.<anonymous>.<anonymous>' call
        tmp = this$0.em($deserializer, $previousValue);
      } else {
        tmp = tmp0.tl();
      }
      return tmp;
    };
  }
  function TaggedDecoder() {
    var tmp = this;
    // Inline function 'kotlin.collections.arrayListOf' call
    tmp.qz_1 = ArrayList_init_$Create$_0();
    this.rz_1 = false;
  }
  protoOf(TaggedDecoder).vm = function () {
    return EmptySerializersModule_0();
  };
  protoOf(TaggedDecoder).vz = function (tag) {
    throw SerializationException_init_$Create$_0(toString(getKClassFromExpression(this)) + " can't retrieve untyped values");
  };
  protoOf(TaggedDecoder).wz = function (tag) {
    return true;
  };
  protoOf(TaggedDecoder).xz = function (tag) {
    var tmp = this.vz(tag);
    return typeof tmp === 'boolean' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).yz = function (tag) {
    var tmp = this.vz(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).zz = function (tag) {
    var tmp = this.vz(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).a10 = function (tag) {
    var tmp = this.vz(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).b10 = function (tag) {
    var tmp = this.vz(tag);
    return tmp instanceof Long ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).c10 = function (tag) {
    var tmp = this.vz(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).d10 = function (tag) {
    var tmp = this.vz(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).e10 = function (tag) {
    var tmp = this.vz(tag);
    return tmp instanceof Char ? tmp.a1_1 : THROW_CCE();
  };
  protoOf(TaggedDecoder).f10 = function (tag) {
    var tmp = this.vz(tag);
    return typeof tmp === 'string' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).g10 = function (tag, inlineDescriptor) {
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlinx.serialization.internal.TaggedDecoder.decodeTaggedInline.<anonymous>' call
    this.h10(tag);
    return this;
  };
  protoOf(TaggedDecoder).em = function (deserializer, previousValue) {
    return this.fm(deserializer);
  };
  protoOf(TaggedDecoder).dm = function (descriptor) {
    return this.g10(this.i10(), descriptor);
  };
  protoOf(TaggedDecoder).sl = function () {
    var tmp0_elvis_lhs = this.sz();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var currentTag = tmp;
    return this.wz(currentTag);
  };
  protoOf(TaggedDecoder).tl = function () {
    return null;
  };
  protoOf(TaggedDecoder).ul = function () {
    return this.xz(this.i10());
  };
  protoOf(TaggedDecoder).vl = function () {
    return this.yz(this.i10());
  };
  protoOf(TaggedDecoder).wl = function () {
    return this.zz(this.i10());
  };
  protoOf(TaggedDecoder).xl = function () {
    return this.a10(this.i10());
  };
  protoOf(TaggedDecoder).yl = function () {
    return this.b10(this.i10());
  };
  protoOf(TaggedDecoder).zl = function () {
    return this.c10(this.i10());
  };
  protoOf(TaggedDecoder).am = function () {
    return this.d10(this.i10());
  };
  protoOf(TaggedDecoder).bm = function () {
    return this.e10(this.i10());
  };
  protoOf(TaggedDecoder).cm = function () {
    return this.f10(this.i10());
  };
  protoOf(TaggedDecoder).gm = function (descriptor) {
    return this;
  };
  protoOf(TaggedDecoder).hm = function (descriptor) {
  };
  protoOf(TaggedDecoder).im = function (descriptor, index) {
    return this.xz(this.nz(descriptor, index));
  };
  protoOf(TaggedDecoder).jm = function (descriptor, index) {
    return this.yz(this.nz(descriptor, index));
  };
  protoOf(TaggedDecoder).km = function (descriptor, index) {
    return this.zz(this.nz(descriptor, index));
  };
  protoOf(TaggedDecoder).lm = function (descriptor, index) {
    return this.a10(this.nz(descriptor, index));
  };
  protoOf(TaggedDecoder).mm = function (descriptor, index) {
    return this.b10(this.nz(descriptor, index));
  };
  protoOf(TaggedDecoder).nm = function (descriptor, index) {
    return this.c10(this.nz(descriptor, index));
  };
  protoOf(TaggedDecoder).om = function (descriptor, index) {
    return this.d10(this.nz(descriptor, index));
  };
  protoOf(TaggedDecoder).pm = function (descriptor, index) {
    return this.e10(this.nz(descriptor, index));
  };
  protoOf(TaggedDecoder).qm = function (descriptor, index) {
    return this.f10(this.nz(descriptor, index));
  };
  protoOf(TaggedDecoder).rm = function (descriptor, index) {
    return this.g10(this.nz(descriptor, index), descriptor.vk(index));
  };
  protoOf(TaggedDecoder).sm = function (descriptor, index, deserializer, previousValue) {
    var tmp = this.nz(descriptor, index);
    return tagBlock(this, tmp, TaggedDecoder$decodeSerializableElement$lambda(this, deserializer, previousValue));
  };
  protoOf(TaggedDecoder).um = function (descriptor, index, deserializer, previousValue) {
    var tmp = this.nz(descriptor, index);
    return tagBlock(this, tmp, TaggedDecoder$decodeNullableSerializableElement$lambda(this, deserializer, previousValue));
  };
  protoOf(TaggedDecoder).sz = function () {
    return lastOrNull(this.qz_1);
  };
  protoOf(TaggedDecoder).h10 = function (name) {
    this.qz_1.d(name);
  };
  protoOf(TaggedDecoder).i10 = function () {
    var r = this.qz_1.c2(get_lastIndex_0(this.qz_1));
    this.rz_1 = true;
    return r;
  };
  function get_NULL() {
    _init_properties_Tuples_kt__dz0qyd();
    return NULL;
  }
  var NULL;
  function MapEntry(key, value) {
    this.j10_1 = key;
    this.k10_1 = value;
  }
  protoOf(MapEntry).q1 = function () {
    return this.j10_1;
  };
  protoOf(MapEntry).r1 = function () {
    return this.k10_1;
  };
  protoOf(MapEntry).toString = function () {
    return 'MapEntry(key=' + toString_0(this.j10_1) + ', value=' + toString_0(this.k10_1) + ')';
  };
  protoOf(MapEntry).hashCode = function () {
    var result = this.j10_1 == null ? 0 : hashCode(this.j10_1);
    result = imul(result, 31) + (this.k10_1 == null ? 0 : hashCode(this.k10_1)) | 0;
    return result;
  };
  protoOf(MapEntry).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof MapEntry))
      return false;
    var tmp0_other_with_cast = other instanceof MapEntry ? other : THROW_CCE();
    if (!equals(this.j10_1, tmp0_other_with_cast.j10_1))
      return false;
    if (!equals(this.k10_1, tmp0_other_with_cast.k10_1))
      return false;
    return true;
  };
  function MapEntrySerializer$descriptor$lambda($keySerializer, $valueSerializer) {
    return function ($this$buildSerialDescriptor) {
      $this$buildSerialDescriptor.mj('key', $keySerializer.bj());
      $this$buildSerialDescriptor.mj('value', $valueSerializer.bj());
      return Unit_instance;
    };
  }
  function MapEntrySerializer_0(keySerializer, valueSerializer) {
    KeyValueSerializer.call(this, keySerializer, valueSerializer);
    var tmp = this;
    var tmp_0 = MAP_getInstance();
    tmp.n10_1 = buildSerialDescriptor('kotlin.collections.Map.Entry', tmp_0, [], MapEntrySerializer$descriptor$lambda(keySerializer, valueSerializer));
  }
  protoOf(MapEntrySerializer_0).bj = function () {
    return this.n10_1;
  };
  protoOf(MapEntrySerializer_0).o10 = function (_this__u8e3s4) {
    return _this__u8e3s4.q1();
  };
  protoOf(MapEntrySerializer_0).p10 = function (_this__u8e3s4) {
    return this.o10((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Entry) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(MapEntrySerializer_0).q10 = function (_this__u8e3s4) {
    return _this__u8e3s4.r1();
  };
  protoOf(MapEntrySerializer_0).r10 = function (_this__u8e3s4) {
    return this.q10((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Entry) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(MapEntrySerializer_0).s10 = function (key, value) {
    return new MapEntry(key, value);
  };
  function PairSerializer$descriptor$lambda($keySerializer, $valueSerializer) {
    return function ($this$buildClassSerialDescriptor) {
      $this$buildClassSerialDescriptor.mj('first', $keySerializer.bj());
      $this$buildClassSerialDescriptor.mj('second', $valueSerializer.bj());
      return Unit_instance;
    };
  }
  function PairSerializer_0(keySerializer, valueSerializer) {
    KeyValueSerializer.call(this, keySerializer, valueSerializer);
    var tmp = this;
    tmp.y10_1 = buildClassSerialDescriptor('kotlin.Pair', [], PairSerializer$descriptor$lambda(keySerializer, valueSerializer));
  }
  protoOf(PairSerializer_0).bj = function () {
    return this.y10_1;
  };
  protoOf(PairSerializer_0).z10 = function (_this__u8e3s4) {
    return _this__u8e3s4.bd_1;
  };
  protoOf(PairSerializer_0).p10 = function (_this__u8e3s4) {
    return this.z10(_this__u8e3s4 instanceof Pair ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(PairSerializer_0).a11 = function (_this__u8e3s4) {
    return _this__u8e3s4.cd_1;
  };
  protoOf(PairSerializer_0).r10 = function (_this__u8e3s4) {
    return this.a11(_this__u8e3s4 instanceof Pair ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(PairSerializer_0).s10 = function (key, value) {
    return to(key, value);
  };
  function decodeSequentially_1($this, composite) {
    var a = composite.tm($this.e11_1, 0, $this.b11_1);
    var b = composite.tm($this.e11_1, 1, $this.c11_1);
    var c = composite.tm($this.e11_1, 2, $this.d11_1);
    composite.hm($this.e11_1);
    return new Triple(a, b, c);
  }
  function decodeStructure($this, composite) {
    var a = get_NULL();
    var b = get_NULL();
    var c = get_NULL();
    mainLoop: while (true) {
      var index = composite.xm($this.e11_1);
      switch (index) {
        case -1:
          break mainLoop;
        case 0:
          a = composite.tm($this.e11_1, 0, $this.b11_1);
          break;
        case 1:
          b = composite.tm($this.e11_1, 1, $this.c11_1);
          break;
        case 2:
          c = composite.tm($this.e11_1, 2, $this.d11_1);
          break;
        default:
          throw SerializationException_init_$Create$_0('Unexpected index ' + index);
      }
    }
    composite.hm($this.e11_1);
    if (a === get_NULL())
      throw SerializationException_init_$Create$_0("Element 'first' is missing");
    if (b === get_NULL())
      throw SerializationException_init_$Create$_0("Element 'second' is missing");
    if (c === get_NULL())
      throw SerializationException_init_$Create$_0("Element 'third' is missing");
    var tmp = (a == null ? true : !(a == null)) ? a : THROW_CCE();
    var tmp_0 = (b == null ? true : !(b == null)) ? b : THROW_CCE();
    return new Triple(tmp, tmp_0, (c == null ? true : !(c == null)) ? c : THROW_CCE());
  }
  function TripleSerializer$descriptor$lambda(this$0) {
    return function ($this$buildClassSerialDescriptor) {
      $this$buildClassSerialDescriptor.mj('first', this$0.b11_1.bj());
      $this$buildClassSerialDescriptor.mj('second', this$0.c11_1.bj());
      $this$buildClassSerialDescriptor.mj('third', this$0.d11_1.bj());
      return Unit_instance;
    };
  }
  function TripleSerializer_0(aSerializer, bSerializer, cSerializer) {
    this.b11_1 = aSerializer;
    this.c11_1 = bSerializer;
    this.d11_1 = cSerializer;
    var tmp = this;
    tmp.e11_1 = buildClassSerialDescriptor('kotlin.Triple', [], TripleSerializer$descriptor$lambda(this));
  }
  protoOf(TripleSerializer_0).bj = function () {
    return this.e11_1;
  };
  protoOf(TripleSerializer_0).f11 = function (encoder, value) {
    var structuredEncoder = encoder.gm(this.e11_1);
    structuredEncoder.wn(this.e11_1, 0, this.b11_1, value.bh_1);
    structuredEncoder.wn(this.e11_1, 1, this.c11_1, value.ch_1);
    structuredEncoder.wn(this.e11_1, 2, this.d11_1, value.dh_1);
    structuredEncoder.hm(this.e11_1);
  };
  protoOf(TripleSerializer_0).cj = function (encoder, value) {
    return this.f11(encoder, value instanceof Triple ? value : THROW_CCE());
  };
  protoOf(TripleSerializer_0).dj = function (decoder) {
    var composite = decoder.gm(this.e11_1);
    if (composite.wm()) {
      return decodeSequentially_1(this, composite);
    }
    return decodeStructure(this, composite);
  };
  function KeyValueSerializer(keySerializer, valueSerializer) {
    this.t10_1 = keySerializer;
    this.u10_1 = valueSerializer;
  }
  protoOf(KeyValueSerializer).v10 = function (encoder, value) {
    var structuredEncoder = encoder.gm(this.bj());
    structuredEncoder.wn(this.bj(), 0, this.t10_1, this.p10(value));
    structuredEncoder.wn(this.bj(), 1, this.u10_1, this.r10(value));
    structuredEncoder.hm(this.bj());
  };
  protoOf(KeyValueSerializer).cj = function (encoder, value) {
    return this.v10(encoder, (value == null ? true : !(value == null)) ? value : THROW_CCE());
  };
  protoOf(KeyValueSerializer).dj = function (decoder) {
    // Inline function 'kotlinx.serialization.encoding.decodeStructure' call
    var descriptor = this.bj();
    var composite = decoder.gm(descriptor);
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.internal.KeyValueSerializer.deserialize.<anonymous>' call
      if (composite.wm()) {
        var key = composite.tm(this.bj(), 0, this.t10_1);
        var value = composite.tm(this.bj(), 1, this.u10_1);
        tmp$ret$0 = this.s10(key, value);
        break $l$block;
      }
      var key_0 = get_NULL();
      var value_0 = get_NULL();
      mainLoop: while (true) {
        var idx = composite.xm(this.bj());
        switch (idx) {
          case -1:
            break mainLoop;
          case 0:
            key_0 = composite.tm(this.bj(), 0, this.t10_1);
            break;
          case 1:
            value_0 = composite.tm(this.bj(), 1, this.u10_1);
            break;
          default:
            throw SerializationException_init_$Create$_0('Invalid index: ' + idx);
        }
      }
      if (key_0 === get_NULL())
        throw SerializationException_init_$Create$_0("Element 'key' is missing");
      if (value_0 === get_NULL())
        throw SerializationException_init_$Create$_0("Element 'value' is missing");
      var tmp = (key_0 == null ? true : !(key_0 == null)) ? key_0 : THROW_CCE();
      tmp$ret$0 = this.s10(tmp, (value_0 == null ? true : !(value_0 == null)) ? value_0 : THROW_CCE());
    }
    var result = tmp$ret$0;
    composite.hm(descriptor);
    return result;
  };
  var properties_initialized_Tuples_kt_3vs7ar;
  function _init_properties_Tuples_kt__dz0qyd() {
    if (!properties_initialized_Tuples_kt_3vs7ar) {
      properties_initialized_Tuples_kt_3vs7ar = true;
      NULL = new Object();
    }
  }
  function ULongSerializer() {
    ULongSerializer_instance = this;
    this.g11_1 = InlinePrimitiveDescriptor('kotlin.ULong', serializer_4(Companion_getInstance_2()));
  }
  protoOf(ULongSerializer).bj = function () {
    return this.g11_1;
  };
  protoOf(ULongSerializer).h11 = function (encoder, value) {
    var tmp = encoder.ln(this.g11_1);
    // Inline function 'kotlin.ULong.toLong' call
    var tmp$ret$0 = _ULong___get_data__impl__fggpzb(value);
    tmp.gn(tmp$ret$0);
  };
  protoOf(ULongSerializer).cj = function (encoder, value) {
    return this.h11(encoder, value instanceof ULong ? value.li_1 : THROW_CCE());
  };
  protoOf(ULongSerializer).i11 = function (decoder) {
    // Inline function 'kotlin.toULong' call
    var this_0 = decoder.dm(this.g11_1).yl();
    return _ULong___init__impl__c78o9k(this_0);
  };
  protoOf(ULongSerializer).dj = function (decoder) {
    return new ULong(this.i11(decoder));
  };
  var ULongSerializer_instance;
  function ULongSerializer_getInstance() {
    if (ULongSerializer_instance == null)
      new ULongSerializer();
    return ULongSerializer_instance;
  }
  function UIntSerializer() {
    UIntSerializer_instance = this;
    this.j11_1 = InlinePrimitiveDescriptor('kotlin.UInt', serializer_6(IntCompanionObject_instance));
  }
  protoOf(UIntSerializer).bj = function () {
    return this.j11_1;
  };
  protoOf(UIntSerializer).k11 = function (encoder, value) {
    var tmp = encoder.ln(this.j11_1);
    // Inline function 'kotlin.UInt.toInt' call
    var tmp$ret$0 = _UInt___get_data__impl__f0vqqw(value);
    tmp.fn(tmp$ret$0);
  };
  protoOf(UIntSerializer).cj = function (encoder, value) {
    return this.k11(encoder, value instanceof UInt ? value.bi_1 : THROW_CCE());
  };
  protoOf(UIntSerializer).l11 = function (decoder) {
    // Inline function 'kotlin.toUInt' call
    var this_0 = decoder.dm(this.j11_1).xl();
    return _UInt___init__impl__l7qpdl(this_0);
  };
  protoOf(UIntSerializer).dj = function (decoder) {
    return new UInt(this.l11(decoder));
  };
  var UIntSerializer_instance;
  function UIntSerializer_getInstance() {
    if (UIntSerializer_instance == null)
      new UIntSerializer();
    return UIntSerializer_instance;
  }
  function UShortSerializer() {
    UShortSerializer_instance = this;
    this.m11_1 = InlinePrimitiveDescriptor('kotlin.UShort', serializer_8(ShortCompanionObject_instance));
  }
  protoOf(UShortSerializer).bj = function () {
    return this.m11_1;
  };
  protoOf(UShortSerializer).n11 = function (encoder, value) {
    var tmp = encoder.ln(this.m11_1);
    // Inline function 'kotlin.UShort.toShort' call
    var tmp$ret$0 = _UShort___get_data__impl__g0245(value);
    tmp.en(tmp$ret$0);
  };
  protoOf(UShortSerializer).cj = function (encoder, value) {
    return this.n11(encoder, value instanceof UShort ? value.vi_1 : THROW_CCE());
  };
  protoOf(UShortSerializer).o11 = function (decoder) {
    // Inline function 'kotlin.toUShort' call
    var this_0 = decoder.dm(this.m11_1).wl();
    return _UShort___init__impl__jigrne(this_0);
  };
  protoOf(UShortSerializer).dj = function (decoder) {
    return new UShort(this.o11(decoder));
  };
  var UShortSerializer_instance;
  function UShortSerializer_getInstance() {
    if (UShortSerializer_instance == null)
      new UShortSerializer();
    return UShortSerializer_instance;
  }
  function UByteSerializer() {
    UByteSerializer_instance = this;
    this.p11_1 = InlinePrimitiveDescriptor('kotlin.UByte', serializer_10(ByteCompanionObject_instance));
  }
  protoOf(UByteSerializer).bj = function () {
    return this.p11_1;
  };
  protoOf(UByteSerializer).q11 = function (encoder, value) {
    var tmp = encoder.ln(this.p11_1);
    // Inline function 'kotlin.UByte.toByte' call
    var tmp$ret$0 = _UByte___get_data__impl__jof9qr(value);
    tmp.dn(tmp$ret$0);
  };
  protoOf(UByteSerializer).cj = function (encoder, value) {
    return this.q11(encoder, value instanceof UByte ? value.rh_1 : THROW_CCE());
  };
  protoOf(UByteSerializer).r11 = function (decoder) {
    // Inline function 'kotlin.toUByte' call
    var this_0 = decoder.dm(this.p11_1).vl();
    return _UByte___init__impl__g9hnc4(this_0);
  };
  protoOf(UByteSerializer).dj = function (decoder) {
    return new UByte(this.r11(decoder));
  };
  var UByteSerializer_instance;
  function UByteSerializer_getInstance() {
    if (UByteSerializer_instance == null)
      new UByteSerializer();
    return UByteSerializer_instance;
  }
  function get_EmptySerializersModuleLegacyJs() {
    _init_properties_SerializersModule_kt__u78ha3();
    return EmptySerializersModule;
  }
  var EmptySerializersModule;
  function SerializersModule() {
  }
  protoOf(SerializersModule).gk = function (kClass, typeArgumentsSerializers, $super) {
    typeArgumentsSerializers = typeArgumentsSerializers === VOID ? emptyList() : typeArgumentsSerializers;
    return $super === VOID ? this.hk(kClass, typeArgumentsSerializers) : $super.hk.call(this, kClass, typeArgumentsSerializers);
  };
  function SerialModuleImpl(class2ContextualFactory, polyBase2Serializers, polyBase2DefaultSerializerProvider, polyBase2NamedSerializers, polyBase2DefaultDeserializerProvider, hasInterfaceContextualSerializers) {
    SerializersModule.call(this);
    this.t11_1 = class2ContextualFactory;
    this.u11_1 = polyBase2Serializers;
    this.v11_1 = polyBase2DefaultSerializerProvider;
    this.w11_1 = polyBase2NamedSerializers;
    this.x11_1 = polyBase2DefaultDeserializerProvider;
    this.y11_1 = hasInterfaceContextualSerializers;
  }
  protoOf(SerialModuleImpl).fk = function () {
    return this.y11_1;
  };
  protoOf(SerialModuleImpl).eo = function (baseClass, value) {
    if (!baseClass.w9(value))
      return null;
    var tmp0_safe_receiver = this.u11_1.u1(baseClass);
    var tmp = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.u1(getKClassFromExpression(value));
    var registered = (!(tmp == null) ? isInterface(tmp, SerializationStrategy) : false) ? tmp : null;
    if (!(registered == null))
      return registered;
    var tmp_0 = this.v11_1.u1(baseClass);
    var tmp1_safe_receiver = (!(tmp_0 == null) ? typeof tmp_0 === 'function' : false) ? tmp_0 : null;
    return tmp1_safe_receiver == null ? null : tmp1_safe_receiver(value);
  };
  protoOf(SerialModuleImpl).do = function (baseClass, serializedClassName) {
    var tmp0_safe_receiver = this.w11_1.u1(baseClass);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.collections.get' call
      tmp = (isInterface(tmp0_safe_receiver, KtMap) ? tmp0_safe_receiver : THROW_CCE()).u1(serializedClassName);
    }
    var tmp_0 = tmp;
    var registered = (!(tmp_0 == null) ? isInterface(tmp_0, KSerializer) : false) ? tmp_0 : null;
    if (!(registered == null))
      return registered;
    var tmp_1 = this.x11_1.u1(baseClass);
    var tmp1_safe_receiver = (!(tmp_1 == null) ? typeof tmp_1 === 'function' : false) ? tmp_1 : null;
    return tmp1_safe_receiver == null ? null : tmp1_safe_receiver(serializedClassName);
  };
  protoOf(SerialModuleImpl).hk = function (kClass, typeArgumentsSerializers) {
    var tmp0_safe_receiver = this.t11_1.u1(kClass);
    var tmp = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.z11(typeArgumentsSerializers);
    return (tmp == null ? true : isInterface(tmp, KSerializer)) ? tmp : null;
  };
  protoOf(SerialModuleImpl).s11 = function (collector) {
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s = this.t11_1.x1().i();
    while (_iterator__ex2g4s.j()) {
      var element = _iterator__ex2g4s.k();
      // Inline function 'kotlinx.serialization.modules.SerialModuleImpl.dumpTo.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var kclass = element.q1();
      // Inline function 'kotlin.collections.component2' call
      var serial = element.r1();
      if (serial instanceof Argless) {
        var tmp = isInterface(kclass, KClass) ? kclass : THROW_CCE();
        var tmp_0 = serial.c12_1;
        collector.d12(tmp, isInterface(tmp_0, KSerializer) ? tmp_0 : THROW_CCE());
      } else {
        if (serial instanceof WithTypeArguments) {
          collector.b12(kclass, serial.a12_1);
        } else {
          noWhenBranchMatchedException();
        }
      }
    }
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s_0 = this.u11_1.x1().i();
    while (_iterator__ex2g4s_0.j()) {
      var element_0 = _iterator__ex2g4s_0.k();
      // Inline function 'kotlinx.serialization.modules.SerialModuleImpl.dumpTo.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var baseClass = element_0.q1();
      // Inline function 'kotlin.collections.component2' call
      var classMap = element_0.r1();
      // Inline function 'kotlin.collections.forEach' call
      // Inline function 'kotlin.collections.iterator' call
      var _iterator__ex2g4s_1 = classMap.x1().i();
      while (_iterator__ex2g4s_1.j()) {
        var element_1 = _iterator__ex2g4s_1.k();
        // Inline function 'kotlinx.serialization.modules.SerialModuleImpl.dumpTo.<anonymous>.<anonymous>' call
        // Inline function 'kotlin.collections.component1' call
        var actualClass = element_1.q1();
        // Inline function 'kotlin.collections.component2' call
        var serializer = element_1.r1();
        var tmp_1 = isInterface(baseClass, KClass) ? baseClass : THROW_CCE();
        var tmp_2 = isInterface(actualClass, KClass) ? actualClass : THROW_CCE();
        // Inline function 'kotlinx.serialization.internal.cast' call
        var tmp$ret$9 = isInterface(serializer, KSerializer) ? serializer : THROW_CCE();
        collector.e12(tmp_1, tmp_2, tmp$ret$9);
      }
    }
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s_2 = this.v11_1.x1().i();
    while (_iterator__ex2g4s_2.j()) {
      var element_2 = _iterator__ex2g4s_2.k();
      // Inline function 'kotlinx.serialization.modules.SerialModuleImpl.dumpTo.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var baseClass_0 = element_2.q1();
      // Inline function 'kotlin.collections.component2' call
      var provider = element_2.r1();
      var tmp_3 = isInterface(baseClass_0, KClass) ? baseClass_0 : THROW_CCE();
      collector.f12(tmp_3, typeof provider === 'function' ? provider : THROW_CCE());
    }
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s_3 = this.x11_1.x1().i();
    while (_iterator__ex2g4s_3.j()) {
      var element_3 = _iterator__ex2g4s_3.k();
      // Inline function 'kotlinx.serialization.modules.SerialModuleImpl.dumpTo.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var baseClass_1 = element_3.q1();
      // Inline function 'kotlin.collections.component2' call
      var provider_0 = element_3.r1();
      var tmp_4 = isInterface(baseClass_1, KClass) ? baseClass_1 : THROW_CCE();
      collector.g12(tmp_4, typeof provider_0 === 'function' ? provider_0 : THROW_CCE());
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
  function SerializableWith(serializer) {
    this.h12_1 = serializer;
  }
  protoOf(SerializableWith).equals = function (other) {
    if (!(other instanceof SerializableWith))
      return false;
    var tmp0_other_with_cast = other instanceof SerializableWith ? other : THROW_CCE();
    if (!this.h12_1.equals(tmp0_other_with_cast.h12_1))
      return false;
    return true;
  };
  protoOf(SerializableWith).hashCode = function () {
    return imul(getStringHashCode('serializer'), 127) ^ this.h12_1.hashCode();
  };
  protoOf(SerializableWith).toString = function () {
    return '@kotlinx.serialization.SerializableWith(' + 'serializer=' + toString(this.h12_1) + ')';
  };
  function createCache(factory) {
    return new createCache$1(factory);
  }
  function createParametrizedCache(factory) {
    return new createParametrizedCache$1(factory);
  }
  function isInterface_0(_this__u8e3s4) {
    return get_isInterface(_this__u8e3s4);
  }
  function initBuiltins() {
    return mapOf([to(PrimitiveClasses_getInstance().wa(), serializer_0(StringCompanionObject_instance)), to(getKClass(Char), serializer_1(Companion_getInstance_1())), to(PrimitiveClasses_getInstance().za(), CharArraySerializer()), to(PrimitiveClasses_getInstance().ua(), serializer_2(DoubleCompanionObject_instance)), to(PrimitiveClasses_getInstance().fb(), DoubleArraySerializer()), to(PrimitiveClasses_getInstance().ta(), serializer_3(FloatCompanionObject_instance)), to(PrimitiveClasses_getInstance().eb(), FloatArraySerializer()), to(getKClass(Long), serializer_4(Companion_getInstance_2())), to(PrimitiveClasses_getInstance().db(), LongArraySerializer()), to(getKClass(ULong), serializer_5(Companion_getInstance_3())), to(getKClass(ULongArray), ULongArraySerializer()), to(PrimitiveClasses_getInstance().sa(), serializer_6(IntCompanionObject_instance)), to(PrimitiveClasses_getInstance().cb(), IntArraySerializer()), to(getKClass(UInt), serializer_7(Companion_getInstance_4())), to(getKClass(UIntArray), UIntArraySerializer()), to(PrimitiveClasses_getInstance().ra(), serializer_8(ShortCompanionObject_instance)), to(PrimitiveClasses_getInstance().bb(), ShortArraySerializer()), to(getKClass(UShort), serializer_9(Companion_getInstance_5())), to(getKClass(UShortArray), UShortArraySerializer()), to(PrimitiveClasses_getInstance().qa(), serializer_10(ByteCompanionObject_instance)), to(PrimitiveClasses_getInstance().ab(), ByteArraySerializer()), to(getKClass(UByte), serializer_11(Companion_getInstance_6())), to(getKClass(UByteArray), UByteArraySerializer()), to(PrimitiveClasses_getInstance().pa(), serializer_12(BooleanCompanionObject_instance)), to(PrimitiveClasses_getInstance().ya(), BooleanArraySerializer()), to(getKClass(Unit), serializer_13(Unit_instance)), to(PrimitiveClasses_getInstance().oa(), NothingSerializer()), to(getKClass(Duration), serializer_14(Companion_getInstance())), to(getKClass(Uuid), serializer_15(Companion_getInstance_0()))]);
  }
  function get_isInterface(_this__u8e3s4) {
    if (_this__u8e3s4 === PrimitiveClasses_getInstance().oa())
      return false;
    // Inline function 'kotlin.js.asDynamic' call
    var tmp0_safe_receiver = get_js(_this__u8e3s4).$metadata$;
    return (tmp0_safe_receiver == null ? null : tmp0_safe_receiver.kind) == 'interface';
  }
  function compiledSerializerImpl(_this__u8e3s4) {
    var tmp0_elvis_lhs = constructSerializerForGivenTypeArgs(_this__u8e3s4, []);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp_0;
      if (_this__u8e3s4 === PrimitiveClasses_getInstance().oa()) {
        tmp_0 = NothingSerializer_getInstance();
      } else {
        // Inline function 'kotlin.js.asDynamic' call
        var tmp1_safe_receiver = get_js(_this__u8e3s4).Companion;
        tmp_0 = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.serializer();
      }
      var tmp_1 = tmp_0;
      tmp = (!(tmp_1 == null) ? isInterface(tmp_1, KSerializer) : false) ? tmp_1 : null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function platformSpecificSerializerNotRegistered(_this__u8e3s4) {
    throw SerializationException_init_$Create$_0(notRegisteredMessage(_this__u8e3s4) + 'To get enum serializer on Kotlin/JS, it should be annotated with @Serializable annotation.');
  }
  function isReferenceArray(rootClass) {
    return rootClass.equals(PrimitiveClasses_getInstance().va());
  }
  function constructSerializerForGivenTypeArgs(_this__u8e3s4, args) {
    var tmp;
    try {
      // Inline function 'kotlin.reflect.findAssociatedObject' call
      var assocObject = findAssociatedObject(_this__u8e3s4, getKClass(SerializableWith));
      var tmp_0;
      if (!(assocObject == null) ? isInterface(assocObject, KSerializer) : false) {
        tmp_0 = isInterface(assocObject, KSerializer) ? assocObject : THROW_CCE();
      } else {
        if (!(assocObject == null) ? isInterface(assocObject, SerializerFactory) : false) {
          var tmp_1 = assocObject.au(args.slice());
          tmp_0 = isInterface(tmp_1, KSerializer) ? tmp_1 : THROW_CCE();
        } else {
          tmp_0 = null;
        }
      }
      tmp = tmp_0;
    } catch ($p) {
      var tmp_2;
      var e = $p;
      tmp_2 = null;
      tmp = tmp_2;
    }
    return tmp;
  }
  function toNativeArrayImpl(_this__u8e3s4, eClass) {
    // Inline function 'kotlin.collections.toTypedArray' call
    return copyToArray(_this__u8e3s4);
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
  function createCache$1($factory) {
    this.i12_1 = $factory;
  }
  protoOf(createCache$1).ik = function (key) {
    return this.i12_1(key);
  };
  function createParametrizedCache$1($factory) {
    this.j12_1 = $factory;
  }
  protoOf(createParametrizedCache$1).jk = function (key, types) {
    // Inline function 'kotlin.runCatching' call
    var tmp;
    try {
      // Inline function 'kotlinx.serialization.internal.<no name provided>.get.<anonymous>' call
      // Inline function 'kotlin.Companion.success' call
      var value = this.j12_1(key, types);
      tmp = _Result___init__impl__xyqfz8(value);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var e = $p;
        // Inline function 'kotlin.Companion.failure' call
        tmp_0 = _Result___init__impl__xyqfz8(createFailure(e));
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  //region block: post-declaration
  protoOf(SerialDescriptorImpl).kk = get_isNullable;
  protoOf(SerialDescriptorImpl).pk = get_isInline;
  protoOf(AbstractDecoder).tm = decodeSerializableElement$default;
  protoOf(AbstractDecoder).fm = decodeSerializableValue;
  protoOf(AbstractDecoder).wm = decodeSequentially;
  protoOf(AbstractDecoder).ym = decodeCollectionSize;
  protoOf(AbstractEncoder).ao = encodeNotNullMark;
  protoOf(AbstractEncoder).bo = beginCollection;
  protoOf(AbstractEncoder).xn = encodeSerializableValue;
  protoOf(AbstractEncoder).zn = encodeNullableSerializableValue;
  protoOf(AbstractEncoder).co = shouldEncodeElementDefault;
  protoOf(ListLikeDescriptor).kk = get_isNullable;
  protoOf(ListLikeDescriptor).pk = get_isInline;
  protoOf(ListLikeDescriptor).rk = get_annotations;
  protoOf(MapLikeDescriptor).kk = get_isNullable;
  protoOf(MapLikeDescriptor).pk = get_isInline;
  protoOf(MapLikeDescriptor).rk = get_annotations;
  protoOf(PluginGeneratedSerialDescriptor).kk = get_isNullable;
  protoOf(PluginGeneratedSerialDescriptor).pk = get_isInline;
  protoOf(InlinePrimitiveDescriptor$1).qt = typeParametersSerializers;
  protoOf(NothingSerialDescriptor).kk = get_isNullable;
  protoOf(NothingSerialDescriptor).pk = get_isInline;
  protoOf(NothingSerialDescriptor).rk = get_annotations;
  protoOf(PrimitiveSerialDescriptor_0).kk = get_isNullable;
  protoOf(PrimitiveSerialDescriptor_0).pk = get_isInline;
  protoOf(PrimitiveSerialDescriptor_0).rk = get_annotations;
  protoOf(TaggedDecoder).tm = decodeSerializableElement$default;
  protoOf(TaggedDecoder).fm = decodeSerializableValue;
  protoOf(TaggedDecoder).wm = decodeSequentially;
  protoOf(TaggedDecoder).ym = decodeCollectionSize;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = SealedClassSerializer_init_$Create$;
  _.$_$.b = SerializationException_init_$Init$_0;
  _.$_$.c = UnknownFieldException_init_$Create$;
  _.$_$.d = SEALED_getInstance;
  _.$_$.e = STRING_getInstance;
  _.$_$.f = CONTEXTUAL_getInstance;
  _.$_$.g = ENUM_getInstance;
  _.$_$.h = CLASS_getInstance;
  _.$_$.i = LIST_getInstance;
  _.$_$.j = MAP_getInstance;
  _.$_$.k = OBJECT_getInstance;
  _.$_$.l = DoubleSerializer_getInstance;
  _.$_$.m = IntSerializer_getInstance;
  _.$_$.n = StringSerializer_getInstance;
  _.$_$.o = ListSerializer;
  _.$_$.p = MapSerializer;
  _.$_$.q = get_nullable;
  _.$_$.r = serializer_0;
  _.$_$.s = serializer_9;
  _.$_$.t = serializer_7;
  _.$_$.u = serializer_11;
  _.$_$.v = serializer_5;
  _.$_$.w = PolymorphicKind;
  _.$_$.x = PrimitiveKind;
  _.$_$.y = PrimitiveSerialDescriptor;
  _.$_$.z = get_annotations;
  _.$_$.a1 = get_isInline;
  _.$_$.b1 = get_isNullable;
  _.$_$.c1 = SerialDescriptor;
  _.$_$.d1 = ENUM;
  _.$_$.e1 = buildSerialDescriptor;
  _.$_$.f1 = getContextualDescriptor;
  _.$_$.g1 = AbstractDecoder;
  _.$_$.h1 = AbstractEncoder;
  _.$_$.i1 = CompositeDecoder;
  _.$_$.j1 = CompositeEncoder;
  _.$_$.k1 = Decoder;
  _.$_$.l1 = Encoder;
  _.$_$.m1 = AbstractPolymorphicSerializer;
  _.$_$.n1 = ArrayListSerializer;
  _.$_$.o1 = ElementMarker;
  _.$_$.p1 = typeParametersSerializers;
  _.$_$.q1 = GeneratedSerializer;
  _.$_$.r1 = InlinePrimitiveDescriptor;
  _.$_$.s1 = NamedValueDecoder;
  _.$_$.t1 = PluginGeneratedSerialDescriptor;
  _.$_$.u1 = SerializerFactory;
  _.$_$.v1 = jsonCachedSerialNames;
  _.$_$.w1 = throwMissingFieldException;
  _.$_$.x1 = EmptySerializersModule_0;
  _.$_$.y1 = contextual;
  _.$_$.z1 = SerializersModuleCollector;
  _.$_$.a2 = DeserializationStrategy;
  _.$_$.b2 = KSerializer;
  _.$_$.c2 = MissingFieldException;
  _.$_$.d2 = SealedClassSerializer;
  _.$_$.e2 = SerializationException;
  _.$_$.f2 = SerializationStrategy;
  _.$_$.g2 = findPolymorphicSerializer_0;
  _.$_$.h2 = findPolymorphicSerializer;
  _.$_$.i2 = serializer;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlinx-serialization-kotlinx-serialization-core.js.map
