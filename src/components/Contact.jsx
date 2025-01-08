
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
  const [state, handleSubmit] = useForm("mrbbovpb");
  if (state.succeeded) {
    return <p>Thanks for contacting us!</p>;
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="firstName">First Name</label>
      <input
        id="firstName"
        type="text"
        name="firstName"
        required
      />

      <label htmlFor="lastName">Last Name</label>
      <input
        id="lastName"
        type="text"
        name="lastName"
        required
      />

      <label htmlFor="whatsapp">WhatsApp Number (with country code)</label>
      <input
        id="whatsapp"
        type="tel"
        name="whatsapp"
        placeholder="e.g., +1 1234567890"
        pattern="\+?[0-9 ]+"
        required
      />

      <label htmlFor="phone">Phone Number (with country code)</label>
      <input
        id="phone"
        type="tel"
        name="phone"
        placeholder="e.g., +1 1234567890"
        pattern="\+?[0-9 ]+"
        required
      />

      <label htmlFor="email">Email Address</label>
      <input
        id="email"
        type="email"
        name="email"
        required
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />

      <label htmlFor="country">Country</label>
      <select id="country" name="country" required>
        <option value="">Select your country</option>
        <option value="US">United States</option>
        <option value="NG">Nigeria</option>
        <option value="GB">United Kingdom</option>
        <option value="IN">India</option>
        <option value="CA">Canada</option>
        <option value="AU">Australia</option>
        {/* Add more countries as needed */}
      </select>

      <label htmlFor="file">Upload File</label>
      <input
        id="file"
        type="file"
        name="file"
      />

      <label htmlFor="message">Message</label>
      <textarea
        id="message"
        name="message"
        required
      ></textarea>
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />

      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
  );
}

function App() {
  return (
    <ContactForm />
  );
}

export default App;
