# Balance

Zwraca nam informacje o naszym stanie, ile mamy spinów, kasy etc. This gonna be huge.

## Request

```http
POST /api/v1/users/:userId/balance HTTP/2
Host: vik-game.moonactive.net
User-Agent: UnityPlayer/2020.3.29f1 (UnityWebRequest/1.0, libcurl/7.80.0-DEV)
Accept-Encoding: gzip, deflate
Cookie: <odpowiednie cookie uzyskane podczas logowania>
Accept: application/json
X-Client-Version: 3.5.700
X-Platform: Android
Authorization: Bearer <jwt>
Content-Type: application/x-www-form-urlencoded
X-Unity-Version: 2020.3.29f1
```

### Body zapytania

`application/x-www-form-urlencoded`

```
Device[udid]=               // REQUIRED
API_KEY=viki                // REQUIRED
API_SECRET=coin             // REQUIRED
Device[change]=20220306_1   // OPTIONAL
fbToken=                    // OPTIONAL
locale=pl                   // OPTIONAL
Device[os]=Android          // OPTIONAL
Client[version]=3.5.700     // OPTIONAL
extended=true               // OPTIONAL
config=all                  // OPTIONAL
segmented=true              // OPTIONAL
include[0]=pets             // OPTIONAL
include[1]=vquestRewards    // OPTIONAL
```

- extended to chyba obiekt extended w odpowiedzi. Zawiera informacje o eventach, przyda się
- config=all to raczej informacje o konfiguracji
- segmented - nie wiem co to znaczy, nie zauważyłem różnicy po zmianie parametru. Po nazwię wnioskuje, że może być to coś co dzieli odpowiedź na kilka, ale nie jestem pewien.
- include - dołączenie info o zwierzakach i o nagrodach za jakieś questy, nie wiem dokładnie jakie

Ogólnie nie chce mi się sprawdzać za bardzo co dokładnie odpowiada za to, dołączmy najlepiej to wszystko dla pełnej odpowiedzi.

## Response

Typ odpowiedzi -> `IBalanceDto`, więcej informacji o typach [tutaj](./common-types.md).

Przykładowa odpowiedź:

