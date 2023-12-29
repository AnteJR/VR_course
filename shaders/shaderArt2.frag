// shader Art #2
uniform float u_time;
uniform float u_width;
uniform float u_height;

vec3 palette( float t ) {
    vec3 a = vec3(0.5, 0.5, 0.5);
    vec3 b = vec3(0.5, 0.5, 0.5);
    vec3 c = vec3(1.0, 1.0, 1.0);
    vec3 d = vec3(0.4, 0.5, 0.6);

    return a + b * cos(6.28318 * (c * t + d));
}

vec4 frag(vec2 pos, vec2 uv, vec4 color, sampler2D tex) {
    pos.x *= u_width / u_height;
    vec2 pos0 = pos;

    vec3 col = palette(length(pos0) - u_time * .1);
    vec3 final = vec3(0.);

    for (float i = 1.; i <= 3.; i++) {
        float d = length(pos);
        d = sin(d * 2. + u_time * 2.) / 400.;
        d = 0.01 / d;
        d = abs(d);
        d = smoothstep (0., 5., d);

        col *= d;

        final = abs(tan(col * 3.) / 2.);
    }

    return vec4(final, 1.0);
}