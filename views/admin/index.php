<h1 class="nombre-pagina">Panel de administración</h1>

<?php include_once __DIR__ . '/../templates/barra.php'; ?>

<h2>Buscar citas</h2>
<div class="busqueda">
    <form action="" class="formulario">
        <div class="campo">
            <label for="fecha">Fecha</label>
            <input type="date" name="fecha" id="fecha">
        </div>
    </form>
</div>

<div class="citas-admin">
    <ul class="citas">
        <?php
        $idCita = 0;
        foreach ($citas as $cita) { ?>
            <?php if ($idCita !== $cita->id) { ?>
                <li>
                    <p>Cita: #<span><?php echo $cita->id; ?></span></p>
                    <p>Hora: <span><?php echo $cita->hora; ?></span></p>
                    <p>Cliente: <span><?php echo $cita->cliente; ?></span></p>
                    <p>Email: <span><?php echo $cita->email; ?></span></p>
                    <p>Teléfono: <span><?php echo $cita->telefono; ?></span></p>
                    <h3>Servicios</h3>

            <?php $idCita = $cita->id; } // Final de if ?>
                    <p class="servicio"><?php echo $cita->servicio . " " . $cita->precio . " €"; ?></p>
                </li>
        <?php } // Final de foreach ?>
    </ul>
</div>