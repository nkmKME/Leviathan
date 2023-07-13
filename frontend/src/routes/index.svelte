<script>
    import MainMenuBoton from "$components/MainMenuBoton.svelte";
    import { onMount } from "svelte";

    async function presentAlert() {
        const alert = document.createElement('ion-alert');
        alert.header = 'Alert';
        alert.subHeader = 'Important message';
        alert.message = 'This is an alert!';
        alert.buttons = ['OK'];

        document.body.appendChild(alert);
        console.log({pres: alert.present()})
        await alert.present();
    }

   /* onMount(()=>{
        presentAlert();
    })*/
    
</script>

<ion-card id="present-alert">
    <ion-card-title class="ion-text-center">Leviathan</ion-card-title>
</ion-card>
<ion-alert
  trigger="present-alert"
  header="Alert"
  sub-header="Important message"
  message="This is an alert!"
></ion-alert>
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
