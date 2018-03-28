
$(document).ready(function ()
{

    /******************************************************/
    /*                                                    */
    /*               Validate Login Form                  */
    /*                                                    */
    /******************************************************/


    $("#loginForm").submit(function (event)
    {
        if( $("#username").val() === "" )
        {
            setUsernameError( "Enter Your Username" );
            event.preventDefault();
        }

        if( $("#password").val() === "" )
        {
            setPasswordError( "Enter Your Password" );
            event.preventDefault();
        }

    });

});


/******************************************************/
/*                                                    */
/*             Set Errors For Passwords               */
/*                                                    */
/******************************************************/

function setUsernameError( message )
{

    $("#username_error").empty();
    $("#username_error").append(message);
    $("#username_dom").addClass('is-invalid');

}

function setPasswordError( message )
{

    $("#password_error").empty();
    $("#password_error").append(message);
    $("#password_dom").addClass('is-invalid');

}

function RemoveGetParameter( url )
{
    if(typeof window.history.pushState === 'function')
    {
        window.history.pushState({},"HideGet", url );
    }

}