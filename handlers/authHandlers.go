package handlers

import (
	"encoding/json"
	"net/http"

	"github.com/bmw2621/fnnp/db"
	"github.com/bmw2621/fnnp/models"
)

type AuthResponse struct {
	Ok 	 	bool	`json:"ok"`
	Token 	string	`json:"token"`
}

// Authorize method checks for user in database and verifies password hash with that in database
func Authorize(w http.ResponseWriter, r *http.Request){
	w.Header().Set("Content-Type", "application/json")
	var authRequest models.User;
	var authResponse AuthResponse;
	json.NewDecoder(r.Body).Decode(&authRequest)

	var user models.User

	db.Db.Where("username = ?", authRequest.Username).First(&user)

	if authRequest.Password == user.Password{
		authResponse.Ok = false
		authResponse.Token = ""
	} else {
		authResponse.Ok = true 
		authResponse.Token = CreateToken(user.Username)
	}
	json.NewEncoder(w).Encode(authResponse)
}