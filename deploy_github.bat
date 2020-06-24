@echo on
SET APP_HOME=C:\Users\u416183\lab\work\py\htmlLang\htmlLang
SET NODE=C:\Users\u416183\lab\work\py\htmlLang\htmlLang\infrastracture\node-v10.15.3-win-x64
SET PYTHON=C:\Users\u416183\lab\work\py\htmlLang\htmlLang\infrastracture\python\python37emb

start %windir%\system32\cmd.exe /k "%NODE%\node.exe %APP_HOME%\devtools\src\deploy_github.js"