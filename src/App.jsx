import { RouterProvider } from "react-router-dom";
import router from "./Routes/router";
import { useGetCustomersQuery } from "./app/features/api/apiSlice";
import { useDispatch } from "react-redux";
import { setUsers } from "./app/features/customers/customersSlice";


function App() {
  const { data } = useGetCustomersQuery();
  const dispatch = useDispatch()
  if (!data) {
    return <h1>Loading....</h1>
  }
  dispatch(setUsers(data))
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
