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
  var protoOf = kotlin_kotlin.$_$.n8;
  var initMetadataForInterface = kotlin_kotlin.$_$.s7;
  var VOID = kotlin_kotlin.$_$.f;
  var StringCompanionObject_instance = kotlin_kotlin.$_$.q3;
  var Unit_instance = kotlin_kotlin.$_$.b4;
  var emptyList = kotlin_kotlin.$_$.e5;
  var LazyThreadSafetyMode_PUBLICATION_getInstance = kotlin_kotlin.$_$.g;
  var lazy = kotlin_kotlin.$_$.lb;
  var toString = kotlin_kotlin.$_$.r8;
  var initMetadataForClass = kotlin_kotlin.$_$.p7;
  var getKClassFromExpression = kotlin_kotlin.$_$.d;
  var KProperty1 = kotlin_kotlin.$_$.c9;
  var getPropertyCallableRef = kotlin_kotlin.$_$.m7;
  var asList = kotlin_kotlin.$_$.p4;
  var objectCreate = kotlin_kotlin.$_$.m8;
  var THROW_CCE = kotlin_kotlin.$_$.ra;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.e1;
  var zip = kotlin_kotlin.$_$.f6;
  var toMap = kotlin_kotlin.$_$.d6;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.s;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.g1;
  var mapCapacity = kotlin_kotlin.$_$.r5;
  var LinkedHashMap_init_$Create$_0 = kotlin_kotlin.$_$.r;
  var KtMap = kotlin_kotlin.$_$.k4;
  var isInterface = kotlin_kotlin.$_$.d8;
  var IllegalArgumentException_init_$Init$ = kotlin_kotlin.$_$.c1;
  var captureStack = kotlin_kotlin.$_$.c7;
  var IllegalArgumentException_init_$Init$_0 = kotlin_kotlin.$_$.d1;
  var IllegalArgumentException_init_$Init$_1 = kotlin_kotlin.$_$.f1;
  var IllegalArgumentException = kotlin_kotlin.$_$.ma;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.r4;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.i;
  var KClass = kotlin_kotlin.$_$.a9;
  var Triple = kotlin_kotlin.$_$.sa;
  var getKClass = kotlin_kotlin.$_$.e;
  var Pair = kotlin_kotlin.$_$.oa;
  var Entry = kotlin_kotlin.$_$.j4;
  var KtMutableMap = kotlin_kotlin.$_$.m4;
  var LinkedHashMap = kotlin_kotlin.$_$.g4;
  var HashMap = kotlin_kotlin.$_$.e4;
  var KtSet = kotlin_kotlin.$_$.o4;
  var KtMutableSet = kotlin_kotlin.$_$.n4;
  var LinkedHashSet = kotlin_kotlin.$_$.h4;
  var HashSet = kotlin_kotlin.$_$.f4;
  var Collection = kotlin_kotlin.$_$.d4;
  var KtList = kotlin_kotlin.$_$.i4;
  var KtMutableList = kotlin_kotlin.$_$.l4;
  var ArrayList = kotlin_kotlin.$_$.c4;
  var copyToArray = kotlin_kotlin.$_$.d5;
  var _Result___get_value__impl__bjfvqg = kotlin_kotlin.$_$.x1;
  var _Result___get_isFailure__impl__jpiriv = kotlin_kotlin.$_$.w1;
  var Result = kotlin_kotlin.$_$.pa;
  var ensureNotNull = kotlin_kotlin.$_$.hb;
  var equals = kotlin_kotlin.$_$.i7;
  var getStringHashCode = kotlin_kotlin.$_$.n7;
  var isBlank = kotlin_kotlin.$_$.i9;
  var toList = kotlin_kotlin.$_$.c6;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.j;
  var HashSet_init_$Create$ = kotlin_kotlin.$_$.p;
  var toHashSet = kotlin_kotlin.$_$.a6;
  var toBooleanArray = kotlin_kotlin.$_$.z5;
  var withIndex = kotlin_kotlin.$_$.e6;
  var to = kotlin_kotlin.$_$.rb;
  var lazy_0 = kotlin_kotlin.$_$.mb;
  var contentEquals = kotlin_kotlin.$_$.s4;
  var until = kotlin_kotlin.$_$.z8;
  var joinToString = kotlin_kotlin.$_$.l5;
  var initMetadataForObject = kotlin_kotlin.$_$.u7;
  var Long = kotlin_kotlin.$_$.na;
  var Char = kotlin_kotlin.$_$.ga;
  var Duration__toIsoString_impl_9h6wsm = kotlin_kotlin.$_$.p1;
  var Duration = kotlin_kotlin.$_$.ea;
  var Companion_getInstance = kotlin_kotlin.$_$.s3;
  var Uuid = kotlin_kotlin.$_$.fa;
  var Companion_getInstance_0 = kotlin_kotlin.$_$.t3;
  var toIntOrNull = kotlin_kotlin.$_$.t9;
  var hashCode = kotlin_kotlin.$_$.o7;
  var ArrayList_init_$Create$_1 = kotlin_kotlin.$_$.k;
  var HashSet_init_$Create$_0 = kotlin_kotlin.$_$.q;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.u;
  var LinkedHashSet_init_$Create$_0 = kotlin_kotlin.$_$.v;
  var HashMap_init_$Create$ = kotlin_kotlin.$_$.m;
  var HashMap_init_$Create$_0 = kotlin_kotlin.$_$.n;
  var LinkedHashMap_init_$Create$_1 = kotlin_kotlin.$_$.t;
  var isArray = kotlin_kotlin.$_$.v7;
  var arrayIterator = kotlin_kotlin.$_$.a7;
  var step = kotlin_kotlin.$_$.y8;
  var getValue = kotlin_kotlin.$_$.i5;
  var longArray = kotlin_kotlin.$_$.h8;
  var initMetadataForCompanion = kotlin_kotlin.$_$.q7;
  var get_lastIndex = kotlin_kotlin.$_$.m5;
  var countTrailingZeroBits = kotlin_kotlin.$_$.fb;
  var HashSet_init_$Create$_1 = kotlin_kotlin.$_$.o;
  var toString_0 = kotlin_kotlin.$_$.qb;
  var KTypeParameter = kotlin_kotlin.$_$.d9;
  var contentHashCode = kotlin_kotlin.$_$.t4;
  var fillArrayVal = kotlin_kotlin.$_$.j7;
  var booleanArray = kotlin_kotlin.$_$.b7;
  var emptyMap = kotlin_kotlin.$_$.f5;
  var Companion_getInstance_1 = kotlin_kotlin.$_$.u3;
  var isCharArray = kotlin_kotlin.$_$.y7;
  var charArray = kotlin_kotlin.$_$.e7;
  var DoubleCompanionObject_instance = kotlin_kotlin.$_$.m3;
  var isDoubleArray = kotlin_kotlin.$_$.a8;
  var FloatCompanionObject_instance = kotlin_kotlin.$_$.n3;
  var isFloatArray = kotlin_kotlin.$_$.b8;
  var Companion_getInstance_2 = kotlin_kotlin.$_$.v3;
  var isLongArray = kotlin_kotlin.$_$.e8;
  var Companion_getInstance_3 = kotlin_kotlin.$_$.z3;
  var _ULongArray___get_size__impl__ju6dtr = kotlin_kotlin.$_$.x2;
  var ULongArray = kotlin_kotlin.$_$.xa;
  var _ULongArray___init__impl__twm1l3 = kotlin_kotlin.$_$.t2;
  var _ULong___init__impl__c78o9k = kotlin_kotlin.$_$.q2;
  var ULongArray__get_impl_pr71q9 = kotlin_kotlin.$_$.v2;
  var _ULong___get_data__impl__fggpzb = kotlin_kotlin.$_$.r2;
  var IntCompanionObject_instance = kotlin_kotlin.$_$.o3;
  var isIntArray = kotlin_kotlin.$_$.c8;
  var Companion_getInstance_4 = kotlin_kotlin.$_$.y3;
  var _UIntArray___get_size__impl__r6l8ci = kotlin_kotlin.$_$.o2;
  var UIntArray = kotlin_kotlin.$_$.va;
  var _UIntArray___init__impl__ghjpc6 = kotlin_kotlin.$_$.k2;
  var _UInt___init__impl__l7qpdl = kotlin_kotlin.$_$.h2;
  var UIntArray__get_impl_gp5kza = kotlin_kotlin.$_$.m2;
  var _UInt___get_data__impl__f0vqqw = kotlin_kotlin.$_$.i2;
  var ShortCompanionObject_instance = kotlin_kotlin.$_$.p3;
  var isShortArray = kotlin_kotlin.$_$.f8;
  var Companion_getInstance_5 = kotlin_kotlin.$_$.a4;
  var _UShortArray___get_size__impl__jqto1b = kotlin_kotlin.$_$.g3;
  var UShortArray = kotlin_kotlin.$_$.za;
  var _UShortArray___init__impl__9b26ef = kotlin_kotlin.$_$.c3;
  var _UShort___init__impl__jigrne = kotlin_kotlin.$_$.z2;
  var UShortArray__get_impl_fnbhmx = kotlin_kotlin.$_$.e3;
  var _UShort___get_data__impl__g0245 = kotlin_kotlin.$_$.a3;
  var ByteCompanionObject_instance = kotlin_kotlin.$_$.l3;
  var isByteArray = kotlin_kotlin.$_$.x7;
  var Companion_getInstance_6 = kotlin_kotlin.$_$.x3;
  var _UByteArray___get_size__impl__h6pkdv = kotlin_kotlin.$_$.f2;
  var UByteArray = kotlin_kotlin.$_$.ta;
  var _UByteArray___init__impl__ip4y9n = kotlin_kotlin.$_$.c2;
  var _UByte___init__impl__g9hnc4 = kotlin_kotlin.$_$.y1;
  var UByteArray__get_impl_t5f3hv = kotlin_kotlin.$_$.d2;
  var _UByte___get_data__impl__jof9qr = kotlin_kotlin.$_$.z1;
  var BooleanCompanionObject_instance = kotlin_kotlin.$_$.k3;
  var isBooleanArray = kotlin_kotlin.$_$.w7;
  var coerceAtLeast = kotlin_kotlin.$_$.u8;
  var copyOf = kotlin_kotlin.$_$.x4;
  var copyOf_0 = kotlin_kotlin.$_$.z4;
  var copyOf_1 = kotlin_kotlin.$_$.a5;
  var copyOf_2 = kotlin_kotlin.$_$.v4;
  var _ULongArray___get_storage__impl__28e64j = kotlin_kotlin.$_$.y2;
  var _ULongArray___init__impl__twm1l3_0 = kotlin_kotlin.$_$.u2;
  var ULongArray__set_impl_z19mvh = kotlin_kotlin.$_$.w2;
  var copyOf_3 = kotlin_kotlin.$_$.c5;
  var _UIntArray___get_storage__impl__92a0v0 = kotlin_kotlin.$_$.p2;
  var _UIntArray___init__impl__ghjpc6_0 = kotlin_kotlin.$_$.l2;
  var UIntArray__set_impl_7f2zu2 = kotlin_kotlin.$_$.n2;
  var copyOf_4 = kotlin_kotlin.$_$.u4;
  var _UShortArray___get_storage__impl__t2jpv5 = kotlin_kotlin.$_$.h3;
  var _UShortArray___init__impl__9b26ef_0 = kotlin_kotlin.$_$.d3;
  var UShortArray__set_impl_6d8whp = kotlin_kotlin.$_$.f3;
  var copyOf_5 = kotlin_kotlin.$_$.y4;
  var _UByteArray___get_storage__impl__d4kctt = kotlin_kotlin.$_$.g2;
  var _UByteArray___init__impl__ip4y9n_0 = kotlin_kotlin.$_$.b2;
  var UByteArray__set_impl_jvcicn = kotlin_kotlin.$_$.e2;
  var copyOf_6 = kotlin_kotlin.$_$.w4;
  var Unit = kotlin_kotlin.$_$.bb;
  var trimIndent = kotlin_kotlin.$_$.ca;
  var charSequenceLength = kotlin_kotlin.$_$.g7;
  var lastOrNull = kotlin_kotlin.$_$.o5;
  var get_lastIndex_0 = kotlin_kotlin.$_$.n5;
  var ULong = kotlin_kotlin.$_$.ya;
  var UInt = kotlin_kotlin.$_$.wa;
  var UShort = kotlin_kotlin.$_$.ab;
  var UByte = kotlin_kotlin.$_$.ua;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.nb;
  var PrimitiveClasses_getInstance = kotlin_kotlin.$_$.r3;
  var mapOf = kotlin_kotlin.$_$.s5;
  var get_js = kotlin_kotlin.$_$.g8;
  var findAssociatedObject = kotlin_kotlin.$_$.c;
  var get_indices = kotlin_kotlin.$_$.k5;
  var IndexOutOfBoundsException_init_$Create$ = kotlin_kotlin.$_$.i1;
  var get_indices_0 = kotlin_kotlin.$_$.j5;
  var Companion_instance = kotlin_kotlin.$_$.w3;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.u1;
  var createFailure = kotlin_kotlin.$_$.gb;
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
    return deserializer.ti(this);
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
    return $super === VOID ? this.im(descriptor, index, deserializer, previousValue) : $super.im.call(this, descriptor, index, deserializer, previousValue);
  }
  initMetadataForInterface(CompositeDecoder, 'CompositeDecoder');
  initMetadataForClass(AbstractDecoder, 'AbstractDecoder', VOID, VOID, [Decoder, CompositeDecoder]);
  function encodeNotNullMark() {
  }
  function beginCollection(descriptor, collectionSize) {
    return this.wl(descriptor);
  }
  function encodeSerializableValue(serializer, value) {
    serializer.si(this, value);
  }
  function encodeNullableSerializableValue(serializer, value) {
    var isNullabilitySupported = serializer.ri().ak();
    if (isNullabilitySupported) {
      return this.nn(isInterface(serializer, SerializationStrategy) ? serializer : THROW_CCE(), value);
    }
    if (value == null) {
      this.rm();
    } else {
      this.qn();
      this.nn(serializer, value);
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
    return this.r11(kClass, SerializersModuleCollector$contextual$lambda(serializer));
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
      $this$buildSerialDescriptor.cj('type', serializer_0(StringCompanionObject_instance).ri());
      $this$buildSerialDescriptor.cj('value', buildSerialDescriptor('kotlinx.serialization.Polymorphic<' + this$0.dj_1.v9() + '>', CONTEXTUAL_getInstance(), []));
      $this$buildSerialDescriptor.wi_1 = this$0.ej_1;
      return Unit_instance;
    };
  }
  function PolymorphicSerializer$descriptor$delegate$lambda(this$0) {
    return function () {
      var tmp = OPEN_getInstance();
      return withContext(buildSerialDescriptor('kotlinx.serialization.Polymorphic', tmp, [], PolymorphicSerializer$descriptor$delegate$lambda$lambda(this$0)), this$0.dj_1);
    };
  }
  function PolymorphicSerializer(baseClass) {
    AbstractPolymorphicSerializer.call(this);
    this.dj_1 = baseClass;
    this.ej_1 = emptyList();
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.fj_1 = lazy(tmp_0, PolymorphicSerializer$descriptor$delegate$lambda(this));
  }
  protoOf(PolymorphicSerializer).gj = function () {
    return this.dj_1;
  };
  protoOf(PolymorphicSerializer).ri = function () {
    var tmp0 = this.fj_1;
    // Inline function 'kotlin.getValue' call
    descriptor$factory();
    return tmp0.r1();
  };
  protoOf(PolymorphicSerializer).toString = function () {
    return 'kotlinx.serialization.PolymorphicSerializer(baseClass: ' + toString(this.dj_1) + ')';
  };
  function findPolymorphicSerializer(_this__u8e3s4, encoder, value) {
    var tmp0_elvis_lhs = _this__u8e3s4.jj(encoder, value);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throwSubtypeNotRegistered(getKClassFromExpression(value), _this__u8e3s4.gj());
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function findPolymorphicSerializer_0(_this__u8e3s4, decoder, klassName) {
    var tmp0_elvis_lhs = _this__u8e3s4.ij(decoder, klassName);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throwSubtypeNotRegistered_0(klassName, _this__u8e3s4.gj());
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function descriptor$factory() {
    return getPropertyCallableRef('descriptor', 1, KProperty1, function (receiver) {
      return receiver.ri();
    }, null);
  }
  function SealedClassSerializer_init_$Init$(serialName, baseClass, subclasses, subclassSerializers, classAnnotations, $this) {
    SealedClassSerializer.call($this, serialName, baseClass, subclasses, subclassSerializers);
    $this.lj_1 = asList(classAnnotations);
    return $this;
  }
  function SealedClassSerializer_init_$Create$(serialName, baseClass, subclasses, subclassSerializers, classAnnotations) {
    return SealedClassSerializer_init_$Init$(serialName, baseClass, subclasses, subclassSerializers, classAnnotations, objectCreate(protoOf(SealedClassSerializer)));
  }
  function SealedClassSerializer$descriptor$delegate$lambda$lambda$lambda(this$0) {
    return function ($this$buildSerialDescriptor) {
      // Inline function 'kotlin.collections.iterator' call
      var _iterator__ex2g4s = this$0.oj_1.x1().i();
      while (_iterator__ex2g4s.j()) {
        var element = _iterator__ex2g4s.k();
        // Inline function 'kotlinx.serialization.SealedClassSerializer.descriptor$delegate.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        // Inline function 'kotlin.collections.component1' call
        var name = element.q1();
        // Inline function 'kotlin.collections.component2' call
        var serializer = element.r1();
        $this$buildSerialDescriptor.cj(name, serializer.ri());
      }
      return Unit_instance;
    };
  }
  function SealedClassSerializer$descriptor$delegate$lambda$lambda(this$0) {
    return function ($this$buildSerialDescriptor) {
      $this$buildSerialDescriptor.cj('type', serializer_0(StringCompanionObject_instance).ri());
      var tmp = 'kotlinx.serialization.Sealed<' + this$0.kj_1.v9() + '>';
      var tmp_0 = CONTEXTUAL_getInstance();
      var elementDescriptor = buildSerialDescriptor(tmp, tmp_0, [], SealedClassSerializer$descriptor$delegate$lambda$lambda$lambda(this$0));
      $this$buildSerialDescriptor.cj('value', elementDescriptor);
      $this$buildSerialDescriptor.wi_1 = this$0.lj_1;
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
    this.pj_1 = $this;
  }
  protoOf(SealedClassSerializer$$inlined$groupingBy$1).qj = function () {
    return this.pj_1.i();
  };
  protoOf(SealedClassSerializer$$inlined$groupingBy$1).rj = function (element) {
    // Inline function 'kotlinx.serialization.SealedClassSerializer.<anonymous>' call
    return element.r1().ri().sj();
  };
  protoOf(SealedClassSerializer$$inlined$groupingBy$1).tj = function (element) {
    return this.rj((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  function SealedClassSerializer(serialName, baseClass, subclasses, subclassSerializers) {
    AbstractPolymorphicSerializer.call(this);
    this.kj_1 = baseClass;
    this.lj_1 = emptyList();
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.mj_1 = lazy(tmp_0, SealedClassSerializer$descriptor$delegate$lambda(serialName, this));
    if (!(subclasses.length === subclassSerializers.length)) {
      throw IllegalArgumentException_init_$Create$('All subclasses of sealed class ' + this.kj_1.v9() + ' should be marked @Serializable');
    }
    this.nj_1 = toMap(zip(subclasses, subclassSerializers));
    var tmp_1 = this;
    // Inline function 'kotlin.collections.groupingBy' call
    var this_0 = this.nj_1.x1();
    // Inline function 'kotlin.collections.aggregate' call
    var tmp0 = new SealedClassSerializer$$inlined$groupingBy$1(this_0);
    // Inline function 'kotlin.collections.mutableMapOf' call
    // Inline function 'kotlin.collections.aggregateTo' call
    var destination = LinkedHashMap_init_$Create$();
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s = tmp0.qj();
    while (_iterator__ex2g4s.j()) {
      var e = _iterator__ex2g4s.k();
      var key = tmp0.tj(e);
      var accumulator = destination.u1(key);
      // Inline function 'kotlinx.serialization.SealedClassSerializer.<anonymous>' call
      accumulator == null && !destination.s1(key);
      if (!(accumulator == null)) {
        // Inline function 'kotlin.error' call
        var message = "Multiple sealed subclasses of '" + toString(this.kj_1) + "' have the same serial name '" + key + "':" + (" '" + toString(accumulator.q1()) + "', '" + toString(e.q1()) + "'");
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
    tmp_1.oj_1 = destination_0;
  }
  protoOf(SealedClassSerializer).gj = function () {
    return this.kj_1;
  };
  protoOf(SealedClassSerializer).ri = function () {
    var tmp0 = this.mj_1;
    // Inline function 'kotlin.getValue' call
    descriptor$factory_0();
    return tmp0.r1();
  };
  protoOf(SealedClassSerializer).ij = function (decoder, klassName) {
    // Inline function 'kotlin.collections.get' call
    var this_0 = this.oj_1;
    var tmp0_elvis_lhs = (isInterface(this_0, KtMap) ? this_0 : THROW_CCE()).u1(klassName);
    return tmp0_elvis_lhs == null ? protoOf(AbstractPolymorphicSerializer).ij.call(this, decoder, klassName) : tmp0_elvis_lhs;
  };
  protoOf(SealedClassSerializer).jj = function (encoder, value) {
    var tmp0_elvis_lhs = this.nj_1.u1(getKClassFromExpression(value));
    var tmp1_safe_receiver = tmp0_elvis_lhs == null ? protoOf(AbstractPolymorphicSerializer).jj.call(this, encoder, value) : tmp0_elvis_lhs;
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
      return receiver.ri();
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
    this.uj_1 = missingFields;
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
      if (isInterface_0(rootClass) && !(_this__u8e3s4.wj(rootClass) == null)) {
        tmp_0 = null;
      } else {
        tmp_0 = findCachedSerializer(rootClass, isNullable);
      }
      tmp = tmp_0;
    } else {
      var tmp_1;
      if (_this__u8e3s4.vj()) {
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
      var tmp1_elvis_lhs = tmp0_elvis_lhs == null ? _this__u8e3s4.wj(rootClass) : tmp0_elvis_lhs;
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
      var tmp4_elvis_lhs = tmp3_elvis_lhs == null ? _this__u8e3s4.xj(rootClass, serializers) : tmp3_elvis_lhs;
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
      var tmp0_safe_receiver = get_SERIALIZERS_CACHE().yj(clazz);
      var tmp_0;
      if (tmp0_safe_receiver == null) {
        tmp_0 = null;
      } else {
        // Inline function 'kotlinx.serialization.internal.cast' call
        tmp_0 = isInterface(tmp0_safe_receiver, KSerializer) ? tmp0_safe_receiver : THROW_CCE();
      }
      tmp = tmp_0;
    } else {
      tmp = get_SERIALIZERS_CACHE_NULLABLE().yj(clazz);
    }
    return tmp;
  }
  function findParametrizedCachedSerializer(clazz, types, isNullable) {
    _init_properties_SerializersCache_kt__hgwi2p();
    var tmp;
    if (!isNullable) {
      var tmp_0 = get_PARAMETRIZED_SERIALIZERS_CACHE().zj(clazz, types);
      tmp = new Result(tmp_0) instanceof Result ? tmp_0 : THROW_CCE();
    } else {
      tmp = get_PARAMETRIZED_SERIALIZERS_CACHE_NULLABLE().zj(clazz, types);
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
    if (_this__u8e3s4.ri().ak()) {
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
    this.bk_1 = original;
    this.ck_1 = kClass;
    this.dk_1 = this.bk_1.sj() + '<' + this.ck_1.v9() + '>';
  }
  protoOf(ContextDescriptor).sj = function () {
    return this.dk_1;
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
    return equals(this.bk_1, another.bk_1) && another.ck_1.equals(this.ck_1);
  };
  protoOf(ContextDescriptor).hashCode = function () {
    var result = this.ck_1.hashCode();
    result = imul(31, result) + getStringHashCode(this.dk_1) | 0;
    return result;
  };
  protoOf(ContextDescriptor).toString = function () {
    return 'ContextDescriptor(kClass: ' + toString(this.ck_1) + ', original: ' + toString(this.bk_1) + ')';
  };
  protoOf(ContextDescriptor).ek = function () {
    return this.bk_1.ek();
  };
  protoOf(ContextDescriptor).ak = function () {
    return this.bk_1.ak();
  };
  protoOf(ContextDescriptor).fk = function () {
    return this.bk_1.fk();
  };
  protoOf(ContextDescriptor).gk = function () {
    return this.bk_1.gk();
  };
  protoOf(ContextDescriptor).hk = function () {
    return this.bk_1.hk();
  };
  protoOf(ContextDescriptor).ik = function (index) {
    return this.bk_1.ik(index);
  };
  protoOf(ContextDescriptor).jk = function (name) {
    return this.bk_1.jk(name);
  };
  protoOf(ContextDescriptor).kk = function (index) {
    return this.bk_1.kk(index);
  };
  protoOf(ContextDescriptor).lk = function (index) {
    return this.bk_1.lk(index);
  };
  protoOf(ContextDescriptor).mk = function (index) {
    return this.bk_1.mk(index);
  };
  function getContextualDescriptor(_this__u8e3s4, descriptor) {
    var tmp0_safe_receiver = get_capturedKClass(descriptor);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlinx.serialization.descriptors.getContextualDescriptor.<anonymous>' call
      var tmp0_safe_receiver_0 = _this__u8e3s4.wj(tmp0_safe_receiver);
      tmp = tmp0_safe_receiver_0 == null ? null : tmp0_safe_receiver_0.ri();
    }
    return tmp;
  }
  function get_capturedKClass(_this__u8e3s4) {
    var tmp;
    if (_this__u8e3s4 instanceof ContextDescriptor) {
      tmp = _this__u8e3s4.ck_1;
    } else {
      if (_this__u8e3s4 instanceof SerialDescriptorForNullable) {
        tmp = get_capturedKClass(_this__u8e3s4.nk_1);
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
    this.rk_1 = $this_elementDescriptors;
    this.qk_1 = $this_elementDescriptors.gk();
  }
  protoOf(elementDescriptors$1).j = function () {
    return this.qk_1 > 0;
  };
  protoOf(elementDescriptors$1).k = function () {
    var tmp = this.rk_1.gk();
    var _unary__edvuaz = this.qk_1;
    this.qk_1 = _unary__edvuaz - 1 | 0;
    return this.rk_1.lk(tmp - _unary__edvuaz | 0);
  };
  function elementDescriptors$$inlined$Iterable$1($this_elementDescriptors) {
    this.sk_1 = $this_elementDescriptors;
  }
  protoOf(elementDescriptors$$inlined$Iterable$1).i = function () {
    // Inline function 'kotlinx.serialization.descriptors.<get-elementDescriptors>.<anonymous>' call
    return new elementDescriptors$1(this.sk_1);
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
    return new SerialDescriptorImpl(serialName, kind, sdBuilder.xi_1.l(), toList(typeParameters), sdBuilder);
  }
  function ClassSerialDescriptorBuilder(serialName) {
    this.ui_1 = serialName;
    this.vi_1 = false;
    this.wi_1 = emptyList();
    this.xi_1 = ArrayList_init_$Create$_0();
    this.yi_1 = HashSet_init_$Create$();
    this.zi_1 = ArrayList_init_$Create$_0();
    this.aj_1 = ArrayList_init_$Create$_0();
    this.bj_1 = ArrayList_init_$Create$_0();
  }
  protoOf(ClassSerialDescriptorBuilder).tk = function (elementName, descriptor, annotations, isOptional) {
    // Inline function 'kotlin.require' call
    if (!this.yi_1.d(elementName)) {
      // Inline function 'kotlinx.serialization.descriptors.ClassSerialDescriptorBuilder.element.<anonymous>' call
      var message = "Element with name '" + elementName + "' is already registered in " + this.ui_1;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.collections.plusAssign' call
    this.xi_1.d(elementName);
    // Inline function 'kotlin.collections.plusAssign' call
    this.zi_1.d(descriptor);
    // Inline function 'kotlin.collections.plusAssign' call
    this.aj_1.d(annotations);
    // Inline function 'kotlin.collections.plusAssign' call
    this.bj_1.d(isOptional);
  };
  protoOf(ClassSerialDescriptorBuilder).cj = function (elementName, descriptor, annotations, isOptional, $super) {
    annotations = annotations === VOID ? emptyList() : annotations;
    isOptional = isOptional === VOID ? false : isOptional;
    var tmp;
    if ($super === VOID) {
      this.tk(elementName, descriptor, annotations, isOptional);
      tmp = Unit_instance;
    } else {
      tmp = $super.tk.call(this, elementName, descriptor, annotations, isOptional);
    }
    return tmp;
  };
  function _get__hashCode__tgwhef($this) {
    var tmp0 = $this.fl_1;
    // Inline function 'kotlin.getValue' call
    _hashCode$factory();
    return tmp0.r1();
  }
  function SerialDescriptorImpl$_hashCode$delegate$lambda(this$0) {
    return function () {
      return hashCodeImpl(this$0, this$0.el_1);
    };
  }
  function SerialDescriptorImpl$toString$lambda(this$0) {
    return function (it) {
      return this$0.ik(it) + ': ' + this$0.lk(it).sj();
    };
  }
  function SerialDescriptorImpl(serialName, kind, elementsCount, typeParameters, builder) {
    this.uk_1 = serialName;
    this.vk_1 = kind;
    this.wk_1 = elementsCount;
    this.xk_1 = builder.wi_1;
    this.yk_1 = toHashSet(builder.xi_1);
    var tmp = this;
    // Inline function 'kotlin.collections.toTypedArray' call
    var this_0 = builder.xi_1;
    tmp.zk_1 = copyToArray(this_0);
    this.al_1 = compactArray(builder.zi_1);
    var tmp_0 = this;
    // Inline function 'kotlin.collections.toTypedArray' call
    var this_1 = builder.aj_1;
    tmp_0.bl_1 = copyToArray(this_1);
    this.cl_1 = toBooleanArray(builder.bj_1);
    var tmp_1 = this;
    // Inline function 'kotlin.collections.map' call
    var this_2 = withIndex(this.zk_1);
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_2, 10));
    var _iterator__ex2g4s = this_2.i();
    while (_iterator__ex2g4s.j()) {
      var item = _iterator__ex2g4s.k();
      // Inline function 'kotlinx.serialization.descriptors.SerialDescriptorImpl.name2Index.<anonymous>' call
      var tmp$ret$2 = to(item.tc_1, item.sc_1);
      destination.d(tmp$ret$2);
    }
    tmp_1.dl_1 = toMap(destination);
    this.el_1 = compactArray(typeParameters);
    var tmp_2 = this;
    tmp_2.fl_1 = lazy_0(SerialDescriptorImpl$_hashCode$delegate$lambda(this));
  }
  protoOf(SerialDescriptorImpl).sj = function () {
    return this.uk_1;
  };
  protoOf(SerialDescriptorImpl).ek = function () {
    return this.vk_1;
  };
  protoOf(SerialDescriptorImpl).gk = function () {
    return this.wk_1;
  };
  protoOf(SerialDescriptorImpl).hk = function () {
    return this.xk_1;
  };
  protoOf(SerialDescriptorImpl).gl = function () {
    return this.yk_1;
  };
  protoOf(SerialDescriptorImpl).ik = function (index) {
    return getChecked(this.zk_1, index);
  };
  protoOf(SerialDescriptorImpl).jk = function (name) {
    var tmp0_elvis_lhs = this.dl_1.u1(name);
    return tmp0_elvis_lhs == null ? -3 : tmp0_elvis_lhs;
  };
  protoOf(SerialDescriptorImpl).kk = function (index) {
    return getChecked(this.bl_1, index);
  };
  protoOf(SerialDescriptorImpl).lk = function (index) {
    return getChecked(this.al_1, index);
  };
  protoOf(SerialDescriptorImpl).mk = function (index) {
    return getChecked_0(this.cl_1, index);
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
      if (!(this.sj() === other.sj())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      // Inline function 'kotlinx.serialization.descriptors.SerialDescriptorImpl.equals.<anonymous>' call
      if (!contentEquals(this.el_1, other.el_1)) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.gk() === other.gk())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var inductionVariable = 0;
      var last = this.gk();
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (!(this.lk(index).sj() === other.lk(index).sj())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
          if (!equals(this.lk(index).ek(), other.lk(index).ek())) {
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
    var tmp = until(0, this.wk_1);
    var tmp_0 = this.uk_1 + '(';
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
    return new SerialDescriptorImpl(serialName, CLASS_getInstance(), sdBuilder.xi_1.l(), toList(typeParameters), sdBuilder);
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
  protoOf(AbstractDecoder).hl = function () {
    throw SerializationException_init_$Create$_0(toString(getKClassFromExpression(this)) + " can't retrieve untyped values");
  };
  protoOf(AbstractDecoder).il = function () {
    return true;
  };
  protoOf(AbstractDecoder).jl = function () {
    return null;
  };
  protoOf(AbstractDecoder).kl = function () {
    var tmp = this.hl();
    return typeof tmp === 'boolean' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).ll = function () {
    var tmp = this.hl();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).ml = function () {
    var tmp = this.hl();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).nl = function () {
    var tmp = this.hl();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).ol = function () {
    var tmp = this.hl();
    return tmp instanceof Long ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).pl = function () {
    var tmp = this.hl();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).ql = function () {
    var tmp = this.hl();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).rl = function () {
    var tmp = this.hl();
    return tmp instanceof Char ? tmp.a1_1 : THROW_CCE();
  };
  protoOf(AbstractDecoder).sl = function () {
    var tmp = this.hl();
    return typeof tmp === 'string' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).tl = function (descriptor) {
    return this;
  };
  protoOf(AbstractDecoder).ul = function (deserializer, previousValue) {
    return this.vl(deserializer);
  };
  protoOf(AbstractDecoder).wl = function (descriptor) {
    return this;
  };
  protoOf(AbstractDecoder).xl = function (descriptor) {
  };
  protoOf(AbstractDecoder).yl = function (descriptor, index) {
    return this.kl();
  };
  protoOf(AbstractDecoder).zl = function (descriptor, index) {
    return this.ll();
  };
  protoOf(AbstractDecoder).am = function (descriptor, index) {
    return this.ml();
  };
  protoOf(AbstractDecoder).bm = function (descriptor, index) {
    return this.nl();
  };
  protoOf(AbstractDecoder).cm = function (descriptor, index) {
    return this.ol();
  };
  protoOf(AbstractDecoder).dm = function (descriptor, index) {
    return this.pl();
  };
  protoOf(AbstractDecoder).em = function (descriptor, index) {
    return this.ql();
  };
  protoOf(AbstractDecoder).fm = function (descriptor, index) {
    return this.rl();
  };
  protoOf(AbstractDecoder).gm = function (descriptor, index) {
    return this.sl();
  };
  protoOf(AbstractDecoder).hm = function (descriptor, index) {
    return this.tl(descriptor.lk(index));
  };
  protoOf(AbstractDecoder).im = function (descriptor, index, deserializer, previousValue) {
    return this.ul(deserializer, previousValue);
  };
  protoOf(AbstractDecoder).km = function (descriptor, index, deserializer, previousValue) {
    // Inline function 'kotlinx.serialization.encoding.decodeIfNullable' call
    var isNullabilitySupported = deserializer.ri().ak();
    var tmp;
    if (isNullabilitySupported || this.il()) {
      // Inline function 'kotlinx.serialization.encoding.AbstractDecoder.decodeNullableSerializableElement.<anonymous>' call
      tmp = this.ul(deserializer, previousValue);
    } else {
      tmp = this.jl();
    }
    return tmp;
  };
  function AbstractEncoder() {
  }
  protoOf(AbstractEncoder).wl = function (descriptor) {
    return this;
  };
  protoOf(AbstractEncoder).xl = function (descriptor) {
  };
  protoOf(AbstractEncoder).pm = function (descriptor, index) {
    return true;
  };
  protoOf(AbstractEncoder).qm = function (value) {
    throw SerializationException_init_$Create$_0('Non-serializable ' + toString(getKClassFromExpression(value)) + ' is not supported by ' + toString(getKClassFromExpression(this)) + ' encoder');
  };
  protoOf(AbstractEncoder).rm = function () {
    throw SerializationException_init_$Create$_0("'null' is not supported by default");
  };
  protoOf(AbstractEncoder).sm = function (value) {
    return this.qm(value);
  };
  protoOf(AbstractEncoder).tm = function (value) {
    return this.qm(value);
  };
  protoOf(AbstractEncoder).um = function (value) {
    return this.qm(value);
  };
  protoOf(AbstractEncoder).vm = function (value) {
    return this.qm(value);
  };
  protoOf(AbstractEncoder).wm = function (value) {
    return this.qm(value);
  };
  protoOf(AbstractEncoder).xm = function (value) {
    return this.qm(value);
  };
  protoOf(AbstractEncoder).ym = function (value) {
    return this.qm(value);
  };
  protoOf(AbstractEncoder).zm = function (value) {
    return this.qm(new Char(value));
  };
  protoOf(AbstractEncoder).an = function (value) {
    return this.qm(value);
  };
  protoOf(AbstractEncoder).bn = function (descriptor) {
    return this;
  };
  protoOf(AbstractEncoder).cn = function (descriptor, index, value) {
    if (this.pm(descriptor, index)) {
      this.sm(value);
    }
  };
  protoOf(AbstractEncoder).dn = function (descriptor, index, value) {
    if (this.pm(descriptor, index)) {
      this.tm(value);
    }
  };
  protoOf(AbstractEncoder).en = function (descriptor, index, value) {
    if (this.pm(descriptor, index)) {
      this.um(value);
    }
  };
  protoOf(AbstractEncoder).fn = function (descriptor, index, value) {
    if (this.pm(descriptor, index)) {
      this.vm(value);
    }
  };
  protoOf(AbstractEncoder).gn = function (descriptor, index, value) {
    if (this.pm(descriptor, index)) {
      this.wm(value);
    }
  };
  protoOf(AbstractEncoder).hn = function (descriptor, index, value) {
    if (this.pm(descriptor, index)) {
      this.xm(value);
    }
  };
  protoOf(AbstractEncoder).in = function (descriptor, index, value) {
    if (this.pm(descriptor, index)) {
      this.ym(value);
    }
  };
  protoOf(AbstractEncoder).jn = function (descriptor, index, value) {
    if (this.pm(descriptor, index)) {
      this.zm(value);
    }
  };
  protoOf(AbstractEncoder).kn = function (descriptor, index, value) {
    if (this.pm(descriptor, index)) {
      this.an(value);
    }
  };
  protoOf(AbstractEncoder).ln = function (descriptor, index) {
    return this.pm(descriptor, index) ? this.bn(descriptor.lk(index)) : NoOpEncoder_getInstance();
  };
  protoOf(AbstractEncoder).mn = function (descriptor, index, serializer, value) {
    if (this.pm(descriptor, index)) {
      this.nn(serializer, value);
    }
  };
  protoOf(AbstractEncoder).on = function (descriptor, index, serializer, value) {
    if (this.pm(descriptor, index)) {
      this.pn(serializer, value);
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
    var klassName = compositeDecoder.gm($this.ri(), 0);
    var serializer = findPolymorphicSerializer_0($this, compositeDecoder, klassName);
    return compositeDecoder.jm($this.ri(), 1, serializer);
  }
  function AbstractPolymorphicSerializer() {
  }
  protoOf(AbstractPolymorphicSerializer).hj = function (encoder, value) {
    var actualSerializer = findPolymorphicSerializer(this, encoder, value);
    // Inline function 'kotlinx.serialization.encoding.encodeStructure' call
    var descriptor = this.ri();
    var composite = encoder.wl(descriptor);
    // Inline function 'kotlinx.serialization.internal.AbstractPolymorphicSerializer.serialize.<anonymous>' call
    composite.kn(this.ri(), 0, actualSerializer.ri().sj());
    var tmp = this.ri();
    // Inline function 'kotlinx.serialization.internal.cast' call
    var tmp$ret$0 = isInterface(actualSerializer, SerializationStrategy) ? actualSerializer : THROW_CCE();
    composite.mn(tmp, 1, tmp$ret$0, value);
    composite.xl(descriptor);
  };
  protoOf(AbstractPolymorphicSerializer).si = function (encoder, value) {
    return this.hj(encoder, !(value == null) ? value : THROW_CCE());
  };
  protoOf(AbstractPolymorphicSerializer).ti = function (decoder) {
    // Inline function 'kotlinx.serialization.encoding.decodeStructure' call
    var descriptor = this.ri();
    var composite = decoder.wl(descriptor);
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.internal.AbstractPolymorphicSerializer.deserialize.<anonymous>' call
      var klassName = null;
      var value = null;
      if (composite.mm()) {
        tmp$ret$0 = decodeSequentially_0(this, composite);
        break $l$block;
      }
      mainLoop: while (true) {
        var index = composite.nm(this.ri());
        switch (index) {
          case -1:
            break mainLoop;
          case 0:
            klassName = composite.gm(this.ri(), index);
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
            value = composite.jm(this.ri(), index, serializer);
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
    composite.xl(descriptor);
    return result;
  };
  protoOf(AbstractPolymorphicSerializer).ij = function (decoder, klassName) {
    return decoder.lm().tn(this.gj(), klassName);
  };
  protoOf(AbstractPolymorphicSerializer).jj = function (encoder, value) {
    return encoder.lm().un(this.gj(), value);
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
    this.vn_1 = NothingSerialDescriptor_getInstance();
  }
  protoOf(NothingSerializer_0).ri = function () {
    return this.vn_1;
  };
  protoOf(NothingSerializer_0).wn = function (encoder, value) {
    throw SerializationException_init_$Create$_0("'kotlin.Nothing' cannot be serialized");
  };
  protoOf(NothingSerializer_0).si = function (encoder, value) {
    var tmp;
    if (false) {
      tmp = value;
    } else {
      tmp = THROW_CCE();
    }
    return this.wn(encoder, tmp);
  };
  protoOf(NothingSerializer_0).ti = function (decoder) {
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
    this.xn_1 = new PrimitiveSerialDescriptor_0('kotlin.time.Duration', STRING_getInstance());
  }
  protoOf(DurationSerializer).ri = function () {
    return this.xn_1;
  };
  protoOf(DurationSerializer).yn = function (encoder, value) {
    encoder.an(Duration__toIsoString_impl_9h6wsm(value));
  };
  protoOf(DurationSerializer).si = function (encoder, value) {
    return this.yn(encoder, value instanceof Duration ? value.dg_1 : THROW_CCE());
  };
  protoOf(DurationSerializer).zn = function (decoder) {
    return Companion_getInstance().cg(decoder.sl());
  };
  protoOf(DurationSerializer).ti = function (decoder) {
    return new Duration(this.zn(decoder));
  };
  var DurationSerializer_instance;
  function DurationSerializer_getInstance() {
    if (DurationSerializer_instance == null)
      new DurationSerializer();
    return DurationSerializer_instance;
  }
  function UuidSerializer() {
    UuidSerializer_instance = this;
    this.ao_1 = new PrimitiveSerialDescriptor_0('kotlin.uuid.Uuid', STRING_getInstance());
  }
  protoOf(UuidSerializer).ri = function () {
    return this.ao_1;
  };
  protoOf(UuidSerializer).bo = function (encoder, value) {
    encoder.an(value.toString());
  };
  protoOf(UuidSerializer).si = function (encoder, value) {
    return this.bo(encoder, value instanceof Uuid ? value : THROW_CCE());
  };
  protoOf(UuidSerializer).ti = function (decoder) {
    return Companion_getInstance_0().ch(decoder.sl());
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
  protoOf(ArrayListClassDesc).sj = function () {
    return 'kotlin.collections.ArrayList';
  };
  function HashSetClassDesc(elementDesc) {
    ListLikeDescriptor.call(this, elementDesc);
  }
  protoOf(HashSetClassDesc).sj = function () {
    return 'kotlin.collections.HashSet';
  };
  function LinkedHashSetClassDesc(elementDesc) {
    ListLikeDescriptor.call(this, elementDesc);
  }
  protoOf(LinkedHashSetClassDesc).sj = function () {
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
  protoOf(ArrayClassDesc).sj = function () {
    return 'kotlin.Array';
  };
  function ListLikeDescriptor(elementDescriptor) {
    this.eo_1 = elementDescriptor;
    this.fo_1 = 1;
  }
  protoOf(ListLikeDescriptor).ek = function () {
    return LIST_getInstance();
  };
  protoOf(ListLikeDescriptor).gk = function () {
    return this.fo_1;
  };
  protoOf(ListLikeDescriptor).ik = function (index) {
    return index.toString();
  };
  protoOf(ListLikeDescriptor).jk = function (name) {
    var tmp0_elvis_lhs = toIntOrNull(name);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalArgumentException_init_$Create$(name + ' is not a valid list index');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(ListLikeDescriptor).mk = function (index) {
    // Inline function 'kotlin.require' call
    if (!(index >= 0)) {
      // Inline function 'kotlinx.serialization.internal.ListLikeDescriptor.isElementOptional.<anonymous>' call
      var message = 'Illegal index ' + index + ', ' + this.sj() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return false;
  };
  protoOf(ListLikeDescriptor).kk = function (index) {
    // Inline function 'kotlin.require' call
    if (!(index >= 0)) {
      // Inline function 'kotlinx.serialization.internal.ListLikeDescriptor.getElementAnnotations.<anonymous>' call
      var message = 'Illegal index ' + index + ', ' + this.sj() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return emptyList();
  };
  protoOf(ListLikeDescriptor).lk = function (index) {
    // Inline function 'kotlin.require' call
    if (!(index >= 0)) {
      // Inline function 'kotlinx.serialization.internal.ListLikeDescriptor.getElementDescriptor.<anonymous>' call
      var message = 'Illegal index ' + index + ', ' + this.sj() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return this.eo_1;
  };
  protoOf(ListLikeDescriptor).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ListLikeDescriptor))
      return false;
    if (equals(this.eo_1, other.eo_1) && this.sj() === other.sj())
      return true;
    return false;
  };
  protoOf(ListLikeDescriptor).hashCode = function () {
    return imul(hashCode(this.eo_1), 31) + getStringHashCode(this.sj()) | 0;
  };
  protoOf(ListLikeDescriptor).toString = function () {
    return this.sj() + '(' + toString(this.eo_1) + ')';
  };
  function MapLikeDescriptor(serialName, keyDescriptor, valueDescriptor) {
    this.ko_1 = serialName;
    this.lo_1 = keyDescriptor;
    this.mo_1 = valueDescriptor;
    this.no_1 = 2;
  }
  protoOf(MapLikeDescriptor).sj = function () {
    return this.ko_1;
  };
  protoOf(MapLikeDescriptor).ek = function () {
    return MAP_getInstance();
  };
  protoOf(MapLikeDescriptor).gk = function () {
    return this.no_1;
  };
  protoOf(MapLikeDescriptor).ik = function (index) {
    return index.toString();
  };
  protoOf(MapLikeDescriptor).jk = function (name) {
    var tmp0_elvis_lhs = toIntOrNull(name);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalArgumentException_init_$Create$(name + ' is not a valid map index');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(MapLikeDescriptor).mk = function (index) {
    // Inline function 'kotlin.require' call
    if (!(index >= 0)) {
      // Inline function 'kotlinx.serialization.internal.MapLikeDescriptor.isElementOptional.<anonymous>' call
      var message = 'Illegal index ' + index + ', ' + this.sj() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return false;
  };
  protoOf(MapLikeDescriptor).kk = function (index) {
    // Inline function 'kotlin.require' call
    if (!(index >= 0)) {
      // Inline function 'kotlinx.serialization.internal.MapLikeDescriptor.getElementAnnotations.<anonymous>' call
      var message = 'Illegal index ' + index + ', ' + this.sj() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return emptyList();
  };
  protoOf(MapLikeDescriptor).lk = function (index) {
    // Inline function 'kotlin.require' call
    if (!(index >= 0)) {
      // Inline function 'kotlinx.serialization.internal.MapLikeDescriptor.getElementDescriptor.<anonymous>' call
      var message = 'Illegal index ' + index + ', ' + this.sj() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var tmp;
    switch (index % 2 | 0) {
      case 0:
        tmp = this.lo_1;
        break;
      case 1:
        tmp = this.mo_1;
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
    if (!(this.sj() === other.sj()))
      return false;
    if (!equals(this.lo_1, other.lo_1))
      return false;
    if (!equals(this.mo_1, other.mo_1))
      return false;
    return true;
  };
  protoOf(MapLikeDescriptor).hashCode = function () {
    var result = getStringHashCode(this.sj());
    result = imul(31, result) + hashCode(this.lo_1) | 0;
    result = imul(31, result) + hashCode(this.mo_1) | 0;
    return result;
  };
  protoOf(MapLikeDescriptor).toString = function () {
    return this.sj() + '(' + toString(this.lo_1) + ', ' + toString(this.mo_1) + ')';
  };
  function PrimitiveArrayDescriptor(primitive) {
    ListLikeDescriptor.call(this, primitive);
    this.so_1 = primitive.sj() + 'Array';
  }
  protoOf(PrimitiveArrayDescriptor).sj = function () {
    return this.so_1;
  };
  function ArrayListSerializer(element) {
    CollectionSerializer.call(this, element);
    this.uo_1 = new ArrayListClassDesc(element.ri());
  }
  protoOf(ArrayListSerializer).ri = function () {
    return this.uo_1;
  };
  protoOf(ArrayListSerializer).vo = function () {
    // Inline function 'kotlin.collections.arrayListOf' call
    return ArrayList_init_$Create$_0();
  };
  protoOf(ArrayListSerializer).wo = function (_this__u8e3s4) {
    return _this__u8e3s4.l();
  };
  protoOf(ArrayListSerializer).xo = function (_this__u8e3s4) {
    return this.wo(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ArrayListSerializer).yo = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  protoOf(ArrayListSerializer).zo = function (_this__u8e3s4) {
    return this.yo(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ArrayListSerializer).ap = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? ArrayList_init_$Create$_1(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  protoOf(ArrayListSerializer).bp = function (_this__u8e3s4) {
    return this.ap((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtList) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ArrayListSerializer).cp = function (_this__u8e3s4, size) {
    return _this__u8e3s4.x4(size);
  };
  protoOf(ArrayListSerializer).dp = function (_this__u8e3s4, size) {
    return this.cp(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE(), size);
  };
  protoOf(ArrayListSerializer).ep = function (_this__u8e3s4, index, element) {
    _this__u8e3s4.b2(index, element);
  };
  protoOf(ArrayListSerializer).fp = function (_this__u8e3s4, index, element) {
    var tmp = _this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE();
    return this.ep(tmp, index, (element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  function HashSetSerializer(eSerializer) {
    CollectionSerializer.call(this, eSerializer);
    this.qp_1 = new HashSetClassDesc(eSerializer.ri());
  }
  protoOf(HashSetSerializer).ri = function () {
    return this.qp_1;
  };
  protoOf(HashSetSerializer).vo = function () {
    return HashSet_init_$Create$();
  };
  protoOf(HashSetSerializer).rp = function (_this__u8e3s4) {
    return _this__u8e3s4.l();
  };
  protoOf(HashSetSerializer).xo = function (_this__u8e3s4) {
    return this.rp(_this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashSetSerializer).sp = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  protoOf(HashSetSerializer).zo = function (_this__u8e3s4) {
    return this.sp(_this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashSetSerializer).tp = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? HashSet_init_$Create$_0(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  protoOf(HashSetSerializer).bp = function (_this__u8e3s4) {
    return this.tp((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtSet) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashSetSerializer).up = function (_this__u8e3s4, size) {
  };
  protoOf(HashSetSerializer).dp = function (_this__u8e3s4, size) {
    return this.up(_this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : THROW_CCE(), size);
  };
  protoOf(HashSetSerializer).vp = function (_this__u8e3s4, index, element) {
    _this__u8e3s4.d(element);
  };
  protoOf(HashSetSerializer).fp = function (_this__u8e3s4, index, element) {
    var tmp = _this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : THROW_CCE();
    return this.vp(tmp, index, (element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  function LinkedHashSetSerializer(eSerializer) {
    CollectionSerializer.call(this, eSerializer);
    this.xp_1 = new LinkedHashSetClassDesc(eSerializer.ri());
  }
  protoOf(LinkedHashSetSerializer).ri = function () {
    return this.xp_1;
  };
  protoOf(LinkedHashSetSerializer).vo = function () {
    // Inline function 'kotlin.collections.linkedSetOf' call
    return LinkedHashSet_init_$Create$();
  };
  protoOf(LinkedHashSetSerializer).yp = function (_this__u8e3s4) {
    return _this__u8e3s4.l();
  };
  protoOf(LinkedHashSetSerializer).xo = function (_this__u8e3s4) {
    return this.yp(_this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashSetSerializer).zp = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  protoOf(LinkedHashSetSerializer).zo = function (_this__u8e3s4) {
    return this.zp(_this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashSetSerializer).tp = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? LinkedHashSet_init_$Create$_0(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  protoOf(LinkedHashSetSerializer).bp = function (_this__u8e3s4) {
    return this.tp((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtSet) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashSetSerializer).aq = function (_this__u8e3s4, size) {
  };
  protoOf(LinkedHashSetSerializer).dp = function (_this__u8e3s4, size) {
    return this.aq(_this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : THROW_CCE(), size);
  };
  protoOf(LinkedHashSetSerializer).bq = function (_this__u8e3s4, index, element) {
    _this__u8e3s4.d(element);
  };
  protoOf(LinkedHashSetSerializer).fp = function (_this__u8e3s4, index, element) {
    var tmp = _this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : THROW_CCE();
    return this.bq(tmp, index, (element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  function HashMapSerializer(kSerializer, vSerializer) {
    MapLikeSerializer.call(this, kSerializer, vSerializer);
    this.eq_1 = new HashMapClassDesc(kSerializer.ri(), vSerializer.ri());
  }
  protoOf(HashMapSerializer).ri = function () {
    return this.eq_1;
  };
  protoOf(HashMapSerializer).fq = function (_this__u8e3s4) {
    return _this__u8e3s4.l();
  };
  protoOf(HashMapSerializer).gq = function (_this__u8e3s4) {
    return this.fq((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtMap) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashMapSerializer).hq = function (_this__u8e3s4) {
    // Inline function 'kotlin.collections.iterator' call
    return _this__u8e3s4.x1().i();
  };
  protoOf(HashMapSerializer).iq = function (_this__u8e3s4) {
    return this.hq((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtMap) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashMapSerializer).vo = function () {
    return HashMap_init_$Create$();
  };
  protoOf(HashMapSerializer).jq = function (_this__u8e3s4) {
    return imul(_this__u8e3s4.l(), 2);
  };
  protoOf(HashMapSerializer).xo = function (_this__u8e3s4) {
    return this.jq(_this__u8e3s4 instanceof HashMap ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashMapSerializer).kq = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  protoOf(HashMapSerializer).zo = function (_this__u8e3s4) {
    return this.kq(_this__u8e3s4 instanceof HashMap ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashMapSerializer).lq = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof HashMap ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? HashMap_init_$Create$_0(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  protoOf(HashMapSerializer).bp = function (_this__u8e3s4) {
    return this.lq((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtMap) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashMapSerializer).mq = function (_this__u8e3s4, size) {
  };
  protoOf(HashMapSerializer).dp = function (_this__u8e3s4, size) {
    return this.mq(_this__u8e3s4 instanceof HashMap ? _this__u8e3s4 : THROW_CCE(), size);
  };
  function LinkedHashMapSerializer(kSerializer, vSerializer) {
    MapLikeSerializer.call(this, kSerializer, vSerializer);
    this.tq_1 = new LinkedHashMapClassDesc(kSerializer.ri(), vSerializer.ri());
  }
  protoOf(LinkedHashMapSerializer).ri = function () {
    return this.tq_1;
  };
  protoOf(LinkedHashMapSerializer).fq = function (_this__u8e3s4) {
    return _this__u8e3s4.l();
  };
  protoOf(LinkedHashMapSerializer).gq = function (_this__u8e3s4) {
    return this.fq((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtMap) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashMapSerializer).hq = function (_this__u8e3s4) {
    // Inline function 'kotlin.collections.iterator' call
    return _this__u8e3s4.x1().i();
  };
  protoOf(LinkedHashMapSerializer).iq = function (_this__u8e3s4) {
    return this.hq((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtMap) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashMapSerializer).vo = function () {
    return LinkedHashMap_init_$Create$();
  };
  protoOf(LinkedHashMapSerializer).uq = function (_this__u8e3s4) {
    return imul(_this__u8e3s4.l(), 2);
  };
  protoOf(LinkedHashMapSerializer).xo = function (_this__u8e3s4) {
    return this.uq(_this__u8e3s4 instanceof LinkedHashMap ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashMapSerializer).vq = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  protoOf(LinkedHashMapSerializer).zo = function (_this__u8e3s4) {
    return this.vq(_this__u8e3s4 instanceof LinkedHashMap ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashMapSerializer).lq = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof LinkedHashMap ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? LinkedHashMap_init_$Create$_1(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  protoOf(LinkedHashMapSerializer).bp = function (_this__u8e3s4) {
    return this.lq((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtMap) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashMapSerializer).wq = function (_this__u8e3s4, size) {
  };
  protoOf(LinkedHashMapSerializer).dp = function (_this__u8e3s4, size) {
    return this.wq(_this__u8e3s4 instanceof LinkedHashMap ? _this__u8e3s4 : THROW_CCE(), size);
  };
  function ReferenceArraySerializer(kClass, eSerializer) {
    CollectionLikeSerializer.call(this, eSerializer);
    this.yq_1 = kClass;
    this.zq_1 = new ArrayClassDesc(eSerializer.ri());
  }
  protoOf(ReferenceArraySerializer).ri = function () {
    return this.zq_1;
  };
  protoOf(ReferenceArraySerializer).ar = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(ReferenceArraySerializer).gq = function (_this__u8e3s4) {
    return this.ar((!(_this__u8e3s4 == null) ? isArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ReferenceArraySerializer).br = function (_this__u8e3s4) {
    return arrayIterator(_this__u8e3s4);
  };
  protoOf(ReferenceArraySerializer).iq = function (_this__u8e3s4) {
    return this.br((!(_this__u8e3s4 == null) ? isArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ReferenceArraySerializer).vo = function () {
    // Inline function 'kotlin.collections.arrayListOf' call
    return ArrayList_init_$Create$_0();
  };
  protoOf(ReferenceArraySerializer).cr = function (_this__u8e3s4) {
    return _this__u8e3s4.l();
  };
  protoOf(ReferenceArraySerializer).xo = function (_this__u8e3s4) {
    return this.cr(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ReferenceArraySerializer).dr = function (_this__u8e3s4) {
    return toNativeArrayImpl(_this__u8e3s4, this.yq_1);
  };
  protoOf(ReferenceArraySerializer).zo = function (_this__u8e3s4) {
    return this.dr(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ReferenceArraySerializer).er = function (_this__u8e3s4) {
    return ArrayList_init_$Create$_1(asList(_this__u8e3s4));
  };
  protoOf(ReferenceArraySerializer).bp = function (_this__u8e3s4) {
    return this.er((!(_this__u8e3s4 == null) ? isArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ReferenceArraySerializer).fr = function (_this__u8e3s4, size) {
    return _this__u8e3s4.x4(size);
  };
  protoOf(ReferenceArraySerializer).dp = function (_this__u8e3s4, size) {
    return this.fr(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE(), size);
  };
  protoOf(ReferenceArraySerializer).gr = function (_this__u8e3s4, index, element) {
    _this__u8e3s4.b2(index, element);
  };
  protoOf(ReferenceArraySerializer).fp = function (_this__u8e3s4, index, element) {
    var tmp = _this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE();
    return this.gr(tmp, index, (element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  function CollectionSerializer(element) {
    CollectionLikeSerializer.call(this, element);
  }
  protoOf(CollectionSerializer).hp = function (_this__u8e3s4) {
    return _this__u8e3s4.l();
  };
  protoOf(CollectionSerializer).gq = function (_this__u8e3s4) {
    return this.hp((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Collection) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(CollectionSerializer).ip = function (_this__u8e3s4) {
    return _this__u8e3s4.i();
  };
  protoOf(CollectionSerializer).iq = function (_this__u8e3s4) {
    return this.ip((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Collection) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  function MapLikeSerializer(keySerializer, valueSerializer) {
    AbstractCollectionSerializer.call(this);
    this.nq_1 = keySerializer;
    this.oq_1 = valueSerializer;
  }
  protoOf(MapLikeSerializer).pq = function (decoder, builder, startIndex, size) {
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
        this.qq(decoder, startIndex + index | 0, builder, false);
      }
       while (!(index === last));
  };
  protoOf(MapLikeSerializer).lp = function (decoder, builder, startIndex, size) {
    return this.pq(decoder, (!(builder == null) ? isInterface(builder, KtMutableMap) : false) ? builder : THROW_CCE(), startIndex, size);
  };
  protoOf(MapLikeSerializer).qq = function (decoder, index, builder, checkIndex) {
    var key = decoder.jm(this.ri(), index, this.nq_1);
    var tmp;
    if (checkIndex) {
      // Inline function 'kotlin.also' call
      var this_0 = decoder.nm(this.ri());
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
      var tmp_2 = this.oq_1.ri().ek();
      tmp_1 = !(tmp_2 instanceof PrimitiveKind);
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      tmp_0 = decoder.im(this.ri(), vIndex, this.oq_1, getValue(builder, key));
    } else {
      tmp_0 = decoder.jm(this.ri(), vIndex, this.oq_1);
    }
    var value = tmp_0;
    // Inline function 'kotlin.collections.set' call
    builder.d2(key, value);
  };
  protoOf(MapLikeSerializer).mp = function (decoder, index, builder, checkIndex) {
    return this.qq(decoder, index, (!(builder == null) ? isInterface(builder, KtMutableMap) : false) ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(MapLikeSerializer).kp = function (encoder, value) {
    var size = this.gq(value);
    // Inline function 'kotlinx.serialization.encoding.encodeCollection' call
    var descriptor = this.ri();
    var composite = encoder.rn(descriptor, size);
    // Inline function 'kotlinx.serialization.internal.MapLikeSerializer.serialize.<anonymous>' call
    var iterator = this.iq(value);
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
      var tmp = this.ri();
      var _unary__edvuaz = index;
      index = _unary__edvuaz + 1 | 0;
      composite.mn(tmp, _unary__edvuaz, this.nq_1, k);
      var tmp_0 = this.ri();
      var _unary__edvuaz_0 = index;
      index = _unary__edvuaz_0 + 1 | 0;
      composite.mn(tmp_0, _unary__edvuaz_0, this.oq_1, v);
    }
    composite.xl(descriptor);
  };
  protoOf(MapLikeSerializer).si = function (encoder, value) {
    return this.kp(encoder, (value == null ? true : !(value == null)) ? value : THROW_CCE());
  };
  function CollectionLikeSerializer(elementSerializer) {
    AbstractCollectionSerializer.call(this);
    this.jp_1 = elementSerializer;
  }
  protoOf(CollectionLikeSerializer).kp = function (encoder, value) {
    var size = this.gq(value);
    // Inline function 'kotlinx.serialization.encoding.encodeCollection' call
    var descriptor = this.ri();
    var composite = encoder.rn(descriptor, size);
    // Inline function 'kotlinx.serialization.internal.CollectionLikeSerializer.serialize.<anonymous>' call
    var iterator = this.iq(value);
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        composite.mn(this.ri(), index, this.jp_1, iterator.k());
      }
       while (inductionVariable < size);
    composite.xl(descriptor);
  };
  protoOf(CollectionLikeSerializer).si = function (encoder, value) {
    return this.kp(encoder, (value == null ? true : !(value == null)) ? value : THROW_CCE());
  };
  protoOf(CollectionLikeSerializer).lp = function (decoder, builder, startIndex, size) {
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
        this.mp(decoder, startIndex + index | 0, builder, false);
      }
       while (inductionVariable < size);
  };
  protoOf(CollectionLikeSerializer).mp = function (decoder, index, builder, checkIndex) {
    this.fp(builder, index, decoder.jm(this.ri(), index, this.jp_1));
  };
  function readSize($this, decoder, builder) {
    var size = decoder.om($this.ri());
    $this.dp(builder, size);
    return size;
  }
  function AbstractCollectionSerializer() {
  }
  protoOf(AbstractCollectionSerializer).op = function (decoder, previous) {
    var tmp1_elvis_lhs = previous == null ? null : this.bp(previous);
    var builder = tmp1_elvis_lhs == null ? this.vo() : tmp1_elvis_lhs;
    var startIndex = this.xo(builder);
    var compositeDecoder = decoder.wl(this.ri());
    if (compositeDecoder.mm()) {
      this.lp(compositeDecoder, builder, startIndex, readSize(this, compositeDecoder, builder));
    } else {
      $l$loop: while (true) {
        var index = compositeDecoder.nm(this.ri());
        if (index === -1)
          break $l$loop;
        this.np(compositeDecoder, startIndex + index | 0, builder);
      }
    }
    compositeDecoder.xl(this.ri());
    return this.zo(builder);
  };
  protoOf(AbstractCollectionSerializer).ti = function (decoder) {
    return this.op(decoder, null);
  };
  protoOf(AbstractCollectionSerializer).np = function (decoder, index, builder, checkIndex, $super) {
    checkIndex = checkIndex === VOID ? true : checkIndex;
    var tmp;
    if ($super === VOID) {
      this.mp(decoder, index, builder, checkIndex);
      tmp = Unit_instance;
    } else {
      tmp = $super.mp.call(this, decoder, index, builder, checkIndex);
    }
    return tmp;
  };
  function PrimitiveArraySerializer(primitiveSerializer) {
    CollectionLikeSerializer.call(this, primitiveSerializer);
    this.ir_1 = new PrimitiveArrayDescriptor(primitiveSerializer.ri());
  }
  protoOf(PrimitiveArraySerializer).ri = function () {
    return this.ir_1;
  };
  protoOf(PrimitiveArraySerializer).jr = function (_this__u8e3s4) {
    return _this__u8e3s4.kr();
  };
  protoOf(PrimitiveArraySerializer).xo = function (_this__u8e3s4) {
    return this.jr(_this__u8e3s4 instanceof PrimitiveArrayBuilder ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(PrimitiveArraySerializer).lr = function (_this__u8e3s4) {
    return _this__u8e3s4.mr();
  };
  protoOf(PrimitiveArraySerializer).zo = function (_this__u8e3s4) {
    return this.lr(_this__u8e3s4 instanceof PrimitiveArrayBuilder ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(PrimitiveArraySerializer).nr = function (_this__u8e3s4, size) {
    return _this__u8e3s4.or(size);
  };
  protoOf(PrimitiveArraySerializer).dp = function (_this__u8e3s4, size) {
    return this.nr(_this__u8e3s4 instanceof PrimitiveArrayBuilder ? _this__u8e3s4 : THROW_CCE(), size);
  };
  protoOf(PrimitiveArraySerializer).pr = function (_this__u8e3s4) {
    var message = 'This method lead to boxing and must not be used, use writeContents instead';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  protoOf(PrimitiveArraySerializer).iq = function (_this__u8e3s4) {
    return this.pr((_this__u8e3s4 == null ? true : !(_this__u8e3s4 == null)) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(PrimitiveArraySerializer).qr = function (_this__u8e3s4, index, element) {
    var message = 'This method lead to boxing and must not be used, use Builder.append instead';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  protoOf(PrimitiveArraySerializer).fp = function (_this__u8e3s4, index, element) {
    var tmp = _this__u8e3s4 instanceof PrimitiveArrayBuilder ? _this__u8e3s4 : THROW_CCE();
    return this.qr(tmp, index, (element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(PrimitiveArraySerializer).vo = function () {
    return this.bp(this.rr());
  };
  protoOf(PrimitiveArraySerializer).ur = function (encoder, value) {
    var size = this.gq(value);
    // Inline function 'kotlinx.serialization.encoding.encodeCollection' call
    var descriptor = this.ir_1;
    var composite = encoder.rn(descriptor, size);
    // Inline function 'kotlinx.serialization.internal.PrimitiveArraySerializer.serialize.<anonymous>' call
    this.tr(composite, value, size);
    composite.xl(descriptor);
  };
  protoOf(PrimitiveArraySerializer).si = function (encoder, value) {
    return this.ur(encoder, (value == null ? true : !(value == null)) ? value : THROW_CCE());
  };
  protoOf(PrimitiveArraySerializer).kp = function (encoder, value) {
    return this.ur(encoder, (value == null ? true : !(value == null)) ? value : THROW_CCE());
  };
  protoOf(PrimitiveArraySerializer).ti = function (decoder) {
    return this.op(decoder, null);
  };
  function PrimitiveArrayBuilder() {
  }
  protoOf(PrimitiveArrayBuilder).vr = function (requiredCapacity, $super) {
    requiredCapacity = requiredCapacity === VOID ? this.kr() + 1 | 0 : requiredCapacity;
    var tmp;
    if ($super === VOID) {
      this.or(requiredCapacity);
      tmp = Unit_instance;
    } else {
      tmp = $super.or.call(this, requiredCapacity);
    }
    return tmp;
  };
  function Companion() {
    Companion_instance_0 = this;
    this.wr_1 = longArray(0);
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
    $this.as_1[slot] = $this.as_1[slot].w2((new Long(1, 0)).s2(offsetInSlot));
  }
  function nextUnmarkedHighIndex($this) {
    var inductionVariable = 0;
    var last = $this.as_1.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var slot = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var slotOffset = imul(slot + 1 | 0, 64);
        var slotMarks = $this.as_1[slot];
        while (!slotMarks.equals(new Long(-1, -1))) {
          var indexInSlot = countTrailingZeroBits(slotMarks.r2());
          slotMarks = slotMarks.w2((new Long(1, 0)).s2(indexInSlot));
          var index = slotOffset + indexInSlot | 0;
          if ($this.yr_1($this.xr_1, index)) {
            $this.as_1[slot] = slotMarks;
            return index;
          }
        }
        $this.as_1[slot] = slotMarks;
      }
       while (inductionVariable <= last);
    return -1;
  }
  function ElementMarker(descriptor, readIfAbsent) {
    Companion_getInstance_7();
    this.xr_1 = descriptor;
    this.yr_1 = readIfAbsent;
    var elementsCount = this.xr_1.gk();
    if (elementsCount <= 64) {
      var tmp = this;
      var tmp_0;
      if (elementsCount === 64) {
        tmp_0 = new Long(0, 0);
      } else {
        tmp_0 = (new Long(-1, -1)).s2(elementsCount);
      }
      tmp.zr_1 = tmp_0;
      this.as_1 = Companion_getInstance_7().wr_1;
    } else {
      this.zr_1 = new Long(0, 0);
      this.as_1 = prepareHighMarksArray(this, elementsCount);
    }
  }
  protoOf(ElementMarker).bs = function (index) {
    if (index < 64) {
      this.zr_1 = this.zr_1.w2((new Long(1, 0)).s2(index));
    } else {
      markHigh(this, index);
    }
  };
  protoOf(ElementMarker).cs = function () {
    var elementsCount = this.xr_1.gk();
    while (!this.zr_1.equals(new Long(-1, -1))) {
      var index = countTrailingZeroBits(this.zr_1.r2());
      this.zr_1 = this.zr_1.w2((new Long(1, 0)).s2(index));
      if (this.yr_1(this.xr_1, index)) {
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
    this.ps_1 = true;
  }
  protoOf(InlineClassDescriptor).fk = function () {
    return this.ps_1;
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
      if (!(this.sj() === other.sj())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      // Inline function 'kotlinx.serialization.internal.InlineClassDescriptor.equals.<anonymous>' call
      if (!(other.ps_1 && contentEquals(this.ct(), other.ct()))) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.gk() === other.gk())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var inductionVariable = 0;
      var last = this.gk();
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (!(this.lk(index).sj() === other.lk(index).sj())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
          if (!equals(this.lk(index).ek(), other.lk(index).ek())) {
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
    this.et_1 = $primitiveSerializer;
  }
  protoOf(InlinePrimitiveDescriptor$1).ft = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [this.et_1];
  };
  protoOf(InlinePrimitiveDescriptor$1).ri = function () {
    var message = 'unsupported';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  protoOf(InlinePrimitiveDescriptor$1).si = function (encoder, value) {
    // Inline function 'kotlin.error' call
    var message = 'unsupported';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  protoOf(InlinePrimitiveDescriptor$1).ti = function (decoder) {
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
    this.ht_1 = EmptySerializersModule_0();
  }
  protoOf(NoOpEncoder).lm = function () {
    return this.ht_1;
  };
  protoOf(NoOpEncoder).qm = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).rm = function () {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).sm = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).tm = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).um = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).vm = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).wm = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).xm = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).ym = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).zm = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).an = function (value) {
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
    this.it_1 = OBJECT_getInstance();
    this.jt_1 = 'kotlin.Nothing';
  }
  protoOf(NothingSerialDescriptor).ek = function () {
    return this.it_1;
  };
  protoOf(NothingSerialDescriptor).sj = function () {
    return this.jt_1;
  };
  protoOf(NothingSerialDescriptor).gk = function () {
    return 0;
  };
  protoOf(NothingSerialDescriptor).ik = function (index) {
    error(this);
  };
  protoOf(NothingSerialDescriptor).jk = function (name) {
    error(this);
  };
  protoOf(NothingSerialDescriptor).mk = function (index) {
    error(this);
  };
  protoOf(NothingSerialDescriptor).lk = function (index) {
    error(this);
  };
  protoOf(NothingSerialDescriptor).kk = function (index) {
    error(this);
  };
  protoOf(NothingSerialDescriptor).toString = function () {
    return 'NothingSerialDescriptor';
  };
  protoOf(NothingSerialDescriptor).equals = function (other) {
    return this === other;
  };
  protoOf(NothingSerialDescriptor).hashCode = function () {
    return getStringHashCode(this.jt_1) + imul(31, this.it_1.hashCode()) | 0;
  };
  var NothingSerialDescriptor_instance;
  function NothingSerialDescriptor_getInstance() {
    if (NothingSerialDescriptor_instance == null)
      new NothingSerialDescriptor();
    return NothingSerialDescriptor_instance;
  }
  function NullableSerializer(serializer) {
    this.kt_1 = serializer;
    this.lt_1 = new SerialDescriptorForNullable(this.kt_1.ri());
  }
  protoOf(NullableSerializer).ri = function () {
    return this.lt_1;
  };
  protoOf(NullableSerializer).mt = function (encoder, value) {
    if (!(value == null)) {
      encoder.qn();
      encoder.nn(this.kt_1, value);
    } else {
      encoder.rm();
    }
  };
  protoOf(NullableSerializer).si = function (encoder, value) {
    return this.mt(encoder, (value == null ? true : !(value == null)) ? value : THROW_CCE());
  };
  protoOf(NullableSerializer).ti = function (decoder) {
    return decoder.il() ? decoder.vl(this.kt_1) : decoder.jl();
  };
  protoOf(NullableSerializer).equals = function (other) {
    if (this === other)
      return true;
    if (other == null || !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!(other instanceof NullableSerializer))
      THROW_CCE();
    if (!equals(this.kt_1, other.kt_1))
      return false;
    return true;
  };
  protoOf(NullableSerializer).hashCode = function () {
    return hashCode(this.kt_1);
  };
  function SerialDescriptorForNullable(original) {
    this.nk_1 = original;
    this.ok_1 = this.nk_1.sj() + '?';
    this.pk_1 = cachedSerialNames(this.nk_1);
  }
  protoOf(SerialDescriptorForNullable).sj = function () {
    return this.ok_1;
  };
  protoOf(SerialDescriptorForNullable).gl = function () {
    return this.pk_1;
  };
  protoOf(SerialDescriptorForNullable).ak = function () {
    return true;
  };
  protoOf(SerialDescriptorForNullable).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SerialDescriptorForNullable))
      return false;
    if (!equals(this.nk_1, other.nk_1))
      return false;
    return true;
  };
  protoOf(SerialDescriptorForNullable).toString = function () {
    return toString(this.nk_1) + '?';
  };
  protoOf(SerialDescriptorForNullable).hashCode = function () {
    return imul(hashCode(this.nk_1), 31);
  };
  protoOf(SerialDescriptorForNullable).ek = function () {
    return this.nk_1.ek();
  };
  protoOf(SerialDescriptorForNullable).fk = function () {
    return this.nk_1.fk();
  };
  protoOf(SerialDescriptorForNullable).gk = function () {
    return this.nk_1.gk();
  };
  protoOf(SerialDescriptorForNullable).hk = function () {
    return this.nk_1.hk();
  };
  protoOf(SerialDescriptorForNullable).ik = function (index) {
    return this.nk_1.ik(index);
  };
  protoOf(SerialDescriptorForNullable).jk = function (name) {
    return this.nk_1.jk(name);
  };
  protoOf(SerialDescriptorForNullable).kk = function (index) {
    return this.nk_1.kk(index);
  };
  protoOf(SerialDescriptorForNullable).lk = function (index) {
    return this.nk_1.lk(index);
  };
  protoOf(SerialDescriptorForNullable).mk = function (index) {
    return this.nk_1.mk(index);
  };
  function ObjectSerializer$descriptor$delegate$lambda$lambda(this$0) {
    return function ($this$buildSerialDescriptor) {
      $this$buildSerialDescriptor.wi_1 = this$0.ot_1;
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
    this.nt_1 = objectInstance;
    this.ot_1 = emptyList();
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.pt_1 = lazy(tmp_0, ObjectSerializer$descriptor$delegate$lambda(serialName, this));
  }
  protoOf(ObjectSerializer).ri = function () {
    var tmp0 = this.pt_1;
    // Inline function 'kotlin.getValue' call
    descriptor$factory_1();
    return tmp0.r1();
  };
  protoOf(ObjectSerializer).hj = function (encoder, value) {
    encoder.wl(this.ri()).xl(this.ri());
  };
  protoOf(ObjectSerializer).si = function (encoder, value) {
    return this.hj(encoder, !(value == null) ? value : THROW_CCE());
  };
  protoOf(ObjectSerializer).ti = function (decoder) {
    // Inline function 'kotlinx.serialization.encoding.decodeStructure' call
    var descriptor = this.ri();
    var composite = decoder.wl(descriptor);
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlinx.serialization.internal.ObjectSerializer.deserialize.<anonymous>' call
      if (composite.mm()) {
        tmp$ret$0 = Unit_instance;
        break $l$block_0;
      }
      var index = composite.nm(this.ri());
      if (index === -1) {
        tmp$ret$0 = Unit_instance;
        break $l$block_0;
      } else
        throw SerializationException_init_$Create$_0('Unexpected index ' + index);
    }
    var result = tmp$ret$0;
    composite.xl(descriptor);
    return this.nt_1;
  };
  function descriptor$factory_1() {
    return getPropertyCallableRef('descriptor', 1, KProperty1, function (receiver) {
      return receiver.ri();
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
      return _this__u8e3s4.gl();
    var result = HashSet_init_$Create$_1(_this__u8e3s4.gk());
    var inductionVariable = 0;
    var last = _this__u8e3s4.gk();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.collections.plusAssign' call
        var element = _this__u8e3s4.ik(i);
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
    var tmp0 = _this__u8e3s4.he_1;
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.requireNotNull' call
      if (tmp0 == null) {
        // Inline function 'kotlinx.serialization.internal.typeOrThrow.<anonymous>' call
        var message = 'Star projections in type arguments are not allowed, but had ' + toString_0(_this__u8e3s4.he_1);
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
          var element = descriptor.ik(i);
          missingFields.d(element);
        }
        missingFieldsBits = missingFieldsBits >>> 1 | 0;
      }
       while (inductionVariable < 32);
    throw MissingFieldException_init_$Create$(missingFields, descriptor.sj());
  }
  function hashCodeImpl(_this__u8e3s4, typeParams) {
    var result = getStringHashCode(_this__u8e3s4.sj());
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
      var tmp0_safe_receiver = element.sj();
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
      var tmp0_safe_receiver_0 = element_0.ek();
      var tmp1_elvis_lhs_0 = tmp0_safe_receiver_0 == null ? null : hashCode(tmp0_safe_receiver_0);
      accumulator_0 = tmp_0 + (tmp1_elvis_lhs_0 == null ? 0 : tmp1_elvis_lhs_0) | 0;
    }
    var kindHash = accumulator_0;
    result = imul(31, result) + namesHash | 0;
    result = imul(31, result) + kindHash | 0;
    return result;
  }
  function _get_childSerializers__7vnyfa($this) {
    var tmp0 = $this.zs_1;
    // Inline function 'kotlin.getValue' call
    childSerializers$factory();
    return tmp0.r1();
  }
  function _get__hashCode__tgwhef_0($this) {
    var tmp0 = $this.bt_1;
    // Inline function 'kotlin.getValue' call
    _hashCode$factory_0();
    return tmp0.r1();
  }
  function buildIndices($this) {
    var indices = HashMap_init_$Create$();
    var inductionVariable = 0;
    var last = $this.us_1.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.collections.set' call
        var key = $this.us_1[i];
        indices.d2(key, i);
      }
       while (inductionVariable <= last);
    return indices;
  }
  function PluginGeneratedSerialDescriptor$childSerializers$delegate$lambda(this$0) {
    return function () {
      var tmp0_safe_receiver = this$0.rs_1;
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.ft();
      return tmp1_elvis_lhs == null ? get_EMPTY_SERIALIZER_ARRAY() : tmp1_elvis_lhs;
    };
  }
  function PluginGeneratedSerialDescriptor$typeParameterDescriptors$delegate$lambda(this$0) {
    return function () {
      var tmp0_safe_receiver = this$0.rs_1;
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.gt();
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
          var tmp$ret$0 = item.ri();
          destination.d(tmp$ret$0);
        }
        tmp = destination;
      }
      return compactArray(tmp);
    };
  }
  function PluginGeneratedSerialDescriptor$_hashCode$delegate$lambda(this$0) {
    return function () {
      return hashCodeImpl(this$0, this$0.ct());
    };
  }
  function PluginGeneratedSerialDescriptor$toString$lambda(this$0) {
    return function (i) {
      return this$0.ik(i) + ': ' + this$0.lk(i).sj();
    };
  }
  function PluginGeneratedSerialDescriptor(serialName, generatedSerializer, elementsCount) {
    generatedSerializer = generatedSerializer === VOID ? null : generatedSerializer;
    this.qs_1 = serialName;
    this.rs_1 = generatedSerializer;
    this.ss_1 = elementsCount;
    this.ts_1 = -1;
    var tmp = this;
    var tmp_0 = 0;
    var tmp_1 = this.ss_1;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_2 = fillArrayVal(Array(tmp_1), null);
    while (tmp_0 < tmp_1) {
      tmp_2[tmp_0] = '[UNINITIALIZED]';
      tmp_0 = tmp_0 + 1 | 0;
    }
    tmp.us_1 = tmp_2;
    var tmp_3 = this;
    // Inline function 'kotlin.arrayOfNulls' call
    var size = this.ss_1;
    tmp_3.vs_1 = fillArrayVal(Array(size), null);
    this.ws_1 = null;
    this.xs_1 = booleanArray(this.ss_1);
    this.ys_1 = emptyMap();
    var tmp_4 = this;
    var tmp_5 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp_4.zs_1 = lazy(tmp_5, PluginGeneratedSerialDescriptor$childSerializers$delegate$lambda(this));
    var tmp_6 = this;
    var tmp_7 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp_6.at_1 = lazy(tmp_7, PluginGeneratedSerialDescriptor$typeParameterDescriptors$delegate$lambda(this));
    var tmp_8 = this;
    var tmp_9 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp_8.bt_1 = lazy(tmp_9, PluginGeneratedSerialDescriptor$_hashCode$delegate$lambda(this));
  }
  protoOf(PluginGeneratedSerialDescriptor).sj = function () {
    return this.qs_1;
  };
  protoOf(PluginGeneratedSerialDescriptor).gk = function () {
    return this.ss_1;
  };
  protoOf(PluginGeneratedSerialDescriptor).ek = function () {
    return CLASS_getInstance();
  };
  protoOf(PluginGeneratedSerialDescriptor).hk = function () {
    var tmp0_elvis_lhs = this.ws_1;
    return tmp0_elvis_lhs == null ? emptyList() : tmp0_elvis_lhs;
  };
  protoOf(PluginGeneratedSerialDescriptor).gl = function () {
    return this.ys_1.v1();
  };
  protoOf(PluginGeneratedSerialDescriptor).ct = function () {
    var tmp0 = this.at_1;
    // Inline function 'kotlin.getValue' call
    typeParameterDescriptors$factory();
    return tmp0.r1();
  };
  protoOf(PluginGeneratedSerialDescriptor).dt = function (name, isOptional) {
    this.ts_1 = this.ts_1 + 1 | 0;
    this.us_1[this.ts_1] = name;
    this.xs_1[this.ts_1] = isOptional;
    this.vs_1[this.ts_1] = null;
    if (this.ts_1 === (this.ss_1 - 1 | 0)) {
      this.ys_1 = buildIndices(this);
    }
  };
  protoOf(PluginGeneratedSerialDescriptor).lk = function (index) {
    return getChecked(_get_childSerializers__7vnyfa(this), index).ri();
  };
  protoOf(PluginGeneratedSerialDescriptor).mk = function (index) {
    return getChecked_0(this.xs_1, index);
  };
  protoOf(PluginGeneratedSerialDescriptor).kk = function (index) {
    var tmp0_elvis_lhs = getChecked(this.vs_1, index);
    return tmp0_elvis_lhs == null ? emptyList() : tmp0_elvis_lhs;
  };
  protoOf(PluginGeneratedSerialDescriptor).ik = function (index) {
    return getChecked(this.us_1, index);
  };
  protoOf(PluginGeneratedSerialDescriptor).jk = function (name) {
    var tmp0_elvis_lhs = this.ys_1.u1(name);
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
      if (!(this.sj() === other.sj())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      // Inline function 'kotlinx.serialization.internal.PluginGeneratedSerialDescriptor.equals.<anonymous>' call
      if (!contentEquals(this.ct(), other.ct())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.gk() === other.gk())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var inductionVariable = 0;
      var last = this.gk();
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (!(this.lk(index).sj() === other.lk(index).sj())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
          if (!equals(this.lk(index).ek(), other.lk(index).ek())) {
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
    var tmp = until(0, this.ss_1);
    var tmp_0 = this.sj() + '(';
    return joinToString(tmp, ', ', tmp_0, ')', VOID, VOID, PluginGeneratedSerialDescriptor$toString$lambda(this));
  };
  function childSerializers$factory() {
    return getPropertyCallableRef('childSerializers', 1, KProperty1, function (receiver) {
      return _get_childSerializers__7vnyfa(receiver);
    }, null);
  }
  function typeParameterDescriptors$factory() {
    return getPropertyCallableRef('typeParameterDescriptors', 1, KProperty1, function (receiver) {
      return receiver.ct();
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
  protoOf(CharArraySerializer_0).tt = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(CharArraySerializer_0).gq = function (_this__u8e3s4) {
    return this.tt((!(_this__u8e3s4 == null) ? isCharArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(CharArraySerializer_0).ut = function (_this__u8e3s4) {
    return new CharArrayBuilder(_this__u8e3s4);
  };
  protoOf(CharArraySerializer_0).bp = function (_this__u8e3s4) {
    return this.ut((!(_this__u8e3s4 == null) ? isCharArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(CharArraySerializer_0).rr = function () {
    return charArray(0);
  };
  protoOf(CharArraySerializer_0).vt = function (decoder, index, builder, checkIndex) {
    builder.yt(decoder.fm(this.ir_1, index));
  };
  protoOf(CharArraySerializer_0).mp = function (decoder, index, builder, checkIndex) {
    return this.vt(decoder, index, builder instanceof CharArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(CharArraySerializer_0).sr = function (decoder, index, builder, checkIndex) {
    return this.vt(decoder, index, builder instanceof CharArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(CharArraySerializer_0).zt = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.jn(this.ir_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(CharArraySerializer_0).tr = function (encoder, content, size) {
    return this.zt(encoder, (!(content == null) ? isCharArray(content) : false) ? content : THROW_CCE(), size);
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
  protoOf(DoubleArraySerializer_0).cu = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(DoubleArraySerializer_0).gq = function (_this__u8e3s4) {
    return this.cu((!(_this__u8e3s4 == null) ? isDoubleArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(DoubleArraySerializer_0).du = function (_this__u8e3s4) {
    return new DoubleArrayBuilder(_this__u8e3s4);
  };
  protoOf(DoubleArraySerializer_0).bp = function (_this__u8e3s4) {
    return this.du((!(_this__u8e3s4 == null) ? isDoubleArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(DoubleArraySerializer_0).rr = function () {
    return new Float64Array(0);
  };
  protoOf(DoubleArraySerializer_0).eu = function (decoder, index, builder, checkIndex) {
    builder.hu(decoder.em(this.ir_1, index));
  };
  protoOf(DoubleArraySerializer_0).mp = function (decoder, index, builder, checkIndex) {
    return this.eu(decoder, index, builder instanceof DoubleArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(DoubleArraySerializer_0).sr = function (decoder, index, builder, checkIndex) {
    return this.eu(decoder, index, builder instanceof DoubleArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(DoubleArraySerializer_0).iu = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.in(this.ir_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(DoubleArraySerializer_0).tr = function (encoder, content, size) {
    return this.iu(encoder, (!(content == null) ? isDoubleArray(content) : false) ? content : THROW_CCE(), size);
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
  protoOf(FloatArraySerializer_0).lu = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(FloatArraySerializer_0).gq = function (_this__u8e3s4) {
    return this.lu((!(_this__u8e3s4 == null) ? isFloatArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(FloatArraySerializer_0).mu = function (_this__u8e3s4) {
    return new FloatArrayBuilder(_this__u8e3s4);
  };
  protoOf(FloatArraySerializer_0).bp = function (_this__u8e3s4) {
    return this.mu((!(_this__u8e3s4 == null) ? isFloatArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(FloatArraySerializer_0).rr = function () {
    return new Float32Array(0);
  };
  protoOf(FloatArraySerializer_0).nu = function (decoder, index, builder, checkIndex) {
    builder.qu(decoder.dm(this.ir_1, index));
  };
  protoOf(FloatArraySerializer_0).mp = function (decoder, index, builder, checkIndex) {
    return this.nu(decoder, index, builder instanceof FloatArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(FloatArraySerializer_0).sr = function (decoder, index, builder, checkIndex) {
    return this.nu(decoder, index, builder instanceof FloatArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(FloatArraySerializer_0).ru = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.hn(this.ir_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(FloatArraySerializer_0).tr = function (encoder, content, size) {
    return this.ru(encoder, (!(content == null) ? isFloatArray(content) : false) ? content : THROW_CCE(), size);
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
  protoOf(LongArraySerializer_0).uu = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(LongArraySerializer_0).gq = function (_this__u8e3s4) {
    return this.uu((!(_this__u8e3s4 == null) ? isLongArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LongArraySerializer_0).vu = function (_this__u8e3s4) {
    return new LongArrayBuilder(_this__u8e3s4);
  };
  protoOf(LongArraySerializer_0).bp = function (_this__u8e3s4) {
    return this.vu((!(_this__u8e3s4 == null) ? isLongArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LongArraySerializer_0).rr = function () {
    return longArray(0);
  };
  protoOf(LongArraySerializer_0).wu = function (decoder, index, builder, checkIndex) {
    builder.zu(decoder.cm(this.ir_1, index));
  };
  protoOf(LongArraySerializer_0).mp = function (decoder, index, builder, checkIndex) {
    return this.wu(decoder, index, builder instanceof LongArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(LongArraySerializer_0).sr = function (decoder, index, builder, checkIndex) {
    return this.wu(decoder, index, builder instanceof LongArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(LongArraySerializer_0).av = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.gn(this.ir_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(LongArraySerializer_0).tr = function (encoder, content, size) {
    return this.av(encoder, (!(content == null) ? isLongArray(content) : false) ? content : THROW_CCE(), size);
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
  protoOf(ULongArraySerializer_0).dv = function (_this__u8e3s4) {
    return _ULongArray___get_size__impl__ju6dtr(_this__u8e3s4);
  };
  protoOf(ULongArraySerializer_0).gq = function (_this__u8e3s4) {
    return this.dv(_this__u8e3s4 instanceof ULongArray ? _this__u8e3s4.gi_1 : THROW_CCE());
  };
  protoOf(ULongArraySerializer_0).ev = function (_this__u8e3s4) {
    return new ULongArrayBuilder(_this__u8e3s4);
  };
  protoOf(ULongArraySerializer_0).bp = function (_this__u8e3s4) {
    return this.ev(_this__u8e3s4 instanceof ULongArray ? _this__u8e3s4.gi_1 : THROW_CCE());
  };
  protoOf(ULongArraySerializer_0).fv = function () {
    return _ULongArray___init__impl__twm1l3(0);
  };
  protoOf(ULongArraySerializer_0).rr = function () {
    return new ULongArray(this.fv());
  };
  protoOf(ULongArraySerializer_0).gv = function (decoder, index, builder, checkIndex) {
    // Inline function 'kotlin.toULong' call
    var this_0 = decoder.hm(this.ir_1, index).ol();
    var tmp$ret$0 = _ULong___init__impl__c78o9k(this_0);
    builder.jv(tmp$ret$0);
  };
  protoOf(ULongArraySerializer_0).mp = function (decoder, index, builder, checkIndex) {
    return this.gv(decoder, index, builder instanceof ULongArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(ULongArraySerializer_0).sr = function (decoder, index, builder, checkIndex) {
    return this.gv(decoder, index, builder instanceof ULongArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(ULongArraySerializer_0).kv = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = encoder.ln(this.ir_1, i);
        // Inline function 'kotlin.ULong.toLong' call
        var this_0 = ULongArray__get_impl_pr71q9(content, i);
        var tmp$ret$0 = _ULong___get_data__impl__fggpzb(this_0);
        tmp.wm(tmp$ret$0);
      }
       while (inductionVariable < size);
  };
  protoOf(ULongArraySerializer_0).tr = function (encoder, content, size) {
    return this.kv(encoder, content instanceof ULongArray ? content.gi_1 : THROW_CCE(), size);
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
  protoOf(IntArraySerializer_0).nv = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(IntArraySerializer_0).gq = function (_this__u8e3s4) {
    return this.nv((!(_this__u8e3s4 == null) ? isIntArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(IntArraySerializer_0).ov = function (_this__u8e3s4) {
    return new IntArrayBuilder(_this__u8e3s4);
  };
  protoOf(IntArraySerializer_0).bp = function (_this__u8e3s4) {
    return this.ov((!(_this__u8e3s4 == null) ? isIntArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(IntArraySerializer_0).rr = function () {
    return new Int32Array(0);
  };
  protoOf(IntArraySerializer_0).pv = function (decoder, index, builder, checkIndex) {
    builder.sv(decoder.bm(this.ir_1, index));
  };
  protoOf(IntArraySerializer_0).mp = function (decoder, index, builder, checkIndex) {
    return this.pv(decoder, index, builder instanceof IntArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(IntArraySerializer_0).sr = function (decoder, index, builder, checkIndex) {
    return this.pv(decoder, index, builder instanceof IntArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(IntArraySerializer_0).tv = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.fn(this.ir_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(IntArraySerializer_0).tr = function (encoder, content, size) {
    return this.tv(encoder, (!(content == null) ? isIntArray(content) : false) ? content : THROW_CCE(), size);
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
  protoOf(UIntArraySerializer_0).wv = function (_this__u8e3s4) {
    return _UIntArray___get_size__impl__r6l8ci(_this__u8e3s4);
  };
  protoOf(UIntArraySerializer_0).gq = function (_this__u8e3s4) {
    return this.wv(_this__u8e3s4 instanceof UIntArray ? _this__u8e3s4.wh_1 : THROW_CCE());
  };
  protoOf(UIntArraySerializer_0).xv = function (_this__u8e3s4) {
    return new UIntArrayBuilder(_this__u8e3s4);
  };
  protoOf(UIntArraySerializer_0).bp = function (_this__u8e3s4) {
    return this.xv(_this__u8e3s4 instanceof UIntArray ? _this__u8e3s4.wh_1 : THROW_CCE());
  };
  protoOf(UIntArraySerializer_0).yv = function () {
    return _UIntArray___init__impl__ghjpc6(0);
  };
  protoOf(UIntArraySerializer_0).rr = function () {
    return new UIntArray(this.yv());
  };
  protoOf(UIntArraySerializer_0).zv = function (decoder, index, builder, checkIndex) {
    // Inline function 'kotlin.toUInt' call
    var this_0 = decoder.hm(this.ir_1, index).nl();
    var tmp$ret$0 = _UInt___init__impl__l7qpdl(this_0);
    builder.cw(tmp$ret$0);
  };
  protoOf(UIntArraySerializer_0).mp = function (decoder, index, builder, checkIndex) {
    return this.zv(decoder, index, builder instanceof UIntArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(UIntArraySerializer_0).sr = function (decoder, index, builder, checkIndex) {
    return this.zv(decoder, index, builder instanceof UIntArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(UIntArraySerializer_0).dw = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = encoder.ln(this.ir_1, i);
        // Inline function 'kotlin.UInt.toInt' call
        var this_0 = UIntArray__get_impl_gp5kza(content, i);
        var tmp$ret$0 = _UInt___get_data__impl__f0vqqw(this_0);
        tmp.vm(tmp$ret$0);
      }
       while (inductionVariable < size);
  };
  protoOf(UIntArraySerializer_0).tr = function (encoder, content, size) {
    return this.dw(encoder, content instanceof UIntArray ? content.wh_1 : THROW_CCE(), size);
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
  protoOf(ShortArraySerializer_0).gw = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(ShortArraySerializer_0).gq = function (_this__u8e3s4) {
    return this.gw((!(_this__u8e3s4 == null) ? isShortArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ShortArraySerializer_0).hw = function (_this__u8e3s4) {
    return new ShortArrayBuilder(_this__u8e3s4);
  };
  protoOf(ShortArraySerializer_0).bp = function (_this__u8e3s4) {
    return this.hw((!(_this__u8e3s4 == null) ? isShortArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ShortArraySerializer_0).rr = function () {
    return new Int16Array(0);
  };
  protoOf(ShortArraySerializer_0).iw = function (decoder, index, builder, checkIndex) {
    builder.lw(decoder.am(this.ir_1, index));
  };
  protoOf(ShortArraySerializer_0).mp = function (decoder, index, builder, checkIndex) {
    return this.iw(decoder, index, builder instanceof ShortArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(ShortArraySerializer_0).sr = function (decoder, index, builder, checkIndex) {
    return this.iw(decoder, index, builder instanceof ShortArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(ShortArraySerializer_0).mw = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.en(this.ir_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(ShortArraySerializer_0).tr = function (encoder, content, size) {
    return this.mw(encoder, (!(content == null) ? isShortArray(content) : false) ? content : THROW_CCE(), size);
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
  protoOf(UShortArraySerializer_0).pw = function (_this__u8e3s4) {
    return _UShortArray___get_size__impl__jqto1b(_this__u8e3s4);
  };
  protoOf(UShortArraySerializer_0).gq = function (_this__u8e3s4) {
    return this.pw(_this__u8e3s4 instanceof UShortArray ? _this__u8e3s4.qi_1 : THROW_CCE());
  };
  protoOf(UShortArraySerializer_0).qw = function (_this__u8e3s4) {
    return new UShortArrayBuilder(_this__u8e3s4);
  };
  protoOf(UShortArraySerializer_0).bp = function (_this__u8e3s4) {
    return this.qw(_this__u8e3s4 instanceof UShortArray ? _this__u8e3s4.qi_1 : THROW_CCE());
  };
  protoOf(UShortArraySerializer_0).rw = function () {
    return _UShortArray___init__impl__9b26ef(0);
  };
  protoOf(UShortArraySerializer_0).rr = function () {
    return new UShortArray(this.rw());
  };
  protoOf(UShortArraySerializer_0).sw = function (decoder, index, builder, checkIndex) {
    // Inline function 'kotlin.toUShort' call
    var this_0 = decoder.hm(this.ir_1, index).ml();
    var tmp$ret$0 = _UShort___init__impl__jigrne(this_0);
    builder.vw(tmp$ret$0);
  };
  protoOf(UShortArraySerializer_0).mp = function (decoder, index, builder, checkIndex) {
    return this.sw(decoder, index, builder instanceof UShortArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(UShortArraySerializer_0).sr = function (decoder, index, builder, checkIndex) {
    return this.sw(decoder, index, builder instanceof UShortArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(UShortArraySerializer_0).ww = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = encoder.ln(this.ir_1, i);
        // Inline function 'kotlin.UShort.toShort' call
        var this_0 = UShortArray__get_impl_fnbhmx(content, i);
        var tmp$ret$0 = _UShort___get_data__impl__g0245(this_0);
        tmp.um(tmp$ret$0);
      }
       while (inductionVariable < size);
  };
  protoOf(UShortArraySerializer_0).tr = function (encoder, content, size) {
    return this.ww(encoder, content instanceof UShortArray ? content.qi_1 : THROW_CCE(), size);
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
  protoOf(ByteArraySerializer_0).zw = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(ByteArraySerializer_0).gq = function (_this__u8e3s4) {
    return this.zw((!(_this__u8e3s4 == null) ? isByteArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ByteArraySerializer_0).ax = function (_this__u8e3s4) {
    return new ByteArrayBuilder(_this__u8e3s4);
  };
  protoOf(ByteArraySerializer_0).bp = function (_this__u8e3s4) {
    return this.ax((!(_this__u8e3s4 == null) ? isByteArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ByteArraySerializer_0).rr = function () {
    return new Int8Array(0);
  };
  protoOf(ByteArraySerializer_0).bx = function (decoder, index, builder, checkIndex) {
    builder.ex(decoder.zl(this.ir_1, index));
  };
  protoOf(ByteArraySerializer_0).mp = function (decoder, index, builder, checkIndex) {
    return this.bx(decoder, index, builder instanceof ByteArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(ByteArraySerializer_0).sr = function (decoder, index, builder, checkIndex) {
    return this.bx(decoder, index, builder instanceof ByteArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(ByteArraySerializer_0).fx = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.dn(this.ir_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(ByteArraySerializer_0).tr = function (encoder, content, size) {
    return this.fx(encoder, (!(content == null) ? isByteArray(content) : false) ? content : THROW_CCE(), size);
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
  protoOf(UByteArraySerializer_0).ix = function (_this__u8e3s4) {
    return _UByteArray___get_size__impl__h6pkdv(_this__u8e3s4);
  };
  protoOf(UByteArraySerializer_0).gq = function (_this__u8e3s4) {
    return this.ix(_this__u8e3s4 instanceof UByteArray ? _this__u8e3s4.mh_1 : THROW_CCE());
  };
  protoOf(UByteArraySerializer_0).jx = function (_this__u8e3s4) {
    return new UByteArrayBuilder(_this__u8e3s4);
  };
  protoOf(UByteArraySerializer_0).bp = function (_this__u8e3s4) {
    return this.jx(_this__u8e3s4 instanceof UByteArray ? _this__u8e3s4.mh_1 : THROW_CCE());
  };
  protoOf(UByteArraySerializer_0).kx = function () {
    return _UByteArray___init__impl__ip4y9n(0);
  };
  protoOf(UByteArraySerializer_0).rr = function () {
    return new UByteArray(this.kx());
  };
  protoOf(UByteArraySerializer_0).lx = function (decoder, index, builder, checkIndex) {
    // Inline function 'kotlin.toUByte' call
    var this_0 = decoder.hm(this.ir_1, index).ll();
    var tmp$ret$0 = _UByte___init__impl__g9hnc4(this_0);
    builder.ox(tmp$ret$0);
  };
  protoOf(UByteArraySerializer_0).mp = function (decoder, index, builder, checkIndex) {
    return this.lx(decoder, index, builder instanceof UByteArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(UByteArraySerializer_0).sr = function (decoder, index, builder, checkIndex) {
    return this.lx(decoder, index, builder instanceof UByteArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(UByteArraySerializer_0).px = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = encoder.ln(this.ir_1, i);
        // Inline function 'kotlin.UByte.toByte' call
        var this_0 = UByteArray__get_impl_t5f3hv(content, i);
        var tmp$ret$0 = _UByte___get_data__impl__jof9qr(this_0);
        tmp.tm(tmp$ret$0);
      }
       while (inductionVariable < size);
  };
  protoOf(UByteArraySerializer_0).tr = function (encoder, content, size) {
    return this.px(encoder, content instanceof UByteArray ? content.mh_1 : THROW_CCE(), size);
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
  protoOf(BooleanArraySerializer_0).sx = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(BooleanArraySerializer_0).gq = function (_this__u8e3s4) {
    return this.sx((!(_this__u8e3s4 == null) ? isBooleanArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(BooleanArraySerializer_0).tx = function (_this__u8e3s4) {
    return new BooleanArrayBuilder(_this__u8e3s4);
  };
  protoOf(BooleanArraySerializer_0).bp = function (_this__u8e3s4) {
    return this.tx((!(_this__u8e3s4 == null) ? isBooleanArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(BooleanArraySerializer_0).rr = function () {
    return booleanArray(0);
  };
  protoOf(BooleanArraySerializer_0).ux = function (decoder, index, builder, checkIndex) {
    builder.xx(decoder.yl(this.ir_1, index));
  };
  protoOf(BooleanArraySerializer_0).mp = function (decoder, index, builder, checkIndex) {
    return this.ux(decoder, index, builder instanceof BooleanArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(BooleanArraySerializer_0).sr = function (decoder, index, builder, checkIndex) {
    return this.ux(decoder, index, builder instanceof BooleanArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(BooleanArraySerializer_0).yx = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.cn(this.ir_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(BooleanArraySerializer_0).tr = function (encoder, content, size) {
    return this.yx(encoder, (!(content == null) ? isBooleanArray(content) : false) ? content : THROW_CCE(), size);
  };
  var BooleanArraySerializer_instance;
  function BooleanArraySerializer_getInstance() {
    if (BooleanArraySerializer_instance == null)
      new BooleanArraySerializer_0();
    return BooleanArraySerializer_instance;
  }
  function CharArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.wt_1 = bufferWithData;
    this.xt_1 = bufferWithData.length;
    this.or(10);
  }
  protoOf(CharArrayBuilder).kr = function () {
    return this.xt_1;
  };
  protoOf(CharArrayBuilder).or = function (requiredCapacity) {
    if (this.wt_1.length < requiredCapacity)
      this.wt_1 = copyOf(this.wt_1, coerceAtLeast(requiredCapacity, imul(this.wt_1.length, 2)));
  };
  protoOf(CharArrayBuilder).yt = function (c) {
    this.vr();
    var tmp = this.wt_1;
    var _unary__edvuaz = this.xt_1;
    this.xt_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(CharArrayBuilder).mr = function () {
    return copyOf(this.wt_1, this.xt_1);
  };
  function DoubleArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.fu_1 = bufferWithData;
    this.gu_1 = bufferWithData.length;
    this.or(10);
  }
  protoOf(DoubleArrayBuilder).kr = function () {
    return this.gu_1;
  };
  protoOf(DoubleArrayBuilder).or = function (requiredCapacity) {
    if (this.fu_1.length < requiredCapacity)
      this.fu_1 = copyOf_0(this.fu_1, coerceAtLeast(requiredCapacity, imul(this.fu_1.length, 2)));
  };
  protoOf(DoubleArrayBuilder).hu = function (c) {
    this.vr();
    var tmp = this.fu_1;
    var _unary__edvuaz = this.gu_1;
    this.gu_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(DoubleArrayBuilder).mr = function () {
    return copyOf_0(this.fu_1, this.gu_1);
  };
  function FloatArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.ou_1 = bufferWithData;
    this.pu_1 = bufferWithData.length;
    this.or(10);
  }
  protoOf(FloatArrayBuilder).kr = function () {
    return this.pu_1;
  };
  protoOf(FloatArrayBuilder).or = function (requiredCapacity) {
    if (this.ou_1.length < requiredCapacity)
      this.ou_1 = copyOf_1(this.ou_1, coerceAtLeast(requiredCapacity, imul(this.ou_1.length, 2)));
  };
  protoOf(FloatArrayBuilder).qu = function (c) {
    this.vr();
    var tmp = this.ou_1;
    var _unary__edvuaz = this.pu_1;
    this.pu_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(FloatArrayBuilder).mr = function () {
    return copyOf_1(this.ou_1, this.pu_1);
  };
  function LongArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.xu_1 = bufferWithData;
    this.yu_1 = bufferWithData.length;
    this.or(10);
  }
  protoOf(LongArrayBuilder).kr = function () {
    return this.yu_1;
  };
  protoOf(LongArrayBuilder).or = function (requiredCapacity) {
    if (this.xu_1.length < requiredCapacity)
      this.xu_1 = copyOf_2(this.xu_1, coerceAtLeast(requiredCapacity, imul(this.xu_1.length, 2)));
  };
  protoOf(LongArrayBuilder).zu = function (c) {
    this.vr();
    var tmp = this.xu_1;
    var _unary__edvuaz = this.yu_1;
    this.yu_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(LongArrayBuilder).mr = function () {
    return copyOf_2(this.xu_1, this.yu_1);
  };
  function ULongArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.hv_1 = bufferWithData;
    this.iv_1 = _ULongArray___get_size__impl__ju6dtr(bufferWithData);
    this.or(10);
  }
  protoOf(ULongArrayBuilder).kr = function () {
    return this.iv_1;
  };
  protoOf(ULongArrayBuilder).or = function (requiredCapacity) {
    if (_ULongArray___get_size__impl__ju6dtr(this.hv_1) < requiredCapacity) {
      var tmp = this;
      var tmp0 = this.hv_1;
      // Inline function 'kotlin.collections.copyOf' call
      var newSize = coerceAtLeast(requiredCapacity, imul(_ULongArray___get_size__impl__ju6dtr(this.hv_1), 2));
      tmp.hv_1 = _ULongArray___init__impl__twm1l3_0(copyOf_2(_ULongArray___get_storage__impl__28e64j(tmp0), newSize));
    }
  };
  protoOf(ULongArrayBuilder).jv = function (c) {
    this.vr();
    var tmp = this.hv_1;
    var _unary__edvuaz = this.iv_1;
    this.iv_1 = _unary__edvuaz + 1 | 0;
    ULongArray__set_impl_z19mvh(tmp, _unary__edvuaz, c);
  };
  protoOf(ULongArrayBuilder).zx = function () {
    var tmp0 = this.hv_1;
    // Inline function 'kotlin.collections.copyOf' call
    var newSize = this.iv_1;
    return _ULongArray___init__impl__twm1l3_0(copyOf_2(_ULongArray___get_storage__impl__28e64j(tmp0), newSize));
  };
  protoOf(ULongArrayBuilder).mr = function () {
    return new ULongArray(this.zx());
  };
  function IntArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.qv_1 = bufferWithData;
    this.rv_1 = bufferWithData.length;
    this.or(10);
  }
  protoOf(IntArrayBuilder).kr = function () {
    return this.rv_1;
  };
  protoOf(IntArrayBuilder).or = function (requiredCapacity) {
    if (this.qv_1.length < requiredCapacity)
      this.qv_1 = copyOf_3(this.qv_1, coerceAtLeast(requiredCapacity, imul(this.qv_1.length, 2)));
  };
  protoOf(IntArrayBuilder).sv = function (c) {
    this.vr();
    var tmp = this.qv_1;
    var _unary__edvuaz = this.rv_1;
    this.rv_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(IntArrayBuilder).mr = function () {
    return copyOf_3(this.qv_1, this.rv_1);
  };
  function UIntArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.aw_1 = bufferWithData;
    this.bw_1 = _UIntArray___get_size__impl__r6l8ci(bufferWithData);
    this.or(10);
  }
  protoOf(UIntArrayBuilder).kr = function () {
    return this.bw_1;
  };
  protoOf(UIntArrayBuilder).or = function (requiredCapacity) {
    if (_UIntArray___get_size__impl__r6l8ci(this.aw_1) < requiredCapacity) {
      var tmp = this;
      var tmp0 = this.aw_1;
      // Inline function 'kotlin.collections.copyOf' call
      var newSize = coerceAtLeast(requiredCapacity, imul(_UIntArray___get_size__impl__r6l8ci(this.aw_1), 2));
      tmp.aw_1 = _UIntArray___init__impl__ghjpc6_0(copyOf_3(_UIntArray___get_storage__impl__92a0v0(tmp0), newSize));
    }
  };
  protoOf(UIntArrayBuilder).cw = function (c) {
    this.vr();
    var tmp = this.aw_1;
    var _unary__edvuaz = this.bw_1;
    this.bw_1 = _unary__edvuaz + 1 | 0;
    UIntArray__set_impl_7f2zu2(tmp, _unary__edvuaz, c);
  };
  protoOf(UIntArrayBuilder).ay = function () {
    var tmp0 = this.aw_1;
    // Inline function 'kotlin.collections.copyOf' call
    var newSize = this.bw_1;
    return _UIntArray___init__impl__ghjpc6_0(copyOf_3(_UIntArray___get_storage__impl__92a0v0(tmp0), newSize));
  };
  protoOf(UIntArrayBuilder).mr = function () {
    return new UIntArray(this.ay());
  };
  function ShortArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.jw_1 = bufferWithData;
    this.kw_1 = bufferWithData.length;
    this.or(10);
  }
  protoOf(ShortArrayBuilder).kr = function () {
    return this.kw_1;
  };
  protoOf(ShortArrayBuilder).or = function (requiredCapacity) {
    if (this.jw_1.length < requiredCapacity)
      this.jw_1 = copyOf_4(this.jw_1, coerceAtLeast(requiredCapacity, imul(this.jw_1.length, 2)));
  };
  protoOf(ShortArrayBuilder).lw = function (c) {
    this.vr();
    var tmp = this.jw_1;
    var _unary__edvuaz = this.kw_1;
    this.kw_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(ShortArrayBuilder).mr = function () {
    return copyOf_4(this.jw_1, this.kw_1);
  };
  function UShortArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.tw_1 = bufferWithData;
    this.uw_1 = _UShortArray___get_size__impl__jqto1b(bufferWithData);
    this.or(10);
  }
  protoOf(UShortArrayBuilder).kr = function () {
    return this.uw_1;
  };
  protoOf(UShortArrayBuilder).or = function (requiredCapacity) {
    if (_UShortArray___get_size__impl__jqto1b(this.tw_1) < requiredCapacity) {
      var tmp = this;
      var tmp0 = this.tw_1;
      // Inline function 'kotlin.collections.copyOf' call
      var newSize = coerceAtLeast(requiredCapacity, imul(_UShortArray___get_size__impl__jqto1b(this.tw_1), 2));
      tmp.tw_1 = _UShortArray___init__impl__9b26ef_0(copyOf_4(_UShortArray___get_storage__impl__t2jpv5(tmp0), newSize));
    }
  };
  protoOf(UShortArrayBuilder).vw = function (c) {
    this.vr();
    var tmp = this.tw_1;
    var _unary__edvuaz = this.uw_1;
    this.uw_1 = _unary__edvuaz + 1 | 0;
    UShortArray__set_impl_6d8whp(tmp, _unary__edvuaz, c);
  };
  protoOf(UShortArrayBuilder).by = function () {
    var tmp0 = this.tw_1;
    // Inline function 'kotlin.collections.copyOf' call
    var newSize = this.uw_1;
    return _UShortArray___init__impl__9b26ef_0(copyOf_4(_UShortArray___get_storage__impl__t2jpv5(tmp0), newSize));
  };
  protoOf(UShortArrayBuilder).mr = function () {
    return new UShortArray(this.by());
  };
  function ByteArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.cx_1 = bufferWithData;
    this.dx_1 = bufferWithData.length;
    this.or(10);
  }
  protoOf(ByteArrayBuilder).kr = function () {
    return this.dx_1;
  };
  protoOf(ByteArrayBuilder).or = function (requiredCapacity) {
    if (this.cx_1.length < requiredCapacity)
      this.cx_1 = copyOf_5(this.cx_1, coerceAtLeast(requiredCapacity, imul(this.cx_1.length, 2)));
  };
  protoOf(ByteArrayBuilder).ex = function (c) {
    this.vr();
    var tmp = this.cx_1;
    var _unary__edvuaz = this.dx_1;
    this.dx_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(ByteArrayBuilder).mr = function () {
    return copyOf_5(this.cx_1, this.dx_1);
  };
  function UByteArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.mx_1 = bufferWithData;
    this.nx_1 = _UByteArray___get_size__impl__h6pkdv(bufferWithData);
    this.or(10);
  }
  protoOf(UByteArrayBuilder).kr = function () {
    return this.nx_1;
  };
  protoOf(UByteArrayBuilder).or = function (requiredCapacity) {
    if (_UByteArray___get_size__impl__h6pkdv(this.mx_1) < requiredCapacity) {
      var tmp = this;
      var tmp0 = this.mx_1;
      // Inline function 'kotlin.collections.copyOf' call
      var newSize = coerceAtLeast(requiredCapacity, imul(_UByteArray___get_size__impl__h6pkdv(this.mx_1), 2));
      tmp.mx_1 = _UByteArray___init__impl__ip4y9n_0(copyOf_5(_UByteArray___get_storage__impl__d4kctt(tmp0), newSize));
    }
  };
  protoOf(UByteArrayBuilder).ox = function (c) {
    this.vr();
    var tmp = this.mx_1;
    var _unary__edvuaz = this.nx_1;
    this.nx_1 = _unary__edvuaz + 1 | 0;
    UByteArray__set_impl_jvcicn(tmp, _unary__edvuaz, c);
  };
  protoOf(UByteArrayBuilder).cy = function () {
    var tmp0 = this.mx_1;
    // Inline function 'kotlin.collections.copyOf' call
    var newSize = this.nx_1;
    return _UByteArray___init__impl__ip4y9n_0(copyOf_5(_UByteArray___get_storage__impl__d4kctt(tmp0), newSize));
  };
  protoOf(UByteArrayBuilder).mr = function () {
    return new UByteArray(this.cy());
  };
  function BooleanArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.vx_1 = bufferWithData;
    this.wx_1 = bufferWithData.length;
    this.or(10);
  }
  protoOf(BooleanArrayBuilder).kr = function () {
    return this.wx_1;
  };
  protoOf(BooleanArrayBuilder).or = function (requiredCapacity) {
    if (this.vx_1.length < requiredCapacity)
      this.vx_1 = copyOf_6(this.vx_1, coerceAtLeast(requiredCapacity, imul(this.vx_1.length, 2)));
  };
  protoOf(BooleanArrayBuilder).xx = function (c) {
    this.vr();
    var tmp = this.vx_1;
    var _unary__edvuaz = this.wx_1;
    this.wx_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(BooleanArrayBuilder).mr = function () {
    return copyOf_6(this.vx_1, this.wx_1);
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
    this.dy_1 = new PrimitiveSerialDescriptor_0('kotlin.String', STRING_getInstance());
  }
  protoOf(StringSerializer).ri = function () {
    return this.dy_1;
  };
  protoOf(StringSerializer).ey = function (encoder, value) {
    return encoder.an(value);
  };
  protoOf(StringSerializer).si = function (encoder, value) {
    return this.ey(encoder, (!(value == null) ? typeof value === 'string' : false) ? value : THROW_CCE());
  };
  protoOf(StringSerializer).ti = function (decoder) {
    return decoder.sl();
  };
  var StringSerializer_instance;
  function StringSerializer_getInstance() {
    if (StringSerializer_instance == null)
      new StringSerializer();
    return StringSerializer_instance;
  }
  function CharSerializer() {
    CharSerializer_instance = this;
    this.fy_1 = new PrimitiveSerialDescriptor_0('kotlin.Char', CHAR_getInstance());
  }
  protoOf(CharSerializer).ri = function () {
    return this.fy_1;
  };
  protoOf(CharSerializer).gy = function (encoder, value) {
    return encoder.zm(value);
  };
  protoOf(CharSerializer).si = function (encoder, value) {
    return this.gy(encoder, value instanceof Char ? value.a1_1 : THROW_CCE());
  };
  protoOf(CharSerializer).hy = function (decoder) {
    return decoder.rl();
  };
  protoOf(CharSerializer).ti = function (decoder) {
    return new Char(this.hy(decoder));
  };
  var CharSerializer_instance;
  function CharSerializer_getInstance() {
    if (CharSerializer_instance == null)
      new CharSerializer();
    return CharSerializer_instance;
  }
  function DoubleSerializer() {
    DoubleSerializer_instance = this;
    this.iy_1 = new PrimitiveSerialDescriptor_0('kotlin.Double', DOUBLE_getInstance());
  }
  protoOf(DoubleSerializer).ri = function () {
    return this.iy_1;
  };
  protoOf(DoubleSerializer).jy = function (encoder, value) {
    return encoder.ym(value);
  };
  protoOf(DoubleSerializer).si = function (encoder, value) {
    return this.jy(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  protoOf(DoubleSerializer).ti = function (decoder) {
    return decoder.ql();
  };
  var DoubleSerializer_instance;
  function DoubleSerializer_getInstance() {
    if (DoubleSerializer_instance == null)
      new DoubleSerializer();
    return DoubleSerializer_instance;
  }
  function FloatSerializer() {
    FloatSerializer_instance = this;
    this.ky_1 = new PrimitiveSerialDescriptor_0('kotlin.Float', FLOAT_getInstance());
  }
  protoOf(FloatSerializer).ri = function () {
    return this.ky_1;
  };
  protoOf(FloatSerializer).ly = function (encoder, value) {
    return encoder.xm(value);
  };
  protoOf(FloatSerializer).si = function (encoder, value) {
    return this.ly(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  protoOf(FloatSerializer).ti = function (decoder) {
    return decoder.pl();
  };
  var FloatSerializer_instance;
  function FloatSerializer_getInstance() {
    if (FloatSerializer_instance == null)
      new FloatSerializer();
    return FloatSerializer_instance;
  }
  function LongSerializer() {
    LongSerializer_instance = this;
    this.my_1 = new PrimitiveSerialDescriptor_0('kotlin.Long', LONG_getInstance());
  }
  protoOf(LongSerializer).ri = function () {
    return this.my_1;
  };
  protoOf(LongSerializer).ny = function (encoder, value) {
    return encoder.wm(value);
  };
  protoOf(LongSerializer).si = function (encoder, value) {
    return this.ny(encoder, value instanceof Long ? value : THROW_CCE());
  };
  protoOf(LongSerializer).ti = function (decoder) {
    return decoder.ol();
  };
  var LongSerializer_instance;
  function LongSerializer_getInstance() {
    if (LongSerializer_instance == null)
      new LongSerializer();
    return LongSerializer_instance;
  }
  function IntSerializer() {
    IntSerializer_instance = this;
    this.oy_1 = new PrimitiveSerialDescriptor_0('kotlin.Int', INT_getInstance());
  }
  protoOf(IntSerializer).ri = function () {
    return this.oy_1;
  };
  protoOf(IntSerializer).py = function (encoder, value) {
    return encoder.vm(value);
  };
  protoOf(IntSerializer).si = function (encoder, value) {
    return this.py(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  protoOf(IntSerializer).ti = function (decoder) {
    return decoder.nl();
  };
  var IntSerializer_instance;
  function IntSerializer_getInstance() {
    if (IntSerializer_instance == null)
      new IntSerializer();
    return IntSerializer_instance;
  }
  function ShortSerializer() {
    ShortSerializer_instance = this;
    this.qy_1 = new PrimitiveSerialDescriptor_0('kotlin.Short', SHORT_getInstance());
  }
  protoOf(ShortSerializer).ri = function () {
    return this.qy_1;
  };
  protoOf(ShortSerializer).ry = function (encoder, value) {
    return encoder.um(value);
  };
  protoOf(ShortSerializer).si = function (encoder, value) {
    return this.ry(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  protoOf(ShortSerializer).ti = function (decoder) {
    return decoder.ml();
  };
  var ShortSerializer_instance;
  function ShortSerializer_getInstance() {
    if (ShortSerializer_instance == null)
      new ShortSerializer();
    return ShortSerializer_instance;
  }
  function ByteSerializer() {
    ByteSerializer_instance = this;
    this.sy_1 = new PrimitiveSerialDescriptor_0('kotlin.Byte', BYTE_getInstance());
  }
  protoOf(ByteSerializer).ri = function () {
    return this.sy_1;
  };
  protoOf(ByteSerializer).ty = function (encoder, value) {
    return encoder.tm(value);
  };
  protoOf(ByteSerializer).si = function (encoder, value) {
    return this.ty(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  protoOf(ByteSerializer).ti = function (decoder) {
    return decoder.ll();
  };
  var ByteSerializer_instance;
  function ByteSerializer_getInstance() {
    if (ByteSerializer_instance == null)
      new ByteSerializer();
    return ByteSerializer_instance;
  }
  function BooleanSerializer() {
    BooleanSerializer_instance = this;
    this.uy_1 = new PrimitiveSerialDescriptor_0('kotlin.Boolean', BOOLEAN_getInstance());
  }
  protoOf(BooleanSerializer).ri = function () {
    return this.uy_1;
  };
  protoOf(BooleanSerializer).vy = function (encoder, value) {
    return encoder.sm(value);
  };
  protoOf(BooleanSerializer).si = function (encoder, value) {
    return this.vy(encoder, (!(value == null) ? typeof value === 'boolean' : false) ? value : THROW_CCE());
  };
  protoOf(BooleanSerializer).ti = function (decoder) {
    return decoder.kl();
  };
  var BooleanSerializer_instance;
  function BooleanSerializer_getInstance() {
    if (BooleanSerializer_instance == null)
      new BooleanSerializer();
    return BooleanSerializer_instance;
  }
  function UnitSerializer() {
    UnitSerializer_instance = this;
    this.wy_1 = new ObjectSerializer('kotlin.Unit', Unit_instance);
  }
  protoOf(UnitSerializer).ri = function () {
    return this.wy_1.ri();
  };
  protoOf(UnitSerializer).xy = function (encoder, value) {
    this.wy_1.hj(encoder, Unit_instance);
  };
  protoOf(UnitSerializer).si = function (encoder, value) {
    return this.xy(encoder, value instanceof Unit ? value : THROW_CCE());
  };
  protoOf(UnitSerializer).yy = function (decoder) {
    this.wy_1.ti(decoder);
  };
  protoOf(UnitSerializer).ti = function (decoder) {
    this.yy(decoder);
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
    this.zy_1 = serialName;
    this.az_1 = kind;
  }
  protoOf(PrimitiveSerialDescriptor_0).sj = function () {
    return this.zy_1;
  };
  protoOf(PrimitiveSerialDescriptor_0).ek = function () {
    return this.az_1;
  };
  protoOf(PrimitiveSerialDescriptor_0).gk = function () {
    return 0;
  };
  protoOf(PrimitiveSerialDescriptor_0).ik = function (index) {
    error_0(this);
  };
  protoOf(PrimitiveSerialDescriptor_0).jk = function (name) {
    error_0(this);
  };
  protoOf(PrimitiveSerialDescriptor_0).mk = function (index) {
    error_0(this);
  };
  protoOf(PrimitiveSerialDescriptor_0).lk = function (index) {
    error_0(this);
  };
  protoOf(PrimitiveSerialDescriptor_0).kk = function (index) {
    error_0(this);
  };
  protoOf(PrimitiveSerialDescriptor_0).toString = function () {
    return 'PrimitiveDescriptor(' + this.zy_1 + ')';
  };
  protoOf(PrimitiveSerialDescriptor_0).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof PrimitiveSerialDescriptor_0))
      return false;
    if (this.zy_1 === other.zy_1 && equals(this.az_1, other.az_1))
      return true;
    return false;
  };
  protoOf(PrimitiveSerialDescriptor_0).hashCode = function () {
    return getStringHashCode(this.zy_1) + imul(31, this.az_1.hashCode()) | 0;
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
      var primitiveName = primitive.ri().sj();
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
  protoOf(NamedValueDecoder).dz = function (_this__u8e3s4, index) {
    return this.fz(this.ez(_this__u8e3s4, index));
  };
  protoOf(NamedValueDecoder).fz = function (nestedName) {
    var tmp0_elvis_lhs = this.iz();
    return this.jz(tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs, nestedName);
  };
  protoOf(NamedValueDecoder).ez = function (descriptor, index) {
    return descriptor.ik(index);
  };
  protoOf(NamedValueDecoder).jz = function (parentName, childName) {
    var tmp;
    // Inline function 'kotlin.text.isEmpty' call
    if (charSequenceLength(parentName) === 0) {
      tmp = childName;
    } else {
      tmp = parentName + '.' + childName;
    }
    return tmp;
  };
  protoOf(NamedValueDecoder).kz = function () {
    return this.gz_1.m() ? '$' : joinToString(this.gz_1, '.', '$.');
  };
  function tagBlock($this, tag, block) {
    $this.xz(tag);
    var r = block();
    if (!$this.hz_1) {
      $this.yz();
    }
    $this.hz_1 = false;
    return r;
  }
  function TaggedDecoder$decodeSerializableElement$lambda(this$0, $deserializer, $previousValue) {
    return function () {
      return this$0.ul($deserializer, $previousValue);
    };
  }
  function TaggedDecoder$decodeNullableSerializableElement$lambda(this$0, $deserializer, $previousValue) {
    return function () {
      var tmp0 = this$0;
      // Inline function 'kotlinx.serialization.encoding.decodeIfNullable' call
      var isNullabilitySupported = $deserializer.ri().ak();
      var tmp;
      if (isNullabilitySupported || tmp0.il()) {
        // Inline function 'kotlinx.serialization.internal.TaggedDecoder.decodeNullableSerializableElement.<anonymous>.<anonymous>' call
        tmp = this$0.ul($deserializer, $previousValue);
      } else {
        tmp = tmp0.jl();
      }
      return tmp;
    };
  }
  function TaggedDecoder() {
    var tmp = this;
    // Inline function 'kotlin.collections.arrayListOf' call
    tmp.gz_1 = ArrayList_init_$Create$_0();
    this.hz_1 = false;
  }
  protoOf(TaggedDecoder).lm = function () {
    return EmptySerializersModule_0();
  };
  protoOf(TaggedDecoder).lz = function (tag) {
    throw SerializationException_init_$Create$_0(toString(getKClassFromExpression(this)) + " can't retrieve untyped values");
  };
  protoOf(TaggedDecoder).mz = function (tag) {
    return true;
  };
  protoOf(TaggedDecoder).nz = function (tag) {
    var tmp = this.lz(tag);
    return typeof tmp === 'boolean' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).oz = function (tag) {
    var tmp = this.lz(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).pz = function (tag) {
    var tmp = this.lz(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).qz = function (tag) {
    var tmp = this.lz(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).rz = function (tag) {
    var tmp = this.lz(tag);
    return tmp instanceof Long ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).sz = function (tag) {
    var tmp = this.lz(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).tz = function (tag) {
    var tmp = this.lz(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).uz = function (tag) {
    var tmp = this.lz(tag);
    return tmp instanceof Char ? tmp.a1_1 : THROW_CCE();
  };
  protoOf(TaggedDecoder).vz = function (tag) {
    var tmp = this.lz(tag);
    return typeof tmp === 'string' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).wz = function (tag, inlineDescriptor) {
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlinx.serialization.internal.TaggedDecoder.decodeTaggedInline.<anonymous>' call
    this.xz(tag);
    return this;
  };
  protoOf(TaggedDecoder).ul = function (deserializer, previousValue) {
    return this.vl(deserializer);
  };
  protoOf(TaggedDecoder).tl = function (descriptor) {
    return this.wz(this.yz(), descriptor);
  };
  protoOf(TaggedDecoder).il = function () {
    var tmp0_elvis_lhs = this.iz();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var currentTag = tmp;
    return this.mz(currentTag);
  };
  protoOf(TaggedDecoder).jl = function () {
    return null;
  };
  protoOf(TaggedDecoder).kl = function () {
    return this.nz(this.yz());
  };
  protoOf(TaggedDecoder).ll = function () {
    return this.oz(this.yz());
  };
  protoOf(TaggedDecoder).ml = function () {
    return this.pz(this.yz());
  };
  protoOf(TaggedDecoder).nl = function () {
    return this.qz(this.yz());
  };
  protoOf(TaggedDecoder).ol = function () {
    return this.rz(this.yz());
  };
  protoOf(TaggedDecoder).pl = function () {
    return this.sz(this.yz());
  };
  protoOf(TaggedDecoder).ql = function () {
    return this.tz(this.yz());
  };
  protoOf(TaggedDecoder).rl = function () {
    return this.uz(this.yz());
  };
  protoOf(TaggedDecoder).sl = function () {
    return this.vz(this.yz());
  };
  protoOf(TaggedDecoder).wl = function (descriptor) {
    return this;
  };
  protoOf(TaggedDecoder).xl = function (descriptor) {
  };
  protoOf(TaggedDecoder).yl = function (descriptor, index) {
    return this.nz(this.dz(descriptor, index));
  };
  protoOf(TaggedDecoder).zl = function (descriptor, index) {
    return this.oz(this.dz(descriptor, index));
  };
  protoOf(TaggedDecoder).am = function (descriptor, index) {
    return this.pz(this.dz(descriptor, index));
  };
  protoOf(TaggedDecoder).bm = function (descriptor, index) {
    return this.qz(this.dz(descriptor, index));
  };
  protoOf(TaggedDecoder).cm = function (descriptor, index) {
    return this.rz(this.dz(descriptor, index));
  };
  protoOf(TaggedDecoder).dm = function (descriptor, index) {
    return this.sz(this.dz(descriptor, index));
  };
  protoOf(TaggedDecoder).em = function (descriptor, index) {
    return this.tz(this.dz(descriptor, index));
  };
  protoOf(TaggedDecoder).fm = function (descriptor, index) {
    return this.uz(this.dz(descriptor, index));
  };
  protoOf(TaggedDecoder).gm = function (descriptor, index) {
    return this.vz(this.dz(descriptor, index));
  };
  protoOf(TaggedDecoder).hm = function (descriptor, index) {
    return this.wz(this.dz(descriptor, index), descriptor.lk(index));
  };
  protoOf(TaggedDecoder).im = function (descriptor, index, deserializer, previousValue) {
    var tmp = this.dz(descriptor, index);
    return tagBlock(this, tmp, TaggedDecoder$decodeSerializableElement$lambda(this, deserializer, previousValue));
  };
  protoOf(TaggedDecoder).km = function (descriptor, index, deserializer, previousValue) {
    var tmp = this.dz(descriptor, index);
    return tagBlock(this, tmp, TaggedDecoder$decodeNullableSerializableElement$lambda(this, deserializer, previousValue));
  };
  protoOf(TaggedDecoder).iz = function () {
    return lastOrNull(this.gz_1);
  };
  protoOf(TaggedDecoder).xz = function (name) {
    this.gz_1.d(name);
  };
  protoOf(TaggedDecoder).yz = function () {
    var r = this.gz_1.c2(get_lastIndex_0(this.gz_1));
    this.hz_1 = true;
    return r;
  };
  function get_NULL() {
    _init_properties_Tuples_kt__dz0qyd();
    return NULL;
  }
  var NULL;
  function MapEntry(key, value) {
    this.zz_1 = key;
    this.a10_1 = value;
  }
  protoOf(MapEntry).q1 = function () {
    return this.zz_1;
  };
  protoOf(MapEntry).r1 = function () {
    return this.a10_1;
  };
  protoOf(MapEntry).toString = function () {
    return 'MapEntry(key=' + toString_0(this.zz_1) + ', value=' + toString_0(this.a10_1) + ')';
  };
  protoOf(MapEntry).hashCode = function () {
    var result = this.zz_1 == null ? 0 : hashCode(this.zz_1);
    result = imul(result, 31) + (this.a10_1 == null ? 0 : hashCode(this.a10_1)) | 0;
    return result;
  };
  protoOf(MapEntry).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof MapEntry))
      return false;
    var tmp0_other_with_cast = other instanceof MapEntry ? other : THROW_CCE();
    if (!equals(this.zz_1, tmp0_other_with_cast.zz_1))
      return false;
    if (!equals(this.a10_1, tmp0_other_with_cast.a10_1))
      return false;
    return true;
  };
  function MapEntrySerializer$descriptor$lambda($keySerializer, $valueSerializer) {
    return function ($this$buildSerialDescriptor) {
      $this$buildSerialDescriptor.cj('key', $keySerializer.ri());
      $this$buildSerialDescriptor.cj('value', $valueSerializer.ri());
      return Unit_instance;
    };
  }
  function MapEntrySerializer_0(keySerializer, valueSerializer) {
    KeyValueSerializer.call(this, keySerializer, valueSerializer);
    var tmp = this;
    var tmp_0 = MAP_getInstance();
    tmp.d10_1 = buildSerialDescriptor('kotlin.collections.Map.Entry', tmp_0, [], MapEntrySerializer$descriptor$lambda(keySerializer, valueSerializer));
  }
  protoOf(MapEntrySerializer_0).ri = function () {
    return this.d10_1;
  };
  protoOf(MapEntrySerializer_0).e10 = function (_this__u8e3s4) {
    return _this__u8e3s4.q1();
  };
  protoOf(MapEntrySerializer_0).f10 = function (_this__u8e3s4) {
    return this.e10((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Entry) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(MapEntrySerializer_0).g10 = function (_this__u8e3s4) {
    return _this__u8e3s4.r1();
  };
  protoOf(MapEntrySerializer_0).h10 = function (_this__u8e3s4) {
    return this.g10((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Entry) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(MapEntrySerializer_0).i10 = function (key, value) {
    return new MapEntry(key, value);
  };
  function PairSerializer$descriptor$lambda($keySerializer, $valueSerializer) {
    return function ($this$buildClassSerialDescriptor) {
      $this$buildClassSerialDescriptor.cj('first', $keySerializer.ri());
      $this$buildClassSerialDescriptor.cj('second', $valueSerializer.ri());
      return Unit_instance;
    };
  }
  function PairSerializer_0(keySerializer, valueSerializer) {
    KeyValueSerializer.call(this, keySerializer, valueSerializer);
    var tmp = this;
    tmp.o10_1 = buildClassSerialDescriptor('kotlin.Pair', [], PairSerializer$descriptor$lambda(keySerializer, valueSerializer));
  }
  protoOf(PairSerializer_0).ri = function () {
    return this.o10_1;
  };
  protoOf(PairSerializer_0).p10 = function (_this__u8e3s4) {
    return _this__u8e3s4.bd_1;
  };
  protoOf(PairSerializer_0).f10 = function (_this__u8e3s4) {
    return this.p10(_this__u8e3s4 instanceof Pair ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(PairSerializer_0).q10 = function (_this__u8e3s4) {
    return _this__u8e3s4.cd_1;
  };
  protoOf(PairSerializer_0).h10 = function (_this__u8e3s4) {
    return this.q10(_this__u8e3s4 instanceof Pair ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(PairSerializer_0).i10 = function (key, value) {
    return to(key, value);
  };
  function decodeSequentially_1($this, composite) {
    var a = composite.jm($this.u10_1, 0, $this.r10_1);
    var b = composite.jm($this.u10_1, 1, $this.s10_1);
    var c = composite.jm($this.u10_1, 2, $this.t10_1);
    composite.xl($this.u10_1);
    return new Triple(a, b, c);
  }
  function decodeStructure($this, composite) {
    var a = get_NULL();
    var b = get_NULL();
    var c = get_NULL();
    mainLoop: while (true) {
      var index = composite.nm($this.u10_1);
      switch (index) {
        case -1:
          break mainLoop;
        case 0:
          a = composite.jm($this.u10_1, 0, $this.r10_1);
          break;
        case 1:
          b = composite.jm($this.u10_1, 1, $this.s10_1);
          break;
        case 2:
          c = composite.jm($this.u10_1, 2, $this.t10_1);
          break;
        default:
          throw SerializationException_init_$Create$_0('Unexpected index ' + index);
      }
    }
    composite.xl($this.u10_1);
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
      $this$buildClassSerialDescriptor.cj('first', this$0.r10_1.ri());
      $this$buildClassSerialDescriptor.cj('second', this$0.s10_1.ri());
      $this$buildClassSerialDescriptor.cj('third', this$0.t10_1.ri());
      return Unit_instance;
    };
  }
  function TripleSerializer_0(aSerializer, bSerializer, cSerializer) {
    this.r10_1 = aSerializer;
    this.s10_1 = bSerializer;
    this.t10_1 = cSerializer;
    var tmp = this;
    tmp.u10_1 = buildClassSerialDescriptor('kotlin.Triple', [], TripleSerializer$descriptor$lambda(this));
  }
  protoOf(TripleSerializer_0).ri = function () {
    return this.u10_1;
  };
  protoOf(TripleSerializer_0).v10 = function (encoder, value) {
    var structuredEncoder = encoder.wl(this.u10_1);
    structuredEncoder.mn(this.u10_1, 0, this.r10_1, value.rg_1);
    structuredEncoder.mn(this.u10_1, 1, this.s10_1, value.sg_1);
    structuredEncoder.mn(this.u10_1, 2, this.t10_1, value.tg_1);
    structuredEncoder.xl(this.u10_1);
  };
  protoOf(TripleSerializer_0).si = function (encoder, value) {
    return this.v10(encoder, value instanceof Triple ? value : THROW_CCE());
  };
  protoOf(TripleSerializer_0).ti = function (decoder) {
    var composite = decoder.wl(this.u10_1);
    if (composite.mm()) {
      return decodeSequentially_1(this, composite);
    }
    return decodeStructure(this, composite);
  };
  function KeyValueSerializer(keySerializer, valueSerializer) {
    this.j10_1 = keySerializer;
    this.k10_1 = valueSerializer;
  }
  protoOf(KeyValueSerializer).l10 = function (encoder, value) {
    var structuredEncoder = encoder.wl(this.ri());
    structuredEncoder.mn(this.ri(), 0, this.j10_1, this.f10(value));
    structuredEncoder.mn(this.ri(), 1, this.k10_1, this.h10(value));
    structuredEncoder.xl(this.ri());
  };
  protoOf(KeyValueSerializer).si = function (encoder, value) {
    return this.l10(encoder, (value == null ? true : !(value == null)) ? value : THROW_CCE());
  };
  protoOf(KeyValueSerializer).ti = function (decoder) {
    // Inline function 'kotlinx.serialization.encoding.decodeStructure' call
    var descriptor = this.ri();
    var composite = decoder.wl(descriptor);
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.internal.KeyValueSerializer.deserialize.<anonymous>' call
      if (composite.mm()) {
        var key = composite.jm(this.ri(), 0, this.j10_1);
        var value = composite.jm(this.ri(), 1, this.k10_1);
        tmp$ret$0 = this.i10(key, value);
        break $l$block;
      }
      var key_0 = get_NULL();
      var value_0 = get_NULL();
      mainLoop: while (true) {
        var idx = composite.nm(this.ri());
        switch (idx) {
          case -1:
            break mainLoop;
          case 0:
            key_0 = composite.jm(this.ri(), 0, this.j10_1);
            break;
          case 1:
            value_0 = composite.jm(this.ri(), 1, this.k10_1);
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
      tmp$ret$0 = this.i10(tmp, (value_0 == null ? true : !(value_0 == null)) ? value_0 : THROW_CCE());
    }
    var result = tmp$ret$0;
    composite.xl(descriptor);
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
    this.w10_1 = InlinePrimitiveDescriptor('kotlin.ULong', serializer_4(Companion_getInstance_2()));
  }
  protoOf(ULongSerializer).ri = function () {
    return this.w10_1;
  };
  protoOf(ULongSerializer).x10 = function (encoder, value) {
    var tmp = encoder.bn(this.w10_1);
    // Inline function 'kotlin.ULong.toLong' call
    var tmp$ret$0 = _ULong___get_data__impl__fggpzb(value);
    tmp.wm(tmp$ret$0);
  };
  protoOf(ULongSerializer).si = function (encoder, value) {
    return this.x10(encoder, value instanceof ULong ? value.bi_1 : THROW_CCE());
  };
  protoOf(ULongSerializer).y10 = function (decoder) {
    // Inline function 'kotlin.toULong' call
    var this_0 = decoder.tl(this.w10_1).ol();
    return _ULong___init__impl__c78o9k(this_0);
  };
  protoOf(ULongSerializer).ti = function (decoder) {
    return new ULong(this.y10(decoder));
  };
  var ULongSerializer_instance;
  function ULongSerializer_getInstance() {
    if (ULongSerializer_instance == null)
      new ULongSerializer();
    return ULongSerializer_instance;
  }
  function UIntSerializer() {
    UIntSerializer_instance = this;
    this.z10_1 = InlinePrimitiveDescriptor('kotlin.UInt', serializer_6(IntCompanionObject_instance));
  }
  protoOf(UIntSerializer).ri = function () {
    return this.z10_1;
  };
  protoOf(UIntSerializer).a11 = function (encoder, value) {
    var tmp = encoder.bn(this.z10_1);
    // Inline function 'kotlin.UInt.toInt' call
    var tmp$ret$0 = _UInt___get_data__impl__f0vqqw(value);
    tmp.vm(tmp$ret$0);
  };
  protoOf(UIntSerializer).si = function (encoder, value) {
    return this.a11(encoder, value instanceof UInt ? value.rh_1 : THROW_CCE());
  };
  protoOf(UIntSerializer).b11 = function (decoder) {
    // Inline function 'kotlin.toUInt' call
    var this_0 = decoder.tl(this.z10_1).nl();
    return _UInt___init__impl__l7qpdl(this_0);
  };
  protoOf(UIntSerializer).ti = function (decoder) {
    return new UInt(this.b11(decoder));
  };
  var UIntSerializer_instance;
  function UIntSerializer_getInstance() {
    if (UIntSerializer_instance == null)
      new UIntSerializer();
    return UIntSerializer_instance;
  }
  function UShortSerializer() {
    UShortSerializer_instance = this;
    this.c11_1 = InlinePrimitiveDescriptor('kotlin.UShort', serializer_8(ShortCompanionObject_instance));
  }
  protoOf(UShortSerializer).ri = function () {
    return this.c11_1;
  };
  protoOf(UShortSerializer).d11 = function (encoder, value) {
    var tmp = encoder.bn(this.c11_1);
    // Inline function 'kotlin.UShort.toShort' call
    var tmp$ret$0 = _UShort___get_data__impl__g0245(value);
    tmp.um(tmp$ret$0);
  };
  protoOf(UShortSerializer).si = function (encoder, value) {
    return this.d11(encoder, value instanceof UShort ? value.li_1 : THROW_CCE());
  };
  protoOf(UShortSerializer).e11 = function (decoder) {
    // Inline function 'kotlin.toUShort' call
    var this_0 = decoder.tl(this.c11_1).ml();
    return _UShort___init__impl__jigrne(this_0);
  };
  protoOf(UShortSerializer).ti = function (decoder) {
    return new UShort(this.e11(decoder));
  };
  var UShortSerializer_instance;
  function UShortSerializer_getInstance() {
    if (UShortSerializer_instance == null)
      new UShortSerializer();
    return UShortSerializer_instance;
  }
  function UByteSerializer() {
    UByteSerializer_instance = this;
    this.f11_1 = InlinePrimitiveDescriptor('kotlin.UByte', serializer_10(ByteCompanionObject_instance));
  }
  protoOf(UByteSerializer).ri = function () {
    return this.f11_1;
  };
  protoOf(UByteSerializer).g11 = function (encoder, value) {
    var tmp = encoder.bn(this.f11_1);
    // Inline function 'kotlin.UByte.toByte' call
    var tmp$ret$0 = _UByte___get_data__impl__jof9qr(value);
    tmp.tm(tmp$ret$0);
  };
  protoOf(UByteSerializer).si = function (encoder, value) {
    return this.g11(encoder, value instanceof UByte ? value.hh_1 : THROW_CCE());
  };
  protoOf(UByteSerializer).h11 = function (decoder) {
    // Inline function 'kotlin.toUByte' call
    var this_0 = decoder.tl(this.f11_1).ll();
    return _UByte___init__impl__g9hnc4(this_0);
  };
  protoOf(UByteSerializer).ti = function (decoder) {
    return new UByte(this.h11(decoder));
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
  protoOf(SerializersModule).wj = function (kClass, typeArgumentsSerializers, $super) {
    typeArgumentsSerializers = typeArgumentsSerializers === VOID ? emptyList() : typeArgumentsSerializers;
    return $super === VOID ? this.xj(kClass, typeArgumentsSerializers) : $super.xj.call(this, kClass, typeArgumentsSerializers);
  };
  function SerialModuleImpl(class2ContextualFactory, polyBase2Serializers, polyBase2DefaultSerializerProvider, polyBase2NamedSerializers, polyBase2DefaultDeserializerProvider, hasInterfaceContextualSerializers) {
    SerializersModule.call(this);
    this.j11_1 = class2ContextualFactory;
    this.k11_1 = polyBase2Serializers;
    this.l11_1 = polyBase2DefaultSerializerProvider;
    this.m11_1 = polyBase2NamedSerializers;
    this.n11_1 = polyBase2DefaultDeserializerProvider;
    this.o11_1 = hasInterfaceContextualSerializers;
  }
  protoOf(SerialModuleImpl).vj = function () {
    return this.o11_1;
  };
  protoOf(SerialModuleImpl).un = function (baseClass, value) {
    if (!baseClass.w9(value))
      return null;
    var tmp0_safe_receiver = this.k11_1.u1(baseClass);
    var tmp = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.u1(getKClassFromExpression(value));
    var registered = (!(tmp == null) ? isInterface(tmp, SerializationStrategy) : false) ? tmp : null;
    if (!(registered == null))
      return registered;
    var tmp_0 = this.l11_1.u1(baseClass);
    var tmp1_safe_receiver = (!(tmp_0 == null) ? typeof tmp_0 === 'function' : false) ? tmp_0 : null;
    return tmp1_safe_receiver == null ? null : tmp1_safe_receiver(value);
  };
  protoOf(SerialModuleImpl).tn = function (baseClass, serializedClassName) {
    var tmp0_safe_receiver = this.m11_1.u1(baseClass);
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
    var tmp_1 = this.n11_1.u1(baseClass);
    var tmp1_safe_receiver = (!(tmp_1 == null) ? typeof tmp_1 === 'function' : false) ? tmp_1 : null;
    return tmp1_safe_receiver == null ? null : tmp1_safe_receiver(serializedClassName);
  };
  protoOf(SerialModuleImpl).xj = function (kClass, typeArgumentsSerializers) {
    var tmp0_safe_receiver = this.j11_1.u1(kClass);
    var tmp = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.p11(typeArgumentsSerializers);
    return (tmp == null ? true : isInterface(tmp, KSerializer)) ? tmp : null;
  };
  protoOf(SerialModuleImpl).i11 = function (collector) {
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s = this.j11_1.x1().i();
    while (_iterator__ex2g4s.j()) {
      var element = _iterator__ex2g4s.k();
      // Inline function 'kotlinx.serialization.modules.SerialModuleImpl.dumpTo.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var kclass = element.q1();
      // Inline function 'kotlin.collections.component2' call
      var serial = element.r1();
      if (serial instanceof Argless) {
        var tmp = isInterface(kclass, KClass) ? kclass : THROW_CCE();
        var tmp_0 = serial.s11_1;
        collector.t11(tmp, isInterface(tmp_0, KSerializer) ? tmp_0 : THROW_CCE());
      } else {
        if (serial instanceof WithTypeArguments) {
          collector.r11(kclass, serial.q11_1);
        } else {
          noWhenBranchMatchedException();
        }
      }
    }
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s_0 = this.k11_1.x1().i();
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
        collector.u11(tmp_1, tmp_2, tmp$ret$9);
      }
    }
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s_2 = this.l11_1.x1().i();
    while (_iterator__ex2g4s_2.j()) {
      var element_2 = _iterator__ex2g4s_2.k();
      // Inline function 'kotlinx.serialization.modules.SerialModuleImpl.dumpTo.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var baseClass_0 = element_2.q1();
      // Inline function 'kotlin.collections.component2' call
      var provider = element_2.r1();
      var tmp_3 = isInterface(baseClass_0, KClass) ? baseClass_0 : THROW_CCE();
      collector.v11(tmp_3, typeof provider === 'function' ? provider : THROW_CCE());
    }
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s_3 = this.n11_1.x1().i();
    while (_iterator__ex2g4s_3.j()) {
      var element_3 = _iterator__ex2g4s_3.k();
      // Inline function 'kotlinx.serialization.modules.SerialModuleImpl.dumpTo.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var baseClass_1 = element_3.q1();
      // Inline function 'kotlin.collections.component2' call
      var provider_0 = element_3.r1();
      var tmp_4 = isInterface(baseClass_1, KClass) ? baseClass_1 : THROW_CCE();
      collector.w11(tmp_4, typeof provider_0 === 'function' ? provider_0 : THROW_CCE());
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
    this.x11_1 = serializer;
  }
  protoOf(SerializableWith).equals = function (other) {
    if (!(other instanceof SerializableWith))
      return false;
    var tmp0_other_with_cast = other instanceof SerializableWith ? other : THROW_CCE();
    if (!this.x11_1.equals(tmp0_other_with_cast.x11_1))
      return false;
    return true;
  };
  protoOf(SerializableWith).hashCode = function () {
    return imul(getStringHashCode('serializer'), 127) ^ this.x11_1.hashCode();
  };
  protoOf(SerializableWith).toString = function () {
    return '@kotlinx.serialization.SerializableWith(' + 'serializer=' + toString(this.x11_1) + ')';
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
          var tmp_1 = assocObject.qt(args.slice());
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
    this.y11_1 = $factory;
  }
  protoOf(createCache$1).yj = function (key) {
    return this.y11_1(key);
  };
  function createParametrizedCache$1($factory) {
    this.z11_1 = $factory;
  }
  protoOf(createParametrizedCache$1).zj = function (key, types) {
    // Inline function 'kotlin.runCatching' call
    var tmp;
    try {
      // Inline function 'kotlinx.serialization.internal.<no name provided>.get.<anonymous>' call
      // Inline function 'kotlin.Companion.success' call
      var value = this.z11_1(key, types);
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
  protoOf(SerialDescriptorImpl).ak = get_isNullable;
  protoOf(SerialDescriptorImpl).fk = get_isInline;
  protoOf(AbstractDecoder).jm = decodeSerializableElement$default;
  protoOf(AbstractDecoder).vl = decodeSerializableValue;
  protoOf(AbstractDecoder).mm = decodeSequentially;
  protoOf(AbstractDecoder).om = decodeCollectionSize;
  protoOf(AbstractEncoder).qn = encodeNotNullMark;
  protoOf(AbstractEncoder).rn = beginCollection;
  protoOf(AbstractEncoder).nn = encodeSerializableValue;
  protoOf(AbstractEncoder).pn = encodeNullableSerializableValue;
  protoOf(AbstractEncoder).sn = shouldEncodeElementDefault;
  protoOf(ListLikeDescriptor).ak = get_isNullable;
  protoOf(ListLikeDescriptor).fk = get_isInline;
  protoOf(ListLikeDescriptor).hk = get_annotations;
  protoOf(MapLikeDescriptor).ak = get_isNullable;
  protoOf(MapLikeDescriptor).fk = get_isInline;
  protoOf(MapLikeDescriptor).hk = get_annotations;
  protoOf(PluginGeneratedSerialDescriptor).ak = get_isNullable;
  protoOf(PluginGeneratedSerialDescriptor).fk = get_isInline;
  protoOf(InlinePrimitiveDescriptor$1).gt = typeParametersSerializers;
  protoOf(NothingSerialDescriptor).ak = get_isNullable;
  protoOf(NothingSerialDescriptor).fk = get_isInline;
  protoOf(NothingSerialDescriptor).hk = get_annotations;
  protoOf(PrimitiveSerialDescriptor_0).ak = get_isNullable;
  protoOf(PrimitiveSerialDescriptor_0).fk = get_isInline;
  protoOf(PrimitiveSerialDescriptor_0).hk = get_annotations;
  protoOf(TaggedDecoder).jm = decodeSerializableElement$default;
  protoOf(TaggedDecoder).vl = decodeSerializableValue;
  protoOf(TaggedDecoder).mm = decodeSequentially;
  protoOf(TaggedDecoder).om = decodeCollectionSize;
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
