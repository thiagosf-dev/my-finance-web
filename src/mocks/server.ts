import { setupServer } from "msw/node"
import { transactionHandlers } from "./handlers/transactions"

export const server = setupServer(...transactionHandlers)
