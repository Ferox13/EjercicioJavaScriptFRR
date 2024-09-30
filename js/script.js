    const container = document.getElementById('button-container');

    function createButtons(rows, cols) {
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                const button = document.createElement('button');
                button.classList.add('button'); 
                button.textContent = Math.floor(Math.random() * 12);
                container.appendChild(button);
            }
        }
    }
    createButtons(3, 4);
