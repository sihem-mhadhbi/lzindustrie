const mysql = require("mysql2");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const express = require("express");
const app = express();
const path = require("path");
const csv = require("fast-csv");
const fileupload = require("express-fileupload");

const excel = require("exceljs");
xlsx = require("xlsx");
const multer = require("multer");
const readXlsxFile = require("read-excel-file/node");
const fs = require("fs");

app.use(fileupload());

require("dotenv").config();
const db = mysql.createPool({
  host: "localhost",
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  port: process.env.DB_PORT,
});

// register admin
exports.addadmin = (req, res) => {
  const { username, password, confirm_password, lastname, mobile_phone, role } =
    req.body;

  db.query(
    "SELECT username FROM store_db.admin WHERE username=?",
    [username],
    async (error, result) => {
      if (error) {
        confirm.log(error);
      }
      if (result.length > 0) {
        return res.status(400).json({ msg: "username already taken" });
      } else if (password !== confirm_password) {
        return res.status(400).json({ msg: "Password do not match" });
      }
      const hashedPassword = await bcrypt.hash(password, 8);
      console.log(hashedPassword);
      db.query(
        "INSERT INTO store_db.admin set ?",
        {
          username: username,
          passwrd: hashedPassword,
          lastname: lastname,
          mobile_phone: mobile_phone,
          role: role,
        },
        (error, result) => {
          if (error) {
            console.log(error);
          } else {
            console.log(result);
            return res.status(201).json({ msg: "Admin registration success" });
          }
        }
      );
    }
  );
};

// login admin
exports.loginadmin = (req, res) => {
  const { username, password } = req.body;

  try {
    if (!username || !password) {
      return res
        .status(400)
        .json({ msg: "please enter your username and your password" });
    }

    db.query(
      "SELECT * FROM store_db.admin WHERE username=?",
      [username],
      async (error, result) => {
        if (result.length <= 0) {
          return res
            .status(401)
            .json({ msg: "username Or Password Incorrect" });
        } else {
          if (!(await bcrypt.compare(password, result[0].passwrd))) {
            return res.status(401).json({ msg: "Email Or Password Incorrect" });
          } else {
            const id = result[0].admin_id;
            const username = result[0].username;

            const token = jwt.sign(
              { id: id, username: username, role: "admin" },
              process.env.JWT_SECRET,
              {
                expiresIn: "1h",
              }
            );
            res.json({ token, role: "admin", username });
          }
        }
      }
    );
  } catch (error) {
    console.log(error);
  }
};
//login staff
exports.loginstaff = (req, res) => {
  try {
    const { Email, password } = req.body;
    if (!Email || !password) {
      return res
        .status(400)
        .json({ msg: "please enter your Email and your password" });
    }

    db.query(
      "SELECT * FROM store_db.staffmanagement WHERE Email=?",
      [Email],
      async (error, result) => {
        if (result.length <= 0) {
          return res.status(401).json({ msg: "Email Or Password Incorrect" });
        } else {
          if (!(await bcrypt.compare(password, result[0].passwrd))) {
            return res.status(401).json({ msg: "Email Or Password Incorrect" });
          } else {
            const id = result[0].staff_id;
            const token = jwt.sign(
              { id: id, role: "staff" },
              process.env.JWT_SECRET,
              {
                expiresIn: process.env.JWT_EXPIRES_IN,
              }
            );

            res.json({ token, role: "staff" });
          }
        }
      }
    );
  } catch (error) {
    console.log(error);
  }
};
/**
 * @Route /api/getstore1
 * @Desc open all the store
 * Access private
 */

// get all store

exports.getStore = (req, res) => {
  const sqlGet = "SELECT * FROM store_db.store;";

  db.query(sqlGet, (error, result) => {
    res.send(result);
  });
};

/**
 * @Route /api/addstore
 * @Desc Add store
 * @Access private
 */
// Add store
exports.addStore = (req, res) => {
  const { store_no, storeName, storeImage, storeAddress } = req.body;
  const sqlGet =
    "INSERT INTO store_db.store(store_no,storeName,storeImage,storeAddress) VALUES (?,?,?,?);";

  db.query(
    sqlGet,

    [store_no, storeName, storeImage, storeAddress],
    (error, result) => {
      res.json({ msg: "store added successfully" });
    }
  );
};

