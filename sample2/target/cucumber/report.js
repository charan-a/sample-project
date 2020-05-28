$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "Login into account",
  "description": "exisiting user should be able to login into account using valid credentials",
  "id": "login-into-account",
  "keyword": "Feature"
});
formatter.before({
  "duration": 20030228000,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "Login into account with correct credentials",
  "description": "",
  "id": "login-into-account;login-into-account-with-correct-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "User navigates to wikipedia login website",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User enters valid username",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "User enters valid password",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User clicks on the login button",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User should be taken into succesful login page",
  "keyword": "Then "
});
formatter.match({
  "location": "loginsteps.user_navigates_to_wikipedia_login_website()"
});
formatter.result({
  "duration": 27292275700,
  "status": "passed"
});
formatter.match({
  "location": "loginsteps.user_enters_valid_username()"
});
formatter.result({
  "duration": 6214038000,
  "status": "passed"
});
formatter.match({
  "location": "loginsteps.user_enters_valid_password()"
});
formatter.result({
  "duration": 9360342901,
  "status": "passed"
});
formatter.match({
  "location": "loginsteps.user_clicks_on_the_login_button()"
});
formatter.result({
  "duration": 1687549100,
  "status": "passed"
});
formatter.match({
  "location": "loginsteps.user_should_be_taken_into_succesful_login_page()"
});
formatter.result({
  "duration": 238100,
  "status": "passed"
});
});