let sliders = document.querySelectorAll('input[type="range"]');
let colors = document.querySelectorAll('input[type="color"]');
let output = document.getElementById("csscode");
let btncopy = document.getElementById('copy');

sliders.forEach(sliders => {
    sliders.addEventListener('input', createBox);
});

colors.forEach(color => {
    color.addEventListener('change', createBox);
});

btncopy.addEventListener('click', () => {
    output.select();
    document.execCommand('copy');
    alert('code copied');
});

function createBox() {
    let X = sliders[0].value;
    let Y = sliders[1].value;
    let blurRadius = sliders[2].value;
    let spreadRadius = sliders[3].value;

    let shadowColor = colors[0].value;
    let boxShadow = `${X}px ${Y}px ${blurRadius}px ${spreadRadius}px`;

    document.getElementById('box').style.cssText = `box-shadow: ${boxShadow} ${shadowColor}`;
    output.value = `box-shadow: ${boxShadow}`;
}

createBox();