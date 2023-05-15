package main

import (
	"gateway/internal/middleware"
	"gateway/internal/routes"
	"gateway/pkg/configs"
	"gateway/pkg/utils"
	"os"

	"github.com/gofiber/fiber/v2"

	_ "gateway/swagger" // load API Docs files (Swagger) # to generate run: make swag

	_ "github.com/joho/godotenv/autoload" // load .env file automatically
)

// @title						Desafio FullStack - Gateway
func main() {
	// Define Fiber config.
	config := configs.FiberConfig()

	// Define a new Fiber app with config.
	app := fiber.New(config)

	// Middlewares.
	middleware.FiberMiddleware(app) // Register Fiber's middleware for app.

	// Routes.
	routes.SwaggerRoute(app)
	routes.ApiRoutes(app)
	routes.NotFoundRoute(app)

	// Start server (with or without graceful shutdown).
	if os.Getenv("STAGE_STATUS") == "dev" {
		utils.StartServer(app)
	} else {
		utils.StartServerWithGracefulShutdown(app)
	}
}
