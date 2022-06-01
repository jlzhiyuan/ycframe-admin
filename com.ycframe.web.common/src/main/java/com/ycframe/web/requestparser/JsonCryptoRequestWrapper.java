package com.ycframe.web.requestparser;
 

import java.io.BufferedReader;
import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.io.InputStreamReader;
import javax.servlet.ReadListener;
import javax.servlet.ServletInputStream;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletRequestWrapper;

import org.apache.commons.io.IOUtils;

import com.ycframe.log.Logger;
import com.ycframe.log.LoggerFactory;
import com.ycframe.security.crypto.CryptoAdapter;
import com.ycframe.security.crypto.CryptoAdapterResult;
import com.ycframe.utils.StringUtils;

 
public class JsonCryptoRequestWrapper extends HttpServletRequestWrapper {

	CryptoAdapter adapter = null;
	CryptoAdapter aesadapter = null;
	Logger log = LoggerFactory.getLogger(JsonCryptoRequestWrapper.class);
    private final byte[] body;
 
    public JsonCryptoRequestWrapper(HttpServletRequest request,String pkey) throws IOException{
    	 super(request);
    	 
    	 com.ycframe.security.crypto.CryptoContextFacroty.getContext().getDecrypt("rsa");
    	 adapter =  com.ycframe.security.crypto.CryptoContextFacroty.getContext().getAdapter("rsa");
	    adapter.setPrivateKey(pkey);
	    aesadapter = com.ycframe.security.crypto.CryptoContextFacroty.getContext().getAdapter("ace");
	    aesadapter.setPrivateKey("1234567890987654");
         this.body = read(request); 
	}
	
    public byte[] getBody() {
        return body;
    }

    @Override
    public ServletInputStream getInputStream()  {
        final ByteArrayInputStream bais = new ByteArrayInputStream(body);
        return new ServletInputStream() {
            public boolean isFinished() {
                return false;
            } 
            public boolean isReady() {
                return false;
            } 
            @Override
            public int read(){
                return bais.read();
            }
			@Override
			public void setReadListener(ReadListener readListener) {
				// TODO Auto-generated method stub
				
			}
        };
    }

    @Override
    public BufferedReader getReader(){
        return new BufferedReader(new InputStreamReader(this.getInputStream()));
    }

    private byte[] read(HttpServletRequest request) throws IOException {
    	BufferedReader reader =  new BufferedReader(new InputStreamReader(request.getInputStream()));
     
		StringBuilder result = new StringBuilder();
		try {  
			for (String line; (line = reader.readLine()) != null;) {
				result.append(line);
			}
		}  finally {
			if (reader != null)
				try {
					reader.close();
				} catch (IOException e) { 
				}
		}
		String str = result.toString();
		
        ServletInputStream inputStream = request.getInputStream();
        byte[] read = IOUtils.toByteArray(inputStream);
        //CryptoAdapterResult cryresult = adapter.Decrypt(str);
        String enaeskey = request.getHeader("aeskey");
        if("false".equals(enaeskey) || StringUtils.isBlank(enaeskey)){
        	return read;
        }
        CryptoAdapterResult rsacryresult = adapter.Decrypt(enaeskey); 
        if(rsacryresult==null){
        	log.info("解密错误。");
        	return read;
        }
        aesadapter.setPrivateKey(rsacryresult.getText());
        CryptoAdapterResult cryresult = aesadapter.Decrypt(str);
         
        if(cryresult==null){
        	log.info("解密错误。");
        	return read;
        }else{
        	//String tvalue=java.net.URLDecoder.decode(cryresult.getText(),"UTF-8");
        	return IOUtils.toByteArray(cryresult.getText());
        } 
    }
} 