export interface IBaseEvent {
    /**
     * Event id
     */
     id: string;

     /**
      * Event type
      */
     type: string;
 
     /**
      * idk
      */
     subType: string;
 
     remainingSeconds: number;

     config: any;
     
    /**
     * Fuck that, we don't need this
     */
    clientOptions: any;
}

// ************************** <CARDS BOOM> **************************
export interface ICardsBoomEvent extends IBaseEvent {
    /**
     * How many cards we can get from chest with this event
     */
    options: ICardsBoomEventOptions;
}

export interface ICardsBoomEventOptions {
    wooden: number;
    golden: number;
    magical: number;
    mystery: number;
    emerald: number;
    sapphire: number;
    ruby: number;
    seasonal_low: number;
    seasonal_high: number;
    seasonal_medium: number;
    seasonal_low_two: number;
    seasonal_high_two: number;
    seasonal_medium_two: number;
}
// ************************** </CARDS BOOM> **************************

// ************************** <BET MASTER> **************************

export interface IBetMasterEvent extends IBaseEvent {
    options: IBetMasterEventOptions;
}

export interface IBetMasterEventOptions extends IBaseEvent {
    bets: number[];
}

// ************************** </BET MASTER> **************************

// ************************** <ACCUMULATION> **************************
export interface IAccumulationEvent extends IBaseEvent {
    options: IAccumulationEventOptions;
}

export interface IAccumulationEventOptions {
    /**
     * It's invalid
     */
    missionIndex: number;

    /**
     * It's invalid
     */
    currentAmount: number;

    /**
     * It's invalid
     */
    totalAmount: number;

    /**
     * It's invalid
     */
    reward: { [key: string]: number }

    /**
     * How many points to the event for how many hit symbols in a row
     */
    paytable: IAccumulationEventPaytableEntry[];
    
    /**
     * Idk, it was set to true. Maybe it's false when we complete accumulation
     */
    accumulatedProgressEnabled: boolean;
}

export interface IAccumulationEventPaytableEntry {
    action: IAccumulationEventPaytableAction;
    blockIndex: number;
    description: string;
    points: number;
    rowIndex: number;
}

export type IAccumulationEventPaytableAction = "match_1" | "match_2" | "match_3";
// ************************** </ACCUMULATION> **************************