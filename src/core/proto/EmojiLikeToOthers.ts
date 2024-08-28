// @generated by protobuf-ts 2.9.4
// @generated from protobuf file "EmojiLikeToOthers.proto" (package "SysMessage", syntax proto3)
// tslint:disable
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import { WireType } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
/**
 * @generated from protobuf message SysMessage.EmojiLikeToOthersWrapper1
 */
export interface EmojiLikeToOthersWrapper1 {
    /**
     * @generated from protobuf field: SysMessage.EmojiLikeToOthersWrapper2 wrapper = 1;
     */
    wrapper?: EmojiLikeToOthersWrapper2;
}
/**
 * @generated from protobuf message SysMessage.EmojiLikeToOthersWrapper2
 */
export interface EmojiLikeToOthersWrapper2 {
    /**
     * @generated from protobuf field: SysMessage.EmojiLikeToOthersWrapper3 body = 1;
     */
    body?: EmojiLikeToOthersWrapper3;
}
/**
 * @generated from protobuf message SysMessage.EmojiLikeToOthersWrapper3
 */
export interface EmojiLikeToOthersWrapper3 {
    /**
     * @generated from protobuf field: SysMessage.EmojiLikeToOthersMsgSpec msgSpec = 2;
     */
    msgSpec?: EmojiLikeToOthersMsgSpec;
    /**
     * @generated from protobuf field: SysMessage.EmojiLikeToOthersAttributes attributes = 3;
     */
    attributes?: EmojiLikeToOthersAttributes;
}
/**
 * @generated from protobuf message SysMessage.EmojiLikeToOthersMsgSpec
 */
export interface EmojiLikeToOthersMsgSpec {
    /**
     * @generated from protobuf field: uint32 msgSeq = 1;
     */
    msgSeq: number;
}
/**
 * @generated from protobuf message SysMessage.EmojiLikeToOthersAttributes
 */
