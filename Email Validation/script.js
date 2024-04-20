function validation()
    {
        // get the input box value
        let inputVal = document.getElementById('email').value;
        // Regex value
        let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        // Conditions
        if (inputVal == '')
        {
            document.getElementById('error').innerText = "Please enter the email.";
            document.getElementById('errorRow').style.display = "block";
            hideError();
            return false;
        }
        else if (!emailRegex.test(inputVal))
        {
            document.getElementById('error').innerText = "Please enter a valid email.";
            document.getElementById('errorRow').style.display = "block";
            hideError();
            return false;
        }
        else
        {
            document.getElementById('success').innerText = 'You Enter ' + inputVal;
            document.getElementById('successRow').style.display = "block";
            return true;
        }
    }
    // Hide error message
    function hideError()
    {
        setTimeout(function() {
            document.getElementById('errorRow').style.display = "none";
        }, 5000);
    }