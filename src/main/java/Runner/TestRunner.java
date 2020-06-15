package Runner;

import org.junit.runner.RunWith;
import cucumber.api.junit.Cucumber; //added this package manually to overcome (Cucumber.class) error
import cucumber.api.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "D:\\New Projects\\FreeCrmBDDFramework\\src\\main\\java\\Features",	//The path of featues file
		glue = {"stepDefinations"},	//The path of step definition file
		format = {"pretty", "html:test-output", "junit:junit_xml/cucumber.xml"},	//Used to generae different types of reporting
		monochrome = true,	//Display the console output in a proper readable format
		strict = true,	//It will check if any step is defined in step definition file
		dryRun = false	//To check the mapping is proper between feature and step definition file
		)


public class TestRunner {

}
