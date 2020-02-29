var notice = document.getElementById('notice');
var modal = document.getElementById('modal');

  // モーダル表示
  notice.addEventListener('click', function() {
    modal.style.display = 'block';
  });

 // モーダル非表示
  window.addEventListener('click', function(e) {
    if (e.target == modal) {
      modal.style.display = 'none';
    }
  });
