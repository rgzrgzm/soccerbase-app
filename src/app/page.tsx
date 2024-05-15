import Home from "@/app/pages/home/page";
import { Suspense } from "react";
import { Spinner } from "./components";

export default async function App() {
  return (
    <Suspense fallback={<Spinner />}>
      <Home />
    </Suspense>
  );
}
