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
 * Class representing a TestGDPRHashFile.
 */
class TestGDPRHashFile {
  /**
   * Create a TestGDPRHashFile.
   * @property {uuid} [id]
   * @property {string} [filename]
   */
  constructor() {
  }

  /**
   * Defines the metadata of TestGDPRHashFile
   *
   * @returns {object} metadata of TestGDPRHashFile
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'TestGDPRHashFile',
      type: {
        name: 'Composite',
        className: 'TestGDPRHashFile',
        modelProperties: {
          id: {
            required: false,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          filename: {
            required: false,
            serializedName: 'filename',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = TestGDPRHashFile;
