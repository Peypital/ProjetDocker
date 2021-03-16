FROM golang

WORKDIR /go/project/front

COPY ["index.html", "main.go", "./"]
COPY public ./public

ENV PORT=3000

EXPOSE 3000

RUN go build main.go

CMD "./main"
