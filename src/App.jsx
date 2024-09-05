import React, { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import Main from "./components/Main";
import Login from "./components/Login";
import { Provider, useDispatch } from "react-redux";
import store from "./utils/store";
import { setJobs } from "./utils/jobSlice";
import JobsList from "./components/JobsList";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "/", element: <Main /> },
      { path: "/login", element: <Login /> },
      { path: "/jobs", element: <JobsList /> },
    ],
  },
]);

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    async function getJobs(retryCount = 3) {
      const url =
        "https://apijob-job-searching-api.p.rapidapi.com/v1/job/search";
      const options = {
        method: "POST",
        headers: {
          "x-rapidapi-key":
            "627d7b32f8mshac3cbefaa90d0c8p121e5ejsn45c646310612",
          "x-rapidapi-host": "apijob-job-searching-api.p.rapidapi.com",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ q: "reactJS" }),
      };

      try {
        const response = await fetch(url, options);

        if (response.status === 429) {
          if (retryCount > 0) {
            console.log("Rate limit exceeded. Retrying...");
            await new Promise((resolve) => setTimeout(resolve, 2000)); // Wait for 2 seconds
            return getJobs(retryCount - 1); // Retry
          } else {
            throw new Error("Rate limit exceeded. No more retries.");
          }
        }

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        console.log(result.hits);
        dispatch(setJobs(result.hits));
      } catch (error) {
        console.error("Failed to fetch jobs:", error);
      }
    }

    getJobs();
  }, [dispatch]);

  return <RouterProvider router={routes} />;
}

export default function WrappedApp() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}
