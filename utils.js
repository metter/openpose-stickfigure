function keyPressed() {
    // Press ENTER to capture the canvas image and send it as msg.pose
    if (keyCode === ENTER) {
        // Capture the canvas as an image in base64 format
        const imageDataURL = canvas.toDataURL('image/png'); // You can specify the desired image format here

        // Create a message object
        const msg = {
            payload: 'pose', // Replace with your desired message
            pose: imageDataURL, // Attach the captured image as a base64 string
        };

        // Send the message to Node-RED or your preferred destination
        send(msg);
    }
}
