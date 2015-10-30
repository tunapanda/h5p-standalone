var H5PUpgrades = H5PUpgrades || {};

H5PUpgrades['H5P.CoursePresentation'] = (function ($) {
  return {
    1: {
      2: function (parameters, finished) {
        // Allows overriding of buttons for subcontent.
        parameters.override = {
          overrideButtons: true,
          overrideShowSolutionButton: parameters.showSolutions === undefined ? true : parameters.showSolutions,
          overrideRetry: true
        };
        delete parameters.showSolutions;

        var i, j, slide;

        // Determine if keywords has been removed
        var keywordsRemoved = true;
        for (i = 0; i < parameters.slides.length; i++) {
          slide = parameters.slides[i];
          if (keywordsRemoved && slide.keywords !== undefined) {
            keywordsRemoved = false;
            break;
          }
        }

        if (!keywordsRemoved) {
          // Move and resize elements
          for (i = 0; i < parameters.slides.length; i++) {
            slide = parameters.slides[i];

            if (slide.elements !== undefined) {
              for (j = 0; j < slide.elements.length; j++) {
                var element = slide.elements[j];

                element.x += 31.25;
                element.width *= 0.6875;
              }
            }
          }
        }

        // Move slides inside presentation wrapper.
        parameters.presentation = {
          slides: parameters.slides,
          keywordListEnabled: !keywordsRemoved,
          keywordListAlwaysShow: true,
          keywordListAutoHide: false,
          keywordListOpacity: 90
        };
        delete parameters.slides;
        finished(null, parameters);
      },
      3: function (parameters, finished) {
        delete parameters.l10n.goHome;
        delete parameters.l10n.scrollLeft;
        delete parameters.l10n.jumpToSlide;
        delete parameters.l10n.scrollRight;
        delete parameters.l10n.goToSlide;

        parameters.l10n.fullscreen = 'fullscreen';
        parameters.l10n.exitFullscreen = 'Exit fullscreen';
        parameters.l10n.prevSlide = 'Previous slide';
        parameters.l10n.nextSlide = 'Next slide';
        parameters.l10n.currentSlide = 'Current slide';
        parameters.l10n.lastSlide = 'Last slide';
        parameters.l10n.solutionModeTitle = 'Exit solution mode';
        parameters.l10n.solutionModeText = 'Solution Mode:';
        parameters.l10n.solutionModeUnderlined = 'Close';
        parameters.l10n.summaryMultipleTaskText = 'Text when multiple tasks on a page';
        parameters.l10n.scoreMessage = 'You achieved:';
        parameters.l10n.shareFacebook = 'Share on Facebook';
        parameters.l10n.shareTwitter = 'Share on Twitter';

        finished(null, parameters);
      },
      4: function (parameters, finished) {
        var slides = parameters.presentation.slides;
        for (var i = 0; i < slides.length; i++) {
          if (slides[i].elements !== undefined) {
            for (var j = 0; j < slides[i].elements.length; j++) {
              if (slides[i].elements[j].action && slides[i].elements[j].action.subContentId === undefined) {
                // NOTE: We avoid using H5P.createUUID since this is an upgrade script and H5P function may change in the
                // future
                slides[i].elements[j].action.subContentId = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (char) {
                  var random = Math.random()*16|0, newChar = char === 'x' ? random : (random&0x3|0x8);
                  return newChar.toString(16);
                });
              }
            }
          }
        }
        finished(null, parameters);
      },
      /**
       * Asynchronous content upgrade hook.
       * Upgrades content parameters to support CP 1.5.
       *
       * Converts H5P.Text elements into H5P.AdvancedText. This is to support
       * more styling options for text.
       *
       * @params {Object} parameters
       * @params {function} finished
       */
      5: function (parameters, finished) {
        var slides = parameters.presentation.slides;

        // Go through slides and elements
        for (var i = 0; i < slides.length; i++) {
          if (slides[i].elements !== undefined) {
            for (var j = 0; j < slides[i].elements.length; j++) {
              var element = slides[i].elements[j];

              // Check if element type is text
              if (element.action && element.action.library &&
                  element.action.library.split(' ')[0] === 'H5P.Text') {
                element.action.library = 'H5P.AdvancedText 1.0';
              }
            }
          }
        }

        // Done
        finished(null, parameters);
      },

      /**
       * Increases width of H5P.AdvancedText to make old content keep proper dimensions.
       *
       * @param parameters
       * @param finished
       */
      6: function (parameters, finished) {
        var slides = parameters.presentation.slides;

        // Go through slides and elements
        for (var i = 0; i < slides.length; i++) {
          if (slides[i].elements !== undefined) {
            for (var j = 0; j < slides[i].elements.length; j++) {
              var element = slides[i].elements[j];

              // Check if element type is text
              if (element.action && element.action.library &&
                  (element.action.library.split(' ')[0] === 'H5P.AdvancedText' ||
                    element.action.library.split(' ')[0] === 'H5P.ContinuousText'
                  )) {
                element.width += 1.7;
                element.height += 3;
              }
            }
          }
        }

        // Done
        finished(null, parameters);
      }
    }
  };
})(H5P.jQuery);
