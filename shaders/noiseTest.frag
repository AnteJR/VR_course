// animated noise / snow

uniform float u_time;

// function to generate random value between 0 and 1
float rand(vec2 no) {
    float timeFrequency = 1.0;
    return fract(sin(dot(no.xy + (u_time * timeFrequency), vec2(12.9898, 78.233))) * 43758.5453);
}

vec4 frag(vec2 pos, vec2 uv, vec4 color, sampler2D tex) {
    vec4 c = texture2D(tex, uv);

    // add noise
    // generate random value for each pixel
    float noise = rand(pos);
    c.rgb += noise * 0.1;

    return c;
}