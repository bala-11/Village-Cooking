var userLoggedData = [];

function userCheck(){
    const http = new XMLHttpRequest();
	http.open("GET",`http://localhost:5000/getusers`,true);
	http.setRequestHeader("Content-Type","application/json");
	http.send();
	http.onreadystatechange = function(){
		if(this.readyState == 4){
        	if(this.status == 200){
            userLoggedData = JSON.parse(this.responseText);
			console.log(userLoggedData);
            checkUser();
		}
	}
    event.preventDefault();
    }
}

function checkUser(){
    const name = document.querySelector("#name").value;
    const pwd = document.querySelector("#password").value;

    console.log(name,pwd);
    
    var flag = false;
    for(let key in userLoggedData){
        if(name == userLoggedData[key].username && pwd == userLoggedData[key].password ){
            flag = true;
        }
    }
    if(flag) {
        // alert(`Welcome ${name}`)
        location.replace("http://localhost:5000/main.html");
    }
    else{
        alert(`Invalid Credentials`);
        event.preventDefault();
    }
}