module.exports = {
  env: {
    browser: true,
    es6: true,
    webextensions: true
  },
  extends: [
    "eslint:recommended",
    "plugin:mozilla/recommended"
  ],
  globals: {
    CONNECTING_HTTP_REQUEST: false,
    escapedTemplate: false,
    debuggingMode: true,
    FXA_ERR_AUTH: false,
    FXA_ERR_GEO: false,
    FXA_ERR_NETWORK: false,
    FXA_OK: false,
    FXA_PAYMENT_REQUIRED: false,
    fxaCryptoRelier: false,
    log: false,
    MODE_3RD_PARTY_TRACKER_ONLY: false,
    MODE_ALL: false,
    MODE_TRACKER_ONLY: false,
    PROXY_STATE_ACTIVE: false,
    PROXY_STATE_AUTHFAILURE: false,
    PROXY_STATE_CAPTIVE: false,
    PROXY_STATE_CONNECTING: false,
    PROXY_STATE_GEOFAILURE: false,
    PROXY_STATE_INACTIVE: false,
    PROXY_STATE_LOADING: false,
    PROXY_STATE_OFFLINE: false,
    PROXY_STATE_OTHERINUSE: false,
    PROXY_STATE_PROXYAUTHFAILED: false,
    PROXY_STATE_PROXYERROR: false,
    PROXY_STATE_UNAUTHENTICATED: false,
    Template: false,
    ConfigUtils: false
  },
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module"
  },
  plugins: [
    "mozilla",
    "verify-await"
  ],
  root: true,
  rules: {
    "verify-await/check": ["error", {
      "namedStaticMembers": [
        ["ChromeUtils", "import"],
        ["e", "preventDefault"],
        ["View", "close"],
      ],
      "syncFunctions": [
        "getStringPrefValue",
        "getTabOrActive",
        "overrideProp",
        "isProtocolSupported",
        "isWebsocket",
        "isLocal",
      ],
      "syncMethods": [
        // Is async but we never care about awaiting
        "openUrl",
        "formatAndOpenURL",
        // Static chrome code
        "getCharPref",
        "getIntPref",
        "addObserver",
        "removeObserver",
        "openPopup",
        "hidePopup",
        "getSettingsAPI",
        // Our code
        "toggleButtonClicked",
        "hideToggleButton",
        "showToggleButton",
        "showBack",
        "showSettings",
        "setState",
        "contentScriptNotify",
        "contentScriptConnected",
        "informContentScripts",
        "setProxyState",
        "isTabExempt",
        "removeExemptTab",
        "setTabIcon",
        "hasWellKnownData",
        "inactiveSteps",
        "increaseConnectionIsolation",
        "potentiallyEscape",
        "setOfflineAndStartRecoveringTimer",
        "getTranslation",
      ],
    }],
    "prettier/prettier": "off",

    "comma-dangle": ["off", "never"],
    "eqeqeq": "error",
    "no-console": "off",
    "no-unused-vars": ["error", {vars: "local", args: "none"}],
    "no-var": "error"
  }
};
