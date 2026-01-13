import makeWASocket, { proto } from "baileys";
import fs from "fs";
import { IInteractiveMessageContent } from "./Types";
export declare const arrayMove: <T>(arr: T[], old_index: number, new_index: number) => T[];
export declare const getContentFromMsg: (msg: {
    message: proto.IMessage;
}) => any;
export declare const getSender: (msg: proto.IWebMessageInfo, client: ReturnType<typeof makeWASocket>) => string | null | undefined;
export declare const walk: (dir: string, callback: (filepath: string, stats?: fs.StatsBase<number>) => {}) => void;
export declare const decodeJid: (jid: string) => string;
export declare const makeRealInteractiveMessage: (content: IInteractiveMessageContent) => proto.Message.IInteractiveMessage;
//# sourceMappingURL=Functions.d.ts.map