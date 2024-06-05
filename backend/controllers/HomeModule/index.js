// Import Home Management Functions

const {
  // About Section function
  createAboutSection,
  updateAboutSection,
  getHomeAbout,

  // Moving Banner Section
  createMovingBanner,
  updateMovingBanner,
  getHomeMovingBanner,

  // Dealing in Section
  createDealingIn,
  getDealingInForHome,
  getDealingList,
  deleteDealingIn,
  getDealingInDetails,
  updateDealingIn,
  updateDealingInStatus,

  // Dealing in item section
  createDealingInItem,
  getDealingInItemDetails,
  getDealingItemList,
  deleteDealingItem,
  updateDealingInItem,
  updateDealingInItemStatus,

  // Service Function
  createService,
  getServiceDetail,
  updateService,
  getServiceList,
  deleteService,
  updateServiceStatus,

  // Service Item function
  createServiceItem,
  updateServiceItem,
  getServiceItemList,
  deleteServiceItem,
  updateServiceItemStatus,
  getServiceForHome,
  getServiceItemDetails,
} = require("./HomeManagement");

const {
  createVishalAddress,
  updateVishalAddress,
  getVishalAddress,
  createSocialMedia,
  updateSocialMedia,
  getSocialMedia,
} = require('./FooterManagement')

module.exports = {
  // About Section function
  createAboutSection,
  updateAboutSection,
  getHomeAbout,

  // Moving Banner Section
  createMovingBanner,
  updateMovingBanner,
  getHomeMovingBanner,

  // Dealing in Section
  createDealingIn,
  getDealingInForHome,
  getDealingList,
  deleteDealingIn,
  getDealingInDetails,
  updateDealingIn,
  updateDealingInStatus,

  // Dealing in item section
  createDealingInItem,
  getDealingInItemDetails,
  getDealingItemList,
  deleteDealingItem,
  updateDealingInItem,
  updateDealingInItemStatus,

  // Service Function
  createService,
  getServiceDetail,
  updateService,
  getServiceList,
  deleteService,
  updateServiceStatus,

  // Service Item function
  createServiceItem,
  updateServiceItem,
  getServiceItemList,
  deleteServiceItem,
  updateServiceItemStatus,
  getServiceForHome,
  getServiceItemDetails,

  // Footer Management
  createVishalAddress,
  updateVishalAddress,
  getVishalAddress,
  createSocialMedia,
  updateSocialMedia,
  getSocialMedia,

};
