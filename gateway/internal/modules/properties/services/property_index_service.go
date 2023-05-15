package services

import (
	"gateway/internal/modules/properties/dtos"
	"gateway/pkg/client"
	"gateway/pkg/errors"
	"os"
	"strconv"
)

func (serv PropertiesService) Index(payload *dtos.PropertyIndexRequest) (*dtos.PropertyIndexResponse, error) {
	var (
		API_BASE_URL = os.Getenv("API_BASE_URL")
	)

	response, err := client.New().
		URL(API_BASE_URL).
		Params("limit", strconv.Itoa(payload.Limit)).
		Params("page", strconv.Itoa(payload.Page)).
		Get("/properties")
	if err != nil {
		return nil, errors.InternalServerError()
	}

	result := dtos.PropertyIndexResponse{}

	response.Decode(&result)

	for index, item := range *result.Items {
		(*result.Items)[index].MainPhoto = item.Gallery[0]
		(*result.Items)[index].Price = GenerateRandomPrice()
	}

	return &result, nil
}
