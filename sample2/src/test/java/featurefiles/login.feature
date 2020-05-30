Feature: Login into account
	exisiting user should be able to login into account using valid credentials
Background:
	Given user entered search box
	And users enters "http://www.wikipedia.org" address
	And user clicks go button and seelects english language 
	When User navigates to wikipedia login website  
	
Scenario: Login into account with correct credentials 
	When User enters "CharanSreeVatsava" username
	And User enters valid password   
	| ;lkjhbnvbgcplk,jmgbnvkbkl,mnbv | 3333333334512313|
	| 652okjhgvfclkmjnbvc521.,@#$% | kI6cMb4M1i*$$X6JamlFtk3bD9#DOdRrJn%o |
	And User clicks on the login button 
	Then User should be taken into succesful login page

Scenario: Login into account with incorrect credentials 
	When User enters "someoneelse" username
	And User enters valid password
	| ;lkjhbnvbgcplk,jmgbnvkbkl,mnbv | 3333333334512313|
	| 652okjhgvfclkmjnbvc521.,@#$% | kI6cMb4M1i*$$X6JamlFtk3bD9#DOdRrJn%o |
	And User clicks on the login button 
	Then User should not be taken into succesful login page
