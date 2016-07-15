/**
 * CustomerController
 *
 * @description :: Server-side logic for managing customers
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
module.exports = {

  /**
   *
   * @param req
   * @param res
   */
  'new': function (req, res) {
    res.view();
  },

  /**
   *
   * @param req
   * @param res
   * @param next
   */
  create: function (req, res, next) {
    Customer.create(req.params.all(), function customerCreated(err, customer) {
      if (err) {
        return next(err);
      }

      res.redirect('/customer/show/' + customer.id);
    })
  },

  /**
   *
   * @param req
   * @param res
   * @param next
   */
  show: function (req, res, next) {
    Customer.findOne(req.param('id'), function foundCustomer(err, customer) {
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
  index: function (req, res, next) {
    Customer.find(function foundCustomer(err, customers) {
      if (err) {
        return next(err);
      }

      res.view({
        customers: customers
      })
    })
  }
};

