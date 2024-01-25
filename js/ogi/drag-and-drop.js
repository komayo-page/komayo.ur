export function initializeOgiDragAndDrop() {
  const pieces = document.querySelectorAll('.piece');
  const squares = document.querySelectorAll('.square');

  let draggedPiece = null;

  pieces.forEach(piece => {
      piece.addEventListener('dragstart', (e) => {
          draggedPiece = e.target;
      });
  });

  squares.forEach(square => {
      square.addEventListener('dragover', (e) => {
          e.preventDefault();
      });

      square.addEventListener('drop', (e) => {
          e.preventDefault();
          if (square !== draggedPiece.parentNode) {
              square.appendChild(draggedPiece);
          }
      });
  });
}
