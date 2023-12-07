uniform float u_time;
uniform float u_width;
uniform float u_heigth;

vec4 frag(vec2 pos, vec2 uv, vec4 color, sampler2D tex) {
    vec4 c = def_frag();
    if(c.x < 0.1 && c.y < 0.1 && c.z < 0.1) {
        return vec4(0.1, 0.1, 0.1, 1);
    }
    else if (c.x < 0.2 && c.y < 0.2 && c.z < 0.2) {
        return vec4(0.2, 0.2, 0.2, 1);
    }
    else if (c.x < 0.3 && c.y < 0.3 && c.z < 0.3) {
        return vec4(0.3, 0.3, 0.3, 1);
    }
    else if (c.x < 0.4 && c.y < 0.4 && c.z < 0.4) {
        return vec4(0.4, 0.4, 0.4, 1);
    }
    else if (c.x < 0.5 && c.y < 0.5 && c.z < 0.5) {
        return vec4(0.5, 0.5, 0.5, 1);
    }
    else if (c.x < 0.6 && c.y < 0.6 && c.z < 0.6) {
        return vec4(0.6, 0.6, 0.6, 1);
    }
    else if (c.x < 0.7 && c.y < 0.7 && c.z < 0.7) {
        return vec4(0.7, 0.7, 0.7, 1);
    }
    else if (c.x < 0.8 && c.y < 0.8 && c.z < 0.8) {
        return vec4(0.8, 0.8, 0.8, 1);
    }
    else if (c.x < 0.9 && c.y < 0.9 && c.z < 0.9) {
        return vec4(0.9, 0.9, 0.9, 1);
    }
    else if (c.x < 1.0 && c.y < 1.0 && c.z < 1.0) {
        return vec4(0.95, 0.95, 0.95, 1);
    }
    return c;
}