$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "Login into account",
  "description": "exisiting user should be able to login into account using valid credentials",
  "id": "login-into-account",
  "keyword": "Feature"
});
formatter.before({
  "duration": 22581620900,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "user entered search box",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "users enters \"http://www.wikipedia.org\" address",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "user clicks go button and seelects english language",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User navigates to wikipedia login website",
  "keyword": "When "
});
formatter.match({
  "location": "loginsteps.user_entered_search_box()"
});
formatter.result({
  "duration": 675105800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://www.wikipedia.org",
      "offset": 14
    }
  ],
  "location": "loginsteps.users_enters_address(String)"
});
formatter.result({
  "duration": 10078080900,
  "status": "passed"
});
formatter.match({
  "location": "loginsteps.user_clicks_go_button_and_seelects_english_language()"
});
formatter.result({
  "duration": 8963684100,
  "status": "passed"
});
formatter.match({
  "location": "loginsteps.user_navigates_to_wikipedia_login_website()"
});
formatter.result({
  "duration": 10497963200,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "Login into account with correct credentials",
  "description": "",
  "id": "login-into-account;login-into-account-with-correct-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 10,
  "name": "User enters \"CharanSreeVatsava\" username",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User enters valid password",
  "rows": [
    {
      "cells": [
        ";lkjhbnvbgcplk,jmgbnvkbkl,mnbv",
        "3333333334512313"
      ],
      "line": 12
    },
    {
      "cells": [
        "652okjhgvfclkmjnbvc521.,@#$%",
        "kI6cMb4M1i*$$X6JamlFtk3bD9#DOdRrJn%o"
      ],
      "line": 13
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User clicks on the login button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User should be taken into succesful login page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "CharanSreeVatsava",
      "offset": 13
    }
  ],
  "location": "loginsteps.user_enters_username(String)"
});
formatter.result({
  "duration": 5155709900,
  "status": "passed"
});
formatter.match({
  "location": "loginsteps.user_enters_valid_password(DataTable)"
});
formatter.result({
  "duration": 10102768400,
  "status": "passed"
});
formatter.match({
  "location": "loginsteps.user_clicks_on_the_login_button()"
});
formatter.result({
  "duration": 1877823600,
  "status": "passed"
});
formatter.match({
  "location": "loginsteps.user_should_be_taken_into_succesful_login_page()"
});
formatter.result({
  "duration": 231000,
  "status": "passed"
});
formatter.before({
  "duration": 19877527700,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "user entered search box",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "users enters \"http://www.wikipedia.org\" address",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "user clicks go button and seelects english language",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User navigates to wikipedia login website",
  "keyword": "When "
});
formatter.match({
  "location": "loginsteps.user_entered_search_box()"
});
formatter.result({
  "duration": 435400900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://www.wikipedia.org",
      "offset": 14
    }
  ],
  "location": "loginsteps.users_enters_address(String)"
});
formatter.result({
  "duration": 8336385300,
  "status": "passed"
});
formatter.match({
  "location": "loginsteps.user_clicks_go_button_and_seelects_english_language()"
});
formatter.result({
  "duration": 9100465000,
  "status": "passed"
});
formatter.match({
  "location": "loginsteps.user_navigates_to_wikipedia_login_website()"
});
formatter.result({
  "duration": 8940431400,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Login into account with incorrect credentials",
  "description": "",
  "id": "login-into-account;login-into-account-with-incorrect-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 18,
  "name": "User enters \"someoneelse\" username",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "User enters valid password",
  "rows": [
    {
      "cells": [
        ";lkjhbnvbgcplk,jmgbnvkbkl,mnbv",
        "3333333334512313"
      ],
      "line": 20
    },
    {
      "cells": [
        "652okjhgvfclkmjnbvc521.,@#$%",
        "kI6cMb4M1i*$$X6JamlFtk3bD9#DOdRrJn%o"
      ],
      "line": 21
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "User clicks on the login button",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "User should not be taken into succesful login page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "someoneelse",
      "offset": 13
    }
  ],
  "location": "loginsteps.user_enters_username(String)"
});
formatter.result({
  "duration": 6337745100,
  "status": "passed"
});
formatter.match({
  "location": "loginsteps.user_enters_valid_password(DataTable)"
});
formatter.result({
  "duration": 8025444000,
  "status": "passed"
});
formatter.match({
  "location": "loginsteps.user_clicks_on_the_login_button()"
});
formatter.result({
  "duration": 1563238600,
  "status": "passed"
});
formatter.match({
  "location": "loginsteps.user_should_not_be_taken_into_succesful_login_page()"
});
formatter.result({
  "duration": 136400,
  "status": "passed"
});
});