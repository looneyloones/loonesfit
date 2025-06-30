import QuestionStep from "../data/QuestionStep.js";

const ProgressDots = ({step, submitted}) => {
          {step >= 1 && step <= 4 && !submitted && (
        <div className="flex space-x-2">
          {[1, 2, 3, 4].map((s) => (
            <div
              key={s}
              className={`w-3 h-3 rounded-full ${
                step >= s ? "bg-white" : "bg-gray-600"
              }`}
            />
          ))}
        </div>
      )}
}

export default ProgressDots