package com.ycframe.web.utils;

import com.ycframe.security.crypto.CryptoAdapterResult;
import com.ycframe.security.crypto.Decrypt;
import com.ycframe.security.crypto.Encrypt;

public class PasswordUtils {
	
	/**
	 * 获取原密码
	 * @param code
	 * @param ecc
	 * @return
	 */
	public static String getUserPassword(String code)
	{ 
		Decrypt dec = new com.ycframe.security.crypto.rsa2.RSAAdapter();
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
		Encrypt enc = new com.ycframe.security.crypto.rsa2.RSAAdapter();
		String necc = enc.Encrypt(password);
		return necc;
	}

}
