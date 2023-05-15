package dtos

import "gateway/pkg/contracts/microservico"

type PropertyIndexResponse struct {
	Items       *[]microservico.Property `json:"items"`
	TotalItems  int                      `json:"totalItems"`
	Limit       int                      `json:"limit"`
	TotalPages  int                      `json:"totalPages"`
	Page        int                      `json:"page"`
	HasPrevPage bool                     `json:"hasPrevPage"`
	HasNextPage bool                     `json:"hasNextPage"`
	PrevPage    int                      `json:"prevPage"`
	NextPage    int                      `json:"nextPage"`
}

type PropertyShowResponse struct {
	microservico.Property `json:",inline"`
}
