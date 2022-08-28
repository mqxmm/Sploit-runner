# cybersimple-app

App for conducting simple exercises at cyberpolygon. made with using <s>Vue.js + Electron.js</s>. (Upd) python + eel


![image](https://user-images.githubusercontent.com/79595418/187081734-5ffcbffc-a44e-42ee-90ba-0d63742fec2b.png)



Логика программы: Использовать веб-интерфейс для взаимодействия с Metasploit Framework, а точнее с MsfRPC.  




Список затупов и их решений в процессе разработки:

1. child_process отказывается выполнятся в составе [template] на странице Vue.

решение: Уйти от использования Vue. Взять eel модуль python.
мысли: Изначально планировалось, что вся работа с MsfRpc будет через JS и операторы child_process.exec(command). Но потом, то child_process с vue не дружит, хочет только внешние скрипты, окей. Ищем решение, находим готовый MsfRpc написанный уже на JS. Нуу, слишком сложно. Откатимся обратно к python.

UPD (21/08/2022): Закончил первую версию этого веб-приложения. Короче говоря, python для MsfRpc, html и css для красоты, а чтобы всё работало чистый JS.
