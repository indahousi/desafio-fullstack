package controllers

import (
	"gateway/internal/modules/properties/dtos"
	"gateway/pkg/errors"
	"gateway/pkg/utils"

	"github.com/gofiber/fiber/v2"
)

//	@Description	Get details of property by id.
//	@Summary		Show property
//	@Tags			Properties
//	@Accept			json
//	@Produce		json
//	@Success		200	{object}	dtos.PropertyShowResponse
//	@Router			/properties/{id} [get]
func (ctrl *PropertiesController) Show(req *fiber.Ctx) error {
	params := dtos.PropertyShowRequest{}
	req.ParamsParser(&params)

	validate := utils.NewValidator()
	if err := validate.Struct(params); err != nil {
		return req.Status(fiber.StatusUnprocessableEntity).JSON(utils.ValidatorErrors(err))
	}

	response, err := ctrl.propertiesService.Show(params.Id)
	if err != nil {
		return errors.ErrorResponse(req, err)
	}

	return req.Status(fiber.StatusOK).JSON(response)
}
