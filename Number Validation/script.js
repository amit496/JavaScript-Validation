    
    function validation()
    {
        // get the input box value
        let inputVal = document.getElementById('contact').value;
        console.log(inputVal);
        
        // Regex value
        let numberRegex = /[0-9]+/;
        // Conditions
        if (inputVal === '')
        {
            document.getElementById('error').innerText = "Please enter the contact number.";
            document.getElementById('errorRow').style.display = "block";
            hideError();
            return false;
        }
        else if (inputVal.length != 10)
        {
            document.getElementById('error').innerText = "Contact number should be 10 digits.";
            document.getElementById('errorRow').style.display = "block";
            hideError();
            return false;
        }
        else if (!numberRegex.test(inputVal))
        {
            document.getElementById('error').innerText = "Please enter a valid contact number.";
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