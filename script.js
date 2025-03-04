async function generateImage() {
    const prompt = document.getElementById('prompt').value;
    const apiKey = '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'; // Replace with your actual API key
    const url = 'https://api-inference.huggingface.co/models/black-forest-labs/FLUX.1-dev';
    
    document.getElementById('loading').classList.remove('hidden');
    document.getElementById('image-container').innerHTML = '';
    
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${apiKey}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ inputs: prompt })
    });
    
    document.getElementById('loading').classList.add('hidden');
    
    if (!response.ok) {
        alert('Error generating image. Please try again.');
        return;
    }
    
    const blob = await response.blob();
    const imageUrl = URL.createObjectURL(blob);
    
    document.getElementById('image-container').innerHTML = `<img src="${imageUrl}" alt="Generated Image">`;
}
