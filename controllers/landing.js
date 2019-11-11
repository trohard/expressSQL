
const models = require('../models');

exports.get_landing = function(req, res, next) {
    res.render('landing', { title: 'Express' });
}

exports.submit_lead = function(req, res, next) {
    return models.Leads.create({
        email: req.body.lead_email
    }).then(lead => {
        res.redirect('/leads');
    })
}

exports.show_leads = function(req, res, next) {
    return models.Leads.findAll().then(leads => {
        res.render('landing', { title: 'Express', leads: leads });
    })   
}

exports.show_lead = function(req, res, next) {
    return models.Leads.findOne({
        where : {
            id : req.params.lead_id
        }
    }).then(lead => {
        res.render('lead', { lead : lead });
    })
}

exports.show_edit_lead = function(req, res, next) {
    return models.Leads.findOne({
        where : {
            id : req.params.lead_id
        }
    }).then(lead => {
        res.render('lead/edit_lead', { lead : lead });
    })
}

exports.edit_lead = function(req, res, next) {
    return models.Leads.update({
        email : req.body.lead_email
    }, {
        where : {
            id : req.params.lead_id
        }
    }).then(result => {
        res.redirect('/lead/' + req.params.lead_id);
    })
}

exports.delete_lead = function(req, res, next) {
    return models.Leads.destroy({
        where : {
            id : req.params.lead_id
        }
    }).then(result => {
        res.redirect('/leads');
    })
}