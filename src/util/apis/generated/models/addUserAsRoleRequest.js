/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * Class representing a AddUserAsRoleRequest.
 */
class AddUserAsRoleRequest {
  /**
   * Create a AddUserAsRoleRequest.
   * @property {string} [role] The role of the user to be added. Possible
   * values include: 'admin', 'collaborator', 'member'
   */
  constructor() {
  }

  /**
   * Defines the metadata of AddUserAsRoleRequest
   *
   * @returns {object} metadata of AddUserAsRoleRequest
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'AddUserAsRoleRequest',
      type: {
        name: 'Composite',
        className: 'AddUserAsRoleRequest',
        modelProperties: {
          role: {
            required: false,
            serializedName: 'role',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = AddUserAsRoleRequest;