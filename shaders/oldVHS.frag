// inspired and helped by the work of Drudgerist https://www.shadertoy.com/view/fdBfRw
// upgraded version of the VHS effect designed by the Kaboom JS team
// is developped in steps :
//      1. deform the screen and trim the edges
//      2. apply directional, animated blur to the screen
//      3. discolour the blurred image
//      4. add scanlines

uniform float u_time;
uniform float u_blurIntensity;

const int SampleCount = 64;
float GlobalIntensity = 0.1;

// blur
vec4 directionalBlur(sampler2D samp, vec2 uv, vec2 direction, float intensity) {
    vec4 b = vec4(0.0);  
    for (int i=1; i<=SampleCount; i++)
    {
        // random float to switch up the direction of the blur, put in a sin function for modulations
        float rand = sin(intensity * 0.7 + (u_time * float(i))) / 0.9;

        // blur intensity and application
        float intensBase = float(i) * intensity;
        float intensNormalized = intensBase * u_blurIntensity / float(SampleCount);
        b += texture2D(samp, uv + (intensNormalized * direction * rand));
    }

    return b / float(SampleCount);    
}

vec4 frag(vec2 pos, vec2 uv, vec4 color, sampler2D tex) {
    // deform the screen
	vec2 center = vec2(0.5, 0.5);
	vec2 off_center = uv - center;
	off_center *= 1.0 + pow(abs(off_center.yx), vec2(3.75));
	vec2 uv2 = center + off_center;

    // trim the edges
	if (uv2.x > 1.0 || uv2.x < 0.0 || uv2.y > 1.0 || uv2.y < 0.0) {
		return vec4(0.0, 0.0, 0.0, 1.0);
	}

    // set up the blur parameters
    vec2 direction = vec2(0.1,0.0);
    float dist = length(direction) / length(1.);

    // deform the base texture
    vec4 c = vec4(texture2D(tex, uv2).rgb, 1.0);

    // apply blur by calling the directionalBlur function/vector
    c = directionalBlur(tex, uv2, normalize(direction), dist * GlobalIntensity);

    // discolor the result
    if (c.x >= c.y && c.x >= c.z * 1.2) {
        c.z *= 1.55;
        c.y *= 1.2;
    }
    else if (c.y >= c.z && c.y >= c.x * 1.2) {
        c.x *= 1.35;
        c.z *= 1.1;
    }
    else if (c.z >= c.x && c.z >= c.y * 1.2) {
        c.y *= 1.2;
        c.x *= 1.05;
    }

    // add the scanlines
    float count = 120.;
    float lines = fract((uv2.y + (u_time * 0.001)) * count);
    lines = min(1.0, 0.8 + 0.5 * min(lines, 1.0 - lines));
    c.rgb *= lines;

    // return the shader
    return c;
}