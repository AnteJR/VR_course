// orange tint like an old Siemens phone

vec4 frag(vec2 pos, vec2 uv, vec4 color, sampler2D tex) {
    vec4 c = def_frag();
    if(c.x < 0.1 && c.y < 0.2 && c.z < 0.2) {
        return vec4(0.1, 0.04, 0.01, 1);
    }
    else if (c.x < 0.2 && c.y < 0.4 && c.z < 0.4) {
        return vec4(0.3, 0.11, 0.03, 1);
    }
    else if (c.x < 0.3 && c.y < 0.5 && c.z < 0.5) {
        return vec4(0.4, 0.14, 0.05, 1);
    }
    else if (c.x < 0.4 && c.y < 0.6 && c.z < 0.6) {
        return vec4(0.5, 0.17, 0.06, 1);
    }
    else if (c.x < 0.5 && c.y < 0.7 && c.z < 0.7) {
        return vec4(0.6, 0.2, 0.09, 1);
    }
    else if (c.x < 0.6 && c.y < 0.8 && c.z < 0.8) {
        return vec4(0.7, 0.23, 0.11, 1);
    }
    else if (c.x < 0.7 && c.y < 0.9 && c.z < 0.9) {
        return vec4(0.8, 0.26, 0.13, 1);
    }
    else if (c.x < 0.8 && c.y < 0.9 && c.z < 0.9) {
        return vec4(0.9, 0.29, 0.15, 1);
    }
    else if (c.x < 0.9 && c.y < 0.9 && c.z < 0.9) {
        return vec4(0.95, 0.3, 0.16, 1);
    }
    else if (c.x < 1.0 && c.y < 1.0 && c.z < 1.0) {
        return vec4(1.0, 0.32, 0.17, 1);
    }
    return c;
}