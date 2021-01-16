$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/Sky_Blue.feature");
formatter.feature({
  "line": 2,
  "name": "Validate SkyPage Functionality",
  "description": "",
  "id": "validate-skypage-functionality",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@End2End"
    }
  ]
});
formatter.before({
  "duration": 8389147200,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "Set SkyBlue Background button exists",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDef.set_SkyBlue_Background_button_exists()"
});
formatter.result({
  "duration": 879069700,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "Sky Blue Background",
  "description": "",
  "id": "validate-skypage-functionality;sky-blue-background",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 7,
      "name": "@Scenario1"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I click on the button",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "The background color will change to sky blue in test/101",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDef.i_click_on_the_button()"
});
formatter.result({
  "duration": 2162978800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "101",
      "offset": 53
    }
  ],
  "location": "StepDef.the_background_color_will_change_to_sky_blue_in_test(int)"
});
formatter.result({
  "duration": 126004800,
  "status": "passed"
});
formatter.before({
  "duration": 5772209600,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "Set SkyBlue Background button exists",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDef.set_SkyBlue_Background_button_exists()"
});
formatter.result({
  "duration": 648421100,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "White Background Change",
  "description": "",
  "id": "validate-skypage-functionality;white-background-change",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 13,
      "name": "@Scenario2"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "Set SkyWhite Background button exists",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "I click on the Button",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "The background color will change to white",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDef.set_SkyWhite_Background_button_exists()"
});
formatter.result({
  "duration": 393112000,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.i_click_on_the_Button()"
});
formatter.result({
  "duration": 2117230700,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.the_background_color_will_change_to_white()"
});
formatter.result({
  "duration": 120774600,
  "status": "passed"
});
});