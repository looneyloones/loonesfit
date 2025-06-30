import { motion } from "framer-motion"; 

const QuestionStep = ({ step, questions, formData, handleChange, nextStep }) => {
  const question = questions[step - 1];

  return (
    <motion.div
      key={step}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-900 p-6 rounded-xl shadow-lg"
    >
      <label className="block text-lg font-semibold mb-4">
        {question.label}
      </label>
      {question.options.map((option) => (
        <label
          key={option}
          className={`block py-2 px-4 my-1 rounded-xl border ${
            formData[question.name] === option
              ? "bg-white text-black font-semibold"
              : "border-gray-700 hover:bg-gray-800"
          } cursor-pointer transition`}
        >
          <input
            type="radio"
            name={question.name}
            value={option}
            onChange={handleChange}
            checked={formData[question.name] === option}
            className="hidden"
          />
          {option}
        </label>
      ))}
      <button
        onClick={nextStep}
        className="mt-6 w-full bg-white text-black py-3 rounded-full font-semibold hover:scale-105 transition"
      >
        Next
      </button>
    </motion.div>
  );
};

export default QuestionStep;
