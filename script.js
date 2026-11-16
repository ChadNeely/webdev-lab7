function init() {
  const entryInput = document.getElementById('entryinput');
  const entryButton = document.getElementById('entrybutton');
  const textOutput = document.getElementById('textoutput');

  entryButton.addEventListener('click', function () {
    const message = entryInput.value;

    window.alert('Chad Neely: ' + message);
    textOutput.textContent = message;
  });
}

window.addEventListener('load', init);
