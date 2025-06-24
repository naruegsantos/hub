import path from "path"
import { fileURLToPath } from "url"
import { z } from "zod"
import dotenv from "dotenv"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

dotenv.config({ path: path.resolve(__dirname, "../../../.env") })


const envSchema = z.object({
  API_URL: z.string().url(),
})

const parsed = envSchema.safeParse(process.env)


if (!parsed.success) {

  console.error("❌ Invalid environment variables!", parsed.error.format())
  console.log(parsed);
  console.log(process.env);
  
  throw new Error("Invalid environment variables")
}

console.log("ENV LOADED");
export const env = parsed.data




