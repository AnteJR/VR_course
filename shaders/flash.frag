// flash shader
uniform float u_time;
uniform float u_flashLength;

vec4 frag(vec2 pos, vec2 uv, vec4 color, sampler2D tex) {
    vec4 c = def_frag();

    float flashDuration = u_flashLength;
    float flashFrequency = 5.;
    float repeatInterval = 4.0;

    // calculate the repeated time within the interval
    float repeatedTime = mod(u_time, repeatInterval);

    // calculate flash intensity using a sine function
    float flashIntensity = abs(sin(repeatedTime * flashFrequency)) * step(repeatedTime, flashDuration);

    c.rgb = mix(c.rgb, vec3(1.0), flashIntensity);

    return c;
}
