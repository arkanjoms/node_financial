/**
 * StockController
 *
 * @description :: Server-side logic for managing stocks
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  /**
   *
   * @param req
   * @param res
   * @param next
   */
  'new': function (req, res, next) {
    Customer.findOne(req.param('owner'), function foundCustomer(err, customer) {
      if (err) {
        return next(err);
      }

      if (!customer) {
        return next();
      }

      res.view({
        customer: customer
      })
    })
  },

  /**
   *
   * @param req
   * @param res
   * @param next
   */
  create: function (req, res, next) {
    Stock.create(req.params.all(), function stockCreated(err, stock) {
      if (err) {
        next(err);
      }

      res.redirect('/customer/show/' + stock.owner);
    })
  }
};

