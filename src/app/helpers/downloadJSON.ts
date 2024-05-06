export const downloadJSON = (object: {}) => {
  // Convert the object to a JSON string
  const jsonData = JSON.stringify(object);

  // Create a Blob object from the JSON string
  const blob = new Blob([jsonData], { type: 'application/json' });

  // Create a link element
  const link = document.createElement('a');
  link.download = 'form.json';
  link.href = URL.createObjectURL(blob);

  // Append the link to the document body
  document.body.appendChild(link);

  // Programmatically click the link to trigger the download
  link.click();

  // Clean up by removing the link element
  document.body.removeChild(link);
};
