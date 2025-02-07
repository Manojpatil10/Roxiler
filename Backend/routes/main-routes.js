const express=require('express');
const router=express.Router();
const Initialize = require('../controller/Initialize').Initialize;
const PieChart = require('../controller/PieChart').Piechart;
const DataTable = require('../controller/DataTable').DataTable;
const ColumnChart = require('../controller/ColumnChart').ColumnChart;
const Insights = require('../controller/Insights').Insights;


router.get("/initialize", Initialize);
router.get("/pieChart", PieChart);
router.get("/dataTable", DataTable);
router.get("/columnChart", ColumnChart);
router.get("/insights", Insights);

module.exports=router;

