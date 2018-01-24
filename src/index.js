/**
 * @typedef {Object} NormalizedResponse
 * @property {string} raw - The input
 * @property {string} normalized - Normalization of the input
 */

/**
 * @param {string} res
 * @returns {NormalizedResponse}
 */
var normalizeFormResponse = function(res) {
  var normalized;

  var corrected = res.toLowerCase().trim();

  if (corrected.match(/(female)|woman/g)) {
    normalized = "Woman";
  } else if (/(male)|(man)/g) {
    normalized = "Man";
  } else {
    normalized = "Other"
  }

  return { raw: res, normalized: normalized };
};

/**
 * A function for normalizing gender form information
 * @param {string[]} responses - The iterable collection of responses
 * @returns {NormalizedResponse[]}
 */
module.exports = function(data) {
  return data
    .map(normalizeFormResponse);
}

module.exports._normalizeFormResponse = normalizeFormResponse;

