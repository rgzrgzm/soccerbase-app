import Home from "@/app/pages/home/page";
import { Suspense } from "react";
import { Spinner } from "./components";
import { getData } from "@/app/helpers/api-helper";

export default async function App() {
  const data = await getData();
  return (
    <Suspense fallback={<Spinner />}>
      <Home response={data.response} />
    </Suspense>
  );
}
