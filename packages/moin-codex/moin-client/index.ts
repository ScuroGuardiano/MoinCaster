import got, { Got } from 'got';
import { CookieJar } from 'tough-cookie';
import { ILoginResponse } from '../moin-caster-types/api-types';

export default class MoinClient {
  private unathorizedClient: Got;
  private client?: Got;
  private cookieJar: CookieJar;
  private deviceToken?: string;
  private sessionToken?: string;
  private _userId?: string;
  public get userId() {
    return this._userId;
  }

  constructor(private deviceUuid: string) {
    this.cookieJar = new CookieJar();

    this.unathorizedClient = got.extend({
      cookieJar: this.cookieJar,
      prefixUrl: "https://vik-game.moonactive.net/api",
      http2: true,
      headers: {
        'User-Agent': "UnityPlayer/2020.3.29f1 (UnityWebRequest/1.0, libcurl/7.80.0-DEV)",
        'X-Client-Version': '3.5.700',
        'X-Platform': 'Android',
        'X-Unity-Version': '2020.3.29f1'
      }
    });
  }

  async loginWithJwt(deviceToken: string): Promise<ILoginResponse> {
    this.deviceToken = deviceToken;
    const response = this.unathorizedClient.post<ILoginResponse>("v1/users/login", {
      headers: {
        'Authorization': `Bearer ${this.deviceToken}`
      }
    });
  }
}
