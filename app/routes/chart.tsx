import * as React from "react";
import { ClientTest } from "~/components/chart.client";

export default function Index() {
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => {
    setMounted(true);
  }, []);
  return <div className="remix__page">{mounted ? <ClientTest /> : null}</div>;
}
