document.addEventListener('DOMContentLoaded', function () {
    const spinner = document.getElementById('loading');
    function showSpinner(duration = 1000) {
      if (!spinner) return;
      spinner.style.display = 'flex';
      setTimeout(() => {
        spinner.style.display = 'none';
      }, duration);
    }
  
    const selectPage = document.getElementById('select-page');
    if (selectPage) {
      selectPage.addEventListener('change', () => {
        showSpinner();
      });
    }
  
    document.querySelectorAll('.pagination a').forEach(a => {
      a.addEventListener('click', function (e) {
        e.preventDefault();
        showSpinner();
      });
    });
  });
