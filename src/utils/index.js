import { Predictions } from '@aws-amplify/predictions';

export const getSentimentPrediction = async (textToInterpret) => {
    const sentiment = await Predictions.interpret({
        text: {
            source: {
                text: textToInterpret,
            },
            type: "ALL"
        }
    })
    return sentiment.textInterpretation.sentiment;
}

export const textTranslation = async (textToTranslate) => {
    const result = await Predictions.convert({
        translateText: {
          source: {
            text: textToTranslate,
            language : "auto" // defaults configured on aws-exports.js
            // supported languages https://docs.aws.amazon.com/translate/latest/dg/how-it-works.html#how-it-works-language-codes
          },
          targetLanguage: "en"
        }
      });
      return result;
}