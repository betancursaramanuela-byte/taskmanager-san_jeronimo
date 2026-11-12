/*
 * Register View
 *
 * Responsabilidad:
 * - Mostrar la interfaz de registro.
 * - Capturar las acciones del usuario.
 * - Informar esas acciones al Presenter.
 *
 * NO contiene lógica de registro.
 */

export function showRegisterView(container, presenter) {
    container.innerHTML = `
        <section class="auth-container">
            <div class="auth-card">

                <header class="auth-header">
                    <h1>Crear cuenta</h1>
                    <p>Regístrate para comenzar IE San Jeronimo</p>
                </header>

                <form id="register-form" class="auth-form">
                    <label for="institucion">Institución Educativa</label>
                    <select id="institucion" name = "institucion" required>
                        <option value="" disabled selected>Selecciona tu institución educativa</option>
                        <option value="IE San Jeronimo">IE San Jeronimo</option>
                        <option value "IE San Lorenzo">IE San Lorenzo</option> 

                    </select>


                    <div class="form-group">
                        <label for="register-name">
                            Nombre
                        </label>

                        <input
                            type="text"
                            id="register-name"
                            name="name"
                            placeholder="ingrese su nombre"
                            required
                        >
                    </div>

                    
                    <label for="usuario">Tipo de Usuario</label>
                    <select id="usuario" name= "usuario" required>
                        <option value="" disabled selected> Su usuario es: </option>
                        <option value="Profesor">Profesor</option>
                        <option value "Estudiante">Estudiante</option>
                        <option value "Otro">Otro</option>
                    </select>

                    <label for="genero">genero</label>
                    <select id="genero" name= "genero" required>
                        <option value="" disabled selected>Seleccione su genero: </option>
                        <option value="Femenino">Femenino</option>
                        <option value "Masculino">Masculino</option>
                    </select>

                     
                        <div class = "form-group">
                            <label for = "register-email">
                              correo electronico 
                        </label>

                        <input
                            type="text"
                            id="register-email"
                            name="email"
                            placeholder="hdhahsd@gmail.com"
                            required
                        >
                    </div>
                    
                   <div class = "form-group">
                            <label for = "register-password">
                              contraseña 
                        </label>

                        <input
                            type="password"
                            id="register-password"
                            name="password"
                            placeholder="crea una contraseña"
                            required
                        >
                    </div>
                  <div class ="form-group">
                    <label class="checkbox-container">Activo</label>
                        <input type="checkbox" id="Activo" name= "Activo" value= "activo" checked>
                    </label>

                   </div>
                   
                   
                   
                    <button
                        type="submit"
                        class="btn btn-success"
                    >
                        Crear cuenta
                    </button>

                </form>

                <div class="auth-footer">

                    <p>¿Ya tienes una cuenta?</p>

                    <button
                        id="show-login"
                        class="button button-link"
                        type="button"
                    >
                        Iniciar sesión
                    </button>

                </div>

                <p
                    id="register-message"
                    class="form-message"
                ></p>

            </div>

        <!-- Modal -->
        <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog">
        <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="staticBackdropLabel">Registro Usuario</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <p> <strong> institucion</strong><span id = "confirmIE" </span> </p>
       <p> <strong> name</strong><span id= "confirmnombre" </span> </p>
        <p> <strong> usuario</strong><span id ="confirmusuario" </span> </p>
         <p> <strong> genero</strong><span id ="confirmgenero" </span> </p>
          <p> <strong> email</strong><span id= "confirmcorreo" </span> </p>
           <p> <strong> password</strong><span id ="confirmcontraseña" </span> </p>
            <p> <strong> Activo </strong><span id ="confirmactivo" </span> </p>
           
            
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" 
        data-bs-dismiss="modal">Close</button>
        <button type="button" id="btn-confirmar" class="btn btn-primary">confirmar</button>

      </div>
    </div>
  </div>
</div>

        </section>
    `;

    const registerForm =
        document.getElementById("register-form");

    registerForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const formData = new FormData(registerForm);
        const modalElement = document.getElementById("staticBackdrop");
        const Modal = new bootstrap.Modal(modalElement);
        const userData = {

           institucion: formData.get("institucion"),
            name: formData.get("name"),
            usuario: formData.get("usuario"),
            genero: formData.get("genero"),
            email: formData.get("email"),
            password: formData.get("password"),
            Activo: formData.get("Activo")
        };

       document.getElementById("confirmIE").textContent = userData.institucion;
        document.getElementById("confirmnombre").textContent = userData.name;
         document.getElementById("confirmusuario").textContent = userData.usuario;
          document.getElementById("confirmgenero").textContent = userData.genero;
           document.getElementById("confirmcorreo").textContent = userData.email;
            document.getElementById("confirmcontraseña").textContent = "*******";
             document.getElementById("confirmactivo").textContent = userData.Activo;

             registerForm.dataset.userData=JSON.stringify(userData);

             Modal.show();
             //presenter.register(userData);

    });
    document.getElementById("btn-confirmar").addEventListener("click", ()=>{
        const userData = JSON.parse(registerForm.dataset.userData);


        presenter.register(userData);
        const modalId = document.getElementById("staticBackdrop");
        const modal = bootstrap.Modal.getOrCreateInstance(modalId);
        modal.hide();

    });


    const loginButton =
        document.getElementById("show-login");

    loginButton.addEventListener("click", () => {
        presenter.showLogin();
    });
    
}

export function showRegisterMessage(message,alert="success") {
    const messageElement =
        document.getElementById("register-message");

    if (messageElement) {
        messageElement.innerHTML = `
        <div class="alert alert-${alert} role="alert">
          ${message}
      </div>
       `  
    }
}