package com.ycframe.web.utils;

import com.ycframe.security.crypto.CryptoAdapter;
import com.ycframe.security.crypto.CryptoAdapterResult;
import com.ycframe.security.crypto.Decrypt;
import com.ycframe.security.crypto.Encrypt;
import com.ycframe.web.App;

public class PasswordUtils {
	/**
	 * 获取原密码
	 * @param code
	 * @param ecc
	 * @return
	 */
	public static String getUserPassword(String code)
	{ 
		CryptoAdapter dec = new com.ycframe.security.crypto.CryptoContextFacroty().getContext().getAdapter("rsa");
		String privateKey = (String) App.getApp().getContext().getParam("ycframe.crypto.rsa.privatekey");
		dec.setPrivateKey(privateKey);
		CryptoAdapterResult password = dec.Decrypt(code); 
		return password.getText(); 
	}
	
	/**
	 * 获取密码的密文
	 * @param code
	 * @param ecc
	 * @return
	 */
	public static String getScrectPassword(String password)
	{ 
		CryptoAdapter enc = new com.ycframe.security.crypto.CryptoContextFacroty().getContext().getAdapter("rsa");
		String publickey = (String) App.getApp().getContext().getParam("ycframe.crypto.rsa.publickey");
		enc.setPublicKey(publickey);
		String necc = enc.Encrypt(password);
		return necc;
	}

}
