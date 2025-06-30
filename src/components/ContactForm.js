
import { motion } from "framer-motion";
import { useForm, ValidationError } from '@formspree/react';

const ContactForm = ({ formData, handleChange }) => {
    const [state, handleSubmit] = useForm("xwpbwzdl");
    // add formspree to your code
      if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }
  return (
    <motion.form 
    method="POST"
    actiom="https://formspree.io/f/xwpbwzdl"
    key="form"
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    onSubmit={handleSubmit}
    className="w-full max-w-2xl mt-10 space-y-6 bg-gray-900 p-6 rounded-xl shadow-lg"
  >
    <h2 className="text-xl font-bold text-center">
      Step 2 of 2: Fill in your contact details
    </h2>
    {["name", "email", "phone", "country"].map((field) => (
      <div key={field}>
        <label className="block capitalize">
          {field.replace(/^\w/, (c) => c.toUpperCase())} *
        </label>
        <input
          type={field === "email" ? "email" : "text"}
          name={field}
          value={formData[field]}
          onChange={handleChange}
          className="w-full px-3 py-2 text-black rounded"
          required
        />
        <ValidationError 
        prefix={field} 
        field={field}
        errors={state.errors}
      />
      </div>
    ))}
    <div>
      <label className="flex items-start gap-2">
        <input
          type="checkbox"
          name="consent"
          checked={formData.consent}
          onChange={handleChange}
          className="mt-1"
        />
        <span className="text-sm">
          I consent to receive SMS notifications, alerts, and occasional marketing messages.
        </span>
      </label>
    </div>
    <p className="text-xs text-gray-400">Privacy Policy | Terms of Service</p>
    <button
      type="submit" 
      disabled={state.submitting}
      className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:scale-105 transition"
    >
      Submit
    </button>
  </motion.form>
  )
};

export default ContactForm;
