attribute vec2 position;

void main() {
	gl_PointSize = 35.0;
	gl_Position = vec4(position.x + 1.0, position.y , 1.0, 1.0);
}
