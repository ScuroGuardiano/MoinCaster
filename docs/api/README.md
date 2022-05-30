# API Docs

> I am too tired to write it in English so whole this folder will be in Polish, deal with it.

> Póki co wszystko testowane na koncie gościa!

Base URL: `net moonactive vik-game`  
Odwrócone oczywiście, z kropkami i httpsem

# Request
Requesty nie używają body w JSON-ie tylko `application/x-www-form-urlencoded`, więc trzeba je tak zaenkodować.

## Typowe headery zapytania
```http
User-Agent: UnityPlayer/2020.3.29f1 (UnityWebRequest/1.0, libcurl/7.80.0-DEV)
Accept-Encoding: gzip, deflate
Accept: application/json
Cookie: <O tym później>
X-Client-Version: 3.5.700
X-Platform: Android
Authorization: Bearer <JWT>
Content-Type: application/x-www-form-urlencoded
X-Unity-Version: 2020.3.29f1
```
Authorization to token JWT, otrzymywany jest po wysłaniu requesta na
`/api/v1/users/login`. Tylko co ciekawe tutaj też musimy wysłać bearer token, ale inny. Zawiera on informacje o urządzeniu, a bearer przesyłany po zalogowaniu również o sesji. Opiszę tego więcej w dokumencie poświęconym autoryzacji.

Co do cookie, jest kilka ciasteczek ustawionych, ustawiają je requesty, przedewszystkim login. Więc trzeba śledzić również cookies, przynajmniej żeby nie wbudzać podejrzeń. Reszta dosyć prosta

## Typowe body zapytań
Zapytania są głównie wysyłane jako POST z body w `x-www-form-urlencoded`, to dane, które się powtarzają chyba w każdym requeście. Oczywiście są wysyłane dodatkowe dane zależnie od zapytania.
```
Device[udid]=<identyfikator urządzenia>
API_KEY=viki
API_SECRET=coin
Device[change]=20220529_6
fbToken=
locale=pl
```
**API_KEY** i **API_SECRET** zawsze takie  

**Device[change]** jest datą YYYYMMDD_X nie wiem czym jest X i nie wiem co to reprezentuje, może zmianę urządzenia? Muszę to rozkminić.

**fbToken** na gościu jest pusty

# Response
Odpowiedzi są w `application/json`, więc tutaj mamy ułatwienie. Potrafią zawierać dużo danych, będę rozkminiał dla poszczególnych requestów. W tym folderze znajdą się wszystkie endpointy, a przynajmniej te ważne. Postaram się jakoś uporządkować ten syf.

*To uczucie, kiedy przejmujesz się, że Twoje API jest skomplikowane, a potem dowiadujesz się jak wygląda naprawdę skomplikowane API*