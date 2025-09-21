IMAGE_NAME=react-app
CONTAINER_NAME=react-container
PORT=3000

build:
	docker build -t $(IMAGE_NAME) .

run:
	docker run -d --name $(CONTAINER_NAME) -p $(PORT):80 $(IMAGE_NAME)

stop:
	docker stop $(CONTAINER_NAME) || true
	docker rm $(CONTAINER_NAME) || true


publish:
	npm run build
	npx gh-pages -d dist