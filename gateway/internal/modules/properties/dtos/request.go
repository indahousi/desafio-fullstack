package dtos

type PropertyIndexRequest struct {
	Limit int `json:"limit"`
	Page  int `json:"page"`
}

type PropertyShowRequest struct {
	Id string `json:"id" validate:"required"`
}
