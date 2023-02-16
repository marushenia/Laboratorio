 <script type="text/javascript">
    
    const form= document.getElementById("form");
    const nombre = document.getElementById("nombre");
    const email = document.getElementById("email");
    const pass1 = document.getElementById("pass1");
    const pass2 = document.getElementById("pass2");

    form.addEventListener("submit", e => {
        e.preventDefault();
        validarInputs();
    });

    const setError = (element, message) => {
        const inputControl = element.parentElement;
        const errorDisplay = inputControl.querySelector(".error");
  
        errorDisplay.innerText = message;
        inputControl.classList.add("error");
        inputControl.classList.remove("success");
    };
    
    const setSucces = element => {
        const inutControl = element.parentElement;
        const errorDisplay = inputControl.querySelector(".error");
  
        errorDisplay.innterText = "";
        inputControl.classList.add("success");
        inputControl.classList.remove("error");
    };

    const isValidEmail = email => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    };

    const validateInputs = () => {
        const nombreValue = nombre.value.trim();
        const emailValue = email.value.trim();
        const pass1Value = pass1.value.trim();
        const pass2Value = pass2.value.trim();

        if (nombreValue === ""){
        setError(nombre, "Rellene este campo");
        } 
        else {
        setSucces(nombre);
        }
 
        if (emailValue === "") {
        setError(email, "Rellene este campo")
        } else if (!isValidEmail(emailValue)) {
            setError(email,"Email inválido");
        }  
        else {
        setSucces(email);
        }
        
        if (pass1Value === "") {
        setError(pass1, "Rellene este campo");
        } else if (pass1Value.lenght < 8){
            setError(pass1, "Debe contener al menos 8 caracteres");
        } 
        else {
        setSucces(pass1);
        }

        if(pass2Value === "") {
        setError(pass2, "Rellene este campo");
        } else if (pass2Value !== pass1Value) {
            setError(pass2, "Las contraseñas no coinciden");
        } else {
        setSuccess(pass2);
        }
    };
              
            </script>
