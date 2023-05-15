package properties

import (
	"gateway/internal/modules/properties/controllers"
	"gateway/internal/modules/properties/services"

	"github.com/gofiber/fiber/v2"
)

func PropertiesRoutes(app fiber.Router) {
	propertiesServices := services.NewPropertiesService()

	controller := controllers.NewPropertiesController(
		propertiesServices,
	)

	app.Get("/properties", controller.Index)
	app.Get("/properties/:id", controller.Show)
}
