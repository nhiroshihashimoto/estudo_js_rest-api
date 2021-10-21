(()=>{
    'use strict';

    function postMethod(){
        var ajax = new XMLHttpRequest();
        ajax.open('POST', 'http://localhost:3000/user');
        ajax.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
        ajax.send('username=roberta&name=Roberta&age=25');

        ajax.onreadystatechange = (e)=>{
            if(ajax.readyState === 4){
                console.log('Cadastrando usuário');
                console.log(ajax.responseText);
            }
        }
    }
    

    function getMethod(){
        var ajax = new XMLHttpRequest();
        ajax.open('GET', 'http://localhost:3000/user/roberta');
        ajax.send();
        ajax.addEventListener('readystatechange',(e)=>{
            if(ajax.readyState === 4 ){
                //console.log(ajax.responseText);
            }
        }, false);
    
        ajax.onreadystatechange = (e)=>{
            if(ajax.readyState === 2){
                console.log('header ok');
                ajax.abort();
            }
        }
    
        ajax.onreadystatechange = (e)=>{
            if( ajax.readyState === 4 ){
                console.log(ajax.responseText, ajax.status);
            }
        };
    }

    postMethod();
    setTimeout(()=>{
        getMethod();
    }, 1000);

})();