'use strict';

/**
 * comeback service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::comeback.comeback');