/**
 * @Route /api/getstore1/:id
 * @Desc Search store by ID
 * @Access private
 */

// get  store by id

exports.getStore1 = (req, res) => {
  const { id } = req.params;
  const sqlGet = "SELECT * FROM store_db.store WHERE id=?;";
  db.query(sqlGet, id, (error, result) => {
    res.send(result);
  });
};

/**
 * @Route /api/updatestore/:id
 * @Desc update store
 * @Access private
 */
// update store
exports.updateStore = (req, res) => {
  const { id } = req.params;
  const { store_no, storeName, storeImage, storeAddress } = req.body;
  const sqlupdate =
    "UPDATE store_db.store SET store_no= ?, storeName=?,storeImage=?,storeAddress=? WHERE `id` = ? ;";
  db.query(
    sqlupdate,
    [store_no, storeName, storeImage, storeAddress, id],
    (error, result) => {
      if (error) {
        console.log(error);
      }
      res.json({ msg: "store updated successfully" });
    }
  );
};

/**
 * @Route /api/deletestore/:id
 * @Desc delete store
 * @Access Private
 */
// delete store
exports.deleteStore = (req, res) => {
  const { id } = req.params;
  const sqlremove = "DELETE FROM store_db.store WHERE id= ?;";
  db.query(sqlremove, id, (error, result) => {
    res.json({ msg: "store removed" });
  });
};

//get all template
exports.getTemplate = (req, res) => {
  const sqlGet = "SELECT * FROM store_db.templatestore;";
  db.query(sqlGet, (error, result) => {
    res.send(result);
  });
};
// get  template by id

exports.getTemplate1 = (req, res) => {
  const { id } = req.params;
  const sqlGet = "SELECT * FROM store_db.templatestore WHERE id=?;";
  db.query(sqlGet, id, (error, result) => {
    res.send(result);
  });
};

// Add template
exports.addTemplate = (req, res) => {
  const { templateName, screenSize, selectableColor, screenOrientation } =
    req.body;
  const sqlGet =
    "INSERT INTO store_db.templatestore (templateName,screenSize,selectableColor,screenOrientation) VALUES (?,?,?,?);";
  db.query(
    sqlGet,
    [templateName, screenSize, selectableColor, screenOrientation],
    (error, result) => {
      if (error) {
        console.log(error);
      }
      res.send(result);
    }
  );
};
// update template
exports.updateTemplate = (req, res) => {
  const { id } = req.params;
  const { templateName, screenSize, selectableColor, screenOrientation } =
    req.body;

  const sqlupdate =
    "UPDATE store_db.templatestore SET templateName= ?, screenSize=?,selectableColor=?,screenOrientation=? WHERE `id` = ? ;";
  db.query(
    sqlupdate,
    [templateName, screenSize, selectableColor, screenOrientation, id],
    (error, result) => {
      if (error) {
        console.log(error);
      }
      res.send(result);
    }
  );
};

// delete template
exports.deleteTemplate = (req, res) => {
  const { id } = req.params;
  const sqlremove = "DELETE FROM store_db.templatestore WHERE id = ?;";
  db.query(sqlremove, id, (error, result) => {
    res.send(result);
  });
};

// get all staff
exports.getStaff = (req, res) => {
  const sqlGet = "SELECT * FROM store_db.staffmanagement;";
  db.query(sqlGet, (error, result) => {
    res.send(result);
  });
};
// get staff by id

exports.getStaff1 = (req, res) => {
  const { id } = req.params;
  const sqlGet = "SELECT * FROM store_db.staffmanagement WHERE staff_id=?;";
  db.query(sqlGet, id, (error, result) => {
    res.send(result);
  });
};
// Add staff
exports.addStaff = (req, res) => {
  const {
    username,
    name,
    mobile_phone,
    Email,
    password,
    confirm_password,
    remarks,
    status,
  } = req.body;
  db.query(
    "SELECT Email FROM store_db.staffmanagement WHERE Email=?",
    [Email],
    async (error, result) => {
      if (error) {
        confirm.log(error);
      }
      if (result.length > 0) {
        return res.status(400).json({ msg: "Email already taken" });
      } else if (password !== confirm_password) {
        return res.status(400).json({ msg: "Password do not match" });
      }
      const hashedPassword = await bcrypt.hash(password, 8);
      console.log(hashedPassword);
      db.query(
        "INSERT INTO store_db.staffmanagement set ?",
        {
          username: username,
          name: name,
          passwrd: hashedPassword,

          mobile_phone: mobile_phone,
          Email: Email,
          remarks: remarks,
          status: status,
        },
        (error, result) => {
          if (error) {
            console.log(error);
          } else {
            console.log(result);
            return res.status(201).json({ msg: "User registration success" });
          }
        }
      );
    }
  );
};

