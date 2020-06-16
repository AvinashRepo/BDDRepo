package stepDefinations;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class LoginStepDefination {
	
	WebDriver driver;
	
	@Given("^User is already on Login Page$")
	public void user_is_already_on_Login_Page() throws InterruptedException  {
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\Aakash\\Downloads\\chromedriver\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.get("https://freecrm.co.in/");
		driver.manage().window().maximize();
		
		Thread.sleep(2000);
		
		WebElement logintn = driver.findElement(By.xpath("//span[contains(text(),'Log In')]"));
		logintn.click();
	}

	@When("^title of login page is Free CRM$")
	public void title_of_login_page_is_Free_CRM()  {
		String title = driver.getTitle();
		System.out.println(title);		
		Assert.assertEquals("Cogmento CRM", title);
	}

	@Then("^User enters \"(.*)\" and \"(.*)\"$")	//we use regular expression as \"(.*)\"
	public void user_enters_username_and_password(String username, String password) {
	driver.findElement(By.name("email")).sendKeys(username);
	driver.findElement(By.name("password")).sendKeys(password);
	}
	
	@Then("^User clicks on Login button$")
	public void user_clicks_on_Login_button() throws InterruptedException  {
		WebElement loginBtn = driver.findElement(By.xpath("//div[contains(text(),'Login')]"));
		loginBtn.click();
		Thread.sleep(10000);
	}


	@Then("^User is on homepage$")
	public void user_is_on_homepage()  {
		WebElement homeLnk = driver.findElement(By.xpath("//span[contains(text(),'Home')]"));
		if(homeLnk.isDisplayed()) {
			System.out.println("User is successfuly logged in");
		}else {
			System.out.println("Please enter valid credentials to login");
		}	
	}
	
	//Contacts page scenarios
	@Then("^User moves to contacts page$")
	public void user_moves_to_contacts_page()  {
	WebElement contactsLnk = driver.findElement(By.xpath("//span[contains(text(), 'Contacts')]"));
	contactsLnk.click();
	}

	@Then("^User clicks on New button$")
	public void user_clicks_on_New_button() throws InterruptedException  {
	WebElement newBtn = driver.findElement(By.xpath("//button[contains(text(), 'New')]"));
	newBtn.click();
	Thread.sleep(5000);
	}
	
	@Then("^User enters contact details as \"([^\"]*)\" and \"([^\"]*)\"$")
	public void user_enters_contact_details_as_and(String firstName, String lastName)  {
	driver.findElement(By.name("first_name")).sendKeys(firstName);
	driver.findElement(By.name("last_name")).sendKeys(lastName);
	}

	@Then("^User clicks on Save button$")
	public void user_clicks_on_Save_button()  {
	WebElement saveBtn = driver.findElement(By.xpath("//button[contains(text(), 'Save')]"));
	saveBtn.click();
	}

	@Then("^Close the browser$")
	public void closeBrowser() {
	driver.quit();
	}

	
}
