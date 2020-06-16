package Runner;

import org.junit.runner.RunWith;
import cucumber.api.junit.Cucumber; //added this package manually to overcome (Cucumber.class) error
import cucumber.api.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "D:\\New Projects\\FreeCrmBDDFramework\\src\\main\\java\\Features\\contacts.feature",	//The path of features file
		glue = {"stepDefinations"},	//The path of step definition file
		format = {"pretty", "html:test-output", "junit:junit_xml/cucumber.xml"},	//Used to generate different types of reporting
		monochrome = true,	//Display the console output in a proper readable format
		strict = false,	//It will check if any step is not defined in step definition file, if any step is not defined then execution will fail
		dryRun = false	//To check the mapping is proper between feature and step definition file
		)


public class TestRunner {

}
