var navbar = document.getElementById("navbar");

navbar.style.height = "50px";

navbar.innerHTML = 
'<nav class="navbar navbar-expand-sm bg-dark-subtle">' +
    '<div class="container-fluid">' +
    '<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">' +
        '<span class="navbar-toggler-icon"></span>' +
    '</button>' +
    '<div class="collapse navbar-collapse" id="navbarNav">'+
        '<ul class="navbar-nav">'+

            '<li class="nav-item">'+
                '<a class="nav-link bg-dark-subtle" aria-current="page" href="index.html">Acceuil</a>'+
            '</li>'+

            '<li class="nav-item">'+
                '<a class="nav-link bg-dark-subtle" href="front_end.html">Front-End</a>'+
            '</li>'+

            '<li class="nav-item">'+
                '<a class="nav-link bg-dark-subtle" href="back_end.html">Back-End</a>'+
            '</li>'+

            '<li class="nav-item">'+
                '<a class="nav-link bg-dark-subtle" href="projets.html">Les "gros" Projets</a>'+
            '</li>'+

            '<li class="nav-item">'+
                '<a class="nav-link bg-dark-subtle" href="projets_perso.html">Les projets perso</a>'+
            '</li>'+

            '<li class="nav-item">'+
                '<a class="nav-link bg-dark-subtle" href="stage.html">Stage</a>'+
            '</li>'+

            '<li class="nav-item">'+
                '<a class="nav-link bg-dark-subtle" href="https://github.com/tchik90?tab=repositories" target="_blank">Mon GitHub</a>'+
            '</li>'+

        '</ul>'+
    '</div>'+
    '</div>'+
'</nav>'