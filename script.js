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
            let even = box.id % 2;
            if (even === 0) {
                if (box.nextSibling !== null) {
                    box.nextSibling.remove();
                } else {
                    alert("There isn\'t a box to remove!");
                }
            } else {
                if (box.previousSibling !== null) {
                    box.previousSibling.remove();
                } else {
                    alert("There isn\'t a box to remove!");
                }
            }
            
        }
        
    };
})