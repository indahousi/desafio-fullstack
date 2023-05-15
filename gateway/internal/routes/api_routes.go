package routes

import (
	"gateway/internal/modules/healthcheck"
	"gateway/internal/modules/properties"

	"github.com/gofiber/fiber/v2"
)

func ApiRoutes(app *fiber.App) {
	api := app.Group("")

	healthcheck.PublicRoutes(api)
	properties.PropertiesRoutes(api)
}
