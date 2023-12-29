// simple pixel sorting, that can be animated or not
uniform float u_time;
uniform float u_isAnimated;
uniform float u_intensity;

float rand(float co) { return fract(sin(co*(91.3458)) * 47453.5453); }

vec4 frag(vec2 pos, vec2 uv, vec4 color, sampler2D tex) {

    // declare variables for y-axis deformation
    vec2 psort = 1. / uv;
    float deform_y;

    // check if the shader is animated
    if(u_isAnimated > 0.) {
        deform_y = psort.y * (rand(uv.x) * sin(u_time) * u_intensity);
    }
    else {
        deform_y = psort.y * (rand(uv.x) * u_intensity);
    }
    
    // apply y-axis deformation to UV coordinates and return the texture affected by it
    uv.y += deform_y;
    return texture2D(tex, uv);
}