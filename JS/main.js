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

loadShaderURL("test", null, "/shaders/first_try.frag");
loadShaderURL("test2", null, "/shaders/oldPhoneScreen.frag");
loadShaderURL("test3", null, "/shaders/blackAndWhite.frag");

usePostEffect("test3", () => ({}));