// discoloration by boosting the other R, B or G values (for example boosting R and B if G is higher)

vec4 frag(vec2 pos, vec2 uv, vec4 color, sampler2D tex) {
    vec4 c = def_frag();
    if (c.x >= c.y && c.x >= c.z) {
        c.z *= 1.75;
        c.y *= 1.3;
    }
    else if (c.y >= c.x && c.x >= c.z) {
        c.x *= 1.75;
        c.z *= 1.3;
    }
    else if (c.z >= c.x && c.x >= c.y) {
        c.y *= 1.75;
        c.x *= 1.3;
    }
    return c;
}