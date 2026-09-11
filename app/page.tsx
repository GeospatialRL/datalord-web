"use client";

import Btn from "./components/Btn";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center bg-background font-body">
      <Btn
        type="button"
        title="Click me"
        onClick={() => alert("Button clicked!")}
        isRounded={true}
        isFullWidth={true}
      >
        Click Me
      </Btn>
    </div>
  );
}
