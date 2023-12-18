// boosting contrast
uniform float u_contrast;

vec4 frag(vec2 pos, vec2 uv, vec4 color, sampler2D tex) {
    vec4 c = def_frag();

    // contrast boost
    c.rgb = 0.5 + ((c.rgb - 0.5) * u_contrast);

    return c;
}