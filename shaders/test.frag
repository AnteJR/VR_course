// base CRT shader from Kaboom JS
uniform float u_time;
uniform float u_width;
uniform float u_height;

vec4 frag(vec2 pos, vec2 uv, vec4 color, sampler2D tex) {
    pos *= u_width / u_height;
    pos = fract(pos * uv);
    return def_frag();
}