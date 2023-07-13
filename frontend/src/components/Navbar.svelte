<script>
    import { goto } from "@roxi/routify";
    export let titulo, route;

    const goHome = () =>{
        $goto(route);
    }

</script>
<div>
    <ion-button on:click={goHome} on:keydown={goHome} fill="clear">󰌍</ion-button>
    <h1>{titulo}</h1>
</div>


<style>
    @font-face{
        font-family: 'SymbolsNerdFont';
        src: url('../assets/fonts/SymbolsNerdFont-Regular.ttf') format('truetype');
    }

    @font-face {
        font-family: 'Maitree';
        src: url('../assets/fonts/Maitree-Medium.ttf') format('truetype');
    }

    div{
        position: relative;
        width: 100vw;
        height: 5vh;
    }

    ion-button{
        z-index: 1;
        width: 5vw;
        font-family: 'SymbolsNerdFont', sans-serif;
        font-size: 2em;
        top: 0px;
        display: inline-block;
        position: relative;
        --color: #E8DDFD90
    }

    h1{
        text-align: center;
        display: inline-block;
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        margin: auto;
    }
</style>