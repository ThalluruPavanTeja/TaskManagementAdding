$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/main/resources/feature/Priority.feature");
formatter.feature({
  "name": "Modify Priorities",
  "description": "\tIn order create a webpage\n\tAs a task manager\n\tI want to get access to the portal",
  "keyword": "Feature"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I have a browser \u0027ch\u0027 with Administration Page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.cts.stepdefinitions.PriorityStepDefinition.i_have_a_browser_with_Administration_Page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "addingPrioritiesTest",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I enter Priority as  \u0027New Priority\u0027 and clicking add button",
  "keyword": "When "
});
formatter.match({
  "location": "com.cts.stepdefinitions.PriorityStepDefinition.i_enter_Priority_as_and_clicking_add_button(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "\u0027New Priority\u0027 should be added in the Priority List",
  "keyword": "Then "
});
formatter.match({
  "location": "com.cts.stepdefinitions.PriorityStepDefinition.should_be_added_in_the_Priority_List(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I have a browser \u0027ch\u0027 with Administration Page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.cts.stepdefinitions.PriorityStepDefinition.i_have_a_browser_with_Administration_Page(java.lang.String)"
});
