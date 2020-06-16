$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("D:/New Projects/FreeCrmBDDFramework/src/main/java/Features/contacts.feature");
formatter.feature({
  "line": 1,
  "name": "Free CRM Create new contacts",
  "description": "",
  "id": "free-crm-create-new-contacts",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 3,
      "value": "#With Example keyword"
    }
  ],
  "line": 4,
  "name": "Free CRM Login Test Scenario",
  "description": "",
  "id": "free-crm-create-new-contacts;free-crm-login-test-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "User is already on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "title of login page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User clicks on Login button",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User is on homepage",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "User moves to contacts page",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "User clicks on New button",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "User enters contact details as \"\u003cfirstName\u003e\" and \"\u003claslName\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "User clicks on Save button",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 17,
  "name": "",
  "description": "",
  "id": "free-crm-create-new-contacts;free-crm-login-test-scenario;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "firstName",
        "lastName"
      ],
      "line": 19,
      "id": "free-crm-create-new-contacts;free-crm-login-test-scenario;;1"
    },
    {
      "cells": [
        "avinmark126@gmail.com",
        "test@123",
        "avin",
        "mark"
      ],
      "line": 20,
      "id": "free-crm-create-new-contacts;free-crm-login-test-scenario;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 20,
  "name": "Free CRM Login Test Scenario",
  "description": "",
  "id": "free-crm-create-new-contacts;free-crm-login-test-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "User is already on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "title of login page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User enters \"avinmark126@gmail.com\" and \"test@123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User clicks on Login button",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User is on homepage",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "User moves to contacts page",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "User clicks on New button",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "User enters contact details as \"avin\" and \"\u003claslName\u003e\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "User clicks on Save button",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefination.user_is_already_on_Login_Page()"
});
formatter.result({
  "duration": 22469922585,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.title_of_login_page_is_Free_CRM()"
});
formatter.result({
  "duration": 12388256,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "avinmark126@gmail.com",
      "offset": 13
    },
    {
      "val": "test@123",
      "offset": 41
    }
  ],
  "location": "LoginStepDefination.user_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 437632053,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_clicks_on_Login_button()"
});
formatter.result({
  "duration": 10078929426,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_is_on_homepage()"
});
formatter.result({
  "duration": 129565756,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_moves_to_contacts_page()"
});
formatter.result({
  "duration": 164304073,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_clicks_on_New_button()"
});
formatter.result({
  "duration": 5158884984,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "avin",
      "offset": 32
    },
    {
      "val": "\u003claslName\u003e",
      "offset": 43
    }
  ],
  "location": "LoginStepDefination.user_enters_contact_details_as_and(String,String)"
});
formatter.result({
  "duration": 66611570,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"*[name\u003d\u0027first_name\u0027]\"}\n  (Session info: chrome\u003d83.0.4103.106)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:25:48\u0027\nSystem info: host: \u0027DATTA\u0027, ip: \u0027192.168.56.1\u0027, os.name: \u0027Windows 8.1\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.3\u0027, java.version: \u00271.8.0_144\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 83.0.4103.106, chrome: {chromedriverVersion: 83.0.4103.39 (ccbf011cb2d2b..., userDataDir: C:\\Users\\Aakash\\AppData\\Loc...}, goog:chromeOptions: {debuggerAddress: localhost:63289}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 9b893719fff7b8722ddd8d9741b862af\n*** Element info: {Using\u003dname, value\u003dfirst_name}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByName(RemoteWebDriver.java:404)\r\n\tat org.openqa.selenium.By$ByName.findElement(By.java:284)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat stepDefinations.LoginStepDefination.user_enters_contact_details_as_and(LoginStepDefination.java:77)\r\n\tat ✽.Then User enters contact details as \"avin\" and \"\u003claslName\u003e\"(D:/New Projects/FreeCrmBDDFramework/src/main/java/Features/contacts.feature:13)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginStepDefination.user_clicks_on_Save_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefination.closeBrowser()"
});
formatter.result({
  "status": "skipped"
});
});