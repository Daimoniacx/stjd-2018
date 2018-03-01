precision highp float;

varying vec2 positionPixel;
vec2 luz = vec2(-1.0, -1.0);

void main() {

	gl_FragColor = vec4(positionPixel,0.0,1.0);
}