```json
{
  "inbox": 0,
  "pets": [
    {
      "type": "fox",
      "xp": 160,
      "paused": false,
      "level": 2,
      "messages": [],
      "ttl": 0,
      "nextXp": 200,
      "scoreBonus": 2,
      "currentStealPercent": 18,
      "nextStealPercent": 20,
      "selected": true
    }
  ],
  "selectedPet": {
    "type": "fox",
    "xp": 160,
    "paused": false,
    "level": 2,
    "messages": [],
    "ttl": 0,
    "nextXp": 200,
    "scoreBonus": 2,
    "currentStealPercent": 18,
    "nextStealPercent": 20
  },
  "petXpBank": 2800,
  "petTtlBank": 28800000,
  "DailyMiniSnacksUnlocksAtMiliSec": 1653780675543,
  "activeTriplePromotionIds": [
    "08aa14be96b1d2a3326e50e79611091fec46c7bbfc29991057f2ab69ceb27c77"
  ],
  "score": 86,
  "active_events": { "accumulation": 155942 },
  "name": "Szatan",
  "raid": {
    "name": "Max",
    "id": "rofnf_ck0ov4ysi00goovq9g35891me",
    "image": "m:k-1-203ce34a2a840c5399b2e7ed156ec77d",
    "coins": 756000,
    "raid_target": "nf"
  },
  "messages": [
    {
      "t": 1654364153297,
      "a": 112,
      "data": {
        "reward": { "coins": 1500000, "spins": 20 },
        "reason": "WELCOME_BACK",
        "status": "PENDING_COLLECT",
        "collectUrl": "/api/v1/users/ror48__cl3qibc0j02serrlcb16fggtq/rewards/churn/collect",
        "inactiveHours": 42,
        "message": "Właśnie Ci wysłaliśmy 20 darmowych zakręceń i 1.5M monet! Tylko nie mów nikomu :)"
      }
    },
    {
      "t": 1654364153270,
      "a": 114,
      "data": {
        "id": "cards_boom_2022-06-04T15:05",
        "type": "cards_boom",
        "subType": "",
        "remainingSeconds": 4747,
        "config": {},
        "clientOptions": {
          "scene_name": "CardsBoomEvent",
          "scene_bundle_name": "event-scene-cardboom",
          "badge_bundle_name": "event-button-cardboom",
          "badge_prefab_name": "CardsBoomEventHudBadge",
          "timer": "true",
          "ButtonText": "Buy Chests"
        },
        "options": {
          "wooden": 3,
          "golden": 6,
          "magical": 12,
          "mystery": 9,
          "emerald": 6,
          "sapphire": 9,
          "ruby": 12,
          "seasonal_low": 6,
          "seasonal_high": 12,
          "seasonal_medium": 12,
          "seasonal_low_two": 6,
          "seasonal_high_two": 12,
          "seasonal_medium_two": 12
        }
      }
    },
    {
      "a": 4,
      "t": 1654246015207,
      "u": "rofnf_ck0ov4ytz00mqovq98l48g5x8",
      "n": "Rosetta",
      "i": "m:k-1-70b744e094494b2cde243c9cd566265d",
      "xp": 118,
      "e": 1386000,
      "data": {}
    },
    {
      "a": 4,
      "t": 1654223907299,
      "u": "rofnf_ck0ov4yre00amovq96e9j1ufn",
      "n": "Kathryn",
      "i": "m:k-1-84bb170c2a4390a96012ec1dd1ad28ae",
      "xp": 168,
      "e": 1842000,
      "data": {}
    }
  ],
  "genericRewards": [],
  "globalChestCounter": 4,
  "pendingFriendsCount": 0,
  "accumulation": {
    "missionIndex": 3,
    "currentAmount": 11,
    "currentAmountNonCapped": 11,
    "totalAmount": 15,
    "reward": { "coins": 2500000 },
    "id": "accumulation_2022-06-02T13:05",
    "accumulatedProgressEnabled": true,
    "gaeMapData": {
      "lastMissionIndex": 40,
      "currentMissionIndex": 3,
      "missions": {
        "3": { "reward": { "coins": 2500000 }, "bonus": null },
        "4": {
          "reward": { "mystery_chest_gae_sapphire_chest": 1 },
          "bonus": null
        },
        "5": { "reward": { "coins": 4500000 }, "bonus": null },
        "6": { "reward": { "spins": 150 }, "bonus": null },
        "7": { "reward": { "pet_xp_bank": 7500 }, "bonus": null },
        "40": { "reward": { "spins": 60000 }, "bonus": null }
      }
    }
  },
  "image": "16",
  "spins": 144,
  "shields": 3,
  "maxShields": 3,
  "village": 3,
  "coins": 467800,
  "fillTime": 1654207513146,
  "msToNextDailyBonus": 0,
  "dailybonusextra": 0,
  "dailybonusextraPurchaseDisabled": false,
  "cardsXP": 25,
  "Ship": 0,
  "Farm": 0,
  "Crop": 0,
  "Statue": 0,
  "House": 0,
  "now": 1654364157714,
  "config": {
    "locale": "pl",
    "country": "PL",
    "DaysSinceReg": 6,
    "revenue_usd": 0,
    "ageBlocked": "untested",
    "MaxXP": "60",
    "Revenue": "0",
    "PurchaseCount": "0",
    "LastPurchaseAmount": "0",
    "LastPurchaseDate": "-1",
    "IsPrivacyPolicyShown": "False",
    "Cfc_tutorial_shown": "False",
    "friendsFtueShown": "False",
    "FirstPurchaseTooltipShownCounter": "2",
    "segment_bet_blast_test_base": true,
    "segment_bf_immediate_treatment1_null": true,
    "segment_bonus_no_bonus": true,
    "segment_can_finish_15plus_cards": true,
    "segment_can_finish_mission": true,
    "segment_Coupon_1_offer": true,
    "segment_cyo_p75_segment_under_1999": true,
    "segment_daysSinceReg_equal_7": true,
    "segment_daysSinceRegLess_90": true,
    "segment_emergency_coupon": true,
    "segment_emergency_coupon_coupon2": true,
    "segment_FirstTenDays_daysSinceReg_7_10": true,
    "segment_gae_pending_under_1000": true,
    "segment_gae_pending_under_500": true,
    "segment_Invite_raffle_badge_test": true,
    "segment_LA_FirstTenDays_daysSinceReg_7_10": true,
    "segment_LA_PIG_FTD_4_8": true,
    "segment_main_event_tag_production": true,
    "segment_milestone_bucket_group_one": true,
    "segment_non_payer_bonus": true,
    "segment_non_payer_can_finish_mission": true,
    "segment_non_payer_didntgot_seasonal_last24hr": true,
    "segment_novip_prod": true,
    "segment_NP_NP16": true,
    "segment_PG_Coins_under_1B": true,
    "segment_PIG_FTD_4_8": true,
    "segment_segmentation_issue_test_varb": true,
    "segment_spins_leftXS": true,
    "segment_split_all_users_base": true,
    "segment_total_0": true,
    "segment_u120_bucket500": true,
    "segment_vq_cyd_bonus_test_var_d_base": true,
    "segment_vq_vip_segments_v5_inventory_d_500": true,
    "hasPendingReward": true
  },
  "extended": {
    "activeEvents": {
      "accumulation": {
        "options": {
          "missionIndex": 0,
          "currentAmount": 0,
          "totalAmount": 7,
          "reward": { "mystery_chest_gae_emerald_chest": 1 },
          "paytable": [
            {
              "action": "match_1",
              "blockIndex": 1,
              "description": "gae_eventpopup_paytable_hit1",
              "points": 1,
              "rowIndex": 1
            },
            {
              "action": "match_2",
              "blockIndex": 2,
              "description": "gae_eventpopup_paytable_hit2",
              "points": 2,
              "rowIndex": 1
            },
            {
              "action": "match_3",
              "blockIndex": 3,
              "description": "gae_eventpopup_paytable_hit3",
              "points": 10,
              "rowIndex": 1
            }
          ],
          "accumulatedProgressEnabled": true
        },
        "clientOptions": {
          "button_bundle_name": "event-button-crazycarnivalpartygae",
          "badge_prefab_name": "CrazyCarnivalPartyGAEEventHudBadge",
          "scene_bundle_name": "event-scene-crazycarnivalpartygae",
          "scene_name": "CrazyCarnivalPartyGAEGAESpecialEventPopup",
          "skin_bundle_name": "event-skin-crazycarnivalpartygae",
          "skin_prefab_name": "CrazyCarnivalPartyGAESkin",
          "scene_bundle_name_unsupported": "event-scene-crazycarnivalpartygae-update",
          "scene_name_unsupported": "CrazyCarnivalPartyGAEUpdatePopup",
          "badge_bundle_name_unsupported": "event-button-crazycarnivalpartygae-update",
          "badge_prefab_name_unsupported": "CrazyCarnivalPartyGAESpecialEventHudBadgeUpdate",
          "reward_animation_name": "GenericAccumulationWinItem",
          "string_type": "gae",
          "3d_reward_animation": "false",
          "min_supported_version": "3.5.670",
          "show_paytable": "true",
          "GrandPrizeBubbleBase_enabled": "false",
          "SpinAmountBase": "60,000",
          "SpinAmountVip": "400,000",
          "Badge_vip_enabled": "false",
          "Badge_enabled": "false",
          "GrandPrizeBubbleVip_enabled": "false",
          "generic_rewards_assets_format": "true",
          "gae_map_scene_name": "CrazyCarnivalPartyGAEGAEMapPopup"
        },
        "id": "accumulation_2022-06-02T13:05",
        "type": "accumulation",
        "subType": "",
        "remainingSeconds": 155942,
        "config": {}
      }
    },
    "multiActiveEvents": {},
    "betterInvites": "on",
    "chestsStore": { "cardsForChests": { "minVillage": 19 } },
    "activeTriplePromotions": [
      {
        "cyclic": false,
        "endsAt": 1654394259000,
        "group": "appload_FirstTimer10Days",
        "minSupportedVersion": "3.5.38",
        "name": "Appload_DailySingle_FirstTimerPack_V1_4_DaysSinceReg7-10 _Villages1+_0406_02",
        "offers": [
          {
            "amount": 1,
            "availableAmount": 1,
            "currency": "REAL_MONEY",
            "sku": "com.moonactive.cm.exciting.pack.v1.10",
            "amountReceived": 0,
            "status": "READY_TO_PURCHASE",
            "productDetails": {
              "reward": [
                { "name": "coins", "value": "7000000" },
                { "name": "spins", "value": "200" }
              ]
            }
          }
        ],
        "promotionSubType": "First Timer Pack",
        "sequence": 4,
        "startsAt": 1654308300000,
        "type": "single",
        "uiOptions": {
          "bundleName": "promotion-scene-firsttimerpack-single",
          "buttonBundle": "promotion-button-firsttimerpack-single",
          "buttonName": "FirstTimerPackButton",
          "discountbadgeTextKey": "singlepromo_more_price",
          "discountbadgeValue0": "700",
          "firstTimeBuyerSpecialTextKey": "promotion_first_time_buy",
          "sceneName": "FirstTimerPackPopup"
        },
        "updatedAt": 1654251868000,
        "id": "08aa14be96b1d2a3326e50e79611091fec46c7bbfc29991057f2ab69ceb27c77",
        "status": "PENDING",
        "initialVillageNumber": 4,
        "includeInPromotionCenter": false
      }
    ]
  },
  "dailyBonusWheelValues": [
    100000, 1500000, 500000, 20000000, 150000, 1000000, 250000, 5000000
  ],
  "seq": 190,
  "seasonalCardsXP": 0,
  "vanityXp": 0,
  "extraCardsRarityXp": 0,
  "isTokenWheelActive": false,
  "seasonIsActive": true,
  "coupons": []
}
```
