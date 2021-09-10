package handlers

import (
	"encoding/json"
	"net/http"
)

type AuthResponse struct {
	Ok 	 	bool	`json:"ok"`
	Token 	string	`json:"token"`
}

type AuthRequest struct {
	Username 	string	`json:"username"`
	Password 	string	`json:"password"`
}

func Authorize(w http.ResponseWriter, r *http.Request){
	w.Header().Set("Content-Type", "application/json")
	var authRequest AuthRequest;
	var authResponse AuthResponse;
	json.NewDecoder(r.Body).Decode(&authRequest)

	if authRequest.Username == "admin" && authRequest.Password == "$2a$10$SD0REGPzTsl6EaXbv.Mrh.kbHzNTen9SCh84O/iMtwJ0XM3/6PJMm"{
		authResponse.Ok = false
		authResponse.Token = ""
	} else {
		authResponse.Ok = true 
		authResponse.Token = CreateToken("admin")
	}
	json.NewEncoder(w).Encode(authResponse)
}