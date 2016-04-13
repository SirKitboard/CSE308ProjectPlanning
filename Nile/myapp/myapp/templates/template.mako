<!DOCTYPE html>
<html lang="${request.locale_name}">
<head>
    <meta charset="utf-8">

    <meta name="description" content="Home Page">
    <meta name="author" content="Team ¯\_(ツ)_/¯">
    <link rel="shortcut icon" href="${request.static_url('myapp:static/pyramid-16x16.png')}">
% if currentUser == None:
    <script>
        window.currentUser = null;
    </script>
% else:
    <script>
        window.currentUser = "${currentUser}".replace(/&#39;/g,"\"");
        window.currentUser = window.currentUser.replace(/u\"/g, "\"");
        window.currentUser = JSON.parse(window.currentUser);
        console.log(window.currentUser)
    </script>
% endif


    <title>${self.title()}</title>

    <!-- Bootstrap core CSS -->
    <link type="text/css" href="${request.static_url('myapp:static/css/materialize/materialize.min.css')}" rel="stylesheet">
    <!-- Material Icons CSS -->
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet">
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <!-- Custom styles for this scaffold -->
    <!-- <link href="${request.static_url('myapp:static/css/index.css')}" rel="stylesheet"> -->
    <link href="${request.static_url('myapp:static/css/template.css')}" rel="stylesheet">
    <link href="${request.static_url('myapp:static/css/login.css')}" rel="stylesheet">
    <script src="${request.static_url('myapp:static/js/jquery-2.1.4.min.js')}"></script>
    <script src="${request.static_url('myapp:static/js/materialize/materialize.js')}"></script>

    <script src="${request.static_url('myapp:static/js/underscore-min.js')}"></script>
    <script src="${request.static_url('myapp:static/js/react/react.js')}"></script>
    <script src="${request.static_url('myapp:static/js/react/react-dom.js')}"></script>
    <script src="${request.static_url('myapp:static/js/react/browser.min.js')}"></script>

    ${self.head()}
</head>

<body>
    ${self.body()}


    ${self.scripts()}

    <script src="${request.static_url('myapp:static/js/template.js')}"></script>

</body>
</html>
