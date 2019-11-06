// Mondrian Art Generator


class Mondrian {
    constructor(element) {
        this.element = element;
        this.colors = [
            'black',
            'red',
            'blue',
            'yellow',
            'white',
            'white',
            'white'
        ];
    }

    draw() {
        const targetElement = document.getElementById(this.element);
        const painting = `<div class="mondrian">${this._generateBlocks()}</div>`;

        targetElement.insertAdjacentHTML('beforeend', painting);
    }

    redraw() {
        const element = document.querySelector('.mondrian');
        element.parentNode.removeChild(element);

        this.draw();
    }

    _generateBlocks() {
        let blocks = ``;
        for (let i = 0; i < 50; i++) {
            let span = this._randInt(1, 5);
            let row = this._randInt(1, 5);
            let colorIndex = this._randInt(1, this.colors.length);
            blocks += `<div class="span-${span} row-${row} color-${this.colors[colorIndex]}"></div>`
        }

        return blocks;
    }

    _randInt(min, max) {
        return Math.floor(Math.random() * (max - min) + min)
    }
}

const mondrian = new Mondrian('mondrian-wrapper');
mondrian.draw();

document.getElementById("js-redraw").addEventListener("click", ()=>{
    mondrian.redraw();
});