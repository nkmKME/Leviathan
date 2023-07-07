<script>
    import { goto } from "@roxi/routify";
    export let text, route;

    const cambiarRuta = () =>{
        $goto(route);
    }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<ion-button on:click={cambiarRuta} shape="round">{text}</ion-button>

<style>
    @font-face {
        font-family: 'Raleway';
        src: url('../assets/fonts/Raleway-Regular.ttf') format('truetype');
    }

    ion-button{
        --background: #320788;
        --color: #E8DDFD;
        height: 4vh;
        width: 90vw;
        margin: 0 5vw;
        font-family: 'Raleway', sans-serif;
        font-size: 1em;
    }
</style>

