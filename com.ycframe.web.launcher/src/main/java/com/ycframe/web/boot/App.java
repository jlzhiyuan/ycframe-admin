package com.ycframe.web.boot;

import java.io.ByteArrayOutputStream;
import java.io.PrintWriter;
import java.util.Properties;

import org.apache.commons.cli.CommandLine;
import org.apache.commons.cli.CommandLineParser;
import org.apache.commons.cli.DefaultParser;
import org.apache.commons.cli.HelpFormatter;
import org.apache.commons.cli.Option;
import org.apache.commons.cli.Options;
import org.flywaydb.core.Flyway;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.web.servlet.ServletComponentScan;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.ImportResource;
import com.ycframe.boot.AbstractApplication;
import com.ycframe.boot.event.Event;
import com.ycframe.database.Manager;
import com.ycframe.web.NacosConfig; 

@EnableAutoConfiguration
@ServletComponentScan  
@ImportResource("applicationContext.xml")
public class App extends AbstractApplication {
	public App() {

	}

	private static Options OPTIONS = new Options();
	private static CommandLine commandLine;
	private static String HELP_STRING = null;
	public static ApplicationContext applicationContext;

	public static void main(String[] args) throws Exception {   
		initCliArgs(args); 
		Manager man = new Manager(); 
		Flyway primaryFlyway = Flyway.configure().dataSource(man.getDataSource())
				.cleanDisabled(true).baselineOnMigrate(true).load();
        primaryFlyway.migrate();
     
		com.ycframe.boot.Application aplication = new com.ycframe.boot.Application(App.class);

		if (commandLine.hasOption("c")) {
			final String configserveraddress = commandLine.getOptionValue('c');
			
			aplication.addPreparedEvent(new Event(){
				@Override
				public void onEvent(com.ycframe.boot.ApplicationContext context)
						throws Exception {
					NacosConfig config = NacosConfig.start(context,configserveraddress,"group","dataid"); 
				}
			}); 		} 
		if (commandLine.hasOption("D")) {
			Properties pts = commandLine.getOptionProperties("D");
			System.setProperties(pts);
		} 
		aplication.run(args);
		
		Runtime.getRuntime().addShutdownHook(new Thread(new Runnable() {
			@Override
			public void run() {
			}
		}, "YCFrame-ShutdownHook"));
	}

	private static void initCliArgs(String[] args) {
		CommandLineParser commandLineParser = new DefaultParser();
		// help
		OPTIONS.addOption("help", "usage help");

		OPTIONS.addOption(Option.builder("manager").argName("manager").hasArg(false).longOpt("manager")
				.type(String.class).desc("startup manager service.").build());
		OPTIONS.addOption(Option.builder("worker").argName("worker").hasArg(false).longOpt("worker").type(String.class)
				.desc("startup worker service.").build());
		OPTIONS.addOption(Option.builder("job").argName("job").hasArg(false).longOpt("job").type(String.class)
				.desc("startup job service.").build());
		// OPTIONS.addOption(Option.builder("r").argName("runningtype").hasArg(true).longOpt("runningtype").type(String.class).desc("singleton
		// or cluster").build());
		OPTIONS.addOption(Option.builder("c").argName("address:port").hasArg(true).longOpt("configserver")
				.type(String.class).desc("config server address.").build());
		OPTIONS.addOption(Option.builder("jobcluster").argName("").hasArg(false).longOpt("jobcluster")
				.type(String.class).desc("job startup on cluster mode.").build());

		Option property = Option.builder("P").argName("property=value").numberOfArgs(2).valueSeparator()
				.longOpt("properties").desc("use value for given property(property=value)").build();

		OPTIONS.addOption(property);

		// OPTIONS.addOption(Option.builder("s").argName("service").required().hasArg(true).longOpt("service").type(String.class).desc("startup
		// Manager or Worker or job").build());

		// OptionGroup optionGroup = new OptionGroup();
		// optionGroup.addOption(new Option("manager", "Manager Web startup."));
		// optionGroup.addOption(new Option("worker", "Worker startup."));
		// optionGroup.addOption(new Option("job", "JobExcuter starup."));
		// optionGroup.setRequired(true);
		// OPTIONS.addOptionGroup(optionGroup);

		// OPTIONS.addOption(Option.builder("t").argName("Manager or
		// Worker").required().hasArg(true).longOpt("host").type(String.class).desc("the
		// host of remote server").build());
		// OPTIONS.addOption(Option.builder("P").hasArg(true).longOpt("port").type(Short.TYPE).desc("the
		// port of remote server").build());
		// OPTIONS.addOption(Option.builder("u").hasArg(true).longOpt("user").type(String.class).desc("the
		// user of remote server").build());
		// OPTIONS.addOption(Option.builder("p").hasArg(true).longOpt("password").type(String.class).desc("the
		// password of remote server").build());
		try {
			commandLine = commandLineParser.parse(OPTIONS, args);
		} catch (Exception e) {
			System.out.println(e.getMessage() + "\n" + getHelpString());
			System.exit(0);
		}

	}

	private static String getHelpString() {
		if (HELP_STRING == null) {
			HelpFormatter helpFormatter = new HelpFormatter();

			ByteArrayOutputStream byteArrayOutputStream = new ByteArrayOutputStream();
			PrintWriter printWriter = new PrintWriter(byteArrayOutputStream);
			helpFormatter.printHelp(printWriter, HelpFormatter.DEFAULT_WIDTH, "command -help", null, OPTIONS,
					HelpFormatter.DEFAULT_LEFT_PAD, HelpFormatter.DEFAULT_DESC_PAD, null);
			printWriter.flush();
			HELP_STRING = new String(byteArrayOutputStream.toByteArray());
			printWriter.close();
		}
		return HELP_STRING;
	}
 
}
