// shader Art #3
uniform float u_time;
uniform float u_width;
uniform float u_height;

// from https://www.shadertoy.com/view/7sdXz2
float sdRoundSquare( in vec2 p, in float s, in float r ) {
    vec2 q = abs(p)-s+r;
    return min(max(q.x,q.y),0.0) + length(max(q,0.0)) - r;
}

vec3 palette( float t ) {
    vec3 a = vec3(0.5, 0.5, 0.5);
    vec3 b = vec3(0.5, 0.5, 0.5);
    vec3 c = vec3(1.0, 1.0, 1.0);
    vec3 d = vec3(0.4, 0.5, 0.6);

    return a + b * cos(6.28318 * (c * t + d));
}

vec4 frag(vec2 pos, vec2 uv, vec4 color, sampler2D tex) {
    uv = (uv - .5) * 2.;
    uv.x *= u_width / u_height;
    uv = fract (uv * .5);
    uv -= .5;
    vec3 final = vec3(0.);

    for (float i = 1.; i <= 5.; i++) {
        uv = fract (sin(uv * (i / 2.)));
        uv -= .5;

        vec3 col = palette(length(pos) + (i * .5));

        float d = sdRoundSquare(uv, 0.5, .25);
        d = sin(d * 10. + u_time) / (5. / (i / 2.));
        d = abs(d);
        d = pow(0.01 / d, 2. * (i / 2.));

        final += col * d;
    }


    return vec4(final, 1.);
}