package utils

import (
	"fmt"
	"os"
)

// ConnectionURLBuilder func for building URL connection.
// All apps configured:
// "fiber"
func ConnectionURLBuilder(app string) (string, error) {
	// Define URL to connection.
	var url string

	// Switch given names.
	switch app {
	case "fiber":
		// URL for Fiber connection.
		url = fmt.Sprintf(
			"%s:%s",
			os.Getenv("SERVER_HOST"),
			os.Getenv("SERVER_PORT"),
		)
	default:
		// Return error message.
		return "", fmt.Errorf("connection name '%v' is not supported", app)
	}

	// Return connection URL.
	return url, nil
}
