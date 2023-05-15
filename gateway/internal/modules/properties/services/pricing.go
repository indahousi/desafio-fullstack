package services

import (
	"gateway/pkg/contracts/microservico"
	"math/rand"
	"time"
)

func GenerateRandomPrice() microservico.Price {
	rand.Seed(time.Now().UnixNano())

	price := microservico.Price{
		NetAmount: microservico.DineroObject{
			Amount:    rand.Intn(1000) * 1000,
			Currency:  "BRL",
			Precision: 2,
		},
		Fees: []microservico.Fee{
			{
				Name: "IPTU",
				Amount: microservico.DineroObject{
					Amount:    rand.Intn(1000) * 100,
					Currency:  "BRL",
					Precision: 2,
				},
			},
			{
				Name: "CONDOMINIO",
				Amount: microservico.DineroObject{
					Amount:    rand.Intn(1000) * 100,
					Currency:  "BRL",
					Precision: 2,
				},
			},
			{
				Name: "CONTASCONSUMO",
				Amount: microservico.DineroObject{
					Amount:    rand.Intn(1000) * 100,
					Currency:  "BRL",
					Precision: 2,
				},
			},
		},
	}

	price.FeesAmount.Precision = 2
	price.FeesAmount.Currency = "BRL"
	for _, fee := range price.Fees {
		price.FeesAmount.Amount = price.FeesAmount.Amount + fee.Amount.Amount
	}

	price.GrossAmount.Precision = 2
	price.GrossAmount.Currency = "BRL"
	price.GrossAmount.Amount = price.FeesAmount.Amount + price.NetAmount.Amount

	return price
}
