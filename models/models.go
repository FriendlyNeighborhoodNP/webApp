package models

import (
	"time"

	"gorm.io/gorm"
)

// Appointment struct models an appointment for ORM
type Appointment struct {
	gorm.Model
	Title 		string		`json:"title"`
	Lat		 	float32		`json:"lat"`
	Lon 		float32 	`json:"lon"`
	Description	string 		`json:"description"`
	DateTime 	time.Time 	`json:"datetime"`
}

// User struct models an user for ORM
type User struct {
	gorm.Model
	Username 	string		`json:"username"`
	Password	string		`json:"password"`
}