const [name, setName] = useState('');
// const [email, setEmail] = useState('');
const [message, setMessage] = useState('');

const handleSendEmail = () => {

  // Construct a "mailto" URL with email, subject, and body
  const mailtoLink = `mailto:joshiak3252@gmail.com?subject=Contact Request from ${name}&body=${message}`;
  
  // Open the default email client with the pre-filled email
  window.location.href = mailtoLink;
};