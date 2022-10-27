import { Configuration, OpenAIApi } from 'openai'
import * as dotenv from 'dotenv'
import path from 'path'

// load .env
dotenv.config({ path: path.resolve(__dirname, './.env') })

const config = new Configuration({
	apiKey: process.env.OPENAI
})

const openai = new OpenAIApi(config)
export default openai
