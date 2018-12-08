echo "# gsrstudy" 

* ###  VsCode launch.json 구성. 

{
    // IntelliSense를 사용하여 가능한 특성에 대해 알아보세요.  
    // 기존 특성에 대한 설명을 보려면 가리킵니다.  
    // 자세한 내용을 보려면 https://go.microsoft.com/fwlink/?linkid=830387을(를) 방문하세요.

    "version": "0.2.0",  
    "configurations": [  
        {  
            "type": "node",  
            "request": "launch",  
            "name": "프로그램 시작",  
            "program": "${file}",  
            "console": "integratedTerminal",
            "cwd":"${workspaceRoot}"  
        },  
        {  
            "type": "node",  
            "request": "attach",  
            "name": "Attach by Process ID",  
            "port": 9229  
        }          
    ]  
}  

------------------------------------------------------------------------------------------------

* express server 

1. npm install express-generator -g
2. express [프로젝트 디렉토리명]
3. cd [프로젝트 디렉토리명] && npm install
4. npm start!
/app.js : 기본페이지.
/bin/www.js : 포트설정.

http://localhost:3000로 실행.

------------------------------------------------------------------------------------------------

* ### 참고사이트 

https://khai01.blog.me/221355780296   Vscode Github 연동

http://nerv2000.tistory.com/105       Vscode 디버깅설정 1

http://khmirage.tistory.com/579       Vscode 디버깅설정 2

https://code.visualstudio.com/docs/nodejs/nodejs-debugging    VsCode 도움말


https://sergeswin.com/1013  마크다운언어 참고1

https://blog.kalkin7.com/2014/02/05/wordpress-markdown-quick-reference-for-koreans/   마크다운언어 참고 2

https://blog.kalkin7.com/2014/02/10/lets-write-using-markdown/   마크다운언어 참고 3

https://www.evernote.com/shard/s3/sh/128acb97-d3c5-4eda-aa1b-c71ecd2f3a15/54a14ebd5d4ce7507bf78e5af640d0e9  마크다운언어 참고 4


<마크다운언어 참고5>  
https://www.evernote.com/client/snv?noteGuid=128acb97-d3c5-4eda-aa1b-c71ecd2f3a15&noteKey=54a14ebd5d4ce7507bf78e5af640d0e9&sn=https%3A%2F%2Fwww.evernote.com%2Fshard%2Fs3%2Fsh%2F128acb97-d3c5-4eda-aa1b-c71ecd2f3a15%2F54a14ebd5d4ce7507bf78e5af640d0e9&title=000_%25EB%25A7%2588%25ED%2581%25AC%25EB%258B%25A4%25EC%259A%25B4%25EB%25B0%25B0%25EC%259A%25B0%25EA%25B8%25B0.txt

