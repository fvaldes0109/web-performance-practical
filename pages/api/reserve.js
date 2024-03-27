export default function handler(req, res) {
  if (req.method === "POST") {
    // Process a POST request
    const data = req.body; // Access the data sent in the request
    console.log(data);
    
    fetch('https://httpbin.org/status/200', {
      method: 'POST',
      body: JSON.stringify(data),
  }).then(() => {
    res.status(200).json({ status: 'success' });
  }).catch((error) => {
    console.error('Error:', error);
    res.status(500).json({ status: 'error' });
  });


  } else {
    // Handle any other HTTP method
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
