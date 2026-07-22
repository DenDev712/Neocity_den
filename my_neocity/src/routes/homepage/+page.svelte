<!--homepage-->
<script lang="ts">
	import { helloText } from '$lib/data/helloText';
    import '$lib/styles/home_page.css';
</script>

<div class="homePage_bg"></div>

<div id="homeContainer">
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
</div>
