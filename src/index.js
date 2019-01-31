const crel = require('crel')
function renderCalculator()
{
    return crel ('main',renderScreen(), renderButtons())
}
function renderInputButton(data)
{
    const button = crel('button', data)
    button.addEventListener('click', function()
    {
        const screen = document.getElementById('screen')
        screen.value = screen.value+ data
    })
    return button
}
function renderEvaluateButton()
{
    return crel ('button', 'evaluate')
}
function renderButtons()
{
    const buttons = ['1','2','3','4','5','6','7','8','9','+','-','*','/','+-','C'].map(renderInputButton())
    return crel('div', buttons, renderEvaluateButton())
}
function renderScreen()
{
    return crel ('input', {id: "screen"})
}
document.getElementById('root').appendChild(renderCalculator())