export interface EmojiLikeToOthersAttributes {
    /**
     * @generated from protobuf field: string emojiId = 1;
     */
    emojiId: string;
    /**
     * @generated from protobuf field: string senderUid = 4;
     */
    senderUid: string;
}
// @generated message type with reflection information, may provide speed optimized methods
class EmojiLikeToOthersWrapper1$Type extends MessageType<EmojiLikeToOthersWrapper1> {
    constructor() {
        super("SysMessage.EmojiLikeToOthersWrapper1", [
            { no: 1, name: "wrapper", kind: "message", T: () => EmojiLikeToOthersWrapper2 }
        ]);
    }
    create(value?: PartialMessage<EmojiLikeToOthersWrapper1>): EmojiLikeToOthersWrapper1 {
        const message = globalThis.Object.create((this.messagePrototype!));
        if (value !== undefined)
            reflectionMergePartial<EmojiLikeToOthersWrapper1>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: EmojiLikeToOthersWrapper1): EmojiLikeToOthersWrapper1 {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* SysMessage.EmojiLikeToOthersWrapper2 wrapper */ 1:
                    message.wrapper = EmojiLikeToOthersWrapper2.internalBinaryRead(reader, reader.uint32(), options, message.wrapper);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: EmojiLikeToOthersWrapper1, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* SysMessage.EmojiLikeToOthersWrapper2 wrapper = 1; */
        if (message.wrapper)
            EmojiLikeToOthersWrapper2.internalBinaryWrite(message.wrapper, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message SysMessage.EmojiLikeToOthersWrapper1
 */
export const EmojiLikeToOthersWrapper1 = new EmojiLikeToOthersWrapper1$Type();
// @generated message type with reflection information, may provide speed optimized methods
class EmojiLikeToOthersWrapper2$Type extends MessageType<EmojiLikeToOthersWrapper2> {
    constructor() {
        super("SysMessage.EmojiLikeToOthersWrapper2", [
            { no: 1, name: "body", kind: "message", T: () => EmojiLikeToOthersWrapper3 }
        ]);
    }
    create(value?: PartialMessage<EmojiLikeToOthersWrapper2>): EmojiLikeToOthersWrapper2 {
        const message = globalThis.Object.create((this.messagePrototype!));
        if (value !== undefined)
            reflectionMergePartial<EmojiLikeToOthersWrapper2>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: EmojiLikeToOthersWrapper2): EmojiLikeToOthersWrapper2 {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* SysMessage.EmojiLikeToOthersWrapper3 body */ 1:
                    message.body = EmojiLikeToOthersWrapper3.internalBinaryRead(reader, reader.uint32(), options, message.body);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: EmojiLikeToOthersWrapper2, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* SysMessage.EmojiLikeToOthersWrapper3 body = 1; */
        if (message.body)
            EmojiLikeToOthersWrapper3.internalBinaryWrite(message.body, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message SysMessage.EmojiLikeToOthersWrapper2
 */
export const EmojiLikeToOthersWrapper2 = new EmojiLikeToOthersWrapper2$Type();
// @generated message type with reflection information, may provide speed optimized methods
class EmojiLikeToOthersWrapper3$Type extends MessageType<EmojiLikeToOthersWrapper3> {
    constructor() {
        super("SysMessage.EmojiLikeToOthersWrapper3", [
            { no: 2, name: "msgSpec", kind: "message", T: () => EmojiLikeToOthersMsgSpec },
            { no: 3, name: "attributes", kind: "message", T: () => EmojiLikeToOthersAttributes }
        ]);
    }
    create(value?: PartialMessage<EmojiLikeToOthersWrapper3>): EmojiLikeToOthersWrapper3 {
        const message = globalThis.Object.create((this.messagePrototype!));
        if (value !== undefined)
            reflectionMergePartial<EmojiLikeToOthersWrapper3>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: EmojiLikeToOthersWrapper3): EmojiLikeToOthersWrapper3 {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* SysMessage.EmojiLikeToOthersMsgSpec msgSpec */ 2:
                    message.msgSpec = EmojiLikeToOthersMsgSpec.internalBinaryRead(reader, reader.uint32(), options, message.msgSpec);
                    break;
                case /* SysMessage.EmojiLikeToOthersAttributes attributes */ 3:
                    message.attributes = EmojiLikeToOthersAttributes.internalBinaryRead(reader, reader.uint32(), options, message.attributes);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: EmojiLikeToOthersWrapper3, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* SysMessage.EmojiLikeToOthersMsgSpec msgSpec = 2; */
        if (message.msgSpec)
            EmojiLikeToOthersMsgSpec.internalBinaryWrite(message.msgSpec, writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        /* SysMessage.EmojiLikeToOthersAttributes attributes = 3; */
        if (message.attributes)
            EmojiLikeToOthersAttributes.internalBinaryWrite(message.attributes, writer.tag(3, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message SysMessage.EmojiLikeToOthersWrapper3
 */
export const EmojiLikeToOthersWrapper3 = new EmojiLikeToOthersWrapper3$Type();
// @generated message type with reflection information, may provide speed optimized methods
class EmojiLikeToOthersMsgSpec$Type extends MessageType<EmojiLikeToOthersMsgSpec> {
    constructor() {
        super("SysMessage.EmojiLikeToOthersMsgSpec", [
            { no: 1, name: "msgSeq", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value?: PartialMessage<EmojiLikeToOthersMsgSpec>): EmojiLikeToOthersMsgSpec {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.msgSeq = 0;
        if (value !== undefined)
            reflectionMergePartial<EmojiLikeToOthersMsgSpec>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: EmojiLikeToOthersMsgSpec): EmojiLikeToOthersMsgSpec {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint32 msgSeq */ 1:
                    message.msgSeq = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: EmojiLikeToOthersMsgSpec, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint32 msgSeq = 1; */
        if (message.msgSeq !== 0)
            writer.tag(1, WireType.Varint).uint32(message.msgSeq);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message SysMessage.EmojiLikeToOthersMsgSpec
 */
export const EmojiLikeToOthersMsgSpec = new EmojiLikeToOthersMsgSpec$Type();
// @generated message type with reflection information, may provide speed optimized methods
class EmojiLikeToOthersAttributes$Type extends MessageType<EmojiLikeToOthersAttributes> {
    constructor() {
        super("SysMessage.EmojiLikeToOthersAttributes", [
            { no: 1, name: "emojiId", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 4, name: "senderUid", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<EmojiLikeToOthersAttributes>): EmojiLikeToOthersAttributes {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.emojiId = "";
        message.senderUid = "";
        if (value !== undefined)
            reflectionMergePartial<EmojiLikeToOthersAttributes>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: EmojiLikeToOthersAttributes): EmojiLikeToOthersAttributes {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string emojiId */ 1:
                    message.emojiId = reader.string();
                    break;
                case /* string senderUid */ 4:
                    message.senderUid = reader.string();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: EmojiLikeToOthersAttributes, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string emojiId = 1; */
        if (message.emojiId !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.emojiId);
        /* string senderUid = 4; */
        if (message.senderUid !== "")
            writer.tag(4, WireType.LengthDelimited).string(message.senderUid);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message SysMessage.EmojiLikeToOthersAttributes
 */
export const EmojiLikeToOthersAttributes = new EmojiLikeToOthersAttributes$Type();
