Feature: Free CRM Create new contacts

#With Example keyword
Scenario Outline: Free CRM Login Test Scenario

Given User is already on Login Page
When title of login page is Free CRM
Then User enters "<username>" and "<password>"
Then User clicks on Login button
Then User is on homepage
Then User moves to contacts page
Then User clicks on New button
Then User enters contact details as "<firstName>" and "<laslName>"
Then User clicks on Save button
Then Close the browser

Examples:

	| username | password | firstName | lastName |
	| avinmark126@gmail.com | test@123 | avin | mark |

	
