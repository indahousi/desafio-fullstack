package controllers

import "gateway/internal/modules/properties/services"

type PropertiesController struct {
	propertiesService services.PropertiesServicesImpl
}

func NewPropertiesController(
	propertiesService services.PropertiesServicesImpl,
) *PropertiesController {
	return &PropertiesController{propertiesService}
}
