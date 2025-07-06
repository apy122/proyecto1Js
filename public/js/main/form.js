
//form data storage
export function formulario(){
    const loginForm = document.querySelector(".aside__login");
    if (!loginForm) return;

    const inputName = loginForm.querySelector("#name");
    const inputEmail = loginForm.querySelector("#email");
    const inputPassword = loginForm.querySelector("#password");
    const loginName = document.querySelector(".data__name");
    const btnLogout = document.querySelector(".data__logout");

    // Comprobar si hay un usuario guardado en localStorage
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
        const user = JSON.parse(storedUser);
        // Mostrar el nombre del usuario en el span
        if (loginName) {
            loginName.textContent = user.name;
        }
        // Ocultar el formulario de login
        if (loginForm) {
            loginForm.classList.add("aside__data--hide");
        }
        // Mostrar la sección de datos del usuario
        const asideData = document.querySelector(".aside__data");
        if (asideData) {
            asideData.classList.remove("aside__data--hide");
        }
    }else{
        loginForm.addEventListener("submit", (e) => {
        e.preventDefault();
        //recoger valores del formulario
        let name= inputName.value;
        let email= inputEmail.value;
        let password= inputPassword.value;
        //comprobar que no esten vacios
        if(name && email && password){
             //crear objeto usuario 
            let user={
                name: name,
                email: email,
                password: password
            };
            //guardar en localStorage
            localStorage.setItem("user", JSON.stringify(user));
            //vaciar formulario
            loginForm.reset();
            
            // Mostrar usuario y ocultar formulario
            const asideData = document.querySelector(".aside__data");
            if (asideData) {
                asideData.classList.remove("aside__data--hide");
                const nameSpan = asideData.querySelector(".data__name");
                if (nameSpan) {
                    nameSpan.textContent = user.name;
                }
                loginForm.classList.add("aside__data--hide");
            }
            console.log("Usuario guardado:", user); 
        }
       
    });
    }

    //Cerrar sesion
      let closeSession= document.querySelector(".data__logout");
    if (closeSession) {
        closeSession.addEventListener("click", () =>{
            let storageUser= localStorage.getItem("user");
            if(storageUser){
                localStorage.removeItem("user");
                console.log("sesion cerrada");
            }
            loginForm.classList.remove("aside__data--hide");
        })
    }
}