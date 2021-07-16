# Login

    => "/signin" POST request
    => email and password will be send to the backend and return with the user and auth token
    => else error will be returned
    ## navigate to the home page

# Create user

    => "/createnewuser" POST request
    => First name
    => Last name
    => Phone number
    => password
    => password confirmation
    => email
    => Company
    => Address
    ## send this to the backend and navigate to the login page.

# Create Application

    => "/createapplication" POST request
    => Compnay
    => image form of the application
    => description
    => requirements -> text field to contain the users learning area, degree, and others..
    => text field -> text field for the applicant to write about himself.
    => input fields for the requirements.
    ## navigate to the home page containing all the applications

# User Home page

    => "/userhomepage" GET request
    => contains all the application the user has published.
    => contain add and remove buttons for the applications
    => check all the users who have registered for the application.
    =>
    ## send email to the chosen applicants.

# index page

    => "/" GET request
    => get request to all the job applications
    => search bar to search for application
    => show job applications in pages.
    => button on the applications for berif checking
        => button to register for the application
        # get confirmation that user has registered.
    => show pages

# Get single job

    => "/getjobbyid" GET/:id request
    => show the job which have the current id
    =>

# Get Applicants for a job

    => "/getapplicantsforjob" GET/:id request
    => show the peoples who have applied for a job
    => peoples who applied for the same job must me returned.
