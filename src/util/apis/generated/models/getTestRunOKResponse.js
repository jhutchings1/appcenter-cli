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
 * @summary Test Run
  *
 * Summary single test run on Xamarin Test Cloud
 *
 */
class GetTestRunOKResponse {
  /**
   * Create a GetTestRunOKResponse.
   * @property {uuid} [id] The unique id of the test upload
   * @property {string} [date] The date and time the test was uploaded
   * @property {string} [appVersion] The compiled version of the app binary
   * @property {string} [testSeries] The name of the test series with which
   * this test upload is associated
   * @property {string} [platform] The device platform targeted by the test.
   * Possible values are 'ios' or 'android'
   * @property {string} [runStatus] The current status of the test run, in
   * relation to the various phases
   * @property {string} [resultStatus] The passed/failed state
   * @property {string} [state] Deprecated. Use runStatus instead.
   * @property {string} [status] Deprecated. Use resultStatus instead.
   * @property {string} [description] Human readable explanation of the current
   * test status
   * @property {object} [stats] Test Run Statistics. Summary single test run on
   * Xamarin Test Cloud
   * @property {number} [stats.devices] Number of devices running the test
   * @property {number} [stats.devicesFinished] Number of finished devices
   * @property {number} [stats.devicesFailed] Number of failed devices
   * @property {number} [stats.total] Number of tests in total
   * @property {number} [stats.passed] Number of passed tests
   * @property {number} [stats.failed] Number of failed tests
   * @property {number} [stats.skipped] Number of skipped tests
   * @property {number} [stats.peakMemory] The max amount of MB used during the
   * test run
   * @property {number} [stats.totalDeviceMinutes] The number of minutes of
   * device time the test has been runnign
   * @property {string} [testType] The name of the test framework used to run
   * this test
   */
  constructor() {
  }

  /**
   * Defines the metadata of GetTestRunOKResponse
   *
   * @returns {object} metadata of GetTestRunOKResponse
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'GetTestRunOKResponse',
      type: {
        name: 'Composite',
        className: 'GetTestRunOKResponse',
        modelProperties: {
          id: {
            required: false,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          date: {
            required: false,
            serializedName: 'date',
            type: {
              name: 'String'
            }
          },
          appVersion: {
            required: false,
            serializedName: 'appVersion',
            type: {
              name: 'String'
            }
          },
          testSeries: {
            required: false,
            serializedName: 'testSeries',
            type: {
              name: 'String'
            }
          },
          platform: {
            required: false,
            serializedName: 'platform',
            type: {
              name: 'String'
            }
          },
          runStatus: {
            required: false,
            serializedName: 'runStatus',
            type: {
              name: 'String'
            }
          },
          resultStatus: {
            required: false,
            serializedName: 'resultStatus',
            type: {
              name: 'String'
            }
          },
          state: {
            required: false,
            serializedName: 'state',
            type: {
              name: 'String'
            }
          },
          status: {
            required: false,
            serializedName: 'status',
            type: {
              name: 'String'
            }
          },
          description: {
            required: false,
            serializedName: 'description',
            type: {
              name: 'String'
            }
          },
          stats: {
            required: false,
            serializedName: 'stats',
            type: {
              name: 'Composite',
              className: 'GetTestRunOKResponseStats'
            }
          },
          testType: {
            required: false,
            serializedName: 'testType',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = GetTestRunOKResponse;