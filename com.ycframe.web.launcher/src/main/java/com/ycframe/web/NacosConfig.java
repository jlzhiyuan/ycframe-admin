package com.ycframe.web;

import java.util.Map;
import java.util.Properties;
import java.util.Set;
import java.util.concurrent.Executor;

import com.alibaba.nacos.api.NacosFactory;
import com.alibaba.nacos.api.PropertyKeyConst;
import com.alibaba.nacos.api.config.ConfigService;
import com.alibaba.nacos.api.config.listener.Listener;
import com.ycframe.context.Context;
import com.ycframe.log.Logger;
import com.ycframe.log.LoggerFactory;
 
public class NacosConfig { 
	private static NacosConfig config;
	ConfigService configService = null;
	final Context context;
	Logger logger = LoggerFactory.getLogger("nacos Config");
	public NacosConfig(Context context){
		this.context = context;
	}
	private void listen(String dataId,String group) throws Exception{ 
		//content = configService.getConfig(dataId, group, 5000); 
		configService.addListener(dataId, group, new Listener() {
			@Override
			public void receiveConfigInfo(String configInfo) {
				logger.debug("recieve:" + configInfo);
				Map aparams = com.ycframe.web.utils.JsonUtils.toMap(configInfo); 
				context.getParams().putAll(aparams);
			}

			@Override
			public Executor getExecutor() {
				// TODO Auto-generated method stub
				return null;
			} 
		});
	}
	
	public static NacosConfig start(Context context,String serverAddr,String group,String dataId) throws Exception{
		if(config==null){
			config=new NacosConfig(context);  
			Properties properties = new Properties(); 
			properties.put(PropertyKeyConst.SERVER_ADDR, serverAddr);
			config.configService = NacosFactory.createConfigService(properties);
			config.listen(dataId,group);
		}
		return config;
	}
}
