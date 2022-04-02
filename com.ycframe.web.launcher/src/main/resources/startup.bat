@rem ----------------------------------------------------------------------------
@rem 启动App的脚本
@rem
@rem 需要设置如下环境变量：
@rem
@rem    JAVA_HOME           - JDK的安装路径
@rem
@rem ----------------------------------------------------------------------------
@echo off
if "%OS%"=="Windows_NT" setlocal
TITLE Application
:CHECK_JAVA_HOME
if not "%JAVA_HOME%"=="" goto SET_APP_HOME

echo.
echo 错误: 必须设置环境变量“JAVA_HOME”，指向JDK的安装路径
echo.
goto END

:SET_APP_HOME
@rem set APP_HOME=%~dp0..
set APP_HOME=%cd%
if not "%APP_HOME%"=="" goto START_APP

echo.
echo 错误: 必须设置环境变量“APP_HOME”，指向App的安装路径
echo.
goto END

:START_APP


set DEFAULT_OPTS=-server -Xms256m -Xmx1024m -Xss20m

set DEFAULT_OPTS=%DEFAULT_OPTS% -javaagent:%APP_HOME%\ycframebootstrap.jar -Djava.library.path=%APP_HOME% 
set DEFAULT_OPTS=%DEFAULT_OPTS% -Dbolt.netty.buffer.high.watermark=6553600
set DEFAULT_OPTS=%DEFAULT_OPTS% -XX:+HeapDumpOnOutOfMemoryError -XX:+AggressiveOpts -XX:+UseParallelGC -XX:+UseBiasedLocking -XX:NewSize=64m
set DEFAULT_OPTS=%DEFAULT_OPTS% "-Dapp.home=%APP_HOME%"
set DEFAULT_OPTS=%DEFAULT_OPTS% "-Dapp.name=AppDemo"

set JAVA_EXE="%JAVA_HOME%\bin\java.exe"
set CLASSPATH=".\lib\*;."
set MAIN_CLASS="com.bxc.boot.App"

%JAVA_EXE% %DEFAULT_OPTS% -classpath %CLASSPATH% %MAIN_CLASS% %*

:END
if "%OS%"=="Windows_NT" endlocal
pause