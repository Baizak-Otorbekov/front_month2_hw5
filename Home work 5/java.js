
const colors = ['#000000', '##F08080', '#0000ff', '#ffff00', '#ff00ff', '#0#4B0082'];
document.getElementById('createCircleButton').addEventListener('click', () => {
    const circlesContainer = document.getElementById('circlesContainer');
    const circle = document.createElement('div');
    circle.classList.add('circle');
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    circle.style.backgroundColor = randomColor;
    circlesContainer.appendChild(circle);
});

const button = document.querySelector('button')
button.innerText = 'home work 5'
button.style.color = 'white'
button.style.backgroundColor = '#FF0000'
button.style.width = '150px'
button.style.height = '100px'
button.style.margin = '50px'
