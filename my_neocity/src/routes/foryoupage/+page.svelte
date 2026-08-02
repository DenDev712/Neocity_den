<script lang="ts">
    import '$lib/styles/foryou_page.css'
    import '$lib/styles/me_page.css'
    import '$lib/styles/home_page.css'
    import Divider from '$lib/components/Divider.svelte';
	import { resourcesLinks } from '$lib/data/resourcesLinks';
	import { aboutPage } from '$lib/data/aboutPage';
    import { base } from '$app/paths';
</script>

<div class="backgroundImage">
<div id="lightHouseContainer">
    <img id="lightHouse" src="{base}/images/foryou_page_images/lighthouse.webp" alt="lighthouse">
    <div id="lightBeam"></div>
</div>
</div>

<div id="pageContainer">
    <div id="pageHeader">
        <img src="{base}/images/home_page_images/mainp_header.webp" alt="the homepage header">
    </div>

     <div id="meBar">
        <a href="{base}/mepage"><span id="meText">ME</span></a>
        <a href="{base}/homepage"><span id="homeText">HOME</span></a>   
        <a href="{base}/foryoupage"><span id="foryouText">FOR YOU</span></a>
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

    <img id="burrito" decoding="async" loading="lazy" src="{base}/images/foryou_page_images/frutiger_burrito.webp" alt="burrito">
    <img id="funnyMeme" decoding="async" loading="lazy" src="{base}/images/foryou_page_images/psycho_meme.webp" alt="meme">

    <img id="footer2" decoding="async" loading="lazy" src="{base}/images/home_page_images/diving_footer.webp" alt="diver">
</div>