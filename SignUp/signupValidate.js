window.onload = function () {
    const form = document.getElementById('signup-form');
    const user = document.getElementById('user');
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    
    user.addEventListener('input', createListener(isValidUser));
    name.addEventListener('input', createListener(isValidName));
    email.addEventListener('input', createListener(isValidEmail));
    password.addEventListener('input', createListener(isValidPassword));

    const fields = {
        user: false,
        name: false,
        email: false,
        password: false
    }
    
    console.table(fields);

    function isValidUser(user) {
        return /^[a-z]+$/.test(user);
    }

    function isValidName(name) {
        return /^([A-Z][a-z]+([ ]?[a-z]?['-]?[A-Z][a-z]+)*)$/.test(name);
    }

    function isValidEmail(email) {
        return /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/.test(email);
    }

    function isValidPassword(password) {
        return /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/.test(password);
    }

    function createListener(validator) {
        return e => {
            const input = e.target;
            const text = e.target.value;
            const valid = validator(text);
            const showTip = text == "" || !valid;
            const toolTip = e.target.nextElementSibling;
            showOrHideTip(showTip, toolTip, input);
        };
    }

    function showOrHideTip(show, element, input) {
        if (show) {
            element.style.visibility = 'visible';
            input.style.borderBottom = '2px solid var(--background-dark-blue)';
        } else {  
            element.style.visibility = 'hidden';
            input.style.borderBottom = 'transparent';
            console.log('Running');
            fields[input.name] = true;
            console.table(fields);
        }
    }

    form.addEventListener('submit', (e) => {
        if (fields.user == false && fields.name == false && fields.email == false && fields.password == false) {
            e.preventDefault();
        } else {
            form.submit();
        }
    });

}