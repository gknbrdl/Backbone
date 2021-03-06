import { environment } from "./environments/environment-settings";

export class AppSettings {

  /*
   * Name of the current environment
   */
  static get environment(): string { return environment.name; }

  /*
   * Google Analytics domain name
   * Leave blank to disable analytics
   */
  static get analyticsDomainName(): string { return environment.analyticsDomainName; }

  /*
   * Google Analytics tracking code (e.g. UA-XXXXXXXX-X)
   * Leave blank to disable analytics
   */
  static get analyticsTrackingCode(): string { return environment.analyticsTrackingCode; }

  /*
   * Service application API url
   */
  static get serviceApiUrl(): string { return `${environment.serviceAppUrl}/api/v1` };

  /*
   * Service application OData url
   */
  static get serviceODataUrl(): string { return `${environment.serviceAppUrl}/odata/v1`; }

  /*
   * Origin field for the example project that 'Getting started' page creates
   */
  static get todoAppOrigin(): string { return environment.todoAppOrigin; }

  /*
   * Application version number
   */
  static get version(): string { return "0.6.9"; }
}
