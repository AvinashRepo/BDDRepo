Feature: Free CRM Login Feature


#Without Examples keyword
#Scenario: Free CRM Login Test Scenario

#Given User is already on Login Page
#When title of login page is Free CRM
#Then User enters "avinmark126@gmail.com" and "test@123"
#Then User clicks on Login button
#Then User is on homepage

#With Example keyword
Scenario Outline: Free CRM Login Test Scenario

Given User is already on Login Page
When title of login page is Free CRM
Then User enters "<username>" and "<password>"
Then User clicks on Login button
Then User is on homepage
Then Close the browser

Examples:

	| username | password |
	| avinmark126@gmail.com | test@123 |
	| tomparker123@gmail.com | test@1233|
