// import { useEffect, useState } from "react";
// import { ReactNode, ReactPortal } from "react";
// import { createPortal } from "react-dom";

// export default function Portal({
//   children,
// }: {
//   children: ReactNode;
// }): ReactPortal | null {
//   const [mounted, setMounted] = useState(false);

//   useEffect(() => {
//     setMounted(true);
//     return () => setMounted(false);
//   }, []);

//   return mounted
//     ? createPortal(children, document.querySelector("#portal") as HTMLElement)
//     : null;
// }