// update staff
exports.updateStaff = (req, res) => {
  const { id } = req.params;
  const { name, mobile_phone, Email, remarks, status } = req.body;

  const sqlupdate =
    "UPDATE  store_db.staffmanagement SET  name=?, mobile_phone=?, Email=?, remarks=?, status=? WHERE staff_id=?;";
  db.query(
    sqlupdate,
    [name, mobile_phone, Email, remarks, status, id],
    (error, result) => {
      if (error) {
        console.log(error);
      }
      res.send(result);
    }
  );
};
// delete staff
exports.deleteStaff = (req, res) => {
  const { id } = req.params;
  const sqlremove = "DELETE FROM store_db.staffmanagement WHERE staff_id = ?;";
  db.query(sqlremove, id, (error, result) => {
    res.send(result);
  });
};
// get all role
exports.getRole = (req, res) => {
  const sqlGet = "SELECT * FROM store_db.rolemanagement;";
  db.query(sqlGet, (error, result) => {
    res.send(result);
  });
};
// get role by id

exports.getRole1 = (req, res) => {
  const { id } = req.params;
  const sqlGet = "SELECT * FROM store_db.rolemanagement WHERE role_id=?;";
  db.query(sqlGet, id, (error, result) => {
    res.send(result);
  });
};
// Add role
exports.addRole = (req, res) => {
  const { roleName, roleDescription, roleType, role_permission } = req.body;
  const sqlGet =
    "INSERT INTO store_db.rolemanagement(roleName,roleDescription,roleType,role_permission) VALUES (?,?,?,?);";
  db.query(
    sqlGet,
    [roleName, roleDescription, roleType, role_permission],
    (error, result) => {
      res.send(result);
    }
  );
};

// update role
exports.updateRole = (req, res) => {
  const { id } = req.params;
  const { roleName, roleDescription, roleType, role_permission } = req.body;

  const sqlupdate =
    "UPDATE store_db.rolemanagement SET roleName= ?, roleDescription=?,roleType=?,role_permission=? WHERE role_id = ?;";
  db.query(
    sqlupdate,
    [roleName, roleDescription, roleType, role_permission, id],
    (error, result) => {
      if (error) {
        console.log(error);
      }
      res.send(result);
    }
  );
};
// delete role
exports.deleteRole = (req, res) => {
  const { id } = req.params;
  const sqlremove = "DELETE FROM store_db.rolemanagement WHERE role_id = ?;";
  db.query(sqlremove, id, (error, result) => {
    res.send(result);
  });
};

// get all permission assignement
exports.getpermission = (req, res) => {
  const sqlGet = "SELECT * FROM store_db.`permision_ assignment`;";
  db.query(sqlGet, (error, result) => {
    res.send(result);
  });
};
// get permission by id

exports.getpermission1 = (req, res) => {
  const { id } = req.params;
  const sqlGet =
    "SELECT * FROM store_db.`permision_ assignment` WHERE permission_id=?;";
  db.query(sqlGet, id, (error, result) => {
    res.send(result);
  });
};
// Add permission
exports.addpermission = (req, res) => {
  const { username, name, system_role, store, store_role } = req.body;
  const sqlGet =
    "INSERT INTO store_db.`permision_ assignment`(username,name,system_role,store,store_role) VALUES (?,?,?,?,?);";
  db.query(
    sqlGet,
    [username, name, system_role, store, store_role],
    (error, result) => {
      res.send(result);
    }
  );
};
// update permission
exports.updatepermission = (req, res) => {
  const { id } = req.params;
  const { username, name, system_role, store, store_role } = req.body;

  const sqlupdate =
    "UPDATE store_db.`permision_ assignment` SET username= ?, name=?, system_role=?,store=?,store_role=? WHERE permission_id = ? ;";
  db.query(
    sqlupdate,
    [username, name, system_role, store, store_role, id],
    (error, result) => {
      if (error) {
        console.log(error);
      }
      res.send(result);
    }
  );
};

