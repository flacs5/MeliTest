import React from "react";
import Spinner from "./Spinner";

interface Props {
  loading: boolean;
}

const SpinnerArea: React.FC<Props> = ({ loading = false, children }) => (
  <>
    <Spinner loading={loading} />
    <div style={{ opacity: loading ? 0.2 : undefined }}>{children}</div>
  </>
);

export default SpinnerArea;
