import p5 from 'p5';


const sketch = (p: p5) => {

	class Pixel {
		activated = false;
		x: number;
		y: number;
		l: number;
		g: Grid;

		constructor(x: number, y: number, l: number, g: Grid) {
			this.x = x;
			this.y = y;
			this.l = l;
			this.g = g;
		}

		display() {
			p.noStroke();
			if (this.activated)
				p.fill(0);
			else
				p.fill(255);
			p.rect(this.x, this.y, this.l, this.l);
		}
	}

	class Grid {
		w: number;
		h: number;

		oldMouseX: number | undefined = undefined;
		oldMouseY: number | undefined = undefined;
		oldMousePressed: boolean = false;

		pixels: Pixel[] = [];

		constructor(w: number, h: number) {
			this.w = w;
			this.h = h;

			let px: number, py: number, pl: number, pg: Grid;
			for (let x = 0; x < this.w; x++) {
				for (let y = 0; y < this.h; y++) {
					px = x * p.width / this.w;
					py = y * p.height / this.h;
					pl = p.width / this.w;
					pg = this;
					this.pixels.push(new Pixel(px, py, pl, pg));
				}
			}
		}

		lines() {
			let c = 0;
			p.stroke(0);
			for (let x = 0; x <= this.w; x++) {
				c = x * p.width / this.w;
				p.line(c, 0, c, p.height);
			}
			for (let y = 0; y <= this.h; y++) {
				c = y * p.height / this.h;
				p.line(0, c, p.width, c);
			}
		}

		display() {

			if (this.oldMouseX == undefined)
				this.oldMouseX = p.mouseX;

			if (this.oldMouseY == undefined)
				this.oldMouseY = p.mouseY;


			for (let px of this.pixels) {
				px.display();
			}

			this.lines();

			// get all pixels in the line between the old and the new mouse position
			let x1 = Math.floor(this.oldMouseX / p.width * this.w);
			let y1 = Math.floor(this.oldMouseY / p.height * this.h);
			let x2 = Math.floor(p.mouseX / p.width * this.w);
			let y2 = Math.floor(p.mouseY / p.height * this.h);

			let dx = Math.abs(x2 - x1);
			let dy = Math.abs(y2 - y1);
			let sx = (x1 < x2) ? 1 : -1;
			let sy = (y1 < y2) ? 1 : -1;
			let err = dx - dy;

			while (true) {
				let c = x1 * this.h + y1;

				if (c > 0 && c < this.pixels.length) {
					let px = this.pixels[c];
					if (p.mouseIsPressed) {
						px.activated = true;
						this.oldMousePressed = true;
					}
				}
				else
					break;

				if ((x1 == x2) && (y1 == y2)) break;
				let e2 = 2 * err;

				if (e2 > -dy) {
					err -= dy;

					x1 += sx;
				}

				if (e2 < dx) {
					err += dx;

					y1 += sy;
				}
			}



			this.oldMouseX = p.mouseX;
			this.oldMouseY = p.mouseY;

			if (this.oldMousePressed == true && p.mouseIsPressed == false) {
				this.oldMousePressed = false;
				this.extract();
			}
		}

		extract() {
			let arr: number[] = [];
			let s = "";
			for (let px of this.pixels) {
				if (px.activated)
					arr.push(1);
				else
					arr.push(0);
			}
			s = arr.join("");

			// post request to /send with the string s
			let j = { data: s }
			console.log(j)

			fetch('/api/send', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(j)
			}).then(res => {
				let r = res.json().then(r => {
					console.log(r)
				})
			}
			)

			return s;
		}

		reset() {
			for (let px of this.pixels) {
				px.activated = false;
			}
		}
	}

	let g: Grid;

	p.setup = () => {
		p.createCanvas(400, 400);
		g = new Grid(28, 28);
	};

	p.draw = () => {
		// p.background('#3178c6');
		g.display();
	};

	p.keyPressed = () => {
		if (p.key === 'e')
			g.extract();
		if (p.key === 'r') {
			g.reset();
		}
	}
};

new p5(sketch);