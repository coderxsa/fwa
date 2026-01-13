/// <reference types="node" />
import makeWASocket from "baileys";
import { AuthenticationState, WABrowserDescription } from "baileys/lib/Types";
import EventEmitter from "events";
import { Collection } from "@discordjs/collection";
import { IClientOptions, ICommandOptions, IMessageInfo } from "../Common/Types";
import { Ctx } from "./Ctx";
import { Consolefy } from "consolefy";
export declare class Client {
    prefix: Array<string> | string | RegExp;
    readIncommingMsg?: boolean;
    authDir?: string;
    printQRInTerminal?: boolean;
    state?: AuthenticationState;
    saveCreds: any;
    core: ReturnType<typeof makeWASocket>;
    ev: EventEmitter;
    cmd?: Collection<ICommandOptions | number, any>;
    cooldown?: Collection<unknown, unknown>;
    middlewares?: Collection<number, (ctx: Ctx, next: () => Promise<void>) => any>;
    readyAt?: number;
    hearsMap: Collection<number, any>;
    qrTimeout?: number;
    markOnlineOnConnect?: boolean;
    logger?: any;
    phoneNumber?: string;
    usePairingCode?: boolean;
    selfReply?: boolean;
    WAVersion?: [number, number, number];
    autoMention?: boolean;
    fallbackWAVersion: [number, number, number];
    authAdapter?: Promise<any>;
    consolefy?: Consolefy;
    browser?: WABrowserDescription;
    constructor(opts: IClientOptions);
    onConnectionUpdate(): void;
    onCredsUpdate(): void;
    read(m: IMessageInfo): void;
    use(fn: (ctx: Ctx, next: () => Promise<void>) => any): void;
    runMiddlewares(ctx: Ctx, index?: number): Promise<boolean>;
    onMessage(): void;
    onGroupParticipantsUpdate(): void;
    onGroupsJoin(): void;
    onCall(): void;
    command(opts: ICommandOptions | string, code?: (ctx: Ctx) => Promise<any>): Collection<number | ICommandOptions, any> | undefined;
    hears(query: string | Array<string> | RegExp, callback: (ctx: Ctx) => Promise<any>): void;
    bio(content: string): void;
    fetchBio(jid?: string): Promise<import("baileys").USyncQueryResultList[] | undefined>;
    groups(): Promise<{
        [_: string]: import("baileys").GroupMetadata;
    }>;
    decodeJid(jid: string): string;
    launch(): Promise<void>;
}
//# sourceMappingURL=Client.d.ts.map