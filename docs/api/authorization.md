# Autoryzacja

# Gość
## Rejestracja
TODO. Prawdopodobnie w momencie instalacji tworzony jest JWT z ID urządzenia i ten JWT służy do autoryzowania logowania. Nie jestem pewny czy konto gościa jest powiązanie z tym JWT czy może z ID urządzenia, further investigation needed.

## Logowanie

## `POST /api/v1/users/login`

### Headers
```http
User-Agent: UnityPlayer/2020.3.29f1 (UnityWebRequest/1.0, libcurl/7.80.0-DEV)
Accept-Encoding: gzip, deflate
Accept: application/json
X-Client-Version: 3.5.700
X-Platform: Android
Authorization: Bearer <token_urzadzenia>
Content-Type: application/x-www-form-urlencoded
X-Unity-Version: 2020.3.29f1
```
Token urządzenia to token o którym mówię w rejestracji. Póki co nie wiem jak powstaje, więc po prostu kopiujemy go z Burp Suite XD

### Body
`application/x-www-form-urlencoded`
```
Device[udid]=uuid-urzadzenia // REQUIRED
API_KEY=viki // REQUIRED
API_SECRET=coin // REQUIRED
Device[change]=20220530_3 // data ostatniego logowania czy coś, nwm
fbToken=
locale=pl
Device[os]=Android
Client[version]=3.5_fband
Device[version]=7.1.2
seq=0
```
Ogólnie tylko zaznaczone trzy parametry są wymagane, więc resztę można olać, ale jak ominiemy pozostałe to MoonActive może zobaczyć w logach, że coś jest nie tak. Czy to robią jeszcze nie wiem ^^

### Response
```ts
interface ILoginResponse {
    change_timestamp: number; // nie mam pojęcia czym to jest, może coś powiązane z Device[change]. Not sure.
    profile: string; // Chyba coś związane z wersją clienta
    sessionToken: string; // Nasz token JWT, którym będziemy autoryzować requesty
    userId: string;
    request_fb_age_range: boolean;
    use_profile_time_stamp: boolean;
    isNewClientProfileFormatActive: boolean;
}
```

### Cookies
Response także ustawia jakieś cookies, wypadałoby używać cookie jara, na szybko sprawdzałem to chyba nie są potrzebne te cookies, ale lepiej je mieć coby uniknąć bycia podejrzanym w logach.

## Weryfikacja sesji
Chyba wystarczy wysłać request:
```http
GET /api/v2/vanity/users/<userId>/vanity HTTP/2
User-Agent: UnityPlayer/2020.3.29f1 (UnityWebRequest/1.0, libcurl/7.80.0-DEV)
Accept-Encoding: gzip, deflate
Accept: application/json
X-Client-Version: 3.5.700
X-Platform: Android
Authorization: Bearer <sessionToken>
Content-Type: application/x-www-form-urlencoded
X-Unity-Version: 2020.3.29f1
```
Otrzymujemy wtedy taki response, jeżeli jesteśmy poprawnie zalogowani:
```json
{"success":true,"emotes":[]}
```
Co ciekawe, błędny token zwraca kod HTTP `409 - Conflict`, zamiast 401.

# Facebook
TODO. Póki co logowanie za pomocą fb zbytnio mnie nie interesuje.