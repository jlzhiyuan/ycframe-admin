package com.ycframe.tools;

import java.io.ByteArrayOutputStream;
import java.io.PrintWriter;
import java.util.Map;

import org.apache.commons.cli.CommandLine;
import org.apache.commons.cli.CommandLineParser;
import org.apache.commons.cli.DefaultParser;
import org.apache.commons.cli.HelpFormatter;
import org.apache.commons.cli.Option;
import org.apache.commons.cli.Options;

import com.ycframe.security.crypto.CryptoAdapter;

public class CryptoRsaTools {
	private static Options OPTIONS = new Options(); 
	private static String HELP_STRING = null;
	
	public static void main(String[] args) throws Exception {
		CommandLine commandLine = initCliArgs(args);
		if (commandLine.hasOption("e")) { 
	 		CryptoAdapter rsa = com.ycframe.security.crypto.CryptoContextFacroty.getContext().getAdapter("RSA");
	 		if(commandLine.hasOption("pub")){
	 			String publickey = commandLine.getOptionValue("pub");
	 			rsa.setPublicKey(publickey);
	 		}else{
	 			System.out.println(getHelpString());
				System.exit(0);
	 		}
	 		if(commandLine.hasOption("v")){
	 			String value = commandLine.getOptionValue("v");
	 			String password = rsa.Encrypt(value);
	 			System.out.println("加密");
	 			System.out.println(value+":"+password);
	 		}else{
	 			System.out.println(getHelpString());
				System.exit(0);
	 		}
	    }else

		if (commandLine.hasOption("d")) { 
	 		CryptoAdapter rsa = com.ycframe.security.crypto.CryptoContextFacroty.getContext().getAdapter("RSA");
	 		if(commandLine.hasOption("pri")){
	 			String privatekey = commandLine.getOptionValue("pri");
	 			rsa.setPrivateKey(privatekey);
	 		}else{
	 			System.out.println(getHelpString());
				System.exit(0);
	 		}
	 		if(commandLine.hasOption("v")){
	 			String value = commandLine.getOptionValue("v");
	 			String password = rsa.Encrypt(value);
	 			System.out.println("加密");
	 			System.out.println(value+":"+password);
	 		}else{
	 			System.out.println(getHelpString());
				System.exit(0);
	 		}
	     }if (commandLine.hasOption("g")) { 
	    	 CryptoAdapter rsa = com.ycframe.security.crypto.CryptoContextFacroty.getContext().getAdapter("RSA");
	    	 Map<String,String> keys = rsa.generateKey();
	    	 System.out.println("生成秘钥");
	 		 System.out.println("PrivateKey"+":"+ keys.get("PrivateKey"));
	 		 System.out.println("PublicKey"+":"+ keys.get("PublicKey"));
	     }else{
	    	System.out.println(getHelpString());
			System.exit(0);
	     }
	}
	
	private static CommandLine initCliArgs(String[] args) {
		CommandLineParser commandLineParser = new DefaultParser(); 
		OPTIONS.addOption(Option.builder("e").argName("enc").hasArg(false).longOpt("enc").type(String.class).desc("加密.").build());
		OPTIONS.addOption(Option.builder("pub").argName("publickey").hasArg(true).longOpt("publickey").type(String.class).desc("公钥.").build());
		OPTIONS.addOption(Option.builder("v").argName("value").hasArg(true).longOpt("value").type(String.class).desc("被加密字符.").build());
		
		OPTIONS.addOption(Option.builder("d").argName("dec").hasArg(false).longOpt("dec").type(String.class).desc("解密.").build());
		OPTIONS.addOption(Option.builder("pri").argName("privatekey").hasArg(true).longOpt("privatekey").type(String.class).desc("私钥.").build());

		OPTIONS.addOption(Option.builder("g").argName("genkey").hasArg(false).longOpt("genkey").type(String.class).desc("生成秘钥").build());

		try {
			CommandLine commandLine = commandLineParser.parse(OPTIONS, args);
			return commandLine;
		} catch (Exception e) {
			System.out.println(e.getMessage() + "\n" + getHelpString());
			System.exit(0);
		}
		return null;
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
