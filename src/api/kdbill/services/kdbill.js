'use strict';

/**
 * kdbill service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::kdbill.kdbill');
