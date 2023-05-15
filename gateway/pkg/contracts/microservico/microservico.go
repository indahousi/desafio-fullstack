package microservico

type CategoryEnum string

const (
	STANDARD CategoryEnum = "STANDARD"
	PRIME    CategoryEnum = "PRIME"
	DUPLEX   CategoryEnum = "DUPLEX"
)

type Address struct {
	Country      string `json:"country"`
	State        string `json:"state"`
	City         string `json:"city"`
	Neighborhood string `json:"neighborhood"`
	Street       string `json:"street"`
	StreetNumber string `json:"streetNumber"`
	ZipCode      string `json:"zipCode"`
}

type Building struct {
	Name        string `json:"name"`
	Description string `json:"description"`
	Active      bool   `json:"active"`
}

type DineroObject struct {
	Amount    int    `json:"amount"`
	Currency  string `json:"currency"`
	Precision int    `json:"precision"`
}

type Fee struct {
	Name   string       `json:"name"`
	Amount DineroObject `json:"amount"`
}

type Price struct {
	GrossAmount DineroObject `json:"grossAmount"`
	NetAmount   DineroObject `json:"netAmount"`
	FeesAmount  DineroObject `json:"feesAmount"`
	Fees        []Fee        `json:"fees"`
}

type Property struct {
	Id            string       `json:"_id"`
	Name          string       `json:"name"`
	Area          int          `json:"area"`
	Guests        int          `json:"guests"`
	Bedrooms      int          `json:"bedrooms"`
	Beds          int          `json:"beds"`
	Bathrooms     int          `json:"bathrooms"`
	ParkingSpaces int          `json:"parkingSpaces"`
	RoomNumber    string       `json:"roomNumber"`
	Category      CategoryEnum `json:"category"`
	PetFriendly   bool         `json:"petFriendly"`
	Address       Address      `json:"address"`
	MainPhoto     string       `json:"mainPhoto"`
	Gallery       []string     `json:"gallery"`
	Active        bool         `json:"active"`
	Building      Building     `json:"building"`
	Price         Price        `json:"price"`
}
