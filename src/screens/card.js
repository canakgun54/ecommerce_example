import { Col, Row, Image, Card, Button } from "antd";
import Text from "antd/lib/typography/Text";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import CardButtonsComponent from "../components/cardButtons";
import { cardList, clearCard } from "../redux/rdcCard";
import { productList } from "../redux/rdcProduct";

export default function CardPage() {
  const dispatch = useDispatch();
  const cards = useSelector(cardList);
  const listProduct = useSelector(productList);

  const urunToplamFiyat = () => {
    let toplamDeger = 0;
    cards?.map((card) => {
      const product = listProduct.find((x) => x.id === card.id);
      toplamDeger += product.price * card.count;
    });

    return toplamDeger;
  };

  const toplamUrunAdedi = () => {
    let toplamAdet = 0;
    cards?.map((x) => (toplamAdet += x.count));
    return toplamAdet;
  };

  return (
    <Row>
      <Col span={14}>
        {cards?.map((card) => (
          <Row>
            <Col span={4}>
              <Image
                src={listProduct.find((x) => x.id === card.id).image}
                width={75}
              />
            </Col>
            <Col span={12}>
              <Text strong>
                {listProduct.find((x) => x.id === card.id).title}
              </Text>
              <br />
              <Text mark>
                {`${listProduct.find((x) => x.id === card.id).price} * ${
                  card.count
                } = ${
                  listProduct.find((x) => x.id === card.id).price * card.count
                } TL`}
              </Text>
            </Col>
            <Col span={8}>
              <CardButtonsComponent
                product={listProduct.find((x) => x.id === card.id)}
              />
            </Col>
          </Row>
        ))}
      </Col>
      <Col span={6} offset={4}>
        <Card title="Sipariş Özeti" style={{ width: "100%" }}>
          <p>Ürün Toplamı : {Math.round(urunToplamFiyat())} TL</p>
          <p>Toplam Ürün Adedi : {toplamUrunAdedi()}</p>
          <Button
            onClick={() => dispatch(clearCard())}
            shape="round"
            type="primary"
          >
            Siparişi Tamamla
          </Button>
        </Card>
      </Col>
    </Row>
  );
}
