import React from "react";
import Coin from "../icons/Coin";
import {
  TableStyled,
  TableHeading,
  TableBody,
  TextWrapped,
  WrapperFlex,
  ProductDetail,
  Image,
} from "./styled";

const Table = ({ history }) => {
  return (
    <TableStyled>
      <thead>
        <tr>
          <TableHeading>Product Detail</TableHeading>
          <TableHeading>Date</TableHeading>
          <TableHeading id="redeem-title">Redeem Id</TableHeading>
        </tr>
      </thead>
      <TableBody>
        {history.map((redeem) => {
          const { name, cost, category, createDate, img, productId } = redeem;
          let date = new Date(createDate);
          const redeemDate = date.toLocaleDateString("en-GB", {
            timeZone: "UTC",
          });
          return (
            <tr key={productId}>
              <td>
                <WrapperFlex>
                  <Image src={img.url} alt={name} />
                  <ProductDetail>
                    <p>{name}</p>
                    <p>{category}</p>
                    <WrapperFlex>
                      <p className="cost">{cost}</p>
                      <Coin width="15px" height="15px" />
                    </WrapperFlex>
                  </ProductDetail>
                </WrapperFlex>
              </td>
              <td className="date">{redeemDate}</td>
              <td className="redeem-id">
                <TextWrapped>{productId}</TextWrapped>
              </td>
            </tr>
          );
        })}
      </TableBody>
    </TableStyled>
  );
};

export default Table;
