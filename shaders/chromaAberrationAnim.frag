uniform float u_time;
uniform float u_amount;

// function to generate random value between 0 and 1
float rand(vec2 c) {
    float timeFrequency = 0.1;
    return mix(0.001, 0.005, fract(sin(dot(c.xy, vec2(12.9898, 78.233))) * 43758.5453));
}

vec4 frag(vec2 pos, vec2 uv, vec4 color, sampler2D tex) {
    vec4 c = texture2D(tex, uv);

    // calculate chromatic aberration offset once
    float offset = u_amount * rand(vec2(0.001, 0.001));
    
    // define the position and thickness of the vertical line
    float lineSpeed = 2.;
    float lineWidth = 0.5;
    float linePosition = mod(u_time * lineSpeed, 1.2);
    float distanceToLine = abs(uv.x - linePosition);

    // apply chromatic aberration within the specified line width
    float blendFactor = smoothstep(0.0, lineWidth * 1.05, distanceToLine);
    
    // sample the texture with offset for each color channel
    vec4 redChannel = texture2D(tex, uv + vec2(offset, 0));
    vec4 greenChannel = texture2D(tex, uv + vec2(0, offset));
    vec4 blueChannel = texture2D(tex, uv + vec2(0, offset));

    // combine the channels with the original color
    c.rgb = mix(c.rgb, vec3(redChannel.r, greenChannel.g, blueChannel.b), blendFactor);

    return c;
}