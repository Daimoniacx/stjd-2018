precision highp float;

attribute vec2 position;
varying vec2 cor;

void main() {
	cor = position;
	gl_Position = vec4(position.xy , 1.0, 1.0);
}
