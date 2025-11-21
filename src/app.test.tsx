import { render } from "@testing-library/react"
import { App } from "@/app"

describe("App", () => {
  it("renders Hello and World headings", () => {
    render(<App />)
  })
})
