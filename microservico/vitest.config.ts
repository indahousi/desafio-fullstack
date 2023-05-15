import { defineConfig } from 'vitest/config'

export default defineConfig({
    test: {
        include: ["tests/**/*.{spec,test}.ts"],
        coverage: {
            reportsDirectory: 'coverage',
            reporter: ["lcov", "json"],
            provider: "c8"
        },
    testTimeout: 10000
    }
})
