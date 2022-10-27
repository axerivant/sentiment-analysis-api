import openai from './config'

export async function determineSentiment(phrase: string): Promise<string> {
	const prompt = `
	Classify the following phrase into either 'negative', 'positive' or 'neutral'.

	${phrase}
	`
	const result = await openai.createCompletion({
		model: 'text-curie-001',
		prompt: prompt,
		temperature: 0
	})

	const completionText = result.data.choices[0].text
	if (
		completionText !== 'negative' &&
		completionText !== 'positive' &&
		completionText !== 'neutral'
	) {
		return 'unclear'
	}
	const determinedSentiment = completionText
	return determinedSentiment
}
