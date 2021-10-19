import React, { useState } from "react";
import { Badge, Button, Col, Image, Menu, Row } from "antd";
import {
  HomeOutlined,
  CalculatorOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { cardList } from "../redux/rdcCard";
import Text from "antd/lib/typography/Text";
import { productList } from "../redux/rdcProduct";

export default function HeaderComponent() {
  const [current, setCurrent] = useState("home");
  const cards = useSelector(cardList);
  const listProduct = useSelector(productList);
  const { SubMenu } = Menu;

  return (
    <Menu
      onClick={(e) => setCurrent(e.key)}
      selectedKeys={[current]}
      mode="horizontal"
    >
      <Menu.Item key="home" icon={<HomeOutlined />}>
        <Link to="/home">Ana Sayfa</Link>
      </Menu.Item>

      <SubMenu key="user" icon={<UserOutlined />} title="Hesabım">
        <Menu.Item key="user1">
          Giriş Yap<Link to="/user"></Link>{" "}
        </Menu.Item>
        <Menu.Item key="user2">
          Üye Ol<Link to="/sign"></Link>{" "}
        </Menu.Item>
      </SubMenu>

      <SubMenu
        key="card"
        icon={<CalculatorOutlined />}
        title={
          <Link to="/card">
            <Badge size="small" offset={[5, 0]} count={cards?.length}>
              Sepetim
            </Badge>
          </Link>
        }
      >
        <Menu.ItemGroup title={"Sepetim (" + cards?.length + " Ürün)"}>
          {cards?.map((card) => (
            <Menu.Item key="setting:1">
              <Row>
                <Col span={2}>
                  <Image
                    src={listProduct.find((x) => x.id === card.id).image}
                    width={25}
                  />
                </Col>
                <Col span={12}>
                  <Text strong>
                    {listProduct.find((x) => x.id === card.id).title}
                  </Text>
                </Col>
              </Row>
            </Menu.Item>
          ))}
          <Menu.Item key="setting:2">
            <Button>
              <Link to="/card">Sepete Git</Link>
            </Button>
          </Menu.Item>
        </Menu.ItemGroup>
      </SubMenu>
    </Menu>
  );
}
