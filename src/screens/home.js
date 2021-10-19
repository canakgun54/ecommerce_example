import { Card, Carousel, Col, Image, Row, Typography } from "antd";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import CardButtonsComponent from "../components/cardButtons";
import { productList } from "../redux/rdcProduct";

const { Meta } = Card;
const { Text } = Typography;

export default function HomePage() {
  const listProduct = useSelector(productList);

  useEffect(() => {});
  return (
    <div>
      <Carousel>
        {listProduct.map((product) => (
          <div>
            <Image width={"100%"} height={400} src={product.image} />
          </div>
        ))}
      </Carousel>
      <Row>
        {listProduct.map((product) => (
          <Col span={4}>
            <div style={{ padding: 5 }}>
              <Card
                hoverable
                style={{ width: 200, minHeight: 500, padding: 5 }}
                cover={<img alt={product.title} src={product.image} />}
              >
                <Meta title={product.title} description={product.category} />
                <br />
                <div
                  style={{ position: "absolute", bottom: 0, marginBottom: 60 }}
                >
                  <Text strong>
                    Fiyat : <Text code>{product.price}</Text>
                  </Text>
                </div>
                <div
                  style={{ position: "absolute", bottom: 0, marginBottom: 10 }}
                >
                  <CardButtonsComponent product={product} />
                </div>
              </Card>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
}