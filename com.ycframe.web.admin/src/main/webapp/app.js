(function(){
	ycframe = window.ycframe || {};

	ycframe.web.setAppName("");  //webapp名称  无名称填空字符串
	

	ycframe.app = ycframe.app || {};
	ycframe.app.data = ycframe.app.data || {};
	ycframe.app.setAesKey(CryptoJS.lib.WordArray.random(128/8).toString(CryptoJS.enc.Hex));
	ycframe.web.setEncryptEnabled(false);
	var publickey = $$.RsaCrypt.getPublicKey();
	ycframe.web.setEncryptEnabled(true);
	ycframe.app.setRsaPublicKey(publickey);  // "MIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEAt5YyC+zY+qB4LUTp9ewB4VjOldfcZ1uT+/uwEqj0+ZU5a0dFizxraOErgbCHRWlHpBOFBLvO0agAye0N8E+4hal/uo67cT+n8XGc9wFdLydlgYVCr7qMheDZyMMwsiMIPofxJ3I3NH/hYUwGVzw1+hTRkKjJgIMk9F554FUKBjN0JfiQp1q3Vc8ELaOKUiX7Qt5afFlU5ZttV0s3vFQpjyTs3b1XqknA52QT/jLkPOtbDfmeMNTmTtAuyGJqNUYWw8JHPQrVbn+1gRyNn6oaioMN64VAzy1MtDvuivLNtdHurDpivb5DHRkRbSHwV930o5QklVC1WTECWyyRAFfITJRw9fB1c99wa426s0SQxkDI9a8nmuPJ2nRs5CR0ZsmntvhByLUpV/LOvBRcDC9x+G5wEWC6fsEP07Uhubfyr0bWjYU9peoeEid5iCjEtsNKgqUbqltSHeeRtLKN8ghyQLiqG4oB5hyXbvLz/PKQUTOwcliuGOT9aDlmcf6mYtdo6VyN87uZU9LGneAoP71AyxVL665fosFgbenzX3JFaBhpXpiX5AZrmWpoFvXRVmbLzTJ0F5o6jKxOkI89Wc489x36z1B91g22kJM2NuTmleJzHgpUCXGGkAqtXNvZYoGHLwi0OgnhB5m6yzibjX0kNCLFxmjCbdGqR3+M3eRLpXcCAwEAAQ=="
	//var modules = $$.modules.getComponent();
	//app.data.modules = modules.data;
	
	window.app = ycframe.app;
	window.ycframe = ycframe;
}
)()
