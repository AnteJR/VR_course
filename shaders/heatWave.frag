// wave effect to the screen to show confusion or dream-like ambiance
// highly customizable
uniform float u_time;
uniform float u_dampening;
uniform float u_speed;

vec4 frag(vec2 pos, vec2 uv, vec4 color, sampler2D tex) {
    // set the pace of the wave (higher u_speed = faster)
    float t = u_time * u_speed;

    // create a wave pattern on uv's Y coordinate
    // use a higher u_dampening to reduce the size of the wave
    // change u_dirX and/or u_dirY to -1 or 1 to change the x or y direction of the wave
    for(float i = 1.0; i < 7.0; i++){
        uv.x += i * (0.01 / (i * 5.)) *
        pow(cos(uv.x * pow(i, 2.1) + t), 4.) *
        pow(cos(uv.y * pow(i, 2.1) + t), 9.);
    }

    // apply the transformation to the original texture and return it
    return texture2D(tex, uv);;
}