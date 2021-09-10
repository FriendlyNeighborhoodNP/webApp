package handlers

import (
	"fmt"
	"time"

	"github.com/golang-jwt/jwt"
)

var hmacSampleSecret = []byte("my_super-duper-secret_key")

func CreateToken(username string) string {
	token := jwt.NewWithClaims(jwt.SigningMethodHS256, jwt.MapClaims{
		"username": username,
		"nbf": time.Date(2021, 9, 1, 0, 0, 0, 0, time.UTC).Unix(),
		"exp": time.Now().Add(time.Minute * 30).Unix(), 
	})
	
	
	tokenString, err := token.SignedString(hmacSampleSecret)
	if err != nil {
		fmt.Printf("%v", err)

	}

	return tokenString
}

func ValidateToken(tokenString string) bool {
	token, err := jwt.Parse(tokenString, func(token *jwt.Token)(interface{}, error) {
		if _, ok := token.Method.(*jwt.SigningMethodHMAC); !ok {
			return nil, fmt.Errorf("Unexpected signing method: %v", token.Header["alg"])
		}
		return hmacSampleSecret, nil
	})
	if err != nil {
		return false
	}

	if _, ok := token.Claims.(jwt.MapClaims); ok && token.Valid {
		return true
	}
	return false
}