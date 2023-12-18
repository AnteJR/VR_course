// boosting contrast and then applying a stark black/white filter
uniform float u_contrast;

vec4 frag(vec2 pos, vec2 uv, vec4 color, sampler2D tex) {
    vec4 c = def_frag();

    // contrast boost
    c.rgb = 0.5 + ((c.rgb - 0.5) * u_contrast);

    if(c.x < 0.2 || c.y < 0.2 || c.z < 0.2) {
        return vec4(0.02, 0.02, 0.02, 1.0);
    } else if(c.x > 0.8 || c.y > 0.8 || c.z > 0.8) {
        return vec4(0.98, 0.98, 0.98, 1.0);
    }
}