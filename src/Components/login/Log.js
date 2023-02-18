import React from "react";
import "./Log.css";
import { MDBContainer, MDBCol, MDBRow } from "mdb-react-ui-kit";

const Log = () => {
  return (
    <>
      <MDBContainer fluid className="p-3 my-5 h-custom">
        <MDBRow>
          <MDBCol col="10" md="6">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdNsvFkMk4A0mvkGSjZXPfl70yOWCkrjMyHFVINn25YC1Ncsc2Vv1HcsSHYQnNoib5_g&usqp=CAU"
              classname="img-fluid"
              alt="Sample image"
              style={{
                width: "300px",
                height: "170px",
                alignItems: "center",
              }}
            />
          </MDBCol>

          <MDBCol style={{ margin: "15px 150px 60px 200px" }}>
            <img
              src="https://scontent.ftun7-1.fna.fbcdn.net/v/t39.30808-6/299170689_457653183037893_7297251418376988733_n.png?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Dyt64sW3pfgAX9tqGDc&_nc_ht=scontent.ftun7-1.fna&oh=00_AfBru55X1JhkQ-Tf53q_aIKCzKvK2q1fonIkpw7bSMYn8Q&oe=63A0FBAD"
              classname="img-fluid"
              alt="Sample image"
              style={{
                width: "130px",
                height: "100px",
                alignItems: "center",
              }}
            />
            <br />
            <br />
            <div className="border border-3 border-danger rounded-0">
              {" "}
              <span className="  align-text-top  ">
                Reminding:this option is provided only the very first time ,
                please select the required data
              </span>{" "}
            </div>
            <br />

            <div className="d-grid gap-2 col-6 mx-auto">
              <button
                type="button"
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                Configurate
              </button>
            </div>
            <div className="vl"></div>
          </MDBCol>
        </MDBRow>
        <br />
      </MDBContainer>
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-xl">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title  container-md " id="exampleModalLabel">
                edit data field
              </h1>

              <div>
                <img
                  src="https://images.squarespace-cdn.com/content/v1/61d33a04acf1ed28bc9979f8/9ce34d8a-a890-4e90-8eff-b7987e81965c/store-management.png?format=1000w"
                  alt="Sample image"
                  classname="img-fluid"
                  style={{
                    width: "130px",
                    height: "100px",
                  }}
                />
              </div>
              <div class="mb-3 row">
                <label
                  for="staticEmail"
                  class="col-sm-2 col-form-label start-0"
                >
                  Data Type:
                </label>
                <div className="col-sm-10">
                  <select title="Pick a number" class="selectpicker">
                    <option>please select the data type</option>
                    <option>retail</option>
                    <option>storage</option>
                    <option>medical</option>
                    <option>work</option>
                    <option>user-defined</option>
                  </select>
                </div>

                <br />

                <div class="mb-3 row ">
                  <label for="inputPassword" class="col-sm-2 col-form-label">
                    Password
                  </label>
                  <br />
                  <div class="col-sm-10 justify-content-between">
                    <input
                      type="password"
                      class="form-control"
                      id="inputPassword"
                    />
                  </div>
                  <div>
                    <table class="table">
                      <thead>
                        <tr>
                          <th scope="col">ID</th>
                          <th scope="col">Last</th>
                          <th scope="col">name</th>
                          <th scope="col">prefix</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            {" "}
                            <div class="col-sm-10">
                              <input
                                type="password"
                                class="form-control"
                                id="inputPassword"
                                style={{ width: "100%" }}
                              />
                            </div>
                          </td>
                          <td>
                            {" "}
                            <div class="col-sm-10">
                              <input
                                type="password"
                                class="form-control"
                                id="inputPassword"
                                style={{ width: "100%" }}
                              />
                            </div>
                          </td>
                          <td>
                            {" "}
                            <div class="col-sm-10">
                              <input
                                type="password"
                                class="form-control"
                                id="inputPassword"
                                style={{ width: "100%" }}
                              />
                            </div>
                          </td>
                          <td>
                            {" "}
                            <div class="col-sm-10">
                              <input
                                type="password"
                                class="form-control"
                                id="inputPassword"
                                style={{ width: "100%" }}
                              />
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

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
                    Cancel
                  </button>
                  <button type="button" class="btn btn-primary">
                    Confirm
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
    </>
  );
};

export default Log;
