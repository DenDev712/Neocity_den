<!--homepage-->
<script lang="ts">
	import { helloText } from '$lib/data/helloText';
    import '$lib/styles/home_page.css';
</script>

<div class="homePage_bg"></div>
<div id="bubbles">
    <img src="/images/home_page_images/flluska.gif" alt="bubbles" > 
</div>
<div id="homeContainer"></div>
<div id="homeHeader">
    <img src="/images/home_page_images/mainp_header.gif" alt="the homepage header">
</div>
<div id="meBar">
    <a href="/mepage"><span id="meText">ME</span></a>
    <a href="/homepage"><span id="homeText">HOME</span></a>   
    <a href="/foryoupage"><span id="foryouText">FOR YOU</span></a>
</div>

<div id="helloTextContainer">
    <p>{helloText}</p>
</div>

<div id="thisUserImages">
    <img src="/images/home_page_images/this_user_likes_sky.jpg" alt="this user like night sky" id="userNightSkyImage">
    <img src="/images/home_page_images/this_user_likes_ocean.jpg" alt="this user like ocean" id="userOceanImage">
    <img src="/images/home_page_images/this_user_likes_miku.jpg" alt="this user like miku" id="userMikuImage">
</div>