package handlers

import (
	"encoding/json"
	"net/http"

	"github.com/bmw2621/fnnp/db"
	"github.com/bmw2621/fnnp/models"
	"github.com/gorilla/mux"
)

// GetAppt handles API calls to get all appointments from the database
func GetAppt(w http.ResponseWriter, r *http.Request){
	w.Header().Set("Content-Type", "application/json")
	var appts []models.Appointment

	db.Db.Find(&appts)
	json.NewEncoder(w).Encode(appts)
}

// GetApptByID handles API calls to get a single appointment from the database
func GetApptByID(w http.ResponseWriter, r *http.Request){
	w.Header().Set("Content-Type", "application/json")
	params := mux.Vars(r)
	var appt models.Appointment;

	db.Db.First(&appt, params["id"])
	json.NewEncoder(w).Encode(appt)
}

// DeleteApptByID handles API calls to delete an appointment from the database
func DeleteApptByID(w http.ResponseWriter, r *http.Request){
	w.Header().Set("Content-Type", "application/json")
	params := mux.Vars(r)
	var appt models.Appointment
	db.Db.Delete(&appt, params["id"])
	json.NewEncoder(w).Encode(appt)
}

// UpdateApptByID handles API calls to update a record in the database
func UpdateApptByID(w http.ResponseWriter, r *http.Request){
	params := mux.Vars(r)
	var appt models.Appointment
	db.Db.First(&appt, params["id"])
	json.NewDecoder(r.Body).Decode(&appt)
	db.Db.Save(&appt)
	json.NewEncoder(w).Encode(appt)
}

// CreateAppt handles API calls to create a new appoint record in the database
func CreateAppt(w http.ResponseWriter, r *http.Request){
	w.Header().Set("Content-Type", "application/json")
	var appt models.Appointment
	json.NewDecoder(r.Body).Decode(&appt)
	db.Db.Create(&appt)
	json.NewEncoder(w).Encode(appt)
}