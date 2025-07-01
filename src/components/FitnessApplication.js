import {
  useState, 
  useRef, 
  AnimatePresence, 
  QuestionStep, 
  ContactForm,
  ConfirmationMessage, 
  questions, 
} from "../imports.js";

// change the ux/ui 

// add these to the import file
import ProgressDots from "./ProgressDots.js";
import IntroSection from "./IntroSection.js";


export default function FitnessApplication() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    goal: "",
    weightLoss: "",
    trainerExperience: "",
    name: "",
    email: "",
    phone: "",
    country: "",
    consent: false,
  });

  const questionsRef = useRef(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const nextStep = () => {
    if (
      (step === 1 && formData.goal) ||
      (step === 2 && formData.weightLoss) ||
      (step === 3 && formData.trainerExperience)
    ) {
      setStep(step + 1);
    } else {
      alert("Please answer the current question before proceeding.");
    }
  };

  const handleApplyNow = () => {
    if (questionsRef.current) {
      questionsRef.current.scrollIntoView({ behavior: "smooth" });
      setStep(1);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted", formData);
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white flex flex-col items-center px-4 py-10 space-y-10">
      {/* Intro Section */}

      <IntroSection />
      {/* Progress Dots */}
      <ProgressDots step={step} />

      {/* Questions */}
      <div className="w-full max-w-2xl space-y-6" ref={questionsRef}>
        <AnimatePresence mode="wait">
          {!submitted && step >= 1 && step <= 3 && (
            <QuestionStep
              step={step}
              questions={questions}
              formData={formData}
              handleChange={handleChange}
              nextStep={nextStep}
            />
          )}
        </AnimatePresence>
      </div>

      {/* Contact Form */}
      {!submitted && step === 4 && (
        <ContactForm
          formData={formData}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      )}

      {/* Confirmation Message */}
      {submitted && <ConfirmationMessage />}
    </div>
  );
}
