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
 * Class representing a ToolsetProjectsTestcloudProjectsItem.
 */
class ToolsetProjectsTestcloudProjectsItem {
  /**
   * Create a ToolsetProjectsTestcloudProjectsItem.
   * @property {string} path The path to the TestCloud project
   * @property {string} frameworkType Possible values include: 'Appium',
   * 'Calabash', 'Espresso', 'UITest', 'Generated'
   * @property {object} [frameworkProperties]
   * @property {array} [frameworkProperties.configurations]
   */
  constructor() {
  }

  /**
   * Defines the metadata of ToolsetProjectsTestcloudProjectsItem
   *
   * @returns {object} metadata of ToolsetProjectsTestcloudProjectsItem
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ToolsetProjects_testcloud_projectsItem',
      type: {
        name: 'Composite',
        className: 'ToolsetProjectsTestcloudProjectsItem',
        modelProperties: {
          path: {
            required: true,
            serializedName: 'path',
            type: {
              name: 'String'
            }
          },
          frameworkType: {
            required: true,
            serializedName: 'frameworkType',
            type: {
              name: 'String'
            }
          },
          frameworkProperties: {
            required: false,
            serializedName: 'frameworkProperties',
            type: {
              name: 'Composite',
              className: 'ToolsetProjectsTestcloudProjectsItemFrameworkProperties'
            }
          }
        }
      }
    };
  }
}

module.exports = ToolsetProjectsTestcloudProjectsItem;