// delete permission
exports.deletepermission = (req, res) => {
  const { id } = req.params;
  const sqlremove =
    "DELETE FROM store_db.`permision_ assignment` WHERE permission_id = ?;";
  db.query(sqlremove, id, (error, result) => {
    res.send(result);
  });
};

/**
 * @Route /api/getproducts
 * @Desc get all data product
 * @Access Private
 */
// get all products
exports.getProducts = (req, res) => {
  const sqlGet = "SELECT * FROM store_db.products";
  db.query(sqlGet, (error, result) => {
    res.send(result);
  });
};
// get product by id

exports.getProducts1 = (req, res) => {
  const { id } = req.params;
  const sqlGet = "SELECT * FROM store_db.products WHERE id=?;";
  db.query(sqlGet, id, (error, result) => {
    res.send(result);
  });
};
/**
 * @Route /api/postproducts
 * @Desc Add data/product
 * @Access private
 */

// add products
exports.addProducts = (req, res) => {
  const { name, price_per_unit, SN, number, status, barcode, product_id } =
    req.body;
  const sqlGet =
    "INSERT INTO store_db.products(name,price_per_unit,SN,number,status,barcode,product_id) VALUES (?,?,?,?,?,?,?);";
  db.query(
    sqlGet,
    [name, price_per_unit, SN, number, status, barcode, product_id],
    (error, result) => {
      res.send(result);
    }
  );
};

/**
 * @Route /api/updateproduct/:id
 * @Desc Update data/product
 * @Access private
 */
// update products
exports.updateProducts = (req, res) => {
  const { id } = req.params;
  const { name, price_per_unit, SN, number, status, barcode } = req.body;

  const sqlupdate =
    "UPDATE store_db.products SET  name=?, price_per_unit=?, SN=?,number=?,status=?,barcode=?  WHERE `product_id` = ? ;";
  db.query(
    sqlupdate,
    [name, price_per_unit, SN, number, status, barcode, id],
    (error, result) => {
      if (error) {
        console.log(error);
      }
      res.send(result);
    }
  );
};
/**
 * @Route /api/deleteproduct/:id
 * @Desc delete data/product
 * @Access private
 */
// delete product
exports.deleteProducts = (req, res) => {
  const { id } = req.params;
  const sqlremove = "DELETE FROM store_db.products WHERE product_id = ?;";
  db.query(sqlremove, id, (error, result) => {
    res.send(result);
  });
};
// export data product
exports.dataexp = (req, res) => {
  const sqlGet = "SELECT * FROM store_db.products ;";

  db.query(sqlGet, (error, result) => {
    const jsonCustomers = JSON.parse(JSON.stringify(result));
    let workbook = new excel.Workbook();
    let worksheet = workbook.addWorksheet("result");
    //  WorkSheet Header
    worksheet.columns = [
      { header: "product_id", key: "product_id", width: 10 },
      { header: "name", key: "name", width: 30 },
      { header: "price_per_unit", key: "price_per_unit", width: 30 },
      { header: "SN", key: "SN", width: 30 },
      { header: "status", key: "status", width: 30 },
      { header: "barcode", key: "barcode", width: 30 },
      { header: "id", key: "id", width: 30 },
      { header: "number", key: "number", width: 10, outlineLevel: 1 },
    ];
    res.send(result);
    // Add Array Rows
    worksheet.addRows(jsonCustomers);
    // Write to File
    workbook.xlsx.writeFile("sihemexport.xlsx").then(function () {
      console.log("file saved!");
    });
  });
};

/**
 * @Route /api/getgetway
 * @Desc get all getway
 * @Access private
 */

//get all gateway
exports.getGateway = (req, res) => {
  const sqlGet = "SELECT * FROM store_db.gatewaymanagement;";
  db.query(sqlGet, (error, result) => {
    res.send(result);
  });
};
/**
 * @Route /api/getgateway/:id
 * @Desc get getway by ID
 * @Access private
 */
