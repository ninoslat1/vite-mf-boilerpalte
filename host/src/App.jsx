import { lazy, Suspense } from "react";

const RemoteApp = lazy(() => import("remote/App"));

function App() {
  return (
    <Suspense fallback={<div>Loading Remote Component...</div>}>
      <RemoteApp />
    </Suspense>
  );
}

export default App;
