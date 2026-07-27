<!--homepage-->
<script lang="ts">
	import { helloText } from '$lib/data/helloText';
	import { infoMe } from '$lib/data/infoMe';
	import { infoPage } from '$lib/data/infoPage';
	import { updateDate } from '$lib/data/updateDate';
    import '$lib/styles/home_page.css';
    import { toggleAudio } from "$lib/audioPlayer/audioPlayer";

    let audio: HTMLAudioElement;
    let playing = $state(false);

    function handleAudioToggle() {
        toggleAudio(audio);
        playing = !playing;
    } 
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

<div id="helloTextContainer">
    <p>{helloText}</p>
</div>

<div id="thisUserImages">
    <img src="/images/home_page_images/this_user_likes_sky.jpg" alt="this user like night sky" id="userNightSkyImage">
    <img src="/images/home_page_images/this_user_likes_ocean.jpg" alt="this user like ocean" id="userOceanImage">
    <img src="/images/home_page_images/this_user_likes_miku.jpg" alt="this user like miku" id="userMikuImage">
</div>

<div id="moonWidget">
    <table cellpadding="0" cellspacing="0" border="0" width="212">
    <tbody>
        <tr>
            <td align="center">
                <a href="https://www.moonconnection.com" target="mc_moon_ph">
                    <img
                        src="https://www.moonmodule.com/cs/dm/hn.gif"
                        alt="Moon phases"
                    />
                </a>

                <div style="position: relative; width: 128px;">
                    <div
                        style="
                            position: absolute;
                            top: -20px;
                            left: 6px;
                            background: #000000;
                            width: 116px;
                            text-align: center;
                        "
                    >
                        <a
                            href="https://www.moonconnection.com/moon_phases.phtml"
                            target="mc_moon_ph"
                        >
                            <font
                                color="#7F7F7F"
                                size="1"
                                face="arial,helvetica,sans-serif"
                            >
                                <span
                                    style="
                                        color: #7F7F7F;
                                        font-family: arial, helvetica, sans-serif;
                                        font-size: 10px;
                                    "
                                >
                                    moon phases
                                </span>
                            </font>
                        </a>
                    </div>
                </div>
            </td>
        </tr>
    </tbody>
</table>
</div>

<div id="stamps">
    <img src="/images/home_page_images/pull_peshk.png" alt="fish stamp" id="stampFish">
    <img src="/images/home_page_images/pull_peshk_orange.png" alt="orange fish stamp" id="stampOrangeFish">
</div>
<img src="/images/home_page_images/jellyfish.gif" alt="jelly fish gif" id="stampJellyfish">

<div id="lastUpdateBar">
    <img src="/images/home_page_images/eva_angel.gif" alt="evangelion angel gif" id="angel1">
    <img src="/images/home_page_images/eva_angel.gif" alt="evangelion angel gif" id="angel2">
    <p>last updated on: {updateDate}</p> 
</div>

<iframe id="petWidget" title="pet widget" width="314" height="321" scrolling="no" 
    src="https://gify.pet/pet/pet.html?name=Koko&dob=1784830208&gender=f&element=Earth&pet=cat.gif&map=ozwomp.jpg&background=&tablecolor=%23001eff&textcolor=%23ff8800" 
    frameborder="0">
</iframe>

<div id="infoMeContainer">
    <p>{@html infoMe}</p>
</div>
<img id="catGif" src="/images/home_page_images/cute_Cat.gif" alt="cat gif">

<div id="infoPageContainer">
    <p>{@html infoPage}</p>
</div>

<img id="evangelionGif" src="/images/home_page_images/evangelion.gif" alt="evangelion"/>
<img id="pokemonImg" src="/images/home_page_images/water_pokemon.png" alt="water pokemon"/>

<div id="audioPlayerContainer">
  <button type="button" onclick={handleAudioToggle}>
  <img class="coverImage" src="/images/home_page_images/evangelion_cover.jpg" alt="music cover">
  </button>
  <img 
  class:playing={playing} 
  class="diskImage" src="/images/home_page_images/raw_disk1.png" alt="disc">
</div>
<audio
    bind:this={audio}
    id="audio" src="https://files.catbox.moe/35ccj6.mp3"></audio>

<div id="fillerGifContainer">
    <img id="fillerGif1" src="/images/home_page_images/take_your_meds.gif" alt="take your meds gif">
    <img id="fillerGif2" src="/images/home_page_images/kirby.gif" alt="kirby gif">
    <img id="fillerGif3" src="/images/home_page_images/surfer.gif" alt="web surf gif">
</div>

<img id="snailImage" src="/images/home_page_images/cute_snail.jpg" alt="cute snail">
<img id="badAppleGif" src="/images/home_page_images/bad_apple.gif" alt="bad apple">
<img id="cdAdGif" src="/images/home_page_images/cd_ad.gif" alt="cd fake ad">

<img id="footer" src="/images/home_page_images/diving_footer.gif" alt="diver">
</div>

