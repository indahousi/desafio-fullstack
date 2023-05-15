package services

import (
	"gateway/internal/modules/properties/dtos"
	"gateway/pkg/client"
	"gateway/pkg/errors"
	"os"
)

func (serv PropertiesService) Show(id string) (*dtos.PropertyShowResponse, error) {
	var (
		API_BASE_URL = os.Getenv("API_BASE_URL")
	)

	response, err := client.New().URL(API_BASE_URL).Get("/properties/" + id)
	if err != nil {
		return nil, errors.InternalServerError()
	}

	result := dtos.PropertyShowResponse{}

	response.Decode(&result)

	result.MainPhoto = result.Gallery[0]
	result.Price = GenerateRandomPrice()

	return &result, nil
}
