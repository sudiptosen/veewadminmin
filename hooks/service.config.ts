export default class ServiceConfig {
  private static FORCE_LOCAL = false;
  // private URL_BASE_LOCAL = 'http://127.0.0.1:3000/';
  // private static URL_BASE_LOCAL = 'http://192.168.68.96:3000/';
  private static URL_BASE_LOCAL = 'http://localhost:3000/';
  private static URL_BASE_PRIMARY = 'https://veew-primary-dot-veewservice.ue.r.appspot.com/';
  private static _serviceUrl: string = "https://veew-dev-dot-veewservice.ue.r.appspot.com/"; // TODO: Temporary
  // private static URL_BASE_PRIMARY = 'http://localhost:3000/';
  private static URL_STRAPI_LOCAL = 'http://localhost:1337/';
  /**Base Auth Url is localhost when working locally*/
  static getBaseUrlPrimary = (): string => this.FORCE_LOCAL? this.URL_BASE_LOCAL: this.URL_BASE_PRIMARY;

  /**
   * This is used in all the Service calls except the Authentication calls
   * the _serviceUrl is set in the login component after the user is authenticated
   */
  static getBaseUrl = (): string => this.FORCE_LOCAL? this.URL_BASE_LOCAL: this._serviceUrl;
  static URL_LOGIN = ServiceConfig.getBaseUrlPrimary() + "uapi/login/admin";
  static URL_GET_CLIENT_DB_MEMBER_FROM_PRIMARY_DB_ID = ServiceConfig.getBaseUrl() + "uapi/member/get/by/primarydb/id";

  //TODO: CAREFUL : hardcoded familyId
  static URL_MEMBERS = ServiceConfig.getBaseUrl() + "uapi/family/root/FAMILY_ID/members";
  static URL_DOCS_ADMIN = ServiceConfig.getBaseUrl() + "uapi/documents/admin";
  static URL_NOTIFICATIONS_ADMIN = ServiceConfig.getBaseUrl() + "uapi/notifications/admin";
  static URL_UPDATE_MEMBER = ServiceConfig.getBaseUrlPrimary() + "uapi/member/update";
  static URL_UPDATE_MEMBER_RIGHTS = ServiceConfig.getBaseUrl() + "uapi/member/rights";
  static URL_GET_FAMILY = ServiceConfig.getBaseUrl() + "uapi/family/FAMILY_ID";
  static URL_UPDATE_FAMILY_OPTIONS = ServiceConfig.getBaseUrl() + "uapi/family/options";
  static URL_DASHBOARD = ServiceConfig.getBaseUrl() + "uapi/dashboard";
  static URL_GET_MARKETING_DOCS = ServiceConfig.getBaseUrl() + "uapi/documents/sanity/slugs/marketing";

  static URL_STRAPI_HELP_PAGE = ServiceConfig.URL_STRAPI_LOCAL + "api/help-page?populate=*";
  static URL_SEND_WELCOME_CODE = ServiceConfig.getBaseUrl() + "uapi/family/send/welcomeCode";
  static URL_GET_WELCOME_CODES = ServiceConfig.getBaseUrl() + "uapi/family/get/welcomeCodes";
  static URL_IS_PHONE_USAGE_EXCEEDS_LIMIT = ServiceConfig.getBaseUrl() + "uapi/phone/usage/exceeds/limit";
  static URL_TOGGLE_WELCOME_CODE_STATUS = ServiceConfig.getBaseUrl() + "uapi/family/toggle/welcomeCode/status";
  static URL_SEND_EMAIL_VERIFICATION_CODE = ServiceConfig.getBaseUrlPrimary() + "uapi/member/send/email/verificationcode";
  static URL_VERIFY_EMAIL_CODE = ServiceConfig.getBaseUrlPrimary() + "uapi/member/verify/email/verificationcode";
  static URL_RESET_PASSWORD = ServiceConfig.getBaseUrlPrimary() + "uapi/member/update/password";
  static URL_MARK_MEMBER_DELETED = ServiceConfig.getBaseUrlPrimary() + "uapi/member/mark/delete";
  static URL_SAVE_CONTACT_US = ServiceConfig.getBaseUrlPrimary() + "uapi/contactus";
  static URL_STAGE_FAMILIES = ServiceConfig.getBaseUrl() + "uapi/onboarding/stage/families";
  static URL_STAGE_MEMBERS = ServiceConfig.getBaseUrl() + "uapi/onboarding/stage/members";
  static URL_STAGE_ACCOUNTS = ServiceConfig.getBaseUrl() + "uapi/onboarding/stage/accounts";
  static URL_STAGE_RELATIONSHIPS = ServiceConfig.getBaseUrl() + "uapi/onboarding/stage/relationships";
  static URL_STAGE_OWNERSHIPS = ServiceConfig.getBaseUrl() + "uapi/onboarding/stage/ownerships";
  static URL_VALIDATE_MEMBERS = ServiceConfig.getBaseUrl() + "uapi/onboarding/verify/members";
  static URL_PROCESS_REQUEST = ServiceConfig.getBaseUrl() + "uapi/onboarding/process/request";
  static URL_DELETE_RECENT = ServiceConfig.getBaseUrl() + "uapi/onboarding/delete/recent";
  static URL_GET_FAMILY_REPORT = ServiceConfig.getBaseUrl() + "uapi/family/root/report";
  static URL_POST_DOCUMENT_SETUP = ServiceConfig.getBaseUrl() + "uapi/doc/setup";
  static URL_GET_PUBLIC_URL = ServiceConfig.getBaseUrl() + "uapi/document/get/publicurl";
  static URL_MARK_DOCUMENT_DELETED = ServiceConfig.getBaseUrl() + "uapi/document/mark/delete";
  static URL_GET_ACCOUNTS_FOR_A_FAMILY = ServiceConfig.getBaseUrl() + "uapi/family/get/accounts";
  static URL_UPDATE_TANGIBLE_CURRENT_MV = ServiceConfig.getBaseUrl() + "uapi/tangible/update/price";
  static URL_UPDATE_ACCOUNT_HOLDINGS_PRICE_BY_DATE = ServiceConfig.getBaseUrl() + "uapi/account/holdings/update/price";
  static URL_ACCOUNT_HOLDINGS_CATCHUP = ServiceConfig.getBaseUrl() + "uapi/account/holdings/catchup";
  static URL_ACCOUNT_CURRENT_MARKET_VALUE = ServiceConfig.getBaseUrl() + "uapi/account/current/marketvalue";

  static URL_UNAUTHORIZE_PHONE = ServiceConfig.getBaseUrlPrimary() + "uapi/phone/unauthorize";
  static URL_AUTHORIZE_PHONE = ServiceConfig.getBaseUrlPrimary() + "uapi/phone/authorize";
  static URL_AUTHORIZE_STATUS = ServiceConfig.getBaseUrlPrimary() + "uapi/phone/status";
  static URL_DELETE_FAMILY_NON_ROOT = ServiceConfig.getBaseUrl() + "uapi/family/delete";
  static URL_GET_INTEGRATION_GET = ServiceConfig.getBaseUrl() + "uapi/integration/get";
  static URL_SAVE_INTEGRATION: string  = ServiceConfig.getBaseUrl() + "uapi/integration/save";
  static URL_DELETE_INTEGRATION: string  = ServiceConfig.getBaseUrl() + "uapi/integration/delete";
  static URL_REFRESH_INTEGRATION = ServiceConfig.getBaseUrl() + "uapi/integration/refresh";
  static URL_DELETE_ACCOUNT_PERMANENT = ServiceConfig.getBaseUrl() + "uapi/account/delete/permanent";
  static URL_DELETE_MEMBER_PERMANENT = ServiceConfig.getBaseUrl() + "uapi/member/delete/permanent";
  static URL_ASSIGN_COMPANY_TO_ACCOUNT = ServiceConfig.getBaseUrl() + "uapi/company/assign/to/account";
  static URL_GET_COMPANIES = ServiceConfig.getBaseUrlPrimary() + "uapi/companies/get";

  static URL_SAVE_WIDGET = ServiceConfig.getBaseUrl() + "uapi/widgets/save";
  static URL_GET_WIDGETS = ServiceConfig.getBaseUrl() + "uapi/widgets/get";
  static URL_DELETE_WIDGETS = ServiceConfig.getBaseUrl() + "uapi/widgets/delete";
  static URL_TOGGLE_WIDGET_ACTIVE = ServiceConfig.getBaseUrl() + "uapi/widgets/toggle";
  static URL_GET_FAMILIES_FOR_A_MEMBER = ServiceConfig.getBaseUrl() + "uapi/member/get/families";

  static URL_DEMO_SAVE_CASH_ACCOUNT = ServiceConfig.getBaseUrl() + "uapi/integration/demo/create/cash";
  static URL_DEMO_SAVE_INVESTMENT_ACCOUNT = ServiceConfig.getBaseUrl() + "uapi/integration/demo/create/investment";
  static URL_DEMO_SAVE_INVESTMENT_HOLDINGS = ServiceConfig.getBaseUrl() + "uapi/integration/demo/investment/holdings";
  static URL_DEMO_SAVE_DEFAULTS = ServiceConfig.getBaseUrl() + "uapi/integration/demo/save/defaults";
  static URL_GET_ACCOUNTS_BY_TYPE = ServiceConfig.getBaseUrl() + "uapi/account/get/by/type";
}
