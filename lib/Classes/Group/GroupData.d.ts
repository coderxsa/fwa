import { BinaryNode, GroupMetadata, GroupParticipant, ParticipantAction } from "baileys";
import { Ctx } from "../Ctx";
export declare class GroupData {
    ctx: Ctx;
    jid: string;
    constructor(ctx: Ctx, jid: string);
    members(): Promise<GroupParticipant[]>;
    inviteCode(): Promise<string | undefined>;
    revokeInviteCode(): Promise<string | undefined>;
    joinApproval(mode: "on" | "off"): Promise<void>;
    leave(): Promise<void>;
    membersCanAddMemberMode(mode: "on" | "off"): Promise<void>;
    metadata(): Promise<GroupMetadata>;
    getMetadata(key: keyof GroupMetadata): Promise<string | number | boolean | GroupParticipant[] | undefined>;
    name(): Promise<string | number | boolean | GroupParticipant[] | undefined>;
    description(): Promise<string | number | boolean | GroupParticipant[] | undefined>;
    owner(): Promise<string | number | boolean | GroupParticipant[] | undefined>;
    isAdmin(jid: string): Promise<boolean>;
    isSenderAdmin(): Promise<boolean>;
    isBotAdmin(): Promise<boolean>;
    toggleEphemeral(expiration: number): Promise<void>;
    updateDescription(description?: string): Promise<void>;
    updateSubject(subject: string): Promise<void>;
    membersUpdate(members: string[], action: ParticipantAction): Promise<{
        status: string;
        jid: string;
        content: BinaryNode;
    }[]>;
    kick(members: string[]): Promise<{
        status: string;
        jid: string;
        content: BinaryNode;
    }[]>;
    add(members: string[]): Promise<{
        status: string;
        jid: string;
        content: BinaryNode;
    }[]>;
    promote(members: string[]): Promise<{
        status: string;
        jid: string;
        content: BinaryNode;
    }[]>;
    demote(members: string[]): Promise<{
        status: string;
        jid: string;
        content: BinaryNode;
    }[]>;
    pendingMembers(): Promise<{
        [key: string]: string;
    }[]>;
    pendingMembersUpdate(members: string[], action: 'reject' | 'approve'): Promise<{
        status: string;
        jid: string;
    }[]>;
    approvePendingMembers(members: string[]): Promise<{
        status: string;
        jid: string;
    }[]>;
    rejectPendingMembers(members: string[]): Promise<{
        status: string;
        jid: string;
    }[]>;
    updateSetting(setting: 'announcement' | 'not_announcement' | 'locked' | 'unlocked'): Promise<void>;
    open(): Promise<void>;
    close(): Promise<void>;
    lock(): Promise<void>;
    unlock(): Promise<void>;
}
//# sourceMappingURL=GroupData.d.ts.map