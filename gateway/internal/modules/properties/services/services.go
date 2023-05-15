package services

import (
	"gateway/internal/modules/properties/dtos"
)

type PropertiesServicesImpl interface {
	Index(payload *dtos.PropertyIndexRequest) (*dtos.PropertyIndexResponse, error)
	Show(id string) (*dtos.PropertyShowResponse, error)
}

type PropertiesService struct {
}

func NewPropertiesService() PropertiesServicesImpl {
	return &PropertiesService{}
}
