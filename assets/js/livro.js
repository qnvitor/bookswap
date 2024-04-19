// Câmera
var video = document.getElementById('preview');
var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
var captureButton = document.getElementById('capture');

captureButton.addEventListener('click', function() {
  navigator.mediaDevices.getUserMedia({ video: {facingMode: 'environment'}})
    .then(function(stream) {
      video.srcObject = stream;
      video.style.display = 'block';
      video.onloadedmetadata = function(e) {
        video.play();
        context.drawImage(video, 0, 0, canvas.width, canvas.height);
        // Aqui você pode fazer o que quiser com a imagem capturada
            // Exibir a imagem capturada
    const capturedImage = document.getElementById('canvas');
    capturedImage.src = canvas.toDataURL();
    capturedImage.style.display = 'block';
      };
    })
    .catch(function(error) {
      console.log("Algo deu errado!");
    });
});
