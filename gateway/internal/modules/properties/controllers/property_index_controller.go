package controllers

import (
	"gateway/internal/modules/properties/dtos"
	"gateway/pkg/errors"
	"gateway/pkg/utils"

	"github.com/gofiber/fiber/v2"
)

//	@Description	List with pagination all properties.
//	@Summary		List properties
//	@Tags			Properties
//	@Accept			json
//	@Produce		json
//	@Param			limit	query		int		false	"limit"	minimum(1)	default(10)
//	@Param			page	query		int		false	"page"	minimum(1)	default(1)
//	@Success		200		{object}	dtos.PropertyIndexResponse
//	@Router			/properties [get]
func (ctrl *PropertiesController) Index(req *fiber.Ctx) error {
	params := dtos.PropertyIndexRequest{}
	req.QueryParser(&params)

	validate := utils.NewValidator()
	if err := validate.Struct(params); err != nil {
		return req.Status(fiber.StatusUnprocessableEntity).JSON(utils.ValidatorErrors(err))
	}

	response, err := ctrl.propertiesService.Index(&params)
	if err != nil {
		return errors.ErrorResponse(req, err)
	}

	return req.Status(fiber.StatusOK).JSON(response)
}
