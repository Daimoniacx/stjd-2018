precision highp float;

uniform vec2 luzPos;

varying vec2 positionPixel;
vec2 luz = luzPos; //vec2(-1.0, -1.0);

float r2 = 2.83;

float d = 1.0 - (distance(luz, positionPixel) / r2);

void main() {

	gl_FragColor = vec4(d,d,d,1.0);
}
