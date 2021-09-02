package main

import (
	"log"
	"net/http"
	"time"

	"github.com/bmw2621/fnnp/handlers"
	"github.com/gorilla/mux"
)

func main() {
	initRouter()
}

func initRouter() {
	router := mux.NewRouter()	
	spa := spaHandler{staticPath: "./client/build", indexPath: "index.html"}
	
	for _, hdlr := range handlers.RouterHandlers {
		router.HandleFunc(hdlr.Endpoint, hdlr.Handler).Methods(hdlr.Method)
	}
	
	router.PathPrefix("/").Handler(spa)
	srv := &http.Server{
		Handler: router,
		Addr: ":8000",
		WriteTimeout: 15 * time.Second,
		ReadTimeout: 15 * time.Second,
	}
	
	log.Fatal(srv.ListenAndServe())
}