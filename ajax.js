console.log('hello');

let fetchbtn = document.getElementById('fetchbtn');
fetchbtn.addEventListener('click', buttonClickHandler);

function buttonClickHandler() {
  console.log('fetchbtn');
  const xhr = new XMLHttpRequest()
  //xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1');
       // post request
  xhr.open('POST', 'https://dummy.restapiexample.com/api/v1/create');
  xhr.getResponseHeader('Content-type','appliction/json')
  xhr.onprogress = function () {
    console.log('onprogress');
  };
  xhr.onload = function() {
    if (this.status == 200){
      console.log(this.responseText)
    }
    else {
      console.log('some error')
    }
  };
  //xhr.onreadystatechange=function(){
    //console.log('ready state is',xhr.readyState);
 // }
 params = '{"name":"test6","salary":"1236","age":"27"}';
  xhr.send(params);
  
}
