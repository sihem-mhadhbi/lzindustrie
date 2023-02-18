import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Store.css";
import axios from "axios";

const Abc = () => {
  const [data, setData] = useState([]);

  const loadData = async () => {
    const response = await axios.get("http://localhost:5000/api/getstore");
    setData(response.data);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <>
      <div className="container py-3">
        <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">
              LZ INDUSTRIE
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
              aria-controls="navbarCollapse"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarCollapse">
              <ul class="navbar-nav me-auto mb-2 mb-md-0"></ul>
              <form class="d-flex" role="search">
                <input
                  class="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button class="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
              <div>
                <button
                  type="button"
                  class="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#staticBackdrop"
                >
                  ADD
                </button>
                <div
                  class="modal fade"
                  id="staticBackdrop"
                  data-bs-backdrop="static"
                  data-bs-keyboard="false"
                  tabindex="-1"
                  aria-labelledby="staticBackdropLabel"
                  aria-hidden="true"
                >
                  <div class="modal-dialog">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="staticBackdropLabel">
                          Add store
                        </h5>

                        <button
                          type="button"
                          class="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div class="modal-body">...</div>
                      <div class="modal-footer">
                        <button
                          type="button"
                          class="btn btn-secondary"
                          data-bs-dismiss="modal"
                        >
                          Close
                        </button>
                        <button type="button" class="btn btn-primary">
                          Understood
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>

      <div className="pricing-header p-3 pb-md-4 mx-auto text-center">
        <br />
        <h1 className="display-4 fw-normal">LZ INDUSTIE</h1>
        <p className="fs-5 text-muted">
          Electronic shelf labels series are independently designed and produced
          by LZ INDUSTRIE, utilizing the latest Bluetooth@ Low Energy (BLE) 5.0
          Technology, which can increase operational efficiency, automate 'low
          value-added' processes, and provide a better customer experience for
          various industries. Using an online ESL Cloud Platform, you can manage
          everything from adding new stores, label changes, template designs,
          products uploading, users administration, etc. Only through just one
          click, you can change your products' price immediatly.
        </p>
      </div>

      <main>
        <div
          class="row row-cols-1 row-cols-md-3 mb-3 text-center"
          style={{ padding: "120px", margin: "0px" }}
        >
          <div class="col">
            <div class="card mb-4 rounded-3 shadow-sm">
              <div class="card-header py-3">
                <h4 class="my-0 fw-normal"></h4>
              </div>
              <div class="card-body">
                <h1 class="card-title pricing-card-title">
                  <img
                    src="https://www.primaseller.com/wp-content/uploads/2018/11/Setup-Store.png"
                    alt="img"
                    style={{
                      width: "250px",
                      height: "150px",
                    }}
                  />
                </h1>
                <ul class="list-unstyled mt-3 mb-4">
                  <li>Name: Allison</li>
                  <li>Number:002</li>
                  <li>Address:schenzhen</li>
                </ul>
                <button
                  type="button"
                  class="w-100 btn btn-lg btn-outline-primary"
                >
                  Sign up for free
                </button>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card mb-4 rounded-3 shadow-sm">
              <div class="card-header py-3">
                <h4 class="my-0 fw-normal"></h4>
              </div>
              <div class="card-body">
                <h1 class="card-title pricing-card-title">
                  <img
                    src="https://www.primaseller.com/wp-content/uploads/2018/11/Setup-Store.png"
                    alt="img"
                    style={{
                      width: "250px",
                      height: "150px",
                    }}
                  />
                </h1>
                <ul class="list-unstyled mt-3 mb-4">
                  <li>Name:Raine</li>
                  <li>Number:003</li>
                  <li>Address:Schenzhen</li>
                </ul>
                <button type="button" class="w-100 btn btn-lg btn-primary">
                  Get started
                </button>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card mb-4 rounded-3 shadow-sm">
              <div class="card-header py-3">
                <h4 class="my-0 fw-normal"></h4>
              </div>
              <div class="card-body">
                <h1 class="card-title pricing-card-title">
                  <img
                    src="https://www.primaseller.com/wp-content/uploads/2018/11/Setup-Store.png"
                    alt="img"
                    style={{
                      width: "250px",
                      height: "150px",
                    }}
                  />
                </h1>
                <ul class="list-unstyled mt-3 mb-4">
                  <li>Name:Melinda</li>
                  <li>Number:001</li>
                  <li>Address:Shenzhen</li>
                </ul>
                <button type="button" class="w-100 btn btn-lg btn-primary">
                  Contact us
                </button>
              </div>
            </div>
          </div>
        </div>

        <h2 className="display-6 text-center mb-4">Compare plans</h2>

        <div className="table-responsive">
          <table className="table text-center">
            <thead>
              <tr>
                <th style={{ width: "34%" }}>store_id</th>
                <th style={{ width: "22%" }}>manager_staff_id</th>
                <th style={{ width: "22%" }}>address_id</th>
                <th style={{ width: "22%" }}>last_update</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => {
                return (
                  <tr key={item.id}>
                    <th scope="row" className="text-start">
                      {index + 1}
                    </th>
                    <td>{item.store_id}</td>
                    <td>{item.manager_staff_id}</td>
                    <td>{item.address_id}</td>
                    <td>{item.last_update}</td>
                  </tr>
                );
              })}

              <tr>
                <th scope="row" className="text-start">
                  Private
                </th>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>

            <tbody>
              <tr>
                <th scope="row" className="text-start">
                  Permissions
                </th>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th scope="row" className="text-start">
                  Sharing
                </th>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th scope="row" className="text-start">
                  Unlimited members
                </th>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th scope="row" className="text-start">
                  Extra security
                </th>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>

      <footer className="pt-4 my-md-5 pt-md-5 border-top">
        <div className="row">
          <div className="col-12 col-md">
            <img
              className="mb-2"
              src="https://scontent.ftun7-1.fna.fbcdn.net/v/t39.30808-6/299170689_457653183037893_7297251418376988733_n.png?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=83AXra4qZacAX876BP6&_nc_ht=scontent.ftun7-1.fna&oh=00_AfAwtO666F6fAxOdWGlydidc2Bu2c1XqB_f5GJtKcyY3GA&oe=63A4F02D"
              alt=""
              width="24"
              height="19"
            />
            <small className="d-block mb-3 text-muted">&copy; 2022–2023</small>
          </div>
          <div className="col-6 col-md">
            <h5>PRODUCTS</h5>
            <ul className="list-unstyled text-small">
              <li className="mb-1">
                <a className="link-secondary text-decoration-none" href="#"></a>
              </li>
              <li className="mb-1">
                <a className="link-secondary text-decoration-none" href="#"></a>
              </li>
              <li className="mb-1">
                <a className="link-secondary text-decoration-none" href="#"></a>
              </li>
              <li className="mb-1">
                <a className="link-secondary text-decoration-none" href="#"></a>
              </li>
              <li className="mb-1">
                <a className="link-secondary text-decoration-none" href="#"></a>
              </li>
              <li className="mb-1">
                <a className="link-secondary text-decoration-none" href="#"></a>
              </li>
            </ul>
          </div>
          <div className="col-6 col-md">
            <h5>TECHNOLOGY</h5>
            <ul className="list-unstyled text-small">
              <li className="mb-1">
                <a className="link-secondary text-decoration-none" href="#"></a>
              </li>
              <li className="mb-1">
                <a className="link-secondary text-decoration-none" href="#"></a>
              </li>
              <li className="mb-1">
                <a className="link-secondary text-decoration-none" href="#"></a>
              </li>
              <li className="mb-1">
                <a className="link-secondary text-decoration-none" href="#"></a>
              </li>
            </ul>
          </div>
          <div className="col-6 col-md">
            <h5>ABOUT LZ INDUSTRIE</h5>
            <ul className="list-unstyled text-small">
              <li className="mb-1">
                <a className="link-secondary text-decoration-none" href="#"></a>
              </li>
              <li className="mb-1">
                <a className="link-secondary text-decoration-none" href="#"></a>
              </li>
              <li className="mb-1">
                <a className="link-secondary text-decoration-none" href="#"></a>
              </li>
              <li className="mb-1">
                <a className="link-secondary text-decoration-none" href="#"></a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Abc;
