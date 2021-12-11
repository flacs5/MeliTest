import React from "react";
import { ItemDetailContainer } from "../../../api/types";

interface ItemDetailContext {
  data: ItemDetailContainer | null;
  loading: boolean;
}
const Context = React.createContext<ItemDetailContext>({
  data: null,
  loading: false,
});
export default Context;
