import { Layout } from "antd";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Switch, Route,Link } from "react-router-dom";
import { GetProducts } from "./provider";
import { loadList } from "./redux/rdcProduct";
import CardPage from "./screens/card";
import HeaderComponent from "./screens/header";
import HomePage from "./screens/home";
import ProductDetailPage from "./screens/productDetail";
import UserPage from "./screens/User";
import SignPage from "./screens/sign";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    async function asyncFunction() {
      const productData = await GetProducts();
      dispatch(loadList(productData));
    }
    asyncFunction();
  }, []);

  return (
    <Router>
      <div>
        <HeaderComponent />
        <Layout className="layout" style={{ padding: '20px 50px' }}>
          <Switch>
            <Route path="/card">
              <CardPage />
            </Route>
            <Route path="/user">
              <UserPage/>
            </Route>
            <Route path="/sign">
              <SignPage/>
            </Route>
            <Route path="/productDetail/:id">
              <ProductDetailPage />
            </Route>
            <Route path="/">
              <HomePage />
            </Route>
          </Switch>
        </Layout>
      </div>
    </Router>
  );
}

export default App;
