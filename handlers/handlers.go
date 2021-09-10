package handlers

import "net/http"

type Handler struct {
	Endpoint 	string
	Handler 	func(http.ResponseWriter, *http.Request)
	Method 		string
}

var RouterHandlers = []Handler{
	{Endpoint: "/api/appt", Handler: GetAppt, Method: "GET"},
	{Endpoint: "/api/appt/{id}", Handler: GetApptByID, Method: "GET"},
	{Endpoint: "/api/appt/{id}", Handler: DeleteApptByID, Method: "DELETE"},
	{Endpoint: "/api/appt/{id}", Handler: UpdateApptByID, Method: "PUT"},
	{Endpoint: "/api/appt", Handler: CreateAppt, Method: "POST"},
	{Endpoint: "/api/auth", Handler: Authorize, Method: "POST"},
} 