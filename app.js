 // Tên engine của con sẽ hiển thị ở tiêu đề của trang. Con có thể đặt tên gì cũng được.
    // Con có thể đổi thành AnFish, MinhFish, KhangFish...
    const engineName = "AnFish";

    // Máy tính không nhìn thấy quân cờ thật.
    // Nó nhìn bàn cờ bằng một mảng 2 chiều gồm 8 hàng và 8 cột.
    const board = [
      ["r","n","b","q","k","b","n","r"],
      ["p","p","p","p","p","p","p","p"],
      [".",".",".",".",".",".",".","."],
      [".",".",".",".",".",".",".","."],
      [".",".",".",".",".",".",".","."],
      [".",".",".",".",".",".",".","."],
      ["P","P","P","P","P","P","P","P"],
      ["R","N","B","Q","K","B","N","R"]
    ];

    // Chữ hoa là quân trắng, chữ thường là quân đen.
    // Ví dụ: P là tốt trắng, p là tốt đen.
    const pieces = {
      K: "♔", Q: "♕", R: "♖", B: "♗", N: "♘", P: "♙",
      k: "♚", q: "♛", r: "♜", b: "♝", n: "♞", p: "♟",
      ".": ""
    };

    const boardElement = document.getElementById("board");
    const titleElement = document.getElementById("title");

    titleElement.textContent = engineName + " - AI Cờ Vua Của Con";

    function renderBoard() {
      boardElement.innerHTML = "";

      for (let row = 0; row < 8; row++) {
        for (let col = 0; col < 8; col++) {
          const square = document.createElement("div");
          square.className = "square";

          // Nếu tổng hàng + cột là số chẵn thì ô sáng, ngược lại là ô tối.
          if ((row + col) % 2 === 0) {
            square.classList.add("light");
          } else {
            square.classList.add("dark");
          }

          const pieceCode = board[row][col];
          square.textContent = pieces[pieceCode];

          boardElement.appendChild(square);
        }
      }
    }

    renderBoard();