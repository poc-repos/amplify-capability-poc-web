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