const xml = new XMLHttpRequest();

function onRequestHandler(){
    if(this.readyState===4 && this.status===200){
        console.log(this.response); //ver información en consola
        
        //INFORMACION EN FORMATO JSON
        const data = JSON.parse(this.response);
        //console.log(data);
        const HTMLResponse = document.querySelector("#app");
        //obteniendo los datos que se requieren
        const tpl = data.map(user => `<li>Nombre: ${user.name}<br>Correo: ${user.email}</li>`); 
        HTMLResponse.innerHTML = `<ul>${tpl}</ul>`;
    }
    
}
xml.addEventListener('load', onRequestHandler);
xml.open('GET', 'http://sonaravl.com/webservices/GET_LastLocation');
xml.send();
