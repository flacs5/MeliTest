import React from "react";
import service from "../../api/service";
import Breadcrumbs from "../../components/Breadcrumbs";
import SpinnerArea from "../../components/SpinnerArea";
import useService from "../../hooks/useService";
import ItemRow from "./components/ItemRow";

interface Props {
  query: string;
}

const Items: React.FC<Props> = ({ query }) => {
  const [data, loading] = useService(() => service.getItems(query), query);

  console.log(data);

  return (
    <SpinnerArea loading={loading}>
      {data && (
        <div className="container">
          <Breadcrumbs categories={data.categories} />
          <div className="card mb-4 card-item-row">
            <div className="card-body">
              {data.items.map((x) => {
                return <ItemRow item={x} />;
              })}
            </div>
          </div>
        </div>
      )}
    </SpinnerArea>
  );
};

export default Items;
