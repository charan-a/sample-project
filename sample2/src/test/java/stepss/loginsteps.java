package stepss;

import java.io.File;
import java.net.MalformedURLException;
import java.net.URL;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.remote.DesiredCapabilities;

import com.sun.tools.javac.util.List;

import cucumber.api.DataTable;
import cucumber.api.PendingException;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;
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
	
	@Given("^user entered search box$")
	public void user_entered_search_box() throws Throwable {
		driver.findElement(By.id("com.spellthem.webpages:id/action_settings")).click();
	}

	@And("^users enters \"([^\"]*)\" address$")
	public void users_enters_address(String arg1) throws Throwable {
		driver.findElement(By.id("com.spellthem.webpages:id/enterURL")).sendKeys("http://www.wikipedia.org");
	}

	@And("^user clicks go button and seelects english language$")
	public void user_clicks_go_button_and_seelects_english_language() throws Throwable {
		driver.findElement(By.id("com.spellthem.webpages:id/go")).click();
		driver.findElement(By.id("js-link-box-en")).click();
	}

	@When("^User navigates to wikipedia login website$")
	public void user_navigates_to_wikipedia_login_website() throws Throwable {
		driver.findElement(By.id("mw-mf-main-menu-button")).click();
		Thread.sleep(1000);
		driver.findElementByXPath("//android.view.View[@text='Log in']").click();
	}

	@When("^User enters \"([^\"]*)\" username$")
	public void user_enters_username(String arg1) throws Throwable {
		driver.findElement(By.id("wpName1")).sendKeys(arg1);
	}

	@When("^User enters valid password$")
	public void user_enters_valid_password(DataTable arg1) throws Throwable {
	    java.util.List<java.util.List<String>> data = arg1.raw(); 
		driver.findElement(By.id("wpPassword1")).sendKeys(data.get(1).get(1));
	}

	@And("^User clicks on the login button$")
	public void user_clicks_on_the_login_button() throws Throwable {
		driver.findElement(By.id("wpLoginAttempt")).click();
	}

	@Then("^User should be taken into succesful login page$")
	public void user_should_be_taken_into_succesful_login_page() throws Throwable {
		System.out.println("User should be taken into succesful login page");
	}

	@Then("^User should not be taken into succesful login page$")
	public void user_should_not_be_taken_into_succesful_login_page() throws Throwable {
		System.out.println("User should enter valid credentials");
	}


}
