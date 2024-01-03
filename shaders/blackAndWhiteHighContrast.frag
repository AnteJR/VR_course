// boosting contrast and then applying a stark black/white filter
uniform float u_contrast;

vec4 frag(vec2 pos, vec2 uv, vec4 color, sampler2D tex) {
    vec4 c = def_frag();

    // contrast boost
    c.rgb = 0.5 + ((c.rgb - 0.5) * u_contrast);

    if(c.r <= 0.5 && c.g <= 0.5 && c.b <= 0.5) {
        return vec4(0.02, 0.02, 0.02, 1.0);
    } else {
        return vec4(0.98, 0.98, 0.98, 1.0);
    }
}