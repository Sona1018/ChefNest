const {
  createChef,
  getAllChef,
  getById,
  updateChef,
  deleteCheftById,
  DeleteAllChef,
  getChefsByService,
} = require("../controller/Chefs.Controller");

const router = require('express').Router();
router.post('/create',createChef  );
router.get('/get',  getAllChef);
router.get("/service/:serviceType", getChefsByService);
router.get('/get/:id', getById);
router.put('/update/:id',updateChef) ;
router.delete('/delete/:id', deleteCheftById)
router.delete('/delete', DeleteAllChef)
module.exports = router;
