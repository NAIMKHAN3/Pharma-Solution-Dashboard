import { RouterProvider } from "react-router-dom";
import router from "./Routes/router";
import { useGetCustomersQuery } from "./app/features/api/apiSlice";
import { useDispatch } from "react-redux";
import { setUsers } from "./app/features/customers/customersSlice";
import { useEffect } from "react";
import { ToastBar } from "react-hot-toast";


function App() {
  const dispatch = useDispatch()
  const { data } = useGetCustomersQuery();

  useEffect(() => {
    dispatch(setUsers(data))
  }, [data])
  if (!data) {
    return <h1>Loading....</h1>
  }
  return (
    <div>

        <RouterProvider router={router}>
          <ToastBar/>
        </RouterProvider>
    </div>
  );
}

export default App;
