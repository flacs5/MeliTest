import React from "react";
import { Item } from "../../../api/types";
import { numberWithDots } from "../../../shared/misc/utils";
import IconShipping from "../../../img/ic_shipping.png";
import { useNavigate } from "react-router-dom";

interface Props {
  item: Item;
}

const ItemRow: React.FC<Props> = (props: Props) => {
  const { picture, state, price, free_shipping, title, id } = props.item;
  const navigate = useNavigate();

  const getPrice = (price: number) => {
    return `$ ${numberWithDots(price)}`;
  };

  const goToDetail = (itemId: string) => {
    navigate(`/items/${itemId}`);
  };
  return (
    <div className="item_row" onClick={() => goToDetail(id)}>
      <div className="item_row__img">
        <img src={picture} alt="" />
      </div>
      <div className="item_row__desc">
        <div className="desc_price">
          <span>{getPrice(price.amount)}</span>
          {free_shipping && <img src={IconShipping} alt="" />}
        </div>
        <p>{title}</p>
      </div>
      <div className="item_row__dir">{state}</div>
    </div>
  );
};

export default ItemRow;
