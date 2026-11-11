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
                        class="button button-primary"
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
        </section>
    `;

    const registerForm =
        document.getElementById("register-form");

    registerForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const formData = new FormData(registerForm);

        const userData = {
           institucion: formData.get("institucion"),
            name: formData.get("name"),
            usuario: formData.get("usuario"),
            genero: formData.get("genero"),
            email: formData.get("email"),
            password: formData.get("password"),
            Activo: formData.get("Activo")
        };
        debugger;
        presenter.register(userData);
    });

    const loginButton =
        document.getElementById("show-login");

    loginButton.addEventListener("click", () => {
        presenter.showLogin();
    });
}

export function showRegisterMessage(message) {
    const messageElement =
        document.getElementById("register-message");

    if (messageElement) {
        messageElement.textContent = message;
    }
}