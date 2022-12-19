<script>
  var disqusButton = document.getElementById('disqus-button');
  var gitalkButton = document.getElementById('gitalk-button');

  disqusButton.addEventListener('click', function() {
    disqusButton.classList.add('active');
    gitalkButton.classList.remove('active');
    document.getElementById('disqus_thread').style.display = 'block';
    document.getElementById('gitalk-container').style.display = 'none';
  });

  gitalkButton.addEventListener('click', function() {
    gitalkButton.classList.add('active');
    disqusButton.classList.remove('active');
    document.getElementById('gitalk-container').style.display = 'block';
    document.getElementById('disqus_thread').style.display = 'none';
  });
</script>
