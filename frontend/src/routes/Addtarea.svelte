<script>
    import Navbar from "$components/Navbar.svelte";
    import { onMount } from "svelte";
    import { goto } from "@roxi/routify";
    let tarea, desc, fecha;

    let tareas = [];

    onMount(()=>{
        const tareasExistentes = localStorage.getItem('tareas')
        tareas = JSON.parse(tareasExistentes) || []
    })

    const procesarDatos = () => {
        const datos = {
            tarea: tarea.value,
            descripcion: desc.value,
            fecha: fecha.activePartsClone 
        };

        tareas = [...tareas, datos];
        localStorage.setItem('tareas', JSON.stringify(tareas))
        $goto("/Tareas");
    }

    const guardarDatos = () =>{
        let inputs = document.getElementById("div-input");
        let time = document.getElementById("div-time");

        inputs.style.visibility = "hidden";
        time.style.visibility = "visible";

    }
</script>

<Navbar titulo="Añadir tarea" route="/Tareas"/>

<div id="div-add">
    <div id="div-input">
        <ion-input label="Tarea:" bind:this={tarea}></ion-input>
        <ion-textarea label="Descprición:" bind:this={desc}></ion-textarea>
        <!-- svelte-ignore a11y-no-static-element-interactions -->
        <ion-button on:click={guardarDatos} on:keydown={guardarDatos}>Añadir</ion-button>
    </div>
    <div id="div-time">
        <ion-datetime bind:this={fecha}>
        </ion-datetime>
        <!-- svelte-ignore a11y-no-static-element-interactions -->
        <ion-button class="btn-date" on:click={procesarDatos} on:keydown={procesarDatos}>Guardar</ion-button>
    </div>
</div>

<style>
    *{
        margin: 0;
        padding: 0;
        box-sizing: content-box;
    }

    #div-add{
        position: relative;
    }

    #div-input{
        position: absolute;
        width: 100vw;
        height: 100vh;
    }

    #div-time{
        position: absolute;
        visibility: hidden;
        width: 100vw;
        height: 100vh;
        text-align: center;
    }

    ion-textarea{
        --border-radius: 25px;
        --background: #32078850;
        --padding-bottom: 0;
        --padding-end: 0;
        --padding-start: 10px;
        --padding-top: 0;
        justify-content: auto;

        margin-top: 2vh;
        margin-left: 2.5vw;
        width: 95vw;
        height: 30vh;
        font-size: 13px;
    }

    .btn-date{
        --border-radius: 25px;
        --color: #E8DDFD;
        --background: #000000;
        --border-color: #FBFBFB;
        --border-style: solid;
        --border-width: 1px;

        position: absolute;
        right: 0;
        bottom: 4em;
        width: 10em;
        height: 2em;
        font-family: 'Raleway', sans-serif;
        font-size: 12px;
    }

    ion-button{
        --border-radius: 25px;
        --color: #E8DDFD;
        --background: #000000;
        --border-color: #FBFBFB;
        --border-style: solid;
        --border-width: 1px;

        position: absolute;
        right: 0;
        width: 10em;
        height: 2em;
        font-family: 'Raleway', sans-serif;
        font-size: 12px;
    }

    
    ion-input{
        --border-radius: 25px;
        --background: #32078850;
        --padding-bottom: 0;
        --padding-end: 0;
        --padding-start: 10px;
        --padding-top: 0;
        justify-content: auto;
        
        margin-left: 2.5vw;
        width: 95vw;
        height: 4vh;
        font-size: 13px;
    }
    
    ion-datetime::part(wheel-item) {
        color: #E8DDFD70;
    }

    ion-datetime::part(wheel-item active) {
        color: #ffffff;
    }

    ion-datetime{
        --background: #32078825;
        --color: #E8DDFD;
        --wheel-highlight-background: #8063b450;
        --wheel-fade-background-rgb: 0;

        position: absolute;
        height: 50vh;
        font-family: 'Raleway', sans-serif;
        top: -50%;
        left: 0;
        bottom: 0;
        right: 0;
        margin: auto;
        border-radius: 16px;
        box-shadow: #32078870 0px 10px 15px -3px;
    }
</style>