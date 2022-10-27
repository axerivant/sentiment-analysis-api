import Fastify from 'fastify'
import { determineSentiment } from './openai'

const app = Fastify()

app.post('/api', async (req: any, res) => {
	const phrase = req.body.phrase
	const result = await determineSentiment(phrase)
	return {
		result
	}
})

app.listen({ port: 8080 })
