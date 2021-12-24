const url = 'https://www.datos.gov.co/resource/bxnr-xb5i.json';

function instituciones(link, tipo) {
    fetch(link)
        .then(response => response.json())
        .then(data => {
            let element = document.getElementById(tipo);
            element.innerHTML = `<div>
        <p class="heading">${tipo}</p>
        <p class="title">${data.push()}</p>
    </div>`;
        });
}

instituciones(url + '?tipo=PUBLICA', 'PUBLICA');
instituciones(url + '?tipo=PRIVADA', 'PRIVADA');
instituciones(url, 'INSTITUCIONES');

function listInstituciones(link) {
    const tbody = document.getElementById('list');
    fetch(link)
        .then(response => response.json())
        .then(data => {
            tbody.innerHTML = '';
            for (let i = 0; i < data.length; i++) {
                let fila = tbody.insertRow();
                fila.insertCell().innerHTML = data[i].item;
                fila.insertCell().innerHTML = data[i].nombre;
                fila.insertCell().innerHTML = data[i].tipo;
                fila.insertCell().innerHTML = `
            <button onclick="verDatos(${data[i].item})" class="button">Ver mas...</button>
            `;
            }
        });
}

listInstituciones(url);

function verDatos(item) {
    fetch(url + '?item=' + item)
        .then(response => response.json())
        .then(data => {
            let element = document.getElementById('modal');
            element.innerHTML = `
        <div class="modal-background"></div>
        <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">${data[0].nombre}</p>
          <button class="delete" onclick="disposeModal()" aria-label="close"></button>
        </header>
        <section class="modal-card-body">
        <fieldset disabled>
  
        <div class="field">
          <label class="label">Item</label>
          <div class="control">
            <input class="input" type="text" value="${data[0].item}">
          </div>
        </div>
        
        <div class="field">
          <label class="label">Rector</label>
          <div class="control">
            <input class="input" type="email" value="${data[0].rector}">
          </div>
        </div>

        <div class="field">
          <label class="label">Dane</label>
          <div class="control">
            <input class="input" type="email" value="${data[0].dane}">
          </div>
        </div>

        <div class="field">
          <label class="label">Tipo</label>
          <div class="control">
            <input class="input" type="email" value="${data[0].tipo}">
          </div>
        </div>

        <div class="field">
          <label class="label">Zona</label>
          <div class="control">
            <input class="input" type="email" value="${data[0].zona}">
          </div>
        </div>

        <div class="field">
          <label class="label">Dirección</label>
          <div class="control">
            <input class="input" type="email" value="${data[0].direccion}">
          </div>
        </div>

        <div class="field">
          <label class="label">Barrio</label>
          <div class="control">
            <input class="input" type="email" value="${data[0].barrio}">
          </div>
        </div>

        <div class="field">
          <label class="label">Telefono</label>
          <div class="control">
            <input class="input" type="email" value="${data[0].telefono}">
          </div>
        </div>

        <div class="field">
          <label class="label">Correo corporativo</label>
          <div class="control">
            <input class="input" type="email" value="${data[0].correo_corporativo_ee}">
          </div>
        </div>

        <div class="field">
          <label class="label">Numero de sedes</label>
          <div class="control">
            <input class="input" type="email" value="${data[0].numero_sedes}">
          </div>
        </div>
        
        </fieldset>
        </section>
        <footer class="modal-card-foot">
        </footer>
      </div>`;
            var elemento = document.getElementById('modal');
            elemento.className += ' is-active ';
        });
}

function disposeModal() {
    var elemento = document.getElementById('modal');
    elemento.className = 'modal';
}