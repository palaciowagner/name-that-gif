import {Rhum} from "./deps.ts";
import startServer from './server.ts'

Rhum.testPlan("server.ts", () => {
    Rhum.testSuite("startServer", () => {
        Rhum.testCase("should return the server", async () => {
            const result = await startServer()
            Rhum.asserts.assertEquals(result !== undefined, true)
            result.close()
        })
    })
})

Rhum.run()