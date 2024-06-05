const errorResponseHelper = require("../../Helper/errorResponse");
const { CmsModel } = require("../../models");

function getCMSPages(type) {
    async function Pages(req, res) {
        try {
            let findData = await CmsModel.find({ position: type }).lean();
            res.send({ status: true, message: "CMS " + type + " Pages.", data: findData });
        }
        catch (e) {
            console.log('Getting Pages err', e);
            await errorResponseHelper({ res, error: e, defaultMessage: "Error in Getting Pages" });
        }
    }
    return Pages;
}

module.exports = getCMSPages;
