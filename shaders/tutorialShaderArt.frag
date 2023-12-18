// base CRT shader from Kaboom JS
uniform float u_time;
uniform float u_width;
uniform float u_height;

vec3 palette( float t ) {
    vec3 a = vec3(0.5, 0.5, 0.5);
    vec3 b = vec3(0.5, 0.5, 0.5);
    vec3 c = vec3(1.0, 1.0, 1.0);
    vec3 d = vec3(0.263,0.416,0.557);

    return a + b*cos( 6.28318*(c*t+d) );
}

vec4 frag(vec2 pos, vec2 uv, vec4 color, sampler2D tex) {
    pos.x *= u_width / u_height;
    vec2 pos0 = pos;
    vec3 finalColor = vec3(0.0);

    for (float i = 0.; i < 4.; i++) {
        pos = fract(pos * 1.5) - .5;

        float d = length(pos) * exp(-length(pos0));

        vec3 col = palette(length(pos0) + i*.4 + u_time * .4);

        d = sin(d * 8. + u_time) / 8.;
        d = abs(d);
        d = pow(0.01 / d, 1.2);

        finalColor += col * d;
    }
    
    return vec4(finalColor, 1.0);
}