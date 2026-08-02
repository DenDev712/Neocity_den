<script lang="ts">
    import '$lib/styles/me_page.css';
    import '$lib/styles/home_page.css';
	import { favMusic } from '$lib/data/favMusic';
	import { favAnime } from '$lib/data/favAnime';
    import Divider from '$lib/components/Divider.svelte';
	import { favManga } from '$lib/data/favManga';
	import { favFood } from '$lib/data/favFood';
	import { favGames } from '$lib/data/favGames';
	import { socials } from '$lib/data/socials';
</script>
<div class="backgroundImage"></div>
<img id="fishMove" src="/images/me_page_images/fish_cute.webp" alt="fih">
<div id="pageContainer">
    <div id="pageHeader">
        <img src="/images/home_page_images/mainp_header.webp" alt="the homepage header">
    </div>

    <div id="meBar">
        <a href="/mepage"><span id="meText">ME</span></a>
        <a href="/homepage"><span id="homeText">HOME</span></a>   
        <a href="/foryoupage"><span id="foryouText">FOR YOU</span></a>
    </div>

    <div id="musicTxtContainer">
        <p>{@html favMusic}</p>
    </div>
    <img id="fishGroove" src="/images/me_page_images/fish_groove.webp" alt="fish">
    <img id="aaGif" src="/images/me_page_images/aaaaaa.webp" alt="scream gif">

    <div class="firstDivider">
        <Divider></Divider>
    </div>
    
    <div id="favAnimeContainer">
        <p>{favAnime}</p>
    </div>
    <img id="reiChibi" src="/images/me_page_images/rei_chibi.webp" alt="chibi rei">
    <img id="johnnyGyat" src="/images/me_page_images/gyrojoke.webp" alt="fat johnny">
    
    <div class="secondDivider">
        <Divider></Divider>
    </div>

    <div id="favMangaContainer">
        <p>{favManga}</p>
    </div>

    <img id="hnkImage" decoding="async"src="/images/me_page_images/houseki_no_kuni.webp" loading="lazy" alt="land of lustrous">
    <img id="phosImage" decoding="async" src="/images/me_page_images/phos_manga.webp" loading="lazy" alt="land of lustrous 2">

    <div class="thirdDivider">
        <Divider></Divider>
    </div>

    <div id="favFoodContainer">
        <p>{favFood}</p>
    </div>

    <img id="tetoFat" decoding="async"src="/images/me_page_images/teto_fat.webp" loading="lazy" alt="teto fat ahh">

    <div class="fourthDivider"> 
        <Divider></Divider>
    </div>

    <div id="favGamesContainer">
        <p>{favGames}</p>
    </div>
    <img id="persona3" decoding="async" src="/images/me_page_images/persona3.webp" loading="lazy" alt="persona 3">

    <div class="fifthDivider">
        <Divider></Divider>
    </div>

    <div id="galleryTxtContainer">
        <p>GALLERY</p>
    </div>
    
    <div class="galleryImgContainer">
        <img id="img1" decoding="async" src="/images/me_page_images/gallery/catgrass.webp" loading="lazy" alt="cat on grass">
        <img id="img2" decoding="async" src="/images/me_page_images/gallery/catsmile.webp" loading="lazy" alt="cat chilling">
        <img id="img3" decoding="async" src="/images/me_page_images/gallery/cherries.webp" loading="lazy" alt="cherries">
        <img id="img4" decoding="async" src="/images/me_page_images/gallery/city.webp" loading="lazy" alt="city">
        <img id="img5" decoding="async" src="/images/me_page_images/gallery/city2.webp" loading="lazy" alt="city">
        <img id="img6" decoding="async" src="/images/me_page_images/gallery/city3.webp" loading="lazy" alt="city">
        <img id="img7" decoding="async" src="/images/me_page_images/gallery/folk.webp" loading="lazy" alt="folk">
        <img id="img8" decoding="async" src="/images/me_page_images/gallery/moon.webp" loading="lazy" alt="moon">
        <img id="img9" decoding="async" src="/images/me_page_images/gallery/sunset.webp" loading="lazy" alt="sunset">
    </div>

    <div class="sixthDivider">
        <Divider></Divider>
    </div>

    <div id="socialsTxtContainer">
        <p>{@html socials}</p>
    </div>

    <img id="fih" loading="lazy" decoding="async"src="/images/me_page_images/fish_smoke_cool.webp" alt="fih smoking">
    <img id="flamingo" loading="lazy" decoding="async" src="/images/me_page_images/flamingo_al.webp" alt="flamingo">


    <img id="footer1" loading="lazy" decoding="async" src="/images/home_page_images/diving_footer.webp" alt="diver">
</div>