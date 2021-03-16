package main

import (
	"html/template"
	"net/http"
	"os"
)

type Page struct {
	Content string
}

var tpl = template.Must(template.ParseFiles("index.html"))


func indexHandler(w http.ResponseWriter, r *http.Request) {
	tpl.Execute(w, &Page{Content: "salut"})
}

func main() {
	port := os.Getenv("PORT")
	if port == "" {
		port = "3000"
	}

	mux := http.NewServeMux()

	mux.HandleFunc("/", indexHandler)
	mux.Handle("/public/", http.StripPrefix("/public/", http.FileServer(http.Dir("public"))))
	http.ListenAndServe(":"+port, mux)
}
