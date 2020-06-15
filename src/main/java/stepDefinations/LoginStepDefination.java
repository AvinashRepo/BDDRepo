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

	@Then("^User enters username and password and login$")
	public void user_enters_username_and_password() {
		WebElement username = driver.findElement(By.name("email"));
		username.sendKeys("avinmark126@gmail.com");
		WebElement password = driver.findElement(By.name("password"));
		password.sendKeys("test@123");
		WebElement loginBtn = driver.findElement(By.xpath("//div[contains(text(),'Login')]"));
		loginBtn.click();
	}

	@Then("^User is on homepage$")
	public void user_is_on_homepage()  {
		String title = driver.getTitle();
		System.out.println(title);
		Assert.assertEquals("Cogmento CRM", title);
	}

	
}
