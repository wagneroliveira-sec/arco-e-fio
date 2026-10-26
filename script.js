// Popovers da anatomia do violino (componente do Bootstrap)
document.querySelectorAll('[data-bs-toggle="popover"]').forEach(function (el) {
  new bootstrap.Popover(el);
});

// Validação do formulário e modal de confirmação
var form = document.getElementById('form-cadastro');
form.addEventListener('submit', function (e) {
  e.preventDefault();
  if (!form.checkValidity()) {
    form.classList.add('was-validated');
    return;
  }
  document.getElementById('nomeOk').textContent = document.getElementById('nome').value.split(' ')[0];
  new bootstrap.Modal(document.getElementById('modalOk')).show();
  form.reset();
  form.classList.remove('was-validated');
});
