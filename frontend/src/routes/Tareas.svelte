<script>
    import Navbar from "$components/Navbar.svelte";
    import CartaTarea from "$components/CartaTarea.svelte";
    import { onMount, onDestroy } from "svelte";
    import { goto } from "@roxi/routify";
    import { tareas } from "../global/stores.js";

    let tareasValue = [];

    onMount(()=>{
        const tareasExistentes = localStorage.getItem('tareas')
        tareas.set(JSON.parse(tareasExistentes) || []);
    })

    onDestroy(()=>{
        tareas.subscribe((value) => {
            tareasValue = value;
        });
        localStorage.setItem('tareas', JSON.stringify(tareasValue));
    })
    
    tareas.subscribe((value) => {
        tareasValue = value;
	});

    const cambiarRuta = () =>{
        $goto("/Addtarea");
    }

</script>

<Navbar titulo="Tareas" route="/"/>
<ion-content scrollEvents="true">
    <ion-list lines="none" inset="true">
        {#each tareasValue as tarea, id}
            <ion-item id={id+1}>
                <CartaTarea titulo={tarea.tarea} desc={tarea.descripcion} fecha={tarea.fecha} index={id}/>
            </ion-item>
        {/each}
    </ion-list>
</ion-content>
<div>
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <ion-button on:click={cambiarRuta} on:keydown={cambiarRuta}>Añadir tarea</ion-button>
</div>

<style>
    

    ion-content{
        --background: #070113;
        height: 90vh;
    }

    *::-webkit-scrollbar{
        width: 10px;
    }
    
    div{
        width: 100vw;
        height: 3vh;
        position: relative;
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

    ion-item{
        --background: #070113;
        --color: #E8DDFD;
    }

    ion-list{
        background-color: #070113;
    }
</style>