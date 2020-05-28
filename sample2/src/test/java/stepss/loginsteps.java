package stepss;

import java.io.File;
import java.net.MalformedURLException;
import java.net.URL;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.remote.DesiredCapabilities;

import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.appium.java_client.android.AndroidDriver;
import io.appium.java_client.android.AndroidElement;
import io.appium.java_client.remote.MobileCapabilityType;

public class loginsteps {
	AndroidDriver<AndroidElement> driver;
	@Before()
	public void  capabilities() throws MalformedURLException {
		File Dir = new File("src");
		File app = new File(Dir, "HybridApp.apk");
		DesiredCapabilities capabilities = new DesiredCapabilities();
		capabilities.setCapability("platformName","Android");
		capabilities.setCapability("deviceName", "Android Emulator");
		//capabilities.setCapability(MobileCapabilityType.NEW_COMMAND_TIMEOUT, "100");
	    capabilities.setCapability(MobileCapabilityType.APP, app.getAbsolutePath());
	    
	    this.driver = new AndroidDriver<>(new URL("http://127.0.0.1:4723/wd/hub"), capabilities);
		this.driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
		
	}
	
	@Given("User navigates to wikipedia login website")
	public void user_navigates_to_wikipedia_login_website() throws MalformedURLException, InterruptedException {
		
		driver.findElement(By.id("com.spellthem.webpages:id/action_settings")).click();
		driver.findElement(By.id("com.spellthem.webpages:id/enterURL")).sendKeys("http://www.wikipedia.org");
		driver.findElement(By.id("com.spellthem.webpages:id/go")).click();
		driver.findElement(By.id("js-link-box-en")).click();
		driver.findElement(By.id("mw-mf-main-menu-button")).click();
		/*Set<String> s=driver.getContextHandles();
		for(String handle : s)
			System.out.println(handle);*/
		Thread.sleep(1000);
		driver.findElementByXPath("//android.view.View[@text='Log in']").click();
	    
	}

	@Given("User enters valid username")
	public void user_enters_valid_username() {
		driver.findElement(By.id("wpName1")).sendKeys("CharanSreeVatsava");
	}

	@Given("User enters valid password")
	public void user_enters_valid_password() {
		driver.findElement(By.id("wpPassword1")).sendKeys("kI6cMb4M1i*$$X6JamlFtk3bD9#DOdRrJn%o");
	}

	@When("User clicks on the login button")
	public void user_clicks_on_the_login_button() {
		driver.findElement(By.id("wpLoginAttempt")).click();
	}

	@Then("User should be taken into succesful login page")
	public void user_should_be_taken_into_succesful_login_page() {
		System.out.println("User should be taken into succesful login page");
	}

}
