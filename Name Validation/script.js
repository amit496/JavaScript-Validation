    function validation()
    {
        // get the input box value
        let inputVal = document.getElementById('name').value.trim();
        // Regex value
        let nameRegex = /^[a-zA-Z\s]+$/;
        // Conditions
        if (inputVal === '')
        {
            document.getElementById('error').innerText = "Please enter the name.";
            document.getElementById('errorRow').style.display = "block";
            hideError();
            return false;
        }
        else if (inputVal.length < 3)
        {
            document.getElementById('error').innerText = "Please enter a valid name with at least 3 characters.";
            document.getElementById('errorRow').style.display = "block";
            hideError();
            return false;
        }
        else if (!nameRegex.test(inputVal))
        {
            document.getElementById('error').innerText = "Please enter a valid name with only alphabetic characters.";
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