const createFinance = require("./createFinanceModule");
const deleteFinance = require("./deleteFinanceDataModule");
const getFinanceData = require("./getFinanceDataModule");
const getFinanceDetail = require("./getFinanceDetailModule");
const getFinanceList = require("./getFinanceListModule");
const updateFinance = require("./updateFinanceModule");
const updateFinanceStatus = require("./updateFinanceStatusModule");

module.exports = {
  createFinance,
  deleteFinance,
  getFinanceData,
  getFinanceDetail,
  getFinanceList,
  updateFinance,
  updateFinanceStatus,
};
