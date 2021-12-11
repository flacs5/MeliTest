import React from "react";
import { Puff } from "react-loading-icons";

interface Props {
  loading?: boolean;
}

const Spinner: React.FC<Props> = ({ loading = false }) => (
  <>
    {loading && (
      <div className="panel__refresh">
        <Puff stroke="#009ef7" strokeOpacity={1} />
      </div>
    )}
  </>
);

export default React.memo(Spinner, (prevProps, nextProps) => {
  return prevProps.loading === nextProps.loading;
});
