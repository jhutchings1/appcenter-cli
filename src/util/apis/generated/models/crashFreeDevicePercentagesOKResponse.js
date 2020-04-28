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
 * Class representing a CrashFreeDevicePercentagesOKResponse.
 */
class CrashFreeDevicePercentagesOKResponse {
  /**
   * Create a CrashFreeDevicePercentagesOKResponse.
   * @property {number} [averagePercentage] Average percentage.
   * @property {array} [dailyPercentages] The crash-free percentage per day.
   */
  constructor() {
  }

  /**
   * Defines the metadata of CrashFreeDevicePercentagesOKResponse
   *
   * @returns {object} metadata of CrashFreeDevicePercentagesOKResponse
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'CrashFreeDevicePercentagesOKResponse',
      type: {
        name: 'Composite',
        className: 'CrashFreeDevicePercentagesOKResponse',
        modelProperties: {
          averagePercentage: {
            required: false,
            serializedName: 'average_percentage',
            type: {
              name: 'Number'
            }
          },
          dailyPercentages: {
            required: false,
            serializedName: 'daily_percentages',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'CrashFreeDevicePercentagesOKResponseDailyPercentagesItemElementType',
                  type: {
                    name: 'Composite',
                    className: 'CrashFreeDevicePercentagesOKResponseDailyPercentagesItem'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = CrashFreeDevicePercentagesOKResponse;