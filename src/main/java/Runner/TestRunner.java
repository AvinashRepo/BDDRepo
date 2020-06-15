package Runner;

import org.junit.runner.RunWith;
import cucumber.api.junit.Cucumber; //added this package manually to overcome (Cucumber.class) error
import cucumber.api.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "D:\\New Projects\\FreeCrmBDDFramework\\src\\main\\java\\Features",
		glue = {"stepDefinations"},
		format = {"pretty", "html:test-output"}
		)


public class TestRunner {

}
