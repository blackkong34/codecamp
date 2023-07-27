import { Rate } from "antd";
import { useState } from "react";

export default function App(): JSX.Element {
  const [value, setValue] = useState(3);

  return (
    <span>
      <Rate onChange={setValue} value={value} disabled={false} />
    </span>
  );
}
