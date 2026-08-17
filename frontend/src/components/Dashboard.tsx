import { useState } from "react";

export default function Dashboard() {
  const [agua, setAgua] = useState(20);
  const [calorias, setCalorias] = useState(30);
  const [sono, setSono] = useState(100);
  const [estudo, setEstudo] = useState(10);

  const alterarAgua = (event: any) => {
    setAgua(event.target.value);
  };

  return (
    <div className="dashboard">
      <div className="dashboard-table"></div>
    </div>
  );
}
