const contact = () => {
  let form = document.createElement('form');
  form.className = 'form-style-8';
  
  let nameInput = document.createElement('input');
  nameInput.type = 'text';
  nameInput.name = 'field1';
  nameInput.placeholder = 'Full name';
  
  let emailInput = document.createElement('input');
  emailInput.type = 'email';
  emailInput.name = 'field2';
  emailInput.placeholder = 'Email';

  let messageInput = document.createElement('textarea');
  messageInput.placeholder = 'Message';
  messageInput.setAttribute('onkeyup', 'adjust_textarea(this)');

  let submit = document.createElement('input');
  submit.type = 'button';
  submit.value = 'Send Message';

  form.appendChild(nameInput);
  form.appendChild(emailInput);
  form.appendChild(messageInput);
  form.appendChild(submit);

  return form;
}

export default contact;