function handleSubmit() {
    const formData = {
        payload: document.getElementById('textarea').value,
        type: document.getElementById('json_convertTo').value,
        email: document.getElementById('json_email').value
    };

    console.log('Form Data:', formData);

    fetch('https://super-doodle-975q97jxj4773r7x-8999.app.github.dev/api/v1/convertorhub/fileconvertor', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        console.log('Response:', data);
        alert('Email Sent!');
    })
    .catch(error => {
        console.error('Error:', error);
    });
}
