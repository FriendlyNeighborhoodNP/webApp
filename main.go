package main

import (
	"fmt"
	"log"
	"net/http"
	"os"
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

	port := getPort()
	fmt.Println(port)

	router.PathPrefix("/").Handler(spa)
	srv := &http.Server{
		Handler: router,
		Addr: fmt.Sprintf(":%v", port),
		WriteTimeout: 15 * time.Second,
		ReadTimeout: 15 * time.Second,
	}
	
	log.Fatal(srv.ListenAndServe())
}

func getPort() string {
	port := os.Getenv("PORT"); 
	if port == "" {
		return "8000"
	} 
	return port
	
}