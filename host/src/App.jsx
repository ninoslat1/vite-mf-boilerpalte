import { lazy, Suspense } from "react";

const RemoteApp = lazy(() => import("remote/App"));

function App() {
  return (
    <Suspense fallback={<div>Loading Remote Component...</div>}>
      <RemoteApp title={"Welcome to my app"} uri={"https://www.youtube.com/"}/>
    </Suspense>
  );
}

export default App;
