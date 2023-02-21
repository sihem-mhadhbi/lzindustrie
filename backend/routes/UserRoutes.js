const UserController = require("../controllers/UserController");
const express = require("express");
const { body } = require("express-validator");
const protect = require("../middleware/authMiddleware");
const protecttemplate = require("../middleware/templateMiddleware");
const protectrole = require("../middleware/roleMiddleware");
const protectpermission = require("../middleware/permissionMiddleware");
const protectproduct = require("../middleware/productMiddleware");
const protectgateway = require("../middleware/gatewayMiddleware");
const protecttag = require("../middleware/tagMiddleware");
const protect1 = require("../middleware/adminMiddleware");
const multer = require("multer");
var fs = require("fs");
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });

const router = express.Router();
router.use(express.json());

global.__basedir = __dirname;

router.post(
  "/addadmin",
  [
    body("username", "please enter the username").notEmpty(),
    body(
      "password",
      "please enter password with 6 or more characters"
    ).isLength({ min: 6 }),
  ],
  UserController.addadmin
);
router.post("/loginadmin", UserController.loginadmin);
router.post("/loginstaff", UserController.loginstaff);

router.get("/getstore", UserController.getStore);
router.post("/addstore", UserController.addStore);
router.get("/getstore1/:id", UserController.getStore1);
router.put("/updatestore/:id", UserController.updateStore);
router.delete("/deletestore/:id", UserController.deleteStore);

router.get("/gettemplate", UserController.getTemplate);
router.get("/gettemplate/:id", UserController.getTemplate1);
router.post("/addtemplate", UserController.addTemplate);
router.put("/updatetemplate/:id", UserController.updateTemplate);
router.delete("/deletetemplate/:id", UserController.deleteTemplate);

router.get("/getstaff", UserController.getStaff);
router.get("/getstaff/:id", UserController.getStaff1);
router.post("/addstaff", UserController.addStaff);
router.put("/updatestaff/:id", UserController.updateStaff);
router.delete("/deletestaff/:id", UserController.deleteStaff);

router.get("/getrole", UserController.getRole);
router.get("/getrole/:id", UserController.getRole1);
router.post("/addrole", UserController.addRole);
router.put("/updaterole/:id", UserController.updateRole);
router.delete("/deleterole/:id", UserController.deleteRole);

router.get(
  "/api/getpermission",

  UserController.getpermission
);
router.get(
  "/api/getpermission/:id",

  UserController.getpermission1
);
router.post("/api/addpermission", UserController.addpermission);
router.put("/api/updatepermission/:id", UserController.updatepermission);
router.delete("/api/deletepermission/:id", UserController.deletepermission);

router.get("/getproducts", UserController.getProducts);
router.get("/getproduct/:id", UserController.getProducts1);
router.post("/addproducts", UserController.addProducts);
router.put("/updateproduct/:id", UserController.updateProducts);
router.delete("/deleteproduct/:id", UserController.deleteProducts);
router.post("/exportdata", UserController.dataexp);

router.get("/getgetway", UserController.getGateway);
router.get("/getgateway/:id", UserController.getGateway1);
router.post("/addgateway", UserController.addGateway);
router.put("/updategateway/:id", UserController.updateGateway);
router.delete("/deletegateway/:id", UserController.deleteGateway);

router.get("/getscenario", UserController.getScenario);
router.get("/getscenario/:id", UserController.getScenario1);
router.post("/addscenario", UserController.addScenario);
router.put("/updatescenario/:id", UserController.updateScenario);
router.delete("/deletescenario/:id", UserController.deleteScenario);

router.get("/api/getrecord", UserController.getrecord);
router.get("/api/getrecord/:id", UserController.getrecord1);

router.put("/api/updaterecord/:id", UserController.updaterecord);
router.post("/exportrecoded", UserController.recordexp);

router.get("/api/gettag", UserController.getTag);
router.get("/api/gettag1/:id", UserController.getTag1);
router.get("/api/getsize/:size", protecttag, UserController.gettags);
router.get("/getmacaddress/:mac_address", UserController.getaddress);
router.post("/api/addtag", UserController.addTag);
router.put("/api/updatetag/:id", UserController.updateTag);
router.delete("/api/deletetag/:id", UserController.deletetag);

router.post("/addversion", UserController.addversion);
router.get("/showversion", UserController.showversion);

router.post("/appload", UserController.uploadfile);
router.get("/bind/:id", UserController.bind);
router.post("/upload1", upload.single("xlsx"), UserController.files1);

module.exports = router;
