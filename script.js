document.addEventListener('DOMContentLoaded', function () {

    let button = document.createElement('button');
    document.body.appendChild(button);

    let buttonText = document.createTextNode('Add Square');
    button.appendChild(buttonText);

    let container = document.createElement('div');
    document.body.appendChild(container);
    container.className = 'container';


    let boxCount = 0;

    button.addEventListener('click', addBox);

    function addBox() {

        let box = document.createElement('div');
        container.appendChild(box);
        box.className = 'box';

        let boxText = document.createTextNode(boxCount);
        boxText = boxCount++;
        box.id = boxText;
        //boxText.className = 'boxText';

        box.addEventListener('mouseover', function () {
            box.append(boxText);
        });

        box.addEventListener('mouseout', disappear);

        function disappear() {
            console.log('worked');
            box.innerText = "";
            // COULD ALSO USE:
            // box.childNodes[0].remove();
        }

        box.addEventListener('click', randomColor);

        function randomColor(e) {
            let colors = ['blue', 'teal', 'turquoise', 'light green', 'orange'];
            let newColor = colors[Math.floor(Math.random() * colors.length)];
            e.target.style.background = newColor;
        }

        box.addEventListener('dblclick', removeSibling);

        function removeSibling() {
            // FIND A WAY TO PREVENT CLICK ON BOX '0' FROM REMOVING FINAL BOX
            if (box.id === 0) {
                alert('There isn\'t a square before!');
            }
            if (box.nextElementSibling === null) {
                alert('There isn\'t a square after!');
            }
            if (box.id % 2 === 0) {
                container.removeChild(box.nextSibling);
            }
            if (box.previousElementSibling === null) {
                alert('There isn\'t a square before!');
            }
            if (box.id % 2 !== 0) {
                container.removeChild(box.previousSibling);
            }
        }
    };
})