<header>
        <div class="text-center mt-3 mb-3">
            <h1>Portfolio JavaScript</h1>
        </div>      
        
        <nav class="navbar navbar-expand-lg navbar-light <?= $current == 'fernet' ? 'mb-4' : 'mb-3'; ?> bgE3">
            <div class="container-fluid">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav m-auto">
                        <li class="nav-item">
                            <a class="nav-link <?= $current == 'index' ? 'active' : ''; ?>" href="index.php">Inicio</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link <?= $current == 'fernet' ? 'active' : ''; ?>" href="fernet.php">Ejercicio "Fernet" (2021)</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link <?= $current == 'juego' ? 'active' : ''; ?>" href="juego.php">Juego "Chanchito" (2021)</a>
                        </li>                               
                    </ul>
                </div>
            </div>            
        </nav>
    </header>
