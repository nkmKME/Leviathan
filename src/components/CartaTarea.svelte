<script>
    import { tareas } from "../global/stores.js";
    export let titulo, desc,fecha, index;

    //cambia el estado de la lista de tareas
    const editTareas = () =>{
        tareas.update((array) =>{
            const newArray = array.splice(index, 1)
            console.log({viejo: array, nuevo: newArray})
            return array;
        })
    }
</script>

<ion-card>
    <ion-card-header>
      <ion-card-title>{titulo}</ion-card-title>
    </ion-card-header> 
    <ion-card-content>{desc}</ion-card-content>
    <ion-card-content>
        Fecha limite: {fecha.day+"/"+fecha.month+"/"+fecha.year+" " + fecha.hour+":"+fecha.minute}
    </ion-card-content>
    <ion-button id="check" on:click={editTareas}></ion-button>
    <ion-button id="erase">󰅗</ion-button>
</ion-card>
  
<style>
    ion-button{
        font-family: 'SymbolsNerdFont', sans-serif;
    }

    #check{
        --background: #3B08A0;
    }

    #erase{
        --background: #8C2673;
    }

    ion-card{
        width: 100vw;
        display: block;
        --background: #070113;
        --color: rgb(255, 255, 255)a1a;
        font-family: 'Raleway';
        text-align: center;
        margin-bottom: 5vh;
        border: #3B08A0 solid 1px;
    }

    ion-card-title{
        background: #320788;
        color: #E8DDFD;
        border: #8063b4 solid 1px;
    }

    ion-card-content{
        background-color: #000;
    }
</style>