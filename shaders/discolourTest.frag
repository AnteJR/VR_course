// discoloration by boosting the other R, B or G values (for example boosting R and B if G is higher)

vec4 frag(vec2 pos, vec2 uv, vec4 color, sampler2D tex) {
    vec4 c = def_frag();
    if (c.x >= c.y && c.x >= c.z) {
        c.z *= 1.55;
        c.y *= 1.2;
    }
    else if (c.y >= c.x && c.x >= c.z) {
        c.x *= 1.35;
        c.z *= 1.1;
    }
    else if (c.z >= c.x && c.x >= c.y) {
        c.y *= 1.2;
        c.x *= 1.05;
    }
    return c;
}