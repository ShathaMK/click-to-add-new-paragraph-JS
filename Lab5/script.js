document.addEventListener('DOMContentLoaded', function() {
    const parent = document.getElementById('parent-element');
    const firstParagraph = document.getElementById('first-paragraph');
    
    firstParagraph.addEventListener('click', function() {
      const newParagraph = document.createElement('p');
      newParagraph.textContent = 'This is the new paragraph';
      parent.insertBefore(newParagraph, parent.children[1]);
      newParagraph.style.display = 'block';
    });
  });