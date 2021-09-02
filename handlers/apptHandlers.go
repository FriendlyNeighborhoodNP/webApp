package handlers

import (
	"encoding/json"
	"net/http"
)

func GetAppt(w http.ResponseWriter, r *http.Request){
	json.NewEncoder(w).Encode(map[string]string{"method": "GetAppt"})
}

func GetApptByID(w http.ResponseWriter, r *http.Request){
	json.NewEncoder(w).Encode(map[string]string{"method": "GetApptByID"})
}

func DeleteApptByID(w http.ResponseWriter, r *http.Request){
	json.NewEncoder(w).Encode(map[string]string{"method": "DeleteApptByID"})
}

func UpdateApptByID(w http.ResponseWriter, r *http.Request){
	json.NewEncoder(w).Encode(map[string]string{"method": "UpdateApptByID"})
}

func CreateAppt(w http.ResponseWriter, r *http.Request){
	json.NewEncoder(w).Encode(map[string]string{"method": "CreateAppt"})
}