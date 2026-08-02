<script lang="ts">
    import '$lib/styles/foryou_page.css'
    import '$lib/styles/me_page.css'
    import '$lib/styles/home_page.css'
    import Divider from '$lib/components/Divider.svelte';
	import { resourcesLinks } from '$lib/data/resourcesLinks';
	import { aboutPage } from '$lib/data/aboutPage';
</script>

<div class="backgroundImage">
<div id="lightHouseContainer">
    <img id="lightHouse" src="/images/foryou_page_images/lighthouse.webp" alt="lighthouse">
    <div id="lightBeam"></div>
</div>
</div>

<div id="pageContainer">
    <div id="pageHeader">
        <img src="/images/home_page_images/mainp_header.webp" alt="the homepage header">
    </div>

     <div id="meBar">
        <a href="/mepage"><span id="meText">ME</span></a>
        <a href="/homepage"><span id="homeText">HOME</span></a>   
        <a href="/foryoupage"><span id="foryouText">FOR YOU</span></a>
    </div>

    <div id="resourcesContainer">
        <p>{@html resourcesLinks}</p>
    </div>

    <div class="Divider1">
        <Divider></Divider>
    </div>

    <div id="aboutPageContainer">
        <p>{@html aboutPage}</p>
    </div>

    <img id="burrito" loading="lazy" src="/images/foryou_page_images/frutiger_burrito.webp" alt="burrito">
    <img id="funnyMeme" loading="lazy" src="/images/foryou_page_images/psycho_meme.webp" alt="meme">

    <img id="footer2" loading="lazy" src="/images/home_page_images/diving_footer.webp" alt="diver">
</div>