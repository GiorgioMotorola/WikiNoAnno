function cleanInput() {
  
    const inputBox = document.getElementById('input-box');
    const outputBox = document.getElementById('output-box');
    const inputText = inputBox.value;
    const cleanedText = inputText.replace(/\[(.*?)\]/g, '');
    outputBox.value = cleanedText;
  }