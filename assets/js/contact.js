(function(){
  var form = document.getElementById('contactForm');
  if(!form) return;

  var submitBtn = document.getElementById('cf-submit');
  var statusEl = document.getElementById('cf-status');
  var ENDPOINT = 'https://formsubmit.co/ajax/sammanlamsal31@gmail.com';

  function setStatus(kind, msg){
    statusEl.className = 'form-status' + (kind ? ' ' + kind : '');
    if(kind === 'sending'){
      statusEl.innerHTML = '<span class="spin" aria-hidden="true"></span>' + msg;
    } else {
      statusEl.textContent = msg;
    }
  }

  function clearFieldError(fieldEl){
    fieldEl.classList.remove('invalid');
  }

  function markFieldError(fieldEl){
    fieldEl.classList.add('invalid');
  }

  function isValidEmail(v){
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
  }

  function validate(){
    var ok = true;
    var name = form.querySelector('#cf-name');
    var email = form.querySelector('#cf-email');
    var message = form.querySelector('#cf-message');

    var nameField = name.closest('.field');
    var emailField = email.closest('.field');
    var msgField = message.closest('.field');

    clearFieldError(nameField);
    clearFieldError(emailField);
    clearFieldError(msgField);

    if(!name.value.trim()){ markFieldError(nameField); ok = false; }
    if(!email.value.trim() || !isValidEmail(email.value.trim())){ markFieldError(emailField); ok = false; }
    if(!message.value.trim() || message.value.trim().length < 5){ markFieldError(msgField); ok = false; }

    return ok;
  }

  form.addEventListener('input', function(e){
    var field = e.target.closest('.field');
    if(field) clearFieldError(field);
  });

  form.addEventListener('submit', function(e){
    e.preventDefault();

    // Honeypot check: silently drop bot submissions
    var gotcha = form.querySelector('[name="_gotcha"]');
    if(gotcha && gotcha.value){ return; }

    if(!validate()){
      setStatus('err', 'Please check the highlighted fields.');
      return;
    }

    var name = form.querySelector('#cf-name').value.trim();
    var email = form.querySelector('#cf-email').value.trim();
    var reason = form.querySelector('#cf-reason').value;
    var game = form.querySelector('#cf-game').value.trim();
    var message = form.querySelector('#cf-message').value.trim();

    submitBtn.disabled = true;
    setStatus('sending', 'Sending…');

    var payload = {
      name: name,
      email: email,
      reason: reason,
      game: game || 'Not specified',
      message: message,
      _subject: 'MASARP Studio contact: ' + reason + ' from ' + name,
      _captcha: 'false',
      _template: 'table'
    };

    fetch(ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify(payload)
    })
      .then(function(res){ return res.json().then(function(data){ return { ok: res.ok, data: data }; }); })
      .then(function(result){
        if(result.ok && result.data && result.data.success !== false){
          setStatus('ok', 'Message sent. Thanks, you\'ll hear back soon.');
          form.reset();
        } else {
          throw new Error('Server rejected the submission');
        }
      })
      .catch(function(){
        setStatus('err', 'Something went wrong. Please try again, or email directly.');
      })
      .finally(function(){
        submitBtn.disabled = false;
      });
  });
})();
