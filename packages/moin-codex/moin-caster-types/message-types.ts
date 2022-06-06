import { ICardsBoomEvent } from "./events";

export enum MessageType {
    RAID = 4,
    WELCOME_BACK = 112,
    CARDS_BOOM = 114
}

export type MessageT =
    IRaidMessage
    | IWelcomeBackMessage
    | ICardsBoomMessage;

export interface IMessageBase<T> {
    /** 
     * Timestamp of message in millis
     */
    t: number;

    /**
     * I am not sure, my best guess is that it's type of message.
     */
    a: number;

    /**
     * Data of the message
     */
    data: T;
}

/**
 * We receive this if someone raid us
 */
export interface IRaidMessage extends IMessageBase<{}> {
    /**
     * ID of user who raided us
     */
    u: string;

    /**
     * Name of user who raided us
     */
    n: string;

    /**
     * Image id of user who raided us
     */
    i: string;

    /**
     * I don't know wtf is this. Propably how much XP his pet gained
     */
    xp: number;

    /**
     * How much have been stolen from us
     */
    e: number;
}

export interface IWelcomeBackMessageData {
    reward: {
        coins: number;
        spins: number;
    };
    reason: string;
    status: string;
    collectUrl: string;
    inactiveHours: number;
    message: string;
}

export interface IWelcomeBackMessage extends IMessageBase<IWelcomeBackMessageData> {}

export interface ICardsBoomMessage extends IMessageBase<ICardsBoomEvent> {}