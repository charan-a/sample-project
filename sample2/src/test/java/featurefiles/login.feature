Feature: Login into account
	exisiting user should be able to login into account using valid credentials
Scenario: Login into account with correct credentials 
	Given User navigates to wikipedia login website  
	And User enters valid username  
	And User enters valid password  
	When User clicks on the login button 
	Then User should be taken into succesful login page
	
	