// get gateway by id

exports.getGateway1 = (req, res) => {
  const { id } = req.params;
  const sqlGet = "SELECT * FROM store_db.gatewaymanagement WHERE id=?;";
  db.query(sqlGet, id, (error, result) => {
    res.send(result);
  });
};
/**
 * @Route /api/addgateway
 * @Desc add gateway
 * @Access private
 */
// add gateway
exports.addGateway = (req, res) => {
  const {
    sn,
    macName,
    macAddress,
    status,
    updatingTime,
    modelNo,
    wifiFirmwareVersion,
    bluetoothFirmwareVersion,
    name,
  } = req.body;
  const sqlGet =
    "INSERT INTO store_db.gatewaymanagement(sn,macName,macAddress,status,updatingTime,modelNo,wifiFirmwareVersion,bluetoothFirmwareVersion,name) VALUES (?,?,?,?,?,?,?,?,?);";
  db.query(
    sqlGet,
    [
      sn,
      macName,
      macAddress,
      status,
      updatingTime,
      modelNo,
      wifiFirmwareVersion,
      bluetoothFirmwareVersion,
      name,
    ],
    (error, result) => {
      res.send(result);
    }
  );
};
/**
 * @Route /api/updategateway/:id
 * @Desc update gateway
 * @Access private
 */
// update gateway
exports.updateGateway = (req, res) => {
  const { id } = req.params;
  const {
    sn,
    macName,
    macAddress,
    status,
    updatingTime,
    modelNo,
    wifiFirmwareVersion,
    bluetoothFirmwareVersion,
    name,
  } = req.body;

  const sqlupdate =
    "UPDATE store_db.gatewaymanagement SET sn= ?, macName=?, macAddress=?, status=?,updatingTime=?,modelNo=?,wifiFirmwareVersion=?,bluetoothFirmwareVersion=?,name=?  WHERE `id` = ? ;";
  db.query(
    sqlupdate,
    [
      sn,
      macName,
      macAddress,
      status,
      updatingTime,
      modelNo,
      wifiFirmwareVersion,
      bluetoothFirmwareVersion,
      name,
      id,
    ],
    (error, result) => {
      if (error) {
        console.log(error);
      }
      res.send(result);
    }
  );
};
/**
 * @Route /api/deletegateway/:id
 * @Desc delete gateway
 * @Access private
 */
// delete gateway
exports.deleteGateway = (req, res) => {
  const { id } = req.params;
  const sqlremove = "DELETE FROM store_db.gatewaymanagement WHERE id = ?;";
  db.query(sqlremove, id, (error, result) => {
    res.send(result);
  });
};
//get all scenario
exports.getScenario = (req, res) => {
  const sqlGet = "SELECT * FROM store_db.scenariofield;";
  db.query(sqlGet, (error, result) => {
    res.send(result);
  });
};
// get scenario by id

exports.getScenario1 = (req, res) => {
  const { id } = req.params;
  const sqlGet = "SELECT * FROM store_db.scenariofield WHERE id=?;";
  db.query(sqlGet, id, (error, result) => {
    res.send(result);
  });
};

// add scenario
exports.addScenario = (req, res) => {
  const { dataType, id1, name, prefixe, imageField, iconField } = req.body;
  const sqlGet =
    "INSERT INTO store_db.scenariofield(dataType,id1,name,prefixe,imageField,iconField) VALUES (?,?,?,?,?,?);";
  db.query(
    sqlGet,
    [dataType, id1, name, prefixe, imageField, iconField],
    (error, result) => {
      res.send(result);
    }
  );
};

// update Scenario
exports.updateScenario = (req, res) => {
  const { id } = req.params;

  const { dataType, id1, name, prefixe, imageField, iconField } = req.body;

  const sqlupdate =
    "UPDATE store_db.scenariofield SET dataType= ?, id1=?, name=?, prefixe=?, imageField=?, iconField=?  WHERE id = ?;";
  db.query(
    sqlupdate,

    [dataType, id1, name, prefixe, imageField, iconField, id],
    (error, result) => {
      res.send(result);
    }
  );
};
// delete scenario
exports.deleteScenario = (req, res) => {
  const { id } = req.params;
  const sqlremove = "DELETE FROM store_db.scenariofield WHERE id = ?;";
  db.query(sqlremove, id, (error, result) => {
    if (error) {
      console.log(error);
    }
    res.send(result);
  });
};

