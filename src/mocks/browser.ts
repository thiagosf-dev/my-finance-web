import { setupWorker } from "msw/browser"
import { transactionHandlers } from "./handlers/transactions"

export const worker = setupWorker(...transactionHandlers)
