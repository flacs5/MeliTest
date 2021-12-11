import React from "react";
import { Route, Routes, useParams } from "react-router-dom";
import useQuery from "./hooks/useQuery";
import ItemProvider from "./pages/item/data_provider/itemProvider";
import Item from "./pages/item/Item";
import Items from "./pages/items/Items";

const ItemDetailWrapper = () => {
  const params = useParams();

  return (
    <ItemProvider id={params.id as string}>
      <Item />
    </ItemProvider>
  );
};

const ItemsWrapper = () => {
  const queryParams = useQuery();
  const query = queryParams.get("q");

  if (!query) return null;

  return <Items query={query} />;
};

const Router: React.FC = () => (
  <Routes>
    <Route path="/items/:id" element={<ItemDetailWrapper />} />
    <Route path="/items" element={<ItemsWrapper />} />
  </Routes>
);

export default Router;
