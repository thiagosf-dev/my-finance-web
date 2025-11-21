import { delay, HttpResponse, http } from "msw"
import type { Transaction } from "@/domain/entities/Transaction"

const mockTransactions: Transaction[] = [
  {
    id: "1",
    description: "Salário",
    amount: 5000,
    type: "INCOME",
    createdAt: new Date().toISOString(),
  },
  {
    id: "2",
    description: "Aluguel",
    amount: -1800,
    type: "EXPENSE",
    createdAt: new Date().toISOString(),
  },
]

export const transactionHandlers = [
  http.get("/transactions", async () => {
    await delay(400)
    return HttpResponse.json(mockTransactions, { status: 200 })
  }),
]
