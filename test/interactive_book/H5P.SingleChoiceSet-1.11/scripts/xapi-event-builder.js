var H5P = H5P || {};
H5P.SingleChoiceSet = H5P.SingleChoiceSet || {};

H5P.SingleChoiceSet.XApiEventBuilder = (function ($, EventDispatcher) {
  /**
   * @typedef {object} LocalizedString
   * @property {string} en-US
   */

  /**
   * @class {H5P.SingleChoiceSet.XApiEventDefinitionBuilder}
   * @constructor
   */
  function XApiEventDefinitionBuilder() {
    EventDispatcher.call(this);
    /**
     * @property {object} attributes
     * @property {string} attributes.name
     * @property {string} attributes.description
     * @property {string} attributes.interactionType
     * @property {string} attributes.correctResponsesPattern
     * @property {object} attributes.optional
     */
    this.attributes = {};
  }

  XApiEventDefinitionBuilder.prototype = Object.create(EventDispatcher.prototype);
  XApiEventDefinitionBuilder.prototype.constructor = XApiEventDefinitionBuilder;


  /**
   * Sets name
   * @param {string} name
   * @return {XApiEventDefinitionBuilder}
   */
  XApiEventDefinitionBuilder.prototype.name = function (name) {
    this.attributes.name = name;
    return this;
  };

  /**
   * Question text and any additional information to generate the report.
   * @param {string} description
   * @return {XApiEventDefinitionBuilder}
   */
  XApiEventDefinitionBuilder.prototype.description = function (description) {
    this.attributes.description = description;
    return this;
  };

  /**
   * Type of the interaction.
   * @param {string} interactionType
   * @see {@link https://github.com/adlnet/xAPI-Spec/blob/master/xAPI-Data.md#interaction-types|xAPI Spec}
   * @return {XApiEventDefinitionBuilder}
   */
  XApiEventDefinitionBuilder.prototype.interactionType = function (interactionType) {
    this.attributes.interactionType = interactionType;
    return this;
  };

  /**
   * A pattern for determining the correct answers of the interaction
   * @param {string[]} correctResponsesPattern
   * @see {@link https://github.com/adlnet/xAPI-Spec/blob/master/xAPI-Data.md#response-patterns|xAPI Spec}
   * @return {XApiEventDefinitionBuilder}
   */
  XApiEventDefinitionBuilder.prototype.correctResponsesPattern = function (correctResponsesPattern) {
    this.attributes.correctResponsesPattern = correctResponsesPattern;
    return this;
  };

  /**
   * Sets optional attributes
   * @param {object} optional Can have one of the following configuration objects: choices, scale, source, target, steps
   * @return {XApiEventDefinitionBuilder}
   */
  XApiEventDefinitionBuilder.prototype.optional = function (optional) {
    this.attributes.optional = optional;
    return this;
  };

  /**
   * @return {object}
   */
  XApiEventDefinitionBuilder.prototype.build = function () {
    var definition = {};

    // sets attributes
    setAttribute(definition, 'name', localizeToEnUS(this.attributes.name));
    setAttribute(definition, 'description', localizeToEnUS(this.attributes.description));
    setAttribute(definition, 'interactionType', this.attributes.interactionType);
    setAttribute(definition, 'correctResponsesPattern', this.attributes.correctResponsesPattern);
    setAttribute(definition, 'type', 'http://adlnet.gov/expapi/activities/cmi.interaction');

    // adds the optional object to the definition
    if (this.attributes.optional) {
      $.extend(definition, this.attributes.optional);
    }

    return definition;
  };

  // -----------------------------------------------------

  /**
   *
   * @constructor
   */
  function XApiEventResultBuilder() {
    EventDispatcher.call(this);
    /**
     * @property {object} attributes
     * @property {string} attributes.completion
     * @property {boolean} attributes.success
     * @property {boolean} attributes.response
     * @property {number} attributes.rawScore
     * @property {number} attributes.maxScore
     */
    this.attributes = {};
  }

  XApiEventResultBuilder.prototype = Object.create(EventDispatcher.prototype);
  XApiEventResultBuilder.prototype.constructor = XApiEventResultBuilder;

  /**
   * @param {boolean} completion
   * @return {XApiEventResultBuilder}
   */
  XApiEventResultBuilder.prototype.completion = function (completion) {
    this.attributes.completion = completion;
    return this;
  };

  /**
   * @param {boolean} success
   * @return {XApiEventResultBuilder}
   */
  XApiEventResultBuilder.prototype.success = function (success) {
    this.attributes.success = success;
    return this;
  };

  /**
   * @param {number} duration The duraction in seconds
   * @return {XApiEventResultBuilder}
   */
  XApiEventResultBuilder.prototype.duration = function (duration) {
    this.attributes.duration = duration;
    return this;
  };

  /**
   * Sets response
   * @param {string|string[]} response
   * @return {XApiEventResultBuilder}
   */
  XApiEventResultBuilder.prototype.response = function (response) {
    this.attributes.response = (typeof response === 'string') ? response : response.join('[,]');
    return this;
  };

  /**
   * Sets the score, and max score
   * @param {number} score
   * @param {number} maxScore
   * @return {XApiEventResultBuilder}
   */
  XApiEventResultBuilder.prototype.score = function (score, maxScore) {
    this.attributes.rawScore = score;
    this.attributes.maxScore = maxScore;
    return this;
  };

  /**
   * Builds the result object
   * @return {object}
   */
  XApiEventResultBuilder.prototype.build = function () {
    var result = {};

    setAttribute(result, 'response', this.attributes.response);
    setAttribute(result, 'completion', this.attributes.completion);
    setAttribute(result, 'success', this.attributes.success);

    if (isDefined(this.attributes.duration)) {
      setAttribute(result, 'duration','PT' +  this.attributes.duration + 'S');
    }

    // sets score
    if (isDefined(this.attributes.rawScore)) {
      result.score = {};
      setAttribute(result.score, 'raw', this.attributes.rawScore);

      if (isDefined(this.attributes.maxScore) && this.attributes.maxScore > 0) {
        setAttribute(result.score, 'min', 0);
        setAttribute(result.score, 'max', this.attributes.maxScore);
        setAttribute(result.score, 'min', 0);
        setAttribute(result.score, 'scaled', Math.round(this.attributes.rawScore / this.attributes.maxScore * 10000) / 10000);
      }
    }

    return result;
  };

  // -----------------------------------------------------

  /**
   * @class {H5P.SingleChoiceSet.XApiEventBuilder}
   */
  function XApiEventBuilder() {
    EventDispatcher.call(this);
    /**
     * @property {object} attributes
     * @property {string} attributes.contentId
     * @property {string} attributes.subContentId
     */
    this.attributes = {};
  }

  XApiEventBuilder.prototype = Object.create(EventDispatcher.prototype);
  XApiEventBuilder.prototype.constructor = XApiEventBuilder;


  /**
   * @param {object} verb
   *
   * @public
   * @return {H5P.SingleChoiceSet.XApiEventBuilder}
   */
  XApiEventBuilder.prototype.verb = function (verb) {
    this.attributes.verb = verb;
    return this;
  };

  /**
   * @param {string} name
   * @param {string} mbox
   * @param {string} objectType
   *
   * @public
   * @return {H5P.SingleChoiceSet.XApiEventBuilder}
   */
  XApiEventBuilder.prototype.actor = function (name, mbox, objectType) {
    this.attributes.actor = {
      name: name,
      mbox: mbox,
      objectType: objectType
    };

    return this;
  };

  /**
   * Sets contentId
   * @param {string} contentId
   * @param {string} [subContentId]
   * @return {H5P.SingleChoiceSet.XApiEventBuilder}
   */
  XApiEventBuilder.prototype.contentId = function (contentId, subContentId) {
    this.attributes.contentId = contentId;
    this.attributes.subContentId = subContentId;
    return this;
  };

  /**
   * Sets parent in context
   *
   * @param {string} parentContentId
   * @param {string} [parentSubContentId]
   * @return {H5P.SingleChoiceSet.XApiEventBuilder}
   */
  XApiEventBuilder.prototype.context = function (parentContentId, parentSubContentId) {
    this.attributes.parentContentId = parentContentId;
    this.attributes.parentSubContentId = parentSubContentId;
    return this;
  };

  /**
   * @param {object} result
   *
   * @public
   * @return {H5P.SingleChoiceSet.XApiEventBuilder}
   */
  XApiEventBuilder.prototype.result = function (result) {
    this.attributes.result = result;
    return this;
  };

  /**
   * @param {object} objectDefinition
   *
   * @public
   * @return {H5P.SingleChoiceSet.XApiEventBuilder}
   */
  XApiEventBuilder.prototype.objectDefinition = function (objectDefinition) {
    this.attributes.objectDefinition = objectDefinition;
    return this;
  };

  /**
   * Returns the buildt event
   * @public
   * @return {H5P.XAPIEvent}
   */
  XApiEventBuilder.prototype.build = function () {
    var event = new H5P.XAPIEvent();

    event.setActor();
    event.setVerb(this.attributes.verb);

    // sets context
    if (this.attributes.parentContentId || this.attributes.parentSubContentId) {
      event.data.statement.context = {
        'contextActivities': {
          'parent': [
            {
              'id': getContentXAPIId(this.attributes.parentContentId, this.attributes.parentSubContentId),
              'objectType': "Activity"
            }
          ]
        }
      };
    }

    event.data.statement.object = {
      'id': getContentXAPIId(this.attributes.contentId, this.attributes.subContentId),
      'objectType': 'Activity'
    };

    setAttribute(event.data, 'actor', this.attributes.actor);
    setAttribute(event.data.statement, 'result', this.attributes.result);
    setAttribute(event.data.statement.object, 'definition', this.attributes.objectDefinition);

    // sets h5p specific attributes
    if (event.data.statement.object.definition && (this.attributes.contentId || this.attributes.subContentId)) {
      var extensions = event.data.statement.object.definition.extensions = {};
      setAttribute(extensions, 'http://h5p.org/x-api/h5p-local-content-id', this.attributes.contentId);
      setAttribute(extensions, 'http://h5p.org/x-api/h5p-subContentId', this.attributes.subContentId);
    }

    return event;
  };

  /**
   * Creates a Localized String object for en-US
   *
   * @param str
   * @return {LocalizedString}
   */
  var localizeToEnUS = function (str) {
    if (str != undefined) {
      return {
        'en-US': cleanString(str)
      };
    }
  };

  /**
   * Generates an id for the content
   * @param {string} contentId
   * @param {string} [subContentId]
   *
   * @see {@link https://github.com/h5p/h5p-php-library/blob/master/js/h5p-x-api-event.js#L240-L249}
   * @return {string}
   */
  var getContentXAPIId = function (contentId, subContentId) {
    if (contentId && H5PIntegration && H5PIntegration.contents) {
      var id =  H5PIntegration.contents['cid-' + contentId].url;

      if (subContentId) {
        id += '?subContentId=' +  subContentId;
      }

      return id;
    }
  };

  /**
   * Removes html elements from string
   *
   * @param {string} str
   * @return {string}
   */
  var cleanString = function (str) {
    return $('<div>' + str + '</div>').text().trim();
  };

  var isDefined = function (val) {
    return typeof val !== 'undefined';
  };

  function setAttribute(obj, key, value, required) {
    if (isDefined(value)) {
      obj[key] = value;
    }
    else if (required) {
      console.error("xApiEventBuilder: No value for [" + key + "] in", obj);
    }
  }

  /**
   * Creates a new XApiEventBuilder
   *
   * @public
   * @static
   * @return {H5P.SingleChoiceSet.XApiEventBuilder}
   */
  XApiEventBuilder.create = function () {
    return new XApiEventBuilder();
  };

  /**
   * Creates a new XApiEventDefinitionBuilder
   *
   * @public
   * @static
   * @return {XApiEventDefinitionBuilder}
   */
  XApiEventBuilder.createDefinition = function () {
    return new XApiEventDefinitionBuilder();
  };

  /**
   * Creates a new XApiEventDefinitionBuilder
   *
   * @public
   * @static
   * @return {XApiEventResultBuilder}
   */
  XApiEventBuilder.createResult = function () {
    return new XApiEventResultBuilder();
  };

  /**
   * Returns choice to be used with 'cmi.interaction' for Activity of type 'choice'
   *
   * @param {string} id
   * @param {string} description
   *
   * @public
   * @static
   * @see {@link https://github.com/adlnet/xAPI-Spec/blob/master/xAPI-Data.md#choice|xAPI-Spec}
   * @return {object}
   */
  XApiEventBuilder.createChoice = function (id, description) {
    return {
      id: id,
      description: localizeToEnUS(description)
    };
  };

  /**
   * Takes an array of correct ids, and joins them to a 'correct response pattern'
   *
   * @param {string[]} ids
   *
   * @public
   * @static
   * @see {@link https://github.com/adlnet/xAPI-Spec/blob/master/xAPI-Data.md#choice|xAPI-Spec}
   * @return {string}
   */
  XApiEventBuilder.createCorrectResponsePattern = function (ids) {
    return ids.join('[,]');
  };

  /**
   * Interaction types
   *
   * @readonly
   * @enum {String}
   */
  XApiEventBuilder.interactionTypes = {
    CHOICE: 'choice',
    COMPOUND: 'compound',
    FILL_IN: 'fill-in',
    MATCHING: 'matching',
    TRUE_FALSE: 'true-false'
  };

  /**
   * Verbs
   *
   * @readonly
   * @enum {String}
   */
  XApiEventBuilder.verbs = {
    ANSWERED: 'answered'
  };

  return XApiEventBuilder;
})(H5P.jQuery, H5P.EventDispatcher);