//get all operation record
exports.getrecord = (req, res) => {
  const sqlGet =
    "SELECT * FROM store_db.products,store_db.store,store_db.templatestore;";
  db.query(sqlGet, (error, result) => {
    res.send(result);
  });
};
// get operation record by id

exports.getrecord1 = (req, res) => {
  const { id } = req.params;
  const sqlGet = "SELECT * FROM store_db.operation_record WHERE id=?;";
  db.query(sqlGet, id, (error, result) => {
    res.send(result);
  });
};
exports.recordexp = (req, res) => {
  const sqlGet = "SELECT * FROM store_db.operation_record ;";

  db.query(sqlGet, (error, result) => {
    const jsonCustomers = JSON.parse(JSON.stringify(result));
    let workbook = new excel.Workbook();
    let worksheet = workbook.addWorksheet("result");
    //  WorkSheet Header
    worksheet.columns = [
      { header: "Id", key: "_id", width: 10 },
      { header: "Name", key: "name", width: 30 },
      { header: "price", key: "price", width: 30 },
      { header: "mac_address", key: "mac_address", width: 30 },
      { header: "Number", key: "Number", width: 10, outlineLevel: 1 },
    ];
    res.send(result);
    // Add Array Rows
    worksheet.addRows(jsonCustomers);
    // Write to File
    workbook.xlsx.writeFile("export.xlsx").then(function () {
      console.log("file saved!");
    });
  });
};
// update operation record
exports.updaterecord = (req, res) => {
  const { id } = req.params;

  const {
    sn,
    mac_address_esl,
    updating_time,
    operation_type,
    operation_result,
    operator,
    price,
    name,
  } = req.body;

  const sqlupdate =
    "UPDATE store_db.operation_record SET sn= ?, mac_address_esl=?,updating_time=?, operation_type=?, operation_result=?, operator=?,price=?,name=?  WHERE id = ?;";
  db.query(
    sqlupdate,

    [
      sn,
      mac_address_esl,
      updating_time,
      operation_type,
      operation_result,
      operator,
      price,
      name,
      id,
    ],
    (error, result) => {
      res.send(result);
    }
  );
};

// get all tag
exports.getTag = (req, res) => {
  const sqlGet = "SELECT * FROM store_db.tag_management;";
  db.query(sqlGet, (error, result) => {
    res.send(result);
  });
};
//get tag by id

exports.getTag1 = (req, res) => {
  const { id } = req.params;
  const sqlGet = "SELECT * FROM store_db.tag_management WHERE id=?";
  db.query(sqlGet, id, (error, result) => {
    if (error) {
      console.log(error);
    }
    res.send(result);
  });
};
// Search tag by size
exports.gettags = (req, res) => {
  const { size } = req.body;
  const sqlGet = "SELECT * FROM store_db.tag_management WHERE size=?";
  db.query(sqlGet, [size], (error, result) => {
    if (error) {
      console.log(error);
    }
    res.send(result);
  });
};
//Search tag by mac address
exports.getaddress = (req, res) => {
  const { mac_address } = req.body;
  const sqlGet = "SELECT * FROM store_db.tag_management WHERE mac_address=?";
  db.query(sqlGet, [mac_address], (error, result) => {
    if (error) {
      console.log(error);
    }
    res.send(result);
  });
};

// add tag
exports.addTag = (req, res) => {
  const {
    mac_address,

    secret_key,
  } = req.body;
  const sqlAdd =
    "INSERT INTO store_db.tag_management(mac_address,secret_key) VALUES (?,?) ";
  db.query(sqlAdd, [mac_address, secret_key], (error, result) => {
    res.send(result);
    console.log(error);
  });
};
// update tag

