import React, { useEffect, useRef } from "react";
import Coin from "../icons/Coin";
import {
  TableStyled,
  TableHeading,
  TableBody,
  TextWrapped,
  WrapperFlex,
  ProductDetail,
  Image,
  Button,
} from "./styled";

const Table = ({ history }) => {
  const buttonRef = useRef(null);
  // show/hide button "go to top"
  useEffect(() => {
    const sticky = buttonRef.current.offsetTop;
    function showButtonTop() {
      if (window.pageYOffset >= sticky) {
        buttonRef.current.style.opacity = 1;
      } else {
        buttonRef.current.style.opacity = 0;
      }
    }

    window.addEventListener("scroll", showButtonTop);
    return () => window.removeEventListener("scroll", showButtonTop);
  }, []);

  // nueva funcion para retornar cada redeem en el map de history
  function renderRedeem(redeemInfo) {
    const { name, cost, category, createDate, img, _id } = redeemInfo;
    let date = new Date(createDate);
    const redeemDate = date.toLocaleDateString("en-GB", {
      timeZone: "UTC",
    });
    return (
      <tr key={_id} tabIndex="0">
        <td>
          <WrapperFlex>
            <Image aria-hidden="true" src={img.url} alt={name} loading="lazy" />
            <ProductDetail>
              <p>{name}</p>
              <p aria-hidden="true">{category}</p>
              <WrapperFlex>
                <p className="cost">{cost}</p>
                <Coin className="coin" width="15px" height="15px" />
              </WrapperFlex>
            </ProductDetail>
          </WrapperFlex>
        </td>
        <td className="date" aria-label="redeem date">
          {redeemDate}
        </td>
        <td className="redeem-id" aria-label="redeem identifier">
          <TextWrapped>{_id}</TextWrapped>
        </td>
      </tr>
    );
  }

  return (
    <section aria-label="redeem history">
      <TableStyled>
        <thead>
          <tr>
            <TableHeading>Product Detail</TableHeading>
            <TableHeading>Date</TableHeading>
            <TableHeading id="redeem-title">Redeem Id</TableHeading>
          </tr>
        </thead>
        <TableBody>{history.map(renderRedeem)}</TableBody>
      </TableStyled>
      <Button
        ref={buttonRef}
        aria-label="Go to top"
        onClick={() => window.scrollTo(0, 0)}
      >
        Go to top
      </Button>
    </section>
  );
};

export default Table;
