import { useState, useEffect } from "react";
import { supabase } from "./config";

function Login() {
  const initialValues = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const [isSignIn, setIsSignIn] = useState(false);
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validate(formValues);
    setFormErrors(errors);
    setIsSubmit(true);

    if (Object.keys(errors).length === 0) {
      const { email, password, username } = formValues;

      if (!isSignIn) {
        // Sign Up Logic
        const { error } = await supabase.auth.signUp({
          email,
          password,
          options: {
            data: {
              full_name: username,
            },
          },
        });

        if (error) {
          console.log("Error signing up:", error.message);
        } else {
          console.log("Signed up successfully!");
        }
      } else {
        // Sign In Logic
        const { error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });

        if (error) {
          console.log("Error signing in:", error.message);
        } else {
          console.log("Signed in successfully!");
        }
      }
    }
  };

  function toggleSignIn() {
    setIsSignIn(!isSignIn);
    setFormErrors({});
    setFormValues(initialValues); // Reset form values when switching between Sign In and Sign Up
  }

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors, formValues, isSubmit]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }

    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters";
    }

    if (!isSignIn) {
      if (!values.username) {
        errors.username = "Username is required!";
      }
      if (values.password !== values.confirmPassword) {
        errors.confirmPassword = "Those passwords didn’t match. Try again.";
      }
    }

    return errors;
  };

  return (
    <>
      <div className="container">
        {Object.keys(formErrors).length === 0 && isSubmit ? (
          <div className="ui message success">
            {isSignIn ? "Signed in successfully!" : "Signed up successfully!"}
          </div>
        ) : (
          console.log("Entered Details", formValues)
        )}

        <form onSubmit={handleSubmit}>
          <h1>{!isSignIn ? "Sign Up" : "Sign In"}</h1>
          <div className="ui divider"></div>
          <div className="ui form">
            {!isSignIn && (
              <div className="field">
                <label>Username</label>
                <input
                  type="text"
                  name="username"
                  placeholder="Choose a username"
                  value={formValues.username}
                  onChange={handleChange}
                />
                <p>{formErrors.username}</p>
              </div>
            )}

            <div className="field">
              <label>Email</label>
              <input
                type="text"
                name="email"
                placeholder="Email"
                value={formValues.email}
                onChange={handleChange}
              />
              <p>{formErrors.email}</p>
            </div>

            <div className="field">
              <label>Password</label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formValues.password}
                onChange={handleChange}
              />
              <p>{formErrors.password}</p>
            </div>

            {!isSignIn && (
              <div className="field">
                <label>Confirm Password</label>
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm password"
                  value={formValues.confirmPassword}
                  onChange={handleChange}
                />
                <p>{formErrors.confirmPassword}</p>
              </div>
            )}

            <button className="fluid ui button blue">
              {isSignIn ? "Sign In" : "Sign Up"}
            </button>
          </div>
        </form>
        <div className="text">
          <span onClick={toggleSignIn}>
            {isSignIn ? "New user? Sign up" : "Already a user? Sign in"}
          </span>
        </div>
      </div>
    </>
  );
}

export default Login;
