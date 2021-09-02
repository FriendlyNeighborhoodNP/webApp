package models

import (
	"time"

	"gorm.io/gorm"
)

// Appointment struct models an appointment for ORM
type Appointment struct {
	gorm.Model
	Title 		string		`json:"title"`
	Location 	string		`json:"location"`
	Description	string 		`json:"description"`
	DateTime 	time.Time 	`json:"datetime"`
}