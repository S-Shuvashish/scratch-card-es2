var num = Math.floor(Math.random() *1) + 1;
$('#scratch-card').wScratchPad({
  size        : 100,          // The size of the brush/scratch.
  bg          : 'images/invitation 300-01.jpg',  // Background (image path or hex color).
  fg          : 'images/Screenshot 2024-02-25 105235.png',  // Foreground (image path or hex color).
  realtime    : true,       // Calculates percentage in realitime.
  scratchDown : null,       // Set scratchDown callback.
  scratchUp   : null,       // Set scratchUp callback.
  scratchMove : null,       // Set scratcMove callback.
  cursor      : 'pointer' // Set cursor.
});