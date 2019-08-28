const db = require('../data/db-config');

module.exports = {
    find,
    findById,
    findSteps,
    add
};

function find() {
    return db('schemes');
}

function findById(id) {
    return db('schemes').where({ id }).first();
}

function findSteps(scheme_id) {
    return db('steps as s')
        .join('schemes as c', 'c.id', 's.scheme_id')
        .select('s.id', 'c.scheme_name', 's.step_number', 's.instructions')
        .where({ scheme_id })
        .orderBy('s.step_number')
        
}

function add(schemeData) {
    return db('schemes').insert(schemeData)
        .then(ids => {
            return findById(ids[0])
        })
}

function update() {

}

function remove() {

}