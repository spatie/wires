import { useState } from "react";

export default function useToggle(initial) {
  const [value, setValue] = useState(initial);

  function toggle() {
    setValue(!value);
  }

  return [value, toggle];
}
