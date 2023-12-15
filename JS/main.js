kaboom({
    width: window.innerWidth/10,
    height: window.innerHeight/10,
    background: [ 0, 0, 0, 1],
    scale: 10
});

/*------------------------------
            LEVEL
------------------------------*/

loadSpriteAtlas("/assets/textures_test.png", {
    "dirt": {
        x: 0,
        y: 0,
        width: 16,
        height: 16,
    },
    "grass": {
        x: 16,
        y: 16*29,
        width: 16,
        height: 16,
    },
    "stone": {
        x: 16,
        y: 16,
        width: 16,
        height: 16,
    },
});

const level = addLevel([
	"gggggggggg",
	"dddddddddd",
	"ssssssssss",
	"ssssssssss",
	"ssssssssss",
	"ssssssssss",
],{
    tileWidth:16,
    tileHeight:16,
    tiles: {
        "g": () => [
			sprite("grass"),
			area(),
			body({ isStatic: true }),
			tile({ isObstacle: true }),
			"grass",
		],
        "d": () => [
			sprite("dirt"),
			area(),
			body({ isStatic: true }),
			tile({ isObstacle: true }),
			"dirt",
		],
        "s": () => [
			sprite("stone"),
			area(),
			body({ isStatic: true }),
			tile({ isObstacle: true }),
			"stone",
		],
    }
});

/*------------------------------
            SHADERS
------------------------------*/

// loadShaderURL("KaboomJS_CRT", null, "../shaders/KaboomJS_shaders/CRT.frag");
// loadShaderURL("KaboomJS_VHS", null, "../shaders/KaboomJS_shaders/VHS.frag");
loadShaderURL("Default", null, "../shaders/base.frag");
loadShaderURL("Siemens_screen", null, "../shaders/colourTest.frag");
loadShaderURL("Black_and_white", null, "../shaders/blackAndWhiteTest.frag");
loadShaderURL("Old_Macintosh_screen", null, "../shaders/macintoshScreen.frag");         // final #1
loadShaderURL("Discoloration", null, "../shaders/discolourTest.frag");
loadShaderURL("Old_VHS_on_CRT_screen", null, "../shaders/oldVHS.frag");                  // final #2
loadShaderURL("Visual_noise", null, "../shaders/noiseTest.frag");
loadShaderURL("Chroma_aberration", null, "../shaders/chromaAberration.frag");
loadShaderURL("Chroma_aberration_wave", null, "../shaders/chromaAberrationAnim.frag");    // final #3

const effects = {
    Default: () => ({}),
    // KaboomJS_CRT: () => ({}),
    Siemens_screen: () => ({}),
    Black_and_white: () => ({}),
    Old_Macintosh_screen: () => ({ "u_time": time(), "u_resy": height() }),
    // KaboomJS_VHS: () => ({ "u_intensity": 10 }),
    Discoloration:() => ({}),
    Old_VHS_on_CRT_screen: () => ({ "u_time": time(), "u_blurIntensity": 0.5 }),
    Visual_noise: () => ({ "u_time": time() }),
    Chroma_aberration: () => ({ "u_amount": 2 }),
    Chroma_aberration_wave: () => ({ "u_time": time(), "u_amount": 4 }),
}

let currentEffect = 0;

onKeyPress("space", () => {
	const list = Object.keys(effects);
	currentEffect = (currentEffect + 1) % list.length;
	label.text = list[currentEffect];
});

onUpdate(() => {
	const effect = Object.keys(effects)[currentEffect];
	usePostEffect(effect, effects[effect]());
});

/*------------------------------
            TEXT
------------------------------*/

const label = add([
	pos(8, 8),
	text(Object.keys(effects)[currentEffect], {
        size: 10
    }),
]);
