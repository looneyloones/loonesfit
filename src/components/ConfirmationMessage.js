import { motion } from "framer-motion";

const ConfirmationMessage = () => (
  <motion.div
    key="confirmation"
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="max-w-2xl text-center mt-10 space-y-6 bg-gray-900 p-8 rounded-xl shadow-lg"
  >
    <h2 className="text-2xl font-bold text-green-400">Few important DETAILS... PLEASE READ</h2>
    <p className="text-lg leading-relaxed">
      We’ve got your application. Our team will contact you soon.
      <br /><br />
      <span className="text-red-500 font-semibold">Reply promptly</span> or risk disqualification.
    </p>
  </motion.div>
);

export default ConfirmationMessage;
