<script lang="ts">
    import '$lib/styles/me_page.css';
    import '$lib/styles/home_page.css';
	import { favMusic } from '$lib/data/favMusic';
	import { favAnime } from '$lib/data/favAnime';
    import Divider from '$lib/components/Divider.svelte';
</script>
<div class="backgroundImage"></div>
<div id="pageContainer">
    <div id="pageHeader">
        <img src="/images/home_page_images/mainp_header.gif" alt="the homepage header">
    </div>

    <div id="meBar">
        <a href="/mepage"><span id="meText">ME</span></a>
        <a href="/homepage"><span id="homeText">HOME</span></a>   
        <a href="/foryoupage"><span id="foryouText">FOR YOU</span></a>
    </div>

    <div id="musicTxtContainer">
        <p>{@html favMusic}</p>
    </div>
    <img id="aaGif" src="/images/me_page_images/aaaaaa.gif" alt="scream gif">

    <Divider></Divider>
    
    <div id="favAnimeContainer">
        <p>{@html favAnime}</p>
    </div>
    <img id="reiChibi" src="/images/me_page_images/rei_chibi.jpg" alt="chibi rei">
    <img id="johnnyGyat" src="/images/me_page_images/gyrojoke.jpg" alt="fat johnny">
    
    <Divider></Divider>
</div>