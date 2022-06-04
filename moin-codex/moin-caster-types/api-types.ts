import { IBaseEvent } from "./events";
import { MessageT } from "./message-types";

export interface IBalanceDto {
    /**
     * Messages in inbox
     */
    inbox: number;

    /**
     * Pets that user have
     */
    pets?: Array<PetT>;

    /**
     * Currently selected pet
     */
    selectedPet?: PetT;

    /**
     * How much XP we have in bank.
     */
    petXpBank?: number;

    /**
     * I guess it's summed up time from all snacks that we have
     */
    petTtlBank?: number;

    // Yes, this is in PascalCase
    DailyMiniSnacksUnlocksAtMiliSec?: number;

    /**
     * Idk, propably some promotion P2W shit
     */
    activeTriplePromotionIds?: string[];

    /**
     * Stars that we collected
     */
    score: number;

    /**
     * Active Events: key is id of the event and value is how many seconds left.
     * And yes, this is in snake_case. I love consistency.
     */
    active_events: { [key: string]: number };

    /**
     * Name of the player
     */
    name: string;

    /**
     * Raid target. It's current Moin Caster in the game ;)
     */
    raid: IRaidTarget;

    /**
        These are various messages, such as:
        - Spins gift for non-activity
        - Events info
        - Attacks and raid made on use
        - Etc.  
        It will be hard to type those.

        Find more info in file message-types.ts
     */
    messages: MessageT[];

    /**
     * TODO: Needs explanation
     */
    genericRewards: any[]

    /**
     * TODO: Needs explanation
     */
    globalChestCounter: number;

    pendingFriendsCount: number;

    /**
     * Accumulation event
     */
    accumulation: IAccumulation;

    image: string;

    spins: number;

    shields: number;

    maxShields: number;

    /**
     * Level of our current village. Indexed from 0. So first village has number 0
     */
    village: number;

    coins: number;

    /**
     * I am not sure... TODO:
     */
    fillTime: number;

    msToNextDailyBonus: number;

    dailybonusextra: number;

    dailybonusextraPurchaseDisabled: boolean;

    /**
     * How many stars we have from cards
     */
    cardsXP: number;

    /** Village building level */
    Ship: number;
    /** Village building level */
    Farm: number;
    /** Village building level */
    Crop: number;
    /** Village building level */
    Statue: number;
    /** Village building level */
    House: number;

    now: number;

    /**
     * Large config object, idk if there's something valuable here, so I will skip it for now.
     * TODO:
     */
    config: any;

    /**
     * Info about events, P2W shit and other stuff.
     */
    extended?: IBalanceExtended;

    dailyBonusWheelValues: number;

    /**
     * This number we should include in requests to spin. Increments every spin.
     */
    seq: number;

    seasonalCardsXP: number;
    vanityXp: number;
    extraCardsRarityXp: number;
    isTokenWheelActive: boolean;
    seasonIsActive: boolean;
    coupons: any;
}

export interface IPetBase {
    /**
     * Type of pet
     */
    type: "fox" | "tiger" | "rhino"; // TODO: need to confirm
    xp: number;

    /**
     * TODO: Needs explanation
     */
    paused: boolean;
    level: number;

    /**
     * TODO: Needs explanation
     */
    messages: any[];

    /**
     * How much time our pet will be active.
     * If it's zero then our pet is not fed
     */
    ttl: number;
    nextXp: number;

    /**
     * How many stars we will get when we level up pet
     */
    scoreBonus: number;
    selected?: boolean;
}

export interface IPetFox extends IPetBase {
    currentStealPercent: number;
    nextStealPercent: number;
}
export interface IPetTiger extends IPetBase {
    // TODO
}
export interface IPetRhino extends IPetBase {
    // TODO
}
export type PetT = IPetFox | IPetTiger | IPetRhino;

export interface IRaidTarget {
    name: string;
    id: string;
    image: string
    coins: number;
    /**
     * I don't know what is this
     */
    raid_target: string;
}

/**
 * Accumulation is event of collecting something like roses, drums, pigs, hammers etc.
 */
export interface IAccumulation {
    /**
     * Emm accumulation stage or something I don't know how to call it
     */
    missionIndex: number;

    /**
     * Current amount of symbols collected in current mission
     */
    currentAmount: number;

    /**
     * I don't know XD Maybe if there's situation when amount overflows and this shows absolute value of it.
     */
    currentAmountNonCapped: number;

    /**
     * How many symbols needs to be collected to get current stage reward
     */
    totalAmount: number;

    /**
     * Event id
     */
    id: string;

    /**
     * Idk, it was set to true. Maybe it's false when we complete accumulation
     */
    accumulatedProgressEnabled: boolean;

    /**
     * Data about next missions and it's rewards.
     */
    gaeMapData: IAccumulationMapData;
}

export interface IAccumulationMapData {
    lastMissionIndex: number;
    currentMissionIndex: number;

    /**
     * Indexes are stringified numbers - "1", "2", "3"... and so on
     */
    missions: { [key: string]: IAccumulationMission }
}

export interface IAccumulationMission {
    reward: { [key: string]: number };
    bonus?: { [key: string]: number } | null;
}

export interface IBalanceExtended {
    activeEvents: IActiveEvents;
    multiActiveEvents: any;
    betterInvites: string;
    /**
     * Cards for chests I guess. TODO:
     */
    chestsStore: any;
    
    /**
     * Some P2W Shit
     */
    activeTriplePromotions: any;
}

export interface IActiveEvents {
    [key: string]: IBaseEvent;
}
