import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";

const validationSchema = Yup.object().shape({
  goals: Yup.string().required("Goals are required"),
  days: Yup.number()
    .min(1, "Minimum 1 day")
    .max(7, "Maximum 7 days")
    .required("Number of days is required"),
  trainingType: Yup.string().required("Training type is required"),
});

const createStructuredPrompt = (goals, days, trainingType) => {
  return `Create a personalized exercise plan for someone with the following goals: ${goals}. They can train ${days} days per week and prefer ${trainingType} training.`;
};

const HomePage = () => {
  const [exercisePlan, setExercisePlan] = useState(null);

  const generateExercisePlan = async (prompt) => {
    try {
      const response = await axios.post("http://localhost:8080/chat", {
        prompt,
      });
      return response.data;
    } catch (error) {
      console.error("Error:", error);
      return null;
    }
  };

  return (
    <React.Fragment>
      <Formik
        initialValues={{
          goals: "",
          days: "",
          trainingType: "",
        }}
        validationSchema={validationSchema}
        onSubmit={async (values, { setSubmitting }) => {
          setSubmitting(true);

          const structuredPrompt = createStructuredPrompt(
            values.goals,
            values.days,
            values.trainingType
          );
          const exercisePlan = await generateExercisePlan(structuredPrompt);

          setExercisePlan(exercisePlan);
          setSubmitting(false);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <div>
              <label htmlFor="goals">Goals:</label>
              <Field id="goals" name="goals" type="text" />
              <ErrorMessage name="goals" />
            </div>
            <div>
              <label htmlFor="days">Days per week</label>
              <Field id="days" name="days" type="number" />
              <ErrorMessage name="days" />
            </div>
            <div>
              <label htmlFor="trainingType">Training type:</label>
              <Field id="trainingType" name="trainingType" as="select">
                <option value="">Select a training type</option>
                <option value="strength">Strength</option>
                <option value="cardio">Cardio</option>
              </Field>
              <ErrorMessage name="trainingType" />
            </div>
            <button type="submit" disabled={isSubmitting}>
              Generate Exercise Plan
            </button>
          </Form>
        )}
      </Formik>
      <div className="results">
        {exercisePlan ? (
          <p>{exercisePlan}</p>
        ) : (
          <p>
            Please enter your preferences to generate a personalized exercise
            plan.
          </p>
        )}
      </div>
    </React.Fragment>
  );
};

export default HomePage;
