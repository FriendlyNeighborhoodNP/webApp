package db

import (
	"log"
	"os"

	"github.com/bmw2621/fnnp/models"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

// Db is the ORM database connection
var Db *gorm.DB
var err error

// InitializeDB initializes a connection to the database and runs an automigration
func InitializeDB() {
	Db, err = gorm.Open(postgres.Open(os.Getenv("DATABASE_URL")), &gorm.Config{})
	if err != nil {
		log.Fatal("Failed to connect to database")
	}

	Db.AutoMigrate(&models.Appointment{})
}