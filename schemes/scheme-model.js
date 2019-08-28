const db = require('../data/db-config');

module.exports = {
    find,
    findById
};

function find() {
    return db('schemes');
}

function findById(id) {
    return db('schemes').where({ id }).first();
}

function findSteps() {

}

function add() {

}

function update() {

}

function remove() {

}