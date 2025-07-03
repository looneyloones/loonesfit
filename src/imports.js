import { useState, useRef } from "react";
import { AnimatePresence } from "framer-motion";
import QuestionStep from "././data/QuestionStep.js";
import ContactForm from "././components/ContactForm";
import ConfirmationMessage from "././components/ConfirmationMessage";
import {questions} from "././data/questions";


// look for a better solution 
export {
    useRef, 
    useState, 
    AnimatePresence, 
    QuestionStep, 
    ContactForm, 
    ConfirmationMessage, 
    questions, 
};