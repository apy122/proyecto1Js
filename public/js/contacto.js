

document.addEventListener("DOMContentLoaded", () => {
  const validation = new JustValidate(".main__contact");
  let isValidated=false;
  validation
    .addField("#nameform", [
      {
        rule: "required",
        errorMessage: "El nombre es obligatorio"
      },
      {
        rule: "minLength",
        value: 3,
        errorMessage: "El nombre es muy corto"
      },
      {
        rule: "maxLength",
        value: 25,
        errorMessage: "El nombre es demasiado largo"
      }
    ])
    .addField("#surname", [
      {
        rule: "required",
        errorMessage: "El apellido es obligatorio"
      },
      {
        rule: "minLength",
        value: 3,
        errorMessage: "El apellido es muy corto"
      },
      {
        rule: "maxLength",
        value: 15,
        errorMessage: "El apellido es demasiado largo"
      }
    ])
    .addField("#emailform", [
      {
        rule: "required",
        errorMessage: "El email es obligatorio"
      },
      {
        rule: "email",
        errorMessage: "formato no valido"
      }
    ])
    .addField("#gender", [
      {
        rule: "required",
        errorMessage: "El genero es obligatorio"
      }
    ])
    .addField("#birth", [
      {
        rule: "required",
        errorMessage: "El genero es obligatorio"
      }
    ])
     .addField("#years", [
      {
        rule: "required",
        errorMessage: "la edad es obligatorio"
      }
    ])
    .onSuccess(()=>{
      isValidated= true;
     const user= {
      nombre: document.querySelector("#nameform").value,
      apellido: document.querySelector("#surname").value,
      email: document.querySelector("#emailform").value,
      genero: document.querySelector("#gender").value,
      nacimiento: document.querySelector("#birth").value,
      edad: document.querySelector("#years").value
     };
     let userJson=JSON.stringify(user);
     console.log(userJson);
    });

   
});
