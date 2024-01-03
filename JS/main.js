kaboom({
    width: window.innerWidth / 10,
    height: window.innerHeight / 10,
    background: [0, 0, 0, 1],
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
        y: 16 * 29,
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
], {
    tileWidth: 16,
    tileHeight: 16,
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
loadShaderURL("Current_test", null, "/shaders/test.frag");
loadShaderURL("Default", null, "/shaders/base.frag");
loadShaderURL("Siemens_screen", null, "/shaders/colourTest.frag");
loadShaderURL("Black_and_white", null, "/shaders/blackAndWhiteTest.frag");
loadShaderURL("Old_Macintosh_screen", null, "/shaders/macintoshScreen.frag");         // final #1
loadShaderURL("Discoloration", null, "/shaders/discolourTest.frag");
loadShaderURL("Old_VHS_on_CRT_screen", null, "/shaders/oldVHS.frag");                  // final #2
loadShaderURL("Visual_noise", null, "/shaders/noiseTest.frag");
loadShaderURL("Chroma_aberration", null, "/shaders/chromaAberration.frag");
loadShaderURL("Chroma_aberration_wave", null, "/shaders/chromaAberrationAnim.frag");    // final #3
loadShaderURL("Contrast_booster", null, "/shaders/contrast.frag");
loadShaderURL("Black_and_white_high_contrast", null, "/shaders/blackAndWhiteHighContrast.frag");
loadShaderURL("Repeated_flash", null, "/shaders/flash.frag");
loadShaderURL("Pixel_sorting", null, "/shaders/pixelSorting.frag");
loadShaderURL("Confusion_wave", null, "/shaders/confusedWave.frag");
loadShaderURL("Tutorial_shader_art", null, "/shaders/tutorialShaderArt.frag");
loadShaderURL("Shader_Art_2", null, "/shaders/shaderArt2.frag");
loadShaderURL("Shader_Art_3", null, "/shaders/shaderArt3.frag");

const effects = {
    // KaboomJS_CRT: () => ({}),
    // KaboomJS_VHS: () => ({ "u_intensity": 10 }),
    // Current_test: () => ({ "u_time": time(), "u_width": width(), "u_height": height() }),
    Default: () => ({}),
    Siemens_screen: () => ({}),
    Black_and_white: () => ({}),
    Old_Macintosh_screen: () => ({ "u_time": time(), "u_resy": height() }),
    Discoloration: () => ({}),
    Old_VHS_on_CRT_screen: () => ({ "u_time": time(), "u_blurIntensity": 0.5 }),
    Visual_noise: () => ({ "u_time": time() }),
    Chroma_aberration: () => ({ "u_amount": 2 }),
    Chroma_aberration_wave: () => ({ "u_time": time(), "u_amount": 4 }),
    Contrast_booster: () => ({ "u_contrast": 1.25 }),
    Black_and_white_high_contrast: () => ({ "u_contrast": 0.95 }),
    Repeated_flash: () => ({ "u_time": time(), "u_flashLength": 0.5 }),
    Pixel_sorting: () => ({ "u_time": time(), "u_intensity": 0.01, "u_isAnimated": 1. }),
    Confusion_wave: () => ({ "u_time": time(), "u_dampening": 1.5, "u_speed": 0.75, "u_dirX": -1, "u_dirY": 1 }),
    Tutorial_shader_art: () => ({ "u_time": time(), "u_width": width(), "u_height": height() }),
    Shader_Art_2: () => ({ "u_time": time(), "u_width": width(), "u_height": height() }),
    Shader_Art_3: () => ({ "u_time": time(), "u_width": width(), "u_height": height() }),
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
