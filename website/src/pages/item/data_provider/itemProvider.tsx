import React from "react";
import service from "../../../api/service";
import useService from "../../../hooks/useService";
import Context from "./itemContext";

const ItemProvider: React.FC<{ id: string }> = ({ id, children }) => {
  const [item, loading] = useService(() => service.getItem(id));

  return (
    <Context.Provider value={{ data: item, loading }}>
      {children}
    </Context.Provider>
  );
};

export default ItemProvider;
