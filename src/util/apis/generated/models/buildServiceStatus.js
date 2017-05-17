/*
 * Code generated by Microsoft (R) AutoRest Code Generator 0.17.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * @class
 * Initializes a new instance of the BuildServiceStatus class.
 * @constructor
 * @member {string} [status]
 * 
 * @member {string} [service]
 * 
 * @member {string} [message]
 * 
 * @member {string} [url]
 * 
 * @member {number} [validUntil]
 * 
 */
function BuildServiceStatus() {
}

/**
 * Defines the metadata of BuildServiceStatus
 *
 * @returns {object} metadata of BuildServiceStatus
 *
 */
BuildServiceStatus.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'BuildServiceStatus',
    type: {
      name: 'Composite',
      className: 'BuildServiceStatus',
      modelProperties: {
        status: {
          required: false,
          serializedName: 'status',
          type: {
            name: 'String'
          }
        },
        service: {
          required: false,
          serializedName: 'service',
          type: {
            name: 'String'
          }
        },
        message: {
          required: false,
          serializedName: 'message',
          type: {
            name: 'String'
          }
        },
        url: {
          required: false,
          serializedName: 'url',
          type: {
            name: 'String'
          }
        },
        validUntil: {
          required: false,
          serializedName: 'valid_until',
          type: {
            name: 'Number'
          }
        }
      }
    }
  };
};

module.exports = BuildServiceStatus;