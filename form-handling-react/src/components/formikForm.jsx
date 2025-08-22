import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './RegistrationForm.css';

const validationSchema = Yup.object({
  username: Yup.string().required('Username is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().required('Password is required'),
});

const FormikForm = () => {
  return (
    <Formik
      initialValues={{ username: '', email: '', password: '' }}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting, setStatus }) => {
        setTimeout(() => {
          setStatus('Registration successful!');
          setSubmitting(false);
          // Simulate API call here
          // resetForm(); // Uncomment to clear form after submit
        }, 500);
      }}
    >
      {({ isSubmitting, status }) => (
        <Form className="registration-form">
          <h2>User Registration (Formik)</h2>
          <div>
            <label>Username:</label>
            <Field type="text" name="username" />
            <ErrorMessage name="username" component="span" className="error" />
          </div>
          <div>
            <label>Email:</label>
            <Field type="email" name="email" />
            <ErrorMessage name="email" component="span" className="error" />
          </div>
          <div>
            <label>Password:</label>
            <Field type="password" name="password" />
            <ErrorMessage name="password" component="span" className="error" />
          </div>
          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Registering...' : 'Register'}
          </button>
          {status && <div className="success">{status}</div>}
        </Form>
      )}
    </Formik>
  );
};

export default FormikForm;