exports.updateTag = (req, res) => {
  const { id } = req.params;
  const {
    sn,
    mac_address,
    size,
    RSSI,
    battery_level,
    online_status,
    secret_key,

    remark,
  } = req.body;
  const sqlUpdate =
    "UPDATE store_db.tag_management SET sn=?,mac_address=?,size=?,RSSI=?,battery_level=?,online_status=?, remark=?, secret_key=? WHERE product_id=? ";
  db.query(
    sqlUpdate,
    [
      sn,
      mac_address,
      size,
      RSSI,
      battery_level,
      online_status,
      remark,
      secret_key,
      id,
    ],
    (error, result) => {
      if (error) {
        console.log(error);
      }
      res.status(200).json({ msg: "updated successfully" });
    }
  );
};
// delete tag
exports.deletetag = (req, res) => {
  const { id } = req.params;
  const sqlremove = "DELETE FROM store_db.tag_management WHERE id = ?;";
  db.query(sqlremove, id, (error, result) => {
    if (error) {
      console.log(error);
    }
    res.status(200).json({ msg: "tag deleted" });
  });
};
// add version info
exports.addversion = (req, res) => {
  const { version } = req.body;

  const addver = "INSERT INTO store_db.version_info(version) VALUES (?);";
  db.query(addver, [version], (error, result) => {
    if (error) {
      console.log(error);
    }
    res.status(201).json({ msg: "version added successfully" });
  });
};
//get version
exports.showversion = (req, res) => {
  const getver = "SELECT * FROM store_db.version_info";
  db.query(getver, (error, result) => {
    if (error) {
      console.log(error);
    }
    res.send(result);
  });
};
global.__basedir = __dirname;
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, __basedir + "/upload/");
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + "-" + Date.now() + "-" + file.originalname);
  },
});
const upload = multer({ storage: storage });

exports.uploadfile = async (req, res) => {
  importExcelData2MySQL(__basedir + "/upload/" + req.filename);
  res.json({
    msg: "File uploaded/import successfully!",
    file: req.filename,
  });

  // -> Import Excel Data to MySQL database
  function importExcelData2MySQL(filePath) {
    // File path.
    readXlsxFile(filePath).then((rows) => {
      // `rows` is an array of rows
      // each row being an array of cells.
      console.log(rows);
      rows.shift();

      db.query(
        "INSERT INTO store_db.products(product_id,name,price_per_unit,SN,status,barcode,number,id) VALUES (?,?,?,?,?,?,?,?);"[
          [rows]
        ],
        (err, response) => {
          console.log(response);
        }
      );
    });
  }
};

// Tags bind with data/products with id
exports.bind = async (req, res) => {
  const { id } = req.params;
  const sqlGet =
    "SELECT * FROM store_db.products INNER JOIN store_db.tag_management ON store_db.products.product_id=store_db.tag_management.product_id WHERE store_db.products.product_id=? ";
  db.query(sqlGet, id, (error, result) => {
    if (error) {
      console.log(error);
    }
    res.send(result);
  });
};
// Tags bind with data/products

exports.bind2 = async (req, res) => {
  const sqlGet =
    "SELECT * FROM store_db.products INNER JOIN store_db.tag_management ON store_db.products.product_id=store_db.tag_management.product_id  ";
  db.query(sqlGet, (error, result) => {
    if (error) {
      console.log(error);
    }
    res.send(result);
  });
};
// store and client
exports.storeoverview = async (req, res) => {
  const { id } = req.params;

  const sqlGet =
    "SELECT store_no,storeName,storeImage,storeAddress FROM store_db.store INNER JOIN store_db.staffmanagement ON store_db.store.id=store_db.staffmanagement.staff_id WHERE store_db.staffmanagement.staff_id=?";
  db.query(sqlGet, id, (error, result) => {
    if (error) {
      console.log(error);
    }
    res.send(result);
  });
};
/*upload1, storage;
 */

exports.files1 = async (req, res) => {
  try {
    let path = req.file.path;
    var workbook = XLSX.readFile(path);
    var sheet_name_list = workbook.SheetNames;
    let jsonData = XLSX.utils.sheet_to_json(
      workbook.Sheets[sheet_name_list[0]]
    );
    if (jsonData.length === 0) {
      return res.status(400).json({
        success: false,
        message: "xml sheet has no data",
      });
    }
    let savedData = await Lead.create(jsonData);

    return res.status(201).json({
      success: true,
      message: savedData.length + " rows added to the database",
    });
  } catch (err) {
    return res.status(500).json({ success: false, message: err.message });
  }
};
