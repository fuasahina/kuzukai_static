var notice = document.getElementById('notice');
var modal = document.getElementById('modal');
var message = document.getElementById('message');
var modal2 = document.getElementById('modal2');

  // モーダル表示
  notice.addEventListener('click', function() {
    modal.style.display = 'block';
  });
  // モーダル表示
  message.addEventListener('click', function() {
    modal2.style.display = 'block';
  });

 // モーダル非表示
  window.addEventListener('click', function(e) {
    if (e.target == modal) {
      modal.style.display = 'none';
    }
  });

  // モーダル非表示
   window.addEventListener('click', function(e) {
     if (e.target == modal2) {
       modal2.style.display = 'none';
     }
   });
