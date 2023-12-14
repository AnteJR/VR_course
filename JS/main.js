kaboom({
    width: window.innerWidth/10,
    height: window.innerHeight/10,
    background: [ 0, 0, 0, 1],
    scale: 10
});

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

// loadShaderURL("test1", null, "/shaders/baseEffect.frag");
// loadShaderURL("test2", null, "/shaders/colourTest.frag");
// loadShaderURL("test3", null, "/shaders/blackAndWhiteTest.frag");
loadShaderURL("final1", null, "/shaders/macintoshScreen.frag");
// loadShaderURL("test4", null, "/shaders/baseEffect2.frag");
// loadShaderURL("test5", null, "/shaders/discolourTest.frag");
loadShaderURL("final2", null, "/shaders/oldVHS.frag");
// loadShaderURL("test6", null, "/shaders/noiseTest.frag");
// loadShaderURL("test7", null, "/shaders/chromaAberration.frag");
// loadShaderURL("test8", null, "/shaders/chromaAberrationAnim.frag");

// usePostEffect("final1", () => ({ "u_time": time(), "u_resy": height()}));
// usePostEffect("final2", () => ({ "u_time": time() }));
// usePostEffect("test8", () => ({ "u_time": time(), "u_amount": 4, }));
