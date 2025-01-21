function handleSubmit() {
    const formData = {
        payload: document.getElementById('textarea').value,
        type: document.getElementById('json_convertTo').value,
        email: document.getElementById('json_email').value
    };

    console.log('Form Data:', formData);

    fetch('https://UnknowProject.com/jsonConvertor', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
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
