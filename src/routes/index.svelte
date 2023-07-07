<script>
    import MainMenuBoton from "$components/MainMenuBoton.svelte";
</script>

<ion-card>
    <ion-card-title class="ion-text-center">Leviathan</ion-card-title>
</ion-card>

<ion-grid>
    <ion-row>
        <ion-col>
            <MainMenuBoton text="Tareas" route="/Tareas"/>
        </ion-col>
    </ion-row>
    <ion-row>
        <ion-col>
            <MainMenuBoton text="Horario" route="/Horario"/>
        </ion-col>
    </ion-row>
    <ion-row>
        <ion-col>
            <MainMenuBoton text="Calendario" route="/Calendario"/>
        </ion-col>
    </ion-row>
    <ion-row>
        <ion-col>
            <MainMenuBoton text="Recordatorio" route="/Recordatorio"/>
        </ion-col>
    </ion-row>
</ion-grid>

<style>

    ion-grid{
        display: flex;
        flex-direction: column;
    }

    ion-row{
        margin-bottom: 15vh;
    }

    @font-face {
        font-family: 'Maitree';
        src: url('../assets/fonts/Maitree-Medium.ttf') format('truetype');
    }
    ion-card{
        --background: #070113;
    }
    ion-card-title{
        font-family: 'Maitree', sans-serif;
        --color: #E8DDFD;
        font-size: 5vh;
    }
</style>
